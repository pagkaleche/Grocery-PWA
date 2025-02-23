import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, setDoc, doc, getDocs } from 'firebase/firestore';
import { renderList, createGroceryList, registerUser, loginUser } from './groceryApp.js';
import { updateDoc } from 'firebase/firestore';

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  onAuthStateChanged: jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: jest.fn(),
  addDoc: jest.fn(),
  setDoc: jest.fn(),
  doc: jest.fn(),
  getDocs: jest.fn(),
}));

describe('Grocery App', () => {
  const userMock = {
    uid: 'user123',
    email: 'testuser@example.com',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should register a user successfully', async () => {
    createUserWithEmailAndPassword.mockResolvedValueOnce({ user: userMock });
    const email = 'testuser@example.com';
    const password = 'password123';

    await registerUser(email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
    expect(setDoc).toHaveBeenCalledWith(doc(db, 'users', userMock.uid), {
      email: userMock.email,
      createdAt: expect.any(Date),
    });
  });

  test('should handle login errors correctly', async () => {
    const errorMessage = 'Invalid credentials';
    signInWithEmailAndPassword.mockRejectedValueOnce(new Error(errorMessage));
    
    const email = 'wronguser@example.com';
    const password = 'wrongpassword';

    await loginUser(email, password);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  test('should add an item to grocery list', async () => {
    const listText = 'Milk';
    const listCategory = 'dairy';

    addDoc.mockResolvedValueOnce({ id: 'item123' });

    await createGroceryList(userMock.uid, [{ name: listText, category: listCategory, completed: false }]);

    expect(addDoc).toHaveBeenCalledWith(collection(db, 'groceries', userMock.uid, 'list'), {
      name: listText,
      category: listCategory,
      completed: false,
    });
  });

  test('should render grocery list items correctly', async () => {
    const mockItems = [
      { id: 'item123', name: 'Milk', category: 'dairy', completed: false },
      { id: 'item124', name: 'Bread', category: 'snacks', completed: false },
    ];

    getDocs.mockResolvedValueOnce({
      docs: mockItems.map(item => ({ id: item.id, data: () => item })),
    });

    await renderList(userMock.uid);
  });

  test('should mark item as completed', async () => {
    const itemId = 'item123';
    const itemText = 'Milk';

    await fireEvent.click(screen.getByText(itemText));

    expect(updateDoc).toHaveBeenCalledWith(doc(db, 'groceries', userMock.uid, 'list', itemId), {
      completed: true,
    });
  });
});

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Wi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},sl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],c=n[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,c=u?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,_=o>>2,A=(o&3)<<4|c>>4;let C=(c&15)<<2|f>>6,P=f&63;h||(P=64,u||(C=64)),r.push(e[_],e[A],e[C],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ko(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):sl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||A==null)throw new il;const C=o<<2|c>>4;if(r.push(C),f!==64){const P=c<<4&240|f>>2;if(r.push(P),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class il extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ol=function(n){const t=Ko(n);return Wo.encodeByteArray(t,!0)},Wn=function(n){return ol(n).replace(/\./g,"")},al=function(n){try{return Wo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=()=>ul().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof Wi>"u")return;const n=Wi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&al(n[1]);return t&&JSON.parse(t)},Es=()=>{try{return ll()||cl()||hl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dl=n=>{var t,e;return(e=(t=Es())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},fl=n=>{const t=dl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Qo=()=>{var n;return(n=Es())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wn(JSON.stringify(e)),Wn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _l(){var n;const t=(n=Es())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yl(){return!_l()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function El(){try{return typeof indexedDB=="object"}catch{return!1}}function Tl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="FirebaseError";class Pe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Il,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?vl(o,r):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new Pe(i,c,r)}}function vl(n,t){return n.replace(Al,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Al=/\{\$([^}]+)}/g;function Zr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Qi(o)&&Qi(u)){if(!Zr(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Qi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){return n&&n._delegate?n._delegate:n}class sn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ml;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Cl(t))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=se){return this.instances.has(t)}getOptions(t=se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=se){return this.component?this.component.multipleInstances?t:se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(n){return n===se?void 0:n}function Cl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Pl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Vl=j.INFO,bl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Dl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=bl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xo{constructor(t){this.name=t,this._logLevel=Vl,this._logHandler=Dl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const kl=(n,t)=>t.some(e=>n instanceof e);let Hi,Xi;function Nl(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return Xi||(Xi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yo=new WeakMap,ts=new WeakMap,Jo=new WeakMap,Gr=new WeakMap,Ts=new WeakMap;function Ml(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e($t(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Yo.set(e,n)}).catch(()=>{}),Ts.set(t,n),t}function Ol(n){if(ts.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});ts.set(n,t)}let es={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ts.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Jo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ll(n){es=n(es)}function Fl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Kr(this),t,...e);return Jo.set(r,t.sort?t.sort():[t]),$t(r)}:xl().includes(n)?function(...t){return n.apply(Kr(this),t),$t(Yo.get(this))}:function(...t){return $t(n.apply(Kr(this),t))}}function Ul(n){return typeof n=="function"?Fl(n):(n instanceof IDBTransaction&&Ol(n),kl(n,Nl())?new Proxy(n,es):n)}function $t(n){if(n instanceof IDBRequest)return Ml(n);if(Gr.has(n))return Gr.get(n);const t=Ul(n);return t!==n&&(Gr.set(n,t),Ts.set(t,n)),t}const Kr=n=>Ts.get(n);function Bl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),c=$t(u);return r&&u.addEventListener("upgradeneeded",h=>{r($t(u.result),h.oldVersion,h.newVersion,$t(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const ql=["get","getKey","getAll","getAllKeys","count"],jl=["put","add","delete","clear"],Wr=new Map;function Yi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Wr.get(t))return Wr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=jl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ql.includes(e)))return;const o=async function(u,...c){const h=this.transaction(u,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&h.done]))[0]};return Wr.set(t,o),o}Ll(n=>({...n,get:(t,e,r)=>Yi(t,e)||n.get(t,e,r),has:(t,e)=>!!Yi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if($l(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function $l(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ns="@firebase/app",Ji="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Xo("@firebase/app"),Gl="@firebase/app-compat",Kl="@firebase/analytics-compat",Wl="@firebase/analytics",Ql="@firebase/app-check-compat",Hl="@firebase/app-check",Xl="@firebase/auth",Yl="@firebase/auth-compat",Jl="@firebase/database",Zl="@firebase/data-connect",tc="@firebase/database-compat",ec="@firebase/functions",nc="@firebase/functions-compat",rc="@firebase/installations",sc="@firebase/installations-compat",ic="@firebase/messaging",oc="@firebase/messaging-compat",ac="@firebase/performance",uc="@firebase/performance-compat",lc="@firebase/remote-config",cc="@firebase/remote-config-compat",hc="@firebase/storage",dc="@firebase/storage-compat",fc="@firebase/firestore",mc="@firebase/vertexai",pc="@firebase/firestore-compat",gc="firebase",_c="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]",yc={[ns]:"fire-core",[Gl]:"fire-core-compat",[Wl]:"fire-analytics",[Kl]:"fire-analytics-compat",[Hl]:"fire-app-check",[Ql]:"fire-app-check-compat",[Xl]:"fire-auth",[Yl]:"fire-auth-compat",[Jl]:"fire-rtdb",[Zl]:"fire-data-connect",[tc]:"fire-rtdb-compat",[ec]:"fire-fn",[nc]:"fire-fn-compat",[rc]:"fire-iid",[sc]:"fire-iid-compat",[ic]:"fire-fcm",[oc]:"fire-fcm-compat",[ac]:"fire-perf",[uc]:"fire-perf-compat",[lc]:"fire-rc",[cc]:"fire-rc-compat",[hc]:"fire-gcs",[dc]:"fire-gcs-compat",[fc]:"fire-fst",[pc]:"fire-fst-compat",[mc]:"fire-vertex","fire-js":"fire-js",[gc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Map,Ec=new Map,ss=new Map;function Zi(n,t){try{n.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Hn(n){const t=n.name;if(ss.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;ss.set(t,n);for(const e of Qn.values())Zi(e,n);for(const e of Ec.values())Zi(e,n);return!0}function Tc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new Ho("app","Firebase",Ic);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=_c;function Zo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(e||(e=Qo()),!e)throw Gt.create("no-options");const o=Qn.get(i);if(o){if(Zr(e,o.options)&&Zr(r,o.config))return o;throw Gt.create("duplicate-app",{appName:i})}const u=new Sl(i);for(const h of ss.values())u.addComponent(h);const c=new vc(e,r,u);return Qn.set(i,c),c}function wc(n=rs){const t=Qn.get(n);if(!t&&n===rs&&Qo())return Zo();if(!t)throw Gt.create("no-app",{appName:n});return t}function Ee(n,t,e){var r;let i=(r=yc[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}Hn(new sn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="firebase-heartbeat-database",Cc=1,on="firebase-heartbeat-store";let Qr=null;function ta(){return Qr||(Qr=Bl(Rc,Cc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(on)}catch(e){console.warn(e)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),Qr}async function Sc(n){try{const e=(await ta()).transaction(on),r=await e.objectStore(on).get(ea(n));return await e.done,r}catch(t){if(t instanceof Pe)Ot.warn(t.message);else{const e=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(e.message)}}}async function to(n,t){try{const r=(await ta()).transaction(on,"readwrite");await r.objectStore(on).put(t,ea(n)),await r.done}catch(e){if(e instanceof Pe)Ot.warn(e.message);else{const r=Gt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(r.message)}}}function ea(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=1024,Vc=30*24*60*60*1e3;class bc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new kc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=eo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Vc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eo(),{heartbeatsToSend:r,unsentEntries:i}=Dc(this._heartbeatsCache.heartbeats),o=Wn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ot.warn(e),""}}}function eo(){return new Date().toISOString().substring(0,10)}function Dc(n,t=Pc){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),no(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),no(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class kc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return El()?Tl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return to(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return to(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function no(n){return Wn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){Hn(new sn("platform-logger",t=>new zl(t),"PRIVATE")),Hn(new sn("heartbeat",t=>new bc(t),"PRIVATE")),Ee(ns,Ji,n),Ee(ns,Ji,"esm2017"),Ee("fire-js","")}Nc("");var xc="firebase",Mc="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(xc,Mc,"app");var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,na;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(y,E,v){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],E=T.g[2];var v=T.g[3],p=m+(v^g&(E^v))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=v+(E^m&(g^E))+y[1]+3905402710&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(g^v&(m^g))+y[2]+606105819&4294967295,E=v+(p<<17&4294967295|p>>>15),p=g+(m^E&(v^m))+y[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(v^g&(E^v))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=v+(E^m&(g^E))+y[5]+1200080426&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(g^v&(m^g))+y[6]+2821735955&4294967295,E=v+(p<<17&4294967295|p>>>15),p=g+(m^E&(v^m))+y[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(v^g&(E^v))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=v+(E^m&(g^E))+y[9]+2336552879&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(g^v&(m^g))+y[10]+4294925233&4294967295,E=v+(p<<17&4294967295|p>>>15),p=g+(m^E&(v^m))+y[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(v^g&(E^v))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=v+(E^m&(g^E))+y[13]+4254626195&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(g^v&(m^g))+y[14]+2792965006&4294967295,E=v+(p<<17&4294967295|p>>>15),p=g+(m^E&(v^m))+y[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(E^v&(g^E))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=v+(g^E&(m^g))+y[6]+3225465664&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(v^m))+y[11]+643717713&4294967295,E=v+(p<<14&4294967295|p>>>18),p=g+(v^m&(E^v))+y[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^v&(g^E))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=v+(g^E&(m^g))+y[10]+38016083&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(v^m))+y[15]+3634488961&4294967295,E=v+(p<<14&4294967295|p>>>18),p=g+(v^m&(E^v))+y[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^v&(g^E))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=v+(g^E&(m^g))+y[14]+3275163606&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(v^m))+y[3]+4107603335&4294967295,E=v+(p<<14&4294967295|p>>>18),p=g+(v^m&(E^v))+y[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^v&(g^E))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=v+(g^E&(m^g))+y[2]+4243563512&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(v^m))+y[7]+1735328473&4294967295,E=v+(p<<14&4294967295|p>>>18),p=g+(v^m&(E^v))+y[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(g^E^v)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=v+(m^g^E)+y[8]+2272392833&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^g)+y[11]+1839030562&4294967295,E=v+(p<<16&4294967295|p>>>16),p=g+(E^v^m)+y[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^v)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=v+(m^g^E)+y[4]+1272893353&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^g)+y[7]+4139469664&4294967295,E=v+(p<<16&4294967295|p>>>16),p=g+(E^v^m)+y[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^v)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=v+(m^g^E)+y[0]+3936430074&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^g)+y[3]+3572445317&4294967295,E=v+(p<<16&4294967295|p>>>16),p=g+(E^v^m)+y[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^v)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=v+(m^g^E)+y[12]+3873151461&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^g)+y[15]+530742520&4294967295,E=v+(p<<16&4294967295|p>>>16),p=g+(E^v^m)+y[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(E^(g|~v))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=v+(g^(m|~E))+y[7]+1126891415&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~g))+y[14]+2878612391&4294967295,E=v+(p<<15&4294967295|p>>>17),p=g+(v^(E|~m))+y[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~v))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=v+(g^(m|~E))+y[3]+2399980690&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~g))+y[10]+4293915773&4294967295,E=v+(p<<15&4294967295|p>>>17),p=g+(v^(E|~m))+y[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~v))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=v+(g^(m|~E))+y[15]+4264355552&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~g))+y[6]+2734768916&4294967295,E=v+(p<<15&4294967295|p>>>17),p=g+(v^(E|~m))+y[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~v))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=v+(g^(m|~E))+y[11]+3174756917&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~g))+y[2]+718787259&4294967295,E=v+(p<<15&4294967295|p>>>17),p=g+(v^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,y=this.B,E=this.h,v=0;v<m;){if(E==0)for(;v<=g;)i(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(y[E++]=T.charCodeAt(v++),E==this.blockSize){i(this,y),E=0;break}}else for(;v<m;)if(y[E++]=T[v++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)T[g++]=this.g[m]>>>y&255;return T};function o(T,m){var g=c;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function u(T,m){this.h=m;for(var g=[],y=!0,E=T.length-1;0<=E;E--){var v=T[E]|0;y&&v==m||(g[E]=v,y=!1)}this.g=g}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return D(f(-T));for(var m=[],g=1,y=0;T>=g;y++)m[y]=T/g|0,g*=4294967296;return new u(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var v=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+v),m);8>v?(v=f(Math.pow(m,v)),y=y.j(v).add(f(p))):(y=y.j(g),y=y.add(f(p)))}return y}var A=h(0),C=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(x(this))return-D(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(x(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),g=this,y="";;){var E=st(g,m).g;g=G(g,E.j(m));var v=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=E,k(g))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=G(this,T),x(T)?-1:k(T)?0:1};function D(T){for(var m=T.g.length,g=[],y=0;y<m;y++)g[y]=~T.g[y];return new u(g,~T.h).add(C)}n.abs=function(){return x(this)?D(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0,E=0;E<=m;E++){var v=y+(this.i(E)&65535)+(T.i(E)&65535),p=(v>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,v&=65535,p&=65535,g[E]=p<<16|v}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(D(m))}n.j=function(T){if(k(this)||k(T))return A;if(x(this))return x(T)?D(this).j(D(T)):D(D(this).j(T));if(x(T))return D(this.j(D(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var v=this.i(y)>>>16,p=this.i(y)&65535,kt=T.i(E)>>>16,Ne=T.i(E)&65535;g[2*y+2*E]+=p*Ne,K(g,2*y+2*E),g[2*y+2*E+1]+=v*Ne,K(g,2*y+2*E+1),g[2*y+2*E+1]+=p*kt,K(g,2*y+2*E+1),g[2*y+2*E+2]+=v*kt,K(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function K(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function W(T,m){this.g=T,this.h=m}function st(T,m){if(k(m))throw Error("division by zero");if(k(T))return new W(A,A);if(x(T))return m=st(D(T),m),new W(D(m.g),D(m.h));if(x(m))return m=st(T,D(m)),new W(D(m.g),m.h);if(30<T.g.length){if(x(T)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=C,y=m;0>=y.l(T);)g=Dt(g),y=Dt(y);var E=ot(g,1),v=ot(y,1);for(y=ot(y,2),g=ot(g,2);!k(y);){var p=v.add(y);0>=p.l(T)&&(E=E.add(g),v=p),y=ot(y,1),g=ot(g,1)}return m=G(T,E.j(m)),new W(E,m)}for(E=A;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=f(g),p=v.j(m);x(p)||0<p.l(T);)g-=y,v=f(g),p=v.j(m);k(v)&&(v=C),E=E.add(v),T=G(T,p)}return new W(E,T)}n.A=function(T){return st(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&T.i(y);return new u(g,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|T.i(y);return new u(g,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^T.i(y);return new u(g,this.h^T.h)};function Dt(T){for(var m=T.g.length+1,g=[],y=0;y<m;y++)g[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(g,T.h)}function ot(T,m){var g=m>>5;m%=32;for(var y=T.g.length-g,E=[],v=0;v<y;v++)E[v]=0<m?T.i(v+g)>>>m|T.i(v+g+1)<<32-m:T.i(v+g);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,na=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Kt=u}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});var Mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,Xe,sa,qn,is,ia,oa,aa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mn=="object"&&Mn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in l))break t;l=l[I]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,I={next:function(){if(!d&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function C(s,a,l){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,C.apply(null,arguments)}function P(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,I,w){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return a.prototype[I].apply(d,V)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=s.length||0,w=d.length||0;s.length=I+w;for(let V=0;V<w;V++)s[I+V]=d[V]}else s.push(d)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function st(s){return st[" "](s),s}st[" "]=function(){};var Dt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ot(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)s[l]=d[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function v(s){c.setTimeout(()=>{throw s},0)}function p(){var s=Ir;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const d=Ne.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Ne=new G(()=>new Au,s=>s.reset());class Au{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,Me=!1,Ir=new kt,Ws=()=>{const s=c.Promise.resolve(void 0);xe=()=>{s.then(wu)}};var wu=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){v(l)}var a=Ne;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Me=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Ru=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Oe(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Dt){t:{try{st(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Cu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Oe.aa.h.call(this)}}k(Oe,ht);var Cu={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),Su=0;function Pu(s,a,l,d,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++Su,this.da=this.fa=!1}function _n(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function yn(s){this.src=s,this.g={},this.h=0}yn.prototype.add=function(s,a,l,d,I){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var V=Ar(s,a,d,I);return-1<V?(a=s[V],l||(a.fa=!1)):(a=new Pu(a,this.src,w,!!d,I),a.fa=l,s.push(a)),a};function vr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],I=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(d,I,1),w&&(_n(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ar(s,a,l,d){for(var I=0;I<s.length;++I){var w=s[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return I}return-1}var wr="closure_lm_"+(1e6*Math.random()|0),Rr={};function Qs(s,a,l,d,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Qs(s,a[w],l,d,I);return null}return l=Ys(l),s&&s[gn]?s.K(a,l,f(d)?!!d.capture:!1,I):Vu(s,a,l,!1,d,I)}function Vu(s,a,l,d,I,w){if(!a)throw Error("Invalid event type");var V=f(I)?!!I.capture:!!I,Q=Sr(s);if(Q||(s[wr]=Q=new yn(s)),l=Q.add(a,l,d,V,w),l.proxy)return l;if(d=bu(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Ru||(I=V),I===void 0&&(I=!1),s.addEventListener(a.toString(),d,I);else if(s.attachEvent)s.attachEvent(Xs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function bu(){function s(l){return a.call(s.src,s.listener,l)}const a=Du;return s}function Hs(s,a,l,d,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)Hs(s,a[w],l,d,I);else d=f(d)?!!d.capture:!!d,l=Ys(l),s&&s[gn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Ar(w,l,d,I),-1<l&&(_n(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Sr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Ar(a,l,d,I)),(l=-1<s?a[s]:null)&&Cr(l))}function Cr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[gn])vr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(Xs(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Sr(a))?(vr(l,s),l.h==0&&(l.src=null,a[wr]=null)):_n(s)}}}function Xs(s){return s in Rr?Rr[s]:Rr[s]="on"+s}function Du(s,a){if(s.da)s=!0;else{a=new Oe(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&Cr(s),s=l.call(d,a)}return s}function Sr(s){return s=s[wr],s instanceof yn?s:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ys(s){return typeof s=="function"?s:(s[Pr]||(s[Pr]=function(a){return s.handleEvent(a)}),s[Pr])}function dt(){Ut.call(this),this.i=new yn(this),this.M=this,this.F=null}k(dt,Ut),dt.prototype[gn]=!0,dt.prototype.removeEventListener=function(s,a,l,d){Hs(this,s,a,l,d)};function yt(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var I=a;a=new ht(d,s),y(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var V=a.g=l[w];I=En(V,d,!0,a)&&I}if(V=a.g=s,I=En(V,d,!0,a)&&I,I=En(V,d,!1,a)&&I,l)for(w=0;w<l.length;w++)V=a.g=l[w],I=En(V,d,!1,a)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)_n(l[d]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},dt.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function En(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var V=a[w];if(V&&!V.da&&V.capture==l){var Q=V.listener,at=V.ha||V.src;V.fa&&vr(s.i,V),I=Q.call(at,d)!==!1&&I}}return I&&!d.defaultPrevented}function Js(s,a,l){if(typeof s=="function")l&&(s=C(s,l));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Zs(s){s.g=Js(()=>{s.g=null,s.i&&(s.i=!1,Zs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class ku extends Ut{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Zs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){Ut.call(this),this.h=s,this.g={}}k(Le,Ut);var ti=[];function ei(s){ot(s.g,function(a,l){this.g.hasOwnProperty(l)&&Cr(a)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),ei(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,Nu=c.JSON.parse,xu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function br(){}br.prototype.h=null;function ni(s){return s.h||(s.h=s.i())}function ri(){}var Fe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dr(){ht.call(this,"d")}k(Dr,ht);function kr(){ht.call(this,"c")}k(kr,ht);var te={},si=null;function Tn(){return si=si||new dt}te.La="serverreachability";function ii(s){ht.call(this,te.La,s)}k(ii,ht);function Ue(s){const a=Tn();yt(a,new ii(a))}te.STAT_EVENT="statevent";function oi(s,a){ht.call(this,te.STAT_EVENT,s),this.stat=a}k(oi,ht);function Et(s){const a=Tn();yt(a,new oi(a,s))}te.Ma="timingevent";function ai(s,a){ht.call(this,te.Ma,s),this.size=a}k(ai,ht);function Be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function qe(){this.g=!0}qe.prototype.xa=function(){this.g=!1};function Mu(s,a,l,d,I,w){s.info(function(){if(s.g)if(w)for(var V="",Q=w.split("&"),at=0;at<Q.length;at++){var z=Q[at].split("=");if(1<z.length){var ft=z[0];z=z[1];var mt=ft.split("_");V=2<=mt.length&&mt[1]=="type"?V+(ft+"="+z+"&"):V+(ft+"=redacted&")}}else V=null;else V=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+V})}function Ou(s,a,l,d,I,w,V){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+V})}function he(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Fu(s,l)+(d?" "+d:"")})}function Lu(s,a){s.info(function(){return"TIMEOUT: "+a})}qe.prototype.info=function(){};function Fu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return Vr(l)}catch{return a}}var In={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ui={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nr;function vn(){}k(vn,br),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},Nr=new vn;function Bt(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new li}function li(){this.i=null,this.g="",this.h=!1}var ci={},xr={};function Mr(s,a,l){s.L=1,s.v=Cn(Nt(a)),s.m=l,s.P=!0,hi(s,null)}function hi(s,a){s.F=Date.now(),An(s),s.A=Nt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ri(l.i,"t",d),s.C=0,l=s.j.J,s.h=new li,s.g=zi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new ku(C(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(ti[0]=I.toString()),I=ti);for(var w=0;w<I.length;w++){var V=Qs(l,I[w],d||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ue(),Mu(s.i,s.u,s.A,s.l,s.R,s.m)}Bt.prototype.ca=function(s){s=s.target;const a=this.M;a&&xt(s)==3?a.j():this.Y(s)},Bt.prototype.Y=function(s){try{if(s==this.g)t:{const mt=xt(this.g);var a=this.g.Ba();const me=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||ki(this.g)))){this.J||mt!=4||a==7||(a==8||0>=me?Ue(3):Ue(2)),Or(this);var l=this.g.Z();this.X=l;e:if(di(this)){var d=ki(this.g);s="";var I=d.length,w=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ee(this),je(this);var V="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(w&&a==I-1)});d.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,Ou(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var z=Q;break e}}z=null}if(l=z)he(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lr(this,l);else{this.o=!1,this.s=3,Et(12),ee(this),je(this);break t}}if(this.P){l=!0;let At;for(;!this.J&&this.C<V.length;)if(At=Uu(this,V),At==xr){mt==4&&(this.s=4,Et(14),l=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(At==ci){this.s=4,Et(15),he(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else he(this.i,this.l,At,null),Lr(this,At);if(di(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)he(this.i,this.l,V,"[Invalid Chunked Response]"),ee(this),je(this);else if(0<V.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),zr(ft),ft.M=!0,Et(11))}}else he(this.i,this.l,V,null),Lr(this,V);mt==4&&ee(this),this.o&&!this.J&&(mt==4?Ui(this.j,this):(this.o=!1,An(this)))}else nl(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ee(this),je(this)}}}catch{}finally{}};function di(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Uu(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?xr:(l=Number(a.substring(l,d)),isNaN(l)?ci:(d+=1,d+l>a.length?xr:(a=a.slice(d,d+l),s.C=d+l,a)))}Bt.prototype.cancel=function(){this.J=!0,ee(this)};function An(s){s.S=Date.now()+s.I,fi(s,s.I)}function fi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Be(C(s.ba,s),a)}function Or(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Bt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Lu(this.i,this.A),this.L!=2&&(Ue(),Et(17)),ee(this),this.s=2,je(this)):fi(this,this.S-s)};function je(s){s.j.G==0||s.J||Ui(s.j,s)}function ee(s){Or(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ei(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Lr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Fr(l.h,s))){if(!s.K&&Fr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)kn(l),bn(l);else break t;jr(l),Et(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Be(C(l.Za,l),6e3));if(1>=gi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else re(l,11)}else if((s.K||l.g==s)&&kn(l),!K(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let z=I[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const ft=z[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=z[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const me=z[5];me!=null&&typeof me=="number"&&0<me&&(d=1.5*me,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const At=s.g;if(At){const xn=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xn){var w=d.h;w.g||xn.indexOf("spdy")==-1&&xn.indexOf("quic")==-1&&xn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ur(w,w.h),w.h=null))}if(d.D){const $r=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(d.ya=$r,H(d.I,d.D,$r))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var V=s;if(d.qa=ji(d,d.J?d.ia:null,d.W),V.K){_i(d.h,V);var Q=V,at=d.L;at&&(Q.I=at),Q.B&&(Or(Q),An(Q)),d.g=V}else Li(d);0<l.i.length&&Dn(l)}else z[0]!="stop"&&z[0]!="close"||re(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?re(l,7):qr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}Ue(4)}catch{}}var Bu=class{constructor(s,a){this.g=s,this.map=a}};function mi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function gi(s){return s.h?1:s.g?s.g.size:0}function Fr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ur(s,a){s.g?s.g.add(a):s.h=a}function _i(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}mi.prototype.cancel=function(){if(this.i=yi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function yi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function qu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function ju(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function Ei(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=ju(s),d=qu(s),I=d.length,w=0;w<I;w++)a.call(void 0,d[w],l&&l[w],s)}var Ti=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),I=null;if(0<=d){var w=s[l].substring(0,d);I=s[l].substring(d+1)}else w=s[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ne(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ne){this.h=s.h,wn(this,s.j),this.o=s.o,this.g=s.g,Rn(this,s.s),this.l=s.l;var a=s.i,l=new Ge;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ii(this,l),this.m=s.m}else s&&(a=String(s).match(Ti))?(this.h=!1,wn(this,a[1]||"",!0),this.o=ze(a[2]||""),this.g=ze(a[3]||"",!0),Rn(this,a[4]),this.l=ze(a[5]||"",!0),Ii(this,a[6]||"",!0),this.m=ze(a[7]||"")):(this.h=!1,this.i=new Ge(null,this.h))}ne.prototype.toString=function(){var s=[],a=this.j;a&&s.push($e(a,vi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push($e(a,vi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push($e(l,l.charAt(0)=="/"?Ku:Gu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",$e(l,Qu)),s.join("")};function Nt(s){return new ne(s)}function wn(s,a,l){s.j=l?ze(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Rn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ii(s,a,l){a instanceof Ge?(s.i=a,Hu(s.i,s.h)):(l||(a=$e(a,Wu)),s.i=new Ge(a,s.h))}function H(s,a,l){s.i.set(a,l)}function Cn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function ze(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function $e(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,$u),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function $u(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var vi=/[#\/\?@]/g,Gu=/[#\?:]/g,Ku=/[#\?]/g,Wu=/[#\?@]/g,Qu=/#/g;function Ge(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&zu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Ge.prototype,n.add=function(s,a){qt(this),this.i=null,s=de(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ai(s,a){qt(s),a=de(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function wi(s,a){return qt(s),a=de(s,a),s.g.has(a)}n.forEach=function(s,a){qt(this),this.g.forEach(function(l,d){l.forEach(function(I){s.call(a,I,d,this)},this)},this)},n.na=function(){qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=s[d];for(let w=0;w<I.length;w++)l.push(a[d])}return l},n.V=function(s){qt(this);let a=[];if(typeof s=="string")wi(this,s)&&(a=a.concat(this.g.get(de(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return qt(this),this.i=null,s=de(this,s),wi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ri(s,a,l){Ai(s,a),0<l.length&&(s.i=null,s.g.set(de(s,a),x(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var I=w;V[d]!==""&&(I+="="+encodeURIComponent(String(V[d]))),s.push(I)}}return this.i=s.join("&")};function de(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Hu(s,a){a&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Ai(this,d),Ri(this,I,l))},s)),s.j=a}function Xu(s,a){const l=new qe;if(c.Image){const d=new Image;d.onload=P(jt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=P(jt,l,"TestLoadImage: error",!1,a,d),d.onabort=P(jt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(jt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Yu(s,a){const l=new qe,d=new AbortController,I=setTimeout(()=>{d.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Ju(){this.g=new xu}function Zu(s,a,l){const d=l||"";try{Ei(s,function(I,w){let V=I;f(I)&&(V=Vr(I)),a.push(d+w+"="+encodeURIComponent(V))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function Sn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Sn,br),Sn.prototype.g=function(){return new Pn(this.l,this.j)},Sn.prototype.i=function(s){return function(){return s}}({});function Pn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Pn,dt),n=Pn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,We(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ci(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ci(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ke(this):We(this),this.readyState==3&&Ci(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Ke(this))},n.Qa=function(s){this.g&&(this.response=s,Ke(this))},n.ga=function(){this.g&&Ke(this)};function Ke(s){s.readyState=4,s.l=null,s.j=null,s.v=null,We(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function We(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Si(s){let a="";return ot(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Br(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Si(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,dt);var tl=/^https?$/i,el=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nr.g(),this.v=this.o?ni(this.o):ni(Nr),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Pi(this,w);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(el,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,V]of l)this.g.setRequestHeader(w,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Di(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Pi(this,w)}};function Pi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Vi(s),Vn(s)}function Vi(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,yt(this,"complete"),yt(this,"abort"),Vn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bi(this):this.bb())},n.bb=function(){bi(this)};function bi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||xt(s)!=4||s.Z()!=2)){if(s.u&&xt(s)==4)Js(s.Ea,0,s);else if(yt(s,"readystatechange"),xt(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=V===0){var I=String(s.D).match(Ti)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!tl.test(I?I.toLowerCase():"")}l=d}if(l)yt(s,"complete"),yt(s,"success");else{s.m=6;try{var w=2<xt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Vi(s)}}finally{Vn(s)}}}}function Vn(s,a){if(s.g){Di(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||yt(s,"ready");try{l.onreadystatechange=d}catch{}}}function Di(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function xt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Nu(a)}};function ki(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function nl(s){const a={};s=(s.g&&2<=xt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(K(s[d]))continue;var l=E(s[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}T(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ni(s){this.Aa=0,this.i=[],this.j=new qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qe("baseRetryDelayMs",5e3,s),this.cb=Qe("retryDelaySeedMs",1e4,s),this.Wa=Qe("forwardChannelMaxRetries",2,s),this.wa=Qe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new mi(s&&s.concurrentRequestLimit),this.Da=new Ju,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ni.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,d){Et(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=ji(this,null,this.W),Dn(this)};function qr(s){if(xi(s),s.G==3){var a=s.U++,l=Nt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),He(s,l),a=new Bt(s,s.j,a),a.L=2,a.v=Cn(Nt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=zi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),An(a)}qi(s)}function bn(s){s.g&&(zr(s),s.g.cancel(),s.g=null)}function xi(s){bn(s),s.u&&(c.clearTimeout(s.u),s.u=null),kn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Dn(s){if(!pi(s.h)&&!s.s){s.s=!0;var a=s.Ga;xe||Ws(),Me||(xe(),Me=!0),Ir.add(a,s),s.B=0}}function rl(s,a){return gi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Be(C(s.Ga,s,a),Bi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Bt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Oi(this,I,a),l=Nt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),He(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Si(w)))+"&"+a:this.m&&Br(l,this.m,w)),Ur(this.h,I),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),I.T=!0,Mr(I,l,null)):Mr(I,l,a),this.G=2}}else this.G==3&&(s?Mi(this,s):this.i.length==0||pi(this.h)||Mi(this))};function Mi(s,a){var l;a?l=a.l:l=s.U++;const d=Nt(s.I);H(d,"SID",s.K),H(d,"RID",l),H(d,"AID",s.T),He(s,d),s.m&&s.o&&Br(d,s.m,s.o),l=new Bt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Oi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ur(s.h,l),Mr(l,d,a)}function He(s,a){s.H&&ot(s.H,function(l,d){H(a,d,l)}),s.l&&Ei({},function(l,d){H(a,d,l)})}function Oi(s,a,l){l=Math.min(s.i.length,l);var d=s.l?C(s.l.Na,s.l,s):null;t:{var I=s.i;let w=-1;for(;;){const V=["count="+l];w==-1?0<l?(w=I[0].g,V.push("ofs="+w)):w=0:V.push("ofs="+w);let Q=!0;for(let at=0;at<l;at++){let z=I[at].g;const ft=I[at].map;if(z-=w,0>z)w=Math.max(0,I[at].g-100),Q=!1;else try{Zu(ft,V,"req"+z+"_")}catch{d&&d(ft)}}if(Q){d=V.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Li(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;xe||Ws(),Me||(xe(),Me=!0),Ir.add(a,s),s.v=0}}function jr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Be(C(s.Fa,s),Bi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Fi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Be(C(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),bn(this),Fi(this))};function zr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Fi(s){s.g=new Bt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Nt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),He(s,a),s.m&&s.o&&Br(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Cn(Nt(a)),l.m=null,l.P=!0,hi(l,s)}n.Za=function(){this.C!=null&&(this.C=null,bn(this),jr(this),Et(19))};function kn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ui(s,a){var l=null;if(s.g==a){kn(s),zr(s),s.g=null;var d=2}else if(Fr(s.h,a))l=a.D,_i(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;d=Tn(),yt(d,new ai(d,l)),Dn(s)}else Li(s);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&rl(s,a)||d==2&&jr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:re(s,5);break;case 4:re(s,10);break;case 3:re(s,6);break;default:re(s,2)}}}function Bi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function re(s,a){if(s.j.info("Error code "+a),a==2){var l=C(s.fb,s),d=s.Xa;const I=!d;d=new ne(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||wn(d,"https"),Cn(d),I?Xu(d.toString(),l):Yu(d.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),qi(s),xi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function qi(s){if(s.G=0,s.ka=[],s.l){const a=yi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function ji(s,a,l){var d=l instanceof ne?Nt(l):new ne(l);if(d.g!="")a&&(d.g=a+"."+d.g),Rn(d,d.s);else{var I=c.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new ne(null);d&&wn(w,d),a&&(w.g=a),I&&Rn(w,I),l&&(w.l=l),d=w}return l=s.D,a=s.ya,l&&a&&H(d,l,a),H(d,"VER",s.la),He(s,d),d}function zi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new Sn({eb:l})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $i(){}n=$i.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Nn(){}Nn.prototype.g=function(s,a){return new It(s,a)};function It(s,a){dt.call(this),this.g=new Ni(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new fe(this)}k(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){qr(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Vr(s),s=l);a.i.push(new Bu(a.Ya++,s)),a.G==3&&Dn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,qr(this.g),delete this.g,It.aa.N.call(this)};function Gi(s){Dr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Gi,Dr);function Ki(){kr.call(this),this.status=1}k(Ki,kr);function fe(s){this.g=s}k(fe,$i),fe.prototype.ua=function(){yt(this.g,"a")},fe.prototype.ta=function(s){yt(this.g,new Gi(s))},fe.prototype.sa=function(s){yt(this.g,new Ki)},fe.prototype.ra=function(){yt(this.g,"b")},Nn.prototype.createWebChannel=Nn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,aa=function(){return new Nn},oa=function(){return Tn()},ia=te,is={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},In.NO_ERROR=0,In.TIMEOUT=8,In.HTTP_ERROR=6,qn=In,ui.COMPLETE="complete",sa=ui,ri.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Xe=ri,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ra=J}).apply(typeof Mn<"u"?Mn:typeof self<"u"?self:typeof window<"u"?window:{});const so="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=new Xo("@firebase/firestore");function pe(){return oe.logLevel}function b(n,...t){if(oe.logLevel<=j.DEBUG){const e=t.map(Is);oe.debug(`Firestore (${Ve}): ${n}`,...e)}}function Lt(n,...t){if(oe.logLevel<=j.ERROR){const e=t.map(Is);oe.error(`Firestore (${Ve}): ${n}`,...e)}}function Ie(n,...t){if(oe.logLevel<=j.WARN){const e=t.map(Is);oe.warn(`Firestore (${Ve}): ${n}`,...e)}}function Is(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const t=`FIRESTORE (${Ve}) INTERNAL ASSERTION FAILED: `+n;throw Lt(t),new Error(t)}function $(n,t){n||O()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Pe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Lc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fc{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new ua(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new gt(t)}}class Uc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Bc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Uc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){$(this.o===void 0);const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string"),this.R=e.token,new qc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=zc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function ve(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),i=Ct.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}}class X extends Ct{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const $c=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Ct{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return $c.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Gc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new Ht(i,M.empty(),t)}function Kc(n){return new Ht(n.readTime,n.key,-1)}class Ht{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ht(L.min(),M.empty(),-1)}static max(){return new Ht(L.max(),M.empty(),-1)}}function Wc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Qc)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>r(h))}),u=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(_=>{u[f]=_,++c,c===o&&r(u)},_=>i(_))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Xc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function De(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ar.oe=-1;function ur(n){return n==null}function Xn(n){return n===0&&1/n==-1/0}function Yc(n){return typeof n=="number"&&Number.isInteger(n)&&!Xn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=io(t)),t=Zc(n.get(e),t);return io(t)}function Zc(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function io(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ca(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ao(this.data.getIterator())}getIteratorFrom(t){return new ao(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class ao{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new wt([])}unionWith(t){let e=new rt(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ve(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ha("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const th=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if($(!!n),typeof n=="string"){let t=0;const e=th.exec(n);if($(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function lr(n){const t=n.mapValue.fields.__previous_value__;return vs(t)?lr(t):t}function an(n){const t=Xt(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e,r,i,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class un{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof un&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vs(n)?4:rh(n)?9007199254740991:nh(n)?10:11:O()}function Vt(n,t){if(n===t)return!0;const e=Jt(n);if(e!==Jt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return an(n).isEqual(an(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Xt(i.timestampValue),c=Xt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Yt(i.bytesValue).isEqual(Yt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),c=Z(o.doubleValue);return u===c?Xn(u)===Xn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return ve(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(oo(u)!==oo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Vt(u[h],c[h])))return!1;return!0}(n,t);default:return O()}}function ln(n,t){return(n.values||[]).find(e=>Vt(e,t))!==void 0}function Ae(n,t){if(n===t)return 0;const e=Jt(n),r=Jt(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return uo(n.timestampValue,t.timestampValue);case 4:return uo(an(n),an(t));case 5:return B(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Yt(o),h=Yt(u);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const _=B(c[f],h[f]);if(_!==0)return _}return B(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=B(Z(o.latitude),Z(u.latitude));return c!==0?c:B(Z(o.longitude),Z(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return lo(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,_;const A=o.fields||{},C=u.fields||{},P=(c=A.value)===null||c===void 0?void 0:c.arrayValue,k=(h=C.value)===null||h===void 0?void 0:h.arrayValue,x=B(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:lo(P,k)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Ln.mapValue&&u===Ln.mapValue)return 0;if(o===Ln.mapValue)return 1;if(u===Ln.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let A=0;A<h.length&&A<_.length;++A){const C=B(h[A],_[A]);if(C!==0)return C;const P=Ae(c[h[A]],f[_[A]]);if(P!==0)return P}return B(h.length,_.length)}(n.mapValue,t.mapValue);default:throw O()}}function uo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=Xt(n),r=Xt(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function lo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ae(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function we(n){return os(n)}function os(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Xt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Yt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=os(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${os(e.fields[u])}`;return i+"}"}(n.mapValue):O()}function jn(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=lr(n);return t?16+jn(t):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+jn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ae(r.fields,(o,u)=>{i+=o.length+jn(u)}),i}(n.mapValue);default:throw O()}}function as(n){return!!n&&"integerValue"in n}function As(n){return!!n&&"arrayValue"in n}function co(n){return!!n&&"nullValue"in n}function ho(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zn(n){return!!n&&"mapValue"in n}function nh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ze(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ae(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ze(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(n.arrayValue.values[e]);return t}return Object.assign({},n)}function rh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!zn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=lt.emptyPath(),r={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=Ze(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());zn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];zn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ae(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new vt(Ze(this.value))}}function da(n){const t=[];return ae(n.fields,(e,r)=>{const i=new lt([e]);if(zn(r)){const o=da(r.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),vt.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.position=t,this.inclusive=e}}function fo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=Ae(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function mo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e="asc"){this.field=t,this.dir=e}}function sh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{}class et extends fa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new oh(t,e,r):e==="array-contains"?new lh(t,r):e==="in"?new ch(t,r):e==="not-in"?new hh(t,r):e==="array-contains-any"?new dh(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ah(t,r):new uh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ae(e,this.value)):e!==null&&Jt(this.value)===Jt(e)&&this.matchesComparison(Ae(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends fa{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new bt(t,e)}matches(t){return ma(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ma(n){return n.op==="and"}function pa(n){return ih(n)&&ma(n)}function ih(n){for(const t of n.filters)if(t instanceof bt)return!1;return!0}function us(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+we(n.value);if(pa(n))return n.filters.map(t=>us(t)).join(",");{const t=n.filters.map(e=>us(e)).join(",");return`${n.op}(${t})`}}function ga(n,t){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)}(n,t):n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,c)=>o&&ga(u,i.filters[c]),!0):!1}(n,t):void O()}function _a(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`}(n):n instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(_a).join(" ,")+"}"}(n):"Filter"}class oh extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ah extends et{constructor(t,e){super(t,"in",e),this.keys=ya("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class uh extends et{constructor(t,e){super(t,"not-in",e),this.keys=ya("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ya(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class lh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return As(e)&&ln(e.arrayValue,this.value)}}class ch extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ln(this.value.arrayValue,e)}}class hh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ln(this.value.arrayValue,e)}}class dh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!As(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ln(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function po(n,t=null,e=[],r=[],i=null,o=null,u=null){return new fh(n,t,e,r,i,o,u)}function ws(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>us(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ur(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>we(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>we(r)).join(",")),t.ue=e}return t.ue}function Rs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!sh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ga(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!mo(n.startAt,t.startAt)&&mo(n.endAt,t.endAt)}function ls(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mh(n,t,e,r,i,o,u,c){return new cr(n,t,e,r,i,o,u,c)}function Ea(n){return new cr(n)}function go(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ph(n){return n.collectionGroup!==null}function tn(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new rt(lt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Jn(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new Jn(lt.keyField(),r))}return t.ce}function St(n){const t=F(n);return t.le||(t.le=gh(t,tn(n))),t.le}function gh(n,t){if(n.limitType==="F")return po(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Jn(i.field,o)});const e=n.endAt?new Yn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yn(n.startAt.position,n.startAt.inclusive):null;return po(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function cs(n,t,e){return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function hr(n,t){return Rs(St(n),St(t))&&n.limitType===t.limitType}function Ta(n){return`${ws(St(n))}|lt:${n.limitType}`}function ge(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>_a(i)).join(", ")}]`),ur(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>we(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>we(i)).join(",")),`Target(${r})`}(St(n))}; limitType=${n.limitType})`}function dr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of tn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,c,h){const f=fo(u,c,h);return u.inclusive?f<=0:f<0}(r.startAt,tn(r),i)||r.endAt&&!function(u,c,h){const f=fo(u,c,h);return u.inclusive?f>=0:f>0}(r.endAt,tn(r),i))}(n,t)}function _h(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ia(n){return(t,e)=>{let r=!1;for(const i of tn(n)){const o=yh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function yh(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ae(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ae(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ca(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Y(M.comparator);function Ft(){return Eh}const va=new Y(M.comparator);function Ye(...n){let t=va;for(const e of n)t=t.insert(e.key,e);return t}function Aa(n){let t=va;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ie(){return en()}function wa(){return en()}function en(){return new ue(n=>n.toString(),(n,t)=>n.isEqual(t))}const Th=new Y(M.comparator),Ih=new rt(M.comparator);function U(...n){let t=Ih;for(const e of n)t=t.add(e);return t}const vh=new rt(B);function Ah(){return vh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xn(t)?"-0":t}}function Ra(n){return{integerValue:""+n}}function wh(n,t){return Yc(t)?Ra(t):Cs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function Rh(n,t,e){return n instanceof Zn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&vs(o)&&(o=lr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof cn?Sa(n,t):n instanceof hn?Pa(n,t):function(i,o){const u=Ca(i,o),c=_o(u)+_o(i.Pe);return as(u)&&as(i.Pe)?Ra(c):Cs(i.serializer,c)}(n,t)}function Ch(n,t,e){return n instanceof cn?Sa(n,t):n instanceof hn?Pa(n,t):e}function Ca(n,t){return n instanceof tr?function(r){return as(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Zn extends fr{}class cn extends fr{constructor(t){super(),this.elements=t}}function Sa(n,t){const e=Va(t);for(const r of n.elements)e.some(i=>Vt(i,r))||e.push(r);return{arrayValue:{values:e}}}class hn extends fr{constructor(t){super(),this.elements=t}}function Pa(n,t){let e=Va(t);for(const r of n.elements)e=e.filter(i=>!Vt(i,r));return{arrayValue:{values:e}}}class tr extends fr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function _o(n){return Z(n.integerValue||n.doubleValue)}function Va(n){return As(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Sh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof cn&&i instanceof cn||r instanceof hn&&i instanceof hn?ve(r.elements,i.elements,Vt):r instanceof tr&&i instanceof tr?Vt(r.Pe,i.Pe):r instanceof Zn&&i instanceof Zn}(n.transform,t.transform)}class Ph{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $n(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class mr{}function ba(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ka(n.key,Mt.none()):new dn(n.key,n.data,Mt.none());{const e=n.data,r=vt.empty();let i=new rt(lt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new le(n.key,r,new wt(i.toArray()),Mt.none())}}function Vh(n,t,e){n instanceof dn?function(i,o,u){const c=i.value.clone(),h=Eo(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof le?function(i,o,u){if(!$n(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Eo(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Da(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function nn(n,t,e,r){return n instanceof dn?function(o,u,c,h){if(!$n(o.precondition,u))return c;const f=o.value.clone(),_=To(o.fieldTransforms,h,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof le?function(o,u,c,h){if(!$n(o.precondition,u))return c;const f=To(o.fieldTransforms,h,u),_=u.data;return _.setAll(Da(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,u,c){return $n(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function bh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ca(r.transform,i||null);o!=null&&(e===null&&(e=vt.empty()),e.set(r.field,o))}return e||null}function yo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ve(r,i,(o,u)=>Sh(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class dn extends mr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class le extends mr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Da(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Eo(n,t,e){const r=new Map;$(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,Ch(u,c,e[i]))}return r}function To(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Rh(o,u,t))}return r}class ka extends mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dh extends mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Vh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=wa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=ba(u,c);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&ve(this.mutations,t.mutations,(e,r)=>yo(e,r))&&ve(this.baseMutations,t.baseMutations,(e,r)=>yo(e,r))}}class Ss{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){$(t.mutations.length===r.length);let i=function(){return Th}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,r[u].version);return new Ss(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,q;function Mh(n){switch(n){default:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Na(n){if(n===void 0)return Lt("GRPC error has no .code"),S.UNKNOWN;switch(n){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return O()}}(q=tt||(tt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Kt([4294967295,4294967295],0);function Io(n){const t=Oh().encode(n),e=new na;return e.update(t),new Uint8Array(e.digest())}function vo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,r],0),new Kt([i,o],0)]}class Ps{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Je(`Invalid padding: ${e}`);if(r<0)throw new Je(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Je(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Je(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=Kt.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Kt.fromNumber(r)));return i.compare(Lh)===1&&(i=new Kt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}Ee(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Io(t),[r,i]=vo(e);for(let o=0;o<this.hashCount;o++){const u=this.de(r,i,o);if(!this.Ee(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ps(o,i,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Te===0)return;const e=Io(t),[r,i]=vo(e);for(let o=0;o<this.hashCount;o++){const u=this.de(r,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Je extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,fn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new pr(L.min(),i,new Y(B),Ft(),U())}}class fn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new fn(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class xa{constructor(t,e){this.targetId=t,this.me=e}}class Ma{constructor(t,e,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ao{constructor(){this.fe=0,this.ge=wo(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:O()}}),new fn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=wo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Fh{constructor(t){this.Be=t,this.Le=new Map,this.ke=Ft(),this.qe=Fn(),this.Qe=Fn(),this.Ke=new Y(B)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.je(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Le.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(ls(o))if(r===0){const u=new M(o.path);this.We(e,u,_t.newNoDocument(u,L.min()))}else $(r===1);else{const u=this.Ze(e);if(u!==r){const c=this.Xe(t),h=c?this.et(c,t,u):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Yt(r).toUint8Array()}catch(h){if(h instanceof ha)return Ie("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ps(u,i,o)}catch(h){return Ie(h instanceof Je?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,r){return e.me.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.Be.nt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Le.forEach((o,u)=>{const c=this.Ye(u);if(c){if(o.current&&ls(c.target)){const h=new M(c.target.path);this.st(h).has(u)||this.ot(u,h)||this.We(u,h,_t.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let r=U();this.Qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new pr(t,e,this.Ke,this.ke,r);return this.ke=Ft(),this.qe=Fn(),this.Qe=Fn(),this.Ke=new Y(B),i}Ue(t,e){if(!this.je(t))return;const r=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Le.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Le.get(t);return e||(e=new Ao,this.Le.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new rt(B),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new rt(B),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Le.get(t);return e&&e.Se?null:this.Be.ut(t)}He(t){this.Le.set(t,new Ao),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function Fn(){return new Y(M.comparator)}function wo(){return new Y(M.comparator)}const Uh={asc:"ASCENDING",desc:"DESCENDING"},Bh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qh={and:"AND",or:"OR"};class jh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hs(n,t){return n.useProto3Json||ur(t)?t:{value:t}}function er(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Oa(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function zh(n,t){return er(n,t.toTimestamp())}function Pt(n){return $(!!n),L.fromTimestamp(function(e){const r=Xt(e);return new nt(r.seconds,r.nanos)}(n))}function Vs(n,t){return ds(n,t).canonicalString()}function ds(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function La(n){const t=X.fromString(n);return $(ja(t)),t}function fs(n,t){return Vs(n.databaseId,t.path)}function Hr(n,t){const e=La(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Ua(e))}function Fa(n,t){return Vs(n.databaseId,t)}function $h(n){const t=La(n);return t.length===4?X.emptyPath():Ua(t)}function ms(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ua(n){return $(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ro(n,t,e){return{name:fs(n,t),fields:e.value.mapValue.fields}}function Gh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?($(_===void 0||typeof _=="string"),ct.fromBase64String(_||"")):($(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ct.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?S.UNKNOWN:Na(f.code);return new N(_,f.message||"")}(u);e=new Ma(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hr(n,r.document.name),o=Pt(r.document.updateTime),u=r.document.createTime?Pt(r.document.createTime):L.min(),c=new vt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(i,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Gn(f,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Hr(n,r.document),o=r.readTime?Pt(r.readTime):L.min(),u=_t.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Gn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Hr(n,r.document),o=r.removedTargetIds||[];e=new Gn([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new xh(i,o),c=r.targetId;e=new xa(c,u)}}return e}function Kh(n,t){let e;if(t instanceof dn)e={update:Ro(n,t.key,t.value)};else if(t instanceof ka)e={delete:fs(n,t.key)};else if(t instanceof le)e={update:Ro(n,t.key,t.data),updateMask:ed(t.fieldMask)};else{if(!(t instanceof Dh))return O();e={verify:fs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const c=u.transform;if(c instanceof Zn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof cn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof tr)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:zh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function Wh(n,t){return n&&n.length>0?($(t!==void 0),n.map(e=>function(i,o){let u=i.updateTime?Pt(i.updateTime):Pt(o);return u.isEqual(L.min())&&(u=Pt(o)),new Ph(u,i.transformResults||[])}(e,t))):[]}function Qh(n,t){return{documents:[Fa(n,t.path)]}}function Hh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Fa(n,i);const o=function(f){if(f.length!==0)return qa(bt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(C){return{field:_e(C.field),direction:Jh(C.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=hs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:i}}function Xh(n){let t=$h(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){$(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const C=Ba(A);return C instanceof bt&&pa(C)?C.getFilters():[C]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(C=>function(k){return new Jn(ye(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(C))}(e.orderBy));let c=null;e.limit&&(c=function(A){let C;return C=typeof A=="object"?A.value:A,ur(C)?null:C}(e.limit));let h=null;e.startAt&&(h=function(A){const C=!!A.before,P=A.values||[];return new Yn(P,C)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const C=!A.before,P=A.values||[];return new Yn(P,C)}(e.endAt)),mh(t,i,u,o,c,"F",h,f)}function Yh(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ba(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ye(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ye(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ye(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ye(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ye(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(r=>Ba(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function Jh(n){return Uh[n]}function Zh(n){return Bh[n]}function td(n){return qh[n]}function _e(n){return{fieldPath:n.canonicalString()}}function ye(n){return lt.fromServerFormat(n.fieldPath)}function qa(n){return n instanceof et?function(e){if(e.op==="=="){if(ho(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NAN"}};if(co(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ho(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NAN"}};if(co(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(e.field),op:Zh(e.op),value:e.value}}}(n):n instanceof bt?function(e){const r=e.getFilters().map(i=>qa(i));return r.length===1?r[0]:{compositeFilter:{op:td(e.op),filters:r}}}(n):O()}function ed(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ja(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,r,i,o=L.min(),u=L.min(),c=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t){this.ht=t}}function rd(n){const t=Xh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.ln=new id}addToCollectionParentIndex(t,e){return this.ln.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ht.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class id{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new rt(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new rt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Re(0)}static Qn(){return new Re(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class od{constructor(t){this.Gn=t,this.buffer=new rt(So),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();So(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ad{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){b("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){De(e)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await be(e)}await this.Yn(3e5)})}}class ud{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ar.oe);const r=new od(e);return this.Zn.forEachTarget(t,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Co)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Co):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let r,i,o,u,c,h,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(r=A,c=Date.now(),this.removeTargets(t,r,e))).next(A=>(o=A,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(A=>(f=Date.now(),pe()<=j.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${A} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function ld(n,t){return new ud(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.changes=new ue(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&nn(r.mutation,i,wt.empty(),nt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=ie();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=Ye();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=ie();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,i){let o=Ft();const u=en(),c=function(){return en()}();return e.forEach((h,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof le)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),nn(_.mutation,f,_.mutation.getFieldMask(),nt.now())):u.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var A;return c.set(f,new hd(_,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=en();let i=new Y((u,c)=>u-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let _=r.get(h)||wt.empty();_=c.applyToLocalView(f,_),r.set(h,_);const A=(i.get(c.batchId)||U()).add(h);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,_=h.value,A=wa();_.forEach(C=>{if(!o.has(C)){const P=ba(e.get(C),r.get(C));P!==null&&A.set(C,P),o=o.add(C)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ph(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ie());let c=-1,h=o;return u.next(f=>R.forEach(f,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(C=>{h=h.insert(_,C)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,U())).next(_=>({batchId:c,changes:Aa(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=Ye();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=Ye();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,h=>{const f=function(A,C){return new cr(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((A,C)=>{u=u.insert(A,C)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((h,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,_t.newInvalidDocument(_)))});let c=Ye();return u.forEach((h,f)=>{const _=o.get(h);_!==void 0&&nn(_.mutation,f,wt.empty(),nt.now()),dr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return R.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Pt(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:rd(i.bundledQuery),readTime:Pt(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.overlays=new Y(M.comparator),this.dr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ie();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Tt(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.dr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ie(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Y((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=ie(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=ie(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return R.resolve(c)}Tt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.dr.get(i.largestBatchId).delete(r.key);this.dr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Nh(e,r));let o=this.dr.get(e);o===void 0&&(o=U(),this.dr.set(e,o)),this.dr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.Er=new rt(it.Ar),this.Rr=new rt(it.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(t,e){const r=new it(t,e);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.gr(new it(t,e))}pr(t,e){t.forEach(r=>this.removeReference(r,e))}yr(t){const e=new M(new X([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.Rr.forEachInRange([r,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.Er.forEach(t=>this.gr(t))}gr(t){this.Er=this.Er.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new X([])),r=new it(e,t),i=new it(e,t+1);let o=U();return this.Rr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),r=this.Er.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||B(t.br,e.br)}static Vr(t,e){return B(t.br,e.br)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new rt(it.Ar)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new kh(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.vr=this.vr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Fr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],u=>{const c=this.Cr(u.br);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rt(B);return e.forEach(i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{r=r.add(c.br)})}),R.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let c=new rt(B);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.br)),!0)},u),R.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(r=>{const i=this.Cr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){$(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return R.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=r})}Bn(t){}containsKey(t,e){const r=new it(e,0),i=this.vr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.Nr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=Ft();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ft();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Wc(Kc(_),r)<=0||(i.has(_.key)||dr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){O()}Br(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new yd(this)}getSize(t){return R.resolve(this.size)}}class yd extends cd{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.persistence=t,this.Lr=new ue(e=>ws(e),Rs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.kr=0,this.qr=new bs,this.targetCount=0,this.Qr=Re.qn()}forEachTarget(t,e){return this.Lr.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.kr&&(this.kr=e),R.resolve()}Un(t){this.Lr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Re(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Un(e),R.resolve()}removeTargetData(t,e){return this.Lr.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Lr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Lr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Lr.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.qr.mr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.qr.pr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.qr.Sr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e){this.Kr={},this.overlays={},this.$r=new ar(0),this.Ur=!1,this.Ur=!0,this.Wr=new pd,this.referenceDelegate=t(this),this.Gr=new Ed(this),this.indexManager=new sd,this.remoteDocumentCache=function(i){return new _d(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new nd(e),this.jr=new fd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new md,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Kr[t.toKey()];return r||(r=new gd(e,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const i=new Td(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return R.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,e)))}}class Td extends Hc{constructor(t){super(),this.currentSequenceNumber=t}}class Ds{constructor(t){this.persistence=t,this.Zr=new bs,this.Xr=null}static ei(t){return new Ds(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,r){return this.Zr.addReference(r,e),this.ti.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Zr.removeReference(r,e),this.ti.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),R.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ti,r=>{const i=M.fromPath(r);return this.ni(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(r=>{r?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return R.or([()=>R.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class nr{constructor(t,e){this.persistence=t,this.ri=new ue(r=>Jc(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ld(this,e)}static ei(t,e){return new nr(t,e)}Hr(){}Jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}nr(t){let e=0;return this.er(t,r=>{e++}).next(()=>e)}er(t,e){return R.forEach(this.ri,(r,i)=>this.ir(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Br(t,u=>this.ir(t,u,e).next(c=>{c||(r++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),R.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=jn(t.data.value)),e}ir(t,e,r){return R.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Wi=r,this.Gi=i}static zi(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ks(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return yl()?8:Xc(gl())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Id;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,r,i){return r.documentReadCount<this.Ji?(pe()<=j.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),R.resolve()):(pe()<=j.DEBUG&&b("QueryEngine","Query:",ge(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(pe()<=j.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):R.resolve())}Xi(t,e){if(go(e))return R.resolve(null);let r=St(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=cs(e,null,"F"),r=St(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=U(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.rs(e,c);return this.ss(e,f,u,h.readTime)?this.Xi(t,cs(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,r,i){return go(e)||i.isEqual(L.min())?R.resolve(null):this.Zi.getDocuments(t,r).next(o=>{const u=this.rs(e,o);return this.ss(e,u,r,i)?R.resolve(null):(pe()<=j.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ge(e)),this.os(t,u,e,Gc(i,-1)).next(c=>c))})}rs(t,e){let r=new rt(Ia(t));return e.forEach((i,o)=>{dr(t,o)&&(r=r.add(o))}),r}ss(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,r){return pe()<=j.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ge(e)),this.Zi.getDocumentsMatchingQuery(t,e,Ht.min(),r)}os(t,e,r,i){return this.Zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,r,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new Y(B),this.cs=new ue(o=>ws(o),Rs),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dd(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function wd(n,t,e,r){return new Ad(n,t,e,r)}async function $a(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let h=U();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ts:f,removedBatchIds:u,addedBatchIds:c}))})})}function Rd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,_){const A=f.batch,C=A.keys();let P=R.resolve();return C.forEach(k=>{P=P.next(()=>_.getEntry(h,k)).next(x=>{const D=f.docVersions.get(k);$(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),_.addEntry(x)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=U();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Ga(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Cd(n,t){const e=F(n),r=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const c=[];t.targetChanges.forEach((_,A)=>{const C=i.get(A);if(!C)return;c.push(e.Gr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Gr.addMatchingKeys(o,_.addedDocuments,A)));let P=C.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?P=P.withResumeToken(ct.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),i=i.insert(A,P),function(x,D,G){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(C,P,_)&&c.push(e.Gr.updateTargetData(o,P))});let h=Ft(),f=U();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(Sd(o,u,t.documentUpdates).next(_=>{h=_.Is,f=_.ds})),!r.isEqual(L.min())){const _=e.Gr.getLastRemoteSnapshotVersion(o).next(A=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return R.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=i,o))}function Sd(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Ft();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Is:u,ds:i}})}function Pd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Vd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Gr.getTargetData(r,t).next(o=>o?(i=o,R.resolve(i)):e.Gr.allocateTargetId(r).next(u=>(i=new zt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(r.targetId,r),e.cs.set(t,r.targetId)),r})}async function ps(n,t,e){const r=F(n),i=r.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!De(u))throw u;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.us=r.us.remove(t),r.cs.delete(i.target)}function Po(n,t,e){const r=F(n);let i=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,_){const A=F(h),C=A.cs.get(_);return C!==void 0?R.resolve(A.us.get(C)):A.Gr.getTargetData(f,_)}(r,u,St(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:U())).next(c=>(bd(r,_h(t),c),{documents:c,Es:o})))}function bd(n,t,e){let r=n.ls.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(t,r)}class Vo{constructor(){this.activeTargetIds=Ah()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dd{constructor(){this._o=new Vo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,r){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Vo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=null;function Xr(){return Un===null?Un=function(){return 268435456+Math.round(2147483648*Math.random())}():Un++,"0x"+Un.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Md extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,r,i,o,u){const c=Xr(),h=this.No(e,r.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(f,o,u),this.Lo(e,h,f,i).then(_=>(b("RestConnection",`Received RPC '${e}' ${c}: `,_),_),_=>{throw Ie("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",h,"request:",i),_})}ko(e,r,i,o,u,c){return this.Oo(e,r,i,o,u)}Bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ve}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,r){const i=Nd[e];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Lo(t,e,r,i){const o=Xr();return new Promise((u,c)=>{const h=new ra;h.setWithCredentials(!0),h.listenOnce(sa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case qn.NO_ERROR:const _=h.getResponseJson();b(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case qn.TIMEOUT:b(pt,`RPC '${t}' ${o} timed out`),c(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const A=h.getStatus();if(b(pt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const k=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN}(P.status);c(new N(k,P.message))}else c(new N(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{b(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);b(pt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",f,r,15)})}qo(t,e,r){const i=Xr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=aa(),c=oa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Bo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");b(pt,`Creating RPC '${t}' stream ${i}: ${_}`,h);const A=u.createWebChannel(_,h);let C=!1,P=!1;const k=new xd({Eo:D=>{P?b(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(C||(b(pt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),C=!0),b(pt,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},Ao:()=>A.close()}),x=(D,G,K)=>{D.listen(G,W=>{try{K(W)}catch(st){setTimeout(()=>{throw st},0)}})};return x(A,Xe.EventType.OPEN,()=>{P||(b(pt,`RPC '${t}' stream ${i} transport opened.`),k.So())}),x(A,Xe.EventType.CLOSE,()=>{P||(P=!0,b(pt,`RPC '${t}' stream ${i} transport closed`),k.Do())}),x(A,Xe.EventType.ERROR,D=>{P||(P=!0,Ie(pt,`RPC '${t}' stream ${i} transport errored:`,D),k.Do(new N(S.UNAVAILABLE,"The operation could not be completed")))}),x(A,Xe.EventType.MESSAGE,D=>{var G;if(!P){const K=D.data[0];$(!!K);const W=K,st=(W==null?void 0:W.error)||((G=W[0])===null||G===void 0?void 0:G.error);if(st){b(pt,`RPC '${t}' stream ${i} received error:`,st);const Dt=st.status;let ot=function(g){const y=tt[g];if(y!==void 0)return Na(y)}(Dt),T=st.message;ot===void 0&&(ot=S.INTERNAL,T="Unknown error status: "+Dt+" with message "+st.message),P=!0,k.Do(new N(ot,T)),A.close()}else b(pt,`RPC '${t}' stream ${i} received:`,K),k.vo(K)}}),x(c,ia.STAT_EVENT,D=>{D.stat===is.PROXY?b(pt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===is.NOPROXY&&b(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Yr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n){return new jh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e,r=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e,r,i,o,u,c,h){this.li=t,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ka(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===e&&this.I_(r,i)},r=>{t(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(i)})})}I_(t,e){const r=this.T_(this.Xo);this.stream=this.E_(t,e),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.d_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Od extends Wa{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}E_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Gh(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Pt(u.readTime):L.min()}(t);return this.listener.R_(e,r)}V_(t){const e={};e.database=ms(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=ls(h)?{documents:Qh(o,h)}:{query:Hh(o,h).ct},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Oa(o,u.resumeToken);const f=hs(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=er(o,u.snapshotVersion.toTimestamp());const f=hs(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Yh(this.serializer,t);r&&(e.labels=r),this.c_(e)}m_(t){const e={};e.database=ms(this.serializer),e.removeTarget=t,this.c_(e)}}class Ld extends Wa{constructor(t,e,r,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(t,e){return this.connection.qo("Write",t,e)}A_(t){return $(!!t.streamToken),this.lastStreamToken=t.streamToken,$(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){$(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Wh(t.writeResults,t.commitTime),r=Pt(t.commitTime);return this.listener.y_(r,e)}w_(){const t={};t.database=ms(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Kh(this.serializer,r))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,ds(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())})}ko(t,e,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,ds(e,r),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(S.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Ud{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Lt(e),this.C_=!1):b("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{r.enqueueAndForget(async()=>{ce(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.k_.add(4),await mn(f),f.K_.set("Unknown"),f.k_.delete(4),await _r(f)}(this))})}),this.K_=new Ud(r,i)}}async function _r(n){if(ce(n))for(const t of n.q_)await t(!0)}async function mn(n){for(const t of n.q_)await t(!1)}function Qa(n,t){const e=F(n);e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),Os(e)?Ms(e):ke(e).s_()&&xs(e,t))}function Ns(n,t){const e=F(n),r=ke(e);e.L_.delete(t),r.s_()&&Ha(e,t),e.L_.size===0&&(r.s_()?r.a_():ce(e)&&e.K_.set("Unknown"))}function xs(n,t){if(n.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(n).V_(t)}function Ha(n,t){n.U_.xe(t),ke(n).m_(t)}function Ms(n){n.U_=new Fh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.L_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),ke(n).start(),n.K_.F_()}function Os(n){return ce(n)&&!ke(n).i_()&&n.L_.size>0}function ce(n){return F(n).k_.size===0}function Xa(n){n.U_=void 0}async function qd(n){n.K_.set("Online")}async function jd(n){n.L_.forEach((t,e)=>{xs(n,t)})}async function zd(n,t){Xa(n),Os(n)?(n.K_.O_(t),Ms(n)):n.K_.set("Unknown")}async function $d(n,t,e){if(n.K_.set("Online"),t instanceof Ma&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.L_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.L_.delete(c),i.U_.removeTarget(c))}(n,t)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await rr(n,r)}else if(t instanceof Gn?n.U_.$e(t):t instanceof xa?n.U_.Je(t):n.U_.Ge(t),!e.isEqual(L.min()))try{const r=await Ga(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.U_.it(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.L_.get(f);_&&o.L_.set(f,_.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const _=o.L_.get(h);if(!_)return;o.L_.set(h,_.withResumeToken(ct.EMPTY_BYTE_STRING,_.snapshotVersion)),Ha(o,h);const A=new zt(_.target,h,f,_.sequenceNumber);xs(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await rr(n,r)}}async function rr(n,t,e){if(!De(t))throw t;n.k_.add(1),await mn(n),n.K_.set("Offline"),e||(e=()=>Ga(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await _r(n)})}function Ya(n,t){return t().catch(e=>rr(n,e,t))}async function yr(n){const t=F(n),e=Zt(t);let r=t.B_.length>0?t.B_[t.B_.length-1].batchId:-1;for(;Gd(t);)try{const i=await Pd(t.localStore,r);if(i===null){t.B_.length===0&&e.a_();break}r=i.batchId,Kd(t,i)}catch(i){await rr(t,i)}Ja(t)&&Za(t)}function Gd(n){return ce(n)&&n.B_.length<10}function Kd(n,t){n.B_.push(t);const e=Zt(n);e.s_()&&e.f_&&e.g_(t.mutations)}function Ja(n){return ce(n)&&!Zt(n).i_()&&n.B_.length>0}function Za(n){Zt(n).start()}async function Wd(n){Zt(n).w_()}async function Qd(n){const t=Zt(n);for(const e of n.B_)t.g_(e.mutations)}async function Hd(n,t,e){const r=n.B_.shift(),i=Ss.from(r,t,e);await Ya(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await yr(n)}async function Xd(n,t){t&&Zt(n).f_&&await async function(r,i){if(function(u){return Mh(u)&&u!==S.ABORTED}(i.code)){const o=r.B_.shift();Zt(r).__(),await Ya(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await yr(r)}}(n,t),Ja(n)&&Za(n)}async function Do(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=ce(e);e.k_.add(3),await mn(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await _r(e)}async function Yd(n,t){const e=F(n);t?(e.k_.delete(2),await _r(e)):t||(e.k_.add(2),await mn(e),e.K_.set("Unknown"))}function ke(n){return n.W_||(n.W_=function(e,r,i){const o=F(e);return o.b_(),new Od(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:qd.bind(null,n),mo:jd.bind(null,n),po:zd.bind(null,n),R_:$d.bind(null,n)}),n.q_.push(async t=>{t?(n.W_.__(),Os(n)?Ms(n):n.K_.set("Unknown")):(await n.W_.stop(),Xa(n))})),n.W_}function Zt(n){return n.G_||(n.G_=function(e,r,i){const o=F(e);return o.b_(),new Ld(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Wd.bind(null,n),po:Xd.bind(null,n),p_:Qd.bind(null,n),y_:Hd.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await yr(n)):(await n.G_.stop(),n.B_.length>0&&(b("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new Ls(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fs(n,t){if(Lt("AsyncQueue",`${t}: ${n}`),De(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static emptySet(t){return new Te(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=Ye(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Te;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.z_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.z_.get(e);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(e,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(e):t.type===1&&r.type===2?this.z_=this.z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ce{constructor(t,e,r,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ce(t,e,Te.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Zd{constructor(){this.queries=No(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=No(),o.forEach((u,c)=>{for(const h of c.J_)h.onError(r)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function No(){return new ue(n=>Ta(n),hr)}async function tf(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(r=2):(o=new Jd,r=t.Z_()?0:1);try{switch(r){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Fs(u,`Initialization of query '${ge(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&Us(e)}async function ef(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function nf(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.J_)c.ta(i)&&(r=!0);u.H_=i}}r&&Us(e)}function rf(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.J_)o.onError(e);r.queries.delete(t)}function Us(n){n.X_.forEach(t=>{t.next()})}var gs,xo;(xo=gs||(gs={})).na="default",xo.Cache="cache";class sf{constructor(t,e,r){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ce(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const r=e!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==gs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.key=t}}class eu{constructor(t){this.key=t}}class of{constructor(t,e){this.query=t,this.Ea=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=U(),this.mutatedKeys=U(),this.Va=Ia(t),this.ma=new Te(this.Va)}get fa(){return this.Ea}ga(t,e){const r=e?e.pa:new ko,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const C=i.get(_),P=dr(this.query,A)?A:null,k=!!C&&this.mutatedKeys.has(C.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;C&&P?C.data.isEqual(P.data)?k!==x&&(r.track({type:3,doc:P}),D=!0):this.ya(C,P)||(r.track({type:2,doc:P}),D=!0,(h&&this.Va(P,h)>0||f&&this.Va(P,f)<0)&&(c=!0)):!C&&P?(r.track({type:0,doc:P}),D=!0):C&&!P&&(r.track({type:1,doc:C}),D=!0,(h||f)&&(c=!0)),D&&(P?(u=u.add(P),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{ma:u,pa:r,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((_,A)=>function(P,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return x(P)-x(k)}(_.type,A.type)||this.Va(_.doc,A.doc)),this.wa(r),i=i!=null&&i;const c=e&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,f=h!==this.Aa;return this.Aa=h,u.length!==0||f?{snapshot:new Ce(this.query,t.ma,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ko,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.Ea.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=U(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const e=[];return t.forEach(r=>{this.Ra.has(r)||e.push(new eu(r))}),this.Ra.forEach(r=>{t.has(r)||e.push(new tu(r))}),e}va(t){this.Ea=t.Es,this.Ra=U();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Ce.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class af{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class uf{constructor(t){this.key=t,this.Fa=!1}}class lf{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new ue(c=>Ta(c),hr),this.Oa=new Map,this.Na=new Set,this.Ba=new Y(M.comparator),this.La=new Map,this.ka=new bs,this.qa={},this.Qa=new Map,this.Ka=Re.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function cf(n,t,e=!0){const r=au(n);let i;const o=r.xa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await nu(r,t,e,!0),i}async function hf(n,t){const e=au(n);await nu(e,t,!0,!1)}async function nu(n,t,e,r){const i=await Vd(n.localStore,St(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await df(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&Qa(n.remoteStore,i),c}async function df(n,t,e,r,i){n.Ua=(A,C,P)=>async function(x,D,G,K){let W=D.view.ga(G);W.ss&&(W=await Po(x.localStore,D.query,!1).then(({documents:T})=>D.view.ga(T,W)));const st=K&&K.targetChanges.get(D.targetId),Dt=K&&K.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(W,x.isPrimaryClient,st,Dt);return Oo(x,D.targetId,ot.ba),ot.snapshot}(n,A,C,P);const o=await Po(n.localStore,t,!0),u=new of(t,o.Es),c=u.ga(o.documents),h=fn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(c,n.isPrimaryClient,h);Oo(n,e,f.ba);const _=new af(t,e,u);return n.xa.set(t,_),n.Oa.has(e)?n.Oa.get(e).push(t):n.Oa.set(e,[t]),f.snapshot}async function ff(n,t,e){const r=F(n),i=r.xa.get(t),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(u=>!hr(u,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ps(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ns(r.remoteStore,i.targetId),_s(r,i.targetId)}).catch(be)):(_s(r,i.targetId),await ps(r.localStore,i.targetId,!0))}async function mf(n,t){const e=F(n),r=e.xa.get(t),i=e.Oa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ns(e.remoteStore,r.targetId))}async function pf(n,t,e){const r=vf(n);try{const i=await function(u,c){const h=F(u),f=nt.now(),_=c.reduce((P,k)=>P.add(k.key),U());let A,C;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=Ft(),x=U();return h.hs.getEntries(P,_).next(D=>{k=D,k.forEach((G,K)=>{K.isValidDocument()||(x=x.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,k)).next(D=>{A=D;const G=[];for(const K of c){const W=bh(K,A.get(K.key).overlayedDocument);W!=null&&G.push(new le(K.key,W,da(W.value.mapValue),Mt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,G,c)}).next(D=>{C=D;const G=D.applyToLocalDocumentSet(A,x);return h.documentOverlayCache.saveOverlays(P,D.batchId,G)})}).then(()=>({batchId:C.batchId,changes:Aa(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.qa[u.currentUser.toKey()];f||(f=new Y(B)),f=f.insert(c,h),u.qa[u.currentUser.toKey()]=f}(r,i.batchId,e),await pn(r,i.changes),await yr(r.remoteStore)}catch(i){const o=Fs(i,"Failed to persist write");e.reject(o)}}async function ru(n,t){const e=F(n);try{const r=await Cd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.La.get(o);u&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Fa=!0:i.modifiedDocuments.size>0?$(u.Fa):i.removedDocuments.size>0&&($(u.Fa),u.Fa=!1))}),await pn(e,r,t)}catch(r){await be(r)}}function Mo(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach((_,A)=>{for(const C of A.J_)C.ea(c)&&(f=!0)}),f&&Us(h)}(r.eventManager,t),i.length&&r.Ma.R_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function gf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.La.get(t),o=i&&i.key;if(o){let u=new Y(M.comparator);u=u.insert(o,_t.newNoDocument(o,L.min()));const c=U().add(o),h=new pr(L.min(),new Map,new Y(B),u,c);await ru(r,h),r.Ba=r.Ba.remove(o),r.La.delete(t),Bs(r)}else await ps(r.localStore,t,!1).then(()=>_s(r,t,e)).catch(be)}async function _f(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Rd(e.localStore,t);iu(e,r,null),su(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await pn(e,i)}catch(i){await be(i)}}async function yf(n,t,e){const r=F(n);try{const i=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>($(A!==null),_=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>h.localDocuments.getDocuments(f,_))})}(r.localStore,t);iu(r,t,e),su(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await pn(r,i)}catch(i){await be(i)}}function su(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function iu(n,t,e){const r=F(n);let i=r.qa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.qa[r.currentUser.toKey()]=i}}function _s(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Oa.get(t))n.xa.delete(r),e&&n.Ma.Wa(r,e);n.Oa.delete(t),n.isPrimaryClient&&n.ka.yr(t).forEach(r=>{n.ka.containsKey(r)||ou(n,r)})}function ou(n,t){n.Na.delete(t.path.canonicalString());const e=n.Ba.get(t);e!==null&&(Ns(n.remoteStore,e),n.Ba=n.Ba.remove(t),n.La.delete(e),Bs(n))}function Oo(n,t,e){for(const r of e)r instanceof tu?(n.ka.addReference(r.key,t),Ef(n,r)):r instanceof eu?(b("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,t),n.ka.containsKey(r.key)||ou(n,r.key)):O()}function Ef(n,t){const e=t.key,r=e.path.canonicalString();n.Ba.get(e)||n.Na.has(r)||(b("SyncEngine","New document in limbo: "+e),n.Na.add(r),Bs(n))}function Bs(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const t=n.Na.values().next().value;n.Na.delete(t);const e=new M(X.fromString(t)),r=n.Ka.next();n.La.set(r,new uf(e)),n.Ba=n.Ba.insert(e,r),Qa(n.remoteStore,new zt(St(Ea(e.path)),r,"TargetPurposeLimboResolution",ar.oe))}}async function pn(n,t,e){const r=F(n),i=[],o=[],u=[];r.xa.isEmpty()||(r.xa.forEach((c,h)=>{u.push(r.Ua(h,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){i.push(f);const A=ks.zi(h.targetId,f);o.push(A)}}))}),await Promise.all(u),r.Ma.R_(i),await async function(h,f){const _=F(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,C=>R.forEach(C.Wi,P=>_.persistence.referenceDelegate.addReference(A,C.targetId,P)).next(()=>R.forEach(C.Gi,P=>_.persistence.referenceDelegate.removeReference(A,C.targetId,P)))))}catch(A){if(!De(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const C=A.targetId;if(!A.fromCache){const P=_.us.get(C),k=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(k);_.us=_.us.insert(C,x)}}}(r.localStore,o))}async function Tf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const r=await $a(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new N(S.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await pn(e,r.Ts)}}function If(n,t){const e=F(n),r=e.La.get(t);if(r&&r.Fa)return U().add(r.key);{let i=U();const o=e.Oa.get(t);if(!o)return i;for(const u of o){const c=e.xa.get(u);i=i.unionWith(c.view.fa)}return i}}function au(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ru.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=If.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gf.bind(null,t),t.Ma.R_=nf.bind(null,t.eventManager),t.Ma.Wa=rf.bind(null,t.eventManager),t}function vf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=_f.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yf.bind(null,t),t}class sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=gr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return wd(this.persistence,new vd,t.initialUser,this.serializer)}ja(t){return new za(Ds.ei,this.serializer)}za(t){return new Dd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sr.provider={build:()=>new sr};class Af extends sr{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){$(this.persistence.referenceDelegate instanceof nr);const r=this.persistence.referenceDelegate.garbageCollector;return new ad(r,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new za(r=>nr.ei(r,e),this.serializer)}}class ys{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await Yd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Zd}()}createDatastore(t){const e=gr(t.databaseInfo.databaseId),r=function(o){return new Md(o)}(t.databaseInfo);return function(o,u,c,h){return new Fd(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,c){return new Bd(r,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Mo(this.syncEngine,e,0),function(){return bo.p()?new bo:new kd}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,_){const A=new lf(i,o,u,c,h,f);return _&&(A.$a=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);b("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await mn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ys.provider={build:()=>new ys};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=la.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{b("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(b("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Jr(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $a(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Lo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Cf(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Do(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Do(t.remoteStore,i)),n._onlineComponents=t}async function Cf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ie("Error using user provided cache. Falling back to memory cache: "+e),await Jr(n,new sr)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Jr(n,new Af(void 0));return n._offlineComponents}async function uu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Lo(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Lo(n,new ys))),n._onlineComponents}function Sf(n){return uu(n).then(t=>t.syncEngine)}async function Pf(n){const t=await uu(n),e=t.eventManager;return e.onListen=cf.bind(null,t.syncEngine),e.onUnlisten=ff.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=hf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mf.bind(null,t.syncEngine),e}function Vf(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const _=new wf({next:C=>{_.eu(),u.enqueueAndForget(()=>ef(o,A)),C.fromCache&&h.source==="server"?f.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(C)},error:C=>f.reject(C)}),A=new sf(c,_,{includeMetadataChanges:!0,ua:!0});return tf(o,A)}(await Pf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function bf(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Uo(n){if(!M.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bo(n){if(M.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function ir(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=qs(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Er{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oc;switch(r.type){case"firstParty":return new Bc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Fo.get(e);r&&(b("ComponentProvider","Removing Datastore"),Fo.delete(e),r.terminate())}(this),Promise.resolve()}}function Df(n,t,e,r={}){var i;const o=(n=ir(n,Er))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Ie("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=gt.MOCK_USER;else{c=pl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}n._authCredentials=new Lc(new ua(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Tr(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Qt extends Tr{constructor(t,e,r){super(t,e,Ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function hu(n,t,...e){if(n=rn(n),cu("collection","path",t),n instanceof Er){const r=X.fromString(t,...e);return Bo(r),new Qt(n,null,r)}{if(!(n instanceof Rt||n instanceof Qt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Bo(r),new Qt(n.firestore,null,r)}}function kf(n,t,...e){if(n=rn(n),arguments.length===1&&(t=la.newId()),cu("doc","path",t),n instanceof Er){const r=X.fromString(t,...e);return Uo(r),new Rt(n,null,new M(r))}{if(!(n instanceof Rt||n instanceof Qt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Uo(r),new Rt(n.firestore,n instanceof Qt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ka(this,"async_queue_retry"),this.fu=()=>{const r=Yr();r&&b("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const e=Yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.du){this.du=!0,this.Vu=t||!1;const e=Yr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.du)return new Promise(()=>{});const e=new Wt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!De(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=e,e}enqueueAfterDelay(t,e,r){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=Ls.createAndSchedule(this,t,e,r,o=>this.Su(o));return this.Eu.push(i),i}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.Eu)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.Eu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Eu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.Eu.indexOf(t);this.Eu.splice(e,1)}}class js extends Er{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new jo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new jo(t),this._firestoreClient=void 0,await t}}}function Nf(n,t){const e=typeof n=="object"?n:wc(),r=typeof n=="string"?n:"(default)",i=Tc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=fl("firestore");o&&Df(i,...o)}return i}function du(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xf(n),n._firestoreClient}function xf(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,f,_){return new eh(c,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,lu(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Rf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Se(ct.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Se(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=/^__.*__$/;class Of{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new dn(t,this.data,e,this.fieldTransforms)}}function mu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ks{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Bu(t),i}Lu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return or(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Bu(this.path.get(t))}Bu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(mu(this.Mu)&&Mf.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Lf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||gr(t)}$u(t,e,r,i=!1){return new Ks({Mu:t,methodName:e,Ku:r,path:lt.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ff(n){const t=n._freezeSettings(),e=gr(n._databaseId);return new Lf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Uf(n,t,e,r,i,o={}){const u=n.$u(o.merge||o.mergeFields?2:0,t,e,i);yu("Data must be an object, but it was:",u,r);const c=gu(r,u);let h,f;if(o.merge)h=new wt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const C=Bf(t,A,e);if(!u.contains(C))throw new N(S.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);jf(_,C)||_.push(C)}h=new wt(_),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new Of(new vt(c),h,f)}function pu(n,t){if(_u(n=rn(n)))return yu("Unsupported field value:",t,n),gu(n,t);if(n instanceof fu)return function(r,i){if(!mu(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,i){const o=[];let u=0;for(const c of r){let h=pu(c,i.ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=rn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:er(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:er(i.serializer,o)}}if(r instanceof $s)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Se)return{bytesValue:Oa(i.serializer,r._byteString)};if(r instanceof Rt){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Vs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Gs)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return Cs(c.serializer,h)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${qs(r)}`)}(n,t)}function gu(n,t){const e={};return ca(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(n,(r,i)=>{const o=pu(i,t.Ou(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function _u(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof $s||n instanceof Se||n instanceof Rt||n instanceof fu||n instanceof Gs)}function yu(n,t,e){if(!_u(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=qs(e);throw r==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+r)}}function Bf(n,t,e){if((t=rn(t))instanceof zs)return t._internalPath;if(typeof t=="string")return Eu(n,t);throw or("Field path arguments must be of type string or ",n,!1,void 0,e)}const qf=new RegExp("[~\\*/\\[\\]]");function Eu(n,t,e){if(t.search(qf)>=0)throw or(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new zs(...t.split("."))._internalPath}catch{throw or(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function or(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new N(S.INVALID_ARGUMENT,c+n+h)}function jf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Iu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class zf extends Tu{data(){return super.data()}}function Iu(n,t){return typeof t=="string"?Eu(n,t):t instanceof zs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gf{convertValue(t,e="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ae(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>Z(u.doubleValue));return new Gs(o)}convertGeoPoint(t){return new $s(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=lr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);$(ja(r));const i=new un(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wf extends Tu{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Iu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Kn extends Wf{data(t={}){return super.data(t)}}class Qf{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Bn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Kn(this._firestore,this._userDataWriter,r.key,r,new Bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Kn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Kn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Bn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:Hf(c.type),doc:h,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Xf extends Gf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Se(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function Yf(n){n=ir(n,Tr);const t=ir(n.firestore,js),e=du(t),r=new Xf(t);return $f(n._query),Vf(e,n._query).then(i=>new Qf(t,r,n,i))}function Jf(n,t){const e=ir(n.firestore,js),r=kf(n),i=Kf(n.converter,t);return Zf(e,[Uf(Ff(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function Zf(n,t){return function(r,i){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>pf(await Sf(r),i,o)),o.promise}(du(n),t)}(function(t,e=!0){(function(i){Ve=i})(Ac),Hn(new sn("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new js(new Fc(r.getProvider("auth-internal")),new jc(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ee(so,"4.7.6",t),Ee(so,"4.7.6","esm2017")})();const tm=document.getElementById("taskInput"),em=document.getElementById("addTaskBtn"),zo=document.getElementById("taskList"),nm={apiKey:"AIzaSyDo9nRtzMTFaGFfGWgqlcksi5Y9h7x46x0",authDomain:"webdevtrends-59dcf.firebaseapp.com",projectId:"webdevtrends-59dcf",storageBucket:"webdevtrends-59dcf.firebasestorage.app",messagingSenderId:"711058905449",appId:"1:711058905449:web:b29e4821f76656e45cc5f8"},rm=Zo(nm),vu=Nf(rm);function sm(n){const t=document.createElement("div");return t.textContent=n,t.innerHTML}em.addEventListener("click",async()=>{if(tm.value.trim()){const t=document.getElementById("taskInput"),e=sm(t.value.trim());e&&(await im(e),$o(),t.value=""),$o()}console.log("Task Added")});async function im(n){await Jf(hu(vu,"tasks"),{text:n,completed:!1}),console.log("Task Added to Firestore")}async function $o(){var n=await om();zo.innerHTML="",n.forEach((t,e)=>{if(!t.data().completed){const r=document.createElement("li");r.id=t.id,r.textContent=t.data().text,zo.appendChild(r)}})}async function om(){var n=await Yf(hu(vu,"todos"));let t=[];return n.forEach(e=>{t.push(e)}),t}const Go=new URL("data:text/javascript;base64,Y29uc3QgQ0FDSEVfTkFNRSA9ICd0by1kby1wd2EtY2FjaGUtdjEnOw0KY29uc3QgRklMRVNfVE9fQ0FDSEUgPSBbDQogICAgJy9XZWJEZXZUcmVuZHMvJywNCiAgICAnL1dlYkRldlRyZW5kcy9pbmRleC5odG1sJywNCiAgICAnL1dlYkRldlRyZW5kcy9zdHlsZS5jc3MnLA0KICAgICcvV2ViRGV2VHJlbmRzL2FwcC5qcycsDQogICAgJy9XZWJEZXZUcmVuZHMvbWFuaWZlc3QuanNvbicsDQogICAgJy9XZWJEZXZUcmVuZHMvaWNvbnMvaWNvbi0xMjgucG5nJywNCiAgICAnL1dlYkRldlRyZW5kcy9pY29ucy9pY29uLTUxMi5wbmcnDQoNCl07DQoNCnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIChldmVudCkgPT4gew0KICAgIGV2ZW50LndhaXRVbnRpbCgNCiAgICAgICAgY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSkNCiAgICAgICAgICAgIC50aGVuKChjYWNoZSkgPT4gY2FjaGUuYWRkQWxsKEZJTEVTX1RPX0NBQ0hFKSkNCiAgICApOw0KfSk7DQoNCnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZXZlbnQpID0+IHsNCiAgICBldmVudC5yZXNwb25kV2l0aCgNCiAgICAgICAgY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpDQogICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlIHx8IGZldGNoKGV2ZW50LnJlcXVlc3QpKQ0KICAgICk7DQp9KTs=",import.meta.url);"serviceWorker"in navigator&&navigator.serviceWorker.register(Go.href,{scope:"/WebDevTrends/"}).then(t=>console.log("Service Worker Registered for scope:",Go.href,"with",import.meta.url)).catch(t=>console.error("Service Worker Error:",t));

(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.cw(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.cx(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.aG(b)
return new t(c,this)}:function(){if(t===null)t=A.aG(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.aG(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={aw:function aw(){},aa:function aa(a){this.a=a},
bl(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
l(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.Y(a)
return t},
ac(a){return A.by(a)},
by(a){var t,s,r,q
if(a instanceof A.f)return A.i(A.W(a),null)
t=J.V(a)
if(t===B.m||t===B.p||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.i(A.W(a),null)},
aK(a,b){if(a==null)J.aN(a)
throw A.c(A.ci(a,b))},
ci(a,b){var t,s="index"
if(!A.bc(b))return new A.y(!0,b,s,null)
t=A.aD(J.aN(a))
if(b<0||b>=t)return new A.a8(t,!0,b,s,"Index out of range")
return new A.ad(null,null,!0,b,s,"Value not in range")},
c(a){var t,s
if(a==null)a=new A.ab()
t=new Error()
t.dartException=a
s=A.cy
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
cy(){return J.Y(this.dartException)},
aM(a){throw A.c(a)},
cv(a){throw A.c(new A.a2(a))},
bu(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ag().constructor.prototype):Object.create(new A.K(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.aS(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.bq(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.aS(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
bq(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.bo)}throw A.c("Error in functionType of tearoff")},
br(a,b,c,d){var t=A.aR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aS(a,b,c,d){var t,s
if(c)return A.bt(a,b,d)
t=b.length
s=A.br(t,d,a,b)
return s},
bs(a,b,c,d){var t=A.aR,s=A.bp
switch(b?-1:a){case 0:throw A.c(new A.ae("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
bt(a,b,c){var t,s
if($.aP==null)$.aP=A.aO("interceptor")
if($.aQ==null)$.aQ=A.aO("receiver")
t=b.length
s=A.bs(t,c,a,b)
return s},
aG(a){return A.bu(a)},
bo(a,b){return A.ao(v.typeUniverse,A.W(a.a),b)},
aR(a){return a.a},
bp(a){return a.b},
aO(a){var t,s,r,q=new A.K("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.c(new A.y(!1,null,null,"Field name "+a+" not found."))},
cw(a){throw A.c(new A.a3(a))},
cm(a){return v.getIsolateTag(a)},
cs(a){var t,s,r,q,p,o=A.b7($.bh.$1(a)),n=$.aq[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.au[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.bW($.bf.$2(a,o))
if(r!=null){n=$.aq[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.au[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.av(t)
$.aq[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.au[o]=t
return t}if(q==="-"){p=A.av(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bj(a,t)
if(q==="*")throw A.c(A.aY(o))
if(v.leafTags[o]===true){p=A.av(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bj(a,t)},
bj(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.aL(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
av(a){return J.aL(a,!1,null,!!a.$icB)},
cu(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.av(t)
else return J.aL(t,c,null,null)},
cp(){if(!0===$.aI)return
$.aI=!0
A.cq()},
cq(){var t,s,r,q,p,o,n,m
$.aq=Object.create(null)
$.au=Object.create(null)
A.co()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bk.$1(p)
if(o!=null){n=A.cu(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
co(){var t,s,r,q,p,o,n=B.f()
n=A.x(B.h,A.x(B.i,A.x(B.c,A.x(B.c,A.x(B.j,A.x(B.k,A.x(B.l(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bh=new A.ar(q)
$.bf=new A.as(p)
$.bk=new A.at(o)},
x(a,b){return a(b)||b},
t:function t(){},
a1:function a1(){},
aj:function aj(){},
ag:function ag(){},
K:function K(a,b){this.a=a
this.b=b},
ae:function ae(a){this.a=a},
ar:function ar(a){this.a=a},
as:function as(a){this.a=a},
at:function at(a){this.a=a},
aW(a,b){var t=b.c
return t==null?b.c=A.aA(a,b.y,!0):t},
aV(a,b){var t=b.c
return t==null?b.c=A.D(a,"aT",[b.y]):t},
aX(a){var t=a.x
if(t===6||t===7||t===8)return A.aX(a.y)
return t===12||t===13},
bz(a){return a.at},
bg(a){return A.aB(v.typeUniverse,a,!1)},
q(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.q(a,t,c,a0)
if(s===t)return b
return A.b4(a,s,!0)
case 7:t=b.y
s=A.q(a,t,c,a0)
if(s===t)return b
return A.aA(a,s,!0)
case 8:t=b.y
s=A.q(a,t,c,a0)
if(s===t)return b
return A.b3(a,s,!0)
case 9:r=b.z
q=A.F(a,r,c,a0)
if(q===r)return b
return A.D(a,b.y,q)
case 10:p=b.y
o=A.q(a,p,c,a0)
n=b.z
m=A.F(a,n,c,a0)
if(o===p&&m===n)return b
return A.ay(a,o,m)
case 12:l=b.y
k=A.q(a,l,c,a0)
j=b.z
i=A.ce(a,j,c,a0)
if(k===l&&i===j)return b
return A.b2(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.F(a,h,c,a0)
p=b.y
o=A.q(a,p,c,a0)
if(g===h&&o===p)return b
return A.az(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.c(A.J("Attempted to substitute unexpected RTI kind "+d))}},
F(a,b,c,d){var t,s,r,q,p=b.length,o=A.ap(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.q(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
cf(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.ap(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.q(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
ce(a,b,c,d){var t,s=b.a,r=A.F(a,s,c,d),q=b.b,p=A.F(a,q,c,d),o=b.c,n=A.cf(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.S()
t.a=r
t.b=p
t.c=n
return t},
be(a,b){a[v.arrayRti]=b
return a},
ch(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.cn(s)
t=a.$S()
return t}return null},
bi(a,b){var t
if(A.aX(b))if(a instanceof A.t){t=A.ch(a)
if(t!=null)return t}return A.W(a)},
W(a){var t
if(a instanceof A.f){t=a.$ti
return t!=null?t:A.aE(a)}if(Array.isArray(a))return A.aC(a)
return A.aE(J.V(a))},
aC(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cP(a){var t=a.$ti
return t!=null?t:A.aE(a)},
aE(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.c3(a,t)},
c3(a,b){var t=a instanceof A.t?a.__proto__.__proto__.constructor:b,s=A.bS(v.typeUniverse,t.name)
b.$ccache=s
return s},
cn(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.aB(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
c2(a){var t,s,r,q,p=this
if(p===u.K)return A.w(p,a,A.c7)
if(!A.n(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.w(p,a,A.cc)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.bc
else if(s===u.i||s===u.H)r=A.c6
else if(s===u.N)r=A.c9
else r=s===u.y?A.ba:null
if(r!=null)return A.w(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.cr)){p.r="$i"+q
if(q==="bx")return A.w(p,a,A.c5)
return A.w(p,a,A.ca)}}else if(t===7)return A.w(p,a,A.c0)
return A.w(p,a,A.bZ)},
w(a,b,c){a.b=c
return a.b(b)},
c1(a){var t,s=this,r=A.bY
if(!A.n(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.bX
else if(s===u.K)r=A.bV
else{t=A.H(s)
if(t)r=A.c_}s.a=r
return s.a(a)},
U(a){var t,s=a.x
if(!A.n(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.U(a.y)))t=s===8&&A.U(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
bZ(a){var t=this
if(a==null)return A.U(t)
return A.d(v.typeUniverse,A.bi(a,t),null,t,null)},
c0(a){if(a==null)return!0
return this.y.b(a)},
ca(a){var t,s=this
if(a==null)return A.U(s)
t=s.r
if(a instanceof A.f)return!!a[t]
return!!J.V(a)[t]},
c5(a){var t,s=this
if(a==null)return A.U(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.f)return!!a[t]
return!!J.V(a)[t]},
bY(a){var t,s=this
if(a==null){t=A.H(s)
if(t)return a}else if(s.b(a))return a
A.b8(a,s)},
c_(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.b8(a,t)},
b8(a,b){throw A.c(A.bI(A.aZ(a,A.bi(a,b),A.i(b,null))))},
aZ(a,b,c){var t=A.a6(a)
return t+": type '"+A.i(b==null?A.W(a):b,null)+"' is not a subtype of type '"+c+"'"},
bI(a){return new A.T("TypeError: "+a)},
h(a,b){return new A.T("TypeError: "+A.aZ(a,null,b))},
c7(a){return a!=null},
bV(a){if(a!=null)return a
throw A.c(A.h(a,"Object"))},
cc(a){return!0},
bX(a){return a},
ba(a){return!0===a||!1===a},
cE(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.h(a,"bool"))},
cG(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.h(a,"bool"))},
cF(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.h(a,"bool?"))},
cH(a){if(typeof a=="number")return a
throw A.c(A.h(a,"double"))},
cJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"double"))},
cI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"double?"))},
bc(a){return typeof a=="number"&&Math.floor(a)===a},
aD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.h(a,"int"))},
cL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.h(a,"int"))},
cK(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.h(a,"int?"))},
c6(a){return typeof a=="number"},
cM(a){if(typeof a=="number")return a
throw A.c(A.h(a,"num"))},
cN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"num"))},
bU(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.h(a,"num?"))},
c9(a){return typeof a=="string"},
b7(a){if(typeof a=="string")return a
throw A.c(A.h(a,"String"))},
cO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.h(a,"String"))},
bW(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.h(a,"String?"))},
bd(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.i(a[r],b)
return t},
cd(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.bd(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.i(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
b9(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.be([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.d.q(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.aK(a4,k)
n=B.n.t(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.i(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.i(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.i(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.i(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.i(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
i(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.i(a.y,b)
return t}if(m===7){s=a.y
t=A.i(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.i(a.y,b)+">"
if(m===9){q=A.cg(a.y)
p=a.z
return p.length>0?q+("<"+A.bd(p,b)+">"):q}if(m===11)return A.cd(a,b)
if(m===12)return A.b9(a,b,null)
if(m===13)return A.b9(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.aK(b,o)
return b[o]}return"?"},
cg(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
bT(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
bS(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.aB(a,b,!1)
else if(typeof n=="number"){t=n
s=A.E(a,5,"#")
r=A.ap(t)
for(q=0;q<t;++q)r[q]=s
p=A.D(a,b,r)
o[b]=p
return p}else return n},
bQ(a,b){return A.b5(a.tR,b)},
cD(a,b){return A.b5(a.eT,b)},
aB(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.b1(A.b_(a,null,b,c))
s.set(b,t)
return t},
ao(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.b1(A.b_(a,b,c,!0))
r.set(c,s)
return s},
bR(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.ay(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
m(a,b){b.a=A.c1
b.b=A.c2
return b},
E(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.j(null,null)
t.x=b
t.at=c
s=A.m(a,t)
a.eC.set(c,s)
return s},
b4(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.bN(a,b,s,c)
a.eC.set(s,t)
return t},
bN(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.n(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.j(null,null)
r.x=6
r.y=b
r.at=c
return A.m(a,r)},
aA(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.bM(a,b,s,c)
a.eC.set(s,t)
return t},
bM(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.n(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.H(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.H(r.y))return r
else return A.aW(a,b)}}q=new A.j(null,null)
q.x=7
q.y=b
q.at=c
return A.m(a,q)},
b3(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.bK(a,b,s,c)
a.eC.set(s,t)
return t},
bK(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.n(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.D(a,"aT",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.j(null,null)
r.x=8
r.y=b
r.at=c
return A.m(a,r)},
bO(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.j(null,null)
t.x=14
t.y=b
t.at=r
s=A.m(a,t)
a.eC.set(r,s)
return s},
C(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
bJ(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
D(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.C(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.j(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.m(a,s)
a.eC.set(q,r)
return r},
ay(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.C(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.j(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.m(a,p)
a.eC.set(r,o)
return o},
bP(a,b,c){var t,s,r="+"+(b+"("+A.C(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.j(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.m(a,t)
a.eC.set(r,s)
return s},
b2(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.C(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.C(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.bJ(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.j(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.m(a,q)
a.eC.set(s,p)
return p},
az(a,b,c,d){var t,s=b.at+("<"+A.C(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.bL(a,b,c,s,d)
a.eC.set(s,t)
return t},
bL(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.ap(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.q(a,b,s,0)
n=A.F(a,c,s,0)
return A.az(a,o,n,c!==n)}}m=new A.j(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.m(a,m)},
b_(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
b1(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.bE(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.b0(a,s,k,j,!1)
else if(r===46)s=A.b0(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.p(a.u,a.e,j.pop()))
break
case 94:j.push(A.bO(a.u,j.pop()))
break
case 35:j.push(A.E(a.u,5,"#"))
break
case 64:j.push(A.E(a.u,2,"@"))
break
case 126:j.push(A.E(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.ax(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.D(q,o,p))
else{n=A.p(q,a.e,o)
switch(n.x){case 12:j.push(A.az(q,n,p,a.n))
break
default:j.push(A.ay(q,n,p))
break}}break
case 38:A.bF(a,j)
break
case 42:q=a.u
j.push(A.b4(q,A.p(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.aA(q,A.p(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.b3(q,A.p(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.bD(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.ax(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.bH(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-2)
break
case 43:m=k.indexOf("(",s)
j.push(k.substring(s,m))
j.push(-4)
j.push(a.p)
a.p=j.length
s=m+1
break
default:throw"Bad character "+r}}}l=j.pop()
return A.p(a.u,a.e,l)},
bE(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
b0(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.bT(t,p.y)[q]
if(o==null)A.aM('No "'+q+'" in "'+A.bz(p)+'"')
d.push(A.ao(t,p,o))}else d.push(q)
return n},
bD(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.bC(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.p(n,a.e,m)
p=new A.S()
p.a=r
p.b=t
p.c=s
b.push(A.b2(n,q,p))
return
case-4:b.push(A.bP(n,b.pop(),r))
return
default:throw A.c(A.J("Unexpected state under `()`: "+A.l(m)))}},
bF(a,b){var t=b.pop()
if(0===t){b.push(A.E(a.u,1,"0&"))
return}if(1===t){b.push(A.E(a.u,4,"1&"))
return}throw A.c(A.J("Unexpected extended operation "+A.l(t)))},
bC(a,b){var t=b.splice(a.p)
A.ax(a.u,a.e,t)
a.p=b.pop()
return t},
p(a,b,c){if(typeof c=="string")return A.D(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.bG(a,b,c)}else return c},
ax(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.p(a,b,c[t])},
bH(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.p(a,b,c[t])},
bG(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.c(A.J("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.c(A.J("Bad index "+c+" for "+b.h(0)))},
d(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.n(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.n(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.d(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.d(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.d(a,b.y,c,d,e)
if(s===6)return A.d(a,b.y,c,d,e)
return s!==7}if(s===6)return A.d(a,b.y,c,d,e)
if(q===6){t=A.aW(a,d)
return A.d(a,b,c,t,e)}if(s===8){if(!A.d(a,b.y,c,d,e))return!1
return A.d(a,A.aV(a,b),c,d,e)}if(s===7){t=A.d(a,u.P,c,d,e)
return t&&A.d(a,b.y,c,d,e)}if(q===8){if(A.d(a,b,c,d.y,e))return!0
return A.d(a,b,c,A.aV(a,d),e)}if(q===7){t=A.d(a,b,c,u.P,e)
return t||A.d(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
p=b.z
o=d.z
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.d(a,l,c,k,e)||!A.d(a,k,e,l,c))return!1}return A.bb(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bb(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.c4(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.c8(a,b,c,d,e)
return!1},
bb(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.d(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.d(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.d(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.d(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.d(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
c4(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.ao(a,b,s[p])
return A.b6(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.b6(a,o,null,c,n,e)},
b6(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.d(a,s,d,r,f))return!1}return!0},
c8(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.d(a,s[t],c,r[t],e))return!1
return!0},
H(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.n(a))if(s!==7)if(!(s===6&&A.H(a.y)))t=s===8&&A.H(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cr(a){var t
if(!A.n(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
n(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
b5(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ap(a){return a>0?new Array(a):v.typeUniverse.sEA},
j:function j(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
S:function S(){this.c=this.b=this.a=null},
am:function am(){},
T:function T(a){this.a=a},
bv(a){if(a instanceof A.t)return a.h(0)
return"Instance of '"+A.ac(a)+"'"},
bA(a,b,c){var t,s=A.aC(b),r=new J.I(b,b.length,s.p("I<1>"))
if(!r.m())return a
if(c.length===0){s=s.c
do{t=r.d
a+=A.l(t==null?s.a(t):t)}while(r.m())}else{t=r.d
a+=A.l(t==null?s.c.a(t):t)
for(s=s.c;r.m();){t=r.d
a=a+c+A.l(t==null?s.a(t):t)}}return a},
a6(a){if(typeof a=="number"||A.ba(a)||a==null)return J.Y(a)
if(typeof a=="string")return JSON.stringify(a)
return A.bv(a)},
J(a){return new A.a0(a)},
bB(a){return new A.al(a)},
aY(a){return new A.ak(a)},
a5:function a5(){},
a0:function a0(a){this.a=a},
ab:function ab(){},
y:function y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
a8:function a8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
al:function al(a){this.a=a},
ak:function ak(a){this.a=a},
a2:function a2(a){this.a=a},
a3:function a3(a){this.a=a},
A:function A(){},
f:function f(){},
ai:function ai(a){this.a=a},
b:function b(){},
Z:function Z(){},
a_:function a_(){},
a4:function a4(){},
a:function a(){},
L:function L(){},
a7:function a7(){},
v:function v(){},
af:function af(){},
cx(a){return A.aM(new A.aa("Field '"+a+"' has been assigned during initialization."))},
bw(a,b,c){var t,s
if(A.cb(a))return b+"..."+c
t=new A.ai(b)
B.d.q($.G,a)
try{s=t
s.a=A.bA(s.a,a,", ")}finally{if(0>=$.G.length)return A.aK($.G,-1)
$.G.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cb(a){var t,s
for(t=$.G.length,s=0;s<t;++s)if(a===$.G[s])return!0
return!1},
ct(){var t=document.querySelector("#output")
if(t!=null)J.bn(t,"Your Dart app is running.")}},J={
aL(a,b,c,d){return{i:a,p:b,e:c,x:d}},
aH(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.aI==null){A.cp()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.c(A.aY("Return interceptor for "+A.l(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.an
if(p==null)p=$.an=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.cs(a)
if(q!=null)return q
if(typeof a=="function")return B.o
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.an
if(p==null)p=$.an=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
V(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.N.prototype
return J.P.prototype}if(typeof a=="string")return J.u.prototype
if(a==null)return J.O.prototype
if(typeof a=="boolean")return J.M.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.o.prototype
return a}if(a instanceof A.f)return a
return J.aH(a)},
ck(a){if(typeof a=="string")return J.u.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.o.prototype
return a}if(a instanceof A.f)return a
return J.aH(a)},
cl(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.o.prototype
return a}if(a instanceof A.f)return a
return J.aH(a)},
aN(a){return J.ck(a).gi(a)},
bn(a,b){return J.cl(a).sA(a,b)},
Y(a){return J.V(a).h(a)},
z:function z(){},
M:function M(){},
O:function O(){},
e:function e(){},
r:function r(){},
R:function R(){},
B:function B(){},
o:function o(){},
k:function k(a){this.$ti=a},
a9:function a9(a){this.$ti=a},
I:function I(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Q:function Q(){},
N:function N(){},
P:function P(){},
u:function u(){}},B={}
var w=[A,J,B]
var $={}
A.aw.prototype={}
J.z.prototype={
h(a){return"Instance of '"+A.ac(a)+"'"}}
J.M.prototype={
h(a){return String(a)},
$iaF:1}
J.O.prototype={
h(a){return"null"}}
J.e.prototype={}
J.r.prototype={
h(a){return String(a)}}
J.R.prototype={}
J.B.prototype={}
J.o.prototype={
h(a){var t=a[$.bm()]
if(t==null)return this.v(a)
return"JavaScript function for "+J.Y(t)}}
J.k.prototype={
q(a,b){A.aC(a).c.a(b)
if(!!a.fixed$length)A.aM(A.bB("add"))
a.push(b)},
h(a){return A.bw(a,"[","]")},
gi(a){return a.length},
$iaU:1}
J.a9.prototype={}
J.I.prototype={
m(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.c(A.cv(r))
t=s.c
if(t>=q){s.sn(null)
return!1}s.sn(r[t]);++s.c
return!0},
sn(a){this.d=this.$ti.p("1?").a(a)}}
J.Q.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$iX:1}
J.N.prototype={$iaJ:1}
J.P.prototype={}
J.u.prototype={
t(a,b){return a+b},
h(a){return a},
gi(a){return a.length},
$iah:1}
A.aa.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.t.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bl(s==null?"unknown":s)+"'"},
gB(){return this},
$C:"$1",
$R:1,
$D:null}
A.a1.prototype={$C:"$2",$R:2}
A.aj.prototype={}
A.ag.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bl(t)+"'"}}
A.K.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ac(this.a)+"'")}}
A.ae.prototype={
h(a){return"RuntimeError: "+this.a}}
A.ar.prototype={
$1(a){return this.a(a)}}
A.as.prototype={
$2(a,b){return this.a(a,b)}}
A.at.prototype={
$1(a){return this.a(A.b7(a))}}
A.j.prototype={
p(a){return A.ao(v.typeUniverse,this,a)},
C(a){return A.bR(v.typeUniverse,this,a)}}
A.S.prototype={}
A.am.prototype={
h(a){return this.a}}
A.T.prototype={}
A.a5.prototype={}
A.a0.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a6(t)
return"Assertion failed"}}
A.ab.prototype={
h(a){return"Throw of null."}}
A.y.prototype={
gk(){return"Invalid argument"+(!this.a?"(s)":"")},
gj(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gk()+r+p
if(!t.a)return o
return o+t.gj()+": "+A.a6(t.gl())},
gl(){return this.b}}
A.ad.prototype={
gl(){return A.bU(this.b)},
gk(){return"RangeError"},
gj(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.l(r):""
else if(r==null)t=": Not greater than or equal to "+A.l(s)
else if(r>s)t=": Not in inclusive range "+A.l(s)+".."+A.l(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.l(s)
return t}}
A.a8.prototype={
gl(){return A.aD(this.b)},
gk(){return"RangeError"},
gj(){if(A.aD(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gi(a){return this.f}}
A.al.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.ak.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a2.prototype={
h(a){return"Concurrent modification during iteration: "+A.a6(this.a)+"."}}
A.a3.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.A.prototype={
h(a){return"null"}}
A.f.prototype={$if:1,
h(a){return"Instance of '"+A.ac(this)+"'"},
toString(){return this.h(this)}}
A.ai.prototype={
gi(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.b.prototype={}
A.Z.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a_.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a4.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a.prototype={
h(a){var t=a.localName
t.toString
return t}}
A.L.prototype={}
A.a7.prototype={
gi(a){return a.length}}
A.v.prototype={
h(a){var t=a.nodeValue
return t==null?this.u(a):t},
sA(a,b){a.textContent=b}}
A.af.prototype={
gi(a){return a.length}};(function aliases(){var t=J.z.prototype
t.u=t.h
t=J.r.prototype
t.v=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(A.f,null)
s(A.f,[A.aw,J.z,J.I,A.a5,A.t,A.j,A.S,A.A,A.ai])
s(J.z,[J.M,J.O,J.e,J.k,J.Q,J.u])
s(J.e,[J.r,A.L,A.a4])
s(J.r,[J.R,J.B,J.o])
t(J.a9,J.k)
s(J.Q,[J.N,J.P])
s(A.a5,[A.aa,A.ae,A.am,A.a0,A.ab,A.y,A.al,A.ak,A.a2,A.a3])
s(A.t,[A.a1,A.aj,A.ar,A.at])
s(A.aj,[A.ag,A.K])
t(A.as,A.a1)
t(A.T,A.am)
s(A.y,[A.ad,A.a8])
t(A.v,A.L)
t(A.a,A.v)
t(A.b,A.a)
s(A.b,[A.Z,A.a_,A.a7,A.af])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{aJ:"int",cj:"double",X:"num",ah:"String",aF:"bool",A:"Null",bx:"List"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.bQ(v.typeUniverse,JSON.parse('{"R":"r","B":"r","o":"r","M":{"aF":[]},"k":{"aU":["1"]},"a9":{"k":["1"],"aU":["1"]},"Q":{"X":[]},"N":{"aJ":[],"X":[]},"P":{"X":[]},"u":{"ah":[]}}'))
var u=(function rtii(){var t=A.bg
return{Z:t("cA"),s:t("k<ah>"),b:t("k<@>"),T:t("O"),g:t("o"),P:t("A"),K:t("f"),L:t("cC"),N:t("ah"),o:t("B"),y:t("aF"),i:t("cj"),S:t("aJ"),A:t("0&*"),_:t("f*"),O:t("aT<A>?"),X:t("f?"),H:t("X")}})();(function constants(){B.m=J.z.prototype
B.d=J.k.prototype
B.n=J.u.prototype
B.o=J.o.prototype
B.p=J.e.prototype
B.e=J.R.prototype
B.a=J.B.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.k=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.c=function(hooks) { return hooks; }
})();(function staticFields(){$.an=null
$.aQ=null
$.aP=null
$.bh=null
$.bf=null
$.bk=null
$.aq=null
$.au=null
$.aI=null
$.G=A.be([],A.bg("k<f>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"cz","bm",()=>A.cm("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.e,DOMError:J.e,ErrorEvent:J.e,Event:J.e,InputEvent:J.e,SubmitEvent:J.e,MediaError:J.e,NavigatorUserMediaError:J.e,OverconstrainedError:J.e,PositionError:J.e,GeolocationPositionError:J.e,SensorErrorEvent:J.e,SpeechRecognitionError:J.e,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLInputElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.Z,HTMLAreaElement:A.a_,DOMException:A.a4,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,EventTarget:A.L,HTMLFormElement:A.a7,Document:A.v,HTMLDocument:A.v,Node:A.v,HTMLSelectElement:A.af})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.ct
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map

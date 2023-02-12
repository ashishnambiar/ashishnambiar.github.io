(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.fz(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.fA(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cF(b)
return new s(c,this)}:function(){if(s===null)s=A.cF(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cF(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={cs:function cs(){},
D(a){return new A.am("Field '"+a+"' has not been initialized.")},
ar(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d2(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eg(a,b,c){return A.d2(A.ar(A.ar(c,a),b))},
cd(a,b,c){return a},
am:function am(a){this.a=a},
by:function by(){},
dJ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bm(a)
return s},
aZ(a){var s,r=$.cZ
if(r==null)r=$.cZ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bw(a){return A.ed(a)},
ed(a){var s,r,q,p
if(a instanceof A.e)return A.t(A.bl(a),null)
s=J.ac(a)
if(s===B.v||s===B.y||t.B.b(a)){r=B.h(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.t(A.bl(a),null)},
cj(a,b){if(a==null)J.cN(a)
throw A.d(A.ff(a,b))},
ff(a,b){var s,r="index"
if(!A.dq(b))return new A.K(!0,b,r,null)
s=A.l(J.cN(a))
if(b<0||b>=s)return new A.aS(s,!0,b,r,"Index out of range")
return new A.b_(null,null,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.aX()
s=new Error()
s.dartException=a
r=A.fB
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
fB(){return J.bm(this.dartException)},
z(a){throw A.d(a)},
dI(a){throw A.d(A.cU(a))},
G(a){var s,r,q,p,o,n
a=A.fw(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.bk([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bC(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
d3(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ct(a,b){var s=b==null,r=s?null:b.method
return new A.aV(a,r,s?null:b.receiver)},
R(a){var s
if(a==null)return new A.bv(a)
if(a instanceof A.ah){s=a.a
return A.Q(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.Q(a,a.dartException)
return A.f9(a)},
Q(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
f9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.k.an(r,16)&8191)===10)switch(q){case 438:return A.Q(a,A.ct(A.h(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.h(s)
return A.Q(a,new A.ao(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.dL()
n=$.dM()
m=$.dN()
l=$.dO()
k=$.dR()
j=$.dS()
i=$.dQ()
$.dP()
h=$.dU()
g=$.dT()
f=o.m(s)
if(f!=null)return A.Q(a,A.ct(A.bi(s),f))
else{f=n.m(s)
if(f!=null){f.method="call"
return A.Q(a,A.ct(A.bi(s),f))}else{f=m.m(s)
if(f==null){f=l.m(s)
if(f==null){f=k.m(s)
if(f==null){f=j.m(s)
if(f==null){f=i.m(s)
if(f==null){f=l.m(s)
if(f==null){f=h.m(s)
if(f==null){f=g.m(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.bi(s)
return A.Q(a,new A.ao(s,f==null?e:f.method))}}}return A.Q(a,new A.b7(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ap()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.Q(a,new A.K(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ap()
return a},
P(a){var s
if(a instanceof A.ah)return a.b
if(a==null)return new A.aw(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.aw(a)},
dF(a){if(a==null||typeof a!="object")return J.cp(a)
else return A.aZ(a)},
fg(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.v(0,a[s],a[r])}return b},
fp(a,b,c,d,e,f){t.Z.a(a)
switch(A.l(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bK("Unsupported number of arguments for wrapped closure"))},
aG(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fp)
a.$identity=s
return s},
e6(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.b2().constructor.prototype):Object.create(new A.a1(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cT(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.e2(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cT(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
e2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.e0)}throw A.d("Error in functionType of tearoff")},
e3(a,b,c,d){var s=A.cS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cT(a,b,c,d){var s,r
if(c)return A.e5(a,b,d)
s=b.length
r=A.e3(s,d,a,b)
return r},
e4(a,b,c,d){var s=A.cS,r=A.e1
switch(b?-1:a){case 0:throw A.d(new A.b0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
e5(a,b,c){var s,r
if($.cQ==null)$.cQ=A.cP("interceptor")
if($.cR==null)$.cR=A.cP("receiver")
s=b.length
r=A.e4(s,c,a,b)
return r},
cF(a){return A.e6(a)},
e0(a,b){return A.c2(v.typeUniverse,A.bl(a.a),b)},
cS(a){return a.a},
e1(a){return a.b},
cP(a){var s,r,q,p=new A.a1("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.fixed$length=Array
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.cq("Field name "+a+" not found.",null))},
fz(a){throw A.d(new A.aQ(a))},
fi(a){return v.getIsolateTag(a)},
hf(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fr(a){var s,r,q,p,o,n=A.bi($.dD.$1(a)),m=$.ce[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ci[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eJ($.dz.$2(a,n))
if(q!=null){m=$.ce[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ci[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cn(s)
$.ce[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ci[n]=s
return s}if(p==="-"){o=A.cn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dG(a,s)
if(p==="*")throw A.d(A.d4(n))
if(v.leafTags[n]===true){o=A.cn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dG(a,s)},
dG(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cJ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn(a){return J.cJ(a,!1,null,!!a.$ifM)},
ft(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cn(s)
else return J.cJ(s,c,null,null)},
fl(){if(!0===$.cI)return
$.cI=!0
A.fm()},
fm(){var s,r,q,p,o,n,m,l
$.ce=Object.create(null)
$.ci=Object.create(null)
A.fk()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.dH.$1(o)
if(n!=null){m=A.ft(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
fk(){var s,r,q,p,o,n,m=B.n()
m=A.aa(B.o,A.aa(B.p,A.aa(B.i,A.aa(B.i,A.aa(B.q,A.aa(B.r,A.aa(B.t(B.h),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dD=new A.cf(p)
$.dz=new A.cg(o)
$.dH=new A.ch(n)},
aa(a,b){return a(b)||b},
fw(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bB:function bB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ao:function ao(a,b){this.a=a
this.b=b},
aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a},
bv:function bv(a){this.a=a},
ah:function ah(a,b){this.a=a
this.b=b},
aw:function aw(a){this.a=a
this.b=null},
T:function T(){},
aN:function aN(){},
aO:function aO(){},
b5:function b5(){},
b2:function b2(){},
a1:function a1(a,b){this.a=a
this.b=b},
b0:function b0(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
br:function br(a){this.a=a},
bs:function bs(a,b){this.a=a
this.b=b
this.c=null},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
ch:function ch(a){this.a=a},
co(a){return A.z(A.D(a))},
fA(a){return A.z(new A.am("Field '"+a+"' has been assigned during initialization."))},
Y(a){var s=new A.bH(a)
return s.b=s},
bH:function bH(a){this.a=a
this.b=null},
d0(a,b){var s=b.c
return s==null?b.c=A.cz(a,b.y,!0):s},
d_(a,b){var s=b.c
return s==null?b.c=A.az(a,"C",[b.y]):s},
d1(a){var s=a.x
if(s===6||s===7||s===8)return A.d1(a.y)
return s===12||s===13},
ee(a){return a.at},
cG(a){return A.bh(v.typeUniverse,a,!1)},
O(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.O(a,s,a0,a1)
if(r===s)return b
return A.dd(a,r,!0)
case 7:s=b.y
r=A.O(a,s,a0,a1)
if(r===s)return b
return A.cz(a,r,!0)
case 8:s=b.y
r=A.O(a,s,a0,a1)
if(r===s)return b
return A.dc(a,r,!0)
case 9:q=b.z
p=A.aF(a,q,a0,a1)
if(p===q)return b
return A.az(a,b.y,p)
case 10:o=b.y
n=A.O(a,o,a0,a1)
m=b.z
l=A.aF(a,m,a0,a1)
if(n===o&&l===m)return b
return A.cx(a,n,l)
case 12:k=b.y
j=A.O(a,k,a0,a1)
i=b.z
h=A.f6(a,i,a0,a1)
if(j===k&&h===i)return b
return A.db(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.aF(a,g,a0,a1)
o=b.y
n=A.O(a,o,a0,a1)
if(f===g&&n===o)return b
return A.cy(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.aM("Attempted to substitute unexpected RTI kind "+c))}},
aF(a,b,c,d){var s,r,q,p,o=b.length,n=A.c3(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.O(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
f7(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.c3(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.O(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
f6(a,b,c,d){var s,r=b.a,q=A.aF(a,r,c,d),p=b.b,o=A.aF(a,p,c,d),n=b.c,m=A.f7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bc()
s.a=q
s.b=o
s.c=m
return s},
bk(a,b){a[v.arrayRti]=b
return a},
fd(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.fj(r)
s=a.$S()
return s}return null},
dE(a,b){var s
if(A.d1(b))if(a instanceof A.T){s=A.fd(a)
if(s!=null)return s}return A.bl(a)},
bl(a){var s
if(a instanceof A.e){s=a.$ti
return s!=null?s:A.cD(a)}if(Array.isArray(a))return A.cB(a)
return A.cD(J.ac(a))},
cB(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
cC(a){var s=a.$ti
return s!=null?s:A.cD(a)},
cD(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eS(a,s)},
eS(a,b){var s=a instanceof A.T?a.__proto__.__proto__.constructor:b,r=A.eD(v.typeUniverse,s.name)
b.$ccache=r
return r},
fj(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bh(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fe(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.bg(a)
q=A.bh(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.bg(q):p},
fC(a){return A.fe(A.bh(v.typeUniverse,a,!1))},
eR(a){var s,r,q,p,o=this
if(o===t.K)return A.a8(o,a,A.eW)
if(!A.J(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.a8(o,a,A.f_)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.dq
else if(r===t.i||r===t.p)q=A.eV
else if(r===t.N)q=A.eY
else q=r===t.y?A.dn:null
if(q!=null)return A.a8(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.fq)){o.r="$i"+p
if(p==="aW")return A.a8(o,a,A.eU)
return A.a8(o,a,A.eZ)}}else if(s===7)return A.a8(o,a,A.eP)
return A.a8(o,a,A.eN)},
a8(a,b,c){a.b=c
return a.b(b)},
eQ(a){var s,r=this,q=A.eM
if(!A.J(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.eK
else if(r===t.K)q=A.eI
else{s=A.aH(r)
if(s)q=A.eO}r.a=q
return r.a(a)},
bj(a){var s,r=a.x
if(!A.J(a))if(!(a===t._))if(!(a===t.G))if(r!==7)if(!(r===6&&A.bj(a.y)))s=r===8&&A.bj(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eN(a){var s=this
if(a==null)return A.bj(s)
return A.j(v.typeUniverse,A.dE(a,s),null,s,null)},
eP(a){if(a==null)return!0
return this.y.b(a)},
eZ(a){var s,r=this
if(a==null)return A.bj(r)
s=r.r
if(a instanceof A.e)return!!a[s]
return!!J.ac(a)[s]},
eU(a){var s,r=this
if(a==null)return A.bj(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.e)return!!a[s]
return!!J.ac(a)[s]},
eM(a){var s,r=this
if(a==null){s=A.aH(r)
if(s)return a}else if(r.b(a))return a
A.dl(a,r)},
eO(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.dl(a,s)},
dl(a,b){throw A.d(A.es(A.d7(a,A.dE(a,b),A.t(b,null))))},
d7(a,b,c){var s=A.bp(a)
return s+": type '"+A.t(b==null?A.bl(a):b,null)+"' is not a subtype of type '"+c+"'"},
es(a){return new A.ax("TypeError: "+a)},
q(a,b){return new A.ax("TypeError: "+A.d7(a,null,b))},
eW(a){return a!=null},
eI(a){if(a!=null)return a
throw A.d(A.q(a,"Object"))},
f_(a){return!0},
eK(a){return a},
dn(a){return!0===a||!1===a},
h3(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.q(a,"bool"))},
h5(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.q(a,"bool"))},
h4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.q(a,"bool?"))},
h6(a){if(typeof a=="number")return a
throw A.d(A.q(a,"double"))},
h8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"double"))},
h7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"double?"))},
dq(a){return typeof a=="number"&&Math.floor(a)===a},
l(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.q(a,"int"))},
ha(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.q(a,"int"))},
h9(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.q(a,"int?"))},
eV(a){return typeof a=="number"},
eG(a){if(typeof a=="number")return a
throw A.d(A.q(a,"num"))},
hb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"num"))},
eH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.q(a,"num?"))},
eY(a){return typeof a=="string"},
bi(a){if(typeof a=="string")return a
throw A.d(A.q(a,"String"))},
hc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.q(a,"String"))},
eJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.q(a,"String?"))},
dv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.t(a[q],b)
return s},
f1(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.dv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.t(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dm(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.bk([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.e.J(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.cj(a5,j)
m=B.w.a6(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.t(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.t(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.t(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.t(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.t(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
t(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.t(a.y,b)
return s}if(l===7){r=a.y
s=A.t(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.t(a.y,b)+">"
if(l===9){p=A.f8(a.y)
o=a.z
return o.length>0?p+("<"+A.dv(o,b)+">"):p}if(l===11)return A.f1(a,b)
if(l===12)return A.dm(a,b,null)
if(l===13)return A.dm(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.cj(b,n)
return b[n]}return"?"},
f8(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
eE(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
eD(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bh(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aA(a,5,"#")
q=A.c3(s)
for(p=0;p<s;++p)q[p]=r
o=A.az(a,b,q)
n[b]=o
return o}else return m},
eB(a,b){return A.de(a.tR,b)},
eA(a,b){return A.de(a.eT,b)},
bh(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.da(A.d8(a,null,b,c))
r.set(b,s)
return s},
c2(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.da(A.d8(a,b,c,!0))
q.set(c,r)
return r},
eC(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.cx(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
H(a,b){b.a=A.eQ
b.b=A.eR
return b},
aA(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.x=b
s.at=c
r=A.H(a,s)
a.eC.set(c,r)
return r},
dd(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ex(a,b,r,c)
a.eC.set(r,s)
return s},
ex(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.J(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.x=6
q.y=b
q.at=c
return A.H(a,q)},
cz(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ew(a,b,r,c)
a.eC.set(r,s)
return s},
ew(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.J(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aH(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.aH(q.y))return q
else return A.d0(a,b)}}p=new A.x(null,null)
p.x=7
p.y=b
p.at=c
return A.H(a,p)},
dc(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.eu(a,b,r,c)
a.eC.set(r,s)
return s},
eu(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.J(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.az(a,"C",[b])
else if(b===t.P||b===t.T)return t.U}q=new A.x(null,null)
q.x=8
q.y=b
q.at=c
return A.H(a,q)},
ey(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.x=14
s.y=b
s.at=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
ay(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
et(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
az(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ay(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.H(a,r)
a.eC.set(p,q)
return q},
cx(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.ay(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.H(a,o)
a.eC.set(q,n)
return n},
ez(a,b,c){var s,r,q="+"+(b+"("+A.ay(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.H(a,s)
a.eC.set(q,r)
return r},
db(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ay(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ay(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.et(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.H(a,p)
a.eC.set(r,o)
return o},
cy(a,b,c,d){var s,r=b.at+("<"+A.ay(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ev(a,b,c,r,d)
a.eC.set(r,s)
return s},
ev(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.c3(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.O(a,b,r,0)
m=A.aF(a,c,r,0)
return A.cy(a,n,m,c!==m)}}l=new A.x(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.H(a,l)},
d8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
da(a){var s,r,q,p,o,n,m,l,k,j=a.r,i=a.s
for(s=j.length,r=0;r<s;){q=j.charCodeAt(r)
if(q>=48&&q<=57)r=A.en(r+1,q,j,i)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.d9(a,r,j,i,!1)
else if(q===46)r=A.d9(a,r,j,i,!0)
else{++r
switch(q){case 44:break
case 58:i.push(!1)
break
case 33:i.push(!0)
break
case 59:i.push(A.N(a.u,a.e,i.pop()))
break
case 94:i.push(A.ey(a.u,i.pop()))
break
case 35:i.push(A.aA(a.u,5,"#"))
break
case 64:i.push(A.aA(a.u,2,"@"))
break
case 126:i.push(A.aA(a.u,3,"~"))
break
case 60:i.push(a.p)
a.p=i.length
break
case 62:p=a.u
o=i.splice(a.p)
A.cw(a.u,a.e,o)
a.p=i.pop()
n=i.pop()
if(typeof n=="string")i.push(A.az(p,n,o))
else{m=A.N(p,a.e,n)
switch(m.x){case 12:i.push(A.cy(p,m,o,a.n))
break
default:i.push(A.cx(p,m,o))
break}}break
case 38:A.eo(a,i)
break
case 42:p=a.u
i.push(A.dd(p,A.N(p,a.e,i.pop()),a.n))
break
case 63:p=a.u
i.push(A.cz(p,A.N(p,a.e,i.pop()),a.n))
break
case 47:p=a.u
i.push(A.dc(p,A.N(p,a.e,i.pop()),a.n))
break
case 40:i.push(-3)
i.push(a.p)
a.p=i.length
break
case 41:A.em(a,i)
break
case 91:i.push(a.p)
a.p=i.length
break
case 93:o=i.splice(a.p)
A.cw(a.u,a.e,o)
a.p=i.pop()
i.push(o)
i.push(-1)
break
case 123:i.push(a.p)
a.p=i.length
break
case 125:o=i.splice(a.p)
A.eq(a.u,a.e,o)
a.p=i.pop()
i.push(o)
i.push(-2)
break
case 43:l=j.indexOf("(",r)
i.push(j.substring(r,l))
i.push(-4)
i.push(a.p)
a.p=i.length
r=l+1
break
default:throw"Bad character "+q}}}k=i.pop()
return A.N(a.u,a.e,k)},
en(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
d9(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.eE(s,o.y)[p]
if(n==null)A.z('No "'+p+'" in "'+A.ee(o)+'"')
d.push(A.c2(s,o,n))}else d.push(p)
return m},
em(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.el(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.N(m,a.e,l)
o=new A.bc()
o.a=q
o.b=s
o.c=r
b.push(A.db(m,p,o))
return
case-4:b.push(A.ez(m,b.pop(),q))
return
default:throw A.d(A.aM("Unexpected state under `()`: "+A.h(l)))}},
eo(a,b){var s=b.pop()
if(0===s){b.push(A.aA(a.u,1,"0&"))
return}if(1===s){b.push(A.aA(a.u,4,"1&"))
return}throw A.d(A.aM("Unexpected extended operation "+A.h(s)))},
el(a,b){var s=b.splice(a.p)
A.cw(a.u,a.e,s)
a.p=b.pop()
return s},
N(a,b,c){if(typeof c=="string")return A.az(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ep(a,b,c)}else return c},
cw(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.N(a,b,c[s])},
eq(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.N(a,b,c[s])},
ep(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.aM("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.aM("Bad index "+c+" for "+b.h(0)))},
j(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.J(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.J(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.j(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.j(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.j(a,b.y,c,d,e)
if(r===6)return A.j(a,b.y,c,d,e)
return r!==7}if(r===6)return A.j(a,b.y,c,d,e)
if(p===6){s=A.d0(a,d)
return A.j(a,b,c,s,e)}if(r===8){if(!A.j(a,b.y,c,d,e))return!1
return A.j(a,A.d_(a,b),c,d,e)}if(r===7){s=A.j(a,t.P,c,d,e)
return s&&A.j(a,b.y,c,d,e)}if(p===8){if(A.j(a,b,c,d.y,e))return!0
return A.j(a,b,c,A.d_(a,d),e)}if(p===7){s=A.j(a,b,c,t.P,e)
return s||A.j(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.j(a,k,c,j,e)||!A.j(a,j,e,k,c))return!1}return A.dp(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.dp(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.eT(a,b,c,d,e)}s=r===11
if(s&&d===t.L)return!0
if(s&&p===11)return A.eX(a,b,c,d,e)
return!1},
dp(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.j(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.j(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.j(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.j(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.j(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
eT(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.c2(a,b,r[o])
return A.dh(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.dh(a,n,null,c,m,e)},
dh(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.j(a,r,d,q,f))return!1}return!0},
eX(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.j(a,r[s],c,q[s],e))return!1
return!0},
aH(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.J(a))if(r!==7)if(!(r===6&&A.aH(a.y)))s=r===8&&A.aH(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
fq(a){var s
if(!A.J(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
J(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.O},
de(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
c3(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bc:function bc(){this.c=this.b=this.a=null},
bg:function bg(a){this.a=a},
bb:function bb(){},
ax:function ax(a){this.a=a},
eh(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.fa()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aG(new A.bE(q),1)).observe(s,{childList:true})
return new A.bD(q,s,r)}else if(self.setImmediate!=null)return A.fb()
return A.fc()},
ei(a){self.scheduleImmediate(A.aG(new A.bF(t.M.a(a)),0))},
ej(a){self.setImmediate(A.aG(new A.bG(t.M.a(a)),0))},
ek(a){t.M.a(a)
A.er(0,a)},
er(a,b){var s=new A.c0()
s.ab(a,b)
return s},
ds(a){return new A.b9(new A.o($.i,a.i("o<0>")),a.i("b9<0>"))},
dk(a,b){a.$2(0,null)
b.b=!0
return b.a},
hd(a,b){A.eL(a,b)},
dj(a,b){var s,r,q=b.$ti
q.i("1/?").a(a)
if(a==null){q.c.a(a)
s=a}else s=a
if(!b.b)b.a.af(s)
else{r=b.a
if(q.i("C<1>").b(s))r.V(s)
else r.E(q.c.a(s))}},
di(a,b){var s=A.R(a),r=A.P(a),q=b.b,p=b.a
if(q)p.q(s,r)
else p.ag(s,r)},
eL(a,b){var s,r,q=new A.c5(b),p=new A.c6(b)
if(a instanceof A.o)a.Y(q,p,t.z)
else{s=t.z
if(t.d.b(a))a.P(q,p,s)
else{r=new A.o($.i,t.c)
r.a=8
r.c=a
r.Y(q,p,s)}}},
dx(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.i.a5(new A.c9(s),t.H,t.S,t.z)},
bn(a,b){var s=A.cd(a,"error",t.K)
return new A.ae(s,b==null?A.e_(a):b)},
e_(a){var s
if(t.Q.b(a)){s=a.gA()
if(s!=null)return s}return B.u},
cv(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.t()
b.D(a)
A.a7(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.X(q)}},
a7(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.c7(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.a7(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.c7(i.a,i.b)
return}f=$.i
if(f!==g)$.i=g
else f=null
b=b.c
if((b&15)===8)new A.bV(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bU(p,i).$0()}else if((b&2)!==0)new A.bT(c,p).$0()
if(f!=null)$.i=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("C<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.u(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.cv(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.u(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
f2(a,b){var s
if(t.C.b(a))return b.a5(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.cO(a,"onError",u.c))},
f0(){var s,r
for(s=$.a9;s!=null;s=$.a9){$.aE=null
r=s.b
$.a9=r
if(r==null)$.aD=null
s.a.$0()}},
f5(){$.cE=!0
try{A.f0()}finally{$.aE=null
$.cE=!1
if($.a9!=null)$.cL().$1(A.dB())}},
dw(a){var s=new A.ba(a),r=$.aD
if(r==null){$.a9=$.aD=s
if(!$.cE)$.cL().$1(A.dB())}else $.aD=r.b=s},
f4(a){var s,r,q,p=$.a9
if(p==null){A.dw(a)
$.aE=$.aD
return}s=new A.ba(a)
r=$.aE
if(r==null){s.b=p
$.a9=$.aE=s}else{q=r.b
s.b=q
$.aE=r.b=s
if(q==null)$.aD=s}},
fy(a){var s,r=null,q=$.i
if(B.a===q){A.a_(r,r,B.a,a)
return}s=!1
if(s){A.a_(r,r,q,t.M.a(a))
return}A.a_(r,r,q,t.M.a(q.a_(a)))},
fS(a,b){A.cd(a,"stream",t.K)
return new A.be(b.i("be<0>"))},
c7(a,b){A.f4(new A.c8(a,b))},
dt(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
du(a,b,c,d,e,f,g){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
f3(a,b,c,d,e,f,g,h,i){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
a_(a,b,c,d){t.M.a(d)
if(B.a!==c)d=c.a_(d)
A.dw(d)},
bE:function bE(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a){this.a=a},
bG:function bG(a){this.a=a},
c0:function c0(){},
c1:function c1(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=!1
this.$ti=b},
c5:function c5(a){this.a=a},
c6:function c6(a){this.a=a},
c9:function c9(a){this.a=a},
ae:function ae(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
o:function o(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bL:function bL(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
bO:function bO(a){this.a=a},
bP:function bP(a){this.a=a},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a){this.a=a},
bU:function bU(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
ba:function ba(a){this.a=a
this.b=null},
aq:function aq(){},
bz:function bz(a,b){this.a=a
this.b=b},
bA:function bA(a,b){this.a=a
this.b=b},
b3:function b3(){},
be:function be(a){this.$ti=a},
aB:function aB(){},
c8:function c8(a,b){this.a=a
this.b=b},
bd:function bd(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
eb(a,b,c){return b.i("@<0>").l(c).i("cW<1,2>").a(A.fg(a,new A.V(b.i("@<0>").l(c).i("V<1,2>"))))},
ea(a,b){return new A.V(a.i("@<0>").l(b).i("V<1,2>"))},
e9(a,b,c){var s,r
if(A.dr(a))return b+"..."+c
s=new A.b4(b)
B.e.J($.I,a)
try{r=s
r.a=A.ef(r.a,a,", ")}finally{if(0>=$.I.length)return A.cj($.I,-1)
$.I.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
dr(a){var s,r
for(s=$.I.length,r=0;r<s;++r)if(a===$.I[r])return!0
return!1},
cX(a){var s,r={}
if(A.dr(a))return"{...}"
s=new A.b4("")
try{B.e.J($.I,a)
s.a+="{"
r.a=!0
a.a1(0,new A.bu(r,s))
s.a+="}"}finally{if(0>=$.I.length)return A.cj($.I,-1)
$.I.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
an:function an(){},
bu:function bu(a,b){this.a=a
this.b=b},
a4:function a4(){},
e7(a){if(a instanceof A.T)return a.h(0)
return"Instance of '"+A.bw(a)+"'"},
e8(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ef(a,b,c){var s,r=A.cB(b),q=new J.aK(b,b.length,r.i("aK<1>"))
if(!q.N())return a
if(c.length===0){r=r.c
do{s=q.d
a+=A.h(s==null?r.a(s):s)}while(q.N())}else{s=q.d
a+=A.h(s==null?r.c.a(s):s)
for(r=r.c;q.N();){s=q.d
a=a+c+A.h(s==null?r.a(s):s)}}return a},
bp(a){if(typeof a=="number"||A.dn(a)||a==null)return J.bm(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e7(a)},
aM(a){return new A.aL(a)},
cq(a,b){return new A.K(!1,null,b,a)},
cO(a,b,c){return new A.K(!0,a,b,c)},
d5(a){return new A.b8(a)},
d4(a){return new A.b6(a)},
cU(a){return new A.aP(a)},
cY(a,b,c,d){var s,r=B.c.gj(a)
b=B.c.gj(b)
c=B.c.gj(c)
d=B.c.gj(d)
s=$.dV()
return A.d2(A.ar(A.ar(A.ar(A.ar(s,r),b),c),d))},
f:function f(){},
aL:function aL(a){this.a=a},
E:function E(){},
aX:function aX(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aS:function aS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b8:function b8(a){this.a=a},
b6:function b6(a){this.a=a},
aP:function aP(a){this.a=a},
ap:function ap(){},
aQ:function aQ(a){this.a=a},
bK:function bK(a){this.a=a},
n:function n(){},
e:function e(){},
bf:function bf(){},
b4:function b4(a){this.a=a},
bI(a,b,c,d,e){var s=A.dy(new A.bJ(c),t.A),r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.dY(a,b,s,!1)}return new A.av(a,b,s,!1,e.i("av<0>"))},
dy(a,b){var s=$.i
if(s===B.a)return a
return s.ap(a,b)},
c:function c(){},
aI:function aI(){},
aJ:function aJ(){},
a0:function a0(){},
S:function S(){},
a2:function a2(){},
bo:function bo(){},
ag:function ag(){},
m:function m(){},
a:function a(){},
p:function p(){},
aR:function aR(){},
r:function r(){},
F:function F(){},
b1:function b1(){},
A:function A(){},
a5:function a5(){},
at:function at(){},
cr:function cr(a,b){this.a=a
this.$ti=b},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
av:function av(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bJ:function bJ(a){this.a=a},
ec(a,b,c){return new A.w(a,b,c.i("w<0>"))},
bX:function bX(){},
w:function w(a,b,c){this.a=a
this.b=b
this.$ti=c},
b:function b(){},
fo(){var s=window.innerWidth
return s==null?A.l(s):s},
fn(){var s=window.innerHeight
return s==null?A.l(s):s},
fx(){return $.cA.k()},
fs(){var s,r=document,q=t.E
$.aC.b=q.a(r.querySelector("#cursor"))
s=t.b
$.k.b=s.a(B.b.S($.aC.k(),"2d"))
$.c4.b=q.a(r.querySelector("#bg"))
$.B.b=s.a(B.b.S($.c4.k(),"2d"))
$.eF.b=t.t.a(r.querySelector("body"))
s=r.querySelector("#link2")
s.toString
$.df.b=s
s=r.querySelector("#link3")
s.toString
$.dg.b=s
$.cK().av(3)
r=r.querySelector("#link1")
r.toString
$.cA.b=r
r=$.aC.k()
s=window.innerWidth
B.b.sR(r,s==null?A.l(s):s)
r=$.aC.k()
q=window.innerHeight
B.b.sK(r,q==null?A.l(q):q)
r=window
r.toString
q=t.j.a(new A.ck())
t.Y.a(null)
A.bI(r,"resize",q,!1,t.A)
q=J.dZ($.cA.k())
r=q.$ti
A.bI(q.a,q.b,r.i("~(1)?").a(new A.cl()),!1,r.c)
r=window
r.toString
A.bI(r,"mousemove",t.k.a(new A.cm()),!1,t.V)
$.k.k().beginPath()
$.k.k().arc(200,200,30,0,6.283185307179586,!1)
B.d.sT($.k.k(),"blue")
$.k.k().stroke()
A.dA()
A.cb()},
dA(){var s,r=window
r.toString
s=t.f.a(new A.ca())
B.m.aj(r)
s=A.dy(s,t.p)
s.toString
B.m.ak(r,s)},
cb(){var s=0,r=A.ds(t.z),q,p,o,n,m,l,k,j,i,h,g,f
var $async$cb=A.dx(function(a,b){if(a===1)return A.di(b,r)
while(true)switch(s){case 0:i=B.j.a2()
h=B.j.a2()
g=$.c4.k()
f=window.screen.height
B.b.sK(g,f==null?A.l(f):f)
g=$.c4.k()
f=window.screen.width
B.b.sR(g,f==null?A.l(f):f)
g=window.screen.width
q=(g==null?A.l(g):g)/10
B.d.sT($.B.k(),"rgba(200, 200, 255, 1)")
$.B.k().lineWidth=1
for(g=$.B.a,p=0;p<30;++p){f=$.B.b
if(f===$.B)A.z(A.D(g))
o=window.innerHeight
f.moveTo(0,(o==null?A.l(o):o)/2+p)
f=$.B.b
if(f===$.B)A.z(A.D(g))
f.beginPath()
for(f=p*10,o=70*(p/100),n=70*((30-p)/100),m=0;m<q;++m){l=$.B.b
if(l===$.B)A.z(A.D(g))
k=window.innerHeight
if(k==null)k=A.l(k)
j=m/5
l.lineTo(m*11,50+k/2-f+Math.sin(0.6*j*0.7*i)*10*o-Math.sin(0.6*(2+j)*0.7*h)*10*n)
l=$.B.b
if(l===$.B)A.z(A.D(g))
l.stroke()}}return A.dj(null,r)}})
return A.dk($async$cb,r)},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
ca:function ca(){},
af:function af(a,b){this.a=a
this.b=b},
bx:function bx(a){var _=this
_.b=_.a=$
_.c=0
_.f=_.e=$
_.r=a},
fv(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
cJ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cH(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cI==null){A.fl()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.d4("Return interceptor for "+A.h(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bY
if(o==null)o=$.bY=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.fr(a)
if(p!=null)return p
if(typeof a=="function")return B.x
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.bY
if(o==null)o=$.bY=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.f,enumerable:false,writable:true,configurable:true})
return B.f}return B.f},
ac(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aj.prototype
return J.aU.prototype}if(typeof a=="string")return J.a3.prototype
if(a==null)return J.ak.prototype
if(typeof a=="boolean")return J.aT.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.e)return a
return J.cH(a)},
fh(a){if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.e)return a
return J.cH(a)},
dC(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof A.e)return a
return J.cH(a)},
dX(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ac(a).p(a,b)},
dY(a,b,c,d){return J.dC(a).ae(a,b,c,d)},
cp(a){return J.ac(a).gj(a)},
cN(a){return J.fh(a).gn(a)},
dZ(a){return J.dC(a).ga3(a)},
bm(a){return J.ac(a).h(a)},
ai:function ai(){},
aT:function aT(){},
ak:function ak(){},
v:function v(){},
W:function W(){},
aY:function aY(){},
as:function as(){},
L:function L(){},
u:function u(a){this.$ti=a},
bq:function bq(a){this.$ti=a},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
al:function al(){},
aj:function aj(){},
aU:function aU(){},
a3:function a3(){}},B={}
var w=[A,J,B]
var $={}
A.cs.prototype={}
J.ai.prototype={
p(a,b){return a===b},
gj(a){return A.aZ(a)},
h(a){return"Instance of '"+A.bw(a)+"'"}}
J.aT.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
$icc:1}
J.ak.prototype={
p(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$in:1}
J.v.prototype={}
J.W.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aY.prototype={}
J.as.prototype={}
J.L.prototype={
h(a){var s=a[$.dK()]
if(s==null)return this.aa(a)
return"JavaScript function for "+J.bm(s)},
$iU:1}
J.u.prototype={
J(a,b){A.cB(a).c.a(b)
if(!!a.fixed$length)A.z(A.d5("add"))
a.push(b)},
h(a){return A.e9(a,"[","]")},
gj(a){return A.aZ(a)},
gn(a){return a.length},
$icV:1,
$iaW:1}
J.bq.prototype={}
J.aK.prototype={
N(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dI(q))
s=r.c
if(s>=p){r.sW(null)
return!1}r.sW(q[s]);++r.c
return!0},
sW(a){this.d=this.$ti.i("1?").a(a)}}
J.al.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
an(a,b){var s
if(a>0)s=this.am(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
am(a,b){return b>31?0:a>>>b},
$iab:1,
$iy:1}
J.aj.prototype={$iad:1}
J.aU.prototype={}
J.a3.prototype={
a6(a,b){return a+b},
h(a){return a},
gj(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gn(a){return a.length},
$iX:1}
A.am.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.by.prototype={}
A.bB.prototype={
m(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.ao.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.aV.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.b7.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bv.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ah.prototype={}
A.aw.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iM:1}
A.T.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dJ(r==null?"unknown":r)+"'"},
$iU:1,
gaI(){return this},
$C:"$1",
$R:1,
$D:null}
A.aN.prototype={$C:"$0",$R:0}
A.aO.prototype={$C:"$2",$R:2}
A.b5.prototype={}
A.b2.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dJ(s)+"'"}}
A.a1.prototype={
p(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dF(this.a)^A.aZ(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bw(this.a)+"'")}}
A.b0.prototype={
h(a){return"RuntimeError: "+this.a}}
A.V.prototype={
gn(a){return this.a},
aq(a){var s
if((a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.aw(a)},
aw(a){var s=this.d
if(s==null)return!1
return this.L(s[B.k.gj(a)&0x3fffffff],a)>=0},
ao(a,b){this.$ti.i("bt<1,2>").a(b).a1(0,new A.br(this))},
a8(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.az(b)},
az(a){var s,r,q=this.d
if(q==null)return null
s=q[J.cp(a)&0x3fffffff]
r=this.L(s,a)
if(r<0)return null
return s[r].b},
v(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.U(s==null?m.b=m.H():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.U(r==null?m.c=m.H():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.H()
p=J.cp(b)&0x3fffffff
o=q[p]
if(o==null)q[p]=[m.I(b,c)]
else{n=m.L(o,b)
if(n>=0)o[n].b=c
else o.push(m.I(b,c))}}},
a1(a,b){var s,r,q=this
q.$ti.i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.cU(q))
s=s.c}},
U(a,b,c){var s,r=this.$ti
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.I(b,c)
else s.b=c},
I(a,b){var s=this,r=s.$ti,q=new A.bs(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
L(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.dX(a[r].a,b))return r
return-1},
h(a){return A.cX(this)},
H(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$icW:1}
A.br.prototype={
$2(a,b){var s=this.a,r=s.$ti
s.v(0,r.c.a(a),r.z[1].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.bs.prototype={}
A.cf.prototype={
$1(a){return this.a(a)},
$S:6}
A.cg.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.ch.prototype={
$1(a){return this.a(A.bi(a))},
$S:8}
A.bH.prototype={
aC(){var s=this.b
if(s===this)A.z(A.D(this.a))
return s},
a4(){return this.aC(t.z)},
k(){var s=this.b
if(s===this)throw A.d(A.D(this.a))
return s}}
A.x.prototype={
i(a){return A.c2(v.typeUniverse,this,a)},
l(a){return A.eC(v.typeUniverse,this,a)}}
A.bc.prototype={}
A.bg.prototype={
h(a){return A.t(this.a,null)}}
A.bb.prototype={
h(a){return this.a}}
A.ax.prototype={$iE:1}
A.bE.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.bD.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.bF.prototype={
$0(){this.a.$0()},
$S:3}
A.bG.prototype={
$0(){this.a.$0()},
$S:3}
A.c0.prototype={
ab(a,b){if(self.setTimeout!=null)self.setTimeout(A.aG(new A.c1(this,b),0),a)
else throw A.d(A.d5("`setTimeout()` not found."))}}
A.c1.prototype={
$0(){this.b.$0()},
$S:0}
A.b9.prototype={}
A.c5.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.c6.prototype={
$2(a,b){this.a.$2(1,new A.ah(a,t.l.a(b)))},
$S:11}
A.c9.prototype={
$2(a,b){this.a(A.l(a),b)},
$S:12}
A.ae.prototype={
h(a){return A.h(this.a)},
$if:1,
gA(){return this.b}}
A.Z.prototype={
aA(a){if((this.c&15)!==6)return!0
return this.b.b.O(t.m.a(this.d),a.a,t.y,t.K)},
au(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.aE(q,m,a.b,o,n,t.l)
else p=l.O(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.e.b(A.R(s))){if((r.c&1)!==0)throw A.d(A.cq("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cq("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.o.prototype={
P(a,b,c){var s,r,q,p=this.$ti
p.l(c).i("1/(2)").a(a)
s=$.i
if(s===B.a){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.cO(b,"onError",u.c))}else{c.i("@<0/>").l(p.c).i("1(2)").a(a)
if(b!=null)b=A.f2(b,s)}r=new A.o(s,c.i("o<0>"))
q=b==null?1:3
this.C(new A.Z(r,q,a,b,p.i("@<1>").l(c).i("Z<1,2>")))
return r},
aH(a,b){return this.P(a,null,b)},
Y(a,b,c){var s,r=this.$ti
r.l(c).i("1/(2)").a(a)
s=new A.o($.i,c.i("o<0>"))
this.C(new A.Z(s,3,a,b,r.i("@<1>").l(c).i("Z<1,2>")))
return s},
al(a){this.a=this.a&1|16
this.c=a},
D(a){this.a=a.a&30|this.a&1
this.c=a.c},
C(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.C(a)
return}r.D(s)}A.a_(null,null,r.b,t.M.a(new A.bL(r,a)))}},
X(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.X(a)
return}m.D(n)}l.a=m.u(a)
A.a_(null,null,m.b,t.M.a(new A.bS(l,m)))}},
t(){var s=t.F.a(this.c)
this.c=null
return this.u(s)},
u(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ai(a){var s,r,q,p=this
p.a^=2
try{a.P(new A.bO(p),new A.bP(p),t.P)}catch(q){s=A.R(q)
r=A.P(q)
A.fy(new A.bQ(p,s,r))}},
E(a){var s,r=this
r.$ti.c.a(a)
s=r.t()
r.a=8
r.c=a
A.a7(r,s)},
q(a,b){var s
t.l.a(b)
s=this.t()
this.al(A.bn(a,b))
A.a7(this,s)},
af(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("C<1>").b(a)){this.V(a)
return}this.ah(s.c.a(a))},
ah(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.a_(null,null,s.b,t.M.a(new A.bN(s,a)))},
V(a){var s=this,r=s.$ti
r.i("C<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.a_(null,null,s.b,t.M.a(new A.bR(s,a)))}else A.cv(a,s)
return}s.ai(a)},
ag(a,b){this.a^=2
A.a_(null,null,this.b,t.M.a(new A.bM(this,a,b)))},
$iC:1}
A.bL.prototype={
$0(){A.a7(this.a,this.b)},
$S:0}
A.bS.prototype={
$0(){A.a7(this.b,this.a.a)},
$S:0}
A.bO.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.E(p.$ti.c.a(a))}catch(q){s=A.R(q)
r=A.P(q)
p.q(s,r)}},
$S:2}
A.bP.prototype={
$2(a,b){this.a.q(t.K.a(a),t.l.a(b))},
$S:13}
A.bQ.prototype={
$0(){this.a.q(this.b,this.c)},
$S:0}
A.bN.prototype={
$0(){this.a.E(this.b)},
$S:0}
A.bR.prototype={
$0(){A.cv(this.b,this.a)},
$S:0}
A.bM.prototype={
$0(){this.a.q(this.b,this.c)},
$S:0}
A.bV.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.aD(t.W.a(q.d),t.z)}catch(p){s=A.R(p)
r=A.P(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.bn(s,r)
o.b=!0
return}if(l instanceof A.o&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.aH(new A.bW(n),t.z)
q.b=!1}},
$S:0}
A.bW.prototype={
$1(a){return this.a},
$S:14}
A.bU.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.O(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.R(l)
r=A.P(l)
q=this.a
q.c=A.bn(s,r)
q.b=!0}},
$S:0}
A.bT.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.aA(s)&&p.a.e!=null){p.c=p.a.au(s)
p.b=!1}}catch(o){r=A.R(o)
q=A.P(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.bn(r,q)
n.b=!0}},
$S:0}
A.ba.prototype={}
A.aq.prototype={
gn(a){var s,r,q=this,p={},o=new A.o($.i,t.a)
p.a=0
s=A.cC(q)
r=s.i("~(1)?").a(new A.bz(p,q))
t.Y.a(new A.bA(p,o))
A.bI(q.a,q.b,r,!1,s.c)
return o}}
A.bz.prototype={
$1(a){A.cC(this.b).c.a(a);++this.a.a},
$S(){return A.cC(this.b).i("~(1)")}}
A.bA.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.t()
r.c.a(q)
s.a=8
s.c=q
A.a7(s,p)},
$S:0}
A.b3.prototype={}
A.be.prototype={}
A.aB.prototype={$id6:1}
A.c8.prototype={
$0(){var s=this.a,r=this.b
A.cd(s,"error",t.K)
A.cd(r,"stackTrace",t.l)
A.e8(s,r)},
$S:0}
A.bd.prototype={
aF(a){var s,r,q
t.M.a(a)
try{if(B.a===$.i){a.$0()
return}A.dt(null,null,this,a,t.H)}catch(q){s=A.R(q)
r=A.P(q)
A.c7(t.K.a(s),t.l.a(r))}},
aG(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a===$.i){a.$1(b)
return}A.du(null,null,this,a,b,t.H,c)}catch(q){s=A.R(q)
r=A.P(q)
A.c7(t.K.a(s),t.l.a(r))}},
a_(a){return new A.bZ(this,t.M.a(a))},
ap(a,b){return new A.c_(this,b.i("~(0)").a(a),b)},
aD(a,b){b.i("0()").a(a)
if($.i===B.a)return a.$0()
return A.dt(null,null,this,a,b)},
O(a,b,c,d){c.i("@<0>").l(d).i("1(2)").a(a)
d.a(b)
if($.i===B.a)return a.$1(b)
return A.du(null,null,this,a,b,c,d)},
aE(a,b,c,d,e,f){d.i("@<0>").l(e).l(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.i===B.a)return a.$2(b,c)
return A.f3(null,null,this,a,b,c,d,e,f)},
a5(a,b,c,d){return b.i("@<0>").l(c).l(d).i("1(2,3)").a(a)}}
A.bZ.prototype={
$0(){return this.a.aF(this.b)},
$S:0}
A.c_.prototype={
$1(a){var s=this.c
return this.a.aG(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.an.prototype={}
A.bu.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.h(a)
r.a=s+": "
r.a+=A.h(b)},
$S:15}
A.a4.prototype={
gn(a){return this.a},
h(a){return A.cX(this)},
$ibt:1}
A.f.prototype={
gA(){return A.P(this.$thrownJsError)}}
A.aL.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bp(s)
return"Assertion failed"}}
A.E.prototype={}
A.aX.prototype={
h(a){return"Throw of null."},
$iE:1}
A.K.prototype={
gG(){return"Invalid argument"+(!this.a?"(s)":"")},
gF(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gG()+q+o
if(!s.a)return n
return n+s.gF()+": "+A.bp(s.gM())},
gM(){return this.b}}
A.b_.prototype={
gM(){return A.eH(this.b)},
gG(){return"RangeError"},
gF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.h(q):""
else if(q==null)s=": Not greater than or equal to "+A.h(r)
else if(q>r)s=": Not in inclusive range "+A.h(r)+".."+A.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.h(r)
return s}}
A.aS.prototype={
gM(){return A.l(this.b)},
gG(){return"RangeError"},
gF(){if(A.l(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.b8.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b6.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aP.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bp(s)+"."}}
A.ap.prototype={
h(a){return"Stack Overflow"},
gA(){return null},
$if:1}
A.aQ.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bK.prototype={
h(a){return"Exception: "+this.a}}
A.n.prototype={
gj(a){return A.e.prototype.gj.call(this,this)},
h(a){return"null"}}
A.e.prototype={$ie:1,
p(a,b){return this===b},
gj(a){return A.aZ(this)},
h(a){return"Instance of '"+A.bw(this)+"'"},
toString(){return this.h(this)}}
A.bf.prototype={
h(a){return""},
$iM:1}
A.b4.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.aI.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.aJ.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.a0.prototype={$ia0:1}
A.S.prototype={
sK(a,b){a.height=b},
sR(a,b){a.width=b},
S(a,b){return a.getContext(b)},
$iS:1}
A.a2.prototype={
sar(a,b){a.fillStyle=b},
sT(a,b){a.strokeStyle=b},
$ia2:1}
A.bo.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.ag.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.h(p)+", "+A.h(s)+") "+A.h(r)+" x "+A.h(q)},
p(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gj(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cY(p,s,r,q)},
$icu:1}
A.m.prototype={
h(a){var s=a.localName
s.toString
return s},
ga3(a){return new A.a6(a,"click",!1,t.R)},
$im:1}
A.a.prototype={$ia:1}
A.p.prototype={
ae(a,b,c,d){return a.addEventListener(b,A.aG(t.o.a(c),1),!1)},
$ip:1}
A.aR.prototype={
gn(a){return a.length}}
A.r.prototype={$ir:1}
A.F.prototype={
h(a){var s=a.nodeValue
return s==null?this.a9(a):s}}
A.b1.prototype={
gn(a){return a.length}}
A.A.prototype={}
A.a5.prototype={
ak(a,b){var s=a.requestAnimationFrame(A.aG(t.f.a(b),1))
s.toString
return s},
aj(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.at.prototype={
h(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.h(p)+", "+A.h(s)+") "+A.h(r)+" x "+A.h(q)},
p(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gj(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cY(p,s,r,q)}}
A.cr.prototype={}
A.au.prototype={}
A.a6.prototype={}
A.av.prototype={}
A.bJ.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:4}
A.bX.prototype={
a2(){return Math.random()}}
A.w.prototype={
h(a){return"Point("+A.h(this.a)+", "+A.h(this.b)+")"},
p(a,b){if(b==null)return!1
return b instanceof A.w&&this.a===b.a&&this.b===b.b},
gj(a){return A.eg(B.c.gj(this.a),B.c.gj(this.b),0)}}
A.b.prototype={
ga3(a){return new A.a6(a,"click",!1,t.R)}}
A.ck.prototype={
$1(a){var s=$.aC.k(),r=window.innerWidth
B.b.sR(s,r==null?A.l(r):r)
s=$.aC.k()
r=window.innerHeight
B.b.sK(s,r==null?A.l(r):r)},
$S:4}
A.cl.prototype={
$1(a){t.V.a(a)
A.cb()},
$S:5}
A.cm.prototype={
$1(a){var s,r
t.V.a(a)
s=a.clientX
s.toString
r=a.clientY
r.toString
$.fu=new A.w(s,r,t.X)},
$S:5}
A.ca.prototype={
$1(a){return this.a7(A.eG(a))},
a7(a){var s=0,r=A.ds(t.H),q,p,o,n,m,l,k,j,i
var $async$$1=A.dx(function(b,c){if(b===1)return A.di(c,r)
while(true)switch(s){case 0:i=$.cM()
for(q=$.dW(),p=t.X,o=0;o<3;++o){n=q[o].getBoundingClientRect()
n.toString
m=$.cM()
l=m.b
k=n.top
k.toString
if(l>k){j=n.bottom
j.toString
if(l<j){m=m.a
l=n.left
l.toString
if(m>l){l=n.right
l.toString
l=m<l
m=l}else m=!1}else m=!1}else m=!1
if(m){m=n.left
m.toString
n=n.height
n.toString
i=new A.w(m-30,k+n/2,p)}}q=$.k.k()
p=window.innerWidth
if(p==null)p=A.l(p)
n=window.innerHeight
q.clearRect(0,0,p,n==null?A.l(n):n)
$.cK().a0(i)
A.dA()
return A.dj(null,r)}})
return A.dk($async$$1,r)},
$S:16}
A.af.prototype={
saB(a){this.b=t.X.a(a)}}
A.bx.prototype={
Z(a){var s,r,q=this.r
if(q.aq(a)){s=q.a8(0,a)
s.toString
if(s)return 0}else q.ao(0,A.eb([a,!1],t.S,t.y))
r=(this.c+a*25)*0.02
if(r>3.141592653589793){q.v(0,a,!0)
return 0}return 1000*(Math.cos(r)+1)},
av(a){var s,r,q,p,o,n,m=this
m.b=a
s=window.innerWidth
if(s==null)s=A.l(s)
r=window.innerHeight
if(r==null)r=A.l(r)
q=t.X
m.sB(q.a(new A.w(s/2,r/2,q)))
p=A.bk(new Array(a),t.D)
for(o=0;o<a;o=n){n=o+1
s=30*o
p[o]=new A.af(n,new A.w(s,s,q))}m.sac(t.h.a(p))
A.fv("init called")
m.a0(new A.w(100,100,q))},
a0(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.X
h.sad(g.a(a))
s=h.f
s===$&&A.co("position")
r=h.e
r===$&&A.co("origin")
s.$ti.a(r)
q=s.a-r.a
p=s.b-r.b
o=Math.sqrt(q*q+p*p)
s=h.e
if(o>1){r=h.f
n=r.a
r=r.b
h.sB(g.a(new A.w(n+(s.a-n)*0.4,r+(s.b-r)*0.4,g)))}else h.sB(g.a(s));++h.c
s=h.a
s===$&&A.co("circles")
r=s.length
m=0
for(;m<s.length;s.length===r||(0,A.dI)(s),++m){l=s[m]
n=h.f
k=h.c
j=l.a
i=h.b
i===$&&A.co("count")
l.saB(g.a(new A.w(n.a+Math.sin(k*0.07+(6.283185307179586/i*j-1))*(25+5*Math.sin(h.c*0.07/2)+h.Z(j)),h.f.b+Math.cos(h.c*0.07+(6.283185307179586/h.b*j-1))*(25+5*Math.sin(h.c*0.07/2)+h.Z(j)),g)))
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.D($.k.a))
n.beginPath()
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.D($.k.a))
k=l.b
n.arc(k.a,k.b,10,0,6.283185307179586,!1)
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.D($.k.a))
B.d.sar(n,"red")
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.D($.k.a))
n.fill()}},
sac(a){this.a=t.h.a(a)},
sad(a){this.e=t.X.a(a)},
sB(a){this.f=t.X.a(a)}};(function aliases(){var s=J.ai.prototype
s.a9=s.h
s=J.W.prototype
s.aa=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"fa","ei",1)
s(A,"fb","ej",1)
s(A,"fc","ek",1)
r(A,"dB","f5",0)})();(function inheritance(){var s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.e,null)
r(A.e,[A.cs,J.ai,J.aK,A.f,A.by,A.bB,A.bv,A.ah,A.aw,A.T,A.a4,A.bs,A.bH,A.x,A.bc,A.bg,A.c0,A.b9,A.ae,A.Z,A.o,A.ba,A.aq,A.b3,A.be,A.aB,A.ap,A.bK,A.n,A.bf,A.b4,A.cr,A.bX,A.w,A.af,A.bx])
r(J.ai,[J.aT,J.ak,J.v,J.u,J.al,J.a3])
r(J.v,[J.W,A.p,A.a2,A.bo,A.ag,A.a])
r(J.W,[J.aY,J.as,J.L])
s(J.bq,J.u)
r(J.al,[J.aj,J.aU])
r(A.f,[A.am,A.E,A.aV,A.b7,A.b0,A.bb,A.aL,A.aX,A.K,A.b8,A.b6,A.aP,A.aQ])
s(A.ao,A.E)
r(A.T,[A.aN,A.aO,A.b5,A.cf,A.ch,A.bE,A.bD,A.c5,A.bO,A.bW,A.bz,A.c_,A.bJ,A.ck,A.cl,A.cm,A.ca])
r(A.b5,[A.b2,A.a1])
s(A.an,A.a4)
s(A.V,A.an)
r(A.aO,[A.br,A.cg,A.c6,A.c9,A.bP,A.bu])
s(A.ax,A.bb)
r(A.aN,[A.bF,A.bG,A.c1,A.bL,A.bS,A.bQ,A.bN,A.bR,A.bM,A.bV,A.bU,A.bT,A.bA,A.c8,A.bZ])
s(A.bd,A.aB)
r(A.K,[A.b_,A.aS])
r(A.p,[A.F,A.a5])
s(A.m,A.F)
r(A.m,[A.c,A.b])
r(A.c,[A.aI,A.aJ,A.a0,A.S,A.aR,A.b1])
s(A.A,A.a)
s(A.r,A.A)
s(A.at,A.ag)
s(A.au,A.aq)
s(A.a6,A.au)
s(A.av,A.b3)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ad:"int",ab:"double",y:"num",X:"String",cc:"bool",n:"Null",aW:"List"},mangledNames:{},types:["~()","~(~())","n(@)","n()","~(a)","~(r)","@(@)","@(@,X)","@(X)","n(~())","~(@)","n(@,M)","~(ad,@)","n(e,M)","o<@>(@)","~(e?,e?)","C<~>(y)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eB(v.typeUniverse,JSON.parse('{"aY":"W","as":"W","L":"W","fE":"a","fJ":"a","fD":"b","fK":"b","fF":"c","fO":"c","fP":"r","fG":"A","fN":"m","fL":"F","fI":"F","aT":{"cc":[]},"ak":{"n":[]},"u":{"aW":["1"],"cV":["1"]},"bq":{"u":["1"],"aW":["1"],"cV":["1"]},"al":{"ab":[],"y":[]},"aj":{"ab":[],"ad":[],"y":[]},"aU":{"ab":[],"y":[]},"a3":{"X":[]},"am":{"f":[]},"ao":{"E":[],"f":[]},"aV":{"f":[]},"b7":{"f":[]},"aw":{"M":[]},"T":{"U":[]},"aN":{"U":[]},"aO":{"U":[]},"b5":{"U":[]},"b2":{"U":[]},"a1":{"U":[]},"b0":{"f":[]},"V":{"a4":["1","2"],"cW":["1","2"],"bt":["1","2"]},"bb":{"f":[]},"ax":{"E":[],"f":[]},"o":{"C":["1"]},"ae":{"f":[]},"aB":{"d6":[]},"bd":{"aB":[],"d6":[]},"an":{"a4":["1","2"],"bt":["1","2"]},"a4":{"bt":["1","2"]},"ab":{"y":[]},"ad":{"y":[]},"aL":{"f":[]},"E":{"f":[]},"aX":{"E":[],"f":[]},"K":{"f":[]},"b_":{"f":[]},"aS":{"f":[]},"b8":{"f":[]},"b6":{"f":[]},"aP":{"f":[]},"ap":{"f":[]},"aQ":{"f":[]},"bf":{"M":[]},"m":{"p":[]},"r":{"a":[]},"c":{"m":[],"p":[]},"aI":{"m":[],"p":[]},"aJ":{"m":[],"p":[]},"a0":{"m":[],"p":[]},"S":{"m":[],"p":[]},"ag":{"cu":["y"]},"aR":{"m":[],"p":[]},"F":{"p":[]},"b1":{"m":[],"p":[]},"A":{"a":[]},"a5":{"p":[]},"at":{"cu":["y"]},"au":{"aq":["1"]},"a6":{"au":["1"],"aq":["1"]},"av":{"b3":["1"]},"b":{"m":[],"p":[]}}'))
A.eA(v.typeUniverse,JSON.parse('{"an":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cG
return{n:s("ae"),t:s("a0"),E:s("S"),b:s("a2"),Q:s("f"),A:s("a"),Z:s("U"),d:s("C<@>"),D:s("u<af>"),s:s("u<X>"),r:s("u<@>"),T:s("ak"),g:s("L"),h:s("aW<af>"),V:s("r"),P:s("n"),K:s("e"),X:s("w<ab>"),L:s("fQ"),q:s("cu<y>"),l:s("M"),N:s("X"),e:s("E"),B:s("as"),R:s("a6<r>"),c:s("o<@>"),a:s("o<ad>"),y:s("cc"),m:s("cc(e)"),i:s("ab"),z:s("@"),W:s("@()"),v:s("@(e)"),C:s("@(e,M)"),S:s("ad"),G:s("0&*"),_:s("e*"),U:s("C<n>?"),O:s("e?"),F:s("Z<@,@>?"),o:s("@(a)?"),Y:s("~()?"),j:s("~(a)?"),k:s("~(r)?"),p:s("y"),H:s("~"),M:s("~()"),f:s("~(y)")}})();(function constants(){B.b=A.S.prototype
B.d=A.a2.prototype
B.v=J.ai.prototype
B.e=J.u.prototype
B.k=J.aj.prototype
B.c=J.al.prototype
B.w=J.a3.prototype
B.x=J.L.prototype
B.y=J.v.prototype
B.l=J.aY.prototype
B.f=J.as.prototype
B.m=A.a5.prototype
B.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.n=function() {
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
B.t=function(getTagFallback) {
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
B.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.p=function(hooks) {
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
B.r=function(hooks) {
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
B.q=function(hooks) {
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
B.i=function(hooks) { return hooks; }

B.A=new A.by()
B.j=new A.bX()
B.a=new A.bd()
B.u=new A.bf()
B.z=A.fC("e")})();(function staticFields(){$.bY=null
$.cZ=null
$.cR=null
$.cQ=null
$.dD=null
$.dz=null
$.dH=null
$.ce=null
$.ci=null
$.cI=null
$.a9=null
$.aD=null
$.aE=null
$.cE=!1
$.i=B.a
$.I=A.bk([],A.cG("u<e>"))
$.aC=A.Y("canvas")
$.k=A.Y("ctx")
$.c4=A.Y("bgCanvas")
$.B=A.Y("bgctx")
$.eF=A.Y("body")
$.df=A.Y("link2")
$.dg=A.Y("link3")
$.cA=A.Y("refreshButton")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"fH","dK",()=>A.fi("_$dart_dartClosure"))
s($,"fT","dL",()=>A.G(A.bC({
toString:function(){return"$receiver$"}})))
s($,"fU","dM",()=>A.G(A.bC({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"fV","dN",()=>A.G(A.bC(null)))
s($,"fW","dO",()=>A.G(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fZ","dR",()=>A.G(A.bC(void 0)))
s($,"h_","dS",()=>A.G(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fY","dQ",()=>A.G(A.d3(null)))
s($,"fX","dP",()=>A.G(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"h1","dU",()=>A.G(A.d3(void 0)))
s($,"h0","dT",()=>A.G(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"h2","cL",()=>A.eh())
s($,"he","dV",()=>A.dF(B.z))
r($,"fu","cM",()=>A.ec(A.fo()/2,A.fn()/2,t.i))
r($,"hg","dW",()=>A.bk([$.df.a4(),$.dg.a4(),A.fx()],A.cG("u<m>")))
s($,"fR","cK",()=>new A.bx(A.ea(t.S,t.y)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.v,MediaError:J.v,NavigatorUserMediaError:J.v,OverconstrainedError:J.v,PositionError:J.v,GeolocationPositionError:J.v,Screen:J.v,WebGLRenderingContext:J.v,WebGL2RenderingContext:J.v,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aI,HTMLAreaElement:A.aJ,HTMLBodyElement:A.a0,HTMLCanvasElement:A.S,CanvasRenderingContext2D:A.a2,DOMException:A.bo,DOMRectReadOnly:A.ag,MathMLElement:A.m,Element:A.m,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,EventTarget:A.p,HTMLFormElement:A.aR,MouseEvent:A.r,DragEvent:A.r,PointerEvent:A.r,WheelEvent:A.r,Document:A.F,HTMLDocument:A.F,Node:A.F,HTMLSelectElement:A.b1,CompositionEvent:A.A,FocusEvent:A.A,KeyboardEvent:A.A,TextEvent:A.A,TouchEvent:A.A,UIEvent:A.A,Window:A.a5,DOMWindow:A.a5,ClientRect:A.at,DOMRect:A.at,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Screen:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.fs
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

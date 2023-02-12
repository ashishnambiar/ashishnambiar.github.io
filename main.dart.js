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
a[c]=function(){a[c]=function(){A.fx(b)}
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
if(a[b]!==s)A.fy(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.cE(b)
return new s(c,this)}:function(){if(s===null)s=A.cE(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.cE(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cr:function cr(){},
C(a){return new A.al("Field '"+a+"' has not been initialized.")},
aq(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ed(a,b,c){return A.d1(A.aq(A.aq(c,a),b))},
cc(a,b,c){return a},
al:function al(a){this.a=a},
bx:function bx(){},
dH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
h(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bl(a)
return s},
aX(a){var s,r=$.cY
if(r==null)r=$.cY=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bv(a){return A.ea(a)},
ea(a){var s,r,q,p
if(a instanceof A.e)return A.r(A.bk(a),null)
s=J.ab(a)
if(s===B.v||s===B.y||t.B.b(a)){r=B.h(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.r(A.bk(a),null)},
ci(a,b){if(a==null)J.cM(a)
throw A.d(A.fc(a,b))},
fc(a,b){var s,r="index"
if(!A.dp(b))return new A.J(!0,b,r,null)
s=A.l(J.cM(a))
if(b<0||b>=s)return new A.aQ(s,!0,b,r,"Index out of range")
return new A.aY(null,null,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.aV()
s=new Error()
s.dartException=a
r=A.fz
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
fz(){return J.bl(this.dartException)},
z(a){throw A.d(a)},
dG(a){throw A.d(A.cT(a))},
F(a){var s,r,q,p,o,n
a=A.fu(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.bj([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.bA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
bB(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
d2(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
cs(a,b){var s=b==null,r=s?null:b.method
return new A.aT(a,r,s?null:b.receiver)},
Q(a){var s
if(a==null)return new A.bu(a)
if(a instanceof A.ag){s=a.a
return A.P(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.P(a,a.dartException)
return A.f6(a)},
P(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
f6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.k.an(r,16)&8191)===10)switch(q){case 438:return A.P(a,A.cs(A.h(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.h(s)
return A.P(a,new A.an(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.dJ()
n=$.dK()
m=$.dL()
l=$.dM()
k=$.dP()
j=$.dQ()
i=$.dO()
$.dN()
h=$.dS()
g=$.dR()
f=o.m(s)
if(f!=null)return A.P(a,A.cs(A.bh(s),f))
else{f=n.m(s)
if(f!=null){f.method="call"
return A.P(a,A.cs(A.bh(s),f))}else{f=m.m(s)
if(f==null){f=l.m(s)
if(f==null){f=k.m(s)
if(f==null){f=j.m(s)
if(f==null){f=i.m(s)
if(f==null){f=l.m(s)
if(f==null){f=h.m(s)
if(f==null){f=g.m(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.bh(s)
return A.P(a,new A.an(s,f==null?e:f.method))}}}return A.P(a,new A.b5(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ao()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.P(a,new A.J(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ao()
return a},
O(a){var s
if(a instanceof A.ag)return a.b
if(a==null)return new A.av(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.av(a)},
dD(a){if(a==null||typeof a!="object")return J.co(a)
else return A.aX(a)},
fd(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.v(0,a[s],a[r])}return b},
fn(a,b,c,d,e,f){t.Z.a(a)
switch(A.l(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bJ("Unsupported number of arguments for wrapped closure"))},
aF(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fn)
a.$identity=s
return s},
e3(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.b0().constructor.prototype):Object.create(new A.a1(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.cS(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.e_(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.cS(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
e_(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dY)}throw A.d("Error in functionType of tearoff")},
e0(a,b,c,d){var s=A.cR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
cS(a,b,c,d){var s,r
if(c)return A.e2(a,b,d)
s=b.length
r=A.e0(s,d,a,b)
return r},
e1(a,b,c,d){var s=A.cR,r=A.dZ
switch(b?-1:a){case 0:throw A.d(new A.aZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
e2(a,b,c){var s,r
if($.cP==null)$.cP=A.cO("interceptor")
if($.cQ==null)$.cQ=A.cO("receiver")
s=b.length
r=A.e1(s,c,a,b)
return r},
cE(a){return A.e3(a)},
dY(a,b){return A.c1(v.typeUniverse,A.bk(a.a),b)},
cR(a){return a.a},
dZ(a){return a.b},
cO(a){var s,r,q,p=new A.a1("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.fixed$length=Array
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.cp("Field name "+a+" not found.",null))},
fx(a){throw A.d(new A.aO(a))},
fg(a){return v.getIsolateTag(a)},
hb(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fp(a){var s,r,q,p,o,n=A.bh($.dB.$1(a)),m=$.cd[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ch[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.eG($.dy.$2(a,n))
if(q!=null){m=$.cd[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ch[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cm(s)
$.cd[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ch[n]=s
return s}if(p==="-"){o=A.cm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dE(a,s)
if(p==="*")throw A.d(A.d3(n))
if(v.leafTags[n]===true){o=A.cm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dE(a,s)},
dE(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.cI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cm(a){return J.cI(a,!1,null,!!a.$ifI)},
fr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cm(s)
else return J.cI(s,c,null,null)},
fj(){if(!0===$.cH)return
$.cH=!0
A.fk()},
fk(){var s,r,q,p,o,n,m,l
$.cd=Object.create(null)
$.ch=Object.create(null)
A.fi()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.dF.$1(o)
if(n!=null){m=A.fr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
fi(){var s,r,q,p,o,n,m=B.n()
m=A.a9(B.o,A.a9(B.p,A.a9(B.i,A.a9(B.i,A.a9(B.q,A.a9(B.r,A.a9(B.t(B.h),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dB=new A.ce(p)
$.dy=new A.cf(o)
$.dF=new A.cg(n)},
a9(a,b){return a(b)||b},
fu(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bA:function bA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
an:function an(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a},
bu:function bu(a){this.a=a},
ag:function ag(a,b){this.a=a
this.b=b},
av:function av(a){this.a=a
this.b=null},
S:function S(){},
aL:function aL(){},
aM:function aM(){},
b3:function b3(){},
b0:function b0(){},
a1:function a1(a,b){this.a=a
this.b=b},
aZ:function aZ(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bq:function bq(a){this.a=a},
br:function br(a,b){this.a=a
this.b=b
this.c=null},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
cn(a){return A.z(A.C(a))},
fy(a){return A.z(new A.al("Field '"+a+"' has been assigned during initialization."))},
X(a){var s=new A.bG(a)
return s.b=s},
bG:function bG(a){this.a=a
this.b=null},
d_(a,b){var s=b.c
return s==null?b.c=A.cy(a,b.y,!0):s},
cZ(a,b){var s=b.c
return s==null?b.c=A.ay(a,"B",[b.y]):s},
d0(a){var s=a.x
if(s===6||s===7||s===8)return A.d0(a.y)
return s===12||s===13},
eb(a){return a.at},
cF(a){return A.bg(v.typeUniverse,a,!1)},
N(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.N(a,s,a0,a1)
if(r===s)return b
return A.dc(a,r,!0)
case 7:s=b.y
r=A.N(a,s,a0,a1)
if(r===s)return b
return A.cy(a,r,!0)
case 8:s=b.y
r=A.N(a,s,a0,a1)
if(r===s)return b
return A.db(a,r,!0)
case 9:q=b.z
p=A.aE(a,q,a0,a1)
if(p===q)return b
return A.ay(a,b.y,p)
case 10:o=b.y
n=A.N(a,o,a0,a1)
m=b.z
l=A.aE(a,m,a0,a1)
if(n===o&&l===m)return b
return A.cw(a,n,l)
case 12:k=b.y
j=A.N(a,k,a0,a1)
i=b.z
h=A.f3(a,i,a0,a1)
if(j===k&&h===i)return b
return A.da(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.aE(a,g,a0,a1)
o=b.y
n=A.N(a,o,a0,a1)
if(f===g&&n===o)return b
return A.cx(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.aK("Attempted to substitute unexpected RTI kind "+c))}},
aE(a,b,c,d){var s,r,q,p,o=b.length,n=A.c2(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.N(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
f4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.c2(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.N(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
f3(a,b,c,d){var s,r=b.a,q=A.aE(a,r,c,d),p=b.b,o=A.aE(a,p,c,d),n=b.c,m=A.f4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bb()
s.a=q
s.b=o
s.c=m
return s},
bj(a,b){a[v.arrayRti]=b
return a},
fa(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.fh(r)
s=a.$S()
return s}return null},
dC(a,b){var s
if(A.d0(b))if(a instanceof A.S){s=A.fa(a)
if(s!=null)return s}return A.bk(a)},
bk(a){var s
if(a instanceof A.e){s=a.$ti
return s!=null?s:A.cC(a)}if(Array.isArray(a))return A.cA(a)
return A.cC(J.ab(a))},
cA(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
cB(a){var s=a.$ti
return s!=null?s:A.cC(a)},
cC(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.eP(a,s)},
eP(a,b){var s=a instanceof A.S?a.__proto__.__proto__.constructor:b,r=A.eA(v.typeUniverse,s.name)
b.$ccache=r
return r},
fh(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fb(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.bf(a)
q=A.bg(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.bf(q):p},
fA(a){return A.fb(A.bg(v.typeUniverse,a,!1))},
eO(a){var s,r,q,p,o=this
if(o===t.K)return A.a7(o,a,A.eT)
if(!A.I(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.a7(o,a,A.eX)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.dp
else if(r===t.i||r===t.p)q=A.eS
else if(r===t.N)q=A.eV
else q=r===t.y?A.dm:null
if(q!=null)return A.a7(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.fo)){o.r="$i"+p
if(p==="aU")return A.a7(o,a,A.eR)
return A.a7(o,a,A.eW)}}else if(s===7)return A.a7(o,a,A.eM)
return A.a7(o,a,A.eK)},
a7(a,b,c){a.b=c
return a.b(b)},
eN(a){var s,r=this,q=A.eJ
if(!A.I(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.eH
else if(r===t.K)q=A.eF
else{s=A.aG(r)
if(s)q=A.eL}r.a=q
return r.a(a)},
bi(a){var s,r=a.x
if(!A.I(a))if(!(a===t._))if(!(a===t.G))if(r!==7)if(!(r===6&&A.bi(a.y)))s=r===8&&A.bi(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
eK(a){var s=this
if(a==null)return A.bi(s)
return A.j(v.typeUniverse,A.dC(a,s),null,s,null)},
eM(a){if(a==null)return!0
return this.y.b(a)},
eW(a){var s,r=this
if(a==null)return A.bi(r)
s=r.r
if(a instanceof A.e)return!!a[s]
return!!J.ab(a)[s]},
eR(a){var s,r=this
if(a==null)return A.bi(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.e)return!!a[s]
return!!J.ab(a)[s]},
eJ(a){var s,r=this
if(a==null){s=A.aG(r)
if(s)return a}else if(r.b(a))return a
A.dk(a,r)},
eL(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.dk(a,s)},
dk(a,b){throw A.d(A.ep(A.d6(a,A.dC(a,b),A.r(b,null))))},
d6(a,b,c){var s=A.bo(a)
return s+": type '"+A.r(b==null?A.bk(a):b,null)+"' is not a subtype of type '"+c+"'"},
ep(a){return new A.aw("TypeError: "+a)},
p(a,b){return new A.aw("TypeError: "+A.d6(a,null,b))},
eT(a){return a!=null},
eF(a){if(a!=null)return a
throw A.d(A.p(a,"Object"))},
eX(a){return!0},
eH(a){return a},
dm(a){return!0===a||!1===a},
h_(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.p(a,"bool"))},
h1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.p(a,"bool"))},
h0(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.p(a,"bool?"))},
h2(a){if(typeof a=="number")return a
throw A.d(A.p(a,"double"))},
h4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"double"))},
h3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"double?"))},
dp(a){return typeof a=="number"&&Math.floor(a)===a},
l(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.p(a,"int"))},
h6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.p(a,"int"))},
h5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.p(a,"int?"))},
eS(a){return typeof a=="number"},
eD(a){if(typeof a=="number")return a
throw A.d(A.p(a,"num"))},
h7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"num"))},
eE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"num?"))},
eV(a){return typeof a=="string"},
bh(a){if(typeof a=="string")return a
throw A.d(A.p(a,"String"))},
h8(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.p(a,"String"))},
eG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.p(a,"String?"))},
du(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.r(a[q],b)
return s},
eZ(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.du(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.r(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dl(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.bj([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.e.J(a5,"T"+(q+p))
for(o=t.O,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.ci(a5,j)
m=B.w.a6(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.r(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.r(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.r(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.r(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.r(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
r(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.r(a.y,b)
return s}if(l===7){r=a.y
s=A.r(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.r(a.y,b)+">"
if(l===9){p=A.f5(a.y)
o=a.z
return o.length>0?p+("<"+A.du(o,b)+">"):p}if(l===11)return A.eZ(a,b)
if(l===12)return A.dl(a,b,null)
if(l===13)return A.dl(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.ci(b,n)
return b[n]}return"?"},
f5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
eB(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
eA(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bg(a,b,!1)
else if(typeof m=="number"){s=m
r=A.az(a,5,"#")
q=A.c2(s)
for(p=0;p<s;++p)q[p]=r
o=A.ay(a,b,q)
n[b]=o
return o}else return m},
ey(a,b){return A.dd(a.tR,b)},
ex(a,b){return A.dd(a.eT,b)},
bg(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.d9(A.d7(a,null,b,c))
r.set(b,s)
return s},
c1(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.d9(A.d7(a,b,c,!0))
q.set(c,r)
return r},
ez(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.cw(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
G(a,b){b.a=A.eN
b.b=A.eO
return b},
az(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.x(null,null)
s.x=b
s.at=c
r=A.G(a,s)
a.eC.set(c,r)
return r},
dc(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.eu(a,b,r,c)
a.eC.set(r,s)
return s},
eu(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.I(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.x(null,null)
q.x=6
q.y=b
q.at=c
return A.G(a,q)},
cy(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.et(a,b,r,c)
a.eC.set(r,s)
return s},
et(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.I(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.aG(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.aG(q.y))return q
else return A.d_(a,b)}}p=new A.x(null,null)
p.x=7
p.y=b
p.at=c
return A.G(a,p)},
db(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.er(a,b,r,c)
a.eC.set(r,s)
return s},
er(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.I(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ay(a,"B",[b])
else if(b===t.P||b===t.T)return t.U}q=new A.x(null,null)
q.x=8
q.y=b
q.at=c
return A.G(a,q)},
ev(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.x=14
s.y=b
s.at=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
ax(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
eq(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
ay(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ax(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.x(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.G(a,r)
a.eC.set(p,q)
return q},
cw(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.ax(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.x(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.G(a,o)
a.eC.set(q,n)
return n},
ew(a,b,c){var s,r,q="+"+(b+"("+A.ax(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.x(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.G(a,s)
a.eC.set(q,r)
return r},
da(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ax(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ax(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.eq(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.x(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.G(a,p)
a.eC.set(r,o)
return o},
cx(a,b,c,d){var s,r=b.at+("<"+A.ax(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.es(a,b,c,r,d)
a.eC.set(r,s)
return s},
es(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.c2(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.N(a,b,r,0)
m=A.aE(a,c,r,0)
return A.cx(a,n,m,c!==m)}}l=new A.x(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.G(a,l)},
d7(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d9(a){var s,r,q,p,o,n,m,l,k,j=a.r,i=a.s
for(s=j.length,r=0;r<s;){q=j.charCodeAt(r)
if(q>=48&&q<=57)r=A.ek(r+1,q,j,i)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.d8(a,r,j,i,!1)
else if(q===46)r=A.d8(a,r,j,i,!0)
else{++r
switch(q){case 44:break
case 58:i.push(!1)
break
case 33:i.push(!0)
break
case 59:i.push(A.M(a.u,a.e,i.pop()))
break
case 94:i.push(A.ev(a.u,i.pop()))
break
case 35:i.push(A.az(a.u,5,"#"))
break
case 64:i.push(A.az(a.u,2,"@"))
break
case 126:i.push(A.az(a.u,3,"~"))
break
case 60:i.push(a.p)
a.p=i.length
break
case 62:p=a.u
o=i.splice(a.p)
A.cv(a.u,a.e,o)
a.p=i.pop()
n=i.pop()
if(typeof n=="string")i.push(A.ay(p,n,o))
else{m=A.M(p,a.e,n)
switch(m.x){case 12:i.push(A.cx(p,m,o,a.n))
break
default:i.push(A.cw(p,m,o))
break}}break
case 38:A.el(a,i)
break
case 42:p=a.u
i.push(A.dc(p,A.M(p,a.e,i.pop()),a.n))
break
case 63:p=a.u
i.push(A.cy(p,A.M(p,a.e,i.pop()),a.n))
break
case 47:p=a.u
i.push(A.db(p,A.M(p,a.e,i.pop()),a.n))
break
case 40:i.push(-3)
i.push(a.p)
a.p=i.length
break
case 41:A.ej(a,i)
break
case 91:i.push(a.p)
a.p=i.length
break
case 93:o=i.splice(a.p)
A.cv(a.u,a.e,o)
a.p=i.pop()
i.push(o)
i.push(-1)
break
case 123:i.push(a.p)
a.p=i.length
break
case 125:o=i.splice(a.p)
A.en(a.u,a.e,o)
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
return A.M(a.u,a.e,k)},
ek(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
d8(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.eB(s,o.y)[p]
if(n==null)A.z('No "'+p+'" in "'+A.eb(o)+'"')
d.push(A.c1(s,o,n))}else d.push(p)
return m},
ej(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.ei(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.M(m,a.e,l)
o=new A.bb()
o.a=q
o.b=s
o.c=r
b.push(A.da(m,p,o))
return
case-4:b.push(A.ew(m,b.pop(),q))
return
default:throw A.d(A.aK("Unexpected state under `()`: "+A.h(l)))}},
el(a,b){var s=b.pop()
if(0===s){b.push(A.az(a.u,1,"0&"))
return}if(1===s){b.push(A.az(a.u,4,"1&"))
return}throw A.d(A.aK("Unexpected extended operation "+A.h(s)))},
ei(a,b){var s=b.splice(a.p)
A.cv(a.u,a.e,s)
a.p=b.pop()
return s},
M(a,b,c){if(typeof c=="string")return A.ay(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.em(a,b,c)}else return c},
cv(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.M(a,b,c[s])},
en(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.M(a,b,c[s])},
em(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.aK("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.aK("Bad index "+c+" for "+b.h(0)))},
j(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.I(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.I(b))return!1
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
if(p===6){s=A.d_(a,d)
return A.j(a,b,c,s,e)}if(r===8){if(!A.j(a,b.y,c,d,e))return!1
return A.j(a,A.cZ(a,b),c,d,e)}if(r===7){s=A.j(a,t.P,c,d,e)
return s&&A.j(a,b.y,c,d,e)}if(p===8){if(A.j(a,b,c,d.y,e))return!0
return A.j(a,b,c,A.cZ(a,d),e)}if(p===7){s=A.j(a,b,c,t.P,e)
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
if(!A.j(a,k,c,j,e)||!A.j(a,j,e,k,c))return!1}return A.dn(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.dn(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.eQ(a,b,c,d,e)}s=r===11
if(s&&d===t.L)return!0
if(s&&p===11)return A.eU(a,b,c,d,e)
return!1},
dn(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
eQ(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.c1(a,b,r[o])
return A.dg(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.dg(a,n,null,c,m,e)},
dg(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.j(a,r,d,q,f))return!1}return!0},
eU(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.j(a,r[s],c,q[s],e))return!1
return!0},
aG(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.I(a))if(r!==7)if(!(r===6&&A.aG(a.y)))s=r===8&&A.aG(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
fo(a){var s
if(!A.I(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
I(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.O},
dd(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
c2(a){return a>0?new Array(a):v.typeUniverse.sEA},
x:function x(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bb:function bb(){this.c=this.b=this.a=null},
bf:function bf(a){this.a=a},
ba:function ba(){},
aw:function aw(a){this.a=a},
ee(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.f7()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aF(new A.bD(q),1)).observe(s,{childList:true})
return new A.bC(q,s,r)}else if(self.setImmediate!=null)return A.f8()
return A.f9()},
ef(a){self.scheduleImmediate(A.aF(new A.bE(t.M.a(a)),0))},
eg(a){self.setImmediate(A.aF(new A.bF(t.M.a(a)),0))},
eh(a){t.M.a(a)
A.eo(0,a)},
eo(a,b){var s=new A.c_()
s.ab(a,b)
return s},
dr(a){return new A.b7(new A.n($.i,a.i("n<0>")),a.i("b7<0>"))},
dj(a,b){a.$2(0,null)
b.b=!0
return b.a},
h9(a,b){A.eI(a,b)},
di(a,b){var s,r,q=b.$ti
q.i("1/?").a(a)
if(a==null){q.c.a(a)
s=a}else s=a
if(!b.b)b.a.af(s)
else{r=b.a
if(q.i("B<1>").b(s))r.V(s)
else r.E(q.c.a(s))}},
dh(a,b){var s=A.Q(a),r=A.O(a),q=b.b,p=b.a
if(q)p.q(s,r)
else p.ag(s,r)},
eI(a,b){var s,r,q=new A.c4(b),p=new A.c5(b)
if(a instanceof A.n)a.Y(q,p,t.z)
else{s=t.z
if(t.d.b(a))a.P(q,p,s)
else{r=new A.n($.i,t.c)
r.a=8
r.c=a
r.Y(q,p,s)}}},
dw(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.i.a5(new A.c8(s),t.H,t.S,t.z)},
bm(a,b){var s=A.cc(a,"error",t.K)
return new A.ad(s,b==null?A.dX(a):b)},
dX(a){var s
if(t.Q.b(a)){s=a.gA()
if(s!=null)return s}return B.u},
cu(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.t()
b.D(a)
A.a6(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.X(q)}},
a6(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.c6(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.a6(c.a,b)
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
A.c6(i.a,i.b)
return}f=$.i
if(f!==g)$.i=g
else f=null
b=b.c
if((b&15)===8)new A.bU(p,c,m).$0()
else if(n){if((b&1)!==0)new A.bT(p,i).$0()}else if((b&2)!==0)new A.bS(c,p).$0()
if(f!=null)$.i=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("B<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.u(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.cu(b,e)
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
f_(a,b){var s
if(t.C.b(a))return b.a5(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.cN(a,"onError",u.c))},
eY(){var s,r
for(s=$.a8;s!=null;s=$.a8){$.aD=null
r=s.b
$.a8=r
if(r==null)$.aC=null
s.a.$0()}},
f2(){$.cD=!0
try{A.eY()}finally{$.aD=null
$.cD=!1
if($.a8!=null)$.cK().$1(A.dA())}},
dv(a){var s=new A.b8(a),r=$.aC
if(r==null){$.a8=$.aC=s
if(!$.cD)$.cK().$1(A.dA())}else $.aC=r.b=s},
f1(a){var s,r,q,p=$.a8
if(p==null){A.dv(a)
$.aD=$.aC
return}s=new A.b8(a)
r=$.aD
if(r==null){s.b=p
$.a8=$.aD=s}else{q=r.b
s.b=q
$.aD=r.b=s
if(q==null)$.aC=s}},
fw(a){var s,r=null,q=$.i
if(B.a===q){A.Z(r,r,B.a,a)
return}s=!1
if(s){A.Z(r,r,q,t.M.a(a))
return}A.Z(r,r,q,t.M.a(q.a_(a)))},
fO(a,b){A.cc(a,"stream",t.K)
return new A.bd(b.i("bd<0>"))},
c6(a,b){A.f1(new A.c7(a,b))},
ds(a,b,c,d,e){var s,r=$.i
if(r===c)return d.$0()
$.i=c
s=r
try{r=d.$0()
return r}finally{$.i=s}},
dt(a,b,c,d,e,f,g){var s,r=$.i
if(r===c)return d.$1(e)
$.i=c
s=r
try{r=d.$1(e)
return r}finally{$.i=s}},
f0(a,b,c,d,e,f,g,h,i){var s,r=$.i
if(r===c)return d.$2(e,f)
$.i=c
s=r
try{r=d.$2(e,f)
return r}finally{$.i=s}},
Z(a,b,c,d){t.M.a(d)
if(B.a!==c)d=c.a_(d)
A.dv(d)},
bD:function bD(a){this.a=a},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a){this.a=a},
bF:function bF(a){this.a=a},
c_:function c_(){},
c0:function c0(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=!1
this.$ti=b},
c4:function c4(a){this.a=a},
c5:function c5(a){this.a=a},
c8:function c8(a){this.a=a},
ad:function ad(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
n:function n(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bK:function bK(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=a
this.b=b},
bN:function bN(a){this.a=a},
bO:function bO(a){this.a=a},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a){this.a=a},
bT:function bT(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a
this.b=null},
ap:function ap(){},
by:function by(a,b){this.a=a
this.b=b},
bz:function bz(a,b){this.a=a
this.b=b},
b1:function b1(){},
bd:function bd(a){this.$ti=a},
aA:function aA(){},
c7:function c7(a,b){this.a=a
this.b=b},
bc:function bc(){},
bY:function bY(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
e8(a,b,c){return b.i("@<0>").l(c).i("cV<1,2>").a(A.fd(a,new A.U(b.i("@<0>").l(c).i("U<1,2>"))))},
e7(a,b){return new A.U(a.i("@<0>").l(b).i("U<1,2>"))},
e6(a,b,c){var s,r
if(A.dq(a))return b+"..."+c
s=new A.b2(b)
B.e.J($.H,a)
try{r=s
r.a=A.ec(r.a,a,", ")}finally{if(0>=$.H.length)return A.ci($.H,-1)
$.H.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
dq(a){var s,r
for(s=$.H.length,r=0;r<s;++r)if(a===$.H[r])return!0
return!1},
cW(a){var s,r={}
if(A.dq(a))return"{...}"
s=new A.b2("")
try{B.e.J($.H,a)
s.a+="{"
r.a=!0
a.a2(0,new A.bt(r,s))
s.a+="}"}finally{if(0>=$.H.length)return A.ci($.H,-1)
$.H.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
am:function am(){},
bt:function bt(a,b){this.a=a
this.b=b},
a4:function a4(){},
e4(a){if(a instanceof A.S)return a.h(0)
return"Instance of '"+A.bv(a)+"'"},
e5(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ec(a,b,c){var s,r=A.cA(b),q=new J.aI(b,b.length,r.i("aI<1>"))
if(!q.N())return a
if(c.length===0){r=r.c
do{s=q.d
a+=A.h(s==null?r.a(s):s)}while(q.N())}else{s=q.d
a+=A.h(s==null?r.c.a(s):s)
for(r=r.c;q.N();){s=q.d
a=a+c+A.h(s==null?r.a(s):s)}}return a},
bo(a){if(typeof a=="number"||A.dm(a)||a==null)return J.bl(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e4(a)},
aK(a){return new A.aJ(a)},
cp(a,b){return new A.J(!1,null,b,a)},
cN(a,b,c){return new A.J(!0,a,b,c)},
d4(a){return new A.b6(a)},
d3(a){return new A.b4(a)},
cT(a){return new A.aN(a)},
cX(a,b,c,d){var s,r=B.c.gj(a)
b=B.c.gj(b)
c=B.c.gj(c)
d=B.c.gj(d)
s=$.dT()
return A.d1(A.aq(A.aq(A.aq(A.aq(s,r),b),c),d))},
f:function f(){},
aJ:function aJ(a){this.a=a},
D:function D(){},
aV:function aV(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aQ:function aQ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b6:function b6(a){this.a=a},
b4:function b4(a){this.a=a},
aN:function aN(a){this.a=a},
ao:function ao(){},
aO:function aO(a){this.a=a},
bJ:function bJ(a){this.a=a},
m:function m(){},
e:function e(){},
be:function be(){},
b2:function b2(a){this.a=a},
bH(a,b,c,d,e){var s=A.dx(new A.bI(c),t.A),r=s!=null
if(r&&!0){t.o.a(s)
if(r)J.dW(a,b,s,!1)}return new A.au(a,b,s,!1,e.i("au<0>"))},
dx(a,b){var s=$.i
if(s===B.a)return a
return s.ap(a,b)},
c:function c(){},
a_:function a_(){},
aH:function aH(){},
a0:function a0(){},
R:function R(){},
a2:function a2(){},
bn:function bn(){},
af:function af(){},
a:function a(){},
b:function b(){},
o:function o(){},
aP:function aP(){},
q:function q(){},
E:function E(){},
b_:function b_(){},
A:function A(){},
a5:function a5(){},
as:function as(){},
cq:function cq(a,b){this.a=a
this.$ti=b},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
au:function au(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bI:function bI(a){this.a=a},
e9(a,b,c){return new A.v(a,b,c.i("v<0>"))},
bW:function bW(){},
v:function v(a,b,c){this.a=a
this.b=b
this.$ti=c},
fm(){var s=window.innerWidth
return s==null?A.l(s):s},
fl(){var s=window.innerHeight
return s==null?A.l(s):s},
fv(){return $.cz.k()},
fq(){var s,r=document,q=t.E
$.aB.b=q.a(r.querySelector("#cursor"))
s=t.b
$.k.b=s.a(B.b.S($.aB.k(),"2d"))
$.c3.b=q.a(r.querySelector("#bg"))
$.w.b=s.a(B.b.S($.c3.k(),"2d"))
$.eC.b=t.t.a(r.querySelector("body"))
s=t.a
$.de.b=s.a(r.querySelector("#link2"))
q=r.querySelector("#link3")
q.toString
$.df.b=q
$.cJ().au(3)
$.cz.b=s.a(r.querySelector("#link1"))
r=$.aB.k()
s=window.innerWidth
B.b.sR(r,s==null?A.l(s):s)
r=$.aB.k()
q=window.innerHeight
B.b.sK(r,q==null?A.l(q):q)
r=window
r.toString
q=t.k.a(new A.cj())
t.Y.a(null)
A.bH(r,"resize",q,!1,t.A)
q=t.R
A.bH($.cz.k(),"click",q.i("~(1)?").a(new A.ck()),!1,q.c)
q=window
q.toString
A.bH(q,"mousemove",t.u.a(new A.cl()),!1,t.V)
$.k.k().beginPath()
$.k.k().arc(200,200,30,0,6.283185307179586,!1)
B.d.sT($.k.k(),"blue")
$.k.k().stroke()
A.dz()
A.ca()},
dz(){var s,r=window
r.toString
s=t.f.a(new A.c9())
B.m.aj(r)
s=A.dx(s,t.p)
s.toString
B.m.ak(r,s)},
ca(){var s=0,r=A.dr(t.z),q,p,o,n,m,l,k,j,i,h,g,f
var $async$ca=A.dw(function(a,b){if(a===1)return A.dh(b,r)
while(true)switch(s){case 0:i=B.j.a3()
h=B.j.a3()
g=$.c3.k()
f=window.screen.height
B.b.sK(g,f==null?A.l(f):f)
g=$.c3.k()
f=window.screen.width
B.b.sR(g,f==null?A.l(f):f)
g=window.screen.width
q=(g==null?A.l(g):g)/10
B.d.sT($.w.k(),"rgba(0, 0, 0, 1)")
$.w.k().lineWidth=2
for(g=$.w.a,p=0;p<30;++p){f=$.w.b
if(f===$.w)A.z(A.C(g))
o=window.innerHeight
f.moveTo(0,(o==null?A.l(o):o)/2+p)
f=$.w.b
if(f===$.w)A.z(A.C(g))
f.beginPath()
for(f=p*5,o=70*(p/100),n=70*((30-p)/100),m=0;m<q;++m){l=$.w.b
if(l===$.w)A.z(A.C(g))
k=window.innerHeight
if(k==null)k=A.l(k)
j=m/5
l.lineTo(m*11,50+k/2-f+Math.sin(0.6*j*0.7*i)*8*o-Math.sin(0.6*(2+j)*0.7*h)*8*n)
l=$.w.b
if(l===$.w)A.z(A.C(g))
l.stroke()}}B.d.sa1($.w.k(),"rgba(255, 255, 255, 0.9)")
g=$.w.k()
f=window.screen.width
if(f==null)f=A.l(f)
o=window.screen.height
g.fillRect(0,0,f,o==null?A.l(o):o)
return A.di(null,r)}})
return A.dj($async$ca,r)},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
c9:function c9(){},
ae:function ae(a,b){this.a=a
this.b=b},
bw:function bw(a){var _=this
_.b=_.a=$
_.c=0
_.f=_.e=$
_.r=a},
ft(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
cI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cG(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.cH==null){A.fj()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.d3("Return interceptor for "+A.h(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bX
if(o==null)o=$.bX=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.fp(a)
if(p!=null)return p
if(typeof a=="function")return B.x
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.bX
if(o==null)o=$.bX=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.f,enumerable:false,writable:true,configurable:true})
return B.f}return B.f},
ab(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ai.prototype
return J.aS.prototype}if(typeof a=="string")return J.a3.prototype
if(a==null)return J.aj.prototype
if(typeof a=="boolean")return J.aR.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.e)return a
return J.cG(a)},
fe(a){if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.e)return a
return J.cG(a)},
ff(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.K.prototype
return a}if(a instanceof A.e)return a
return J.cG(a)},
dV(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ab(a).p(a,b)},
dW(a,b,c,d){return J.ff(a).ae(a,b,c,d)},
co(a){return J.ab(a).gj(a)},
cM(a){return J.fe(a).gn(a)},
bl(a){return J.ab(a).h(a)},
ah:function ah(){},
aR:function aR(){},
aj:function aj(){},
u:function u(){},
V:function V(){},
aW:function aW(){},
ar:function ar(){},
K:function K(){},
t:function t(a){this.$ti=a},
bp:function bp(a){this.$ti=a},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ak:function ak(){},
ai:function ai(){},
aS:function aS(){},
a3:function a3(){}},B={}
var w=[A,J,B]
var $={}
A.cr.prototype={}
J.ah.prototype={
p(a,b){return a===b},
gj(a){return A.aX(a)},
h(a){return"Instance of '"+A.bv(a)+"'"}}
J.aR.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
$icb:1}
J.aj.prototype={
p(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$im:1}
J.u.prototype={}
J.V.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.aW.prototype={}
J.ar.prototype={}
J.K.prototype={
h(a){var s=a[$.dI()]
if(s==null)return this.aa(a)
return"JavaScript function for "+J.bl(s)},
$iT:1}
J.t.prototype={
J(a,b){A.cA(a).c.a(b)
if(!!a.fixed$length)A.z(A.d4("add"))
a.push(b)},
h(a){return A.e6(a,"[","]")},
gj(a){return A.aX(a)},
gn(a){return a.length},
$icU:1,
$iaU:1}
J.bp.prototype={}
J.aI.prototype={
N(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.dG(q))
s=r.c
if(s>=p){r.sW(null)
return!1}r.sW(q[s]);++r.c
return!0},
sW(a){this.d=this.$ti.i("1?").a(a)}}
J.ak.prototype={
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
$iaa:1,
$iy:1}
J.ai.prototype={$iac:1}
J.aS.prototype={}
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
$iW:1}
A.al.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bx.prototype={}
A.bA.prototype={
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
A.an.prototype={
h(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.aT.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.b5.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.bu.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ag.prototype={}
A.av.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iL:1}
A.S.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.dH(r==null?"unknown":r)+"'"},
$iT:1,
gaH(){return this},
$C:"$1",
$R:1,
$D:null}
A.aL.prototype={$C:"$0",$R:0}
A.aM.prototype={$C:"$2",$R:2}
A.b3.prototype={}
A.b0.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.dH(s)+"'"}}
A.a1.prototype={
p(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dD(this.a)^A.aX(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bv(this.a)+"'")}}
A.aZ.prototype={
h(a){return"RuntimeError: "+this.a}}
A.U.prototype={
gn(a){return this.a},
aq(a){var s
if((a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.av(a)},
av(a){var s=this.d
if(s==null)return!1
return this.L(s[B.k.gj(a)&0x3fffffff],a)>=0},
ao(a,b){this.$ti.i("bs<1,2>").a(b).a2(0,new A.bq(this))},
a8(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.aw(b)},
aw(a){var s,r,q=this.d
if(q==null)return null
s=q[J.co(a)&0x3fffffff]
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
p=J.co(b)&0x3fffffff
o=q[p]
if(o==null)q[p]=[m.I(b,c)]
else{n=m.L(o,b)
if(n>=0)o[n].b=c
else o.push(m.I(b,c))}}},
a2(a,b){var s,r,q=this
q.$ti.i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.cT(q))
s=s.c}},
U(a,b,c){var s,r=this.$ti
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.I(b,c)
else s.b=c},
I(a,b){var s=this,r=s.$ti,q=new A.br(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
L(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.dV(a[r].a,b))return r
return-1},
h(a){return A.cW(this)},
H(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$icV:1}
A.bq.prototype={
$2(a,b){var s=this.a,r=s.$ti
s.v(0,r.c.a(a),r.z[1].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.br.prototype={}
A.ce.prototype={
$1(a){return this.a(a)},
$S:6}
A.cf.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cg.prototype={
$1(a){return this.a(A.bh(a))},
$S:8}
A.bG.prototype={
aB(){var s=this.b
if(s===this)A.z(A.C(this.a))
return s},
a4(){return this.aB(t.z)},
k(){var s=this.b
if(s===this)throw A.d(A.C(this.a))
return s}}
A.x.prototype={
i(a){return A.c1(v.typeUniverse,this,a)},
l(a){return A.ez(v.typeUniverse,this,a)}}
A.bb.prototype={}
A.bf.prototype={
h(a){return A.r(this.a,null)}}
A.ba.prototype={
h(a){return this.a}}
A.aw.prototype={$iD:1}
A.bD.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:2}
A.bC.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.bE.prototype={
$0(){this.a.$0()},
$S:3}
A.bF.prototype={
$0(){this.a.$0()},
$S:3}
A.c_.prototype={
ab(a,b){if(self.setTimeout!=null)self.setTimeout(A.aF(new A.c0(this,b),0),a)
else throw A.d(A.d4("`setTimeout()` not found."))}}
A.c0.prototype={
$0(){this.b.$0()},
$S:0}
A.b7.prototype={}
A.c4.prototype={
$1(a){return this.a.$2(0,a)},
$S:10}
A.c5.prototype={
$2(a,b){this.a.$2(1,new A.ag(a,t.l.a(b)))},
$S:11}
A.c8.prototype={
$2(a,b){this.a(A.l(a),b)},
$S:12}
A.ad.prototype={
h(a){return A.h(this.a)},
$if:1,
gA(){return this.b}}
A.Y.prototype={
az(a){if((this.c&15)!==6)return!0
return this.b.b.O(t.m.a(this.d),a.a,t.y,t.K)},
ar(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.aD(q,m,a.b,o,n,t.l)
else p=l.O(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.e.b(A.Q(s))){if((r.c&1)!==0)throw A.d(A.cp("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.cp("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.n.prototype={
P(a,b,c){var s,r,q,p=this.$ti
p.l(c).i("1/(2)").a(a)
s=$.i
if(s===B.a){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.cN(b,"onError",u.c))}else{c.i("@<0/>").l(p.c).i("1(2)").a(a)
if(b!=null)b=A.f_(b,s)}r=new A.n(s,c.i("n<0>"))
q=b==null?1:3
this.C(new A.Y(r,q,a,b,p.i("@<1>").l(c).i("Y<1,2>")))
return r},
aG(a,b){return this.P(a,null,b)},
Y(a,b,c){var s,r=this.$ti
r.l(c).i("1/(2)").a(a)
s=new A.n($.i,c.i("n<0>"))
this.C(new A.Y(s,3,a,b,r.i("@<1>").l(c).i("Y<1,2>")))
return s},
al(a){this.a=this.a&1|16
this.c=a},
D(a){this.a=a.a&30|this.a&1
this.c=a.c},
C(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.C(a)
return}r.D(s)}A.Z(null,null,r.b,t.M.a(new A.bK(r,a)))}},
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
A.Z(null,null,m.b,t.M.a(new A.bR(l,m)))}},
t(){var s=t.F.a(this.c)
this.c=null
return this.u(s)},
u(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ai(a){var s,r,q,p=this
p.a^=2
try{a.P(new A.bN(p),new A.bO(p),t.P)}catch(q){s=A.Q(q)
r=A.O(q)
A.fw(new A.bP(p,s,r))}},
E(a){var s,r=this
r.$ti.c.a(a)
s=r.t()
r.a=8
r.c=a
A.a6(r,s)},
q(a,b){var s
t.l.a(b)
s=this.t()
this.al(A.bm(a,b))
A.a6(this,s)},
af(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("B<1>").b(a)){this.V(a)
return}this.ah(s.c.a(a))},
ah(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.Z(null,null,s.b,t.M.a(new A.bM(s,a)))},
V(a){var s=this,r=s.$ti
r.i("B<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.Z(null,null,s.b,t.M.a(new A.bQ(s,a)))}else A.cu(a,s)
return}s.ai(a)},
ag(a,b){this.a^=2
A.Z(null,null,this.b,t.M.a(new A.bL(this,a,b)))},
$iB:1}
A.bK.prototype={
$0(){A.a6(this.a,this.b)},
$S:0}
A.bR.prototype={
$0(){A.a6(this.b,this.a.a)},
$S:0}
A.bN.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.E(p.$ti.c.a(a))}catch(q){s=A.Q(q)
r=A.O(q)
p.q(s,r)}},
$S:2}
A.bO.prototype={
$2(a,b){this.a.q(t.K.a(a),t.l.a(b))},
$S:13}
A.bP.prototype={
$0(){this.a.q(this.b,this.c)},
$S:0}
A.bM.prototype={
$0(){this.a.E(this.b)},
$S:0}
A.bQ.prototype={
$0(){A.cu(this.b,this.a)},
$S:0}
A.bL.prototype={
$0(){this.a.q(this.b,this.c)},
$S:0}
A.bU.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.aC(t.W.a(q.d),t.z)}catch(p){s=A.Q(p)
r=A.O(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.bm(s,r)
o.b=!0
return}if(l instanceof A.n&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.aG(new A.bV(n),t.z)
q.b=!1}},
$S:0}
A.bV.prototype={
$1(a){return this.a},
$S:14}
A.bT.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.O(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.Q(l)
r=A.O(l)
q=this.a
q.c=A.bm(s,r)
q.b=!0}},
$S:0}
A.bS.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.az(s)&&p.a.e!=null){p.c=p.a.ar(s)
p.b=!1}}catch(o){r=A.Q(o)
q=A.O(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.bm(r,q)
n.b=!0}},
$S:0}
A.b8.prototype={}
A.ap.prototype={
gn(a){var s,r,q=this,p={},o=new A.n($.i,t.j)
p.a=0
s=A.cB(q)
r=s.i("~(1)?").a(new A.by(p,q))
t.Y.a(new A.bz(p,o))
A.bH(q.a,q.b,r,!1,s.c)
return o}}
A.by.prototype={
$1(a){A.cB(this.b).c.a(a);++this.a.a},
$S(){return A.cB(this.b).i("~(1)")}}
A.bz.prototype={
$0(){var s=this.b,r=s.$ti,q=r.i("1/").a(this.a.a),p=s.t()
r.c.a(q)
s.a=8
s.c=q
A.a6(s,p)},
$S:0}
A.b1.prototype={}
A.bd.prototype={}
A.aA.prototype={$id5:1}
A.c7.prototype={
$0(){var s=this.a,r=this.b
A.cc(s,"error",t.K)
A.cc(r,"stackTrace",t.l)
A.e5(s,r)},
$S:0}
A.bc.prototype={
aE(a){var s,r,q
t.M.a(a)
try{if(B.a===$.i){a.$0()
return}A.ds(null,null,this,a,t.H)}catch(q){s=A.Q(q)
r=A.O(q)
A.c6(t.K.a(s),t.l.a(r))}},
aF(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.a===$.i){a.$1(b)
return}A.dt(null,null,this,a,b,t.H,c)}catch(q){s=A.Q(q)
r=A.O(q)
A.c6(t.K.a(s),t.l.a(r))}},
a_(a){return new A.bY(this,t.M.a(a))},
ap(a,b){return new A.bZ(this,b.i("~(0)").a(a),b)},
aC(a,b){b.i("0()").a(a)
if($.i===B.a)return a.$0()
return A.ds(null,null,this,a,b)},
O(a,b,c,d){c.i("@<0>").l(d).i("1(2)").a(a)
d.a(b)
if($.i===B.a)return a.$1(b)
return A.dt(null,null,this,a,b,c,d)},
aD(a,b,c,d,e,f){d.i("@<0>").l(e).l(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.i===B.a)return a.$2(b,c)
return A.f0(null,null,this,a,b,c,d,e,f)},
a5(a,b,c,d){return b.i("@<0>").l(c).l(d).i("1(2,3)").a(a)}}
A.bY.prototype={
$0(){return this.a.aE(this.b)},
$S:0}
A.bZ.prototype={
$1(a){var s=this.c
return this.a.aF(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.am.prototype={}
A.bt.prototype={
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
h(a){return A.cW(this)},
$ibs:1}
A.f.prototype={
gA(){return A.O(this.$thrownJsError)}}
A.aJ.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bo(s)
return"Assertion failed"}}
A.D.prototype={}
A.aV.prototype={
h(a){return"Throw of null."},
$iD:1}
A.J.prototype={
gG(){return"Invalid argument"+(!this.a?"(s)":"")},
gF(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gG()+q+o
if(!s.a)return n
return n+s.gF()+": "+A.bo(s.gM())},
gM(){return this.b}}
A.aY.prototype={
gM(){return A.eE(this.b)},
gG(){return"RangeError"},
gF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.h(q):""
else if(q==null)s=": Not greater than or equal to "+A.h(r)
else if(q>r)s=": Not in inclusive range "+A.h(r)+".."+A.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.h(r)
return s}}
A.aQ.prototype={
gM(){return A.l(this.b)},
gG(){return"RangeError"},
gF(){if(A.l(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gn(a){return this.f}}
A.b6.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b4.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aN.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bo(s)+"."}}
A.ao.prototype={
h(a){return"Stack Overflow"},
gA(){return null},
$if:1}
A.aO.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bJ.prototype={
h(a){return"Exception: "+this.a}}
A.m.prototype={
gj(a){return A.e.prototype.gj.call(this,this)},
h(a){return"null"}}
A.e.prototype={$ie:1,
p(a,b){return this===b},
gj(a){return A.aX(this)},
h(a){return"Instance of '"+A.bv(this)+"'"},
toString(){return this.h(this)}}
A.be.prototype={
h(a){return""},
$iL:1}
A.b2.prototype={
gn(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.a_.prototype={
h(a){var s=String(a)
s.toString
return s},
$ia_:1}
A.aH.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.a0.prototype={$ia0:1}
A.R.prototype={
sK(a,b){a.height=b},
sR(a,b){a.width=b},
S(a,b){return a.getContext(b)},
$iR:1}
A.a2.prototype={
sa1(a,b){a.fillStyle=b},
sT(a,b){a.strokeStyle=b},
$ia2:1}
A.bn.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.af.prototype={
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
return A.cX(p,s,r,q)},
$ict:1}
A.a.prototype={
h(a){var s=a.localName
s.toString
return s},
$ia:1}
A.b.prototype={$ib:1}
A.o.prototype={
ae(a,b,c,d){return a.addEventListener(b,A.aF(t.o.a(c),1),!1)},
$io:1}
A.aP.prototype={
gn(a){return a.length}}
A.q.prototype={$iq:1}
A.E.prototype={
h(a){var s=a.nodeValue
return s==null?this.a9(a):s}}
A.b_.prototype={
gn(a){return a.length}}
A.A.prototype={}
A.a5.prototype={
ak(a,b){var s=a.requestAnimationFrame(A.aF(t.f.a(b),1))
s.toString
return s},
aj(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.as.prototype={
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
return A.cX(p,s,r,q)}}
A.cq.prototype={}
A.at.prototype={}
A.b9.prototype={}
A.au.prototype={}
A.bI.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:4}
A.bW.prototype={
a3(){return Math.random()}}
A.v.prototype={
h(a){return"Point("+A.h(this.a)+", "+A.h(this.b)+")"},
p(a,b){if(b==null)return!1
return b instanceof A.v&&this.a===b.a&&this.b===b.b},
gj(a){return A.ed(B.c.gj(this.a),B.c.gj(this.b),0)}}
A.cj.prototype={
$1(a){var s=$.aB.k(),r=window.innerWidth
B.b.sR(s,r==null?A.l(r):r)
s=$.aB.k()
r=window.innerHeight
B.b.sK(s,r==null?A.l(r):r)},
$S:4}
A.ck.prototype={
$1(a){t.V.a(a)
A.ca()},
$S:5}
A.cl.prototype={
$1(a){var s,r
t.V.a(a)
s=a.clientX
s.toString
r=a.clientY
r.toString
$.fs=new A.v(s,r,t.X)},
$S:5}
A.c9.prototype={
$1(a){return this.a7(A.eD(a))},
a7(a){var s=0,r=A.dr(t.H),q,p,o,n,m,l,k,j,i
var $async$$1=A.dw(function(b,c){if(b===1)return A.dh(c,r)
while(true)switch(s){case 0:i=$.cL()
for(q=$.dU(),p=t.X,o=0;o<3;++o){n=q[o].getBoundingClientRect()
n.toString
m=$.cL()
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
i=new A.v(m-30,k+n/2,p)}}q=$.k.k()
p=window.innerWidth
if(p==null)p=A.l(p)
n=window.innerHeight
q.clearRect(0,0,p,n==null?A.l(n):n)
$.cJ().a0(i)
A.dz()
return A.di(null,r)}})
return A.dj($async$$1,r)},
$S:16}
A.ae.prototype={
saA(a){this.b=t.X.a(a)}}
A.bw.prototype={
Z(a){var s,r,q=this.r
if(q.aq(a)){s=q.a8(0,a)
s.toString
if(s)return 0}else q.ao(0,A.e8([a,!1],t.S,t.y))
r=(this.c+a*25)*0.02
if(r>3.141592653589793){q.v(0,a,!0)
return 0}return 1000*(Math.cos(r)+1)},
au(a){var s,r,q,p,o,n,m=this
m.b=a
s=window.innerWidth
if(s==null)s=A.l(s)
r=window.innerHeight
if(r==null)r=A.l(r)
q=t.X
m.sB(q.a(new A.v(s/2,r/2,q)))
p=A.bj(new Array(a),t.D)
for(o=0;o<a;o=n){n=o+1
s=30*o
p[o]=new A.ae(n,new A.v(s,s,q))}m.sac(t.h.a(p))
A.ft("init called")
m.a0(new A.v(100,100,q))},
a0(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.X
h.sad(g.a(a))
s=h.f
s===$&&A.cn("position")
r=h.e
r===$&&A.cn("origin")
s.$ti.a(r)
q=s.a-r.a
p=s.b-r.b
o=Math.sqrt(q*q+p*p)
s=h.e
if(o>1){r=h.f
n=r.a
r=r.b
h.sB(g.a(new A.v(n+(s.a-n)*0.4,r+(s.b-r)*0.4,g)))}else h.sB(g.a(s));++h.c
s=h.a
s===$&&A.cn("circles")
r=s.length
m=0
for(;m<s.length;s.length===r||(0,A.dG)(s),++m){l=s[m]
n=h.f
k=h.c
j=l.a
i=h.b
i===$&&A.cn("count")
l.saA(g.a(new A.v(n.a+Math.sin(k*0.07+(6.283185307179586/i*j-1))*(25+5*Math.sin(h.c*0.07/2)+h.Z(j)),h.f.b+Math.cos(h.c*0.07+(6.283185307179586/h.b*j-1))*(25+5*Math.sin(h.c*0.07/2)+h.Z(j)),g)))
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.C($.k.a))
n.beginPath()
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.C($.k.a))
k=l.b
n.arc(k.a,k.b,10,0,6.283185307179586,!1)
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.C($.k.a))
B.d.sa1(n,"red")
n=$.k.b
if(n==null?$.k==null:n===$.k)A.z(A.C($.k.a))
n.fill()}},
sac(a){this.a=t.h.a(a)},
sad(a){this.e=t.X.a(a)},
sB(a){this.f=t.X.a(a)}};(function aliases(){var s=J.ah.prototype
s.a9=s.h
s=J.V.prototype
s.aa=s.h})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"f7","ef",1)
s(A,"f8","eg",1)
s(A,"f9","eh",1)
r(A,"dA","f2",0)})();(function inheritance(){var s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.e,null)
r(A.e,[A.cr,J.ah,J.aI,A.f,A.bx,A.bA,A.bu,A.ag,A.av,A.S,A.a4,A.br,A.bG,A.x,A.bb,A.bf,A.c_,A.b7,A.ad,A.Y,A.n,A.b8,A.ap,A.b1,A.bd,A.aA,A.ao,A.bJ,A.m,A.be,A.b2,A.cq,A.bW,A.v,A.ae,A.bw])
r(J.ah,[J.aR,J.aj,J.u,J.t,J.ak,J.a3])
r(J.u,[J.V,A.o,A.a2,A.bn,A.af,A.b])
r(J.V,[J.aW,J.ar,J.K])
s(J.bp,J.t)
r(J.ak,[J.ai,J.aS])
r(A.f,[A.al,A.D,A.aT,A.b5,A.aZ,A.ba,A.aJ,A.aV,A.J,A.b6,A.b4,A.aN,A.aO])
s(A.an,A.D)
r(A.S,[A.aL,A.aM,A.b3,A.ce,A.cg,A.bD,A.bC,A.c4,A.bN,A.bV,A.by,A.bZ,A.bI,A.cj,A.ck,A.cl,A.c9])
r(A.b3,[A.b0,A.a1])
s(A.am,A.a4)
s(A.U,A.am)
r(A.aM,[A.bq,A.cf,A.c5,A.c8,A.bO,A.bt])
s(A.aw,A.ba)
r(A.aL,[A.bE,A.bF,A.c0,A.bK,A.bR,A.bP,A.bM,A.bQ,A.bL,A.bU,A.bT,A.bS,A.bz,A.c7,A.bY])
s(A.bc,A.aA)
r(A.J,[A.aY,A.aQ])
r(A.o,[A.E,A.a5])
s(A.a,A.E)
s(A.c,A.a)
r(A.c,[A.a_,A.aH,A.a0,A.R,A.aP,A.b_])
s(A.A,A.b)
s(A.q,A.A)
s(A.as,A.af)
s(A.at,A.ap)
s(A.b9,A.at)
s(A.au,A.b1)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ac:"int",aa:"double",y:"num",W:"String",cb:"bool",m:"Null",aU:"List"},mangledNames:{},types:["~()","~(~())","m(@)","m()","~(b)","~(q)","@(@)","@(@,W)","@(W)","m(~())","~(@)","m(@,L)","~(ac,@)","m(e,L)","n<@>(@)","~(e?,e?)","B<~>(y)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ey(v.typeUniverse,JSON.parse('{"aW":"V","ar":"V","K":"V","fB":"b","fG":"b","fJ":"a","fC":"c","fK":"c","fL":"q","fD":"A","fH":"E","fF":"E","aR":{"cb":[]},"aj":{"m":[]},"t":{"aU":["1"],"cU":["1"]},"bp":{"t":["1"],"aU":["1"],"cU":["1"]},"ak":{"aa":[],"y":[]},"ai":{"aa":[],"ac":[],"y":[]},"aS":{"aa":[],"y":[]},"a3":{"W":[]},"al":{"f":[]},"an":{"D":[],"f":[]},"aT":{"f":[]},"b5":{"f":[]},"av":{"L":[]},"S":{"T":[]},"aL":{"T":[]},"aM":{"T":[]},"b3":{"T":[]},"b0":{"T":[]},"a1":{"T":[]},"aZ":{"f":[]},"U":{"a4":["1","2"],"cV":["1","2"],"bs":["1","2"]},"ba":{"f":[]},"aw":{"D":[],"f":[]},"n":{"B":["1"]},"ad":{"f":[]},"aA":{"d5":[]},"bc":{"aA":[],"d5":[]},"am":{"a4":["1","2"],"bs":["1","2"]},"a4":{"bs":["1","2"]},"aa":{"y":[]},"ac":{"y":[]},"aJ":{"f":[]},"D":{"f":[]},"aV":{"D":[],"f":[]},"J":{"f":[]},"aY":{"f":[]},"aQ":{"f":[]},"b6":{"f":[]},"b4":{"f":[]},"aN":{"f":[]},"ao":{"f":[]},"aO":{"f":[]},"be":{"L":[]},"a":{"o":[]},"q":{"b":[]},"c":{"a":[],"o":[]},"a_":{"a":[],"o":[]},"aH":{"a":[],"o":[]},"a0":{"a":[],"o":[]},"R":{"a":[],"o":[]},"af":{"ct":["y"]},"aP":{"a":[],"o":[]},"E":{"o":[]},"b_":{"a":[],"o":[]},"A":{"b":[]},"a5":{"o":[]},"as":{"ct":["y"]},"at":{"ap":["1"]},"b9":{"at":["1"],"ap":["1"]},"au":{"b1":["1"]}}'))
A.ex(v.typeUniverse,JSON.parse('{"am":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.cF
return{a:s("a_"),n:s("ad"),t:s("a0"),E:s("R"),b:s("a2"),Q:s("f"),A:s("b"),Z:s("T"),d:s("B<@>"),D:s("t<ae>"),s:s("t<W>"),r:s("t<@>"),T:s("aj"),g:s("K"),h:s("aU<ae>"),V:s("q"),P:s("m"),K:s("e"),X:s("v<aa>"),L:s("fM"),q:s("ct<y>"),l:s("L"),N:s("W"),e:s("D"),B:s("ar"),R:s("b9<q>"),c:s("n<@>"),j:s("n<ac>"),y:s("cb"),m:s("cb(e)"),i:s("aa"),z:s("@"),W:s("@()"),v:s("@(e)"),C:s("@(e,L)"),S:s("ac"),G:s("0&*"),_:s("e*"),U:s("B<m>?"),O:s("e?"),F:s("Y<@,@>?"),o:s("@(b)?"),Y:s("~()?"),k:s("~(b)?"),u:s("~(q)?"),p:s("y"),H:s("~"),M:s("~()"),f:s("~(y)")}})();(function constants(){B.b=A.R.prototype
B.d=A.a2.prototype
B.v=J.ah.prototype
B.e=J.t.prototype
B.k=J.ai.prototype
B.c=J.ak.prototype
B.w=J.a3.prototype
B.x=J.K.prototype
B.y=J.u.prototype
B.l=J.aW.prototype
B.f=J.ar.prototype
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

B.A=new A.bx()
B.j=new A.bW()
B.a=new A.bc()
B.u=new A.be()
B.z=A.fA("e")})();(function staticFields(){$.bX=null
$.cY=null
$.cQ=null
$.cP=null
$.dB=null
$.dy=null
$.dF=null
$.cd=null
$.ch=null
$.cH=null
$.a8=null
$.aC=null
$.aD=null
$.cD=!1
$.i=B.a
$.H=A.bj([],A.cF("t<e>"))
$.aB=A.X("canvas")
$.k=A.X("ctx")
$.c3=A.X("bgCanvas")
$.w=A.X("bgctx")
$.eC=A.X("body")
$.de=A.X("link2")
$.df=A.X("link3")
$.cz=A.X("refreshButton")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"fE","dI",()=>A.fg("_$dart_dartClosure"))
s($,"fP","dJ",()=>A.F(A.bB({
toString:function(){return"$receiver$"}})))
s($,"fQ","dK",()=>A.F(A.bB({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"fR","dL",()=>A.F(A.bB(null)))
s($,"fS","dM",()=>A.F(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fV","dP",()=>A.F(A.bB(void 0)))
s($,"fW","dQ",()=>A.F(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"fU","dO",()=>A.F(A.d2(null)))
s($,"fT","dN",()=>A.F(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"fY","dS",()=>A.F(A.d2(void 0)))
s($,"fX","dR",()=>A.F(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"fZ","cK",()=>A.ee())
s($,"ha","dT",()=>A.dD(B.z))
r($,"fs","cL",()=>A.e9(A.fm()/2,A.fl()/2,t.i))
r($,"hc","dU",()=>A.bj([$.de.a4(),$.df.a4(),A.fv()],A.cF("t<a>")))
s($,"fN","cJ",()=>new A.bw(A.e7(t.S,t.y)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.u,MediaError:J.u,NavigatorUserMediaError:J.u,OverconstrainedError:J.u,PositionError:J.u,GeolocationPositionError:J.u,Screen:J.u,WebGLRenderingContext:J.u,WebGL2RenderingContext:J.u,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.a_,HTMLAreaElement:A.aH,HTMLBodyElement:A.a0,HTMLCanvasElement:A.R,CanvasRenderingContext2D:A.a2,DOMException:A.bn,DOMRectReadOnly:A.af,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.o,HTMLFormElement:A.aP,MouseEvent:A.q,DragEvent:A.q,PointerEvent:A.q,WheelEvent:A.q,Document:A.E,HTMLDocument:A.E,Node:A.E,HTMLSelectElement:A.b_,CompositionEvent:A.A,FocusEvent:A.A,KeyboardEvent:A.A,TextEvent:A.A,TouchEvent:A.A,UIEvent:A.A,Window:A.a5,DOMWindow:A.a5,ClientRect:A.as,DOMRect:A.as})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Screen:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.fq
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map

var Av=Object.defineProperty;var Rv=(s,e,t)=>e in s?Av(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ze=(s,e,t)=>Rv(s,typeof e!="symbol"?e+"":e,t);var N0=0,Id=1,U0=2;var oo=1,O0=2,_a=3,Er=0,Ii=1,Gi=2,Mi=0,xa=1,Js=2,Dd=3,Ld=4,Kh=5;var Yn=100,F0=101,B0=102,z0=103,k0=104,ao=200,H0=201,V0=202,G0=203,Nd=204,Ud=205,Ol=206,W0=207,Fl=208,X0=209,q0=210,Y0=211,Z0=212,$0=213,J0=214,bh=0,Th=1,Eh=2,jo=3,wh=4,Ah=5,Rh=6,Ch=7,Od=0,K0=1,Q0=2,Ms=0,Bl=1,zl=2,kl=3,lo=4,Hl=5,Vl=6,Gl=7;var Fd=300,co=301,va=302,Qh=303,jh=304,xn=1e3,_s=1001,Ph=1002,ti=1003,j0=1004;var Wl=1005;var nn=1006,eu=1007;var Ks=1008;var Wi=1009,Bd=1010,zd=1011,ya=1012,tu=1013,hs=1014,Zn=1015,Jt=1016,iu=1017,nu=1018,Qs=1020,kd=35902,Hd=35899,Vd=1021,Gd=1022,In=1023,Ws=1026,us=1027,su=1028,ru=1029,wr=1030,ou=1031;var au=1033,Xl=33776,ql=33777,Yl=33778,Zl=33779,lu=35840,cu=35841,hu=35842,uu=35843,fu=36196,du=37492,pu=37496,mu=37488,gu=37489,$l=37490,_u=37491,xu=37808,vu=37809,yu=37810,Su=37811,Mu=37812,bu=37813,Tu=37814,Eu=37815,wu=37816,Au=37817,Ru=37818,Cu=37819,Pu=37820,Iu=37821,Du=36492,Lu=36494,Nu=36495,Uu=36283,Ou=36284,Jl=36285,Fu=36286;var fl=2300,Ih=2301,yh=2302,Sd=2303,Md=2400,bd=2401,Td=2402;var eg=3200;var Kl=0,tg=1,js="",ei="srgb",dl="srgb-linear",pl="linear",yt="srgb";var Sh=7680;var ig=519,ng=512,sg=513,rg=514,Wd=515,og=516,ag=517,Xd=518,qd=519,Yd=35044;var Zd="300 es",Wn=2e3,ea=2001;function Cv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lg(){let s=ta("canvas");return s.style.display="block",s}var Qm={},ia=null;function ml(...s){let e="THREE."+s.shift();ia?ia("log",e,...s):console.log(e,...s)}function cg(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ye(...s){s=cg(s);let e="THREE."+s.shift();if(ia)ia("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Je(...s){s=cg(s);let e="THREE."+s.shift();if(ia)ia("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function jr(...s){let e=s.join(" ");e in Qm||(Qm[e]=!0,Ye(...s))}function hg(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ug={[bh]:bh,[Eh]:Rh,[wh]:wh,[jo]:Ah,[Th]:Th,[Rh]:Eh,[Ch]:Ch,[Ah]:jo},xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},Bi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jm=1234567,hl=Math.PI/180,na=180/Math.PI;function Ar(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bi[s&255]+Bi[s>>8&255]+Bi[s>>16&255]+Bi[s>>24&255]+"-"+Bi[e&255]+Bi[e>>8&255]+"-"+Bi[e>>16&15|64]+Bi[e>>24&255]+"-"+Bi[t&63|128]+Bi[t>>8&255]+"-"+Bi[t>>16&255]+Bi[t>>24&255]+Bi[i&255]+Bi[i>>8&255]+Bi[i>>16&255]+Bi[i>>24&255]).toLowerCase()}function at(s,e,t){return Math.max(e,Math.min(t,s))}function $d(s,e){return(s%e+e)%e}function Iv(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Dv(s,e,t){return s!==e?(t-s)/(e-s):0}function ul(s,e,t){return(1-t)*s+t*e}function Lv(s,e,t,i){return ul(s,e,1-Math.exp(-t*i))}function Nv(s,e=1){return e-Math.abs($d(s,e*2)-e)}function Uv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ov(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bv(s,e){return s+Math.random()*(e-s)}function zv(s){return s*(.5-Math.random())}function kv(s){s!==void 0&&(jm=s);let e=jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hv(s){return s*hl}function Vv(s){return s*na}function Gv(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Wv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xv(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),u=r((i-e)/2),p=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Bu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kd(s,e){if(e.constructor===Float32Array)return s;let t=Bu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Qd(s,e){if(e.constructor===Float32Array)return s;let t=Bu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var fs={DEG2RAD:hl,RAD2DEG:na,generateUUID:Ar,clamp:at,euclideanModulo:$d,mapLinear:Iv,inverseLerp:Dv,lerp:ul,damp:Lv,pingpong:Nv,smoothstep:Uv,smootherstep:Ov,randInt:Fv,randFloat:Bv,randFloatSpread:zv,seededRandom:kv,degToRad:Hv,radToDeg:Vv,isPowerOfTwo:Gv,ceilPowerOfTwo:Wv,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Xv,normalize:Qd,denormalize:Kd},sp=class sp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sp.prototype.isVector2=!0;var Ee=sp,Cn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);g=Math.sin(g*v)/T,a=Math.sin(a*v)/T,l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a}else{l=l*g+d*a,c=c*g+u*a,h=h*g+p*a,f=f*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),f=a(r/2),d=l(i/2),u=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-n)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rp=class rp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=n+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rp.prototype.isVector3=!0;var B=rp,Kf=new B,e0=new Cn,op=class op{constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],p=i[8],x=n[0],m=n[3],g=n[6],v=n[1],T=n[4],y=n[7],b=n[2],E=n[5],_=n[8];return r[0]=o*x+a*v+l*b,r[3]=o*m+a*T+l*E,r[6]=o*g+a*y+l*_,r[1]=c*x+h*v+f*b,r[4]=c*m+h*T+f*E,r[7]=c*g+h*y+f*_,r[2]=d*x+u*v+p*b,r[5]=d*m+u*T+p*E,r[8]=d*g+u*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+i*d+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(n*c-h*i)*x,e[2]=(a*i-n*o)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-a*t)*x,e[6]=u*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return jr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qf.makeScale(e,t)),this}rotate(e){return jr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qf.makeRotation(-e)),this}translate(e,t){return jr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};op.prototype.isMatrix3=!0;var Ke=op,Qf=new Ke,t0=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i0=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qv(){let s={enabled:!0,workingColorSpace:dl,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(n.r=Gs(n.r),n.g=Gs(n.g),n.b=Gs(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(n.r=Qo(n.r),n.g=Qo(n.g),n.b=Qo(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===js?pl:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[dl]:{primaries:e,whitePoint:i,transfer:pl,toXYZ:t0,fromXYZ:i0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:t0,fromXYZ:i0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}var ut=qv();function Gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Lo,Dh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lo===void 0&&(Lo=ta("canvas")),Lo.width=e.width,Lo.height=e.height;let n=Lo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Lo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Gs(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gs(t[i]/255)*255):t[i]=Gs(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yv=0,sa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(jf(n[o].image)):r.push(jf(n[o]))}else r=jf(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function jf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Zv=0,ed=new B,Hi=class s extends xs{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=_s,n=_s,r=nn,o=Ks,a=In,l=Wi,c=s.DEFAULT_ANISOTROPY,h=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ar(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Hi.DEFAULT_IMAGE=null;Hi.DEFAULT_MAPPING=Fd;Hi.DEFAULT_ANISOTROPY=1;var ap=class ap{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(u+1)/2,b=(g+1)/2,E=(h+d)/4,_=(f+x)/4,S=(p+m)/4;return T>y&&T>b?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=E/i,r=_/i):y>b?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=E/n,r=S/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=_/r,n=S/r),this.set(i,n,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ap.prototype.isVector4=!0;var zt=ap,Lh=class extends xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Hi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new sa(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends Lh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gl=class extends Hi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nh=class extends Hi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jh=class Jh{constructor(e,t,i,n,r,o,a,l,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,f,d,u,p,x,m)}set(e,t,i,n,r,o,a,l,c,h,f,d,u,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jh().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/No.setFromMatrixColumn(e,0).length(),r=1/No.setFromMatrixColumn(e,1).length(),o=1/No.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Jv)}lookAt(e,t,i){let n=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),gr.crossVectors(i,An),gr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),gr.crossVectors(i,An)),gr.normalize(),Zc.crossVectors(An,gr),n[0]=gr.x,n[4]=Zc.x,n[8]=An.x,n[1]=gr.y,n[5]=Zc.y,n[9]=An.y,n[2]=gr.z,n[6]=Zc.z,n[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],T=i[7],y=i[11],b=i[15],E=n[0],_=n[4],S=n[8],w=n[12],M=n[1],P=n[5],I=n[9],U=n[13],D=n[2],F=n[6],N=n[10],O=n[14],G=n[3],k=n[7],C=n[11],q=n[15];return r[0]=o*E+a*M+l*D+c*G,r[4]=o*_+a*P+l*F+c*k,r[8]=o*S+a*I+l*N+c*C,r[12]=o*w+a*U+l*O+c*q,r[1]=h*E+f*M+d*D+u*G,r[5]=h*_+f*P+d*F+u*k,r[9]=h*S+f*I+d*N+u*C,r[13]=h*w+f*U+d*O+u*q,r[2]=p*E+x*M+m*D+g*G,r[6]=p*_+x*P+m*F+g*k,r[10]=p*S+x*I+m*N+g*C,r[14]=p*w+x*U+m*O+g*q,r[3]=v*E+T*M+y*D+b*G,r[7]=v*_+T*P+y*F+b*k,r[11]=v*S+T*I+y*N+b*C,r[15]=v*w+T*U+y*O+b*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*u-c*d,T=a*u-c*f,y=a*d-l*f,b=o*u-c*h,E=o*d-l*h,_=o*f-a*h;return t*(x*v-m*T+g*y)-i*(p*v-m*b+g*E)+n*(p*T-x*b+g*_)-r*(p*y-x*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-i*o,T=t*l-n*o,y=t*c-r*o,b=i*l-n*a,E=i*c-r*a,_=n*c-r*l,S=h*x-f*p,w=h*m-d*p,M=h*g-u*p,P=f*m-d*x,I=f*g-u*x,U=d*g-u*m,D=v*U-T*I+y*P+b*M-E*w+_*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return e[0]=(a*U-l*I+c*P)*F,e[1]=(n*I-i*U-r*P)*F,e[2]=(x*_-m*E+g*b)*F,e[3]=(d*E-f*_-u*b)*F,e[4]=(l*M-o*U-c*w)*F,e[5]=(t*U-n*M+r*w)*F,e[6]=(m*y-p*_-g*T)*F,e[7]=(h*_-d*y+u*T)*F,e[8]=(o*I-a*M+c*S)*F,e[9]=(i*M-t*I-r*S)*F,e[10]=(p*E-x*y+g*v)*F,e[11]=(f*y-h*E-u*v)*F,e[12]=(a*w-o*P-l*S)*F,e[13]=(t*P-i*w+n*S)*F,e[14]=(x*T-p*b-m*v)*F,e[15]=(h*b-f*T+d*v)*F,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,x=o*h,m=o*f,g=a*f,v=l*c,T=l*h,y=l*f,b=i.x,E=i.y,_=i.z;return n[0]=(1-(x+g))*b,n[1]=(u+y)*b,n[2]=(p-T)*b,n[3]=0,n[4]=(u-y)*E,n[5]=(1-(d+g))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(p+T)*_,n[9]=(m-v)*_,n[10]=(1-(d+x))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=No.set(n[0],n[1],n[2]).length(),a=No.set(n[4],n[5],n[6]).length(),l=No.set(n[8],n[9],n[10]).length();r<0&&(o=-o),ns.copy(this);let c=1/o,h=1/a,f=1/l;return ns.elements[0]*=c,ns.elements[1]*=c,ns.elements[2]*=c,ns.elements[4]*=h,ns.elements[5]*=h,ns.elements[6]*=h,ns.elements[8]*=f,ns.elements[9]*=f,ns.elements[10]*=f,t.setFromRotationMatrix(ns),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=Wn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Wn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ea)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Wn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-n),d=-(t+e)/(t-e),u=-(i+n)/(i-n),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Wn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ea)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Jh.prototype.isMatrix4=!0;var it=Jh,No=new B,ns=new it,$v=new B(0,0,0),Jv=new B(1,1,1),gr=new B,Zc=new B,An=new B,n0=new it,s0=new Cn,Xn=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return n0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return s0.setFromEuler(this),this.setFromQuaternion(s0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kv=0,r0=new B,Uo=new Cn,Fs=new it,$c=new B,tl=new B,Qv=new B,jv=new Cn,o0=new B(1,0,0),a0=new B(0,1,0),l0=new B(0,0,1),c0={type:"added"},ey={type:"removed"},Oo={type:"childadded",child:null},td={type:"childremoved",child:null},Si=class s extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new Xn,i=new Cn,n=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new it},normalMatrix:{value:new Ke}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(o0,e)}rotateY(e){return this.rotateOnAxis(a0,e)}rotateZ(e){return this.rotateOnAxis(l0,e)}translateOnAxis(e,t){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(o0,e)}translateY(e){return this.translateOnAxis(a0,e)}translateZ(e){return this.translateOnAxis(l0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$c.copy(e):$c.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fs.lookAt(tl,$c,this.up):Fs.lookAt($c,tl,this.up),this.quaternion.setFromRotationMatrix(Fs),n&&(Fs.extractRotation(n.matrixWorld),Uo.setFromRotationMatrix(Fs),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ey),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,Qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Si.DEFAULT_UP=new B(0,1,0);Si.DEFAULT_MATRIX_AUTO_UPDATE=!0;Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}},ty={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function id(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ut.workingColorSpace){if(e=$d(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=id(o,r,e+1/3),this.g=id(o,r,e),this.b=id(o,r,e-1/3)}return ut.colorSpaceToWorking(this,n),this}setStyle(e,t=ei){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){let i=fg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return ut.workingToColorSpace(zi.copy(this),e),Math.round(at(zi.r*255,0,255))*65536+Math.round(at(zi.g*255,0,255))*256+Math.round(at(zi.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(zi.copy(this),t);let i=zi.r,n=zi.g,r=zi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(zi.copy(this),t),e.r=zi.r,e.g=zi.g,e.b=zi.b,e}getStyle(e=ei){ut.workingToColorSpace(zi.copy(this),e);let t=zi.r,i=zi.g,n=zi.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Jc);let i=ul(_r.h,Jc.h,t),n=ul(_r.s,Jc.s,t),r=ul(_r.l,Jc.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zi=new Le;Le.NAMES=fg;var _l=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var eo=class extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ss=new B,Bs=new B,nd=new B,zs=new B,Fo=new B,Bo=new B,h0=new B,sd=new B,rd=new B,od=new B,ad=new zt,ld=new zt,cd=new zt,Vs=class s{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ss.subVectors(e,t),n.cross(ss);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ss.subVectors(n,t),Bs.subVectors(i,t),nd.subVectors(e,t);let o=ss.dot(ss),a=ss.dot(Bs),l=ss.dot(nd),c=Bs.dot(Bs),h=Bs.dot(nd),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,zs)===null?!1:zs.x>=0&&zs.y>=0&&zs.x+zs.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,zs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zs.x),l.addScaledVector(o,zs.y),l.addScaledVector(a,zs.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return ad.setScalar(0),ld.setScalar(0),cd.setScalar(0),ad.fromBufferAttribute(e,t),ld.fromBufferAttribute(e,i),cd.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(ad,r.x),o.addScaledVector(ld,r.y),o.addScaledVector(cd,r.z),o}static isFrontFacing(e,t,i,n){return ss.subVectors(i,t),Bs.subVectors(e,t),ss.cross(Bs).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ss.subVectors(this.c,this.b),Bs.subVectors(this.a,this.b),ss.cross(Bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;Fo.subVectors(n,i),Bo.subVectors(r,i),sd.subVectors(e,i);let l=Fo.dot(sd),c=Bo.dot(sd);if(l<=0&&c<=0)return t.copy(i);rd.subVectors(e,n);let h=Fo.dot(rd),f=Bo.dot(rd);if(h>=0&&f<=h)return t.copy(n);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Fo,o);od.subVectors(e,r);let u=Fo.dot(od),p=Bo.dot(od);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Bo,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return h0.subVectors(r,n),a=(f-h)/(f-h+(u-p)),t.copy(n).addScaledVector(h0,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(i).addScaledVector(Fo,o).addScaledVector(Bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vs=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=rs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rs):rs.fromBufferAttribute(r,o),rs.applyMatrix4(e.matrixWorld),this.expandByPoint(rs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kc.copy(i.boundingBox)),Kc.applyMatrix4(e.matrixWorld),this.union(Kc)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rs),rs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Qc.subVectors(this.max,il),zo.subVectors(e.a,il),ko.subVectors(e.b,il),Ho.subVectors(e.c,il),xr.subVectors(ko,zo),vr.subVectors(Ho,ko),$r.subVectors(zo,Ho);let t=[0,-xr.z,xr.y,0,-vr.z,vr.y,0,-$r.z,$r.y,xr.z,0,-xr.x,vr.z,0,-vr.x,$r.z,0,-$r.x,-xr.y,xr.x,0,-vr.y,vr.x,0,-$r.y,$r.x,0];return!hd(t,zo,ko,Ho,Qc)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,zo,ko,Ho,Qc))?!1:(jc.crossVectors(xr,vr),t=[jc.x,jc.y,jc.z],hd(t,zo,ko,Ho,Qc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ks[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ks[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ks[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ks[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ks[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ks[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ks[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ks[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ks),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ks=[new B,new B,new B,new B,new B,new B,new B,new B],rs=new B,Kc=new vs,zo=new B,ko=new B,Ho=new B,xr=new B,vr=new B,$r=new B,il=new B,Qc=new B,jc=new B,Jr=new B;function hd(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Jr.fromArray(s,r);let a=n.x*Math.abs(Jr.x)+n.y*Math.abs(Jr.y)+n.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),h=i.dot(Jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ai=new B,eh=new Ee,iy=0,Ci=class extends xs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yd,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=e!==void 0?Bu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eh.fromBufferAttribute(this,t),eh.applyMatrix3(e),this.setXY(t,eh.x,eh.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix3(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qd(e,this.array)}};var xl=class extends Ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vl=class extends Ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var gt=class extends Ci{constructor(e,t,i){super(new Float32Array(e),t,i)}},ny=new vs,nl=new B,ud=new B,Xs=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ny.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);let t=nl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(nl,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(ud)),this.expandByPoint(nl.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sy=0,Gn=new it,fd=new Si,Vo=new B,Rn=new vs,sl=new vs,yi=new B,Wt=class s extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cv(e)?vl:xl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vo).negate(),this.translate(Vo.x,Vo.y,Vo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(yi.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(yi),yi.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(yi)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sl.setFromBufferAttribute(a),this.morphTargetsRelative?(yi.addVectors(Rn.min,sl.min),Rn.expandByPoint(yi),yi.addVectors(Rn.max,sl.max),Rn.expandByPoint(yi)):(Rn.expandByPoint(sl.min),Rn.expandByPoint(sl.max))}Rn.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)yi.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(yi));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yi.fromBufferAttribute(a,c),l&&(Vo.fromBufferAttribute(e,c),yi.add(Vo)),n=Math.max(n,i.distanceToSquared(yi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let w=0;w<i.count;w++)a[w]=new B,l[w]=new B;let h=new B,f=new B,d=new B,u=new Ee,p=new Ee,x=new Ee,m=new B,g=new B;function v(w,M,P){c[w]=c[M]=c[P]=1,h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),x.fromBufferAttribute(r,P),f.sub(h),d.sub(h),p.sub(u),x.sub(u);let I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(I),a[w].add(m),a[M].add(m),a[P].add(m),l[w].add(g),l[M].add(g),l[P].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,M=T.length;w<M;++w){let P=T[w],I=P.start,U=P.count;for(let D=I,F=I+U;D<F;D+=3)v(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new B,b=new B,E=new B,_=new B;function S(w){E.fromBufferAttribute(n,w),_.copy(E);let M=a[w];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),b.crossVectors(_,M);let I=b.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,I)}for(let w=0,M=i.count;w<M;++w)c[w]&&S(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let n=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yi.fromBufferAttribute(e,t),yi.normalize(),e.setXYZ(t,yi.x,yi.y,yi.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new Ci(d,h,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yd,this.updateRanges=[],this.version=0,this.uuid=Ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=u0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=u0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function u0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ar()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var tn=new B,yl=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Bu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ml("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Ci(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ml("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kd(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qd(e,this.data.array)}},dd=new B,ry=new B,oy=new Ke,os=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=dd.subVectors(i,t).cross(ry.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(dd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||oy.getNormalMatrix(e),n=this.coplanarPoint(dd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ay=0,as=class extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=xa,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Ud,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sh,this.stencilZFail=Sh,this.stencilZPass=Sh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new os().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},to=class extends as{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Go,rl=new B,Wo=new B,Xo=new B,qo=new Ee,ol=new Ee,dg=new it,th=new B,al=new B,ih=new B,f0=new Ee,pd=new Ee,d0=new Ee,aa=class extends Si{constructor(e=new to){if(super(),this.isSprite=!0,this.type="Sprite",Go===void 0){Go=new Wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Uh(t,5);Go.setIndex([0,1,2,0,2,3]),Go.setAttribute("position",new yl(i,3,0,!1)),Go.setAttribute("uv",new yl(i,2,3,!1))}this.geometry=Go,this.material=e,this.center=new Ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wo.setFromMatrixScale(this.matrixWorld),dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wo.multiplyScalar(-Xo.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;nh(th.set(-.5,-.5,0),Xo,o,Wo,n,r),nh(al.set(.5,-.5,0),Xo,o,Wo,n,r),nh(ih.set(.5,.5,0),Xo,o,Wo,n,r),f0.set(0,0),pd.set(1,0),d0.set(1,1);let a=e.ray.intersectTriangle(th,al,ih,!1,rl);if(a===null&&(nh(al.set(-.5,.5,0),Xo,o,Wo,n,r),pd.set(0,1),a=e.ray.intersectTriangle(th,ih,al,!1,rl),a===null))return;let l=e.ray.origin.distanceTo(rl);l<e.near||l>e.far||t.push({distance:l,point:rl.clone(),uv:Vs.getInterpolation(rl,th,al,ih,f0,pd,d0,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function nh(s,e,t,i,n,r){qo.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(ol.x=r*qo.x-n*qo.y,ol.y=n*qo.x+r*qo.y):ol.copy(qo),s.copy(e),s.x+=ol.x,s.y+=ol.y,s.applyMatrix4(dg)}var Hs=new B,md=new B,sh=new B,rh=new B,la=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hs.copy(this.origin).addScaledVector(this.direction,t),Hs.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){md.copy(e).add(t).multiplyScalar(.5),sh.copy(t).sub(e).normalize(),rh.copy(this.origin).sub(md);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sh),a=rh.dot(this.direction),l=-rh.dot(sh),c=rh.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(md).addScaledVector(sh,d),u}intersectSphere(e,t){if(e.radius<0)return null;Hs.subVectors(e.center,this.origin);let i=Hs.dot(this.direction),n=Hs.dot(Hs)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Hs)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,v=i.y-o.y,T=i.z-o.z,y=Math.abs(l),b=Math.abs(c),E=Math.abs(h),_,S,w,M,P,I,U,D,F,N,O,G;if(y>=b&&y>=E?(w=l,I=f,F=p,G=g,l>=0?(_=c,S=h,M=d,P=u,U=x,D=m,N=v,O=T):(_=h,S=c,M=u,P=d,U=m,D=x,N=T,O=v)):b>=E?(w=c,I=d,F=x,G=v,c>=0?(_=h,S=l,M=u,P=f,U=m,D=p,N=T,O=g):(_=l,S=h,M=f,P=u,U=p,D=m,N=g,O=T)):(w=h,I=u,F=m,G=T,h>=0?(_=l,S=c,M=f,P=d,U=p,D=x,N=g,O=v):(_=c,S=l,M=d,P=f,U=x,D=p,N=v,O=g)),w===0)return null;let k=_/w,C=S/w,q=1/w,ae=M-k*I,_e=P-C*I,X=U-k*F,W=D-C*F,j=N-k*G,ce=O-C*G,le=j*W-ce*X,ve=ae*ce-_e*j,Ze=X*_e-W*ae;if(n){if(le<0||ve<0||Ze<0)return null}else if((le<0||ve<0||Ze<0)&&(le>0||ve>0||Ze>0))return null;let Re=le+ve+Ze;if(Re===0)return null;let Xe=q*(le*I+ve*F+Ze*G);return(Re>0?Xe<0:Xe>0)?null:this.at(Xe/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},p0=new it,Kr=new la,oh=new Xs,m0=new B,ah=new B,lh=new B,ch=new B,gd=new B,hh=new B,g0=new B,uh=new B,Pe=class extends Si{constructor(e=new Wt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){hh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(gd.fromBufferAttribute(f,e),o?hh.addScaledVector(gd,h):hh.addScaledVector(gd.sub(t),h))}t.add(hh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oh.copy(i.boundingSphere),oh.applyMatrix4(r),Kr.copy(e.ray).recast(e.near),!(oh.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(oh,m0)===null||Kr.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(p0),!(i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=T;y<b;y+=3){let E=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);n=fh(this,g,e,i,c,h,f,E,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);n=fh(this,o,e,i,c,h,f,v,T,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=T;y<b;y+=3){let E=y,_=y+1,S=y+2;n=fh(this,g,e,i,c,h,f,E,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=m,T=m+1,y=m+2;n=fh(this,o,e,i,c,h,f,v,T,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function ly(s,e,t,i,n,r,o,a){let l;if(e.side===Ii?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Er,a),l===null)return null;uh.copy(a),uh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(uh);return c<t.near||c>t.far?null:{distance:c,point:uh.clone(),object:s}}function fh(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,ah),s.getVertexPosition(l,lh),s.getVertexPosition(c,ch);let h=ly(s,e,t,i,ah,lh,ch,g0);if(h){let f=new B;Vs.getBarycoord(g0,ah,lh,ch,f),n&&(h.uv=Vs.getInterpolatedAttribute(n,a,l,c,f,new Ee)),r&&(h.uv1=Vs.getInterpolatedAttribute(r,a,l,c,f,new Ee)),o&&(h.normal=Vs.getInterpolatedAttribute(o,a,l,c,f,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Vs.getNormal(ah,lh,ch,d.normal),h.face=d,h.barycoord=f}return h}var qs=class extends Hi{constructor(e=null,t=1,i=1,n,r,o,a,l,c=ti,h=ti,f,d){super(null,o,a,l,c,h,n,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sl=class extends Ci{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yo=new it,_0=new it,dh=[],x0=new vs,cy=new it,ll=new Pe,cl=new Xs,ys=class extends Pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,cy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yo),x0.copy(e.boundingBox).applyMatrix4(Yo),this.boundingBox.union(x0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yo),cl.copy(e.boundingSphere).applyMatrix4(Yo),this.boundingSphere.union(cl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(i),e.ray.intersectsSphere(cl)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Yo),_0.multiplyMatrices(i,Yo),ll.matrixWorld=_0,ll.raycast(e,dh);for(let o=0,a=dh.length;o<a;o++){let l=dh[o];l.instanceId=r,l.object=this,t.push(l)}dh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(n*this.count),n,this.count,su,Zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qr=new Xs,hy=new Ee(.5,.5),ph=new B,Sr=class{constructor(e=new os,t=new os,i=new os,n=new os,r=new os,o=new os){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],T=r[13],y=r[14],b=r[15];if(n[0].setComponents(c-o,u-h,g-p,b-v).normalize(),n[1].setComponents(c+o,u+h,g+p,b+v).normalize(),n[2].setComponents(c+a,u+f,g+x,b+T).normalize(),n[3].setComponents(c-a,u-f,g-x,b-T).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,u-d,g-m,b-y).normalize();else if(n[4].setComponents(c-l,u-d,g-m,b-y).normalize(),t===Wn)n[5].setComponents(c+l,u+d,g+m,b+y).normalize();else if(t===ea)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);let t=hy.distanceTo(e.center);return Qr.radius=.7071067811865476+t,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ph.x=n.normal.x>0?e.max.x:e.min.x,ph.y=n.normal.y>0?e.max.y:e.min.y,ph.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ph)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},v0=new it,Oh=class s{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];v0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Sr),i[n].setFromProjectionMatrix(v0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Sr),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var io=class extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},y0=new it,Ed=new la,mh=new Xs,gh=new B,no=class extends Si{constructor(e=new Wt,t=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mh.copy(i.boundingSphere),mh.applyMatrix4(n),mh.radius+=r,e.ray.intersectsSphere(mh)===!1)return;y0.copy(n).invert(),Ed.copy(e.ray).applyMatrix4(y0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);gh.fromBufferAttribute(f,m),S0(gh,m,l,n,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,x=u;p<x;p++)gh.fromBufferAttribute(f,p),S0(gh,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function S0(s,e,t,i,n,r,o){let a=Ed.distanceSqToPoint(s);if(a<t){let l=new B;Ed.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ml=class extends Hi{constructor(e=[],t=co,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sn=class extends Hi{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Hi{constructor(e,t,i=hs,n,r,o,a=ti,l=ti,c,h=Ws,f=1){if(h!==Ws&&h!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bl=class extends ls{constructor(e,t=hs,i=co,n,r,o=ti,a=ti,l,c=Ws){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tl=class extends Hi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},li=class s extends Wt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function p(x,m,g,v,T,y,b,E,_,S,w){let M=y/_,P=b/S,I=y/2,U=b/2,D=E/2,F=_+1,N=S+1,O=0,G=0,k=new B;for(let C=0;C<N;C++){let q=C*P-U;for(let ae=0;ae<F;ae++){let _e=ae*M-I;k[x]=_e*v,k[m]=q*T,k[g]=D,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[g]=E>0?1:-1,h.push(k.x,k.y,k.z),f.push(ae/_),f.push(1-C/S),O+=1}}for(let C=0;C<S;C++)for(let q=0;q<_;q++){let ae=d+q+F*C,_e=d+q+F*(C+1),X=d+(q+1)+F*(C+1),W=d+(q+1)+F*C;l.push(ae,_e,W),l.push(_e,X,W),G+=6}a.addGroup(u,G,w),u+=G,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ys=class s extends Wt{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=i*2+r,x=n+1,m=new B,g=new B;for(let v=0;v<=p;v++){let T=0,y=0,b=0,E=0;if(v<=i){let w=v/i,M=w*Math.PI/2;y=-h-e*Math.cos(M),b=e*Math.sin(M),E=-e*Math.cos(M),T=w*f}else if(v<=i+r){let w=(v-i)/r;y=-h+w*t,b=e,E=0,T=f+w*d}else{let w=(v-i-r)/i,M=w*Math.PI/2;y=h+e*Math.sin(M),b=e*Math.cos(M),E=e*Math.sin(M),T=f+d+w*f}let _=Math.max(0,Math.min(1,T/u)),S=0;v===0?S=.5/n:v===p&&(S=-.5/n);for(let w=0;w<=n;w++){let M=w/n,P=M*Math.PI*2,I=Math.sin(P),U=Math.cos(P);g.x=-b*U,g.y=y,g.z=b*I,a.push(g.x,g.y,g.z),m.set(-b*U,E,b*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+S,_)}if(v>0){let w=(v-1)*x;for(let M=0;M<n;M++){let P=w+M,I=w+M+1,U=v*x+M,D=v*x+M+1;o.push(P,I,U),o.push(I,D,U)}}}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Zs=class s extends Wt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new B,h=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=i+f/t*n;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pi=class s extends Wt{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=i/2,g=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(u,2));function v(){let y=new B,b=new B,E=0,_=(t-e)/i;for(let S=0;S<=r;S++){let w=[],M=S/r,P=M*(t-e)+e;for(let I=0;I<=n;I++){let U=I/n,D=U*l+a,F=Math.sin(D),N=Math.cos(D);b.x=P*F,b.y=-M*i+m,b.z=P*N,f.push(b.x,b.y,b.z),y.set(F,_,N).normalize(),d.push(y.x,y.y,y.z),u.push(U,1-M),w.push(p++)}x.push(w)}for(let S=0;S<n;S++)for(let w=0;w<r;w++){let M=x[w][S],P=x[w+1][S],I=x[w+1][S+1],U=x[w][S+1];(e>0||w!==0)&&(h.push(M,P,U),E+=3),(t>0||w!==r-1)&&(h.push(P,I,U),E+=3)}c.addGroup(g,E,0),g+=E}function T(y){let b=p,E=new Ee,_=new B,S=0,w=y===!0?e:t,M=y===!0?1:-1;for(let I=1;I<=n;I++)f.push(0,m*M,0),d.push(0,M,0),u.push(.5,.5),p++;let P=p;for(let I=0;I<=n;I++){let D=I/n*l+a,F=Math.cos(D),N=Math.sin(D);_.x=w*N,_.y=m*M,_.z=w*F,f.push(_.x,_.y,_.z),d.push(0,M,0),E.x=F*.5+.5,E.y=N*.5*M+.5,u.push(E.x,E.y),p++}for(let I=0;I<n;I++){let U=b+I,D=P+I;y===!0?h.push(D,D+1,U):h.push(D+1,D,U),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$s=class s extends Pi{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},El=class s extends Wt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new B,y=new B,b=new B;for(let E=0;E<t.length;E+=3)u(t[E+0],T),u(t[E+1],y),u(t[E+2],b),l(T,y,b,v)}function l(v,T,y,b){let E=b+1,_=[];for(let S=0;S<=E;S++){_[S]=[];let w=v.clone().lerp(y,S/E),M=T.clone().lerp(y,S/E),P=E-S;for(let I=0;I<=P;I++)I===0&&S===E?_[S][I]=w:_[S][I]=w.clone().lerp(M,I/P)}for(let S=0;S<E;S++)for(let w=0;w<2*(E-S)-1;w++){let M=Math.floor(w/2);w%2===0?(d(_[S][M+1]),d(_[S+1][M]),d(_[S][M])):(d(_[S][M+1]),d(_[S+1][M+1]),d(_[S+1][M]))}}function c(v){let T=new B;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(v),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let v=new B;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let y=m(v)/2/Math.PI+.5,b=g(v)/Math.PI+.5;o.push(y,1-b)}p(),f()}function f(){for(let v=0;v<o.length;v+=6){let T=o[v+0],y=o[v+2],b=o[v+4],E=Math.max(T,y,b),_=Math.min(T,y,b);E>.9&&_<.1&&(T<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function p(){let v=new B,T=new B,y=new B,b=new B,E=new Ee,_=new Ee,S=new Ee;for(let w=0,M=0;w<r.length;w+=9,M+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),E.set(o[M+0],o[M+1]),_.set(o[M+2],o[M+3]),S.set(o[M+4],o[M+5]),b.copy(v).add(T).add(y).divideScalar(3);let P=m(b);x(E,M+0,v,P),x(_,M+2,T,P),x(S,M+4,y,P)}}function x(v,T,y,b){b<0&&v.x===1&&(o[T]=v.x-1),y.x===0&&y.z===0&&(o[T]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Fh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,u=(o-h)/d;return(n+u)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new B,n=[],r=[],o=[],a=new B,l=new it;for(let u=0;u<=e;u++){let p=u/e;n[u]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),f=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(at(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(at(r[0].dot(r[e]),-1,1));u/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],u*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function jd(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,n(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var M0=new B,b0=new B,_d=new jd,xd=new jd,vd=new jd,qn=class extends Fh{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new B){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(b0.subVectors(n[0],n[1]).add(n[0]),c=b0);let f=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(M0.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=M0),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),_d.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,x,m),xd.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,x,m),vd.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),xd.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),vd.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(_d.calc(l),xd.calc(l),vd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ca=class s extends El{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var wl=class s extends El{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},cs=class s extends Wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-o;for(let T=0;T<c;T++){let y=T*f-r;p.push(y,-v,0),x.push(0,0,1),m.push(T/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let T=v+c*g,y=v+c*(g+1),b=v+1+c*(g+1),E=v+1+c*g;u.push(T,y,E),u.push(y,b,E)}this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Al=class s extends Wt{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],f=e,d=(t-e)/n,u=new B,p=new Ee;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;u.x=f*Math.cos(g),u.y=f*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let v=g+m,T=v,y=v+i+1,b=v+i+2,E=v+1;a.push(T,y,E),a.push(y,b,E)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ci=class s extends Wt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new B,d=new B,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],T=g/i,y=o+T*a,b=e*Math.cos(y),E=Math.sqrt(e*e-b*b),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let w=S/t,M=n+w*r;f.x=-E*Math.cos(M),f.y=b,f.z=E*Math.sin(M),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-T),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let T=h[g][v+1],y=h[g][v],b=h[g+1][v],E=h[g+1][v+1];(g!==0||o>0)&&u.push(T,y,E),(g!==i-1||l<Math.PI)&&u.push(y,b,E)}this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var so=class s extends Wt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],f=[],d=new B,u=new B,p=new B;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=n;g++){let v=g/n*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(g/n),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,T=(n+1)*(x-1)+m,y=(n+1)*x+m;l.push(g,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ho(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(T0(n))n.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(T0(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Xi(s){let e={};for(let t=0;t<s.length;t++){let i=ho(s[t]);for(let n in i)e[n]=i[n]}return e}function T0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function uy(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ep(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var rn={clone:ho,merge:Xi},fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(n.value);break;case"v3":this.uniforms[i].value=new B().fromArray(n.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(n.value);break;case"m4":this.uniforms[i].value=new it().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ha=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ua=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vi=class extends ua{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return jr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){jr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Rl=class extends as{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Bh=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zh=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function _h(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Mr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kh=class extends Mr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Md,endingEnd:Md}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case bd:r=e,a=2*t-i;break;case Td:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bd:o=e,l=2*i-t;break;case Td:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(n-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,T=(-1-u)*m+(1.5+u)*x+.5*p,y=u*m-u*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+v*o[c+b]+T*o[l+b]+y*o[f+b];return r}},Hh=class extends Mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Vh=class extends Mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Gh=class extends Mr{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(n-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=u*d+p*2,v=f[g],T=f[g+1],y=e*d+p*2,b=h[y],E=h[y+1],_=my(i,t,v,b,n);r[p]=pg(_,x,T,E,m)}return r}};function pg(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function py(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function my(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=pg(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=py(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Pn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),_h(e.settings)&&(i.settings={inTangents:Zo(e.settings.inTangents,Array),outTangents:Zo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fl:t=this.InterpolantFactoryMethodDiscrete;break;case Ih:t=this.InterpolantFactoryMethodLinear;break;case yh:t=this.InterpolantFactoryMethodSmooth;break;case Sd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fl;case this.InterpolantFactoryMethodLinear:return Ih;case this.InterpolantFactoryMethodSmooth:return yh;case this.InterpolantFactoryMethodBezier:return Sd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;_h(this.settings)&&(E0(this.settings.inTangents,e),E0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;_h(this.settings)&&(w0(this.settings.inTangents,e),w0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Pv(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===yh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let f=a*i,d=f-i,u=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,_h(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function E0(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function w0(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ih;var br=class extends Pn{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=fl;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends Pn{constructor(e,t,i,n){super(e,t,i,n)}};Wh.prototype.ValueTypeName="color";var Xh=class extends Pn{constructor(e,t,i,n){super(e,t,i,n)}};Xh.prototype.ValueTypeName="number";var qh=class extends Mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Cl=class extends Pn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}};Cl.prototype.ValueTypeName="quaternion";Cl.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Pn{constructor(e,t,i){super(e,t,i)}};Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=fl;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yh=class extends Pn{constructor(e,t,i,n){super(e,t,i,n)}};Yh.prototype.ValueTypeName="vector";var Mh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(A0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!A0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function A0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var fa=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mg=new fa,da=class{constructor(e){this.manager=e!==void 0?e:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};da.DEFAULT_MATERIAL_NAME="__DEFAULT";var $o=new WeakMap,Zh=class extends da{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Mh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=$o.get(o);f===void 0&&(f=[],$o.set(o,f)),f.push({onLoad:t,onError:n})}return o}let a=ta("img");function l(){h(),t&&t(this);let f=$o.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}$o.delete(this),r.manager.itemEnd(e)}function c(f){h(),n&&n(f),Mh.remove(`image:${e}`);let d=$o.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}$o.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mh.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Pl=class extends da{constructor(e){super(e)}load(e,t,i,n){let r=new Hi,o=new Zh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},pa=class extends Si{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Il=class extends pa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Si.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yd=new it,R0=new B,C0=new B,Dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;R0.setFromMatrixPosition(e.matrixWorld),t.position.copy(R0),C0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===ea||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xh=new B,vh=new Cn,gs=new B,Ll=class extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xh,vh,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xh,vh,gs.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xh,vh,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xh,vh,gs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yr=new B,P0=new Ee,I0=new Ee,ki=class extends Ll{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,P0,I0),t.subVectors(I0,P0)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wd=class extends Dl{constructor(){super(new ki(90,1,.5,500)),this.isPointLightShadow=!0}},Ss=class extends pa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new wd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ro=class extends Ll{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ad=class extends Dl{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Si.DEFAULT_UP),this.updateMatrix(),this.target=new Si,this.shadow=new Ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Jo=-90,Ko=1,ga=class extends Si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ki(Jo,Ko,e,t);n.layers=this.layers,this.add(n);let r=new ki(Jo,Ko,e,t);r.layers=this.layers,this.add(r);let o=new ki(Jo,Ko,e,t);o.layers=this.layers,this.add(o);let a=new ki(Jo,Ko,e,t);a.layers=this.layers,this.add(a);let l=new ki(Jo,Ko,e,t);l.layers=this.layers,this.add(l);let c=new ki(Jo,Ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$h=class extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Nl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gy(){this._document.hidden===!1&&this.reset()}var tp="\\[\\]\\.:\\/",_y=new RegExp("["+tp+"]","g"),ip="[^"+tp+"]",xy="[^"+tp.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",ip),yy=/(WCOD+)?/.source.replace("WCOD",xy),Sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ip),My=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ip),by=new RegExp("^"+vy+yy+Sy+My+"$"),Ty=["material","materials","bones","map"],Rd=class{constructor(e,t,i){let n=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(e){let t=by.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Ty.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Rd;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gw=new Float32Array(1);var D0=new it,Ul=class{constructor(e,t,i=0,n=1/0){this.ray=new la(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return D0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(e,t=!0,i=[]){return Cd(e,this,i,t),i.sort(L0),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Cd(e[n],this,i,t);return i.sort(L0),i}};function L0(s,e){return s.distance-e.distance}function Cd(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Cd(r[o],e,t,!0)}}var lp=class lp{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};lp.prototype.isMatrix2=!0;var Pd=lp;function np(s,e,t,i){let n=Ey(i);switch(t){case Vd:return s*e;case su:return s*e/n.components*n.byteLength;case ru:return s*e/n.components*n.byteLength;case wr:return s*e*2/n.components*n.byteLength;case ou:return s*e*2/n.components*n.byteLength;case Gd:return s*e*3/n.components*n.byteLength;case In:return s*e*4/n.components*n.byteLength;case au:return s*e*4/n.components*n.byteLength;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cu:case uu:return Math.max(s,16)*Math.max(e,8)/4;case lu:case hu:return Math.max(s,8)*Math.max(e,8)/2;case fu:case du:case mu:case gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pu:case $l:case _u:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Su:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Au:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Du:case Lu:case Nu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uu:case Ou:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case Fu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ey(s){switch(s){case Wi:case Bd:return{byteLength:1,components:1};case ya:case zd:case Jt:return{byteLength:2,components:1};case iu:case nu:return{byteLength:2,components:4};case hs:case tu:case Zn:return{byteLength:4,components:1};case kd:case Hd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Fg(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ay(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nS="gl_FragColor = linearToOutputTexel( gl_FragColor );",sS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ES=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,PS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,US=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$M=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Ry,alphahash_pars_fragment:Cy,alphamap_fragment:Py,alphamap_pars_fragment:Iy,alphatest_fragment:Dy,alphatest_pars_fragment:Ly,aomap_fragment:Ny,aomap_pars_fragment:Uy,batching_pars_vertex:Oy,batching_vertex:Fy,begin_vertex:By,beginnormal_vertex:zy,bsdfs:ky,iridescence_fragment:Hy,bumpmap_pars_fragment:Vy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:qy,color_fragment:Yy,color_pars_fragment:Zy,color_pars_vertex:$y,color_vertex:Jy,common:Ky,defaultnormal_vertex:Qy,displacementmap_pars_vertex:jy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:iS,colorspace_fragment:nS,colorspace_pars_fragment:sS,envmap_fragment:rS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:vS,envmap_vertex:cS,fog_vertex:hS,fog_pars_vertex:uS,fog_fragment:fS,fog_pars_fragment:dS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:gS,lights_lambert_pars_fragment:_S,lights_pars_begin:xS,lights_toon_fragment:yS,lights_toon_pars_fragment:SS,lights_phong_fragment:MS,lights_phong_pars_fragment:bS,lights_physical_fragment:TS,lights_physical_pars_fragment:ES,lights_fragment_begin:wS,lights_fragment_maps:AS,lights_fragment_end:RS,lightprobes_pars_fragment:CS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:LS,map_fragment:NS,map_pars_fragment:US,map_particle_fragment:OS,map_particle_pars_fragment:FS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:zS,morphinstance_vertex:kS,morphcolor_vertex:HS,morphnormal_vertex:VS,morphtarget_pars_vertex:GS,morphtarget_vertex:WS,normal_fragment_begin:XS,normal_fragment_maps:qS,normal_pars_fragment:YS,normal_pars_vertex:ZS,normal_vertex:$S,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:QS,clearcoat_pars_fragment:jS,iridescence_pars_fragment:eM,opaque_fragment:tM,packing:iM,premultiplied_alpha_fragment:nM,project_vertex:sM,dithering_fragment:rM,dithering_pars_fragment:oM,roughnessmap_fragment:aM,roughnessmap_pars_fragment:lM,shadowmap_pars_fragment:cM,shadowmap_pars_vertex:hM,shadowmap_vertex:uM,shadowmask_pars_fragment:fM,skinbase_vertex:dM,skinning_pars_vertex:pM,skinning_vertex:mM,skinnormal_vertex:gM,specularmap_fragment:_M,specularmap_pars_fragment:xM,tonemapping_fragment:vM,tonemapping_pars_fragment:yM,transmission_fragment:SM,transmission_pars_fragment:MM,uv_pars_fragment:bM,uv_pars_vertex:TM,uv_vertex:EM,worldpos_vertex:wM,background_vert:AM,background_frag:RM,backgroundCube_vert:CM,backgroundCube_frag:PM,cube_vert:IM,cube_frag:DM,depth_vert:LM,depth_frag:NM,distance_vert:UM,distance_frag:OM,equirect_vert:FM,equirect_frag:BM,linedashed_vert:zM,linedashed_frag:kM,meshbasic_vert:HM,meshbasic_frag:VM,meshlambert_vert:GM,meshlambert_frag:WM,meshmatcap_vert:XM,meshmatcap_frag:qM,meshnormal_vert:YM,meshnormal_frag:ZM,meshphong_vert:$M,meshphong_frag:JM,meshphysical_vert:KM,meshphysical_frag:QM,meshtoon_vert:jM,meshtoon_frag:eb,points_vert:tb,points_frag:ib,shadow_vert:nb,shadow_frag:sb,sprite_vert:rb,sprite_frag:ob},Ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ts={basic:{uniforms:Xi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Xi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Xi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Xi([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Xi([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Xi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Xi([Ce.points,Ce.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Xi([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Xi([Ce.common,Ce.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Xi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Xi([Ce.sprite,Ce.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Xi([Ce.common,Ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Xi([Ce.lights,Ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ts.physical={uniforms:Xi([Ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var zu={r:0,b:0,g:0},ab=new it,Bg=new Ke;Bg.set(-1,0,0,0,1,0,0,0,1);function lb(s,e,t,i,n,r){let o=new Le(0),a=n===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function p(v){let T=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let y=u(T);y&&y.isCubeTexture?(c===void 0&&(c=new Pe(new li(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:ho(Ts.backgroundCube.uniforms),vertexShader:Ts.backgroundCube.vertexShader,fragmentShader:Ts.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ab.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bg),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==yt,(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pe(new cs(2,2),new Rt({name:"BackgroundMaterial",uniforms:ho(Ts.background.uniforms),vertexShader:Ts.background.vertexShader,fragmentShader:Ts.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(zu,ep(s)),t.buffers.color.setClear(zu.r,zu.g,zu.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function cb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(P,I,U,D,F){let N=!1,O=f(P,D,U,I);r!==O&&(r=O,c(r.object)),N=u(P,D,U,F),N&&p(P,D,U,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(P,I,U,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function f(P,I,U,D){let F=D.wireframe===!0,N=i[I.id];N===void 0&&(N={},i[I.id]=N);let O=P.isInstancedMesh===!0?P.id:0,G=N[O];G===void 0&&(G={},N[O]=G);let k=G[U.id];k===void 0&&(k={},G[U.id]=k);let C=k[F];return C===void 0&&(C=d(l()),k[F]=C),C}function d(P){let I=[],U=[],D=[];for(let F=0;F<t;F++)I[F]=0,U[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:D,object:P,attributes:{},index:null}}function u(P,I,U,D){let F=r.attributes,N=I.attributes,O=0,G=U.getAttributes();for(let k in G)if(G[k].location>=0){let q=F[k],ae=N[k];if(ae===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function p(P,I,U,D){let F={},N=I.attributes,O=0,G=U.getAttributes();for(let k in G)if(G[k].location>=0){let q=N[k];q===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));let ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),F[k]=ae,O++}r.attributes=F,r.attributesNum=O,r.index=D}function x(){let P=r.newAttributes;for(let I=0,U=P.length;I<U;I++)P[I]=0}function m(P){g(P,0)}function g(P,I){let U=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;U[P]=1,D[P]===0&&(s.enableVertexAttribArray(P),D[P]=1),F[P]!==I&&(s.vertexAttribDivisor(P,I),F[P]=I)}function v(){let P=r.newAttributes,I=r.enabledAttributes;for(let U=0,D=I.length;U<D;U++)I[U]!==P[U]&&(s.disableVertexAttribArray(U),I[U]=0)}function T(P,I,U,D,F,N,O){O===!0?s.vertexAttribIPointer(P,I,U,F,N):s.vertexAttribPointer(P,I,U,D,F,N)}function y(P,I,U,D){x();let F=D.attributes,N=U.getAttributes(),O=I.defaultAttributeValues;for(let G in N){let k=N[G];if(k.location>=0){let C=F[G];if(C===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(C=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(C=P.instanceColor)),C!==void 0){let q=C.normalized,ae=C.itemSize,_e=e.get(C);if(_e===void 0)continue;let X=_e.buffer,W=_e.type,j=_e.bytesPerElement,ce=W===s.INT||W===s.UNSIGNED_INT||C.gpuType===tu;if(C.isInterleavedBufferAttribute){let le=C.data,ve=le.isInterleavedBuffer===!0?le.stride:le.itemSize,Ze=C.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let Re=0;Re<k.locationSize;Re++)g(k.location+Re,le.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Re=0;Re<k.locationSize;Re++)m(k.location+Re);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Re=0;Re<k.locationSize;Re++)T(k.location+Re,ae/k.locationSize,W,q,ve*j,(Ze+ae/k.locationSize*Re)*j,ce)}else{if(C.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)g(k.location+le,C.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let le=0;le<k.locationSize;le++)m(k.location+le);s.bindBuffer(s.ARRAY_BUFFER,X);for(let le=0;le<k.locationSize;le++)T(k.location+le,ae/k.locationSize,W,q,ae*j,ae/k.locationSize*le*j,ce)}}else if(O!==void 0){let q=O[G];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(k.location,q);break;case 3:s.vertexAttrib3fv(k.location,q);break;case 4:s.vertexAttrib4fv(k.location,q);break;default:s.vertexAttrib1fv(k.location,q)}}}}v()}function b(){w();for(let P in i){let I=i[P];for(let U in I){let D=I[U];for(let F in D){let N=D[F];for(let O in N)h(N[O].object),delete N[O];delete D[F]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;let I=i[P.id];for(let U in I){let D=I[U];for(let F in D){let N=D[F];for(let O in N)h(N[O].object),delete N[O];delete D[F]}}delete i[P.id]}function _(P){for(let I in i){let U=i[I];for(let D in U){let F=U[D];if(F[P.id]===void 0)continue;let N=F[P.id];for(let O in N)h(N[O].object),delete N[O];delete F[P.id]}}}function S(P){for(let I in i){let U=i[I],D=P.isInstancedMesh===!0?P.id:0,F=U[D];if(F!==void 0){for(let N in F){let O=F[N];for(let G in O)h(O[G].object),delete O[G];delete F[N]}delete U[D],Object.keys(U).length===0&&delete i[I]}}}function w(){M(),o=!0,r!==n&&(r=n,c(r.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function hb(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ub(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==In&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Wi&&_!==Zn&&!S&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:E}}function fb(s){let e=this,t=null,i=0,n=!1,r=!1,o=new os,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||n;return n=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,T=v*4,y=g.clippingState||null;l.value=y,y=h(p,d,T,u);for(let b=0;b!==T;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,y=u;T!==x;++T,y+=4)o.copy(f[T]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ec=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ml(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new li(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ii,blending:Mi});r.uniforms.tEquirect.value=t;let o=new Pe(n,r),a=t.minFilter;return t.minFilter===Ks&&(t.minFilter=nn),new ga(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},gg=256,db=3,pb=20,zg=256,kg=16,mb=3,gb=new B,_b=new Le,Ma=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ga(1,10,null),this._boxMesh=new Pe(new li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=gb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(_b));let m=new ga(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(gg,Jd(e))}_fromTexture(e,t){e.mapping===co||e.mapping===va?this._setSize(e.image.length===0?gg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=_g(e,!1,!1),i=Math.log2(e)-db;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_g(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===co||e.mapping===va?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=xb(),this._integrationMaterial=vb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/kg);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-mb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(zg*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yb());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function _g(s,e,t){return new ec(s,{minFilter:Ks,generateMipmaps:e,type:Jt,colorSpace:dl,depthBuffer:t})}function tc(s,e,t){return new Rt({name:s,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:Ii,blending:Mi,depthTest:!1,depthWrite:!1})}function xb(){return tc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vb(){return tc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yb(){return tc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${pb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xg(){return tc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vg(){return tc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sb(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Qh||u===jh)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ec(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===Qh||u===jh,x=u===co||u===va;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Ma(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Ma(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===Qh?d.mapping=co:u===jh&&(d.mapping=va),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Mb(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&jr("WebGLRenderer: "+i+" extension not supported."),n}}}function bb(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function f(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,T=m.count>=65535?vl:xl,y=new T(Math.ceil(v/3)*6,1),b=y.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,w=0;S<v;S+=3){let M=_[S+0],P=_[S+1],I=_[S+2];b[w++]=M,b[w++]=P,b[w++]=P,b[w++]=I,b[w++]=I,b[w++]=M}}else{g=m.version;for(let _=0,S=0;_<v;_+=3){let w=_+0,M=_+1,P=_+2;b[S++]=w,b[S++]=M,b[S++]=M,b[S++]=P,b[S++]=P,b[S++]=w}}y.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,y)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Tb(s,e,t){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(i,d,r,f*o,u),t.update(d,i,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Eb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function wb(s,e,t){let i=new WeakMap,n=new zt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let w=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;u===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*b*4*f),_=new gl(E,y,b,f);_.type=Zn,_.needsUpdate=!0;let S=T*4;for(let M=0;M<f;M++){let P=m[M],I=g[M],U=v[M],D=y*b*4*M;for(let F=0;F<P.count;F++){let N=F*S;u===!0&&(n.fromBufferAttribute(P,F),E[D+N+0]=n.x,E[D+N+1]=n.y,E[D+N+2]=n.z,E[D+N+3]=0),p===!0&&(n.fromBufferAttribute(I,F),E[D+N+4]=n.x,E[D+N+5]=n.y,E[D+N+6]=n.z,E[D+N+7]=0),x===!0&&(n.fromBufferAttribute(U,F),E[D+N+8]=n.x,E[D+N+9]=n.y,E[D+N+10]=n.z,E[D+N+11]=U.itemSize===4?n.w:1)}}d={count:f,texture:_,size:new Ee(y,b)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ab(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Rb={[Bl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[kl]:"CINEON_TONE_MAPPING",[lo]:"ACES_FILMIC_TONE_MAPPING",[Vl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[Hl]:"CUSTOM_TONE_MAPPING"};function Cb(s,e,t,i,n,r){let o=new kt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Wt;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let f=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(h,f),u=new ro(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,T=[],y=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){T=b,y=T.length>0&&T[0].isRenderPass===!0;let E=o.width,_=o.height;T.length>0&&a===null&&(a=new kt(E,_,{type:Jt,depthBuffer:!1,stencilBuffer:!1}),l=new kt(E,_,{type:Jt,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&T.some(w=>w.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ls(E,_),r===!0&&(c.format=us,c.type=Qs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let w=0;w<T.length;w++){let M=T[w];M.setSize&&M.setSize(E,_),S&&M.needsDepthTexture===!0&&M.setDepthTexture&&M.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Ms&&T.length===0)return!1;if(v=E,E!==null){let _=E.width,S=E.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Ms,!0},this.hasRenderPass=function(){return y},this.end=function(b,E){b.toneMapping=g,m=!0;let _=o,S=a;for(let w=0;w<T.length;w++){let M=T[w];M.enabled!==!1&&(M.render(b,S,_,E),M.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,f.defines={},ut.getTransfer(p)===yt&&(f.defines.SRGB_TRANSFER="");let w=Rb[x];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(d,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Hg=new Hi,Vg=new ls(1,1),Gg=new bl(1),Wg=new gl,Xg=new Nh,qg=new Ml,yg=[],Sg=[],Mg=new Float32Array(16),bg=new Float32Array(9),Tg=new Float32Array(4);function ba(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=yg[n];if(r===void 0&&(r=new Float32Array(n),yg[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function mi(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function gi(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Vu(s,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Pb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ib(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mi(t,e))return;s.uniform2fv(this.addr,e),gi(t,e)}}function Db(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mi(t,e))return;s.uniform3fv(this.addr,e),gi(t,e)}}function Lb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mi(t,e))return;s.uniform4fv(this.addr,e),gi(t,e)}}function Nb(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(mi(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gi(t,e)}else{if(mi(t,i))return;Tg.set(i),s.uniformMatrix2fv(this.addr,!1,Tg),gi(t,i)}}function Ub(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(mi(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gi(t,e)}else{if(mi(t,i))return;bg.set(i),s.uniformMatrix3fv(this.addr,!1,bg),gi(t,i)}}function Ob(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(mi(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gi(t,e)}else{if(mi(t,i))return;Mg.set(i),s.uniformMatrix4fv(this.addr,!1,Mg),gi(t,i)}}function Fb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mi(t,e))return;s.uniform2iv(this.addr,e),gi(t,e)}}function zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mi(t,e))return;s.uniform3iv(this.addr,e),gi(t,e)}}function kb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mi(t,e))return;s.uniform4iv(this.addr,e),gi(t,e)}}function Hb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mi(t,e))return;s.uniform2uiv(this.addr,e),gi(t,e)}}function Gb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mi(t,e))return;s.uniform3uiv(this.addr,e),gi(t,e)}}function Wb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mi(t,e))return;s.uniform4uiv(this.addr,e),gi(t,e)}}function Gu(s){return s.version===0&&(s.compareFunction=qd,s.needsUpdate=!0),s}function Xb(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Gu(Vg):r=Hg,t.setTexture2D(e||r,n)}function qb(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Xg,n)}function Yb(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Gu(Gg):r=qg,t.setTextureCube(e||r,n)}function Zb(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Wg,n)}function $b(s){switch(s){case 5126:return Pb;case 35664:return Ib;case 35665:return Db;case 35666:return Lb;case 35674:return Nb;case 35675:return Ub;case 35676:return Ob;case 5124:case 35670:return Fb;case 35667:case 35671:return Bb;case 35668:case 35672:return zb;case 35669:case 35673:return kb;case 5125:return Hb;case 36294:return Vb;case 36295:return Gb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Zb}}function Jb(s,e){s.uniform1fv(this.addr,e)}function Kb(s,e){let t=ba(e,this.size,2);s.uniform2fv(this.addr,t)}function Qb(s,e){let t=ba(e,this.size,3);s.uniform3fv(this.addr,t)}function jb(s,e){let t=ba(e,this.size,4);s.uniform4fv(this.addr,t)}function e1(s,e){let t=ba(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function t1(s,e){let t=ba(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function i1(s,e){let t=ba(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function n1(s,e){s.uniform1iv(this.addr,e)}function s1(s,e){s.uniform2iv(this.addr,e)}function r1(s,e){s.uniform3iv(this.addr,e)}function o1(s,e){s.uniform4iv(this.addr,e)}function a1(s,e){s.uniform1uiv(this.addr,e)}function l1(s,e){s.uniform2uiv(this.addr,e)}function c1(s,e){s.uniform3uiv(this.addr,e)}function h1(s,e){s.uniform4uiv(this.addr,e)}function u1(s,e,t){let i=this.cache,n=e.length,r=Vu(t,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Gu(Vg):o=Hg;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function f1(s,e,t){let i=this.cache,n=e.length,r=Vu(t,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Xg,r[o])}function d1(s,e,t){let i=this.cache,n=e.length,r=Vu(t,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Gu(Gg):o=qg;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function p1(s,e,t){let i=this.cache,n=e.length,r=Vu(t,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Wg,r[o])}function m1(s){switch(s){case 5126:return Jb;case 35664:return Kb;case 35665:return Qb;case 35666:return jb;case 35674:return e1;case 35675:return t1;case 35676:return i1;case 5124:case 35670:return n1;case 35667:case 35671:return s1;case 35668:case 35672:return r1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return l1;case 36295:return c1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return p1}}var up=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$b(t.type)}},fp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m1(t.type)}},dp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},cp=/(\w+)(\])?(\[|\.)?/g;function Eg(s,e){s.seq.push(e),s.map[e.id]=e}function g1(s,e,t){let i=s.name,n=i.length;for(cp.lastIndex=0;;){let r=cp.exec(i),o=cp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Eg(t,c===void 0?new up(a,s,e):new fp(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new dp(a),Eg(t,f)),t=f}}}var Sa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);g1(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function wg(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var _1=37297,x1=0;function v1(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Ag=new Ke;function y1(s){ut._getMatrix(Ag,ut.workingColorSpace,s);let e=`mat3( ${Ag.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(s)){case pl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rg(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+v1(s.getShaderSource(e),a)}else return r}function S1(s,e){let t=y1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var M1={[Bl]:"Linear",[zl]:"Reinhard",[kl]:"Cineon",[lo]:"ACESFilmic",[Vl]:"AgX",[Gl]:"Neutral",[Hl]:"Custom"};function b1(s,e){let t=M1[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ku=new B;function T1(){ut.getLuminanceCoefficients(ku);let s=ku.x.toFixed(4),e=ku.y.toFixed(4),t=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jl).join(`
`)}function w1(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A1(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function jl(s){return s!==""}function Cg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Pg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(s){return s.replace(R1,C1)}function C1(s,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pp(t)}var P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(s){return s.replace(P1,I1)}function I1(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Dg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var D1={[oo]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function L1(s){return D1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N1={[va]:"ENVMAP_MODE_REFRACTION"};function U1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":N1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O1={[Od]:"ENVMAP_BLENDING_MULTIPLY",[K0]:"ENVMAP_BLENDING_MIX",[Q0]:"ENVMAP_BLENDING_ADD"};function F1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":O1[s.combine]||"ENVMAP_BLENDING_NONE"}function B1(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=L1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=U1(t),f=F1(t),d=E1(t),u=w1(r),p=n.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(jl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(jl).join(`
`),m.length>0&&(m+=`
`)):(x=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jl).join(`
`),m=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?st.tonemapping_pars_fragment:"",t.toneMapping!==Ms?b1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,S1("linearToOutputTexel",t.outputColorSpace),T1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jl).join(`
`)),o=pp(o),o=Cg(o,t),o=Pg(o,t),a=pp(a),a=Cg(a,t),a=Pg(a,t),o=Ig(o),a=Ig(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,T=g+m+a,y=wg(n,n.VERTEX_SHADER,v),b=wg(n,n.FRAGMENT_SHADER,T);n.attachShader(p,y),n.attachShader(p,b),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function E(M){if(s.debug.checkShaderErrors){let P=n.getProgramInfoLog(p)||"",I=n.getShaderInfoLog(y)||"",U=n.getShaderInfoLog(b)||"",D=P.trim(),F=I.trim(),N=U.trim(),O=!0,G=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,y,b);else{let k=Rg(n,y,"vertex"),C=Rg(n,b,"fragment");Je("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+D+`
`+k+`
`+C)}else D!==""?Ye("WebGLProgram: Program Info Log:",D):(F===""||N==="")&&(G=!1);G&&(M.diagnostics={runnable:O,programLog:D,vertexShader:{log:F,prefix:x},fragmentShader:{log:N,prefix:m}})}n.deleteShader(y),n.deleteShader(b),_=new Sa(n,p),S=A1(n,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(p,_1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var z1=0,mp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gp(e),t.set(e,i)),i}},gp=class{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}};function k1(s){return s===wr||s===$l||s===Jl}function H1(s,e,t,i,n,r){let o=new ra,a=new mp,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,w,M,P,I){let U=M.fog,D=P.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?M.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||F,N),G=d[_.type],k=i.precision;_.precision!==null&&(k=i.getMaxPrecision(_.precision),k!==_.precision&&Ye("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let C=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,q=C!==void 0?C.length:0,ae=0;D.morphAttributes.position!==void 0&&(ae=1),D.morphAttributes.normal!==void 0&&(ae=2),D.morphAttributes.color!==void 0&&(ae=3);let _e,X,W,j;if(G){let se=Ts[G];_e=se.vertexShader,X=se.fragmentShader}else{_e=_.vertexShader,X=_.fragmentShader;let se=a.getVertexShaderStage(_),Ie=a.getFragmentShaderStage(_);a.update(_,se,Ie),W=se.id,j=Ie.id}let ce=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),ve=P.isInstancedMesh===!0,Ze=P.isBatchedMesh===!0,Re=!!_.map,Xe=!!_.matcap,Ue=!!O,he=Ue&&O.isPMREMTexture===!0,Te=!!_.aoMap,We=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,$e=!!_.normalMap,nt=!!_.displacementMap,xt=!!_.emissiveMap,tt=!!_.metalnessMap,St=!!_.roughnessMap,At=_.anisotropy>0,V=_.clearcoat>0,ft=_.diffuseRoughness>0,ot=_.dispersion>0,qe=_.retroreflectivity>0,fe=_.iridescence>0,Qe=_.sheen>0,Ne=_.transmission>0,Oe=At&&!!_.anisotropyMap,L=V&&!!_.clearcoatMap,A=V&&!!_.clearcoatNormalMap,Y=V&&!!_.clearcoatRoughnessMap,ue=ft&&!!_.diffuseRoughnessMap,re=fe&&!!_.iridescenceMap,me=fe&&!!_.iridescenceThicknessMap,xe=Qe&&!!_.sheenColorMap,J=Qe&&!!_.sheenRoughnessMap,te=!!_.specularMap,de=!!_.specularColorMap,z=!!_.specularIntensityMap,ie=Ne&&!!_.transmissionMap,ee=Ne&&!!_.thicknessMap,ye=!!_.gradientMap,ge=!!_.alphaMap,Se=_.alphaTest>0,pe=!!_.alphaHash,Me=!!_.extensions,oe=Ms;_.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(oe=s.toneMapping);let ne=he?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,be={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:X,defines:_.defines,customVertexShaderID:W,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:Ze,batchingColor:Ze&&P._colorsTexture!==null,instancing:ve,instancingColor:ve&&P.instanceColor!==null,instancingMorph:ve&&P.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Re,matcap:Xe,envMap:Ue,envMapMode:Ue&&O.mapping,envMapPMREM:he,envMapMaxLod:he?ne.length-1:null,envMapSize:he?ne[0].width:null,aoMap:Te,lightMap:We,bumpMap:$,normalMap:$e,displacementMap:nt,emissiveMap:xt,normalMapObjectSpace:$e&&_.normalMapType===tg,normalMapTangentSpace:$e&&_.normalMapType===Kl,packedNormalMap:$e&&_.normalMapType===Kl&&k1(_.normalMap.format),metalnessMap:tt,roughnessMap:St,anisotropy:At,anisotropyMap:Oe,clearcoat:V,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:Y,diffuseRoughness:ft,diffuseRoughnessMap:ue,dispersion:ot,retroreflection:qe,iridescence:fe,iridescenceMap:re,iridescenceThicknessMap:me,sheen:Qe,sheenColorMap:xe,sheenRoughnessMap:J,specularMap:te,specularColorMap:de,specularIntensityMap:z,transmission:Ne,transmissionMap:ie,thicknessMap:ee,gradientMap:ye,opaque:_.transparent===!1&&_.blending===xa&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Se,alphaHash:pe,combine:_.combine,mapUv:Re&&u(_.map.channel),aoMapUv:Te&&u(_.aoMap.channel),lightMapUv:We&&u(_.lightMap.channel),bumpMapUv:$&&u(_.bumpMap.channel),normalMapUv:$e&&u(_.normalMap.channel),displacementMapUv:nt&&u(_.displacementMap.channel),emissiveMapUv:xt&&u(_.emissiveMap.channel),metalnessMapUv:tt&&u(_.metalnessMap.channel),roughnessMapUv:St&&u(_.roughnessMap.channel),anisotropyMapUv:Oe&&u(_.anisotropyMap.channel),clearcoatMapUv:L&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&u(_.sheenRoughnessMap.channel),specularMapUv:te&&u(_.specularMap.channel),specularColorMapUv:de&&u(_.specularColorMap.channel),specularIntensityMapUv:z&&u(_.specularIntensityMap.channel),transmissionMapUv:ie&&u(_.transmissionMap.channel),thicknessMapUv:ee&&u(_.thicknessMap.channel),alphaMapUv:ge&&u(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&($e||At),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(Re||ge),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&$e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(se=>se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Re&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:xt&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gi,flipSided:_.side===Ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)S.push(w),S.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let S=d[_.type],w;if(S){let M=Ts[S];w=rn.clone(M.uniforms)}else w=_.uniforms;return w}function T(_,S){let w=h.get(S);return w!==void 0?++w.usedTimes:(w=new B1(s,S,_,n),c.push(w),h.set(S,w)),w}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:E}}function V1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function G1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Lg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ng(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,g){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function l(d,u,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let T=a(d,u,p,x,m,g);p.transmission>0?i.push(T):p.transparent===!0?n.push(T):t.push(T)}function c(d,u,p,x,m,g){let v=a(d,u,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||G1),i.length>1&&i.sort(u||Lg),n.length>1&&n.sort(u||Lg)}function f(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function W1(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new Ng,s.set(i,[o])):n>=r.length?(o=new Ng,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function X1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Le};break;case"SpotLight":t={position:new B,direction:new B,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function q1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Y1=0;function Z1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $1(s){let e=new X1,t=q1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let n=new B,r=new it,o=new it;function a(c){let h=0,f=0,d=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,v=0,T=0,y=0,b=0,E=0,_=0,S=0,w=0,M=0;c.sort(Z1);for(let I=0,U=c.length;I<U;I++){let D=c[I],F=D.color,N=D.intensity,O=D.distance,G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wr?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=F.r*N,f+=F.g*N,d+=F.b*N;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],N);M++}else if(D.isSunLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let C=D.shadow,q=t.get(D);q.shadowIntensity=C.intensity,q.shadowBias=C.bias,q.shadowNormalBias=C.normalBias,q.shadowRadius=C.radius,q.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),i.sunShadow[p]=q,i.sunShadowMap[p]=G;let ae=C.getViewportCount();for(let _e=0;_e<ae;_e++)i.sunShadowMatrix[x+_e]=C.getMatrix(_e),i.sunShadowCascade[x+_e]=C._cascadeData[_e];x+=ae,p++}i.sun[u]=k,u++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let C=D.shadow,q=t.get(D);q.shadowIntensity=C.intensity,q.shadowBias=C.bias,q.shadowNormalBias=C.normalBias,q.shadowRadius=C.radius,q.shadowMapSize=C.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=k,m++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(F).multiplyScalar(N),k.distance=O,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[v]=k;let C=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,C.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[v]=C.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=C.intensity,q.shadowBias=C.bias,q.shadowNormalBias=C.normalBias,q.shadowRadius=C.radius,q.shadowMapSize=C.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=G,_++}v++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(F).multiplyScalar(N),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=k,T++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let C=D.shadow,q=t.get(D);q.shadowIntensity=C.intensity,q.shadowBias=C.bias,q.shadowNormalBias=C.normalBias,q.shadowRadius=C.radius,q.shadowMapSize=C.mapSize,q.shadowCameraNear=C.camera.near,q.shadowCameraFar=C.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=k,g++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(N),k.groundColor.copy(D.groundColor).multiplyScalar(N),i.hemi[y]=k,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let P=i.hash;(P.sunLength!==u||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==y||P.numSunShadows!==p||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==_||P.numSpotMaps!==S||P.numLightProbes!==M)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=T,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,P.sunLength=u,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=y,P.numSunShadows=p,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=_,P.numSpotMaps=S,P.numLightProbes=M,i.version=Y1++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),d++}else if(y.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Ug(s){let e=new $1(s),t=[],i=[],n=[];function r(f){h.camera=f,t.length=0,i.length=0,n.length=0}function o(f){f.isLightProbeGrid?n.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),n.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function J1(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new Ug(s),e.set(n,[a])):r>=o.length?(a=new Ug(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],eT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Og=new it,Ql=new B,hp=new B;function tT(s,e,t){let i=new Sr,n=new Ee,r=new Ee,o=new zt,a=new Bh,l=new zh,c={},h=t.maxTextureSize,f={[Er]:Ii,[Ii]:Er,[Gi]:Gi},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Wt;p.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let g=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===O0&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oo);let w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Mi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=g!==this.type;U&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=E.length;D<F;D++){let N=E[D],O=N.shadow;if(O===void 0){Ye("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let G=O.getFrameExtents();n.multiply(G),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/G.x),n.x=r.x*G.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/G.y),n.y=r.y*G.y,O.mapSize.y=r.y));let k=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===_a){if(N.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new kt(n.x,n.y,{format:wr,type:Jt,minFilter:nn,magFilter:nn,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new ls(n.x,n.y,Zn),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=Ws,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ti,O.map.depthTexture.magFilter=ti}else N.isPointLight?(O.map=new ec(n.x),O.map.depthTexture=new bl(n.x,hs)):(O.map=new kt(n.x,n.y),O.map.depthTexture=new ls(n.x,n.y,hs)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=Ws,this.type===oo?(O.map.depthTexture.compareFunction=k?Xd:Wd,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ti,O.map.depthTexture.magFilter=ti);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let C=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,S);let q=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ae=0;ae<C;ae++){let _e=O.getCamera(ae);if(N.isPointLight){let X=O.camera,W=O.matrix,j=N.distance||X.far;j!==X.far&&(X.far=j,X.updateProjectionMatrix()),Ql.setFromMatrixPosition(N.matrixWorld),X.position.copy(Ql),hp.copy(X.position),hp.add(j1[ae]),X.up.copy(eT[ae]),X.lookAt(hp),X.updateMatrixWorld(),W.makeTranslation(-Ql.x,-Ql.y,-Ql.z),Og.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Og,X.coordinateSystem,X.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(O.map),s.clear());let X=O.getViewport(ae);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),I.viewport(o)}i=O.getFrustum(ae),y(_,S,_e,N,q,this.type)}O.isPointLightShadow!==!0&&this.type===_a&&v(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function v(E,_){let S=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new kt(n.x,n.y,{format:wr,type:Jt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,S,d,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,S,u,x,null)}function T(E,_,S,w){let M=null,P=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let I=M.uuid,U=_.uuid,D=c[I];D===void 0&&(D={},c[I]=D);let F=D[U];F===void 0&&(F=M.clone(),D[U]=F,_.addEventListener("dispose",b)),M=F}if(M.visible=_.visible,M.wireframe=_.wireframe,w===_a?M.side=_.shadowSide!==null?_.shadowSide:_.side:M.side=_.shadowSide!==null?_.shadowSide:f[_.side],M.alphaMap=_.alphaMap,M.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,M.map=_.map,M.clipShadows=_.clipShadows,M.clippingPlanes=_.clippingPlanes,M.clipIntersection=_.clipIntersection,M.displacementMap=_.displacementMap,M.displacementScale=_.displacementScale,M.displacementBias=_.displacementBias,M.wireframeLinewidth=_.wireframeLinewidth,M.linewidth=_.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let I=s.properties.get(M);I.light=S}return M}function y(E,_,S,w,M,P){if(E.visible===!1)return;if(E.layers.test(M)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===_a)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let D=e.update(E),F=E.material;if(Array.isArray(F)){let N=D.groups;for(let O=0,G=N.length;O<G;O++){let k=N[O],C=F[k.materialIndex];if(C&&C.visible){let q=T(E,C,w,P);E.onBeforeShadow(s,E,_,S,D,q,k),s.renderBufferDirect(S,null,D,q,E,k),E.onAfterShadow(s,E,_,S,D,q,k)}}}else if(F.visible){let N=T(E,F,w,P);E.onBeforeShadow(s,E,_,S,D,N,null),s.renderBufferDirect(S,null,D,N,E,null),E.onAfterShadow(s,E,_,S,D,N,null)}}let U=E.children;for(let D=0,F=U.length;D<F;D++)y(U[D],_,S,w,M,P)}function b(E){E.target.removeEventListener("dispose",b);for(let S in c){let w=c[S],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function iT(s,e){function t(){let z=!1,ie=new zt,ee=null,ye=new zt(0,0,0,0);return{setMask:function(ge){ee!==ge&&!z&&(s.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){z=ge},setClear:function(ge,Se,pe,Me,oe){oe===!0&&(ge*=Me,Se*=Me,pe*=Me),ie.set(ge,Se,pe,Me),ye.equals(ie)===!1&&(s.clearColor(ge,Se,pe,Me),ye.copy(ie))},reset:function(){z=!1,ee=null,ye.set(-1,0,0,0)}}}function i(){let z=!1,ie=!1,ee=null,ye=null,ge=null;return{setReversed:function(Se){if(ie!==Se){let pe=e.get("EXT_clip_control");Se?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ie=Se;let Me=ge;ge=null,this.setClear(Me)}},getReversed:function(){return ie},setTest:function(Se){Se?le(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(Se){ee!==Se&&!z&&(s.depthMask(Se),ee=Se)},setFunc:function(Se){if(ie&&(Se=ug[Se]),ye!==Se){switch(Se){case bh:s.depthFunc(s.NEVER);break;case Th:s.depthFunc(s.ALWAYS);break;case Eh:s.depthFunc(s.LESS);break;case jo:s.depthFunc(s.LEQUAL);break;case wh:s.depthFunc(s.EQUAL);break;case Ah:s.depthFunc(s.GEQUAL);break;case Rh:s.depthFunc(s.GREATER);break;case Ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=Se}},setLocked:function(Se){z=Se},setClear:function(Se){ge!==Se&&(ge=Se,ie&&(Se=1-Se),s.clearDepth(Se))},reset:function(){z=!1,ee=null,ye=null,ge=null,ie=!1}}}function n(){let z=!1,ie=null,ee=null,ye=null,ge=null,Se=null,pe=null,Me=null,oe=null;return{setTest:function(ne){z||(ne?le(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(ne){ie!==ne&&!z&&(s.stencilMask(ne),ie=ne)},setFunc:function(ne,be,se){(ee!==ne||ye!==be||ge!==se)&&(s.stencilFunc(ne,be,se),ee=ne,ye=be,ge=se)},setOp:function(ne,be,se){(Se!==ne||pe!==be||Me!==se)&&(s.stencilOp(ne,be,se),Se=ne,pe=be,Me=se)},setLocked:function(ne){z=ne},setClear:function(ne){oe!==ne&&(s.clearStencil(ne),oe=ne)},reset:function(){z=!1,ie=null,ee=null,ye=null,ge=null,Se=null,pe=null,Me=null,oe=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,T=null,y=null,b=null,E=null,_=null,S=new Le(0,0,0),w=0,M=!1,P=null,I=null,U=null,D=null,F=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=G>=2);let C=null,q={},ae=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),X=new zt().fromArray(ae),W=new zt().fromArray(_e);function j(z,ie,ee,ye){let ge=new Uint8Array(4),Se=s.createTexture();s.bindTexture(z,Se),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<ee;pe++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(ie+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return Se}let ce={};ce[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(s.DEPTH_TEST),o.setFunc(jo),$(!1),$e(Id),le(s.CULL_FACE),Te(Mi);function le(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function ve(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Ze(z,ie){return d[z]!==ie?(s.bindFramebuffer(z,ie),d[z]=ie,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ie),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(z,ie){let ee=p,ye=!1;if(z){ee=u.get(ie),ee===void 0&&(ee=[],u.set(ie,ee));let ge=z.textures;if(ee.length!==ge.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,pe=ge.length;Se<pe;Se++)ee[Se]=s.COLOR_ATTACHMENT0+Se;ee.length=ge.length,ye=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,ye=!0);ye&&s.drawBuffers(ee)}function Xe(z){return x!==z?(s.useProgram(z),x=z,!0):!1}let Ue={[Yn]:s.FUNC_ADD,[F0]:s.FUNC_SUBTRACT,[B0]:s.FUNC_REVERSE_SUBTRACT};Ue[z0]=s.MIN,Ue[k0]=s.MAX;let he={[ao]:s.ZERO,[H0]:s.ONE,[V0]:s.SRC_COLOR,[Nd]:s.SRC_ALPHA,[q0]:s.SRC_ALPHA_SATURATE,[Fl]:s.DST_COLOR,[Ol]:s.DST_ALPHA,[G0]:s.ONE_MINUS_SRC_COLOR,[Ud]:s.ONE_MINUS_SRC_ALPHA,[X0]:s.ONE_MINUS_DST_COLOR,[W0]:s.ONE_MINUS_DST_ALPHA,[Y0]:s.CONSTANT_COLOR,[Z0]:s.ONE_MINUS_CONSTANT_COLOR,[$0]:s.CONSTANT_ALPHA,[J0]:s.ONE_MINUS_CONSTANT_ALPHA};function Te(z,ie,ee,ye,ge,Se,pe,Me,oe,ne){if(z===Mi){m===!0&&(ve(s.BLEND),m=!1);return}if(m===!1&&(le(s.BLEND),m=!0),z!==Kh){if(z!==g||ne!==M){if((v!==Yn||b!==Yn)&&(s.blendEquation(s.FUNC_ADD),v=Yn,b=Yn),ne)switch(z){case xa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFunc(s.ONE,s.ONE);break;case Dd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ld:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Je("WebGLState: Invalid blending: ",z);break}else switch(z){case xa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dd:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ld:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",z);break}T=null,y=null,E=null,_=null,S.set(0,0,0),w=0,g=z,M=ne}return}ge=ge||ie,Se=Se||ee,pe=pe||ye,(ie!==v||ge!==b)&&(s.blendEquationSeparate(Ue[ie],Ue[ge]),v=ie,b=ge),(ee!==T||ye!==y||Se!==E||pe!==_)&&(s.blendFuncSeparate(he[ee],he[ye],he[Se],he[pe]),T=ee,y=ye,E=Se,_=pe),(Me.equals(S)===!1||oe!==w)&&(s.blendColor(Me.r,Me.g,Me.b,oe),S.copy(Me),w=oe),g=z,M=!1}function We(z,ie){z.side===Gi?ve(s.CULL_FACE):le(s.CULL_FACE);let ee=z.side===Ii;ie&&(ee=!ee),$(ee),z.blending===xa&&z.transparent===!1?Te(Mi):Te(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let ye=z.stencilWrite;a.setTest(ye),ye&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),xt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(z){P!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),P=z)}function $e(z){z!==N0?(le(s.CULL_FACE),z!==I&&(z===Id?s.cullFace(s.BACK):z===U0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),I=z}function nt(z){z!==U&&(O&&s.lineWidth(z),U=z)}function xt(z,ie,ee){z?(le(s.POLYGON_OFFSET_FILL),(D!==ie||F!==ee)&&(D=ie,F=ee,o.getReversed()&&(ie=-ie,ee=-ee),s.polygonOffset(ie,ee))):ve(s.POLYGON_OFFSET_FILL)}function tt(z){z?le(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function St(z){z===void 0&&(z=s.TEXTURE0+N-1),C!==z&&(s.activeTexture(z),C=z)}function At(z,ie,ee){ee===void 0&&(C===null?ee=s.TEXTURE0+N-1:ee=C);let ye=q[ee];ye===void 0&&(ye={type:void 0,texture:void 0},q[ee]=ye),(ye.type!==z||ye.texture!==ie)&&(C!==ee&&(s.activeTexture(ee),C=ee),s.bindTexture(z,ie||ce[z]),ye.type=z,ye.texture=ie)}function V(){let z=q[C];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ft(){try{s.compressedTexImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function qe(){try{s.texSubImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function fe(){try{s.texSubImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function Qe(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function Ne(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function Oe(){try{s.texStorage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function L(){try{s.texStorage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function A(){try{s.texImage2D(...arguments)}catch(z){Je("WebGLState:",z)}}function Y(){try{s.texImage3D(...arguments)}catch(z){Je("WebGLState:",z)}}function ue(z){return f[z]!==void 0?f[z]:s.getParameter(z)}function re(z,ie){f[z]!==ie&&(s.pixelStorei(z,ie),f[z]=ie)}function me(z){X.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),X.copy(z))}function xe(z){W.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),W.copy(z))}function J(z,ie){let ee=c.get(ie);ee===void 0&&(ee=new WeakMap,c.set(ie,ee));let ye=ee.get(z);ye===void 0&&(ye=s.getUniformBlockIndex(ie,z.name),s.uniformBlockBinding(ie,ye,ye),ee.set(z,ye))}function te(z,ie,ee){let ge=c.get(ie).get(z);l[ge]!==ee&&(s.bindBufferBase(s.UNIFORM_BUFFER,ge,ee),l[ge]=ee)}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},C=null,q={},d={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,T=null,y=null,b=null,E=null,_=null,S=new Le(0,0,0),w=0,M=!1,P=null,I=null,U=null,D=null,F=null,X.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:ve,bindFramebuffer:Ze,drawBuffers:Re,useProgram:Xe,setBlending:Te,setMaterial:We,setFlipSided:$,setCullFace:$e,setLineWidth:nt,setPolygonOffset:xt,setScissorTest:tt,activeTexture:St,bindTexture:At,unbindTexture:V,compressedTexImage2D:ft,compressedTexImage3D:ot,texImage2D:A,texImage3D:Y,pixelStorei:re,getParameter:ue,updateUBOMapping:J,uniformBlockBinding:te,texStorage2D:Oe,texStorage3D:L,texSubImage2D:qe,texSubImage3D:fe,compressedTexSubImage2D:Qe,compressedTexSubImage3D:Ne,scissor:me,viewport:xe,reset:de}}function nT(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,x=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return m?new OffscreenCanvas(L,A):ta("canvas")}function v(L,A,Y){let ue=1,re=Oe(L);if((re.width>Y||re.height>Y)&&(ue=Y/Math.max(re.width,re.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let me=Math.floor(ue*re.width),xe=Math.floor(ue*re.height);d===void 0&&(d=g(me,xe));let J=A?g(me,xe):d;return J.width=me,J.height=xe,J.getContext("2d").drawImage(L,0,0,me,xe),Ye("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+me+"x"+xe+")."),J}else return"data"in L&&Ye("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function T(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(L,A,Y,ue,re,me=!1){if(L!==null){if(s[L]!==void 0)return s[L];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe;ue&&(xe=e.get("EXT_texture_norm16"),xe||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=A;if(A===s.RED&&(Y===s.FLOAT&&(J=s.R32F),Y===s.HALF_FLOAT&&(J=s.R16F),Y===s.UNSIGNED_BYTE&&(J=s.R8),Y===s.UNSIGNED_SHORT&&xe&&(J=xe.R16_EXT),Y===s.SHORT&&xe&&(J=xe.R16_SNORM_EXT)),A===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(J=s.R8UI),Y===s.UNSIGNED_SHORT&&(J=s.R16UI),Y===s.UNSIGNED_INT&&(J=s.R32UI),Y===s.BYTE&&(J=s.R8I),Y===s.SHORT&&(J=s.R16I),Y===s.INT&&(J=s.R32I)),A===s.RG&&(Y===s.FLOAT&&(J=s.RG32F),Y===s.HALF_FLOAT&&(J=s.RG16F),Y===s.UNSIGNED_BYTE&&(J=s.RG8),Y===s.UNSIGNED_SHORT&&xe&&(J=xe.RG16_EXT),Y===s.SHORT&&xe&&(J=xe.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(J=s.RG8UI),Y===s.UNSIGNED_SHORT&&(J=s.RG16UI),Y===s.UNSIGNED_INT&&(J=s.RG32UI),Y===s.BYTE&&(J=s.RG8I),Y===s.SHORT&&(J=s.RG16I),Y===s.INT&&(J=s.RG32I)),A===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(J=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(J=s.RGB16UI),Y===s.UNSIGNED_INT&&(J=s.RGB32UI),Y===s.BYTE&&(J=s.RGB8I),Y===s.SHORT&&(J=s.RGB16I),Y===s.INT&&(J=s.RGB32I)),A===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),Y===s.UNSIGNED_INT&&(J=s.RGBA32UI),Y===s.BYTE&&(J=s.RGBA8I),Y===s.SHORT&&(J=s.RGBA16I),Y===s.INT&&(J=s.RGBA32I)),A===s.RGB&&(Y===s.UNSIGNED_SHORT&&xe&&(J=xe.RGB16_EXT),Y===s.SHORT&&xe&&(J=xe.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),A===s.RGBA){let te=me?pl:ut.getTransfer(re);Y===s.FLOAT&&(J=s.RGBA32F),Y===s.HALF_FLOAT&&(J=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(J=te===yt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&xe&&(J=xe.RGBA16_EXT),Y===s.SHORT&&xe&&(J=xe.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(L,A){let Y;return L?A===null||A===hs||A===Qs?Y=s.DEPTH24_STENCIL8:A===Zn?Y=s.DEPTH32F_STENCIL8:A===ya&&(Y=s.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===hs||A===Qs?Y=s.DEPTH_COMPONENT24:A===Zn?Y=s.DEPTH_COMPONENT32F:A===ya&&(Y=s.DEPTH_COMPONENT16),Y}function S(L,A){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==ti&&L.minFilter!==nn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){let A=new WeakRef(L);i.get(L).__ref=A,p.add(A),x.register(L,A,A)}function M(L){let A=i.get(L).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function P(L){U(L.target)}function I(L){D(L.target)}function U(L){L.removeEventListener("dispose",P),M(L),N(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function D(L){L.removeEventListener("dispose",I),M(L),G(L)}function F(){for(let L of p){let A=L.deref();A!==void 0&&(A.isRenderTarget===!0?D(A):U(A))}p.clear(),f.clear()}function N(L){let A=i.get(L);if(A.__webglInit===void 0)return;let Y=L.source,ue=u.get(Y);if(ue){let re=ue[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(L),Object.keys(ue).length===0&&u.delete(Y)}i.remove(L)}function O(L){let A=i.get(L);s.deleteTexture(A.__webglTexture);let Y=L.source,ue=u.get(Y);delete ue[A.__cacheKey],o.memory.textures--}function G(L){let A=i.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Y=L.depthTexture;if(Y&&Y.renderTarget===L&&U(Y),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let me=0;me<A.__webglFramebuffer[re].length;me++)s.deleteFramebuffer(A.__webglFramebuffer[re][me]);else s.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)s.deleteFramebuffer(A.__webglFramebuffer[re]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ue=L.textures;for(let re=0,me=ue.length;re<me;re++){let xe=i.get(ue[re]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(ue[re])}i.remove(L)}let k=0;function C(){k=0}function q(){return k}function ae(L){k=L}function _e(){let L=k;return L>=n.maxTextures&&Ye("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+n.maxTextures),k+=1,L}function X(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function W(L,A){let Y=i.get(L);if(L.isVideoTexture&&Qe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let ue=L.image;if(ue===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{We(Y,L,A);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+A)}function j(L,A){let Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){We(Y,L,A);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+A)}function ce(L,A){let Y=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){We(Y,L,A);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+A)}function le(L,A){let Y=i.get(L);if(L.version>0&&Y.__version!==L.version){$(Y,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+A)}let ve={[xn]:s.REPEAT,[_s]:s.CLAMP_TO_EDGE,[Ph]:s.MIRRORED_REPEAT},Ze={[ti]:s.NEAREST,[j0]:s.NEAREST_MIPMAP_NEAREST,[Wl]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[eu]:s.LINEAR_MIPMAP_NEAREST,[Ks]:s.LINEAR_MIPMAP_LINEAR},Re={[ng]:s.NEVER,[qd]:s.ALWAYS,[sg]:s.LESS,[Wd]:s.LEQUAL,[rg]:s.EQUAL,[Xd]:s.GEQUAL,[og]:s.GREATER,[ag]:s.NOTEQUAL};function Xe(L,A){if(A.type===Zn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===nn||A.magFilter===eu||A.magFilter===Wl||A.magFilter===Ks||A.minFilter===nn||A.minFilter===eu||A.minFilter===Wl||A.minFilter===Ks)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ve[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ve[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ve[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ze[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ze[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ti||A.minFilter!==Wl&&A.minFilter!==Ks||A.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ue(L,A){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",P),w(A));let ue=A.source,re=u.get(ue);re===void 0&&(re={},u.set(ue,re));let me=X(A);if(me!==L.__cacheKey){re[me]===void 0&&(re[me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[me].usedTimes++;let xe=re[L.__cacheKey];xe!==void 0&&(re[L.__cacheKey].usedTimes--,xe.usedTimes===0&&O(A)),L.__cacheKey=me,L.__webglTexture=re[me].texture}return Y}function he(L,A,Y){return Math.floor(Math.floor(L/Y)/A)}function Te(L,A,Y,ue){let me=L.updateRanges;if(me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,Y,ue,A.data);else{me.sort((z,ie)=>z.start-ie.start);let xe=0;for(let z=1;z<me.length;z++){let ie=me[xe],ee=me[z],ye=ie.start+ie.count,ge=he(ee.start,A.width,4),Se=he(ie.start,A.width,4);ee.start<=ye+1&&ge===Se&&he(ee.start+ee.count-1,A.width,4)===ge?ie.count=Math.max(ie.count,ee.start+ee.count-ie.start):(++xe,me[xe]=ee)}me.length=xe+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),te=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let z=0,ie=me.length;z<ie;z++){let ee=me[z],ye=Math.floor(ee.start/4),ge=Math.ceil(ee.count/4),Se=ye%A.width,pe=Math.floor(ye/A.width),Me=ge,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe),t.texSubImage2D(s.TEXTURE_2D,0,Se,pe,Me,oe,Y,ue,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function We(L,A,Y){let ue=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ue=s.TEXTURE_3D);let re=Ue(L,A),me=A.source;t.bindTexture(ue,L.__webglTexture,s.TEXTURE0+Y);let xe=i.get(me);if(me.version!==xe.__version||re===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let oe=ut.getPrimaries(ut.workingColorSpace),ne=A.colorSpace===js?null:ut.getPrimaries(A.colorSpace),be=A.colorSpace===js||oe===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let te=v(A.image,!1,n.maxTextureSize);te=Ne(A,te);let de=r.convert(A.format,A.colorSpace),z=r.convert(A.type),ie=E(A.internalFormat,de,z,A.normalized,A.colorSpace,A.isVideoTexture);Xe(ue,A);let ee,ye=A.mipmaps,ge=A.isVideoTexture!==!0,Se=xe.__version===void 0||re===!0,pe=me.dataReady,Me=S(A,te);if(A.isDepthTexture)ie=_(A.format===us,A.type),Se&&(ge?t.texStorage2D(s.TEXTURE_2D,1,ie,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,ie,te.width,te.height,0,de,z,null));else if(A.isDataTexture)if(ye.length>0){ge&&Se&&t.texStorage2D(s.TEXTURE_2D,Me,ie,ye[0].width,ye[0].height);for(let oe=0,ne=ye.length;oe<ne;oe++)ee=ye[oe],ge?pe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ee.width,ee.height,de,z,ee.data):t.texImage2D(s.TEXTURE_2D,oe,ie,ee.width,ee.height,0,de,z,ee.data);A.generateMipmaps=!1}else ge?(Se&&t.texStorage2D(s.TEXTURE_2D,Me,ie,te.width,te.height),pe&&Te(A,te,de,z)):t.texImage2D(s.TEXTURE_2D,0,ie,te.width,te.height,0,de,z,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ge&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,ie,ye[0].width,ye[0].height,te.depth);for(let oe=0,ne=ye.length;oe<ne;oe++)if(ee=ye[oe],A.format!==In)if(de!==null)if(ge){if(pe)if(A.layerUpdates.size>0){let be=np(ee.width,ee.height,A.format,A.type);for(let se of A.layerUpdates){let Ie=ee.data.subarray(se*be/ee.data.BYTES_PER_ELEMENT,(se+1)*be/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,se,ee.width,ee.height,1,de,Ie)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ee.width,ee.height,te.depth,de,ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,ie,ee.width,ee.height,te.depth,0,ee.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?pe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ee.width,ee.height,te.depth,de,z,ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,ie,ee.width,ee.height,te.depth,0,de,z,ee.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ge&&Se&&t.texStorage2D(s.TEXTURE_2D,Me,ie,ye[0].width,ye[0].height);for(let oe=0,ne=ye.length;oe<ne;oe++)ee=ye[oe],A.format!==In?de!==null?ge?pe&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ee.width,ee.height,de,ee.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,ie,ee.width,ee.height,0,ee.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?pe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ee.width,ee.height,de,z,ee.data):t.texImage2D(s.TEXTURE_2D,oe,ie,ee.width,ee.height,0,de,z,ee.data)}else if(A.isDataArrayTexture)if(ge){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,ie,te.width,te.height,te.depth),pe)if(A.layerUpdates.size>0){let oe=np(te.width,te.height,A.format,A.type);for(let ne of A.layerUpdates){let be=te.data.subarray(ne*oe/te.data.BYTES_PER_ELEMENT,(ne+1)*oe/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,te.width,te.height,1,de,z,be)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,z,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,te.width,te.height,te.depth,0,de,z,te.data);else if(A.isData3DTexture)ge?(Se&&t.texStorage3D(s.TEXTURE_3D,Me,ie,te.width,te.height,te.depth),pe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,z,te.data)):t.texImage3D(s.TEXTURE_3D,0,ie,te.width,te.height,te.depth,0,de,z,te.data);else if(A.isFramebufferTexture){if(Se)if(ge)t.texStorage2D(s.TEXTURE_2D,Me,ie,te.width,te.height);else{let oe=te.width,ne=te.height;for(let be=0;be<Me;be++)t.texImage2D(s.TEXTURE_2D,be,ie,oe,ne,0,de,z,null),oe>>=1,ne>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),te.parentNode!==oe){oe.appendChild(te),f.add(A),oe.onpaint=ne=>{let be=ne.changedElements;for(let se of f)be.includes(se.image)&&(se.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,te);else{let be=s.RGBA,se=s.RGBA,Ie=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,be,se,Ie,te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&Se){let oe=Oe(ye[0]);t.texStorage2D(s.TEXTURE_2D,Me,ie,oe.width,oe.height)}for(let oe=0,ne=ye.length;oe<ne;oe++)ee=ye[oe],ge?pe&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,de,z,ee):t.texImage2D(s.TEXTURE_2D,oe,ie,de,z,ee);A.generateMipmaps=!1}else if(ge){if(Se){let oe=Oe(te);t.texStorage2D(s.TEXTURE_2D,Me,ie,oe.width,oe.height)}pe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,z,te)}else t.texImage2D(s.TEXTURE_2D,0,ie,de,z,te);T(A)&&A.mipmapsAutoUpdate===!0&&y(ue),xe.__version=me.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function $(L,A,Y){if(A.image.length!==6)return;let ue=Ue(L,A),re=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Y);let me=i.get(re);if(re.version!==me.__version||ue===!0){t.activeTexture(s.TEXTURE0+Y);let xe=ut.getPrimaries(ut.workingColorSpace),J=A.colorSpace===js?null:ut.getPrimaries(A.colorSpace),te=A.colorSpace===js||xe===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let de=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,ie=[];for(let se=0;se<6;se++)!de&&!z?ie[se]=v(A.image[se],!0,n.maxCubemapSize):ie[se]=z?A.image[se].image:A.image[se],ie[se]=Ne(A,ie[se]);let ee=ie[0],ye=r.convert(A.format,A.colorSpace),ge=r.convert(A.type),Se=E(A.internalFormat,ye,ge,A.normalized,A.colorSpace),pe=A.isVideoTexture!==!0,Me=me.__version===void 0||ue===!0,oe=re.dataReady,ne=S(A,ee);Xe(s.TEXTURE_CUBE_MAP,A);let be;if(A.isDepthTexture){if(Se=_(A.format===us,A.type),Me)if(pe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Se,ee.width,ee.height);else for(let se=0;se<6;se++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Se,ee.width,ee.height,0,ye,ge,null)}else if(de){pe&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Se,ee.width,ee.height);for(let se=0;se<6;se++){be=ie[se].mipmaps;for(let Ie=0;Ie<be.length;Ie++){let dt=be[Ie];A.format!==In?ye!==null?pe?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,dt.width,dt.height,ye,dt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Se,dt.width,dt.height,0,dt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,dt.width,dt.height,ye,ge,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Se,dt.width,dt.height,0,ye,ge,dt.data)}}}else{if(be=A.mipmaps,pe&&Me){be.length>0&&ne++;let se=Oe(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Se,se.width,se.height)}for(let se=0;se<6;se++)if(z){pe?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ie[se].width,ie[se].height,ye,ge,ie[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Se,ie[se].width,ie[se].height,0,ye,ge,ie[se].data);for(let Ie=0;Ie<be.length;Ie++){let je=be[Ie].image[se].image;pe?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,je.width,je.height,ye,ge,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Se,je.width,je.height,0,ye,ge,je.data)}}else{pe?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye,ge,ie[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Se,ye,ge,ie[se]);for(let Ie=0;Ie<be.length;Ie++){let dt=be[Ie];pe?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,ye,ge,dt.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Se,ye,ge,dt.image[se])}}}T(A)&&A.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),me.__version=re.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function $e(L,A,Y,ue,re,me){let xe=r.convert(Y.format,Y.colorSpace),J=r.convert(Y.type),te=E(Y.internalFormat,xe,J,Y.normalized,Y.colorSpace),de=i.get(A),z=i.get(Y);if(z.__renderTarget=A,!de.__hasExternalTextures){let ie=Math.max(1,A.width>>me),ee=Math.max(1,A.height>>me);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,me,te,ie,ee,A.depth,0,xe,J,null):t.texImage2D(re,me,te,ie,ee,0,xe,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),fe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,re,z.__webglTexture,0,qe(A)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,re,z.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(L,A,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){let ue=A.depthTexture,re=ue&&ue.isDepthTexture?ue.type:null,me=_(A.stencilBuffer,re),xe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(A),me,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(A),me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,me,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,L)}else{let ue=A.textures;for(let re=0;re<ue.length;re++){let me=ue[re],xe=r.convert(me.format,me.colorSpace),J=r.convert(me.type),te=E(me.internalFormat,xe,J,me.normalized,me.colorSpace);fe(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(A),te,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(A),te,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,te,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(L,A,Y){let ue=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=i.get(A.depthTexture);re.__renderTarget=A;let me=ue?A.depthTexture.image[0]:A.depthTexture.image;(!re.__webglTexture||me.width!==A.width||me.height!==A.height)&&(me.width=A.width,me.height=A.height,A.depthTexture.needsUpdate=!0),ue?le(A.depthTexture,0):W(A.depthTexture,0);let xe=re.__webglTexture,J=qe(A),te=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,de=A.depthTexture.format===us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ws)fe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,te,xe,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,de,te,xe,0);else if(A.depthTexture.format===us)fe(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,te,xe,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,de,te,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(L){let A=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let ue=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ue){let re=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ue.removeEventListener("dispose",re)};ue.addEventListener("dispose",re),A.__depthDisposeCallback=re}A.__boundDepthTexture=ue}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let ue=0;ue<6;ue++)xt(A.__webglFramebuffer[ue],L,ue);else L.texture.mipmaps.length>0?xt(A.__webglFramebuffer[0],L,0):xt(A.__webglFramebuffer,L,0);else if(Y){A.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ue]),A.__webglDepthbuffer[ue]===void 0)A.__webglDepthbuffer[ue]=s.createRenderbuffer(),nt(A.__webglDepthbuffer[ue],L,!1);else{let re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,me)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),nt(A.__webglDepthbuffer,L,!1);else{let re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,A,Y){let ue=i.get(L);A!==void 0&&$e(ue.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&tt(L)}function At(L){let A=L.texture,Y=i.get(L),ue=i.get(A);L.addEventListener("dispose",I),w(L);let re=L.textures,me=L.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=A.version,o.memory.textures++),me){Y.__webglFramebuffer=[];for(let J=0;J<6;J++)if(A.mipmaps.length>0){Y.__webglFramebuffer[J]=[];for(let te=0;te<A.mipmaps.length;te++)Y.__webglFramebuffer[J][te]=s.createFramebuffer()}else Y.__webglFramebuffer[J]=s.createFramebuffer()}else{if(A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let J=0;J<A.mipmaps.length;J++)Y.__webglFramebuffer[J]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(xe)for(let J=0,te=re.length;J<te;J++){let de=i.get(re[J]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&fe(L)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let J=0;J<re.length;J++){let te=re[J];Y.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[J]);let de=r.convert(te.format,te.colorSpace),z=r.convert(te.type),ie=E(te.internalFormat,de,z,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),ee=qe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,Y.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,A);for(let J=0;J<6;J++)if(A.mipmaps.length>0)for(let te=0;te<A.mipmaps.length;te++)$e(Y.__webglFramebuffer[J][te],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else $e(Y.__webglFramebuffer[J],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);T(A)?y(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let J=0,te=re.length;J<te;J++){let de=re[J],z=i.get(de),ie=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,z.__webglTexture),Xe(ie,de),$e(Y.__webglFramebuffer,L,de,s.COLOR_ATTACHMENT0+J,ie,0),T(de)&&y(ie)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(J=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,ue.__webglTexture),Xe(J,A),A.mipmaps.length>0)for(let te=0;te<A.mipmaps.length;te++)$e(Y.__webglFramebuffer[te],L,A,s.COLOR_ATTACHMENT0,J,te);else $e(Y.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,J,0);T(A)?y(J):A.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&tt(L)}function V(L){let A=L.textures;for(let Y=0,ue=A.length;Y<ue;Y++){let re=A[Y];if(T(re)&&re.mipmapsAutoUpdate===!0){let me=b(L),xe=i.get(re).__webglTexture;t.bindTexture(me,xe),y(me),t.unbindTexture()}}}let ft=[];function ot(L){if(L.samples>0){if(fe(L)===!1){let A=L.textures,Y=L.width,ue=L.height,re=s.COLOR_BUFFER_BIT,me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=i.get(L),J=A.length>1;if(J)for(let de=0;de<A.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<A.length;de++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let z=i.get(A[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,Y,ue,0,0,Y,ue,re,s.NEAREST),l===!0&&(ft.length=0,ft.push(s.COLOR_ATTACHMENT0+de),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ft.push(me),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<A.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);let z=i.get(A[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function qe(L){return Math.min(n.maxSamples,L.samples)}function fe(L){let A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Qe(L){let A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function Ne(L,A){let Y=L.colorSpace,ue=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==dl&&Y!==js&&(ut.getTransfer(Y)===yt?(ue!==In||re!==Wi)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",Y)),A}function Oe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=C,this.getTextureUnits=q,this.setTextureUnits=ae,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=St,this.setupRenderTarget=At,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=fe,this.dispose=F}function sT(s,e){function t(i,n=js){let r,o=ut.getTransfer(n);if(i===Wi)return s.UNSIGNED_BYTE;if(i===iu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===nu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===kd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Hd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bd)return s.BYTE;if(i===zd)return s.SHORT;if(i===ya)return s.UNSIGNED_SHORT;if(i===tu)return s.INT;if(i===hs)return s.UNSIGNED_INT;if(i===Zn)return s.FLOAT;if(i===Jt)return s.HALF_FLOAT;if(i===Vd)return s.ALPHA;if(i===Gd)return s.RGB;if(i===In)return s.RGBA;if(i===Ws)return s.DEPTH_COMPONENT;if(i===us)return s.DEPTH_STENCIL;if(i===su)return s.RED;if(i===ru)return s.RED_INTEGER;if(i===wr)return s.RG;if(i===ou)return s.RG_INTEGER;if(i===au)return s.RGBA_INTEGER;if(i===Xl||i===ql||i===Yl||i===Zl)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lu||i===cu||i===hu||i===uu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fu||i===du||i===pu||i===mu||i===gu||i===$l||i===_u)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fu||i===du)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===mu)return r.COMPRESSED_R11_EAC;if(i===gu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$l)return r.COMPRESSED_RG11_EAC;if(i===_u)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xu||i===vu||i===yu||i===Su||i===Mu||i===bu||i===Tu||i===Eu||i===wu||i===Au||i===Ru||i===Cu||i===Pu||i===Iu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Su)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Au)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ru)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Iu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Du||i===Lu||i===Nu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Du)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uu||i===Ou||i===Jl||i===Fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_p=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Tl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rt({vertexShader:rT,fragmentShader:oT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xp=class extends xs{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new _p,g={},v=t.getContextAttributes(),T=null,y=null,b=[],E=[],_=new Ee,S=null,w=null,M=new ki;M.viewport=new zt;let P=new ki;P.viewport=new zt;let I=[M,P],U=new $h,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let W=b[X];return W===void 0&&(W=new oa,b[X]=W),W.getTargetRaySpace()},this.getControllerGrip=function(X){let W=b[X];return W===void 0&&(W=new oa,b[X]=W),W.getGripSpace()},this.getHand=function(X){let W=b[X];return W===void 0&&(W=new oa,b[X]=W),W.getHandSpace()};function N(X){let W=E.indexOf(X.inputSource);if(W===-1)return;let j=b[W];j!==void 0&&(j.update(X.inputSource,X.frame,c||o),j.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",G);for(let X=0;X<b.length;X++){let W=E[X];W!==null&&(E[X]=null,b[X].disconnect(W))}D=null,F=null,m.reset();for(let X in g)delete g[X];if(e.setRenderTarget(T),u=null,d=null,f=null,n=null,y=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),w!==null){let X=w.camera;X.fov=w.fov,X.zoom=w.zoom,X.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(n,t)),f},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",O),n.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ce=null,le=null;v.depth&&(le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?us:Ws,ce=v.stencil?Qs:hs);let ve={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ve),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new kt(d.textureWidth,d.textureHeight,{format:In,type:Wi,depthTexture:new ls(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let j={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new kt(u.framebufferWidth,u.framebufferHeight,{format:In,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),_e.setContext(n),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(X){for(let W=0;W<X.removed.length;W++){let j=X.removed[W],ce=E.indexOf(j);ce>=0&&(E[ce]=null,b[ce].disconnect(j))}for(let W=0;W<X.added.length;W++){let j=X.added[W],ce=E.indexOf(j);if(ce===-1){for(let ve=0;ve<b.length;ve++)if(ve>=E.length){E.push(j),ce=ve;break}else if(E[ve]===null){E[ve]=j,ce=ve;break}if(ce===-1)break}let le=b[ce];le&&le.connect(j)}}function k(X,W){W===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(W.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let W=X.near,j=X.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(j=m.depthFar)),U.near=P.near=M.near=W,U.far=P.far=M.far=j,(D!==U.near||F!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,F=U.far),U.layers.mask=X.layers.mask|6,M.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let ce=X.parent,le=U.cameras;k(U,ce);for(let ve=0;ve<le.length;ve++)k(le[ve],ce);U.projectionMatrix.copy(M.projectionMatrix),U.projectionMatrixInverse.copy(M.projectionMatrixInverse),w===null&&X.isPerspectiveCamera&&(w={camera:X,fov:X.fov,zoom:X.zoom}),C(X,U,ce)};function C(X,W,j){j===null?X.matrix.copy(W.matrixWorld):(X.matrix.copy(j.matrixWorld),X.matrix.invert(),X.matrix.multiply(W.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=na*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(X){return g[X]};let q=null;function ae(X,W){if(h=W.getViewerPose(c||o),p=W,h!==null){let j=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let ce=!1;j.length!==U.cameras.length&&(U.cameras.length=0,ce=!0);for(let Re=0;Re<j.length;Re++){let Xe=j[Re],Ue=null;if(u!==null)Ue=u.getViewport(Xe);else{let Te=f.getViewSubImage(d,Xe);Ue=Te.viewport,Re===0&&(e.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(y))}let he=I[Re];he===void 0&&(he=new ki,he.layers.enable(Re),he.viewport=new zt,I[Re]=he),he.matrix.fromArray(Xe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Xe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Re===0&&(U.matrix.copy(he.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ce===!0&&U.cameras.push(he)}let le=n.enabledFeatures;if(le&&le.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let Re=f.getDepthInformation(j[0]);Re&&Re.isValid&&Re.texture&&m.init(Re,n.renderState)}if(le&&le.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Re=0;Re<j.length;Re++){let Xe=j[Re].camera;if(Xe){let Ue=g[Xe];Ue||(Ue=new Tl,g[Xe]=Ue);let he=f.getCameraImage(Xe);Ue.sourceTexture=he}}}}for(let j=0;j<b.length;j++){let ce=E[j],le=b[j];ce!==null&&le!==void 0&&le.update(ce,W,c||o)}q&&q(X,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),p=null}let _e=new Fg;_e.setAnimationLoop(ae),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}},aT=new it,Yg=new Ke;Yg.set(-1,0,0,0,1,0,0,0,1);function lT(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,ep(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ii&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ii&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),T=v.envMap,y=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(aT.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ii&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function cT(s,e,t,i){let n={},r={};function o(v,T){let y=T.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,T){let y=n[v.id];y===void 0&&(p(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));let b=T.program;i.updateUBOMapping(v,b);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let T=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=n[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,_=y.length;E<_;E++){let S=y[E];if(Array.isArray(S))for(let w=0,M=S.length;w<M;w++)h(S[w],E,w,b);else h(S,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,b){if(d(v,T,y,b)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let w=0;w<_.length;w++){let M=_[w],P=x(M,!0);f(M,v.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function f(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,b){let E=v.value,_=T+"_"+y;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);let S=b[_],w=!1;for(let M=0;M<E.length;M++)u(E[M],S,M)===!0&&(w=!0);return w}return u(E,b,_)}function u(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let b=T[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let T=v.uniforms,y=0,b=16;for(let _=0,S=T.length;_<S;_++){let w=Array.isArray(T[_])?T[_]:[T[_]];for(let M=0,P=w.length;M<P;M++){let I=w[M],U=Array.isArray(I.value)?I.value:[I.value],D=Array.isArray(T[_])||Array.isArray(I.value),F=y;for(let O=0,G=U.length;O<G;O++){let k=U[O],C=x(k,D),q=y%b,ae=q%C.boundary,_e=q+ae;y+=ae,_e!==0&&b-_e<C.storage&&(y+=b-_e),O===0&&(F=y),y+=C.storage}let N=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new N((y-F)/Float32Array.BYTES_PER_ELEMENT),I.__offset=F}}let E=y%b;return E>0&&(y+=b-E),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let T=v.target;T.removeEventListener("dispose",m),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function g(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:g}}var hT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bs=null;function uT(){return bs===null&&(bs=new qs(hT,16,16,wr,Jt),bs.name="DFG_LUT",bs.minFilter=nn,bs.magFilter=nn,bs.wrapS=_s,bs.wrapT=_s,bs.generateMipmaps=!1,bs.needsUpdate=!0),bs}var Hu=class{constructor(e={}){let{canvas:t=lg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Wi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([au,ou,ru]),g=new Set([Wi,hs,ya,Qs,iu,nu]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,E=null,_=[],S=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,P=!1,I=null,U=null,D=null,F=null;this._outputColorSpace=ei;let N=0,O=0,G=null,k=-1,C=null,q=new zt,ae=new zt,_e=null,X=new Le(0),W=0,j=t.width,ce=t.height,le=1,ve=null,Ze=null,Re=new zt(0,0,j,ce),Xe=new zt(0,0,j,ce),Ue=!1,he=new Sr,Te=new Oh,We=!1,$=!1,$e=new it,nt=new B,xt=new zt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function At(){return G===null?le:1}let V=i;function ft(R,H){return t.getContext(R,H)}let ot,qe,fe,Qe,Ne,Oe,L,A,Y,ue,re,me,xe,J,te,de,z,ie,ee,ye,ge,Se,pe;try{let R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",se,!1),V===null){let H="webgl2";if(V=ft(H,R),V===null)throw ft(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Me()}catch(R){throw t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Je("WebGLRenderer: "+R.message),R}function Me(){ot=new Mb(V),ot.init(),ge=new sT(V,ot),qe=new ub(V,ot,e,ge),fe=new iT(V,ot),qe.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),U=V.createFramebuffer(),D=V.createFramebuffer(),F=V.createFramebuffer(),Qe=new Eb(V),Ne=new V1,Oe=new nT(V,ot,fe,Ne,qe,ge,Qe),L=new Sb(M),A=new Ay(V),Se=new cb(V,A),Y=new bb(V,A,Qe,Se),ue=new Ab(V,Y,A,Se,Qe),ie=new wb(V,qe,Oe),te=new fb(Ne),re=new H1(M,L,ot,qe,Se,te),me=new lT(M,Ne),xe=new W1,J=new J1(ot),z=new lb(M,L,fe,ue,p,l),de=new tT(M,ue,qe),pe=new cT(V,Qe,qe,fe),ee=new hb(V,ot,Qe),ye=new Tb(V,ot,Qe),Qe.programs=re.programs,M.capabilities=qe,M.extensions=ot,M.properties=Ne,M.renderLists=xe,M.shadowMap=de,M.state=fe,M.info=Qe}x!==Wi&&(w=new Cb(x,t.width,t.height,a,n,r));let oe=new xp(M,V);this.xr=oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(R){R!==void 0&&(le=R,this.setSize(j,ce,!1))},this.getSize=function(R){return R.set(j,ce)},this.setSize=function(R,H,Q=!0){if(oe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,ce=H,t.width=Math.floor(R*le),t.height=Math.floor(H*le),Q===!0&&(t.style.width=R+"px",t.style.height=H+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(j*le,ce*le).floor()},this.setDrawingBufferSize=function(R,H,Q){j=R,ce=H,le=Q,t.width=Math.floor(R*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(x===Wi){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(q)},this.getViewport=function(R){return R.copy(Re)},this.setViewport=function(R,H,Q,Z){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,H,Q,Z),fe.viewport(q.copy(Re).multiplyScalar(At()).round())},this.getScissor=function(R){return R.copy(Xe)},this.setScissor=function(R,H,Q,Z){R.isVector4?Xe.set(R.x,R.y,R.z,R.w):Xe.set(R,H,Q,Z),fe.scissor(ae.copy(Xe).multiplyScalar(At()).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){fe.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){ve=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,Q=!0){let Z=0;if(R){let K=!1;if(G!==null){let Ae=G.texture.format;K=m.has(Ae)}if(K){let Ae=G.texture.type,Be=g.has(Ae),we=z.getClearColor(),De=z.getClearAlpha(),Ge=we.r,et=we.g,pt=we.b;Be?(v[0]=Ge,v[1]=et,v[2]=pt,v[3]=De,V.clearBufferuiv(V.COLOR,0,v)):(T[0]=Ge,T[1]=et,T[2]=pt,T[3]=De,V.clearBufferiv(V.COLOR,0,T))}else Z|=V.COLOR_BUFFER_BIT}H&&(Z|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",se,!1),z.dispose(),xe.dispose(),J.dispose(),Oe.dispose(),Ne.dispose(),L.dispose(),ue.dispose(),Y.dispose(),Se.dispose(),pe.dispose(),re.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Pt),oe.removeEventListener("sessionend",bt),fi.stop()};function ne(R){R.preventDefault(),ml("WebGLRenderer: Context Lost."),P=!0}function be(){ml("WebGLRenderer: Context Restored."),P=!1;let R=Qe.autoReset,H=de.enabled,Q=de.autoUpdate,Z=de.needsUpdate,K=de.type;Me(),Qe.autoReset=R,de.enabled=H,de.autoUpdate=Q,de.needsUpdate=Z,de.type=K}function se(R){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){let H=R.target;H.removeEventListener("dispose",Ie),dt(H)}function dt(R){je(R),Ne.remove(R)}function je(R){let H=Ne.get(R).programs;H!==void 0&&(H.forEach(function(Q){re.releaseProgram(Q)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Q,Z,K,Ae){H===null&&(H=tt);let Be=K.isMesh&&K.matrixWorld.determinantAffine()<0,we=Vn(R,H,Q,Z,K);fe.setMaterial(Z,Be);let De=Q.index,Ge=1;if(Z.wireframe===!0){if(De=Y.getWireframeAttribute(Q),De===void 0)return;Ge=2}let et=Q.drawRange,pt=Q.attributes.position,He=et.start*Ge,mt=(et.start+et.count)*Ge;Ae!==null&&(He=Math.max(He,Ae.start*Ge),mt=Math.min(mt,(Ae.start+Ae.count)*Ge)),De!==null?(He=Math.max(He,0),mt=Math.min(mt,De.count)):pt!=null&&(He=Math.max(He,0),mt=Math.min(mt,pt.count));let oi=mt-He;if(oi<0||oi===1/0)return;Se.setup(K,Z,we,Q,De);let Ut,Dt=ee;if(De!==null&&(Ut=A.get(De),Dt=ye,Dt.setIndex(Ut)),K.isMesh)Z.wireframe===!0?(fe.setLineWidth(Z.wireframeLinewidth*At()),Dt.setMode(V.LINES)):Dt.setMode(V.TRIANGLES);else if(K.isLine){let Oi=Z.linewidth;Oi===void 0&&(Oi=1),fe.setLineWidth(Oi*At()),K.isLineSegments?Dt.setMode(V.LINES):K.isLineLoop?Dt.setMode(V.LINE_LOOP):Dt.setMode(V.LINE_STRIP)}else K.isPoints?Dt.setMode(V.POINTS):K.isSprite&&Dt.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Oi=K._multiDrawStarts,Ve=K._multiDrawCounts,en=K._multiDrawCount,Mt=De?A.get(De).bytesPerElement:1,Yr=Ne.get(Z).currentProgram.getUniforms();for(let Fi=0;Fi<en;Fi++)Yr.setValue(V,"_gl_DrawID",Fi),Dt.render(Oi[Fi]/Mt,Ve[Fi])}else if(K.isInstancedMesh)Dt.renderInstances(He,oi,K.count);else if(Q.isInstancedBufferGeometry){let Oi=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ve=Math.min(Q.instanceCount,Oi);Dt.renderInstances(He,oi,Ve)}else Dt.render(He,oi)};function Ft(R,H,Q,Z){I!==null&&R.isNodeMaterial&&I.setObject(Z,R),We===!0&&te.setState(R,Q,!1),R.transparent===!0&&R.side===Gi&&R.forceSinglePass===!1?(R.side=Ii,R.needsUpdate=!0,wn(R,H,Z),R.side=Er,R.needsUpdate=!0,wn(R,H,Z),R.side=Gi):wn(R,H,Z)}this.compile=function(R,H,Q=null){Q===null&&(Q=R),I!==null&&I.renderStart(R,H,Q),E=J.get(Q),E.init(H),S.push(E),Q.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),R!==Q&&R.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),$=this.localClippingEnabled,We=te.init(this.clippingPlanes,$),We===!0&&te.setGlobalState(this.clippingPlanes,H),I!==null&&de.render(E.state.shadowsArray,Q,H);let Z=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Be=0;Be<Ae.length;Be++){let we=Ae[Be];Ft(we,Q,H,K),Z.add(we)}else Ft(Ae,Q,H,K),Z.add(Ae)}),E=S.pop(),I!==null&&I.renderEnd(),Z},this.compileAsync=function(R,H,Q=null){let Z=this.compile(R,H,Q);return new Promise(K=>{function Ae(){if(Z.forEach(function(Be){let De=Ne.get(Be).currentProgram;(De===void 0||De.isReady())&&Z.delete(Be)}),Z.size===0){K(R);return}setTimeout(Ae,10)}ot.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let si=null;function Bt(R){si&&si(R)}function Pt(){fi.stop()}function bt(){fi.start()}let fi=new Fg;fi.setAnimationLoop(Bt),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(R){si=R,oe.setAnimationLoop(R),R===null?fi.stop():fi.start()},oe.addEventListener("sessionstart",Pt),oe.addEventListener("sessionend",bt),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(R,H);let Q=oe.enabled===!0&&oe.isPresenting===!0,Z=w!==null&&(G===null||Q)&&w.begin(M,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,H,G),E=J.get(R,S.length),E.init(H),E.state.textureUnits=Oe.getTextureUnits(),S.push(E),$e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Te.setFromArrayCamera(H):he.setFromProjectionMatrix($e,Wn,H.reversedDepth),$=this.localClippingEnabled,We=te.init(this.clippingPlanes,$),b=xe.get(R,_.length),b.init(),_.push(b),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Be=M.xr.getDepthSensingMesh();Be!==null&&It(Be,H,-1/0,M.sortObjects)}It(R,H,0,M.sortObjects),b.finish(),I!==null&&I.updateLights(E.state.lightsArray),M.sortObjects===!0&&b.sort(ve,Ze),St=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,St&&z.addToRenderList(b,R),this.info.autoReset===!0&&this.info.reset(),We===!0&&te.beginShadows();let K=E.state.shadowsArray;if(de.render(K,R,H),We===!0&&te.endShadows(),(Z&&w.hasRenderPass())===!1){let Be=b.opaque,we=b.transmissive;if(E.setupLights(),H.isArrayCamera){let De=H.cameras;if(we.length>0)for(let Ge=0,et=De.length;Ge<et;Ge++){let pt=De[Ge];En(Be,we,R,pt)}St&&z.render(R);for(let Ge=0,et=De.length;Ge<et;Ge++){let pt=De[Ge];Ui(b,R,pt,pt.viewport)}}else we.length>0&&En(Be,we,R,H),St&&z.render(R),Ui(b,R,H)}G!==null&&O===0&&(Oe.updateMultisampleRenderTarget(G),Oe.updateRenderTargetMipmap(G)),Z&&w.end(M),R.isScene===!0&&R.onAfterRender(M,R,H),Se.resetDefaultState(),k=-1,C=null,S.pop(),S.length>0?(E=S[S.length-1],Oe.setTextureUnits(E.state.textureUnits),We===!0&&te.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,I!==null&&I.renderEnd()};function It(R,H,Q,Z){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){let Be=H.isArrayCamera?Te:he;if(!R.frustumCulled||R.intersectsFrustum(Be)){Z&&xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($e);let we=ue.update(R),De=R.material;De.visible&&b.push(R,we,De,Q,xt.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){let Be=H.isArrayCamera?Te:he;if(!R.frustumCulled||R.intersectsFrustum(Be)){let we=ue.update(R),De=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xt.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),xt.copy(we.boundingSphere.center)),xt.applyMatrix4(R.matrixWorld).applyMatrix4($e)),Array.isArray(De)){let Ge=we.groups;for(let et=0,pt=Ge.length;et<pt;et++){let He=Ge[et],mt=De[He.materialIndex];mt&&mt.visible&&b.push(R,we,mt,Q,xt.z,He,H)}}else De.visible&&b.push(R,we,De,Q,xt.z,null,H)}}}let Ae=R.children;for(let Be=0,we=Ae.length;Be<we;Be++)It(Ae[Be],H,Q,Z)}function Ui(R,H,Q,Z){let{opaque:K,transmissive:Ae,transparent:Be}=R;E.setupLightsView(Q),We===!0&&te.setGlobalState(M.clippingPlanes,Q),Z&&fe.viewport(q.copy(Z)),K.length>0&&Zt(K,H,Q),Ae.length>0&&Zt(Ae,H,Q),Be.length>0&&Zt(Be,H,Q),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function En(R,H,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let He=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new kt(1,1,{generateMipmaps:!0,type:He?Jt:Wi,minFilter:Ks,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Ae=E.state.transmissionRenderTarget[Z.id],Be=Z.viewport||q;Ae.setSize(Be.z*M.transmissionResolutionScale,Be.w*M.transmissionResolutionScale);let we=M.getRenderTarget(),De=M.getActiveCubeFace(),Ge=M.getActiveMipmapLevel();M.setRenderTarget(Ae),M.getClearColor(X),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),St&&z.render(Q);let et=M.toneMapping;M.toneMapping=Ms;let pt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),We===!0&&te.setGlobalState(M.clippingPlanes,Z),Zt(R,Q,Z),Oe.updateMultisampleRenderTarget(Ae),Oe.updateRenderTargetMipmap(Ae),ot.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let mt=0,oi=H.length;mt<oi;mt++){let Ut=H[mt],{object:Dt,geometry:Oi,material:Ve,group:en}=Ut;if(Ve.side===Gi&&Dt.layers.test(Z.layers)){let Mt=Ve.side;Ve.side=Ii,Ve.needsUpdate=!0,ri(Dt,Q,Z,Oi,Ve,en),Ve.side=Mt,Ve.needsUpdate=!0,He=!0}}He===!0&&(Oe.updateMultisampleRenderTarget(Ae),Oe.updateRenderTargetMipmap(Ae))}M.setRenderTarget(we,De,Ge),M.setClearColor(X,W),pt!==void 0&&(Z.viewport=pt),M.toneMapping=et}function Zt(R,H,Q){let Z=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ae=R.length;K<Ae;K++){let Be=R[K],{object:we,geometry:De,group:Ge}=Be,et=Be.material;et.allowOverride===!0&&Z!==null&&(et=Z),we.layers.test(Q.layers)&&ri(we,H,Q,De,et,Ge)}}function ri(R,H,Q,Z,K,Ae){I!==null&&K.isNodeMaterial&&I.setObject(R,K),R.onBeforeRender(M,H,Q,Z,K,Ae),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(M,H,Q,Z,R,Ae),K.transparent===!0&&K.side===Gi&&K.forceSinglePass===!1?(K.side=Ii,K.needsUpdate=!0,M.renderBufferDirect(Q,H,Z,K,R,Ae),K.side=Er,K.needsUpdate=!0,M.renderBufferDirect(Q,H,Z,K,R,Ae),K.side=Gi):M.renderBufferDirect(Q,H,Z,K,R,Ae),R.onAfterRender(M,H,Q,Z,K,Ae)}function di(R){let H=0;for(let Q of R)Q.texture!==null&&H++;return H}function wn(R,H,Q){H.isScene!==!0&&(H=tt);let Z=Ne.get(R),K=E.state.lights,Ae=E.state.shadowsArray,Be=K.state.version,we=re.getParameters(R,K.state,Ae,H,Q,E.state.lightProbeGridArray),De=re.getProgramCacheKey(we),Ge=Z.programs;Z.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let et=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Z.envMap=L.get(R.envMap||Z.environment,et),Z.envMapRotation=Z.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",Ie),Ge=new Map,Z.programs=Ge,Z.programVariants=new Map);let pt=Ge.get(De);if(pt!==void 0){if(Z.currentProgram===pt&&Z.lightsStateVersion===Be)return $t(R,we),pt}else we.uniforms=re.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,Q,we),R.onBeforeCompile(we,M),pt=re.acquireProgram(we,De),Ge.set(De,pt),Z.uniforms=we.uniforms;let He=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=te.uniform),$t(R,we),Z.needsLights=qc(R),Z.lightsStateVersion=Be,Z.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.sunLights.value=K.state.sun,He.sunLightShadows.value=K.state.sunShadow,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.sunShadowMatrix.value=K.state.sunShadowMatrix,He.sunShadowCascade.value=K.state.sunShadowCascade,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=di(E.state.lightProbeGridArray),Z.currentProgram=pt,Z.uniformsList=null,pt}function Do(R,H,Q,Z,K){let Ae=Ne.get(R),Be=Ae.currentProgram.id+","+Z+","+K,we=Ae.programVariants.get(Be);return we===void 0?(we=wn(R,H,Q),Ae.programVariants.set(Be,we)):(Ae.currentProgram=we,Ae.uniformsList=null,Ae.outputColorSpace=Z,Ae.toneMapping=K),we}function pi(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=Sa.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function $t(R,H){let Q=Ne.get(R);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Vn(R,H,Q,Z,K){H.isScene!==!0&&(H=tt),Oe.resetTextureUnits();let Ae=H.fog,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,we=G===null?M.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ut.workingColorSpace,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ge=L.get(Z.envMap||Be,De),et=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pt=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!Q.morphAttributes.position,mt=!!Q.morphAttributes.normal,oi=!!Q.morphAttributes.color,Ut=Ms;Z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ut=M.toneMapping);let Dt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Oi=Dt!==void 0?Dt.length:0,Ve=Ne.get(Z),en=E.state.lights;if(We===!0&&($===!0||R!==C)){let Gt=R===C&&Z.id===k;te.setState(Z,R,Gt)}let Mt=!1,Yr=!1;Z.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==en.state.version||K.isBatchedMesh&&Ve.batching===!1||!K.isBatchedMesh&&Ve.batching===!0||K.isBatchedMesh&&Ve.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ve.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ve.instancing===!1||!K.isInstancedMesh&&Ve.instancing===!0||K.isSkinnedMesh&&Ve.skinning===!1||!K.isSkinnedMesh&&Ve.skinning===!0||K.isInstancedMesh&&Ve.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ve.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ve.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ve.instancingMorph===!1&&K.morphTexture!==null||Ve.envMap!==Ge||Z.fog===!0&&Ve.fog!==Ae||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==te.numPlanes||Ve.numIntersection!==te.numIntersection)||Ve.vertexAlphas!==et||Ve.vertexTangents!==pt||Ve.morphTargets!==He||Ve.morphNormals!==mt||Ve.morphColors!==oi||Ve.morphTargetsCount!==Oi||Ve.numLightProbeGrids!==di(E.state.lightProbeGridArray)?Mt=!0:(Ve.outputColorSpace!==we||Ve.toneMapping!==Ut)&&(Yr=!0):(Mt=!0,Ve.__version=Z.version);let Fi=Ve.currentProgram;(Mt===!0||Yr===!0)&&(Fi=Yr===!0?Do(Z,H,K,we,Ut):wn(Z,H,K),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,Fi,Ve));let Yc=!1,mr=!1,Zr=!1,vt=Fi.getUniforms(),Ri=Ve.uniforms;if(fe.useProgram(Fi.program)&&(Yc=!0,mr=!0,Zr=!0),Z.id!==k&&(k=Z.id,mr=!0),Yc||C!==R){fe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(V,"projectionMatrix",R.projectionMatrix),vt.setValue(V,"viewMatrix",R.matrixWorldInverse);let vi=vt.map.cameraPosition;vi!==void 0&&vi.setValue(V,nt.setFromMatrixPosition(R.matrixWorld)),qe.logarithmicDepthBuffer&&vt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&vt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,mr=!0,Zr=!0)}if(Ve.needsLights&&(en.state.sunShadowMap.length>0&&vt.setValue(V,"sunShadowMap",en.state.sunShadowMap,Oe),en.state.directionalShadowMap.length>0&&vt.setValue(V,"directionalShadowMap",en.state.directionalShadowMap,Oe),en.state.spotShadowMap.length>0&&vt.setValue(V,"spotShadowMap",en.state.spotShadowMap,Oe),en.state.pointShadowMap.length>0&&vt.setValue(V,"pointShadowMap",en.state.pointShadowMap,Oe)),K.isSkinnedMesh){vt.setOptional(V,K,"bindMatrix"),vt.setOptional(V,K,"bindMatrixInverse");let Gt=K.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),vt.setValue(V,"boneTexture",Gt.boneTexture,Oe))}K.isBatchedMesh&&(vt.setOptional(V,K,"batchingTexture"),vt.setValue(V,"batchingTexture",K._matricesTexture,Oe),vt.setOptional(V,K,"batchingIdTexture"),vt.setValue(V,"batchingIdTexture",K._indirectTexture,Oe),vt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&vt.setValue(V,"batchingColorTexture",K._colorsTexture,Oe));let is=Q.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&ie.update(K,Q,Fi),(mr||Ve.receiveShadow!==K.receiveShadow)&&(Ve.receiveShadow=K.receiveShadow,vt.setValue(V,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Ri.envMapIntensity.value=H.environmentIntensity),Ri.dfgLUT!==void 0&&(Ri.dfgLUT.value=uT()),mr){if(vt.setValue(V,"toneMappingExposure",M.toneMappingExposure),Ve.needsLights&&el(Ri,Zr),Ae&&Z.fog===!0&&me.refreshFogUniforms(Ri,Ae),me.refreshMaterialUniforms(Ri,Z,le,ce,E.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Gt=y,vi=0;for(let Os of E.state.lightProbeGridArray)Os.texture!==null&&(Gt.textures[vi]=Os.texture,Gt.min[vi]=Os.boundingBox.min,Gt.max[vi]=Os.boundingBox.max,Gt.resolution[vi]=Os.resolution,vi++);for(let Os in Gt)Gt[Os].length=vi;Ri.probesSH.value=Gt.textures,Ri.probesMin.value=Gt.min,Ri.probesMax.value=Gt.max,Ri.probesResolution.value=Gt.resolution}Sa.upload(V,pi(Ve),Ri,Oe)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Sa.upload(V,pi(Ve),Ri,Oe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&vt.setValue(V,"center",K.center),vt.setValue(V,"modelViewMatrix",K.modelViewMatrix),vt.setValue(V,"normalMatrix",K.normalMatrix),vt.setValue(V,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Gt=Z.uniformsGroups;for(let vi=0,Os=Gt.length;vi<Os;vi++){let Km=Gt[vi];pe.update(Km,Fi),pe.bind(Km,Fi)}}return Fi}function el(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function qc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,H,Q){let Z=Ne.get(R);Z.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ne.get(R.texture).__webglTexture=H,Ne.get(R.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let Q=Ne.get(R);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,Q=0){G=R,N=H,O=Q;let Z=null,K=!1,Ae=!1;if(R){let we=Ne.get(R);if(we.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(V.FRAMEBUFFER,we.__webglFramebuffer),q.copy(R.viewport),ae.copy(R.scissor),_e=R.scissorTest,fe.viewport(q),fe.scissor(ae),fe.setScissorTest(_e),k=-1;return}else if(we.__webglFramebuffer===void 0)Oe.setupRenderTarget(R);else if(we.__hasExternalTextures)Oe.rebindTextures(R,Ne.get(R.texture).__webglTexture,Ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let et=R.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&Ne.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(R)}}let De=R.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ae=!0);let Ge=Ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?Z=Ge[H][Q]:Z=Ge[H],K=!0):R.samples>0&&Oe.useMultisampledRTT(R)===!1?Z=Ne.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?Z=Ge[Q]:Z=Ge,q.copy(R.viewport),ae.copy(R.scissor),_e=R.scissorTest}else q.copy(Re).multiplyScalar(le).floor(),ae.copy(Xe).multiplyScalar(le).floor(),_e=Ue;if(Q!==0&&(Z=U),fe.bindFramebuffer(V.FRAMEBUFFER,Z)&&fe.drawBuffers(R,Z),fe.viewport(q),fe.scissor(ae),fe.setScissorTest(_e),K){let we=Ne.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,we.__webglTexture,Q)}else if(Ae){let we=H;for(let De=0;De<R.textures.length;De++){let Ge=Ne.get(R.textures[De]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+De,Ge.__webglTexture,Q,we)}}else if(R!==null&&Q!==0){let we=Ne.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,we.__webglTexture,Q)}k=-1};function pr(R){let H=Ne.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=qe.textureFormatReadable(R.format),H.__typeReadable=qe.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,Q,Z,K,Ae,Be,we=0){if(!(R&&R.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(De=De[Be],Array.isArray(De)&&(De=De[0])),De){fe.bindFramebuffer(V.FRAMEBUFFER,De);try{let Ge=R.textures[we],et=Ge.format,pt=Ge.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we);let He=pr(Ge);if(He.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Z&&Q>=0&&Q<=R.height-K&&V.readPixels(H,Q,Z,K,ge.convert(et),ge.convert(pt),Ae)}finally{let Ge=G!==null?Ne.get(G).__webglFramebuffer:null;fe.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,H,Q,Z,K,Ae,Be,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(De=De[Be],Array.isArray(De)&&(De=De[0])),De)if(H>=0&&H<=R.width-Z&&Q>=0&&Q<=R.height-K){fe.bindFramebuffer(V.FRAMEBUFFER,De);let Ge=R.textures[we],et=Ge.format,pt=Ge.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+we);let He=pr(Ge);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),V.readPixels(H,Q,Z,K,ge.convert(et),ge.convert(pt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let oi=G!==null?Ne.get(G).__webglFramebuffer:null;fe.bindFramebuffer(V.FRAMEBUFFER,oi);let Ut=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hg(V,Ut,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(mt),V.deleteSync(Ut),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,Q=0){let Z=Math.pow(2,-Q),K=Math.floor(R.image.width*Z),Ae=Math.floor(R.image.height*Z),Be=H!==null?H.x:0,we=H!==null?H.y:0;Oe.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,Be,we,K,Ae),fe.unbindTexture()},this.copyTextureToTexture=function(R,H,Q=null,Z=null,K=0,Ae=0){let Be,we,De,Ge,et,pt,He,mt,oi,Ut=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(Q!==null)Be=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,De=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,et=Q.min.y,pt=Q.isBox3?Q.min.z:0;else{let vt=Math.pow(2,-K);Be=Math.floor(Ut.width*vt),we=Math.floor(Ut.height*vt),R.isDataArrayTexture?De=Ut.depth:R.isData3DTexture?De=Math.floor(Ut.depth*vt):De=1,Ge=0,et=0,pt=0}Z!==null?(He=Z.x,mt=Z.y,oi=Z.z):(He=0,mt=0,oi=0);let Dt=ge.convert(H.format),Oi=ge.convert(H.type),Ve;H.isData3DTexture?(Oe.setTexture3D(H,0),Ve=V.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Oe.setTexture2DArray(H,0),Ve=V.TEXTURE_2D_ARRAY):(Oe.setTexture2D(H,0),Ve=V.TEXTURE_2D),fe.activeTexture(V.TEXTURE0),fe.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,H.flipY),fe.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),fe.pixelStorei(V.UNPACK_ALIGNMENT,H.unpackAlignment);let en=fe.getParameter(V.UNPACK_ROW_LENGTH),Mt=fe.getParameter(V.UNPACK_IMAGE_HEIGHT),Yr=fe.getParameter(V.UNPACK_SKIP_PIXELS),Fi=fe.getParameter(V.UNPACK_SKIP_ROWS),Yc=fe.getParameter(V.UNPACK_SKIP_IMAGES);fe.pixelStorei(V.UNPACK_ROW_LENGTH,Ut.width),fe.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ut.height),fe.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),fe.pixelStorei(V.UNPACK_SKIP_ROWS,et),fe.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);let mr=R.isDataArrayTexture||R.isData3DTexture,Zr=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let vt=Ne.get(R),Ri=Ne.get(H),is=Ne.get(vt.__renderTarget),Gt=Ne.get(Ri.__renderTarget);fe.bindFramebuffer(V.READ_FRAMEBUFFER,is.__webglFramebuffer),fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let vi=0;vi<De;vi++)mr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.get(R).__webglTexture,K,pt+vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.get(H).__webglTexture,Ae,oi+vi)),V.blitFramebuffer(Ge,et,Ge+Be,et+we,He,mt,He+Be,mt+we,V.DEPTH_BUFFER_BIT,V.NEAREST);fe.bindFramebuffer(V.READ_FRAMEBUFFER,null),fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ne.has(R)){let vt=Ne.get(R),Ri=Ne.get(H);fe.bindFramebuffer(V.READ_FRAMEBUFFER,D),fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let is=0;is<De;is++)mr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vt.__webglTexture,K,pt+is):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,K),Zr?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ri.__webglTexture,Ae,oi+is):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ri.__webglTexture,Ae),K!==0?V.blitFramebuffer(Ge,et,Ge+Be,et+we,He,mt,He+Be,mt+we,V.COLOR_BUFFER_BIT,V.NEAREST):Zr?V.copyTexSubImage3D(Ve,Ae,He,mt,oi+is,Ge,et,Be,we):V.copyTexSubImage2D(Ve,Ae,He,mt,Ge,et,Be,we);fe.bindFramebuffer(V.READ_FRAMEBUFFER,null),fe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Zr?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ve,Ae,He,mt,oi,Be,we,De,Dt,Oi,Ut.data):H.isCompressedArrayTexture?V.compressedTexSubImage3D(Ve,Ae,He,mt,oi,Be,we,De,Dt,Ut.data):V.texSubImage3D(Ve,Ae,He,mt,oi,Be,we,De,Dt,Oi,Ut):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,He,mt,Be,we,Dt,Oi,Ut.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,He,mt,Ut.width,Ut.height,Dt,Ut.data):V.texSubImage2D(V.TEXTURE_2D,Ae,He,mt,Be,we,Dt,Oi,Ut);fe.pixelStorei(V.UNPACK_ROW_LENGTH,en),fe.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),fe.pixelStorei(V.UNPACK_SKIP_PIXELS,Yr),fe.pixelStorei(V.UNPACK_SKIP_ROWS,Fi),fe.pixelStorei(V.UNPACK_SKIP_IMAGES,Yc),Ae===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&V.generateMipmap(Ve),fe.unbindTexture()},this.initRenderTarget=function(R){Ne.get(R).__webglFramebuffer===void 0&&Oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Oe.setTextureCube(R,0):R.isData3DTexture?Oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Oe.setTexture2DArray(R,0):Oe.setTexture2D(R,0),fe.unbindTexture()},this.resetState=function(){N=0,O=0,G=null,fe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Es={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var on=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},fT=new ro(-1,1,1,-1,0,1),vp=class extends Wt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},dT=new vp,ws=class{constructor(e){this._mesh=new Pe(dT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ta=class extends on{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rn.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ws(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ic=class extends on{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Xu=class extends on{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var qu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ee);this._width=i.width,this._height=i.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ta(Es),this.copyPass.material.blending=Mi,this.timer=new Nl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ic!==void 0&&(o instanceof ic?i=!0:o instanceof Xu&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yu=class extends on{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var Zg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ea=class s extends on{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,o,{type:Jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new kt(r,o,{type:Jt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new kt(r,o,{type:Jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Zg;this.highPassUniforms=rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rn.clone(Es.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader,premultipliedAlpha:!0,blending:Js,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new ws(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Ee(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new Rt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ea.BlurDirectionX=new Ee(1,0);Ea.BlurDirectionY=new Ee(0,1);var nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Zu=class extends on{constructor(){super(),this.isOutputPass=!0,this.uniforms=rn.clone(nc.uniforms),this.material=new ha({name:nc.name,uniforms:this.uniforms,vertexShader:nc.vertexShader,fragmentShader:nc.fragmentShader}),this._fsQuad=new ws(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Hl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},rc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},$u={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function $g(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=pT(e),i=t.length,n=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new B(Math.cos(l),Math.sin(l),0).normalize();n[o*4]=(c.x*.5+.5)*255,n[o*4+1]=(c.y*.5+.5)*255,n[o*4+2]=127,n[o*4+3]=255}let r=new qs(n,e,e);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}function pT(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,i=Array(t).fill(0),n=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(n===-1&&r===e?(r=e-2,n=0):(r===e&&(r=0),n<0&&(n=e-1)),i[n*e+r]!==0){r-=2,n++;continue}else i[n*e+r]=o++;r++,n--}return i}var oc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:yp(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ee},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function yp(s,e,t){let i=mT(s,e,t),n="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=i[r];n+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return n}function mT(s,e,t){let i=[];for(let n=0;n<s;n++){let r=2*Math.PI*e*n/s,o=Math.pow(n/(s-1),t);i.push(new B(Math.cos(r),Math.sin(r),o))}return i}var Ju=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,n,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,u=c-f,p=e-d,x=t-u,m,g;p>x?(m=1,g=0):(m=0,g=1);let v=p-m+h,T=x-g+h,y=p-1+2*h,b=x-1+2*h,E=l&255,_=c&255,S=this.perm[E+this.perm[_]]%12,w=this.perm[E+m+this.perm[_+g]]%12,M=this.perm[E+1+this.perm[_+1]]%12,P=.5-p*p-x*x;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[S],p,x));let I=.5-v*v-T*T;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[w],v,T));let U=.5-y*y-b*b;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[M],y,b)),70*(i+n+r)}noise3d(e,t,i){let n,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),d=Math.floor(i+c),u=1/6,p=(h+f+d)*u,x=h-p,m=f-p,g=d-p,v=e-x,T=t-m,y=i-g,b,E,_,S,w,M;v>=T?T>=y?(b=1,E=0,_=0,S=1,w=1,M=0):v>=y?(b=1,E=0,_=0,S=1,w=0,M=1):(b=0,E=0,_=1,S=1,w=0,M=1):T<y?(b=0,E=0,_=1,S=0,w=1,M=1):v<y?(b=0,E=1,_=0,S=0,w=1,M=1):(b=0,E=1,_=0,S=1,w=1,M=0);let P=v-b+u,I=T-E+u,U=y-_+u,D=v-S+2*u,F=T-w+2*u,N=y-M+2*u,O=v-1+3*u,G=T-1+3*u,k=y-1+3*u,C=h&255,q=f&255,ae=d&255,_e=this.perm[C+this.perm[q+this.perm[ae]]]%12,X=this.perm[C+b+this.perm[q+E+this.perm[ae+_]]]%12,W=this.perm[C+S+this.perm[q+w+this.perm[ae+M]]]%12,j=this.perm[C+1+this.perm[q+1+this.perm[ae+1]]]%12,ce=.6-v*v-T*T-y*y;ce<0?n=0:(ce*=ce,n=ce*ce*this._dot3(this.grad3[_e],v,T,y));let le=.6-P*P-I*I-U*U;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[X],P,I,U));let ve=.6-D*D-F*F-N*N;ve<0?o=0:(ve*=ve,o=ve*ve*this._dot3(this.grad3[W],D,F,N));let Ze=.6-O*O-G*G-k*k;return Ze<0?a=0:(Ze*=Ze,a=Ze*Ze*this._dot3(this.grad3[j],O,G,k)),32*(n+r+o+a)}noise4d(e,t,i,n){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,d,u,p,x=(e+t+i+n)*l,m=Math.floor(e+x),g=Math.floor(t+x),v=Math.floor(i+x),T=Math.floor(n+x),y=(m+g+v+T)*c,b=m-y,E=g-y,_=v-y,S=T-y,w=e-b,M=t-E,P=i-_,I=n-S,U=w>M?32:0,D=w>P?16:0,F=M>P?8:0,N=w>I?4:0,O=M>I?2:0,G=P>I?1:0,k=U+D+F+N+O+G,C=o[k][0]>=3?1:0,q=o[k][1]>=3?1:0,ae=o[k][2]>=3?1:0,_e=o[k][3]>=3?1:0,X=o[k][0]>=2?1:0,W=o[k][1]>=2?1:0,j=o[k][2]>=2?1:0,ce=o[k][3]>=2?1:0,le=o[k][0]>=1?1:0,ve=o[k][1]>=1?1:0,Ze=o[k][2]>=1?1:0,Re=o[k][3]>=1?1:0,Xe=w-C+c,Ue=M-q+c,he=P-ae+c,Te=I-_e+c,We=w-X+2*c,$=M-W+2*c,$e=P-j+2*c,nt=I-ce+2*c,xt=w-le+3*c,tt=M-ve+3*c,St=P-Ze+3*c,At=I-Re+3*c,V=w-1+4*c,ft=M-1+4*c,ot=P-1+4*c,qe=I-1+4*c,fe=m&255,Qe=g&255,Ne=v&255,Oe=T&255,L=a[fe+a[Qe+a[Ne+a[Oe]]]]%32,A=a[fe+C+a[Qe+q+a[Ne+ae+a[Oe+_e]]]]%32,Y=a[fe+X+a[Qe+W+a[Ne+j+a[Oe+ce]]]]%32,ue=a[fe+le+a[Qe+ve+a[Ne+Ze+a[Oe+Re]]]]%32,re=a[fe+1+a[Qe+1+a[Ne+1+a[Oe+1]]]]%32,me=.6-w*w-M*M-P*P-I*I;me<0?h=0:(me*=me,h=me*me*this._dot4(r[L],w,M,P,I));let xe=.6-Xe*Xe-Ue*Ue-he*he-Te*Te;xe<0?f=0:(xe*=xe,f=xe*xe*this._dot4(r[A],Xe,Ue,he,Te));let J=.6-We*We-$*$-$e*$e-nt*nt;J<0?d=0:(J*=J,d=J*J*this._dot4(r[Y],We,$,$e,nt));let te=.6-xt*xt-tt*tt-St*St-At*At;te<0?u=0:(te*=te,u=te*te*this._dot4(r[ue],xt,tt,St,At));let de=.6-V*V-ft*ft-ot*ot-qe*qe;return de<0?p=0:(de*=de,p=de*de*this._dot4(r[re],V,ft,ot,qe)),27*(h+f+d+u+p)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}_dot4(e,t,i,n,r){return e[0]*t+e[1]*i+e[2]*n+e[3]*r}};var wa=class s extends on{constructor(e,t,i=512,n=512,r,o,a){super(),this.width=i,this.height=n,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$g(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new kt(this.width,this.height,{type:Jt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Rt({defines:Object.assign({},sc.defines),uniforms:rn.clone(sc.uniforms),vertexShader:sc.vertexShader,fragmentShader:sc.fragmentShader,blending:Mi,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Rl,this.normalMaterial.blending=Mi,this.pdMaterial=new Rt({defines:Object.assign({},oc.defines),uniforms:rn.clone(oc.uniforms),vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Rt({defines:Object.assign({},rc.defines),uniforms:rn.clone(rc.uniforms),vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader,blending:Mi}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Rt({uniforms:rn.clone(Es.uniforms),vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Fl,blendDst:ao,blendEquation:Yn,blendSrcAlpha:Ol,blendDstAlpha:ao,blendEquationAlpha:Yn}),this.blendMaterial=new Rt({uniforms:rn.clone($u.uniforms),vertexShader:$u.vertexShader,fragmentShader:$u.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Kh,blendSrc:Fl,blendDst:ao,blendEquation:Yn,blendSrcAlpha:Ol,blendDstAlpha:ao,blendEquationAlpha:Yn}),this._fsQuad=new ws(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let n=new ls;n.format=us,n.type=Qs,this.normalRenderTarget=new kt(this.width,this.height,{minFilter:ti,magFilter:ti,type:Jt,depthTexture:n})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let i=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=yp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Mi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Mi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Mi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Mi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,n,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,i,n,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,r=t.clearAlpha||r,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ju,i=e*e*4,n=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;n[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,n[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,n[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,n[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new qs(n,e,e,In,Wi);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}};wa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ke=null,tr=null,er=null,As=null,Rr=!1,Ku=null,Jg=0,Kg=[146.83,155.56,185,196,220,233.08,261.63,293.66,311.13,369.99];function Qu(s=2){let e=ke.createBuffer(1,ke.sampleRate*s,ke.sampleRate),t=e.getChannelData(0),i=0;for(let n=0;n<t.length;n++){let r=Math.random()*2-1;i=(i+.02*r)/1.02,t[n]=i*3.5}return e}function gT(){ke=new(window.AudioContext||window.webkitAudioContext),tr=ke.createGain(),tr.gain.value=0;let s=ke.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,tr.connect(s).connect(ke.destination),er=ke.createGain(),er.gain.value=.9,er.connect(tr),As=ke.createGain(),As.gain.value=.8,As.connect(tr);let e=ke.createDelay(1.5);e.delayTime.value=.42;let t=ke.createGain();t.gain.value=.33;let i=ke.createBiquadFilter();i.type="lowpass",i.frequency.value=2200,e.connect(i).connect(t).connect(e);let n=ke.createGain();n.gain.value=.35,e.connect(n).connect(er),er.echo=e;let r=ke.createBufferSource();r.buffer=Qu(4),r.loop=!0;let o=ke.createBiquadFilter();o.type="bandpass",o.frequency.value=420,o.Q.value=.7;let a=ke.createGain();a.gain.value=.16;let l=ke.createOscillator();l.frequency.value=.07;let c=ke.createGain();c.gain.value=260,l.connect(c).connect(o.frequency);let h=ke.createOscillator();h.frequency.value=.11;let f=ke.createGain();f.gain.value=.07,h.connect(f).connect(a.gain),r.connect(o).connect(a).connect(er),r.start(),l.start(),h.start();let d=ke.createBiquadFilter();d.type="lowpass",d.frequency.value=520;let u=ke.createGain();u.gain.value=.05,d.connect(u).connect(er);for(let[m,g,v]of[[73.42,"sine",0],[110,"triangle",4],[146.83,"sine",-3]]){let T=ke.createOscillator();T.type=g,T.frequency.value=m,T.detune.value=v,T.connect(d),T.start()}let p=ke.createOscillator();p.frequency.value=.18;let x=ke.createGain();x.gain.value=.015,p.connect(x).connect(u.gain),p.start()}function _T(s,e=0,t=.12){let i=ke.currentTime+e,n=ke.createGain();n.gain.setValueAtTime(0,i),n.gain.linearRampToValueAtTime(t,i+.006),n.gain.exponentialRampToValueAtTime(8e-4,i+1.8);let r=ke.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(s*9,i),r.frequency.exponentialRampToValueAtTime(s*1.6,i+.6);for(let[o,a,l]of[[1,1,"triangle"],[2,.35,"sine"],[3.01,.12,"sine"]]){let c=ke.createOscillator();c.type=l,c.frequency.value=s*o;let h=ke.createGain();h.gain.value=a,c.connect(h).connect(r),c.start(i),c.stop(i+2)}r.connect(n),n.connect(er),n.connect(er.echo)}function jg(){if(!Rr)return;let s=2+(Math.random()*5|0),e=2+(Math.random()*4|0),t=0;for(let i=0;i<e;i++)_T(Kg[s],t,.09+Math.random()*.05),t+=[.28,.42,.56][Math.random()*3|0],s=Math.max(0,Math.min(Kg.length-1,s+[-2,-1,-1,1,1,2][Math.random()*6|0]));Ku=setTimeout(jg,(t+2.2+Math.random()*4)*1e3)}function uo(s,e,t,i,n){s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(n,e+t),s.gain.exponentialRampToValueAtTime(5e-4,e+t+i)}var Qg={tick(){let s=ke.currentTime;if(s-Jg<.045)return;Jg=s;let e=ke.createOscillator(),t=ke.createGain();e.type="sine",e.frequency.value=1700+Math.random()*500,uo(t,s,.002,.03,.025),e.connect(t).connect(As),e.start(s),e.stop(s+.05)},arrive(){[0,.11].forEach((s,e)=>{let t=ke.currentTime+s,i=ke.createOscillator(),n=ke.createGain();i.type="sine",i.frequency.value=e?880:659.25,uo(n,t,.01,.6,.07),i.connect(n).connect(As),i.start(t),i.stop(t+.7)})},poke(){let s=ke.currentTime,e=ke.createOscillator(),t=ke.createGain();e.type="sine",e.frequency.setValueAtTime(260,s),e.frequency.exponentialRampToValueAtTime(620,s+.12),e.frequency.exponentialRampToValueAtTime(330,s+.3),uo(t,s,.01,.32,.12),e.connect(t).connect(As),e.start(s),e.stop(s+.4)},pop(){let s=ke.currentTime,e=ke.createBufferSource();e.buffer=Qu(.3);let t=ke.createBiquadFilter();t.type="highpass",t.frequency.value=900;let i=ke.createGain();uo(i,s,.001,.12,.5),e.connect(t).connect(i).connect(As),e.start(s),e.stop(s+.2)},beam(){let s=ke.currentTime,e=ke.createBufferSource();e.buffer=Qu(3);let t=ke.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(3200,s+1.2);let i=ke.createGain();uo(i,s,.25,1.8,.35),e.connect(t).connect(i).connect(As),e.start(s),e.stop(s+2.4),[587.33,739.99,880,1174.66].forEach((n,r)=>{let o=ke.createOscillator(),a=ke.createGain();o.type="sine",o.frequency.value=n,uo(a,s+.3+r*.12,.02,1.6,.05),o.connect(a).connect(As),o.connect(a),o.start(s),o.stop(s+3)})},whoosh(){let s=ke.currentTime,e=ke.createBufferSource();e.buffer=Qu(1);let t=ke.createBiquadFilter();t.type="bandpass",t.Q.value=1.2,t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(1400,s+.5);let i=ke.createGain();uo(i,s,.15,.5,.18),e.connect(t).connect(i).connect(As),e.start(s),e.stop(s+.8)}},an={get on(){return Rr},toggle(){return ke||gT(),Rr=!Rr,Rr?(ke.resume(),tr.gain.cancelScheduledValues(ke.currentTime),tr.gain.linearRampToValueAtTime(.55,ke.currentTime+1.2),clearTimeout(Ku),Ku=setTimeout(jg,900)):(tr.gain.cancelScheduledValues(ke.currentTime),tr.gain.linearRampToValueAtTime(0,ke.currentTime+.4),clearTimeout(Ku)),Rr},play(s){if(!(!Rr||!ke||ke.state!=="running"))try{Qg[s]&&Qg[s]()}catch{}},pause(s){ke&&(s?ke.suspend():Rr&&ke.resume())}};var Aa="adham107harp",Dn=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),e_={TypeScript:"#3178c6",JavaScript:"#e9c84c",Python:"#3572A5","C++":"#f34b7d",C:"#8a8a8a","C#":"#178600",Java:"#b07219",HTML:"#e34c26",CSS:"#663399"};function t_(s){let e=(Date.now()-new Date(s).getTime())/1e3,t=[[31536e3,"year"],[2592e3,"month"],[604800,"week"],[86400,"day"],[3600,"hour"],[60,"minute"]];for(let[i,n]of t)if(e>=i){let r=Math.floor(e/i);return`${r} ${n}${r>1?"s":""} ago`}return"just now"}async function Sp(s){let e="gh:"+s;try{let n=JSON.parse(sessionStorage.getItem(e)||"null");if(n&&Date.now()-n.at<9e5)return n.data}catch{}let t=await fetch(s,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(t.status);let i=await t.json();try{sessionStorage.setItem(e,JSON.stringify({at:Date.now(),data:i}))}catch{}return i}async function i_(s){if(s)try{let[e,t,i]=await Promise.all([Sp(`https://api.github.com/users/${Aa}`),Sp(`https://api.github.com/users/${Aa}/repos?per_page=100&sort=pushed`),Sp(`https://api.github.com/users/${Aa}/events/public?per_page=30`).catch(()=>[])]),n=t.filter(l=>!l.fork&&l.name!==Aa),r=n.reduce((l,c)=>l+c.stargazers_count,0),o={};n.forEach(l=>{l.language&&(o[l.language]=(o[l.language]||0)+1)});let a=i.filter(l=>l.type==="PushEvent").slice(0,3);s.innerHTML=`
      <div class="gh-stats">
        <span><b>${Dn(e.public_repos)}</b> public repos</span>
        <span><b>${Dn(e.followers)}</b> followers</span>
        <span><b>${Dn(r)}</b> stars</span>
      </div>
      <ul class="gh-repos">${n.slice(0,4).map(l=>`
        <li><a href="${Dn(l.html_url)}" target="_blank" rel="noopener">${Dn(l.name)}</a>
          <span class="gh-meta">${l.language?`<i style="background:${Dn(e_[l.language]||"#9fb0e8")}"></i>${Dn(l.language)} \xB7 `:""}pushed ${Dn(t_(l.pushed_at))}</span></li>`).join("")}
      </ul>
      ${a.length?`<p class="gh-sub">Latest commits</p><ul class="gh-commits">${a.map(l=>{let c=(l.payload.commits||[]).slice(-1)[0];return`<li><span class="mono">${Dn(l.repo.name.split("/")[1])}</span> ${Dn((c&&c.message||"pushed").split(`
`)[0]).slice(0,80)} <em>${Dn(t_(l.created_at))}</em></li>`}).join("")}</ul>`:""}
      <p class="gh-langs">${Object.entries(o).sort((l,c)=>c[1]-l[1]).map(([l])=>`<span><i style="background:${Dn(e_[l]||"#9fb0e8")}"></i>${Dn(l)}</span>`).join("")}</p>`,s.classList.add("ready")}catch{s.innerHTML=`<p class="gh-off">Live data is resting (GitHub's API limit). Everything is at <a href="https://github.com/${Aa}" target="_blank" rel="noopener">github.com/${Aa}</a>.</p>`}}function ir(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function u_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fc={duration:.5,overwrite:!1,delay:0},Fp,Di,Vt,Jn=1e8,Ct=1/Jn,Cp=Math.PI*2,xT=Cp/4,vT=0,f_=Math.sqrt,yT=Math.cos,ST=Math.sin,_i=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},uf=function(e){return typeof e>"u"},Ps=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},Bp=function(){return typeof window<"u"},ju=function(e){return Kt(e)||_i(e)},d_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yi=Array.isArray,MT=/random\([^)]+\)/g,bT=/,\s*/g,n_=/(?:-?\.?\d|\.)+/gi,zp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,go=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kp=/[+-]=-?[.\d]+/,TT=/[^,'"\[\]\s]+/gi,ET=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Rs,Pp,Hp,Nn={},sf={},p_,m_=function(e){return(sf=Ca(e,Nn))&&Zi},ff=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},dc=function(e,t){return!t&&console.warn(e)},g_=function(e,t){return e&&(Nn[e]=t)&&sf&&(sf[e]=t)||Nn},pc=function(){return 0},wT={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},AT={suppressEvents:!0},Vp={},Pr=[],Ip={},__,vn={},bp={},s_=30,tf=[],Gp="",Wp=function(e){var t=e[0],i,n;if(Ps(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=tf.length;n--&&!tf[n].targetTest(t););i=tf[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Zp(e[n],i)))||e.splice(n,1);return e},Ir=function(e){return e._gsap||Wp(Kn(e))[0]._gsap},Xp=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():uf(i)&&e.getAttribute&&e.getAttribute(t)||i},ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},_o=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},RT=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},rf=function(){var e=Pr.length,t=Pr.slice(0),i,n;for(Ip={},Pr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},qp=function(e){return!!(e._initted||e._startAt||e.add)},x_=function(e,t,i,n){Pr.length&&!Di&&rf(),e.render(t,i,n||!!(Di&&t<0&&qp(e))),Pr.length&&!Di&&rf()},v_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(TT).length<2?t:_i(e)?e.trim():e},y_=function(e){return e},Un=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},CT=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Ca=function(e,t){for(var i in t)e[i]=t[i];return e},r_=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ps(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},of=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},cc=function(e){var t=e.parent||qt,i=e.keyframes?CT(Yi(e.keyframes)):Un;if(Sn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},PT=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},S_=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},df=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},IT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dp=function(e,t,i,n){return e._startAt&&(Di?e._startAt.revert(ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},DT=function s(e){return!e||e._ts&&s(e.parent)},o_=function(e){return e._repeat?Pa(e._tTime,e=e.duration()+e._rDelay)*e:0},Pa=function(e,t){var i=Math.floor(e=Xt(e/t));return e&&i===e?i-1:i},af=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},pf=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},mf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),pf(e),i._dirty||fo(i,e)),e},M_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=af(e.rawTime(),t),(!t._dur||xc(0,t.totalDuration(),i)-t._tTime>Ct)&&t.render(i,!0)),fo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ct}},Cs=function(e,t,i,n){return t.parent&&Dr(t),t._start=Xt((sr(i)?i:!i&&lf(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==qt?$n(e,i,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),S_(e,t,"_first","_last",e._sort?"_start":0),lf(t)||(e._recent=t),n||M_(e,t),e._ts<0&&mf(e,e._tTime),e},b_=function(e,t){return(Nn.ScrollTrigger||ff("scrollTrigger",t))&&Nn.ScrollTrigger.create(t,e)},T_=function(e,t,i,n,r){if(Kp(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Di&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&__!==yn.frame)return Pr.push(e),e._lazy=[r,n],1},LT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},lf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},NT=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&LT(e)&&!(!e._initted&&lf(e))||(e._ts<0||e._dp._ts<0)&&!lf(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=xc(0,e._tDur,t),h=Pa(l,a),e._yoyo&&h&1&&(o=1-o),h!==Pa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Di||n||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&T_(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?Ct:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Dp(e,t,i,!0),e._onUpdate&&!i&&Ln(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Dr(e,1),!i&&!Di&&(Ln(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},UT=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ia=function(e,t,i,n){var r=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Xt(o*(r+1)+e._rDelay*r):o,a>0&&!n&&mf(e,e._tTime=e._tDur*a),e.parent&&pf(e),i||fo(e.parent,e),e},a_=function(e){return e instanceof qi?fo(e):Ia(e,e._dur)},OT={_start:0,endTime:pc,totalDuration:pc},$n=function s(e,t,i){var n=e.labels,r=e._recent||OT,o=e.duration()>=Jn?r.endTime(!1):e._dur,a,l,c;return _i(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Yi(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},hc=function(e,t,i){var n=sr(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;o.immediateRender=Sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ii(t[0],o,t[r+1])},Lr=function(e,t){return e||e===0?t(e):t},xc=function(e,t,i){return i<e?e:i>t?t:i},Li=function(e,t){return!_i(e)||!(t=ET.exec(e))?"":t[1]},FT=function(e,t,i){return Lr(i,function(n){return xc(e,t,n)})},Lp=[].slice,E_=function(e,t){return e&&Ps(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ps(e[0]))&&!e.nodeType&&e!==Rs},BT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return _i(n)&&!t||E_(n,1)?(r=i).push.apply(r,Kn(n)):i.push(n)})||i},Kn=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):_i(e)&&!i&&(Pp||!Da())?Lp.call((t||Hp).querySelectorAll(e),0):Yi(e)?BT(e,i):E_(e)?Lp.call(e,0):e?[e]:[]},Np=function(e){return e=Kn(e)[0]||dc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Kn(t,i.querySelectorAll?i:i===e?dc("Invalid scope")||Hp.createElement("div"):e)}},w_=function(e){return e.sort(function(){return .5-Math.random()})},A_=function(e){if(Kt(e))return e;var t=Ps(e)?e:{each:e},i=po(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,f=n;return _i(n)?h=f={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],f=n[1]),function(d,u,p){var x=(p||t).length,m=o[x],g,v,T,y,b,E,_,S,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,Jn])[1],!w){for(_=-Jn;_<(_=p[w++].getBoundingClientRect().left)&&w<x;);w<x&&w--}for(m=o[x]=[],g=l?Math.min(w,x)*h-.5:n%w,v=w===Jn?0:l?x*f/w-.5:n/w|0,_=0,S=Jn,E=0;E<x;E++)T=E%w-g,y=v-(E/w|0),m[E]=b=c?Math.abs(c==="y"?y:T):f_(T*T+y*y),b>_&&(_=b),b<S&&(S=b);n==="random"&&w_(m),m.max=_-S,m.min=S,m.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(w>x?x-1:c?c==="y"?x/w:w:Math.max(w,x/w))||0)*(n==="edges"?-1:1),m.b=x<0?r-x:r,m.u=Li(t.amount||t.each)||0,i=i&&x<0?KT(i):i}return x=(m[d]-m.min)/m.max||0,Xt(m.b+(i?i(x):x)*m.v)+m.u}},Up=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Xt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(sr(i)?0:Li(i))}},R_=function(e,t){var i=Yi(e),n,r;return!i&&Ps(e)&&(n=i=e.radius||Jn,e.values?(e=Kn(e.values),(r=!sr(e[0]))&&(n*=n)):e=Up(e.increment)),Lr(t,i?Kt(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Jn,h=0,f=e.length,d,u;f--;)r?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!n||c<=n?e[h]:o,r||h===o||sr(o)?h:h+Li(o)}:Up(e))},C_=function(e,t,i,n){return Lr(Yi(e)?!t:i===!0?!!(i=0):!n,function(){return Yi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},zT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},kT=function(e,t){return function(i){return e(parseFloat(i))+(t||Li(i))}},HT=function(e,t,i){return I_(e,t,0,1,i)},P_=function(e,t,i){return Lr(i,function(n){return e[~~t(n)]})},VT=function s(e,t,i){var n=t-e;return Yi(e)?P_(e,s(0,e.length),t):Lr(i,function(r){return(n+(r-e)%n)%n+e})},GT=function s(e,t,i){var n=t-e,r=n*2;return Yi(e)?P_(e,s(0,e.length-1),t):Lr(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},La=function(e){return e.replace(MT,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(bT);return C_(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},I_=function(e,t,i,n,r){var o=t-e,a=n-i;return Lr(r,function(l){return i+((l-e)/o*a||0)})},WT=function s(e,t,i,n){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=_i(e),a={},l,c,h,f,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Yi(e)&&!Yi(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(s(e[c-1],e[c]));f--,r=function(p){p*=f;var x=Math.min(d,~~p);return h[x](p-x)},i=t}else n||(e=Ca(Yi(e)?[]:{},e));if(!h){for(l in t)$p.call(a,e,l,"get",t[l]);r=function(p){return em(p,a)||(o?e.p:e)}}}return Lr(i,r)},l_=function(e,t,i){var n=e.labels,r=Jn,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ln=function(e,t,i){var n=e.vars,r=n[t],o=Vt,a=e._ctx,l,c,h;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Pr.length&&rf(),a&&(Vt=a),h=l?r.apply(c,l):r.call(c),Vt=o,h},ac=function(e){return Dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Di),e.progress()<1&&Ln(e,"onInterrupt"),e},Ra,D_=[],L_=function(e){if(e)if(e=!e.name&&e.default||e,Bp()||e.headless){var t=e.name,i=Kt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:pc,render:em,add:$p,kill:aE,modifier:oE,rawVars:0},o={targetTest:0,get:0,getSetter:gf,aliases:{},register:0};if(Da(),e!==n){if(vn[t])return;Un(n,Un(of(e,r),o)),Ca(n.prototype,Ca(r,of(e,o))),vn[n.prop=t]=n,e.targetTest&&(tf.push(n),Vp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}g_(t,n),e.register&&e.register(Zi,n,cn)}else D_.push(e)},Nt=255,lc={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Tp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Nt+.5|0},N_=function(e,t,i){var n=e?sr(e)?[e>>16,e>>8&Nt,e&Nt]:0:lc.black,r,o,a,l,c,h,f,d,u,p;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),lc[e])n=lc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Nt,n&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)==="hsl"){if(n=p=e.match(n_),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Tp(l+1/3,r,o),n[1]=Tp(l,r,o),n[2]=Tp(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(zp),i&&n.length<4&&(n[3]=1),n}else n=e.match(n_)||lc.transparent;n=n.map(Number)}return t&&!p&&(r=n[0]/Nt,o=n[1]/Nt,a=n[2]/Nt,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},U_=function(e){var t=[],i=[],n=-1;return e.split(nr).forEach(function(r){var o=r.match(go)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},c_=function(e,t,i){var n="",r=(e+n).match(nr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return e;if(r=r.map(function(d){return(d=N_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=U_(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(nr,"1").split(go),f=c.length-1;a<f;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=e.split(nr),f=c.length-1;a<f;a++)n+=c[a]+r[a];return n+c[f]},nr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in lc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),XT=/hsl[a]?\(/,Yp=function(e){var t=e.join(" "),i;if(nr.lastIndex=0,nr.test(t))return i=XT.test(t),e[1]=c_(e[1],i),e[0]=c_(e[0],i,U_(e[1])),!0},mc,yn=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,f,d,u,p=function x(m){var g=s()-n,v=m===!0,T,y,b,E;if((g>e||g<0)&&(i+=g-t),n+=g,b=n-i,T=b-o,(T>0||v)&&(E=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(x)),y)for(u=0;u<a.length;u++)a[u](b,d,E,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){p_&&(!Pp&&Bp()&&(Rs=Pp=window,Hp=Rs.document||{},Nn.gsap=Zi,(Rs.gsapVersions||(Rs.gsapVersions=[])).push(Zi.version),m_(sf||Rs.GreenSockGlobals||!Rs.gsap&&Rs||{}),D_.forEach(L_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},mc=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),mc=0,c=pc},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,g,v){var T=g?function(y,b,E,_){m(y,b,E,_),f.remove(T)}:m;return f.remove(m),a[v?"unshift":"push"](T),Da(),T},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},f})(),Da=function(){return!mc&&yn.wake()},_t={},qT=/^[\d.\-M][\d.\-,\s]/,YT=/["']/g,ZT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(YT,"").trim():+c,n=l.substr(a+1).trim();return t},$T=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},JT=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ZT(t[1])]:$T(e).split(",").map(v_)):_t._CE&&qT.test(e)?_t._CE("",e):i},KT=function(e){return function(t){return 1-e(1-t)}},po=function(e,t){return e&&(Kt(e)?e:_t[e]||JT(e))||t},xo=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return ln(e,function(a){_t[a]=Nn[a]=r,_t[o=a.toLowerCase()]=i;for(var l in r)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=r[l]}),r},O_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ep=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/Cp*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*ST((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:O_(a);return r=Cp/r,l.config=function(c,h){return s(e,c,h)},l},wp=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:O_(i);return n.config=function(r){return s(e,r)},n};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;xo(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;xo("Elastic",Ep("in"),Ep("out"),Ep());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};xo("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);xo("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});xo("Circ",function(s){return-(f_(1-s*s)-1)});xo("Sine",function(s){return s===1?1:-yT(s*xT)+1});xo("Back",wp("in"),wp("out"),wp());_t.SteppedEase=_t.steps=Nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-Ct;return function(a){return((n*xc(0,o,a)|0)+r)*i}}};fc.ease=_t["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gp+=s+","+s+"Params,"});var Zp=function(e,t){this.id=vT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xp,this.set=t?t.getSetter:gf},gc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),mc||yn.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Da(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(mf(this,i),!r._dp||r.parent||M_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Cs(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ct||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),x_(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+o_(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+o_(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Pa(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?af(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ct?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(xc(-Math.abs(this._delay),a,r),n!==!1),pf(this),IT(this)},e.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Da(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Ct,o;if(r)for(this._tTime-=Ct,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+Ct){r=!1;break}o=o._next}this.totalTime(n,r)}return this},e.startTime=function(i){if(arguments.length){this._start=Xt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Cs(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Sn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?af(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=AT);var n=Di;return Di=i,qp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Di=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,a_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,a_(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime($n(this,i),Sn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Sn(n)),this._dur||(this._zTime=-Ct),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Ct)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=Kt(i)?i:y_,l=function(){var h=n.then;n.then=null,r&&r(),Kt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){ac(this)},s})();Un(gc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var qi=(function(s){u_(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Sn(i.sortChildren),qt&&Cs(i.parent||qt,ir(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&b_(ir(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return hc(0,arguments,this),this},t.from=function(n,r,o){return hc(1,arguments,this),this},t.fromTo=function(n,r,o,a){return hc(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,cc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ii(n,r,$n(this,o),1),this},t.call=function(n,r,o){return Cs(this,ii.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ii(n,o,$n(this,l)),this},t.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,cc(o).immediateRender=Sn(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},t.staggerFromTo=function(n,r,o,a,l,c,h,f){return a.startAt=o,cc(a).immediateRender=Sn(a.immediateRender),this.staggerTo(n,r,a,l,c,h,f)},t.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Xt(n),f=this._zTime<0!=n<0&&(this._initted||!c),d,u,p,x,m,g,v,T,y,b,E,_;if(this!==qt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),d=h,y=this._start,T=this._ts,g=!T,f&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(d=Xt(h%m),h===l?(x=this._repeat,d=c):(b=Xt(h/m),x=~~b,x&&x===b&&(d=c,x--),d>c&&(d=c)),b=Pa(this._tTime,m),!a&&this._tTime&&b!==x&&this._tTime-b*m-this._dur<=0&&(b=x),E&&x&1&&(d=c-d,_=1),x!==b&&!this._lock){var S=E&&b&1,w=S===(E&&x&1);if(x<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Xt(x*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=x),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=UT(this,Xt(a),Xt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!b&&(Ln(this,"onStart"),this._tTime!==h))return this;if(d>=a&&n>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-Ct);break}}u=p}else{u=this._last;for(var M=n<0?n:d;u;){if(p=u._prev,(u._act||M<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(M-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(M-u._start)*u._ts,r,o||Di&&qp(u)),d!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=M?-Ct:Ct);break}}u=p}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-Ct)._zTime=d>=a?1:-1,this._ts))return this._start=y,pf(this),this.render(n,r,o);this._onUpdate&&!r&&Ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Dr(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(Ln(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(sr(r)||(r=$n(this,r,n)),!(n instanceof gc)){if(Yi(n))return n.forEach(function(a){return o.add(a,r)}),this;if(_i(n))return this.addLabel(n,r);if(Kt(n))n=ii.delayedCall(0,n);else return this}return this!==n?Cs(this,n,r):this},t.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ii?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return _i(n)?this.removeLabel(n):Kt(n)?this.killTweensOf(n):(n.parent===this&&df(this,n),n===this._recent&&(this._recent=this._last),fo(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(yn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=$n(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var a=ii.delayedCall(0,r||pc,o);return a.data="isPause",this._hasPause=1,Cs(this,a,$n(this,n))},t.removePause=function(n){var r=this._first;for(n=$n(this,n);r;)r._start===n&&r.data==="isPause"&&Dr(r),r=r._next},t.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Cr!==a[l]&&a[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],a=Kn(n),l=this._first,c=sr(r),h;l;)l instanceof ii?RT(l._targets,a)&&(c?(!Cr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,a=$n(o,n),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,p=ii.to(o,Un({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ct,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Ia(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,f||[])}},r));return d?p.render(0):p},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,Un({startAt:{time:$n(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),l_(this,$n(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),l_(this,$n(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Xt(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return fo(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),fo(this)},t.totalDuration=function(n){var r=0,o=this,a=o._last,l=Jn,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Cs(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Xt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ia(o,o===qt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(qt._ts&&(x_(qt,af(n,qt)),__=yn.frame),yn.frame>=s_){s_+=Mn.autoSleep||120;var r=qt._first;if((!r||!r._ts)&&Mn.autoSleep&&yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||yn.sleep()}}},e})(gc);Un(qi.prototype,{_lock:0,_hasPause:0,_forcing:0});var QT=function(e,t,i,n,r,o,a){var l=new cn(this._pt,e,t,0,1,jp,null,r),c=0,h=0,f,d,u,p,x,m,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=La(n)),o&&(v=[i,n],o(v,e,t),i=v[0],n=v[1]),d=i.match(Mp)||[];f=Mp.exec(n);)p=f[0],x=n.substring(c,f.index),u?u=(u+1)%5:x.substr(-5)==="rgba("&&(u=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?_o(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=Mp.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(kp.test(n)||g)&&(l.e=0),this._pt=l,l},$p=function(e,t,i,n,r,o,a,l,c,h){Kt(n)&&(n=n(r||0,e,o));var f=e[t],d=i!=="get"?i:Kt(f)?c?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=Kt(f)?c?nE:B_:Qp,p;if(_i(n)&&(~n.indexOf("random(")&&(n=La(n)),n.charAt(1)==="="&&(p=_o(d,n)+(Li(d)||0),(p||p===0)&&(n=p))),!h||d!==n||Op)return!isNaN(d*n)&&n!==""?(p=new cn(this._pt,e,t,+d||0,n-(d||0),typeof f=="boolean"?rE:z_,0,u),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&ff(t,n),QT.call(this,e,t,d,n,u,l||Mn.stringFilter,c))},jT=function(e,t,i,n,r){if(Kt(e)&&(e=uc(e,r,t,i,n)),!Ps(e)||e.style&&e.nodeType||Yi(e)||d_(e))return _i(e)?uc(e,r,t,i,n):e;var o={},a;for(a in e)o[a]=uc(e[a],r,t,i,n);return o},Jp=function(e,t,i,n,r,o){var a,l,c,h;if(vn[e]&&(a=new vn[e]).init(r,a.rawVars?t[e]:jT(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new cn(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==Ra))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Cr,Op,Kp=function s(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,f=n.yoyoEase,d=n.keyframes,u=n.autoRevert,p=e._dur,x=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,T=e._overwrite==="auto"&&!Fp,y=e.timeline,b=n.easeReverse||f,E,_,S,w,M,P,I,U,D,F,N,O,G;if(y&&(!d||!r)&&(r="none"),e._ease=po(r,fc.ease),e._rEase=b&&(po(b)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||d&&!n.stagger){if(U=m[0]?Ir(m[0]).harness:0,O=U&&n[U.prop],E=of(n,Vp),x&&(x._zTime<0&&x.progress(1),t<0&&h&&a&&!u?x.render(-1,!0):x.revert(h&&p?ef:wT),x._lazy=0),o){if(Dr(e._startAt=ii.set(m,Un({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return Ln(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Di||!a&&!u)&&e._startAt.revert(ef),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&p&&!x){if(t&&(a=!1),S=Un({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Sn(l),immediateRender:a,stagger:0,parent:g},E),O&&(S[U.prop]=O),Dr(e._startAt=ii.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Di?e._startAt.revert(ef):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Sn(l)||l&&!p,_=0;_<m.length;_++){if(M=m[_],I=M._gsap||Wp(m)[_]._gsap,e._ptLookup[_]=F={},Ip[I.id]&&Pr.length&&rf(),N=v===m?_:v.indexOf(M),U&&(D=new U).init(M,O||E,e,N,v)!==!1&&(e._pt=w=new cn(e._pt,M,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(k){F[k]=w}),D.priority&&(P=1)),!U||O)for(S in E)vn[S]&&(D=Jp(S,E,e,N,M,v))?D.priority&&(P=1):F[S]=w=$p.call(e,M,S,"get",E[S],N,v,0,n.stringFilter);e._op&&e._op[_]&&e.kill(M,e._op[_]),T&&e._pt&&(Cr=e,qt.killTweensOf(M,F,e.globalTime(t)),G=!e.parent,Cr=0),e._pt&&l&&(Ip[I.id]=1)}P&&tm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&y.render(Jn,!0,!0)},eE=function(e,t,i,n,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Op=1,e.vars[t]="+=0",Kp(e,a),Op=0,l?dc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,f.e&&(f.e=Qt(i)+Li(f.e)),f.b&&(f.b=h.s+Li(f.b))},tE=function(e,t){var i=e[0]?Ir(e[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return t;r=Ca({},t);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},iE=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,a;if(Yi(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},uc=function(e,t,i,n,r){return Kt(e)?e.call(t,i,n,r):_i(e)&&~e.indexOf("random(")?La(e):e},cf=Gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",F_={};ln(cf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return F_[s]=1});cf=cf.split(",");var ii=(function(s){u_(e,s);function e(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:cc(n))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,g=n.parent||qt,v=(Yi(i)||d_(i)?sr(i[0]):"length"in n)?[i]:Kn(i),T,y,b,E,_,S,w,M;if(a._targets=v.length?Wp(v):dc("GSAP target "+i+" not found. https://gsap.com",!Mn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||d||ju(c)||ju(h)){n=a.vars;var P=n.easeReverse||n.yoyoEase;if(T=a.timeline=new qi({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=ir(a),T._start=0,d||ju(c)||ju(h)){if(E=v.length,w=d&&A_(d),Ps(d))for(_ in d)~cf.indexOf(_)&&(M||(M={}),M[_]=d[_]);for(y=0;y<E;y++)b=of(n,F_),b.stagger=0,P&&(b.easeReverse=P),M&&Ca(b,M),S=v[y],b.duration=+uc(c,ir(a),y,S,v),b.delay=(+uc(h,ir(a),y,S,v)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),T.to(S,b,w?w(y,S,v):0),T._ease=_t.none;T.duration()?c=h=0:a.timeline=0}else if(p){cc(Un(T.vars.defaults,{ease:"none"})),T._ease=po(p.ease||n.ease||"none");var I=0,U,D,F;if(Yi(p))p.forEach(function(N){return T.to(v,N,">")}),T.duration();else{b={};for(_ in p)_==="ease"||_==="easeEach"||iE(_,p[_],b,p.easeEach);for(_ in b)for(U=b[_].sort(function(N,O){return N.t-O.t}),I=0,y=0;y<U.length;y++)D=U[y],F={ease:D.e,duration:(D.t-(y?U[y-1].t:0))/100*c},F[_]=D.v,T.to(v,F,I),I+=F.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return u===!0&&!Fp&&(Cr=ir(a),qt.killTweensOf(v),Cr=0),Cs(g,ir(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(f||!c&&!p&&a._start===Xt(g._time)&&Sn(f)&&DT(ir(a))&&g.data!=="nested")&&(a._tTime=-Ct,a.render(Math.max(0,-h)||0)),m&&b_(ir(a),m),a}var t=e.prototype;return t.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,f=n>l-Ct&&!h?l:n<Ct?0:n,d,u,p,x,m,g,v,T;if(!c)NT(this,n,r,o);else if(f!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+n,r,o);if(d=Xt(f%x),f===l?(p=this._repeat,d=c):(m=Xt(f/x),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),g=this._yoyo&&p&1,g&&(d=c-d),m=Pa(this._tTime,x),d===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==x&&this._initted&&(this._lock=o=1,this.render(Xt(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(T_(this,h?n:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!r&&!m&&(Ln(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;T&&T.render(n<0?n:T._dur*T._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Dp(this,n,r,o),Ln(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Ln(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Dp(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Dr(this,1),!r&&!(h&&!a)&&(f||a||g)&&(Ln(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,a,l){mc||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kp(this,c),h=this._ease(c/this._dur),eE(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(mf(this,0),this.parent||S_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ac(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Di),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Cr&&Cr.vars.overwrite!==!0)._first||ac(this),this.parent&&o!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Kn(n):a,c=this._ptLookup,h=this._pt,f,d,u,p,x,m,g;if((!r||r==="all")&&PT(a,l))return r==="all"&&(this._pt=0),ac(this);for(f=this._op=this._op||[],r!=="all"&&(_i(r)&&(x={},ln(r,function(v){return x[v]=1}),r=x),r=tE(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){d=c[g],r==="all"?(f[g]=r,p=d,u={}):(u=f[g]=f[g]||{},p=r);for(x in p)m=d&&d[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&df(this,m,"_pt"),delete d[x]),u!=="all"&&(u[x]=1)}return this._initted&&!this._pt&&h&&ac(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return hc(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return hc(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return qt.killTweensOf(n,r,o)},e})(gc);Un(ii.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(s){ii[s]=function(){var e=new qi,t=Lp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Qp=function(e,t,i){return e[t]=i},B_=function(e,t,i){return e[t](i)},nE=function(e,t,i,n){return e[t](n.fp,i)},sE=function(e,t,i){return e.setAttribute(t,i)},gf=function(e,t){return Kt(e[t])?B_:uf(e[t])&&e.setAttribute?sE:Qp},z_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jp=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},em=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},oE=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},aE=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?df(this,t,"_pt"):t.dep||(i=1),t=n;return!i},lE=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},tm=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},cn=(function(){function s(t,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||z_,this.d=l||this,this.set=c||Qp,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=lE,this.m=i,this.mt=r,this.tween=n},s})();ln(Gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Vp[s]=1});Nn.TweenMax=Nn.TweenLite=ii;Nn.TimelineLite=Nn.TimelineMax=qi;qt=new qi({sortChildren:!1,defaults:fc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=Yp;var mo=[],nf={},cE=[],h_=0,hE=0,Ap=function(e){return(nf[e]||cE).map(function(t){return t()})},_c=function(){var e=Date.now(),t=[];e-h_>2&&(Ap("matchMediaInit"),mo.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Rs.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Ap("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),h_=e,Ap("matchMedia"))},k_=(function(){function s(t,i){this.selector=i&&Np(i),this.data=[],this._r=[],this.isReverted=!1,this.id=hE++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){Kt(i)&&(r=n,n=i,i=Kt);var o=this,a=function(){var c=Vt,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Np(r)),Vt=o,f=n.apply(o,arguments),Kt(f)&&o._r.push(f),Vt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,i===Kt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=Vt;Vt=null,i(this),Vt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof ii&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof qi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ii)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=mo.length;o--;)mo[o].id===this.id&&mo.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(_c):a.removeEventListener("change",_c)}),this._mqs=null}},e.revert=function(i){this.kill(i||{})},s})(),uE=(function(){function s(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){Ps(i)||(i={matches:i});var o=new k_(0,r||this.scope),a=o.conditions={},l,c,h;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Rs.matchMedia(i[c]),l&&(mo.indexOf(o)<0&&mo.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(_c):l.addEventListener("change",_c),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),hf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return L_(n)})},timeline:function(e){return new qi(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,i,n){_i(e)&&(e=Kn(e)[0]);var r=Ir(e||{}).get,o=i?y_:v_;return i==="native"&&(i=""),e&&(t?o((vn[t]&&vn[t].get||r)(e,t,i,n)):function(a,l,c){return o((vn[a]&&vn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Kn(e),e.length>1){var n=e.map(function(h){return Zi.quickSetter(h,t,i)}),r=n.length;return function(h){for(var f=r;f--;)n[f](h)}}e=e[0]||{};var o=vn[t],a=Ir(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Ra._pt=0,f.init(e,i?h+i:h,Ra,0,[e]),f.render(1,f),Ra._pt&&em(1,Ra)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,r=Zi.to(e,Un((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=po(e.ease,fc.ease)),r_(fc,e||{})},config:function(e){return r_(Mn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!vn[a]&&!Nn[a]&&dc(t+" effect requires "+a+" plugin.")}),bp[t]=function(a,l,c){return i(Kn(a),Un(l||{},r),c)},o&&(qi.prototype[t]=function(a,l,c){return this.add(bp[t](a,Ps(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=po(t)},parseEase:function(e,t){return arguments.length?po(e,t):_t},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new qi(e),n,r;for(i.smoothChildTiming=Sn(e.smoothChildTiming),qt.remove(i),i._dp=0,i._time=i._tTime=qt._time,n=qt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof ii&&n.vars.onComplete===n._targets[0]))&&Cs(i,n,n._start-n._delay),n=r;return Cs(qt,i,0),i},context:function(e,t){return e?new k_(e,t):Vt},matchMedia:function(e){return new uE(e)},matchMediaRefresh:function(){return mo.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||_c()},addEventListener:function(e,t){var i=nf[e]||(nf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=nf[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:VT,wrapYoyo:GT,distribute:A_,random:C_,snap:R_,normalize:HT,getUnit:Li,clamp:FT,splitColor:N_,toArray:Kn,selector:Np,mapRange:I_,pipe:zT,unitize:kT,interpolate:WT,shuffle:w_},install:m_,effects:bp,ticker:yn,updateRoot:qi.updateRoot,plugins:vn,globalTimeline:qt,core:{PropTween:cn,globals:g_,Tween:ii,Timeline:qi,Animation:gc,getCache:Ir,_removeLinkedListItem:df,reverting:function(){return Di},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return Fp=e}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return hf[s]=ii[s]});yn.add(qi.updateRoot);Ra=hf.to({},{duration:0});var fE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},dE=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=fE(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},Rp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(_i(r)&&(l={},ln(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}dE(a,r)}}}},Zi=hf.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Di?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Rp("roundProps",Up),Rp("modifiers"),Rp("snap",R_))||hf;ii.version=qi.version=Zi.version="3.15.1";p_=1;Bp()&&Da();var pE=_t.Power0,mE=_t.Power1,gE=_t.Power2,_E=_t.Power3,xE=_t.Power4,vE=_t.Linear,yE=_t.Quad,SE=_t.Cubic,ME=_t.Quart,bE=_t.Quint,TE=_t.Strong,EE=_t.Elastic,wE=_t.Back,AE=_t.SteppedEase,RE=_t.Bounce,CE=_t.Sine,PE=_t.Expo,IE=_t.Circ;var H_,Nr,Ua,am,Mo,DE,V_,lm,LE=function(){return typeof window<"u"},or={},So=180/Math.PI,Oa=Math.PI/180,Na=Math.atan2,G_=1e8,cm=/([A-Z])/g,NE=/(left|right|width|margin|padding|x)/i,UE=/[\s,\(]\S/,Is={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},K_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Q_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kE=function(e,t,i){return e.style[t]=i},HE=function(e,t,i){return e.style.setProperty(t,i)},VE=function(e,t,i){return e._gsap[t]=i},GE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},WE=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},XE=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},Yt="transform",bn=Yt+"Origin",qE=function s(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in or&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Is[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=rr(n,a)}):this.tfm[e]=o.x?o[e]:rr(n,e),e===bn&&(this.tfm.zOrigin=o.zOrigin);else return Is.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=Yt}(r||t)&&this.props.push(e,t,r[e])},j_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YE=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(cm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=lm(),(!r||!r.isStart)&&!i[Yt]&&(j_(i),n.zOrigin&&i[bn]&&(i[bn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ex=function(e,t){var i={target:e,props:[],revert:YE,save:qE};return e._gsap||Zi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},tx,sm=function(e,t){var i=Nr.createElementNS?Nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Nr.createElement(e);return i&&i.style?i:Nr.createElement(e)},On=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(cm,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Fa(t)||t,1)||""},W_="O,Moz,ms,Ms,Webkit".split(","),Fa=function(e,t,i){var n=t||Mo,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(W_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?W_[o]:"")+e},rm=function(){LE()&&window.document&&(H_=window,Nr=H_.document,Ua=Nr.documentElement,Mo=sm("div")||{style:{}},DE=sm("div"),Yt=Fa(Yt),bn=Yt+"Origin",Mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tx=!!Fa("perspective"),lm=Zi.core.reverting,am=1)},X_=function(e){var t=e.ownerSVGElement,i=sm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Ua.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Ua.removeChild(i),r},q_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ix=function(e){var t,i;try{t=e.getBBox()}catch{t=X_(e),i=1}return t&&(t.width||t.height)||i||(t=X_(e)),t&&!t.width&&!t.x&&!t.y?{x:+q_(e,["x","cx","x1"])||0,y:+q_(e,["y","cy","y1"])||0,width:0,height:0}:t},nx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ix(e))},Or=function(e,t){if(t){var i=e.style,n;t in or&&t!==bn&&(t=Yt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(cm,"-$1").toLowerCase())):i.removeAttribute(t)}},Ur=function(e,t,i,n,r,o){var a=new cn(e._pt,t,i,0,1,o?Q_:K_);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},Y_={deg:1,rad:1,turn:1},ZE={grid:1,flex:1},Fr=function s(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=Mo.style,l=NE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=n==="px",u=n==="%",p,x,m,g;if(n===o||!r||Y_[n]||Y_[o])return r;if(o!=="px"&&!d&&(r=s(e,t,i,"px")),g=e.getCTM&&nx(e),(u||o==="%")&&(or[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[h],Qt(u?r/p*f:r/100*p);if(a[l?"width":"height"]=f+(d?o:n),x=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Nr||!x.appendChild)&&(x=Nr.body),m=x._gsap,m&&u&&m.width&&l&&m.time===yn.time&&!m.uncache)return Qt(r/m.width*f);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+n,p=e[h],v?e.style[t]=v:Or(e,t)}else(u||o==="%")&&!ZE[On(x,"display")]&&(a.position=On(e,"position")),x===e&&(a.position="static"),x.appendChild(Mo),p=Mo[h],x.removeChild(Mo),a.position="absolute";return l&&u&&(m=Ir(x),m.time=yn.time,m.width=x[h]),Qt(d?p*r/f:p&&r?f/p*r:0)},rr=function(e,t,i,n){var r;return am||rm(),t in Is&&t!=="transform"&&(t=Is[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(r=Sc(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:xf(On(e,bn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=_f[t]&&_f[t](e,t,i)||On(e,t)||Xp(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Fr(e,t,r,i)+i:r},$E=function(e,t,i,n){if(!i||i==="none"){var r=Fa(t,e,1),o=r&&On(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=On(e,"borderTopColor"))}var a=new cn(this._pt,e.style,t,0,1,jp),l=0,c=0,h,f,d,u,p,x,m,g,v,T,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=On(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(x=e.style[t],e.style[t]=n,n=On(e,t)||n,x?e.style[t]=x:Or(e,t)),h=[i,n],Yp(h),i=h[0],n=h[1],d=i.match(go)||[],b=n.match(go)||[],b.length){for(;f=go.exec(n);)m=f[0],v=n.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(x=d[c++]||"")&&(u=parseFloat(x)||0,y=x.substr((u+"").length),m.charAt(1)==="="&&(m=_o(u,m)+y),g=parseFloat(m),T=m.substr((g+"").length),l=go.lastIndex-T.length,T||(T=T||Mn.units[t]||y,l===n.length&&(n+=T,a.e+=T)),y!==T&&(u=Fr(e,t,x,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?Q_:K_;return kp.test(n)&&(a.e=0),this._pt=a,a},Z_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JE=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Z_[i]||i,t[1]=Z_[n]||n,t.join(" ")},KE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],or[a]&&(l=1,a=a==="transformOrigin"?bn:Yt),Or(i,a);l&&(Or(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Sc(i,1),o.uncache=1,j_(n)))}},_f={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new cn(e._pt,t,i,0,0,KE);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},yc=[1,0,0,1,0,0],sx={},rx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$_=function(e){var t=On(e,Yt);return rx(t)?yc:t.substr(7).match(zp).map(Qt)},hm=function(e,t){var i=e._gsap||Ir(e),n=e.style,r=$_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?yc:r):(r===yc&&!e.offsetParent&&e!==Ua&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ua.appendChild(e)),r=$_(e),l?n.display=l:Or(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ua.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},om=function(e,t,i,n,r,o){var a=e._gsap,l=r||hm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],p=l[1],x=l[2],m=l[3],g=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,b=parseFloat(T[1])||0,E,_,S,w;i?l!==yc&&(_=u*m-p*x)&&(S=y*(m/_)+b*(-x/_)+(x*v-m*g)/_,w=y*(-p/_)+b*(u/_)-(u*v-p*g)/_,y=S,b=w):(E=ix(e),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(T[1]||T[0]).indexOf("%")?b/100*E.height:b)),n||n!==!1&&a.smooth?(g=y-c,v=b-h,a.xOffset=f+(g*u+v*x)-g,a.yOffset=d+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[bn]="0px 0px",o&&(Ur(o,a,"xOrigin",c,y),Ur(o,a,"yOrigin",h,b),Ur(o,a,"xOffset",f,a.xOffset),Ur(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Sc=function(e,t){var i=e._gsap||new Zp(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=On(e,bn)||"0",h,f,d,u,p,x,m,g,v,T,y,b,E,_,S,w,M,P,I,U,D,F,N,O,G,k,C,q,ae,_e,X,W;return h=f=d=x=m=g=v=T=y=0,u=p=1,i.svg=!!(e.getCTM&&nx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),n.scale=n.rotate=n.translate="none"),_=hm(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),om(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,_)),b=i.xOrigin||0,E=i.yOrigin||0,_!==yc&&(P=_[0],I=_[1],U=_[2],D=_[3],h=F=_[4],f=N=_[5],_.length===6?(u=Math.sqrt(P*P+I*I),p=Math.sqrt(D*D+U*U),x=P||I?Na(I,P)*So:0,v=U||D?Na(U,D)*So+x:0,v&&(p*=Math.abs(Math.cos(v*Oa))),i.svg&&(h-=b-(b*P+E*U),f-=E-(b*I+E*D))):(W=_[6],_e=_[7],C=_[8],q=_[9],ae=_[10],X=_[11],h=_[12],f=_[13],d=_[14],S=Na(W,ae),m=S*So,S&&(w=Math.cos(-S),M=Math.sin(-S),O=F*w+C*M,G=N*w+q*M,k=W*w+ae*M,C=F*-M+C*w,q=N*-M+q*w,ae=W*-M+ae*w,X=_e*-M+X*w,F=O,N=G,W=k),S=Na(-U,ae),g=S*So,S&&(w=Math.cos(-S),M=Math.sin(-S),O=P*w-C*M,G=I*w-q*M,k=U*w-ae*M,X=D*M+X*w,P=O,I=G,U=k),S=Na(I,P),x=S*So,S&&(w=Math.cos(S),M=Math.sin(S),O=P*w+I*M,G=F*w+N*M,I=I*w-P*M,N=N*w-F*M,P=O,F=G),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,g=180-g),u=Qt(Math.sqrt(P*P+I*I+U*U)),p=Qt(Math.sqrt(N*N+W*W)),S=Na(F,N),v=Math.abs(S)>2e-4?S*So:0,y=X?1/(X<0?-X:X):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!rx(On(e,Yt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Qt(u),i.scaleY=Qt(p),i.rotation=Qt(x)+a,i.rotationX=Qt(m)+a,i.rotationY=Qt(g)+a,i.skewX=v+a,i.skewY=T+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[bn]=xf(c)),i.xOffset=i.yOffset=0,i.force3D=Mn.force3D,i.renderTransform=i.svg?jE:tx?ox:QE,i.uncache=0,i},xf=function(e){return(e=e.split(" "))[0]+" "+e[1]},im=function(e,t,i){var n=Li(t);return Qt(parseFloat(t)+parseFloat(Fr(e,"x",i+"px",n)))+n},QE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ox(e,t)},vo="0deg",vc="0px",yo=") ",ox=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,f=i.rotationX,d=i.skewX,u=i.skewY,p=i.scaleX,x=i.scaleY,m=i.transformPerspective,g=i.force3D,v=i.target,T=i.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(T&&(f!==vo||h!==vo)){var E=parseFloat(h)*Oa,_=Math.sin(E),S=Math.cos(E),w;E=parseFloat(f)*Oa,w=Math.cos(E),o=im(v,o,_*w*-T),a=im(v,a,-Math.sin(E)*-T),l=im(v,l,S*w*-T+T)}m!==vc&&(y+="perspective("+m+yo),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(b||o!==vc||a!==vc||l!==vc)&&(y+=l!==vc||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+yo),c!==vo&&(y+="rotate("+c+yo),h!==vo&&(y+="rotateY("+h+yo),f!==vo&&(y+="rotateX("+f+yo),(d!==vo||u!==vo)&&(y+="skew("+d+", "+u+yo),(p!==1||x!==1)&&(y+="scale("+p+", "+x+yo),v.style[Yt]=y||"translate(0, 0)"},jE=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,f=i.scaleX,d=i.scaleY,u=i.target,p=i.xOrigin,x=i.yOrigin,m=i.xOffset,g=i.yOffset,v=i.forceCSS,T=parseFloat(o),y=parseFloat(a),b,E,_,S,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Oa,c*=Oa,b=Math.cos(l)*f,E=Math.sin(l)*f,_=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(h*=Oa,w=Math.tan(c-h),w=Math.sqrt(1+w*w),_*=w,S*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,E*=w)),b=Qt(b),E=Qt(E),_=Qt(_),S=Qt(S)):(b=f,S=d,E=_=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=Fr(u,"x",o,"px"),y=Fr(u,"y",a,"px")),(p||x||m||g)&&(T=Qt(T+p-(p*b+x*_)+m),y=Qt(y+x-(p*E+x*S)+g)),(n||r)&&(w=u.getBBox(),T=Qt(T+n/100*w.width),y=Qt(y+r/100*w.height)),w="matrix("+b+","+E+","+_+","+S+","+T+","+y+")",u.setAttribute("transform",w),v&&(u.style[Yt]=w)},ew=function(e,t,i,n,r){var o=360,a=_i(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?So:1),c=l-n,h=n+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*G_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*G_)%o-~~(c/o)*o)),e._pt=d=new cn(e._pt,t,i,n,c,OE),d.e=h,d.u="deg",e._props.push(i),d},J_=function(e,t){for(var i in t)e[i]=t[i];return e},tw=function(e,t,i){var n=J_({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,f,d,u,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=Sc(i,1),Or(i,Yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Yt],o[Yt]=t,a=Sc(i,1),o[Yt]=c);for(l in or)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Li(c),p=Li(h),f=u!==p?Fr(i,l,c,p):parseFloat(c),d=parseFloat(h),e._pt=new cn(e._pt,a,l,f,d-f,nm),e._pt.u=p||0,e._props.push(l));J_(a,n)};ln("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(a){return e<2?s+a:"border"+a+s});_f[e>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(p){return rr(a,p,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(p,x){return u[p]=d[x]=d[x]||d[(x-1)/2|0]}),a.init(l,u,f)}});var um={name:"css",register:rm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,a=e.style,l=i.vars.startAt,c,h,f,d,u,p,x,m,g,v,T,y,b,E,_,S,w;am||rm(),this.styles=this.styles||ex(e),S=this.styles.props,this.tween=i;for(x in t)if(x!=="autoRound"&&(h=t[x],!(vn[x]&&Jp(x,t,i,n,e,r)))){if(u=typeof h,p=_f[x],u==="function"&&(h=h.call(i,n,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=La(h)),p)p(this,e,x,h,i)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",nr.lastIndex=0,nr.test(c)||(m=Li(c),g=Li(h),g?m!==g&&(c=Fr(e,x,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,r,0,0,x),o.push(x),S.push(x,0,a[x]);else if(u!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(i,n,e,r):l[x],_i(c)&&~c.indexOf("random(")&&(c=La(c)),Li(c+"")||c==="auto"||(c+=Mn.units[x]||Li(rr(e,x))||""),(c+"").charAt(1)==="="&&(c=rr(e,x))):c=rr(e,x),d=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),x in Is&&(x==="autoAlpha"&&(d===1&&rr(e,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,a.visibility),Ur(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=Is[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in or,T){if(this.styles.save(x),w=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=On(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=h,h=On(e,"perspective"),M?e.style.perspective=M:Or(e,"perspective")}f=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Sc(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new cn(this._pt,a,Yt,0,1,b.renderTransform,b,0,-1),y.dep=1),x==="scale")this._pt=new cn(this._pt,b,"scaleY",b.scaleY,(v?_o(b.scaleY,v+f):f)-b.scaleY||0,nm),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(bn,0,a[bn]),h=JE(h),b.svg?om(e,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&Ur(this,b,"zOrigin",b.zOrigin,g),Ur(this,a,x,xf(c),xf(h)));continue}else if(x==="svgOrigin"){om(e,h,1,E,0,this);continue}else if(x in sx){ew(this,b,x,d,v?_o(d,v+h):h);continue}else if(x==="smoothOrigin"){Ur(this,b,"smooth",b.smooth,h);continue}else if(x==="force3D"){b[x]=h;continue}else if(x==="transform"){tw(this,h,e);continue}}else x in a||(x=Fa(x)||x);if(T||(f||f===0)&&(d||d===0)&&!UE.test(h)&&x in a)m=(c+"").substr((d+"").length),f||(f=0),g=Li(h)||(x in Mn.units?Mn.units[x]:m),m!==g&&(d=Fr(e,x,c,g)),this._pt=new cn(this._pt,T?b:a,x,d,(v?_o(d,v+f):f)-d,!T&&(g==="px"||x==="zIndex")&&t.autoRound!==!1?zE:nm),this._pt.u=g||0,T&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=BE):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=FE);else if(x in a)$E.call(this,e,x,c,v?v+h:h);else if(x in e)this.add(e,x,c||e[x],v?v+h:h,n,r);else if(x!=="parseTransform"){ff(x,h);continue}T||(x in a?S.push(x,0,a[x]):typeof e[x]=="function"?S.push(x,2,e[x]()):S.push(x,1,c||e[x])),o.push(x)}}_&&tm(this)},render:function(e,t){if(t.tween._time||!lm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:rr,aliases:Is,getSetter:function(e,t,i){var n=Is[t];return n&&n.indexOf(",")<0&&(t=n),t in or&&t!==bn&&(e._gsap.x||rr(e,"x"))?i&&V_===i?t==="scale"?GE:VE:(V_=i||{})&&(t==="scale"?WE:XE):e.style&&!uf(e.style[t])?kE:~t.indexOf("-")?HE:gf(e,t)},core:{_removeProperty:Or,_getMatrix:hm}};Zi.utils.checkPrefix=Fa;Zi.core.getStyleSaver=ex;(function(s,e,t,i){var n=ln(s+","+e+","+t,function(r){or[r]=1});ln(e,function(r){Mn.units[r]="deg",sx[r]=1}),Is[n[13]]=s+","+e,ln(i,function(r){var o=r.split(":");Is[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Mn.units[s]="px"});Zi.registerPlugin(um);var bi=Zi.registerPlugin(um)||Zi,q2=bi.core.Tween;function ax(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function iw(s,e,t){return e&&ax(s.prototype,e),t&&ax(s,t),s}var Ni,Sf,nw,Tn,Br,zr,za,cx,bo,ka,hx,ar,ds,ux,fx=function(){return Ni||typeof window<"u"&&(Ni=window.gsap)&&Ni.registerPlugin&&Ni},dx=1,Ba=[],rt=[],ps=[],bc=Date.now,fm=function(e,t){return t},sw=function(){var e=ka.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,rt),n.push.apply(n,ps),rt=i,ps=n,fm=function(o,a){return t[o](a)}},cr=function(e,t){return~ps.indexOf(e)&&ps[ps.indexOf(e)+1][t]},Tc=function(e){return!!~hx.indexOf(e)},un=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},hn=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},vf="scrollLeft",yf="scrollTop",dm=function(){return ar&&ar.isPressed||rt.cache++},Mf=function(e,t){var i=function n(r){if(r||r===0){dx&&Tn.history.scrollRestoration!=="manual"&&(Tn.history.scrollRestoration="manual");var o=ar&&ar.isPressed;r=n.v=Math.round(r)||(ar&&ar.iOS?1:0),e(r),n.cacheID=rt.cache,o&&fm("ss",r)}else(t||rt.cache!==n.cacheID||fm("ref"))&&(n.cacheID=rt.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},$i={s:vf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mf(function(s){return arguments.length?Tn.scrollTo(s,hi.sc()):Tn.pageXOffset||Br[vf]||zr[vf]||za[vf]||0})},hi={s:yf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$i,sc:Mf(function(s){return arguments.length?Tn.scrollTo($i.sc(),s):Tn.pageYOffset||Br[yf]||zr[yf]||za[yf]||0})},fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ni.utils.toArray)(e)[0]||(typeof e=="string"&&Ni.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},rw=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},lr=function(e,t){var i=t.s,n=t.sc;Tc(e)&&(e=Br.scrollingElement||zr);var r=rt.indexOf(e),o=n===hi.sc?1:2;!~r&&(r=rt.push(e)-1),rt[r+o]||un(e,"scroll",dm);var a=rt[r+o],l=a||(rt[r+o]=Mf(cr(e,i),!0)||(Tc(e)?n:Mf(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Ni.getProperty(e,"scrollBehavior")==="smooth"),l},bf=function(e,t,i){var n=e,r=e,o=bc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,x){var m=bc();x||m-o>l?(r=n,n=p,a=o,o=m):i?n+=p:n=r+(p-r)/(m-a)*(o-a)},f=function(){r=n=i?0:n,a=o=0},d=function(p){var x=a,m=r,g=bc();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-x)*1e3};return{update:h,reset:f,getVelocity:d}},Mc=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},lx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},px=function(){ka=Ni.core.globals().ScrollTrigger,ka&&ka.core&&sw()},mx=function(e){return Ni=e||fx(),!Sf&&Ni&&typeof document<"u"&&document.body&&(Tn=window,Br=document,zr=Br.documentElement,za=Br.body,hx=[Tn,Br,zr,za],nw=Ni.utils.clamp,ux=Ni.core.context||function(){},bo="onpointerenter"in za?"pointer":"mouse",cx=jt.isTouch=Tn.matchMedia&&Tn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ds=jt.eventTypes=("ontouchstart"in zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dx=0},500),Sf=1),ka||px(),Sf};$i.op=hi;rt.cache=0;var jt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){Sf||mx(Ni)||console.warn("Please gsap.registerPlugin(Observer)"),ka||px();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,f=i.onStop,d=i.onStopDelay,u=i.ignore,p=i.wheelSpeed,x=i.event,m=i.onDragStart,g=i.onDragEnd,v=i.onDrag,T=i.onPress,y=i.onRelease,b=i.onRight,E=i.onLeft,_=i.onUp,S=i.onDown,w=i.onChangeX,M=i.onChangeY,P=i.onChange,I=i.onToggleX,U=i.onToggleY,D=i.onHover,F=i.onHoverEnd,N=i.onMove,O=i.ignoreCheck,G=i.isNormalizer,k=i.onGestureStart,C=i.onGestureEnd,q=i.onWheel,ae=i.onEnable,_e=i.onDisable,X=i.onClick,W=i.scrollSpeed,j=i.capture,ce=i.allowClicks,le=i.lockAxis,ve=i.onLockAxis;this.target=a=fn(a)||zr,this.vars=i,u&&(u=Ni.utils.toArray(u)),n=n||1e-9,r=r||0,p=p||1,W=W||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Tn.getComputedStyle(za).lineHeight)||22);var Ze,Re,Xe,Ue,he,Te,We,$=this,$e=0,nt=0,xt=i.passive||!h&&i.passive!==!1,tt=lr(a,$i),St=lr(a,hi),At=tt(),V=St(),ft=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ds[0]==="pointerdown",ot=Tc(a),qe=a.ownerDocument||Br,fe=[0,0,0],Qe=[0,0,0],Ne=0,Oe=function(){return Ne=bc()},L=function(Me,oe){return($.event=Me)&&u&&rw(Me.target,u)||oe&&ft&&Me.pointerType!=="touch"||O&&O(Me,oe)},A=function(){$._vx.reset(),$._vy.reset(),Re.pause(),f&&f($)},Y=function(){var Me=$.deltaX=lx(fe),oe=$.deltaY=lx(Qe),ne=Math.abs(Me)>=n,be=Math.abs(oe)>=n;P&&(ne||be)&&P($,Me,oe,fe,Qe),ne&&(b&&$.deltaX>0&&b($),E&&$.deltaX<0&&E($),w&&w($),I&&$.deltaX<0!=$e<0&&I($),$e=$.deltaX,fe[0]=fe[1]=fe[2]=0),be&&(S&&$.deltaY>0&&S($),_&&$.deltaY<0&&_($),M&&M($),U&&$.deltaY<0!=nt<0&&U($),nt=$.deltaY,Qe[0]=Qe[1]=Qe[2]=0),(Ue||Xe)&&(N&&N($),Xe&&(m&&Xe===1&&m($),v&&v($),Xe=0),Ue=!1),Te&&!(Te=!1)&&ve&&ve($),he&&(q($),he=!1),Ze=0},ue=function(Me,oe,ne){fe[ne]+=Me,Qe[ne]+=oe,$._vx.update(Me),$._vy.update(oe),c?Ze||(Ze=requestAnimationFrame(Y)):Y()},re=function(Me,oe){le&&!We&&($.axis=We=Math.abs(Me)>Math.abs(oe)?"x":"y",Te=!0),We!=="y"&&(fe[2]+=Me,$._vx.update(Me,!0)),We!=="x"&&(Qe[2]+=oe,$._vy.update(oe,!0)),c?Ze||(Ze=requestAnimationFrame(Y)):Y()},me=function(Me){if(!L(Me,1)){Me=Mc(Me,h);var oe=Me.clientX,ne=Me.clientY,be=oe-$.x,se=ne-$.y,Ie=$.isDragging;$.x=oe,$.y=ne,(Ie||(be||se)&&(Math.abs($.startX-oe)>=r||Math.abs($.startY-ne)>=r))&&(Xe||(Xe=Ie?2:1),Ie||($.isDragging=!0),re(be,se))}},xe=$.onPress=function(pe){L(pe,1)||pe&&pe.button||($.axis=We=null,Re.pause(),$.isPressed=!0,pe=Mc(pe),$e=nt=0,$.startX=$.x=pe.clientX,$.startY=$.y=pe.clientY,$._vx.reset(),$._vy.reset(),un(G?a:qe,ds[1],me,xt,!0),$.deltaX=$.deltaY=0,T&&T($))},J=$.onRelease=function(pe){if(!L(pe,1)){hn(G?a:qe,ds[1],me,!0);var Me=!isNaN($.y-$.startY),oe=$.isDragging,ne=oe&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),be=Mc(pe);!ne&&Me&&($._vx.reset(),$._vy.reset(),h&&ce&&Ni.delayedCall(.08,function(){if(bc()-Ne>300&&!pe.defaultPrevented){if(pe.target.click)pe.target.click();else if(qe.createEvent){var se=qe.createEvent("MouseEvents");se.initMouseEvent("click",!0,!0,Tn,1,be.screenX,be.screenY,be.clientX,be.clientY,!1,!1,!1,!1,0,null),pe.target.dispatchEvent(se)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,f&&oe&&!G&&Re.restart(!0),Xe&&Y(),g&&oe&&g($),y&&y($,ne)}},te=function(Me){return Me.touches&&Me.touches.length>1&&($.isGesturing=!0)&&k(Me,$.isDragging)},de=function(){return($.isGesturing=!1)||C($)},z=function(Me){if(!L(Me)){var oe=tt(),ne=St();ue((oe-At)*W,(ne-V)*W,1),At=oe,V=ne,f&&Re.restart(!0)}},ie=function(Me){if(!L(Me)){Me=Mc(Me,h),q&&(he=!0);var oe=(Me.deltaMode===1?l:Me.deltaMode===2?Tn.innerHeight:1)*p;ue(Me.deltaX*oe,Me.deltaY*oe,0),f&&!G&&Re.restart(!0)}},ee=function(Me){if(!L(Me)){var oe=Me.clientX,ne=Me.clientY,be=oe-$.x,se=ne-$.y;$.x=oe,$.y=ne,Ue=!0,f&&Re.restart(!0),(be||se)&&re(be,se)}},ye=function(Me){$.event=Me,D($)},ge=function(Me){$.event=Me,F($)},Se=function(Me){return L(Me)||Mc(Me,h)&&X($)};Re=$._dc=Ni.delayedCall(d||.25,A).pause(),$.deltaX=$.deltaY=0,$._vx=bf(0,50,!0),$._vy=bf(0,50,!0),$.scrollX=tt,$.scrollY=St,$.isDragging=$.isGesturing=$.isPressed=!1,ux(this),$.enable=function(pe){return $.isEnabled||(un(ot?qe:a,"scroll",dm),o.indexOf("scroll")>=0&&un(ot?qe:a,"scroll",z,xt,j),o.indexOf("wheel")>=0&&un(a,"wheel",ie,xt,j),(o.indexOf("touch")>=0&&cx||o.indexOf("pointer")>=0)&&(un(a,ds[0],xe,xt,j),un(qe,ds[2],J),un(qe,ds[3],J),ce&&un(a,"click",Oe,!0,!0),X&&un(a,"click",Se),k&&un(qe,"gesturestart",te),C&&un(qe,"gestureend",de),D&&un(a,bo+"enter",ye),F&&un(a,bo+"leave",ge),N&&un(a,bo+"move",ee)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Ue=Xe=!1,$._vx.reset(),$._vy.reset(),At=tt(),V=St(),pe&&pe.type&&xe(pe),ae&&ae($)),$},$.disable=function(){$.isEnabled&&(Ba.filter(function(pe){return pe!==$&&Tc(pe.target)}).length||hn(ot?qe:a,"scroll",dm),$.isPressed&&($._vx.reset(),$._vy.reset(),hn(G?a:qe,ds[1],me,!0)),hn(ot?qe:a,"scroll",z,j),hn(a,"wheel",ie,j),hn(a,ds[0],xe,j),hn(qe,ds[2],J),hn(qe,ds[3],J),hn(a,"click",Oe,!0),hn(a,"click",Se),hn(qe,"gesturestart",te),hn(qe,"gestureend",de),hn(a,bo+"enter",ye),hn(a,bo+"leave",ge),hn(a,bo+"move",ee),$.isEnabled=$.isPressed=$.isDragging=!1,_e&&_e($))},$.kill=$.revert=function(){$.disable();var pe=Ba.indexOf($);pe>=0&&Ba.splice(pe,1),ar===$&&(ar=0)},Ba.push($),G&&Tc(a)&&(ar=$),$.enable(x)},iw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();jt.version="3.15.1";jt.create=function(s){return new jt(s)};jt.register=mx;jt.getAll=function(){return Ba.slice()};jt.getById=function(s){return Ba.filter(function(e){return e.vars.id===s})[0]};fx()&&Ni.registerPlugin(jt);var Fe,Wa,ct,Et,zn,Tt,Am,zf,Fc,Ic,wc,Tf,Ji,Vf,ym,pn,gx,_x,Xa,Lx,pm,Nx,dn,Sm,Ux,Ox,kr,Mm,Rm,qa,Cm,Hr,bm,mm,Ef=1,Ki=Date.now,gm=Ki(),es=0,Ac=0,xx=function(e,t,i){var n=Bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},vx=function(e,t){return t&&(!Bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ow=function s(){return Ac&&requestAnimationFrame(s)},yx=function(){return Vf=1},Sx=function(){return Vf=0},Ds=function(e){return e},Rc=function(e){return Math.round(e*1e5)/1e5||0},Fx=function(){return typeof window<"u"},Bx=function(){return Fe||Fx()&&(Fe=window.gsap)&&Fe.registerPlugin&&Fe},Co=function(e){return!!~Am.indexOf(e)},zx=function(e){return(e==="Height"?Cm:ct["inner"+e])||zn["client"+e]||Tt["client"+e]},kx=function(e){return cr(e,"getBoundingClientRect")||(Co(e)?function(){return Bf.width=ct.innerWidth,Bf.height=Cm,Bf}:function(){return hr(e)})},aw=function(e,t,i){var n=i.d,r=i.d2,o=i.a;return(o=cr(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?zx(r):e["client"+r])||0}},lw=function(e,t){return!t||~ps.indexOf(e)?kx(e):function(){return Bf}},Ls=function(e,t){var i=t.s,n=t.d2,r=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=cr(e,i))?o()-kx(e)()[r]:Co(e)?(zn[i]||Tt[i])-zx(n):e[i]-e["offset"+n])},wf=function(e,t){for(var i=0;i<Xa.length;i+=3)(!t||~t.indexOf(Xa[i+1]))&&e(Xa[i],Xa[i+1],Xa[i+2])},Bn=function(e){return typeof e=="string"},Qi=function(e){return typeof e=="function"},Cc=function(e){return typeof e=="number"},To=function(e){return typeof e=="object"},Ec=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ha=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},Va=Math.abs,Hx="left",Vx="top",Pm="right",Im="bottom",wo="width",Ao="height",Dc="Right",Lc="Left",Nc="Top",Uc="Bottom",ui="padding",Qn="margin",Za="Width",Dm="Height",xi="px",jn=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},cw=function(e){var t=jn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Mx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},hr=function(e,t){var i=t&&jn(e)[ym]!=="matrix(1, 0, 0, 1, 0, 0)"&&Fe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},kf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Gx=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},hw=function(e){return function(t){return Fe.utils.snap(Gx(e),t)}},Lm=function(e){var t=Fe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return t(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=t(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:t(r<0?n-e:n+e)}},uw=function(e){return function(t,i){return Lm(Gx(e))(t,i.direction)}},Af=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},Ei=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},Ti=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Rf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},bx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cf={toggleActions:"play",anticipatePin:0},Hf={top:0,left:0,center:.5,bottom:1,right:1},Nf=function(e,t){if(Bn(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in Hf?Hf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pf=function(e,t,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,p=Et.createElement("div"),x=Co(i)||cr(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=x?Tt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(y+=(n===hi?Pm:Im)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Uf(p,0,n,v),p},Uf=function(e,t,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Za]=1,r["border"+a+Za]=0,r[i.p]=t+"px",Fe.set(e,r)},lt=[],Tm={},Bc,Tx=function(){return Ki()-es>34&&(Bc||(Bc=requestAnimationFrame(ur)))},Ga=function(){(!dn||!dn.isPressed||dn.startX>Tt.clientWidth)&&(rt.cache++,dn?Bc||(Bc=requestAnimationFrame(ur)):ur(),es||Io("scrollStart"),es=Ki())},_m=function(){Ox=ct.innerWidth,Ux=ct.innerHeight},Pc=function(e){rt.cache++,(e===!0||!Ji&&!Nx&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Sm||Ox!==ct.innerWidth||Math.abs(ct.innerHeight-Ux)>ct.innerHeight*.25))&&zf.restart(!0)},Po={},fw=[],Wx=function s(){return Ti(ht,"scrollEnd",s)||Eo(!0)},Io=function(e){return Po[e]&&Po[e].map(function(t){return t()})||fw},Fn=[],Xx=function(e){for(var t=0;t<Fn.length;t+=5)(!e||Fn[t+4]&&Fn[t+4].query===e)&&(Fn[t].style.cssText=Fn[t+1],Fn[t].getBBox&&Fn[t].setAttribute("transform",Fn[t+2]||""),Fn[t+3].uncache=1)},qx=function(){rt.cache++,rt.forEach(function(e){return Qi(e)&&(e.rec=e())})},Nm=function(e,t){var i;for(pn=0;pn<lt.length;pn++)i=lt[pn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Hr=!0,t&&Xx(t),t||Io("revert")},Yx=function(e,t){rt.cache++,(t||!mn)&&rt.forEach(function(i){return Qi(i)&&i.cacheID++&&(i.rec=0)}),Bn(e)&&(Rm=e,ct.history.scrollRestoration!==e&&(ct.history.scrollRestoration=e))},mn,Ro=0,Ex,dw=function(){if(Ex!==Ro){var e=Ex=Ro;requestAnimationFrame(function(){return e===Ro&&Eo(!0)})}},Zx=function(){Tt.appendChild(qa),Cm=!dn&&qa.offsetHeight||ct.innerHeight,Tt.removeChild(qa)},wx=function(e){return Fc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Eo=function(e,t){if(zn=Et.documentElement,Tt=Et.body,Am=[ct,Et,zn,Tt],es&&!e&&!Hr){Ei(ht,"scrollEnd",Wx);return}Zx(),mn=ht.isRefreshing=!0,Hr||qx();var i=Io("refreshInit");Lx&&ht.sort(),t||Nm(),rt.forEach(function(n){Qi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),lt.slice(0).forEach(function(n){return n.refresh()}),Hr=!1,lt.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),bm=1,wx(!0),lt.forEach(function(n){var r=Ls(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),wx(!1),bm=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),rt.forEach(function(n){Qi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Yx(Rm,1),zf.pause(),Ro++,mn=2,ur(2),lt.forEach(function(n){return Qi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),mn=ht.isRefreshing=!1,Io("refresh")},Em=0,Of=1,Oc,ur=function(e){if(e===2||!mn&&!Hr){ht.isUpdating=!0,Oc&&Oc.update(0);var t=lt.length,i=Ki(),n=i-gm>=50,r=t&&lt[0].scroll();if(Of=Em>r?-1:1,mn||(Em=r),n&&(es&&!Vf&&i-es>200&&(es=0,Io("scrollEnd")),wc=gm,gm=i),Of<0){for(pn=t;pn-- >0;)lt[pn]&&lt[pn].update(0,n);Of=1}else for(pn=0;pn<t;pn++)lt[pn]&&lt[pn].update(0,n);ht.isUpdating=!1}Bc=0},wm=[Hx,Vx,Im,Pm,Qn+Uc,Qn+Dc,Qn+Nc,Qn+Lc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ff=wm.concat([wo,Ao,"boxSizing","max"+Za,"max"+Dm,"position",Qn,ui,ui+Nc,ui+Dc,ui+Uc,ui+Lc]),pw=function(e,t,i){Ya(i);var n=e._gsap;if(n.spacerIsNative)Ya(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},xm=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=wm.length,o=t.style,a=e.style,l;r--;)l=wm[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Im]=a[Pm]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wo]=kf(e,$i)+xi,o[Ao]=kf(e,hi)+xi,o[ui]=a[Qn]=a[Vx]=a[Hx]="0",Ya(n),a[wo]=a["max"+Za]=i[wo],a[Ao]=a["max"+Dm]=i[Ao],a[ui]=i[ui],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},mw=/([A-Z])/g,Ya=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,o;for((e.t._gsap||Fe.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],r=e[n],o?t[r]=o:t[r]&&t.removeProperty(r.replace(mw,"-$1").toLowerCase())}},If=function(e){for(var t=Ff.length,i=e.style,n=[],r=0;r<t;r++)n.push(Ff[r],i[Ff[r]]);return n.t=e,n},gw=function(e,t,i){for(var n=[],r=e.length,o=i?8:0,a;o<r;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},Bf={left:0,top:0},Ax=function(e,t,i,n,r,o,a,l,c,h,f,d,u,p){Qi(e)&&(e=e(l)),Bn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Nf("0"+e.substr(3),i):0));var x=u?u.time():0,m,g,v;if(u&&u.seek(0),isNaN(e)||(e=+e),Cc(e))u&&(e=Fe.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&Uf(a,i,n,!0);else{Qi(t)&&(t=t(l));var T=(e||"0").split(" "),y,b,E,_;v=fn(t,l)||Tt,y=hr(v)||{},(!y||!y.left&&!y.top)&&jn(v).display==="none"&&(_=v.style.display,v.style.display="block",y=hr(v),_?v.style.display=_:v.style.removeProperty("display")),b=Nf(T[0],y[n.d]),E=Nf(T[1]||"0",i),e=y[n.p]-c[n.p]-h+b+r-E,a&&Uf(a,E,n,i-E<20||a._isStart&&E>20),i-=i-E}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+i,w=o._isStart;m="scroll"+n.d2,Uf(o,S,n,w&&S>20||!w&&(f?Math.max(Tt[m],zn[m]):o.parentNode[m])<=S+1),f&&(c=hr(a),f&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+xi))}return u&&v&&(m=hr(v),u.seek(d),g=hr(v),u._caScrollDist=m[n.p]-g[n.p],e=e/u._caScrollDist*d),u&&u.seek(x),u?e:Math.round(e)},_w=/(webkit|moz|length|cssText|inset)/i,Rx=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,o,a;if(t===Tt){e._stOrig=r.cssText,a=jn(e);for(o in a)!+o&&!_w.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=e._stOrig;Fe.core.getCache(e).uncache=1,t.appendChild(e)}},$x=function(e,t,i){var n=t,r=n;return function(o){var a=Math.round(e());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},Df=function(e,t,i){var n={};n[t.p]="+="+i,Fe.set(e,n)},Cx=function(e,t){var i=lr(e,t),n="_scroll"+t.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,p={};c=c||i();var x=$x(i,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return x(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Fe.to(e,l),d};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ei(e,"wheel",i.wheelHandler),ht.isTouch&&Ei(e,"touchmove",i.wheelHandler),r},ht=(function(){function s(t,i){Wa||s.register(Fe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Mm(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ac){this.update=this.refresh=this.kill=Ds;return}i=Mx(Bn(i)||Cc(i)||i.nodeType?{trigger:i}:i,Cf);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,p=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,b=r.pinReparent,E=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,w=r.preventOverlaps,M=i.horizontal||i.containerAnimation&&i.horizontal!==!1?$i:hi,P=!f&&f!==0,I=fn(i.scroller||ct),U=Fe.core.getCache(I),D=Co(I),F=("pinType"in i?i.pinType:cr(I,"pinType")||D&&"fixed")==="fixed",N=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=P&&i.toggleActions.split(" "),G="markers"in i?i.markers:Cf.markers,k=D?0:parseFloat(jn(I)["border"+M.p2+Za])||0,C=this,q=i.onRefreshInit&&function(){return i.onRefreshInit(C)},ae=aw(I,D,M),_e=lw(I,D),X=0,W=0,j=0,ce=lr(I,M),le,ve,Ze,Re,Xe,Ue,he,Te,We,$,$e,nt,xt,tt,St,At,V,ft,ot,qe,fe,Qe,Ne,Oe,L,A,Y,ue,re,me,xe,J,te,de,z,ie,ee,ye,ge;if(C._startClamp=C._endClamp=!1,C._dir=M,m*=45,C.scroller=I,C.scroll=_?_.time.bind(_):ce,Re=ce(),Hr&&ce.rec==null&&(ce.rec=Re),C.vars=i,n=n||i.animation,"refreshPriority"in i&&(Lx=1,i.refreshPriority===-9999&&(Oc=C)),U.tweenScroll=U.tweenScroll||{top:Cx(I,hi),left:Cx(I,$i)},C.tweenTo=le=U.tweenScroll[M.p],C.scrubDuration=function(ne){te=Cc(ne)&&ne,te?J?J.duration(ne):J=Fe.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return g&&g(C)}}):(J&&J.progress(1).kill(),J=0)},n&&(n.vars.lazy=!1,n._initted&&!C.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),C.animation=n.pause(),n.scrollTrigger=C,C.scrubDuration(f),me=0,l||(l=n.vars.id)),y&&((!To(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Tt.style&&Fe.set(D?[Tt,zn]:I,{scrollBehavior:"auto"}),rt.forEach(function(ne){return Qi(ne)&&ne.target===(D?Et.scrollingElement||zn:I)&&(ne.smooth=!1)}),Ze=Qi(y.snapTo)?y.snapTo:y.snapTo==="labels"?hw(n):y.snapTo==="labelsDirectional"?uw(n):y.directional!==!1?function(ne,be){return Lm(y.snapTo)(ne,Ki()-W<500?0:be.direction)}:Fe.utils.snap(y.snapTo),de=y.duration||{min:.1,max:2},de=To(de)?Ic(de.min,de.max):Ic(de,de),z=Fe.delayedCall(y.delay||te/2||.1,function(){var ne=ce(),be=Ki()-W<500,se=le.tween;if((be||Math.abs(C.getVelocity())<10)&&!se&&!Vf&&X!==ne){var Ie=(ne-Ue)/tt,dt=n&&!P?n.totalProgress():Ie,je=be?0:(dt-xe)/(Ki()-wc)*1e3||0,Ft=Fe.utils.clamp(-Ie,1-Ie,Va(je/2)*je/.185),si=Ie+(y.inertia===!1?0:Ft),Bt,Pt,bt=y,fi=bt.onStart,It=bt.onInterrupt,Ui=bt.onComplete;if(Bt=Ze(si,C),Cc(Bt)||(Bt=si),Pt=Math.max(0,Math.round(Ue+Bt*tt)),ne<=he&&ne>=Ue&&Pt!==ne){if(se&&!se._initted&&se.data<=Va(Pt-ne))return;y.inertia===!1&&(Ft=Bt-Ie),le(Pt,{duration:de(Va(Math.max(Va(si-dt),Va(Bt-dt))*.185/je/.05||0)),ease:y.ease||"power3",data:Va(Pt-ne),onInterrupt:function(){return z.restart(!0)&&It&&Ha(C,It)},onComplete:function(){C.update(),X=ce(),n&&!P&&(J?J.resetTo("totalProgress",Bt,n._tTime/n._tDur):n.progress(Bt)),me=xe=n&&!P?n.totalProgress():C.progress,v&&v(C),Ui&&Ha(C,Ui)}},ne,Ft*tt,Pt-ne-Ft*tt),fi&&Ha(C,fi,le.tween)}}else C.isActive&&X!==ne&&z.restart(!0)}).pause()),l&&(Tm[l]=C),d=C.trigger=fn(d||u!==!0&&u),ge=d&&d._gsap&&d._gsap.stRevert,ge&&(ge=ge(C)),u=u===!0?d:fn(u),Bn(a)&&(a={targets:d,className:a}),u&&(p===!1||p===Qn||(p=!p&&u.parentNode&&u.parentNode.style&&jn(u.parentNode).display==="flex"?!1:ui),C.pin=u,ve=Fe.core.getCache(u),ve.spacer?St=ve.pinState:(E&&(E=fn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),ve.spacerIsNative=!!E,E&&(ve.spacerState=If(E))),ve.spacer=ft=E||Et.createElement("div"),ft.classList.add("pin-spacer"),l&&ft.classList.add("pin-spacer-"+l),ve.pinState=St=If(u)),i.force3D!==!1&&Fe.set(u,{force3D:!0}),C.spacer=ft=ve.spacer,re=jn(u),Oe=re[p+M.os2],qe=Fe.getProperty(u),fe=Fe.quickSetter(u,M.a,xi),xm(u,ft,re),V=If(u)),G){nt=To(G)?Mx(G,bx):bx,$=Pf("scroller-start",l,I,M,nt,0),$e=Pf("scroller-end",l,I,M,nt,0,$),ot=$["offset"+M.op.d2];var Se=fn(cr(I,"content")||I);Te=this.markerStart=Pf("start",l,Se,M,nt,ot,0,_),We=this.markerEnd=Pf("end",l,Se,M,nt,ot,0,_),_&&(ye=Fe.quickSetter([Te,We],M.a,xi)),!F&&!(ps.length&&cr(I,"fixedMarkers")===!0)&&(cw(D?Tt:I),Fe.set([$,$e],{force3D:!0}),A=Fe.quickSetter($,M.a,xi),ue=Fe.quickSetter($e,M.a,xi))}if(_){var pe=_.vars.onUpdate,Me=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){C.update(0,0,1),pe&&pe.apply(_,Me||[])})}if(C.previous=function(){return lt[lt.indexOf(C)-1]},C.next=function(){return lt[lt.indexOf(C)+1]},C.revert=function(ne,be){if(!be)return C.kill(!0);var se=ne!==!1||!C.enabled,Ie=Ji;se!==C.isReverted&&(se&&(ie=Math.max(ce(),C.scroll.rec||0),j=C.progress,ee=n&&n.progress()),Te&&[Te,We,$,$e].forEach(function(dt){return dt.style.display=se?"none":"block"}),se&&(Ji=C,C.update(se)),u&&(!b||!C.isActive)&&(se?pw(u,ft,St):xm(u,ft,jn(u),L)),se||C.update(se),Ji=Ie,C.isReverted=se)},C.refresh=function(ne,be,se,Ie){if(!((Ji||!C.enabled)&&!be)){if(u&&ne&&es){Ei(s,"scrollEnd",Wx);return}!mn&&q&&q(C),Ji=C,le.tween&&!se&&(le.tween.kill(),le.tween=0),J&&J.pause(),x&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Z){return Z.vars.immediateRender&&Z.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var dt=ae(),je=_e(),Ft=_?_.duration():Ls(I,M),si=tt<=.01||!tt,Bt=0,Pt=Ie||0,bt=To(se)?se.end:i.end,fi=i.endTrigger||d,It=To(se)?se.start:i.start||(i.start===0||!d?0:u?"0 0":"0 100%"),Ui=C.pinnedContainer=i.pinnedContainer&&fn(i.pinnedContainer,C),En=d&&Math.max(0,lt.indexOf(C))||0,Zt=En,ri,di,wn,Do,pi,$t,Vn,el,qc,pr,R,H,Q;for(G&&To(se)&&(H=Fe.getProperty($,M.p),Q=Fe.getProperty($e,M.p));Zt-- >0;)$t=lt[Zt],$t.end||$t.refresh(0,1)||(Ji=C),Vn=$t.pin,Vn&&(Vn===d||Vn===u||Vn===Ui)&&!$t.isReverted&&(pr||(pr=[]),pr.unshift($t),$t.revert(!0,!0)),$t!==lt[Zt]&&(En--,Zt--);for(Qi(It)&&(It=It(C)),It=xx(It,"start",C),Ue=Ax(It,d,dt,M,ce(),Te,$,C,je,k,F,Ft,_,C._startClamp&&"_startClamp")||(u?-.001:0),Qi(bt)&&(bt=bt(C)),Bn(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(Bn(It)?It.split(" ")[0]:"")+bt:(Bt=Nf(bt.substr(2),dt),bt=Bn(It)?It:(_?Fe.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Ue):Ue)+Bt,fi=d)),bt=xx(bt,"end",C),he=Math.max(Ue,Ax(bt||(fi?"100% 0":Ft),fi,dt,M,ce()+Bt,We,$e,C,je,k,F,Ft,_,C._endClamp&&"_endClamp"))||-.001,Bt=0,Zt=En;Zt--;)$t=lt[Zt]||{},Vn=$t.pin,Vn&&$t.start-$t._pinPush<=Ue&&!_&&$t.end>0&&(ri=$t.end-(C._startClamp?Math.max(0,$t.start):$t.start),(Vn===d&&$t.start-$t._pinPush<Ue||Vn===Ui)&&isNaN(It)&&(Bt+=ri*(1-$t.progress)),Vn===u&&(Pt+=ri));if(Ue+=Bt,he+=Bt,C._startClamp&&(C._startClamp+=Bt),C._endClamp&&!mn&&(C._endClamp=he||-.001,he=Math.min(he,Ls(I,M))),tt=he-Ue||(Ue-=.01)&&.001,si&&(j=Fe.utils.clamp(0,1,Fe.utils.normalize(Ue,he,ie))),C._pinPush=Pt,Te&&Bt&&(ri={},ri[M.a]="+="+Bt,Ui&&(ri[M.p]="-="+ce()),Fe.set([Te,We],ri)),u&&!(bm&&C.end>=Ls(I,M)))ri=jn(u),Do=M===hi,wn=ce(),Qe=parseFloat(qe(M.a))+Pt,!Ft&&he>1&&(R=(D?Et.scrollingElement||zn:I).style,R={style:R,value:R["overflow"+M.a.toUpperCase()]},D&&jn(Tt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(R.style["overflow"+M.a.toUpperCase()]="scroll")),xm(u,ft,ri),V=If(u),di=hr(u,!0),el=F&&lr(I,Do?$i:hi)(),p?(L=[p+M.os2,tt+Pt+xi],L.t=ft,Zt=p===ui?kf(u,M)+tt+Pt:0,Zt&&(L.push(M.d,Zt+xi),ft.style.flexBasis!=="auto"&&(ft.style.flexBasis=Zt+xi)),Ya(L),Ui&&lt.forEach(function(Z){Z.pin===Ui&&Z.vars.pinSpacing!==!1&&(Z._subPinOffset=!0)}),F&&ce(ie)):(Zt=kf(u,M),Zt&&ft.style.flexBasis!=="auto"&&(ft.style.flexBasis=Zt+xi)),F&&(pi={top:di.top+(Do?wn-Ue:el)+xi,left:di.left+(Do?el:wn-Ue)+xi,boxSizing:"border-box",position:"fixed"},pi[wo]=pi["max"+Za]=Math.ceil(di.width)+xi,pi[Ao]=pi["max"+Dm]=Math.ceil(di.height)+xi,pi[Qn]=pi[Qn+Nc]=pi[Qn+Dc]=pi[Qn+Uc]=pi[Qn+Lc]="0",pi[ui]=ri[ui],pi[ui+Nc]=ri[ui+Nc],pi[ui+Dc]=ri[ui+Dc],pi[ui+Uc]=ri[ui+Uc],pi[ui+Lc]=ri[ui+Lc],At=gw(St,pi,b),mn&&ce(0)),n?(qc=n._initted,pm(1),n.render(n.duration(),!0,!0),Ne=qe(M.a)-Qe+tt+Pt,Y=Math.abs(tt-Ne)>1,F&&Y&&At.splice(At.length-2,2),n.render(0,!0,!0),qc||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),pm(0)):Ne=tt,R&&(R.value?R.style["overflow"+M.a.toUpperCase()]=R.value:R.style.removeProperty("overflow-"+M.a));else if(d&&ce()&&!_)for(di=d.parentNode;di&&di!==Tt;)di._pinOffset&&(Ue-=di._pinOffset,he-=di._pinOffset),di=di.parentNode;pr&&pr.forEach(function(Z){return Z.revert(!1,!0)}),C.start=Ue,C.end=he,Re=Xe=mn?ie:ce(),!_&&!mn&&!Hr&&(Re<ie&&ce(ie),C.scroll.rec=0),C.revert(!1,!0),W=Ki(),z&&(X=-1,z.restart(!0)),Ji=0,n&&P&&(n._initted||ee)&&n.progress()!==ee&&n.progress(ee||0,!0).render(n.time(),!0,!0),(si||j!==C.progress||_||x||n&&!n._initted)&&(n&&!P&&(n._initted||j||n.vars.immediateRender!==!1)&&n.totalProgress(_&&Ue<-.001&&!j?Fe.utils.normalize(Ue,he,0):j,!0),C.progress=si||(Re-Ue)/tt===j?0:j),u&&p&&(ft._pinOffset=Math.round(C.progress*Ne)),J&&J.invalidate(),isNaN(H)||(H-=Fe.getProperty($,M.p),Q-=Fe.getProperty($e,M.p),Df($,M,H),Df(Te,M,H-(Ie||0)),Df($e,M,Q),Df(We,M,Q-(Ie||0))),si&&!mn&&C.update(),h&&!mn&&!xt&&(xt=!0,h(C),xt=!1)}},C.getVelocity=function(){return(ce()-Xe)/(Ki()-wc)*1e3||0},C.endAnimation=function(){Ec(C.callbackAnimation),n&&(J?J.progress(1):n.paused()?P||Ec(n,C.direction<0,1):Ec(n,n.reversed()))},C.labelToScroll=function(ne){return n&&n.labels&&(Ue||C.refresh()||Ue)+n.labels[ne]/n.duration()*tt||0},C.getTrailing=function(ne){var be=lt.indexOf(C),se=C.direction>0?lt.slice(0,be).reverse():lt.slice(be+1);return(Bn(ne)?se.filter(function(Ie){return Ie.vars.preventOverlaps===ne}):se).filter(function(Ie){return C.direction>0?Ie.end<=Ue:Ie.start>=he})},C.update=function(ne,be,se){if(!(_&&!se&&!ne)){var Ie=mn===!0?ie:C.scroll(),dt=ne?0:(Ie-Ue)/tt,je=dt<0?0:dt>1?1:dt||0,Ft=C.progress,si,Bt,Pt,bt,fi,It,Ui,En;if(be&&(Xe=Re,Re=_?ce():Ie,y&&(xe=me,me=n&&!P?n.totalProgress():je)),m&&u&&!Ji&&!Ef&&es&&(!je&&Ue<Ie+(Ie-Xe)/(Ki()-wc)*m?je=1e-4:je===1&&he>Ie+(Ie-Xe)/(Ki()-wc)*m&&(je=.9999)),je!==Ft&&C.enabled){if(si=C.isActive=!!je&&je<1,Bt=!!Ft&&Ft<1,It=si!==Bt,fi=It||!!je!=!!Ft,C.direction=je>Ft?1:-1,C.progress=je,fi&&!Ji&&(Pt=je&&!Ft?0:je===1?1:Ft===1?2:3,P&&(bt=!It&&O[Pt+1]!=="none"&&O[Pt+1]||O[Pt],En=n&&(bt==="complete"||bt==="reset"||bt in n))),w&&(It||En)&&(En||f||!n)&&(Qi(w)?w(C):C.getTrailing(w).forEach(function(wn){return wn.endAnimation()})),P||(J&&!Ji&&!Ef?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",je,n._tTime/n._tDur):(J.vars.totalProgress=je,J.invalidate().restart())):n&&n.totalProgress(je,!!(Ji&&(W||ne)))),u){if(ne&&p&&(ft.style[p+M.os2]=Oe),!F)fe(Rc(Qe+Ne*je));else if(fi){if(Ui=!ne&&je>Ft&&he+1>Ie&&Ie+1>=Ls(I,M),b)if(!ne&&(si||Ui)){var Zt=hr(u,!0),ri=Ie-Ue;Rx(u,Tt,Zt.top+(M===hi?ri:0)+xi,Zt.left+(M===hi?0:ri)+xi)}else Rx(u,ft);Ya(si||Ui?At:V),Y&&je<1&&si||fe(Qe+(je===1&&!Ui?Ne:0))}}y&&!le.tween&&!Ji&&!Ef&&z.restart(!0),a&&(It||T&&je&&(je<1||!mm))&&Fc(a.targets).forEach(function(wn){return wn.classList[si||T?"add":"remove"](a.className)}),o&&!P&&!ne&&o(C),fi&&!Ji?(P&&(En&&(bt==="complete"?n.pause().totalProgress(1):bt==="reset"?n.restart(!0).pause():bt==="restart"?n.restart(!0):n[bt]()),o&&o(C)),(It||!mm)&&(c&&It&&Ha(C,c),N[Pt]&&Ha(C,N[Pt]),T&&(je===1?C.kill(!1,1):N[Pt]=0),It||(Pt=je===1?1:3,N[Pt]&&Ha(C,N[Pt]))),S&&!si&&Math.abs(C.getVelocity())>(Cc(S)?S:2500)&&(Ec(C.callbackAnimation),J?J.progress(1):Ec(n,bt==="reverse"?1:!je,1))):P&&o&&!Ji&&o(C)}if(ue){var di=_?Ie/_.duration()*(_._caScrollDist||0):Ie;A(di+($._isFlipped?1:0)),ue(di)}ye&&ye(-Ie/_.duration()*(_._caScrollDist||0))}},C.enable=function(ne,be){C.enabled||(C.enabled=!0,Ei(I,"resize",Pc),D||Ei(I,"scroll",Ga),q&&Ei(s,"refreshInit",q),ne!==!1&&(C.progress=j=0,Re=Xe=X=ce()),be!==!1&&C.refresh())},C.getTween=function(ne){return ne&&le?le.tween:J},C.setPositions=function(ne,be,se,Ie){if(_){var dt=_.scrollTrigger,je=_.duration(),Ft=dt.end-dt.start;ne=dt.start+Ft*ne/je,be=dt.start+Ft*be/je}C.refresh(!1,!1,{start:vx(ne,se&&!!C._startClamp),end:vx(be,se&&!!C._endClamp)},Ie),C.update()},C.adjustPinSpacing=function(ne){if(L&&ne){var be=L.indexOf(M.d)+1;L[be]=parseFloat(L[be])+ne+xi,L[1]=parseFloat(L[1])+ne+xi,Ya(L)}},C.disable=function(ne,be){if(ne!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,be||J&&J.pause(),ie=0,ve&&(ve.uncache=1),q&&Ti(s,"refreshInit",q),z&&(z.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!D)){for(var se=lt.length;se--;)if(lt[se].scroller===I&&lt[se]!==C)return;Ti(I,"resize",Pc),D||Ti(I,"scroll",Ga)}},C.kill=function(ne,be){C.disable(ne,be),J&&!be&&J.kill(),l&&delete Tm[l];var se=lt.indexOf(C);se>=0&&lt.splice(se,1),se===pn&&Of>0&&pn--,se=0,lt.forEach(function(Ie){return Ie.scroller===C.scroller&&(se=1)}),se||mn||Hr||(C.scroll.rec=0),n&&(n.scrollTrigger=null,ne&&n.revert({kill:!1}),be||n.kill()),Te&&[Te,We,$,$e].forEach(function(Ie){return Ie.parentNode&&Ie.parentNode.removeChild(Ie)}),Oc===C&&(Oc=0),u&&(ve&&(ve.uncache=1),se=0,lt.forEach(function(Ie){return Ie.pin===u&&se++}),se||(ve.spacer=0)),i.onKill&&i.onKill(C)},lt.push(C),C.enable(!1,!1),ge&&ge(C),n&&n.add&&!tt){var oe=C.update;C.update=function(){C.update=oe,rt.cache++,Ue||he||C.refresh()},Fe.delayedCall(.01,C.update),tt=.01,Ue=he=0}else C.refresh();u&&dw()},s.register=function(i){return Wa||(Fe=i||Bx(),Fx()&&window.document&&s.enable(),Wa=Ac),Wa},s.defaults=function(i){if(i)for(var n in i)Cf[n]=i[n];return Cf},s.disable=function(i,n){Ac=0,lt.forEach(function(o){return o[n?"kill":"disable"](i)}),Ti(ct,"wheel",Ga),Ti(Et,"scroll",Ga),clearInterval(Tf),Ti(Et,"touchcancel",Ds),Ti(Tt,"touchstart",Ds),Af(Ti,Et,"pointerdown,touchstart,mousedown",yx),Af(Ti,Et,"pointerup,touchend,mouseup",Sx),zf.kill(),wf(Ti);for(var r=0;r<rt.length;r+=3)Rf(Ti,rt[r],rt[r+1]),Rf(Ti,rt[r],rt[r+2])},s.enable=function(){if(ct=window,Et=document,zn=Et.documentElement,Tt=Et.body,Fe){if(Fc=Fe.utils.toArray,Ic=Fe.utils.clamp,Mm=Fe.core.context||Ds,pm=Fe.core.suppressOverwrites||Ds,Rm=ct.history.scrollRestoration||"auto",Em=ct.pageYOffset||0,Fe.core.globals("ScrollTrigger",s),Tt){Ac=1,qa=document.createElement("div"),qa.style.height="100vh",qa.style.position="absolute",Zx(),ow(),jt.register(Fe),s.isTouch=jt.isTouch,kr=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sm=jt.isTouch===1,Ei(ct,"wheel",Ga),Am=[ct,Et,zn,Tt],Fe.matchMedia?(s.matchMedia=function(h){var f=Fe.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},Fe.addEventListener("matchMediaInit",function(){qx(),Nm()}),Fe.addEventListener("matchMediaRevert",function(){return Xx()}),Fe.addEventListener("matchMedia",function(){Eo(0,1),Io("matchMedia")}),Fe.matchMedia().add("(orientation: portrait)",function(){return _m(),_m})):console.warn("Requires GSAP 3.11.0 or later"),_m(),Ei(Et,"scroll",Ga);var i=Tt.hasAttribute("style"),n=Tt.style,r=n.borderTopStyle,o=Fe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=hr(Tt),hi.m=Math.round(a.top+hi.sc())||0,$i.m=Math.round(a.left+$i.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),Tf=setInterval(Tx,250),Fe.delayedCall(.5,function(){return Ef=0}),Ei(Et,"touchcancel",Ds),Ei(Tt,"touchstart",Ds),Af(Ei,Et,"pointerdown,touchstart,mousedown",yx),Af(Ei,Et,"pointerup,touchend,mouseup",Sx),ym=Fe.utils.checkPrefix("transform"),Ff.push(ym),Wa=Ki(),zf=Fe.delayedCall(.2,Eo).pause(),Xa=[Et,"visibilitychange",function(){var h=ct.innerWidth,f=ct.innerHeight;Et.hidden?(gx=h,_x=f):(gx!==h||_x!==f)&&Pc()},Et,"DOMContentLoaded",Eo,ct,"load",Eo,ct,"resize",Pc],wf(Ei),lt.forEach(function(h){return h.enable(0,1)}),l=0;l<rt.length;l+=3)Rf(Ti,rt[l],rt[l+1]),Rf(Ti,rt[l],rt[l+2])}else if(Et){var c=function h(){s.enable(),Et.removeEventListener("DOMContentLoaded",h)};Et.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(mm=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Tf)||(Tf=n)&&setInterval(Tx,n),"ignoreMobileResize"in i&&(Sm=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(wf(Ti)||wf(Ei,i.autoRefreshEvents||"none"),Nx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=fn(i),o=rt.indexOf(r),a=Co(r);~o&&rt.splice(o,a?6:2),n&&(a?ps.unshift(ct,n,Tt,n,zn,n):ps.unshift(r,n))},s.clearMatchMedia=function(i){lt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(Bn(i)?fn(i):i).getBoundingClientRect(),a=o[r?wo:Ao]*n||0;return r?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},s.positionInViewport=function(i,n,r){Bn(i)&&(i=fn(i));var o=i.getBoundingClientRect(),a=o[r?wo:Ao],l=n==null?a/2:n in Hf?Hf[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},s.killAll=function(i){if(lt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Po.killAll||[];Po={},n.forEach(function(r){return r()})}},s})();ht.version="3.15.1";ht.saveStyles=function(s){return s?Fc(s).forEach(function(e){if(e&&e.style){var t=Fn.indexOf(e);t>=0&&Fn.splice(t,5),Fn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Fe.core.getCache(e),Mm())}}):Fn};ht.revert=function(s,e){return Nm(!s,e)};ht.create=function(s,e){return new ht(s,e)};ht.refresh=function(s){return s?Pc(!0):(Wa||ht.register())&&Eo(!0)};ht.update=function(s){return++rt.cache&&ur(s===!0?2:0)};ht.clearScrollMemory=Yx;ht.maxScroll=function(s,e){return Ls(s,e?$i:hi)};ht.getScrollFunc=function(s,e){return lr(fn(s),e?$i:hi)};ht.getById=function(s){return Tm[s]};ht.getAll=function(){return lt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!es};ht.snapDirectional=Lm;ht.addEventListener=function(s,e){var t=Po[s]||(Po[s]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(s,e){var t=Po[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ht.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Fe.delayedCall(n,function(){h(f,d),f=[],d=[]}).pause();return function(p){f.length||u.restart(!0),f.push(p.trigger),d.push(p),r<=f.length&&u.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Qi(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Qi(r)&&(r=r(),Ei(ht,"refresh",function(){return r=e.batchMax()})),Fc(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ht.create(c))}),t};var Px=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},vm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===zn&&s(Tt,t)},Lf={auto:1,scroll:1},xw=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Fe.core.getCache(r),a=Ki(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Tt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Lf[(l=jn(r)).overflowY]||Lf[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!Co(r)&&(Lf[(l=jn(r)).overflowY]||Lf[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Jx=function(e,t,i,n){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&xw,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ei(Et,jt.eventTypes[0],Dx,!1,!0)},onDisable:function(){return Ti(Et,jt.eventTypes[0],Dx,!0)}})},vw=/(input|label|select|textarea)/i,Ix,Dx=function(e){var t=vw.test(e.target.tagName);(t||Ix)&&(e._gsapAllow=!0,Ix=t)},yw=function(e){To(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=fn(e.target)||zn,h=Fe.core.globals().ScrollSmoother,f=h&&h.get(),d=kr&&(e.content&&fn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=lr(c,hi),p=lr(c,$i),x=1,m=(jt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,g=0,v=Qi(n)?function(){return n(a)}:function(){return n||2.8},T,y,b=Jx(c,e.type,!0,r),E=function(){return y=!1},_=Ds,S=Ds,w=function(){l=Ls(c,hi),S=Ic(kr?1:0,l),i&&(_=Ic(0,Ls(c,$i))),T=Ro},M=function(){d._gsap.y=Rc(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},P=function(){if(y){requestAnimationFrame(E);var G=Rc(a.deltaY/2),k=S(u.v-G);if(d&&k!==u.v+u.offset){u.offset=k-u.v;var C=Rc((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",u.cacheID=rt.cache,ur()}return!0}u.offset&&M(),y=!0},I,U,D,F,N=function(){w(),I.isActive()&&I.vars.scrollY>l&&(u()>l?I.progress(1)&&u(l):I.resetTo("scrollY",l))};return d&&Fe.set(d,{y:"+=0"}),e.ignoreCheck=function(O){return kr&&O.type==="touchmove"&&P(O)||x>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=x;x=Rc((ct.visualViewport&&ct.visualViewport.scale||1)/m),I.pause(),O!==x&&vm(c,x>1.01?!0:i?!1:"x"),U=p(),D=u(),w(),T=Ro},e.onRelease=e.onGestureStart=function(O,G){if(u.offset&&M(),!G)F.restart(!0);else{rt.cache++;var k=v(),C,q;i&&(C=p(),q=C+k*.05*-O.velocityX/.227,k*=Px(p,C,q,Ls(c,$i)),I.vars.scrollX=_(q)),C=u(),q=C+k*.05*-O.velocityY/.227,k*=Px(u,C,q,Ls(c,hi)),I.vars.scrollY=S(q),I.invalidate().duration(k).play(.01),(kr&&I.vars.scrollY>=l||C>=l-1)&&Fe.to({},{onUpdate:N,duration:k})}o&&o(O)},e.onWheel=function(){I._ts&&I.pause(),Ki()-g>1e3&&(T=0,g=Ki())},e.onChange=function(O,G,k,C,q){if(Ro!==T&&w(),G&&i&&p(_(C[2]===G?U+(O.startX-O.x):p()+G-C[1])),k){u.offset&&M();var ae=q[2]===k,_e=ae?D+O.startY-O.y:u()+k-q[1],X=S(_e);ae&&_e!==X&&(D+=X-_e),u(X)}(k||G)&&ur()},e.onEnable=function(){vm(c,i?!1:"x"),ht.addEventListener("refresh",N),Ei(ct,"resize",N),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){vm(c,!0),Ti(ct,"resize",N),ht.removeEventListener("refresh",N),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=kr,kr&&!u()&&u(1),kr&&Fe.ticker.add(Ds),F=a._dc,I=Fe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$x(u,u(),function(){return I.pause()})},onUpdate:ur,onComplete:F.vars.onComplete}),a};ht.sort=function(s){if(Qi(s))return lt.sort(s);var e=ct.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),lt.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ht.observe=function(s){return new jt(s)};ht.normalizeScroll=function(s){if(typeof s>"u")return dn;if(s===!0&&dn)return dn.enable();if(s===!1){dn&&dn.kill(),dn=s;return}var e=s instanceof jt?s:yw(s);return dn&&dn.target===e.target&&dn.kill(),Co(e.target)&&(dn=e),e};ht.core={_getVelocityProp:bf,_inputObserver:Jx,_scrollers:rt,_proxies:ps,bridge:{ss:function(){es||Io("scrollStart"),es=Ki()},ref:function(){return Ji}}};Bx()&&Fe.registerPlugin(ht);var zc,kc,Kx=typeof Symbol=="function"?Symbol():"_split",Om,Sw=()=>Om||Xf.register(window.gsap),Qx=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Hc=s=>s?typeof s=="string"?Hc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...Hc(t)):e.push(t),e),[]):[s]:[],jx=s=>Hc(s).filter(e=>e&&e.nodeType===1),Gf=[],Um=function(){},Mw={add:s=>s()},bw=/\s+/g,ev=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Wf={left:0,top:0,width:0,height:0},Tw=(s,e)=>{for(;++e<s.length&&s[e]===Wf;);return s[e]||Wf},tv=({element:s,html:e,ariaL:t,ariaH:i})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},iv=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||Gf),i=s.length,n,r,o,a;if(t.size)for(;--i>-1;){r=s[i];for(o of t)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},nv=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),$a=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),Fm=(s,e,t)=>{let i=e[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=e,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let f=document.createElement(n),d=t.length+1;return i&&(f.className=i+(l?" "+i+d:"")),o&&f.style.setProperty("--"+s,d+""),r!=="none"&&f.setAttribute("aria-hidden","true"),n!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=h,t.push(f),f};return l&&(i=i.replace("++","")),c.collection=t,c},Ew=(s,e,t,i)=>{let n=Fm("line",t,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},sv=(s,e,t,i,n,r,o,a,l,c)=>{var h;let f=Array.from(s.childNodes),d=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:x}=e,m=s.getBoundingClientRect(),g=m,v=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",T=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=t.collection,E,_,S,w,M,P,I,U,D,F,N,O,G,k,C,q,ae,_e;for(typeof u=="object"?(S=u.delimiter||u,_=u.replaceWith||""):_=u===""?"":u||" ",E=_!==" ";d<f.length;d++)if(w=f[d],w.nodeType===3){for(C=w.textContent||"",p?C=C.replace(bw," "):v&&(C=C.replace(/\n/g,_+`
`)),x&&(C=x(C,s)),w.textContent=C,M=_||S?C.split(S||_):C.match(a)||Gf,ae=M[M.length-1],U=E?ae.slice(-1)===" ":!ae,ae||M.pop(),g=m,I=E?M[0].charAt(0)===" ":!M[0],I&&$a(" ",s,w),M[0]||M.shift(),iv(M,l),r&&c||(w.textContent=""),D=1;D<=M.length;D++)if(q=M[D-1],!p&&v&&q.charAt(0)===`
`&&((h=w.previousSibling)==null||h.remove(),$a(document.createElement("br"),s,w),q=q.slice(1)),!p&&q==="")$a(_,s,w);else if(q===" ")s.insertBefore(document.createTextNode(" "),w);else{if(E&&q.charAt(0)===" "&&$a(" ",s,w),y&&D===1&&!I&&b.indexOf(y.parentNode)>-1?(P=b[b.length-1],P.appendChild(document.createTextNode(i?"":q))):(P=t(i?"":q),$a(P,s,w),y&&D===1&&!I&&P.insertBefore(y,P.firstChild)),i){if(N=Qx?iv([...Qx.segment(q)].map(X=>X.segment),l):q.match(a)||Gf,l){let X=q.match(l);X&&X.some(W=>N.indexOf(W)<0)&&(N=q.match(a)||Gf)}for(_e=0;_e<N.length;_e++)P.appendChild(N[_e]===" "?document.createTextNode(" "):i(N[_e]))}if(r&&c){if(C=w.textContent=C.substring(q.length+1,C.length),F=P.getBoundingClientRect(),F.top>g.top&&(T?F.left>=g.left:F.left<=g.left)){for(O=s.cloneNode(),G=s.childNodes[0];G&&G!==P;)k=G,G=G.nextSibling,O.appendChild(k);s.parentNode.insertBefore(O,s),n&&nv(O)}g=F}(D<M.length||U)&&$a(D>=M.length?" ":E&&q.slice(-1)===" "?" "+_:_,s,w)}s.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(b.indexOf(w.previousSibling)>-1&&b[b.length-1].appendChild(w),y=w):(sv(w,e,t,i,n,r,o,a,l,!0),y=0),n&&nv(w))},rv=class ov{constructor(e,t){this.isSplit=!1,Sw(),this.elements=jx(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(r=>{var o;t.overwrite!==!1&&((o=r[Kx])==null||o._data.orig.filter(({element:a})=>a===r).forEach(tv)),r[Kx]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},Um(this),this.split(t)}split(e){return(this._ctx||Mw).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,d=t.indexOf("words")>-1,u=f&&!d&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),x=p?new RegExp(p.source+"|"+ev.source,"gu"):ev,m=!!e.ignore&&jx(e.ignore),{orig:g,animTime:v,obs:T}=this._data,y;(f||d||h)&&(this.elements.forEach((b,E)=>{g[E]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],w=[],M=f?Fm("char",e,_):null,P=Fm("word",e,S),I,U,D,F;if(sv(b,e,P,M,u,n&&(h||u),m,x,p,!1),h){let N=Hc(b.childNodes),O=Ew(b,N,e,w),G,k=[],C=0,q=window.getComputedStyle(b).direction==="rtl",ae=N.map(W=>W.nodeType===1?W.getBoundingClientRect():Wf),_e=Wf,X;for(I=0;I<N.length;I++)G=N[I],G.nodeType===1&&(G.nodeName==="BR"?((!I||N[I-1].nodeName!=="BR")&&(k.push(G),O(C,I+1)),C=I+1,_e=Tw(ae,I)):(X=ae[I],I&&X.top>_e.top&&(q?X.left+X.width>_e.left+1:X.left<_e.left+_e.width-1)&&(O(C,I),C=I),_e=X));C<I&&O(C,I),k.forEach(W=>{var j;return(j=W.parentNode)==null?void 0:j.removeChild(W)})}if(!d){for(I=0;I<S.length;I++)if(U=S[I],f||!U.nextSibling||U.nextSibling.nodeType!==3)if(r&&!h){for(D=document.createElement("span"),D.style.whiteSpace="nowrap";U.firstChild;)D.appendChild(U.firstChild);U.replaceWith(D)}else U.replaceWith(...U.childNodes);else F=U.nextSibling,F&&F.nodeType===3&&(F.textContent=(U.textContent||"")+(F.textContent||""),U.remove());S.length=0,b.normalize()}this.lines.push(...w),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let E=b.cloneNode();return b.replaceWith(E),E.appendChild(b),b.className&&(E.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),E.style.overflow="clip",E.style.verticalAlign="top",E}))),this.isSplit=!0,kc&&h&&a&&kc.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,E)=>{g[E].width=b.offsetWidth,T&&T.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),kc?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(tv),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new ov(e,t)}static register(e){zc=zc||e||window.gsap,zc&&(Hc=zc.utils.toArray,Um=zc.core.context||Um),!Om&&window.innerWidth>0&&(kc=document.fonts,Om=!0)}};rv.version="3.15.1";var Xf=rv;var av="1.3.28";function hv(s,e,t){return Math.max(s,Math.min(e,t))}function ww(s,e,t){return(1-t)*s+t*e}function Aw(s,e,t,i){return ww(s,e,1-Math.exp(-t*i))}function Rw(s,e){return(s%e+e)%e}var Cw=class{constructor(){ze(this,"isRunning",!1);ze(this,"value",0);ze(this,"from",0);ze(this,"to",0);ze(this,"currentTime",0);ze(this,"lerp");ze(this,"duration");ze(this,"easing");ze(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=hv(0,this.currentTime/this.duration,1);e=t>=1;let i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Aw(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Pw(s,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,i)},e)}}var Iw=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){ze(this,"wrapper");ze(this,"content");ze(this,"width",0);ze(this,"height",0);ze(this,"scrollHeight",0);ze(this,"scrollWidth",0);ze(this,"debouncedResize");ze(this,"wrapperResizeObserver");ze(this,"contentResizeObserver");ze(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ze(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ze(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Pw(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},uv=class{constructor(){ze(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let i=0,n=t.length;i<n;i++)t[i]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Dw=100/6,Vr={passive:!1};function lv(s,e){return s===1?Dw:s===2?e:1}var Lw=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){ze(this,"element");ze(this,"options");ze(this,"touchStart",{x:0,y:0});ze(this,"lastDelta",{x:0,y:0});ze(this,"window",{width:0,height:0});ze(this,"emitter",new uv);ze(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});ze(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});ze(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});ze(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s,n=lv(i,this.window.width),r=lv(i,this.window.height);e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});ze(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vr),this.element.addEventListener("touchstart",this.onTouchStart,Vr),this.element.addEventListener("touchmove",this.onTouchMove,Vr),this.element.addEventListener("touchend",this.onTouchEnd,Vr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Vr),this.element.removeEventListener("touchstart",this.onTouchStart,Vr),this.element.removeEventListener("touchmove",this.onTouchMove,Vr),this.element.removeEventListener("touchend",this.onTouchEnd,Vr)}},cv=s=>Math.min(1,1.001-2**(-10*s)),fv=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:w=!1,respectReducedMotion:M=!0}={}){ze(this,"_isScrolling",!1);ze(this,"_isStopped",!1);ze(this,"_isLocked",!1);ze(this,"_preventNextNativeScrollEvent",!1);ze(this,"_resetVelocityTimeout",null);ze(this,"_rafId",null);ze(this,"_isDraggingSelection",!1);ze(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));ze(this,"isTouching");ze(this,"isIos");ze(this,"time",0);ze(this,"userData",{});ze(this,"lastVelocity",0);ze(this,"velocity",0);ze(this,"direction",0);ze(this,"options");ze(this,"targetScroll");ze(this,"animatedScroll");ze(this,"animate",new Cw);ze(this,"emitter",new uv);ze(this,"dimensions");ze(this,"virtualScroll");ze(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});ze(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ze(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});ze(this,"onClick",s=>{let e=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){let i=e.find(n=>t.host===n.host&&t.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,n);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});ze(this,"onPointerDown",s=>{s.button===1&&this.reset()});ze(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let d=n&&this.options.syncTouch,u=n&&i.type==="touchend";u&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ze(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ze(this,"raf",s=>{let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=av,window.lenis||(window.lenis={}),window.lenis.version=av,f==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=cv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:g,overscroll:v,autoRaf:T,anchors:y,autoToggle:b,allowNestedScroll:E,naiveDimensions:S,stopInertiaOnNavigate:w,respectReducedMotion:M},this.dimensions=new Iw(s,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Lw(t,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;let i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],r=i[i.length-1],o=40,a=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(n?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=s,u=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(p=d),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);d=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(T)?0:T)}}if(typeof d=="number"){if(d+=u,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=hv(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=cv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){let i=Date.now();s._lenis||(s._lenis={});let n=s._lenis,r,o,a,l,c,h,f,d,u,p;if(i-(n.time??0)>2e3){n.time=Date.now();let E=window.getComputedStyle(s);if(n.computedStyle=E,r=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=o,!(r||o))return!1;f=s.scrollWidth,d=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=f>u,l=d>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=f,n.scrollHeight=d,n.clientWidth=u,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,f=n.scrollWidth,d=n.scrollHeight,u=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,g,v,T,y,b;if(x==="horizontal")m=Math.round(s.scrollLeft),g=f-u,v=e,T=r,y=a,b=c;else if(x==="vertical")m=Math.round(s.scrollTop),g=d-p,v=t,T=o,y=l,b=h;else return!1;return!b&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Rw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var Vc=new B;function ts(s,e,t,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;Vc.copy(e),Vc[i]=0,Vc.normalize();let c=.5*o/(o+a),h=1-Vc.angleTo(s)/l;return Math.sign(Vc[t])===1?h*c:a/(o+a)+c+c*(1-h)}var kn=class s extends li{constructor(e=1,t=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=f.length/6,x=new B,m=.5/o;for(let g=0,v=0;g<f.length;g+=3,v+=2)switch(l.fromArray(f,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[g+0]=h.x*Math.sign(l.x)+c.x*r,f[g+1]=h.y*Math.sign(l.y)+c.y*r,f[g+2]=h.z*Math.sign(l.z)+c.z*r,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[v+0]=ts(x,c,"z","y",r,i),u[v+1]=1-ts(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[v+0]=1-ts(x,c,"z","y",r,i),u[v+1]=1-ts(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[v+0]=1-ts(x,c,"x","z",r,e),u[v+1]=ts(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),u[v+0]=1-ts(x,c,"x","z",r,e),u[v+1]=1-ts(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),u[v+0]=1-ts(x,c,"x","y",r,e),u[v+1]=1-ts(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[v+0]=ts(x,c,"x","y",r,e),u[v+1]=1-ts(x,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Gr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Yf(s,e,t=5){let i=document.createElement("canvas");i.width=i.height=s;let n=i.getContext("2d"),r=n.createImageData(s,s),o=Gr(e),a=[];for(let l=0;l<t;l++){let c=4<<l,h=new Float32Array((c+1)*(c+1));for(let f=0;f<h.length;f++)h[f]=o();for(let f=0;f<=c;f++)h[f*(c+1)+c]=h[f*(c+1)],h[c*(c+1)+f]=h[f];a.push([c,h])}for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0,f=.5,d=0;for(let[x,m]of a){let g=c/s*x,v=l/s*x,T=g|0,y=v|0,b=g-T,E=v-y,_=b*b*(3-2*b),S=E*E*(3-2*E),w=x+1,M=m[y*w+T]*(1-_)+m[y*w+T+1]*_,P=m[(y+1)*w+T]*(1-_)+m[(y+1)*w+T+1]*_;h+=(M*(1-S)+P*S)*f,d+=f,f*=.5}let u=(l*s+c)*4,p=h/d*255;r.data[u]=r.data[u+1]=r.data[u+2]=p,r.data[u+3]=255}return n.putImageData(r,0,0),i}function dv(s,e=2.5){let t=s.width,i=s.height,n=s.getContext("2d").getImageData(0,0,t,i).data,r=document.createElement("canvas");r.width=t,r.height=i;let o=r.getContext("2d"),a=o.createImageData(t,i),l=a.data,c=(h,f)=>n[((f+i)%i*t+(h+t)%t)*4]/255;for(let h=0;h<i;h++)for(let f=0;f<t;f++){let d=(c(f+1,h)-c(f-1,h))*e,u=(c(f,h+1)-c(f,h-1))*e,p=Math.hypot(d,u,1),x=(h*t+f)*4;l[x]=(-d/p*.5+.5)*255,l[x+1]=(u/p*.5+.5)*255,l[x+2]=(1/p*.5+.5)*255,l[x+3]=255}return o.putImageData(a,0,0),r}function qf(s,e){let t=new sn(s);return t.wrapS=t.wrapT=xn,t.anisotropy=8,e&&(t.colorSpace=ei),t}function zm({w:s=1024,h:e=512,rows:t=4,seed:i=1}={}){let n=Gr(i),r=document.createElement("canvas"),o=document.createElement("canvas"),a=document.createElement("canvas");for(let g of[r,o,a])g.width=s,g.height=e;let l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d");l.fillStyle="#7a5a3c",l.fillRect(0,0,s,e),c.fillStyle="#1a1a1a",c.fillRect(0,0,s,e),h.fillStyle="#f2f2f2",h.fillRect(0,0,s,e);let f=e/t,d=5;for(let g=0;g<t;g++){let v=-n()*120;for(;v<s;){let T=110+n()*150,y=v+d/2,b=g*f+d/2,E=T-d,_=f-d,S=30+n()*8,w=36+n()*14,M=60+n()*12,P=l.createLinearGradient(0,b,0,b+_);P.addColorStop(0,`hsl(${S},${w}%,${M+4}%)`),P.addColorStop(.75,`hsl(${S},${w}%,${M}%)`),P.addColorStop(1,`hsl(${S-4},${w-6}%,${M-12}%)`),l.fillStyle=P,Bm(l,y,b,E,_,7),l.fill();let I=150+n()*60;for(let U=0;U<6;U++){let D=Math.min(255,I*(.55+U*.09))|0;c.fillStyle=`rgb(${D},${D},${D})`,Bm(c,y+U*1.6,b+U*1.6,E-U*3.2,_-U*3.2,7),c.fill()}h.fillStyle=`rgb(${200+n()*40|0},${200+n()*40|0},${200+n()*40|0})`,Bm(h,y,b,E,_,7),h.fill();for(let U=0;U<2;U++){let D=y+n()*E,F=n()<.5?b+n()*5:b+_-n()*5,N=3+n()*6;c.fillStyle="#5a5a5a",l.fillStyle=`hsla(${S},${w}%,${M-10}%,.7)`;for(let O of[c,l]){O.beginPath();for(let G=0;G<7;G++){let k=N*(.5+n()*.7),C=G/7*Math.PI*2;O.lineTo(D+Math.cos(C)*k*1.6,F+Math.sin(C)*k*.7)}O.closePath(),O.fill()}}v+=T}}let u=Yf(128,i+7,5),p=Yf(256,i+13,4);l.globalCompositeOperation="multiply",l.globalAlpha=.35,l.drawImage(u,0,0,s,e),l.globalAlpha=.25,l.drawImage(p,0,0,s,e),l.globalCompositeOperation="overlay",l.globalAlpha=.25,l.drawImage(p,0,0,s/2,e/2),l.drawImage(p,s/2,0,s/2,e/2),l.drawImage(p,0,e/2,s/2,e/2),l.drawImage(p,s/2,e/2,s/2,e/2),l.globalCompositeOperation="source-over",l.globalAlpha=1,c.globalCompositeOperation="overlay",c.globalAlpha=.6,c.drawImage(p,0,0,s,e),c.globalAlpha=1,c.globalCompositeOperation="source-over";let x=l.getImageData(0,0,s,e),m=c.getImageData(0,0,s,e);for(let g=0;g<s*e*.008;g++){let v=(n()*s*e|0)*4,T=.7+n()*.2;x.data[v]*=T,x.data[v+1]*=T,x.data[v+2]*=T,m.data[v]=m.data[v+1]=m.data[v+2]=m.data[v]*.6}return l.putImageData(x,0,0),c.putImageData(m,0,0),{map:qf(r,!0),normalMap:qf(dv(o,3.2),!1),roughnessMap:qf(a,!1)}}function pv(s=4){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),n=Yf(128,s,4),r=i.createImageData(512,512),o=n.getContext("2d").getImageData(0,0,128,128).data;for(let a=0;a<512;a++)for(let l=0;l<512;l++){let c=o[((a>>2&127)*128+(l>>2&127))*4]/255,h=.5+.5*Math.sin((a+c*70)*.19+Math.sin(l*.02)*2),f=(a*512+l)*4,d=(h*.75+Math.random()*.25)*255;r.data[f]=r.data[f+1]=r.data[f+2]=d,r.data[f+3]=255}return i.putImageData(r,0,0),qf(dv(t,1.6),!1)}function mv(s=9){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),n=Gr(s);i.fillStyle="#e9e2cf",i.fillRect(0,0,512,512),i.globalCompositeOperation="multiply",i.globalAlpha=.6,i.drawImage(Yf(64,s,4),0,0,512,512),i.globalAlpha=1;for(let o=0;o<9;o++)i.fillStyle="rgba(120,115,110,.35)",i.beginPath(),i.ellipse(n()*512,n()*512,30+n()*80,20+n()*60,n()*3,0,7),i.fill();i.globalCompositeOperation="source-over";for(let o=0;o<70;o++){let a=n()*512,l=n()*512,c=2+n()*n()*22;i.fillStyle="rgba(90,85,80,.35)",i.beginPath(),i.arc(a,l,c,0,7),i.fill(),i.strokeStyle="rgba(255,250,235,.35)",i.lineWidth=1.2,i.beginPath(),i.arc(a-c*.15,l-c*.15,c,Math.PI*.9,Math.PI*1.8),i.stroke()}let r=new sn(t);return r.colorSpace=ei,r}function Bm(s,e,t,i,n,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+i,t,e+i,t+n,r),s.arcTo(e+i,t+n,e,t+n,r),s.arcTo(e,t+n,e,t,r),s.arcTo(e,t,e+i,t,r),s.closePath()}var wi={night:660019,lapis:1916863,faience:3134406,gold:15316044,sand:14267266,stone:13146723,terracotta:11883311,ink:724770},ni=[28,23.5,19,14.5,10,5.5],gn=2.6,Ns=2.25,fr=s=>s===0?0:s*gn,ms=(s,e={})=>new ua({color:s,roughness:.85,metalness:0,...e}),Hn=(s,e=2.6)=>new Ht({color:new Le(s).multiplyScalar(e),toneMapped:!1});function Nw(s,e=1024,t=512){let i=document.createElement("canvas");i.width=e,i.height=t;let n=i.getContext("2d"),r=Gr(s);n.fillStyle="#000",n.fillRect(0,0,e,t),n.strokeStyle="#fff",n.fillStyle="#fff",n.lineWidth=3,n.lineCap="round";for(let l=0;l<6;l++){let c=r()*e,h=t*(.2+r()*.6);n.beginPath(),n.moveTo(c,h);for(let f=0;f<5;f++)f%2?h=Math.max(20,Math.min(t-20,h+(r()-.5)*200)):c+=(r()-.3)*260,n.lineTo(c,h);n.stroke(),n.beginPath(),n.arc(c,h,8,0,Math.PI*2),n.fill()}n.font="bold 48px monospace";let o=["{ }","</>","=>","::","&&","[ ]","#",";","01","\u03BB"];for(let l=0;l<4;l++)n.fillText(o[r()*o.length|0],r()*(e-100),60+r()*(t-80));let a=new sn(i);return a.wrapS=a.wrapT=xn,a}var Ja=(s,e,t)=>{let i={};for(let n in s){let r=s[n].clone();r.repeat.set(e,t),r.needsUpdate=!0,i[n]=r}return i};function gv(s,{w:e=512,h:t=160,font:i="700 64px Unbounded, sans-serif",fg:n="#f6ead2",bg:r="rgba(10,18,51,.92)",border:o="#e9b44c",radius:a=70,sub:l}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let h=c.getContext("2d");return((d,u,p,x,m)=>{h.beginPath(),h.moveTo(d+m,u),h.arcTo(d+p,u,d+p,u+x,m),h.arcTo(d+p,u+x,d,u+x,m),h.arcTo(d,u+x,d,u,m),h.arcTo(d,u,d+p,u,m),h.closePath()})(6,6,e-12,t-12,Math.min(a,(t-12)/2)),h.fillStyle=r,h.fill(),h.lineWidth=6,h.strokeStyle=o,h.stroke(),h.fillStyle=n,h.textAlign="center",h.textBaseline="middle",h.font=i,h.fillText(s,e/2,l?t*.4:t/2+2),l&&(h.font='500 30px "Instrument Sans", sans-serif',h.globalAlpha=.75,h.fillText(l,e/2,t*.72)),c}function _v(s,e,t,i="high"){let n={updaters:[],props:{},clickables:[]},r=_=>n.updaters.push(_),o=i==="high",a=new B(-.55,.32,-.77).normalize(),l=new Rt({side:Ii,depthWrite:!1,fog:!1,uniforms:{top:{value:new Le(132378)},mid:{value:new Le(857927)},hor:{value:new Le(4862290)},moonDir:{value:a}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
      float h3(vec3 p){ p = fract(p*.3183099+.1); p *= 17.; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
      float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.-2.*f);
        return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
      float fbm(vec3 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v += a*n3(p); p*=2.03; a*=.5; } return v; }
      void main(){ float h = clamp(vP.y,0.,1.);
        vec3 c = mix(hor, mid, smoothstep(0.,.25,h)); c = mix(c, top, smoothstep(.2,.8,h));
        vec3 bn = normalize(vec3(.35,.25,.9)); float band = exp(-pow(dot(vP,bn)/.2,2.));
        float dust = fbm(vP*7.); float lanes = smoothstep(.45,.75,fbm(vP*14.+3.));
        c += vec3(.38,.36,.55)*band*dust*.28*(1.-lanes*.7)*smoothstep(.02,.3,h);
        float m = max(dot(vP, moonDir),0.); c += vec3(.55,.6,.85)*pow(m,60.)*.5 + vec3(.6,.45,.35)*pow(m,5.)*.12*(1.-h);
        gl_FragColor = vec4(c,1.); }`});s.add(new Pe(new ci(600,48,24),l));{let S=new Float32Array(9600),w=new Float32Array(3200),M=Gr(7);for(let U=0;U<3200;U++){let D=M()*Math.PI*2,F=.04+M()*.96,N=Math.sqrt(1-F*F);S.set([Math.cos(D)*N*520,F*520,Math.sin(D)*N*520],U*3),w[U]=M()*6.28}let P=new Wt;P.setAttribute("position",new Ci(S,3)),P.setAttribute("ph",new Ci(w,1));let I=new Rt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},px:{value:Math.min(devicePixelRatio,2)}},vertexShader:"attribute float ph; uniform float t,px; varying float a; varying vec3 col; void main(){ a = .4+.6*sin(t*1.7+ph*3.); float s = fract(ph*7.13); col = mix(vec3(1.,.93,.82), vec3(.8,.88,1.), fract(ph*3.7)); gl_PointSize = (0.9+s*s*2.6)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float a; varying vec3 col; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(col, a*smoothstep(.5,.0,d)); }"});s.add(new no(P,I)),r(U=>I.uniforms.t.value=U)}{let _=new Pe(new ci(15,48,48),new Ht({map:mv(),color:new Le(1.35,1.3,1.2),toneMapped:!1,fog:!1}));_.position.copy(a).multiplyScalar(300),_.rotation.y=1.2,s.add(_);let S=document.createElement("canvas");S.width=S.height=256;let w=S.getContext("2d"),M=w.createRadialGradient(128,128,14,128,128,128);M.addColorStop(0,"rgba(255,236,200,.5)"),M.addColorStop(.3,"rgba(150,165,255,.14)"),M.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=M,w.fillRect(0,0,256,256);let P=new aa(new to({map:new sn(S),transparent:!0,depthWrite:!1,fog:!1}));P.scale.setScalar(160),P.position.copy(_.position),s.add(P),_.userData.onClick="moon",n.clickables.push(_),n.props.moon=_}{let _=new eo;_.add(new Pe(new ci(50,32,16),l.clone()));let S=new Pe(new ci(4,16,16),new Ht({color:new Le(3,3,2.6)}));S.position.copy(a).multiplyScalar(40),_.add(S);let w=new Ma(e);s.environment=w.fromScene(_,.04).texture,s.environmentIntensity=.55,w.dispose()}let c=new Il(7438800,3811868,.55);s.add(c);let h=new ma(13358335,2.3);h.position.copy(a).multiplyScalar(60).setY(48),h.position.x=-38,h.position.z=32,h.castShadow=!0,h.shadow.mapSize.set(o?4096:2048,o?4096:2048),Object.assign(h.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),h.shadow.bias=-4e-4,h.shadow.normalBias=.04,h.shadow.radius=3,s.add(h);let f=new ma(16752234,.35);f.position.set(30,10,-20),s.add(f);let d=zm({w:o?1024:512,h:o?512:256,rows:4,seed:11}),u=zm({w:o?1024:512,h:o?1024:512,rows:8,seed:51}),p=pv();p.repeat.set(70,70);{let _=new cs(900,900,220,220);_.rotateX(-Math.PI/2);let S=_.attributes.position;for(let I=0;I<S.count;I++){let U=S.getX(I),D=S.getZ(I),F=Math.hypot(U,D),N=Math.sin(U*.03+D*.012)*2.2+Math.sin(D*.045-U*.02)*1.4+Math.sin(U*.11+D*.03)*.3;N=N>0?N*1.25:N*.7,N*=fs.smoothstep(F,26,90),N+=fs.smoothstep(F,120,420)*14,S.setY(I,N-.02)}_.computeVertexNormals();let w=new Pe(_,ms(11108437,{normalMap:p,normalScale:new Ee(.55,.55),roughness:.97}));w.receiveShadow=!0,s.add(w);let M=Ja(u,6,6),P=new Pe(new Pi(24,25,.3,64),ms(10256996,{...M,roughness:1}));P.position.y=-.12,P.receiveShadow=!0,s.add(P)}{let _=new ca(1,2),S=_.attributes.position,w=Gr(21);for(let N=0;N<S.count;N++){let O=new B().fromBufferAttribute(S,N);O.multiplyScalar(.75+Math.sin(O.x*3.1)*.1+Math.cos(O.y*4.3+O.z)*.12),S.setXYZ(N,O.x,O.y*.65,O.z)}_.computeVertexNormals();let M=46,P=new ys(_,ms(8216902,{...Ja(d,.5,.5),roughness:1}),M),I=new it,U=new Cn,D=new B,F=new B;for(let N=0;N<M;N++){let O=w()*Math.PI*2,G=25+w()*45;Math.abs(Math.cos(O))<.25&&Math.sin(O)>0||(F.set(Math.cos(O)*G,-.15,Math.sin(O)*G),U.setFromEuler(new Xn(w(),w()*6,w())),D.setScalar(.3+w()*w()*1.8),I.compose(F,U,D),P.setMatrixAt(N,I))}P.castShadow=P.receiveShadow=!0,s.add(P)}for(let[_,S,w]of[[150,-260,34],[205,-300,46],[250,-270,26]]){let M=new Pe(new $s(w,w*.95,4),ms(3878984,{roughness:1}));M.rotation.y=Math.PI/4,M.position.set(_,w*.47+6,S),s.add(M)}let x=new Lt;s.add(x),n.pyramid=x;let m=Hn(wi.faience,1.7);for(let _=0;_<ni.length;_++){let S=ni[_],w=ms(16777215,{...Ja(d,S/7,1),emissiveMap:(()=>{let U=Nw(91+_*7);return U.repeat.set(S/14,1),U})(),emissive:new Le(wi.faience),emissiveIntensity:.38,normalScale:new Ee(1,1)}),M=ms(15787220,{...Ja(u,S/7,S/7)}),P=new Pe(new li(S,gn,S),[w,w,M,M,w,w]);P.position.y=_*gn+gn/2,P.castShadow=P.receiveShadow=!0,x.add(P);let I=S/2;for(let[U,D,F,N]of[[S,.06,0,I],[S,.06,0,-I],[.06,S,I,0],[.06,S,-I,0]]){let O=new Pe(new li(U,.05,D),m);O.position.set(F,(_+1)*gn+.01,N),x.add(O)}}let g=ms(15259328,{...Ja(u,.35,.12)});n.stairPath=[];for(let _=0;_<ni.length;_++){let w=gn/8,M=Ns/8,P=ni[_]/2,I=fr(_);for(let U=0;U<8;U++){let D=new Pe(new kn(2.6,w*(U+1),M+.01,1,.02),g);D.position.set(0,I+w*(U+1)/2,P+Ns-(U+.5)*M),D.castShadow=D.receiveShadow=!0,x.add(D)}for(let U of[-1.42,1.42]){let D=new B(U,I+.35,P+Ns),F=new B(U,I+gn+.35,P),N=D.distanceTo(F),O=new Pe(new Pi(.035,.035,N,8),Hn(U<0?wi.faience:wi.gold,1.6));O.position.copy(D).add(F).multiplyScalar(.5),O.lookAt(F),O.rotateX(Math.PI/2),x.add(O)}n.stairPath.push(new B(0,I,P+Ns),new B(0,I+gn,P))}let v=new Vi({color:15909466,metalness:1,roughness:.18,clearcoat:.6,clearcoatRoughness:.1,envMapIntensity:2.2,emissive:new Le(3810822),emissiveIntensity:.5}),T=new Pe(new $s(2.3,3.2,4,1),v);T.rotation.y=Math.PI/4,T.position.set(0,6*gn+1.6,-.6),T.castShadow=!0,x.add(T),T.userData.onClick="cap",n.clickables.push(T),n.props.cap=T;let y=new Ss(16762726,5,20,1.6);y.position.set(0,6*gn+4.2,0),x.add(y),n.props.capLight=y;{let _=new qn(n.stairPath.map(G=>G.clone().add(new B(-1.42,.55,0))),!1,"centripetal",0),S=new qn(n.stairPath.map(G=>G.clone().add(new B(1.42,.55,0))),!1,"centripetal",0),w=36,M=new kn(.14,.14,.14,1,.03),P=new ys(M,Hn(wi.faience,3),w),I=new ys(M,Hn(wi.gold,2.8),w);x.add(P,I);let U=new it,D=new Cn,F=new B(1,1,1),N=new B,O=new Xn;n.packetBoost=0,r(G=>{let k=.045+n.packetBoost*.25;n.packetBoost*=.97;for(let C=0;C<w;C++){let q=(C/w+G*k)%1;_.getPointAt(q,N),D.setFromEuler(O.set(G*2+C,G+C,0)),U.compose(N,D,F),P.setMatrixAt(C,U),S.getPointAt(1-q,N),U.compose(N,D,F),I.setMatrixAt(C,U)}P.instanceMatrix.needsUpdate=I.instanceMatrix.needsUpdate=!0})}let b=new Rt({transparent:!0,depthWrite:!1,blending:Js,side:Gi,toneMapped:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float t; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ vec2 uv = vUv; float y = uv.y;
        float nn = n(vec2(uv.x*4., y*3.-t*3.2))*.6 + n(vec2(uv.x*9., y*7.-t*5.))*.4;
        float w = (1.-y)*.42 + .04; float d = abs(uv.x-.5 + (nn-.5)*.25*y);
        float f = smoothstep(w, w*.35, d) * smoothstep(1., .25, y + nn*.35) * smoothstep(0.,.08,y);
        vec3 c = mix(vec3(1.5,.5,.1), vec3(1.9,1.35,.7), smoothstep(.3,.9,f*(1.2-y)));
        gl_FragColor = vec4(c*f*.75, f); }`});r(_=>b.uniforms.t.value=_);let E=new Vi({color:9067051,metalness:.9,roughness:.35});for(let _ of[-4.6,4.6]){let S=ni[0]/2+3.2,w=new Pe(new Pi(.28,.36,2.2,16),ms(16777215,{...Ja(d,.3,.5)}));w.position.set(_,1.1,S),w.castShadow=!0,s.add(w);let M=new Pe(new Pi(.6,.3,.4,24,1,!0),E);M.material.side=Gi,M.position.set(_,2.35,S),s.add(M);let P=new Pe(new Zs(.55,20),Hn(16734746,1.2));P.rotation.x=-Math.PI/2,P.position.set(_,2.45,S),s.add(P);let I=new Lt;I.position.set(_,2.45,S),s.add(I);for(let C=0;C<3;C++){let q=new Pe(new cs(1.1,1.8),b);q.position.y=.85,q.rotation.y=C/3*Math.PI,I.add(q)}let U=new Ss(16747068,8,14,1.7);U.position.set(_,3.4,S+.3),s.add(U);let D=30,F=new Float32Array(D*3),N=Array.from({length:D},()=>Math.random()),O=new Wt;O.setAttribute("position",new Ci(F,3));let G=new no(O,new io({color:new Le(3,1.4,.4),size:.06,transparent:!0,depthWrite:!1,blending:Js,toneMapped:!1}));G.position.set(_,2.6,S),s.add(G);let k=Math.random()*10;r(C=>{let q=1+Math.sin(C*13+k)*.07+Math.sin(C*7.3+k)*.06;I.scale.set(1,q,1),U.intensity=7.5*q,I.rotation.y=Math.sin(C*.7+k)*.3;for(let ae=0;ae<D;ae++){let _e=(N[ae]+C*(.25+N[ae]*.3))%1;F[ae*3]=Math.sin(N[ae]*50+C)*.25*_e,F[ae*3+1]=_e*3,F[ae*3+2]=Math.cos(N[ae]*70+C)*.25*_e}O.attributes.position.needsUpdate=!0})}{let S=new Float32Array(1800),w=Gr(3);for(let P=0;P<600;P++)S.set([(w()-.5)*80,w()*22,(w()-.5)*80],P*3);let M=new Wt;M.setAttribute("position",new Ci(S,3)),s.add(new no(M,new io({color:16769712,size:.06,transparent:!0,opacity:.45,depthWrite:!1}))),r((P,I)=>{let U=M.attributes.position;for(let D=0;D<600;D++){let F=U.getX(D)+I*1.6;F>40&&(F=-40),U.setX(D,F),U.setY(D,U.getY(D)+Math.sin(P+D)*I*.15)}U.needsUpdate=!0})}return Uw(n,x,t),n.update=(_,S,w)=>{for(let M of n.updaters)M(_,S,w)},n}function Uw(s,e,t){let i=a=>s.updaters.push(a),n=a=>ni[a]/2+Ns/2,r=new Pl(t),o=new Vi({color:14724682,metalness:1,roughness:.3,envMapIntensity:1.6});{let a=new Lt;a.position.set(-5.6,fr(1),n(1)),e.add(a);let l=ms(6175522,{roughness:.6}),c=new Pe(new kn(1.5,.08,.8,2,.03),l);c.position.y=.72,c.castShadow=!0,a.add(c);for(let[y,b]of[[-.65,-.32],[.65,-.32],[-.65,.32],[.65,.32]]){let E=new Pe(new Pi(.03,.03,.72,8),l);E.position.set(y,.36,b),E.castShadow=!0,a.add(E)}let h=new Vi({color:10133675,metalness:.9,roughness:.32}),f=new Pe(new kn(.62,.025,.42,1,.01),h);f.position.set(0,.775,.05),a.add(f);let d=document.createElement("canvas");d.width=512,d.height=320;let u=d.getContext("2d");u.fillStyle="#0a1233",u.fillRect(0,0,512,320),u.font="28px monospace",[["#2fd3c6",'app.post("/hire",'],["#e9b44c","  auth, async (req,res)=>{"],["#f6ead2",'  const dev = "adham";'],["#f6ead2","  await db.save(dev);"],["#2fd3c6","  res.status(201)"],["#e9b44c","});"]].forEach(([y,b],E)=>{u.fillStyle=y,u.fillText(b,22,52+E*44)});let x=new sn(d);x.colorSpace=ei;let m=new Pe(new cs(.58,.36),new Ht({map:x,color:13421772}));m.position.set(0,.98,-.148),m.rotation.x=-.18,a.add(m);let g=new Pe(new kn(.62,.4,.015,1,.006),h);g.position.set(0,.98,-.16),g.rotation.x=-.18,a.add(g);let v=new Ss(8378623,1.2,2.2,2);v.position.set(0,1.05,.2),a.add(v);let T=new Pe(new Pi(.07,.06,.14,20),new Vi({color:wi.terracotta,roughness:.25,clearcoat:.8}));T.position.set(.55,.83,.15),a.add(T),a.rotation.y=.5,s.props.desk=a}{let a=new Lt;a.position.set(5.8,fr(2)+3.1,n(2)-.6),e.add(a);let l=["C++","TypeScript","Node.js","PostgreSQL","Python","SQL","Docker","React","Express","socket.io","Git","Java"];l.forEach((h,f)=>{let d=new Pe(new cs(1.05,.33),new Ht({map:new sn(gv(h,{font:"700 54px Unbounded, sans-serif"})),transparent:!0,side:Gi,toneMapped:!1}));d.material.map.colorSpace=ei,d.userData={a:f/l.length*Math.PI*2,r:f%2?2.9:2.2,y:f%3*.45-.45},a.add(d)});let c=new Pe(new ca(.42,0),new Vi({color:3134406,roughness:.05,transmission:.6,thickness:.6,emissive:new Le(879974),emissiveIntensity:1.5}));a.add(c),i((h,f,d)=>{c.rotation.set(h*.6,h*.9,0),a.children.forEach(u=>{if(!u.userData.r)return;let p=u.userData.a+h*.35;u.position.set(Math.cos(p)*u.userData.r,u.userData.y+Math.sin(h+u.userData.a)*.12,Math.sin(p)*u.userData.r),d&&u.quaternion.copy(d.quaternion)})}),s.props.stack=a}{let a=new Lt;a.position.set(-3.6,fr(3)+2.45,ni[3]/2+.35),e.add(a);let l=document.createElement("canvas");l.width=640,l.height=400,Ow(l.getContext("2d")),[{src:"assets/shots/title.jpg",x:-1.9,ry:.42},{canvas:l,x:0,ry:0},{src:"assets/shots/student-dashboard.webp",x:1.9,ry:-.42}].forEach((h,f)=>{let d=h.canvas?new sn(h.canvas):r.load(h.src);d.colorSpace=ei,d.anisotropy=8;let u=new Lt;u.position.set(h.x,f===1?.35:0,f===1?-.4:0),u.rotation.y=h.ry,a.add(u);let p=new Pe(new kn(1.86,1.1,.06,2,.03),o);p.castShadow=!0,u.add(p);let x=new Pe(new cs(1.74,.98),new Ht({map:d,color:12105912}));x.position.z=.035,u.add(x);let m=f*1.7;i(g=>{u.position.y=(f===1?.35:0)+Math.sin(g*1.1+m)*.08})}),a.rotation.y=.12,s.props.work=a}{let a=new Lt;a.position.set(5.6,fr(4)+1.3,n(4)-.4),a.rotation.y=-.4,e.add(a);let l=new Pe(new kn(.5,.5,.5,2,.06),Hn(wi.faience,2));l.position.set(-1.9,1.7,0);let c=new Pe(new ci(.3,24,16),Hn(7310591,2.2));c.position.set(-1.9,.3,0);let h=new Pe(new wl(.38),Hn(wi.gold,2.6));h.position.set(.4,1,0),a.add(l,c,h);let f=new qn([l.position,new B(-.8,1.8,.4),h.position]),d=new qn([c.position,new B(-.8,.2,.4),h.position]),p=[[3134406,.35],[15316044,.6],[15764028,.85],[14698298,1.1]].map(([S,w],M)=>{let P=new Pe(new li(.22,w,.22),Hn(S,1.8));return P.position.set(1.4+M*.36,w/2+.1,0),a.add(P),P}),x=new qn([h.position,new B(1.2,1.4,.2),new B(1.9,1.5,0)]),m=22,g=new ci(.05,8,6),v=new ys(g,Hn(wi.faience,3),m),T=new ys(g,Hn(9414399,3),m),y=new ys(g,Hn(wi.gold,3),m);a.add(v,T,y);for(let[S,w,M]of[["XGBoost \xB7 sensors",-1.9,2.25],["Isolation Forest \xB7 traffic",-1.9,-.25],["Decision fusion",.4,1.6],["4-tier risk",1.95,1.55]]){let P=new aa(new to({map:new sn(gv(S,{w:640,h:120,font:'600 42px "Instrument Sans", sans-serif',radius:60})),transparent:!0,toneMapped:!1}));P.material.map.colorSpace=ei,P.scale.set(1.6,.3,1),P.position.set(w,M,.1),a.add(P)}let b=new Pe(new Al(.2,2.6,64),new Ht({color:new Le(wi.faience).multiplyScalar(.6),transparent:!0,opacity:.18,side:Gi,toneMapped:!1,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.set(0,-1.25,0),a.add(b);let E=new it,_=new B;i(S=>{l.rotation.set(S,S*.7,0),h.rotation.y=S*1.4,h.scale.setScalar(1+Math.sin(S*4)*.06);for(let w=0;w<m;w++){let M=(w/m+S*.22)%1;f.getPointAt(M,_),E.makeTranslation(_.x,_.y,_.z),v.setMatrixAt(w,E),d.getPointAt((M+.5)%1,_),E.makeTranslation(_.x,_.y,_.z),T.setMatrixAt(w,E),x.getPointAt(M,_),E.makeTranslation(_.x,_.y,_.z),y.setMatrixAt(w,E)}v.instanceMatrix.needsUpdate=T.instanceMatrix.needsUpdate=y.instanceMatrix.needsUpdate=!0,p.forEach((w,M)=>w.scale.y=.85+Math.sin(S*2+M)*.15),b.rotation.z=S*.2}),s.props.research=a}{let a=new Lt;a.position.set(-4.4,fr(5),n(5)-.5),e.add(a);let l=[14698298,3134406,15316044,7310591,16181970];s.props.balloons=[],l.forEach((x,m)=>{let g=new Lt;g.position.set((m-2)*.42,0,m%2*.45);let v=new Pe(new ci(.34,32,24),new Vi({color:x,roughness:.25,clearcoat:1,clearcoatRoughness:.15,sheen:.4}));v.scale.y=1.18,v.position.y=2.2+m%3*.35,v.castShadow=!0;let T=new Pe(new $s(.06,.1,8),v.material);T.position.y=v.position.y-.42,T.rotation.x=Math.PI;let y=new Pe(new Pi(.005,.005,v.position.y-.45,4),ms(16181970));y.position.y=(v.position.y-.45)/2,g.add(v,T,y),a.add(g),v.userData.onClick="balloon",v.userData.group=g,s.clickables.push(v),s.props.balloons.push(g);let b=m*1.3;i(E=>{g.rotation.z=Math.sin(E*1.2+b)*.06,g.rotation.x=Math.cos(E+b)*.05})});let c=new Lt,h=new Vi({color:15921128,metalness:.3,roughness:.35,clearcoat:.5}),f=new Pe(new Ys(.16,.6,8,16),h);c.add(f);let d=new Pe(new $s(.16,.3,16),new Vi({color:wi.terracotta,roughness:.3,clearcoat:.6}));d.position.y=.55,c.add(d);for(let x=0;x<3;x++){let m=new Pe(new li(.02,.22,.18),ms(wi.lapis,{roughness:.4})),g=x/3*Math.PI*2;m.position.set(Math.cos(g)*.16,-.3,Math.sin(g)*.16),m.rotation.y=-g,c.add(m)}let u=new Pe(new $s(.1,.4,12),Hn(16751173,3));u.position.y=-.62,u.rotation.x=Math.PI,c.add(u),e.add(c),s.props.rocket=c,c.userData.boost=0,f.userData.onClick="rocket",s.clickables.push(f);let p=0;i((x,m)=>{c.userData.boost*=.985,p+=m*(.45+c.userData.boost*3);let g=new B(0,fr(5)+4.6,0);c.position.set(g.x+Math.cos(p)*9,g.y+Math.sin(x*.9)*.6,g.z+Math.sin(p)*9),c.lookAt(g.x+Math.cos(p+.2)*9,c.position.y,g.z+Math.sin(p+.2)*9),c.rotateX(Math.PI/2),u.scale.y=1+Math.sin(x*30)*.2+c.userData.boost*2}),s.props.arena=a}{let a=new Pe(new Pi(.35,1.2,160,32,1,!0),new Ht({color:new Le(wi.gold).multiplyScalar(2.2),transparent:!0,opacity:0,side:Gi,depthWrite:!1,toneMapped:!1,blending:Js}));a.position.set(0,6*gn+3+80,-.6),e.add(a);let l=[0,1,2].map(()=>{let c=new Pe(new so(1,.04,8,64),new Ht({color:new Le(wi.faience).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1}));return c.rotation.x=Math.PI/2,c.position.set(0,6*gn+.2,-.6),e.add(c),c});s.props.beam=a,s.props.rings=l}}function Ow(s){s.fillStyle="#101a3f",s.fillRect(0,0,640,400),s.fillStyle="#e9b44c",s.font="700 34px Unbounded, sans-serif",s.fillText("SmartHabbit",30,56),s.fillStyle="#f6ead2",s.font='500 20px "Instrument Sans", sans-serif',s.fillText("Level 7  \xB7  1,240 XP  \xB7  12-day streak",30,92),s.fillStyle="#26305e",s.fillRect(30,112,580,18),s.fillStyle="#2fd3c6",s.fillRect(30,112,410,18),[["Read 20 pages","easy","+10 XP"],["Codeforces problem","hard","+40 XP"],["Gym","medium","+25 XP"]].forEach(([t,i,n],r)=>{let o=160+r*62;s.fillStyle="#18234f",s.fillRect(30,o,580,50),s.fillStyle="#f6ead2",s.font='600 22px "Instrument Sans", sans-serif',s.fillText(t,50,o+32),s.fillStyle="#9fb0e8",s.font='500 17px "Instrument Sans", sans-serif',s.fillText(i,330,o+31),s.fillStyle="#e9b44c",s.fillText(n,520,o+31)}),["#e0473a","#2fd3c6","#e9b44c","#6f8cff"].forEach((t,i)=>{s.fillStyle=t,s.beginPath(),s.arc(60+i*56,370,18,0,7),s.fill()})}var Gc=14263420,Ka=1774609,Hm=1845854,Vm=16052198,Gm=1317178,xv=1581119,vv=15920354,km={};function Xm(s){if(km[s])return km[s];let e={color:s,roughness:.7};return s===Gc?Object.assign(e,{roughness:.52,sheen:.6,sheenColor:new Le(16751226),sheenRoughness:.5}):s===Hm||s===xv?Object.assign(e,{roughness:.82,sheen:1,sheenColor:new Le(5596842),sheenRoughness:.55}):s===Ka?Object.assign(e,{roughness:.42,sheen:.8,sheenColor:new Le(7031354),sheenRoughness:.35,clearcoat:.25}):s===vv?Object.assign(e,{roughness:.35,clearcoat:.7}):s===Vm?Object.assign(e,{roughness:.6,sheen:.5,sheenColor:new Le(16777215)}):s===Gm&&Object.assign(e,{roughness:.38,sheen:.8,sheenColor:new Le(4938672)}),km[s]=new Vi(e)}var Wr=s=>Xm(s);function dr(s,e){let t=new Pe(s,Xm(e));return t.castShadow=!0,t.receiveShadow=!0,t}function Fw(){let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"#fff"),t.addColorStop(1,"#000"),e.fillStyle=t,e.fillRect(0,0,64,64),new sn(s)}function yv(){let s=new Lt,e=new Lt;s.add(e);let t=[-1,1].map(F=>{let N=new Lt;N.position.set(.12*F,.6,0),e.add(N);let O=dr(new Ys(.085,.36,8,20),xv);O.position.y=-.27,N.add(O);let G=dr(new kn(.17,.11,.28,2,.05),vv);G.position.set(0,-.53,.05),N.add(G);let k=new Pe(new li(.17,.03,.28),Wr(2830141));return k.position.set(0,-.585,.05),N.add(k),N}),i=new Lt;i.position.y=.6,e.add(i);let n=dr(new kn(.5,.5,.3,5,.1),Hm);n.position.y=.26,i.add(n);let r=new Pe(new Pi(0,.11,.26,3),Wr(Vm));r.rotation.set(Math.PI,Math.PI/6,0),r.scale.z=.25,r.position.set(0,.36,.145),i.add(r);let o=new Pe(new li(.045,.22,.02),Wr(Gm));o.position.set(0,.32,.158),i.add(o);let a=new Pe(new li(.06,.045,.03),Wr(Gm));a.position.set(0,.46,.155),i.add(a);let l=new Pe(new Zs(.025,12),new Ht({color:new Le(wi.gold).multiplyScalar(1.6),toneMapped:!1}));l.position.set(-.14,.4,.152),i.add(l);let c=new Pe(new li(.46,.05,.28),Wr(1053734));c.position.y=.03,i.add(c);let h=[-1,1].map(F=>{let N=new Lt;N.position.set(.3*F,.46,0),i.add(N);let O=dr(new Ys(.072,.3,8,20),Hm);O.position.y=-.18,N.add(O);let G=new Pe(new Pi(.066,.066,.04,10),Wr(Vm));G.position.y=-.37,N.add(G);let k=dr(new ci(.07,14,10),Gc);return k.position.y=-.43,N.add(k),N}),f=new Lt;f.position.y=1.12,e.add(f);let d=new Pe(new Pi(.07,.08,.1,10),Wr(Gc));f.add(d);let u=new Lt;u.position.y=.06,f.add(u);let p=dr(new ci(.35,48,36),Gc,1.04);p.scale.set(1,.97,.94),p.position.y=.34,u.add(p);for(let F of[-1,1]){let N=dr(new ci(.075,12,10),Gc,1.08);N.scale.set(.6,1,.8),N.position.set(.34*F,.33,0),u.add(N)}let x=dr(new ci(.37,32,16,0,Math.PI*2,0,Math.PI*.52),Ka,1.03);x.scale.set(1.02,1,1),x.position.set(0,.36,-.03),x.rotation.x=-.32,u.add(x);let m=[[-.17,.62,.17,.15],[0,.67,.19,.17],[.17,.62,.15,.15],[.09,.66,.06,.16],[-.09,.66,.06,.16],[.26,.5,.12,.12],[-.26,.5,.12,.12]];for(let[F,N,O,G]of m){let k=dr(new ci(G,16,12),Ka,1.05);k.position.set(F,N,O),k.scale.set(1.1,.75,1),u.add(k)}for(let F of[-1,1]){let N=new Pe(new li(.05,.12,.07),Wr(Ka));N.position.set(.325*F,.32,.08),u.add(N)}{let F=new Ys(.045,.14,4,8),N=3,O=()=>(N=N*16807%2147483647)/2147483647;for(let G=0;G<46;G++){let k=O()*Math.PI*2,C=O()*Math.PI*.42,q=.365,ae=new B(Math.sin(C)*Math.cos(k),Math.cos(C),Math.sin(C)*Math.sin(k)-.08).normalize(),_e=new Pe(F,Xm(Ka));_e.castShadow=!0,_e.position.copy(ae).multiplyScalar(q).add(new B(0,.37,-.03));let X=new B(0,-.35,-1).projectOnPlane(ae).normalize();ae.z>.35&&X.set(0,.6,1).projectOnPlane(ae).normalize(),_e.quaternion.setFromUnitVectors(new B(0,1,0),X),u.add(_e)}}let g=new Lt;g.position.set(0,.34,.305),u.add(g);let v=[-1,1].map(F=>{let N=new Pe(new ci(.046,20,14),new Vi({color:1708558,roughness:.05,clearcoat:1,clearcoatRoughness:.02}));N.scale.set(.95,1.3,.55),N.position.set(.12*F,.02,.02);let O=new Pe(new ci(.014,8,6),new Ht({color:16777215}));return O.position.set(.018,.022,.04),N.add(O),g.add(N),N}),T=[-1,1].map(F=>{let N=new Pe(new li(.09,.022,.02),new Ht({color:Ka}));return N.position.set(.12*F,.11,.02),g.add(N),N}),y=new Pe(new so(.055,.012,6,16,Math.PI),new Ht({color:4857366}));y.rotation.z=Math.PI,y.position.set(0,-.1,.01),g.add(y);let b=new Pe(new ci(.05,14,10),new Ht({color:4857366}));b.scale.set(1,.1,.4),b.position.set(0,-.12,0),g.add(b);let E=[-1,1].map(F=>{let N=new Pe(new Zs(.04,12),new Ht({color:14712938,transparent:!0,opacity:.35}));return N.position.set(.2*F,-.04,.005),N.rotation.y=.35*F,g.add(N),N}),_=new Ss(16769728,1.6,4.5,1.6);_.position.set(.7,2.1,1.5),s.add(_);let S=new Ss(9414911,.6,4,1.8);S.position.set(-1,1.4,1.2),s.add(S);let w=new Pe(new Zs(.42,32),new Ht({color:0,transparent:!0,opacity:.22,depthWrite:!1,alphaMap:Fw()}));w.rotation.x=-Math.PI/2,w.position.y=.02,s.add(w),s.scale.setScalar(1.15);let M={mode:"idle",modeT:0,talk:0,walkPhase:0,speed:0,blinkT:2,look:new Ee,yaw:0,spin:0,jump:0},P=fs.lerp;function I(F){M.mode!==F&&(M.mode=F,M.modeT=0)}function U(){M.spin=Math.PI*2,M.jump=1,I("celebrate")}function D(F,N){M.modeT+=F;let O=Math.min(M.speed/2.4,1);M.walkPhase+=F*(4+M.speed*3.2);let G=Math.sin(M.walkPhase);t[0].rotation.x=P(t[0].rotation.x,G*.75*O,.3),t[1].rotation.x=P(t[1].rotation.x,-G*.75*O,.3);let k={x:-G*.6*O,z:-.08},C={x:G*.6*O,z:.08},q=Math.sin(N*2.2)*.012,ae=Math.abs(Math.cos(M.walkPhase))*.06*O+q,_e=Math.sin(N*1.3)*.04;M.mode==="wave"?(C={x:-.2,z:2.55+Math.sin(N*9)*.32},_e=.12,M.modeT>2.4&&I("idle")):M.mode==="point"?(C={x:-1.35,z:.45},k={x:.1,z:-.12}):M.mode==="type"?(k={x:-1.1,z:.25+Math.sin(N*18)*.05},C={x:-1.1,z:-.25+Math.cos(N*17)*.05}):M.mode==="celebrate"?(k={x:0,z:-2.6-Math.sin(N*12)*.2},C={x:0,z:2.6+Math.sin(N*12)*.2},ae+=Math.abs(Math.sin(M.modeT*7))*.25*Math.max(0,1-M.modeT/2),M.modeT>2.2&&I("idle")):M.mode==="think"&&(C={x:-2.1,z:-.9},_e=-.15),h[0].rotation.x=P(h[0].rotation.x,k.x,.18),h[0].rotation.z=P(h[0].rotation.z,k.z,.18),h[1].rotation.x=P(h[1].rotation.x,C.x,.18),h[1].rotation.z=P(h[1].rotation.z,C.z,.18),e.position.y=ae,i.scale.y=1+q,u.rotation.y=P(u.rotation.y,M.look.x*.5,.08),u.rotation.x=P(u.rotation.x,-M.look.y*.25+Math.max(0,M.talk)*Math.sin(N*9)*.03,.08),u.rotation.z=P(u.rotation.z,_e,.06),M.blinkT-=F;let X=1;M.blinkT<.12&&(X=Math.abs(M.blinkT-.06)/.06),M.blinkT<0&&(M.blinkT=2+Math.random()*3),v.forEach(j=>j.scale.y=1.3*Math.max(.08,X));let W=M.talk>0?(.5+.5*Math.sin(N*22))*(.6+.4*Math.sin(N*7.1)):0;if(b.scale.y=P(b.scale.y,.1+W*.9,.5),y.visible=W<.25,T.forEach((j,ce)=>{j.position.y=.11+(M.mode==="celebrate"||M.mode==="wave"?.025:0)+W*.01,j.rotation.z=(ce?-1:1)*(M.mode==="think"?.25:.05)}),M.spin>0){let j=Math.min(M.spin,F*12);M.spin-=j,e.rotation.y+=j}else e.rotation.y=P(e.rotation.y,0,.2)}return{root:s,head:u,st:M,update:D,setMode:I,poke:U,headAnchor:()=>u.localToWorld(new B(0,.9,0))}}var Us=[new B(2.8,0,ni[0]/2+Ns+2.6),new B(-3.3,0,ni[1]/2+1),new B(3.3,0,ni[2]/2+1),new B(-3.3,0,ni[3]/2+1),new B(3.3,0,ni[4]/2+1),new B(-2.9,0,ni[5]/2+1),new B(0,0,2.05)],Sv=Us.length,Bw=gn/8,zw=Ns/8;function Zf(s,e){let t=0;for(let i=0;i<ni.length;i++)Math.abs(s)<=ni[i]/2+.05&&Math.abs(e)<=ni[i]/2+.05&&(t=Math.max(t,(i+1)*gn));if(Math.abs(s)<=1.3)for(let i=0;i<ni.length;i++){let n=ni[i]/2,r=n+Ns;e>=n&&e<=r&&(t=Math.max(t,fr(i)+Math.min(8,Math.ceil((r-e)/zw+1e-4))*Bw))}return t}var Wm=[];for(let s=0;s<Us.length-1;s++){let e=Us[s],t=Us[s+1],i=[new Ee(e.x,e.z),new Ee(0,ni[s]/2+Ns+.35),new Ee(0,ni[s]/2-.4),new Ee(t.x,t.z)],n=[0];for(let r=1;r<i.length;r++)n.push(n[r-1]+i[r].distanceTo(i[r-1]));Wm.push({pts:i,len:n})}function qm(s,e=new Ee){let t=Math.min(Math.floor(s),Wm.length-1),i=fs.clamp(s-t,0,1);if(s>=Us.length-1)return e.set(Us[Us.length-1].x,Us[Us.length-1].z),e;let n=Wm[t],r=i*n.len[n.len.length-1],o=1;for(;o<n.len.length-1&&n.len[o]<r;)o++;let a=(r-n.len[o-1])/(n.len[o]-n.len[o-1]||1);return e.copy(n.pts[o-1]).lerp(n.pts[o],a)}var Mv=s=>{let e=Us[s].clone();return e.y=Zf(e.x,e.z),e};var Ym=["Ground","Foundation","Stack","Work","Research","Arena","Capstone"],bv=["wave","point","think","point","point","celebrate","wave"],Tv={en:[["Hey! I'm Adham. Well, the mini version.","This pyramid is my stack. Every step is one layer of what I do.","Scroll and I'll climb it with you. Click me if you get bored."],["Step one: the foundation.","I study AI & Data Science at Badya University, class of 2028.","My favourite part is the backend: APIs, databases, the logic nobody sees."],["These are my tools. They orbit me all day.","Node.js and PostgreSQL for servers, C++ for contests, Python for data.","And tests. Lots of tests."],["My projects! Real screenshots, real repos.","SmartHabbit is my main one. I built most of its backend.","See the space game on that screen? We built it for NASA Space Apps 2026."],["Research level. Watch the particles.","Sensor data goes to XGBoost, network traffic goes to Isolation Forest.","They meet in the gold node and become one risk score. It is on IEEE Xplore!"],["The arena! In ICPC, every balloon means a solved problem.","88th in the ECPC qualifications in 2025, 177th in 2026. The next one is mine.","And that rocket? Still orbiting since Space Apps."],["We made it to the top!","Write me a request below and the capstone will fire it.","I reply faster than my APIs. Almost."]],ar:[["\u0623\u0647\u0644\u0627\u064B! \u0623\u0646\u0627 \u0623\u062F\u0647\u0645\u2026 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0645\u064A\u0646\u064A \u064A\u0639\u0646\u064A \u{1F604}","\u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0647\u0648 \u0627\u0644\u0640 stack \u0628\u062A\u0627\u0639\u064A\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u0641\u064A\u0647 \u0637\u0628\u0642\u0629 \u0645\u0646 \u0634\u063A\u0644\u064A.","\u0627\u0639\u0645\u0644 scroll \u0648\u0623\u0646\u0627 \u0647\u0637\u0644\u0639 \u0645\u0639\u0627\u0643 \u062F\u0631\u062C\u0629 \u062F\u0631\u062C\u0629. \u0648\u0644\u0648 \u0632\u0647\u0642\u062A \u062F\u0648\u0633 \u0639\u0644\u064A\u0651\u0627."],["\u0623\u0648\u0644 \u062F\u0631\u062C\u0629: \u0627\u0644\u0623\u0633\u0627\u0633.","\u0628\u062F\u0631\u0633 AI \u0648 Data Science \u0641\u064A \u062C\u0627\u0645\u0639\u0629 \u0628\u0627\u062F\u064A\u0629\u060C \u062F\u0641\u0639\u0629 2028.","\u0628\u0633 \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629 \u0628\u062D\u0628\u0647\u0627 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F: \u0627\u0644\u0640 APIs \u0648\u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u0644\u064A \u0645\u062D\u062F\u0634 \u0628\u064A\u0634\u0648\u0641\u0647."],["\u062F\u064A \u0623\u062F\u0648\u0627\u062A\u064A\u060C \u0628\u062A\u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0627 \u0637\u0648\u0644 \u0627\u0644\u064A\u0648\u0645.","Node.js \u0648 PostgreSQL \u0644\u0644\u0633\u064A\u0631\u0641\u0631\u0627\u062A\u060C C++ \u0644\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062A\u060C \u0648 Python \u0644\u0644\u062F\u0627\u062A\u0627.","\u0648\u062A\u0633\u062A\u0627\u062A\u2026 \u062A\u0633\u062A\u0627\u062A \u0643\u062A\u064A\u0631."],["\u062F\u064A \u0645\u0634\u0627\u0631\u064A\u0639\u064A! \u0633\u0643\u0631\u064A\u0646 \u0634\u0648\u062A\u0633 \u062D\u0642\u064A\u0642\u064A\u0629 \u0648\u0631\u064A\u0628\u0648\u0632 \u062D\u0642\u064A\u0642\u064A\u0629.","SmartHabbit \u0623\u0647\u0645\u0647\u0645\u060C \u0648\u0623\u0646\u0627 \u0639\u0627\u0645\u0644 \u0623\u063A\u0644\u0628 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639\u0647.","\u0634\u0627\u064A\u0641 \u0644\u0639\u0628\u0629 \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629\u061F \u0639\u0645\u0644\u0646\u0627\u0647\u0627 \u0641\u064A \u0647\u0627\u0643\u0627\u062B\u0648\u0646 \u0646\u0627\u0633\u0627 Space Apps 2026."],["\u062F\u064A \u062F\u0631\u062C\u0629 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0639\u0644\u0645\u064A. \u0628\u0635 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0644\u064A \u0628\u062A\u062C\u0631\u064A.","\u062F\u0627\u062A\u0627 \u0627\u0644\u062D\u0633\u0627\u0633\u0627\u062A \u0628\u062A\u0631\u0648\u062D \u0644\u0640 XGBoost\u060C \u0648\u062A\u0631\u0627\u0641\u064A\u0643 \u0627\u0644\u0634\u0628\u0643\u0629 \u0628\u064A\u0631\u0648\u062D \u0644\u0640 Isolation Forest.","\u0628\u064A\u062A\u0642\u0627\u0628\u0644\u0648\u0627 \u0641\u064A \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062F\u0647\u0628 \u0648\u064A\u0637\u0644\u0639\u0648\u0627 risk score \u0648\u0627\u062D\u062F. \u0648\u0627\u0644\u0648\u0631\u0642\u0629 \u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 IEEE Xplore!"],["\u0627\u0644\u0623\u0631\u064A\u0646\u0627! \u0641\u064A \u0627\u0644\u0640 ICPC \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A.","\u0627\u0644\u0645\u0631\u0643\u0632 88 \u0641\u064A \u062A\u0635\u0641\u064A\u0627\u062A ECPC \u0633\u0646\u0629 2025\u060C \u0648177 \u0641\u064A 2026. \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u064A.","\u0648\u0627\u0644\u0635\u0627\u0631\u0648\u062E \u062F\u0647\u061F \u0644\u0633\u0647 \u0628\u064A\u0644\u0641 \u0645\u0646 \u0623\u064A\u0627\u0645 Space Apps."],["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u0642\u0645\u0629!","\u0627\u0628\u0639\u062A\u0644\u064A request \u0645\u0646 \u062A\u062D\u062A\u060C \u0648\u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628 \u0647\u062A\u0637\u0644\u0642\u0647.","\u0628\u0631\u062F \u0623\u0633\u0631\u0639 \u0645\u0646 \u0627\u0644\u0640 APIs \u0628\u062A\u0627\u0639\u062A\u064A\u2026 \u062A\u0642\u0631\u064A\u0628\u0627\u064B."]]},Ev={en:["Hey, that tickles!","Status 418: I'm a teapot.","Did you try turning it off and on again?","SELECT * FROM snacks;","My code works and I know exactly why. Mostly.","Rate limit: 5 pokes per 15 minutes. Just kidding."],ar:["\u0628\u062A\u0632\u063A\u0632\u063A\u0646\u064A \u0643\u062F\u0647!","Status 418: \u0623\u0646\u0627 \u0628\u0631\u0627\u062F \u0634\u0627\u064A \u2615","\u062C\u0631\u0628\u062A \u062A\u0642\u0641\u0644\u0647 \u0648\u062A\u0641\u062A\u062D\u0647 \u062A\u0627\u0646\u064A\u061F","SELECT * FROM snacks;","\u0627\u0644\u0643\u0648\u062F \u0634\u063A\u0627\u0644 \u0648\u0623\u0646\u0627 \u0639\u0627\u0631\u0641 \u0644\u064A\u0647\u2026 \u063A\u0627\u0644\u0628\u0627\u064B.","Rate limit: \u062E\u0645\u0633 \u0632\u0642\u0627\u062A \u0643\u0644 \u0631\u0628\u0639 \u0633\u0627\u0639\u0629. \u0628\u0647\u0632\u0631."]},wv={en:"201 Created! Your request reached the top.",ar:"201 Created! \u0627\u0644\u0631\u064A\u0643\u0648\u064A\u0633\u062A \u0628\u062A\u0627\u0639\u0643 \u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629."},Wc={balloon:{en:"Pop! Every balloon is a solved problem. It comes back when I solve another one.",ar:"\u0628\u0648\u0645! \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A\u060C \u0648\u0647\u062A\u0631\u062C\u0639 \u0644\u0645\u0627 \u0623\u062D\u0644 \u0648\u0627\u062D\u062F\u0629 \u0643\u0645\u0627\u0646."},rocket:{en:"Full thrust! Same energy as hackathon weekend.",ar:"Full thrust! \u0646\u0641\u0633 \u0637\u0627\u0642\u0629 \u0648\u064A\u0643 \u0625\u0646\u062F \u0627\u0644\u0647\u0627\u0643\u0627\u062B\u0648\u0646."},moon:{en:"The Moon from Level 0 of CAPCOM: Storm Watch says hi.",ar:"\u0627\u0644\u0642\u0645\u0631 \u0628\u062A\u0627\u0639 Level 0 \u0641\u064A \u0644\u0639\u0628\u0629 CAPCOM \u0628\u064A\u0633\u0644\u0651\u0645 \u0639\u0644\u064A\u0643."},cap:{en:"You found the capstone! Now send me a real request below.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628! \u0627\u0628\u0639\u062A\u0644\u064A \u0628\u0642\u0649 request \u0628\u062C\u062F \u0645\u0646 \u062A\u062D\u062A."}};bi.registerPlugin(ht,Xf);var wt=s=>document.querySelector(s),Xr=matchMedia("(prefers-reduced-motion: reduce)").matches,Qa=()=>innerWidth<=820,$f=Sv,Ai="en";try{Ai=localStorage.getItem("adham-guide-lang")||"en"}catch{}var qr=new fv({smoothWheel:!Xr,lerp:.085,autoRaf:!1});qr.on("scroll",ht.update);bi.ticker.add(s=>qr.raf(s*1e3));bi.ticker.lagSmoothing(0);var ja=[...document.querySelectorAll(".sec")],Xc=s=>qr.scrollTo(ja[s],{offset:s===0?0:-Math.max(0,(innerHeight-ja[s].offsetHeight)/2),duration:Xr?0:2.2});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",e=>{e.preventDefault(),Xc(+s.dataset.go)}));function Zm(){let s=wt("#name"),e="Adham Harp",t=Array.from("\u{13080}\u{130ED}\u{131A3}\u{131F3}\u{13296}\u{132F9}\u{1339B}\u{133CF}\u{13153}\u{13216}\u{13000}\u{13079}\u{13193}\u{1336F}");if(Xr){s.textContent=e;return}let i={p:0};bi.to(i,{p:1,duration:2.4,ease:"power2.inOut",onUpdate(){let n=Math.floor(i.p*e.length);s.innerHTML=[...e].map((r,o)=>o<n||r===" "?r:`<span class="gl">${t[Math.random()*t.length|0]}</span>`).join("")},onComplete(){s.textContent=e}})}var Jf=wt("#scene"),_n;try{_n=new Hu({canvas:Jf,antialias:!0,powerPreference:"high-performance"})}catch{_n=null}var ji=Hw();_n?kw().catch(s=>{console.error(s),wt("#loader").classList.add("done"),Zm(),Jm()}):(Jf.remove(),wt("#loader").classList.add("done"),Zm(),Jm());async function kw(){await Promise.race([Promise.all(["700 54px Unbounded",'600 42px "Instrument Sans"'].map(he=>document.fonts.load(he))),new Promise(he=>setTimeout(he,2500))]);let s=Math.min(devicePixelRatio,Qa()?1.5:1.75);_n.setPixelRatio(s),_n.setSize(innerWidth,innerHeight,!1),_n.toneMapping=lo,_n.toneMappingExposure=1.12,_n.shadowMap.enabled=!0,_n.shadowMap.type=oo;let e=new eo;e.fog=new _l(923202,.0072);let t=new ki(42,innerWidth/innerHeight,.1,1500),i=new fa,n=0,r=1;i.onProgress=(he,Te,We)=>{n=Te,r=We,$m(Te/We)};let o=Qa()||(navigator.hardwareConcurrency||8)<=4?"low":"high",a=_v(e,_n,i,o),l=yv();e.add(l.root);let c=new kt(innerWidth*s,innerHeight*s,{type:Jt,samples:4}),h=new qu(_n,c);h.addPass(new Yu(e,t));let f=null;if(o==="high")try{f=new wa(e,t,innerWidth,innerHeight),f.output=wa.OUTPUT.Default,f.blendIntensity=.85,f.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1,scale:1.1}),h.addPass(f)}catch{f=null}let d=new Ea(new Ee(innerWidth/2,innerHeight/2),.62,.5,.92);h.addPass(d),h.addPass(new Zu);let u=new Ta({uniforms:{tDiffuse:{value:null},t:{value:0},amt:{value:.028}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, amt; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
      void main(){ vec2 d = vUv-.5; float r = dot(d,d);
        vec3 c = vec3(texture2D(tDiffuse, vUv - d*r*.005).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + d*r*.005).b);
        c *= 1. - smoothstep(.15,.7,r)*.45;
        c += (h(vUv*800.)-.5)*amt;
        gl_FragColor = vec4(c,1.); }`});h.addPass(u);let p=!0,x=[],m=[],g,v,T=null;function y(){T=Qa(),x=[],m=[];for(let he=0;he<$f;he++){let Te=Mv(he);if(he===0){T?(x.push(new B(5.5,3.2,Te.z+10)),m.push(new B(2.2,2.6,Te.z-2))):(x.push(new B(10,4.6,Te.z+13)),m.push(new B(-1.2,6.2,8)));continue}if(he===$f-1){x.push(new B(-7.5,Te.y+3.6,12.5)),m.push(new B(-.6,Te.y+2.1,.4));continue}let We=Math.sign(Te.x)||1;x.push(new B(Te.x+We*3.2,Te.y+3.3,Te.z+10.5)),m.push(new B(Te.x*.85+We*1.2,Te.y+1.7,Te.z-1.2))}g=new qn(x,!1,"centripetal"),v=new qn(m,!1,"centripetal")}y();let b=ja.map(he=>({left:0,right:1,center:.5})[he.dataset.side]??.5),E={k:Xr?0:1},_=new B(46,30,90),S=[],w=()=>{S=ja.map(he=>he.offsetTop)};w(),addEventListener("load",w),new ResizeObserver(w).observe(document.body);let M=(he,Te,We)=>{let $=fs.clamp((We-he)/(Te-he),0,1);return $*$*(3-2*$)};function P(){let he=(qr.scroll??scrollY)+innerHeight*.5,Te=innerHeight*.42,We=0;for(let $=1;$<S.length;$++)We+=M(S[$]-Te,S[$]+Te,he);return We}let I=new Ee,U=new Ul;addEventListener("pointermove",he=>{I.set(he.clientX/innerWidth*2-1,-(he.clientY/innerHeight)*2+1)}),Jf.addEventListener("pointerdown",he=>{let Te=new Ee(he.clientX/innerWidth*2-1,-(he.clientY/innerHeight)*2+1);if(U.setFromCamera(Te,t),U.intersectObject(l.root,!0).length){l.poke(),an.play("poke");let nt=Ev[Ai];ji.say(nt[Math.random()*nt.length|0],{temp:!0});return}let We=U.intersectObjects(a.clickables,!1)[0];if(!We)return;let $=We.object,$e=$.userData.onClick;if($e==="balloon"){let nt=$.userData.group;if(nt.userData.popped)return;nt.userData.popped=!0,an.play("pop"),bi.to($.scale,{x:1.5,y:1.7,z:1.5,duration:.08,onComplete:()=>{$.visible=!1}}),ji.say(Wc.balloon[Ai],{temp:!0}),setTimeout(()=>{$.visible=!0,$.scale.set(.01,.01,.01),bi.to($.scale,{x:1,y:1.18,z:1,duration:.8,ease:"elastic.out(1,.5)"}),nt.userData.popped=!1},5e3)}else $e==="rocket"?(a.props.rocket.userData.boost=1,an.play("whoosh"),ji.say(Wc.rocket[Ai],{temp:!0})):$e==="moon"?(ji.say(Wc.moon[Ai],{temp:!0}),an.play("arrive")):$e==="cap"&&(N(),ji.say(Wc.cap[Ai],{temp:!0}))});let D=0,F=!1;function N(){let he=a.props;an.play("beam"),l.setMode("celebrate"),a.packetBoost=1,bi.timeline().to(he.beam.material,{opacity:.85,duration:.35,ease:"power2.out"}).to(he.capLight,{intensity:60,duration:.3},0).to(he.beam.material,{opacity:0,duration:2.4,ease:"power1.in"},.9).to(he.capLight,{intensity:6,duration:2},1),he.rings.forEach((Te,We)=>bi.fromTo(Te.scale,{x:1,y:1,z:1},{x:9,y:9,z:9,duration:2.2,delay:We*.3,ease:"power2.out"})),he.rings.forEach((Te,We)=>bi.fromTo(Te.material,{opacity:1},{opacity:0,duration:2.2,delay:We*.3}))}ji.onSend=()=>{N(),ji.say(wv[Ai],{temp:!0})},ji.onLang=()=>{q=-1},ji.onPoke=()=>{l.poke(),an.play("poke")};function O(){let he=innerWidth,Te=innerHeight;_n.setSize(he,Te,!1),h.setSize(he,Te),d.setSize(he/2,Te/2),f&&f.setSize(he,Te),T!==Qa()&&y(),t.aspect=he/Te,t.fov=he/Te<.8?60:he/Te<1.2?50:42,t.updateProjectionMatrix()}addEventListener("resize",O),O();let G=performance.now(),k=0,C=P(),q=-1,ae=0,_e=-1,X=new Ee,W=new Ee,j=new B,ce=new B;qm(C,W),l.root.position.set(W.x,Zf(W.x,W.y),W.y);let le=0,ve=0,Ze=location.hash.startsWith("#hq"),Re=location.hash==="#hqsnap",Xe=b[0];function Ue(){let he=performance.now(),Te=Math.min((he-G)/1e3,.05);G=he,k+=Te;let We=k,$=P();C+=($-C)*Math.min(1,Te*(Xr?30:3.4)),Re&&(C=$),qm(C,X);let $e=X.distanceTo(W),nt=l.root;nt.position.x=X.x,nt.position.z=X.y;let xt=Zf(X.x,X.y);nt.position.y+=(xt-nt.position.y)*Math.min(1,Te*16),l.st.speed+=($e/Math.max(Te,.001)-l.st.speed)*.2;let tt;$e>.004?tt=Math.atan2(X.x-W.x,X.y-W.y):tt=Math.atan2(t.position.x-nt.position.x,t.position.z-nt.position.z);let St=tt-nt.rotation.y;St=Math.atan2(Math.sin(St),Math.cos(St)),nt.rotation.y+=St*Math.min(1,Te*7),W.copy(X),l.st.look.set(I.x*.6,I.y*.5),l.st.talk=ji.talking()?1:0;let At=fs.clamp(C/($f-1),0,1);g.getPoint(At,t.position),v.getPoint(At,ce),E.k>0&&t.position.lerp(_,E.k*E.k),t.position.x+=I.x*.35,t.position.y+=I.y*.2,t.lookAt(ce);let V=Math.floor(C),ft=Math.min(V+1,$f-1),ot=C-V,qe=Qa()?.5:fs.lerp(b[V],b[ft],ot);Xe+=(qe-Xe)*Math.min(1,Te*5);let fe=innerWidth,Qe=innerHeight,Ne=Qa()?0:.42;Ne?t.setViewOffset(fe*(1+Ne),Qe,fe*Ne*Xe,0,fe,Qe):t.setViewOffset(fe,Qe*1.5,0,Qe*.4,fe,Qe);let Oe=Math.round(C);Math.abs(C-Oe)<.02?ae+=Re?1:Te:ae=0,ae>.25&&q!==Oe&&(q=Oe,ji.lines(Tv[Ai][Oe]),l.setMode(bv[Oe]),an.play("arrive")),Math.abs(C-q)>.18&&q!==-1&&(q=-1,ji.hide(),l.st.mode!=="celebrate"&&l.setMode("idle")),Oe!==_e&&(_e=Oe,ji.level(Oe),ji.avoid(ja[Oe])),a.packetBoost=Math.max(a.packetBoost,Math.min(1,Math.abs(qr.velocity||0)/60)),a.update(We,Te,t),l.update(Te,We);let L=l.headAnchor();if(j.copy(L).project(t),ji.place((j.x*.5+.5)*innerWidth,(-j.y*.5+.5)*innerHeight,j.z<1),(D=(D+1)%6)===0){U.setFromCamera(I,t);let A=U.intersectObject(l.root,!0).length>0,Y=A||U.intersectObjects(a.clickables,!1).length>0;Y!==F&&(F=Y,Jf.style.cursor=Y?"pointer":""),ji.hint(A,(j.x*.5+.5)*innerWidth,(-j.y*.5+.5)*innerHeight)}if(u.uniforms.t.value=We,p?h.render(Te):_n.render(e,t),le++,!Ze&&le>30&&(ve+=Te,le>120)){Ze=!0;let A=ve/90;A>.028&&f&&(f.enabled=!1),A>.034&&(s=1,_n.setPixelRatio(1),O(),A>.05&&(p=!1,_n.shadowMap.enabled=!1))}}bi.ticker.add(Ue),location.hash==="#debug"&&(window.__dbg=()=>({qS:C,q:P(),lastSpoken:q,settleT:ae,mode:l.st.mode,speed:l.st.speed,pos:l.root.position.toArray().map(he=>+he.toFixed(2)),scroll:qr.scroll,bounds:S})),await new Promise(he=>{r<=n&&he(),i.onLoad=he,setTimeout(he,6e3)}),$m(1),setTimeout(()=>{wt("#loader").classList.add("done"),Zm(),Jm(),Xr||bi.to(E,{k:0,duration:3.2,ease:"power3.inOut",onComplete:()=>{Math.round(C)===0&&(q=-1)}})},350)}function $m(s){let e=document.querySelectorAll(".ld-s"),t=Math.round(s*e.length);e.forEach((n,r)=>n.classList.toggle("on",r<t));let i=wt("#ld-pct");i&&(i.textContent=`${Math.round(s*100)}%`)}$m(.15);function Jm(){Xr||(document.querySelectorAll(".sec:not(#hero) .panel").forEach(s=>{let e=s.querySelector("h2"),t=e?Xf.create(e,{type:"words",mask:"words"}):null,i=bi.timeline({scrollTrigger:{trigger:s,start:"top 82%",toggleActions:"play none none reverse"}});i.from(s,{y:60,opacity:0,duration:.9,ease:"power3.out"}),t&&i.from(t.words,{yPercent:110,duration:.7,stagger:.06,ease:"power3.out"},.15);let n=s.querySelectorAll(".facts li,.chips span,.proj,.arena li,.certs li,.bench li,.pipe li");n.length&&i.from(n,{y:14,opacity:0,duration:.5,stagger:.03,ease:"power2.out"},.3)}),bi.from(".hero-panel > :not(h1)",{y:24,opacity:0,duration:1,stagger:.12,ease:"power3.out",delay:.5}))}function Hw(){let s=wt("#bubble"),e=wt("#bubble-text"),t=wt("#bubble-next"),i=wt("#poke-hint"),n=[],r=0,o=null,a=!1,l=null,c=null,h=!1,f={onSend:null,onLang:null,onPoke:null};function d(W){clearTimeout(l),o&&o.kill(),e.innerHTML="";let j=document.createElement("span");j.className="ghost",j.textContent=W;let ce=document.createElement("span");ce.className="typed",e.append(j,ce),a=!0,s.hidden=!1,s.dir=Ai==="ar"?"rtl":"ltr",s.lang=Ai,h||(h=!0,bi.fromTo(s,{scale:.6,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2)"}));let le=Array.from(W),ve={n:0};o=bi.to(ve,{n:le.length,duration:Xr?0:Math.min(2.6,le.length*.028),ease:"none",onUpdate:()=>{let Ze=Math.round(ve.n);Ze!==ce.textContent.length&&Ze%2===0&&an.play("tick"),ce.textContent=le.slice(0,Ze).join("")},onComplete:()=>{a=!1,ce.textContent=W,r<n.length-1&&(l=setTimeout(()=>u(),2600))}})}function u(){r<n.length-1?(r++,d(n[r])):n.length&&(r=0,d(n[0]))}t.addEventListener("click",()=>{clearTimeout(c),u()}),s.addEventListener("click",W=>{(W.target===s||W.target===e)&&(clearTimeout(c),u())}),f.lines=W=>{clearTimeout(c),n=W,r=0,d(W[0])},f.say=(W,{temp:j}={})=>{let ce=n.slice(),le=r;d(W),clearTimeout(c),j&&ce.length&&(c=setTimeout(()=>{n=ce,r=le,d(n[r])},3200))},f.hide=()=>{clearTimeout(l),h&&(h=!1,a=!1,o&&o.kill(),bi.to(s,{scale:.7,opacity:0,duration:.2,onComplete:()=>{h||(s.hidden=!0)}}))},f.talking=()=>a;let p=0,x=0,m=null,g="";f.avoid=W=>{m=W?W.querySelector(".panel"):null,g=W?W.dataset.side:""},f.place=(W,j,ce)=>{if(s.hidden)return;p=s.offsetWidth,x=s.offsetHeight;let le=W-40,ve=j-x-22,Ze=!1;if(ve<76&&(ve=j+34,Ze=!0),m&&innerWidth>820){let Re=m.getBoundingClientRect();Re.bottom>ve&&Re.top<ve+x&&(g==="left"&&le<Re.right+14&&(le=Re.right+14),g==="right"&&le+p>Re.left-14&&(le=Re.left-p-14))}le=Math.max(12,Math.min(innerWidth-p-12,le)),ve=Math.max(70,Math.min(innerHeight-x-12,ve)),s.classList.toggle("below",Ze),s.style.setProperty("--tail",`${Math.max(22,Math.min(p-22,W-le))}px`),s.style.transform=`translate(${le}px,${ve}px)`,s.style.visibility=ce?"visible":"hidden"},f.hint=(W,j,ce)=>{i.classList.toggle("on",W&&!h),W&&(i.style.transform=`translate(${j+30}px,${ce+40}px)`)};let v=wt("#mini"),T=wt("#mini-label"),y=[86,74,62,50,38,26,14];v.innerHTML=y.map((W,j)=>`<rect data-i="${j}" x="${(90-W)/2}" y="${128-j*19}" width="${W}" height="16" rx="2"><title>${Ym[j]}</title></rect>`).join(""),v.querySelectorAll("rect").forEach(W=>W.addEventListener("click",()=>Xc(+W.dataset.i)));let b=document.querySelectorAll(".links a");f.level=W=>{f.current=W,v.querySelectorAll("rect").forEach((j,ce)=>{j.classList.toggle("on",ce===W),j.classList.toggle("done",ce<W)}),T.textContent=Ym[W],b.forEach(j=>j.classList.toggle("on",+j.dataset.go===W))};let E=wt("#lang"),_=()=>{E.textContent=Ai==="ar"?"EN":"\u0639",E.setAttribute("aria-label",Ai==="ar"?"Switch the guide to English":"Switch the guide to Egyptian Arabic"),document.documentElement.classList.toggle("ar",Ai==="ar")};E.addEventListener("click",()=>{Ai=Ai==="ar"?"en":"ar";try{localStorage.setItem("adham-guide-lang",Ai)}catch{}_(),f.onLang&&f.onLang()}),_();let S={name:wt("#f-name"),role:wt("#f-role"),msg:wt("#f-msg")},w=wt("#req-preview"),M=wt("#req-status"),P=W=>JSON.stringify(W),I=()=>{w.textContent=`POST /api/hire HTTP/1.1
Host: adham107harp.github.io
Content-Type: application/json

{
  "from": ${P(S.name.value||"you")},
  "about": ${P(S.role.value||"an opportunity")},
  "message": ${P((S.msg.value||"\u2026").slice(0,140))}
}`};Object.values(S).forEach(W=>W.addEventListener("input",I)),I();let U="adhamharp994@gmail.com";wt("#req").addEventListener("submit",W=>{if(W.preventDefault(),!S.msg.value.trim()){M.textContent="400 Bad Request: the message is empty.",S.msg.focus();return}let j=`${S.role.value||"Hello"} \u2014 from ${S.name.value||"your portfolio"}`,ce=`mailto:${U}?subject=${encodeURIComponent(j)}&body=${encodeURIComponent(S.msg.value)}`;M.textContent=`201 Created. Your mail app should open; if it doesn't, write to ${U}.`,f.onSend&&f.onSend(),setTimeout(()=>{location.href=ce},900)}),wt("#copy-mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(U),M.textContent=`Copied ${U}`}catch{M.textContent=U}});let D=wt("#term"),F=wt("#term-out"),N=wt("#term-in"),O=(W,j="")=>{let ce=document.createElement("div");j&&(ce.className=j),ce.textContent=W,F.appendChild(ce),F.scrollTop=F.scrollHeight},G={home:0,hero:0,about:1,stack:2,work:3,projects:3,research:4,arena:5,contact:6},k={help:()=>"commands: whoami \xB7 ls \xB7 cat about \xB7 projects \xB7 research \xB7 arena \xB7 contact \xB7 goto <section> \xB7 lang ar|en \xB7 poke \xB7 sudo hire adham \xB7 clear \xB7 exit",whoami:()=>"Adham Harp \u2014 AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).",ls:()=>"about/  stack/  work/  research/  arena/  contact/  capstone.gold","cat about":()=>"Backend first, AI on top. Builds APIs, databases and the logic behind products. Class of 2028.",projects:()=>"SmartHabbit (backend) \xB7 BU-LabTrack (backend API) \xB7 CAPCOM: Storm Watch (NASA Space Apps) \xB7 Shubha (in progress) \xB7 Sentinel FDS \xB7 The RSA Heist",research:()=>"IoT Sentinel: XGBoost + Isolation Forest + decision fusion \u2192 4-tier risk. IEEE Xplore, ITC-Egypt 2026.",arena:()=>"ICPC ECPC quals: 88th (2025), 177th (2026). 248+ Codeforces problems. Next: ODC Champions, 3 Dec.",contact:()=>`email: ${U}
github: adham107harp
linkedin: adham-harp-43bb6232b`,poke:()=>(f.onPoke&&f.onPoke(),"ouch. he says hi."),"sudo hire adham":()=>(setTimeout(()=>{ae(),Xc(6),setTimeout(()=>f.onSend&&f.onSend(),2800)},900),"[sudo] permission granted. 201 Created \u2014 taking you to the capstone\u2026"),clear:()=>(F.textContent="",null),exit:()=>(ae(),null)};function C(W){let j=W.trim().replace(/\s+/g," ").toLowerCase();if(!j)return;if(O(`$ ${W}`,"c"),j.startsWith("goto ")){let ve=G[j.slice(5)];if(ve===void 0)return O(`no such section: ${j.slice(5)}`,"e");ae(),Xc(ve);return}if(j.startsWith("lang ")){let ve=j.slice(5);if(ve!=="ar"&&ve!=="en")return O("lang ar | lang en","e");Ai=ve;try{localStorage.setItem("adham-guide-lang",Ai)}catch{}return _(),f.onLang&&f.onLang(),O(`guide speaks ${ve==="ar"?"Egyptian Arabic":"English"} now.`)}if(j==="sudo rm -rf /")return O("nice try. the pyramid has stood for 4,600 years.","e");let ce=k[j];if(!ce)return O(`command not found: ${j}. try "help".`,"e");let le=ce();le&&O(le)}function q(){D.hidden=!1,F.textContent||O('Welcome to adham@saqqara. Type "help".'),setTimeout(()=>N.focus(),30),qr.stop()}function ae(){D.hidden=!0,qr.start(),wt("#term-btn").focus()}wt("#term-btn").addEventListener("click",q),wt("#term-close").addEventListener("click",ae),D.addEventListener("click",W=>{W.target===D&&ae()}),wt("#term-form").addEventListener("submit",W=>{W.preventDefault(),C(N.value),N.value=""});let _e=wt("#sound"),X=()=>{_e.setAttribute("aria-pressed",String(an.on)),_e.title=an.on?"Sound on":"Sound off",_e.classList.toggle("on",an.on)};return _e.addEventListener("click",()=>{an.toggle(),X();try{localStorage.setItem("adham-sound",an.on?"1":"0")}catch{}}),document.addEventListener("visibilitychange",()=>an.pause(document.hidden)),X(),i_(wt("#gh-live")),addEventListener("keydown",W=>{let j=/INPUT|TEXTAREA/.test(document.activeElement?.tagName);if(!j&&D.hidden&&(W.key==="ArrowDown"||W.key==="ArrowUp"||W.key==="PageDown"||W.key==="PageUp")){W.preventDefault();let ce=f.current??0;Xc(Math.max(0,Math.min(ja.length-1,ce+(W.key==="ArrowDown"||W.key==="PageDown"?1:-1))));return}W.key==="Escape"&&!D.hidden?ae():(W.key==="`"||W.key==="~")&&!j&&(W.preventDefault(),D.hidden?q():ae())}),f}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)
*/

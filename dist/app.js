var qv=Object.defineProperty;var Yv=(s,e,t)=>e in s?qv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var qe=(s,e,t)=>Yv(s,typeof e!="symbol"?e+"":e,t);var V0=0,Fd=1,G0=2;var po=1,W0=2,Ta=3,Ur=0,Bi=1,Ci=2,Pi=0,Ea=1,nr=2,Bd=3,kd=4,iu=5;var Zn=100,X0=101,q0=102,Y0=103,$0=104,mo=200,Z0=201,J0=202,K0=203,zd=204,Hd=205,Hl=206,Q0=207,Vl=208,j0=209,eg=210,tg=211,ig=212,ng=213,sg=214,Rh=0,Ch=1,Ph=2,la=3,Ih=4,Dh=5,Lh=6,Nh=7,Vd=0,rg=1,og=2,Cs=0,Gl=1,Wl=2,Xl=3,go=4,ql=5,Yl=6,$l=7;var Gd=300,_o=301,wa=302,nu=303,su=304,Sn=1e3,bs=1001,Uh=1002,ri=1003,ag=1004;var Zl=1005;var ln=1006,ru=1007;var sr=1008;var Zi=1009,Wd=1010,Xd=1011,Aa=1012,ou=1013,ms=1014,Jn=1015,jt=1016,au=1017,lu=1018,rr=1020,qd=35902,Yd=35899,$d=1021,Zd=1022,Ln=1023,Qs=1026,gs=1027,cu=1028,hu=1029,Or=1030,uu=1031;var fu=1033,Jl=33776,Kl=33777,Ql=33778,jl=33779,du=35840,pu=35841,mu=35842,gu=35843,_u=36196,xu=37492,vu=37496,yu=37488,Su=37489,ec=37490,Mu=37491,bu=37808,Tu=37809,Eu=37810,wu=37811,Au=37812,Ru=37813,Cu=37814,Pu=37815,Iu=37816,Du=37817,Lu=37818,Nu=37819,Uu=37820,Ou=37821,Fu=36492,Bu=36494,ku=36495,zu=36283,Hu=36284,tc=36285,Vu=36286;var xl=2300,Oh=2301,Eh=2302,Ad=2303,Rd=2400,Cd=2401,Pd=2402;var lg=3200;var ic=0,cg=1,or="",Ht="srgb",vl="srgb-linear",yl="linear",bt="srgb";var wh=7680;var hg=519,ug=512,fg=513,dg=514,Jd=515,pg=516,mg=517,Kd=518,Qd=519,jd=35044;var ep="300 es",Xn=2e3,ca=2001;function $v(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gg(){let s=ha("canvas");return s.style.display="block",s}var o0={},ua=null;function Sl(...s){let e="THREE."+s.shift();ua?ua("log",e,...s):console.log(e,...s)}function _g(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=_g(s);let e="THREE."+s.shift();if(ua)ua("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rt(...s){s=_g(s);let e="THREE."+s.shift();if(ua)ua("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function oo(...s){let e=s.join(" ");e in o0||(o0[e]=!0,it(...s))}function xg(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var vg={[Rh]:Rh,[Ph]:Lh,[Ih]:Ih,[la]:Dh,[Ch]:Ch,[Lh]:Ph,[Nh]:Nh,[Dh]:la},Ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},Xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a0=1234567,gl=Math.PI/180,fa=180/Math.PI;function Fr(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xi[s&255]+Xi[s>>8&255]+Xi[s>>16&255]+Xi[s>>24&255]+"-"+Xi[e&255]+Xi[e>>8&255]+"-"+Xi[e>>16&15|64]+Xi[e>>24&255]+"-"+Xi[t&63|128]+Xi[t>>8&255]+"-"+Xi[t>>16&255]+Xi[t>>24&255]+Xi[i&255]+Xi[i>>8&255]+Xi[i>>16&255]+Xi[i>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function tp(s,e){return(s%e+e)%e}function Jv(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Kv(s,e,t){return s!==e?(t-s)/(e-s):0}function _l(s,e,t){return(1-t)*s+t*e}function Qv(s,e,t,i){return _l(s,e,1-Math.exp(-t*i))}function jv(s,e=1){return e-Math.abs(tp(s,e*2)-e)}function ey(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ty(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function iy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ny(s,e){return s+Math.random()*(e-s)}function sy(s){return s*(.5-Math.random())}function ry(s){s!==void 0&&(a0=s);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oy(s){return s*gl}function ay(s){return s*fa}function ly(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function cy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hy(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),u=r((i-e)/2),p=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Gu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function np(s,e){if(e.constructor===Float32Array)return s;let t=Gu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function sp(s,e){if(e.constructor===Float32Array)return s;let t=Gu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Kn={DEG2RAD:gl,RAD2DEG:fa,generateUUID:Fr,clamp:dt,euclideanModulo:tp,mapLinear:Jv,inverseLerp:Kv,lerp:_l,damp:Qv,pingpong:jv,smoothstep:ey,smootherstep:ty,randInt:iy,randFloat:ny,randFloatSpread:sy,seededRandom:ry,degToRad:oy,radToDeg:ay,isPowerOfTwo:ly,ceilPowerOfTwo:cy,floorPowerOfTwo:ip,setQuaternionFromProperEuler:hy,normalize:sp,denormalize:np},hp=class hp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hp.prototype.isVector2=!0;var Ie=hp,cn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],d=r[o+0],u=r[o+1],p=r[o+2],g=r[o+3];if(f!==g||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*g;m<0&&(d=-d,u=-u,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);x=Math.sin(x*v)/T,a=Math.sin(a*v)/T,l=l*x+d*a,c=c*x+u*a,h=h*x+p*a,f=f*x+g*a}else{l=l*x+d*a,c=c*x+u*a,h=h*x+p*a,f=f*x+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),f=a(r/2),d=l(i/2),u=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-n)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},up=class up{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(l0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(l0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=n+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;var F=up,nd=new F,l0=new cn,fp=class fp{constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],p=i[8],g=n[0],m=n[3],x=n[6],v=n[1],T=n[4],y=n[7],b=n[2],M=n[5],_=n[8];return r[0]=o*g+a*v+l*b,r[3]=o*m+a*T+l*M,r[6]=o*x+a*y+l*_,r[1]=c*g+h*v+f*b,r[4]=c*m+h*T+f*M,r[7]=c*x+h*y+f*_,r[2]=d*g+u*v+p*b,r[5]=d*m+u*T+p*M,r[8]=d*x+u*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+i*d+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=f*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-a*t)*g,e[6]=u*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sd.makeScale(e,t)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;var ot=fp,sd=new ot,c0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){let s={enabled:!0,workingColorSpace:vl,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(n.r=Ks(n.r),n.g=Ks(n.g),n.b=Ks(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(n.r=aa(n.r),n.g=aa(n.g),n.b=aa(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===or?yl:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[vl]:{primaries:e,whitePoint:i,transfer:yl,toXYZ:c0,fromXYZ:h0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:c0,fromXYZ:h0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),s}var gt=uy();function Ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function aa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vo,Fh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vo===void 0&&(Vo=ha("canvas")),Vo.width=e.width,Vo.height=e.height;let n=Vo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Vo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ks(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ks(t[i]/255)*255):t[i]=Ks(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fy=0,da=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(rd(n[o].image)):r.push(rd(n[o]))}else r=rd(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var dy=0,od=new F,$i=class s extends Ts{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=bs,n=bs,r=ln,o=sr,a=Ln,l=Zi,c=s.DEFAULT_ANISOTROPY,h=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Fr(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$i.DEFAULT_IMAGE=null;$i.DEFAULT_MAPPING=Gd;$i.DEFAULT_ANISOTROPY=1;var dp=class dp{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(u+1)/2,b=(x+1)/2,M=(h+d)/4,_=(f+g)/4,S=(p+m)/4;return T>y&&T>b?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=M/i,r=_/i):y>b?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=M/n,r=S/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=_/r,n=S/r),this.set(i,n,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dp.prototype.isVector4=!0;var Vt=dp,Bh=class extends Ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new $i({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new da(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Bh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ml=class extends $i{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kh=class extends $i{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tu=class tu{constructor(e,t,i,n,r,o,a,l,c,h,f,d,u,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,f,d,u,p,g,m)}set(e,t,i,n,r,o,a,l,c,h,f,d,u,p,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=n,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=f,x[14]=d,x[3]=u,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tu().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Go.setFromMatrixColumn(e,0).length(),r=1/Go.setFromMatrixColumn(e,1).length(),o=1/Go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,g=c*f;t[0]=d+g*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-g*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+g,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(py,e,my)}lookAt(e,t,i){let n=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Tr.crossVectors(i,Pn),Tr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Tr.crossVectors(i,Pn)),Tr.normalize(),jc.crossVectors(Pn,Tr),n[0]=Tr.x,n[4]=jc.x,n[8]=Pn.x,n[1]=Tr.y,n[5]=jc.y,n[9]=Pn.y,n[2]=Tr.z,n[6]=jc.z,n[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],p=i[2],g=i[6],m=i[10],x=i[14],v=i[3],T=i[7],y=i[11],b=i[15],M=n[0],_=n[4],S=n[8],w=n[12],E=n[1],D=n[5],P=n[9],N=n[13],R=n[2],U=n[6],k=n[10],O=n[14],Y=n[3],W=n[7],I=n[11],J=n[15];return r[0]=o*M+a*E+l*R+c*Y,r[4]=o*_+a*D+l*U+c*W,r[8]=o*S+a*P+l*k+c*I,r[12]=o*w+a*N+l*O+c*J,r[1]=h*M+f*E+d*R+u*Y,r[5]=h*_+f*D+d*U+u*W,r[9]=h*S+f*P+d*k+u*I,r[13]=h*w+f*N+d*O+u*J,r[2]=p*M+g*E+m*R+x*Y,r[6]=p*_+g*D+m*U+x*W,r[10]=p*S+g*P+m*k+x*I,r[14]=p*w+g*N+m*O+x*J,r[3]=v*M+T*E+y*R+b*Y,r[7]=v*_+T*D+y*U+b*W,r[11]=v*S+T*P+y*k+b*I,r[15]=v*w+T*N+y*O+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],g=e[7],m=e[11],x=e[15],v=l*u-c*d,T=a*u-c*f,y=a*d-l*f,b=o*u-c*h,M=o*d-l*h,_=o*f-a*h;return t*(g*v-m*T+x*y)-i*(p*v-m*b+x*M)+n*(p*T-g*b+x*_)-r*(p*y-g*M+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],g=e[13],m=e[14],x=e[15],v=t*a-i*o,T=t*l-n*o,y=t*c-r*o,b=i*l-n*a,M=i*c-r*a,_=n*c-r*l,S=h*g-f*p,w=h*m-d*p,E=h*x-u*p,D=f*m-d*g,P=f*x-u*g,N=d*x-u*m,R=v*N-T*P+y*D+b*E-M*w+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(a*N-l*P+c*D)*U,e[1]=(n*P-i*N-r*D)*U,e[2]=(g*_-m*M+x*b)*U,e[3]=(d*M-f*_-u*b)*U,e[4]=(l*E-o*N-c*w)*U,e[5]=(t*N-n*E+r*w)*U,e[6]=(m*y-p*_-x*T)*U,e[7]=(h*_-d*y+u*T)*U,e[8]=(o*P-a*E+c*S)*U,e[9]=(i*E-t*P-r*S)*U,e[10]=(p*M-g*y+x*v)*U,e[11]=(f*y-h*M-u*v)*U,e[12]=(a*w-o*D-l*S)*U,e[13]=(t*D-i*w+n*S)*U,e[14]=(g*T-p*b-m*v)*U,e[15]=(h*b-f*T+d*v)*U,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,g=o*h,m=o*f,x=a*f,v=l*c,T=l*h,y=l*f,b=i.x,M=i.y,_=i.z;return n[0]=(1-(g+x))*b,n[1]=(u+y)*b,n[2]=(p-T)*b,n[3]=0,n[4]=(u-y)*M,n[5]=(1-(d+x))*M,n[6]=(m+v)*M,n[7]=0,n[8]=(p+T)*_,n[9]=(m-v)*_,n[10]=(1-(d+g))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Go.set(n[0],n[1],n[2]).length(),a=Go.set(n[4],n[5],n[6]).length(),l=Go.set(n[8],n[9],n[10]).length();r<0&&(o=-o),ls.copy(this);let c=1/o,h=1/a,f=1/l;return ls.elements[0]*=c,ls.elements[1]*=c,ls.elements[2]*=c,ls.elements[4]*=h,ls.elements[5]*=h,ls.elements[6]*=h,ls.elements[8]*=f,ls.elements[9]*=f,ls.elements[10]*=f,t.setFromRotationMatrix(ls),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=Xn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Xn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-n),d=-(t+e)/(t-e),u=-(i+n)/(i-n),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Xn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===ca)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};tu.prototype.isMatrix4=!0;var ct=tu,Go=new F,ls=new ct,py=new F(0,0,0),my=new F(1,1,1),Tr=new F,jc=new F,Pn=new F,u0=new ct,f0=new cn,qn=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],u=n[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gy=0,d0=new F,Wo=new cn,Xs=new ct,eh=new F,al=new F,_y=new F,xy=new cn,p0=new F(1,0,0),m0=new F(0,1,0),g0=new F(0,0,1),_0={type:"added"},vy={type:"removed"},Xo={type:"childadded",child:null},ad={type:"childremoved",child:null},Ai=class s extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new qn,i=new cn,n=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ct},normalMatrix:{value:new ot}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.premultiply(Wo),this}rotateX(e){return this.rotateOnAxis(p0,e)}rotateY(e){return this.rotateOnAxis(m0,e)}rotateZ(e){return this.rotateOnAxis(g0,e)}translateOnAxis(e,t){return d0.copy(e).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(p0,e)}translateY(e){return this.translateOnAxis(m0,e)}translateZ(e){return this.translateOnAxis(g0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eh.copy(e):eh.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xs.lookAt(al,eh,this.up):Xs.lookAt(eh,al,this.up),this.quaternion.setFromRotationMatrix(Xs),n&&(Xs.extractRotation(n.matrixWorld),Wo.setFromRotationMatrix(Xs),this.quaternion.premultiply(Wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vy),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,_y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ai.DEFAULT_UP=new F(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},yy={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},th={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=gt.workingColorSpace){if(e=tp(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ld(o,r,e+1/3),this.g=ld(o,r,e),this.b=ld(o,r,e-1/3)}return gt.colorSpaceToWorking(this,n),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=yg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return gt.workingToColorSpace(qi.copy(this),e),Math.round(dt(qi.r*255,0,255))*65536+Math.round(dt(qi.g*255,0,255))*256+Math.round(dt(qi.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(qi.copy(this),t);let i=qi.r,n=qi.g,r=qi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(qi.copy(this),t),e.r=qi.r,e.g=qi.g,e.b=qi.b,e}getStyle(e=Ht){gt.workingToColorSpace(qi.copy(this),e);let t=qi.r,i=qi.g,n=qi.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(th);let i=_l(Er.h,th.h,t),n=_l(Er.s,th.s,t),r=_l(Er.l,th.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qi=new Ue;Ue.NAMES=yg;var bl=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ao=class extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},cs=new F,qs=new F,cd=new F,Ys=new F,qo=new F,Yo=new F,x0=new F,hd=new F,ud=new F,fd=new F,dd=new Vt,pd=new Vt,md=new Vt,Js=class s{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),cs.subVectors(e,t),n.cross(cs);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){cs.subVectors(n,t),qs.subVectors(i,t),cd.subVectors(e,t);let o=cs.dot(cs),a=cs.dot(qs),l=cs.dot(cd),c=qs.dot(qs),h=qs.dot(cd),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ys)===null?!1:Ys.x>=0&&Ys.y>=0&&Ys.x+Ys.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ys.x),l.addScaledVector(o,Ys.y),l.addScaledVector(a,Ys.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return dd.setScalar(0),pd.setScalar(0),md.setScalar(0),dd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(dd,r.x),o.addScaledVector(pd,r.y),o.addScaledVector(md,r.z),o}static isFrontFacing(e,t,i,n){return cs.subVectors(i,t),qs.subVectors(e,t),cs.cross(qs).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cs.subVectors(this.c,this.b),qs.subVectors(this.a,this.b),cs.cross(qs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;qo.subVectors(n,i),Yo.subVectors(r,i),hd.subVectors(e,i);let l=qo.dot(hd),c=Yo.dot(hd);if(l<=0&&c<=0)return t.copy(i);ud.subVectors(e,n);let h=qo.dot(ud),f=Yo.dot(ud);if(h>=0&&f<=h)return t.copy(n);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(qo,o);fd.subVectors(e,r);let u=qo.dot(fd),p=Yo.dot(fd);if(p>=0&&u<=p)return t.copy(r);let g=u*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Yo,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return x0.subVectors(r,n),a=(f-h)/(f-h+(u-p)),t.copy(n).addScaledVector(x0,a);let x=1/(m+g+d);return o=g*x,a=d*x,t.copy(i).addScaledVector(qo,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Es=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hs):hs.fromBufferAttribute(r,o),hs.applyMatrix4(e.matrixWorld),this.expandByPoint(hs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ih.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ih.copy(i.boundingBox)),ih.applyMatrix4(e.matrixWorld),this.union(ih)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hs),hs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),nh.subVectors(this.max,ll),$o.subVectors(e.a,ll),Zo.subVectors(e.b,ll),Jo.subVectors(e.c,ll),wr.subVectors(Zo,$o),Ar.subVectors(Jo,Zo),io.subVectors($o,Jo);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-io.z,io.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,io.z,0,-io.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-io.y,io.x,0];return!gd(t,$o,Zo,Jo,nh)||(t=[1,0,0,0,1,0,0,0,1],!gd(t,$o,Zo,Jo,nh))?!1:(sh.crossVectors(wr,Ar),t=[sh.x,sh.y,sh.z],gd(t,$o,Zo,Jo,nh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$s=[new F,new F,new F,new F,new F,new F,new F,new F],hs=new F,ih=new Es,$o=new F,Zo=new F,Jo=new F,wr=new F,Ar=new F,io=new F,ll=new F,nh=new F,sh=new F,no=new F;function gd(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){no.fromArray(s,r);let a=n.x*Math.abs(no.x)+n.y*Math.abs(no.y)+n.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),h=i.dot(no);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fi=new F,rh=new Ie,Sy=0,Ui=class extends Ts{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jd,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?Gu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rh.fromBufferAttribute(this,t),rh.applyMatrix3(e),this.setXY(t,rh.x,rh.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix3(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):np(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sp(e,this.array)}};var Tl=class extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var El=class extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var yt=class extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}},My=new Es,cl=new F,_d=new F,js=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):My.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);let t=cl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(cl,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(_d)),this.expandByPoint(cl.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},by=0,Wn=new ct,xd=new Ai,Ko=new F,In=new Es,hl=new Es,wi=new F,qt=class s extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?El:Tl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(wi.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(wi),wi.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(wi)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];hl.setFromBufferAttribute(a),this.morphTargetsRelative?(wi.addVectors(In.min,hl.min),In.expandByPoint(wi),wi.addVectors(In.max,hl.max),In.expandByPoint(wi)):(In.expandByPoint(hl.min),In.expandByPoint(hl.max))}In.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)wi.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(wi));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wi.fromBufferAttribute(a,c),l&&(Ko.fromBufferAttribute(e,c),wi.add(Ko)),n=Math.max(n,i.distanceToSquared(wi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let w=0;w<i.count;w++)a[w]=new F,l[w]=new F;let h=new F,f=new F,d=new F,u=new Ie,p=new Ie,g=new Ie,m=new F,x=new F;function v(w,E,D){c[w]=c[E]=c[D]=1,h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,D),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,D),f.sub(h),d.sub(h),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),x.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(P),a[w].add(m),a[E].add(m),a[D].add(m),l[w].add(x),l[E].add(x),l[D].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,E=T.length;w<E;++w){let D=T[w],P=D.start,N=D.count;for(let R=P,U=P+N;R<U;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new F,b=new F,M=new F,_=new F;function S(w){M.fromBufferAttribute(n,w),_.copy(M);let E=a[w];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),b.crossVectors(_,E);let P=b.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,P)}for(let w=0,E=i.count;w<E;++w)c[w]&&S(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let n=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(n,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wi.fromBufferAttribute(e,t),wi.normalize(),e.setXYZ(t,wi.x,wi.y,wi.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[u++]}return new Ui(d,h,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jd,this.updateRanges=[],this.version=0,this.uuid=Fr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=v0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=v0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function v0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Fr()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var an=new F,wl=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?Gu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):np(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sp(e,this.data.array)}},vd=new F,Ty=new F,Ey=new ot,us=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=vd.subVectors(i,t).cross(Ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(vd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ey.getNormalMatrix(e),n=this.coplanarPoint(vd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wy=0,fs=class extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Ea,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Hd,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wh,this.stencilZFail=wh,this.stencilZPass=wh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new us().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},er=class extends fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qo,ul=new F,jo=new F,ea=new F,ta=new Ie,fl=new Ie,Sg=new ct,oh=new F,dl=new F,ah=new F,y0=new Ie,yd=new Ie,S0=new Ie,Cr=class extends Ai{constructor(e=new er){if(super(),this.isSprite=!0,this.type="Sprite",Qo===void 0){Qo=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zh(t,5);Qo.setIndex([0,1,2,0,2,3]),Qo.setAttribute("position",new wl(i,3,0,!1)),Qo.setAttribute("uv",new wl(i,2,3,!1))}this.geometry=Qo,this.material=e,this.center=new Ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jo.setFromMatrixScale(this.matrixWorld),Sg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jo.multiplyScalar(-ea.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;lh(oh.set(-.5,-.5,0),ea,o,jo,n,r),lh(dl.set(.5,-.5,0),ea,o,jo,n,r),lh(ah.set(.5,.5,0),ea,o,jo,n,r),y0.set(0,0),yd.set(1,0),S0.set(1,1);let a=e.ray.intersectTriangle(oh,dl,ah,!1,ul);if(a===null&&(lh(dl.set(-.5,.5,0),ea,o,jo,n,r),yd.set(0,1),a=e.ray.intersectTriangle(oh,ah,dl,!1,ul),a===null))return;let l=e.ray.origin.distanceTo(ul);l<e.near||l>e.far||t.push({distance:l,point:ul.clone(),uv:Js.getInterpolation(ul,oh,dl,ah,y0,yd,S0,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function lh(s,e,t,i,n,r){ta.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(fl.x=r*ta.x-n*ta.y,fl.y=n*ta.x+r*ta.y):fl.copy(ta),s.copy(e),s.x+=fl.x,s.y+=fl.y,s.applyMatrix4(Sg)}var Zs=new F,Sd=new F,ch=new F,hh=new F,ga=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zs.copy(this.origin).addScaledVector(this.direction,t),Zs.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Sd.copy(e).add(t).multiplyScalar(.5),ch.copy(t).sub(e).normalize(),hh.copy(this.origin).sub(Sd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ch),a=hh.dot(this.direction),l=-hh.dot(ch),c=hh.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let g=1/h;f*=g,d*=g,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Sd).addScaledVector(ch,d),u}intersectSphere(e,t){if(e.radius<0)return null;Zs.subVectors(e.center,this.origin);let i=Zs.dot(this.direction),n=Zs.dot(Zs)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Zs)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=i.x-o.x,v=i.y-o.y,T=i.z-o.z,y=Math.abs(l),b=Math.abs(c),M=Math.abs(h),_,S,w,E,D,P,N,R,U,k,O,Y;if(y>=b&&y>=M?(w=l,P=f,U=p,Y=x,l>=0?(_=c,S=h,E=d,D=u,N=g,R=m,k=v,O=T):(_=h,S=c,E=u,D=d,N=m,R=g,k=T,O=v)):b>=M?(w=c,P=d,U=g,Y=v,c>=0?(_=h,S=l,E=u,D=f,N=m,R=p,k=T,O=x):(_=l,S=h,E=f,D=u,N=p,R=m,k=x,O=T)):(w=h,P=u,U=m,Y=T,h>=0?(_=l,S=c,E=f,D=d,N=p,R=g,k=x,O=v):(_=c,S=l,E=d,D=f,N=g,R=p,k=v,O=x)),w===0)return null;let W=_/w,I=S/w,J=1/w,de=E-W*P,be=D-I*P,H=N-W*U,X=R-I*U,ue=k-W*Y,ae=O-I*Y,fe=ue*X-ae*H,Se=de*ae-be*ue,Ge=H*be-X*de;if(n){if(fe<0||Se<0||Ge<0)return null}else if((fe<0||Se<0||Ge<0)&&(fe>0||Se>0||Ge>0))return null;let Ae=fe+Se+Ge;if(Ae===0)return null;let Ve=J*(fe*P+Se*U+Ge*Y);return(Ae>0?Ve<0:Ve>0)?null:this.at(Ve/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},di=class extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},M0=new ct,so=new ga,uh=new js,b0=new F,fh=new F,dh=new F,ph=new F,Md=new F,mh=new F,T0=new F,gh=new F,Ne=class extends Ai{constructor(e=new qt,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){mh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Md.fromBufferAttribute(f,e),o?mh.addScaledVector(Md,h):mh.addScaledVector(Md.sub(t),h))}t.add(mh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uh.copy(i.boundingSphere),uh.applyMatrix4(r),so.copy(e.ray).recast(e.near),!(uh.containsPoint(so.origin)===!1&&(so.intersectSphere(uh,b0)===null||so.origin.distanceToSquared(b0)>(e.far-e.near)**2))&&(M0.copy(r).invert(),so.copy(e.ray).applyMatrix4(M0),!(i.boundingBox!==null&&so.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,so)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=T;y<b;y+=3){let M=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);n=_h(this,x,e,i,c,h,f,M,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=p,x=g;m<x;m+=3){let v=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);n=_h(this,o,e,i,c,h,f,v,T,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=T;y<b;y+=3){let M=y,_=y+1,S=y+2;n=_h(this,x,e,i,c,h,f,M,_,S),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let p=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=p,x=g;m<x;m+=3){let v=m,T=m+1,y=m+2;n=_h(this,o,e,i,c,h,f,v,T,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Ay(s,e,t,i,n,r,o,a){let l;if(e.side===Bi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Ur,a),l===null)return null;gh.copy(a),gh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(gh);return c<t.near||c>t.far?null:{distance:c,point:gh.clone(),object:s}}function _h(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,fh),s.getVertexPosition(l,dh),s.getVertexPosition(c,ph);let h=Ay(s,e,t,i,fh,dh,ph,T0);if(h){let f=new F;Js.getBarycoord(T0,fh,dh,ph,f),n&&(h.uv=Js.getInterpolatedAttribute(n,a,l,c,f,new Ie)),r&&(h.uv1=Js.getInterpolatedAttribute(r,a,l,c,f,new Ie)),o&&(h.normal=Js.getInterpolatedAttribute(o,a,l,c,f,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Js.getNormal(fh,dh,ph,d.normal),h.face=d,h.barycoord=f}return h}var tr=class extends $i{constructor(e=null,t=1,i=1,n,r,o,a,l,c=ri,h=ri,f,d){super(null,o,a,l,c,h,n,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=class extends Ui{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ia=new ct,E0=new ct,xh=[],w0=new Es,Ry=new ct,pl=new Ne,ml=new js,ws=class extends Ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ry)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ia),w0.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(w0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ia),ml.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(ml)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(pl.geometry=this.geometry,pl.material=this.material,pl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),e.ray.intersectsSphere(ml)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ia),E0.multiplyMatrices(i,ia),pl.matrixWorld=E0,pl.raycast(e,xh);for(let o=0,a=xh.length;o<a;o++){let l=xh[o];l.instanceId=r,l.object=this,t.push(l)}xh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(n*this.count),n,this.count,cu,Jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ro=new js,Cy=new Ie(.5,.5),vh=new F,Pr=class{constructor(e=new us,t=new us,i=new us,n=new us,r=new us,o=new us){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],g=r[9],m=r[10],x=r[11],v=r[12],T=r[13],y=r[14],b=r[15];if(n[0].setComponents(c-o,u-h,x-p,b-v).normalize(),n[1].setComponents(c+o,u+h,x+p,b+v).normalize(),n[2].setComponents(c+a,u+f,x+g,b+T).normalize(),n[3].setComponents(c-a,u-f,x-g,b-T).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,u-d,x-m,b-y).normalize();else if(n[4].setComponents(c-l,u-d,x-m,b-y).normalize(),t===Xn)n[5].setComponents(c+l,u+d,x+m,b+y).normalize();else if(t===ca)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){ro.center.set(0,0,0);let t=Cy.distanceTo(e.center);return ro.radius=.7071067811865476+t,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(vh.x=n.normal.x>0?e.max.x:e.min.x,vh.y=n.normal.y>0?e.max.y:e.min.y,vh.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(vh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},A0=new ct,Hh=class s{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];A0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Pr),i[n].setFromProjectionMatrix(A0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new Pr),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var lo=class extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},R0=new ct,Id=new ga,yh=new js,Sh=new F,co=class extends Ai{constructor(e=new qt,t=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yh.copy(i.boundingSphere),yh.applyMatrix4(n),yh.radius+=r,e.ray.intersectsSphere(yh)===!1)return;R0.copy(n).invert(),Id.copy(e.ray).applyMatrix4(R0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,g=u;p<g;p++){let m=c.getX(p);Sh.fromBufferAttribute(f,m),C0(Sh,m,l,n,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,g=u;p<g;p++)Sh.fromBufferAttribute(f,p),C0(Sh,p,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function C0(s,e,t,i,n,r,o){let a=Id.distanceSqToPoint(s);if(a<t){let l=new F;Id.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Rl=class extends $i{constructor(e=[],t=_o,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oi=class extends $i{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ds=class extends $i{constructor(e,t,i=ms,n,r,o,a=ri,l=ri,c,h=Qs,f=1){if(h!==Qs&&h!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cl=class extends ds{constructor(e,t=ms,i=_o,n,r,o=ri,a=ri,l,c=Qs){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pl=class extends $i{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class s extends qt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,n,o,2),p("x","z","y",1,-1,e,i,-t,n,o,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function p(g,m,x,v,T,y,b,M,_,S,w){let E=y/_,D=b/S,P=y/2,N=b/2,R=M/2,U=_+1,k=S+1,O=0,Y=0,W=new F;for(let I=0;I<k;I++){let J=I*D-N;for(let de=0;de<U;de++){let be=de*E-P;W[g]=be*v,W[m]=J*T,W[x]=R,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[x]=M>0?1:-1,h.push(W.x,W.y,W.z),f.push(de/_),f.push(1-I/S),O+=1}}for(let I=0;I<S;I++)for(let J=0;J<_;J++){let de=d+J+U*I,be=d+J+U*(I+1),H=d+(J+1)+U*(I+1),X=d+(J+1)+U*I;l.push(de,be,X),l.push(be,H,X),Y+=6}a.addGroup(u,Y,w),u+=Y,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ir=class s extends qt{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=i*2+r,g=n+1,m=new F,x=new F;for(let v=0;v<=p;v++){let T=0,y=0,b=0,M=0;if(v<=i){let w=v/i,E=w*Math.PI/2;y=-h-e*Math.cos(E),b=e*Math.sin(E),M=-e*Math.cos(E),T=w*f}else if(v<=i+r){let w=(v-i)/r;y=-h+w*t,b=e,M=0,T=f+w*d}else{let w=(v-i-r)/i,E=w*Math.PI/2;y=h+e*Math.sin(E),b=e*Math.cos(E),M=e*Math.sin(E),T=f+d+w*f}let _=Math.max(0,Math.min(1,T/u)),S=0;v===0?S=.5/n:v===p&&(S=-.5/n);for(let w=0;w<=n;w++){let E=w/n,D=E*Math.PI*2,P=Math.sin(D),N=Math.cos(D);x.x=-b*N,x.y=y,x.z=b*P,a.push(x.x,x.y,x.z),m.set(-b*N,M,b*P),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+S,_)}if(v>0){let w=(v-1)*g;for(let E=0;E<n;E++){let D=w+E,P=w+E+1,N=v*g+E,R=v*g+E+1;o.push(D,P,N),o.push(P,R,N)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ho=class s extends qt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=i+f/t*n;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ri=class s extends qt{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,g=[],m=i/2,x=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(u,2));function v(){let y=new F,b=new F,M=0,_=(t-e)/i;for(let S=0;S<=r;S++){let w=[],E=S/r,D=E*(t-e)+e;for(let P=0;P<=n;P++){let N=P/n,R=N*l+a,U=Math.sin(R),k=Math.cos(R);b.x=D*U,b.y=-E*i+m,b.z=D*k,f.push(b.x,b.y,b.z),y.set(U,_,k).normalize(),d.push(y.x,y.y,y.z),u.push(N,1-E),w.push(p++)}g.push(w)}for(let S=0;S<n;S++)for(let w=0;w<r;w++){let E=g[w][S],D=g[w+1][S],P=g[w+1][S+1],N=g[w][S+1];(e>0||w!==0)&&(h.push(E,D,N),M+=3),(t>0||w!==r-1)&&(h.push(D,P,N),M+=3)}c.addGroup(x,M,0),x+=M}function T(y){let b=p,M=new Ie,_=new F,S=0,w=y===!0?e:t,E=y===!0?1:-1;for(let P=1;P<=n;P++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),p++;let D=p;for(let P=0;P<=n;P++){let R=P/n*l+a,U=Math.cos(R),k=Math.sin(R);_.x=w*k,_.y=m*E,_.z=w*U,f.push(_.x,_.y,_.z),d.push(0,E,0),M.x=U*.5+.5,M.y=k*.5*E+.5,u.push(M.x,M.y),p++}for(let P=0;P<n;P++){let N=b+P,R=D+P;y===!0?h.push(R,R+1,N):h.push(R+1,R,N),S+=3}c.addGroup(x,S,y===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yn=class s extends Ri{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Il=class s extends qt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new F,y=new F,b=new F;for(let M=0;M<t.length;M+=3)u(t[M+0],T),u(t[M+1],y),u(t[M+2],b),l(T,y,b,v)}function l(v,T,y,b){let M=b+1,_=[];for(let S=0;S<=M;S++){_[S]=[];let w=v.clone().lerp(y,S/M),E=T.clone().lerp(y,S/M),D=M-S;for(let P=0;P<=D;P++)P===0&&S===M?_[S][P]=w:_[S][P]=w.clone().lerp(E,P/D)}for(let S=0;S<M;S++)for(let w=0;w<2*(M-S)-1;w++){let E=Math.floor(w/2);w%2===0?(d(_[S][E+1]),d(_[S+1][E]),d(_[S][E])):(d(_[S][E+1]),d(_[S+1][E+1]),d(_[S+1][E]))}}function c(v){let T=new F;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(v),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let v=new F;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let y=m(v)/2/Math.PI+.5,b=x(v)/Math.PI+.5;o.push(y,1-b)}p(),f()}function f(){for(let v=0;v<o.length;v+=6){let T=o[v+0],y=o[v+2],b=o[v+4],M=Math.max(T,y,b),_=Math.min(T,y,b);M>.9&&_<.1&&(T<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function p(){let v=new F,T=new F,y=new F,b=new F,M=new Ie,_=new Ie,S=new Ie;for(let w=0,E=0;w<r.length;w+=9,E+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),M.set(o[E+0],o[E+1]),_.set(o[E+2],o[E+3]),S.set(o[E+4],o[E+5]),b.copy(v).add(T).add(y).divideScalar(3);let D=m(b);g(M,E+0,v,D),g(_,E+2,T,D),g(S,E+4,y,D)}}function g(v,T,y,b){b<0&&v.x===1&&(o[T]=v.x-1),y.x===0&&y.z===0&&(o[T]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Vh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,u=(o-h)/d;return(n+u)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Ie:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new F,n=[],r=[],o=[],a=new F,l=new ct;for(let u=0;u<=e;u++){let p=u/e;n[u]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),f=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(dt(r[0].dot(r[e]),-1,1));u/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],u*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function rp(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,n(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var P0=new F,I0=new F,bd=new rp,Td=new rp,Ed=new rp,$n=class extends Vh{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new F){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(I0.subVectors(n[0],n[1]).add(n[0]),c=I0);let f=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(P0.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=P0),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),bd.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,g,m),Td.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,g,m),Ed.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(bd.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Td.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ed.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(bd.calc(l),Td.calc(l),Ed.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new F().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var _a=class s extends Il{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Dl=class s extends Il{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ps=class s extends qt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let v=x*d-o;for(let T=0;T<c;T++){let y=T*f-r;p.push(y,-v,0),g.push(0,0,1),m.push(T/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let T=v+c*x,y=v+c*(x+1),b=v+1+c*(x+1),M=v+1+c*x;u.push(T,y,M),u.push(y,b,M)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},uo=class s extends qt{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],f=e,d=(t-e)/n,u=new F,p=new Ie;for(let g=0;g<=n;g++){for(let m=0;m<=i;m++){let x=r+m/i*o;u.x=f*Math.cos(x),u.y=f*Math.sin(x),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let g=0;g<n;g++){let m=g*(i+1);for(let x=0;x<i;x++){let v=x+m,T=v,y=v+i+1,b=v+i+2,M=v+1;a.push(T,y,M),a.push(y,b,M)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pi=class s extends qt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new F,d=new F,u=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let v=[],T=x/i,y=o+T*a,b=e*Math.cos(y),M=Math.sqrt(e*e-b*b),_=0;x===0&&o===0?_=.5/t:x===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let w=S/t,E=n+w*r;f.x=-M*Math.cos(E),f.y=b,f.z=M*Math.sin(E),p.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(w+_,1-T),v.push(c++)}h.push(v)}for(let x=0;x<i;x++)for(let v=0;v<t;v++){let T=h[x][v+1],y=h[x][v],b=h[x+1][v],M=h[x+1][v+1];(x!==0||o>0)&&u.push(T,y,M),(x!==i-1||l<Math.PI)&&u.push(y,b,M)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var As=class s extends qt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],f=[],d=new F,u=new F,p=new F;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=n;x++){let v=x/n*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(x/n),f.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=n;m++){let x=(n+1)*g+m-1,v=(n+1)*(g-1)+m-1,T=(n+1)*(g-1)+m,y=(n+1)*g+m;l.push(x,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function xo(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(D0(n))n.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(D0(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Ji(s){let e={};for(let t=0;t<s.length;t++){let i=xo(s[t]);for(let n in i)e[n]=i[n]}return e}function D0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Py(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function op(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var hn={clone:xo,merge:Ji},Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new F().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Vt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new ot().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xa=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ir=class extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oi=class extends Ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ll=class extends fs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Gh=class extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wh=class extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function na(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Dr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xh=class extends Dr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rd,endingEnd:Rd}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cd:r=e,a=2*t-i;break;case Pd:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cd:o=e,l=2*i-t;break;case Pd:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(n-t),g=p*p,m=g*p,x=-d*m+2*d*g-d*p,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,T=(-1-u)*m+(1.5+u)*g+.5*p,y=u*m-u*g;for(let b=0;b!==a;++b)r[b]=x*o[h+b]+v*o[c+b]+T*o[l+b]+y*o[f+b];return r}},qh=class extends Dr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Yh=class extends Dr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},$h=class extends Dr{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(n-t),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=u*d+p*2,v=f[x],T=f[x+1],y=e*d+p*2,b=h[y],M=h[y+1],_=Ny(i,t,v,b,n);r[p]=Mg(_,g,T,M,m)}return r}};function Mg(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function Ly(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function Ny(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=Mg(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=Ly(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Dn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Mh(e.settings)&&(i.settings={inTangents:na(e.settings.inTangents,Array),outTangents:na(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $h(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xl:t=this.InterpolantFactoryMethodDiscrete;break;case Oh:t=this.InterpolantFactoryMethodLinear;break;case Eh:t=this.InterpolantFactoryMethodSmooth;break;case Ad:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return it("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xl;case this.InterpolantFactoryMethodLinear:return Oh;case this.InterpolantFactoryMethodSmooth:return Eh;case this.InterpolantFactoryMethodBezier:return Ad}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Mh(this.settings)&&(L0(this.settings.inTangents,e),L0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Mh(this.settings)&&(N0(this.settings.inTangents,e),N0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){rt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Zv(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Eh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let f=a*i,d=f-i,u=f+i;for(let p=0;p!==i;++p){let g=t[f+p];if(g!==t[d+p]||g!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Mh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function L0(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function N0(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Oh;var Lr=class extends Dn{constructor(e,t,i){super(e,t,i)}};Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=xl;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zh=class extends Dn{constructor(e,t,i,n){super(e,t,i,n)}};Zh.prototype.ValueTypeName="color";var Jh=class extends Dn{constructor(e,t,i,n){super(e,t,i,n)}};Jh.prototype.ValueTypeName="number";var Kh=class extends Dr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Nl=class extends Dn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Kh(this.times,this.values,this.getValueSize(),e)}};Nl.prototype.ValueTypeName="quaternion";Nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Dn{constructor(e,t,i){super(e,t,i)}};Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=xl;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qh=class extends Dn{constructor(e,t,i,n){super(e,t,i,n)}};Qh.prototype.ValueTypeName="vector";var Ah={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(U0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!U0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function U0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var va=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bg=new va,ya=class{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=new WeakMap,jh=class extends ya{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ah.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=sa.get(o);f===void 0&&(f=[],sa.set(o,f)),f.push({onLoad:t,onError:n})}return o}let a=ha("img");function l(){h(),t&&t(this);let f=sa.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}sa.delete(this),r.manager.itemEnd(e)}function c(f){h(),n&&n(f),Ah.remove(`image:${e}`);let d=sa.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}sa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ah.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ul=class extends ya{constructor(e){super(e)}load(e,t,i,n){let r=new $i,o=new jh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Sa=class extends Ai{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ol=class extends Sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ai.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wd=new ct,O0=new F,F0=new F,Fl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;O0.setFromMatrixPosition(e.matrixWorld),t.position.copy(O0),F0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===ca||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bh=new F,Th=new cn,Ms=new F,Bl=class extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bh,Th,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bh,Th,Ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bh,Th,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bh,Th,Ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rr=new F,B0=new Ie,k0=new Ie,Yi=class extends Bl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,B0,k0),t.subVectors(k0,B0)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Dd=class extends Fl{constructor(){super(new Yi(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends Sa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Dd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fo=class extends Bl{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ld=class extends Fl{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ai.DEFAULT_UP),this.updateMatrix(),this.target=new Ai,this.shadow=new Ld}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ra=-90,oa=1,ba=class extends Ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Yi(ra,oa,e,t);n.layers=this.layers,this.add(n);let r=new Yi(ra,oa,e,t);r.layers=this.layers,this.add(r);let o=new Yi(ra,oa,e,t);o.layers=this.layers,this.add(o);let a=new Yi(ra,oa,e,t);a.layers=this.layers,this.add(a);let l=new Yi(ra,oa,e,t);l.layers=this.layers,this.add(l);let c=new Yi(ra,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},eu=class extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},kl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Uy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Uy(){this._document.hidden===!1&&this.reset()}var ap="\\[\\]\\.:\\/",Oy=new RegExp("["+ap+"]","g"),lp="[^"+ap+"]",Fy="[^"+ap.replace("\\.","")+"]",By=/((?:WC+[\/:])*)/.source.replace("WC",lp),ky=/(WCOD+)?/.source.replace("WCOD",Fy),zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),Vy=new RegExp("^"+By+ky+zy+Hy+"$"),Gy=["material","materials","bones","map"],Nd=class{constructor(e,t,i){let n=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Oy,"")}static parseTrackName(e){let t=Vy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Gy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Nd;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hA=new Float32Array(1);var z0=new ct,zl=class{constructor(e,t,i=0,n=1/0){this.ray=new ga(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return z0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(z0),this}intersectObject(e,t=!0,i=[]){return Ud(e,this,i,t),i.sort(H0),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Ud(e[n],this,i,t);return i.sort(H0),i}};function H0(s,e){return s.distance-e.distance}function Ud(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Ud(r[o],e,t,!0)}}var pp=class pp{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};pp.prototype.isMatrix2=!0;var Od=pp;function cp(s,e,t,i){let n=Wy(i);switch(t){case $d:return s*e;case cu:return s*e/n.components*n.byteLength;case hu:return s*e/n.components*n.byteLength;case Or:return s*e*2/n.components*n.byteLength;case uu:return s*e*2/n.components*n.byteLength;case Zd:return s*e*3/n.components*n.byteLength;case Ln:return s*e*4/n.components*n.byteLength;case fu:return s*e*4/n.components*n.byteLength;case Jl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ql:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pu:case gu:return Math.max(s,16)*Math.max(e,8)/4;case du:case mu:return Math.max(s,8)*Math.max(e,8)/2;case _u:case xu:case yu:case Su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vu:case ec:case Mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Au:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Bu:case ku:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zu:case Hu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tc:case Vu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(s){switch(s){case Zi:case Wd:return{byteLength:1,components:1};case Aa:case Xd:case jt:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case ms:case ou:case Jn:return{byteLength:4,components:1};case qd:case Yd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xg(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qy(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],g=f[u];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let g=f[u];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$y=`#ifdef USE_ALPHAHASH
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
#endif`,Zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,eS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tS=`#ifdef USE_BATCHING
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
#endif`,iS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oS=`#ifdef USE_IRIDESCENCE
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
#endif`,aS=`#ifdef USE_BUMPMAP
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
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gS=`#define PI 3.141592653589793
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
} // validated`,_S=`vec3 transformedNormal = objectNormal;
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
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",bS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,AS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
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
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,US=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,BS=`#ifdef USE_ENVMAP
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
#endif`,kS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
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
#endif`,WS=`uniform sampler2D dfgLUT;
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
}`,XS=`
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
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
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iM=`#if defined( USE_POINTS_UV )
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
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
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
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform float backgroundBlurriness;
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
}`,eb=`#define DISTANCE
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
}`,tb=`#define DISTANCE
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
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
}`,rb=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,ab=`uniform vec3 diffuse;
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
}`,lb=`#define LAMBERT
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
}`,cb=`#define LAMBERT
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
}`,hb=`#define MATCAP
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
}`,ub=`#define MATCAP
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
}`,fb=`#define NORMAL
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
}`,db=`#define NORMAL
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
}`,pb=`#define PHONG
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
}`,mb=`#define PHONG
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
}`,gb=`#define STANDARD
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
}`,_b=`#define STANDARD
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
}`,xb=`#define TOON
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
}`,vb=`#define TOON
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
}`,yb=`uniform float size;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,Tb=`uniform float rotation;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Yy,alphahash_pars_fragment:$y,alphamap_fragment:Zy,alphamap_pars_fragment:Jy,alphatest_fragment:Ky,alphatest_pars_fragment:Qy,aomap_fragment:jy,aomap_pars_fragment:eS,batching_pars_vertex:tS,batching_vertex:iS,begin_vertex:nS,beginnormal_vertex:sS,bsdfs:rS,iridescence_fragment:oS,bumpmap_pars_fragment:aS,clipping_planes_fragment:lS,clipping_planes_pars_fragment:cS,clipping_planes_pars_vertex:hS,clipping_planes_vertex:uS,color_fragment:fS,color_pars_fragment:dS,color_pars_vertex:pS,color_vertex:mS,common:gS,defaultnormal_vertex:_S,displacementmap_pars_vertex:xS,displacementmap_vertex:vS,emissivemap_fragment:yS,emissivemap_pars_fragment:SS,colorspace_fragment:MS,colorspace_pars_fragment:bS,envmap_fragment:TS,envmap_common_pars_fragment:ES,envmap_pars_fragment:wS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:BS,envmap_vertex:RS,fog_vertex:CS,fog_pars_vertex:PS,fog_fragment:IS,fog_pars_fragment:DS,gradientmap_pars_fragment:LS,lightmap_pars_fragment:NS,lights_lambert_fragment:US,lights_lambert_pars_fragment:OS,lights_pars_begin:FS,lights_toon_fragment:kS,lights_toon_pars_fragment:zS,lights_phong_fragment:HS,lights_phong_pars_fragment:VS,lights_physical_fragment:GS,lights_physical_pars_fragment:WS,lights_fragment_begin:XS,lights_fragment_maps:qS,lights_fragment_end:YS,lightprobes_pars_fragment:$S,logdepthbuf_fragment:ZS,logdepthbuf_pars_fragment:JS,logdepthbuf_pars_vertex:KS,logdepthbuf_vertex:QS,map_fragment:jS,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:iM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:sM,morphinstance_vertex:rM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:cM,normal_fragment_begin:hM,normal_fragment_maps:uM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:xM,iridescence_pars_fragment:vM,opaque_fragment:yM,packing:SM,premultiplied_alpha_fragment:MM,project_vertex:bM,dithering_fragment:TM,dithering_pars_fragment:EM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:AM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:CM,shadowmap_vertex:PM,shadowmask_pars_fragment:IM,skinbase_vertex:DM,skinning_pars_vertex:LM,skinning_vertex:NM,skinnormal_vertex:UM,specularmap_fragment:OM,specularmap_pars_fragment:FM,tonemapping_fragment:BM,tonemapping_pars_fragment:kM,transmission_fragment:zM,transmission_pars_fragment:HM,uv_pars_fragment:VM,uv_pars_vertex:GM,uv_vertex:WM,worldpos_vertex:XM,background_vert:qM,background_frag:YM,backgroundCube_vert:$M,backgroundCube_frag:ZM,cube_vert:JM,cube_frag:KM,depth_vert:QM,depth_frag:jM,distance_vert:eb,distance_frag:tb,equirect_vert:ib,equirect_frag:nb,linedashed_vert:sb,linedashed_frag:rb,meshbasic_vert:ob,meshbasic_frag:ab,meshlambert_vert:lb,meshlambert_frag:cb,meshmatcap_vert:hb,meshmatcap_frag:ub,meshnormal_vert:fb,meshnormal_frag:db,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:_b,meshtoon_vert:xb,meshtoon_frag:vb,points_vert:yb,points_frag:Sb,shadow_vert:Mb,shadow_frag:bb,sprite_vert:Tb,sprite_frag:Eb},Oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Is={basic:{uniforms:Ji([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ji([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ji([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ji([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ji([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ji([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ji([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ji([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ji([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ji([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ji([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Ji([Oe.common,Oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Ji([Oe.lights,Oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Is.physical={uniforms:Ji([Is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Wu={r:0,b:0,g:0},wb=new ct,qg=new ot;qg.set(-1,0,0,0,1,0,0,0,1);function Ab(s,e,t,i,n,r){let o=new Ue(0),a=n===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function p(v){let T=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,T){let y=u(T);y&&y.isCubeTexture?(c===void 0&&(c=new Ne(new Fi(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:xo(Is.backgroundCube.uniforms),vertexShader:Is.backgroundCube.vertexShader,fragmentShader:Is.backgroundCube.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qg),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==bt,(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ne(new ps(2,2),new Pt({name:"BackgroundMaterial",uniforms:xo(Is.background.uniforms),vertexShader:Is.background.vertexShader,fragmentShader:Is.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Wu,op(s)),t.buffers.color.setClear(Wu.r,Wu.g,Wu.b,T,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:x}}function Rb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(D,P,N,R,U){let k=!1,O=f(D,R,N,P);r!==O&&(r=O,c(r.object)),k=u(D,R,N,U),k&&p(D,R,N,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(D,P,N,R),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,P,N,R){let U=R.wireframe===!0,k=i[P.id];k===void 0&&(k={},i[P.id]=k);let O=D.isInstancedMesh===!0?D.id:0,Y=k[O];Y===void 0&&(Y={},k[O]=Y);let W=Y[N.id];W===void 0&&(W={},Y[N.id]=W);let I=W[U];return I===void 0&&(I=d(l()),W[U]=I),I}function d(D){let P=[],N=[],R=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:R,object:D,attributes:{},index:null}}function u(D,P,N,R){let U=r.attributes,k=P.attributes,O=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let J=U[W],de=k[W];if(de===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function p(D,P,N,R){let U={},k=P.attributes,O=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let J=k[W];J===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let de={};de.attribute=J,J&&J.data&&(de.data=J.data),U[W]=de,O++}r.attributes=U,r.attributesNum=O,r.index=R}function g(){let D=r.newAttributes;for(let P=0,N=D.length;P<N;P++)D[P]=0}function m(D){x(D,0)}function x(D,P){let N=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;N[D]=1,R[D]===0&&(s.enableVertexAttribArray(D),R[D]=1),U[D]!==P&&(s.vertexAttribDivisor(D,P),U[D]=P)}function v(){let D=r.newAttributes,P=r.enabledAttributes;for(let N=0,R=P.length;N<R;N++)P[N]!==D[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function T(D,P,N,R,U,k,O){O===!0?s.vertexAttribIPointer(D,P,N,U,k):s.vertexAttribPointer(D,P,N,R,U,k)}function y(D,P,N,R){g();let U=R.attributes,k=N.getAttributes(),O=P.defaultAttributeValues;for(let Y in k){let W=k[Y];if(W.location>=0){let I=U[Y];if(I===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){let J=I.normalized,de=I.itemSize,be=e.get(I);if(be===void 0)continue;let H=be.buffer,X=be.type,ue=be.bytesPerElement,ae=X===s.INT||X===s.UNSIGNED_INT||I.gpuType===ou;if(I.isInterleavedBufferAttribute){let fe=I.data,Se=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Ge=I.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)x(W.location+Ae,fe.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)m(W.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,H);for(let Ae=0;Ae<W.locationSize;Ae++)T(W.location+Ae,de/W.locationSize,X,J,Se*ue,(Ge+de/W.locationSize*Ae)*ue,ae)}else{if(I.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)x(W.location+fe,I.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let fe=0;fe<W.locationSize;fe++)m(W.location+fe);s.bindBuffer(s.ARRAY_BUFFER,H);for(let fe=0;fe<W.locationSize;fe++)T(W.location+fe,de/W.locationSize,X,J,de*ue,de/W.locationSize*fe*ue,ae)}}else if(O!==void 0){let J=O[Y];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(W.location,J);break;case 3:s.vertexAttrib3fv(W.location,J);break;case 4:s.vertexAttrib4fv(W.location,J);break;default:s.vertexAttrib1fv(W.location,J)}}}}v()}function b(){w();for(let D in i){let P=i[D];for(let N in P){let R=P[N];for(let U in R){let k=R[U];for(let O in k)h(k[O].object),delete k[O];delete R[U]}}delete i[D]}}function M(D){if(i[D.id]===void 0)return;let P=i[D.id];for(let N in P){let R=P[N];for(let U in R){let k=R[U];for(let O in k)h(k[O].object),delete k[O];delete R[U]}}delete i[D.id]}function _(D){for(let P in i){let N=i[P];for(let R in N){let U=N[R];if(U[D.id]===void 0)continue;let k=U[D.id];for(let O in k)h(k[O].object),delete k[O];delete U[D.id]}}}function S(D){for(let P in i){let N=i[P],R=D.isInstancedMesh===!0?D.id:0,U=N[R];if(U!==void 0){for(let k in U){let O=U[k];for(let Y in O)h(O[Y].object),delete O[Y];delete U[k]}delete N[R],Object.keys(N).length===0&&delete i[P]}}}function w(){E(),o=!0,r!==n&&(r=n,c(r.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Cb(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Pb(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(_){return!(_!==Ln&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Zi&&_!==Jn&&!S&&i.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:M}}function Ib(s){let e=this,t=null,i=0,n=!1,r=!1,o=new us,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||n;return n=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,x=s.get(f);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,T=v*4,y=x.clippingState||null;l.value=y,y=h(p,d,T,u);for(let b=0;b!==T;++b)y[b]=t[b];x.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,p){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=u+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let T=0,y=u;T!==g;++T,y+=4)o.copy(f[T]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var rc=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Rl(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Fi(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bi,blending:Pi});r.uniforms.tEquirect.value=t;let o=new Ne(n,r),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=ln),new ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},Tg=256,Db=3,Lb=20,Yg=256,$g=16,Nb=3,Ub=new F,Ob=new Ue,Ca=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ba(1,10,null),this._boxMesh=new Ne(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=Ub}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(Ob));let m=new ba(i,n,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Tg,ip(e))}_fromTexture(e,t){e.mapping===_o||e.mapping===wa?this._setSize(e.image.length===0?Tg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Eg(e,!1,!1),i=Math.log2(e)-Db;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Eg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_o||e.mapping===wa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Fb(),this._integrationMaterial=Bb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$g);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-Nb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Yg*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kb());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function Eg(s,e,t){return new rc(s,{minFilter:sr,generateMipmaps:e,type:jt,colorSpace:vl,depthBuffer:t})}function oc(s,e,t){return new Pt({name:s,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:Bi,blending:Pi,depthTest:!1,depthWrite:!1})}function Fb(){return oc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yg}u

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
	`)}function Bb(){return oc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$g}},`

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
	`)}function kb(){return oc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lb}
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
	`)}function wg(){return oc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ag(){return oc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zb(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===nu||u===su)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new rc(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===nu||u===su,g=u===_o||u===wa;if(p||g){let m=t.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Ca(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Ca(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===nu?d.mapping=_o:u===su&&(d.mapping=wa),d}function l(d){let u=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Hb(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&oo("WebGLRenderer: "+i+" extension not supported."),n}}}function Vb(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return n[g.id]!==void 0||(g.addEventListener("dispose",a),n[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],s.ARRAY_BUFFER)}function f(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let v=g!==null?g.array.length:m.array.length/3-1,T=m.count>=65535?El:Tl,y=new T(Math.ceil(v/3)*6,1),b=y.array;if(g!==null){let _=g.array;x=g.version;for(let S=0,w=0;S<v;S+=3){let E=_[S+0],D=_[S+1],P=_[S+2];b[w++]=E,b[w++]=D,b[w++]=D,b[w++]=P,b[w++]=P,b[w++]=E}}else{x=m.version;for(let _=0,S=0;_<v;_+=3){let w=_+0,E=_+1,D=_+2;b[S++]=w,b[S++]=E,b[S++]=E,b[S++]=D,b[S++]=D,b[S++]=w}}y.version=x;let M=r.get(p);M&&e.remove(M),r.set(p,y)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in n){let g=n[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Gb(s,e,t){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(i,d,r,f*o,u),t.update(d,i,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let g=0;for(let m=0;m<u;m++)g+=d[m];t.update(g,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Xb(s,e,t){let i=new WeakMap,n=new Vt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let w=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;u===!0&&(T=1),p===!0&&(T=2),g===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*f),_=new Ml(M,y,b,f);_.type=Jn,_.needsUpdate=!0;let S=T*4;for(let E=0;E<f;E++){let D=m[E],P=x[E],N=v[E],R=y*b*4*E;for(let U=0;U<D.count;U++){let k=U*S;u===!0&&(n.fromBufferAttribute(D,U),M[R+k+0]=n.x,M[R+k+1]=n.y,M[R+k+2]=n.z,M[R+k+3]=0),p===!0&&(n.fromBufferAttribute(P,U),M[R+k+4]=n.x,M[R+k+5]=n.y,M[R+k+6]=n.z,M[R+k+7]=0),g===!0&&(n.fromBufferAttribute(N,U),M[R+k+8]=n.x,M[R+k+9]=n.y,M[R+k+10]=n.z,M[R+k+11]=N.itemSize===4?n.w:1)}}d={count:f,texture:_,size:new Ie(y,b)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qb(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Yb={[Gl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[go]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[$l]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function $b(s,e,t,i,n,r){let o=new Gt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let f=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ne(h,f),u=new fo(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,v=null,T=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),l!==null&&l.setSize(b,M);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(b,M)}},this.setEffects=function(b){T=b,y=T.length>0&&T[0].isRenderPass===!0;let M=o.width,_=o.height;T.length>0&&a===null&&(a=new Gt(M,_,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(M,_,{type:jt,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&T.some(w=>w.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ds(M,_),r===!0&&(c.format=gs,c.type=rr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let w=0;w<T.length;w++){let E=T[w];E.setSize&&E.setSize(M,_),S&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,M){if(m||b.toneMapping===Cs&&T.length===0)return!1;if(v=M,M!==null){let _=M.width,S=M.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=Cs,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=x,m=!0;let _=o,S=a;for(let w=0;w<T.length;w++){let E=T[w];E.enabled!==!1&&(E.render(b,S,_,M),E.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,f.defines={},gt.getTransfer(p)===bt&&(f.defines.SRGB_TRANSFER="");let w=Yb[g];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(d,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Zg=new $i,Jg=new ds(1,1),Kg=new Cl(1),Qg=new Ml,jg=new kh,e_=new Rl,Rg=[],Cg=[],Pg=new Float32Array(16),Ig=new Float32Array(9),Dg=new Float32Array(4);function Pa(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Rg[n];if(r===void 0&&(r=new Float32Array(n),Rg[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function yi(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Si(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Yu(s,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Zb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yi(t,e))return;s.uniform2fv(this.addr,e),Si(t,e)}}function Kb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yi(t,e))return;s.uniform3fv(this.addr,e),Si(t,e)}}function Qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yi(t,e))return;s.uniform4fv(this.addr,e),Si(t,e)}}function jb(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(yi(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Si(t,e)}else{if(yi(t,i))return;Dg.set(i),s.uniformMatrix2fv(this.addr,!1,Dg),Si(t,i)}}function e1(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(yi(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Si(t,e)}else{if(yi(t,i))return;Ig.set(i),s.uniformMatrix3fv(this.addr,!1,Ig),Si(t,i)}}function t1(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(yi(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Si(t,e)}else{if(yi(t,i))return;Pg.set(i),s.uniformMatrix4fv(this.addr,!1,Pg),Si(t,i)}}function i1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yi(t,e))return;s.uniform2iv(this.addr,e),Si(t,e)}}function s1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yi(t,e))return;s.uniform3iv(this.addr,e),Si(t,e)}}function r1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yi(t,e))return;s.uniform4iv(this.addr,e),Si(t,e)}}function o1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yi(t,e))return;s.uniform2uiv(this.addr,e),Si(t,e)}}function l1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yi(t,e))return;s.uniform3uiv(this.addr,e),Si(t,e)}}function c1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yi(t,e))return;s.uniform4uiv(this.addr,e),Si(t,e)}}function $u(s){return s.version===0&&(s.compareFunction=Qd,s.needsUpdate=!0),s}function h1(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=$u(Jg):r=Zg,t.setTexture2D(e||r,n)}function u1(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||jg,n)}function f1(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=$u(Kg):r=e_,t.setTextureCube(e||r,n)}function d1(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Qg,n)}function p1(s){switch(s){case 5126:return Zb;case 35664:return Jb;case 35665:return Kb;case 35666:return Qb;case 35674:return jb;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return i1;case 35667:case 35671:return n1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(s,e){s.uniform1fv(this.addr,e)}function g1(s,e){let t=Pa(e,this.size,2);s.uniform2fv(this.addr,t)}function _1(s,e){let t=Pa(e,this.size,3);s.uniform3fv(this.addr,t)}function x1(s,e){let t=Pa(e,this.size,4);s.uniform4fv(this.addr,t)}function v1(s,e){let t=Pa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function y1(s,e){let t=Pa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S1(s,e){let t=Pa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function M1(s,e){s.uniform1iv(this.addr,e)}function b1(s,e){s.uniform2iv(this.addr,e)}function T1(s,e){s.uniform3iv(this.addr,e)}function E1(s,e){s.uniform4iv(this.addr,e)}function w1(s,e){s.uniform1uiv(this.addr,e)}function A1(s,e){s.uniform2uiv(this.addr,e)}function R1(s,e){s.uniform3uiv(this.addr,e)}function C1(s,e){s.uniform4uiv(this.addr,e)}function P1(s,e,t){let i=this.cache,n=e.length,r=Yu(t,n);yi(i,r)||(s.uniform1iv(this.addr,r),Si(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=$u(Jg):o=Zg;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function I1(s,e,t){let i=this.cache,n=e.length,r=Yu(t,n);yi(i,r)||(s.uniform1iv(this.addr,r),Si(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||jg,r[o])}function D1(s,e,t){let i=this.cache,n=e.length,r=Yu(t,n);yi(i,r)||(s.uniform1iv(this.addr,r),Si(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=$u(Kg):o=e_;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function L1(s,e,t){let i=this.cache,n=e.length,r=Yu(t,n);yi(i,r)||(s.uniform1iv(this.addr,r),Si(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Qg,r[o])}function N1(s){switch(s){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return x1;case 35674:return v1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return E1;case 5125:return w1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return L1}}var _p=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=p1(t.type)}},xp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N1(t.type)}},vp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},mp=/(\w+)(\])?(\[|\.)?/g;function Lg(s,e){s.seq.push(e),s.map[e.id]=e}function U1(s,e,t){let i=s.name,n=i.length;for(mp.lastIndex=0;;){let r=mp.exec(i),o=mp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Lg(t,c===void 0?new _p(a,s,e):new xp(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new vp(a),Lg(t,f)),t=f}}}var Ra=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);U1(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function Ng(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var O1=37297,F1=0;function B1(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Ug=new ot;function k1(s){gt._getMatrix(Ug,gt.workingColorSpace,s);let e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(s)){case yl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Og(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+B1(s.getShaderSource(e),a)}else return r}function z1(s,e){let t=k1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var H1={[Gl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[go]:"ACESFilmic",[Yl]:"AgX",[$l]:"Neutral",[ql]:"Custom"};function V1(s,e){let t=H1[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xu=new F;function G1(){gt.getLuminanceCoefficients(Xu);let s=Xu.x.toFixed(4),e=Xu.y.toFixed(4),t=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sc).join(`
`)}function X1(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q1(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function sc(s){return s!==""}function Fg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(s){return s.replace(Y1,$1)}function $1(s,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yp(t)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(s){return s.replace(Z1,J1)}function J1(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function zg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var K1={[po]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function Q1(s){return K1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var j1={[wa]:"ENVMAP_MODE_REFRACTION"};function eT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":j1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tT={[Vd]:"ENVMAP_BLENDING_MULTIPLY",[rg]:"ENVMAP_BLENDING_MIX",[og]:"ENVMAP_BLENDING_ADD"};function iT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tT[s.combine]||"ENVMAP_BLENDING_NONE"}function nT(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Q1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=eT(t),f=iT(t),d=W1(t),u=X1(r),p=n.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(sc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(sc).join(`
`),m.length>0&&(m+=`
`)):(g=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sc).join(`
`),m=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?ht.tonemapping_pars_fragment:"",t.toneMapping!==Cs?V1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,z1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sc).join(`
`)),o=yp(o),o=Fg(o,t),o=Bg(o,t),a=yp(a),a=Fg(a,t),a=Bg(a,t),o=kg(o),a=kg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+g+o,T=x+m+a,y=Ng(n,n.VERTEX_SHADER,v),b=Ng(n,n.FRAGMENT_SHADER,T);n.attachShader(p,y),n.attachShader(p,b),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function M(E){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(p)||"",P=n.getShaderInfoLog(y)||"",N=n.getShaderInfoLog(b)||"",R=D.trim(),U=P.trim(),k=N.trim(),O=!0,Y=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,y,b);else{let W=Og(n,y,"vertex"),I=Og(n,b,"fragment");rt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+W+`
`+I)}else R!==""?it("WebGLProgram: Program Info Log:",R):(U===""||k==="")&&(Y=!1);Y&&(E.diagnostics={runnable:O,programLog:R,vertexShader:{log:U,prefix:g},fragmentShader:{log:k,prefix:m}})}n.deleteShader(y),n.deleteShader(b),_=new Ra(n,p),S=q1(n,p)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(p,O1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var sT=0,Sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Mp(e),t.set(e,i)),i}},Mp=class{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}};function rT(s){return s===Or||s===ec||s===tc}function oT(s,e,t,i,n,r){let o=new pa,a=new Sp,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,w,E,D,P){let N=E.fog,R=D.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||U,k),Y=d[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&it("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let I=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=I!==void 0?I.length:0,de=0;R.morphAttributes.position!==void 0&&(de=1),R.morphAttributes.normal!==void 0&&(de=2),R.morphAttributes.color!==void 0&&(de=3);let be,H,X,ue;if(Y){let ce=Is[Y];be=ce.vertexShader,H=ce.fragmentShader}else{be=_.vertexShader,H=_.fragmentShader;let ce=a.getVertexShaderStage(_),ke=a.getFragmentShaderStage(_);a.update(_,ce,ke),X=ce.id,ue=ke.id}let ae=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Se=D.isInstancedMesh===!0,Ge=D.isBatchedMesh===!0,Ae=!!_.map,Ve=!!_.matcap,ye=!!O,Ce=ye&&O.isPMREMTexture===!0,et=!!_.aoMap,re=!!_.lightMap,V=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Ke=!!_.displacementMap,Fe=!!_.emissiveMap,Be=!!_.metalnessMap,tt=!!_.roughnessMap,je=_.anisotropy>0,z=_.clearcoat>0,st=_.diffuseRoughness>0,te=_.dispersion>0,oe=_.retroreflectivity>0,j=_.iridescence>0,Je=_.sheen>0,Re=_.transmission>0,He=je&&!!_.anisotropyMap,L=z&&!!_.clearcoatMap,A=z&&!!_.clearcoatNormalMap,q=z&&!!_.clearcoatRoughnessMap,pe=st&&!!_.diffuseRoughnessMap,ne=j&&!!_.iridescenceMap,ge=j&&!!_.iridescenceThicknessMap,xe=Je&&!!_.sheenColorMap,$=Je&&!!_.sheenRoughnessMap,ie=!!_.specularMap,me=!!_.specularColorMap,B=!!_.specularIntensityMap,se=Re&&!!_.transmissionMap,ee=Re&&!!_.thicknessMap,Te=!!_.gradientMap,ve=!!_.alphaMap,Ee=_.alphaTest>0,_e=!!_.alphaHash,we=!!_.extensions,he=Cs;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(he=s.toneMapping);let le=Ce?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Pe={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:H,defines:_.defines,customVertexShaderID:X,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Ge,batchingColor:Ge&&D._colorsTexture!==null,instancing:Se,instancingColor:Se&&D.instanceColor!==null,instancingMorph:Se&&D.morphTexture!==null,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ae,matcap:Ve,envMap:ye,envMapMode:ye&&O.mapping,envMapPMREM:Ce,envMapMaxLod:Ce?le.length-1:null,envMapSize:Ce?le[0].width:null,aoMap:et,lightMap:re,bumpMap:V,normalMap:Me,displacementMap:Ke,emissiveMap:Fe,normalMapObjectSpace:Me&&_.normalMapType===cg,normalMapTangentSpace:Me&&_.normalMapType===ic,packedNormalMap:Me&&_.normalMapType===ic&&rT(_.normalMap.format),metalnessMap:Be,roughnessMap:tt,anisotropy:je,anisotropyMap:He,clearcoat:z,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:q,diffuseRoughness:st,diffuseRoughnessMap:pe,dispersion:te,retroreflection:oe,iridescence:j,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:Je,sheenColorMap:xe,sheenRoughnessMap:$,specularMap:ie,specularColorMap:me,specularIntensityMap:B,transmission:Re,transmissionMap:se,thicknessMap:ee,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Ea&&_.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ee,alphaHash:_e,combine:_.combine,mapUv:Ae&&u(_.map.channel),aoMapUv:et&&u(_.aoMap.channel),lightMapUv:re&&u(_.lightMap.channel),bumpMapUv:V&&u(_.bumpMap.channel),normalMapUv:Me&&u(_.normalMap.channel),displacementMapUv:Ke&&u(_.displacementMap.channel),emissiveMapUv:Fe&&u(_.emissiveMap.channel),metalnessMapUv:Be&&u(_.metalnessMap.channel),roughnessMapUv:tt&&u(_.roughnessMap.channel),anisotropyMapUv:He&&u(_.anisotropyMap.channel),clearcoatMapUv:L&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(_.sheenRoughnessMap.channel),specularMapUv:ie&&u(_.specularMap.channel),specularColorMapUv:me&&u(_.specularColorMap.channel),specularIntensityMapUv:B&&u(_.specularIntensityMap.channel),transmissionMapUv:se&&u(_.transmissionMap.channel),thicknessMapUv:ee&&u(_.thicknessMap.channel),alphaMapUv:ve&&u(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Me||je),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Ae||ve),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:de,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.filter(ce=>ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===bt,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ci,flipSided:_.side===Bi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)S.push(w),S.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(m(S,_),x(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function x(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let S=d[_.type],w;if(S){let E=Is[S];w=hn.clone(E.uniforms)}else w=_.uniforms;return w}function T(_,S){let w=h.get(S);return w!==void 0?++w.usedTimes:(w=new nT(s,S,_,n),c.push(w),h.set(S,w)),w}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function M(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:M}}function aT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function lT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vg(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,g,m,x){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},s[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=o(d),v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=x),e++,v}function l(d,u,p,g,m,x,v){v.reversedDepth===!0&&(m=-m);let T=a(d,u,p,g,m,x);p.transmission>0?i.push(T):p.transparent===!0?n.push(T):t.push(T)}function c(d,u,p,g,m,x){let v=a(d,u,p,g,m,x);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||lT),i.length>1&&i.sort(u||Hg),n.length>1&&n.sort(u||Hg)}function f(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function cT(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new Vg,s.set(i,[o])):n>=r.length?(o=new Vg,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function hT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ue};break;case"SpotLight":t={position:new F,direction:new F,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function uT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var fT=0;function dT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pT(s){let e=new hT,t=uT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let n=new F,r=new ct,o=new ct;function a(c){let h=0,f=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let u=0,p=0,g=0,m=0,x=0,v=0,T=0,y=0,b=0,M=0,_=0,S=0,w=0,E=0;c.sort(dT);for(let P=0,N=c.length;P<N;P++){let R=c[P],U=R.color,k=R.intensity,O=R.distance,Y=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Or?Y=R.shadow.map.texture:Y=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*k,f+=U.g*k,d+=U.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],k);E++}else if(R.isSunLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let I=R.shadow,J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=Y;let de=I.getViewportCount();for(let be=0;be<de;be++)i.sunShadowMatrix[g+be]=I.getMatrix(be),i.sunShadowCascade[g+be]=I._cascadeData[be];g+=de,p++}i.sun[u]=W,u++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let I=R.shadow,J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=W,m++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=O,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;let I=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,I.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=I.matrix,R.castShadow){let J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=Y,_++}v++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[T]=W,T++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let I=R.shadow,J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=R.shadow.matrix,M++}i.point[x]=W,x++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[y]=W,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let D=i.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==E)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=T,i.point.length=x,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,D.sunLength=u,D.directionalLength=m,D.pointLength=x,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=E,i.version=fT++)}function l(c,h){let f=0,d=0,u=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(x),f++}else if(y.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(x),d++}else if(y.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(x),p++}else if(y.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),u++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function Gg(s){let e=new pT(s),t=[],i=[],n=[];function r(f){h.camera=f,t.length=0,i.length=0,n.length=0}function o(f){f.isLightProbeGrid?n.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),n.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mT(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new Gg(s),e.set(n,[a])):r>=o.length?(a=new Gg(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var gT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
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
}`,xT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],vT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Wg=new ct,nc=new F,gp=new F;function yT(s,e,t){let i=new Pr,n=new Ie,r=new Ie,o=new Vt,a=new Gh,l=new Wh,c={},h=t.maxTextureSize,f={[Ur]:Bi,[Bi]:Ur,[Ci]:Ci},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:gT,fragmentShader:_T}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ne(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let x=this.type;this.render=function(M,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===W0&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);let w=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Pi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=x!==this.type;N&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=M.length;R<U;R++){let k=M[R],O=k.shadow;if(O===void 0){it("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Y=O.getFrameExtents();n.multiply(Y),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,O.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ta){if(k.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Gt(n.x,n.y,{format:Or,type:jt,minFilter:ln,magFilter:ln,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new ds(n.x,n.y,Jn),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=Qs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ri,O.map.depthTexture.magFilter=ri}else k.isPointLight?(O.map=new rc(n.x),O.map.depthTexture=new Cl(n.x,ms)):(O.map=new Gt(n.x,n.y),O.map.depthTexture=new ds(n.x,n.y,ms)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=Qs,this.type===po?(O.map.depthTexture.compareFunction=W?Kd:Jd,O.map.depthTexture.minFilter=ln,O.map.depthTexture.magFilter=ln):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ri,O.map.depthTexture.magFilter=ri);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let I=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();k.isPointLight!==!0&&O.updateMatrices(k,S);let J=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let de=0;de<I;de++){let be=O.getCamera(de);if(k.isPointLight){let H=O.camera,X=O.matrix,ue=k.distance||H.far;ue!==H.far&&(H.far=ue,H.updateProjectionMatrix()),nc.setFromMatrixPosition(k.matrixWorld),H.position.copy(nc),gp.copy(H.position),gp.add(xT[de]),H.up.copy(vT[de]),H.lookAt(gp),H.updateMatrixWorld(),X.makeTranslation(-nc.x,-nc.y,-nc.z),Wg.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Wg,H.coordinateSystem,H.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,de),s.clear();else{de===0&&(s.setRenderTarget(O.map),s.clear());let H=O.getViewport(de);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o)}i=O.getFrustum(de),y(_,S,be,k,J,this.type)}O.isPointLightShadow!==!0&&this.type===Ta&&v(O,S),O.needsUpdate=!1}x=this.type,m.needsUpdate=!1,s.setRenderTarget(w,E,D)};function v(M,_){let S=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new Gt(n.x,n.y,{format:Or,type:jt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(_,null,S,d,g,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(_,null,S,u,g,null)}function T(M,_,S,w){let E=null,D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)E=D;else if(E=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let P=E.uuid,N=_.uuid,R=c[P];R===void 0&&(R={},c[P]=R);let U=R[N];U===void 0&&(U=E.clone(),R[N]=U,_.addEventListener("dispose",b)),E=U}if(E.visible=_.visible,E.wireframe=_.wireframe,w===Ta?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:f[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=s.properties.get(E);P.light=S}return E}function y(M,_,S,w,E,D){if(M.visible===!1)return;if(M.layers.test(E)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===Ta)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let R=e.update(M),U=M.material;if(Array.isArray(U)){let k=R.groups;for(let O=0,Y=k.length;O<Y;O++){let W=k[O],I=U[W.materialIndex];if(I&&I.visible){let J=T(M,I,w,D);M.onBeforeShadow(s,M,_,S,R,J,W),s.renderBufferDirect(S,null,R,J,M,W),M.onAfterShadow(s,M,_,S,R,J,W)}}}else if(U.visible){let k=T(M,U,w,D);M.onBeforeShadow(s,M,_,S,R,k,null),s.renderBufferDirect(S,null,R,k,M,null),M.onAfterShadow(s,M,_,S,R,k,null)}}let N=M.children;for(let R=0,U=N.length;R<U;R++)y(N[R],_,S,w,E,D)}function b(M){M.target.removeEventListener("dispose",b);for(let S in c){let w=c[S],E=M.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function ST(s,e){function t(){let B=!1,se=new Vt,ee=null,Te=new Vt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!B&&(s.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){B=ve},setClear:function(ve,Ee,_e,we,he){he===!0&&(ve*=we,Ee*=we,_e*=we),se.set(ve,Ee,_e,we),Te.equals(se)===!1&&(s.clearColor(ve,Ee,_e,we),Te.copy(se))},reset:function(){B=!1,ee=null,Te.set(-1,0,0,0)}}}function i(){let B=!1,se=!1,ee=null,Te=null,ve=null;return{setReversed:function(Ee){if(se!==Ee){let _e=e.get("EXT_clip_control");Ee?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=Ee;let we=ve;ve=null,this.setClear(we)}},getReversed:function(){return se},setTest:function(Ee){Ee?fe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!B&&(s.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(se&&(Ee=vg[Ee]),Te!==Ee){switch(Ee){case Rh:s.depthFunc(s.NEVER);break;case Ch:s.depthFunc(s.ALWAYS);break;case Ph:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case Ih:s.depthFunc(s.EQUAL);break;case Dh:s.depthFunc(s.GEQUAL);break;case Lh:s.depthFunc(s.GREATER);break;case Nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){ve!==Ee&&(ve=Ee,se&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){B=!1,ee=null,Te=null,ve=null,se=!1}}}function n(){let B=!1,se=null,ee=null,Te=null,ve=null,Ee=null,_e=null,we=null,he=null;return{setTest:function(le){B||(le?fe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(le){se!==le&&!B&&(s.stencilMask(le),se=le)},setFunc:function(le,Pe,ce){(ee!==le||Te!==Pe||ve!==ce)&&(s.stencilFunc(le,Pe,ce),ee=le,Te=Pe,ve=ce)},setOp:function(le,Pe,ce){(Ee!==le||_e!==Pe||we!==ce)&&(s.stencilOp(le,Pe,ce),Ee=le,_e=Pe,we=ce)},setLocked:function(le){B=le},setClear:function(le){he!==le&&(s.clearStencil(le),he=le)},reset:function(){B=!1,se=null,ee=null,Te=null,ve=null,Ee=null,_e=null,we=null,he=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],g=null,m=!1,x=null,v=null,T=null,y=null,b=null,M=null,_=null,S=new Ue(0,0,0),w=0,E=!1,D=null,P=null,N=null,R=null,U=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Y>=2);let I=null,J={},de=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),H=new Vt().fromArray(de),X=new Vt().fromArray(be);function ue(B,se,ee,Te){let ve=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(B,Ee),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<ee;_e++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(se+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ee}let ae={};ae[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),o.setFunc(la),V(!1),Me(Fd),fe(s.CULL_FACE),et(Pi);function fe(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Se(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Ge(B,se){return d[B]!==se?(s.bindFramebuffer(B,se),d[B]=se,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(B,se){let ee=p,Te=!1;if(B){ee=u.get(se),ee===void 0&&(ee=[],u.set(se,ee));let ve=B.textures;if(ee.length!==ve.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,_e=ve.length;Ee<_e;Ee++)ee[Ee]=s.COLOR_ATTACHMENT0+Ee;ee.length=ve.length,Te=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,Te=!0);Te&&s.drawBuffers(ee)}function Ve(B){return g!==B?(s.useProgram(B),g=B,!0):!1}let ye={[Zn]:s.FUNC_ADD,[X0]:s.FUNC_SUBTRACT,[q0]:s.FUNC_REVERSE_SUBTRACT};ye[Y0]=s.MIN,ye[$0]=s.MAX;let Ce={[mo]:s.ZERO,[Z0]:s.ONE,[J0]:s.SRC_COLOR,[zd]:s.SRC_ALPHA,[eg]:s.SRC_ALPHA_SATURATE,[Vl]:s.DST_COLOR,[Hl]:s.DST_ALPHA,[K0]:s.ONE_MINUS_SRC_COLOR,[Hd]:s.ONE_MINUS_SRC_ALPHA,[j0]:s.ONE_MINUS_DST_COLOR,[Q0]:s.ONE_MINUS_DST_ALPHA,[tg]:s.CONSTANT_COLOR,[ig]:s.ONE_MINUS_CONSTANT_COLOR,[ng]:s.CONSTANT_ALPHA,[sg]:s.ONE_MINUS_CONSTANT_ALPHA};function et(B,se,ee,Te,ve,Ee,_e,we,he,le){if(B===Pi){m===!0&&(Se(s.BLEND),m=!1);return}if(m===!1&&(fe(s.BLEND),m=!0),B!==iu){if(B!==x||le!==E){if((v!==Zn||b!==Zn)&&(s.blendEquation(s.FUNC_ADD),v=Zn,b=Zn),le)switch(B){case Ea:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.ONE,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ea:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bd:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kd:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",B);break}T=null,y=null,M=null,_=null,S.set(0,0,0),w=0,x=B,E=le}return}ve=ve||se,Ee=Ee||ee,_e=_e||Te,(se!==v||ve!==b)&&(s.blendEquationSeparate(ye[se],ye[ve]),v=se,b=ve),(ee!==T||Te!==y||Ee!==M||_e!==_)&&(s.blendFuncSeparate(Ce[ee],Ce[Te],Ce[Ee],Ce[_e]),T=ee,y=Te,M=Ee,_=_e),(we.equals(S)===!1||he!==w)&&(s.blendColor(we.r,we.g,we.b,he),S.copy(we),w=he),x=B,E=!1}function re(B,se){B.side===Ci?Se(s.CULL_FACE):fe(s.CULL_FACE);let ee=B.side===Bi;se&&(ee=!ee),V(ee),B.blending===Ea&&B.transparent===!1?et(Pi):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Te=B.stencilWrite;a.setTest(Te),Te&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function V(B){D!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),D=B)}function Me(B){B!==V0?(fe(s.CULL_FACE),B!==P&&(B===Fd?s.cullFace(s.BACK):B===G0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),P=B}function Ke(B){B!==N&&(O&&s.lineWidth(B),N=B)}function Fe(B,se,ee){B?(fe(s.POLYGON_OFFSET_FILL),(R!==se||U!==ee)&&(R=se,U=ee,o.getReversed()&&(se=-se,ee=-ee),s.polygonOffset(se,ee))):Se(s.POLYGON_OFFSET_FILL)}function Be(B){B?fe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function tt(B){B===void 0&&(B=s.TEXTURE0+k-1),I!==B&&(s.activeTexture(B),I=B)}function je(B,se,ee){ee===void 0&&(I===null?ee=s.TEXTURE0+k-1:ee=I);let Te=J[ee];Te===void 0&&(Te={type:void 0,texture:void 0},J[ee]=Te),(Te.type!==B||Te.texture!==se)&&(I!==ee&&(s.activeTexture(ee),I=ee),s.bindTexture(B,se||ae[B]),Te.type=B,Te.texture=se)}function z(){let B=J[I];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function oe(){try{s.texSubImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function j(){try{s.texSubImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function Je(){try{s.compressedTexSubImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function He(){try{s.texStorage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function L(){try{s.texStorage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function A(){try{s.texImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function q(){try{s.texImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function pe(B){return f[B]!==void 0?f[B]:s.getParameter(B)}function ne(B,se){f[B]!==se&&(s.pixelStorei(B,se),f[B]=se)}function ge(B){H.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),H.copy(B))}function xe(B){X.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function $(B,se){let ee=c.get(se);ee===void 0&&(ee=new WeakMap,c.set(se,ee));let Te=ee.get(B);Te===void 0&&(Te=s.getUniformBlockIndex(se,B.name),s.uniformBlockBinding(se,Te,Te),ee.set(B,Te))}function ie(B,se,ee){let ve=c.get(se).get(B);l[ve]!==ee&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,ee),l[ve]=ee)}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},I=null,J={},d={},l={},u=new WeakMap,p=[],g=null,m=!1,x=null,v=null,T=null,y=null,b=null,M=null,_=null,S=new Ue(0,0,0),w=0,E=!1,D=null,P=null,N=null,R=null,U=null,H.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Se,bindFramebuffer:Ge,drawBuffers:Ae,useProgram:Ve,setBlending:et,setMaterial:re,setFlipSided:V,setCullFace:Me,setLineWidth:Ke,setPolygonOffset:Fe,setScissorTest:Be,activeTexture:tt,bindTexture:je,unbindTexture:z,compressedTexImage2D:st,compressedTexImage3D:te,texImage2D:A,texImage3D:q,pixelStorei:ne,getParameter:pe,updateUBOMapping:$,uniformBlockBinding:ie,texStorage2D:He,texStorage3D:L,texSubImage2D:oe,texSubImage3D:j,compressedTexSubImage2D:Je,compressedTexSubImage3D:Re,scissor:ge,viewport:xe,reset:me}}function MT(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,g=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return m?new OffscreenCanvas(L,A):ha("canvas")}function v(L,A,q){let pe=1,ne=He(L);if((ne.width>q||ne.height>q)&&(pe=q/Math.max(ne.width,ne.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ge=Math.floor(pe*ne.width),xe=Math.floor(pe*ne.height);d===void 0&&(d=x(ge,xe));let $=A?x(ge,xe):d;return $.width=ge,$.height=xe,$.getContext("2d").drawImage(L,0,0,ge,xe),it("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ge+"x"+xe+")."),$}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function T(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(L,A,q,pe,ne,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe;pe&&(xe=e.get("EXT_texture_norm16"),xe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=A;if(A===s.RED&&(q===s.FLOAT&&($=s.R32F),q===s.HALF_FLOAT&&($=s.R16F),q===s.UNSIGNED_BYTE&&($=s.R8),q===s.UNSIGNED_SHORT&&xe&&($=xe.R16_EXT),q===s.SHORT&&xe&&($=xe.R16_SNORM_EXT)),A===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.R8UI),q===s.UNSIGNED_SHORT&&($=s.R16UI),q===s.UNSIGNED_INT&&($=s.R32UI),q===s.BYTE&&($=s.R8I),q===s.SHORT&&($=s.R16I),q===s.INT&&($=s.R32I)),A===s.RG&&(q===s.FLOAT&&($=s.RG32F),q===s.HALF_FLOAT&&($=s.RG16F),q===s.UNSIGNED_BYTE&&($=s.RG8),q===s.UNSIGNED_SHORT&&xe&&($=xe.RG16_EXT),q===s.SHORT&&xe&&($=xe.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.RG8UI),q===s.UNSIGNED_SHORT&&($=s.RG16UI),q===s.UNSIGNED_INT&&($=s.RG32UI),q===s.BYTE&&($=s.RG8I),q===s.SHORT&&($=s.RG16I),q===s.INT&&($=s.RG32I)),A===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.RGB8UI),q===s.UNSIGNED_SHORT&&($=s.RGB16UI),q===s.UNSIGNED_INT&&($=s.RGB32UI),q===s.BYTE&&($=s.RGB8I),q===s.SHORT&&($=s.RGB16I),q===s.INT&&($=s.RGB32I)),A===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.RGBA8UI),q===s.UNSIGNED_SHORT&&($=s.RGBA16UI),q===s.UNSIGNED_INT&&($=s.RGBA32UI),q===s.BYTE&&($=s.RGBA8I),q===s.SHORT&&($=s.RGBA16I),q===s.INT&&($=s.RGBA32I)),A===s.RGB&&(q===s.UNSIGNED_SHORT&&xe&&($=xe.RGB16_EXT),q===s.SHORT&&xe&&($=xe.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),A===s.RGBA){let ie=ge?yl:gt.getTransfer(ne);q===s.FLOAT&&($=s.RGBA32F),q===s.HALF_FLOAT&&($=s.RGBA16F),q===s.UNSIGNED_BYTE&&($=ie===bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&xe&&($=xe.RGBA16_EXT),q===s.SHORT&&xe&&($=xe.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(L,A){let q;return L?A===null||A===ms||A===rr?q=s.DEPTH24_STENCIL8:A===Jn?q=s.DEPTH32F_STENCIL8:A===Aa&&(q=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ms||A===rr?q=s.DEPTH_COMPONENT24:A===Jn?q=s.DEPTH_COMPONENT32F:A===Aa&&(q=s.DEPTH_COMPONENT16),q}function S(L,A){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==ri&&L.minFilter!==ln?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){let A=new WeakRef(L);i.get(L).__ref=A,p.add(A),g.register(L,A,A)}function E(L){let A=i.get(L).__ref;A!==void 0&&(p.delete(A),g.unregister(A))}function D(L){N(L.target)}function P(L){R(L.target)}function N(L){L.removeEventListener("dispose",D),E(L),k(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function R(L){L.removeEventListener("dispose",P),E(L),Y(L)}function U(){for(let L of p){let A=L.deref();A!==void 0&&(A.isRenderTarget===!0?R(A):N(A))}p.clear(),f.clear()}function k(L){let A=i.get(L);if(A.__webglInit===void 0)return;let q=L.source,pe=u.get(q);if(pe){let ne=pe[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(L),Object.keys(pe).length===0&&u.delete(q)}i.remove(L)}function O(L){let A=i.get(L);s.deleteTexture(A.__webglTexture);let q=L.source,pe=u.get(q);delete pe[A.__cacheKey],o.memory.textures--}function Y(L){let A=i.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();let q=L.depthTexture;if(q&&q.renderTarget===L&&N(q),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let ge=0;ge<A.__webglFramebuffer[ne].length;ge++)s.deleteFramebuffer(A.__webglFramebuffer[ne][ge]);else s.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)s.deleteFramebuffer(A.__webglFramebuffer[ne]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let pe=L.textures;for(let ne=0,ge=pe.length;ne<ge;ne++){let xe=i.get(pe[ne]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(pe[ne])}i.remove(L)}let W=0;function I(){W=0}function J(){return W}function de(L){W=L}function be(){let L=W;return L>=n.maxTextures&&it("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,L}function H(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function X(L,A){let q=i.get(L);if(L.isVideoTexture&&Je(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let pe=L.image;if(pe===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,L,A);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+A)}function ue(L,A){let q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){re(q,L,A);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+A)}function ae(L,A){let q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){re(q,L,A);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+A)}function fe(L,A){let q=i.get(L);if(L.version>0&&q.__version!==L.version){V(q,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+A)}let Se={[Sn]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[Uh]:s.MIRRORED_REPEAT},Ge={[ri]:s.NEAREST,[ag]:s.NEAREST_MIPMAP_NEAREST,[Zl]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[ru]:s.LINEAR_MIPMAP_NEAREST,[sr]:s.LINEAR_MIPMAP_LINEAR},Ae={[ug]:s.NEVER,[Qd]:s.ALWAYS,[fg]:s.LESS,[Jd]:s.LEQUAL,[dg]:s.EQUAL,[Kd]:s.GEQUAL,[pg]:s.GREATER,[mg]:s.NOTEQUAL};function Ve(L,A){if(A.type===Jn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ln||A.magFilter===ru||A.magFilter===Zl||A.magFilter===sr||A.minFilter===ln||A.minFilter===ru||A.minFilter===Zl||A.minFilter===sr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Se[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Se[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Se[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ge[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ge[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==Zl&&A.minFilter!==sr||A.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ye(L,A){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",D),w(A));let pe=A.source,ne=u.get(pe);ne===void 0&&(ne={},u.set(pe,ne));let ge=H(A);if(ge!==L.__cacheKey){ne[ge]===void 0&&(ne[ge]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[ge].usedTimes++;let xe=ne[L.__cacheKey];xe!==void 0&&(ne[L.__cacheKey].usedTimes--,xe.usedTimes===0&&O(A)),L.__cacheKey=ge,L.__webglTexture=ne[ge].texture}return q}function Ce(L,A,q){return Math.floor(Math.floor(L/q)/A)}function et(L,A,q,pe){let ge=L.updateRanges;if(ge.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,q,pe,A.data);else{ge.sort((B,se)=>B.start-se.start);let xe=0;for(let B=1;B<ge.length;B++){let se=ge[xe],ee=ge[B],Te=se.start+se.count,ve=Ce(ee.start,A.width,4),Ee=Ce(se.start,A.width,4);ee.start<=Te+1&&ve===Ee&&Ce(ee.start+ee.count-1,A.width,4)===ve?se.count=Math.max(se.count,ee.start+ee.count-se.start):(++xe,ge[xe]=ee)}ge.length=xe+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let B=0,se=ge.length;B<se;B++){let ee=ge[B],Te=Math.floor(ee.start/4),ve=Math.ceil(ee.count/4),Ee=Te%A.width,_e=Math.floor(Te/A.width),we=ve,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e),t.texSubImage2D(s.TEXTURE_2D,0,Ee,_e,we,he,q,pe,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function re(L,A,q){let pe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=s.TEXTURE_3D);let ne=ye(L,A),ge=A.source;t.bindTexture(pe,L.__webglTexture,s.TEXTURE0+q);let xe=i.get(ge);if(ge.version!==xe.__version||ne===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let he=gt.getPrimaries(gt.workingColorSpace),le=A.colorSpace===or?null:gt.getPrimaries(A.colorSpace),Pe=A.colorSpace===or||he===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ie=v(A.image,!1,n.maxTextureSize);ie=Re(A,ie);let me=r.convert(A.format,A.colorSpace),B=r.convert(A.type),se=M(A.internalFormat,me,B,A.normalized,A.colorSpace,A.isVideoTexture);Ve(pe,A);let ee,Te=A.mipmaps,ve=A.isVideoTexture!==!0,Ee=xe.__version===void 0||ne===!0,_e=ge.dataReady,we=S(A,ie);if(A.isDepthTexture)se=_(A.format===gs,A.type),Ee&&(ve?t.texStorage2D(s.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,se,ie.width,ie.height,0,me,B,null));else if(A.isDataTexture)if(Te.length>0){ve&&Ee&&t.texStorage2D(s.TEXTURE_2D,we,se,Te[0].width,Te[0].height);for(let he=0,le=Te.length;he<le;he++)ee=Te[he],ve?_e&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,ee.width,ee.height,me,B,ee.data):t.texImage2D(s.TEXTURE_2D,he,se,ee.width,ee.height,0,me,B,ee.data);A.generateMipmaps=!1}else ve?(Ee&&t.texStorage2D(s.TEXTURE_2D,we,se,ie.width,ie.height),_e&&et(A,ie,me,B)):t.texImage2D(s.TEXTURE_2D,0,se,ie.width,ie.height,0,me,B,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ve&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,se,Te[0].width,Te[0].height,ie.depth);for(let he=0,le=Te.length;he<le;he++)if(ee=Te[he],A.format!==Ln)if(me!==null)if(ve){if(_e)if(A.layerUpdates.size>0){let Pe=cp(ee.width,ee.height,A.format,A.type);for(let ce of A.layerUpdates){let ke=ee.data.subarray(ce*Pe/ee.data.BYTES_PER_ELEMENT,(ce+1)*Pe/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ce,ee.width,ee.height,1,me,ke)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,ie.depth,me,ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,se,ee.width,ee.height,ie.depth,0,ee.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,ie.depth,me,B,ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,se,ee.width,ee.height,ie.depth,0,me,B,ee.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ve&&Ee&&t.texStorage2D(s.TEXTURE_2D,we,se,Te[0].width,Te[0].height);for(let he=0,le=Te.length;he<le;he++)ee=Te[he],A.format!==Ln?me!==null?ve?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,ee.width,ee.height,me,ee.data):t.compressedTexImage2D(s.TEXTURE_2D,he,se,ee.width,ee.height,0,ee.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?_e&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,ee.width,ee.height,me,B,ee.data):t.texImage2D(s.TEXTURE_2D,he,se,ee.width,ee.height,0,me,B,ee.data)}else if(A.isDataArrayTexture)if(ve){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,se,ie.width,ie.height,ie.depth),_e)if(A.layerUpdates.size>0){let he=cp(ie.width,ie.height,A.format,A.type);for(let le of A.layerUpdates){let Pe=ie.data.subarray(le*he/ie.data.BYTES_PER_ELEMENT,(le+1)*he/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,ie.width,ie.height,1,me,B,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,B,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,me,B,ie.data);else if(A.isData3DTexture)ve?(Ee&&t.texStorage3D(s.TEXTURE_3D,we,se,ie.width,ie.height,ie.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,B,ie.data)):t.texImage3D(s.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,me,B,ie.data);else if(A.isFramebufferTexture){if(Ee)if(ve)t.texStorage2D(s.TEXTURE_2D,we,se,ie.width,ie.height);else{let he=ie.width,le=ie.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,se,he,le,0,me,B,null),he>>=1,le>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ie.parentNode!==he){he.appendChild(ie),f.add(A),he.onpaint=le=>{let Pe=le.changedElements;for(let ce of f)Pe.includes(ce.image)&&(ce.needsUpdate=!0)},he.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{let Pe=s.RGBA,ce=s.RGBA,ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Pe,ce,ke,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Te.length>0){if(ve&&Ee){let he=He(Te[0]);t.texStorage2D(s.TEXTURE_2D,we,se,he.width,he.height)}for(let he=0,le=Te.length;he<le;he++)ee=Te[he],ve?_e&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,me,B,ee):t.texImage2D(s.TEXTURE_2D,he,se,me,B,ee);A.generateMipmaps=!1}else if(ve){if(Ee){let he=He(ie);t.texStorage2D(s.TEXTURE_2D,we,se,he.width,he.height)}_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,B,ie)}else t.texImage2D(s.TEXTURE_2D,0,se,me,B,ie);T(A)&&A.mipmapsAutoUpdate===!0&&y(pe),xe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function V(L,A,q){if(A.image.length!==6)return;let pe=ye(L,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let ge=i.get(ne);if(ne.version!==ge.__version||pe===!0){t.activeTexture(s.TEXTURE0+q);let xe=gt.getPrimaries(gt.workingColorSpace),$=A.colorSpace===or?null:gt.getPrimaries(A.colorSpace),ie=A.colorSpace===or||xe===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let me=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!me&&!B?se[ce]=v(A.image[ce],!0,n.maxCubemapSize):se[ce]=B?A.image[ce].image:A.image[ce],se[ce]=Re(A,se[ce]);let ee=se[0],Te=r.convert(A.format,A.colorSpace),ve=r.convert(A.type),Ee=M(A.internalFormat,Te,ve,A.normalized,A.colorSpace),_e=A.isVideoTexture!==!0,we=ge.__version===void 0||pe===!0,he=ne.dataReady,le=S(A,ee);Ve(s.TEXTURE_CUBE_MAP,A);let Pe;if(A.isDepthTexture){if(Ee=_(A.format===gs,A.type),we)if(_e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ee,ee.width,ee.height);else for(let ce=0;ce<6;ce++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,ee.width,ee.height,0,Te,ve,null)}else if(me){_e&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ee,ee.width,ee.height);for(let ce=0;ce<6;ce++){Pe=se[ce].mipmaps;for(let ke=0;ke<Pe.length;ke++){let _t=Pe[ke];A.format!==Ln?Te!==null?_e?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,_t.width,_t.height,Te,_t.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Ee,_t.width,_t.height,0,_t.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,_t.width,_t.height,Te,ve,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Ee,_t.width,_t.height,0,Te,ve,_t.data)}}}else{if(Pe=A.mipmaps,_e&&we){Pe.length>0&&le++;let ce=He(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ee,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(B){_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,Te,ve,se[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,se[ce].width,se[ce].height,0,Te,ve,se[ce].data);for(let ke=0;ke<Pe.length;ke++){let at=Pe[ke].image[ce].image;_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,at.width,at.height,Te,ve,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Ee,at.width,at.height,0,Te,ve,at.data)}}else{_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te,ve,se[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,Te,ve,se[ce]);for(let ke=0;ke<Pe.length;ke++){let _t=Pe[ke];_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,Te,ve,_t.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Ee,Te,ve,_t.image[ce])}}}T(A)&&A.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ge.__version=ne.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Me(L,A,q,pe,ne,ge){let xe=r.convert(q.format,q.colorSpace),$=r.convert(q.type),ie=M(q.internalFormat,xe,$,q.normalized,q.colorSpace),me=i.get(A),B=i.get(q);if(B.__renderTarget=A,!me.__hasExternalTextures){let se=Math.max(1,A.width>>ge),ee=Math.max(1,A.height>>ge);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ge,ie,se,ee,A.depth,0,xe,$,null):t.texImage2D(ne,ge,ie,se,ee,0,xe,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),j(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ne,B.__webglTexture,0,oe(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ne,B.__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,A,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){let pe=A.depthTexture,ne=pe&&pe.isDepthTexture?pe.type:null,ge=_(A.stencilBuffer,ne),xe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;j(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(A),ge,A.width,A.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,L)}else{let pe=A.textures;for(let ne=0;ne<pe.length;ne++){let ge=pe[ne],xe=r.convert(ge.format,ge.colorSpace),$=r.convert(ge.type),ie=M(ge.internalFormat,xe,$,ge.normalized,ge.colorSpace);j(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(A),ie,A.width,A.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(A),ie,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(L,A,q){let pe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(A.depthTexture);ne.__renderTarget=A;let ge=pe?A.depthTexture.image[0]:A.depthTexture.image;(!ne.__webglTexture||ge.width!==A.width||ge.height!==A.height)&&(ge.width=A.width,ge.height=A.height,A.depthTexture.needsUpdate=!0),pe?fe(A.depthTexture,0):X(A.depthTexture,0);let xe=ne.__webglTexture,$=oe(A),ie=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,me=A.depthTexture.format===gs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Qs)j(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ie,xe,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,me,ie,xe,0);else if(A.depthTexture.format===gs)j(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ie,xe,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,me,ie,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(L){let A=i.get(L),q=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let pe=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){let ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ne)};pe.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=pe}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Fe(A.__webglFramebuffer[pe],L,pe);else L.texture.mipmaps.length>0?Fe(A.__webglFramebuffer[0],L,0):Fe(A.__webglFramebuffer,L,0);else if(q){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=s.createRenderbuffer(),Ke(A.__webglDepthbuffer[pe],L,!1);else{let ne=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,ge)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ke(A.__webglDepthbuffer,L,!1);else{let ne=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(L,A,q){let pe=i.get(L);A!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Be(L)}function je(L){let A=L.texture,q=i.get(L),pe=i.get(A);L.addEventListener("dispose",P),w(L);let ne=L.textures,ge=L.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=A.version,o.memory.textures++),ge){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(A.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let ie=0;ie<A.mipmaps.length;ie++)q.__webglFramebuffer[$][ie]=s.createFramebuffer()}else q.__webglFramebuffer[$]=s.createFramebuffer()}else{if(A.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<A.mipmaps.length;$++)q.__webglFramebuffer[$]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(xe)for(let $=0,ie=ne.length;$<ie;$++){let me=i.get(ne[$]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&j(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){let ie=ne[$];q.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[$]);let me=r.convert(ie.format,ie.colorSpace),B=r.convert(ie.type),se=M(ie.internalFormat,me,B,ie.normalized,ie.colorSpace,L.isXRRenderTarget===!0),ee=oe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,se,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,q.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,A);for(let $=0;$<6;$++)if(A.mipmaps.length>0)for(let ie=0;ie<A.mipmaps.length;ie++)Me(q.__webglFramebuffer[$][ie],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie);else Me(q.__webglFramebuffer[$],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(A)?y(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let $=0,ie=ne.length;$<ie;$++){let me=ne[$],B=i.get(me),se=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,B.__webglTexture),Ve(se,me),Me(q.__webglFramebuffer,L,me,s.COLOR_ATTACHMENT0+$,se,0),T(me)&&y(se)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,pe.__webglTexture),Ve($,A),A.mipmaps.length>0)for(let ie=0;ie<A.mipmaps.length;ie++)Me(q.__webglFramebuffer[ie],L,A,s.COLOR_ATTACHMENT0,$,ie);else Me(q.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,$,0);T(A)?y($):A.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Be(L)}function z(L){let A=L.textures;for(let q=0,pe=A.length;q<pe;q++){let ne=A[q];if(T(ne)&&ne.mipmapsAutoUpdate===!0){let ge=b(L),xe=i.get(ne).__webglTexture;t.bindTexture(ge,xe),y(ge),t.unbindTexture()}}}let st=[];function te(L){if(L.samples>0){if(j(L)===!1){let A=L.textures,q=L.width,pe=L.height,ne=s.COLOR_BUFFER_BIT,ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=i.get(L),$=A.length>1;if($)for(let me=0;me<A.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<A.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let B=i.get(A[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,q,pe,0,0,q,pe,ne,s.NEAREST),l===!0&&(st.length=0,st.push(s.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&st.push(ge),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<A.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let B=i.get(A[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function oe(L){return Math.min(n.maxSamples,L.samples)}function j(L){let A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(L){let A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function Re(L,A){let q=L.colorSpace,pe=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==vl&&q!==or&&(gt.getTransfer(q)===bt?(pe!==Ln||ne!==Zi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",q)),A}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=be,this.resetTextureUnits=I,this.getTextureUnits=J,this.setTextureUnits=de,this.setTexture2D=X,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=fe,this.rebindTextures=tt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=j,this.dispose=U}function bT(s,e){function t(i,n=or){let r,o=gt.getTransfer(n);if(i===Zi)return s.UNSIGNED_BYTE;if(i===au)return s.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Yd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wd)return s.BYTE;if(i===Xd)return s.SHORT;if(i===Aa)return s.UNSIGNED_SHORT;if(i===ou)return s.INT;if(i===ms)return s.UNSIGNED_INT;if(i===Jn)return s.FLOAT;if(i===jt)return s.HALF_FLOAT;if(i===$d)return s.ALPHA;if(i===Zd)return s.RGB;if(i===Ln)return s.RGBA;if(i===Qs)return s.DEPTH_COMPONENT;if(i===gs)return s.DEPTH_STENCIL;if(i===cu)return s.RED;if(i===hu)return s.RED_INTEGER;if(i===Or)return s.RG;if(i===uu)return s.RG_INTEGER;if(i===fu)return s.RGBA_INTEGER;if(i===Jl||i===Kl||i===Ql||i===jl)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===du||i===pu||i===mu||i===gu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_u||i===xu||i===vu||i===yu||i===Su||i===ec||i===Mu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_u||i===xu)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yu)return r.COMPRESSED_R11_EAC;if(i===Su)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return r.COMPRESSED_RG11_EAC;if(i===Mu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bu||i===Tu||i===Eu||i===wu||i===Au||i===Ru||i===Cu||i===Pu||i===Iu||i===Du||i===Lu||i===Nu||i===Uu||i===Ou)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Au)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ru)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Iu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Du)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ou)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fu||i===Bu||i===ku)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fu)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zu||i===Hu||i===tc||i===Vu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===zu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ET=`
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

}`,bp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pt({vertexShader:TT,fragmentShader:ET,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tp=class extends Ts{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",m=new bp,x={},v=t.getContextAttributes(),T=null,y=null,b=[],M=[],_=new Ie,S=null,w=null,E=new Yi;E.viewport=new Vt;let D=new Yi;D.viewport=new Vt;let P=[E,D],N=new eu,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=b[H];return X===void 0&&(X=new ma,b[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=b[H];return X===void 0&&(X=new ma,b[H]=X),X.getGripSpace()},this.getHand=function(H){let X=b[H];return X===void 0&&(X=new ma,b[H]=X),X.getHandSpace()};function k(H){let X=M.indexOf(H.inputSource);if(X===-1)return;let ue=b[X];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Y);for(let H=0;H<b.length;H++){let X=M[H];X!==null&&(M[H]=null,b[H].disconnect(X))}R=null,U=null,m.reset();for(let H in x)delete x[H];if(e.setRenderTarget(T),u=null,d=null,f=null,n=null,y=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),w!==null){let H=w.camera;H.fov=w.fov,H.zoom=w.zoom,H.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(n,t)),f},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ae=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?gs:Qs,ae=v.stencil?rr:ms);let Se={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Se),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Gt(d.textureWidth,d.textureHeight,{format:Ln,type:Zi,depthTexture:new ds(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,ue),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Gt(u.framebufferWidth,u.framebufferHeight,{format:Ln,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),be.setContext(n),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(H){for(let X=0;X<H.removed.length;X++){let ue=H.removed[X],ae=M.indexOf(ue);ae>=0&&(M[ae]=null,b[ae].disconnect(ue))}for(let X=0;X<H.added.length;X++){let ue=H.added[X],ae=M.indexOf(ue);if(ae===-1){for(let Se=0;Se<b.length;Se++)if(Se>=M.length){M.push(ue),ae=Se;break}else if(M[Se]===null){M[Se]=ue,ae=Se;break}if(ae===-1)break}let fe=b[ae];fe&&fe.connect(ue)}}function W(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;let X=H.near,ue=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),N.near=D.near=E.near=X,N.far=D.far=E.far=ue,(R!==N.near||U!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,U=N.far),N.layers.mask=H.layers.mask|6,E.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let ae=H.parent,fe=N.cameras;W(N,ae);for(let Se=0;Se<fe.length;Se++)W(fe[Se],ae);N.projectionMatrix.copy(E.projectionMatrix),N.projectionMatrixInverse.copy(E.projectionMatrixInverse),w===null&&H.isPerspectiveCamera&&(w={camera:H,fov:H.fov,zoom:H.zoom}),I(H,N,ae)};function I(H,X,ue){ue===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=fa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(H){return x[H]};let J=null;function de(H,X){if(h=X.getViewerPose(c||o),p=X,h!==null){let ue=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let ae=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,ae=!0);for(let Ae=0;Ae<ue.length;Ae++){let Ve=ue[Ae],ye=null;if(u!==null)ye=u.getViewport(Ve);else{let et=f.getViewSubImage(d,Ve);ye=et.viewport,Ae===0&&(e.setRenderTargetTextures(y,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(y))}let Ce=P[Ae];Ce===void 0&&(Ce=new Yi,Ce.layers.enable(Ae),Ce.viewport=new Vt,P[Ae]=Ce),Ce.matrix.fromArray(Ve.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ve.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(ye.x,ye.y,ye.width,ye.height),Ae===0&&(N.matrix.copy(Ce.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ae===!0&&N.cameras.push(Ce)}let fe=n.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){f=i.getBinding();let Ae=f.getDepthInformation(ue[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(Ae,n.renderState)}if(fe&&fe.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let Ae=0;Ae<ue.length;Ae++){let Ve=ue[Ae].camera;if(Ve){let ye=x[Ve];ye||(ye=new Pl,x[Ve]=ye);let Ce=f.getCameraImage(Ve);ye.sourceTexture=Ce}}}}for(let ue=0;ue<b.length;ue++){let ae=M[ue],fe=b[ue];ae!==null&&fe!==void 0&&fe.update(ae,X,c||o)}J&&J(H,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),p=null}let be=new Xg;be.setAnimationLoop(de),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}},wT=new ct,t_=new ot;t_.set(-1,0,0,0,1,0,0,0,1);function AT(s,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,op(s)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function n(m,x,v,T,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),f(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&u(m,x,y)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,v,T):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===Bi&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===Bi&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let v=e.get(x),T=v.envMap,y=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(wT.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(t_),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,v,T){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*v,m.scale.value=T*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function f(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function u(m,x,v){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bi&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let v=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function RT(s,e,t,i){let n={},r={};function o(v,T){let y=T.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,T){let y=n[v.id];y===void 0&&(p(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));let b=T.program;i.updateUBOMapping(v,b);let M=e.render.frame;r[v.id]!==M&&(c(v),r[v.id]=M)}function l(v){let T=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=n[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let M=0,_=y.length;M<_;M++){let S=y[M];if(Array.isArray(S))for(let w=0,E=S.length;w<E;w++)h(S[w],M,w,b);else h(S,M,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,b){if(d(v,T,y,b)===!0){let M=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let w=0;w<_.length;w++){let E=_[w],D=g(E,!0);f(E,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function f(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,b){let M=v.value,_=T+"_"+y;if(Array.isArray(M)){b[_]===void 0&&(b[_]=[]);let S=b[_],w=!1;for(let E=0;E<M.length;E++)u(M[E],S,E)===!0&&(w=!0);return w}return u(M,b,_)}function u(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let b=T[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let T=v.uniforms,y=0,b=16;for(let _=0,S=T.length;_<S;_++){let w=Array.isArray(T[_])?T[_]:[T[_]];for(let E=0,D=w.length;E<D;E++){let P=w[E],N=Array.isArray(P.value)?P.value:[P.value],R=Array.isArray(T[_])||Array.isArray(P.value),U=y;for(let O=0,Y=N.length;O<Y;O++){let W=N[O],I=g(W,R),J=y%b,de=J%I.boundary,be=J+de;y+=de,be!==0&&b-be<I.storage&&(y+=b-be),O===0&&(U=y),y+=I.storage}let k=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new k((y-U)/Float32Array.BYTES_PER_ELEMENT),P.__offset=U}}let M=y%b;return M>0&&(y+=b-M),v.__size=y,v.__cache={},this}function g(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):it("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let T=v.target;T.removeEventListener("dispose",m),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function x(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:x}}var CT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ps=null;function PT(){return Ps===null&&(Ps=new tr(CT,16,16,Or,jt),Ps.name="DFG_LUT",Ps.minFilter=ln,Ps.magFilter=ln,Ps.wrapS=bs,Ps.wrapT=bs,Ps.generateMipmaps=!1,Ps.needsUpdate=!0),Ps}var qu=class{constructor(e={}){let{canvas:t=gg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Zi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=u,m=new Set([fu,uu,hu]),x=new Set([Zi,ms,Aa,rr,au,lu]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,M=null,_=[],S=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,P=null,N=null,R=null,U=null;this._outputColorSpace=Ht;let k=0,O=0,Y=null,W=-1,I=null,J=new Vt,de=new Vt,be=null,H=new Ue(0),X=0,ue=t.width,ae=t.height,fe=1,Se=null,Ge=null,Ae=new Vt(0,0,ue,ae),Ve=new Vt(0,0,ue,ae),ye=!1,Ce=new Pr,et=new Hh,re=!1,V=!1,Me=new ct,Ke=new F,Fe=new Vt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function je(){return Y===null?fe:1}let z=i;function st(C,G){return t.getContext(C,G)}let te,oe,j,Je,Re,He,L,A,q,pe,ne,ge,xe,$,ie,me,B,se,ee,Te,ve,Ee,_e;try{let C={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),z===null){let G="webgl2";if(z=st(G,C),z===null)throw st(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(C){throw t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),rt("WebGLRenderer: "+C.message),C}function we(){te=new Hb(z),te.init(),ve=new bT(z,te),oe=new Pb(z,te,e,ve),j=new ST(z,te),oe.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),N=z.createFramebuffer(),R=z.createFramebuffer(),U=z.createFramebuffer(),Je=new Wb(z),Re=new aT,He=new MT(z,te,j,Re,oe,ve,Je),L=new zb(E),A=new qy(z),Ee=new Rb(z,A),q=new Vb(z,A,Je,Ee),pe=new qb(z,q,A,Ee,Je),se=new Xb(z,oe,He),ie=new Ib(Re),ne=new oT(E,L,te,oe,Ee,ie),ge=new AT(E,Re),xe=new cT,$=new mT(te),B=new Ab(E,L,j,pe,p,l),me=new yT(E,pe,oe),_e=new RT(z,Je,oe,j),ee=new Cb(z,te,Je),Te=new Gb(z,te,Je),Je.programs=ne.programs,E.capabilities=oe,E.extensions=te,E.properties=Re,E.renderLists=xe,E.shadowMap=me,E.state=j,E.info=Je}g!==Zi&&(w=new $b(g,t.width,t.height,a,n,r));let he=new Tp(E,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ue,ae,!1))},this.getSize=function(C){return C.set(ue,ae)},this.setSize=function(C,G,Q=!0){if(he.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,ae=G,t.width=Math.floor(C*fe),t.height=Math.floor(G*fe),Q===!0&&(t.style.width=C+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ue*fe,ae*fe).floor()},this.setDrawingBufferSize=function(C,G,Q){ue=C,ae=G,fe=Q,t.width=Math.floor(C*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(g===Zi){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(Ae)},this.setViewport=function(C,G,Q,Z){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,G,Q,Z),j.viewport(J.copy(Ae).multiplyScalar(je()).round())},this.getScissor=function(C){return C.copy(Ve)},this.setScissor=function(C,G,Q,Z){C.isVector4?Ve.set(C.x,C.y,C.z,C.w):Ve.set(C,G,Q,Z),j.scissor(de.copy(Ve).multiplyScalar(je()).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){j.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){Ge=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,Q=!0){let Z=0;if(C){let K=!1;if(Y!==null){let Le=Y.texture.format;K=m.has(Le)}if(K){let Le=Y.texture.type,Xe=x.has(Le),De=B.getClearColor(),ze=B.getClearAlpha(),Qe=De.r,lt=De.g,xt=De.b;Xe?(v[0]=Qe,v[1]=lt,v[2]=xt,v[3]=ze,z.clearBufferuiv(z.COLOR,0,v)):(T[0]=Qe,T[1]=lt,T[2]=xt,T[3]=ze,z.clearBufferiv(z.COLOR,0,T))}else Z|=z.COLOR_BUFFER_BIT}G&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),B.dispose(),xe.dispose(),$.dispose(),He.dispose(),Re.dispose(),L.dispose(),pe.dispose(),q.dispose(),Ee.dispose(),_e.dispose(),ne.dispose(),he.dispose(),he.removeEventListener("sessionstart",Dt),he.removeEventListener("sessionend",wt),_i.stop()};function le(C){C.preventDefault(),Sl("WebGLRenderer: Context Lost."),D=!0}function Pe(){Sl("WebGLRenderer: Context Restored."),D=!1;let C=Je.autoReset,G=me.enabled,Q=me.autoUpdate,Z=me.needsUpdate,K=me.type;we(),Je.autoReset=C,me.enabled=G,me.autoUpdate=Q,me.needsUpdate=Z,me.type=K}function ce(C){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){let G=C.target;G.removeEventListener("dispose",ke),_t(G)}function _t(C){at(C),Re.remove(C)}function at(C){let G=Re.get(C).programs;G!==void 0&&(G.forEach(function(Q){ne.releaseProgram(Q)}),C.isShaderMaterial&&ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Q,Z,K,Le){G===null&&(G=Be);let Xe=K.isMesh&&K.matrixWorld.determinantAffine()<0,De=Gn(C,G,Q,Z,K);j.setMaterial(Z,Xe);let ze=Q.index,Qe=1;if(Z.wireframe===!0){if(ze=q.getWireframeAttribute(Q),ze===void 0)return;Qe=2}let lt=Q.drawRange,xt=Q.attributes.position,$e=lt.start*Qe,vt=(lt.start+lt.count)*Qe;Le!==null&&($e=Math.max($e,Le.start*Qe),vt=Math.min(vt,(Le.start+Le.count)*Qe)),ze!==null?($e=Math.max($e,0),vt=Math.min(vt,ze.count)):xt!=null&&($e=Math.max($e,0),vt=Math.min(vt,xt.count));let ui=vt-$e;if(ui<0||ui===1/0)return;Ee.setup(K,Z,De,Q,ze);let Ot,Nt=ee;if(ze!==null&&(Ot=A.get(ze),Nt=Te,Nt.setIndex(Ot)),K.isMesh)Z.wireframe===!0?(j.setLineWidth(Z.wireframeLinewidth*je()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(K.isLine){let Gi=Z.linewidth;Gi===void 0&&(Gi=1),j.setLineWidth(Gi*je()),K.isLineSegments?Nt.setMode(z.LINES):K.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else K.isPoints?Nt.setMode(z.POINTS):K.isSprite&&Nt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Gi=K._multiDrawStarts,Ze=K._multiDrawCounts,on=K._multiDrawCount,Et=ze?A.get(ze).bytesPerElement:1,eo=Re.get(Z).currentProgram.getUniforms();for(let Wi=0;Wi<on;Wi++)eo.setValue(z,"_gl_DrawID",Wi),Nt.render(Gi[Wi]/Et,Ze[Wi])}else if(K.isInstancedMesh)Nt.renderInstances($e,ui,K.count);else if(Q.isInstancedBufferGeometry){let Gi=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ze=Math.min(Q.instanceCount,Gi);Nt.renderInstances($e,ui,Ze)}else Nt.render($e,ui)};function kt(C,G,Q,Z){P!==null&&C.isNodeMaterial&&P.setObject(Z,C),re===!0&&ie.setState(C,Q,!1),C.transparent===!0&&C.side===Ci&&C.forceSinglePass===!1?(C.side=Bi,C.needsUpdate=!0,Cn(C,G,Z),C.side=Ur,C.needsUpdate=!0,Cn(C,G,Z),C.side=Ci):Cn(C,G,Z)}this.compile=function(C,G,Q=null){Q===null&&(Q=C),P!==null&&P.renderStart(C,G,Q),M=$.get(Q),M.init(G),S.push(M),Q.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),C!==Q&&C.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),M.setupLights(),P!==null&&P.updateLights(M.state.lightsArray),V=this.localClippingEnabled,re=ie.init(this.clippingPlanes,V),re===!0&&ie.setGlobalState(this.clippingPlanes,G),P!==null&&me.render(M.state.shadowsArray,Q,G);let Z=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Le=K.material;if(Le)if(Array.isArray(Le))for(let Xe=0;Xe<Le.length;Xe++){let De=Le[Xe];kt(De,Q,G,K),Z.add(De)}else kt(Le,Q,G,K),Z.add(Le)}),M=S.pop(),P!==null&&P.renderEnd(),Z},this.compileAsync=function(C,G,Q=null){let Z=this.compile(C,G,Q);return new Promise(K=>{function Le(){if(Z.forEach(function(Xe){let ze=Re.get(Xe).currentProgram;(ze===void 0||ze.isReady())&&Z.delete(Xe)}),Z.size===0){K(C);return}setTimeout(Le,10)}te.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ci=null;function zt(C){ci&&ci(C)}function Dt(){_i.stop()}function wt(){_i.start()}let _i=new Xg;_i.setAnimationLoop(zt),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(C){ci=C,he.setAnimationLoop(C),C===null?_i.stop():_i.start()},he.addEventListener("sessionstart",Dt),he.addEventListener("sessionend",wt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(C,G);let Q=he.enabled===!0&&he.isPresenting===!0,Z=w!==null&&(Y===null||Q)&&w.begin(E,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(G),G=he.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,G,Y),M=$.get(C,S.length),M.init(G),M.state.textureUnits=He.getTextureUnits(),S.push(M),Me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?et.setFromArrayCamera(G):Ce.setFromProjectionMatrix(Me,Xn,G.reversedDepth),V=this.localClippingEnabled,re=ie.init(this.clippingPlanes,V),b=xe.get(C,_.length),b.init(),_.push(b),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let Xe=E.xr.getDepthSensingMesh();Xe!==null&&Lt(Xe,G,-1/0,E.sortObjects)}Lt(C,G,0,E.sortObjects),b.finish(),P!==null&&P.updateLights(M.state.lightsArray),E.sortObjects===!0&&b.sort(Se,Ge),tt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,tt&&B.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),re===!0&&ie.beginShadows();let K=M.state.shadowsArray;if(me.render(K,C,G),re===!0&&ie.endShadows(),(Z&&w.hasRenderPass())===!1){let Xe=b.opaque,De=b.transmissive;if(M.setupLights(),G.isArrayCamera){let ze=G.cameras;if(De.length>0)for(let Qe=0,lt=ze.length;Qe<lt;Qe++){let xt=ze[Qe];Rn(Xe,De,C,xt)}tt&&B.render(C);for(let Qe=0,lt=ze.length;Qe<lt;Qe++){let xt=ze[Qe];Vi(b,C,xt,xt.viewport)}}else De.length>0&&Rn(Xe,De,C,G),tt&&B.render(C),Vi(b,C,G)}Y!==null&&O===0&&(He.updateMultisampleRenderTarget(Y),He.updateRenderTargetMipmap(Y)),Z&&w.end(E),C.isScene===!0&&C.onAfterRender(E,C,G),Ee.resetDefaultState(),W=-1,I=null,S.pop(),S.length>0?(M=S[S.length-1],He.setTextureUnits(M.state.textureUnits),re===!0&&ie.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,P!==null&&P.renderEnd()};function Lt(C,G,Q,Z){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){let Xe=G.isArrayCamera?et:Ce;if(!C.frustumCulled||C.intersectsFrustum(Xe)){Z&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);let De=pe.update(C),ze=C.material;ze.visible&&b.push(C,De,ze,Q,Fe.z,null,G)}}else if(C.isMesh||C.isLine||C.isPoints){let Xe=G.isArrayCamera?et:Ce;if(!C.frustumCulled||C.intersectsFrustum(Xe)){let De=pe.update(C),ze=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Fe.copy(De.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(ze)){let Qe=De.groups;for(let lt=0,xt=Qe.length;lt<xt;lt++){let $e=Qe[lt],vt=ze[$e.materialIndex];vt&&vt.visible&&b.push(C,De,vt,Q,Fe.z,$e,G)}}else ze.visible&&b.push(C,De,ze,Q,Fe.z,null,G)}}}let Le=C.children;for(let Xe=0,De=Le.length;Xe<De;Xe++)Lt(Le[Xe],G,Q,Z)}function Vi(C,G,Q,Z){let{opaque:K,transmissive:Le,transparent:Xe}=C;M.setupLightsView(Q),re===!0&&ie.setGlobalState(E.clippingPlanes,Q),Z&&j.viewport(J.copy(Z)),K.length>0&&Kt(K,G,Q),Le.length>0&&Kt(Le,G,Q),Xe.length>0&&Kt(Xe,G,Q),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Rn(C,G,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Z.id]===void 0){let $e=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Z.id]=new Gt(1,1,{generateMipmaps:!0,type:$e?jt:Zi,minFilter:sr,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Le=M.state.transmissionRenderTarget[Z.id],Xe=Z.viewport||J;Le.setSize(Xe.z*E.transmissionResolutionScale,Xe.w*E.transmissionResolutionScale);let De=E.getRenderTarget(),ze=E.getActiveCubeFace(),Qe=E.getActiveMipmapLevel();E.setRenderTarget(Le),E.getClearColor(H),X=E.getClearAlpha(),X<1&&E.setClearColor(16777215,.5),E.clear(),tt&&B.render(Q);let lt=E.toneMapping;E.toneMapping=Cs;let xt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),re===!0&&ie.setGlobalState(E.clippingPlanes,Z),Kt(C,Q,Z),He.updateMultisampleRenderTarget(Le),He.updateRenderTargetMipmap(Le),te.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let vt=0,ui=G.length;vt<ui;vt++){let Ot=G[vt],{object:Nt,geometry:Gi,material:Ze,group:on}=Ot;if(Ze.side===Ci&&Nt.layers.test(Z.layers)){let Et=Ze.side;Ze.side=Bi,Ze.needsUpdate=!0,hi(Nt,Q,Z,Gi,Ze,on),Ze.side=Et,Ze.needsUpdate=!0,$e=!0}}$e===!0&&(He.updateMultisampleRenderTarget(Le),He.updateRenderTargetMipmap(Le))}E.setRenderTarget(De,ze,Qe),E.setClearColor(H,X),xt!==void 0&&(Z.viewport=xt),E.toneMapping=lt}function Kt(C,G,Q){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Le=C.length;K<Le;K++){let Xe=C[K],{object:De,geometry:ze,group:Qe}=Xe,lt=Xe.material;lt.allowOverride===!0&&Z!==null&&(lt=Z),De.layers.test(Q.layers)&&hi(De,G,Q,ze,lt,Qe)}}function hi(C,G,Q,Z,K,Le){P!==null&&K.isNodeMaterial&&P.setObject(C,K),C.onBeforeRender(E,G,Q,Z,K,Le),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(E,G,Q,Z,C,Le),K.transparent===!0&&K.side===Ci&&K.forceSinglePass===!1?(K.side=Bi,K.needsUpdate=!0,E.renderBufferDirect(Q,G,Z,K,C,Le),K.side=Ur,K.needsUpdate=!0,E.renderBufferDirect(Q,G,Z,K,C,Le),K.side=Ci):E.renderBufferDirect(Q,G,Z,K,C,Le),C.onAfterRender(E,G,Q,Z,K,Le)}function xi(C){let G=0;for(let Q of C)Q.texture!==null&&G++;return G}function Cn(C,G,Q){G.isScene!==!0&&(G=Be);let Z=Re.get(C),K=M.state.lights,Le=M.state.shadowsArray,Xe=K.state.version,De=ne.getParameters(C,K.state,Le,G,Q,M.state.lightProbeGridArray),ze=ne.getProgramCacheKey(De),Qe=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=L.get(C.envMap||Z.environment,lt),Z.envMapRotation=Z.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",ke),Qe=new Map,Z.programs=Qe,Z.programVariants=new Map);let xt=Qe.get(ze);if(xt!==void 0){if(Z.currentProgram===xt&&Z.lightsStateVersion===Xe)return Qt(C,De),xt}else De.uniforms=ne.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,Q,De),C.onBeforeCompile(De,E),xt=ne.acquireProgram(De,ze),Qe.set(ze,xt),Z.uniforms=De.uniforms;let $e=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=ie.uniform),Qt(C,De),Z.needsLights=Kc(C),Z.lightsStateVersion=Xe,Z.needsLights&&($e.ambientLightColor.value=K.state.ambient,$e.lightProbe.value=K.state.probe,$e.sunLights.value=K.state.sun,$e.sunLightShadows.value=K.state.sunShadow,$e.directionalLights.value=K.state.directional,$e.directionalLightShadows.value=K.state.directionalShadow,$e.spotLights.value=K.state.spot,$e.spotLightShadows.value=K.state.spotShadow,$e.rectAreaLights.value=K.state.rectArea,$e.ltc_1.value=K.state.rectAreaLTC1,$e.ltc_2.value=K.state.rectAreaLTC2,$e.pointLights.value=K.state.point,$e.pointLightShadows.value=K.state.pointShadow,$e.hemisphereLights.value=K.state.hemi,$e.sunShadowMatrix.value=K.state.sunShadowMatrix,$e.sunShadowCascade.value=K.state.sunShadowCascade,$e.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$e.spotLightMatrix.value=K.state.spotLightMatrix,$e.spotLightMap.value=K.state.spotLightMap,$e.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=xi(M.state.lightProbeGridArray),Z.currentProgram=xt,Z.uniformsList=null,xt}function Ho(C,G,Q,Z,K){let Le=Re.get(C),Xe=Le.currentProgram.id+","+Z+","+K,De=Le.programVariants.get(Xe);return De===void 0?(De=Cn(C,G,Q),Le.programVariants.set(Xe,De)):(Le.currentProgram=De,Le.uniformsList=null,Le.outputColorSpace=Z,Le.toneMapping=K),De}function vi(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=Ra.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Qt(C,G){let Q=Re.get(C);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Gn(C,G,Q,Z,K){G.isScene!==!0&&(G=Be),He.resetTextureUnits();let Le=G.fog,Xe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,De=Y===null?E.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:gt.workingColorSpace,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Qe=L.get(Z.envMap||Xe,ze),lt=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,xt=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$e=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,ui=!!Q.morphAttributes.color,Ot=Cs;Z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ot=E.toneMapping);let Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Gi=Nt!==void 0?Nt.length:0,Ze=Re.get(Z),on=M.state.lights;if(re===!0&&(V===!0||C!==I)){let Xt=C===I&&Z.id===W;ie.setState(Z,C,Xt)}let Et=!1,eo=!1;Z.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==on.state.version||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==Qe||Z.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ie.numPlanes||Ze.numIntersection!==ie.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==xt||Ze.morphTargets!==$e||Ze.morphNormals!==vt||Ze.morphColors!==ui||Ze.morphTargetsCount!==Gi||Ze.numLightProbeGrids!==xi(M.state.lightProbeGridArray)?Et=!0:(Ze.outputColorSpace!==De||Ze.toneMapping!==Ot)&&(eo=!0):(Et=!0,Ze.__version=Z.version);let Wi=Ze.currentProgram;(Et===!0||eo===!0)&&(Wi=eo===!0?Ho(Z,G,K,De,Ot):Cn(Z,G,K),P&&Z.isNodeMaterial&&P.onUpdateProgram(Z,Wi,Ze));let Qc=!1,br=!1,to=!1,Mt=Wi.getUniforms(),Ni=Ze.uniforms;if(j.useProgram(Wi.program)&&(Qc=!0,br=!0,to=!0),Z.id!==W&&(W=Z.id,br=!0),Qc||I!==C){j.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(z,"projectionMatrix",C.projectionMatrix),Mt.setValue(z,"viewMatrix",C.matrixWorldInverse);let Ei=Mt.map.cameraPosition;Ei!==void 0&&Ei.setValue(z,Ke.setFromMatrixPosition(C.matrixWorld)),oe.logarithmicDepthBuffer&&Mt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,br=!0,to=!0)}if(Ze.needsLights&&(on.state.sunShadowMap.length>0&&Mt.setValue(z,"sunShadowMap",on.state.sunShadowMap,He),on.state.directionalShadowMap.length>0&&Mt.setValue(z,"directionalShadowMap",on.state.directionalShadowMap,He),on.state.spotShadowMap.length>0&&Mt.setValue(z,"spotShadowMap",on.state.spotShadowMap,He),on.state.pointShadowMap.length>0&&Mt.setValue(z,"pointShadowMap",on.state.pointShadowMap,He)),K.isSkinnedMesh){Mt.setOptional(z,K,"bindMatrix"),Mt.setOptional(z,K,"bindMatrixInverse");let Xt=K.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Mt.setValue(z,"boneTexture",Xt.boneTexture,He))}K.isBatchedMesh&&(Mt.setOptional(z,K,"batchingTexture"),Mt.setValue(z,"batchingTexture",K._matricesTexture,He),Mt.setOptional(z,K,"batchingIdTexture"),Mt.setValue(z,"batchingIdTexture",K._indirectTexture,He),Mt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(z,"batchingColorTexture",K._colorsTexture,He));let as=Q.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&se.update(K,Q,Wi),(br||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,Mt.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Ni.envMapIntensity.value=G.environmentIntensity),Ni.dfgLUT!==void 0&&(Ni.dfgLUT.value=PT()),br){if(Mt.setValue(z,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&ol(Ni,to),Le&&Z.fog===!0&&ge.refreshFogUniforms(Ni,Le),ge.refreshMaterialUniforms(Ni,Z,fe,ae,M.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let Xt=y,Ei=0;for(let Ws of M.state.lightProbeGridArray)Ws.texture!==null&&(Xt.textures[Ei]=Ws.texture,Xt.min[Ei]=Ws.boundingBox.min,Xt.max[Ei]=Ws.boundingBox.max,Xt.resolution[Ei]=Ws.resolution,Ei++);for(let Ws in Xt)Xt[Ws].length=Ei;Ni.probesSH.value=Xt.textures,Ni.probesMin.value=Xt.min,Ni.probesMax.value=Xt.max,Ni.probesResolution.value=Xt.resolution}Ra.upload(z,vi(Ze),Ni,He)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ra.upload(z,vi(Ze),Ni,He),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(z,"center",K.center),Mt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(z,"normalMatrix",K.normalMatrix),Mt.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Xt=Z.uniformsGroups;for(let Ei=0,Ws=Xt.length;Ei<Ws;Ei++){let r0=Xt[Ei];_e.update(r0,Wi),_e.bind(r0,Wi)}}return Wi}function ol(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Kc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,G,Q){let Z=Re.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Re.get(C.texture).__webglTexture=G,Re.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){let Q=Re.get(C);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Q=0){Y=C,k=G,O=Q;let Z=null,K=!1,Le=!1;if(C){let De=Re.get(C);if(De.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(z.FRAMEBUFFER,De.__webglFramebuffer),J.copy(C.viewport),de.copy(C.scissor),be=C.scissorTest,j.viewport(J),j.scissor(de),j.setScissorTest(be),W=-1;return}else if(De.__webglFramebuffer===void 0)He.setupRenderTarget(C);else if(De.__hasExternalTextures)He.rebindTextures(C,Re.get(C.texture).__webglTexture,Re.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let lt=C.depthTexture;if(De.__boundDepthTexture!==lt){if(lt!==null&&Re.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(C)}}let ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);let Qe=Re.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?Z=Qe[G][Q]:Z=Qe[G],K=!0):C.samples>0&&He.useMultisampledRTT(C)===!1?Z=Re.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Z=Qe[Q]:Z=Qe,J.copy(C.viewport),de.copy(C.scissor),be=C.scissorTest}else J.copy(Ae).multiplyScalar(fe).floor(),de.copy(Ve).multiplyScalar(fe).floor(),be=ye;if(Q!==0&&(Z=N),j.bindFramebuffer(z.FRAMEBUFFER,Z)&&j.drawBuffers(C,Z),j.viewport(J),j.scissor(de),j.setScissorTest(be),K){let De=Re.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,Q)}else if(Le){let De=G;for(let ze=0;ze<C.textures.length;ze++){let Qe=Re.get(C.textures[ze]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ze,Qe.__webglTexture,Q,De)}}else if(C!==null&&Q!==0){let De=Re.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,De.__webglTexture,Q)}W=-1};function Mr(C){let G=Re.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=oe.textureFormatReadable(C.format),G.__typeReadable=oe.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,Q,Z,K,Le,Xe,De=0){if(!(C&&C.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(ze=ze[Xe],Array.isArray(ze)&&(ze=ze[0])),ze){j.bindFramebuffer(z.FRAMEBUFFER,ze);try{let Qe=C.textures[De],lt=Qe.format,xt=Qe.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+De);let $e=Mr(Qe);if($e.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Z&&Q>=0&&Q<=C.height-K&&z.readPixels(G,Q,Z,K,ve.convert(lt),ve.convert(xt),Le)}finally{let Qe=Y!==null?Re.get(Y).__webglFramebuffer:null;j.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,G,Q,Z,K,Le,Xe,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Re.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(ze=ze[Xe],Array.isArray(ze)&&(ze=ze[0])),ze)if(G>=0&&G<=C.width-Z&&Q>=0&&Q<=C.height-K){j.bindFramebuffer(z.FRAMEBUFFER,ze);let Qe=C.textures[De],lt=Qe.format,xt=Qe.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+De);let $e=Mr(Qe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,Le.byteLength,z.STREAM_READ),z.readPixels(G,Q,Z,K,ve.convert(lt),ve.convert(xt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let ui=Y!==null?Re.get(Y).__webglFramebuffer:null;j.bindFramebuffer(z.FRAMEBUFFER,ui);let Ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xg(z,Ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Le),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(vt),z.deleteSync(Ot),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,Q=0){let Z=Math.pow(2,-Q),K=Math.floor(C.image.width*Z),Le=Math.floor(C.image.height*Z),Xe=G!==null?G.x:0,De=G!==null?G.y:0;He.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Xe,De,K,Le),j.unbindTexture()},this.copyTextureToTexture=function(C,G,Q=null,Z=null,K=0,Le=0){let Xe,De,ze,Qe,lt,xt,$e,vt,ui,Ot=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(Q!==null)Xe=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,Qe=Q.min.x,lt=Q.min.y,xt=Q.isBox3?Q.min.z:0;else{let Mt=Math.pow(2,-K);Xe=Math.floor(Ot.width*Mt),De=Math.floor(Ot.height*Mt),C.isDataArrayTexture?ze=Ot.depth:C.isData3DTexture?ze=Math.floor(Ot.depth*Mt):ze=1,Qe=0,lt=0,xt=0}Z!==null?($e=Z.x,vt=Z.y,ui=Z.z):($e=0,vt=0,ui=0);let Nt=ve.convert(G.format),Gi=ve.convert(G.type),Ze;G.isData3DTexture?(He.setTexture3D(G,0),Ze=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(He.setTexture2DArray(G,0),Ze=z.TEXTURE_2D_ARRAY):(He.setTexture2D(G,0),Ze=z.TEXTURE_2D),j.activeTexture(z.TEXTURE0),j.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),j.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),j.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let on=j.getParameter(z.UNPACK_ROW_LENGTH),Et=j.getParameter(z.UNPACK_IMAGE_HEIGHT),eo=j.getParameter(z.UNPACK_SKIP_PIXELS),Wi=j.getParameter(z.UNPACK_SKIP_ROWS),Qc=j.getParameter(z.UNPACK_SKIP_IMAGES);j.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),j.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),j.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),j.pixelStorei(z.UNPACK_SKIP_ROWS,lt),j.pixelStorei(z.UNPACK_SKIP_IMAGES,xt);let br=C.isDataArrayTexture||C.isData3DTexture,to=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){let Mt=Re.get(C),Ni=Re.get(G),as=Re.get(Mt.__renderTarget),Xt=Re.get(Ni.__renderTarget);j.bindFramebuffer(z.READ_FRAMEBUFFER,as.__webglFramebuffer),j.bindFramebuffer(z.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Ei=0;Ei<ze;Ei++)br&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(C).__webglTexture,K,xt+Ei),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(G).__webglTexture,Le,ui+Ei)),z.blitFramebuffer(Qe,lt,Qe+Xe,lt+De,$e,vt,$e+Xe,vt+De,z.DEPTH_BUFFER_BIT,z.NEAREST);j.bindFramebuffer(z.READ_FRAMEBUFFER,null),j.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Re.has(C)){let Mt=Re.get(C),Ni=Re.get(G);j.bindFramebuffer(z.READ_FRAMEBUFFER,R),j.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let as=0;as<ze;as++)br?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.__webglTexture,K,xt+as):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,K),to?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ni.__webglTexture,Le,ui+as):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ni.__webglTexture,Le),K!==0?z.blitFramebuffer(Qe,lt,Qe+Xe,lt+De,$e,vt,$e+Xe,vt+De,z.COLOR_BUFFER_BIT,z.NEAREST):to?z.copyTexSubImage3D(Ze,Le,$e,vt,ui+as,Qe,lt,Xe,De):z.copyTexSubImage2D(Ze,Le,$e,vt,Qe,lt,Xe,De);j.bindFramebuffer(z.READ_FRAMEBUFFER,null),j.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else to?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ze,Le,$e,vt,ui,Xe,De,ze,Nt,Gi,Ot.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,Le,$e,vt,ui,Xe,De,ze,Nt,Ot.data):z.texSubImage3D(Ze,Le,$e,vt,ui,Xe,De,ze,Nt,Gi,Ot):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Le,$e,vt,Xe,De,Nt,Gi,Ot.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Le,$e,vt,Ot.width,Ot.height,Nt,Ot.data):z.texSubImage2D(z.TEXTURE_2D,Le,$e,vt,Xe,De,Nt,Gi,Ot);j.pixelStorei(z.UNPACK_ROW_LENGTH,on),j.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),j.pixelStorei(z.UNPACK_SKIP_PIXELS,eo),j.pixelStorei(z.UNPACK_SKIP_ROWS,Wi),j.pixelStorei(z.UNPACK_SKIP_IMAGES,Qc),Le===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&z.generateMipmap(Ze),j.unbindTexture()},this.initRenderTarget=function(C){Re.get(C).__webglFramebuffer===void 0&&He.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?He.setTextureCube(C,0):C.isData3DTexture?He.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?He.setTexture2DArray(C,0):He.setTexture2D(C,0),j.unbindTexture()},this.resetState=function(){k=0,O=0,Y=null,j.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},IT=new fo(-1,1,1,-1,0,1),Ep=class extends qt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},DT=new Ep,Ls=class{constructor(e){this._mesh=new Ne(DT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ia=class extends un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hn.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ls(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ac=class extends un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Ju=class extends un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ku=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ie);this._width=i.width,this._height=i.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ia(Ds),this.copyPass.material.blending=Pi,this.timer=new kl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ac!==void 0&&(o instanceof ac?i=!0:o instanceof Ju&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qu=class extends un{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ue}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var i_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Da=class s extends un{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(r,o,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Gt(r,o,{type:jt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Gt(r,o,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=i_;this.highPassUniforms=hn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hn.clone(Ds.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,premultipliedAlpha:!0,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new di,this._fsQuad=new Ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Ie(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Da.BlurDirectionX=new Ie(1,0);Da.BlurDirectionY=new Ie(0,1);var lc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ju=class extends un{constructor(){super(),this.isOutputPass=!0,this.uniforms=hn.clone(lc.uniforms),this.material=new xa({name:lc.name,uniforms:this.uniforms,vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader}),this._fsQuad=new Ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ct},cameraProjectionMatrixInverse:{value:new ct},cameraWorldMatrix:{value:new ct},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},hc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ef={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function n_(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=LT(e),i=t.length,n=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new F(Math.cos(l),Math.sin(l),0).normalize();n[o*4]=(c.x*.5+.5)*255,n[o*4+1]=(c.y*.5+.5)*255,n[o*4+2]=127,n[o*4+3]=255}let r=new tr(n,e,e);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}function LT(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,i=Array(t).fill(0),n=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(n===-1&&r===e?(r=e-2,n=0):(r===e&&(r=0),n<0&&(n=e-1)),i[n*e+r]!==0){r-=2,n++;continue}else i[n*e+r]=o++;r++,n--}return i}var uc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:wp(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ie},cameraProjectionMatrixInverse:{value:new ct},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function wp(s,e,t){let i=NT(s,e,t),n="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=i[r];n+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return n}function NT(s,e,t){let i=[];for(let n=0;n<s;n++){let r=2*Math.PI*e*n/s,o=Math.pow(n/(s-1),t);i.push(new F(Math.cos(r),Math.sin(r),o))}return i}var tf=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,n,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,u=c-f,p=e-d,g=t-u,m,x;p>g?(m=1,x=0):(m=0,x=1);let v=p-m+h,T=g-x+h,y=p-1+2*h,b=g-1+2*h,M=l&255,_=c&255,S=this.perm[M+this.perm[_]]%12,w=this.perm[M+m+this.perm[_+x]]%12,E=this.perm[M+1+this.perm[_+1]]%12,D=.5-p*p-g*g;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[S],p,g));let P=.5-v*v-T*T;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[w],v,T));let N=.5-y*y-b*b;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[E],y,b)),70*(i+n+r)}noise3d(e,t,i){let n,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),d=Math.floor(i+c),u=1/6,p=(h+f+d)*u,g=h-p,m=f-p,x=d-p,v=e-g,T=t-m,y=i-x,b,M,_,S,w,E;v>=T?T>=y?(b=1,M=0,_=0,S=1,w=1,E=0):v>=y?(b=1,M=0,_=0,S=1,w=0,E=1):(b=0,M=0,_=1,S=1,w=0,E=1):T<y?(b=0,M=0,_=1,S=0,w=1,E=1):v<y?(b=0,M=1,_=0,S=0,w=1,E=1):(b=0,M=1,_=0,S=1,w=1,E=0);let D=v-b+u,P=T-M+u,N=y-_+u,R=v-S+2*u,U=T-w+2*u,k=y-E+2*u,O=v-1+3*u,Y=T-1+3*u,W=y-1+3*u,I=h&255,J=f&255,de=d&255,be=this.perm[I+this.perm[J+this.perm[de]]]%12,H=this.perm[I+b+this.perm[J+M+this.perm[de+_]]]%12,X=this.perm[I+S+this.perm[J+w+this.perm[de+E]]]%12,ue=this.perm[I+1+this.perm[J+1+this.perm[de+1]]]%12,ae=.6-v*v-T*T-y*y;ae<0?n=0:(ae*=ae,n=ae*ae*this._dot3(this.grad3[be],v,T,y));let fe=.6-D*D-P*P-N*N;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[H],D,P,N));let Se=.6-R*R-U*U-k*k;Se<0?o=0:(Se*=Se,o=Se*Se*this._dot3(this.grad3[X],R,U,k));let Ge=.6-O*O-Y*Y-W*W;return Ge<0?a=0:(Ge*=Ge,a=Ge*Ge*this._dot3(this.grad3[ue],O,Y,W)),32*(n+r+o+a)}noise4d(e,t,i,n){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,d,u,p,g=(e+t+i+n)*l,m=Math.floor(e+g),x=Math.floor(t+g),v=Math.floor(i+g),T=Math.floor(n+g),y=(m+x+v+T)*c,b=m-y,M=x-y,_=v-y,S=T-y,w=e-b,E=t-M,D=i-_,P=n-S,N=w>E?32:0,R=w>D?16:0,U=E>D?8:0,k=w>P?4:0,O=E>P?2:0,Y=D>P?1:0,W=N+R+U+k+O+Y,I=o[W][0]>=3?1:0,J=o[W][1]>=3?1:0,de=o[W][2]>=3?1:0,be=o[W][3]>=3?1:0,H=o[W][0]>=2?1:0,X=o[W][1]>=2?1:0,ue=o[W][2]>=2?1:0,ae=o[W][3]>=2?1:0,fe=o[W][0]>=1?1:0,Se=o[W][1]>=1?1:0,Ge=o[W][2]>=1?1:0,Ae=o[W][3]>=1?1:0,Ve=w-I+c,ye=E-J+c,Ce=D-de+c,et=P-be+c,re=w-H+2*c,V=E-X+2*c,Me=D-ue+2*c,Ke=P-ae+2*c,Fe=w-fe+3*c,Be=E-Se+3*c,tt=D-Ge+3*c,je=P-Ae+3*c,z=w-1+4*c,st=E-1+4*c,te=D-1+4*c,oe=P-1+4*c,j=m&255,Je=x&255,Re=v&255,He=T&255,L=a[j+a[Je+a[Re+a[He]]]]%32,A=a[j+I+a[Je+J+a[Re+de+a[He+be]]]]%32,q=a[j+H+a[Je+X+a[Re+ue+a[He+ae]]]]%32,pe=a[j+fe+a[Je+Se+a[Re+Ge+a[He+Ae]]]]%32,ne=a[j+1+a[Je+1+a[Re+1+a[He+1]]]]%32,ge=.6-w*w-E*E-D*D-P*P;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(r[L],w,E,D,P));let xe=.6-Ve*Ve-ye*ye-Ce*Ce-et*et;xe<0?f=0:(xe*=xe,f=xe*xe*this._dot4(r[A],Ve,ye,Ce,et));let $=.6-re*re-V*V-Me*Me-Ke*Ke;$<0?d=0:($*=$,d=$*$*this._dot4(r[q],re,V,Me,Ke));let ie=.6-Fe*Fe-Be*Be-tt*tt-je*je;ie<0?u=0:(ie*=ie,u=ie*ie*this._dot4(r[pe],Fe,Be,tt,je));let me=.6-z*z-st*st-te*te-oe*oe;return me<0?p=0:(me*=me,p=me*me*this._dot4(r[ne],z,st,te,oe)),27*(h+f+d+u+p)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,n){return e[0]*t+e[1]*i+e[2]*n}_dot4(e,t,i,n,r){return e[0]*t+e[1]*i+e[2]*n+e[3]*r}};var La=class s extends un{constructor(e,t,i=512,n=512,r,o,a){super(),this.width=i,this.height=n,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=n_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Gt(this.width,this.height,{type:jt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},cc.defines),uniforms:hn.clone(cc.uniforms),vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader,blending:Pi,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ll,this.normalMaterial.blending=Pi,this.pdMaterial=new Pt({defines:Object.assign({},uc.defines),uniforms:hn.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},hc.defines),uniforms:hn.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,blending:Pi}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:hn.clone(Ds.uniforms),vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Vl,blendDst:mo,blendEquation:Zn,blendSrcAlpha:Hl,blendDstAlpha:mo,blendEquationAlpha:Zn}),this.blendMaterial=new Pt({uniforms:hn.clone(ef.uniforms),vertexShader:ef.vertexShader,fragmentShader:ef.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:iu,blendSrc:Vl,blendDst:mo,blendEquation:Zn,blendSrcAlpha:Hl,blendDstAlpha:mo,blendEquationAlpha:Zn}),this._fsQuad=new Ls(null),this._originalClearColor=new Ue,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let n=new ds;n.format=gs,n.type=rr,this.normalRenderTarget=new Gt(this.width,this.height,{minFilter:ri,magFilter:ri,type:jt,depthTexture:n})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let i=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Pi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Pi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Pi,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,n,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,i,n,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,r=t.clearAlpha||r,n!=null&&(e.setClearColor(n),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new tf,i=e*e*4,n=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;n[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,n[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,n[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,n[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new tr(n,e,e,Ln,Zi);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}};La.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ye=null,lr=null,ar=null,Ns=null,Br=!1,nf=null,s_=0,r_=[146.83,155.56,185,196,220,233.08,261.63,293.66,311.13,369.99];function sf(s=2){let e=Ye.createBuffer(1,Ye.sampleRate*s,Ye.sampleRate),t=e.getChannelData(0),i=0;for(let n=0;n<t.length;n++){let r=Math.random()*2-1;i=(i+.02*r)/1.02,t[n]=i*3.5}return e}function UT(){Ye=new(window.AudioContext||window.webkitAudioContext),lr=Ye.createGain(),lr.gain.value=0;let s=Ye.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,lr.connect(s).connect(Ye.destination),ar=Ye.createGain(),ar.gain.value=.9,ar.connect(lr),Ns=Ye.createGain(),Ns.gain.value=.8,Ns.connect(lr);let e=Ye.createDelay(1.5);e.delayTime.value=.42;let t=Ye.createGain();t.gain.value=.33;let i=Ye.createBiquadFilter();i.type="lowpass",i.frequency.value=2200,e.connect(i).connect(t).connect(e);let n=Ye.createGain();n.gain.value=.35,e.connect(n).connect(ar),ar.echo=e;let r=Ye.createBufferSource();r.buffer=sf(4),r.loop=!0;let o=Ye.createBiquadFilter();o.type="bandpass",o.frequency.value=420,o.Q.value=.7;let a=Ye.createGain();a.gain.value=.16;let l=Ye.createOscillator();l.frequency.value=.07;let c=Ye.createGain();c.gain.value=260,l.connect(c).connect(o.frequency);let h=Ye.createOscillator();h.frequency.value=.11;let f=Ye.createGain();f.gain.value=.07,h.connect(f).connect(a.gain),r.connect(o).connect(a).connect(ar),r.start(),l.start(),h.start();let d=Ye.createBiquadFilter();d.type="lowpass",d.frequency.value=520;let u=Ye.createGain();u.gain.value=.05,d.connect(u).connect(ar);for(let[m,x,v]of[[73.42,"sine",0],[110,"triangle",4],[146.83,"sine",-3]]){let T=Ye.createOscillator();T.type=x,T.frequency.value=m,T.detune.value=v,T.connect(d),T.start()}let p=Ye.createOscillator();p.frequency.value=.18;let g=Ye.createGain();g.gain.value=.015,p.connect(g).connect(u.gain),p.start()}function OT(s,e=0,t=.12){let i=Ye.currentTime+e,n=Ye.createGain();n.gain.setValueAtTime(0,i),n.gain.linearRampToValueAtTime(t,i+.006),n.gain.exponentialRampToValueAtTime(8e-4,i+1.8);let r=Ye.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(s*9,i),r.frequency.exponentialRampToValueAtTime(s*1.6,i+.6);for(let[o,a,l]of[[1,1,"triangle"],[2,.35,"sine"],[3.01,.12,"sine"]]){let c=Ye.createOscillator();c.type=l,c.frequency.value=s*o;let h=Ye.createGain();h.gain.value=a,c.connect(h).connect(r),c.start(i),c.stop(i+2)}r.connect(n),n.connect(ar),n.connect(ar.echo)}function a_(){if(!Br)return;let s=2+(Math.random()*5|0),e=2+(Math.random()*4|0),t=0;for(let i=0;i<e;i++)OT(r_[s],t,.09+Math.random()*.05),t+=[.28,.42,.56][Math.random()*3|0],s=Math.max(0,Math.min(r_.length-1,s+[-2,-1,-1,1,1,2][Math.random()*6|0]));nf=setTimeout(a_,(t+2.2+Math.random()*4)*1e3)}function vo(s,e,t,i,n){s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(n,e+t),s.gain.exponentialRampToValueAtTime(5e-4,e+t+i)}var o_={tick(){let s=Ye.currentTime;if(s-s_<.045)return;s_=s;let e=Ye.createOscillator(),t=Ye.createGain();e.type="sine",e.frequency.value=1700+Math.random()*500,vo(t,s,.002,.03,.025),e.connect(t).connect(Ns),e.start(s),e.stop(s+.05)},arrive(){[0,.11].forEach((s,e)=>{let t=Ye.currentTime+s,i=Ye.createOscillator(),n=Ye.createGain();i.type="sine",i.frequency.value=e?880:659.25,vo(n,t,.01,.6,.07),i.connect(n).connect(Ns),i.start(t),i.stop(t+.7)})},poke(){let s=Ye.currentTime,e=Ye.createOscillator(),t=Ye.createGain();e.type="sine",e.frequency.setValueAtTime(260,s),e.frequency.exponentialRampToValueAtTime(620,s+.12),e.frequency.exponentialRampToValueAtTime(330,s+.3),vo(t,s,.01,.32,.12),e.connect(t).connect(Ns),e.start(s),e.stop(s+.4)},pop(){let s=Ye.currentTime,e=Ye.createBufferSource();e.buffer=sf(.3);let t=Ye.createBiquadFilter();t.type="highpass",t.frequency.value=900;let i=Ye.createGain();vo(i,s,.001,.12,.5),e.connect(t).connect(i).connect(Ns),e.start(s),e.stop(s+.2)},beam(){let s=Ye.currentTime,e=Ye.createBufferSource();e.buffer=sf(3);let t=Ye.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(3200,s+1.2);let i=Ye.createGain();vo(i,s,.25,1.8,.35),e.connect(t).connect(i).connect(Ns),e.start(s),e.stop(s+2.4),[587.33,739.99,880,1174.66].forEach((n,r)=>{let o=Ye.createOscillator(),a=Ye.createGain();o.type="sine",o.frequency.value=n,vo(a,s+.3+r*.12,.02,1.6,.05),o.connect(a).connect(Ns),o.connect(a),o.start(s),o.stop(s+3)})},whoosh(){let s=Ye.currentTime,e=Ye.createBufferSource();e.buffer=sf(1);let t=Ye.createBiquadFilter();t.type="bandpass",t.Q.value=1.2,t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(1400,s+.5);let i=Ye.createGain();vo(i,s,.15,.5,.18),e.connect(t).connect(i).connect(Ns),e.start(s),e.stop(s+.8)}},ei={get on(){return Br},toggle(){return Ye||UT(),Br=!Br,Br?(Ye.resume(),lr.gain.cancelScheduledValues(Ye.currentTime),lr.gain.linearRampToValueAtTime(.55,Ye.currentTime+1.2),clearTimeout(nf),nf=setTimeout(a_,900)):(lr.gain.cancelScheduledValues(Ye.currentTime),lr.gain.linearRampToValueAtTime(0,Ye.currentTime+.4),clearTimeout(nf)),Br},play(s){if(!(!Br||!Ye||Ye.state!=="running"))try{o_[s]&&o_[s]()}catch{}},pause(s){Ye&&(s?Ye.suspend():Br&&Ye.resume())}};var Na="adham107harp",Nn=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),l_={TypeScript:"#3178c6",JavaScript:"#e9c84c",Python:"#3572A5","C++":"#f34b7d",C:"#8a8a8a","C#":"#178600",Java:"#b07219",HTML:"#e34c26",CSS:"#663399"};function c_(s){let e=(Date.now()-new Date(s).getTime())/1e3,t=[[31536e3,"year"],[2592e3,"month"],[604800,"week"],[86400,"day"],[3600,"hour"],[60,"minute"]];for(let[i,n]of t)if(e>=i){let r=Math.floor(e/i);return`${r} ${n}${r>1?"s":""} ago`}return"just now"}async function Ap(s){let e="gh:"+s;try{let n=JSON.parse(sessionStorage.getItem(e)||"null");if(n&&Date.now()-n.at<9e5)return n.data}catch{}let t=await fetch(s,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(t.status);let i=await t.json();try{sessionStorage.setItem(e,JSON.stringify({at:Date.now(),data:i}))}catch{}return i}async function h_(s){if(s)try{let[e,t,i]=await Promise.all([Ap(`https://api.github.com/users/${Na}`),Ap(`https://api.github.com/users/${Na}/repos?per_page=100&sort=pushed`),Ap(`https://api.github.com/users/${Na}/events/public?per_page=30`).catch(()=>[])]),n=t.filter(l=>!l.fork&&l.name!==Na),r=n.reduce((l,c)=>l+c.stargazers_count,0),o={};n.forEach(l=>{l.language&&(o[l.language]=(o[l.language]||0)+1)});let a=i.filter(l=>l.type==="PushEvent").slice(0,3);s.innerHTML=`
      <div class="gh-stats">
        <span><b>${Nn(e.public_repos)}</b> public repos</span>
        <span><b>${Nn(e.followers)}</b> followers</span>
        <span><b>${Nn(r)}</b> stars</span>
      </div>
      <ul class="gh-repos">${n.slice(0,4).map(l=>`
        <li><a href="${Nn(l.html_url)}" target="_blank" rel="noopener">${Nn(l.name)}</a>
          <span class="gh-meta">${l.language?`<i style="background:${Nn(l_[l.language]||"#9fb0e8")}"></i>${Nn(l.language)} \xB7 `:""}pushed ${Nn(c_(l.pushed_at))}</span></li>`).join("")}
      </ul>
      ${a.length?`<p class="gh-sub">Latest commits</p><ul class="gh-commits">${a.map(l=>{let c=(l.payload.commits||[]).slice(-1)[0];return`<li><span class="mono">${Nn(l.repo.name.split("/")[1])}</span> ${Nn((c&&c.message||"pushed").split(`
`)[0]).slice(0,80)} <em>${Nn(c_(l.created_at))}</em></li>`}).join("")}</ul>`:""}
      <p class="gh-langs">${Object.entries(o).sort((l,c)=>c[1]-l[1]).map(([l])=>`<span><i style="background:${Nn(l_[l]||"#9fb0e8")}"></i>${Nn(l)}</span>`).join("")}</p>`,s.classList.add("ready")}catch{s.innerHTML=`<p class="gh-off">Live data is resting (GitHub's API limit). Everything is at <a href="https://github.com/${Na}" target="_blank" rel="noopener">github.com/${Na}</a>.</p>`}}function cr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function v_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_c={duration:.5,overwrite:!1,delay:0},Gp,ki,Wt,jn=1e8,It=1/jn,Up=Math.PI*2,FT=Up/4,BT=0,y_=Math.sqrt,kT=Math.cos,zT=Math.sin,Mi=function(e){return typeof e=="string"},ti=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},gf=function(e){return typeof e>"u"},Fs=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},Wp=function(){return typeof window<"u"},rf=function(e){return ti(e)||Mi(e)},S_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qi=Array.isArray,HT=/random\([^)]+\)/g,VT=/,\s*/g,u_=/(?:-?\.?\d|\.)+/gi,Xp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qp=/[+-]=-?[.\d]+/,GT=/[^,'"\[\]\s]+/gi,WT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,Us,Op,Yp,On={},cf={},M_,b_=function(e){return(cf=Oa(e,On))&&ji},_f=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xc=function(e,t){return!t&&console.warn(e)},T_=function(e,t){return e&&(On[e]=t)&&cf&&(cf[e]=t)||On},vc=function(){return 0},XT={suppressEvents:!0,isStart:!0,kill:!1},of={suppressEvents:!0,kill:!1},qT={suppressEvents:!0},$p={},zr=[],Fp={},E_,Mn={},Cp={},f_=30,af=[],Zp="",Jp=function(e){var t=e[0],i,n;if(Fs(t)||ti(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=af.length;n--&&!af[n].targetTest(t););i=af[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new em(e[n],i)))||e.splice(n,1);return e},Hr=function(e){return e._gsap||Jp(es(e))[0]._gsap},Kp=function(e,t,i){return(i=e[t])&&ti(i)?e[t]():gf(i)&&e.getAttribute&&e.getAttribute(t)||i},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},ii=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},To=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},YT=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},hf=function(){var e=zr.length,t=zr.slice(0),i,n;for(Fp={},zr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Qp=function(e){return!!(e._initted||e._startAt||e.add)},w_=function(e,t,i,n){zr.length&&!ki&&hf(),e.render(t,i,n||!!(ki&&t<0&&Qp(e))),zr.length&&!ki&&hf()},A_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(GT).length<2?t:Mi(e)?e.trim():e},R_=function(e){return e},Fn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$T=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Oa=function(e,t){for(var i in t)e[i]=t[i];return e},d_=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Fs(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},uf=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},pc=function(e){var t=e.parent||$t,i=e.keyframes?$T(Qi(e.keyframes)):Fn;if(Tn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},ZT=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},C_=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},xf=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},JT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bp=function(e,t,i,n){return e._startAt&&(ki?e._startAt.revert(of):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},KT=function s(e){return!e||e._ts&&s(e.parent)},p_=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var i=Math.floor(e=Yt(e/t));return e&&i===e?i-1:i},ff=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vf=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},yf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vf(e),i._dirty||yo(i,e)),e},P_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ff(e.rawTime(),t),(!t._dur||bc(0,t.totalDuration(),i)-t._tTime>It)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-It}},Os=function(e,t,i,n){return t.parent&&Vr(t),t._start=Yt((ur(i)?i:!i&&df(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==$t?Qn(e,i,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),C_(e,t,"_first","_last",e._sort?"_start":0),df(t)||(e._recent=t),n||P_(e,t),e._ts<0&&yf(e,e._tTime),e},I_=function(e,t){return(On.ScrollTrigger||_f("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},D_=function(e,t,i,n,r){if(nm(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!ki&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&E_!==bn.frame)return zr.push(e),e._lazy=[r,n],1},QT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},df=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jT=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&QT(e)&&!(!e._initted&&df(e))||(e._ts<0||e._dp._ts<0)&&!df(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=bc(0,e._tDur,t),h=Fa(l,a),e._yoyo&&h&1&&(o=1-o),h!==Fa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ki||n||e._zTime===It||!t&&e._zTime){if(!e._initted&&D_(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?It:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Bp(e,t,i,!0),e._onUpdate&&!i&&Un(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vr(e,1),!i&&!ki&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},eE=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ba=function(e,t,i,n){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!n&&yf(e,e._tTime=e._tDur*a),e.parent&&vf(e),i||yo(e.parent,e),e},m_=function(e){return e instanceof Ki?yo(e):Ba(e,e._dur)},tE={_start:0,endTime:vc,totalDuration:vc},Qn=function s(e,t,i){var n=e.labels,r=e._recent||tE,o=e.duration()>=jn?r.endTime(!1):e._dur,a,l,c;return Mi(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Qi(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},mc=function(e,t,i){var n=ur(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new ai(t[0],o,t[r+1])},Gr=function(e,t){return e||e===0?t(e):t},bc=function(e,t,i){return i<e?e:i>t?t:i},zi=function(e,t){return!Mi(e)||!(t=WT.exec(e))?"":t[1]},iE=function(e,t,i){return Gr(i,function(n){return bc(e,t,n)})},kp=[].slice,L_=function(e,t){return e&&Fs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fs(e[0]))&&!e.nodeType&&e!==Us},nE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Mi(n)&&!t||L_(n,1)?(r=i).push.apply(r,es(n)):i.push(n)})||i},es=function(e,t,i){return Wt&&!t&&Wt.selector?Wt.selector(e):Mi(e)&&!i&&(Op||!ka())?kp.call((t||Yp).querySelectorAll(e),0):Qi(e)?nE(e,i):L_(e)?kp.call(e,0):e?[e]:[]},zp=function(e){return e=es(e)[0]||xc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return es(t,i.querySelectorAll?i:i===e?xc("Invalid scope")||Yp.createElement("div"):e)}},N_=function(e){return e.sort(function(){return .5-Math.random()})},U_=function(e){if(ti(e))return e;var t=Fs(e)?e:{each:e},i=So(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,f=n;return Mi(n)?h=f={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],f=n[1]),function(d,u,p){var g=(p||t).length,m=o[g],x,v,T,y,b,M,_,S,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,jn])[1],!w){for(_=-jn;_<(_=p[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(m=o[g]=[],x=l?Math.min(w,g)*h-.5:n%w,v=w===jn?0:l?g*f/w-.5:n/w|0,_=0,S=jn,M=0;M<g;M++)T=M%w-x,y=v-(M/w|0),m[M]=b=c?Math.abs(c==="y"?y:T):y_(T*T+y*y),b>_&&(_=b),b<S&&(S=b);n==="random"&&N_(m),m.max=_-S,m.min=S,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(n==="edges"?-1:1),m.b=g<0?r-g:r,m.u=zi(t.amount||t.each)||0,i=i&&g<0?gE(i):i}return g=(m[d]-m.min)/m.max||0,Yt(m.b+(i?i(g):g)*m.v)+m.u}},Hp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Yt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(ur(i)?0:zi(i))}},O_=function(e,t){var i=Qi(e),n,r;return!i&&Fs(e)&&(n=i=e.radius||jn,e.values?(e=es(e.values),(r=!ur(e[0]))&&(n*=n)):e=Hp(e.increment)),Gr(t,i?ti(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=jn,h=0,f=e.length,d,u;f--;)r?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!n||c<=n?e[h]:o,r||h===o||ur(o)?h:h+zi(o)}:Hp(e))},F_=function(e,t,i,n){return Gr(Qi(e)?!t:i===!0?!!(i=0):!n,function(){return Qi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},sE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},rE=function(e,t){return function(i){return e(parseFloat(i))+(t||zi(i))}},oE=function(e,t,i){return k_(e,t,0,1,i)},B_=function(e,t,i){return Gr(i,function(n){return e[~~t(n)]})},aE=function s(e,t,i){var n=t-e;return Qi(e)?B_(e,s(0,e.length),t):Gr(i,function(r){return(n+(r-e)%n)%n+e})},lE=function s(e,t,i){var n=t-e,r=n*2;return Qi(e)?B_(e,s(0,e.length-1),t):Gr(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},za=function(e){return e.replace(HT,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(VT);return F_(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},k_=function(e,t,i,n,r){var o=t-e,a=n-i;return Gr(r,function(l){return i+((l-e)/o*a||0)})},cE=function s(e,t,i,n){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=Mi(e),a={},l,c,h,f,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Qi(e)&&!Qi(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(s(e[c-1],e[c]));f--,r=function(p){p*=f;var g=Math.min(d,~~p);return h[g](p-g)},i=t}else n||(e=Oa(Qi(e)?[]:{},e));if(!h){for(l in t)tm.call(a,e,l,"get",t[l]);r=function(p){return om(p,a)||(o?e.p:e)}}}return Gr(i,r)},g_=function(e,t,i){var n=e.labels,r=jn,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Un=function(e,t,i){var n=e.vars,r=n[t],o=Wt,a=e._ctx,l,c,h;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&zr.length&&hf(),a&&(Wt=a),h=l?r.apply(c,l):r.call(c),Wt=o,h},fc=function(e){return Vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ki),e.progress()<1&&Un(e,"onInterrupt"),e},Ua,z_=[],H_=function(e){if(e)if(e=!e.name&&e.default||e,Wp()||e.headless){var t=e.name,i=ti(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:vc,render:om,add:tm,kill:wE,modifier:EE,rawVars:0},o={targetTest:0,get:0,getSetter:Sf,aliases:{},register:0};if(ka(),e!==n){if(Mn[t])return;Fn(n,Fn(uf(e,r),o)),Oa(n.prototype,Oa(r,uf(e,o))),Mn[n.prop=t]=n,e.targetTest&&(af.push(n),$p[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}T_(t,n),e.register&&e.register(ji,n,dn)}else z_.push(e)},Ut=255,dc={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Pp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ut+.5|0},V_=function(e,t,i){var n=e?ur(e)?[e>>16,e>>8&Ut,e&Ut]:0:dc.black,r,o,a,l,c,h,f,d,u,p;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),dc[e])n=dc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Ut,n&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(n=p=e.match(u_),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Pp(l+1/3,r,o),n[1]=Pp(l,r,o),n[2]=Pp(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(Xp),i&&n.length<4&&(n[3]=1),n}else n=e.match(u_)||dc.transparent;n=n.map(Number)}return t&&!p&&(r=n[0]/Ut,o=n[1]/Ut,a=n[2]/Ut,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},G_=function(e){var t=[],i=[],n=-1;return e.split(hr).forEach(function(r){var o=r.match(bo)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},__=function(e,t,i){var n="",r=(e+n).match(hr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return e;if(r=r.map(function(d){return(d=V_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=G_(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(hr,"1").split(bo),f=c.length-1;a<f;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=e.split(hr),f=c.length-1;a<f;a++)n+=c[a]+r[a];return n+c[f]},hr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in dc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),hE=/hsl[a]?\(/,jp=function(e){var t=e.join(" "),i;if(hr.lastIndex=0,hr.test(t))return i=hE.test(t),e[1]=__(e[1],i),e[0]=__(e[0],i,G_(e[1])),!0},yc,bn=(function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,f,d,u,p=function g(m){var x=s()-n,v=m===!0,T,y,b,M;if((x>e||x<0)&&(i+=x-t),n+=x,b=n-i,T=b-o,(T>0||v)&&(M=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(g)),y)for(u=0;u<a.length;u++)a[u](b,d,M,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){M_&&(!Op&&Wp()&&(Us=Op=window,Yp=Us.document||{},On.gsap=ji,(Us.gsapVersions||(Us.gsapVersions=[])).push(ji.version),b_(cf||Us.GreenSockGlobals||!Us.gsap&&Us||{}),z_.forEach(H_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},yc=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),yc=0,c=vc},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,x,v){var T=x?function(y,b,M,_){m(y,b,M,_),f.remove(T)}:m;return f.remove(m),a[v?"unshift":"push"](T),ka(),T},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&u>=x&&u--},_listeners:a},f})(),ka=function(){return!yc&&bn.wake()},St={},uE=/^[\d.\-M][\d.\-,\s]/,fE=/["']/g,dE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(fE,"").trim():+c,n=l.substr(a+1).trim();return t},pE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},mE=function(e){var t=(e+"").split("("),i=St[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[dE(t[1])]:pE(e).split(",").map(A_)):St._CE&&uE.test(e)?St._CE("",e):i},gE=function(e){return function(t){return 1-e(1-t)}},So=function(e,t){return e&&(ti(e)?e:St[e]||mE(e))||t},Eo=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return fn(e,function(a){St[a]=On[a]=r,St[o=a.toLowerCase()]=i;for(var l in r)St[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=r[l]}),r},W_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ip=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/Up*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*zT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:W_(a);return r=Up/r,l.config=function(c,h){return s(e,c,h)},l},Dp=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:W_(i);return n.config=function(r){return s(e,r)},n};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Eo(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;Eo("Elastic",Ip("in"),Ip("out"),Ip());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Eo("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Eo("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Eo("Circ",function(s){return-(y_(1-s*s)-1)});Eo("Sine",function(s){return s===1?1:-kT(s*FT)+1});Eo("Back",Dp("in"),Dp("out"),Dp());St.SteppedEase=St.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-It;return function(a){return((n*bc(0,o,a)|0)+r)*i}}};_c.ease=St["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Zp+=s+","+s+"Params,"});var em=function(e,t){this.id=BT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kp,this.set=t?t.getSetter:Sf},Sc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ba(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),yc||bn.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ba(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ka(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(yf(this,i),!r._dp||r.parent||P_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Os(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),w_(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+p_(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+p_(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Fa(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?ff(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-It?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(bc(-Math.abs(this._delay),a,r),n!==!1),vf(this),JT(this)},e.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ka(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==It,o;if(r)for(this._tTime-=It,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+It){r=!1;break}o=o._next}this.totalTime(n,r)}return this},e.startTime=function(i){if(arguments.length){this._start=Yt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Os(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Tn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ff(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=qT);var n=ki;return ki=i,Qp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ki=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,m_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,m_(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Qn(this,i),Tn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Tn(n)),this._dur||(this._zTime=-It),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-It)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=ti(i)?i:R_,l=function(){var h=n.then;n.then=null,r&&r(),ti(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){fc(this)},s})();Fn(Sc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Ki=(function(s){v_(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Tn(i.sortChildren),$t&&Os(i.parent||$t,cr(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&I_(cr(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return mc(0,arguments,this),this},t.from=function(n,r,o){return mc(1,arguments,this),this},t.fromTo=function(n,r,o,a){return mc(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,pc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ai(n,r,Qn(this,o),1),this},t.call=function(n,r,o){return Os(this,ai.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ai(n,o,Qn(this,l)),this},t.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,pc(o).immediateRender=Tn(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},t.staggerFromTo=function(n,r,o,a,l,c,h,f){return a.startAt=o,pc(a).immediateRender=Tn(a.immediateRender),this.staggerTo(n,r,a,l,c,h,f)},t.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Yt(n),f=this._zTime<0!=n<0&&(this._initted||!c),d,u,p,g,m,x,v,T,y,b,M,_;if(this!==$t&&h>l&&n>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),d=h,y=this._start,T=this._ts,x=!T,f&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(d=Yt(h%m),h===l?(g=this._repeat,d=c):(b=Yt(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=Fa(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),M&&g&1&&(d=c-d,_=1),g!==b&&!this._lock){var S=M&&b&1,w=S===(M&&g&1);if(g<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Yt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=eE(this,Yt(a),Yt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!b&&(Un(this,"onStart"),this._tTime!==h))return this;if(d>=a&&n>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!x){v=0,p&&(h+=this._zTime=-It);break}}u=p}else{u=this._last;for(var E=n<0?n:d;u;){if(p=u._prev,(u._act||E<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(E-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(E-u._start)*u._ts,r,o||ki&&Qp(u)),d!==this._time||!this._ts&&!x){v=0,p&&(h+=this._zTime=E?-It:It);break}}u=p}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-It)._zTime=d>=a?1:-1,this._ts))return this._start=y,vf(this),this.render(n,r,o);this._onUpdate&&!r&&Un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Vr(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(Un(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(ur(r)||(r=Qn(this,r,n)),!(n instanceof Sc)){if(Qi(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Mi(n))return this.addLabel(n,r);if(ti(n))n=ai.delayedCall(0,n);else return this}return this!==n?Os(this,n,r):this},t.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ai?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return Mi(n)?this.removeLabel(n):ti(n)?this.killTweensOf(n):(n.parent===this&&xf(this,n),n===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(bn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Qn(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var a=ai.delayedCall(0,r||vc,o);return a.data="isPause",this._hasPause=1,Os(this,a,Qn(this,n))},t.removePause=function(n){var r=this._first;for(n=Qn(this,n);r;)r._start===n&&r.data==="isPause"&&Vr(r),r=r._next},t.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)kr!==a[l]&&a[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],a=es(n),l=this._first,c=ur(r),h;l;)l instanceof ai?YT(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,a=Qn(o,n),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,p=ai.to(o,Fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Ba(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,f||[])}},r));return d?p.render(0):p},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,Fn({startAt:{time:Qn(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),g_(this,Qn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),g_(this,Qn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Yt(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return yo(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),yo(this)},t.totalDuration=function(n){var r=0,o=this,a=o._last,l=jn,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Os(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Yt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ba(o,o===$t&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if($t._ts&&(w_($t,ff(n,$t)),E_=bn.frame),bn.frame>=f_){f_+=En.autoSleep||120;var r=$t._first;if((!r||!r._ts)&&En.autoSleep&&bn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||bn.sleep()}}},e})(Sc);Fn(Ki.prototype,{_lock:0,_hasPause:0,_forcing:0});var _E=function(e,t,i,n,r,o,a){var l=new dn(this._pt,e,t,0,1,rm,null,r),c=0,h=0,f,d,u,p,g,m,x,v;for(l.b=i,l.e=n,i+="",n+="",(x=~n.indexOf("random("))&&(n=za(n)),o&&(v=[i,n],o(v,e,t),i=v[0],n=v[1]),d=i.match(Rp)||[];f=Rp.exec(n);)p=f[0],g=n.substring(c,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:p.charAt(1)==="="?To(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=Rp.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(qp.test(n)||x)&&(l.e=0),this._pt=l,l},tm=function(e,t,i,n,r,o,a,l,c,h){ti(n)&&(n=n(r||0,e,o));var f=e[t],d=i!=="get"?i:ti(f)?c?e[t.indexOf("set")||!ti(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=ti(f)?c?ME:q_:sm,p;if(Mi(n)&&(~n.indexOf("random(")&&(n=za(n)),n.charAt(1)==="="&&(p=To(d,n)+(zi(d)||0),(p||p===0)&&(n=p))),!h||d!==n||Vp)return!isNaN(d*n)&&n!==""?(p=new dn(this._pt,e,t,+d||0,n-(d||0),typeof f=="boolean"?TE:Y_,0,u),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&_f(t,n),_E.call(this,e,t,d,n,u,l||En.stringFilter,c))},xE=function(e,t,i,n,r){if(ti(e)&&(e=gc(e,r,t,i,n)),!Fs(e)||e.style&&e.nodeType||Qi(e)||S_(e))return Mi(e)?gc(e,r,t,i,n):e;var o={},a;for(a in e)o[a]=gc(e[a],r,t,i,n);return o},im=function(e,t,i,n,r,o){var a,l,c,h;if(Mn[e]&&(a=new Mn[e]).init(r,a.rawVars?t[e]:xE(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new dn(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==Ua))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},kr,Vp,nm=function s(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,f=n.yoyoEase,d=n.keyframes,u=n.autoRevert,p=e._dur,g=e._startAt,m=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:m,T=e._overwrite==="auto"&&!Gp,y=e.timeline,b=n.easeReverse||f,M,_,S,w,E,D,P,N,R,U,k,O,Y;if(y&&(!d||!r)&&(r="none"),e._ease=So(r,_c.ease),e._rEase=b&&(So(b)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||d&&!n.stagger){if(N=m[0]?Hr(m[0]).harness:0,O=N&&n[N.prop],M=uf(n,$p),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!u?g.render(-1,!0):g.revert(h&&p?of:XT),g._lazy=0),o){if(Vr(e._startAt=ai.set(m,Fn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!g&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ki||!a&&!u)&&e._startAt.revert(of),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&p&&!g){if(t&&(a=!1),S=Fn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Tn(l),immediateRender:a,stagger:0,parent:x},M),O&&(S[N.prop]=O),Vr(e._startAt=ai.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ki?e._startAt.revert(of):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Tn(l)||l&&!p,_=0;_<m.length;_++){if(E=m[_],P=E._gsap||Jp(m)[_]._gsap,e._ptLookup[_]=U={},Fp[P.id]&&zr.length&&hf(),k=v===m?_:v.indexOf(E),N&&(R=new N).init(E,O||M,e,k,v)!==!1&&(e._pt=w=new dn(e._pt,E,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(W){U[W]=w}),R.priority&&(D=1)),!N||O)for(S in M)Mn[S]&&(R=im(S,M,e,k,E,v))?R.priority&&(D=1):U[S]=w=tm.call(e,E,S,"get",M[S],k,v,0,n.stringFilter);e._op&&e._op[_]&&e.kill(E,e._op[_]),T&&e._pt&&(kr=e,$t.killTweensOf(E,U,e.globalTime(t)),Y=!e.parent,kr=0),e._pt&&l&&(Fp[P.id]=1)}D&&am(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&y.render(jn,!0,!0)},vE=function(e,t,i,n,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Vp=1,e.vars[t]="+=0",nm(e,a),Vp=0,l?xc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,f.e&&(f.e=ii(i)+zi(f.e)),f.b&&(f.b=h.s+zi(f.b))},yE=function(e,t){var i=e[0]?Hr(e[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return t;r=Oa({},t);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},SE=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,a;if(Qi(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},gc=function(e,t,i,n,r){return ti(e)?e.call(t,i,n,r):Mi(e)&&~e.indexOf("random(")?za(e):e},pf=Zp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",X_={};fn(pf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return X_[s]=1});pf=pf.split(",");var ai=(function(s){v_(e,s);function e(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:pc(n))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,x=n.parent||$t,v=(Qi(i)||S_(i)?ur(i[0]):"length"in n)?[i]:es(i),T,y,b,M,_,S,w,E;if(a._targets=v.length?Jp(v):xc("GSAP target "+i+" not found. https://gsap.com",!En.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||d||rf(c)||rf(h)){n=a.vars;var D=n.easeReverse||n.yoyoEase;if(T=a.timeline=new Ki({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),T.kill(),T.parent=T._dp=cr(a),T._start=0,d||rf(c)||rf(h)){if(M=v.length,w=d&&U_(d),Fs(d))for(_ in d)~pf.indexOf(_)&&(E||(E={}),E[_]=d[_]);for(y=0;y<M;y++)b=uf(n,X_),b.stagger=0,D&&(b.easeReverse=D),E&&Oa(b,E),S=v[y],b.duration=+gc(c,cr(a),y,S,v),b.delay=(+gc(h,cr(a),y,S,v)||0)-a._delay,!d&&M===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),T.to(S,b,w?w(y,S,v):0),T._ease=St.none;T.duration()?c=h=0:a.timeline=0}else if(p){pc(Fn(T.vars.defaults,{ease:"none"})),T._ease=So(p.ease||n.ease||"none");var P=0,N,R,U;if(Qi(p))p.forEach(function(k){return T.to(v,k,">")}),T.duration();else{b={};for(_ in p)_==="ease"||_==="easeEach"||SE(_,p[_],b,p.easeEach);for(_ in b)for(N=b[_].sort(function(k,O){return k.t-O.t}),P=0,y=0;y<N.length;y++)R=N[y],U={ease:R.e,duration:(R.t-(y?N[y-1].t:0))/100*c},U[_]=R.v,T.to(v,U,P),P+=U.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return u===!0&&!Gp&&(kr=cr(a),$t.killTweensOf(v),kr=0),Os(x,cr(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(f||!c&&!p&&a._start===Yt(x._time)&&Tn(f)&&KT(cr(a))&&x.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-h)||0)),m&&I_(cr(a),m),a}var t=e.prototype;return t.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,f=n>l-It&&!h?l:n<It?0:n,d,u,p,g,m,x,v,T;if(!c)jT(this,n,r,o);else if(f!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,r,o);if(d=Yt(f%g),f===l?(p=this._repeat,d=c):(m=Yt(f/g),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),x=this._yoyo&&p&1,x&&(d=c-d),m=Fa(this._tTime,g),d===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!x&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Yt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(D_(this,h?n:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!r&&!m&&(Un(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;T&&T.render(n<0?n:T._dur*T._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Bp(this,n,r,o),Un(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Bp(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vr(this,1),!r&&!(h&&!a)&&(f||a||x)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,a,l){yc||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||nm(this,c),h=this._ease(c/this._dur),vE(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(yf(this,0),this.parent||C_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?fc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ki),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,kr&&kr.vars.overwrite!==!0)._first||fc(this),this.parent&&o!==this.timeline.totalDuration()&&Ba(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?es(n):a,c=this._ptLookup,h=this._pt,f,d,u,p,g,m,x;if((!r||r==="all")&&ZT(a,l))return r==="all"&&(this._pt=0),fc(this);for(f=this._op=this._op||[],r!=="all"&&(Mi(r)&&(g={},fn(r,function(v){return g[v]=1}),r=g),r=yE(a,r)),x=a.length;x--;)if(~l.indexOf(a[x])){d=c[x],r==="all"?(f[x]=r,p=d,u={}):(u=f[x]=f[x]||{},p=r);for(g in p)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xf(this,m,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&fc(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return mc(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return mc(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return $t.killTweensOf(n,r,o)},e})(Sc);Fn(ai.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(s){ai[s]=function(){var e=new Ki,t=kp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var sm=function(e,t,i){return e[t]=i},q_=function(e,t,i){return e[t](i)},ME=function(e,t,i,n){return e[t](n.fp,i)},bE=function(e,t,i){return e.setAttribute(t,i)},Sf=function(e,t){return ti(e[t])?q_:gf(e[t])&&e.setAttribute?bE:sm},Y_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},TE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rm=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},om=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},EE=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},wE=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?xf(this,t,"_pt"):t.dep||(i=1),t=n;return!i},AE=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},am=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},dn=(function(){function s(t,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||Y_,this.d=l||this,this.set=c||sm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=AE,this.m=i,this.mt=r,this.tween=n},s})();fn(Zp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return $p[s]=1});On.TweenMax=On.TweenLite=ai;On.TimelineLite=On.TimelineMax=Ki;$t=new Ki({sortChildren:!1,defaults:_c,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=jp;var Mo=[],lf={},RE=[],x_=0,CE=0,Lp=function(e){return(lf[e]||RE).map(function(t){return t()})},Mc=function(){var e=Date.now(),t=[];e-x_>2&&(Lp("matchMediaInit"),Mo.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Us.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Lp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),x_=e,Lp("matchMedia"))},$_=(function(){function s(t,i){this.selector=i&&zp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=CE++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){ti(i)&&(r=n,n=i,i=ti);var o=this,a=function(){var c=Wt,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=zp(r)),Wt=o,f=n.apply(o,arguments),ti(f)&&o._r.push(f),Wt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,i===ti?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=Wt;Wt=null,i(this),Wt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof ai&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ki?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ai)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Mc):a.removeEventListener("change",Mc)}),this._mqs=null}},e.revert=function(i){this.kill(i||{})},s})(),PE=(function(){function s(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){Fs(i)||(i={matches:i});var o=new $_(0,r||this.scope),a=o.conditions={},l,c,h;Wt&&!o.selector&&(o.selector=Wt.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Us.matchMedia(i[c]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Mc):l.addEventListener("change",Mc),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),mf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return H_(n)})},timeline:function(e){return new Ki(e)},getTweensOf:function(e,t){return $t.getTweensOf(e,t)},getProperty:function(e,t,i,n){Mi(e)&&(e=es(e)[0]);var r=Hr(e||{}).get,o=i?R_:A_;return i==="native"&&(i=""),e&&(t?o((Mn[t]&&Mn[t].get||r)(e,t,i,n)):function(a,l,c){return o((Mn[a]&&Mn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=es(e),e.length>1){var n=e.map(function(h){return ji.quickSetter(h,t,i)}),r=n.length;return function(h){for(var f=r;f--;)n[f](h)}}e=e[0]||{};var o=Mn[t],a=Hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Ua._pt=0,f.init(e,i?h+i:h,Ua,0,[e]),f.render(1,f),Ua._pt&&om(1,Ua)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,r=ji.to(e,Fn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return $t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,_c.ease)),d_(_c,e||{})},config:function(e){return d_(En,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Mn[a]&&!On[a]&&xc(t+" effect requires "+a+" plugin.")}),Cp[t]=function(a,l,c){return i(es(a),Fn(l||{},r),c)},o&&(Ki.prototype[t]=function(a,l,c){return this.add(Cp[t](a,Fs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):St},getById:function(e){return $t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ki(e),n,r;for(i.smoothChildTiming=Tn(e.smoothChildTiming),$t.remove(i),i._dp=0,i._time=i._tTime=$t._time,n=$t._first;n;)r=n._next,(t||!(!n._dur&&n instanceof ai&&n.vars.onComplete===n._targets[0]))&&Os(i,n,n._start-n._delay),n=r;return Os($t,i,0),i},context:function(e,t){return e?new $_(e,t):Wt},matchMedia:function(e){return new PE(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Mc()},addEventListener:function(e,t){var i=lf[e]||(lf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=lf[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:aE,wrapYoyo:lE,distribute:U_,random:F_,snap:O_,normalize:oE,getUnit:zi,clamp:iE,splitColor:V_,toArray:es,selector:zp,mapRange:k_,pipe:sE,unitize:rE,interpolate:cE,shuffle:N_},install:b_,effects:Cp,ticker:bn,updateRoot:Ki.updateRoot,plugins:Mn,globalTimeline:$t,core:{PropTween:dn,globals:T_,Tween:ai,Timeline:Ki,Animation:Sc,getCache:Hr,_removeLinkedListItem:xf,reverting:function(){return ki},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Gp=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return mf[s]=ai[s]});bn.add(Ki.updateRoot);Ua=mf.to({},{duration:0});var IE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},DE=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=IE(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},Np=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(Mi(r)&&(l={},fn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}DE(a,r)}}}},ji=mf.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)ki?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Np("roundProps",Hp),Np("modifiers"),Np("snap",O_))||mf;ai.version=Ki.version=ji.version="3.15.1";M_=1;Wp()&&ka();var LE=St.Power0,NE=St.Power1,UE=St.Power2,OE=St.Power3,FE=St.Power4,BE=St.Linear,kE=St.Quad,zE=St.Cubic,HE=St.Quart,VE=St.Quint,GE=St.Strong,WE=St.Elastic,XE=St.Back,qE=St.SteppedEase,YE=St.Bounce,$E=St.Sine,ZE=St.Expo,JE=St.Circ;var Z_,Wr,Va,dm,Co,KE,J_,pm,QE=function(){return typeof window<"u"},dr={},Ro=180/Math.PI,Ga=Math.PI/180,Ha=Math.atan2,K_=1e8,mm=/([A-Z])/g,jE=/(left|right|width|margin|padding|x)/i,ew=/[\s,\(]\S/,Bs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},rx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ox=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rw=function(e,t,i){return e.style[t]=i},ow=function(e,t,i){return e.style.setProperty(t,i)},aw=function(e,t,i){return e._gsap[t]=i},lw=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},cw=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},hw=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},Zt="transform",wn=Zt+"Origin",uw=function s(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in dr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=fr(n,a)}):this.tfm[e]=o.x?o[e]:fr(n,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return Bs.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(Zt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Zt}(r||t)&&this.props.push(e,t,r[e])},ax=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fw=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(mm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=pm(),(!r||!r.isStart)&&!i[Zt]&&(ax(i),n.zOrigin&&i[wn]&&(i[wn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},lx=function(e,t){var i={target:e,props:[],revert:fw,save:uw};return e._gsap||ji.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},cx,hm=function(e,t){var i=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return i&&i.style?i:Wr.createElement(e)},Bn=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(mm,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,Wa(t)||t,1)||""},Q_="O,Moz,ms,Ms,Webkit".split(","),Wa=function(e,t,i){var n=t||Co,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Q_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Q_[o]:"")+e},um=function(){QE()&&window.document&&(Z_=window,Wr=Z_.document,Va=Wr.documentElement,Co=hm("div")||{style:{}},KE=hm("div"),Zt=Wa(Zt),wn=Zt+"Origin",Co.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cx=!!Wa("perspective"),pm=ji.core.reverting,dm=1)},j_=function(e){var t=e.ownerSVGElement,i=hm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),Va.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),Va.removeChild(i),r},ex=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},hx=function(e){var t,i;try{t=e.getBBox()}catch{t=j_(e),i=1}return t&&(t.width||t.height)||i||(t=j_(e)),t&&!t.width&&!t.x&&!t.y?{x:+ex(e,["x","cx","x1"])||0,y:+ex(e,["y","cy","y1"])||0,width:0,height:0}:t},ux=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hx(e))},qr=function(e,t){if(t){var i=e.style,n;t in dr&&t!==wn&&(t=Zt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(mm,"-$1").toLowerCase())):i.removeAttribute(t)}},Xr=function(e,t,i,n,r,o){var a=new dn(e._pt,t,i,0,1,o?ox:rx);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},tx={deg:1,rad:1,turn:1},dw={grid:1,flex:1},Yr=function s(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=Co.style,l=jE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=n==="px",u=n==="%",p,g,m,x;if(n===o||!r||tx[n]||tx[o])return r;if(o!=="px"&&!d&&(r=s(e,t,i,"px")),x=e.getCTM&&ux(e),(u||o==="%")&&(dr[t]||~t.indexOf("adius")))return p=x?e.getBBox()[l?"width":"height"]:e[h],ii(u?r/p*f:r/100*p);if(a[l?"width":"height"]=f+(d?o:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Wr||!g.appendChild)&&(g=Wr.body),m=g._gsap,m&&u&&m.width&&l&&m.time===bn.time&&!m.uncache)return ii(r/m.width*f);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+n,p=e[h],v?e.style[t]=v:qr(e,t)}else(u||o==="%")&&!dw[Bn(g,"display")]&&(a.position=Bn(e,"position")),g===e&&(a.position="static"),g.appendChild(Co),p=Co[h],g.removeChild(Co),a.position="absolute";return l&&u&&(m=Hr(g),m.time=bn.time,m.width=g[h]),ii(d?p*r/f:p&&r?f/p*r:0)},fr=function(e,t,i,n){var r;return dm||um(),t in Bs&&t!=="transform"&&(t=Bs[t],~t.indexOf(",")&&(t=t.split(",")[0])),dr[t]&&t!=="transform"?(r=wc(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:bf(Bn(e,wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Mf[t]&&Mf[t](e,t,i)||Bn(e,t)||Kp(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Yr(e,t,r,i)+i:r},pw=function(e,t,i,n){if(!i||i==="none"){var r=Wa(t,e,1),o=r&&Bn(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=Bn(e,"borderTopColor"))}var a=new dn(this._pt,e.style,t,0,1,rm),l=0,c=0,h,f,d,u,p,g,m,x,v,T,y,b;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Bn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=Bn(e,t)||n,g?e.style[t]=g:qr(e,t)),h=[i,n],jp(h),i=h[0],n=h[1],d=i.match(bo)||[],b=n.match(bo)||[],b.length){for(;f=bo.exec(n);)m=f[0],v=n.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=d[c++]||"")&&(u=parseFloat(g)||0,y=g.substr((u+"").length),m.charAt(1)==="="&&(m=To(u,m)+y),x=parseFloat(m),T=m.substr((x+"").length),l=bo.lastIndex-T.length,T||(T=T||En.units[t]||y,l===n.length&&(n+=T,a.e+=T)),y!==T&&(u=Yr(e,t,g,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:x-u,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?ox:rx;return qp.test(n)&&(a.e=0),this._pt=a,a},ix={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mw=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=ix[i]||i,t[1]=ix[n]||n,t.join(" ")},gw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],dr[a]&&(l=1,a=a==="transformOrigin"?wn:Zt),qr(i,a);l&&(qr(i,Zt),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",wc(i,1),o.uncache=1,ax(n)))}},Mf={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new dn(e._pt,t,i,0,0,gw);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},Ec=[1,0,0,1,0,0],fx={},dx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nx=function(e){var t=Bn(e,Zt);return dx(t)?Ec:t.substr(7).match(Xp).map(ii)},gm=function(e,t){var i=e._gsap||Hr(e),n=e.style,r=nx(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ec:r):(r===Ec&&!e.offsetParent&&e!==Va&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Va.appendChild(e)),r=nx(e),l?n.display=l:qr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Va.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fm=function(e,t,i,n,r,o){var a=e._gsap,l=r||gm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],p=l[1],g=l[2],m=l[3],x=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,b=parseFloat(T[1])||0,M,_,S,w;i?l!==Ec&&(_=u*m-p*g)&&(S=y*(m/_)+b*(-g/_)+(g*v-m*x)/_,w=y*(-p/_)+b*(u/_)-(u*v-p*x)/_,y=S,b=w):(M=hx(e),y=M.x+(~T[0].indexOf("%")?y/100*M.width:y),b=M.y+(~(T[1]||T[0]).indexOf("%")?b/100*M.height:b)),n||n!==!1&&a.smooth?(x=y-c,v=b-h,a.xOffset=f+(x*u+v*g)-x,a.yOffset=d+(x*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[wn]="0px 0px",o&&(Xr(o,a,"xOrigin",c,y),Xr(o,a,"yOrigin",h,b),Xr(o,a,"xOffset",f,a.xOffset),Xr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},wc=function(e,t){var i=e._gsap||new em(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bn(e,wn)||"0",h,f,d,u,p,g,m,x,v,T,y,b,M,_,S,w,E,D,P,N,R,U,k,O,Y,W,I,J,de,be,H,X;return h=f=d=g=m=x=v=T=y=0,u=p=1,i.svg=!!(e.getCTM&&ux(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),n.scale=n.rotate=n.translate="none"),_=gm(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),fm(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,_)),b=i.xOrigin||0,M=i.yOrigin||0,_!==Ec&&(D=_[0],P=_[1],N=_[2],R=_[3],h=U=_[4],f=k=_[5],_.length===6?(u=Math.sqrt(D*D+P*P),p=Math.sqrt(R*R+N*N),g=D||P?Ha(P,D)*Ro:0,v=N||R?Ha(N,R)*Ro+g:0,v&&(p*=Math.abs(Math.cos(v*Ga))),i.svg&&(h-=b-(b*D+M*N),f-=M-(b*P+M*R))):(X=_[6],be=_[7],I=_[8],J=_[9],de=_[10],H=_[11],h=_[12],f=_[13],d=_[14],S=Ha(X,de),m=S*Ro,S&&(w=Math.cos(-S),E=Math.sin(-S),O=U*w+I*E,Y=k*w+J*E,W=X*w+de*E,I=U*-E+I*w,J=k*-E+J*w,de=X*-E+de*w,H=be*-E+H*w,U=O,k=Y,X=W),S=Ha(-N,de),x=S*Ro,S&&(w=Math.cos(-S),E=Math.sin(-S),O=D*w-I*E,Y=P*w-J*E,W=N*w-de*E,H=R*E+H*w,D=O,P=Y,N=W),S=Ha(P,D),g=S*Ro,S&&(w=Math.cos(S),E=Math.sin(S),O=D*w+P*E,Y=U*w+k*E,P=P*w-D*E,k=k*w-U*E,D=O,U=Y),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,x=180-x),u=ii(Math.sqrt(D*D+P*P+N*N)),p=ii(Math.sqrt(k*k+X*X)),S=Ha(U,k),v=Math.abs(S)>2e-4?S*Ro:0,y=H?1/(H<0?-H:H):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!dx(Bn(e,Zt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=ii(u),i.scaleY=ii(p),i.rotation=ii(g)+a,i.rotationX=ii(m)+a,i.rotationY=ii(x)+a,i.skewX=v+a,i.skewY=T+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[wn]=bf(c)),i.xOffset=i.yOffset=0,i.force3D=En.force3D,i.renderTransform=i.svg?xw:cx?px:_w,i.uncache=0,i},bf=function(e){return(e=e.split(" "))[0]+" "+e[1]},lm=function(e,t,i){var n=zi(t);return ii(parseFloat(t)+parseFloat(Yr(e,"x",i+"px",n)))+n},_w=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,px(e,t)},wo="0deg",Tc="0px",Ao=") ",px=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,f=i.rotationX,d=i.skewX,u=i.skewY,p=i.scaleX,g=i.scaleY,m=i.transformPerspective,x=i.force3D,v=i.target,T=i.zOrigin,y="",b=x==="auto"&&e&&e!==1||x===!0;if(T&&(f!==wo||h!==wo)){var M=parseFloat(h)*Ga,_=Math.sin(M),S=Math.cos(M),w;M=parseFloat(f)*Ga,w=Math.cos(M),o=lm(v,o,_*w*-T),a=lm(v,a,-Math.sin(M)*-T),l=lm(v,l,S*w*-T+T)}m!==Tc&&(y+="perspective("+m+Ao),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(b||o!==Tc||a!==Tc||l!==Tc)&&(y+=l!==Tc||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ao),c!==wo&&(y+="rotate("+c+Ao),h!==wo&&(y+="rotateY("+h+Ao),f!==wo&&(y+="rotateX("+f+Ao),(d!==wo||u!==wo)&&(y+="skew("+d+", "+u+Ao),(p!==1||g!==1)&&(y+="scale("+p+", "+g+Ao),v.style[Zt]=y||"translate(0, 0)"},xw=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,f=i.scaleX,d=i.scaleY,u=i.target,p=i.xOrigin,g=i.yOrigin,m=i.xOffset,x=i.yOffset,v=i.forceCSS,T=parseFloat(o),y=parseFloat(a),b,M,_,S,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ga,c*=Ga,b=Math.cos(l)*f,M=Math.sin(l)*f,_=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(h*=Ga,w=Math.tan(c-h),w=Math.sqrt(1+w*w),_*=w,S*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,M*=w)),b=ii(b),M=ii(M),_=ii(_),S=ii(S)):(b=f,S=d,M=_=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=Yr(u,"x",o,"px"),y=Yr(u,"y",a,"px")),(p||g||m||x)&&(T=ii(T+p-(p*b+g*_)+m),y=ii(y+g-(p*M+g*S)+x)),(n||r)&&(w=u.getBBox(),T=ii(T+n/100*w.width),y=ii(y+r/100*w.height)),w="matrix("+b+","+M+","+_+","+S+","+T+","+y+")",u.setAttribute("transform",w),v&&(u.style[Zt]=w)},vw=function(e,t,i,n,r){var o=360,a=Mi(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ro:1),c=l-n,h=n+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*K_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*K_)%o-~~(c/o)*o)),e._pt=d=new dn(e._pt,t,i,n,c,tw),d.e=h,d.u="deg",e._props.push(i),d},sx=function(e,t){for(var i in t)e[i]=t[i];return e},yw=function(e,t,i){var n=sx({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,f,d,u,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Zt]=t,a=wc(i,1),qr(i,Zt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Zt],o[Zt]=t,a=wc(i,1),o[Zt]=c);for(l in dr)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=zi(c),p=zi(h),f=u!==p?Yr(i,l,c,p):parseFloat(c),d=parseFloat(h),e._pt=new dn(e._pt,a,l,f,d-f,cm),e._pt.u=p||0,e._props.push(l));sx(a,n)};fn("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(a){return e<2?s+a:"border"+a+s});Mf[e>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(p){return fr(a,p,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(p,g){return u[p]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,u,f)}});var _m={name:"css",register:um,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,a=e.style,l=i.vars.startAt,c,h,f,d,u,p,g,m,x,v,T,y,b,M,_,S,w;dm||um(),this.styles=this.styles||lx(e),S=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Mn[g]&&im(g,t,i,n,e,r)))){if(u=typeof h,p=Mf[g],u==="function"&&(h=h.call(i,n,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=za(h)),p)p(this,e,g,h,i)&&(_=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",hr.lastIndex=0,hr.test(c)||(m=zi(c),x=zi(h),x?m!==x&&(c=Yr(e,g,c,x)+x):m&&(h+=m)),this.add(a,"setProperty",c,h,n,r,0,0,g),o.push(g),S.push(g,0,a[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,r):l[g],Mi(c)&&~c.indexOf("random(")&&(c=za(c)),zi(c+"")||c==="auto"||(c+=En.units[g]||zi(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),d=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),g in Bs&&(g==="autoAlpha"&&(d===1&&fr(e,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,a.visibility),Xr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Bs[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in dr,T){if(this.styles.save(g),w=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=Bn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=Bn(e,"perspective"),E?e.style.perspective=E:qr(e,"perspective")}f=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||wc(e,t.parseTransform),M=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new dn(this._pt,a,Zt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new dn(this._pt,b,"scaleY",b.scaleY,(v?To(b.scaleY,v+f):f)-b.scaleY||0,cm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(wn,0,a[wn]),h=mw(h),b.svg?fm(e,h,0,M,0,this):(x=parseFloat(h.split(" ")[2])||0,x!==b.zOrigin&&Xr(this,b,"zOrigin",b.zOrigin,x),Xr(this,a,g,bf(c),bf(h)));continue}else if(g==="svgOrigin"){fm(e,h,1,M,0,this);continue}else if(g in fx){vw(this,b,g,d,v?To(d,v+h):h);continue}else if(g==="smoothOrigin"){Xr(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){yw(this,h,e);continue}}else g in a||(g=Wa(g)||g);if(T||(f||f===0)&&(d||d===0)&&!ew.test(h)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),x=zi(h)||(g in En.units?En.units[g]:m),m!==x&&(d=Yr(e,g,c,x)),this._pt=new dn(this._pt,T?b:a,g,d,(v?To(d,v+f):f)-d,!T&&(x==="px"||g==="zIndex")&&t.autoRound!==!1?sw:cm),this._pt.u=x||0,T&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=nw):m!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=iw);else if(g in a)pw.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,n,r);else if(g!=="parseTransform"){_f(g,h);continue}T||(g in a?S.push(g,0,a[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),o.push(g)}}_&&am(this)},render:function(e,t){if(t.tween._time||!pm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:fr,aliases:Bs,getSetter:function(e,t,i){var n=Bs[t];return n&&n.indexOf(",")<0&&(t=n),t in dr&&t!==wn&&(e._gsap.x||fr(e,"x"))?i&&J_===i?t==="scale"?lw:aw:(J_=i||{})&&(t==="scale"?cw:hw):e.style&&!gf(e.style[t])?rw:~t.indexOf("-")?ow:Sf(e,t)},core:{_removeProperty:qr,_getMatrix:gm}};ji.utils.checkPrefix=Wa;ji.core.getStyleSaver=lx;(function(s,e,t,i){var n=fn(s+","+e+","+t,function(r){dr[r]=1});fn(e,function(r){En.units[r]="deg",fx[r]=1}),Bs[n[13]]=s+","+e,fn(i,function(r){var o=r.split(":");Bs[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){En.units[s]="px"});ji.registerPlugin(_m);var Bt=ji.registerPlugin(_m)||ji,dP=Bt.core.Tween;function mx(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function Sw(s,e,t){return e&&mx(s.prototype,e),t&&mx(s,t),s}var Hi,wf,Mw,An,$r,Zr,qa,_x,Po,Ya,xx,pr,_s,vx,yx=function(){return Hi||typeof window<"u"&&(Hi=window.gsap)&&Hi.registerPlugin&&Hi},Sx=1,Xa=[],ut=[],xs=[],Rc=Date.now,xm=function(e,t){return t},bw=function(){var e=Ya.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,ut),n.push.apply(n,xs),ut=i,xs=n,xm=function(o,a){return t[o](a)}},gr=function(e,t){return~xs.indexOf(e)&&xs[xs.indexOf(e)+1][t]},Cc=function(e){return!!~xx.indexOf(e)},mn=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:n!==!1,capture:!!r})},pn=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Tf="scrollLeft",Ef="scrollTop",vm=function(){return pr&&pr.isPressed||ut.cache++},Af=function(e,t){var i=function n(r){if(r||r===0){Sx&&An.history.scrollRestoration!=="manual"&&(An.history.scrollRestoration="manual");var o=pr&&pr.isPressed;r=n.v=Math.round(r)||(pr&&pr.iOS?1:0),e(r),n.cacheID=ut.cache,o&&xm("ss",r)}else(t||ut.cache!==n.cacheID||xm("ref"))&&(n.cacheID=ut.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},en={s:Tf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Af(function(s){return arguments.length?An.scrollTo(s,mi.sc()):An.pageXOffset||$r[Tf]||Zr[Tf]||qa[Tf]||0})},mi={s:Ef,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:en,sc:Af(function(s){return arguments.length?An.scrollTo(en.sc(),s):An.pageYOffset||$r[Ef]||Zr[Ef]||qa[Ef]||0})},gn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Hi.utils.toArray)(e)[0]||(typeof e=="string"&&Hi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Tw=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},mr=function(e,t){var i=t.s,n=t.sc;Cc(e)&&(e=$r.scrollingElement||Zr);var r=ut.indexOf(e),o=n===mi.sc?1:2;!~r&&(r=ut.push(e)-1),ut[r+o]||mn(e,"scroll",vm);var a=ut[r+o],l=a||(ut[r+o]=Af(gr(e,i),!0)||(Cc(e)?n:Af(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Hi.getProperty(e,"scrollBehavior")==="smooth"),l},Rf=function(e,t,i){var n=e,r=e,o=Rc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,g){var m=Rc();g||m-o>l?(r=n,n=p,a=o,o=m):i?n+=p:n=r+(p-r)/(m-a)*(o-a)},f=function(){r=n=i?0:n,a=o=0},d=function(p){var g=a,m=r,x=Rc();return(p||p===0)&&p!==n&&h(p),o===a||x-a>c?0:(n+(i?m:-m))/((i?x:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},Ac=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Mx=function(){Ya=Hi.core.globals().ScrollTrigger,Ya&&Ya.core&&bw()},bx=function(e){return Hi=e||yx(),!wf&&Hi&&typeof document<"u"&&document.body&&(An=window,$r=document,Zr=$r.documentElement,qa=$r.body,xx=[An,$r,Zr,qa],Mw=Hi.utils.clamp,vx=Hi.core.context||function(){},Po="onpointerenter"in qa?"pointer":"mouse",_x=ni.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_s=ni.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sx=0},500),wf=1),Ya||Mx(),wf};en.op=mi;ut.cache=0;var ni=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(i){wf||bx(Hi)||console.warn("Please gsap.registerPlugin(Observer)"),Ya||Mx();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,f=i.onStop,d=i.onStopDelay,u=i.ignore,p=i.wheelSpeed,g=i.event,m=i.onDragStart,x=i.onDragEnd,v=i.onDrag,T=i.onPress,y=i.onRelease,b=i.onRight,M=i.onLeft,_=i.onUp,S=i.onDown,w=i.onChangeX,E=i.onChangeY,D=i.onChange,P=i.onToggleX,N=i.onToggleY,R=i.onHover,U=i.onHoverEnd,k=i.onMove,O=i.ignoreCheck,Y=i.isNormalizer,W=i.onGestureStart,I=i.onGestureEnd,J=i.onWheel,de=i.onEnable,be=i.onDisable,H=i.onClick,X=i.scrollSpeed,ue=i.capture,ae=i.allowClicks,fe=i.lockAxis,Se=i.onLockAxis;this.target=a=gn(a)||Zr,this.vars=i,u&&(u=Hi.utils.toArray(u)),n=n||1e-9,r=r||0,p=p||1,X=X||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(An.getComputedStyle(qa).lineHeight)||22);var Ge,Ae,Ve,ye,Ce,et,re,V=this,Me=0,Ke=0,Fe=i.passive||!h&&i.passive!==!1,Be=mr(a,en),tt=mr(a,mi),je=Be(),z=tt(),st=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_s[0]==="pointerdown",te=Cc(a),oe=a.ownerDocument||$r,j=[0,0,0],Je=[0,0,0],Re=0,He=function(){return Re=Rc()},L=function(we,he){return(V.event=we)&&u&&Tw(we.target,u)||he&&st&&we.pointerType!=="touch"||O&&O(we,he)},A=function(){V._vx.reset(),V._vy.reset(),Ae.pause(),f&&f(V)},q=function(){var we=V.deltaX=gx(j),he=V.deltaY=gx(Je),le=Math.abs(we)>=n,Pe=Math.abs(he)>=n;D&&(le||Pe)&&D(V,we,he,j,Je),le&&(b&&V.deltaX>0&&b(V),M&&V.deltaX<0&&M(V),w&&w(V),P&&V.deltaX<0!=Me<0&&P(V),Me=V.deltaX,j[0]=j[1]=j[2]=0),Pe&&(S&&V.deltaY>0&&S(V),_&&V.deltaY<0&&_(V),E&&E(V),N&&V.deltaY<0!=Ke<0&&N(V),Ke=V.deltaY,Je[0]=Je[1]=Je[2]=0),(ye||Ve)&&(k&&k(V),Ve&&(m&&Ve===1&&m(V),v&&v(V),Ve=0),ye=!1),et&&!(et=!1)&&Se&&Se(V),Ce&&(J(V),Ce=!1),Ge=0},pe=function(we,he,le){j[le]+=we,Je[le]+=he,V._vx.update(we),V._vy.update(he),c?Ge||(Ge=requestAnimationFrame(q)):q()},ne=function(we,he){fe&&!re&&(V.axis=re=Math.abs(we)>Math.abs(he)?"x":"y",et=!0),re!=="y"&&(j[2]+=we,V._vx.update(we,!0)),re!=="x"&&(Je[2]+=he,V._vy.update(he,!0)),c?Ge||(Ge=requestAnimationFrame(q)):q()},ge=function(we){if(!L(we,1)){we=Ac(we,h);var he=we.clientX,le=we.clientY,Pe=he-V.x,ce=le-V.y,ke=V.isDragging;V.x=he,V.y=le,(ke||(Pe||ce)&&(Math.abs(V.startX-he)>=r||Math.abs(V.startY-le)>=r))&&(Ve||(Ve=ke?2:1),ke||(V.isDragging=!0),ne(Pe,ce))}},xe=V.onPress=function(_e){L(_e,1)||_e&&_e.button||(V.axis=re=null,Ae.pause(),V.isPressed=!0,_e=Ac(_e),Me=Ke=0,V.startX=V.x=_e.clientX,V.startY=V.y=_e.clientY,V._vx.reset(),V._vy.reset(),mn(Y?a:oe,_s[1],ge,Fe,!0),V.deltaX=V.deltaY=0,T&&T(V))},$=V.onRelease=function(_e){if(!L(_e,1)){pn(Y?a:oe,_s[1],ge,!0);var we=!isNaN(V.y-V.startY),he=V.isDragging,le=he&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Pe=Ac(_e);!le&&we&&(V._vx.reset(),V._vy.reset(),h&&ae&&Hi.delayedCall(.08,function(){if(Rc()-Re>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(oe.createEvent){var ce=oe.createEvent("MouseEvents");ce.initMouseEvent("click",!0,!0,An,1,Pe.screenX,Pe.screenY,Pe.clientX,Pe.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(ce)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&he&&!Y&&Ae.restart(!0),Ve&&q(),x&&he&&x(V),y&&y(V,le)}},ie=function(we){return we.touches&&we.touches.length>1&&(V.isGesturing=!0)&&W(we,V.isDragging)},me=function(){return(V.isGesturing=!1)||I(V)},B=function(we){if(!L(we)){var he=Be(),le=tt();pe((he-je)*X,(le-z)*X,1),je=he,z=le,f&&Ae.restart(!0)}},se=function(we){if(!L(we)){we=Ac(we,h),J&&(Ce=!0);var he=(we.deltaMode===1?l:we.deltaMode===2?An.innerHeight:1)*p;pe(we.deltaX*he,we.deltaY*he,0),f&&!Y&&Ae.restart(!0)}},ee=function(we){if(!L(we)){var he=we.clientX,le=we.clientY,Pe=he-V.x,ce=le-V.y;V.x=he,V.y=le,ye=!0,f&&Ae.restart(!0),(Pe||ce)&&ne(Pe,ce)}},Te=function(we){V.event=we,R(V)},ve=function(we){V.event=we,U(V)},Ee=function(we){return L(we)||Ac(we,h)&&H(V)};Ae=V._dc=Hi.delayedCall(d||.25,A).pause(),V.deltaX=V.deltaY=0,V._vx=Rf(0,50,!0),V._vy=Rf(0,50,!0),V.scrollX=Be,V.scrollY=tt,V.isDragging=V.isGesturing=V.isPressed=!1,vx(this),V.enable=function(_e){return V.isEnabled||(mn(te?oe:a,"scroll",vm),o.indexOf("scroll")>=0&&mn(te?oe:a,"scroll",B,Fe,ue),o.indexOf("wheel")>=0&&mn(a,"wheel",se,Fe,ue),(o.indexOf("touch")>=0&&_x||o.indexOf("pointer")>=0)&&(mn(a,_s[0],xe,Fe,ue),mn(oe,_s[2],$),mn(oe,_s[3],$),ae&&mn(a,"click",He,!0,!0),H&&mn(a,"click",Ee),W&&mn(oe,"gesturestart",ie),I&&mn(oe,"gestureend",me),R&&mn(a,Po+"enter",Te),U&&mn(a,Po+"leave",ve),k&&mn(a,Po+"move",ee)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ye=Ve=!1,V._vx.reset(),V._vy.reset(),je=Be(),z=tt(),_e&&_e.type&&xe(_e),de&&de(V)),V},V.disable=function(){V.isEnabled&&(Xa.filter(function(_e){return _e!==V&&Cc(_e.target)}).length||pn(te?oe:a,"scroll",vm),V.isPressed&&(V._vx.reset(),V._vy.reset(),pn(Y?a:oe,_s[1],ge,!0)),pn(te?oe:a,"scroll",B,ue),pn(a,"wheel",se,ue),pn(a,_s[0],xe,ue),pn(oe,_s[2],$),pn(oe,_s[3],$),pn(a,"click",He,!0),pn(a,"click",Ee),pn(oe,"gesturestart",ie),pn(oe,"gestureend",me),pn(a,Po+"enter",Te),pn(a,Po+"leave",ve),pn(a,Po+"move",ee),V.isEnabled=V.isPressed=V.isDragging=!1,be&&be(V))},V.kill=V.revert=function(){V.disable();var _e=Xa.indexOf(V);_e>=0&&Xa.splice(_e,1),pr===V&&(pr=0)},Xa.push(V),Y&&Cc(a)&&(pr=V),V.enable(g)},Sw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();ni.version="3.15.1";ni.create=function(s){return new ni(s)};ni.register=bx;ni.getAll=function(){return Xa.slice()};ni.getById=function(s){return Xa.filter(function(e){return e.vars.id===s})[0]};yx()&&Hi.registerPlugin(ni);var We,Ka,mt,Rt,Hn,At,Lm,Wf,Vc,Oc,Ic,Cf,tn,Yf,wm,xn,Tx,Ex,Qa,Hx,ym,Vx,_n,Am,Gx,Wx,Jr,Rm,Nm,ja,Um,Kr,Cm,Sm,Pf=1,nn=Date.now,Mm=nn(),ns=0,Dc=0,wx=function(e,t,i){var n=zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},Ax=function(e,t){return t&&(!zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ew=function s(){return Dc&&requestAnimationFrame(s)},Rx=function(){return Yf=1},Cx=function(){return Yf=0},ks=function(e){return e},Lc=function(e){return Math.round(e*1e5)/1e5||0},Xx=function(){return typeof window<"u"},qx=function(){return We||Xx()&&(We=window.gsap)&&We.registerPlugin&&We},Oo=function(e){return!!~Lm.indexOf(e)},Yx=function(e){return(e==="Height"?Um:mt["inner"+e])||Hn["client"+e]||At["client"+e]},$x=function(e){return gr(e,"getBoundingClientRect")||(Oo(e)?function(){return Gf.width=mt.innerWidth,Gf.height=Um,Gf}:function(){return _r(e)})},ww=function(e,t,i){var n=i.d,r=i.d2,o=i.a;return(o=gr(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?Yx(r):e["client"+r])||0}},Aw=function(e,t){return!t||~xs.indexOf(e)?$x(e):function(){return Gf}},zs=function(e,t){var i=t.s,n=t.d2,r=t.d,o=t.a;return Math.max(0,(i="scroll"+n)&&(o=gr(e,i))?o()-$x(e)()[r]:Oo(e)?(Hn[i]||At[i])-Yx(n):e[i]-e["offset"+n])},If=function(e,t){for(var i=0;i<Qa.length;i+=3)(!t||~t.indexOf(Qa[i+1]))&&e(Qa[i],Qa[i+1],Qa[i+2])},zn=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},Nc=function(e){return typeof e=="number"},Io=function(e){return typeof e=="object"},Pc=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},$a=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},Za=Math.abs,Zx="left",Jx="top",Om="right",Fm="bottom",Lo="width",No="height",Fc="Right",Bc="Left",kc="Top",zc="Bottom",gi="padding",ts="margin",tl="Width",Bm="Height",bi="px",is=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Rw=function(e){var t=is(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Px=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},_r=function(e,t){var i=t&&is(e)[wm]!=="matrix(1, 0, 0, 1, 0, 0)"&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Xf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Kx=function(e){var t=[],i=e.labels,n=e.duration(),r;for(r in i)t.push(i[r]/n);return t},Cw=function(e){return function(t){return We.utils.snap(Kx(e),t)}},km=function(e){var t=We.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return t(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=t(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Pw=function(e){return function(t,i){return km(Kx(e))(t,i.direction)}},Df=function(e,t,i,n){return i.split(",").forEach(function(r){return e(t,r,n)})},Di=function(e,t,i,n,r){return e.addEventListener(t,i,{passive:!n,capture:!!r})},Ii=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Lf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Ix={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nf={toggleActions:"play",anticipatePin:0},qf={top:0,left:0,center:.5,bottom:1,right:1},kf=function(e,t){if(zn(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in qf?qf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Uf=function(e,t,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,p=Rt.createElement("div"),g=Oo(i)||gr(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,x=g?At:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(n===mi?Om:Fm)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(p,x.children[0]):x.appendChild(p),p._offset=p["offset"+n.op.d2],zf(p,0,n,v),p},zf=function(e,t,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];e._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+tl]=1,r["border"+a+tl]=0,r[i.p]=t+"px",We.set(e,r)},pt=[],Pm={},Gc,Dx=function(){return nn()-ns>34&&(Gc||(Gc=requestAnimationFrame(xr)))},Ja=function(){(!_n||!_n.isPressed||_n.startX>At.clientWidth)&&(ut.cache++,_n?Gc||(Gc=requestAnimationFrame(xr)):xr(),ns||Bo("scrollStart"),ns=nn())},bm=function(){Wx=mt.innerWidth,Gx=mt.innerHeight},Uc=function(e){ut.cache++,(e===!0||!tn&&!Vx&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!Am||Wx!==mt.innerWidth||Math.abs(mt.innerHeight-Gx)>mt.innerHeight*.25))&&Wf.restart(!0)},Fo={},Iw=[],Qx=function s(){return Ii(ft,"scrollEnd",s)||Do(!0)},Bo=function(e){return Fo[e]&&Fo[e].map(function(t){return t()})||Iw},kn=[],jx=function(e){for(var t=0;t<kn.length;t+=5)(!e||kn[t+4]&&kn[t+4].query===e)&&(kn[t].style.cssText=kn[t+1],kn[t].getBBox&&kn[t].setAttribute("transform",kn[t+2]||""),kn[t+3].uncache=1)},ev=function(){ut.cache++,ut.forEach(function(e){return sn(e)&&(e.rec=e())})},zm=function(e,t){var i;for(xn=0;xn<pt.length;xn++)i=pt[xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Kr=!0,t&&jx(t),t||Bo("revert")},tv=function(e,t){ut.cache++,(t||!vn)&&ut.forEach(function(i){return sn(i)&&i.cacheID++&&(i.rec=0)}),zn(e)&&(Nm=e,mt.history.scrollRestoration!==e&&(mt.history.scrollRestoration=e))},vn,Uo=0,Lx,Dw=function(){if(Lx!==Uo){var e=Lx=Uo;requestAnimationFrame(function(){return e===Uo&&Do(!0)})}},iv=function(){At.appendChild(ja),Um=!_n&&ja.offsetHeight||mt.innerHeight,At.removeChild(ja)},Nx=function(e){return Vc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Do=function(e,t){if(Hn=Rt.documentElement,At=Rt.body,Lm=[mt,Rt,Hn,At],ns&&!e&&!Kr){Di(ft,"scrollEnd",Qx);return}iv(),vn=ft.isRefreshing=!0,Kr||ev();var i=Bo("refreshInit");Hx&&ft.sort(),t||zm(),ut.forEach(function(n){sn(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),pt.slice(0).forEach(function(n){return n.refresh()}),Kr=!1,pt.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),Cm=1,Nx(!0),pt.forEach(function(n){var r=zs(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),Nx(!1),Cm=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),ut.forEach(function(n){sn(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),tv(Nm,1),Wf.pause(),Uo++,vn=2,xr(2),pt.forEach(function(n){return sn(n.vars.onRefresh)&&n.vars.onRefresh(n)}),vn=ft.isRefreshing=!1,Bo("refresh")},Im=0,Hf=1,Hc,xr=function(e){if(e===2||!vn&&!Kr){ft.isUpdating=!0,Hc&&Hc.update(0);var t=pt.length,i=nn(),n=i-Mm>=50,r=t&&pt[0].scroll();if(Hf=Im>r?-1:1,vn||(Im=r),n&&(ns&&!Yf&&i-ns>200&&(ns=0,Bo("scrollEnd")),Ic=Mm,Mm=i),Hf<0){for(xn=t;xn-- >0;)pt[xn]&&pt[xn].update(0,n);Hf=1}else for(xn=0;xn<t;xn++)pt[xn]&&pt[xn].update(0,n);ft.isUpdating=!1}Gc=0},Dm=[Zx,Jx,Fm,Om,ts+zc,ts+Fc,ts+kc,ts+Bc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vf=Dm.concat([Lo,No,"boxSizing","max"+tl,"max"+Bm,"position",ts,gi,gi+kc,gi+Fc,gi+zc,gi+Bc]),Lw=function(e,t,i){el(i);var n=e._gsap;if(n.spacerIsNative)el(n.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Tm=function(e,t,i,n){if(!e._gsap.swappedIn){for(var r=Dm.length,o=t.style,a=e.style,l;r--;)l=Dm[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Fm]=a[Om]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Lo]=Xf(e,en)+bi,o[No]=Xf(e,mi)+bi,o[gi]=a[ts]=a[Jx]=a[Zx]="0",el(n),a[Lo]=a["max"+tl]=i[Lo],a[No]=a["max"+Bm]=i[No],a[gi]=i[gi],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Nw=/([A-Z])/g,el=function(e){if(e){var t=e.t.style,i=e.length,n=0,r,o;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;n<i;n+=2)o=e[n+1],r=e[n],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Nw,"-$1").toLowerCase())}},Of=function(e){for(var t=Vf.length,i=e.style,n=[],r=0;r<t;r++)n.push(Vf[r],i[Vf[r]]);return n.t=e,n},Uw=function(e,t,i){for(var n=[],r=e.length,o=i?8:0,a;o<r;o+=2)a=e[o],n.push(a,a in t?t[a]:e[o+1]);return n.t=e.t,n},Gf={left:0,top:0},Ux=function(e,t,i,n,r,o,a,l,c,h,f,d,u,p){sn(e)&&(e=e(l)),zn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?kf("0"+e.substr(3),i):0));var g=u?u.time():0,m,x,v;if(u&&u.seek(0),isNaN(e)||(e=+e),Nc(e))u&&(e=We.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&zf(a,i,n,!0);else{sn(t)&&(t=t(l));var T=(e||"0").split(" "),y,b,M,_;v=gn(t,l)||At,y=_r(v)||{},(!y||!y.left&&!y.top)&&is(v).display==="none"&&(_=v.style.display,v.style.display="block",y=_r(v),_?v.style.display=_:v.style.removeProperty("display")),b=kf(T[0],y[n.d]),M=kf(T[1]||"0",i),e=y[n.p]-c[n.p]-h+b+r-M,a&&zf(a,M,n,i-M<20||a._isStart&&M>20),i-=i-M}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+i,w=o._isStart;m="scroll"+n.d2,zf(o,S,n,w&&S>20||!w&&(f?Math.max(At[m],Hn[m]):o.parentNode[m])<=S+1),f&&(c=_r(a),f&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+bi))}return u&&v&&(m=_r(v),u.seek(d),x=_r(v),u._caScrollDist=m[n.p]-x[n.p],e=e/u._caScrollDist*d),u&&u.seek(g),u?e:Math.round(e)},Ow=/(webkit|moz|length|cssText|inset)/i,Ox=function(e,t,i,n){if(e.parentNode!==t){var r=e.style,o,a;if(t===At){e._stOrig=r.cssText,a=is(e);for(o in a)!+o&&!Ow.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=e._stOrig;We.core.getCache(e).uncache=1,t.appendChild(e)}},nv=function(e,t,i){var n=t,r=n;return function(o){var a=Math.round(e());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},Ff=function(e,t,i){var n={};n[t.p]="+="+i,We.set(e,n)},Fx=function(e,t){var i=mr(e,t),n="_scroll"+t.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,p={};c=c||i();var g=nv(i,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return g(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=We.to(e,l),d};return e[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Di(e,"wheel",i.wheelHandler),ft.isTouch&&Di(e,"touchmove",i.wheelHandler),r},ft=(function(){function s(t,i){Ka||s.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rm(this),this.init(t,i)}var e=s.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Dc){this.update=this.refresh=this.kill=ks;return}i=Px(zn(i)||Nc(i)||i.nodeType?{trigger:i}:i,Nf);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,x=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,b=r.pinReparent,M=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,w=r.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?en:mi,D=!f&&f!==0,P=gn(i.scroller||mt),N=We.core.getCache(P),R=Oo(P),U=("pinType"in i?i.pinType:gr(P,"pinType")||R&&"fixed")==="fixed",k=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=D&&i.toggleActions.split(" "),Y="markers"in i?i.markers:Nf.markers,W=R?0:parseFloat(is(P)["border"+E.p2+tl])||0,I=this,J=i.onRefreshInit&&function(){return i.onRefreshInit(I)},de=ww(P,R,E),be=Aw(P,R),H=0,X=0,ue=0,ae=mr(P,E),fe,Se,Ge,Ae,Ve,ye,Ce,et,re,V,Me,Ke,Fe,Be,tt,je,z,st,te,oe,j,Je,Re,He,L,A,q,pe,ne,ge,xe,$,ie,me,B,se,ee,Te,ve;if(I._startClamp=I._endClamp=!1,I._dir=E,m*=45,I.scroller=P,I.scroll=_?_.time.bind(_):ae,Ae=ae(),Kr&&ae.rec==null&&(ae.rec=Ae),I.vars=i,n=n||i.animation,"refreshPriority"in i&&(Hx=1,i.refreshPriority===-9999&&(Hc=I)),N.tweenScroll=N.tweenScroll||{top:Fx(P,mi),left:Fx(P,en)},I.tweenTo=fe=N.tweenScroll[E.p],I.scrubDuration=function(le){ie=Nc(le)&&le,ie?$?$.duration(le):$=We.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return x&&x(I)}}):($&&$.progress(1).kill(),$=0)},n&&(n.vars.lazy=!1,n._initted&&!I.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),I.animation=n.pause(),n.scrollTrigger=I,I.scrubDuration(f),ge=0,l||(l=n.vars.id)),y&&((!Io(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in At.style&&We.set(R?[At,Hn]:P,{scrollBehavior:"auto"}),ut.forEach(function(le){return sn(le)&&le.target===(R?Rt.scrollingElement||Hn:P)&&(le.smooth=!1)}),Ge=sn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Cw(n):y.snapTo==="labelsDirectional"?Pw(n):y.directional!==!1?function(le,Pe){return km(y.snapTo)(le,nn()-X<500?0:Pe.direction)}:We.utils.snap(y.snapTo),me=y.duration||{min:.1,max:2},me=Io(me)?Oc(me.min,me.max):Oc(me,me),B=We.delayedCall(y.delay||ie/2||.1,function(){var le=ae(),Pe=nn()-X<500,ce=fe.tween;if((Pe||Math.abs(I.getVelocity())<10)&&!ce&&!Yf&&H!==le){var ke=(le-ye)/Be,_t=n&&!D?n.totalProgress():ke,at=Pe?0:(_t-xe)/(nn()-Ic)*1e3||0,kt=We.utils.clamp(-ke,1-ke,Za(at/2)*at/.185),ci=ke+(y.inertia===!1?0:kt),zt,Dt,wt=y,_i=wt.onStart,Lt=wt.onInterrupt,Vi=wt.onComplete;if(zt=Ge(ci,I),Nc(zt)||(zt=ci),Dt=Math.max(0,Math.round(ye+zt*Be)),le<=Ce&&le>=ye&&Dt!==le){if(ce&&!ce._initted&&ce.data<=Za(Dt-le))return;y.inertia===!1&&(kt=zt-ke),fe(Dt,{duration:me(Za(Math.max(Za(ci-_t),Za(zt-_t))*.185/at/.05||0)),ease:y.ease||"power3",data:Za(Dt-le),onInterrupt:function(){return B.restart(!0)&&Lt&&$a(I,Lt)},onComplete:function(){I.update(),H=ae(),n&&!D&&($?$.resetTo("totalProgress",zt,n._tTime/n._tDur):n.progress(zt)),ge=xe=n&&!D?n.totalProgress():I.progress,v&&v(I),Vi&&$a(I,Vi)}},le,kt*Be,Dt-le-kt*Be),_i&&$a(I,_i,fe.tween)}}else I.isActive&&H!==le&&B.restart(!0)}).pause()),l&&(Pm[l]=I),d=I.trigger=gn(d||u!==!0&&u),ve=d&&d._gsap&&d._gsap.stRevert,ve&&(ve=ve(I)),u=u===!0?d:gn(u),zn(a)&&(a={targets:d,className:a}),u&&(p===!1||p===ts||(p=!p&&u.parentNode&&u.parentNode.style&&is(u.parentNode).display==="flex"?!1:gi),I.pin=u,Se=We.core.getCache(u),Se.spacer?tt=Se.pinState:(M&&(M=gn(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),Se.spacerIsNative=!!M,M&&(Se.spacerState=Of(M))),Se.spacer=st=M||Rt.createElement("div"),st.classList.add("pin-spacer"),l&&st.classList.add("pin-spacer-"+l),Se.pinState=tt=Of(u)),i.force3D!==!1&&We.set(u,{force3D:!0}),I.spacer=st=Se.spacer,ne=is(u),He=ne[p+E.os2],oe=We.getProperty(u),j=We.quickSetter(u,E.a,bi),Tm(u,st,ne),z=Of(u)),Y){Ke=Io(Y)?Px(Y,Ix):Ix,V=Uf("scroller-start",l,P,E,Ke,0),Me=Uf("scroller-end",l,P,E,Ke,0,V),te=V["offset"+E.op.d2];var Ee=gn(gr(P,"content")||P);et=this.markerStart=Uf("start",l,Ee,E,Ke,te,0,_),re=this.markerEnd=Uf("end",l,Ee,E,Ke,te,0,_),_&&(Te=We.quickSetter([et,re],E.a,bi)),!U&&!(xs.length&&gr(P,"fixedMarkers")===!0)&&(Rw(R?At:P),We.set([V,Me],{force3D:!0}),A=We.quickSetter(V,E.a,bi),pe=We.quickSetter(Me,E.a,bi))}if(_){var _e=_.vars.onUpdate,we=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){I.update(0,0,1),_e&&_e.apply(_,we||[])})}if(I.previous=function(){return pt[pt.indexOf(I)-1]},I.next=function(){return pt[pt.indexOf(I)+1]},I.revert=function(le,Pe){if(!Pe)return I.kill(!0);var ce=le!==!1||!I.enabled,ke=tn;ce!==I.isReverted&&(ce&&(se=Math.max(ae(),I.scroll.rec||0),ue=I.progress,ee=n&&n.progress()),et&&[et,re,V,Me].forEach(function(_t){return _t.style.display=ce?"none":"block"}),ce&&(tn=I,I.update(ce)),u&&(!b||!I.isActive)&&(ce?Lw(u,st,tt):Tm(u,st,is(u),L)),ce||I.update(ce),tn=ke,I.isReverted=ce)},I.refresh=function(le,Pe,ce,ke){if(!((tn||!I.enabled)&&!Pe)){if(u&&le&&ns){Di(s,"scrollEnd",Qx);return}!vn&&J&&J(I),tn=I,fe.tween&&!ce&&(fe.tween.kill(),fe.tween=0),$&&$.pause(),g&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Z){return Z.vars.immediateRender&&Z.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var _t=de(),at=be(),kt=_?_.duration():zs(P,E),ci=Be<=.01||!Be,zt=0,Dt=ke||0,wt=Io(ce)?ce.end:i.end,_i=i.endTrigger||d,Lt=Io(ce)?ce.start:i.start||(i.start===0||!d?0:u?"0 0":"0 100%"),Vi=I.pinnedContainer=i.pinnedContainer&&gn(i.pinnedContainer,I),Rn=d&&Math.max(0,pt.indexOf(I))||0,Kt=Rn,hi,xi,Cn,Ho,vi,Qt,Gn,ol,Kc,Mr,C,G,Q;for(Y&&Io(ce)&&(G=We.getProperty(V,E.p),Q=We.getProperty(Me,E.p));Kt-- >0;)Qt=pt[Kt],Qt.end||Qt.refresh(0,1)||(tn=I),Gn=Qt.pin,Gn&&(Gn===d||Gn===u||Gn===Vi)&&!Qt.isReverted&&(Mr||(Mr=[]),Mr.unshift(Qt),Qt.revert(!0,!0)),Qt!==pt[Kt]&&(Rn--,Kt--);for(sn(Lt)&&(Lt=Lt(I)),Lt=wx(Lt,"start",I),ye=Ux(Lt,d,_t,E,ae(),et,V,I,at,W,U,kt,_,I._startClamp&&"_startClamp")||(u?-.001:0),sn(wt)&&(wt=wt(I)),zn(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(zn(Lt)?Lt.split(" ")[0]:"")+wt:(zt=kf(wt.substr(2),_t),wt=zn(Lt)?Lt:(_?We.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,ye):ye)+zt,_i=d)),wt=wx(wt,"end",I),Ce=Math.max(ye,Ux(wt||(_i?"100% 0":kt),_i,_t,E,ae()+zt,re,Me,I,at,W,U,kt,_,I._endClamp&&"_endClamp"))||-.001,zt=0,Kt=Rn;Kt--;)Qt=pt[Kt]||{},Gn=Qt.pin,Gn&&Qt.start-Qt._pinPush<=ye&&!_&&Qt.end>0&&(hi=Qt.end-(I._startClamp?Math.max(0,Qt.start):Qt.start),(Gn===d&&Qt.start-Qt._pinPush<ye||Gn===Vi)&&isNaN(Lt)&&(zt+=hi*(1-Qt.progress)),Gn===u&&(Dt+=hi));if(ye+=zt,Ce+=zt,I._startClamp&&(I._startClamp+=zt),I._endClamp&&!vn&&(I._endClamp=Ce||-.001,Ce=Math.min(Ce,zs(P,E))),Be=Ce-ye||(ye-=.01)&&.001,ci&&(ue=We.utils.clamp(0,1,We.utils.normalize(ye,Ce,se))),I._pinPush=Dt,et&&zt&&(hi={},hi[E.a]="+="+zt,Vi&&(hi[E.p]="-="+ae()),We.set([et,re],hi)),u&&!(Cm&&I.end>=zs(P,E)))hi=is(u),Ho=E===mi,Cn=ae(),Je=parseFloat(oe(E.a))+Dt,!kt&&Ce>1&&(C=(R?Rt.scrollingElement||Hn:P).style,C={style:C,value:C["overflow"+E.a.toUpperCase()]},R&&is(At)["overflow"+E.a.toUpperCase()]!=="scroll"&&(C.style["overflow"+E.a.toUpperCase()]="scroll")),Tm(u,st,hi),z=Of(u),xi=_r(u,!0),ol=U&&mr(P,Ho?en:mi)(),p?(L=[p+E.os2,Be+Dt+bi],L.t=st,Kt=p===gi?Xf(u,E)+Be+Dt:0,Kt&&(L.push(E.d,Kt+bi),st.style.flexBasis!=="auto"&&(st.style.flexBasis=Kt+bi)),el(L),Vi&&pt.forEach(function(Z){Z.pin===Vi&&Z.vars.pinSpacing!==!1&&(Z._subPinOffset=!0)}),U&&ae(se)):(Kt=Xf(u,E),Kt&&st.style.flexBasis!=="auto"&&(st.style.flexBasis=Kt+bi)),U&&(vi={top:xi.top+(Ho?Cn-ye:ol)+bi,left:xi.left+(Ho?ol:Cn-ye)+bi,boxSizing:"border-box",position:"fixed"},vi[Lo]=vi["max"+tl]=Math.ceil(xi.width)+bi,vi[No]=vi["max"+Bm]=Math.ceil(xi.height)+bi,vi[ts]=vi[ts+kc]=vi[ts+Fc]=vi[ts+zc]=vi[ts+Bc]="0",vi[gi]=hi[gi],vi[gi+kc]=hi[gi+kc],vi[gi+Fc]=hi[gi+Fc],vi[gi+zc]=hi[gi+zc],vi[gi+Bc]=hi[gi+Bc],je=Uw(tt,vi,b),vn&&ae(0)),n?(Kc=n._initted,ym(1),n.render(n.duration(),!0,!0),Re=oe(E.a)-Je+Be+Dt,q=Math.abs(Be-Re)>1,U&&q&&je.splice(je.length-2,2),n.render(0,!0,!0),Kc||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ym(0)):Re=Be,C&&(C.value?C.style["overflow"+E.a.toUpperCase()]=C.value:C.style.removeProperty("overflow-"+E.a));else if(d&&ae()&&!_)for(xi=d.parentNode;xi&&xi!==At;)xi._pinOffset&&(ye-=xi._pinOffset,Ce-=xi._pinOffset),xi=xi.parentNode;Mr&&Mr.forEach(function(Z){return Z.revert(!1,!0)}),I.start=ye,I.end=Ce,Ae=Ve=vn?se:ae(),!_&&!vn&&!Kr&&(Ae<se&&ae(se),I.scroll.rec=0),I.revert(!1,!0),X=nn(),B&&(H=-1,B.restart(!0)),tn=0,n&&D&&(n._initted||ee)&&n.progress()!==ee&&n.progress(ee||0,!0).render(n.time(),!0,!0),(ci||ue!==I.progress||_||g||n&&!n._initted)&&(n&&!D&&(n._initted||ue||n.vars.immediateRender!==!1)&&n.totalProgress(_&&ye<-.001&&!ue?We.utils.normalize(ye,Ce,0):ue,!0),I.progress=ci||(Ae-ye)/Be===ue?0:ue),u&&p&&(st._pinOffset=Math.round(I.progress*Re)),$&&$.invalidate(),isNaN(G)||(G-=We.getProperty(V,E.p),Q-=We.getProperty(Me,E.p),Ff(V,E,G),Ff(et,E,G-(ke||0)),Ff(Me,E,Q),Ff(re,E,Q-(ke||0))),ci&&!vn&&I.update(),h&&!vn&&!Fe&&(Fe=!0,h(I),Fe=!1)}},I.getVelocity=function(){return(ae()-Ve)/(nn()-Ic)*1e3||0},I.endAnimation=function(){Pc(I.callbackAnimation),n&&($?$.progress(1):n.paused()?D||Pc(n,I.direction<0,1):Pc(n,n.reversed()))},I.labelToScroll=function(le){return n&&n.labels&&(ye||I.refresh()||ye)+n.labels[le]/n.duration()*Be||0},I.getTrailing=function(le){var Pe=pt.indexOf(I),ce=I.direction>0?pt.slice(0,Pe).reverse():pt.slice(Pe+1);return(zn(le)?ce.filter(function(ke){return ke.vars.preventOverlaps===le}):ce).filter(function(ke){return I.direction>0?ke.end<=ye:ke.start>=Ce})},I.update=function(le,Pe,ce){if(!(_&&!ce&&!le)){var ke=vn===!0?se:I.scroll(),_t=le?0:(ke-ye)/Be,at=_t<0?0:_t>1?1:_t||0,kt=I.progress,ci,zt,Dt,wt,_i,Lt,Vi,Rn;if(Pe&&(Ve=Ae,Ae=_?ae():ke,y&&(xe=ge,ge=n&&!D?n.totalProgress():at)),m&&u&&!tn&&!Pf&&ns&&(!at&&ye<ke+(ke-Ve)/(nn()-Ic)*m?at=1e-4:at===1&&Ce>ke+(ke-Ve)/(nn()-Ic)*m&&(at=.9999)),at!==kt&&I.enabled){if(ci=I.isActive=!!at&&at<1,zt=!!kt&&kt<1,Lt=ci!==zt,_i=Lt||!!at!=!!kt,I.direction=at>kt?1:-1,I.progress=at,_i&&!tn&&(Dt=at&&!kt?0:at===1?1:kt===1?2:3,D&&(wt=!Lt&&O[Dt+1]!=="none"&&O[Dt+1]||O[Dt],Rn=n&&(wt==="complete"||wt==="reset"||wt in n))),w&&(Lt||Rn)&&(Rn||f||!n)&&(sn(w)?w(I):I.getTrailing(w).forEach(function(Cn){return Cn.endAnimation()})),D||($&&!tn&&!Pf?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",at,n._tTime/n._tDur):($.vars.totalProgress=at,$.invalidate().restart())):n&&n.totalProgress(at,!!(tn&&(X||le)))),u){if(le&&p&&(st.style[p+E.os2]=He),!U)j(Lc(Je+Re*at));else if(_i){if(Vi=!le&&at>kt&&Ce+1>ke&&ke+1>=zs(P,E),b)if(!le&&(ci||Vi)){var Kt=_r(u,!0),hi=ke-ye;Ox(u,At,Kt.top+(E===mi?hi:0)+bi,Kt.left+(E===mi?0:hi)+bi)}else Ox(u,st);el(ci||Vi?je:z),q&&at<1&&ci||j(Je+(at===1&&!Vi?Re:0))}}y&&!fe.tween&&!tn&&!Pf&&B.restart(!0),a&&(Lt||T&&at&&(at<1||!Sm))&&Vc(a.targets).forEach(function(Cn){return Cn.classList[ci||T?"add":"remove"](a.className)}),o&&!D&&!le&&o(I),_i&&!tn?(D&&(Rn&&(wt==="complete"?n.pause().totalProgress(1):wt==="reset"?n.restart(!0).pause():wt==="restart"?n.restart(!0):n[wt]()),o&&o(I)),(Lt||!Sm)&&(c&&Lt&&$a(I,c),k[Dt]&&$a(I,k[Dt]),T&&(at===1?I.kill(!1,1):k[Dt]=0),Lt||(Dt=at===1?1:3,k[Dt]&&$a(I,k[Dt]))),S&&!ci&&Math.abs(I.getVelocity())>(Nc(S)?S:2500)&&(Pc(I.callbackAnimation),$?$.progress(1):Pc(n,wt==="reverse"?1:!at,1))):D&&o&&!tn&&o(I)}if(pe){var xi=_?ke/_.duration()*(_._caScrollDist||0):ke;A(xi+(V._isFlipped?1:0)),pe(xi)}Te&&Te(-ke/_.duration()*(_._caScrollDist||0))}},I.enable=function(le,Pe){I.enabled||(I.enabled=!0,Di(P,"resize",Uc),R||Di(P,"scroll",Ja),J&&Di(s,"refreshInit",J),le!==!1&&(I.progress=ue=0,Ae=Ve=H=ae()),Pe!==!1&&I.refresh())},I.getTween=function(le){return le&&fe?fe.tween:$},I.setPositions=function(le,Pe,ce,ke){if(_){var _t=_.scrollTrigger,at=_.duration(),kt=_t.end-_t.start;le=_t.start+kt*le/at,Pe=_t.start+kt*Pe/at}I.refresh(!1,!1,{start:Ax(le,ce&&!!I._startClamp),end:Ax(Pe,ce&&!!I._endClamp)},ke),I.update()},I.adjustPinSpacing=function(le){if(L&&le){var Pe=L.indexOf(E.d)+1;L[Pe]=parseFloat(L[Pe])+le+bi,L[1]=parseFloat(L[1])+le+bi,el(L)}},I.disable=function(le,Pe){if(le!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Pe||$&&$.pause(),se=0,Se&&(Se.uncache=1),J&&Ii(s,"refreshInit",J),B&&(B.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!R)){for(var ce=pt.length;ce--;)if(pt[ce].scroller===P&&pt[ce]!==I)return;Ii(P,"resize",Uc),R||Ii(P,"scroll",Ja)}},I.kill=function(le,Pe){I.disable(le,Pe),$&&!Pe&&$.kill(),l&&delete Pm[l];var ce=pt.indexOf(I);ce>=0&&pt.splice(ce,1),ce===xn&&Hf>0&&xn--,ce=0,pt.forEach(function(ke){return ke.scroller===I.scroller&&(ce=1)}),ce||vn||Kr||(I.scroll.rec=0),n&&(n.scrollTrigger=null,le&&n.revert({kill:!1}),Pe||n.kill()),et&&[et,re,V,Me].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Hc===I&&(Hc=0),u&&(Se&&(Se.uncache=1),ce=0,pt.forEach(function(ke){return ke.pin===u&&ce++}),ce||(Se.spacer=0)),i.onKill&&i.onKill(I)},pt.push(I),I.enable(!1,!1),ve&&ve(I),n&&n.add&&!Be){var he=I.update;I.update=function(){I.update=he,ut.cache++,ye||Ce||I.refresh()},We.delayedCall(.01,I.update),Be=.01,ye=Ce=0}else I.refresh();u&&Dw()},s.register=function(i){return Ka||(We=i||qx(),Xx()&&window.document&&s.enable(),Ka=Dc),Ka},s.defaults=function(i){if(i)for(var n in i)Nf[n]=i[n];return Nf},s.disable=function(i,n){Dc=0,pt.forEach(function(o){return o[n?"kill":"disable"](i)}),Ii(mt,"wheel",Ja),Ii(Rt,"scroll",Ja),clearInterval(Cf),Ii(Rt,"touchcancel",ks),Ii(At,"touchstart",ks),Df(Ii,Rt,"pointerdown,touchstart,mousedown",Rx),Df(Ii,Rt,"pointerup,touchend,mouseup",Cx),Wf.kill(),If(Ii);for(var r=0;r<ut.length;r+=3)Lf(Ii,ut[r],ut[r+1]),Lf(Ii,ut[r],ut[r+2])},s.enable=function(){if(mt=window,Rt=document,Hn=Rt.documentElement,At=Rt.body,We){if(Vc=We.utils.toArray,Oc=We.utils.clamp,Rm=We.core.context||ks,ym=We.core.suppressOverwrites||ks,Nm=mt.history.scrollRestoration||"auto",Im=mt.pageYOffset||0,We.core.globals("ScrollTrigger",s),At){Dc=1,ja=document.createElement("div"),ja.style.height="100vh",ja.style.position="absolute",iv(),Ew(),ni.register(We),s.isTouch=ni.isTouch,Jr=ni.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Am=ni.isTouch===1,Di(mt,"wheel",Ja),Lm=[mt,Rt,Hn,At],We.matchMedia?(s.matchMedia=function(h){var f=We.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},We.addEventListener("matchMediaInit",function(){ev(),zm()}),We.addEventListener("matchMediaRevert",function(){return jx()}),We.addEventListener("matchMedia",function(){Do(0,1),Bo("matchMedia")}),We.matchMedia().add("(orientation: portrait)",function(){return bm(),bm})):console.warn("Requires GSAP 3.11.0 or later"),bm(),Di(Rt,"scroll",Ja);var i=At.hasAttribute("style"),n=At.style,r=n.borderTopStyle,o=We.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=_r(At),mi.m=Math.round(a.top+mi.sc())||0,en.m=Math.round(a.left+en.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(At.setAttribute("style",""),At.removeAttribute("style")),Cf=setInterval(Dx,250),We.delayedCall(.5,function(){return Pf=0}),Di(Rt,"touchcancel",ks),Di(At,"touchstart",ks),Df(Di,Rt,"pointerdown,touchstart,mousedown",Rx),Df(Di,Rt,"pointerup,touchend,mouseup",Cx),wm=We.utils.checkPrefix("transform"),Vf.push(wm),Ka=nn(),Wf=We.delayedCall(.2,Do).pause(),Qa=[Rt,"visibilitychange",function(){var h=mt.innerWidth,f=mt.innerHeight;Rt.hidden?(Tx=h,Ex=f):(Tx!==h||Ex!==f)&&Uc()},Rt,"DOMContentLoaded",Do,mt,"load",Do,mt,"resize",Uc],If(Di),pt.forEach(function(h){return h.enable(0,1)}),l=0;l<ut.length;l+=3)Lf(Ii,ut[l],ut[l+1]),Lf(Ii,ut[l],ut[l+2])}else if(Rt){var c=function h(){s.enable(),Rt.removeEventListener("DOMContentLoaded",h)};Rt.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(Sm=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Cf)||(Cf=n)&&setInterval(Dx,n),"ignoreMobileResize"in i&&(Am=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(If(Ii)||If(Di,i.autoRefreshEvents||"none"),Vx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=gn(i),o=ut.indexOf(r),a=Oo(r);~o&&ut.splice(o,a?6:2),n&&(a?xs.unshift(mt,n,At,n,Hn,n):xs.unshift(r,n))},s.clearMatchMedia=function(i){pt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(zn(i)?gn(i):i).getBoundingClientRect(),a=o[r?Lo:No]*n||0;return r?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},s.positionInViewport=function(i,n,r){zn(i)&&(i=gn(i));var o=i.getBoundingClientRect(),a=o[r?Lo:No],l=n==null?a/2:n in qf?qf[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},s.killAll=function(i){if(pt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=Fo.killAll||[];Fo={},n.forEach(function(r){return r()})}},s})();ft.version="3.15.1";ft.saveStyles=function(s){return s?Vc(s).forEach(function(e){if(e&&e.style){var t=kn.indexOf(e);t>=0&&kn.splice(t,5),kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),We.core.getCache(e),Rm())}}):kn};ft.revert=function(s,e){return zm(!s,e)};ft.create=function(s,e){return new ft(s,e)};ft.refresh=function(s){return s?Uc(!0):(Ka||ft.register())&&Do(!0)};ft.update=function(s){return++ut.cache&&xr(s===!0?2:0)};ft.clearScrollMemory=tv;ft.maxScroll=function(s,e){return zs(s,e?en:mi)};ft.getScrollFunc=function(s,e){return mr(gn(s),e?en:mi)};ft.getById=function(s){return Pm[s]};ft.getAll=function(){return pt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!ns};ft.snapDirectional=km;ft.addEventListener=function(s,e){var t=Fo[s]||(Fo[s]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(s,e){var t=Fo[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ft.batch=function(s,e){var t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=We.delayedCall(n,function(){h(f,d),f=[],d=[]}).pause();return function(p){f.length||u.restart(!0),f.push(p.trigger),d.push(p),r<=f.length&&u.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return sn(r)&&(r=r(),Di(ft,"refresh",function(){return r=e.batchMax()})),Vc(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ft.create(c))}),t};var Bx=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},Em=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(ni.isTouch?" pinch-zoom":""):"none",e===Hn&&s(At,t)},Bf={auto:1,scroll:1},Fw=function(e){var t=e.event,i=e.target,n=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||We.core.getCache(r),a=nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Bf[(l=is(r)).overflowY]||Bf[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!Oo(r)&&(Bf[(l=is(r)).overflowY]||Bf[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sv=function(e,t,i,n){return ni.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&Fw,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Di(Rt,ni.eventTypes[0],zx,!1,!0)},onDisable:function(){return Ii(Rt,ni.eventTypes[0],zx,!0)}})},Bw=/(input|label|select|textarea)/i,kx,zx=function(e){var t=Bw.test(e.target.tagName);(t||kx)&&(e._gsapAllow=!0,kx=t)},kw=function(e){Io(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=gn(e.target)||Hn,h=We.core.globals().ScrollSmoother,f=h&&h.get(),d=Jr&&(e.content&&gn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=mr(c,mi),p=mr(c,en),g=1,m=(ni.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,x=0,v=sn(n)?function(){return n(a)}:function(){return n||2.8},T,y,b=sv(c,e.type,!0,r),M=function(){return y=!1},_=ks,S=ks,w=function(){l=zs(c,mi),S=Oc(Jr?1:0,l),i&&(_=Oc(0,zs(c,en))),T=Uo},E=function(){d._gsap.y=Lc(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(M);var Y=Lc(a.deltaY/2),W=S(u.v-Y);if(d&&W!==u.v+u.offset){u.offset=W-u.v;var I=Lc((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",u.cacheID=ut.cache,xr()}return!0}u.offset&&E(),y=!0},P,N,R,U,k=function(){w(),P.isActive()&&P.vars.scrollY>l&&(u()>l?P.progress(1)&&u(l):P.resetTo("scrollY",l))};return d&&We.set(d,{y:"+=0"}),e.ignoreCheck=function(O){return Jr&&O.type==="touchmove"&&D(O)||g>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=g;g=Lc((mt.visualViewport&&mt.visualViewport.scale||1)/m),P.pause(),O!==g&&Em(c,g>1.01?!0:i?!1:"x"),N=p(),R=u(),w(),T=Uo},e.onRelease=e.onGestureStart=function(O,Y){if(u.offset&&E(),!Y)U.restart(!0);else{ut.cache++;var W=v(),I,J;i&&(I=p(),J=I+W*.05*-O.velocityX/.227,W*=Bx(p,I,J,zs(c,en)),P.vars.scrollX=_(J)),I=u(),J=I+W*.05*-O.velocityY/.227,W*=Bx(u,I,J,zs(c,mi)),P.vars.scrollY=S(J),P.invalidate().duration(W).play(.01),(Jr&&P.vars.scrollY>=l||I>=l-1)&&We.to({},{onUpdate:k,duration:W})}o&&o(O)},e.onWheel=function(){P._ts&&P.pause(),nn()-x>1e3&&(T=0,x=nn())},e.onChange=function(O,Y,W,I,J){if(Uo!==T&&w(),Y&&i&&p(_(I[2]===Y?N+(O.startX-O.x):p()+Y-I[1])),W){u.offset&&E();var de=J[2]===W,be=de?R+O.startY-O.y:u()+W-J[1],H=S(be);de&&be!==H&&(R+=H-be),u(H)}(W||Y)&&xr()},e.onEnable=function(){Em(c,i?!1:"x"),ft.addEventListener("refresh",k),Di(mt,"resize",k),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Em(c,!0),Ii(mt,"resize",k),ft.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new ni(e),a.iOS=Jr,Jr&&!u()&&u(1),Jr&&We.ticker.add(ks),U=a._dc,P=We.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:nv(u,u(),function(){return P.pause()})},onUpdate:xr,onComplete:U.vars.onComplete}),a};ft.sort=function(s){if(sn(s))return pt.sort(s);var e=mt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+mt.innerHeight}),pt.sort(s||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ft.observe=function(s){return new ni(s)};ft.normalizeScroll=function(s){if(typeof s>"u")return _n;if(s===!0&&_n)return _n.enable();if(s===!1){_n&&_n.kill(),_n=s;return}var e=s instanceof ni?s:kw(s);return _n&&_n.target===e.target&&_n.kill(),Oo(e.target)&&(_n=e),e};ft.core={_getVelocityProp:Rf,_inputObserver:sv,_scrollers:ut,_proxies:xs,bridge:{ss:function(){ns||Bo("scrollStart"),ns=nn()},ref:function(){return tn}}};qx()&&We.registerPlugin(ft);var Wc,Xc,rv=typeof Symbol=="function"?Symbol():"_split",Vm,zw=()=>Vm||Jf.register(window.gsap),ov=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,qc=s=>s?typeof s=="string"?qc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...qc(t)):e.push(t),e),[]):[s]:[],av=s=>qc(s).filter(e=>e&&e.nodeType===1),$f=[],Hm=function(){},Hw={add:s=>s()},Vw=/\s+/g,lv=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Zf={left:0,top:0,width:0,height:0},Gw=(s,e)=>{for(;++e<s.length&&s[e]===Zf;);return s[e]||Zf},cv=({element:s,html:e,ariaL:t,ariaH:i})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},hv=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||$f),i=s.length,n,r,o,a;if(t.size)for(;--i>-1;){r=s[i];for(o of t)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},uv=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),il=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),Gm=(s,e,t)=>{let i=e[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=e,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let f=document.createElement(n),d=t.length+1;return i&&(f.className=i+(l?" "+i+d:"")),o&&f.style.setProperty("--"+s,d+""),r!=="none"&&f.setAttribute("aria-hidden","true"),n!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=h,t.push(f),f};return l&&(i=i.replace("++","")),c.collection=t,c},Ww=(s,e,t,i)=>{let n=Gm("line",t,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},fv=(s,e,t,i,n,r,o,a,l,c)=>{var h;let f=Array.from(s.childNodes),d=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:g}=e,m=s.getBoundingClientRect(),x=m,v=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",T=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=t.collection,M,_,S,w,E,D,P,N,R,U,k,O,Y,W,I,J,de,be;for(typeof u=="object"?(S=u.delimiter||u,_=u.replaceWith||""):_=u===""?"":u||" ",M=_!==" ";d<f.length;d++)if(w=f[d],w.nodeType===3){for(I=w.textContent||"",p?I=I.replace(Vw," "):v&&(I=I.replace(/\n/g,_+`
`)),g&&(I=g(I,s)),w.textContent=I,E=_||S?I.split(S||_):I.match(a)||$f,de=E[E.length-1],N=M?de.slice(-1)===" ":!de,de||E.pop(),x=m,P=M?E[0].charAt(0)===" ":!E[0],P&&il(" ",s,w),E[0]||E.shift(),hv(E,l),r&&c||(w.textContent=""),R=1;R<=E.length;R++)if(J=E[R-1],!p&&v&&J.charAt(0)===`
`&&((h=w.previousSibling)==null||h.remove(),il(document.createElement("br"),s,w),J=J.slice(1)),!p&&J==="")il(_,s,w);else if(J===" ")s.insertBefore(document.createTextNode(" "),w);else{if(M&&J.charAt(0)===" "&&il(" ",s,w),y&&R===1&&!P&&b.indexOf(y.parentNode)>-1?(D=b[b.length-1],D.appendChild(document.createTextNode(i?"":J))):(D=t(i?"":J),il(D,s,w),y&&R===1&&!P&&D.insertBefore(y,D.firstChild)),i){if(k=ov?hv([...ov.segment(J)].map(H=>H.segment),l):J.match(a)||$f,l){let H=J.match(l);H&&H.some(X=>k.indexOf(X)<0)&&(k=J.match(a)||$f)}for(be=0;be<k.length;be++)D.appendChild(k[be]===" "?document.createTextNode(" "):i(k[be]))}if(r&&c){if(I=w.textContent=I.substring(J.length+1,I.length),U=D.getBoundingClientRect(),U.top>x.top&&(T?U.left>=x.left:U.left<=x.left)){for(O=s.cloneNode(),Y=s.childNodes[0];Y&&Y!==D;)W=Y,Y=Y.nextSibling,O.appendChild(W);s.parentNode.insertBefore(O,s),n&&uv(O)}x=U}(R<E.length||N)&&il(R>=E.length?" ":M&&J.slice(-1)===" "?" "+_:_,s,w)}s.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(b.indexOf(w.previousSibling)>-1&&b[b.length-1].appendChild(w),y=w):(fv(w,e,t,i,n,r,o,a,l,!0),y=0),n&&uv(w))},dv=class pv{constructor(e,t){this.isSplit=!1,zw(),this.elements=av(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(r=>{var o;t.overwrite!==!1&&((o=r[rv])==null||o._data.orig.filter(({element:a})=>a===r).forEach(cv)),r[rv]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},Hm(this),this.split(t)}split(e){return(this._ctx||Hw).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,d=t.indexOf("words")>-1,u=f&&!d&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=p?new RegExp(p.source+"|"+lv.source,"gu"):lv,m=!!e.ignore&&av(e.ignore),{orig:x,animTime:v,obs:T}=this._data,y;(f||d||h)&&(this.elements.forEach((b,M)=>{x[M]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},i==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):i==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],w=[],E=f?Gm("char",e,_):null,D=Gm("word",e,S),P,N,R,U;if(fv(b,e,D,E,u,n&&(h||u),m,g,p,!1),h){let k=qc(b.childNodes),O=Ww(b,k,e,w),Y,W=[],I=0,J=window.getComputedStyle(b).direction==="rtl",de=k.map(X=>X.nodeType===1?X.getBoundingClientRect():Zf),be=Zf,H;for(P=0;P<k.length;P++)Y=k[P],Y.nodeType===1&&(Y.nodeName==="BR"?((!P||k[P-1].nodeName!=="BR")&&(W.push(Y),O(I,P+1)),I=P+1,be=Gw(de,P)):(H=de[P],P&&H.top>be.top&&(J?H.left+H.width>be.left+1:H.left<be.left+be.width-1)&&(O(I,P),I=P),be=H));I<P&&O(I,P),W.forEach(X=>{var ue;return(ue=X.parentNode)==null?void 0:ue.removeChild(X)})}if(!d){for(P=0;P<S.length;P++)if(N=S[P],f||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!h){for(R=document.createElement("span"),R.style.whiteSpace="nowrap";N.firstChild;)R.appendChild(N.firstChild);N.replaceWith(R)}else N.replaceWith(...N.childNodes);else U=N.nextSibling,U&&U.nodeType===3&&(U.textContent=(N.textContent||"")+(U.textContent||""),N.remove());S.length=0,b.normalize()}this.lines.push(...w),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let M=b.cloneNode();return b.replaceWith(M),M.appendChild(b),b.className&&(M.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),M.style.overflow="clip",M.style.verticalAlign="top",M}))),this.isSplit=!0,Xc&&h&&a&&Xc.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,M)=>{x[M].width=b.offsetWidth,T&&T.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),Xc?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(cv),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new pv(e,t)}static register(e){Wc=Wc||e||window.gsap,Wc&&(qc=Wc.utils.toArray,Hm=Wc.core.context||Hm),!Vm&&window.innerWidth>0&&(Xc=document.fonts,Vm=!0)}};dv.version="3.15.1";var Jf=dv;var mv="1.3.28";function xv(s,e,t){return Math.max(s,Math.min(e,t))}function Xw(s,e,t){return(1-t)*s+t*e}function qw(s,e,t,i){return Xw(s,e,1-Math.exp(-t*i))}function Yw(s,e){return(s%e+e)%e}var $w=class{constructor(){qe(this,"isRunning",!1);qe(this,"value",0);qe(this,"from",0);qe(this,"to",0);qe(this,"currentTime",0);qe(this,"lerp");qe(this,"duration");qe(this,"easing");qe(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=xv(0,this.currentTime/this.duration,1);e=t>=1;let i=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=qw(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Zw(s,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,i)},e)}}var Jw=class{constructor(s,e,{autoResize:t=!0,debounce:i=250}={}){qe(this,"wrapper");qe(this,"content");qe(this,"width",0);qe(this,"height",0);qe(this,"scrollHeight",0);qe(this,"scrollWidth",0);qe(this,"debouncedResize");qe(this,"wrapperResizeObserver");qe(this,"contentResizeObserver");qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Zw(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},vv=class{constructor(){qe(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let i=0,n=t.length;i<n;i++)t[i]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Kw=100/6,Qr={passive:!1};function gv(s,e){return s===1?Kw:s===2?e:1}var Qw=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){qe(this,"element");qe(this,"options");qe(this,"touchStart",{x:0,y:0});qe(this,"lastDelta",{x:0,y:0});qe(this,"window",{width:0,height:0});qe(this,"emitter",new vv);qe(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});qe(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});qe(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});qe(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:i}=s,n=gv(i,this.window.width),r=gv(i,this.window.height);e*=n,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Qr),this.element.addEventListener("touchstart",this.onTouchStart,Qr),this.element.addEventListener("touchmove",this.onTouchMove,Qr),this.element.addEventListener("touchend",this.onTouchEnd,Qr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Qr),this.element.removeEventListener("touchstart",this.onTouchStart,Qr),this.element.removeEventListener("touchmove",this.onTouchMove,Qr),this.element.removeEventListener("touchend",this.onTouchEnd,Qr)}},_v=s=>Math.min(1,1.001-2**(-10*s)),yv=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:m,virtualScroll:x,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:w=!1,respectReducedMotion:E=!0}={}){qe(this,"_isScrolling",!1);qe(this,"_isStopped",!1);qe(this,"_isLocked",!1);qe(this,"_preventNextNativeScrollEvent",!1);qe(this,"_resetVelocityTimeout",null);qe(this,"_rafId",null);qe(this,"_isDraggingSelection",!1);qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));qe(this,"isTouching");qe(this,"isIos");qe(this,"time",0);qe(this,"userData",{});qe(this,"lastVelocity",0);qe(this,"velocity",0);qe(this,"direction",0);qe(this,"options");qe(this,"targetScroll");qe(this,"animatedScroll");qe(this,"animate",new $w);qe(this,"emitter",new vv);qe(this,"dimensions");qe(this,"virtualScroll");qe(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});qe(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});qe(this,"onClick",s=>{let e=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){let i=e.find(n=>t.host===n.host&&t.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,n);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});qe(this,"onPointerDown",s=>{s.button===1&&this.reset()});qe(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let d=n&&this.options.syncTouch,u=n&&i.type==="touchend";u&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});qe(this,"raf",s=>{let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=mv,window.lenis||(window.lenis={}),window.lenis.version=mv,f==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=_v:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:p,autoResize:g,prevent:m,virtualScroll:x,overscroll:v,autoRaf:T,anchors:y,autoToggle:b,allowNestedScroll:M,naiveDimensions:S,stopInertiaOnNavigate:w,respectReducedMotion:E},this.dimensions=new Jw(s,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Qw(t,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;let i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],r=i[i.length-1],o=40,a=Math.hypot(t.clientX-n.left,t.clientY-n.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(n?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=s,u=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(p=d),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let g=p.getBoundingClientRect(),m=getComputedStyle(p),x=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(T)?0:T)}}if(typeof d=="number"){if(d+=u,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=xv(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=_v:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){let i=Date.now();s._lenis||(s._lenis={});let n=s._lenis,r,o,a,l,c,h,f,d,u,p;if(i-(n.time??0)>2e3){n.time=Date.now();let M=window.getComputedStyle(s);if(n.computedStyle=M,r=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=o,!(r||o))return!1;f=s.scrollWidth,d=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=f>u,l=d>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=f,n.scrollHeight=d,n.clientWidth=u,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,f=n.scrollWidth,d=n.scrollHeight,u=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,x,v,T,y,b;if(g==="horizontal")m=Math.round(s.scrollLeft),x=f-u,v=e,T=r,y=a,b=c;else if(g==="vertical")m=Math.round(s.scrollTop),x=d-p,v=t,T=o,y=l,b=h;else return!1;return!b&&(m>=x||m<=0)?!0:(v>0?m<x:m>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Yw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var Yc=new F;function ss(s,e,t,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;Yc.copy(e),Yc[i]=0,Yc.normalize();let c=.5*o/(o+a),h=1-Yc.angleTo(s)/l;return Math.sign(Yc[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Li=class s extends Fi{constructor(e=1,t=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new F,c=new F,h=new F(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=f.length/6,g=new F,m=.5/o;for(let x=0,v=0;x<f.length;x+=3,v+=2)switch(l.fromArray(f,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[x+0]=h.x*Math.sign(l.x)+c.x*r,f[x+1]=h.y*Math.sign(l.y)+c.y*r,f[x+2]=h.z*Math.sign(l.z)+c.z*r,d[x+0]=c.x,d[x+1]=c.y,d[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),u[v+0]=ss(g,c,"z","y",r,i),u[v+1]=1-ss(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),u[v+0]=1-ss(g,c,"z","y",r,i),u[v+1]=1-ss(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),u[v+0]=1-ss(g,c,"x","z",r,e),u[v+1]=ss(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),u[v+0]=1-ss(g,c,"x","z",r,e),u[v+1]=1-ss(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),u[v+0]=1-ss(g,c,"x","y",r,e),u[v+1]=1-ss(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),u[v+0]=ss(g,c,"x","y",r,e),u[v+1]=1-ss(g,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function jr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Qf(s,e,t=5){let i=document.createElement("canvas");i.width=i.height=s;let n=i.getContext("2d"),r=n.createImageData(s,s),o=jr(e),a=[];for(let l=0;l<t;l++){let c=4<<l,h=new Float32Array((c+1)*(c+1));for(let f=0;f<h.length;f++)h[f]=o();for(let f=0;f<=c;f++)h[f*(c+1)+c]=h[f*(c+1)],h[c*(c+1)+f]=h[f];a.push([c,h])}for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0,f=.5,d=0;for(let[g,m]of a){let x=c/s*g,v=l/s*g,T=x|0,y=v|0,b=x-T,M=v-y,_=b*b*(3-2*b),S=M*M*(3-2*M),w=g+1,E=m[y*w+T]*(1-_)+m[y*w+T+1]*_,D=m[(y+1)*w+T]*(1-_)+m[(y+1)*w+T+1]*_;h+=(E*(1-S)+D*S)*f,d+=f,f*=.5}let u=(l*s+c)*4,p=h/d*255;r.data[u]=r.data[u+1]=r.data[u+2]=p,r.data[u+3]=255}return n.putImageData(r,0,0),i}function Sv(s,e=2.5){let t=s.width,i=s.height,n=s.getContext("2d").getImageData(0,0,t,i).data,r=document.createElement("canvas");r.width=t,r.height=i;let o=r.getContext("2d"),a=o.createImageData(t,i),l=a.data,c=(h,f)=>n[((f+i)%i*t+(h+t)%t)*4]/255;for(let h=0;h<i;h++)for(let f=0;f<t;f++){let d=(c(f+1,h)-c(f-1,h))*e,u=(c(f,h+1)-c(f,h-1))*e,p=Math.hypot(d,u,1),g=(h*t+f)*4;l[g]=(-d/p*.5+.5)*255,l[g+1]=(u/p*.5+.5)*255,l[g+2]=(1/p*.5+.5)*255,l[g+3]=255}return o.putImageData(a,0,0),r}function Kf(s,e){let t=new Oi(s);return t.wrapS=t.wrapT=Sn,t.anisotropy=8,e&&(t.colorSpace=Ht),t}function Xm({w:s=1024,h:e=512,rows:t=4,seed:i=1}={}){let n=jr(i),r=document.createElement("canvas"),o=document.createElement("canvas"),a=document.createElement("canvas");for(let x of[r,o,a])x.width=s,x.height=e;let l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d");l.fillStyle="#7a5a3c",l.fillRect(0,0,s,e),c.fillStyle="#1a1a1a",c.fillRect(0,0,s,e),h.fillStyle="#f2f2f2",h.fillRect(0,0,s,e);let f=e/t,d=5;for(let x=0;x<t;x++){let v=-n()*120;for(;v<s;){let T=110+n()*150,y=v+d/2,b=x*f+d/2,M=T-d,_=f-d,S=30+n()*8,w=36+n()*14,E=60+n()*12,D=l.createLinearGradient(0,b,0,b+_);D.addColorStop(0,`hsl(${S},${w}%,${E+4}%)`),D.addColorStop(.75,`hsl(${S},${w}%,${E}%)`),D.addColorStop(1,`hsl(${S-4},${w-6}%,${E-12}%)`),l.fillStyle=D,Wm(l,y,b,M,_,7),l.fill();let P=150+n()*60;for(let N=0;N<6;N++){let R=Math.min(255,P*(.55+N*.09))|0;c.fillStyle=`rgb(${R},${R},${R})`,Wm(c,y+N*1.6,b+N*1.6,M-N*3.2,_-N*3.2,7),c.fill()}h.fillStyle=`rgb(${200+n()*40|0},${200+n()*40|0},${200+n()*40|0})`,Wm(h,y,b,M,_,7),h.fill();for(let N=0;N<2;N++){let R=y+n()*M,U=n()<.5?b+n()*5:b+_-n()*5,k=3+n()*6;c.fillStyle="#5a5a5a",l.fillStyle=`hsla(${S},${w}%,${E-10}%,.7)`;for(let O of[c,l]){O.beginPath();for(let Y=0;Y<7;Y++){let W=k*(.5+n()*.7),I=Y/7*Math.PI*2;O.lineTo(R+Math.cos(I)*W*1.6,U+Math.sin(I)*W*.7)}O.closePath(),O.fill()}}v+=T}}let u=Qf(128,i+7,5),p=Qf(256,i+13,4);l.globalCompositeOperation="multiply",l.globalAlpha=.35,l.drawImage(u,0,0,s,e),l.globalAlpha=.25,l.drawImage(p,0,0,s,e),l.globalCompositeOperation="overlay",l.globalAlpha=.25,l.drawImage(p,0,0,s/2,e/2),l.drawImage(p,s/2,0,s/2,e/2),l.drawImage(p,0,e/2,s/2,e/2),l.drawImage(p,s/2,e/2,s/2,e/2),l.globalCompositeOperation="source-over",l.globalAlpha=1,c.globalCompositeOperation="overlay",c.globalAlpha=.6,c.drawImage(p,0,0,s,e),c.globalAlpha=1,c.globalCompositeOperation="source-over";let g=l.getImageData(0,0,s,e),m=c.getImageData(0,0,s,e);for(let x=0;x<s*e*.008;x++){let v=(n()*s*e|0)*4,T=.7+n()*.2;g.data[v]*=T,g.data[v+1]*=T,g.data[v+2]*=T,m.data[v]=m.data[v+1]=m.data[v+2]=m.data[v]*.6}return l.putImageData(g,0,0),c.putImageData(m,0,0),{map:Kf(r,!0),normalMap:Kf(Sv(o,3.2),!1),roughnessMap:Kf(a,!1)}}function Mv(s=4){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),n=Qf(128,s,4),r=i.createImageData(512,512),o=n.getContext("2d").getImageData(0,0,128,128).data;for(let a=0;a<512;a++)for(let l=0;l<512;l++){let c=o[((a>>2&127)*128+(l>>2&127))*4]/255,h=.5+.5*Math.sin((a+c*70)*.19+Math.sin(l*.02)*2),f=(a*512+l)*4,d=(h*.75+Math.random()*.25)*255;r.data[f]=r.data[f+1]=r.data[f+2]=d,r.data[f+3]=255}return i.putImageData(r,0,0),Kf(Sv(t,1.6),!1)}function bv(s=9){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),n=jr(s);i.fillStyle="#e9e2cf",i.fillRect(0,0,512,512),i.globalCompositeOperation="multiply",i.globalAlpha=.6,i.drawImage(Qf(64,s,4),0,0,512,512),i.globalAlpha=1;for(let o=0;o<9;o++)i.fillStyle="rgba(120,115,110,.35)",i.beginPath(),i.ellipse(n()*512,n()*512,30+n()*80,20+n()*60,n()*3,0,7),i.fill();i.globalCompositeOperation="source-over";for(let o=0;o<70;o++){let a=n()*512,l=n()*512,c=2+n()*n()*22;i.fillStyle="rgba(90,85,80,.35)",i.beginPath(),i.arc(a,l,c,0,7),i.fill(),i.strokeStyle="rgba(255,250,235,.35)",i.lineWidth=1.2,i.beginPath(),i.arc(a-c*.15,l-c*.15,c,Math.PI*.9,Math.PI*1.8),i.stroke()}let r=new Oi(t);return r.colorSpace=Ht,r}function Wm(s,e,t,i,n,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+i,t,e+i,t+n,r),s.arcTo(e+i,t+n,e,t+n,r),s.arcTo(e,t+n,e,t,r),s.arcTo(e,t,e+i,t,r),s.closePath()}var Jt={night:660019,lapis:1916863,faience:3134406,gold:15316044,sand:14267266,stone:13146723,terracotta:11883311,ink:724770},li=[28,23.5,19,14.5,10,5.5],yn=2.6,Vs=2.25,Hs=s=>s===0?0:s*yn,vs=(s,e={})=>new Ir({color:s,roughness:.85,metalness:0,...e}),Vn=(s,e=2.6)=>new di({color:new Ue(s).multiplyScalar(e),toneMapped:!1});function jw(s,e=1024,t=512){let i=document.createElement("canvas");i.width=e,i.height=t;let n=i.getContext("2d"),r=jr(s);n.fillStyle="#000",n.fillRect(0,0,e,t),n.strokeStyle="#fff",n.fillStyle="#fff",n.lineWidth=3,n.lineCap="round";for(let l=0;l<6;l++){let c=r()*e,h=t*(.2+r()*.6);n.beginPath(),n.moveTo(c,h);for(let f=0;f<5;f++)f%2?h=Math.max(20,Math.min(t-20,h+(r()-.5)*200)):c+=(r()-.3)*260,n.lineTo(c,h);n.stroke(),n.beginPath(),n.arc(c,h,8,0,Math.PI*2),n.fill()}n.font="bold 48px monospace";let o=["{ }","</>","=>","::","&&","[ ]","#",";","01","\u03BB"];for(let l=0;l<4;l++)n.fillText(o[r()*o.length|0],r()*(e-100),60+r()*(t-80));let a=new Oi(i);return a.wrapS=a.wrapT=Sn,a}var nl=(s,e,t)=>{let i={};for(let n in s){let r=s[n].clone();r.repeat.set(e,t),r.needsUpdate=!0,i[n]=r}return i};function Tv(s,{w:e=512,h:t=160,font:i="700 64px Unbounded, sans-serif",fg:n="#f6ead2",bg:r="rgba(10,18,51,.92)",border:o="#e9b44c",radius:a=70,sub:l}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let h=c.getContext("2d");return((d,u,p,g,m)=>{h.beginPath(),h.moveTo(d+m,u),h.arcTo(d+p,u,d+p,u+g,m),h.arcTo(d+p,u+g,d,u+g,m),h.arcTo(d,u+g,d,u,m),h.arcTo(d,u,d+p,u,m),h.closePath()})(6,6,e-12,t-12,Math.min(a,(t-12)/2)),h.fillStyle=r,h.fill(),h.lineWidth=6,h.strokeStyle=o,h.stroke(),h.fillStyle=n,h.textAlign="center",h.textBaseline="middle",h.font=i,h.fillText(s,e/2,l?t*.4:t/2+2),l&&(h.font='500 30px "Instrument Sans", sans-serif',h.globalAlpha=.75,h.fillText(l,e/2,t*.72)),c}function Ev(s,e,t,i="high"){let n={updaters:[],props:{},clickables:[]},r=_=>n.updaters.push(_),o=i==="high",a=new F(-.55,.32,-.77).normalize(),l=new Pt({side:Bi,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ue(132378)},mid:{value:new Ue(857927)},hor:{value:new Ue(4862290)},moonDir:{value:a}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
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
        gl_FragColor = vec4(c,1.); }`});s.add(new Ne(new pi(600,48,24),l));{let S=new Float32Array(9600),w=new Float32Array(3200),E=jr(7);for(let N=0;N<3200;N++){let R=E()*Math.PI*2,U=.04+E()*.96,k=Math.sqrt(1-U*U);S.set([Math.cos(R)*k*520,U*520,Math.sin(R)*k*520],N*3),w[N]=E()*6.28}let D=new qt;D.setAttribute("position",new Ui(S,3)),D.setAttribute("ph",new Ui(w,1));let P=new Pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},px:{value:Math.min(devicePixelRatio,2)}},vertexShader:"attribute float ph; uniform float t,px; varying float a; varying vec3 col; void main(){ a = .4+.6*sin(t*1.7+ph*3.); float s = fract(ph*7.13); col = mix(vec3(1.,.93,.82), vec3(.8,.88,1.), fract(ph*3.7)); gl_PointSize = (0.9+s*s*2.6)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float a; varying vec3 col; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(col, a*smoothstep(.5,.0,d)); }"});s.add(new co(D,P)),r(N=>P.uniforms.t.value=N)}{let _=new Ne(new pi(15,48,48),new di({map:bv(),color:new Ue(1.35,1.3,1.2),toneMapped:!1,fog:!1}));_.position.copy(a).multiplyScalar(300),_.rotation.y=1.2,s.add(_);let S=document.createElement("canvas");S.width=S.height=256;let w=S.getContext("2d"),E=w.createRadialGradient(128,128,14,128,128,128);E.addColorStop(0,"rgba(255,236,200,.5)"),E.addColorStop(.3,"rgba(150,165,255,.14)"),E.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=E,w.fillRect(0,0,256,256);let D=new Cr(new er({map:new Oi(S),transparent:!0,depthWrite:!1,fog:!1}));D.scale.setScalar(160),D.position.copy(_.position),s.add(D),_.userData.onClick="moon",n.clickables.push(_),n.props.moon=_}{let _=new ao;_.add(new Ne(new pi(50,32,16),l.clone()));let S=new Ne(new pi(4,16,16),new di({color:new Ue(3,3,2.6)}));S.position.copy(a).multiplyScalar(40),_.add(S);let w=new Ca(e);s.environment=w.fromScene(_,.04).texture,s.environmentIntensity=.55,w.dispose()}let c=new Ol(7438800,3811868,.55);s.add(c);let h=new Ma(13358335,2.3);h.position.copy(a).multiplyScalar(60).setY(48),h.position.x=-38,h.position.z=32,h.castShadow=!0,h.shadow.mapSize.set(o?4096:2048,o?4096:2048),Object.assign(h.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),h.shadow.bias=-4e-4,h.shadow.normalBias=.04,h.shadow.radius=3,s.add(h);let f=new Ma(16752234,.35);f.position.set(30,10,-20),s.add(f);let d=Xm({w:o?1024:512,h:o?512:256,rows:4,seed:11}),u=Xm({w:o?1024:512,h:o?1024:512,rows:8,seed:51}),p=Mv();p.repeat.set(70,70);{let _=new ps(900,900,220,220);_.rotateX(-Math.PI/2);let S=_.attributes.position;for(let P=0;P<S.count;P++){let N=S.getX(P),R=S.getZ(P),U=Math.hypot(N,R),k=Math.sin(N*.03+R*.012)*2.2+Math.sin(R*.045-N*.02)*1.4+Math.sin(N*.11+R*.03)*.3;k=k>0?k*1.25:k*.7,k*=Kn.smoothstep(U,26,90),k+=Kn.smoothstep(U,120,420)*14,S.setY(P,k-.02)}_.computeVertexNormals();let w=new Ne(_,vs(11108437,{normalMap:p,normalScale:new Ie(.55,.55),roughness:.97}));w.receiveShadow=!0,s.add(w);let E=nl(u,6,6),D=new Ne(new Ri(24,25,.3,64),vs(10256996,{...E,roughness:1}));D.position.y=-.12,D.receiveShadow=!0,s.add(D)}{let _=new _a(1,2),S=_.attributes.position,w=jr(21);for(let k=0;k<S.count;k++){let O=new F().fromBufferAttribute(S,k);O.multiplyScalar(.75+Math.sin(O.x*3.1)*.1+Math.cos(O.y*4.3+O.z)*.12),S.setXYZ(k,O.x,O.y*.65,O.z)}_.computeVertexNormals();let E=46,D=new ws(_,vs(8216902,{...nl(d,.5,.5),roughness:1}),E),P=new ct,N=new cn,R=new F,U=new F;for(let k=0;k<E;k++){let O=w()*Math.PI*2,Y=25+w()*45;Math.abs(Math.cos(O))<.25&&Math.sin(O)>0||(U.set(Math.cos(O)*Y,-.15,Math.sin(O)*Y),N.setFromEuler(new qn(w(),w()*6,w())),R.setScalar(.3+w()*w()*1.8),P.compose(U,N,R),D.setMatrixAt(k,P))}D.castShadow=D.receiveShadow=!0,s.add(D)}for(let[_,S,w]of[[150,-260,34],[205,-300,46],[250,-270,26]]){let E=new Ne(new Yn(w,w*.95,4),vs(3878984,{roughness:1}));E.rotation.y=Math.PI/4,E.position.set(_,w*.47+6,S),s.add(E)}let g=new Ct;s.add(g),n.pyramid=g;let m=Vn(Jt.faience,1.7);for(let _=0;_<li.length;_++){let S=li[_],w=vs(16777215,{...nl(d,S/7,1),emissiveMap:(()=>{let N=jw(91+_*7);return N.repeat.set(S/14,1),N})(),emissive:new Ue(Jt.faience),emissiveIntensity:.38,normalScale:new Ie(1,1)}),E=vs(15787220,{...nl(u,S/7,S/7)}),D=new Ne(new Fi(S,yn,S),[w,w,E,E,w,w]);D.position.y=_*yn+yn/2,D.castShadow=D.receiveShadow=!0,g.add(D);let P=S/2;for(let[N,R,U,k]of[[S,.06,0,P],[S,.06,0,-P],[.06,S,P,0],[.06,S,-P,0]]){let O=new Ne(new Fi(N,.05,R),m);O.position.set(U,(_+1)*yn+.01,k),g.add(O)}}let x=vs(15259328,{...nl(u,.35,.12)});n.stairPath=[];for(let _=0;_<li.length;_++){let w=yn/8,E=Vs/8,D=li[_]/2,P=Hs(_);for(let N=0;N<8;N++){let R=new Ne(new Li(2.6,w*(N+1),E+.01,1,.02),x);R.position.set(0,P+w*(N+1)/2,D+Vs-(N+.5)*E),R.castShadow=R.receiveShadow=!0,g.add(R)}for(let N of[-1.42,1.42]){let R=new F(N,P+.35,D+Vs),U=new F(N,P+yn+.35,D),k=R.distanceTo(U),O=new Ne(new Ri(.035,.035,k,8),Vn(N<0?Jt.faience:Jt.gold,1.6));O.position.copy(R).add(U).multiplyScalar(.5),O.lookAt(U),O.rotateX(Math.PI/2),g.add(O)}n.stairPath.push(new F(0,P,D+Vs),new F(0,P+yn,D))}let v=new oi({color:15909466,metalness:1,roughness:.18,clearcoat:.6,clearcoatRoughness:.1,envMapIntensity:2.2,emissive:new Ue(3810822),emissiveIntensity:.5}),T=new Ne(new Yn(2.3,3.2,4,1),v);T.rotation.y=Math.PI/4,T.position.set(0,6*yn+1.6,-.6),T.castShadow=!0,g.add(T),T.userData.onClick="cap",n.clickables.push(T),n.props.cap=T;let y=new Rs(16762726,5,20,1.6);y.position.set(0,6*yn+4.2,0),g.add(y),n.props.capLight=y;{let _=new $n(n.stairPath.map(Y=>Y.clone().add(new F(-1.42,.55,0))),!1,"centripetal",0),S=new $n(n.stairPath.map(Y=>Y.clone().add(new F(1.42,.55,0))),!1,"centripetal",0),w=36,E=new Li(.14,.14,.14,1,.03),D=new ws(E,Vn(Jt.faience,3),w),P=new ws(E,Vn(Jt.gold,2.8),w);g.add(D,P);let N=new ct,R=new cn,U=new F(1,1,1),k=new F,O=new qn;n.packetBoost=0,r(Y=>{let W=.045+n.packetBoost*.25;n.packetBoost*=.97;for(let I=0;I<w;I++){let J=(I/w+Y*W)%1;_.getPointAt(J,k),R.setFromEuler(O.set(Y*2+I,Y+I,0)),N.compose(k,R,U),D.setMatrixAt(I,N),S.getPointAt(1-J,k),N.compose(k,R,U),P.setMatrixAt(I,N)}D.instanceMatrix.needsUpdate=P.instanceMatrix.needsUpdate=!0})}let b=new Pt({transparent:!0,depthWrite:!1,blending:nr,side:Ci,toneMapped:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float t; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ vec2 uv = vUv; float y = uv.y;
        float nn = n(vec2(uv.x*4., y*3.-t*3.2))*.6 + n(vec2(uv.x*9., y*7.-t*5.))*.4;
        float w = (1.-y)*.42 + .04; float d = abs(uv.x-.5 + (nn-.5)*.25*y);
        float f = smoothstep(w, w*.35, d) * smoothstep(1., .25, y + nn*.35) * smoothstep(0.,.08,y);
        vec3 c = mix(vec3(1.5,.5,.1), vec3(1.9,1.35,.7), smoothstep(.3,.9,f*(1.2-y)));
        gl_FragColor = vec4(c*f*.5, f); }`});r(_=>b.uniforms.t.value=_);let M=new oi({color:9067051,metalness:.9,roughness:.35});for(let _ of[-4.6,4.6]){let S=li[0]/2+3.2,w=new Ne(new Ri(.28,.36,2.2,16),vs(16777215,{...nl(d,.3,.5)}));w.position.set(_,1.1,S),w.castShadow=!0,s.add(w);let E=new Ne(new Ri(.6,.3,.4,24,1,!0),M);E.material.side=Ci,E.position.set(_,2.35,S),s.add(E);let D=new Ne(new ho(.55,20),Vn(16734746,1.2));D.rotation.x=-Math.PI/2,D.position.set(_,2.45,S),s.add(D);let P=new Ct;P.position.set(_,2.45,S),s.add(P);for(let I=0;I<3;I++){let J=new Ne(new ps(1.1,1.8),b);J.position.y=.85,J.rotation.y=I/3*Math.PI,P.add(J)}let N=new Rs(16747068,6,12,1.8);N.position.set(_,3.4,S+.3),s.add(N);let R=30,U=new Float32Array(R*3),k=Array.from({length:R},()=>Math.random()),O=new qt;O.setAttribute("position",new Ui(U,3));let Y=new co(O,new lo({color:new Ue(3,1.4,.4),size:.06,transparent:!0,depthWrite:!1,blending:nr,toneMapped:!1}));Y.position.set(_,2.6,S),s.add(Y);let W=Math.random()*10;r(I=>{let J=1+Math.sin(I*13+W)*.07+Math.sin(I*7.3+W)*.06;P.scale.set(1,J,1),N.intensity=5.5*J,P.rotation.y=Math.sin(I*.7+W)*.3;for(let de=0;de<R;de++){let be=(k[de]+I*(.25+k[de]*.3))%1;U[de*3]=Math.sin(k[de]*50+I)*.25*be,U[de*3+1]=be*3,U[de*3+2]=Math.cos(k[de]*70+I)*.25*be}O.attributes.position.needsUpdate=!0})}{let S=new Float32Array(1800),w=jr(3);for(let D=0;D<600;D++)S.set([(w()-.5)*80,w()*22,(w()-.5)*80],D*3);let E=new qt;E.setAttribute("position",new Ui(S,3)),s.add(new co(E,new lo({color:16769712,size:.06,transparent:!0,opacity:.45,depthWrite:!1}))),r((D,P)=>{let N=E.attributes.position;for(let R=0;R<600;R++){let U=N.getX(R)+P*1.6;U>40&&(U=-40),N.setX(R,U),N.setY(R,N.getY(R)+Math.sin(D+R)*P*.15)}N.needsUpdate=!0})}return eA(n,g,t),n.update=(_,S,w)=>{for(let E of n.updaters)E(_,S,w)},n}function eA(s,e,t){let i=a=>s.updaters.push(a),n=a=>li[a]/2+Vs/2,r=new Ul(t),o=new oi({color:14724682,metalness:1,roughness:.3,envMapIntensity:1.6});{let a=new Ct;a.position.set(-5.6,Hs(1),n(1)),e.add(a);let l=vs(6175522,{roughness:.6}),c=new Ne(new Li(1.5,.08,.8,2,.03),l);c.position.y=.72,c.castShadow=!0,a.add(c);for(let[y,b]of[[-.65,-.32],[.65,-.32],[-.65,.32],[.65,.32]]){let M=new Ne(new Ri(.03,.03,.72,8),l);M.position.set(y,.36,b),M.castShadow=!0,a.add(M)}let h=new oi({color:10133675,metalness:.9,roughness:.32}),f=new Ne(new Li(.62,.025,.42,1,.01),h);f.position.set(0,.775,.05),a.add(f);let d=document.createElement("canvas");d.width=512,d.height=320;let u=d.getContext("2d");u.fillStyle="#0a1233",u.fillRect(0,0,512,320),u.font="28px monospace",[["#2fd3c6",'app.post("/hire",'],["#e9b44c","  auth, async (req,res)=>{"],["#f6ead2",'  const dev = "adham";'],["#f6ead2","  await db.save(dev);"],["#2fd3c6","  res.status(201)"],["#e9b44c","});"]].forEach(([y,b],M)=>{u.fillStyle=y,u.fillText(b,22,52+M*44)});let g=new Oi(d);g.colorSpace=Ht;let m=new Ne(new ps(.58,.36),new di({map:g,color:13421772}));m.position.set(0,.98,-.148),m.rotation.x=-.18,a.add(m);let x=new Ne(new Li(.62,.4,.015,1,.006),h);x.position.set(0,.98,-.16),x.rotation.x=-.18,a.add(x);let v=new Rs(8378623,1.2,2.2,2);v.position.set(0,1.05,.2),a.add(v);let T=new Ne(new Ri(.07,.06,.14,20),new oi({color:Jt.terracotta,roughness:.25,clearcoat:.8}));T.position.set(.55,.83,.15),a.add(T),a.rotation.y=.5,s.props.desk=a}{let a=new Ct;a.position.set(5.8,Hs(2)+3.1,n(2)-.6),e.add(a);let l=["C++","TypeScript","Node.js","PostgreSQL","Python","SQL","Docker","React","Express","socket.io","Git","Java"];l.forEach((h,f)=>{let d=new Ne(new ps(1.05,.33),new di({map:new Oi(Tv(h,{font:"700 54px Unbounded, sans-serif"})),transparent:!0,side:Ci,toneMapped:!1}));d.material.map.colorSpace=Ht,d.userData={a:f/l.length*Math.PI*2,r:f%2?2.9:2.2,y:f%3*.45-.45,label:h.toLowerCase(),hl:0},a.add(d)});let c=new Ne(new _a(.42,0),new oi({color:3134406,roughness:.05,transmission:.6,thickness:.6,emissive:new Ue(879974),emissiveIntensity:1.5}));a.add(c),i((h,f,d)=>{c.rotation.set(h*.6,h*.9,0),a.children.forEach(u=>{if(!u.userData.r)return;let p=u.userData;p.hl=Math.max(0,p.hl-f);let g=Math.min(1,p.hl*2),m=p.a+h*.35;u.position.set(Math.cos(m)*p.r*(1-g*.6),p.y+Math.sin(h+p.a)*.12+g*.9,Math.sin(m)*p.r*(1-g*.6)+g*1.2),u.scale.setScalar(1+g*.9),d&&u.quaternion.copy(d.quaternion)})}),s.props.stack=a,s.highlightSkill=h=>{let f=!1;return a.children.forEach(d=>{d.userData.label&&h.toLowerCase().startsWith(d.userData.label.replace(".js",""))&&(d.userData.hl=3,f=!0)}),f}}{let a=new Ct;a.position.set(-3.6,Hs(3)+2.45,li[3]/2+.35),e.add(a);let l=document.createElement("canvas");l.width=640,l.height=400,tA(l.getContext("2d")),[{src:"assets/shots/title.jpg",x:-1.9,ry:.42},{canvas:l,x:0,ry:0},{src:"assets/shots/student-dashboard.webp",x:1.9,ry:-.42}].forEach((h,f)=>{var x;let d=h.canvas?new Oi(h.canvas):r.load(h.src);d.colorSpace=Ht,d.anisotropy=8;let u=new Ct;u.position.set(h.x,f===1?.35:0,f===1?-.4:0),u.rotation.y=h.ry,a.add(u),((x=s.props).screens||(x.screens={}))[["capcom","smarthabbit","labtrack"][f]]=u;let p=new Ne(new Li(1.86,1.1,.06,2,.03),o);p.castShadow=!0,u.add(p);let g=new Ne(new ps(1.74,.98),new di({map:d,color:12105912}));g.position.z=.035,u.add(g);let m=f*1.7;i(v=>{u.position.y=(f===1?.35:0)+Math.sin(v*1.1+m)*.08})}),a.rotation.y=.12,s.props.work=a}{let a=new Ct;a.position.set(6.7,Hs(4)+1.3,n(4)-.6),a.rotation.y=-.5,e.add(a);let l=new Ne(new Li(.5,.5,.5,2,.06),Vn(Jt.faience,2));l.position.set(-1.9,1.7,0);let c=new Ne(new pi(.3,24,16),Vn(7310591,2.2));c.position.set(-1.9,.3,0);let h=new Ne(new Dl(.38),Vn(Jt.gold,2.6));h.position.set(.4,1,0),a.add(l,c,h);let f=new $n([l.position,new F(-.8,1.8,.4),h.position]),d=new $n([c.position,new F(-.8,.2,.4),h.position]),p=[[3134406,.35],[15316044,.6],[15764028,.85],[14698298,1.1]].map(([N,R],U)=>{let k=new Ne(new Fi(.22,R,.22),Vn(N,1.8));return k.position.set(1.4+U*.36,R/2+.1,0),a.add(k),k}),g=new $n([h.position,new F(1.2,1.4,.2),new F(1.9,1.5,0)]),m=22,x=new pi(.05,8,6),v=new ws(x,Vn(Jt.faience,3),m),T=new ws(x,Vn(9414399,3),m),y=new ws(x,Vn(Jt.gold,3),m);a.add(v,T,y);for(let[N,R,U]of[["XGBoost \xB7 sensors",-1.9,2.25],["Isolation Forest \xB7 traffic",-1.9,-.25],["Decision fusion",.4,1.6],["4-tier risk",1.95,1.55]]){let k=new Cr(new er({map:new Oi(Tv(N,{w:640,h:120,font:'600 42px "Instrument Sans", sans-serif',radius:60})),transparent:!0,toneMapped:!1}));k.material.map.colorSpace=Ht,k.scale.set(1.6,.3,1),k.position.set(R,U,.1),a.add(k)}let b=new Ne(new uo(.2,2.6,64),new di({color:new Ue(Jt.faience).multiplyScalar(.6),transparent:!0,opacity:.18,side:Ci,toneMapped:!1,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.set(0,-1.25,0),a.add(b);let M=new ct,_=new F;a.userData.threat=0;let S=0,w=0,E=new Ue(9414399).multiplyScalar(3),D=new Ue(16726843).multiplyScalar(3.4),P=new Ue(Jt.gold).multiplyScalar(2.6);i((N,R)=>{S+=(a.userData.threat-S)*Math.min(1,R*4),w+=R*(.22+S*.6),T.material.color.copy(E).lerp(D,S),c.material.color.copy(E).lerp(D,S),c.scale.setScalar(1+S*.5+Math.sin(N*12)*.1*S),h.material.color.copy(P).lerp(D,S*.7),l.rotation.set(N,N*.7,0),h.rotation.y=N*1.4,h.scale.setScalar(1+Math.sin(N*4)*.06);for(let U=0;U<m;U++){let k=(U/m+N*.22)%1;f.getPointAt(k,_),M.makeTranslation(_.x,_.y,_.z),v.setMatrixAt(U,M),d.getPointAt((U/m+w)%1,_),M.makeTranslation(_.x,_.y,_.z),T.setMatrixAt(U,M),g.getPointAt(k,_),M.makeTranslation(_.x,_.y,_.z),y.setMatrixAt(U,M)}v.instanceMatrix.needsUpdate=T.instanceMatrix.needsUpdate=y.instanceMatrix.needsUpdate=!0,p.forEach((U,k)=>{let O=S>k*.25-.01;U.scale.y+=((O?1+S*.6:.25)+Math.sin(N*2+k)*.06-U.scale.y)*.1}),b.rotation.z=N*.2}),s.props.research=a}{let a=new Ct;a.position.set(-4.4,Hs(5),n(5)-.5),e.add(a);let l=[14698298,3134406,15316044,7310591,16181970];s.props.balloons=[],l.forEach((y,b)=>{let M=new Ct;M.position.set((b-2)*.42,0,b%2*.45);let _=new Ne(new pi(.34,32,24),new oi({color:y,roughness:.25,clearcoat:1,clearcoatRoughness:.15,sheen:.4}));_.scale.y=1.18,_.position.y=2.2+b%3*.35,_.castShadow=!0;let S=new Ne(new Yn(.06,.1,8),_.material);S.position.y=_.position.y-.42,S.rotation.x=Math.PI;let w=new Ne(new Ri(.005,.005,_.position.y-.45,4),vs(16181970));w.position.y=(_.position.y-.45)/2,M.add(_,S,w),a.add(M),_.userData.onClick="balloon",_.userData.group=M,s.clickables.push(_),s.props.balloons.push(M);let E=b*1.3;i(D=>{M.rotation.z=Math.sin(D*1.2+E)*.06,M.rotation.x=Math.cos(D+E)*.05})});let c=new Ct,h=new oi({color:15921128,metalness:.3,roughness:.35,clearcoat:.5}),f=new Ne(new ir(.16,.6,8,16),h);c.add(f);let d=new Ne(new Yn(.16,.3,16),new oi({color:Jt.terracotta,roughness:.3,clearcoat:.6}));d.position.y=.55,c.add(d);for(let y=0;y<3;y++){let b=new Ne(new Fi(.02,.22,.18),vs(Jt.lapis,{roughness:.4})),M=y/3*Math.PI*2;b.position.set(Math.cos(M)*.16,-.3,Math.sin(M)*.16),b.rotation.y=-M,c.add(b)}let u=new Ne(new Yn(.1,.4,12),Vn(16751173,3));u.position.y=-.62,u.rotation.x=Math.PI,c.add(u),e.add(c),s.props.rocket=c,c.userData.boost=0,f.userData.onClick="rocket",s.clickables.push(f);let p=0;i((y,b)=>{c.userData.boost*=.985,p+=b*(.45+c.userData.boost*3);let M=new F(0,Hs(5)+4.6,0);c.position.set(M.x+Math.cos(p)*9,M.y+Math.sin(y*.9)*.6,M.z+Math.sin(p)*9),c.lookAt(M.x+Math.cos(p+.2)*9,c.position.y,M.z+Math.sin(p+.2)*9),c.rotateX(Math.PI/2),u.scale.y=1+Math.sin(y*30)*.2+c.userData.boost*2}),s.props.arena=a;let g=[],m=[14698298,3134406,15316044,7310591,11832575,16181970,5427827],x=new F(-2.9,Hs(5),n(5)+.6);for(let y=0;y<14;y++){let b=new Ne(new pi(.3,24,18),new oi({color:m[y%m.length],roughness:.25,clearcoat:1,sheen:.4}));b.scale.y=1.18,b.visible=!1,b.userData.onClick="gameBalloon",e.add(b),g.push(b),s.clickables.push(b)}let v=s.game={active:!1,score:0,left:0,best:0,onEnd:null,onTick:null},T=y=>{y.position.set(x.x+(Math.random()-.5)*6,x.y-1.5-Math.random()*3,x.z+1+Math.random()*2.5),y.userData.v=.9+Math.random()*1.4,y.userData.w=Math.random()*6,y.visible=!0,y.scale.set(1,1.18,1)};v.start=(y=15)=>{v.active=!0,v.score=0,v.left=y,g.forEach((b,M)=>{T(b),b.position.y-=M*.5})},v.hit=y=>!v.active||!y.visible?!1:(v.score++,y.visible=!1,setTimeout(()=>v.active&&T(y),350),!0),i((y,b)=>{if(v.active){v.left-=b,v.onTick&&v.onTick(v);for(let M of g)M.visible&&(M.position.y+=M.userData.v*b,M.position.x+=Math.sin(y*1.5+M.userData.w)*b*.3,M.position.y>x.y+7&&T(M));v.left<=0&&(v.active=!1,g.forEach(M=>M.visible=!1),v.best=Math.max(v.best,v.score),v.onEnd&&v.onEnd(v))}})}{let a=new Ne(new Ri(.35,1.2,160,32,1,!0),new di({color:new Ue(Jt.gold).multiplyScalar(2.2),transparent:!0,opacity:0,side:Ci,depthWrite:!1,toneMapped:!1,blending:nr}));a.position.set(0,6*yn+3+80,-.6),e.add(a);let l=[0,1,2].map(()=>{let c=new Ne(new As(1,.04,8,64),new di({color:new Ue(Jt.faience).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1}));return c.rotation.x=Math.PI/2,c.position.set(0,6*yn+.2,-.6),e.add(c),c});s.props.beam=a,s.props.rings=l}}function tA(s){s.fillStyle="#101a3f",s.fillRect(0,0,640,400),s.fillStyle="#e9b44c",s.font="700 34px Unbounded, sans-serif",s.fillText("SmartHabbit",30,56),s.fillStyle="#f6ead2",s.font='500 20px "Instrument Sans", sans-serif',s.fillText("Level 7  \xB7  1,240 XP  \xB7  12-day streak",30,92),s.fillStyle="#26305e",s.fillRect(30,112,580,18),s.fillStyle="#2fd3c6",s.fillRect(30,112,410,18),[["Read 20 pages","easy","+10 XP"],["Codeforces problem","hard","+40 XP"],["Gym","medium","+25 XP"]].forEach(([t,i,n],r)=>{let o=160+r*62;s.fillStyle="#18234f",s.fillRect(30,o,580,50),s.fillStyle="#f6ead2",s.font='600 22px "Instrument Sans", sans-serif',s.fillText(t,50,o+32),s.fillStyle="#9fb0e8",s.font='500 17px "Instrument Sans", sans-serif',s.fillText(i,330,o+31),s.fillStyle="#e9b44c",s.fillText(n,520,o+31)}),["#e0473a","#2fd3c6","#e9b44c","#6f8cff"].forEach((t,i)=>{s.fillStyle=t,s.beginPath(),s.arc(60+i*56,370,18,0,7),s.fill()})}var ko=14263420,Zm=1774609,Jm=1845854,Rv=2504829,$c=16052198,Cv=8003371,Pv=1581119,Iv=15920354,qm={};function rs(s){if(qm[s])return qm[s];let e={color:s,roughness:.7};return s===ko?Object.assign(e,{roughness:.5,sheen:.6,sheenColor:new Ue(16751226),sheenRoughness:.5}):s===Jm||s===Pv?Object.assign(e,{roughness:.82,sheen:1,sheenColor:new Ue(5596842),sheenRoughness:.55}):s===Rv?Object.assign(e,{roughness:.3,clearcoat:.6,sheen:.6,sheenColor:new Ue(8952319)}):s===Zm?Object.assign(e,{roughness:.5,sheen:1,sheenColor:new Ue(9069648),sheenRoughness:.4,clearcoat:.15,clearcoatRoughness:.5}):s===Iv?Object.assign(e,{roughness:.3,clearcoat:.8}):s===$c?Object.assign(e,{roughness:.6,sheen:.5,sheenColor:new Ue(16777215)}):s===Cv&&Object.assign(e,{roughness:.32,sheen:.9,sheenColor:new Ue(16739179)}),qm[s]=new oi(e)}function vr(s,e){let t=new Ne(s,rs(e));return t.castShadow=!0,t.receiveShadow=!0,t}function wv(s,e,t=64){let i=document.createElement("canvas");i.width=i.height=t;let n=i.getContext("2d"),r=n.createRadialGradient(t/2,t/2,1,t/2,t/2,t/2);return r.addColorStop(0,s),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,t,t),new Oi(i)}var yr={happy:{eyes:"normal",brows:"soft",mouth:"smile",blush:.3,aura:15316044,emote:null},excited:{eyes:"star",brows:"up",mouth:"grin",blush:.55,aura:16765286,emote:"sparkle"},focused:{eyes:"normal",brows:"determined",mouth:"smirk",blush:.1,aura:3134406,emote:null},thinking:{eyes:"normal",brows:"raised",mouth:"hmm",blush:.1,aura:9414399,emote:"question",look:[.6,.7]},cool:{eyes:"closed",brows:"soft",mouth:"smirk",blush:.15,aura:15316044,emote:"sparkle",glasses:!0},surprised:{eyes:"wide",brows:"up",mouth:"o",blush:.2,aura:16777215,emote:"bang"},shy:{eyes:"closed",brows:"worried",mouth:"wavy",blush:1,aura:16748465,emote:"sweat"},annoyed:{eyes:"angry",brows:"angry",mouth:"flat",blush:.1,aura:14698298,emote:"anger"},sleepy:{eyes:"half",brows:"soft",mouth:"small",blush:.15,aura:7299024,emote:"zzz"},dizzy:{eyes:"spiral",brows:"worried",mouth:"wavy",blush:.3,aura:11832575,emote:"swirl"},love:{eyes:"heart",brows:"up",mouth:"grin",blush:.85,aura:16740241,emote:"heart"},worried:{eyes:"normal",brows:"worried",mouth:"wavy",blush:.1,aura:15764028,emote:"sweat"},vibing:{eyes:"closed",brows:"soft",mouth:"smile",blush:.35,aura:3134406,emote:"note"}},Dv=768,Lv=512,Ym={x:226,y:276},$m={x:542,y:276},Av={x:384,y:400};function Zc(s,e,t,i,n=4){s.beginPath();for(let r=0;r<n*2;r++){let o=r/(n*2)*Math.PI*2-Math.PI/2,a=r%2?i*.38:i;s.lineTo(e+Math.cos(o)*a,t+Math.sin(o)*a)}s.closePath(),s.fill()}function Nv(s,e,t,i){s.beginPath(),s.moveTo(e,t+i*.9),s.bezierCurveTo(e-i*1.6,t-i*.1,e-i*.6,t-i*1.2,e,t-i*.35),s.bezierCurveTo(e+i*.6,t-i*1.2,e+i*1.6,t-i*.1,e,t+i*.9),s.fill()}function iA(s,e){let t=yr[e.mood]||yr.happy;s.clearRect(0,0,Dv,Lv);let i=t.blush*(e.blushBoost||1);if(i>.02)for(let u of[Ym.x-46,$m.x+46]){let p=s.createRadialGradient(u,352,4,u,352,64);p.addColorStop(0,`rgba(235,110,100,${.55*i})`),p.addColorStop(1,"rgba(235,110,100,0)"),s.fillStyle=p,s.fillRect(u-70,282,140,140)}let n="#1d120c",r="#5b3a22",o=e.blink,a=(t.look?t.look[0]:e.lx)*12,l=(t.look?-t.look[1]:-e.ly)*10;for(let[u,p]of[[0,Ym],[1,$m]]){let g=t.eyes;if(o<.25&&g!=="closed"&&g!=="spiral"&&g!=="heart"&&(g="blink"),s.save(),g==="normal"||g==="star"||g==="half"||g==="angry"||g==="wide"){let m=g==="wide"?64:60,x=(g==="wide"?70:76)*Math.max(o,.25);if(g==="half"&&(s.beginPath(),s.rect(p.x-70,p.y-4,140,120),s.clip()),g==="angry"){s.beginPath();let v=u?-1:1;s.moveTo(p.x-80,p.y-80+(v>0?0:40)),s.lineTo(p.x+80,p.y-80+(v>0?40:0)),s.lineTo(p.x+80,p.y+90),s.lineTo(p.x-80,p.y+90),s.closePath(),s.clip()}s.fillStyle=n,s.beginPath(),s.ellipse(p.x,p.y,m,x,0,0,7),s.fill(),g!=="wide"?(s.fillStyle=r,s.beginPath(),s.ellipse(p.x+a,p.y+l+10,m*.62,x*.62,0,0,7),s.fill(),s.fillStyle=n,s.beginPath(),s.ellipse(p.x+a,p.y+l+10,m*.34,x*.36,0,0,7),s.fill()):(s.fillStyle="#fff",s.beginPath(),s.ellipse(p.x,p.y,m*.78,x*.8,0,0,7),s.fill(),s.fillStyle=n,s.beginPath(),s.arc(p.x+a*.6,p.y+l*.6,12,0,7),s.fill()),s.fillStyle="#fff",g==="star"?(Zc(s,p.x-10+a*.3,p.y-14+l*.3,26),Zc(s,p.x+18,p.y+22,10)):g!=="wide"&&(s.beginPath(),s.arc(p.x-17+a*.4,p.y-24+l*.4,16,0,7),s.fill(),s.beginPath(),s.arc(p.x+19+a*.4,p.y+22+l*.4,7,0,7),s.fill()),s.restore(),s.save(),s.strokeStyle=n,s.lineWidth=9,s.lineCap="round",g==="half"&&(s.beginPath(),s.moveTo(p.x-50,p.y-4),s.lineTo(p.x+50,p.y-4),s.stroke())}else if(g==="closed"||g==="blink")s.strokeStyle=n,s.lineWidth=12,s.lineCap="round",s.beginPath(),g==="closed"?s.arc(p.x,p.y+18,38,Math.PI*1.15,Math.PI*1.85):s.arc(p.x,p.y-22,40,Math.PI*.2,Math.PI*.8),s.stroke();else if(g==="spiral"){s.strokeStyle=n,s.lineWidth=7,s.beginPath();let m=e.t*6*(u?-1:1);for(let x=0;x<Math.PI*6;x+=.2){let v=x*6.5;s.lineTo(p.x+Math.cos(x+m)*v,p.y+Math.sin(x+m)*v)}s.stroke()}else g==="heart"&&(s.fillStyle="#e8325a",Nv(s,p.x,p.y+4,34+Math.sin(e.t*8)*3),s.fillStyle="rgba(255,255,255,.8)",s.beginPath(),s.arc(p.x-14,p.y-10,8,0,7),s.fill());s.restore()}s.strokeStyle="#1b1411",s.lineWidth=18,s.lineCap="round";for(let[u,p]of[[0,Ym],[1,$m]]){let g=u?1:-1,m=p.y-100,x=0,v=0;switch(t.brows){case"up":m-=14;break;case"determined":x=14,v=-4;break;case"angry":x=24,v=-10;break;case"worried":x=-16,v=8;break;case"raised":u?m-=22:x=6;break}let T=p.x-g*34,y=p.x+g*40;s.beginPath(),s.moveTo(T,m+x),s.quadraticCurveTo((T+y)/2,m-10+(x+v)/2,y,m+v+6),s.stroke()}s.lineCap="round",s.lineJoin="round";let c=e.mouth,h=Av.x,f=Av.y,d=()=>{s.fillStyle="#5a1a16",s.fill()};if(c>.08)s.beginPath(),s.ellipse(h,f,30+c*12,10+c*30,0,0,7),d(),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,f+8+c*14,18+c*6,6+c*9,0,0,Math.PI),s.fill();else switch(s.strokeStyle="#4a1a14",s.lineWidth=10,t.mouth){case"smile":s.beginPath(),s.arc(h,f-26,40,Math.PI*.2,Math.PI*.8),s.stroke();break;case"grin":s.beginPath(),s.moveTo(h-52,f-12),s.quadraticCurveTo(h,f-6,h+52,f-12),s.quadraticCurveTo(h+40,f+46,h,f+46),s.quadraticCurveTo(h-40,f+46,h-52,f-12),d(),s.fillStyle="#fff",s.fillRect(h-38,f-9,76,12),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,f+34,22,10,0,Math.PI,0),s.fill();break;case"smirk":s.beginPath(),s.moveTo(h-34,f+2),s.quadraticCurveTo(h+6,f+16,h+40,f-16),s.stroke();break;case"hmm":s.beginPath(),s.moveTo(h-26,f+6),s.lineTo(h+24,f-2),s.stroke();break;case"o":s.beginPath(),s.ellipse(h,f+4,18,24,0,0,7),d();break;case"small":s.beginPath(),s.ellipse(h,f+2,10,8,0,0,7),d();break;case"flat":s.beginPath(),s.moveTo(h-30,f+4),s.lineTo(h+30,f+4),s.stroke();break;case"wavy":s.beginPath();for(let u=-40;u<=40;u+=4)s.lineTo(h+u,f+4+Math.sin(u*.16+e.t*6)*7);s.stroke();break}}function nA(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(64,64),t.lineCap="round",t.lineJoin="round";let i=()=>{t.fillStyle="#fff7e6",t.beginPath(),t.arc(0,0,50,0,7),t.fill(),t.strokeStyle="rgba(26,21,48,.25)",t.lineWidth=4,t.stroke()};switch(s){case"bang":i(),t.fillStyle="#e0473a",t.font="900 72px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",0,4);break;case"question":i(),t.fillStyle="#1d3fbf",t.font="900 66px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("?",0,4);break;case"heart":t.fillStyle="#ff4d6d",Nv(t,0,6,40),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.arc(-18,-12,9,0,7),t.fill();break;case"sparkle":t.fillStyle="#ffd166",Zc(t,-8,0,44),t.fillStyle="#fff3c4",Zc(t,34,-30,16),Zc(t,30,34,12);break;case"zzz":t.fillStyle="#c9b8ff",t.font="900 44px Unbounded, sans-serif",t.fillText("z",-40,30),t.font="900 34px Unbounded, sans-serif",t.fillText("z",-6,0),t.font="900 26px Unbounded, sans-serif",t.fillText("z",22,-24);break;case"anger":t.strokeStyle="#e0473a",t.lineWidth=11;for(let[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.beginPath(),t.moveTo(r*10,o*34),t.quadraticCurveTo(r*10,o*10,r*34,o*10),t.stroke();break;case"sweat":t.fillStyle="#7fc8ff",t.beginPath(),t.moveTo(0,-44),t.quadraticCurveTo(34,10,0,40),t.quadraticCurveTo(-34,10,0,-44),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.ellipse(-8,12,6,12,.3,0,7),t.fill();break;case"swirl":t.strokeStyle="#b48cff",t.lineWidth=8,t.beginPath();for(let r=0;r<Math.PI*5;r+=.15)t.lineTo(Math.cos(r)*r*3,Math.sin(r)*r*3);t.stroke();break;case"note":t.fillStyle="#2fd3c6",t.beginPath(),t.ellipse(-16,26,18,13,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(26,14,18,13,-.4,0,7),t.fill(),t.fillRect(-2,-38,9,64),t.fillRect(40,-50,9,64),t.beginPath(),t.moveTo(-2,-38),t.lineTo(49,-50),t.lineTo(49,-34),t.lineTo(-2,-22),t.fill();break}let n=new Oi(e);return n.colorSpace=Ht,n}function Uv(){let s=new Ct,e=new Ct;s.add(e);let t=[-1,1].map(H=>{let X=new Ct;X.position.set(.12*H,.72,0),e.add(X);let ue=vr(new ir(.085,.48,8,20),Pv);ue.position.y=-.33,X.add(ue);let ae=vr(new Li(.18,.12,.3,3,.055),Iv);ae.position.set(0,-.65,.05),X.add(ae);let fe=new Ne(new Li(.185,.035,.305,1,.015),rs(2830141));fe.position.set(0,-.705,.05),X.add(fe);let Se=new Ne(new Fi(.19,.02,.12),rs(Cv));return Se.position.set(0,-.64,0),X.add(Se),X}),i=new Ct;i.position.y=.72,e.add(i);let n=vr(new Li(.52,.5,.31,5,.11),Jm);n.position.y=.26,i.add(n);let r=new Ne(new Ri(0,.09,.22,3),rs($c));r.rotation.set(Math.PI,Math.PI/6,0),r.scale.z=.25,r.position.set(0,.4,.15),i.add(r);for(let H of[-1,1]){let X=new Ne(new Li(.055,.3,.02,1,.008),rs(Rv));X.position.set(H*.075,.37,.162),X.rotation.z=H*.38,i.add(X)}for(let H of[-1,1]){let X=new Ne(new Yn(.028,.05,3),rs($c));X.position.set(H*.04,.475,.158),X.rotation.set(0,0,Math.PI+H*.5),X.scale.z=.3,i.add(X)}let o=new oi({color:Jt.gold,metalness:1,roughness:.25});for(let H of[.13]){let X=new Ne(new pi(.016,12,8),o);X.position.set(0,H,.16),i.add(X)}let a=new Ne(new Yn(.035,.05,3),new oi({color:Jt.gold,roughness:.35,sheen:1}));a.position.set(-.16,.405,.158),a.rotation.z=Math.PI,a.scale.z=.3,i.add(a);let l=new Ne(new Fi(.47,.05,.29),rs(1053734));l.position.y=.03,i.add(l);let c=[-1,1].map(H=>{let X=new Ct;X.position.set(.31*H,.46,0),i.add(X);let ue=vr(new ir(.074,.3,8,20),Jm);ue.position.y=-.18,X.add(ue);let ae=new Ne(new Ri(.068,.068,.04,14),rs($c));ae.position.y=-.37,X.add(ae);let fe=vr(new pi(.072,20,14),ko);if(fe.position.y=-.43,fe.scale.set(1,1.08,.9),X.add(fe),H<0){let Ge=new Ne(new As(.07,.014,8,24),o);Ge.rotation.x=Math.PI/2,Ge.position.y=-.355,X.add(Ge)}let Se=vr(new ir(.022,.04,4,8),ko);return Se.position.set(-H*.05,-.41,.04),Se.rotation.z=H*.6,X.add(Se),X}),h=new Ct;h.position.y=1.24,e.add(h),h.add(new Ne(new Ri(.07,.08,.1,14),rs(ko)));let f=new Ne(new As(.085,.022,8,20),rs($c));f.rotation.x=Math.PI/2,f.position.y=-.03,h.add(f);let d=new Ct;d.position.y=.06,h.add(d);let u=vr(new pi(.35,48,36),ko);u.scale.set(1,.97,.94),u.position.y=.34,d.add(u);for(let H of[-1,1]){let X=vr(new pi(.075,16,12),ko);X.scale.set(.6,1,.8),X.position.set(.34*H,.33,0),d.add(X)}let p=vr(new pi(.03,16,12),ko);p.position.set(0,.31,.33),p.scale.set(1,.8,.9),d.add(p);let g=document.createElement("canvas");g.width=Dv,g.height=Lv;let m=g.getContext("2d"),x=new Oi(g);x.colorSpace=Ht,x.anisotropy=8;let v=new Ne(new pi(.3535,48,32,Math.PI/2-.9,1.8,.9,1.35),new Ir({map:x,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}));v.renderOrder=2,u.add(v);{let H=new pi(.35,96,64),X=H.attributes.position,ue=new F,ae=new F,fe=(Ge,Ae,Ve)=>{let ye=Math.min(1,Math.max(0,(Ve-Ge)/(Ae-Ge)));return ye*ye*(3-2*ye)};for(let Ge=0;Ge<X.count;Ge++){ae.fromBufferAttribute(X,Ge).normalize();let Ae=(ae.z*.5+.5)**1.6,Ve=-.42+Ae*.95+.07*Math.exp(-(ae.x**2)/.05)*Math.max(0,ae.z)-Math.max(0,Math.abs(ae.x)-.8)*.6,ye=fe(Ve-.05,Ve+.06,ae.y),Ce=.31+ye*.068,et=(ae.z-.62)**2/.1+(ae.y-.68)**2/.06+ae.x**2/.16;Ce+=ye*.2*Math.exp(-et),Ce+=ye*.07*Math.exp(-((ae.z-.2)**2/.12+(ae.y-.9)**2/.05)),Ce+=ye*.03*fe(.2,.9,ae.y),Ce+=ye*.006*Math.sin(Math.atan2(ae.x,ae.z)*26+ae.y*9),ue.copy(ae).multiplyScalar(Ce),X.setXYZ(Ge,ue.x,ue.y,ue.z)}H.computeVertexNormals();let Se=new Ne(H,rs(Zm));Se.castShadow=!0,u.add(Se)}for(let H of[-1,1]){let X=new Ne(new Li(.05,.12,.07,1,.02),rs(Zm));X.position.set(.325*H,.32,.08),d.add(X)}let T=new Ct;T.position.set(0,.36,.36),d.add(T);let y=new oi({color:460557,roughness:.04,metalness:.2,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2});for(let H of[-1,1]){let X=new Ne(new Li(.19,.11,.025,3,.04),y);X.position.set(H*.115,0,-.01-Math.abs(H)*.012),X.rotation.y=H*.28,T.add(X);let ue=new Ne(new Li(.2,.02,.03,1,.008),o);ue.position.set(H*.115,.055,-.01),ue.rotation.y=H*.28,T.add(ue)}let b=new Ne(new Fi(.05,.015,.015),o);b.position.y=.03,T.add(b),T.scale.setScalar(.001),T.visible=!1;let M=new Ct;M.position.set(0,.36,-.02),d.add(M);let _=new Ne(new As(.4,.028,10,40,Math.PI),new oi({color:1382442,roughness:.3,clearcoat:.6}));M.add(_);for(let H of[-1,1]){let X=new Ne(new Ri(.1,.1,.07,24),new oi({color:1909312,roughness:.3,clearcoat:.7}));X.rotation.z=Math.PI/2,X.position.set(H*.39,-.03,0),M.add(X);let ue=new Ne(new As(.075,.012,8,24),new di({color:new Ue(Jt.faience).multiplyScalar(2.4),toneMapped:!1}));ue.rotation.y=Math.PI/2,ue.position.set(H*.428,-.03,0),M.add(ue)}M.scale.setScalar(.001),M.visible=!1;let S={},w=new Cr(new er({transparent:!0,depthWrite:!1,toneMapped:!1}));w.position.set(.45,2.3,0),w.scale.setScalar(.001),s.add(w);let E=new Ne(new uo(.42,.58,64),new di({color:new Ue(Jt.gold),transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1,alphaMap:wv("#fff","#000",128),side:Ci}));E.rotation.x=-Math.PI/2,E.position.y=.03,s.add(E);let D=new Rs(16769728,1.6,4.5,1.6);D.position.set(.7,2.1,1.5),s.add(D);let P=new Rs(9414911,.6,4,1.8);P.position.set(-1,1.4,1.2),s.add(P);let N=new Ne(new ho(.42,32),new di({color:0,transparent:!0,opacity:.22,depthWrite:!1,alphaMap:wv("#fff","#000")}));N.rotation.x=-Math.PI/2,N.position.y=.02,s.add(N),s.scale.setScalar(1.15);let R={mode:"idle",modeT:0,talk:0,walkPhase:0,speed:0,blinkT:2,blink:1,look:new Ie,spin:0,base:"happy",temp:null,tempT:0,mood:"happy",music:!1,faceKey:""},U=Kn.lerp,k=new Ue(Jt.gold),O=new Ue,Y=null;function W(H){R.mode!==H&&(R.mode=H,R.modeT=0)}function I(H,X=0){yr[H]&&(X?(R.temp=H,R.tempT=X):R.base=H)}function J(){R.spin=Math.PI*2,W("celebrate")}function de(H,X){H.visible=!0,H.userData.target=X?1:.001}function be(H,X,ue={}){R.modeT+=H,R.temp&&(R.tempT-=H,R.tempT<=0&&(R.temp=null));let ae=R.temp||(ue.sleepy?"sleepy":ue.dizzy?"dizzy":R.music&&!ue.busy?"vibing":R.base);if(ae!==R.mood){R.mood=ae;let je=yr[ae].emote;je!==Y&&(Y=je,je&&(w.material.map=S[je]||(S[je]=nA(je)),w.material.needsUpdate=!0,w.userData.pop=0))}let fe=yr[ae],Se=Math.min(R.speed/2.4,1);R.walkPhase+=H*(4+R.speed*3.2);let Ge=Math.sin(R.walkPhase);t[0].rotation.x=U(t[0].rotation.x,Ge*.75*Se,.3),t[1].rotation.x=U(t[1].rotation.x,-Ge*.75*Se,.3);let Ae={x:-Ge*.6*Se,z:-.08},Ve={x:Ge*.6*Se,z:.08},ye=Math.sin(X*2.2)*.012,Ce=Math.abs(Math.cos(R.walkPhase))*.06*Se+ye,et=Math.sin(X*1.3)*.04,re=0;if(R.mode==="wave"?(Ve={x:-.2,z:2.55+Math.sin(X*9)*.32},et=.12,R.modeT>2.4&&W("idle")):R.mode==="point"?(Ve={x:-1.35,z:.45},Ae={x:.1,z:-.12}):R.mode==="celebrate"?(Ae={x:0,z:-2.6-Math.sin(X*12)*.2},Ve={x:0,z:2.6+Math.sin(X*12)*.2},Ce+=Math.abs(Math.sin(R.modeT*7))*.25*Math.max(0,1-R.modeT/2),R.modeT>2.2&&W("idle")):R.mode==="think"&&(Ve={x:-2.1,z:-.9},et=-.15),ae==="vibing"&&Se<.2){let je=Math.sin(X*Math.PI*2*1.6);Ce+=Math.abs(je)*.03,et=je*.12,re=je*.05,Ae.z=-.25-Math.abs(je)*.2,Ve.z=.25+Math.abs(je)*.2}ae==="sleepy"&&(et=.25+Math.sin(X*.8)*.05,Ce-=.02),ae==="dizzy"&&(re=Math.sin(X*5)*.12,et=Math.cos(X*5)*.2),ae==="annoyed"&&Se<.2&&(Ae={x:-.5,z:.9},Ve={x:-.5,z:-.9}),ae==="shy"&&Se<.2&&(Ae={x:-.6,z:.5},Ve={x:-.6,z:-.5},et=.18),ae==="thinking"&&R.mode==="idle"&&(Ve={x:-2.1,z:-.9}),(ae==="excited"||ae==="love")&&R.mode==="idle"&&Se<.2&&(Ce+=Math.abs(Math.sin(X*6))*.05),ae==="cool"&&R.mode==="idle"&&Se<.2&&(Ve={x:-.3,z:.15},Ae={x:.1,z:-.5}),c[0].rotation.x=U(c[0].rotation.x,Ae.x,.18),c[0].rotation.z=U(c[0].rotation.z,Ae.z,.18),c[1].rotation.x=U(c[1].rotation.x,Ve.x,.18),c[1].rotation.z=U(c[1].rotation.z,Ve.z,.18),e.position.y=Ce,e.rotation.z=U(e.rotation.z,re,.1),i.scale.y=1+ye,d.rotation.y=U(d.rotation.y,R.look.x*.5,.08),d.rotation.x=U(d.rotation.x,-R.look.y*.25+(R.talk?Math.sin(X*9)*.03:0),.08),d.rotation.z=U(d.rotation.z,et,.06),R.blinkT-=H;let V=1;R.blinkT<.14&&(V=Math.abs(R.blinkT-.07)/.07),R.blinkT<0&&(R.blinkT=2+Math.random()*3);let Me=R.talk?Math.round((.5+.5*Math.sin(X*22))*(.6+.4*Math.sin(X*7.1))*4)/4:0,Ke=fe.eyes==="spiral"||fe.eyes==="heart"||fe.mouth==="wavy",Fe=`${ae}|${V<.25?0:1}|${Me}|${Math.round(R.look.x*4)}|${Math.round(R.look.y*4)}|${Ke?Math.floor(X*20):0}`;Fe!==R.faceKey&&(R.faceKey=Fe,iA(m,{mood:ae,blink:V,mouth:Me,lx:R.look.x,ly:R.look.y,t:X}),x.needsUpdate=!0);let Be=!!fe.glasses,tt=R.music;Be!==!!T.userData.on&&(T.userData.on=Be,de(T,Be)),tt!==!!M.userData.on&&(M.userData.on=tt,de(M,tt));for(let je of[T,M]){let z=je.userData.target??.001,st=U(je.scale.x,z,.18);je.scale.setScalar(st),st<.01&&z<.01&&(je.visible=!1)}if(Y){w.userData.pop=Math.min(1,(w.userData.pop||0)+H*4);let je=w.userData.pop,z=1+Math.sin(je*Math.PI)*.35;w.scale.setScalar(.42*je*z),w.position.y=2.3+Math.sin(X*3)*.05}else w.scale.setScalar(U(w.scale.x,.001,.2));if(O.setHex(fe.aura),k.lerp(O,.06),E.material.color.copy(k).multiplyScalar(1.6),E.material.opacity=.35+Math.sin(X*3)*.12,E.scale.setScalar(1+Math.sin(X*3)*.04),R.spin>0){let je=Math.min(R.spin,H*12);R.spin-=je,e.rotation.y+=je}else e.rotation.y=U(e.rotation.y,0,.2)}return{root:s,head:d,st:R,update:be,setMode:W,setMood:I,poke:J,headAnchor:()=>d.localToWorld(new F(0,.9,0))}}var Gs=[new F(2.8,0,li[0]/2+Vs+2.6),new F(-3.3,0,li[1]/2+1),new F(3.3,0,li[2]/2+1),new F(-3.3,0,li[3]/2+1),new F(3.3,0,li[4]/2+1),new F(-2.9,0,li[5]/2+1),new F(0,0,2.05)],Ov=Gs.length,sA=yn/8,rA=Vs/8;function jf(s,e){let t=0;for(let i=0;i<li.length;i++)Math.abs(s)<=li[i]/2+.05&&Math.abs(e)<=li[i]/2+.05&&(t=Math.max(t,(i+1)*yn));if(Math.abs(s)<=1.3)for(let i=0;i<li.length;i++){let n=li[i]/2,r=n+Vs;e>=n&&e<=r&&(t=Math.max(t,Hs(i)+Math.min(8,Math.ceil((r-e)/rA+1e-4))*sA))}return t}var Km=[];for(let s=0;s<Gs.length-1;s++){let e=Gs[s],t=Gs[s+1],i=[new Ie(e.x,e.z),new Ie(0,li[s]/2+Vs+.35),new Ie(0,li[s]/2-.4),new Ie(t.x,t.z)],n=[0];for(let r=1;r<i.length;r++)n.push(n[r-1]+i[r].distanceTo(i[r-1]));Km.push({pts:i,len:n})}function Qm(s,e=new Ie){let t=Math.min(Math.floor(s),Km.length-1),i=Kn.clamp(s-t,0,1);if(s>=Gs.length-1)return e.set(Gs[Gs.length-1].x,Gs[Gs.length-1].z),e;let n=Km[t],r=i*n.len[n.len.length-1],o=1;for(;o<n.len.length-1&&n.len[o]<r;)o++;let a=(r-n.len[o-1])/(n.len[o]-n.len[o-1]||1);return e.copy(n.pts[o-1]).lerp(n.pts[o],a)}var Fv=s=>{let e=Gs[s].clone();return e.y=jf(e.x,e.z),e};var jm=["Ground","Foundation","Stack","Work","Research","Arena","Capstone"],Bv=["wave","point","think","point","point","celebrate","wave"],kv={en:[["Hey! I'm Adham. Well, the mini version.","This pyramid is my stack. Every step is one layer of what I do.","Scroll and I'll climb it with you. Click me if you get bored."],["Step one: the foundation.","I study AI & Data Science at Badya University, class of 2028.","My favourite part is the backend: APIs, databases, the logic nobody sees."],["These are my tools. They orbit me all day.","Node.js and PostgreSQL for servers, C++ for contests, Python for data.","And tests. Lots of tests."],["My projects! Real screenshots, real repos.","SmartHabbit is my main one. I built most of its backend.","See the space game on that screen? We built it for NASA Space Apps 2026."],["Research level. Watch the particles.","Sensor data goes to XGBoost, network traffic goes to Isolation Forest.","They meet in the gold node and become one risk score. It is on IEEE Xplore!"],["The arena! In ICPC, every balloon means a solved problem.","88th in the ECPC qualifications in 2025, 177th in 2026. The next one is mine.","And that rocket? Still orbiting since Space Apps."],["We made it to the top!","Write me a request below and the capstone will fire it.","I reply faster than my APIs. Almost."]],ar:[["\u0623\u0647\u0644\u0627\u064B! \u0623\u0646\u0627 \u0623\u062F\u0647\u0645\u2026 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0645\u064A\u0646\u064A \u064A\u0639\u0646\u064A \u{1F604}","\u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0647\u0648 \u0627\u0644\u0640 stack \u0628\u062A\u0627\u0639\u064A\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u0641\u064A\u0647 \u0637\u0628\u0642\u0629 \u0645\u0646 \u0634\u063A\u0644\u064A.","\u0627\u0639\u0645\u0644 scroll \u0648\u0623\u0646\u0627 \u0647\u0637\u0644\u0639 \u0645\u0639\u0627\u0643 \u062F\u0631\u062C\u0629 \u062F\u0631\u062C\u0629. \u0648\u0644\u0648 \u0632\u0647\u0642\u062A \u062F\u0648\u0633 \u0639\u0644\u064A\u0651\u0627."],["\u0623\u0648\u0644 \u062F\u0631\u062C\u0629: \u0627\u0644\u0623\u0633\u0627\u0633.","\u0628\u062F\u0631\u0633 AI \u0648 Data Science \u0641\u064A \u062C\u0627\u0645\u0639\u0629 \u0628\u0627\u062F\u064A\u0629\u060C \u062F\u0641\u0639\u0629 2028.","\u0628\u0633 \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629 \u0628\u062D\u0628\u0647\u0627 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F: \u0627\u0644\u0640 APIs \u0648\u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u0644\u064A \u0645\u062D\u062F\u0634 \u0628\u064A\u0634\u0648\u0641\u0647."],["\u062F\u064A \u0623\u062F\u0648\u0627\u062A\u064A\u060C \u0628\u062A\u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0627 \u0637\u0648\u0644 \u0627\u0644\u064A\u0648\u0645.","Node.js \u0648 PostgreSQL \u0644\u0644\u0633\u064A\u0631\u0641\u0631\u0627\u062A\u060C C++ \u0644\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062A\u060C \u0648 Python \u0644\u0644\u062F\u0627\u062A\u0627.","\u0648\u062A\u0633\u062A\u0627\u062A\u2026 \u062A\u0633\u062A\u0627\u062A \u0643\u062A\u064A\u0631."],["\u062F\u064A \u0645\u0634\u0627\u0631\u064A\u0639\u064A! \u0633\u0643\u0631\u064A\u0646 \u0634\u0648\u062A\u0633 \u062D\u0642\u064A\u0642\u064A\u0629 \u0648\u0631\u064A\u0628\u0648\u0632 \u062D\u0642\u064A\u0642\u064A\u0629.","SmartHabbit \u0623\u0647\u0645\u0647\u0645\u060C \u0648\u0623\u0646\u0627 \u0639\u0627\u0645\u0644 \u0623\u063A\u0644\u0628 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639\u0647.","\u0634\u0627\u064A\u0641 \u0644\u0639\u0628\u0629 \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629\u061F \u0639\u0645\u0644\u0646\u0627\u0647\u0627 \u0641\u064A \u0647\u0627\u0643\u0627\u062B\u0648\u0646 \u0646\u0627\u0633\u0627 Space Apps 2026."],["\u062F\u064A \u062F\u0631\u062C\u0629 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0639\u0644\u0645\u064A. \u0628\u0635 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0644\u064A \u0628\u062A\u062C\u0631\u064A.","\u062F\u0627\u062A\u0627 \u0627\u0644\u062D\u0633\u0627\u0633\u0627\u062A \u0628\u062A\u0631\u0648\u062D \u0644\u0640 XGBoost\u060C \u0648\u062A\u0631\u0627\u0641\u064A\u0643 \u0627\u0644\u0634\u0628\u0643\u0629 \u0628\u064A\u0631\u0648\u062D \u0644\u0640 Isolation Forest.","\u0628\u064A\u062A\u0642\u0627\u0628\u0644\u0648\u0627 \u0641\u064A \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062F\u0647\u0628 \u0648\u064A\u0637\u0644\u0639\u0648\u0627 risk score \u0648\u0627\u062D\u062F. \u0648\u0627\u0644\u0648\u0631\u0642\u0629 \u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 IEEE Xplore!"],["\u0627\u0644\u0623\u0631\u064A\u0646\u0627! \u0641\u064A \u0627\u0644\u0640 ICPC \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A.","\u0627\u0644\u0645\u0631\u0643\u0632 88 \u0641\u064A \u062A\u0635\u0641\u064A\u0627\u062A ECPC \u0633\u0646\u0629 2025\u060C \u0648177 \u0641\u064A 2026. \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u064A.","\u0648\u0627\u0644\u0635\u0627\u0631\u0648\u062E \u062F\u0647\u061F \u0644\u0633\u0647 \u0628\u064A\u0644\u0641 \u0645\u0646 \u0623\u064A\u0627\u0645 Space Apps."],["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u0642\u0645\u0629!","\u0627\u0628\u0639\u062A\u0644\u064A request \u0645\u0646 \u062A\u062D\u062A\u060C \u0648\u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628 \u0647\u062A\u0637\u0644\u0642\u0647.","\u0628\u0631\u062F \u0623\u0633\u0631\u0639 \u0645\u0646 \u0627\u0644\u0640 APIs \u0628\u062A\u0627\u0639\u062A\u064A\u2026 \u062A\u0642\u0631\u064A\u0628\u0627\u064B."]]},zv={en:["Hey, that tickles!","Status 418: I'm a teapot.","Did you try turning it off and on again?","SELECT * FROM snacks;","My code works and I know exactly why. Mostly.","Rate limit: 5 pokes per 15 minutes. Just kidding."],ar:["\u0628\u062A\u0632\u063A\u0632\u063A\u0646\u064A \u0643\u062F\u0647!","Status 418: \u0623\u0646\u0627 \u0628\u0631\u0627\u062F \u0634\u0627\u064A \u2615","\u062C\u0631\u0628\u062A \u062A\u0642\u0641\u0644\u0647 \u0648\u062A\u0641\u062A\u062D\u0647 \u062A\u0627\u0646\u064A\u061F","SELECT * FROM snacks;","\u0627\u0644\u0643\u0648\u062F \u0634\u063A\u0627\u0644 \u0648\u0623\u0646\u0627 \u0639\u0627\u0631\u0641 \u0644\u064A\u0647\u2026 \u063A\u0627\u0644\u0628\u0627\u064B.","Rate limit: \u062E\u0645\u0633 \u0632\u0642\u0627\u062A \u0643\u0644 \u0631\u0628\u0639 \u0633\u0627\u0639\u0629. \u0628\u0647\u0632\u0631."]},Hv={en:"201 Created! Your request reached the top.",ar:"201 Created! \u0627\u0644\u0631\u064A\u0643\u0648\u064A\u0633\u062A \u0628\u062A\u0627\u0639\u0643 \u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629."},Jc={balloon:{en:"Pop! Every balloon is a solved problem. It comes back when I solve another one.",ar:"\u0628\u0648\u0645! \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A\u060C \u0648\u0647\u062A\u0631\u062C\u0639 \u0644\u0645\u0627 \u0623\u062D\u0644 \u0648\u0627\u062D\u062F\u0629 \u0643\u0645\u0627\u0646."},rocket:{en:"Full thrust! Same energy as hackathon weekend.",ar:"Full thrust! \u0646\u0641\u0633 \u0637\u0627\u0642\u0629 \u0648\u064A\u0643 \u0625\u0646\u062F \u0627\u0644\u0647\u0627\u0643\u0627\u062B\u0648\u0646."},moon:{en:"The Moon from Level 0 of CAPCOM: Storm Watch says hi.",ar:"\u0627\u0644\u0642\u0645\u0631 \u0628\u062A\u0627\u0639 Level 0 \u0641\u064A \u0644\u0639\u0628\u0629 CAPCOM \u0628\u064A\u0633\u0644\u0651\u0645 \u0639\u0644\u064A\u0643."},cap:{en:"You found the capstone! Now send me a real request below.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628! \u0627\u0628\u0639\u062A\u0644\u064A \u0628\u0642\u0649 request \u0628\u062C\u062F \u0645\u0646 \u062A\u062D\u062A."}},e0={"C++":["ICPC contests and Sentinel FDS, a Qt desktop app.","\u0645\u0633\u0627\u0628\u0642\u0627\u062A ICPC\u060C \u0648 Sentinel FDS \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 Qt."],TypeScript:["The SmartHabbit backend and the BU-LabTrack frontend.","\u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639 SmartHabbit \u0648\u0627\u0644\u0641\u0631\u0648\u0646\u062A \u0628\u062A\u0627\u0639 BU-LabTrack."],JavaScript:["CAPCOM: Storm Watch and this whole pyramid.","\u0644\u0639\u0628\u0629 CAPCOM \u0648\u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0643\u0644\u0647."],Python:["The IoT Sentinel experiments and Shubha's fraud model.","\u062A\u062C\u0627\u0631\u0628 IoT Sentinel \u0648\u0645\u0648\u062F\u064A\u0644 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0644 \u0628\u062A\u0627\u0639 \u0634\u064F\u0628\u0647\u0629."],SQL:["Every schema I design. SmartHabbit has 11 migrations.","\u0643\u0644 \u0633\u0643\u064A\u0645\u0627 \u0628\u0639\u0645\u0644\u0647\u0627. SmartHabbit \u0641\u064A\u0647 11 migration."],Java:["ITI DevBelt OOP and the HackerRank certificate.","\u0643\u0648\u0631\u0633 OOP \u0641\u064A ITI \u0648\u0634\u0647\u0627\u062F\u0629 HackerRank."],"C#":["University coursework, and a lot of curiosity.","\u0634\u063A\u0644 \u0627\u0644\u062C\u0627\u0645\u0639\u0629\u2026 \u0648\u0641\u0636\u0648\u0644 \u0643\u062A\u064A\u0631."],"Node.js":["My main backend runtime: SmartHabbit and BU-LabTrack.","\u0627\u0644\u0640 runtime \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0628\u062A\u0627\u0639\u064A: SmartHabbit \u0648 BU-LabTrack."],Express:["Routes, middleware and error handling in SmartHabbit.","\u0627\u0644\u0640 routes \u0648\u0627\u0644\u0640 middleware \u0648\u0627\u0644\u0640 error handling \u0641\u064A SmartHabbit."],REST:["BU-LabTrack: labs, equipment, reservations, maintenance.","BU-LabTrack: \u0645\u0639\u0627\u0645\u0644 \u0648\u0623\u062C\u0647\u0632\u0629 \u0648\u062D\u062C\u0648\u0632\u0627\u062A \u0648\u0635\u064A\u0627\u0646\u0629."],JWT:["Access + refresh tokens, with bcrypt and rate limits.","Access \u0648 refresh tokens \u0645\u0639 bcrypt \u0648 rate limit."],"socket.io":["Real-time chat and notifications in SmartHabbit.","\u0627\u0644\u0634\u0627\u062A \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u062D\u0638\u064A\u0629 \u0641\u064A SmartHabbit."],PostgreSQL:["SmartHabbit's database, tested against a scratch DB.","\u062F\u0627\u062A\u0627\u0628\u064A\u0632 SmartHabbit\u060C \u0648\u0645\u062A\u064A\u0633\u0651\u062A\u0629 \u0639\u0644\u0649 \u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0645\u0624\u0642\u062A\u0629."],SQLite:["Sentinel FDS stores its transactions in SQLite.","Sentinel FDS \u0628\u064A\u062E\u0632\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A SQLite."],MySQL:["Database courses and side projects.","\u0643\u0648\u0631\u0633\u0627\u062A \u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u0627\u0646\u0628\u064A\u0629."],XGBoost:["The supervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 supervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],"Isolation Forest":["The unsupervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 unsupervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],"Power BI":["DataCamp: Introduction to Power BI.","\u0643\u0648\u0631\u0633 Power BI \u0639\u0644\u0649 DataCamp."],React:["BU-LabTrack's frontend, with shadcn/ui.","\u0641\u0631\u0648\u0646\u062A BU-LabTrack \u0645\u0639 shadcn/ui."],"three.js":["CAPCOM: Storm Watch, and the pyramid you're standing on.","\u0644\u0639\u0628\u0629 CAPCOM\u060C \u0648\u0627\u0644\u0647\u0631\u0645 \u0627\u0644\u0644\u064A \u0625\u0646\u062A \u0648\u0627\u0642\u0641 \u0639\u0644\u064A\u0647."],Docker:["SmartHabbit ships in a non-root Docker image.","SmartHabbit \u0628\u064A\u062A\u0634\u062D\u0646 \u0641\u064A Docker image \u0645\u0646 \u063A\u064A\u0631 root."],Git:["Every project. Small commits, clear messages.","\u0643\u0644 \u0645\u0634\u0631\u0648\u0639. commits \u0635\u063A\u064A\u0631\u0629 \u0648\u0631\u0633\u0627\u064A\u0644 \u0648\u0627\u0636\u062D\u0629."],Jest:["Integration tests with supertest in SmartHabbit.","\u062A\u0633\u062A\u0627\u062A integration \u0645\u0639 supertest \u0641\u064A SmartHabbit."],Postman:["Testing every API before the frontend touches it.","\u0628\u062C\u0631\u0628 \u0643\u0644 API \u0642\u0628\u0644 \u0645\u0627 \u0627\u0644\u0641\u0631\u0648\u0646\u062A \u064A\u0644\u0645\u0633\u0647."],Qt:["Sentinel FDS, a C++17 desktop app.","Sentinel FDS\u060C \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 C++17."],Vercel:["CAPCOM is deployed there, with a serverless function.","CAPCOM \u0645\u062A\u0646\u0634\u0631\u0629 \u0647\u0646\u0627\u0643 \u0645\u0639 serverless function."]},Vv=["happy","focused","thinking","excited","focused","cool","happy"],ys={term:{en:'Ooh, a terminal. Type "help".',ar:"\u062A\u064A\u0631\u0645\u064A\u0646\u0627\u0644! \u0627\u0643\u062A\u0628 help."},threatHi:{en:"Critical risk! The fusion layer would raise the alarm right now.",ar:"\u062E\u0637\u0631 \u0639\u0627\u0644\u064A \u062C\u062F\u0627\u064B! \u0637\u0628\u0642\u0629 \u0627\u0644\u0640 fusion \u0643\u0627\u0646\u062A \u0647\u062A\u0636\u0631\u0628 \u0625\u0646\u0630\u0627\u0631 \u062D\u0627\u0644\u0627\u064B."},gameStart:{en:"Go go go! Pop them before they fly away!",ar:"\u064A\u0644\u0627 \u064A\u0644\u0627! \u0641\u0631\u0642\u0639\u0647\u0645 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0637\u064A\u0631\u0648\u0627!"},gameEnd:{en:s=>`${s} balloons! ${s>=8?"That's a gold-medal pace.":"Not bad. Try again?"}`,ar:s=>`${s} \u0628\u0627\u0644\u0648\u0646\u0629! ${s>=8?"\u062F\u0647 \u0645\u0633\u062A\u0648\u0649 \u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u062F\u0647\u0628.":"\u0645\u0634 \u0648\u062D\u0634. \u062A\u062C\u0631\u0628 \u062A\u0627\u0646\u064A\u061F"}`},wake:{en:"Huh? I wasn't sleeping. I was\u2026 compiling.",ar:"\u0647\u0627\u061F \u0623\u0646\u0627 \u0645\u0643\u0646\u062A\u0634 \u0646\u0627\u064A\u0645\u2026 \u0643\u0646\u062A \u0628\u0639\u0645\u0644 compile."},dizzy:{en:"Whoa, slow down! The stairs are spinning.",ar:"\u0628\u0627\u0644\u0631\u0627\u062D\u0629! \u0627\u0644\u0633\u0644\u0645 \u0628\u064A\u0644\u0641 \u0628\u064A\u0627."},shy:{en:"Okay okay, I get it, I'm cute.",ar:"\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635\u060C \u0639\u0631\u0641\u062A \u0625\u0646\u064A \u0643\u064A\u0648\u062A."},annoyed:{en:"Error 429: too many pokes.",ar:"Error 429: \u0632\u0642\u0627\u062A \u0643\u062A\u064A\u0631 \u0623\u0648\u064A."},allArtifacts:{en:"You found all ten artifacts! You'd be a great teammate.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0639\u0634\u0631 \u0642\u0637\u0639 \u0643\u0644\u0647\u0645! \u0625\u0646\u062A \u0647\u062A\u0628\u0642\u0649 teammate \u062C\u0627\u0645\u062F."},focus:{en:"Here it is, up close.",ar:"\u0623\u0647\u0648\u060C \u0645\u0646 \u0642\u0631\u064A\u0628."}};var t0=[{id:"first-step",name:"First step",hint:"Climb to the first level",icon:"\u{13080}"},{id:"summit",name:"Summit",hint:"Reach the capstone",icon:"\u{13274}"},{id:"poker",name:"Poker face",hint:"Poke mini-Adham 5 times",icon:"\u{13000}"},{id:"moonwalker",name:"Moonwalker",hint:"Click the moon",icon:"\u{131F9}"},{id:"popper",name:"Balloon popper",hint:"Score 8+ in Balloon Rush",icon:"\u{131A3}"},{id:"red-team",name:"Red team",hint:"Max out the attack in Research",icon:"\u{132F9}"},{id:"root",name:"Root access",hint:"Open the terminal",icon:"\u{133CF}"},{id:"polyglot",name:"Polyglot",hint:"Make the guide speak Arabic",icon:"\u{13153}"},{id:"dj",name:"DJ",hint:"Turn the sound on",icon:"\u{13296}"},{id:"hired",name:"201 Created",hint:"Send a real request",icon:"\u{1339B}"}],Wv="adham-artifacts",zo=new Set;try{zo=new Set(JSON.parse(localStorage.getItem(Wv)||"[]"))}catch{}var Gv=[],Ti={list:t0,has:s=>zo.has(s),count:()=>zo.size,onUnlock:s=>Gv.push(s),unlock(s){if(zo.has(s))return!1;let e=t0.find(t=>t.id===s);if(!e)return!1;zo.add(s);try{localStorage.setItem(Wv,JSON.stringify([...zo]))}catch{}return Gv.forEach(t=>t(e,zo.size,t0.length)),!0}};Bt.registerPlugin(ft,Jf);var nt=s=>document.querySelector(s),Sr=matchMedia("(prefers-reduced-motion: reduce)").matches,rl=()=>innerWidth<=820,ed=Ov,si="en";try{si=localStorage.getItem("adham-guide-lang")||"en"}catch{}var os=new yv({smoothWheel:!Sr,lerp:.085,autoRaf:!1});os.on("scroll",ft.update);Bt.ticker.add(s=>os.raf(s*1e3));Bt.ticker.lagSmoothing(0);var td=[...document.querySelectorAll(".sec")],oA=document.getElementById("stage"),Ss=()=>oA.getBoundingClientRect(),Xv=()=>{let s=Ss();return s.width/Math.max(1,s.height)<1.15},sl=s=>os.scrollTo(td[s],{offset:rl()?-Ss().height:0,duration:Sr?0:2});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",e=>{e.preventDefault(),sl(+s.dataset.go)}));function i0(){let s=nt("#name"),e="Adham Harp",t=Array.from("\u{13080}\u{130ED}\u{131A3}\u{131F3}\u{13296}\u{132F9}\u{1339B}\u{133CF}\u{13153}\u{13216}\u{13000}\u{13079}\u{13193}\u{1336F}");if(Sr){s.textContent=e;return}let i={p:0};Bt.to(i,{p:1,duration:2.4,ease:"power2.inOut",onUpdate(){let n=Math.floor(i.p*e.length);s.innerHTML=[...e].map((r,o)=>o<n||r===" "?r:`<span class="gl">${t[Math.random()*t.length|0]}</span>`).join("")},onComplete(){s.textContent=e}})}var id=nt("#scene"),rn;try{rn=new qu({canvas:id,antialias:!0,powerPreference:"high-performance"})}catch{rn=null}var Tt=lA();rn?aA().catch(s=>{console.error(s),nt("#loader").classList.add("done"),i0(),s0()}):(id.remove(),nt("#loader").classList.add("done"),i0(),s0());async function aA(){await Promise.race([Promise.all(["700 54px Unbounded",'600 42px "Instrument Sans"'].map(te=>document.fonts.load(te))),new Promise(te=>setTimeout(te,2500))]);let s=Math.min(devicePixelRatio,rl()?1.5:1.75);rn.setPixelRatio(s),rn.setSize(Ss().width,Ss().height,!1),rn.toneMapping=go,rn.toneMappingExposure=1.12,rn.shadowMap.enabled=!0,rn.shadowMap.type=po;let e=new ao;e.fog=new bl(923202,.0072);let t=new Yi(42,innerWidth/innerHeight,.1,1500),i=new va,n=0,r=1;i.onProgress=(te,oe,j)=>{n=oe,r=j,n0(oe/j)};let o=rl()||(navigator.hardwareConcurrency||8)<=4?"low":"high",a=Ev(e,rn,i,o),l=Uv();e.add(l.root);let c=te=>typeof te=="object"?te[si]:te,h=performance.now(),f=!1,d=[],u=null;for(let te of["pointermove","keydown","wheel","touchstart"])addEventListener(te,()=>{h=performance.now()},{passive:!0});Tt.mood=te=>l.setMood(te,4),document.querySelectorAll("[data-skill]").forEach(te=>te.addEventListener("click",()=>{document.querySelectorAll("[data-skill].on").forEach(Re=>Re.classList.remove("on")),te.classList.add("on");let oe=te.dataset.skill,j=e0[oe];a.highlightSkill&&a.highlightSkill(oe);let Je=nt("#used-in");Je&&j&&(Je.querySelector("b").textContent=`${oe} \u2014 ${e0[oe][0]}`,Bt.fromTo(Je,{opacity:.3},{opacity:1,duration:.4})),j&&Tt.say(`${oe}: ${j[si==="ar"?1:0]}`,{temp:!0,hold:5200}),l.setMood("excited",2.5),ei.play("arrive")})),document.querySelectorAll(".see3d").forEach(te=>te.addEventListener("click",()=>{let oe=a.props.screens?.[te.dataset.screen];if(!oe)return;let j=new F;oe.getWorldPosition(j);let Je=new F(0,0,1).applyQuaternion(oe.getWorldQuaternion(new cn));u={tgt:j,pos:j.clone().add(Je.multiplyScalar(2.6)).add(new F(0,.25,0)),k:0,q:ye},l.setMode("point"),l.setMood("excited",3),Tt.say(c(ys.focus),{temp:!0}),ei.play("whoosh")}));let p=nt("#threat"),g=nt("#risk-out");p.addEventListener("input",()=>{let te=p.value/100,oe=Math.min(3,Math.floor(te*4-1e-4));a.props.research.userData.threat=te,g.dataset.tier=Math.max(0,oe),g.querySelector("b").textContent=["Low","Medium","High","Critical"][Math.max(0,oe)],te>.95?(Ti.unlock("red-team"),l.setMood("surprised",2.5),p.dataset.warned||(p.dataset.warned=1,Tt.say(c(ys.threatHi),{temp:!0}))):te>.6?l.setMood("worried",2):te>.3&&l.setMood("focused",2)});let m=nt("#game-hud"),x=nt("#g-score"),v=nt("#g-time"),T=nt("#best"),y=0;try{y=+localStorage.getItem("adham-balloon-best")||0}catch{}let b=()=>{T.textContent=y?`Best: ${y}`:""};b(),nt("#play").addEventListener("click",()=>{a.game.active||(sl(5),a.game.start(15),m.hidden=!1,l.setMood("excited",16),Tt.say(c(ys.gameStart),{temp:!0}),ei.play("whoosh"))}),a.game.onTick=te=>{x.textContent=te.score,v.textContent=Math.max(0,Math.ceil(te.left))},a.game.onEnd=te=>{if(m.hidden=!0,te.score>y){y=te.score;try{localStorage.setItem("adham-balloon-best",y)}catch{}}b(),Tt.say(ys.gameEnd[si](te.score),{temp:!0,hold:5e3}),l.setMood(te.score>=8?"cool":"happy",4),l.setMode("celebrate"),te.score>=8&&Ti.unlock("popper")},Ti.onUnlock((te,oe,j)=>{l.setMood("love",2.5),ei.play("arrive"),oe===j&&setTimeout(()=>Tt.say(c(ys.allArtifacts),{temp:!0,hold:6e3}),1500)});let M=new Gt(Ss().width*s,Ss().height*s,{type:jt,samples:4}),_=new Ku(rn,M);_.addPass(new Qu(e,t));let S=null;if(o==="high")try{S=new La(e,t,innerWidth,innerHeight),S.output=La.OUTPUT.Default,S.blendIntensity=.85,S.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1,scale:1.1}),_.addPass(S)}catch{S=null}let w=new Da(new Ie(innerWidth/2,innerHeight/2),.62,.5,.92);_.addPass(w),_.addPass(new ju);let E=new Ia({uniforms:{tDiffuse:{value:null},t:{value:0},amt:{value:.028}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, amt; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
      void main(){ vec2 d = vUv-.5; float r = dot(d,d);
        vec3 c = vec3(texture2D(tDiffuse, vUv - d*r*.005).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + d*r*.005).b);
        c *= 1. - smoothstep(.15,.7,r)*.45;
        c += (h(vUv*800.)-.5)*amt;
        gl_FragColor = vec4(c,1.); }`});_.addPass(E);let D=!0,P=[],N=[],R,U,k=null;function O(){k=Xv(),P=[],N=[];for(let te=0;te<ed;te++){let oe=Fv(te);if(te===0){k?(P.push(new F(5.6,3.1,oe.z+9.5)),N.push(new F(1.9,2.9,oe.z-3))):(P.push(new F(10,4.6,oe.z+13)),N.push(new F(-1.2,6.2,8)));continue}if(te===ed-1){P.push(new F(-5.8,oe.y+3.1,10.2)),N.push(new F(-.4,oe.y+1.9,.6));continue}let j=Math.sign(oe.x)||1,Je=k?.82:1;P.push(new F(oe.x+j*2.6*Je,oe.y+2.8*Je,oe.z+8.6*Je)),N.push(new F(oe.x*.92+j*.8,oe.y+1.6,oe.z-1))}R=new $n(P,!1,"centripetal"),U=new $n(N,!1,"centripetal")}O();let Y=td.map(te=>({left:0,right:1,center:.5})[te.dataset.side]??.5),W={k:Sr?0:1},I=new F(46,30,90),J=[],de=()=>{let te=os.scroll??scrollY;J=td.map(oe=>oe.getBoundingClientRect().top+te)};de(),addEventListener("load",de),new ResizeObserver(de).observe(document.body);let be=(te,oe,j)=>{let Je=Kn.clamp((j-te)/(oe-te),0,1);return Je*Je*(3-2*Je)};function H(){let te=rl()?Ss().height:0,oe=(os.scroll??scrollY)+te+(innerHeight-te)*.45,j=(innerHeight-te)*.4,Je=0;for(let Re=1;Re<J.length;Re++)Je+=be(J[Re]-j,J[Re]+j,oe);return Je}let X=new Ie,ue=new zl;addEventListener("pointermove",te=>{let oe=Ss();X.set(Kn.clamp((te.clientX-oe.left)/oe.width*2-1,-1.5,1.5),Kn.clamp(-((te.clientY-oe.top)/oe.height)*2+1,-1.5,1.5))}),id.addEventListener("pointerdown",te=>{let oe=Ss(),j=new Ie((te.clientX-oe.left)/oe.width*2-1,-((te.clientY-oe.top)/oe.height)*2+1);if(ue.setFromCamera(j,t),ue.intersectObject(l.root,!0).length){l.poke(),ei.play("poke");let L=performance.now();d=d.filter(q=>L-q<6e3),d.push(L);let A=d.length;if(A>=5&&Ti.unlock("poker"),A>=7)l.setMood("dizzy",3),Tt.say(c(ys.annoyed),{temp:!0});else if(A>=5)l.setMood("annoyed",3),Tt.say(c(ys.annoyed),{temp:!0});else if(A>=3)l.setMood("shy",3),Tt.say(c(ys.shy),{temp:!0});else{l.setMood("surprised",1.4);let q=zv[si];Tt.say(q[Math.random()*q.length|0],{temp:!0})}return}let Je=ue.intersectObjects(a.clickables,!1)[0];if(!Je)return;let Re=Je.object,He=Re.userData.onClick;if(He==="gameBalloon"){a.game.hit(Re)&&ei.play("pop");return}if(He==="balloon"){let L=Re.userData.group;if(L.userData.popped)return;L.userData.popped=!0,ei.play("pop"),Bt.to(Re.scale,{x:1.5,y:1.7,z:1.5,duration:.08,onComplete:()=>{Re.visible=!1}}),Tt.say(Jc.balloon[si],{temp:!0}),setTimeout(()=>{Re.visible=!0,Re.scale.set(.01,.01,.01),Bt.to(Re.scale,{x:1,y:1.18,z:1,duration:.8,ease:"elastic.out(1,.5)"}),L.userData.popped=!1},5e3)}else He==="rocket"?(a.props.rocket.userData.boost=1,ei.play("whoosh"),Tt.say(Jc.rocket[si],{temp:!0})):He==="moon"?(Tt.say(Jc.moon[si],{temp:!0}),ei.play("arrive"),Ti.unlock("moonwalker"),l.setMood("surprised",2)):He==="cap"&&(Se(),Tt.say(Jc.cap[si],{temp:!0}))});let ae=0,fe=!1;function Se(){let te=a.props;ei.play("beam"),l.setMode("celebrate"),a.packetBoost=1,Bt.timeline().to(te.beam.material,{opacity:.85,duration:.35,ease:"power2.out"}).to(te.capLight,{intensity:60,duration:.3},0).to(te.beam.material,{opacity:0,duration:2.4,ease:"power1.in"},.9).to(te.capLight,{intensity:6,duration:2},1),te.rings.forEach((oe,j)=>Bt.fromTo(oe.scale,{x:1,y:1,z:1},{x:9,y:9,z:9,duration:2.2,delay:j*.3,ease:"power2.out"})),te.rings.forEach((oe,j)=>Bt.fromTo(oe.material,{opacity:1},{opacity:0,duration:2.2,delay:j*.3}))}Tt.onSend=()=>{Se(),Tt.say(Hv[si],{temp:!0,hold:5e3}),l.setMood("love",6),Ti.unlock("hired")},Tt.onTerm=()=>{l.setMood("focused",6),Ti.unlock("root")},Tt.onLangSet=()=>{si==="ar"&&Ti.unlock("polyglot")},Tt.onSound=te=>{te&&Ti.unlock("dj")},Tt.setMood=te=>yr[te]?(l.setMood(te,8),!0):!1,Tt.onLang=()=>{Ce=-1},Tt.onPoke=()=>{l.poke(),ei.play("poke")};function Ge(){let te=Ss(),oe=Math.max(1,te.width),j=Math.max(1,te.height);rn.setSize(oe,j,!1),_.setSize(oe,j),w.setSize(oe/2,j/2),S&&S.setSize(oe,j),k!==Xv()&&O(),t.aspect=oe/j,t.fov=oe/j<.8?58:oe/j<1.2?50:42,t.updateProjectionMatrix()}addEventListener("resize",Ge),Ge();let Ae=performance.now(),Ve=0,ye=H(),Ce=-1,et=0,re=-1,V=new Ie,Me=new Ie,Ke=new F,Fe=new F;Qm(ye,Me),l.root.position.set(Me.x,jf(Me.x,Me.y),Me.y);let Be=0,tt=0,je=location.hash.startsWith("#hq"),z=location.hash==="#hqsnap";function st(){let te=performance.now(),oe=Math.min((te-Ae)/1e3,.05);Ae=te,Ve+=oe;let j=Ve,Je=H();ye+=(Je-ye)*Math.min(1,oe*(Sr?30:3.4)),z&&(ye=Je),Qm(ye,V);let Re=V.distanceTo(Me),He=l.root;He.position.x=V.x,He.position.z=V.y;let L=jf(V.x,V.y);He.position.y+=(L-He.position.y)*Math.min(1,oe*16),l.st.speed+=(Re/Math.max(oe,.001)-l.st.speed)*.2;let A;Re>.004?A=Math.atan2(V.x-Me.x,V.y-Me.y):A=Math.atan2(t.position.x-He.position.x,t.position.z-He.position.z);let q=A-He.rotation.y;q=Math.atan2(Math.sin(q),Math.cos(q)),He.rotation.y+=q*Math.min(1,oe*7),Me.copy(V),l.st.look.set(X.x*.6,X.y*.5),l.st.talk=Tt.talking()?1:0;let pe=Kn.clamp(ye/(ed-1),0,1);if(R.getPoint(pe,t.position),U.getPoint(pe,Fe),W.k>0&&t.position.lerp(I,W.k*W.k),u&&(Math.abs(ye-u.q)>.25&&(u.out=!0),u.k+=((u.out?0:1)-u.k)*Math.min(1,oe*3),u.out&&u.k<.01&&(u=null),u)){let B=u.k*u.k*(3-2*u.k);t.position.lerp(u.pos,B),Fe.lerp(u.tgt,B)}t.position.x+=X.x*.35,t.position.y+=X.y*.2,t.lookAt(Fe);let ne=Math.round(ye);Math.abs(ye-ne)<.02?et+=z?1:oe:et=0,et>.25&&Ce!==ne&&(Ce=ne,Tt.lines(kv[si][ne]),l.setMode(Bv[ne]),ei.play("arrive"),l.setMood(Vv[ne]),ne>=1&&Ti.unlock("first-step"),ne===ed-1&&Ti.unlock("summit")),Math.abs(ye-Ce)>.18&&Ce!==-1&&(Ce=-1,Tt.hide(),l.st.mode!=="celebrate"&&l.setMode("idle")),ne!==re&&(re=ne,Tt.level(ne)),a.packetBoost=Math.max(a.packetBoost,Math.min(1,Math.abs(os.velocity||0)/60)),a.update(j,oe,t);let ge=(performance.now()-h)/1e3,xe=Math.abs(os.velocity||0),$=ge>25&&!a.game.active;f&&!$&&(l.setMood("surprised",1.6),Tt.say(c(ys.wake),{temp:!0})),f=$,xe>110&&l.st.mood!=="dizzy"&&Tt.say(c(ys.dizzy),{temp:!0}),l.st.music=ei.on,l.update(oe,j,{sleepy:$,dizzy:xe>110,busy:Re>.004}),Tt.moodChip(l.st.mood,yr[l.st.mood].aura);let ie=l.headAnchor();Ke.copy(ie).project(t);let me=Ss();if(Tt.place((Ke.x*.5+.5)*me.width,(-Ke.y*.5+.5)*me.height,Ke.z<1,me),(ae=(ae+1)%6)===0){ue.setFromCamera(X,t);let B=ue.intersectObject(l.root,!0).length>0,se=B||ue.intersectObjects(a.clickables,!1).length>0;se!==fe&&(fe=se,id.style.cursor=se?"pointer":""),Tt.hint(B,(Ke.x*.5+.5)*me.width,(-Ke.y*.5+.5)*me.height)}if(E.uniforms.t.value=j,D?_.render(oe):rn.render(e,t),Be++,!je&&Be>30&&(tt+=oe,Be>120)){je=!0;let B=tt/90;B>.028&&S&&(S.enabled=!1),B>.034&&(s=1,rn.setPixelRatio(1),Ge(),B>.05&&(D=!1,rn.shadowMap.enabled=!1))}}location.hash.startsWith("#hq")&&(window.__game=a.game),location.hash.startsWith("#hq")&&(window.__face=te=>{te&&l.setMood(te,60);let oe=l.headAnchor();oe.y-=.55;let j=new F(t.position.x-oe.x,0,t.position.z-oe.z).normalize();u={tgt:oe,pos:oe.clone().add(j.multiplyScalar(1.9)).add(new F(0,.15,0)),k:0,q:ye}}),location.hash==="#debug"&&(window.__dbg=()=>({qS:ye,q:H(),lastSpoken:Ce,settleT:et,mode:l.st.mode,speed:l.st.speed,pos:l.root.position.toArray().map(te=>+te.toFixed(2)),scroll:os.scroll,bounds:J}));try{await Promise.race([rn.compileAsync(e,t),new Promise(te=>setTimeout(te,4e3))])}catch{}Bt.ticker.add(st),await new Promise(te=>{r<=n&&te(),i.onLoad=te,setTimeout(te,6e3)}),n0(1),setTimeout(()=>{nt("#loader").classList.add("done"),i0(),s0(),Sr||Bt.to(W,{k:0,duration:3.2,ease:"power3.inOut",onComplete:()=>{Math.round(ye)===0&&(Ce=-1)}})},350)}function n0(s){let e=document.querySelectorAll(".ld-s"),t=Math.round(s*e.length);e.forEach((n,r)=>n.classList.toggle("on",r<t));let i=nt("#ld-pct");i&&(i.textContent=`${Math.round(s*100)}%`)}n0(.15);function s0(){Sr||(document.querySelectorAll(".sec:not(#hero)").forEach(s=>{let e=s.querySelector("h2"),t=e?Jf.create(e,{type:"words",mask:"words"}):null,i=Bt.timeline({scrollTrigger:{trigger:s,start:"top 75%",once:!0}});t&&i.from(t.words,{yPercent:110,duration:.8,stagger:.06,ease:"power3.out"});let n=s.querySelectorAll(":scope > .label, :scope > p, .facts li, .skills button, .proj, .pipe > *, .sim, .game-card, .certs li, .bench li, #req, .contact-links li, .wall li");n.length&&i.from(n,{y:16,opacity:0,duration:.55,stagger:.025,ease:"power2.out"},.1)}),Bt.from("#hero > :not(h1)",{y:20,opacity:0,duration:.9,stagger:.1,ease:"power3.out",delay:.4}))}function lA(){let s=nt("#bubble"),e=nt("#bubble-text"),t=nt("#bubble-next"),i=nt("#poke-hint"),n=[],r=0,o=null,a=!1,l=null,c=null,h=!1,f={onSend:null,onLang:null,onPoke:null};function d(re){clearTimeout(l),o&&o.kill(),e.innerHTML="";let V=document.createElement("span");V.className="ghost",V.textContent=re;let Me=document.createElement("span");Me.className="typed",e.append(V,Me),a=!0,s.hidden=!1,s.dir=si==="ar"?"rtl":"ltr",s.lang=si,h||(h=!0,Bt.fromTo(s,{scale:.6,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2)"}));let Ke=Array.from(re),Fe={n:0};o=Bt.to(Fe,{n:Ke.length,duration:Sr?0:Math.min(2.6,Ke.length*.028),ease:"none",onUpdate:()=>{let Be=Math.round(Fe.n);Be!==Me.textContent.length&&Be%2===0&&ei.play("tick"),Me.textContent=Ke.slice(0,Be).join("")},onComplete:()=>{a=!1,Me.textContent=re,r<n.length-1&&(l=setTimeout(()=>u(),2600))}})}function u(){r<n.length-1?(r++,d(n[r])):n.length&&(r=0,d(n[0]))}t.addEventListener("click",()=>{clearTimeout(c),u()}),s.addEventListener("click",re=>{(re.target===s||re.target===e)&&(clearTimeout(c),u())}),f.lines=re=>{clearTimeout(c),n=re,r=0,d(re[0])},f.say=(re,{temp:V,hold:Me=3200}={})=>{let Ke=n.slice(),Fe=r,Be=n;d(re),clearTimeout(c),V&&(c=setTimeout(()=>{Ke.length&&n===Be&&(r=Fe,d(n[r]))},Me))},f.hide=()=>{clearTimeout(l),clearTimeout(c),n=[],h&&(h=!1,a=!1,o&&o.kill(),Bt.to(s,{scale:.7,opacity:0,duration:.2,onComplete:()=>{h||(s.hidden=!0)}}))},f.talking=()=>a;let p=0,g=0;f.place=(re,V,Me,Ke)=>{if(s.hidden)return;p=s.offsetWidth,g=s.offsetHeight;let Fe=rl()?62:74,Be=re-40,tt=V-g-20,je=!1,z=!1;tt<Fe&&rl()?(z=!0,tt=V+10,Be=re+44+p<Ke.width?re+44:re-p-44):tt<Fe&&(tt=V+30,je=!0),Be=Math.max(10,Math.min(Ke.width-p-10,Be)),tt=Math.max(Fe,Math.min(Ke.height-g-10,tt)),s.classList.toggle("below",je),s.classList.toggle("side",z),s.style.setProperty("--tail",`${Math.max(20,Math.min(p-20,re-Be))}px`),s.style.transform=`translate(${Be}px,${tt}px)`,s.style.visibility=Me?"visible":"hidden"},f.hint=(re,V,Me)=>{i.classList.toggle("on",re&&!h),re&&(i.style.transform=`translate(${V+30}px,${Me+40}px)`)};let m=nt("#mini"),x=nt("#mini-label"),v=[86,74,62,50,38,26,14];m.innerHTML=v.map((re,V)=>`<rect data-i="${V}" x="${(90-re)/2}" y="${128-V*19}" width="${re}" height="16" rx="2"><title>${jm[V]}</title></rect>`).join(""),m.querySelectorAll("rect").forEach(re=>re.addEventListener("click",()=>sl(+re.dataset.i)));let T=document.querySelectorAll(".links a");f.level=re=>{f.current=re,m.querySelectorAll("rect").forEach((V,Me)=>{V.classList.toggle("on",Me===re),V.classList.toggle("done",Me<re)}),x.textContent=jm[re],T.forEach(V=>V.classList.toggle("on",+V.dataset.go===re))};let y=nt("#lang"),b=()=>{y.textContent=si==="ar"?"EN":"\u0639",y.setAttribute("aria-label",si==="ar"?"Switch the guide to English":"Switch the guide to Egyptian Arabic"),document.documentElement.classList.toggle("ar",si==="ar")};y.addEventListener("click",()=>{si=si==="ar"?"en":"ar";try{localStorage.setItem("adham-guide-lang",si)}catch{}b(),f.onLang&&f.onLang(),f.onLangSet&&f.onLangSet()}),b();let M={name:nt("#f-name"),email:nt("#f-email"),role:nt("#f-role"),msg:nt("#f-msg")},_=nt("#req-preview"),S=nt("#req-status"),w=re=>JSON.stringify(re),E="adhamharp994@gmail.com",D=`https://formsubmit.co/ajax/${E}`,P=()=>`POST /api/hire HTTP/1.1
Host: adham107harp.github.io
Content-Type: application/json

{
  "from": ${w(M.name.value||"you")},
  "replyTo": ${w(M.email.value||"you@company.com")},
  "about": ${w(M.role.value||"an opportunity")},
  "message": ${w((M.msg.value||"\u2026").slice(0,140))}
}`,N=()=>{_.textContent=P()};Object.values(M).forEach(re=>re.addEventListener("input",N)),N();let R=!1;nt("#req").addEventListener("submit",async re=>{if(re.preventDefault(),R)return;let V=M.name.value.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(M.email.value.trim())?M.msg.value.trim()?null:M.msg:M.email:M.name;if(V){S.textContent=`400 Bad Request: ${V===M.email?"that email doesn't look right":`the ${V.name==="msg"?"message":V.name} is empty`}.`,V.focus(),f.mood&&f.mood("worried");return}if(nt("#req .hp").value)return;R=!0;let Me=nt("#send-btn");Me.disabled=!0,Me.textContent="Sending\u2026";let Ke=performance.now();_.textContent=P()+`

\u2026 awaiting response`;try{let Fe=await fetch(D,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:M.name.value.trim(),email:M.email.value.trim(),topic:M.role.value.trim()||"(none)",message:M.msg.value.trim(),_subject:`Portfolio: ${M.role.value.trim()||"new message"} from ${M.name.value.trim()}`,_template:"table",_captcha:"false",_replyto:M.email.value.trim()})}),Be=await Fe.json().catch(()=>({}));if(!Fe.ok||String(Be.success)!=="true")throw new Error(Be.message||Fe.status);let tt=Math.round(performance.now()-Ke);_.textContent=P()+`

HTTP/1.1 201 Created  (${tt} ms)
{ "delivered": true, "to": "Adham's inbox" }`,S.textContent="201 Created. Delivered to my inbox. I'll reply to your email.",f.onSend&&f.onSend(),M.msg.value=""}catch{let Be=`mailto:${E}?subject=${encodeURIComponent(`Portfolio: ${M.role.value||"Hello"}`)}&body=${encodeURIComponent(M.msg.value)}`;_.textContent=P()+`

HTTP/1.1 503 Service Unavailable
{ "fallback": "email" }`,S.innerHTML="",S.append("The relay didn't answer. ");let tt=document.createElement("a");tt.href=Be,tt.textContent=`Email me at ${E}`,S.append(tt," instead."),f.mood&&f.mood("worried")}finally{R=!1,Me.disabled=!1,Me.textContent="Send request"}}),nt("#copy-mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(E),S.textContent=`Copied ${E}`}catch{S.textContent=E}});let U=nt("#term"),k=nt("#term-out"),O=nt("#term-in"),Y=(re,V="")=>{let Me=document.createElement("div");V&&(Me.className=V),Me.textContent=re,k.appendChild(Me),k.scrollTop=k.scrollHeight},W={home:0,hero:0,about:1,stack:2,work:3,projects:3,research:4,arena:5,contact:6},I={artifacts:()=>(Ce(),"opening the artifact case\u2026"),moods:()=>"moods: happy excited focused thinking cool surprised shy annoyed sleepy dizzy love worried vibing \xB7 try: mood cool",help:()=>"commands: moods \xB7 mood <name> \xB7 artifacts \xB7 whoami \xB7 ls \xB7 cat about \xB7 projects \xB7 research \xB7 arena \xB7 contact \xB7 goto <section> \xB7 lang ar|en \xB7 poke \xB7 sudo hire adham \xB7 clear \xB7 exit",whoami:()=>"Adham Harp \u2014 AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).",ls:()=>"about/  stack/  work/  research/  arena/  contact/  capstone.gold","cat about":()=>"Backend first, AI on top. Builds APIs, databases and the logic behind products. Class of 2028.",projects:()=>"SmartHabbit (backend) \xB7 BU-LabTrack (backend API) \xB7 CAPCOM: Storm Watch (NASA Space Apps) \xB7 Shubha (in progress) \xB7 Sentinel FDS \xB7 The RSA Heist",research:()=>"IoT Sentinel: XGBoost + Isolation Forest + decision fusion \u2192 4-tier risk. IEEE Xplore, ITC-Egypt 2026.",arena:()=>"ICPC ECPC quals: 88th (2025), 177th (2026). 248+ Codeforces problems. Next: ODC Champions, 3 Dec.",contact:()=>`email: ${E}
github: adham107harp
linkedin: adham-harp-43bb6232b`,poke:()=>(f.onPoke&&f.onPoke(),"ouch. he says hi."),"sudo hire adham":()=>(setTimeout(()=>{be(),sl(6),setTimeout(()=>f.onSend&&f.onSend(),2800)},900),"[sudo] permission granted. 201 Created \u2014 taking you to the capstone\u2026"),clear:()=>(k.textContent="",null),exit:()=>(be(),null)};function J(re){let V=re.trim().replace(/\s+/g," ").toLowerCase();if(!V)return;if(Y(`$ ${re}`,"c"),V.startsWith("goto ")){let Fe=W[V.slice(5)];if(Fe===void 0)return Y(`no such section: ${V.slice(5)}`,"e");be(),sl(Fe);return}if(V.startsWith("mood ")){let Fe=V.slice(5);return Y(f.setMood&&f.setMood(Fe)?`mini-Adham is now ${Fe}.`:`unknown mood: ${Fe}. try "moods".`,f.setMood&&yr[Fe]?"":"e")}if(V.startsWith("lang ")){let Fe=V.slice(5);if(Fe!=="ar"&&Fe!=="en")return Y("lang ar | lang en","e");si=Fe;try{localStorage.setItem("adham-guide-lang",si)}catch{}return b(),f.onLang&&f.onLang(),Y(`guide speaks ${Fe==="ar"?"Egyptian Arabic":"English"} now.`)}if(V==="sudo rm -rf /")return Y("nice try. the pyramid has stood for 4,600 years.","e");let Me=I[V];if(!Me)return Y(`command not found: ${V}. try "help".`,"e");let Ke=Me();Ke&&Y(Ke)}function de(){f.onTerm&&f.onTerm(),U.hidden=!1,k.textContent||Y('Welcome to adham@saqqara. Type "help".'),setTimeout(()=>O.focus(),30),os.stop()}function be(){U.hidden=!0,os.start(),nt("#term-btn").focus()}nt("#term-btn").addEventListener("click",de),nt("#term-close").addEventListener("click",be),U.addEventListener("click",re=>{re.target===U&&be()}),nt("#term-form").addEventListener("submit",re=>{re.preventDefault(),J(O.value),O.value=""});let H=nt("#sound"),X=()=>{H.setAttribute("aria-pressed",String(ei.on)),H.title=ei.on?"Sound on":"Sound off",H.classList.toggle("on",ei.on)};H.addEventListener("click",()=>{ei.toggle(),X(),f.onSound&&f.onSound(ei.on);try{localStorage.setItem("adham-sound",ei.on?"1":"0")}catch{}}),document.addEventListener("visibilitychange",()=>ei.pause(document.hidden)),X(),h_(nt("#gh-live")),addEventListener("keydown",re=>{let V=/INPUT|TEXTAREA/.test(document.activeElement?.tagName);if(!V&&U.hidden&&(re.key==="ArrowDown"||re.key==="ArrowUp"||re.key==="PageDown"||re.key==="PageUp")){re.preventDefault();let Me=f.current??0;sl(Math.max(0,Math.min(td.length-1,Me+(re.key==="ArrowDown"||re.key==="PageDown"?1:-1))));return}re.key==="Escape"&&!U.hidden?be():(re.key==="`"||re.key==="~")&&!V&&(re.preventDefault(),U.hidden?de():be())});let ue=nt("#mood-chip"),ae="";f.moodChip=(re,V)=>{if(re===ae)return;ae=re,ue.querySelector("span").textContent=`mood: ${re}`;let Me="#"+V.toString(16).padStart(6,"0");ue.querySelector("i").style.background=Me,ue.querySelector("i").style.boxShadow=`0 0 10px ${Me}`};let fe=nt("#art-btn"),Se=nt("#art-count"),Ge=nt("#art-panel"),Ae=nt("#art-list"),Ve=nt("#toasts"),ye=()=>{Se.textContent=Ti.count(),nt("#art-of").textContent=`${Ti.count()}/${Ti.list.length}`,Ae.innerHTML=Ti.list.map(re=>`<li class="${Ti.has(re.id)?"got":""}"><span class="ic">${re.icon}</span><div><b>${Ti.has(re.id)?re.name:"???"}</b><span>${re.hint}</span></div></li>`).join("")};function Ce(){ye(),Ge.hidden=!1,os.stop()}let et=()=>{Ge.hidden=!0,os.start()};if(fe.addEventListener("click",Ce),nt("#art-close").addEventListener("click",et),Ge.addEventListener("click",re=>{re.target===Ge&&et()}),addEventListener("keydown",re=>{re.key==="Escape"&&!Ge.hidden&&et()}),Ti.onUnlock((re,V,Me)=>{ye(),fe.classList.remove("bump"),fe.offsetWidth,fe.classList.add("bump");let Ke=document.createElement("div");Ke.className="toast";let Fe=document.createElement("span");Fe.className="ic",Fe.textContent=re.icon;let Be=document.createElement("div");Be.innerHTML=`<small>Artifact ${V}/${Me} unlocked</small>`;let tt=document.createElement("b");tt.textContent=re.name,Be.append(tt),Ke.append(Fe,Be),Ve.append(Ke),Bt.fromTo(Ke,{x:-40,opacity:0},{x:0,opacity:1,duration:.5,ease:"back.out(2)"}),Bt.to(Ke,{opacity:0,y:10,delay:3.6,duration:.5,onComplete:()=>Ke.remove()})}),ye(),document.querySelectorAll("img.lg").forEach(re=>{let V=()=>{if(re.closest(".certs,.wall")){let Me=document.createElement("span");Me.className="lg-ph",re.replaceWith(Me)}else re.remove()};re.complete&&!re.naturalWidth?V():re.addEventListener("error",V)}),!Sr){let re=nt("#cursor"),V=re.querySelector(".c-dot"),Me=re.querySelector(".c-ring"),Ke=innerWidth/2,Fe=innerHeight/2,Be=Ke,tt=Fe;addEventListener("pointermove",z=>{Ke=z.clientX,Fe=z.clientY,re.classList.toggle("hot",!!z.target.closest("a,button,input,textarea,label,[data-go]")||document.body.style.cursor==="pointer"||je())});let je=()=>nt("#scene")&&nt("#scene").style.cursor==="pointer";Bt.ticker.add(()=>{Be+=(Ke-Be)*.2,tt+=(Fe-tt)*.2,V.style.transform=`translate(${Ke}px,${Fe}px)`,Me.style.transform=`translate(${Be}px,${tt}px)`}),document.querySelectorAll(".mag").forEach(z=>{z.addEventListener("pointermove",st=>{let te=z.getBoundingClientRect();Bt.to(z,{x:(st.clientX-te.left-te.width/2)*.25,y:(st.clientY-te.top-te.height/2)*.35,duration:.3})}),z.addEventListener("pointerleave",()=>Bt.to(z,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}))}),document.querySelectorAll(".tilt").forEach(z=>{z.addEventListener("pointermove",st=>{if(innerWidth<=820)return;let te=z.getBoundingClientRect(),oe=(st.clientX-te.left)/te.width,j=(st.clientY-te.top)/te.height;z.style.transform=`perspective(900px) rotateX(${(.5-j)*5}deg) rotateY(${(oe-.5)*6}deg)`,z.style.setProperty("--gx",`${oe*100}%`),z.style.setProperty("--gy",`${j*100}%`)}),z.addEventListener("pointerleave",()=>{z.style.transform=""})}),document.querySelectorAll("[data-count]").forEach(z=>{let st=+z.dataset.count,te=z.dataset.suffix||"",oe=st>1e3?st-30:0,j={v:oe};ft.create({trigger:z,start:"top 90%",once:!0,onEnter:()=>Bt.to(j,{v:st,duration:1.6,ease:"power2.out",onUpdate:()=>z.textContent=Math.round(j.v)+te})})})}return f}
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

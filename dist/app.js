var zv=Object.defineProperty;var Hv=(s,e,t)=>e in s?zv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var qe=(s,e,t)=>Hv(s,typeof e!="symbol"?e+"":e,t);var k0=0,Ud=1,z0=2;var uo=1,H0=2,Ma=3,Ur=0,Bn=1,Zn=2,In=0,ba=1,nr=2,Od=3,Fd=4,eu=5;var Zi=100,V0=101,G0=102,W0=103,X0=104,fo=200,q0=201,Y0=202,$0=203,Bd=204,kd=205,kl=206,Z0=207,zl=208,J0=209,K0=210,Q0=211,j0=212,eg=213,tg=214,wh=0,Ah=1,Rh=2,oa=3,Ch=4,Ph=5,Ih=6,Dh=7,zd=0,ng=1,ig=2,Cs=0,Hl=1,Vl=2,Gl=3,po=4,Wl=5,Xl=6,ql=7;var Hd=300,mo=301,Ta=302,tu=303,nu=304,Si=1e3,Ts=1001,Lh=1002,ln=1003,sg=1004;var Yl=1005;var li=1006,iu=1007;var ir=1008;var Jn=1009,Vd=1010,Gd=1011,Ea=1012,su=1013,_s=1014,Ji=1015,en=1016,ru=1017,ou=1018,sr=1020,Wd=35902,Xd=35899,qd=1021,Yd=1022,Ni=1023,Ks=1026,xs=1027,au=1028,lu=1029,Or=1030,cu=1031;var hu=1033,$l=33776,Zl=33777,Jl=33778,Kl=33779,uu=35840,fu=35841,du=35842,pu=35843,mu=36196,gu=37492,_u=37496,xu=37488,vu=37489,Ql=37490,yu=37491,Su=37808,Mu=37809,bu=37810,Tu=37811,Eu=37812,wu=37813,Au=37814,Ru=37815,Cu=37816,Pu=37817,Iu=37818,Du=37819,Lu=37820,Nu=37821,Uu=36492,Ou=36494,Fu=36495,Bu=36283,ku=36284,jl=36285,zu=36286;var ml=2300,Nh=2301,bh=2302,Ed=2303,wd=2400,Ad=2401,Rd=2402;var rg=3200;var ec=0,og=1,rr="",Vt="srgb",gl="srgb-linear",_l="linear",bt="srgb";var Th=7680;var ag=519,lg=512,cg=513,hg=514,$d=515,ug=516,fg=517,Zd=518,Jd=519,Kd=35044;var Qd="300 es",Wi=2e3,aa=2001;function Vv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function la(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dg(){let s=la("canvas");return s.style.display="block",s}var i0={},ca=null;function xl(...s){let e="THREE."+s.shift();ca?ca("log",e,...s):console.log(e,...s)}function pg(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=pg(s);let e="THREE."+s.shift();if(ca)ca("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rt(...s){s=pg(s);let e="THREE."+s.shift();if(ca)ca("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function oo(...s){let e=s.join(" ");e in i0||(i0[e]=!0,nt(...s))}function mg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gg={[wh]:wh,[Rh]:Ih,[Ch]:Ch,[oa]:Ph,[Ah]:Ah,[Ih]:Rh,[Dh]:Dh,[Ph]:oa},Es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],s0=1234567,dl=Math.PI/180,ha=180/Math.PI;function Fr(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function jd(s,e){return(s%e+e)%e}function Wv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Xv(s,e,t){return s!==e?(t-s)/(e-s):0}function pl(s,e,t){return(1-t)*s+t*e}function qv(s,e,t,n){return pl(s,e,1-Math.exp(-t*n))}function Yv(s,e=1){return e-Math.abs(jd(s,e*2)-e)}function $v(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Zv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Kv(s,e){return s+Math.random()*(e-s)}function Qv(s){return s*(.5-Math.random())}function jv(s){s!==void 0&&(s0=s);let e=s0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ey(s){return s*dl}function ty(s){return s*ha}function ny(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function iy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ep(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sy(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tp(s,e){if(e.constructor===Float32Array)return s;let t=Hu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function np(s,e){if(e.constructor===Float32Array)return s;let t=Hu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Ki={DEG2RAD:dl,RAD2DEG:ha,generateUUID:Fr,clamp:dt,euclideanModulo:jd,mapLinear:Wv,inverseLerp:Xv,lerp:pl,damp:qv,pingpong:Yv,smoothstep:$v,smootherstep:Zv,randInt:Jv,randFloat:Kv,randFloatSpread:Qv,seededRandom:jv,degToRad:ey,radToDeg:ty,isPowerOfTwo:ny,ceilPowerOfTwo:iy,floorPowerOfTwo:ep,setQuaternionFromProperEuler:sy,normalize:np,denormalize:tp},lp=class lp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lp.prototype.isVector2=!0;var De=lp,ci=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let _=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);_=Math.sin(_*v)/T,a=Math.sin(a*v)/T,l=l*_+d*a,c=c*_+u*a,h=h*_+p*a,f=f*_+x*a}else{l=l*_+d*a,c=c*_+u*a,h=h*_+p*a,f=f*_+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cp=class cp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(r0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(r0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cp.prototype.isVector3=!0;var O=cp,td=new O,r0=new ci,hp=class hp{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],x=i[0],m=i[3],_=i[6],v=i[1],T=i[4],y=i[7],b=i[2],M=i[5],g=i[8];return r[0]=o*x+a*v+l*b,r[3]=o*m+a*T+l*M,r[6]=o*_+a*y+l*g,r[1]=c*x+h*v+f*b,r[4]=c*m+h*T+f*M,r[7]=c*_+h*y+f*g,r[2]=d*x+u*v+p*b,r[5]=d*m+u*T+p*M,r[8]=d*_+u*y+p*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(e,t)),this}rotate(e){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hp.prototype.isMatrix3=!0;var ot=hp,nd=new ot,o0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){let s={enabled:!0,workingColorSpace:gl,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=ra(i.r),i.g=ra(i.g),i.b=ra(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rr?_l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gl]:{primaries:e,whitePoint:n,transfer:_l,toXYZ:o0,fromXYZ:a0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:o0,fromXYZ:a0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}var gt=ry();function Js(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zo,Uh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zo===void 0&&(zo=la("canvas")),zo.width=e.width,zo.height=e.height;let i=zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Js(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Js(t[n]/255)*255):t[n]=Js(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},oy=0,ua=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(id(i[o].image)):r.push(id(i[o]))}else r=id(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var ay=0,sd=new O,$n=class s extends Es{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ts,i=Ts,r=li,o=ir,a=Ni,l=Jn,c=s.DEFAULT_ANISOTROPY,h=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Fr(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Hd;$n.DEFAULT_ANISOTROPY=1;var up=class up{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(u+1)/2,b=(_+1)/2,M=(h+d)/4,g=(f+x)/4,S=(p+m)/4;return T>y&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=M/n,r=g/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=g/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};up.prototype.isVector4=!0;var Gt=up,Oh=class extends Es{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new $n({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Oh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vl=class extends $n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fh=class extends $n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var jh=class jh{constructor(e,t,n,i,r,o,a,l,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,d,u,p,x,m)}set(e,t,n,i,r,o,a,l,c,h,f,d,u,p,x,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=d,_[3]=u,_[7]=p,_[11]=x,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ho.setFromMatrixColumn(e,0).length(),r=1/Ho.setFromMatrixColumn(e,1).length(),o=1/Ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d+x*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,t,n){let i=this.elements;return Ii.subVectors(e,t),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),br.crossVectors(n,Ii),br.lengthSq()===0&&(Math.abs(n.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),br.crossVectors(n,Ii)),br.normalize(),Kc.crossVectors(Ii,br),i[0]=br.x,i[4]=Kc.x,i[8]=Ii.x,i[1]=br.y,i[5]=Kc.y,i[9]=Ii.y,i[2]=br.z,i[6]=Kc.z,i[10]=Ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],x=n[6],m=n[10],_=n[14],v=n[3],T=n[7],y=n[11],b=n[15],M=i[0],g=i[4],S=i[8],w=i[12],E=i[1],D=i[5],P=i[9],N=i[13],A=i[2],U=i[6],k=i[10],B=i[14],Y=i[3],W=i[7],I=i[11],J=i[15];return r[0]=o*M+a*E+l*A+c*Y,r[4]=o*g+a*D+l*U+c*W,r[8]=o*S+a*P+l*k+c*I,r[12]=o*w+a*N+l*B+c*J,r[1]=h*M+f*E+d*A+u*Y,r[5]=h*g+f*D+d*U+u*W,r[9]=h*S+f*P+d*k+u*I,r[13]=h*w+f*N+d*B+u*J,r[2]=p*M+x*E+m*A+_*Y,r[6]=p*g+x*D+m*U+_*W,r[10]=p*S+x*P+m*k+_*I,r[14]=p*w+x*N+m*B+_*J,r[3]=v*M+T*E+y*A+b*Y,r[7]=v*g+T*D+y*U+b*W,r[11]=v*S+T*P+y*k+b*I,r[15]=v*w+T*N+y*B+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],x=e[7],m=e[11],_=e[15],v=l*u-c*d,T=a*u-c*f,y=a*d-l*f,b=o*u-c*h,M=o*d-l*h,g=o*f-a*h;return t*(x*v-m*T+_*y)-n*(p*v-m*b+_*M)+i*(p*T-x*b+_*g)-r*(p*y-x*M+m*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],x=e[13],m=e[14],_=e[15],v=t*a-n*o,T=t*l-i*o,y=t*c-r*o,b=n*l-i*a,M=n*c-r*a,g=i*c-r*l,S=h*x-f*p,w=h*m-d*p,E=h*_-u*p,D=f*m-d*x,P=f*_-u*x,N=d*_-u*m,A=v*N-T*P+y*D+b*E-M*w+g*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/A;return e[0]=(a*N-l*P+c*D)*U,e[1]=(i*P-n*N-r*D)*U,e[2]=(x*g-m*M+_*b)*U,e[3]=(d*M-f*g-u*b)*U,e[4]=(l*E-o*N-c*w)*U,e[5]=(t*N-i*E+r*w)*U,e[6]=(m*y-p*g-_*T)*U,e[7]=(h*g-d*y+u*T)*U,e[8]=(o*P-a*E+c*S)*U,e[9]=(n*E-t*P-r*S)*U,e[10]=(p*M-x*y+_*v)*U,e[11]=(f*y-h*M-u*v)*U,e[12]=(a*w-o*D-l*S)*U,e[13]=(t*D-n*w+i*S)*U,e[14]=(x*T-p*b-m*v)*U,e[15]=(h*b-f*T+d*v)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,x=o*h,m=o*f,_=a*f,v=l*c,T=l*h,y=l*f,b=n.x,M=n.y,g=n.z;return i[0]=(1-(x+_))*b,i[1]=(u+y)*b,i[2]=(p-T)*b,i[3]=0,i[4]=(u-y)*M,i[5]=(1-(d+_))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(p+T)*g,i[9]=(m-v)*g,i[10]=(1-(d+x))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ho.set(i[0],i[1],i[2]).length(),a=Ho.set(i[4],i[5],i[6]).length(),l=Ho.set(i[8],i[9],i[10]).length();r<0&&(o=-o),hs.copy(this);let c=1/o,h=1/a,f=1/l;return hs.elements[0]*=c,hs.elements[1]*=c,hs.elements[2]*=c,hs.elements[4]*=h,hs.elements[5]*=h,hs.elements[6]*=h,hs.elements[8]*=f,hs.elements[9]*=f,hs.elements[10]*=f,t.setFromRotationMatrix(hs),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Wi,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Wi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===aa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Wi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Wi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===aa)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};jh.prototype.isMatrix4=!0;var ct=jh,Ho=new O,hs=new ct,ly=new O(0,0,0),cy=new O(1,1,1),br=new O,Kc=new O,Ii=new O,l0=new ct,c0=new ci,Xi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return l0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c0.setFromEuler(this),this.setFromQuaternion(c0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hy=0,h0=new O,Vo=new ci,Ws=new ct,Qc=new O,sl=new O,uy=new O,fy=new ci,u0=new O(1,0,0),f0=new O(0,1,0),d0=new O(0,0,1),p0={type:"added"},dy={type:"removed"},Go={type:"childadded",child:null},rd={type:"childremoved",child:null},Pn=class s extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new O,t=new Xi,n=new ci,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new ot}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vo.setFromAxisAngle(e,t),this.quaternion.multiply(Vo),this}rotateOnWorldAxis(e,t){return Vo.setFromAxisAngle(e,t),this.quaternion.premultiply(Vo),this}rotateX(e){return this.rotateOnAxis(u0,e)}rotateY(e){return this.rotateOnAxis(f0,e)}rotateZ(e){return this.rotateOnAxis(d0,e)}translateOnAxis(e,t){return h0.copy(e).applyQuaternion(this.quaternion),this.position.add(h0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(u0,e)}translateY(e){return this.translateOnAxis(f0,e)}translateZ(e){return this.translateOnAxis(d0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qc.copy(e):Qc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(sl,Qc,this.up):Ws.lookAt(Qc,sl,this.up),this.quaternion.setFromRotationMatrix(Ws),i&&(Ws.extractRotation(i.matrixWorld),Vo.setFromRotationMatrix(Ws),this.quaternion.premultiply(Vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p0),Go.child=e,this.dispatchEvent(Go),Go.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dy),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ws.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ws),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p0),Go.child=e,this.dispatchEvent(Go),Go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pn.DEFAULT_UP=new O(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),_=this._getHandJoint(c,x);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},jc={h:0,s:0,l:0};function od(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=jd(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=od(o,r,e+1/3),this.g=od(o,r,e),this.b=od(o,r,e-1/3)}return gt.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=_g[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return gt.workingToColorSpace(qn.copy(this),e),Math.round(dt(qn.r*255,0,255))*65536+Math.round(dt(qn.g*255,0,255))*256+Math.round(dt(qn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(qn.copy(this),t);let n=qn.r,i=qn.g,r=qn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Vt){gt.workingToColorSpace(qn.copy(this),e);let t=qn.r,n=qn.g,i=qn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(jc);let n=pl(Tr.h,jc.h,t),i=pl(Tr.s,jc.s,t),r=pl(Tr.l,jc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new Ue;Ue.NAMES=_g;var yl=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ao=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},us=new O,Xs=new O,ad=new O,qs=new O,Wo=new O,Xo=new O,m0=new O,ld=new O,cd=new O,hd=new O,ud=new Gt,fd=new Gt,dd=new Gt,Zs=class s{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),us.subVectors(e,t),i.cross(us);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){us.subVectors(i,t),Xs.subVectors(n,t),ad.subVectors(e,t);let o=us.dot(us),a=us.dot(Xs),l=us.dot(ad),c=Xs.dot(Xs),h=Xs.dot(ad),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qs)===null?!1:qs.x>=0&&qs.y>=0&&qs.x+qs.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,qs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qs.x),l.addScaledVector(o,qs.y),l.addScaledVector(a,qs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ud.setScalar(0),fd.setScalar(0),dd.setScalar(0),ud.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,n),dd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ud,r.x),o.addScaledVector(fd,r.y),o.addScaledVector(dd,r.z),o}static isFrontFacing(e,t,n,i){return us.subVectors(n,t),Xs.subVectors(e,t),us.cross(Xs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return us.subVectors(this.c,this.b),Xs.subVectors(this.a,this.b),us.cross(Xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Wo.subVectors(i,n),Xo.subVectors(r,n),ld.subVectors(e,n);let l=Wo.dot(ld),c=Xo.dot(ld);if(l<=0&&c<=0)return t.copy(n);cd.subVectors(e,i);let h=Wo.dot(cd),f=Xo.dot(cd);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Wo,o);hd.subVectors(e,r);let u=Wo.dot(hd),p=Xo.dot(hd);if(p>=0&&u<=p)return t.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Xo,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return m0.subVectors(r,i),a=(f-h)/(f-h+(u-p)),t.copy(i).addScaledVector(m0,a);let _=1/(m+x+d);return o=x*_,a=d*_,t.copy(n).addScaledVector(Wo,o).addScaledVector(Xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ws=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fs):fs.fromBufferAttribute(r,o),fs.applyMatrix4(e.matrixWorld),this.expandByPoint(fs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eh.copy(n.boundingBox)),eh.applyMatrix4(e.matrixWorld),this.union(eh)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fs),fs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),th.subVectors(this.max,rl),qo.subVectors(e.a,rl),Yo.subVectors(e.b,rl),$o.subVectors(e.c,rl),Er.subVectors(Yo,qo),wr.subVectors($o,Yo),no.subVectors(qo,$o);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-no.z,no.y,Er.z,0,-Er.x,wr.z,0,-wr.x,no.z,0,-no.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-no.y,no.x,0];return!pd(t,qo,Yo,$o,th)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,qo,Yo,$o,th))?!1:(nh.crossVectors(Er,wr),t=[nh.x,nh.y,nh.z],pd(t,qo,Yo,$o,th))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ys=[new O,new O,new O,new O,new O,new O,new O,new O],fs=new O,eh=new ws,qo=new O,Yo=new O,$o=new O,Er=new O,wr=new O,no=new O,rl=new O,th=new O,nh=new O,io=new O;function pd(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){io.fromArray(s,r);let a=i.x*Math.abs(io.x)+i.y*Math.abs(io.y)+i.z*Math.abs(io.z),l=e.dot(io),c=t.dot(io),h=n.dot(io);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pn=new O,ih=new De,my=0,Un=class extends Es{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kd,this.updateRanges=[],this.gpuType=Ji,this.version=0,this._normalizationScale=e!==void 0?Hu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ih.fromBufferAttribute(this,t),ih.applyMatrix3(e),this.setXY(t,ih.x,ih.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):np(e,this.array)}};var Sl=class extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ml=class extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}},gy=new ws,ol=new O,md=new O,Qs=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);let t=ol.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ol,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(md)),this.expandByPoint(ol.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_y=0,Gi=new ct,gd=new Pn,Zo=new O,Di=new ws,al=new ws,Cn=new O,Yt=class s extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?Ml:Sl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gi.makeRotationFromQuaternion(e),this.applyMatrix4(Gi),this}rotateX(e){return Gi.makeRotationX(e),this.applyMatrix4(Gi),this}rotateY(e){return Gi.makeRotationY(e),this.applyMatrix4(Gi),this}rotateZ(e){return Gi.makeRotationZ(e),this.applyMatrix4(Gi),this}translate(e,t,n){return Gi.makeTranslation(e,t,n),this.applyMatrix4(Gi),this}scale(e,t,n){return Gi.makeScale(e,t,n),this.applyMatrix4(Gi),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zo).negate(),this.translate(Zo.x,Zo.y,Zo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Di.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];al.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(Di.min,al.min),Di.expandByPoint(Cn),Cn.addVectors(Di.max,al.max),Di.expandByPoint(Cn)):(Di.expandByPoint(al.min),Di.expandByPoint(al.max))}Di.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Cn.fromBufferAttribute(a,c),l&&(Zo.fromBufferAttribute(e,c),Cn.add(Zo)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new O,l[w]=new O;let h=new O,f=new O,d=new O,u=new De,p=new De,x=new De,m=new O,_=new O;function v(w,E,D){c[w]=c[E]=c[D]=1,h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,D),f.sub(h),d.sub(h),p.sub(u),x.sub(u);let P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),_.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(P),a[w].add(m),a[E].add(m),a[D].add(m),l[w].add(_),l[E].add(_),l[D].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,E=T.length;w<E;++w){let D=T[w],P=D.start,N=D.count;for(let A=P,U=P+N;A<U;A+=3)v(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let y=new O,b=new O,M=new O,g=new O;function S(w){M.fromBufferAttribute(i,w),g.copy(M);let E=a[w];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),b.crossVectors(g,E);let P=b.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,P)}for(let w=0,E=n.count;w<E;++w)c[w]&&S(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let _=0;_<h;_++)d[p++]=c[u++]}return new Un(d,h,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=Fr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=g0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=g0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function g0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Fr()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var ai=new O,bl=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Hu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):np(e,this.data.array)}},_d=new O,xy=new O,vy=new ot,ds=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_d.subVectors(n,t).cross(xy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(_d),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||vy.getNormalMatrix(e),i=this.coplanarPoint(_d).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yy=0,ps=class extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=ba,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=kd,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Th,this.stencilZFail=Th,this.stencilZPass=Th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ds().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},js=class extends ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jo,ll=new O,Ko=new O,Qo=new O,jo=new De,cl=new De,xg=new ct,sh=new O,hl=new O,rh=new O,_0=new De,xd=new De,x0=new De,Rr=class extends Pn{constructor(e=new js){if(super(),this.isSprite=!0,this.type="Sprite",Jo===void 0){Jo=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bh(t,5);Jo.setIndex([0,1,2,0,2,3]),Jo.setAttribute("position",new bl(n,3,0,!1)),Jo.setAttribute("uv",new bl(n,2,3,!1))}this.geometry=Jo,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ko.setFromMatrixScale(this.matrixWorld),xg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ko.multiplyScalar(-Qo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;oh(sh.set(-.5,-.5,0),Qo,o,Ko,i,r),oh(hl.set(.5,-.5,0),Qo,o,Ko,i,r),oh(rh.set(.5,.5,0),Qo,o,Ko,i,r),_0.set(0,0),xd.set(1,0),x0.set(1,1);let a=e.ray.intersectTriangle(sh,hl,rh,!1,ll);if(a===null&&(oh(hl.set(-.5,.5,0),Qo,o,Ko,i,r),xd.set(0,1),a=e.ray.intersectTriangle(sh,rh,hl,!1,ll),a===null))return;let l=e.ray.origin.distanceTo(ll);l<e.near||l>e.far||t.push({distance:l,point:ll.clone(),uv:Zs.getInterpolation(ll,sh,hl,rh,_0,xd,x0,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function oh(s,e,t,n,i,r){jo.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(cl.x=r*jo.x-i*jo.y,cl.y=i*jo.x+r*jo.y):cl.copy(jo),s.copy(e),s.x+=cl.x,s.y+=cl.y,s.applyMatrix4(xg)}var $s=new O,vd=new O,ah=new O,lh=new O,pa=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$s)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$s.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($s.copy(this.origin).addScaledVector(this.direction,t),$s.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vd.copy(e).add(t).multiplyScalar(.5),ah.copy(t).sub(e).normalize(),lh.copy(this.origin).sub(vd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ah),a=lh.dot(this.direction),l=-lh.dot(ah),c=lh.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(vd).addScaledVector(ah,d),u}intersectSphere(e,t){if(e.radius<0)return null;$s.subVectors(e.center,this.origin);let n=$s.dot(this.direction),i=$s.dot($s)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$s)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,_=n.x-o.x,v=n.y-o.y,T=n.z-o.z,y=Math.abs(l),b=Math.abs(c),M=Math.abs(h),g,S,w,E,D,P,N,A,U,k,B,Y;if(y>=b&&y>=M?(w=l,P=f,U=p,Y=_,l>=0?(g=c,S=h,E=d,D=u,N=x,A=m,k=v,B=T):(g=h,S=c,E=u,D=d,N=m,A=x,k=T,B=v)):b>=M?(w=c,P=d,U=x,Y=v,c>=0?(g=h,S=l,E=u,D=f,N=m,A=p,k=T,B=_):(g=l,S=h,E=f,D=u,N=p,A=m,k=_,B=T)):(w=h,P=u,U=m,Y=T,h>=0?(g=l,S=c,E=f,D=d,N=p,A=x,k=_,B=v):(g=c,S=l,E=d,D=f,N=x,A=p,k=v,B=_)),w===0)return null;let W=g/w,I=S/w,J=1/w,de=E-W*P,be=D-I*P,H=N-W*U,X=A-I*U,ue=k-W*Y,ae=B-I*Y,fe=ue*X-ae*H,Se=de*ae-be*ue,Ge=H*be-X*de;if(i){if(fe<0||Se<0||Ge<0)return null}else if((fe<0||Se<0||Ge<0)&&(fe>0||Se>0||Ge>0))return null;let Ce=fe+Se+Ge;if(Ce===0)return null;let Ve=J*(fe*P+Se*U+Ge*Y);return(Ce>0?Ve<0:Ve>0)?null:this.at(Ve/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mn=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},v0=new ct,so=new pa,ch=new Qs,y0=new O,hh=new O,uh=new O,fh=new O,yd=new O,dh=new O,S0=new O,ph=new O,Re=class extends Pn{constructor(e=new Yt,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){dh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(yd.fromBufferAttribute(f,e),o?dh.addScaledVector(yd,h):dh.addScaledVector(yd.sub(t),h))}t.add(dh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ch.copy(n.boundingSphere),ch.applyMatrix4(r),so.copy(e.ray).recast(e.near),!(ch.containsPoint(so.origin)===!1&&(so.intersectSphere(ch,y0)===null||so.origin.distanceToSquared(y0)>(e.far-e.near)**2))&&(v0.copy(r).invert(),so.copy(e.ray).applyMatrix4(v0),!(n.boundingBox!==null&&so.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,so)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],_=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=T;y<b;y+=3){let M=a.getX(y),g=a.getX(y+1),S=a.getX(y+2);i=mh(this,_,e,n,c,h,f,M,g,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,_=x;m<_;m+=3){let v=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);i=mh(this,o,e,n,c,h,f,v,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],_=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,b=T;y<b;y+=3){let M=y,g=y+1,S=y+2;i=mh(this,_,e,n,c,h,f,M,g,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,_=x;m<_;m+=3){let v=m,T=m+1,y=m+2;i=mh(this,o,e,n,c,h,f,v,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Sy(s,e,t,n,i,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ur,a),l===null)return null;ph.copy(a),ph.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ph);return c<t.near||c>t.far?null:{distance:c,point:ph.clone(),object:s}}function mh(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,hh),s.getVertexPosition(l,uh),s.getVertexPosition(c,fh);let h=Sy(s,e,t,n,hh,uh,fh,S0);if(h){let f=new O;Zs.getBarycoord(S0,hh,uh,fh,f),i&&(h.uv=Zs.getInterpolatedAttribute(i,a,l,c,f,new De)),r&&(h.uv1=Zs.getInterpolatedAttribute(r,a,l,c,f,new De)),o&&(h.normal=Zs.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};Zs.getNormal(hh,uh,fh,d.normal),h.face=d,h.barycoord=f}return h}var er=class extends $n{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ln,h=ln,f,d){super(null,o,a,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tl=class extends Un{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ea=new ct,M0=new ct,gh=[],b0=new ws,My=new ct,ul=new Re,fl=new Qs,As=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,My)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ea),b0.copy(e.boundingBox).applyMatrix4(ea),this.boundingBox.union(b0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ea),fl.copy(e.boundingSphere).applyMatrix4(ea),this.boundingSphere.union(fl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(n),e.ray.intersectsSphere(fl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ea),M0.multiplyMatrices(n,ea),ul.matrixWorld=M0,ul.raycast(e,gh);for(let o=0,a=gh.length;o<a;o++){let l=gh[o];l.instanceId=r,l.object=this,t.push(l)}gh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(i*this.count),i,this.count,au,Ji));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ro=new Qs,by=new De(.5,.5),_h=new O,Cr=class{constructor(e=new ds,t=new ds,n=new ds,i=new ds,r=new ds,o=new ds){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],_=r[11],v=r[12],T=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,u-h,_-p,b-v).normalize(),i[1].setComponents(c+o,u+h,_+p,b+v).normalize(),i[2].setComponents(c+a,u+f,_+x,b+T).normalize(),i[3].setComponents(c-a,u-f,_-x,b-T).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,u-d,_-m,b-y).normalize();else if(i[4].setComponents(c-l,u-d,_-m,b-y).normalize(),t===Wi)i[5].setComponents(c+l,u+d,_+m,b+y).normalize();else if(t===aa)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){ro.center.set(0,0,0);let t=by.distanceTo(e.center);return ro.radius=.7071067811865476+t,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(_h.x=i.normal.x>0?e.max.x:e.min.x,_h.y=i.normal.y>0?e.max.y:e.min.y,_h.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_h)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},T0=new ct,kh=class s{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];T0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Cr),n[i].setFromProjectionMatrix(T0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Cr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var lo=class extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},E0=new ct,Cd=new pa,xh=new Qs,vh=new O,co=class extends Pn{constructor(e=new Yt,t=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xh.copy(n.boundingSphere),xh.applyMatrix4(i),xh.radius+=r,e.ray.intersectsSphere(xh)===!1)return;E0.copy(i).invert(),Cd.copy(e.ray).applyMatrix4(E0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);vh.fromBufferAttribute(f,m),w0(vh,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,x=u;p<x;p++)vh.fromBufferAttribute(f,p),w0(vh,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function w0(s,e,t,n,i,r,o){let a=Cd.distanceSqToPoint(s);if(a<t){let l=new O;Cd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var El=class extends $n{constructor(e=[],t=mo,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends $n{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends $n{constructor(e,t,n=_s,i,r,o,a=ln,l=ln,c,h=Ks,f=1){if(h!==Ks&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wl=class extends ms{constructor(e,t=_s,n=mo,i,r,o=ln,a=ln,l,c=Ks){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Al=class extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class s extends Yt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function p(x,m,_,v,T,y,b,M,g,S,w){let E=y/g,D=b/S,P=y/2,N=b/2,A=M/2,U=g+1,k=S+1,B=0,Y=0,W=new O;for(let I=0;I<k;I++){let J=I*D-N;for(let de=0;de<U;de++){let be=de*E-P;W[x]=be*v,W[m]=J*T,W[_]=A,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[_]=M>0?1:-1,h.push(W.x,W.y,W.z),f.push(de/g),f.push(1-I/S),B+=1}}for(let I=0;I<S;I++)for(let J=0;J<g;J++){let de=d+J+U*I,be=d+J+U*(I+1),H=d+(J+1)+U*(I+1),X=d+(J+1)+U*I;l.push(de,be,X),l.push(be,H,X),Y+=6}a.addGroup(u,Y,w),u+=Y,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},tr=class s extends Yt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=n*2+r,x=i+1,m=new O,_=new O;for(let v=0;v<=p;v++){let T=0,y=0,b=0,M=0;if(v<=n){let w=v/n,E=w*Math.PI/2;y=-h-e*Math.cos(E),b=e*Math.sin(E),M=-e*Math.cos(E),T=w*f}else if(v<=n+r){let w=(v-n)/r;y=-h+w*t,b=e,M=0,T=f+w*d}else{let w=(v-n-r)/n,E=w*Math.PI/2;y=h+e*Math.sin(E),b=e*Math.cos(E),M=e*Math.sin(E),T=f+d+w*f}let g=Math.max(0,Math.min(1,T/u)),S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let w=0;w<=i;w++){let E=w/i,D=E*Math.PI*2,P=Math.sin(D),N=Math.cos(D);_.x=-b*N,_.y=y,_.z=b*P,a.push(_.x,_.y,_.z),m.set(-b*N,M,b*P),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+S,g)}if(v>0){let w=(v-1)*x;for(let E=0;E<i;E++){let D=w+E,P=w+E+1,N=v*x+E,A=v*x+E+1;o.push(D,P,N),o.push(P,A,N)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Pr=class s extends Yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,h=new De;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jt=class s extends Yt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=n/2,_=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(u,2));function v(){let y=new O,b=new O,M=0,g=(t-e)/n;for(let S=0;S<=r;S++){let w=[],E=S/r,D=E*(t-e)+e;for(let P=0;P<=i;P++){let N=P/i,A=N*l+a,U=Math.sin(A),k=Math.cos(A);b.x=D*U,b.y=-E*n+m,b.z=D*k,f.push(b.x,b.y,b.z),y.set(U,g,k).normalize(),d.push(y.x,y.y,y.z),u.push(N,1-E),w.push(p++)}x.push(w)}for(let S=0;S<i;S++)for(let w=0;w<r;w++){let E=x[w][S],D=x[w+1][S],P=x[w+1][S+1],N=x[w][S+1];(e>0||w!==0)&&(h.push(E,D,N),M+=3),(t>0||w!==r-1)&&(h.push(D,P,N),M+=3)}c.addGroup(_,M,0),_+=M}function T(y){let b=p,M=new De,g=new O,S=0,w=y===!0?e:t,E=y===!0?1:-1;for(let P=1;P<=i;P++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),p++;let D=p;for(let P=0;P<=i;P++){let A=P/i*l+a,U=Math.cos(A),k=Math.sin(A);g.x=w*k,g.y=m*E,g.z=w*U,f.push(g.x,g.y,g.z),d.push(0,E,0),M.x=U*.5+.5,M.y=k*.5*E+.5,u.push(M.x,M.y),p++}for(let P=0;P<i;P++){let N=b+P,A=D+P;y===!0?h.push(A,A+1,N):h.push(A+1,A,N),S+=3}c.addGroup(_,S,y===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qi=class s extends jt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rl=class s extends Yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new O,y=new O,b=new O;for(let M=0;M<t.length;M+=3)u(t[M+0],T),u(t[M+1],y),u(t[M+2],b),l(T,y,b,v)}function l(v,T,y,b){let M=b+1,g=[];for(let S=0;S<=M;S++){g[S]=[];let w=v.clone().lerp(y,S/M),E=T.clone().lerp(y,S/M),D=M-S;for(let P=0;P<=D;P++)P===0&&S===M?g[S][P]=w:g[S][P]=w.clone().lerp(E,P/D)}for(let S=0;S<M;S++)for(let w=0;w<2*(M-S)-1;w++){let E=Math.floor(w/2);w%2===0?(d(g[S][E+1]),d(g[S+1][E]),d(g[S][E])):(d(g[S][E+1]),d(g[S+1][E+1]),d(g[S+1][E]))}}function c(v){let T=new O;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(v),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let v=new O;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let y=m(v)/2/Math.PI+.5,b=_(v)/Math.PI+.5;o.push(y,1-b)}p(),f()}function f(){for(let v=0;v<o.length;v+=6){let T=o[v+0],y=o[v+2],b=o[v+4],M=Math.max(T,y,b),g=Math.min(T,y,b);M>.9&&g<.1&&(T<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function p(){let v=new O,T=new O,y=new O,b=new O,M=new De,g=new De,S=new De;for(let w=0,E=0;w<r.length;w+=9,E+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),M.set(o[E+0],o[E+1]),g.set(o[E+2],o[E+3]),S.set(o[E+4],o[E+5]),b.copy(v).add(T).add(y).divideScalar(3);let D=m(b);x(M,E+0,v,D),x(g,E+2,T,D),x(S,E+4,y,D)}}function x(v,T,y,b){b<0&&v.x===1&&(o[T]=v.x-1),y.x===0&&y.z===0&&(o[T]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function _(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var zh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new De:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,i=[],r=[],o=[],a=new O,l=new ct;for(let u=0;u<=e;u++){let p=u/e;i[u]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(dt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function ip(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var A0=new O,R0=new O,Sd=new ip,Md=new ip,bd=new ip,Yi=class extends zh{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(R0.subVectors(i[0],i[1]).add(i[0]),c=R0);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(A0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=A0),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Sd.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,x,m),Md.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,x,m),bd.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Sd.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Md.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),bd.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Sd.calc(l),Md.calc(l),bd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ma=class s extends Rl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Cl=class s extends Rl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},gs=class s extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],x=[],m=[];for(let _=0;_<h;_++){let v=_*d-o;for(let T=0;T<c;T++){let y=T*f-r;p.push(y,-v,0),x.push(0,0,1),m.push(T/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){let T=v+c*_,y=v+c*(_+1),b=v+1+c*(_+1),M=v+1+c*_;u.push(T,y,M),u.push(y,b,M)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Pl=class s extends Yt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=e,d=(t-e)/i,u=new O,p=new De;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let _=r+m/n*o;u.x=f*Math.cos(_),u.y=f*Math.sin(_),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let _=0;_<n;_++){let v=_+m,T=v,y=v+n+1,b=v+n+2,M=v+1;a.push(T,y,M),a.push(y,b,M)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mn=class s extends Yt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new O,d=new O,u=[],p=[],x=[],m=[];for(let _=0;_<=n;_++){let v=[],T=_/n,y=o+T*a,b=e*Math.cos(y),M=Math.sqrt(e*e-b*b),g=0;_===0&&o===0?g=.5/t:_===n&&l===Math.PI&&(g=-.5/t);for(let S=0;S<=t;S++){let w=S/t,E=i+w*r;f.x=-M*Math.cos(E),f.y=b,f.z=M*Math.sin(E),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(w+g,1-T),v.push(c++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){let T=h[_][v+1],y=h[_][v],b=h[_+1][v],M=h[_+1][v+1];(_!==0||o>0)&&u.push(T,y,M),(_!==n-1||l<Math.PI)&&u.push(y,b,M)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $i=class s extends Yt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new O,u=new O,p=new O;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let _=0;_<=i;_++){let v=_/i*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(_/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let _=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,T=(i+1)*(x-1)+m,y=(i+1)*x+m;l.push(_,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function go(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(C0(i))i.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(C0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kn(s){let e={};for(let t=0;t<s.length;t++){let n=go(s[t]);for(let i in n)e[i]=n[i]}return e}function C0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ty(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sp(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var hi={clone:go,merge:Kn},Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(i.value);break;case"v2":this.uniforms[n].value=new De().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ir=class extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends Ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){oo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Il=class extends ps{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Hh=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vh=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ta(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Dr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gh=class extends Dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wd,endingEnd:wd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ad:r=e,a=2*t-n;break;case Rd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ad:o=e,l=2*n-t;break;case Rd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,_=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,T=(-1-u)*m+(1.5+u)*x+.5*p,y=u*m-u*x;for(let b=0;b!==a;++b)r[b]=_*o[h+b]+v*o[c+b]+T*o[l+b]+y*o[f+b];return r}},Wh=class extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},Xh=class extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qh=class extends Dr{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],_=u*d+p*2,v=f[_],T=f[_+1],y=e*d+p*2,b=h[y],M=h[y+1],g=Ry(n,t,v,b,i);r[p]=vg(g,x,T,M,m)}return r}};function vg(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Ay(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Ry(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=vg(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Ay(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Li=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),yh(e.settings)&&(n.settings={inTangents:ta(e.settings.inTangents,Array),outTangents:ta(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ml:t=this.InterpolantFactoryMethodDiscrete;break;case Nh:t=this.InterpolantFactoryMethodLinear;break;case bh:t=this.InterpolantFactoryMethodSmooth;break;case Ed:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ml;case this.InterpolantFactoryMethodLinear:return Nh;case this.InterpolantFactoryMethodSmooth:return bh;case this.InterpolantFactoryMethodBezier:return Ed}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;yh(this.settings)&&(P0(this.settings.inTangents,e),P0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;yh(this.settings)&&(I0(this.settings.inTangents,e),I0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){rt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Gv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,yh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function P0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function I0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Li.prototype.ValueTypeName="";Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=Nh;var Lr=class extends Li{constructor(e,t,n){super(e,t,n)}};Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=ml;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yh=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}};Yh.prototype.ValueTypeName="color";var $h=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}};$h.prototype.ValueTypeName="number";var Zh=class extends Dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},Dl=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Zh(this.times,this.values,this.getValueSize(),e)}};Dl.prototype.ValueTypeName="quaternion";Dl.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Li{constructor(e,t,n){super(e,t,n)}};Nr.prototype.ValueTypeName="string";Nr.prototype.ValueBufferType=Array;Nr.prototype.DefaultInterpolation=ml;Nr.prototype.InterpolantFactoryMethodLinear=void 0;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jh=class extends Li{constructor(e,t,n,i){super(e,t,n,i)}};Jh.prototype.ValueTypeName="vector";var Eh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(D0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!D0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function D0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _a=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yg=new _a,xa=class{constructor(e){this.manager=e!==void 0?e:yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var na=new WeakMap,Kh=class extends xa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Eh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=na.get(o);f===void 0&&(f=[],na.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=la("img");function l(){h(),t&&t(this);let f=na.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}na.delete(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),Eh.remove(`image:${e}`);let d=na.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}na.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Eh.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ll=class extends xa{constructor(e){super(e)}load(e,t,n,i){let r=new $n,o=new Kh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},va=class extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Nl=class extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Td=new ct,L0=new O,N0=new O,Ul=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;L0.setFromMatrixPosition(e.matrixWorld),t.position.copy(L0),N0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Td.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Td,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===aa||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sh=new O,Mh=new ci,bs=new O,Ol=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sh,Mh,bs),bs.x===1&&bs.y===1&&bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sh,Mh,bs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sh,Mh,bs),bs.x===1&&bs.y===1&&bs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sh,Mh,bs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ar=new O,U0=new De,O0=new De,Yn=class extends Ol{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,U0,O0),t.subVectors(O0,U0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Pd=class extends Ul{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}},Rs=class extends va{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ho=class extends Ol{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Id=class extends Ul{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Id}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ia=-90,sa=1,Sa=class extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yn(ia,sa,e,t);i.layers=this.layers,this.add(i);let r=new Yn(ia,sa,e,t);r.layers=this.layers,this.add(r);let o=new Yn(ia,sa,e,t);o.layers=this.layers,this.add(o);let a=new Yn(ia,sa,e,t);a.layers=this.layers,this.add(a);let l=new Yn(ia,sa,e,t);l.layers=this.layers,this.add(l);let c=new Yn(ia,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qh=class extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Fl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cy(){this._document.hidden===!1&&this.reset()}var rp="\\[\\]\\.:\\/",Py=new RegExp("["+rp+"]","g"),op="[^"+rp+"]",Iy="[^"+rp.replace("\\.","")+"]",Dy=/((?:WC+[\/:])*)/.source.replace("WC",op),Ly=/(WCOD+)?/.source.replace("WCOD",Iy),Ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",op),Uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",op),Oy=new RegExp("^"+Dy+Ly+Ny+Uy+"$"),Fy=["material","materials","bones","map"],Dd=class{constructor(e,t,n){let i=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Py,"")}static parseTrackName(e){let t=Oy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Fy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Dd;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iA=new Float32Array(1);var F0=new ct,Bl=class{constructor(e,t,n=0,i=1/0){this.ray=new pa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return F0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F0),this}intersectObject(e,t=!0,n=[]){return Ld(e,this,n,t),n.sort(B0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ld(e[i],this,n,t);return n.sort(B0),n}};function B0(s,e){return s.distance-e.distance}function Ld(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Ld(r[o],e,t,!0)}}var fp=class fp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};fp.prototype.isMatrix2=!0;var Nd=fp;function ap(s,e,t,n){let i=By(n);switch(t){case qd:return s*e;case au:return s*e/i.components*i.byteLength;case lu:return s*e/i.components*i.byteLength;case Or:return s*e*2/i.components*i.byteLength;case cu:return s*e*2/i.components*i.byteLength;case Yd:return s*e*3/i.components*i.byteLength;case Ni:return s*e*4/i.components*i.byteLength;case hu:return s*e*4/i.components*i.byteLength;case $l:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fu:case pu:return Math.max(s,16)*Math.max(e,8)/4;case uu:case du:return Math.max(s,8)*Math.max(e,8)/2;case mu:case gu:case xu:case vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _u:case Ql:case yu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Au:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Du:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Uu:case Ou:case Fu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bu:case ku:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jl:case zu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(s){switch(s){case Jn:case Vd:return{byteLength:1,components:1};case Ea:case Gd:case en:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case _s:case su:case Ji:return{byteLength:4,components:1};case Wd:case Xd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vg(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zy(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
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
#endif`,Gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
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
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eS=`#ifdef USE_IRIDESCENCE
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
#endif`,tS=`#ifdef USE_BUMPMAP
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
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hS=`#define PI 3.141592653589793
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
} // validated`,uS=`vec3 transformedNormal = objectNormal;
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
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
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
#endif`,SS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ES=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
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
}`,RS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DS=`#ifdef USE_ENVMAP
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
#endif`,LS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,US=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FS=`PhysicalMaterial material;
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
#endif`,BS=`uniform sampler2D dfgLUT;
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
}`,kS=`
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
#endif`,zS=`#if defined( RE_IndirectDiffuse )
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
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,GS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JS=`#if defined( USE_POINTS_UV )
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
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eM=`#if defined( USE_MORPHCOLORS )
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
#endif`,tM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nM=`#ifdef USE_MORPHTARGETS
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
#endif`,iM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EM=`float getShadowMask() {
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
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform float backgroundBlurriness;
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
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
}`,YM=`#if DEPTH_PACKING == 3200
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
}`,$M=`#define DISTANCE
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
}`,ZM=`#define DISTANCE
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
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
}`,jM=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
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
}`,sb=`#define MATCAP
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
}`,rb=`#define MATCAP
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
}`,ob=`#define NORMAL
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
}`,ab=`#define NORMAL
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
}`,lb=`#define PHONG
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
}`,cb=`#define PHONG
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
}`,hb=`#define STANDARD
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
}`,ub=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,db=`#define TOON
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,xb=`uniform float rotation;
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
}`,vb=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Hy,alphahash_pars_fragment:Vy,alphamap_fragment:Gy,alphamap_pars_fragment:Wy,alphatest_fragment:Xy,alphatest_pars_fragment:qy,aomap_fragment:Yy,aomap_pars_fragment:$y,batching_pars_vertex:Zy,batching_vertex:Jy,begin_vertex:Ky,beginnormal_vertex:Qy,bsdfs:jy,iridescence_fragment:eS,bumpmap_pars_fragment:tS,clipping_planes_fragment:nS,clipping_planes_pars_fragment:iS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:rS,color_fragment:oS,color_pars_fragment:aS,color_pars_vertex:lS,color_vertex:cS,common:hS,defaultnormal_vertex:uS,displacementmap_pars_vertex:fS,displacementmap_vertex:dS,emissivemap_fragment:pS,emissivemap_pars_fragment:mS,colorspace_fragment:gS,colorspace_pars_fragment:_S,envmap_fragment:xS,envmap_common_pars_fragment:vS,envmap_pars_fragment:yS,envmap_pars_vertex:SS,envmap_physical_pars_fragment:DS,envmap_vertex:MS,fog_vertex:bS,fog_pars_vertex:TS,fog_fragment:ES,fog_pars_fragment:wS,gradientmap_pars_fragment:AS,lightmap_pars_fragment:RS,lights_lambert_fragment:CS,lights_lambert_pars_fragment:PS,lights_pars_begin:IS,lights_toon_fragment:LS,lights_toon_pars_fragment:NS,lights_phong_fragment:US,lights_phong_pars_fragment:OS,lights_physical_fragment:FS,lights_physical_pars_fragment:BS,lights_fragment_begin:kS,lights_fragment_maps:zS,lights_fragment_end:HS,lightprobes_pars_fragment:VS,logdepthbuf_fragment:GS,logdepthbuf_pars_fragment:WS,logdepthbuf_pars_vertex:XS,logdepthbuf_vertex:qS,map_fragment:YS,map_pars_fragment:$S,map_particle_fragment:ZS,map_particle_pars_fragment:JS,metalnessmap_fragment:KS,metalnessmap_pars_fragment:QS,morphinstance_vertex:jS,morphcolor_vertex:eM,morphnormal_vertex:tM,morphtarget_pars_vertex:nM,morphtarget_vertex:iM,normal_fragment_begin:sM,normal_fragment_maps:rM,normal_pars_fragment:oM,normal_pars_vertex:aM,normal_vertex:lM,normalmap_pars_fragment:cM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:dM,opaque_fragment:pM,packing:mM,premultiplied_alpha_fragment:gM,project_vertex:_M,dithering_fragment:xM,dithering_pars_fragment:vM,roughnessmap_fragment:yM,roughnessmap_pars_fragment:SM,shadowmap_pars_fragment:MM,shadowmap_pars_vertex:bM,shadowmap_vertex:TM,shadowmask_pars_fragment:EM,skinbase_vertex:wM,skinning_pars_vertex:AM,skinning_vertex:RM,skinnormal_vertex:CM,specularmap_fragment:PM,specularmap_pars_fragment:IM,tonemapping_fragment:DM,tonemapping_pars_fragment:LM,transmission_fragment:NM,transmission_pars_fragment:UM,uv_pars_fragment:OM,uv_pars_vertex:FM,uv_vertex:BM,worldpos_vertex:kM,background_vert:zM,background_frag:HM,backgroundCube_vert:VM,backgroundCube_frag:GM,cube_vert:WM,cube_frag:XM,depth_vert:qM,depth_frag:YM,distance_vert:$M,distance_frag:ZM,equirect_vert:JM,equirect_frag:KM,linedashed_vert:QM,linedashed_frag:jM,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:sb,meshmatcap_frag:rb,meshnormal_vert:ob,meshnormal_frag:ab,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:hb,meshphysical_frag:ub,meshtoon_vert:fb,meshtoon_frag:db,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:xb,sprite_frag:vb},Fe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Is={basic:{uniforms:Kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Kn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Kn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Kn([Fe.points,Fe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Kn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Kn([Fe.common,Fe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Kn([Fe.sprite,Fe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Kn([Fe.common,Fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Kn([Fe.lights,Fe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Is.physical={uniforms:Kn([Is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Vu={r:0,b:0,g:0},yb=new ct,Gg=new ot;Gg.set(-1,0,0,0,1,0,0,0,1);function Sb(s,e,t,n,i,r){let o=new Ue(0),a=i===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function p(v){let T=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let y=u(T);y&&y.isCubeTexture?(c===void 0&&(c=new Re(new Fn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:go(Is.backgroundCube.uniforms),vertexShader:Is.backgroundCube.vertexShader,fragmentShader:Is.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gg),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==bt,(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new gs(2,2),new Pt({name:"BackgroundMaterial",uniforms:go(Is.background.uniforms),vertexShader:Is.background.vertexShader,fragmentShader:Is.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Vu,sp(s)),t.buffers.color.setClear(Vu.r,Vu.g,Vu.b,T,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:_}}function Mb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(D,P,N,A,U){let k=!1,B=f(D,A,N,P);r!==B&&(r=B,c(r.object)),k=u(D,A,N,U),k&&p(D,A,N,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(D,P,N,A),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,P,N,A){let U=A.wireframe===!0,k=n[P.id];k===void 0&&(k={},n[P.id]=k);let B=D.isInstancedMesh===!0?D.id:0,Y=k[B];Y===void 0&&(Y={},k[B]=Y);let W=Y[N.id];W===void 0&&(W={},Y[N.id]=W);let I=W[U];return I===void 0&&(I=d(l()),W[U]=I),I}function d(D){let P=[],N=[],A=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:A,object:D,attributes:{},index:null}}function u(D,P,N,A){let U=r.attributes,k=P.attributes,B=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let J=U[W],de=k[W];if(de===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;B++}return r.attributesNum!==B||r.index!==A}function p(D,P,N,A){let U={},k=P.attributes,B=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let J=k[W];J===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let de={};de.attribute=J,J&&J.data&&(de.data=J.data),U[W]=de,B++}r.attributes=U,r.attributesNum=B,r.index=A}function x(){let D=r.newAttributes;for(let P=0,N=D.length;P<N;P++)D[P]=0}function m(D){_(D,0)}function _(D,P){let N=r.newAttributes,A=r.enabledAttributes,U=r.attributeDivisors;N[D]=1,A[D]===0&&(s.enableVertexAttribArray(D),A[D]=1),U[D]!==P&&(s.vertexAttribDivisor(D,P),U[D]=P)}function v(){let D=r.newAttributes,P=r.enabledAttributes;for(let N=0,A=P.length;N<A;N++)P[N]!==D[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function T(D,P,N,A,U,k,B){B===!0?s.vertexAttribIPointer(D,P,N,U,k):s.vertexAttribPointer(D,P,N,A,U,k)}function y(D,P,N,A){x();let U=A.attributes,k=N.getAttributes(),B=P.defaultAttributeValues;for(let Y in k){let W=k[Y];if(W.location>=0){let I=U[Y];if(I===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){let J=I.normalized,de=I.itemSize,be=e.get(I);if(be===void 0)continue;let H=be.buffer,X=be.type,ue=be.bytesPerElement,ae=X===s.INT||X===s.UNSIGNED_INT||I.gpuType===su;if(I.isInterleavedBufferAttribute){let fe=I.data,Se=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Ge=I.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ce=0;Ce<W.locationSize;Ce++)_(W.location+Ce,fe.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)m(W.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,H);for(let Ce=0;Ce<W.locationSize;Ce++)T(W.location+Ce,de/W.locationSize,X,J,Se*ue,(Ge+de/W.locationSize*Ce)*ue,ae)}else{if(I.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)_(W.location+fe,I.meshPerAttribute);D.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let fe=0;fe<W.locationSize;fe++)m(W.location+fe);s.bindBuffer(s.ARRAY_BUFFER,H);for(let fe=0;fe<W.locationSize;fe++)T(W.location+fe,de/W.locationSize,X,J,de*ue,de/W.locationSize*fe*ue,ae)}}else if(B!==void 0){let J=B[Y];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(W.location,J);break;case 3:s.vertexAttrib3fv(W.location,J);break;case 4:s.vertexAttrib4fv(W.location,J);break;default:s.vertexAttrib1fv(W.location,J)}}}}v()}function b(){w();for(let D in n){let P=n[D];for(let N in P){let A=P[N];for(let U in A){let k=A[U];for(let B in k)h(k[B].object),delete k[B];delete A[U]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let P=n[D.id];for(let N in P){let A=P[N];for(let U in A){let k=A[U];for(let B in k)h(k[B].object),delete k[B];delete A[U]}}delete n[D.id]}function g(D){for(let P in n){let N=n[P];for(let A in N){let U=N[A];if(U[D.id]===void 0)continue;let k=U[D.id];for(let B in k)h(k[B].object),delete k[B];delete U[D.id]}}}function S(D){for(let P in n){let N=n[P],A=D.isInstancedMesh===!0?D.id:0,U=N[A];if(U!==void 0){for(let k in U){let B=U[k];for(let Y in B)h(B[Y].object),delete B[Y];delete U[k]}delete N[A],Object.keys(N).length===0&&delete n[P]}}}function w(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function bb(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Tb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==Ni&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let S=g===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Jn&&g!==Ji&&!S&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:M}}function Eb(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ds,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,_=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,y=_.clippingState||null;l.value=y,y=h(p,d,T,u);for(let b=0;b!==T;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let _=u+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let T=0,y=u;T!==x;++T,y+=4)o.copy(f[T]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ic=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fn(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:In});r.uniforms.tEquirect.value=t;let o=new Re(i,r),a=t.minFilter;return t.minFilter===ir&&(t.minFilter=li),new Sa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Sg=256,wb=3,Ab=20,Wg=256,Xg=16,Rb=3,Cb=new O,Pb=new Ue,Aa=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sa(1,10,null),this._boxMesh=new Re(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Cb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Pb));let m=new Sa(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sg,ep(e))}_fromTexture(e,t){e.mapping===mo||e.mapping===Ta?this._setSize(e.image.length===0?Sg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Mg(e,!1,!1),n=Math.log2(e)-wb;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===mo||e.mapping===Ta?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ib(),this._integrationMaterial=Db());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Rb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Wg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Mg(s,e,t){return new ic(s,{minFilter:ir,generateMipmaps:e,type:en,colorSpace:gl,depthBuffer:t})}function sc(s,e,t){return new Pt({name:s,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:Bn,blending:In,depthTest:!1,depthWrite:!1})}function Ib(){return sc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wg}u

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
	`)}function Db(){return sc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xg}},`

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
	`)}function Lb(){return sc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ab}
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
	`)}function bg(){return sc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tg(){return sc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Nb(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===tu||u===nu)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ic(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===tu||u===nu,x=u===mo||u===Ta;if(p||x){let m=t.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Aa(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Aa(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===tu?d.mapping=mo:u===nu&&(d.mapping=Ta),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Ub(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&oo("WebGLRenderer: "+n+" extension not supported."),i}}}function Ob(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function f(p){let x=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,T=m.count>=65535?Ml:Sl,y=new T(Math.ceil(v/3)*6,1),b=y.array;if(x!==null){let g=x.array;_=x.version;for(let S=0,w=0;S<v;S+=3){let E=g[S+0],D=g[S+1],P=g[S+2];b[w++]=E,b[w++]=D,b[w++]=D,b[w++]=P,b[w++]=P,b[w++]=E}}else{_=m.version;for(let g=0,S=0;g<v;g+=3){let w=g+0,E=g+1,D=g+2;b[S++]=w,b[S++]=E,b[S++]=E,b[S++]=D,b[S++]=D,b[S++]=w}}y.version=_;let M=r.get(p);M&&e.remove(M),r.set(p,y)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Fb(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*o,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kb(s,e,t){let n=new WeakMap,i=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let w=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;u===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*f),g=new vl(M,y,b,f);g.type=Ji,g.needsUpdate=!0;let S=T*4;for(let E=0;E<f;E++){let D=m[E],P=_[E],N=v[E],A=y*b*4*E;for(let U=0;U<D.count;U++){let k=U*S;u===!0&&(i.fromBufferAttribute(D,U),M[A+k+0]=i.x,M[A+k+1]=i.y,M[A+k+2]=i.z,M[A+k+3]=0),p===!0&&(i.fromBufferAttribute(P,U),M[A+k+4]=i.x,M[A+k+5]=i.y,M[A+k+6]=i.z,M[A+k+7]=0),x===!0&&(i.fromBufferAttribute(N,U),M[A+k+8]=i.x,M[A+k+9]=i.y,M[A+k+10]=i.z,M[A+k+11]=N.itemSize===4?i.w:1)}}d={count:f,texture:g,size:new De(y,b)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zb(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Hb={[Hl]:"LINEAR_TONE_MAPPING",[Vl]:"REINHARD_TONE_MAPPING",[Gl]:"CINEON_TONE_MAPPING",[po]:"ACES_FILMIC_TONE_MAPPING",[Xl]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Wl]:"CUSTOM_TONE_MAPPING"};function Vb(s,e,t,n,i,r){let o=new Wt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Yt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let f=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Re(h,f),u=new ho(-1,1,1,-1,0,1),p=null,x=null,m=!1,_,v=null,T=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),l!==null&&l.setSize(b,M);for(let g=0;g<T.length;g++){let S=T[g];S.setSize&&S.setSize(b,M)}},this.setEffects=function(b){T=b,y=T.length>0&&T[0].isRenderPass===!0;let M=o.width,g=o.height;T.length>0&&a===null&&(a=new Wt(M,g,{type:en,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(M,g,{type:en,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&T.some(w=>w.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new ms(M,g),r===!0&&(c.format=xs,c.type=sr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let w=0;w<T.length;w++){let E=T[w];E.setSize&&E.setSize(M,g),S&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,M){if(m||b.toneMapping===Cs&&T.length===0)return!1;if(v=M,M!==null){let g=M.width,S=M.height;(o.width!==g||o.height!==S)&&this.setSize(g,S)}return y===!1&&b.setRenderTarget(o),_=b.toneMapping,b.toneMapping=Cs,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=_,m=!0;let g=o,S=a;for(let w=0;w<T.length;w++){let E=T[w];E.enabled!==!1&&(E.render(b,S,g,M),E.needsSwap!==!1&&(g=S,S=S===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,f.defines={},gt.getTransfer(p)===bt&&(f.defines.SRGB_TRANSFER="");let w=Hb[x];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,b.setRenderTarget(v),b.render(d,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var qg=new $n,Yg=new ms(1,1),$g=new wl(1),Zg=new vl,Jg=new Fh,Kg=new El,Eg=[],wg=[],Ag=new Float32Array(16),Rg=new Float32Array(9),Cg=new Float32Array(4);function Ra(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Eg[i];if(r===void 0&&(r=new Float32Array(i),Eg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xu(s,e){let t=wg[e];t===void 0&&(t=new Int32Array(e),wg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Gb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function Xb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function Yb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(bn(t,n))return;Cg.set(n),s.uniformMatrix2fv(this.addr,!1,Cg),Tn(t,n)}}function $b(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(bn(t,n))return;Rg.set(n),s.uniformMatrix3fv(this.addr,!1,Rg),Tn(t,n)}}function Zb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(bn(t,n))return;Ag.set(n),s.uniformMatrix4fv(this.addr,!1,Ag),Tn(t,n)}}function Jb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Kb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function Qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function jb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function e1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function t1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function n1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function i1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function qu(s){return s.version===0&&(s.compareFunction=Jd,s.needsUpdate=!0),s}function s1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=qu(Yg):r=qg,t.setTexture2D(e||r,i)}function r1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jg,i)}function o1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=qu($g):r=Kg,t.setTextureCube(e||r,i)}function a1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zg,i)}function l1(s){switch(s){case 5126:return Gb;case 35664:return Wb;case 35665:return Xb;case 35666:return qb;case 35674:return Yb;case 35675:return $b;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return Kb;case 35668:case 35672:return Qb;case 35669:case 35673:return jb;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function c1(s,e){s.uniform1fv(this.addr,e)}function h1(s,e){let t=Ra(e,this.size,2);s.uniform2fv(this.addr,t)}function u1(s,e){let t=Ra(e,this.size,3);s.uniform3fv(this.addr,t)}function f1(s,e){let t=Ra(e,this.size,4);s.uniform4fv(this.addr,t)}function d1(s,e){let t=Ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function p1(s,e){let t=Ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function m1(s,e){let t=Ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function g1(s,e){s.uniform1iv(this.addr,e)}function _1(s,e){s.uniform2iv(this.addr,e)}function x1(s,e){s.uniform3iv(this.addr,e)}function v1(s,e){s.uniform4iv(this.addr,e)}function y1(s,e){s.uniform1uiv(this.addr,e)}function S1(s,e){s.uniform2uiv(this.addr,e)}function M1(s,e){s.uniform3uiv(this.addr,e)}function b1(s,e){s.uniform4uiv(this.addr,e)}function T1(s,e,t){let n=this.cache,i=e.length,r=Xu(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=qu(Yg):o=qg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function E1(s,e,t){let n=this.cache,i=e.length,r=Xu(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jg,r[o])}function w1(s,e,t){let n=this.cache,i=e.length,r=Xu(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=qu($g):o=Kg;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function A1(s,e,t){let n=this.cache,i=e.length,r=Xu(t,i);bn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zg,r[o])}function R1(s){switch(s){case 5126:return c1;case 35664:return h1;case 35665:return u1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return x1;case 35669:case 35673:return v1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return A1}}var mp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l1(t.type)}},gp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R1(t.type)}},_p=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},dp=/(\w+)(\])?(\[|\.)?/g;function Pg(s,e){s.seq.push(e),s.map[e.id]=e}function C1(s,e,t){let n=s.name,i=n.length;for(dp.lastIndex=0;;){let r=dp.exec(n),o=dp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Pg(t,c===void 0?new mp(a,s,e):new gp(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new _p(a),Pg(t,f)),t=f}}}var wa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);C1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ig(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var P1=37297,I1=0;function D1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Dg=new ot;function L1(s){gt._getMatrix(Dg,gt.workingColorSpace,s);let e=`mat3( ${Dg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(s)){case _l:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lg(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+D1(s.getShaderSource(e),a)}else return r}function N1(s,e){let t=L1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var U1={[Hl]:"Linear",[Vl]:"Reinhard",[Gl]:"Cineon",[po]:"ACESFilmic",[Xl]:"AgX",[ql]:"Neutral",[Wl]:"Custom"};function O1(s,e){let t=U1[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gu=new O;function F1(){gt.getLuminanceCoefficients(Gu);let s=Gu.x.toFixed(4),e=Gu.y.toFixed(4),t=Gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nc).join(`
`)}function k1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function nc(s){return s!==""}function Ng(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ug(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(s){return s.replace(H1,V1)}function V1(s,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xp(t)}var G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(s){return s.replace(G1,W1)}function W1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var X1={[uo]:"SHADOWMAP_TYPE_PCF",[Ma]:"SHADOWMAP_TYPE_VSM"};function q1(s){return X1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y1={[Ta]:"ENVMAP_MODE_REFRACTION"};function $1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Y1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z1={[zd]:"ENVMAP_BLENDING_MULTIPLY",[ng]:"ENVMAP_BLENDING_MIX",[ig]:"ENVMAP_BLENDING_ADD"};function J1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Z1[s.combine]||"ENVMAP_BLENDING_NONE"}function K1(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=q1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$1(t),f=J1(t),d=B1(t),u=k1(r),p=i.createProgram(),x,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(nc).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(nc).join(`
`),m.length>0&&(m+=`
`)):(x=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nc).join(`
`),m=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?ht.tonemapping_pars_fragment:"",t.toneMapping!==Cs?O1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,N1("linearToOutputTexel",t.outputColorSpace),F1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nc).join(`
`)),o=xp(o),o=Ng(o,t),o=Ug(o,t),a=xp(a),a=Ng(a,t),a=Ug(a,t),o=Og(o),a=Og(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+x+o,T=_+m+a,y=Ig(i,i.VERTEX_SHADER,v),b=Ig(i,i.FRAGMENT_SHADER,T);i.attachShader(p,y),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function M(E){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",P=i.getShaderInfoLog(y)||"",N=i.getShaderInfoLog(b)||"",A=D.trim(),U=P.trim(),k=N.trim(),B=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,b);else{let W=Lg(i,y,"vertex"),I=Lg(i,b,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+A+`
`+W+`
`+I)}else A!==""?nt("WebGLProgram: Program Info Log:",A):(U===""||k==="")&&(Y=!1);Y&&(E.diagnostics={runnable:B,programLog:A,vertexShader:{log:U,prefix:x},fragmentShader:{log:k,prefix:m}})}i.deleteShader(y),i.deleteShader(b),g=new wa(i,p),S=z1(i,p)}let g;this.getUniforms=function(){return g===void 0&&M(this),g};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,P1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=b,this}var Q1=0,vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yp(e),t.set(e,n)),n}},yp=class{constructor(e){this.id=Q1++,this.code=e,this.usedTimes=0}};function j1(s){return s===Or||s===Ql||s===jl}function eT(s,e,t,n,i,r){let o=new fa,a=new vp,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,S,w,E,D,P){let N=E.fog,A=D.geometry,U=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?E.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||U,k),Y=d[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&nt("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let I=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,J=I!==void 0?I.length:0,de=0;A.morphAttributes.position!==void 0&&(de=1),A.morphAttributes.normal!==void 0&&(de=2),A.morphAttributes.color!==void 0&&(de=3);let be,H,X,ue;if(Y){let ce=Is[Y];be=ce.vertexShader,H=ce.fragmentShader}else{be=g.vertexShader,H=g.fragmentShader;let ce=a.getVertexShaderStage(g),ze=a.getFragmentShaderStage(g);a.update(g,ce,ze),X=ce.id,ue=ze.id}let ae=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Se=D.isInstancedMesh===!0,Ge=D.isBatchedMesh===!0,Ce=!!g.map,Ve=!!g.matcap,ye=!!B,Pe=ye&&B.isPMREMTexture===!0,et=!!g.aoMap,re=!!g.lightMap,V=!!g.bumpMap&&g.wireframe===!1,Me=!!g.normalMap,Je=!!g.displacementMap,Be=!!g.emissiveMap,ke=!!g.metalnessMap,tt=!!g.roughnessMap,je=g.anisotropy>0,z=g.clearcoat>0,it=g.diffuseRoughness>0,j=g.dispersion>0,oe=g.retroreflectivity>0,ee=g.iridescence>0,Ke=g.sheen>0,Te=g.transmission>0,Oe=je&&!!g.anisotropyMap,L=z&&!!g.clearcoatMap,R=z&&!!g.clearcoatNormalMap,q=z&&!!g.clearcoatRoughnessMap,pe=it&&!!g.diffuseRoughnessMap,ie=ee&&!!g.iridescenceMap,ge=ee&&!!g.iridescenceThicknessMap,xe=Ke&&!!g.sheenColorMap,$=Ke&&!!g.sheenRoughnessMap,ne=!!g.specularMap,me=!!g.specularColorMap,F=!!g.specularIntensityMap,se=Te&&!!g.transmissionMap,te=Te&&!!g.thicknessMap,Ee=!!g.gradientMap,ve=!!g.alphaMap,we=g.alphaTest>0,_e=!!g.alphaHash,Ae=!!g.extensions,he=Cs;g.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(he=s.toneMapping);let le=Pe?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Ie={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:be,fragmentShader:H,defines:g.defines,customVertexShaderID:X,customFragmentShaderID:ue,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:Ge,batchingColor:Ge&&D._colorsTexture!==null,instancing:Se,instancingColor:Se&&D.instanceColor!==null,instancingMorph:Se&&D.morphTexture!==null,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:Ve,envMap:ye,envMapMode:ye&&B.mapping,envMapPMREM:Pe,envMapMaxLod:Pe?le.length-1:null,envMapSize:Pe?le[0].width:null,aoMap:et,lightMap:re,bumpMap:V,normalMap:Me,displacementMap:Je,emissiveMap:Be,normalMapObjectSpace:Me&&g.normalMapType===og,normalMapTangentSpace:Me&&g.normalMapType===ec,packedNormalMap:Me&&g.normalMapType===ec&&j1(g.normalMap.format),metalnessMap:ke,roughnessMap:tt,anisotropy:je,anisotropyMap:Oe,clearcoat:z,clearcoatMap:L,clearcoatNormalMap:R,clearcoatRoughnessMap:q,diffuseRoughness:it,diffuseRoughnessMap:pe,dispersion:j,retroreflection:oe,iridescence:ee,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:Ke,sheenColorMap:xe,sheenRoughnessMap:$,specularMap:ne,specularColorMap:me,specularIntensityMap:F,transmission:Te,transmissionMap:se,thicknessMap:te,gradientMap:Ee,opaque:g.transparent===!1&&g.blending===ba&&g.alphaToCoverage===!1,alphaMap:ve,alphaTest:we,alphaHash:_e,combine:g.combine,mapUv:Ce&&u(g.map.channel),aoMapUv:et&&u(g.aoMap.channel),lightMapUv:re&&u(g.lightMap.channel),bumpMapUv:V&&u(g.bumpMap.channel),normalMapUv:Me&&u(g.normalMap.channel),displacementMapUv:Je&&u(g.displacementMap.channel),emissiveMapUv:Be&&u(g.emissiveMap.channel),metalnessMapUv:ke&&u(g.metalnessMap.channel),roughnessMapUv:tt&&u(g.roughnessMap.channel),anisotropyMapUv:Oe&&u(g.anisotropyMap.channel),clearcoatMapUv:L&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:R&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(g.sheenRoughnessMap.channel),specularMapUv:ne&&u(g.specularMap.channel),specularColorMapUv:me&&u(g.specularColorMap.channel),specularIntensityMapUv:F&&u(g.specularIntensityMap.channel),transmissionMapUv:se&&u(g.transmissionMap.channel),thicknessMapUv:te&&u(g.thicknessMap.channel),alphaMapUv:ve&&u(g.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Me||je),vertexNormals:!!A.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!A.attributes.uv&&(Ce||ve),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||A.attributes.normal===void 0&&Me===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:de,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.filter(ce=>ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&gt.getTransfer(g.map.colorSpace)===bt,decodeVideoTextureEmissive:Be&&g.emissiveMap.isVideoTexture===!0&&gt.getTransfer(g.emissiveMap.colorSpace)===bt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zn,flipSided:g.side===Bn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ae&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&g.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function x(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let w in g.defines)S.push(w),S.push(g.defines[w]);return g.isRawShaderMaterial===!1&&(m(S,g),_(S,g),S.push(s.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function _(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function v(g){let S=d[g.type],w;if(S){let E=Is[S];w=hi.clone(E.uniforms)}else w=g.uniforms;return w}function T(g,S){let w=h.get(S);return w!==void 0?++w.usedTimes:(w=new K1(s,S,g,i),c.push(w),h.set(S,w)),w}function y(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function b(g){a.remove(g)}function M(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:M}}function tT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function nT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,x,m,_){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:_},s[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=_),e++,v}function l(d,u,p,x,m,_,v){v.reversedDepth===!0&&(m=-m);let T=a(d,u,p,x,m,_);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):t.push(T)}function c(d,u,p,x,m,_){let v=a(d,u,p,x,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||nT),n.length>1&&n.sort(u||Bg),i.length>1&&i.sort(u||Bg)}function f(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function iT(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new kg,s.set(n,[o])):i>=r.length?(o=new kg,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ue};break;case"SpotLight":t={position:new O,direction:new O,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function rT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var oT=0;function aT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lT(s){let e=new sT,t=rT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new ct,o=new ct;function a(c){let h=0,f=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,p=0,x=0,m=0,_=0,v=0,T=0,y=0,b=0,M=0,g=0,S=0,w=0,E=0;c.sort(aT);for(let P=0,N=c.length;P<N;P++){let A=c[P],U=A.color,k=A.intensity,B=A.distance,Y=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Or?Y=A.shadow.map.texture:Y=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=U.r*k,f+=U.g*k,d+=U.b*k;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],k);E++}else if(A.isSunLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let I=A.shadow,J=t.get(A);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=Y;let de=I.getViewportCount();for(let be=0;be<de;be++)n.sunShadowMatrix[x+be]=I.getMatrix(be),n.sunShadowCascade[x+be]=I._cascadeData[be];x+=de,p++}n.sun[u]=W,u++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let I=A.shadow,J=t.get(A);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=A.shadow.matrix,b++}n.directional[m]=W,m++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=B,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[v]=W;let I=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,I.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[v]=I.matrix,A.castShadow){let J=t.get(A);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=Y,g++}v++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[T]=W,T++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let I=A.shadow,J=t.get(A);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=A.shadow.matrix,M++}n.point[_]=W,_++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(k),W.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[y]=W,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==g||D.numSpotMaps!==S||D.numLightProbes!==E)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=_,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,D.sunLength=u,D.directionalLength=m,D.pointLength=_,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=g,D.numSpotMaps=S,D.numLightProbes=E,n.version=oT++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,m=0,_=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),f++}else if(y.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),d++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),p++}else if(y.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),u++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:n}}function zg(s){let e=new lT(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cT(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new zg(s),e.set(i,[a])):r>=o.length?(a=new zg(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var hT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uT=`uniform sampler2D shadow_pass;
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
}`,fT=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],dT=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Hg=new ct,tc=new O,pp=new O;function pT(s,e,t){let n=new Cr,i=new De,r=new De,o=new Gt,a=new Hh,l=new Vh,c={},h=t.maxTextureSize,f={[Ur]:Bn,[Bn]:Ur,[Zn]:Zn},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:hT,fragmentShader:uT}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Yt;p.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let _=this.type;this.render=function(M,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===H0&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let w=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(In),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=_!==this.type;N&&g.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(U=>U.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,U=M.length;A<U;A++){let k=M[A],B=k.shadow;if(B===void 0){nt("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let Y=B.getFrameExtents();i.multiply(Y),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,B.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ma){if(k.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Wt(i.x,i.y,{format:Or,type:en,minFilter:li,magFilter:li,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new ms(i.x,i.y,Ji),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Ks,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln}else k.isPointLight?(B.map=new ic(i.x),B.map.depthTexture=new wl(i.x,_s)):(B.map=new Wt(i.x,i.y),B.map.depthTexture=new ms(i.x,i.y,_s)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Ks,this.type===uo?(B.map.depthTexture.compareFunction=W?Zd:$d,B.map.depthTexture.minFilter=li,B.map.depthTexture.magFilter=li):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let I=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,S);let J=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let de=0;de<I;de++){let be=B.getCamera(de);if(k.isPointLight){let H=B.camera,X=B.matrix,ue=k.distance||H.far;ue!==H.far&&(H.far=ue,H.updateProjectionMatrix()),tc.setFromMatrixPosition(k.matrixWorld),H.position.copy(tc),pp.copy(H.position),pp.add(fT[de]),H.up.copy(dT[de]),H.lookAt(pp),H.updateMatrixWorld(),X.makeTranslation(-tc.x,-tc.y,-tc.z),Hg.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hg,H.coordinateSystem,H.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,de),s.clear();else{de===0&&(s.setRenderTarget(B.map),s.clear());let H=B.getViewport(de);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o)}n=B.getFrustum(de),y(g,S,be,k,J,this.type)}B.isPointLightShadow!==!0&&this.type===Ma&&v(B,S),B.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(w,E,D)};function v(M,g){let S=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new Wt(i.x,i.y,{format:Or,type:en}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(g,null,S,d,x,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(g,null,S,u,x,null)}function T(M,g,S,w){let E=null,D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)E=D;else if(E=S.isPointLight===!0?l:a,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let P=E.uuid,N=g.uuid,A=c[P];A===void 0&&(A={},c[P]=A);let U=A[N];U===void 0&&(U=E.clone(),A[N]=U,g.addEventListener("dispose",b)),E=U}if(E.visible=g.visible,E.wireframe=g.wireframe,w===Ma?E.side=g.shadowSide!==null?g.shadowSide:g.side:E.side=g.shadowSide!==null?g.shadowSide:f[g.side],E.alphaMap=g.alphaMap,E.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,E.map=g.map,E.clipShadows=g.clipShadows,E.clippingPlanes=g.clippingPlanes,E.clipIntersection=g.clipIntersection,E.displacementMap=g.displacementMap,E.displacementScale=g.displacementScale,E.displacementBias=g.displacementBias,E.wireframeLinewidth=g.wireframeLinewidth,E.linewidth=g.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let P=s.properties.get(E);P.light=S}return E}function y(M,g,S,w,E,D){if(M.visible===!1)return;if(M.layers.test(E)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===Ma)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let A=e.update(M),U=M.material;if(Array.isArray(U)){let k=A.groups;for(let B=0,Y=k.length;B<Y;B++){let W=k[B],I=U[W.materialIndex];if(I&&I.visible){let J=T(M,I,w,D);M.onBeforeShadow(s,M,g,S,A,J,W),s.renderBufferDirect(S,null,A,J,M,W),M.onAfterShadow(s,M,g,S,A,J,W)}}}else if(U.visible){let k=T(M,U,w,D);M.onBeforeShadow(s,M,g,S,A,k,null),s.renderBufferDirect(S,null,A,k,M,null),M.onAfterShadow(s,M,g,S,A,k,null)}}let N=M.children;for(let A=0,U=N.length;A<U;A++)y(N[A],g,S,w,E,D)}function b(M){M.target.removeEventListener("dispose",b);for(let S in c){let w=c[S],E=M.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function mT(s,e){function t(){let F=!1,se=new Gt,te=null,Ee=new Gt(0,0,0,0);return{setMask:function(ve){te!==ve&&!F&&(s.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){F=ve},setClear:function(ve,we,_e,Ae,he){he===!0&&(ve*=Ae,we*=Ae,_e*=Ae),se.set(ve,we,_e,Ae),Ee.equals(se)===!1&&(s.clearColor(ve,we,_e,Ae),Ee.copy(se))},reset:function(){F=!1,te=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,se=!1,te=null,Ee=null,ve=null;return{setReversed:function(we){if(se!==we){let _e=e.get("EXT_clip_control");we?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=we;let Ae=ve;ve=null,this.setClear(Ae)}},getReversed:function(){return se},setTest:function(we){we?fe(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(we){te!==we&&!F&&(s.depthMask(we),te=we)},setFunc:function(we){if(se&&(we=gg[we]),Ee!==we){switch(we){case wh:s.depthFunc(s.NEVER);break;case Ah:s.depthFunc(s.ALWAYS);break;case Rh:s.depthFunc(s.LESS);break;case oa:s.depthFunc(s.LEQUAL);break;case Ch:s.depthFunc(s.EQUAL);break;case Ph:s.depthFunc(s.GEQUAL);break;case Ih:s.depthFunc(s.GREATER);break;case Dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=we}},setLocked:function(we){F=we},setClear:function(we){ve!==we&&(ve=we,se&&(we=1-we),s.clearDepth(we))},reset:function(){F=!1,te=null,Ee=null,ve=null,se=!1}}}function i(){let F=!1,se=null,te=null,Ee=null,ve=null,we=null,_e=null,Ae=null,he=null;return{setTest:function(le){F||(le?fe(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(le){se!==le&&!F&&(s.stencilMask(le),se=le)},setFunc:function(le,Ie,ce){(te!==le||Ee!==Ie||ve!==ce)&&(s.stencilFunc(le,Ie,ce),te=le,Ee=Ie,ve=ce)},setOp:function(le,Ie,ce){(we!==le||_e!==Ie||Ae!==ce)&&(s.stencilOp(le,Ie,ce),we=le,_e=Ie,Ae=ce)},setLocked:function(le){F=le},setClear:function(le){he!==le&&(s.clearStencil(le),he=le)},reset:function(){F=!1,se=null,te=null,Ee=null,ve=null,we=null,_e=null,Ae=null,he=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,_=null,v=null,T=null,y=null,b=null,M=null,g=null,S=new Ue(0,0,0),w=0,E=!1,D=null,P=null,N=null,A=null,U=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let I=null,J={},de=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),H=new Gt().fromArray(de),X=new Gt().fromArray(be);function ue(F,se,te,Ee){let ve=new Uint8Array(4),we=s.createTexture();s.bindTexture(F,we),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<te;_e++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(se+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return we}let ae={};ae[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),o.setFunc(oa),V(!1),Me(Ud),fe(s.CULL_FACE),et(In);function fe(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Se(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Ge(F,se){return d[F]!==se?(s.bindFramebuffer(F,se),d[F]=se,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Ce(F,se){let te=p,Ee=!1;if(F){te=u.get(se),te===void 0&&(te=[],u.set(se,te));let ve=F.textures;if(te.length!==ve.length||te[0]!==s.COLOR_ATTACHMENT0){for(let we=0,_e=ve.length;we<_e;we++)te[we]=s.COLOR_ATTACHMENT0+we;te.length=ve.length,Ee=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(te)}function Ve(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let ye={[Zi]:s.FUNC_ADD,[V0]:s.FUNC_SUBTRACT,[G0]:s.FUNC_REVERSE_SUBTRACT};ye[W0]=s.MIN,ye[X0]=s.MAX;let Pe={[fo]:s.ZERO,[q0]:s.ONE,[Y0]:s.SRC_COLOR,[Bd]:s.SRC_ALPHA,[K0]:s.SRC_ALPHA_SATURATE,[zl]:s.DST_COLOR,[kl]:s.DST_ALPHA,[$0]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[J0]:s.ONE_MINUS_DST_COLOR,[Z0]:s.ONE_MINUS_DST_ALPHA,[Q0]:s.CONSTANT_COLOR,[j0]:s.ONE_MINUS_CONSTANT_COLOR,[eg]:s.CONSTANT_ALPHA,[tg]:s.ONE_MINUS_CONSTANT_ALPHA};function et(F,se,te,Ee,ve,we,_e,Ae,he,le){if(F===In){m===!0&&(Se(s.BLEND),m=!1);return}if(m===!1&&(fe(s.BLEND),m=!0),F!==eu){if(F!==_||le!==E){if((v!==Zi||b!==Zi)&&(s.blendEquation(s.FUNC_ADD),v=Zi,b=Zi),le)switch(F){case ba:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.ONE,s.ONE);break;case Od:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rt("WebGLState: Invalid blending: ",F);break}else switch(F){case ba:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Od:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fd:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",F);break}T=null,y=null,M=null,g=null,S.set(0,0,0),w=0,_=F,E=le}return}ve=ve||se,we=we||te,_e=_e||Ee,(se!==v||ve!==b)&&(s.blendEquationSeparate(ye[se],ye[ve]),v=se,b=ve),(te!==T||Ee!==y||we!==M||_e!==g)&&(s.blendFuncSeparate(Pe[te],Pe[Ee],Pe[we],Pe[_e]),T=te,y=Ee,M=we,g=_e),(Ae.equals(S)===!1||he!==w)&&(s.blendColor(Ae.r,Ae.g,Ae.b,he),S.copy(Ae),w=he),_=F,E=!1}function re(F,se){F.side===Zn?Se(s.CULL_FACE):fe(s.CULL_FACE);let te=F.side===Bn;se&&(te=!te),V(te),F.blending===ba&&F.transparent===!1?et(In):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function V(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}function Me(F){F!==k0?(fe(s.CULL_FACE),F!==P&&(F===Ud?s.cullFace(s.BACK):F===z0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),P=F}function Je(F){F!==N&&(B&&s.lineWidth(F),N=F)}function Be(F,se,te){F?(fe(s.POLYGON_OFFSET_FILL),(A!==se||U!==te)&&(A=se,U=te,o.getReversed()&&(se=-se,te=-te),s.polygonOffset(se,te))):Se(s.POLYGON_OFFSET_FILL)}function ke(F){F?fe(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function tt(F){F===void 0&&(F=s.TEXTURE0+k-1),I!==F&&(s.activeTexture(F),I=F)}function je(F,se,te){te===void 0&&(I===null?te=s.TEXTURE0+k-1:te=I);let Ee=J[te];Ee===void 0&&(Ee={type:void 0,texture:void 0},J[te]=Ee),(Ee.type!==F||Ee.texture!==se)&&(I!==te&&(s.activeTexture(te),I=te),s.bindTexture(F,se||ae[F]),Ee.type=F,Ee.texture=se)}function z(){let F=J[I];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function oe(){try{s.texSubImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function ee(){try{s.texSubImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function Ke(){try{s.compressedTexSubImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function Oe(){try{s.texStorage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function L(){try{s.texStorage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function R(){try{s.texImage2D(...arguments)}catch(F){rt("WebGLState:",F)}}function q(){try{s.texImage3D(...arguments)}catch(F){rt("WebGLState:",F)}}function pe(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function ie(F,se){f[F]!==se&&(s.pixelStorei(F,se),f[F]=se)}function ge(F){H.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),H.copy(F))}function xe(F){X.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function $(F,se){let te=c.get(se);te===void 0&&(te=new WeakMap,c.set(se,te));let Ee=te.get(F);Ee===void 0&&(Ee=s.getUniformBlockIndex(se,F.name),s.uniformBlockBinding(se,Ee,Ee),te.set(F,Ee))}function ne(F,se,te){let ve=c.get(se).get(F);l[ve]!==te&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,te),l[ve]=te)}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},I=null,J={},d={},l={},u=new WeakMap,p=[],x=null,m=!1,_=null,v=null,T=null,y=null,b=null,M=null,g=null,S=new Ue(0,0,0),w=0,E=!1,D=null,P=null,N=null,A=null,U=null,H.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Se,bindFramebuffer:Ge,drawBuffers:Ce,useProgram:Ve,setBlending:et,setMaterial:re,setFlipSided:V,setCullFace:Me,setLineWidth:Je,setPolygonOffset:Be,setScissorTest:ke,activeTexture:tt,bindTexture:je,unbindTexture:z,compressedTexImage2D:it,compressedTexImage3D:j,texImage2D:R,texImage3D:q,pixelStorei:ie,getParameter:pe,updateUBOMapping:$,uniformBlockBinding:ne,texStorage2D:Oe,texStorage3D:L,texSubImage2D:oe,texSubImage3D:ee,compressedTexSubImage2D:Ke,compressedTexSubImage3D:Te,scissor:ge,viewport:xe,reset:me}}function gT(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,x=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,R){return m?new OffscreenCanvas(L,R):la("canvas")}function v(L,R,q){let pe=1,ie=Oe(L);if((ie.width>q||ie.height>q)&&(pe=q/Math.max(ie.width,ie.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ge=Math.floor(pe*ie.width),xe=Math.floor(pe*ie.height);d===void 0&&(d=_(ge,xe));let $=R?_(ge,xe):d;return $.width=ge,$.height=xe,$.getContext("2d").drawImage(L,0,0,ge,xe),nt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ge+"x"+xe+")."),$}else return"data"in L&&nt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function T(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(L,R,q,pe,ie,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe;pe&&(xe=e.get("EXT_texture_norm16"),xe||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=R;if(R===s.RED&&(q===s.FLOAT&&($=s.R32F),q===s.HALF_FLOAT&&($=s.R16F),q===s.UNSIGNED_BYTE&&($=s.R8),q===s.UNSIGNED_SHORT&&xe&&($=xe.R16_EXT),q===s.SHORT&&xe&&($=xe.R16_SNORM_EXT)),R===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.R8UI),q===s.UNSIGNED_SHORT&&($=s.R16UI),q===s.UNSIGNED_INT&&($=s.R32UI),q===s.BYTE&&($=s.R8I),q===s.SHORT&&($=s.R16I),q===s.INT&&($=s.R32I)),R===s.RG&&(q===s.FLOAT&&($=s.RG32F),q===s.HALF_FLOAT&&($=s.RG16F),q===s.UNSIGNED_BYTE&&($=s.RG8),q===s.UNSIGNED_SHORT&&xe&&($=xe.RG16_EXT),q===s.SHORT&&xe&&($=xe.RG16_SNORM_EXT)),R===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.RG8UI),q===s.UNSIGNED_SHORT&&($=s.RG16UI),q===s.UNSIGNED_INT&&($=s.RG32UI),q===s.BYTE&&($=s.RG8I),q===s.SHORT&&($=s.RG16I),q===s.INT&&($=s.RG32I)),R===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.RGB8UI),q===s.UNSIGNED_SHORT&&($=s.RGB16UI),q===s.UNSIGNED_INT&&($=s.RGB32UI),q===s.BYTE&&($=s.RGB8I),q===s.SHORT&&($=s.RGB16I),q===s.INT&&($=s.RGB32I)),R===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&($=s.RGBA8UI),q===s.UNSIGNED_SHORT&&($=s.RGBA16UI),q===s.UNSIGNED_INT&&($=s.RGBA32UI),q===s.BYTE&&($=s.RGBA8I),q===s.SHORT&&($=s.RGBA16I),q===s.INT&&($=s.RGBA32I)),R===s.RGB&&(q===s.UNSIGNED_SHORT&&xe&&($=xe.RGB16_EXT),q===s.SHORT&&xe&&($=xe.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),R===s.RGBA){let ne=ge?_l:gt.getTransfer(ie);q===s.FLOAT&&($=s.RGBA32F),q===s.HALF_FLOAT&&($=s.RGBA16F),q===s.UNSIGNED_BYTE&&($=ne===bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&xe&&($=xe.RGBA16_EXT),q===s.SHORT&&xe&&($=xe.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(L,R){let q;return L?R===null||R===_s||R===sr?q=s.DEPTH24_STENCIL8:R===Ji?q=s.DEPTH32F_STENCIL8:R===Ea&&(q=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===_s||R===sr?q=s.DEPTH_COMPONENT24:R===Ji?q=s.DEPTH_COMPONENT32F:R===Ea&&(q=s.DEPTH_COMPONENT16),q}function S(L,R){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==li?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function w(L){let R=new WeakRef(L);n.get(L).__ref=R,p.add(R),x.register(L,R,R)}function E(L){let R=n.get(L).__ref;R!==void 0&&(p.delete(R),x.unregister(R))}function D(L){N(L.target)}function P(L){A(L.target)}function N(L){L.removeEventListener("dispose",D),E(L),k(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function A(L){L.removeEventListener("dispose",P),E(L),Y(L)}function U(){for(let L of p){let R=L.deref();R!==void 0&&(R.isRenderTarget===!0?A(R):N(R))}p.clear(),f.clear()}function k(L){let R=n.get(L);if(R.__webglInit===void 0)return;let q=L.source,pe=u.get(q);if(pe){let ie=pe[R.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(L),Object.keys(pe).length===0&&u.delete(q)}n.remove(L)}function B(L){let R=n.get(L);s.deleteTexture(R.__webglTexture);let q=L.source,pe=u.get(q);delete pe[R.__cacheKey],o.memory.textures--}function Y(L){let R=n.get(L);R.__depthDisposeCallback&&R.__depthDisposeCallback();let q=L.depthTexture;if(q&&q.renderTarget===L&&N(q),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(R.__webglFramebuffer[ie]))for(let ge=0;ge<R.__webglFramebuffer[ie].length;ge++)s.deleteFramebuffer(R.__webglFramebuffer[ie][ge]);else s.deleteFramebuffer(R.__webglFramebuffer[ie]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[ie])}else{if(Array.isArray(R.__webglFramebuffer))for(let ie=0;ie<R.__webglFramebuffer.length;ie++)s.deleteFramebuffer(R.__webglFramebuffer[ie]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ie=0;ie<R.__webglColorRenderbuffer.length;ie++)R.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[ie]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let pe=L.textures;for(let ie=0,ge=pe.length;ie<ge;ie++){let xe=n.get(pe[ie]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(pe[ie])}n.remove(L)}let W=0;function I(){W=0}function J(){return W}function de(L){W=L}function be(){let L=W;return L>=i.maxTextures&&nt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,L}function H(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.mipmapsAutoUpdate),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function X(L,R){let q=n.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let pe=L.image;if(pe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,L,R);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+R)}function ue(L,R){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){re(q,L,R);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+R)}function ae(L,R){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){re(q,L,R);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+R)}function fe(L,R){let q=n.get(L);if(L.version>0&&q.__version!==L.version){V(q,L,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+R)}let Se={[Si]:s.REPEAT,[Ts]:s.CLAMP_TO_EDGE,[Lh]:s.MIRRORED_REPEAT},Ge={[ln]:s.NEAREST,[sg]:s.NEAREST_MIPMAP_NEAREST,[Yl]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[iu]:s.LINEAR_MIPMAP_NEAREST,[ir]:s.LINEAR_MIPMAP_LINEAR},Ce={[lg]:s.NEVER,[Jd]:s.ALWAYS,[cg]:s.LESS,[$d]:s.LEQUAL,[hg]:s.EQUAL,[Zd]:s.GEQUAL,[ug]:s.GREATER,[fg]:s.NOTEQUAL};function Ve(L,R){if(R.type===Ji&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===li||R.magFilter===iu||R.magFilter===Yl||R.magFilter===ir||R.minFilter===li||R.minFilter===iu||R.minFilter===Yl||R.minFilter===ir)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Se[R.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Se[R.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Se[R.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ge[R.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ge[R.minFilter]),R.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ce[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ln||R.minFilter!==Yl&&R.minFilter!==ir||R.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ye(L,R){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",D),w(R));let pe=R.source,ie=u.get(pe);ie===void 0&&(ie={},u.set(pe,ie));let ge=H(R);if(ge!==L.__cacheKey){ie[ge]===void 0&&(ie[ge]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ie[ge].usedTimes++;let xe=ie[L.__cacheKey];xe!==void 0&&(ie[L.__cacheKey].usedTimes--,xe.usedTimes===0&&B(R)),L.__cacheKey=ge,L.__webglTexture=ie[ge].texture}return q}function Pe(L,R,q){return Math.floor(Math.floor(L/q)/R)}function et(L,R,q,pe){let ge=L.updateRanges;if(ge.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,q,pe,R.data);else{ge.sort((F,se)=>F.start-se.start);let xe=0;for(let F=1;F<ge.length;F++){let se=ge[xe],te=ge[F],Ee=se.start+se.count,ve=Pe(te.start,R.width,4),we=Pe(se.start,R.width,4);te.start<=Ee+1&&ve===we&&Pe(te.start+te.count-1,R.width,4)===ve?se.count=Math.max(se.count,te.start+te.count-se.start):(++xe,ge[xe]=te)}ge.length=xe+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let F=0,se=ge.length;F<se;F++){let te=ge[F],Ee=Math.floor(te.start/4),ve=Math.ceil(te.count/4),we=Ee%R.width,_e=Math.floor(Ee/R.width),Ae=ve,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e),t.texSubImage2D(s.TEXTURE_2D,0,we,_e,Ae,he,q,pe,R.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function re(L,R,q){let pe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pe=s.TEXTURE_3D);let ie=ye(L,R),ge=R.source;t.bindTexture(pe,L.__webglTexture,s.TEXTURE0+q);let xe=n.get(ge);if(ge.version!==xe.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let he=gt.getPrimaries(gt.workingColorSpace),le=R.colorSpace===rr?null:gt.getPrimaries(R.colorSpace),Ie=R.colorSpace===rr||he===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment);let ne=v(R.image,!1,i.maxTextureSize);ne=Te(R,ne);let me=r.convert(R.format,R.colorSpace),F=r.convert(R.type),se=M(R.internalFormat,me,F,R.normalized,R.colorSpace,R.isVideoTexture);Ve(pe,R);let te,Ee=R.mipmaps,ve=R.isVideoTexture!==!0,we=xe.__version===void 0||ie===!0,_e=ge.dataReady,Ae=S(R,ne);if(R.isDepthTexture)se=g(R.format===xs,R.type),we&&(ve?t.texStorage2D(s.TEXTURE_2D,1,se,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,se,ne.width,ne.height,0,me,F,null));else if(R.isDataTexture)if(Ee.length>0){ve&&we&&t.texStorage2D(s.TEXTURE_2D,Ae,se,Ee[0].width,Ee[0].height);for(let he=0,le=Ee.length;he<le;he++)te=Ee[he],ve?_e&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,te.width,te.height,me,F,te.data):t.texImage2D(s.TEXTURE_2D,he,se,te.width,te.height,0,me,F,te.data);R.generateMipmaps=!1}else ve?(we&&t.texStorage2D(s.TEXTURE_2D,Ae,se,ne.width,ne.height),_e&&et(R,ne,me,F)):t.texImage2D(s.TEXTURE_2D,0,se,ne.width,ne.height,0,me,F,ne.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ve&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,se,Ee[0].width,Ee[0].height,ne.depth);for(let he=0,le=Ee.length;he<le;he++)if(te=Ee[he],R.format!==Ni)if(me!==null)if(ve){if(_e)if(R.layerUpdates.size>0){let Ie=ap(te.width,te.height,R.format,R.type);for(let ce of R.layerUpdates){let ze=te.data.subarray(ce*Ie/te.data.BYTES_PER_ELEMENT,(ce+1)*Ie/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ce,te.width,te.height,1,me,ze)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,te.width,te.height,ne.depth,me,te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,se,te.width,te.height,ne.depth,0,te.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,te.width,te.height,ne.depth,me,F,te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,se,te.width,te.height,ne.depth,0,me,F,te.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{ve&&we&&t.texStorage2D(s.TEXTURE_2D,Ae,se,Ee[0].width,Ee[0].height);for(let he=0,le=Ee.length;he<le;he++)te=Ee[he],R.format!==Ni?me!==null?ve?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,te.width,te.height,me,te.data):t.compressedTexImage2D(s.TEXTURE_2D,he,se,te.width,te.height,0,te.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?_e&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,te.width,te.height,me,F,te.data):t.texImage2D(s.TEXTURE_2D,he,se,te.width,te.height,0,me,F,te.data)}else if(R.isDataArrayTexture)if(ve){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,se,ne.width,ne.height,ne.depth),_e)if(R.layerUpdates.size>0){let he=ap(ne.width,ne.height,R.format,R.type);for(let le of R.layerUpdates){let Ie=ne.data.subarray(le*he/ne.data.BYTES_PER_ELEMENT,(le+1)*he/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,ne.width,ne.height,1,me,F,Ie)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,F,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,se,ne.width,ne.height,ne.depth,0,me,F,ne.data);else if(R.isData3DTexture)ve?(we&&t.texStorage3D(s.TEXTURE_3D,Ae,se,ne.width,ne.height,ne.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,F,ne.data)):t.texImage3D(s.TEXTURE_3D,0,se,ne.width,ne.height,ne.depth,0,me,F,ne.data);else if(R.isFramebufferTexture){if(we)if(ve)t.texStorage2D(s.TEXTURE_2D,Ae,se,ne.width,ne.height);else{let he=ne.width,le=ne.height;for(let Ie=0;Ie<Ae;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,se,he,le,0,me,F,null),he>>=1,le>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in s){let he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ne.parentNode!==he){he.appendChild(ne),f.add(R),he.onpaint=le=>{let Ie=le.changedElements;for(let ce of f)Ie.includes(ce.image)&&(ce.needsUpdate=!0)},he.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{let Ie=s.RGBA,ce=s.RGBA,ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,ce,ze,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ve&&we){let he=Oe(Ee[0]);t.texStorage2D(s.TEXTURE_2D,Ae,se,he.width,he.height)}for(let he=0,le=Ee.length;he<le;he++)te=Ee[he],ve?_e&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,me,F,te):t.texImage2D(s.TEXTURE_2D,he,se,me,F,te);R.generateMipmaps=!1}else if(ve){if(we){let he=Oe(ne);t.texStorage2D(s.TEXTURE_2D,Ae,se,he.width,he.height)}_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,F,ne)}else t.texImage2D(s.TEXTURE_2D,0,se,me,F,ne);T(R)&&R.mipmapsAutoUpdate===!0&&y(pe),xe.__version=ge.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function V(L,R,q){if(R.image.length!==6)return;let pe=ye(L,R),ie=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let ge=n.get(ie);if(ie.version!==ge.__version||pe===!0){t.activeTexture(s.TEXTURE0+q);let xe=gt.getPrimaries(gt.workingColorSpace),$=R.colorSpace===rr?null:gt.getPrimaries(R.colorSpace),ne=R.colorSpace===rr||xe===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let me=R.isCompressedTexture||R.image[0].isCompressedTexture,F=R.image[0]&&R.image[0].isDataTexture,se=[];for(let ce=0;ce<6;ce++)!me&&!F?se[ce]=v(R.image[ce],!0,i.maxCubemapSize):se[ce]=F?R.image[ce].image:R.image[ce],se[ce]=Te(R,se[ce]);let te=se[0],Ee=r.convert(R.format,R.colorSpace),ve=r.convert(R.type),we=M(R.internalFormat,Ee,ve,R.normalized,R.colorSpace),_e=R.isVideoTexture!==!0,Ae=ge.__version===void 0||pe===!0,he=ie.dataReady,le=S(R,te);Ve(s.TEXTURE_CUBE_MAP,R);let Ie;if(R.isDepthTexture){if(we=g(R.format===xs,R.type),Ae)if(_e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,we,te.width,te.height);else for(let ce=0;ce<6;ce++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,we,te.width,te.height,0,Ee,ve,null)}else if(me){_e&&Ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,we,te.width,te.height);for(let ce=0;ce<6;ce++){Ie=se[ce].mipmaps;for(let ze=0;ze<Ie.length;ze++){let _t=Ie[ze];R.format!==Ni?Ee!==null?_e?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,0,0,_t.width,_t.height,Ee,_t.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,we,_t.width,_t.height,0,_t.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,0,0,_t.width,_t.height,Ee,ve,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze,we,_t.width,_t.height,0,Ee,ve,_t.data)}}}else{if(Ie=R.mipmaps,_e&&Ae){Ie.length>0&&le++;let ce=Oe(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,we,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(F){_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,se[ce].width,se[ce].height,Ee,ve,se[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,we,se[ce].width,se[ce].height,0,Ee,ve,se[ce].data);for(let ze=0;ze<Ie.length;ze++){let at=Ie[ze].image[ce].image;_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,0,0,at.width,at.height,Ee,ve,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,we,at.width,at.height,0,Ee,ve,at.data)}}else{_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee,ve,se[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,we,Ee,ve,se[ce]);for(let ze=0;ze<Ie.length;ze++){let _t=Ie[ze];_e?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,0,0,Ee,ve,_t.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ze+1,we,Ee,ve,_t.image[ce])}}}T(R)&&R.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ge.__version=ie.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Me(L,R,q,pe,ie,ge){let xe=r.convert(q.format,q.colorSpace),$=r.convert(q.type),ne=M(q.internalFormat,xe,$,q.normalized,q.colorSpace),me=n.get(R),F=n.get(q);if(F.__renderTarget=R,!me.__hasExternalTextures){let se=Math.max(1,R.width>>ge),te=Math.max(1,R.height>>ge);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ge,ne,se,te,R.depth,0,xe,$,null):t.texImage2D(ie,ge,ne,se,te,0,xe,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ee(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ie,F.__webglTexture,0,oe(R)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ie,F.__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(L,R,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),R.depthBuffer){let pe=R.depthTexture,ie=pe&&pe.isDepthTexture?pe.type:null,ge=g(R.stencilBuffer,ie),xe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ee(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(R),ge,R.width,R.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(R),ge,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ge,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,L)}else{let pe=R.textures;for(let ie=0;ie<pe.length;ie++){let ge=pe[ie],xe=r.convert(ge.format,ge.colorSpace),$=r.convert(ge.type),ne=M(ge.internalFormat,xe,$,ge.normalized,ge.colorSpace);ee(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe(R),ne,R.width,R.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe(R),ne,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ne,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(L,R,q){let pe=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(R.depthTexture);ie.__renderTarget=R;let ge=pe?R.depthTexture.image[0]:R.depthTexture.image;(!ie.__webglTexture||ge.width!==R.width||ge.height!==R.height)&&(ge.width=R.width,ge.height=R.height,R.depthTexture.needsUpdate=!0),pe?fe(R.depthTexture,0):X(R.depthTexture,0);let xe=ie.__webglTexture,$=oe(R),ne=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,me=R.depthTexture.format===xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(R.depthTexture.format===Ks)ee(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ne,xe,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,me,ne,xe,0);else if(R.depthTexture.format===xs)ee(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ne,xe,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,me,ne,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(L){let R=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){let pe=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pe){let ie=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pe.removeEventListener("dispose",ie)};pe.addEventListener("dispose",ie),R.__depthDisposeCallback=ie}R.__boundDepthTexture=pe}if(L.depthTexture&&!R.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Be(R.__webglFramebuffer[pe],L,pe);else L.texture.mipmaps.length>0?Be(R.__webglFramebuffer[0],L,0):Be(R.__webglFramebuffer,L,0);else if(q){R.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[pe]),R.__webglDepthbuffer[pe]===void 0)R.__webglDepthbuffer[pe]=s.createRenderbuffer(),Je(R.__webglDepthbuffer[pe],L,!1);else{let ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ge)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Je(R.__webglDepthbuffer,L,!1);else{let ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(L,R,q){let pe=n.get(L);R!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ke(L)}function je(L){let R=L.texture,q=n.get(L),pe=n.get(R);L.addEventListener("dispose",P),w(L);let ie=L.textures,ge=L.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=R.version,o.memory.textures++),ge){q.__webglFramebuffer=[];for(let $=0;$<6;$++)if(R.mipmaps.length>0){q.__webglFramebuffer[$]=[];for(let ne=0;ne<R.mipmaps.length;ne++)q.__webglFramebuffer[$][ne]=s.createFramebuffer()}else q.__webglFramebuffer[$]=s.createFramebuffer()}else{if(R.mipmaps.length>0){q.__webglFramebuffer=[];for(let $=0;$<R.mipmaps.length;$++)q.__webglFramebuffer[$]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(xe)for(let $=0,ne=ie.length;$<ne;$++){let me=n.get(ie[$]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&ee(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let $=0;$<ie.length;$++){let ne=ie[$];q.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[$]);let me=r.convert(ne.format,ne.colorSpace),F=r.convert(ne.type),se=M(ne.internalFormat,me,F,ne.normalized,ne.colorSpace,L.isXRRenderTarget===!0),te=oe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,se,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,q.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Je(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,R);for(let $=0;$<6;$++)if(R.mipmaps.length>0)for(let ne=0;ne<R.mipmaps.length;ne++)Me(q.__webglFramebuffer[$][ne],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne);else Me(q.__webglFramebuffer[$],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(R)?y(s.TEXTURE_CUBE_MAP):R.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let $=0,ne=ie.length;$<ne;$++){let me=ie[$],F=n.get(me),se=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,F.__webglTexture),Ve(se,me),Me(q.__webglFramebuffer,L,me,s.COLOR_ATTACHMENT0+$,se,0),T(me)&&y(se)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,pe.__webglTexture),Ve($,R),R.mipmaps.length>0)for(let ne=0;ne<R.mipmaps.length;ne++)Me(q.__webglFramebuffer[ne],L,R,s.COLOR_ATTACHMENT0,$,ne);else Me(q.__webglFramebuffer,L,R,s.COLOR_ATTACHMENT0,$,0);T(R)?y($):R.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,R.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&ke(L)}function z(L){let R=L.textures;for(let q=0,pe=R.length;q<pe;q++){let ie=R[q];if(T(ie)&&ie.mipmapsAutoUpdate===!0){let ge=b(L),xe=n.get(ie).__webglTexture;t.bindTexture(ge,xe),y(ge),t.unbindTexture()}}}let it=[];function j(L){if(L.samples>0){if(ee(L)===!1){let R=L.textures,q=L.width,pe=L.height,ie=s.COLOR_BUFFER_BIT,ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(L),$=R.length>1;if($)for(let me=0;me<R.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<R.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let F=n.get(R[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,q,pe,0,0,q,pe,ie,s.NEAREST),l===!0&&(it.length=0,it.push(s.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&it.push(ge),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<R.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let F=n.get(R[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let R=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function oe(L){return Math.min(i.maxSamples,L.samples)}function ee(L){let R=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ke(L){let R=o.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function Te(L,R){let q=L.colorSpace,pe=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==gl&&q!==rr&&(gt.getTransfer(q)===bt?(pe!==Ni||ie!==Jn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",q)),R}function Oe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=be,this.resetTextureUnits=I,this.getTextureUnits=J,this.setTextureUnits=de,this.setTexture2D=X,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=fe,this.rebindTextures=tt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ee,this.dispose=U}function _T(s,e){function t(n,i=rr){let r,o=gt.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===ru)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vd)return s.BYTE;if(n===Gd)return s.SHORT;if(n===Ea)return s.UNSIGNED_SHORT;if(n===su)return s.INT;if(n===_s)return s.UNSIGNED_INT;if(n===Ji)return s.FLOAT;if(n===en)return s.HALF_FLOAT;if(n===qd)return s.ALPHA;if(n===Yd)return s.RGB;if(n===Ni)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===xs)return s.DEPTH_STENCIL;if(n===au)return s.RED;if(n===lu)return s.RED_INTEGER;if(n===Or)return s.RG;if(n===cu)return s.RG_INTEGER;if(n===hu)return s.RGBA_INTEGER;if(n===$l||n===Zl||n===Jl||n===Kl)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uu||n===fu||n===du||n===pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===du)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mu||n===gu||n===_u||n===xu||n===vu||n===Ql||n===yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mu||n===gu)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_u)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xu)return r.COMPRESSED_R11_EAC;if(n===vu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ql)return r.COMPRESSED_RG11_EAC;if(n===yu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Su||n===Mu||n===bu||n===Tu||n===Eu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Du||n===Lu||n===Nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Su)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Au)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ru)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Iu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uu||n===Ou||n===Fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uu)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bu||n===ku||n===jl||n===zu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var xT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vT=`
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

}`,Sp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Al(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:xT,fragmentShader:vT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends Es{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Sp,_={},v=t.getContextAttributes(),T=null,y=null,b=[],M=[],g=new De,S=null,w=null,E=new Yn;E.viewport=new Gt;let D=new Yn;D.viewport=new Gt;let P=[E,D],N=new Qh,A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=b[H];return X===void 0&&(X=new da,b[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=b[H];return X===void 0&&(X=new da,b[H]=X),X.getGripSpace()},this.getHand=function(H){let X=b[H];return X===void 0&&(X=new da,b[H]=X),X.getHandSpace()};function k(H){let X=M.indexOf(H.inputSource);if(X===-1)return;let ue=b[X];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||o),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let H=0;H<b.length;H++){let X=M[H];X!==null&&(M[H]=null,b[H].disconnect(X))}A=null,U=null,m.reset();for(let H in _)delete _[H];if(e.setRenderTarget(T),u=null,d=null,f=null,i=null,y=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(g.width,g.height,!1),w!==null){let H=w.camera;H.fov=w.fov,H.zoom=w.zoom,H.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ae=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?xs:Ks,ae=v.stencil?sr:_s);let Se={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Se),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wt(d.textureWidth,d.textureHeight,{format:Ni,type:Jn,depthTexture:new ms(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Wt(u.framebufferWidth,u.framebufferHeight,{format:Ni,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(H){for(let X=0;X<H.removed.length;X++){let ue=H.removed[X],ae=M.indexOf(ue);ae>=0&&(M[ae]=null,b[ae].disconnect(ue))}for(let X=0;X<H.added.length;X++){let ue=H.added[X],ae=M.indexOf(ue);if(ae===-1){for(let Se=0;Se<b.length;Se++)if(Se>=M.length){M.push(ue),ae=Se;break}else if(M[Se]===null){M[Se]=ue,ae=Se;break}if(ae===-1)break}let fe=b[ae];fe&&fe.connect(ue)}}function W(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let X=H.near,ue=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),N.near=D.near=E.near=X,N.far=D.far=E.far=ue,(A!==N.near||U!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),A=N.near,U=N.far),N.layers.mask=H.layers.mask|6,E.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let ae=H.parent,fe=N.cameras;W(N,ae);for(let Se=0;Se<fe.length;Se++)W(fe[Se],ae);N.projectionMatrix.copy(E.projectionMatrix),N.projectionMatrixInverse.copy(E.projectionMatrixInverse),w===null&&H.isPerspectiveCamera&&(w={camera:H,fov:H.fov,zoom:H.zoom}),I(H,N,ae)};function I(H,X,ue){ue===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ha*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(H){return _[H]};let J=null;function de(H,X){if(h=X.getViewerPose(c||o),p=X,h!==null){let ue=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let ae=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,ae=!0);for(let Ce=0;Ce<ue.length;Ce++){let Ve=ue[Ce],ye=null;if(u!==null)ye=u.getViewport(Ve);else{let et=f.getViewSubImage(d,Ve);ye=et.viewport,Ce===0&&(e.setRenderTargetTextures(y,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(y))}let Pe=P[Ce];Pe===void 0&&(Pe=new Yn,Pe.layers.enable(Ce),Pe.viewport=new Gt,P[Ce]=Pe),Pe.matrix.fromArray(Ve.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ve.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ye.x,ye.y,ye.width,ye.height),Ce===0&&(N.matrix.copy(Pe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ae===!0&&N.cameras.push(Pe)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ce=f.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&m.init(Ce,i.renderState)}if(fe&&fe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Ce=0;Ce<ue.length;Ce++){let Ve=ue[Ce].camera;if(Ve){let ye=_[Ve];ye||(ye=new Al,_[Ve]=ye);let Pe=f.getCameraImage(Ve);ye.sourceTexture=Pe}}}}for(let ue=0;ue<b.length;ue++){let ae=M[ue],fe=b[ue];ae!==null&&fe!==void 0&&fe.update(ae,X,c||o)}J&&J(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let be=new Vg;be.setAnimationLoop(de),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}},yT=new ct,Qg=new ot;Qg.set(-1,0,0,0,1,0,0,0,1);function ST(s,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,sp(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,T,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),f(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),d(m,_),_.isMeshPhysicalMaterial&&u(m,_,y)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),x(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,v,T):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Bn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Bn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let v=e.get(_),T=v.envMap,y=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(yT.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qg),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,T){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=T*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function f(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function u(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function x(m,_){let v=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MT(s,e,t,n){let i={},r={};function o(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,T){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let b=T.program;n.updateUBOMapping(v,b);let M=e.render.frame;r[v.id]!==M&&(c(v),r[v.id]=M)}function l(v){let T=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let M=0,g=y.length;M<g;M++){let S=y[M];if(Array.isArray(S))for(let w=0,E=S.length;w<E;w++)h(S[w],M,w,b);else h(S,M,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,b){if(d(v,T,y,b)===!0){let M=v.__offset,g=v.value;if(Array.isArray(g)){let S=0;for(let w=0;w<g.length;w++){let E=g[w],D=x(E,!0);f(E,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function f(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,b){let M=v.value,g=T+"_"+y;if(Array.isArray(M)){b[g]===void 0&&(b[g]=[]);let S=b[g],w=!1;for(let E=0;E<M.length;E++)u(M[E],S,E)===!0&&(w=!0);return w}return u(M,b,g)}function u(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let b=T[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function p(v){let T=v.uniforms,y=0,b=16;for(let g=0,S=T.length;g<S;g++){let w=Array.isArray(T[g])?T[g]:[T[g]];for(let E=0,D=w.length;E<D;E++){let P=w[E],N=Array.isArray(P.value)?P.value:[P.value],A=Array.isArray(T[g])||Array.isArray(P.value),U=y;for(let B=0,Y=N.length;B<Y;B++){let W=N[B],I=x(W,A),J=y%b,de=J%I.boundary,be=J+de;y+=de,be!==0&&b-be<I.storage&&(y+=b-be),B===0&&(U=y),y+=I.storage}let k=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new k((y-U)/Float32Array.BYTES_PER_ELEMENT),P.__offset=U}}let M=y%b;return M>0&&(y+=b-M),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let T=v.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function _(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:_}}var bT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ps=null;function TT(){return Ps===null&&(Ps=new er(bT,16,16,Or,en),Ps.name="DFG_LUT",Ps.minFilter=li,Ps.magFilter=li,Ps.wrapS=Ts,Ps.wrapT=Ts,Ps.generateMipmaps=!1,Ps.needsUpdate=!0),Ps}var Wu=class{constructor(e={}){let{canvas:t=dg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=u,m=new Set([hu,cu,lu]),_=new Set([Jn,_s,Ea,sr,ru,ou]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,M=null,g=[],S=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,P=null,N=null,A=null,U=null;this._outputColorSpace=Vt;let k=0,B=0,Y=null,W=-1,I=null,J=new Gt,de=new Gt,be=null,H=new Ue(0),X=0,ue=t.width,ae=t.height,fe=1,Se=null,Ge=null,Ce=new Gt(0,0,ue,ae),Ve=new Gt(0,0,ue,ae),ye=!1,Pe=new Cr,et=new kh,re=!1,V=!1,Me=new ct,Je=new O,Be=new Gt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function je(){return Y===null?fe:1}let z=n;function it(C,G){return t.getContext(C,G)}let j,oe,ee,Ke,Te,Oe,L,R,q,pe,ie,ge,xe,$,ne,me,F,se,te,Ee,ve,we,_e;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ce,!1),z===null){let G="webgl2";if(z=it(G,C),z===null)throw it(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(C){throw t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),rt("WebGLRenderer: "+C.message),C}function Ae(){j=new Ub(z),j.init(),ve=new _T(z,j),oe=new Tb(z,j,e,ve),ee=new mT(z,j),oe.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),N=z.createFramebuffer(),A=z.createFramebuffer(),U=z.createFramebuffer(),Ke=new Bb(z),Te=new tT,Oe=new gT(z,j,ee,Te,oe,ve,Ke),L=new Nb(E),R=new zy(z),we=new Mb(z,R),q=new Ob(z,R,Ke,we),pe=new zb(z,q,R,we,Ke),se=new kb(z,oe,Oe),ne=new Eb(Te),ie=new eT(E,L,j,oe,we,ne),ge=new ST(E,Te),xe=new iT,$=new cT(j),F=new Sb(E,L,ee,pe,p,l),me=new pT(E,pe,oe),_e=new MT(z,Ke,oe,ee),te=new bb(z,j,Ke),Ee=new Fb(z,j,Ke),Ke.programs=ie.programs,E.capabilities=oe,E.extensions=j,E.properties=Te,E.renderLists=xe,E.shadowMap=me,E.state=ee,E.info=Ke}x!==Jn&&(w=new Vb(x,t.width,t.height,a,i,r));let he=new Mp(E,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=j.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=j.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ue,ae,!1))},this.getSize=function(C){return C.set(ue,ae)},this.setSize=function(C,G,Q=!0){if(he.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,ae=G,t.width=Math.floor(C*fe),t.height=Math.floor(G*fe),Q===!0&&(t.style.width=C+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ue*fe,ae*fe).floor()},this.setDrawingBufferSize=function(C,G,Q){ue=C,ae=G,fe=Q,t.width=Math.floor(C*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(x===Jn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(Ce)},this.setViewport=function(C,G,Q,Z){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,G,Q,Z),ee.viewport(J.copy(Ce).multiplyScalar(je()).round())},this.getScissor=function(C){return C.copy(Ve)},this.setScissor=function(C,G,Q,Z){C.isVector4?Ve.set(C.x,C.y,C.z,C.w):Ve.set(C,G,Q,Z),ee.scissor(de.copy(Ve).multiplyScalar(je()).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){ee.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){Ge=C},this.getClearColor=function(C){return C.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,Q=!0){let Z=0;if(C){let K=!1;if(Y!==null){let Ne=Y.texture.format;K=m.has(Ne)}if(K){let Ne=Y.texture.type,Xe=_.has(Ne),Le=F.getClearColor(),He=F.getClearAlpha(),Qe=Le.r,lt=Le.g,xt=Le.b;Xe?(v[0]=Qe,v[1]=lt,v[2]=xt,v[3]=He,z.clearBufferuiv(z.COLOR,0,v)):(T[0]=Qe,T[1]=lt,T[2]=xt,T[3]=He,z.clearBufferiv(z.COLOR,0,T))}else Z|=z.COLOR_BUFFER_BIT}G&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),F.dispose(),xe.dispose(),$.dispose(),Oe.dispose(),Te.dispose(),L.dispose(),pe.dispose(),q.dispose(),we.dispose(),_e.dispose(),ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",Dt),he.removeEventListener("sessionend",wt),vn.stop()};function le(C){C.preventDefault(),xl("WebGLRenderer: Context Lost."),D=!0}function Ie(){xl("WebGLRenderer: Context Restored."),D=!1;let C=Ke.autoReset,G=me.enabled,Q=me.autoUpdate,Z=me.needsUpdate,K=me.type;Ae(),Ke.autoReset=C,me.enabled=G,me.autoUpdate=Q,me.needsUpdate=Z,me.type=K}function ce(C){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){let G=C.target;G.removeEventListener("dispose",ze),_t(G)}function _t(C){at(C),Te.remove(C)}function at(C){let G=Te.get(C).programs;G!==void 0&&(G.forEach(function(Q){ie.releaseProgram(Q)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,Q,Z,K,Ne){G===null&&(G=ke);let Xe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Le=Vi(C,G,Q,Z,K);ee.setMaterial(Z,Xe);let He=Q.index,Qe=1;if(Z.wireframe===!0){if(He=q.getWireframeAttribute(Q),He===void 0)return;Qe=2}let lt=Q.drawRange,xt=Q.attributes.position,$e=lt.start*Qe,vt=(lt.start+lt.count)*Qe;Ne!==null&&($e=Math.max($e,Ne.start*Qe),vt=Math.min(vt,(Ne.start+Ne.count)*Qe)),He!==null?($e=Math.max($e,0),vt=Math.min(vt,He.count)):xt!=null&&($e=Math.max($e,0),vt=Math.min(vt,xt.count));let dn=vt-$e;if(dn<0||dn===1/0)return;we.setup(K,Z,Le,Q,He);let Ot,Nt=te;if(He!==null&&(Ot=R.get(He),Nt=Ee,Nt.setIndex(Ot)),K.isMesh)Z.wireframe===!0?(ee.setLineWidth(Z.wireframeLinewidth*je()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(K.isLine){let Gn=Z.linewidth;Gn===void 0&&(Gn=1),ee.setLineWidth(Gn*je()),K.isLineSegments?Nt.setMode(z.LINES):K.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else K.isPoints?Nt.setMode(z.POINTS):K.isSprite&&Nt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(j.get("WEBGL_multi_draw"))Nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Gn=K._multiDrawStarts,Ze=K._multiDrawCounts,oi=K._multiDrawCount,Et=He?R.get(He).bytesPerElement:1,eo=Te.get(Z).currentProgram.getUniforms();for(let Wn=0;Wn<oi;Wn++)eo.setValue(z,"_gl_DrawID",Wn),Nt.render(Gn[Wn]/Et,Ze[Wn])}else if(K.isInstancedMesh)Nt.renderInstances($e,dn,K.count);else if(Q.isInstancedBufferGeometry){let Gn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ze=Math.min(Q.instanceCount,Gn);Nt.renderInstances($e,dn,Ze)}else Nt.render($e,dn)};function zt(C,G,Q,Z){P!==null&&C.isNodeMaterial&&P.setObject(Z,C),re===!0&&ne.setState(C,Q,!1),C.transparent===!0&&C.side===Zn&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,Pi(C,G,Z),C.side=Ur,C.needsUpdate=!0,Pi(C,G,Z),C.side=Zn):Pi(C,G,Z)}this.compile=function(C,G,Q=null){Q===null&&(Q=C),P!==null&&P.renderStart(C,G,Q),M=$.get(Q),M.init(G),S.push(M),Q.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),C!==Q&&C.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),M.setupLights(),P!==null&&P.updateLights(M.state.lightsArray),V=this.localClippingEnabled,re=ne.init(this.clippingPlanes,V),re===!0&&ne.setGlobalState(this.clippingPlanes,G),P!==null&&me.render(M.state.shadowsArray,Q,G);let Z=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Xe=0;Xe<Ne.length;Xe++){let Le=Ne[Xe];zt(Le,Q,G,K),Z.add(Le)}else zt(Ne,Q,G,K),Z.add(Ne)}),M=S.pop(),P!==null&&P.renderEnd(),Z},this.compileAsync=function(C,G,Q=null){let Z=this.compile(C,G,Q);return new Promise(K=>{function Ne(){if(Z.forEach(function(Xe){let He=Te.get(Xe).currentProgram;(He===void 0||He.isReady())&&Z.delete(Xe)}),Z.size===0){K(C);return}setTimeout(Ne,10)}j.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let un=null;function Ht(C){un&&un(C)}function Dt(){vn.stop()}function wt(){vn.start()}let vn=new Vg;vn.setAnimationLoop(Ht),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(C){un=C,he.setAnimationLoop(C),C===null?vn.stop():vn.start()},he.addEventListener("sessionstart",Dt),he.addEventListener("sessionend",wt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(C,G);let Q=he.enabled===!0&&he.isPresenting===!0,Z=w!==null&&(Y===null||Q)&&w.begin(E,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(G),G=he.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,G,Y),M=$.get(C,S.length),M.init(G),M.state.textureUnits=Oe.getTextureUnits(),S.push(M),Me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?et.setFromArrayCamera(G):Pe.setFromProjectionMatrix(Me,Wi,G.reversedDepth),V=this.localClippingEnabled,re=ne.init(this.clippingPlanes,V),b=xe.get(C,g.length),b.init(),g.push(b),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let Xe=E.xr.getDepthSensingMesh();Xe!==null&&Lt(Xe,G,-1/0,E.sortObjects)}Lt(C,G,0,E.sortObjects),b.finish(),P!==null&&P.updateLights(M.state.lightsArray),E.sortObjects===!0&&b.sort(Se,Ge),tt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,tt&&F.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),re===!0&&ne.beginShadows();let K=M.state.shadowsArray;if(me.render(K,C,G),re===!0&&ne.endShadows(),(Z&&w.hasRenderPass())===!1){let Xe=b.opaque,Le=b.transmissive;if(M.setupLights(),G.isArrayCamera){let He=G.cameras;if(Le.length>0)for(let Qe=0,lt=He.length;Qe<lt;Qe++){let xt=He[Qe];Ci(Xe,Le,C,xt)}tt&&F.render(C);for(let Qe=0,lt=He.length;Qe<lt;Qe++){let xt=He[Qe];Vn(b,C,xt,xt.viewport)}}else Le.length>0&&Ci(Xe,Le,C,G),tt&&F.render(C),Vn(b,C,G)}Y!==null&&B===0&&(Oe.updateMultisampleRenderTarget(Y),Oe.updateRenderTargetMipmap(Y)),Z&&w.end(E),C.isScene===!0&&C.onAfterRender(E,C,G),we.resetDefaultState(),W=-1,I=null,S.pop(),S.length>0?(M=S[S.length-1],Oe.setTextureUnits(M.state.textureUnits),re===!0&&ne.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,g.pop(),g.length>0?b=g[g.length-1]:b=null,P!==null&&P.renderEnd()};function Lt(C,G,Q,Z){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){let Xe=G.isArrayCamera?et:Pe;if(!C.frustumCulled||C.intersectsFrustum(Xe)){Z&&Be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Me);let Le=pe.update(C),He=C.material;He.visible&&b.push(C,Le,He,Q,Be.z,null,G)}}else if(C.isMesh||C.isLine||C.isPoints){let Xe=G.isArrayCamera?et:Pe;if(!C.frustumCulled||C.intersectsFrustum(Xe)){let Le=pe.update(C),He=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Be.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Be.copy(Le.boundingSphere.center)),Be.applyMatrix4(C.matrixWorld).applyMatrix4(Me)),Array.isArray(He)){let Qe=Le.groups;for(let lt=0,xt=Qe.length;lt<xt;lt++){let $e=Qe[lt],vt=He[$e.materialIndex];vt&&vt.visible&&b.push(C,Le,vt,Q,Be.z,$e,G)}}else He.visible&&b.push(C,Le,He,Q,Be.z,null,G)}}}let Ne=C.children;for(let Xe=0,Le=Ne.length;Xe<Le;Xe++)Lt(Ne[Xe],G,Q,Z)}function Vn(C,G,Q,Z){let{opaque:K,transmissive:Ne,transparent:Xe}=C;M.setupLightsView(Q),re===!0&&ne.setGlobalState(E.clippingPlanes,Q),Z&&ee.viewport(J.copy(Z)),K.length>0&&Kt(K,G,Q),Ne.length>0&&Kt(Ne,G,Q),Xe.length>0&&Kt(Xe,G,Q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ci(C,G,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Z.id]===void 0){let $e=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Z.id]=new Wt(1,1,{generateMipmaps:!0,type:$e?en:Jn,minFilter:ir,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ne=M.state.transmissionRenderTarget[Z.id],Xe=Z.viewport||J;Ne.setSize(Xe.z*E.transmissionResolutionScale,Xe.w*E.transmissionResolutionScale);let Le=E.getRenderTarget(),He=E.getActiveCubeFace(),Qe=E.getActiveMipmapLevel();E.setRenderTarget(Ne),E.getClearColor(H),X=E.getClearAlpha(),X<1&&E.setClearColor(16777215,.5),E.clear(),tt&&F.render(Q);let lt=E.toneMapping;E.toneMapping=Cs;let xt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),re===!0&&ne.setGlobalState(E.clippingPlanes,Z),Kt(C,Q,Z),Oe.updateMultisampleRenderTarget(Ne),Oe.updateRenderTargetMipmap(Ne),j.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let vt=0,dn=G.length;vt<dn;vt++){let Ot=G[vt],{object:Nt,geometry:Gn,material:Ze,group:oi}=Ot;if(Ze.side===Zn&&Nt.layers.test(Z.layers)){let Et=Ze.side;Ze.side=Bn,Ze.needsUpdate=!0,fn(Nt,Q,Z,Gn,Ze,oi),Ze.side=Et,Ze.needsUpdate=!0,$e=!0}}$e===!0&&(Oe.updateMultisampleRenderTarget(Ne),Oe.updateRenderTargetMipmap(Ne))}E.setRenderTarget(Le,He,Qe),E.setClearColor(H,X),xt!==void 0&&(Z.viewport=xt),E.toneMapping=lt}function Kt(C,G,Q){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ne=C.length;K<Ne;K++){let Xe=C[K],{object:Le,geometry:He,group:Qe}=Xe,lt=Xe.material;lt.allowOverride===!0&&Z!==null&&(lt=Z),Le.layers.test(Q.layers)&&fn(Le,G,Q,He,lt,Qe)}}function fn(C,G,Q,Z,K,Ne){P!==null&&K.isNodeMaterial&&P.setObject(C,K),C.onBeforeRender(E,G,Q,Z,K,Ne),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(E,G,Q,Z,C,Ne),K.transparent===!0&&K.side===Zn&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,E.renderBufferDirect(Q,G,Z,K,C,Ne),K.side=Ur,K.needsUpdate=!0,E.renderBufferDirect(Q,G,Z,K,C,Ne),K.side=Zn):E.renderBufferDirect(Q,G,Z,K,C,Ne),C.onAfterRender(E,G,Q,Z,K,Ne)}function yn(C){let G=0;for(let Q of C)Q.texture!==null&&G++;return G}function Pi(C,G,Q){G.isScene!==!0&&(G=ke);let Z=Te.get(C),K=M.state.lights,Ne=M.state.shadowsArray,Xe=K.state.version,Le=ie.getParameters(C,K.state,Ne,G,Q,M.state.lightProbeGridArray),He=ie.getProgramCacheKey(Le),Qe=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let lt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=L.get(C.envMap||Z.environment,lt),Z.envMapRotation=Z.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",ze),Qe=new Map,Z.programs=Qe,Z.programVariants=new Map);let xt=Qe.get(He);if(xt!==void 0){if(Z.currentProgram===xt&&Z.lightsStateVersion===Xe)return Qt(C,Le),xt}else Le.uniforms=ie.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,Q,Le),C.onBeforeCompile(Le,E),xt=ie.acquireProgram(Le,He),Qe.set(He,xt),Z.uniforms=Le.uniforms;let $e=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=ne.uniform),Qt(C,Le),Z.needsLights=Zc(C),Z.lightsStateVersion=Xe,Z.needsLights&&($e.ambientLightColor.value=K.state.ambient,$e.lightProbe.value=K.state.probe,$e.sunLights.value=K.state.sun,$e.sunLightShadows.value=K.state.sunShadow,$e.directionalLights.value=K.state.directional,$e.directionalLightShadows.value=K.state.directionalShadow,$e.spotLights.value=K.state.spot,$e.spotLightShadows.value=K.state.spotShadow,$e.rectAreaLights.value=K.state.rectArea,$e.ltc_1.value=K.state.rectAreaLTC1,$e.ltc_2.value=K.state.rectAreaLTC2,$e.pointLights.value=K.state.point,$e.pointLightShadows.value=K.state.pointShadow,$e.hemisphereLights.value=K.state.hemi,$e.sunShadowMatrix.value=K.state.sunShadowMatrix,$e.sunShadowCascade.value=K.state.sunShadowCascade,$e.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$e.spotLightMatrix.value=K.state.spotLightMatrix,$e.spotLightMap.value=K.state.spotLightMap,$e.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=yn(M.state.lightProbeGridArray),Z.currentProgram=xt,Z.uniformsList=null,xt}function ko(C,G,Q,Z,K){let Ne=Te.get(C),Xe=Ne.currentProgram.id+","+Z+","+K,Le=Ne.programVariants.get(Xe);return Le===void 0?(Le=Pi(C,G,Q),Ne.programVariants.set(Xe,Le)):(Ne.currentProgram=Le,Ne.uniformsList=null,Ne.outputColorSpace=Z,Ne.toneMapping=K),Le}function Sn(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=wa.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Qt(C,G){let Q=Te.get(C);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Vi(C,G,Q,Z,K){G.isScene!==!0&&(G=ke),Oe.resetTextureUnits();let Ne=G.fog,Xe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Le=Y===null?E.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:gt.workingColorSpace,He=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Qe=L.get(Z.envMap||Xe,He),lt=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,xt=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$e=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,dn=!!Q.morphAttributes.color,Ot=Cs;Z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ot=E.toneMapping);let Nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Gn=Nt!==void 0?Nt.length:0,Ze=Te.get(Z),oi=M.state.lights;if(re===!0&&(V===!0||C!==I)){let qt=C===I&&Z.id===W;ne.setState(Z,C,qt)}let Et=!1,eo=!1;Z.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==oi.state.version||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==Qe||Z.fog===!0&&Ze.fog!==Ne||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ne.numPlanes||Ze.numIntersection!==ne.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==xt||Ze.morphTargets!==$e||Ze.morphNormals!==vt||Ze.morphColors!==dn||Ze.morphTargetsCount!==Gn||Ze.numLightProbeGrids!==yn(M.state.lightProbeGridArray)?Et=!0:(Ze.outputColorSpace!==Le||Ze.toneMapping!==Ot)&&(eo=!0):(Et=!0,Ze.__version=Z.version);let Wn=Ze.currentProgram;(Et===!0||eo===!0)&&(Wn=eo===!0?ko(Z,G,K,Le,Ot):Pi(Z,G,K),P&&Z.isNodeMaterial&&P.onUpdateProgram(Z,Wn,Ze));let Jc=!1,Mr=!1,to=!1,Mt=Wn.getUniforms(),Nn=Ze.uniforms;if(ee.useProgram(Wn.program)&&(Jc=!0,Mr=!0,to=!0),Z.id!==W&&(W=Z.id,Mr=!0),Jc||I!==C){ee.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(z,"projectionMatrix",C.projectionMatrix),Mt.setValue(z,"viewMatrix",C.matrixWorldInverse);let Rn=Mt.map.cameraPosition;Rn!==void 0&&Rn.setValue(z,Je.setFromMatrixPosition(C.matrixWorld)),oe.logarithmicDepthBuffer&&Mt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,Mr=!0,to=!0)}if(Ze.needsLights&&(oi.state.sunShadowMap.length>0&&Mt.setValue(z,"sunShadowMap",oi.state.sunShadowMap,Oe),oi.state.directionalShadowMap.length>0&&Mt.setValue(z,"directionalShadowMap",oi.state.directionalShadowMap,Oe),oi.state.spotShadowMap.length>0&&Mt.setValue(z,"spotShadowMap",oi.state.spotShadowMap,Oe),oi.state.pointShadowMap.length>0&&Mt.setValue(z,"pointShadowMap",oi.state.pointShadowMap,Oe)),K.isSkinnedMesh){Mt.setOptional(z,K,"bindMatrix"),Mt.setOptional(z,K,"bindMatrixInverse");let qt=K.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Mt.setValue(z,"boneTexture",qt.boneTexture,Oe))}K.isBatchedMesh&&(Mt.setOptional(z,K,"batchingTexture"),Mt.setValue(z,"batchingTexture",K._matricesTexture,Oe),Mt.setOptional(z,K,"batchingIdTexture"),Mt.setValue(z,"batchingIdTexture",K._indirectTexture,Oe),Mt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(z,"batchingColorTexture",K._colorsTexture,Oe));let cs=Q.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&se.update(K,Q,Wn),(Mr||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,Mt.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Nn.envMapIntensity.value=G.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=TT()),Mr){if(Mt.setValue(z,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&il(Nn,to),Ne&&Z.fog===!0&&ge.refreshFogUniforms(Nn,Ne),ge.refreshMaterialUniforms(Nn,Z,fe,ae,M.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let qt=y,Rn=0;for(let Gs of M.state.lightProbeGridArray)Gs.texture!==null&&(qt.textures[Rn]=Gs.texture,qt.min[Rn]=Gs.boundingBox.min,qt.max[Rn]=Gs.boundingBox.max,qt.resolution[Rn]=Gs.resolution,Rn++);for(let Gs in qt)qt[Gs].length=Rn;Nn.probesSH.value=qt.textures,Nn.probesMin.value=qt.min,Nn.probesMax.value=qt.max,Nn.probesResolution.value=qt.resolution}wa.upload(z,Sn(Ze),Nn,Oe)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(wa.upload(z,Sn(Ze),Nn,Oe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(z,"center",K.center),Mt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(z,"normalMatrix",K.normalMatrix),Mt.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let qt=Z.uniformsGroups;for(let Rn=0,Gs=qt.length;Rn<Gs;Rn++){let n0=qt[Rn];_e.update(n0,Wn),_e.bind(n0,Wn)}}return Wn}function il(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Zc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,G,Q){let Z=Te.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Te.get(C.texture).__webglTexture=G,Te.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){let Q=Te.get(C);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Q=0){Y=C,k=G,B=Q;let Z=null,K=!1,Ne=!1;if(C){let Le=Te.get(C);if(Le.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(z.FRAMEBUFFER,Le.__webglFramebuffer),J.copy(C.viewport),de.copy(C.scissor),be=C.scissorTest,ee.viewport(J),ee.scissor(de),ee.setScissorTest(be),W=-1;return}else if(Le.__webglFramebuffer===void 0)Oe.setupRenderTarget(C);else if(Le.__hasExternalTextures)Oe.rebindTextures(C,Te.get(C.texture).__webglTexture,Te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let lt=C.depthTexture;if(Le.__boundDepthTexture!==lt){if(lt!==null&&Te.has(lt)&&(C.width!==lt.image.width||C.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(C)}}let He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ne=!0);let Qe=Te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?Z=Qe[G][Q]:Z=Qe[G],K=!0):C.samples>0&&Oe.useMultisampledRTT(C)===!1?Z=Te.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Z=Qe[Q]:Z=Qe,J.copy(C.viewport),de.copy(C.scissor),be=C.scissorTest}else J.copy(Ce).multiplyScalar(fe).floor(),de.copy(Ve).multiplyScalar(fe).floor(),be=ye;if(Q!==0&&(Z=N),ee.bindFramebuffer(z.FRAMEBUFFER,Z)&&ee.drawBuffers(C,Z),ee.viewport(J),ee.scissor(de),ee.setScissorTest(be),K){let Le=Te.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,Q)}else if(Ne){let Le=G;for(let He=0;He<C.textures.length;He++){let Qe=Te.get(C.textures[He]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+He,Qe.__webglTexture,Q,Le)}}else if(C!==null&&Q!==0){let Le=Te.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Le.__webglTexture,Q)}W=-1};function Sr(C){let G=Te.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=oe.textureFormatReadable(C.format),G.__typeReadable=oe.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,Q,Z,K,Ne,Xe,Le=0){if(!(C&&C.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(He=He[Xe],Array.isArray(He)&&(He=He[0])),He){ee.bindFramebuffer(z.FRAMEBUFFER,He);try{let Qe=C.textures[Le],lt=Qe.format,xt=Qe.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let $e=Sr(Qe);if($e.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-Z&&Q>=0&&Q<=C.height-K&&z.readPixels(G,Q,Z,K,ve.convert(lt),ve.convert(xt),Ne)}finally{let Qe=Y!==null?Te.get(Y).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,G,Q,Z,K,Ne,Xe,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(He=He[Xe],Array.isArray(He)&&(He=He[0])),He)if(G>=0&&G<=C.width-Z&&Q>=0&&Q<=C.height-K){ee.bindFramebuffer(z.FRAMEBUFFER,He);let Qe=C.textures[Le],lt=Qe.format,xt=Qe.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let $e=Sr(Qe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,Ne.byteLength,z.STREAM_READ),z.readPixels(G,Q,Z,K,ve.convert(lt),ve.convert(xt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let dn=Y!==null?Te.get(Y).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,dn);let Ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mg(z,Ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ne),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(vt),z.deleteSync(Ot),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,Q=0){let Z=Math.pow(2,-Q),K=Math.floor(C.image.width*Z),Ne=Math.floor(C.image.height*Z),Xe=G!==null?G.x:0,Le=G!==null?G.y:0;Oe.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,Xe,Le,K,Ne),ee.unbindTexture()},this.copyTextureToTexture=function(C,G,Q=null,Z=null,K=0,Ne=0){let Xe,Le,He,Qe,lt,xt,$e,vt,dn,Ot=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(Q!==null)Xe=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,He=Q.isBox3?Q.max.z-Q.min.z:1,Qe=Q.min.x,lt=Q.min.y,xt=Q.isBox3?Q.min.z:0;else{let Mt=Math.pow(2,-K);Xe=Math.floor(Ot.width*Mt),Le=Math.floor(Ot.height*Mt),C.isDataArrayTexture?He=Ot.depth:C.isData3DTexture?He=Math.floor(Ot.depth*Mt):He=1,Qe=0,lt=0,xt=0}Z!==null?($e=Z.x,vt=Z.y,dn=Z.z):($e=0,vt=0,dn=0);let Nt=ve.convert(G.format),Gn=ve.convert(G.type),Ze;G.isData3DTexture?(Oe.setTexture3D(G,0),Ze=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Oe.setTexture2DArray(G,0),Ze=z.TEXTURE_2D_ARRAY):(Oe.setTexture2D(G,0),Ze=z.TEXTURE_2D),ee.activeTexture(z.TEXTURE0),ee.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),ee.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),ee.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let oi=ee.getParameter(z.UNPACK_ROW_LENGTH),Et=ee.getParameter(z.UNPACK_IMAGE_HEIGHT),eo=ee.getParameter(z.UNPACK_SKIP_PIXELS),Wn=ee.getParameter(z.UNPACK_SKIP_ROWS),Jc=ee.getParameter(z.UNPACK_SKIP_IMAGES);ee.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),ee.pixelStorei(z.UNPACK_SKIP_PIXELS,Qe),ee.pixelStorei(z.UNPACK_SKIP_ROWS,lt),ee.pixelStorei(z.UNPACK_SKIP_IMAGES,xt);let Mr=C.isDataArrayTexture||C.isData3DTexture,to=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){let Mt=Te.get(C),Nn=Te.get(G),cs=Te.get(Mt.__renderTarget),qt=Te.get(Nn.__renderTarget);ee.bindFramebuffer(z.READ_FRAMEBUFFER,cs.__webglFramebuffer),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Rn=0;Rn<He;Rn++)Mr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.get(C).__webglTexture,K,xt+Rn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.get(G).__webglTexture,Ne,dn+Rn)),z.blitFramebuffer(Qe,lt,Qe+Xe,lt+Le,$e,vt,$e+Xe,vt+Le,z.DEPTH_BUFFER_BIT,z.NEAREST);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Te.has(C)){let Mt=Te.get(C),Nn=Te.get(G);ee.bindFramebuffer(z.READ_FRAMEBUFFER,A),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let cs=0;cs<He;cs++)Mr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.__webglTexture,K,xt+cs):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,K),to?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nn.__webglTexture,Ne,dn+cs):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nn.__webglTexture,Ne),K!==0?z.blitFramebuffer(Qe,lt,Qe+Xe,lt+Le,$e,vt,$e+Xe,vt+Le,z.COLOR_BUFFER_BIT,z.NEAREST):to?z.copyTexSubImage3D(Ze,Ne,$e,vt,dn+cs,Qe,lt,Xe,Le):z.copyTexSubImage2D(Ze,Ne,$e,vt,Qe,lt,Xe,Le);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else to?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ze,Ne,$e,vt,dn,Xe,Le,He,Nt,Gn,Ot.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,Ne,$e,vt,dn,Xe,Le,He,Nt,Ot.data):z.texSubImage3D(Ze,Ne,$e,vt,dn,Xe,Le,He,Nt,Gn,Ot):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ne,$e,vt,Xe,Le,Nt,Gn,Ot.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ne,$e,vt,Ot.width,Ot.height,Nt,Ot.data):z.texSubImage2D(z.TEXTURE_2D,Ne,$e,vt,Xe,Le,Nt,Gn,Ot);ee.pixelStorei(z.UNPACK_ROW_LENGTH,oi),ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),ee.pixelStorei(z.UNPACK_SKIP_PIXELS,eo),ee.pixelStorei(z.UNPACK_SKIP_ROWS,Wn),ee.pixelStorei(z.UNPACK_SKIP_IMAGES,Jc),Ne===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&z.generateMipmap(Ze),ee.unbindTexture()},this.initRenderTarget=function(C){Te.get(C).__webglFramebuffer===void 0&&Oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),ee.unbindTexture()},this.resetState=function(){k=0,B=0,Y=null,ee.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ET=new ho(-1,1,1,-1,0,1),bp=class extends Yt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},wT=new bp,Ls=class{constructor(e){this._mesh=new Re(wT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ET)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ca=class extends ui{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ls(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rc=class extends ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},$u=class extends ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ca(Ds),this.copyPass.material.blending=In,this.timer=new Fl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rc!==void 0&&(o instanceof rc?n=!0:o instanceof $u&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ju=class extends ui{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ue}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var jg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Pa=class s extends ui{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:en,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Wt(r,o,{type:en,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Wt(r,o,{type:en,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=jg;this.highPassUniforms=hi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new De(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hi.clone(Ds.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,premultipliedAlpha:!0,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new Mn,this._fsQuad=new Ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Pa.BlurDirectionX=new De(1,0);Pa.BlurDirectionY=new De(0,1);var oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ku=class extends ui{constructor(){super(),this.isOutputPass=!0,this.uniforms=hi.clone(oc.uniforms),this.material=new ga({name:oc.name,uniforms:this.uniforms,vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader}),this._fsQuad=new Ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===po?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ac={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ct},cameraProjectionMatrixInverse:{value:new ct},cameraWorldMatrix:{value:new ct},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

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
		}`},lc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Qu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function e_(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=AT(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new er(i,e,e);return r.wrapS=Si,r.wrapT=Si,r.needsUpdate=!0,r}function AT(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var cc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Tp(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraProjectionMatrixInverse:{value:new ct},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Tp(s,e,t){let n=RT(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function RT(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new O(Math.cos(r),Math.sin(r),o))}return n}var ju=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,u=c-f,p=e-d,x=t-u,m,_;p>x?(m=1,_=0):(m=0,_=1);let v=p-m+h,T=x-_+h,y=p-1+2*h,b=x-1+2*h,M=l&255,g=c&255,S=this.perm[M+this.perm[g]]%12,w=this.perm[M+m+this.perm[g+_]]%12,E=this.perm[M+1+this.perm[g+1]]%12,D=.5-p*p-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[S],p,x));let P=.5-v*v-T*T;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[w],v,T));let N=.5-y*y-b*b;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[E],y,b)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),d=Math.floor(n+c),u=1/6,p=(h+f+d)*u,x=h-p,m=f-p,_=d-p,v=e-x,T=t-m,y=n-_,b,M,g,S,w,E;v>=T?T>=y?(b=1,M=0,g=0,S=1,w=1,E=0):v>=y?(b=1,M=0,g=0,S=1,w=0,E=1):(b=0,M=0,g=1,S=1,w=0,E=1):T<y?(b=0,M=0,g=1,S=0,w=1,E=1):v<y?(b=0,M=1,g=0,S=0,w=1,E=1):(b=0,M=1,g=0,S=1,w=1,E=0);let D=v-b+u,P=T-M+u,N=y-g+u,A=v-S+2*u,U=T-w+2*u,k=y-E+2*u,B=v-1+3*u,Y=T-1+3*u,W=y-1+3*u,I=h&255,J=f&255,de=d&255,be=this.perm[I+this.perm[J+this.perm[de]]]%12,H=this.perm[I+b+this.perm[J+M+this.perm[de+g]]]%12,X=this.perm[I+S+this.perm[J+w+this.perm[de+E]]]%12,ue=this.perm[I+1+this.perm[J+1+this.perm[de+1]]]%12,ae=.6-v*v-T*T-y*y;ae<0?i=0:(ae*=ae,i=ae*ae*this._dot3(this.grad3[be],v,T,y));let fe=.6-D*D-P*P-N*N;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[H],D,P,N));let Se=.6-A*A-U*U-k*k;Se<0?o=0:(Se*=Se,o=Se*Se*this._dot3(this.grad3[X],A,U,k));let Ge=.6-B*B-Y*Y-W*W;return Ge<0?a=0:(Ge*=Ge,a=Ge*Ge*this._dot3(this.grad3[ue],B,Y,W)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,d,u,p,x=(e+t+n+i)*l,m=Math.floor(e+x),_=Math.floor(t+x),v=Math.floor(n+x),T=Math.floor(i+x),y=(m+_+v+T)*c,b=m-y,M=_-y,g=v-y,S=T-y,w=e-b,E=t-M,D=n-g,P=i-S,N=w>E?32:0,A=w>D?16:0,U=E>D?8:0,k=w>P?4:0,B=E>P?2:0,Y=D>P?1:0,W=N+A+U+k+B+Y,I=o[W][0]>=3?1:0,J=o[W][1]>=3?1:0,de=o[W][2]>=3?1:0,be=o[W][3]>=3?1:0,H=o[W][0]>=2?1:0,X=o[W][1]>=2?1:0,ue=o[W][2]>=2?1:0,ae=o[W][3]>=2?1:0,fe=o[W][0]>=1?1:0,Se=o[W][1]>=1?1:0,Ge=o[W][2]>=1?1:0,Ce=o[W][3]>=1?1:0,Ve=w-I+c,ye=E-J+c,Pe=D-de+c,et=P-be+c,re=w-H+2*c,V=E-X+2*c,Me=D-ue+2*c,Je=P-ae+2*c,Be=w-fe+3*c,ke=E-Se+3*c,tt=D-Ge+3*c,je=P-Ce+3*c,z=w-1+4*c,it=E-1+4*c,j=D-1+4*c,oe=P-1+4*c,ee=m&255,Ke=_&255,Te=v&255,Oe=T&255,L=a[ee+a[Ke+a[Te+a[Oe]]]]%32,R=a[ee+I+a[Ke+J+a[Te+de+a[Oe+be]]]]%32,q=a[ee+H+a[Ke+X+a[Te+ue+a[Oe+ae]]]]%32,pe=a[ee+fe+a[Ke+Se+a[Te+Ge+a[Oe+Ce]]]]%32,ie=a[ee+1+a[Ke+1+a[Te+1+a[Oe+1]]]]%32,ge=.6-w*w-E*E-D*D-P*P;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(r[L],w,E,D,P));let xe=.6-Ve*Ve-ye*ye-Pe*Pe-et*et;xe<0?f=0:(xe*=xe,f=xe*xe*this._dot4(r[R],Ve,ye,Pe,et));let $=.6-re*re-V*V-Me*Me-Je*Je;$<0?d=0:($*=$,d=$*$*this._dot4(r[q],re,V,Me,Je));let ne=.6-Be*Be-ke*ke-tt*tt-je*je;ne<0?u=0:(ne*=ne,u=ne*ne*this._dot4(r[pe],Be,ke,tt,je));let me=.6-z*z-it*it-j*j-oe*oe;return me<0?p=0:(me*=me,p=me*me*this._dot4(r[ie],z,it,j,oe)),27*(h+f+d+u+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Ia=class s extends ui{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=e_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:en,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},ac.defines),uniforms:hi.clone(ac.uniforms),vertexShader:ac.vertexShader,fragmentShader:ac.fragmentShader,blending:In,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Il,this.normalMaterial.blending=In,this.pdMaterial=new Pt({defines:Object.assign({},cc.defines),uniforms:hi.clone(cc.uniforms),vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},lc.defines),uniforms:hi.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,blending:In}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:hi.clone(Ds.uniforms),vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zl,blendDst:fo,blendEquation:Zi,blendSrcAlpha:kl,blendDstAlpha:fo,blendEquationAlpha:Zi}),this.blendMaterial=new Pt({uniforms:hi.clone(Qu.uniforms),vertexShader:Qu.vertexShader,fragmentShader:Qu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:eu,blendSrc:zl,blendDst:fo,blendEquation:Zi,blendSrcAlpha:kl,blendDstAlpha:fo,blendEquationAlpha:Zi}),this._fsQuad=new Ls(null),this._originalClearColor=new Ue,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let i=new ms;i.format=xs,i.type=sr,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:ln,magFilter:ln,type:en,depthTexture:i})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Tp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ju,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new er(i,e,e,Ni,Jn);return r.wrapS=Si,r.wrapT=Si,r.needsUpdate=!0,r}};Ia.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ye=null,ar=null,or=null,Ns=null,Br=!1,ef=null,t_=0,n_=[146.83,155.56,185,196,220,233.08,261.63,293.66,311.13,369.99];function tf(s=2){let e=Ye.createBuffer(1,Ye.sampleRate*s,Ye.sampleRate),t=e.getChannelData(0),n=0;for(let i=0;i<t.length;i++){let r=Math.random()*2-1;n=(n+.02*r)/1.02,t[i]=n*3.5}return e}function CT(){Ye=new(window.AudioContext||window.webkitAudioContext),ar=Ye.createGain(),ar.gain.value=0;let s=Ye.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,ar.connect(s).connect(Ye.destination),or=Ye.createGain(),or.gain.value=.9,or.connect(ar),Ns=Ye.createGain(),Ns.gain.value=.8,Ns.connect(ar);let e=Ye.createDelay(1.5);e.delayTime.value=.42;let t=Ye.createGain();t.gain.value=.33;let n=Ye.createBiquadFilter();n.type="lowpass",n.frequency.value=2200,e.connect(n).connect(t).connect(e);let i=Ye.createGain();i.gain.value=.35,e.connect(i).connect(or),or.echo=e;let r=Ye.createBufferSource();r.buffer=tf(4),r.loop=!0;let o=Ye.createBiquadFilter();o.type="bandpass",o.frequency.value=420,o.Q.value=.7;let a=Ye.createGain();a.gain.value=.16;let l=Ye.createOscillator();l.frequency.value=.07;let c=Ye.createGain();c.gain.value=260,l.connect(c).connect(o.frequency);let h=Ye.createOscillator();h.frequency.value=.11;let f=Ye.createGain();f.gain.value=.07,h.connect(f).connect(a.gain),r.connect(o).connect(a).connect(or),r.start(),l.start(),h.start();let d=Ye.createBiquadFilter();d.type="lowpass",d.frequency.value=520;let u=Ye.createGain();u.gain.value=.05,d.connect(u).connect(or);for(let[m,_,v]of[[73.42,"sine",0],[110,"triangle",4],[146.83,"sine",-3]]){let T=Ye.createOscillator();T.type=_,T.frequency.value=m,T.detune.value=v,T.connect(d),T.start()}let p=Ye.createOscillator();p.frequency.value=.18;let x=Ye.createGain();x.gain.value=.015,p.connect(x).connect(u.gain),p.start()}function PT(s,e=0,t=.12){let n=Ye.currentTime+e,i=Ye.createGain();i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(t,n+.006),i.gain.exponentialRampToValueAtTime(8e-4,n+1.8);let r=Ye.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(s*9,n),r.frequency.exponentialRampToValueAtTime(s*1.6,n+.6);for(let[o,a,l]of[[1,1,"triangle"],[2,.35,"sine"],[3.01,.12,"sine"]]){let c=Ye.createOscillator();c.type=l,c.frequency.value=s*o;let h=Ye.createGain();h.gain.value=a,c.connect(h).connect(r),c.start(n),c.stop(n+2)}r.connect(i),i.connect(or),i.connect(or.echo)}function s_(){if(!Br)return;let s=2+(Math.random()*5|0),e=2+(Math.random()*4|0),t=0;for(let n=0;n<e;n++)PT(n_[s],t,.09+Math.random()*.05),t+=[.28,.42,.56][Math.random()*3|0],s=Math.max(0,Math.min(n_.length-1,s+[-2,-1,-1,1,1,2][Math.random()*6|0]));ef=setTimeout(s_,(t+2.2+Math.random()*4)*1e3)}function _o(s,e,t,n,i){s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(i,e+t),s.gain.exponentialRampToValueAtTime(5e-4,e+t+n)}var i_={tick(){let s=Ye.currentTime;if(s-t_<.045)return;t_=s;let e=Ye.createOscillator(),t=Ye.createGain();e.type="sine",e.frequency.value=1700+Math.random()*500,_o(t,s,.002,.03,.025),e.connect(t).connect(Ns),e.start(s),e.stop(s+.05)},arrive(){[0,.11].forEach((s,e)=>{let t=Ye.currentTime+s,n=Ye.createOscillator(),i=Ye.createGain();n.type="sine",n.frequency.value=e?880:659.25,_o(i,t,.01,.6,.07),n.connect(i).connect(Ns),n.start(t),n.stop(t+.7)})},poke(){let s=Ye.currentTime,e=Ye.createOscillator(),t=Ye.createGain();e.type="sine",e.frequency.setValueAtTime(260,s),e.frequency.exponentialRampToValueAtTime(620,s+.12),e.frequency.exponentialRampToValueAtTime(330,s+.3),_o(t,s,.01,.32,.12),e.connect(t).connect(Ns),e.start(s),e.stop(s+.4)},pop(){let s=Ye.currentTime,e=Ye.createBufferSource();e.buffer=tf(.3);let t=Ye.createBiquadFilter();t.type="highpass",t.frequency.value=900;let n=Ye.createGain();_o(n,s,.001,.12,.5),e.connect(t).connect(n).connect(Ns),e.start(s),e.stop(s+.2)},beam(){let s=Ye.currentTime,e=Ye.createBufferSource();e.buffer=tf(3);let t=Ye.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(3200,s+1.2);let n=Ye.createGain();_o(n,s,.25,1.8,.35),e.connect(t).connect(n).connect(Ns),e.start(s),e.stop(s+2.4),[587.33,739.99,880,1174.66].forEach((i,r)=>{let o=Ye.createOscillator(),a=Ye.createGain();o.type="sine",o.frequency.value=i,_o(a,s+.3+r*.12,.02,1.6,.05),o.connect(a).connect(Ns),o.connect(a),o.start(s),o.stop(s+3)})},whoosh(){let s=Ye.currentTime,e=Ye.createBufferSource();e.buffer=tf(1);let t=Ye.createBiquadFilter();t.type="bandpass",t.Q.value=1.2,t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(1400,s+.5);let n=Ye.createGain();_o(n,s,.15,.5,.18),e.connect(t).connect(n).connect(Ns),e.start(s),e.stop(s+.8)}},tn={get on(){return Br},toggle(){return Ye||CT(),Br=!Br,Br?(Ye.resume(),ar.gain.cancelScheduledValues(Ye.currentTime),ar.gain.linearRampToValueAtTime(.55,Ye.currentTime+1.2),clearTimeout(ef),ef=setTimeout(s_,900)):(ar.gain.cancelScheduledValues(Ye.currentTime),ar.gain.linearRampToValueAtTime(0,Ye.currentTime+.4),clearTimeout(ef)),Br},play(s){if(!(!Br||!Ye||Ye.state!=="running"))try{i_[s]&&i_[s]()}catch{}},pause(s){Ye&&(s?Ye.suspend():Br&&Ye.resume())}};function lr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function d_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mc={duration:.5,overwrite:!1,delay:0},zp,kn,Xt,ji=1e8,It=1/ji,Dp=Math.PI*2,IT=Dp/4,DT=0,p_=Math.sqrt,LT=Math.cos,NT=Math.sin,En=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},pf=function(e){return typeof e>"u"},Fs=function(e){return typeof e=="object"},Ti=function(e){return e!==!1},Hp=function(){return typeof window<"u"},nf=function(e){return nn(e)||En(e)},m_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,UT=/random\([^)]+\)/g,OT=/,\s*/g,r_=/(?:-?\.?\d|\.)+/gi,Vp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,So=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ep=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gp=/[+-]=-?[.\d]+/,FT=/[^,'"\[\]\s]+/gi,BT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zt,Us,Lp,Wp,Oi={},af={},g_,__=function(e){return(af=La(e,Oi))&&ei},mf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gc=function(e,t){return!t&&console.warn(e)},x_=function(e,t){return e&&(Oi[e]=t)&&af&&(af[e]=t)||Oi},_c=function(){return 0},kT={suppressEvents:!0,isStart:!0,kill:!1},sf={suppressEvents:!0,kill:!1},zT={suppressEvents:!0},Xp={},zr=[],Np={},v_,Mi={},wp={},o_=30,rf=[],qp="",Yp=function(e){var t=e[0],n,i;if(Fs(t)||nn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=rf.length;i--&&!rf[i].targetTest(t););n=rf[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kp(e[i],n)))||e.splice(i,1);return e},Hr=function(e){return e._gsap||Yp(es(e))[0]._gsap},$p=function(e,t,n){return(n=e[t])&&nn(n)?e[t]():pf(n)&&e.getAttribute&&e.getAttribute(t)||n},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},Mo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},HT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},lf=function(){var e=zr.length,t=zr.slice(0),n,i;for(Np={},zr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zp=function(e){return!!(e._initted||e._startAt||e.add)},y_=function(e,t,n,i){zr.length&&!kn&&lf(),e.render(t,n,i||!!(kn&&t<0&&Zp(e))),zr.length&&!kn&&lf()},S_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(FT).length<2?t:En(e)?e.trim():e},M_=function(e){return e},Fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},VT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},La=function(e,t){for(var n in t)e[n]=t[n];return e},a_=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fs(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},cf=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fc=function(e){var t=e.parent||Zt,n=e.keyframes?VT(jn(e.keyframes)):Fi;if(Ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},GT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},b_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},gf=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},WT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Up=function(e,t,n,i){return e._startAt&&(kn?e._startAt.revert(sf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},XT=function s(e){return!e||e._ts&&s(e.parent)},l_=function(e){return e._repeat?Na(e._tTime,e=e.duration()+e._rDelay)*e:0},Na=function(e,t){var n=Math.floor(e=$t(e/t));return e&&n===e?n-1:n},hf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_f=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},xf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_f(e),n._dirty||xo(n,e)),e},T_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=hf(e.rawTime(),t),(!t._dur||Sc(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Os=function(e,t,n,i){return t.parent&&Vr(t),t._start=$t((hr(n)?n:!n&&uf(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Zt?Qi(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),b_(e,t,"_first","_last",e._sort?"_start":0),uf(t)||(e._recent=t),i||T_(e,t),e._ts<0&&xf(e,e._tTime),e},E_=function(e,t){return(Oi.ScrollTrigger||mf("scrollTrigger",t))&&Oi.ScrollTrigger.create(t,e)},w_=function(e,t,n,i,r){if(em(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!kn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&v_!==bi.frame)return zr.push(e),e._lazy=[r,i],1},qT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},uf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},YT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&qT(e)&&!(!e._initted&&uf(e))||(e._ts<0||e._dp._ts<0)&&!uf(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=Sc(0,e._tDur,t),h=Na(l,a),e._yoyo&&h&1&&(o=1-o),h!==Na(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||kn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&w_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Up(e,t,n,!0),e._onUpdate&&!n&&Ui(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vr(e,1),!n&&!kn&&(Ui(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$T=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ua=function(e,t,n,i){var r=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:$t(o*(r+1)+e._rDelay*r):o,a>0&&!i&&xf(e,e._tTime=e._tDur*a),e.parent&&_f(e),n||xo(e.parent,e),e},c_=function(e){return e instanceof Qn?xo(e):Ua(e,e._dur)},ZT={_start:0,endTime:_c,totalDuration:_c},Qi=function s(e,t,n){var i=e.labels,r=e._recent||ZT,o=e.duration()>=ji?r.endTime(!1):e._dur,a,l,c;return En(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(jn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},dc=function(e,t,n){var i=hr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ti(l.vars.inherit)&&l.parent;o.immediateRender=Ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new cn(t[0],o,t[r+1])},Gr=function(e,t){return e||e===0?t(e):t},Sc=function(e,t,n){return n<e?e:n>t?t:n},zn=function(e,t){return!En(e)||!(t=BT.exec(e))?"":t[1]},JT=function(e,t,n){return Gr(n,function(i){return Sc(e,t,i)})},Op=[].slice,A_=function(e,t){return e&&Fs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fs(e[0]))&&!e.nodeType&&e!==Us},KT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return En(i)&&!t||A_(i,1)?(r=n).push.apply(r,es(i)):n.push(i)})||n},es=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):En(e)&&!n&&(Lp||!Oa())?Op.call((t||Wp).querySelectorAll(e),0):jn(e)?KT(e,n):A_(e)?Op.call(e,0):e?[e]:[]},Fp=function(e){return e=es(e)[0]||gc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return es(t,n.querySelectorAll?n:n===e?gc("Invalid scope")||Wp.createElement("div"):e)}},R_=function(e){return e.sort(function(){return .5-Math.random()})},C_=function(e){if(nn(e))return e;var t=Fs(e)?e:{each:e},n=vo(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return En(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,p){var x=(p||t).length,m=o[x],_,v,T,y,b,M,g,S,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,ji])[1],!w){for(g=-ji;g<(g=p[w++].getBoundingClientRect().left)&&w<x;);w<x&&w--}for(m=o[x]=[],_=l?Math.min(w,x)*h-.5:i%w,v=w===ji?0:l?x*f/w-.5:i/w|0,g=0,S=ji,M=0;M<x;M++)T=M%w-_,y=v-(M/w|0),m[M]=b=c?Math.abs(c==="y"?y:T):p_(T*T+y*y),b>g&&(g=b),b<S&&(S=b);i==="random"&&R_(m),m.max=g-S,m.min=S,m.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(w>x?x-1:c?c==="y"?x/w:w:Math.max(w,x/w))||0)*(i==="edges"?-1:1),m.b=x<0?r-x:r,m.u=zn(t.amount||t.each)||0,n=n&&x<0?hE(n):n}return x=(m[d]-m.min)/m.max||0,$t(m.b+(n?n(x):x)*m.v)+m.u}},Bp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(hr(n)?0:zn(n))}},P_=function(e,t){var n=jn(e),i,r;return!n&&Fs(e)&&(i=n=e.radius||ji,e.values?(e=es(e.values),(r=!hr(e[0]))&&(i*=i)):e=Bp(e.increment)),Gr(t,n?nn(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ji,h=0,f=e.length,d,u;f--;)r?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,r||h===o||hr(o)?h:h+zn(o)}:Bp(e))},I_=function(e,t,n,i){return Gr(jn(e)?!t:n===!0?!!(n=0):!i,function(){return jn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},QT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},jT=function(e,t){return function(n){return e(parseFloat(n))+(t||zn(n))}},eE=function(e,t,n){return L_(e,t,0,1,n)},D_=function(e,t,n){return Gr(n,function(i){return e[~~t(i)]})},tE=function s(e,t,n){var i=t-e;return jn(e)?D_(e,s(0,e.length),t):Gr(n,function(r){return(i+(r-e)%i)%i+e})},nE=function s(e,t,n){var i=t-e,r=i*2;return jn(e)?D_(e,s(0,e.length-1),t):Gr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Fa=function(e){return e.replace(UT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(OT);return I_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},L_=function(e,t,n,i,r){var o=t-e,a=i-n;return Gr(r,function(l){return n+((l-e)/o*a||0)})},iE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=En(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(jn(e)&&!jn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(s(e[c-1],e[c]));f--,r=function(p){p*=f;var x=Math.min(d,~~p);return h[x](p-x)},n=t}else i||(e=La(jn(e)?[]:{},e));if(!h){for(l in t)Qp.call(a,e,l,"get",t[l]);r=function(p){return im(p,a)||(o?e.p:e)}}}return Gr(n,r)},h_=function(e,t,n){var i=e.labels,r=ji,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ui=function(e,t,n){var i=e.vars,r=i[t],o=Xt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&zr.length&&lf(),a&&(Xt=a),h=l?r.apply(c,l):r.call(c),Xt=o,h},hc=function(e){return Vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kn),e.progress()<1&&Ui(e,"onInterrupt"),e},Da,N_=[],U_=function(e){if(e)if(e=!e.name&&e.default||e,Hp()||e.headless){var t=e.name,n=nn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:_c,render:im,add:Qp,kill:yE,modifier:vE,rawVars:0},o={targetTest:0,get:0,getSetter:vf,aliases:{},register:0};if(Oa(),e!==i){if(Mi[t])return;Fi(i,Fi(cf(e,r),o)),La(i.prototype,La(r,cf(e,o))),Mi[i.prop=t]=i,e.targetTest&&(rf.push(i),Xp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}x_(t,i),e.register&&e.register(ei,i,di)}else N_.push(e)},Ut=255,uc={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Ap=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},O_=function(e,t,n){var i=e?hr(e)?[e>>16,e>>8&Ut,e&Ut]:0:uc.black,r,o,a,l,c,h,f,d,u,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uc[e])i=uc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(r_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ap(l+1/3,r,o),i[1]=Ap(l,r,o),i[2]=Ap(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Vp),n&&i.length<4&&(i[3]=1),i}else i=e.match(r_)||uc.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/Ut,o=i[1]/Ut,a=i[2]/Ut,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},F_=function(e){var t=[],n=[],i=-1;return e.split(cr).forEach(function(r){var o=r.match(So)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},u_=function(e,t,n){var i="",r=(e+i).match(cr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return e;if(r=r.map(function(d){return(d=O_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=F_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(cr,"1").split(So),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(cr),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},cr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),sE=/hsl[a]?\(/,Jp=function(e){var t=e.join(" "),n;if(cr.lastIndex=0,cr.test(t))return n=sE.test(t),e[1]=u_(e[1],n),e[0]=u_(e[0],n,F_(e[1])),!0},xc,bi=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,f,d,u,p=function x(m){var _=s()-i,v=m===!0,T,y,b,M;if((_>e||_<0)&&(n+=_-t),i+=_,b=i-n,T=b-o,(T>0||v)&&(M=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(x)),y)for(u=0;u<a.length;u++)a[u](b,d,M,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){g_&&(!Lp&&Hp()&&(Us=Lp=window,Wp=Us.document||{},Oi.gsap=ei,(Us.gsapVersions||(Us.gsapVersions=[])).push(ei.version),__(af||Us.GreenSockGlobals||!Us.gsap&&Us||{}),N_.forEach(U_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},xc=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),xc=0,c=_c},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,_,v){var T=_?function(y,b,M,g){m(y,b,M,g),f.remove(T)}:m;return f.remove(m),a[v?"unshift":"push"](T),Oa(),T},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&u>=_&&u--},_listeners:a},f})(),Oa=function(){return!xc&&bi.wake()},St={},rE=/^[\d.\-M][\d.\-,\s]/,oE=/["']/g,aE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(oE,"").trim():+c,i=l.substr(a+1).trim();return t},lE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},cE=function(e){var t=(e+"").split("("),n=St[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[aE(t[1])]:lE(e).split(",").map(S_)):St._CE&&rE.test(e)?St._CE("",e):n},hE=function(e){return function(t){return 1-e(1-t)}},vo=function(e,t){return e&&(nn(e)?e:St[e]||cE(e))||t},bo=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return fi(e,function(a){St[a]=Oi[a]=r,St[o=a.toLowerCase()]=n;for(var l in r)St[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=r[l]}),r},B_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Rp=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Dp*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*NT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:B_(a);return r=Dp/r,l.config=function(c,h){return s(e,c,h)},l},Cp=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:B_(n);return i.config=function(r){return s(e,r)},i};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;bo(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;bo("Elastic",Rp("in"),Rp("out"),Rp());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};bo("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);bo("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});bo("Circ",function(s){return-(p_(1-s*s)-1)});bo("Sine",function(s){return s===1?1:-LT(s*IT)+1});bo("Back",Cp("in"),Cp("out"),Cp());St.SteppedEase=St.steps=Oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-It;return function(a){return((i*Sc(0,o,a)|0)+r)*n}}};mc.ease=St["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return qp+=s+","+s+"Params,"});var Kp=function(e,t){this.id=DT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$p,this.set=t?t.getSetter:vf},vc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ua(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),xc||bi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Oa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xf(this,n),!r._dp||r.parent||T_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Os(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),y_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+l_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+l_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Na(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?hf(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Sc(-Math.abs(this._delay),a,r),i!==!1),_f(this),WT(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Oa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==It,o;if(r)for(this._tTime-=It,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+It){r=!1;break}o=o._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=$t(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Os(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hf(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zT);var i=kn;return kn=n,Zp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),kn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,c_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,c_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qi(this,n),Ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ti(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-It)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=nn(n)?n:M_,l=function(){var h=i.then;i.then=null,r&&r(),nn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){hc(this)},s})();Fi(vc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Qn=(function(s){d_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ti(n.sortChildren),Zt&&Os(n.parent||Zt,lr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&E_(lr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return dc(0,arguments,this),this},t.from=function(i,r,o){return dc(1,arguments,this),this},t.fromTo=function(i,r,o,a){return dc(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,fc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new cn(i,r,Qi(this,o),1),this},t.call=function(i,r,o){return Os(this,cn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new cn(i,o,Qi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,fc(o).immediateRender=Ti(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,f){return a.startAt=o,fc(a).immediateRender=Ti(a.immediateRender),this.staggerTo(i,r,a,l,c,h,f)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$t(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,p,x,m,_,v,T,y,b,M,g;if(this!==Zt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,T=this._ts,_=!T,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=$t(h%m),h===l?(x=this._repeat,d=c):(b=$t(h/m),x=~~b,x&&x===b&&(d=c,x--),d>c&&(d=c)),b=Na(this._tTime,m),!a&&this._tTime&&b!==x&&this._tTime-b*m-this._dur<=0&&(b=x),M&&x&1&&(d=c-d,g=1),x!==b&&!this._lock){var S=M&&b&1,w=S===(M&&x&1);if(x<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(g?0:$t(x*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ui(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1,b=x),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=$T(this,$t(a),$t(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!b&&(Ui(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=-It);break}}u=p}else{u=this._last;for(var E=i<0?i:d;u;){if(p=u._prev,(u._act||E<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(E-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(E-u._start)*u._ts,r,o||kn&&Zp(u)),d!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=E?-It:It);break}}u=p}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-It)._zTime=d>=a?1:-1,this._ts))return this._start=y,_f(this),this.render(i,r,o);this._onUpdate&&!r&&Ui(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Vr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Ui(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(hr(r)||(r=Qi(this,r,i)),!(i instanceof vc)){if(jn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(En(i))return this.addLabel(i,r);if(nn(i))i=cn.delayedCall(0,i);else return this}return this!==i?Os(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ji);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof cn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return En(i)?this.removeLabel(i):nn(i)?this.killTweensOf(i):(i.parent===this&&gf(this,i),i===this._recent&&(this._recent=this._last),xo(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(bi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Qi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=cn.delayedCall(0,r||_c,o);return a.data="isPause",this._hasPause=1,Os(this,a,Qi(this,i))},t.removePause=function(i){var r=this._first;for(i=Qi(this,i);r;)r._start===i&&r.data==="isPause"&&Vr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)kr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=es(i),l=this._first,c=hr(r),h;l;)l instanceof cn?HT(l._targets,a)&&(c?(!kr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Qi(o,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,p=cn.to(o,Fi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Ua(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,f||[])}},r));return d?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Fi({startAt:{time:Qi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),h_(this,Qi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),h_(this,Qi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=$t(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return xo(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xo(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=ji,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Os(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=$t(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ua(o,o===Zt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Zt._ts&&(y_(Zt,hf(i,Zt)),v_=bi.frame),bi.frame>=o_){o_+=Ei.autoSleep||120;var r=Zt._first;if((!r||!r._ts)&&Ei.autoSleep&&bi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||bi.sleep()}}},e})(vc);Fi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uE=function(e,t,n,i,r,o,a){var l=new di(this._pt,e,t,0,1,nm,null,r),c=0,h=0,f,d,u,p,x,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Fa(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Ep)||[];f=Ep.exec(i);)p=f[0],x=i.substring(c,f.index),u?u=(u+1)%5:x.substr(-5)==="rgba("&&(u=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:m,c:p.charAt(1)==="="?Mo(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=Ep.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gp.test(i)||_)&&(l.e=0),this._pt=l,l},Qp=function(e,t,n,i,r,o,a,l,c,h){nn(i)&&(i=i(r||0,e,o));var f=e[t],d=n!=="get"?n:nn(f)?c?e[t.indexOf("set")||!nn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=nn(f)?c?gE:z_:tm,p;if(En(i)&&(~i.indexOf("random(")&&(i=Fa(i)),i.charAt(1)==="="&&(p=Mo(d,i)+(zn(d)||0),(p||p===0)&&(i=p))),!h||d!==i||kp)return!isNaN(d*i)&&i!==""?(p=new di(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?xE:H_,0,u),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&mf(t,i),uE.call(this,e,t,d,i,u,l||Ei.stringFilter,c))},fE=function(e,t,n,i,r){if(nn(e)&&(e=pc(e,r,t,n,i)),!Fs(e)||e.style&&e.nodeType||jn(e)||m_(e))return En(e)?pc(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=pc(e[a],r,t,n,i);return o},jp=function(e,t,n,i,r,o){var a,l,c,h;if(Mi[e]&&(a=new Mi[e]).init(r,a.rawVars?t[e]:fE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new di(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Da))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},kr,kp,em=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,p=e._dur,x=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,T=e._overwrite==="auto"&&!zp,y=e.timeline,b=i.easeReverse||f,M,g,S,w,E,D,P,N,A,U,k,B,Y;if(y&&(!d||!r)&&(r="none"),e._ease=vo(r,mc.ease),e._rEase=b&&(vo(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||d&&!i.stagger){if(N=m[0]?Hr(m[0]).harness:0,B=N&&i[N.prop],M=cf(i,Xp),x&&(x._zTime<0&&x.progress(1),t<0&&h&&a&&!u?x.render(-1,!0):x.revert(h&&p?sf:kT),x._lazy=0),o){if(Vr(e._startAt=cn.set(m,Fi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&Ti(l),startAt:null,delay:0,onUpdate:c&&function(){return Ui(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn||!a&&!u)&&e._startAt.revert(sf),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!x){if(t&&(a=!1),S=Fi({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Ti(l),immediateRender:a,stagger:0,parent:_},M),B&&(S[N.prop]=B),Vr(e._startAt=cn.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn?e._startAt.revert(sf):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ti(l)||l&&!p,g=0;g<m.length;g++){if(E=m[g],P=E._gsap||Yp(m)[g]._gsap,e._ptLookup[g]=U={},Np[P.id]&&zr.length&&lf(),k=v===m?g:v.indexOf(E),N&&(A=new N).init(E,B||M,e,k,v)!==!1&&(e._pt=w=new di(e._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(W){U[W]=w}),A.priority&&(D=1)),!N||B)for(S in M)Mi[S]&&(A=jp(S,M,e,k,E,v))?A.priority&&(D=1):U[S]=w=Qp.call(e,E,S,"get",M[S],k,v,0,i.stringFilter);e._op&&e._op[g]&&e.kill(E,e._op[g]),T&&e._pt&&(kr=e,Zt.killTweensOf(E,U,e.globalTime(t)),Y=!e.parent,kr=0),e._pt&&l&&(Np[P.id]=1)}D&&sm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&y.render(ji,!0,!0)},dE=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return kp=1,e.vars[t]="+=0",em(e,a),kp=0,l?gc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=sn(n)+zn(f.e)),f.b&&(f.b=h.s+zn(f.b))},pE=function(e,t){var n=e[0]?Hr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=La({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},mE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(jn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},pc=function(e,t,n,i,r){return nn(e)?e.call(t,n,i,r):En(e)&&~e.indexOf("random(")?Fa(e):e},ff=qp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",k_={};fi(ff+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return k_[s]=1});ff=ff.split(",");var cn=(function(s){d_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:fc(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,p=l.keyframes,x=l.defaults,m=l.scrollTrigger,_=i.parent||Zt,v=(jn(n)||m_(n)?hr(n[0]):"length"in i)?[n]:es(n),T,y,b,M,g,S,w,E;if(a._targets=v.length?Yp(v):gc("GSAP target "+n+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||d||nf(c)||nf(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Qn({data:"nested",defaults:x||{},targets:_&&_.data==="nested"?_.vars.targets:v}),T.kill(),T.parent=T._dp=lr(a),T._start=0,d||nf(c)||nf(h)){if(M=v.length,w=d&&C_(d),Fs(d))for(g in d)~ff.indexOf(g)&&(E||(E={}),E[g]=d[g]);for(y=0;y<M;y++)b=cf(i,k_),b.stagger=0,D&&(b.easeReverse=D),E&&La(b,E),S=v[y],b.duration=+pc(c,lr(a),y,S,v),b.delay=(+pc(h,lr(a),y,S,v)||0)-a._delay,!d&&M===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),T.to(S,b,w?w(y,S,v):0),T._ease=St.none;T.duration()?c=h=0:a.timeline=0}else if(p){fc(Fi(T.vars.defaults,{ease:"none"})),T._ease=vo(p.ease||i.ease||"none");var P=0,N,A,U;if(jn(p))p.forEach(function(k){return T.to(v,k,">")}),T.duration();else{b={};for(g in p)g==="ease"||g==="easeEach"||mE(g,p[g],b,p.easeEach);for(g in b)for(N=b[g].sort(function(k,B){return k.t-B.t}),P=0,y=0;y<N.length;y++)A=N[y],U={ease:A.e,duration:(A.t-(y?N[y-1].t:0))/100*c},U[g]=A.v,T.to(v,U,P),P+=U.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return u===!0&&!zp&&(kr=lr(a),Zt.killTweensOf(v),kr=0),Os(_,lr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===$t(_._time)&&Ti(f)&&XT(lr(a))&&_.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-h)||0)),m&&E_(lr(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-It&&!h?l:i<It?0:i,d,u,p,x,m,_,v,T;if(!c)YT(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,r,o);if(d=$t(f%x),f===l?(p=this._repeat,d=c):(m=$t(f/x),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),_=this._yoyo&&p&1,_&&(d=c-d),m=Na(this._tTime,x),d===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==x&&this._initted&&(this._lock=o=1,this.render($t(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(w_(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!r&&!m&&(Ui(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Up(this,i,r,o),Ui(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Ui(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Up(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vr(this,1),!r&&!(h&&!a)&&(f||a||_)&&(Ui(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){xc||bi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||em(this,c),h=this._ease(c/this._dur),dE(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(xf(this,0),this.parent||b_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?hc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!kn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kr&&kr.vars.overwrite!==!0)._first||hc(this),this.parent&&o!==this.timeline.totalDuration()&&Ua(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?es(i):a,c=this._ptLookup,h=this._pt,f,d,u,p,x,m,_;if((!r||r==="all")&&GT(a,l))return r==="all"&&(this._pt=0),hc(this);for(f=this._op=this._op||[],r!=="all"&&(En(r)&&(x={},fi(r,function(v){return x[v]=1}),r=x),r=pE(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],r==="all"?(f[_]=r,p=d,u={}):(u=f[_]=f[_]||{},p=r);for(x in p)m=d&&d[x],m&&((!("kill"in m.d)||m.d.kill(x)===!0)&&gf(this,m,"_pt"),delete d[x]),u!=="all"&&(u[x]=1)}return this._initted&&!this._pt&&h&&hc(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return dc(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return dc(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Zt.killTweensOf(i,r,o)},e})(vc);Fi(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(s){cn[s]=function(){var e=new Qn,t=Op.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var tm=function(e,t,n){return e[t]=n},z_=function(e,t,n){return e[t](n)},gE=function(e,t,n,i){return e[t](i.fp,n)},_E=function(e,t,n){return e.setAttribute(t,n)},vf=function(e,t){return nn(e[t])?z_:pf(e[t])&&e.setAttribute?_E:tm},H_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},im=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vE=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},yE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?gf(this,t,"_pt"):t.dep||(n=1),t=i;return!n},SE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sm=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},di=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||H_,this.d=l||this,this.set=c||tm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=SE,this.m=n,this.mt=r,this.tween=i},s})();fi(qp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Xp[s]=1});Oi.TweenMax=Oi.TweenLite=cn;Oi.TimelineLite=Oi.TimelineMax=Qn;Zt=new Qn({sortChildren:!1,defaults:mc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=Jp;var yo=[],of={},ME=[],f_=0,bE=0,Pp=function(e){return(of[e]||ME).map(function(t){return t()})},yc=function(){var e=Date.now(),t=[];e-f_>2&&(Pp("matchMediaInit"),yo.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Us.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),f_=e,Pp("matchMedia"))},V_=(function(){function s(t,n){this.selector=n&&Fp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){nn(n)&&(r=i,i=n,n=nn);var o=this,a=function(){var c=Xt,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Fp(r)),Xt=o,f=i.apply(o,arguments),nn(f)&&o._r.push(f),Xt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===nn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Xt;Xt=null,n(this),Xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof cn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof cn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=yo.length;o--;)yo[o].id===this.id&&yo.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(yc):a.removeEventListener("change",yc)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),TE=(function(){function s(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Fs(n)||(n={matches:n});var o=new V_(0,r||this.scope),a=o.conditions={},l,c,h;Xt&&!o.selector&&(o.selector=Xt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Us.matchMedia(n[c]),l&&(yo.indexOf(o)<0&&yo.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(yc):l.addEventListener("change",yc),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),df={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return U_(i)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return Zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){En(e)&&(e=es(e)[0]);var r=Hr(e||{}).get,o=n?M_:S_;return n==="native"&&(n=""),e&&(t?o((Mi[t]&&Mi[t].get||r)(e,t,n,i)):function(a,l,c){return o((Mi[a]&&Mi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=es(e),e.length>1){var i=e.map(function(h){return ei.quickSetter(h,t,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}e=e[0]||{};var o=Mi[t],a=Hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Da._pt=0,f.init(e,n?h+n:h,Da,0,[e]),f.render(1,f),Da._pt&&im(1,Da)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=ei.to(e,Fi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vo(e.ease,mc.ease)),a_(mc,e||{})},config:function(e){return a_(Ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Mi[a]&&!Oi[a]&&gc(t+" effect requires "+a+" plugin.")}),wp[t]=function(a,l,c){return n(es(a),Fi(l||{},r),c)},o&&(Qn.prototype[t]=function(a,l,c){return this.add(wp[t](a,Fs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=vo(t)},parseEase:function(e,t){return arguments.length?vo(e,t):St},getById:function(e){return Zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qn(e),i,r;for(n.smoothChildTiming=Ti(e.smoothChildTiming),Zt.remove(n),n._dp=0,n._time=n._tTime=Zt._time,i=Zt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof cn&&i.vars.onComplete===i._targets[0]))&&Os(n,i,i._start-i._delay),i=r;return Os(Zt,n,0),n},context:function(e,t){return e?new V_(e,t):Xt},matchMedia:function(e){return new TE(e)},matchMediaRefresh:function(){return yo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||yc()},addEventListener:function(e,t){var n=of[e]||(of[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=of[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:tE,wrapYoyo:nE,distribute:C_,random:I_,snap:P_,normalize:eE,getUnit:zn,clamp:JT,splitColor:O_,toArray:es,selector:Fp,mapRange:L_,pipe:QT,unitize:jT,interpolate:iE,shuffle:R_},install:__,effects:wp,ticker:bi,updateRoot:Qn.updateRoot,plugins:Mi,globalTimeline:Zt,core:{PropTween:di,globals:x_,Tween:cn,Timeline:Qn,Animation:vc,getCache:Hr,_removeLinkedListItem:gf,reverting:function(){return kn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return zp=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return df[s]=cn[s]});bi.add(Qn.updateRoot);Da=df.to({},{duration:0});var EE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wE=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=EE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Ip=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(En(r)&&(l={},fi(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}wE(a,r)}}}},ei=df.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)kn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ip("roundProps",Bp),Ip("modifiers"),Ip("snap",P_))||df;cn.version=Qn.version=ei.version="3.15.1";g_=1;Hp()&&Oa();var AE=St.Power0,RE=St.Power1,CE=St.Power2,PE=St.Power3,IE=St.Power4,DE=St.Linear,LE=St.Quad,NE=St.Cubic,UE=St.Quart,OE=St.Quint,FE=St.Strong,BE=St.Elastic,kE=St.Back,zE=St.SteppedEase,HE=St.Bounce,VE=St.Sine,GE=St.Expo,WE=St.Circ;var G_,Wr,ka,hm,Ao,XE,W_,um,qE=function(){return typeof window<"u"},fr={},wo=180/Math.PI,za=Math.PI/180,Ba=Math.atan2,X_=1e8,fm=/([A-Z])/g,YE=/(left|right|width|margin|padding|x)/i,$E=/[\s,\(]\S/,Bs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},om=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},j_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ex=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jE=function(e,t,n){return e.style[t]=n},ew=function(e,t,n){return e.style.setProperty(t,n)},tw=function(e,t,n){return e._gsap[t]=n},nw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},sw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Jt="transform",wi=Jt+"Origin",rw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in fr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ur(i,a)}):this.tfm[e]=o.x?o[e]:ur(i,e),e===wi&&(this.tfm.zOrigin=o.zOrigin);else return Bs.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Jt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wi,t,"")),e=Jt}(r||t)&&this.props.push(e,t,r[e])},tx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ow=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(fm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=um(),(!r||!r.isStart)&&!n[Jt]&&(tx(n),i.zOrigin&&n[wi]&&(n[wi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nx=function(e,t){var n={target:e,props:[],revert:ow,save:rw};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ix,am=function(e,t){var n=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return n&&n.style?n:Wr.createElement(e)},Bi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(fm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ha(t)||t,1)||""},q_="O,Moz,ms,Ms,Webkit".split(","),Ha=function(e,t,n){var i=t||Ao,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(q_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?q_[o]:"")+e},lm=function(){qE()&&window.document&&(G_=window,Wr=G_.document,ka=Wr.documentElement,Ao=am("div")||{style:{}},XE=am("div"),Jt=Ha(Jt),wi=Jt+"Origin",Ao.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ix=!!Ha("perspective"),um=ei.core.reverting,hm=1)},Y_=function(e){var t=e.ownerSVGElement,n=am("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ka.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ka.removeChild(n),r},$_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sx=function(e){var t,n;try{t=e.getBBox()}catch{t=Y_(e),n=1}return t&&(t.width||t.height)||n||(t=Y_(e)),t&&!t.width&&!t.x&&!t.y?{x:+$_(e,["x","cx","x1"])||0,y:+$_(e,["y","cy","y1"])||0,width:0,height:0}:t},rx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sx(e))},qr=function(e,t){if(t){var n=e.style,i;t in fr&&t!==wi&&(t=Jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(fm,"-$1").toLowerCase())):n.removeAttribute(t)}},Xr=function(e,t,n,i,r,o){var a=new di(e._pt,t,n,0,1,o?ex:j_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Z_={deg:1,rad:1,turn:1},aw={grid:1,flex:1},Yr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ao.style,l=YE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",p,x,m,_;if(i===o||!r||Z_[i]||Z_[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),_=e.getCTM&&rx(e),(u||o==="%")&&(fr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[h],sn(u?r/p*f:r/100*p);if(a[l?"width":"height"]=f+(d?o:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Wr||!x.appendChild)&&(x=Wr.body),m=x._gsap,m&&u&&m.width&&l&&m.time===bi.time&&!m.uncache)return sn(r/m.width*f);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,p=e[h],v?e.style[t]=v:qr(e,t)}else(u||o==="%")&&!aw[Bi(x,"display")]&&(a.position=Bi(e,"position")),x===e&&(a.position="static"),x.appendChild(Ao),p=Ao[h],x.removeChild(Ao),a.position="absolute";return l&&u&&(m=Hr(x),m.time=bi.time,m.width=x[h]),sn(d?p*r/f:p&&r?f/p*r:0)},ur=function(e,t,n,i){var r;return hm||lm(),t in Bs&&t!=="transform"&&(t=Bs[t],~t.indexOf(",")&&(t=t.split(",")[0])),fr[t]&&t!=="transform"?(r=Tc(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Sf(Bi(e,wi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=yf[t]&&yf[t](e,t,n)||Bi(e,t)||$p(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Yr(e,t,r,n)+n:r},lw=function(e,t,n,i){if(!n||n==="none"){var r=Ha(t,e,1),o=r&&Bi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Bi(e,"borderTopColor"))}var a=new di(this._pt,e.style,t,0,1,nm),l=0,c=0,h,f,d,u,p,x,m,_,v,T,y,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=Bi(e,t)||i,x?e.style[t]=x:qr(e,t)),h=[n,i],Jp(h),n=h[0],i=h[1],d=n.match(So)||[],b=i.match(So)||[],b.length){for(;f=So.exec(i);)m=f[0],v=i.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(x=d[c++]||"")&&(u=parseFloat(x)||0,y=x.substr((u+"").length),m.charAt(1)==="="&&(m=Mo(u,m)+y),_=parseFloat(m),T=m.substr((_+"").length),l=So.lastIndex-T.length,T||(T=T||Ei.units[t]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(u=Yr(e,t,x,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:_-u,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?ex:j_;return Gp.test(i)&&(a.e=0),this._pt=a,a},J_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=J_[n]||n,t[1]=J_[i]||i,t.join(" ")},hw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fr[a]&&(l=1,a=a==="transformOrigin"?wi:Jt),qr(n,a);l&&(qr(n,Jt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Tc(n,1),o.uncache=1,tx(i)))}},yf={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new di(e._pt,t,n,0,0,hw);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},bc=[1,0,0,1,0,0],ox={},ax=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},K_=function(e){var t=Bi(e,Jt);return ax(t)?bc:t.substr(7).match(Vp).map(sn)},dm=function(e,t){var n=e._gsap||Hr(e),i=e.style,r=K_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?bc:r):(r===bc&&!e.offsetParent&&e!==ka&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ka.appendChild(e)),r=K_(e),l?i.display=l:qr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ka.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},cm=function(e,t,n,i,r,o){var a=e._gsap,l=r||dm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],p=l[1],x=l[2],m=l[3],_=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,b=parseFloat(T[1])||0,M,g,S,w;n?l!==bc&&(g=u*m-p*x)&&(S=y*(m/g)+b*(-x/g)+(x*v-m*_)/g,w=y*(-p/g)+b*(u/g)-(u*v-p*_)/g,y=S,b=w):(M=sx(e),y=M.x+(~T[0].indexOf("%")?y/100*M.width:y),b=M.y+(~(T[1]||T[0]).indexOf("%")?b/100*M.height:b)),i||i!==!1&&a.smooth?(_=y-c,v=b-h,a.xOffset=f+(_*u+v*x)-_,a.yOffset=d+(_*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wi]="0px 0px",o&&(Xr(o,a,"xOrigin",c,y),Xr(o,a,"yOrigin",h,b),Xr(o,a,"xOffset",f,a.xOffset),Xr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Tc=function(e,t){var n=e._gsap||new Kp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bi(e,wi)||"0",h,f,d,u,p,x,m,_,v,T,y,b,M,g,S,w,E,D,P,N,A,U,k,B,Y,W,I,J,de,be,H,X;return h=f=d=x=m=_=v=T=y=0,u=p=1,n.svg=!!(e.getCTM&&rx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Jt]!=="none"?l[Jt]:"")),i.scale=i.rotate=i.translate="none"),g=dm(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),cm(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,g)),b=n.xOrigin||0,M=n.yOrigin||0,g!==bc&&(D=g[0],P=g[1],N=g[2],A=g[3],h=U=g[4],f=k=g[5],g.length===6?(u=Math.sqrt(D*D+P*P),p=Math.sqrt(A*A+N*N),x=D||P?Ba(P,D)*wo:0,v=N||A?Ba(N,A)*wo+x:0,v&&(p*=Math.abs(Math.cos(v*za))),n.svg&&(h-=b-(b*D+M*N),f-=M-(b*P+M*A))):(X=g[6],be=g[7],I=g[8],J=g[9],de=g[10],H=g[11],h=g[12],f=g[13],d=g[14],S=Ba(X,de),m=S*wo,S&&(w=Math.cos(-S),E=Math.sin(-S),B=U*w+I*E,Y=k*w+J*E,W=X*w+de*E,I=U*-E+I*w,J=k*-E+J*w,de=X*-E+de*w,H=be*-E+H*w,U=B,k=Y,X=W),S=Ba(-N,de),_=S*wo,S&&(w=Math.cos(-S),E=Math.sin(-S),B=D*w-I*E,Y=P*w-J*E,W=N*w-de*E,H=A*E+H*w,D=B,P=Y,N=W),S=Ba(P,D),x=S*wo,S&&(w=Math.cos(S),E=Math.sin(S),B=D*w+P*E,Y=U*w+k*E,P=P*w-D*E,k=k*w-U*E,D=B,U=Y),m&&Math.abs(m)+Math.abs(x)>359.9&&(m=x=0,_=180-_),u=sn(Math.sqrt(D*D+P*P+N*N)),p=sn(Math.sqrt(k*k+X*X)),S=Ba(U,k),v=Math.abs(S)>2e-4?S*wo:0,y=H?1/(H<0?-H:H):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ax(Bi(e,Jt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=sn(u),n.scaleY=sn(p),n.rotation=sn(x)+a,n.rotationX=sn(m)+a,n.rotationY=sn(_)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wi]=Sf(c)),n.xOffset=n.yOffset=0,n.force3D=Ei.force3D,n.renderTransform=n.svg?fw:ix?lx:uw,n.uncache=0,n},Sf=function(e){return(e=e.split(" "))[0]+" "+e[1]},rm=function(e,t,n){var i=zn(t);return sn(parseFloat(t)+parseFloat(Yr(e,"x",n+"px",i)))+i},uw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lx(e,t)},To="0deg",Mc="0px",Eo=") ",lx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,p=n.scaleX,x=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,T=n.zOrigin,y="",b=_==="auto"&&e&&e!==1||_===!0;if(T&&(f!==To||h!==To)){var M=parseFloat(h)*za,g=Math.sin(M),S=Math.cos(M),w;M=parseFloat(f)*za,w=Math.cos(M),o=rm(v,o,g*w*-T),a=rm(v,a,-Math.sin(M)*-T),l=rm(v,l,S*w*-T+T)}m!==Mc&&(y+="perspective("+m+Eo),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||o!==Mc||a!==Mc||l!==Mc)&&(y+=l!==Mc||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Eo),c!==To&&(y+="rotate("+c+Eo),h!==To&&(y+="rotateY("+h+Eo),f!==To&&(y+="rotateX("+f+Eo),(d!==To||u!==To)&&(y+="skew("+d+", "+u+Eo),(p!==1||x!==1)&&(y+="scale("+p+", "+x+Eo),v.style[Jt]=y||"translate(0, 0)"},fw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,p=n.xOrigin,x=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,T=parseFloat(o),y=parseFloat(a),b,M,g,S,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=za,c*=za,b=Math.cos(l)*f,M=Math.sin(l)*f,g=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(h*=za,w=Math.tan(c-h),w=Math.sqrt(1+w*w),g*=w,S*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,M*=w)),b=sn(b),M=sn(M),g=sn(g),S=sn(S)):(b=f,S=d,M=g=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=Yr(u,"x",o,"px"),y=Yr(u,"y",a,"px")),(p||x||m||_)&&(T=sn(T+p-(p*b+x*g)+m),y=sn(y+x-(p*M+x*S)+_)),(i||r)&&(w=u.getBBox(),T=sn(T+i/100*w.width),y=sn(y+r/100*w.height)),w="matrix("+b+","+M+","+g+","+S+","+T+","+y+")",u.setAttribute("transform",w),v&&(u.style[Jt]=w)},dw=function(e,t,n,i,r){var o=360,a=En(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?wo:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*X_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*X_)%o-~~(c/o)*o)),e._pt=d=new di(e._pt,t,n,i,c,ZE),d.e=h,d.u="deg",e._props.push(n),d},Q_=function(e,t){for(var n in t)e[n]=t[n];return e},pw=function(e,t,n){var i=Q_({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Jt]=t,a=Tc(n,1),qr(n,Jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Jt],o[Jt]=t,a=Tc(n,1),o[Jt]=c);for(l in fr)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=zn(c),p=zn(h),f=u!==p?Yr(n,l,c,p):parseFloat(c),d=parseFloat(h),e._pt=new di(e._pt,a,l,f,d-f,om),e._pt.u=p||0,e._props.push(l));Q_(a,i)};fi("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});yf[e>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(p){return ur(a,p,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(p,x){return u[p]=d[x]=d[x]||d[(x-1)/2|0]}),a.init(l,u,f)}});var pm={name:"css",register:lm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,p,x,m,_,v,T,y,b,M,g,S,w;hm||lm(),this.styles=this.styles||nx(e),S=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(h=t[x],!(Mi[x]&&jp(x,t,n,i,e,r)))){if(u=typeof h,p=yf[x],u==="function"&&(h=h.call(n,i,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Fa(h)),p)p(this,e,x,h,n)&&(g=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",cr.lastIndex=0,cr.test(c)||(m=zn(c),_=zn(h),_?m!==_&&(c=Yr(e,x,c,_)+_):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,x),o.push(x),S.push(x,0,a[x]);else if(u!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,r):l[x],En(c)&&~c.indexOf("random(")&&(c=Fa(c)),zn(c+"")||c==="auto"||(c+=Ei.units[x]||zn(ur(e,x))||""),(c+"").charAt(1)==="="&&(c=ur(e,x))):c=ur(e,x),d=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),x in Bs&&(x==="autoAlpha"&&(d===1&&ur(e,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,a.visibility),Xr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=Bs[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in fr,T){if(this.styles.save(x),w=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=Bi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=Bi(e,"perspective"),E?e.style.perspective=E:qr(e,"perspective")}f=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Tc(e,t.parseTransform),M=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new di(this._pt,a,Jt,0,1,b.renderTransform,b,0,-1),y.dep=1),x==="scale")this._pt=new di(this._pt,b,"scaleY",b.scaleY,(v?Mo(b.scaleY,v+f):f)-b.scaleY||0,om),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(wi,0,a[wi]),h=cw(h),b.svg?cm(e,h,0,M,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==b.zOrigin&&Xr(this,b,"zOrigin",b.zOrigin,_),Xr(this,a,x,Sf(c),Sf(h)));continue}else if(x==="svgOrigin"){cm(e,h,1,M,0,this);continue}else if(x in ox){dw(this,b,x,d,v?Mo(d,v+h):h);continue}else if(x==="smoothOrigin"){Xr(this,b,"smooth",b.smooth,h);continue}else if(x==="force3D"){b[x]=h;continue}else if(x==="transform"){pw(this,h,e);continue}}else x in a||(x=Ha(x)||x);if(T||(f||f===0)&&(d||d===0)&&!$E.test(h)&&x in a)m=(c+"").substr((d+"").length),f||(f=0),_=zn(h)||(x in Ei.units?Ei.units[x]:m),m!==_&&(d=Yr(e,x,c,_)),this._pt=new di(this._pt,T?b:a,x,d,(v?Mo(d,v+f):f)-d,!T&&(_==="px"||x==="zIndex")&&t.autoRound!==!1?QE:om),this._pt.u=_||0,T&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=KE):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=JE);else if(x in a)lw.call(this,e,x,c,v?v+h:h);else if(x in e)this.add(e,x,c||e[x],v?v+h:h,i,r);else if(x!=="parseTransform"){mf(x,h);continue}T||(x in a?S.push(x,0,a[x]):typeof e[x]=="function"?S.push(x,2,e[x]()):S.push(x,1,c||e[x])),o.push(x)}}g&&sm(this)},render:function(e,t){if(t.tween._time||!um())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ur,aliases:Bs,getSetter:function(e,t,n){var i=Bs[t];return i&&i.indexOf(",")<0&&(t=i),t in fr&&t!==wi&&(e._gsap.x||ur(e,"x"))?n&&W_===n?t==="scale"?nw:tw:(W_=n||{})&&(t==="scale"?iw:sw):e.style&&!pf(e.style[t])?jE:~t.indexOf("-")?ew:vf(e,t)},core:{_removeProperty:qr,_getMatrix:dm}};ei.utils.checkPrefix=Ha;ei.core.getStyleSaver=nx;(function(s,e,t,n){var i=fi(s+","+e+","+t,function(r){fr[r]=1});fi(e,function(r){Ei.units[r]="deg",ox[r]=1}),Bs[i[13]]=s+","+e,fi(n,function(r){var o=r.split(":");Bs[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ei.units[s]="px"});ei.registerPlugin(pm);var kt=ei.registerPlugin(pm)||ei,rP=kt.core.Tween;function cx(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function mw(s,e,t){return e&&cx(s.prototype,e),t&&cx(s,t),s}var Hn,Tf,gw,Ai,$r,Zr,Ga,ux,Ro,Wa,fx,dr,vs,dx,px=function(){return Hn||typeof window<"u"&&(Hn=window.gsap)&&Hn.registerPlugin&&Hn},mx=1,Va=[],ut=[],ys=[],wc=Date.now,mm=function(e,t){return t},_w=function(){var e=Wa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,ys),ut=n,ys=i,mm=function(o,a){return t[o](a)}},mr=function(e,t){return~ys.indexOf(e)&&ys[ys.indexOf(e)+1][t]},Ac=function(e){return!!~fx.indexOf(e)},mi=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},pi=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Mf="scrollLeft",bf="scrollTop",gm=function(){return dr&&dr.isPressed||ut.cache++},Ef=function(e,t){var n=function i(r){if(r||r===0){mx&&Ai.history.scrollRestoration!=="manual"&&(Ai.history.scrollRestoration="manual");var o=dr&&dr.isPressed;r=i.v=Math.round(r)||(dr&&dr.iOS?1:0),e(r),i.cacheID=ut.cache,o&&mm("ss",r)}else(t||ut.cache!==i.cacheID||mm("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ti={s:Mf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ef(function(s){return arguments.length?Ai.scrollTo(s,gn.sc()):Ai.pageXOffset||$r[Mf]||Zr[Mf]||Ga[Mf]||0})},gn={s:bf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ti,sc:Ef(function(s){return arguments.length?Ai.scrollTo(ti.sc(),s):Ai.pageYOffset||$r[bf]||Zr[bf]||Ga[bf]||0})},gi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Hn.utils.toArray)(e)[0]||(typeof e=="string"&&Hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},xw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},pr=function(e,t){var n=t.s,i=t.sc;Ac(e)&&(e=$r.scrollingElement||Zr);var r=ut.indexOf(e),o=i===gn.sc?1:2;!~r&&(r=ut.push(e)-1),ut[r+o]||mi(e,"scroll",gm);var a=ut[r+o],l=a||(ut[r+o]=Ef(mr(e,n),!0)||(Ac(e)?i:Ef(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Hn.getProperty(e,"scrollBehavior")==="smooth"),l},wf=function(e,t,n){var i=e,r=e,o=wc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,x){var m=wc();x||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(p){var x=a,m=r,_=wc();return(p||p===0)&&p!==i&&h(p),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-x)*1e3};return{update:h,reset:f,getVelocity:d}},Ec=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},hx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},gx=function(){Wa=Hn.core.globals().ScrollTrigger,Wa&&Wa.core&&_w()},_x=function(e){return Hn=e||px(),!Tf&&Hn&&typeof document<"u"&&document.body&&(Ai=window,$r=document,Zr=$r.documentElement,Ga=$r.body,fx=[Ai,$r,Zr,Ga],gw=Hn.utils.clamp,dx=Hn.core.context||function(){},Ro="onpointerenter"in Ga?"pointer":"mouse",ux=rn.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vs=rn.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mx=0},500),Tf=1),Wa||gx(),Tf};ti.op=gn;ut.cache=0;var rn=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Tf||_x(Hn)||console.warn("Please gsap.registerPlugin(Observer)"),Wa||gx();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,x=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,b=n.onRight,M=n.onLeft,g=n.onUp,S=n.onDown,w=n.onChangeX,E=n.onChangeY,D=n.onChange,P=n.onToggleX,N=n.onToggleY,A=n.onHover,U=n.onHoverEnd,k=n.onMove,B=n.ignoreCheck,Y=n.isNormalizer,W=n.onGestureStart,I=n.onGestureEnd,J=n.onWheel,de=n.onEnable,be=n.onDisable,H=n.onClick,X=n.scrollSpeed,ue=n.capture,ae=n.allowClicks,fe=n.lockAxis,Se=n.onLockAxis;this.target=a=gi(a)||Zr,this.vars=n,u&&(u=Hn.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,X=X||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ai.getComputedStyle(Ga).lineHeight)||22);var Ge,Ce,Ve,ye,Pe,et,re,V=this,Me=0,Je=0,Be=n.passive||!h&&n.passive!==!1,ke=pr(a,ti),tt=pr(a,gn),je=ke(),z=tt(),it=~o.indexOf("touch")&&!~o.indexOf("pointer")&&vs[0]==="pointerdown",j=Ac(a),oe=a.ownerDocument||$r,ee=[0,0,0],Ke=[0,0,0],Te=0,Oe=function(){return Te=wc()},L=function(Ae,he){return(V.event=Ae)&&u&&xw(Ae.target,u)||he&&it&&Ae.pointerType!=="touch"||B&&B(Ae,he)},R=function(){V._vx.reset(),V._vy.reset(),Ce.pause(),f&&f(V)},q=function(){var Ae=V.deltaX=hx(ee),he=V.deltaY=hx(Ke),le=Math.abs(Ae)>=i,Ie=Math.abs(he)>=i;D&&(le||Ie)&&D(V,Ae,he,ee,Ke),le&&(b&&V.deltaX>0&&b(V),M&&V.deltaX<0&&M(V),w&&w(V),P&&V.deltaX<0!=Me<0&&P(V),Me=V.deltaX,ee[0]=ee[1]=ee[2]=0),Ie&&(S&&V.deltaY>0&&S(V),g&&V.deltaY<0&&g(V),E&&E(V),N&&V.deltaY<0!=Je<0&&N(V),Je=V.deltaY,Ke[0]=Ke[1]=Ke[2]=0),(ye||Ve)&&(k&&k(V),Ve&&(m&&Ve===1&&m(V),v&&v(V),Ve=0),ye=!1),et&&!(et=!1)&&Se&&Se(V),Pe&&(J(V),Pe=!1),Ge=0},pe=function(Ae,he,le){ee[le]+=Ae,Ke[le]+=he,V._vx.update(Ae),V._vy.update(he),c?Ge||(Ge=requestAnimationFrame(q)):q()},ie=function(Ae,he){fe&&!re&&(V.axis=re=Math.abs(Ae)>Math.abs(he)?"x":"y",et=!0),re!=="y"&&(ee[2]+=Ae,V._vx.update(Ae,!0)),re!=="x"&&(Ke[2]+=he,V._vy.update(he,!0)),c?Ge||(Ge=requestAnimationFrame(q)):q()},ge=function(Ae){if(!L(Ae,1)){Ae=Ec(Ae,h);var he=Ae.clientX,le=Ae.clientY,Ie=he-V.x,ce=le-V.y,ze=V.isDragging;V.x=he,V.y=le,(ze||(Ie||ce)&&(Math.abs(V.startX-he)>=r||Math.abs(V.startY-le)>=r))&&(Ve||(Ve=ze?2:1),ze||(V.isDragging=!0),ie(Ie,ce))}},xe=V.onPress=function(_e){L(_e,1)||_e&&_e.button||(V.axis=re=null,Ce.pause(),V.isPressed=!0,_e=Ec(_e),Me=Je=0,V.startX=V.x=_e.clientX,V.startY=V.y=_e.clientY,V._vx.reset(),V._vy.reset(),mi(Y?a:oe,vs[1],ge,Be,!0),V.deltaX=V.deltaY=0,T&&T(V))},$=V.onRelease=function(_e){if(!L(_e,1)){pi(Y?a:oe,vs[1],ge,!0);var Ae=!isNaN(V.y-V.startY),he=V.isDragging,le=he&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ie=Ec(_e);!le&&Ae&&(V._vx.reset(),V._vy.reset(),h&&ae&&Hn.delayedCall(.08,function(){if(wc()-Te>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(oe.createEvent){var ce=oe.createEvent("MouseEvents");ce.initMouseEvent("click",!0,!0,Ai,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(ce)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&he&&!Y&&Ce.restart(!0),Ve&&q(),_&&he&&_(V),y&&y(V,le)}},ne=function(Ae){return Ae.touches&&Ae.touches.length>1&&(V.isGesturing=!0)&&W(Ae,V.isDragging)},me=function(){return(V.isGesturing=!1)||I(V)},F=function(Ae){if(!L(Ae)){var he=ke(),le=tt();pe((he-je)*X,(le-z)*X,1),je=he,z=le,f&&Ce.restart(!0)}},se=function(Ae){if(!L(Ae)){Ae=Ec(Ae,h),J&&(Pe=!0);var he=(Ae.deltaMode===1?l:Ae.deltaMode===2?Ai.innerHeight:1)*p;pe(Ae.deltaX*he,Ae.deltaY*he,0),f&&!Y&&Ce.restart(!0)}},te=function(Ae){if(!L(Ae)){var he=Ae.clientX,le=Ae.clientY,Ie=he-V.x,ce=le-V.y;V.x=he,V.y=le,ye=!0,f&&Ce.restart(!0),(Ie||ce)&&ie(Ie,ce)}},Ee=function(Ae){V.event=Ae,A(V)},ve=function(Ae){V.event=Ae,U(V)},we=function(Ae){return L(Ae)||Ec(Ae,h)&&H(V)};Ce=V._dc=Hn.delayedCall(d||.25,R).pause(),V.deltaX=V.deltaY=0,V._vx=wf(0,50,!0),V._vy=wf(0,50,!0),V.scrollX=ke,V.scrollY=tt,V.isDragging=V.isGesturing=V.isPressed=!1,dx(this),V.enable=function(_e){return V.isEnabled||(mi(j?oe:a,"scroll",gm),o.indexOf("scroll")>=0&&mi(j?oe:a,"scroll",F,Be,ue),o.indexOf("wheel")>=0&&mi(a,"wheel",se,Be,ue),(o.indexOf("touch")>=0&&ux||o.indexOf("pointer")>=0)&&(mi(a,vs[0],xe,Be,ue),mi(oe,vs[2],$),mi(oe,vs[3],$),ae&&mi(a,"click",Oe,!0,!0),H&&mi(a,"click",we),W&&mi(oe,"gesturestart",ne),I&&mi(oe,"gestureend",me),A&&mi(a,Ro+"enter",Ee),U&&mi(a,Ro+"leave",ve),k&&mi(a,Ro+"move",te)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ye=Ve=!1,V._vx.reset(),V._vy.reset(),je=ke(),z=tt(),_e&&_e.type&&xe(_e),de&&de(V)),V},V.disable=function(){V.isEnabled&&(Va.filter(function(_e){return _e!==V&&Ac(_e.target)}).length||pi(j?oe:a,"scroll",gm),V.isPressed&&(V._vx.reset(),V._vy.reset(),pi(Y?a:oe,vs[1],ge,!0)),pi(j?oe:a,"scroll",F,ue),pi(a,"wheel",se,ue),pi(a,vs[0],xe,ue),pi(oe,vs[2],$),pi(oe,vs[3],$),pi(a,"click",Oe,!0),pi(a,"click",we),pi(oe,"gesturestart",ne),pi(oe,"gestureend",me),pi(a,Ro+"enter",Ee),pi(a,Ro+"leave",ve),pi(a,Ro+"move",te),V.isEnabled=V.isPressed=V.isDragging=!1,be&&be(V))},V.kill=V.revert=function(){V.disable();var _e=Va.indexOf(V);_e>=0&&Va.splice(_e,1),dr===V&&(dr=0)},Va.push(V),Y&&Ac(a)&&(dr=V),V.enable(x)},mw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();rn.version="3.15.1";rn.create=function(s){return new rn(s)};rn.register=_x;rn.getAll=function(){return Va.slice()};rn.getById=function(s){return Va.filter(function(e){return e.vars.id===s})[0]};px()&&Hn.registerPlugin(rn);var We,$a,mt,Rt,Hi,At,Pm,Vf,zc,Nc,Cc,Af,ni,Xf,bm,xi,xx,vx,Za,Ux,_m,Ox,_i,Tm,Fx,Bx,Jr,Em,Im,Ja,Dm,Kr,wm,xm,Rf=1,ii=Date.now,vm=ii(),is=0,Pc=0,yx=function(e,t,n){var i=zi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Sx=function(e,t){return t&&(!zi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vw=function s(){return Pc&&requestAnimationFrame(s)},Mx=function(){return Xf=1},bx=function(){return Xf=0},ks=function(e){return e},Ic=function(e){return Math.round(e*1e5)/1e5||0},kx=function(){return typeof window<"u"},zx=function(){return We||kx()&&(We=window.gsap)&&We.registerPlugin&&We},No=function(e){return!!~Pm.indexOf(e)},Hx=function(e){return(e==="Height"?Dm:mt["inner"+e])||Hi["client"+e]||At["client"+e]},Vx=function(e){return mr(e,"getBoundingClientRect")||(No(e)?function(){return Hf.width=mt.innerWidth,Hf.height=Dm,Hf}:function(){return gr(e)})},yw=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=mr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Hx(r):e["client"+r])||0}},Sw=function(e,t){return!t||~ys.indexOf(e)?Vx(e):function(){return Hf}},zs=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=mr(e,n))?o()-Vx(e)()[r]:No(e)?(Hi[n]||At[n])-Hx(i):e[n]-e["offset"+i])},Cf=function(e,t){for(var n=0;n<Za.length;n+=3)(!t||~t.indexOf(Za[n+1]))&&e(Za[n],Za[n+1],Za[n+2])},zi=function(e){return typeof e=="string"},si=function(e){return typeof e=="function"},Dc=function(e){return typeof e=="number"},Co=function(e){return typeof e=="object"},Rc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Xa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},qa=Math.abs,Gx="left",Wx="top",Lm="right",Nm="bottom",Io="width",Do="height",Uc="Right",Oc="Left",Fc="Top",Bc="Bottom",_n="padding",ts="margin",Qa="Width",Um="Height",wn="px",ns=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Mw=function(e){var t=ns(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Tx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gr=function(e,t){var n=t&&ns(e)[bm]!=="matrix(1, 0, 0, 1, 0, 0)"&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Gf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Xx=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},bw=function(e){return function(t){return We.utils.snap(Xx(e),t)}},Om=function(e){var t=We.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Tw=function(e){return function(t,n){return Om(Xx(e))(t,n.direction)}},Pf=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},If=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ex={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Df={toggleActions:"play",anticipatePin:0},Wf={top:0,left:0,center:.5,bottom:1,right:1},Ff=function(e,t){if(zi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Wf?Wf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Lf=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,p=Rt.createElement("div"),x=No(n)||mr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=x?At:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&x?"fixed;":"absolute;"),(m||l||!x)&&(y+=(i===gn?Lm:Nm)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],Bf(p,0,i,v),p},Bf=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Qa]=1,r["border"+a+Qa]=0,r[n.p]=t+"px",We.set(e,r)},pt=[],Am={},Hc,wx=function(){return ii()-is>34&&(Hc||(Hc=requestAnimationFrame(_r)))},Ya=function(){(!_i||!_i.isPressed||_i.startX>At.clientWidth)&&(ut.cache++,_i?Hc||(Hc=requestAnimationFrame(_r)):_r(),is||Oo("scrollStart"),is=ii())},ym=function(){Bx=mt.innerWidth,Fx=mt.innerHeight},Lc=function(e){ut.cache++,(e===!0||!ni&&!Ox&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!Tm||Bx!==mt.innerWidth||Math.abs(mt.innerHeight-Fx)>mt.innerHeight*.25))&&Vf.restart(!0)},Uo={},Ew=[],qx=function s(){return Dn(ft,"scrollEnd",s)||Po(!0)},Oo=function(e){return Uo[e]&&Uo[e].map(function(t){return t()})||Ew},ki=[],Yx=function(e){for(var t=0;t<ki.length;t+=5)(!e||ki[t+4]&&ki[t+4].query===e)&&(ki[t].style.cssText=ki[t+1],ki[t].getBBox&&ki[t].setAttribute("transform",ki[t+2]||""),ki[t+3].uncache=1)},$x=function(){ut.cache++,ut.forEach(function(e){return si(e)&&(e.rec=e())})},Fm=function(e,t){var n;for(xi=0;xi<pt.length;xi++)n=pt[xi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Kr=!0,t&&Yx(t),t||Oo("revert")},Zx=function(e,t){ut.cache++,(t||!vi)&&ut.forEach(function(n){return si(n)&&n.cacheID++&&(n.rec=0)}),zi(e)&&(Im=e,mt.history.scrollRestoration!==e&&(mt.history.scrollRestoration=e))},vi,Lo=0,Ax,ww=function(){if(Ax!==Lo){var e=Ax=Lo;requestAnimationFrame(function(){return e===Lo&&Po(!0)})}},Jx=function(){At.appendChild(Ja),Dm=!_i&&Ja.offsetHeight||mt.innerHeight,At.removeChild(Ja)},Rx=function(e){return zc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Po=function(e,t){if(Hi=Rt.documentElement,At=Rt.body,Pm=[mt,Rt,Hi,At],is&&!e&&!Kr){Ln(ft,"scrollEnd",qx);return}Jx(),vi=ft.isRefreshing=!0,Kr||$x();var n=Oo("refreshInit");Ux&&ft.sort(),t||Fm(),ut.forEach(function(i){si(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),pt.slice(0).forEach(function(i){return i.refresh()}),Kr=!1,pt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),wm=1,Rx(!0),pt.forEach(function(i){var r=zs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Rx(!1),wm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){si(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Zx(Im,1),Vf.pause(),Lo++,vi=2,_r(2),pt.forEach(function(i){return si(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vi=ft.isRefreshing=!1,Oo("refresh")},Rm=0,kf=1,kc,_r=function(e){if(e===2||!vi&&!Kr){ft.isUpdating=!0,kc&&kc.update(0);var t=pt.length,n=ii(),i=n-vm>=50,r=t&&pt[0].scroll();if(kf=Rm>r?-1:1,vi||(Rm=r),i&&(is&&!Xf&&n-is>200&&(is=0,Oo("scrollEnd")),Cc=vm,vm=n),kf<0){for(xi=t;xi-- >0;)pt[xi]&&pt[xi].update(0,i);kf=1}else for(xi=0;xi<t;xi++)pt[xi]&&pt[xi].update(0,i);ft.isUpdating=!1}Hc=0},Cm=[Gx,Wx,Nm,Lm,ts+Bc,ts+Uc,ts+Fc,ts+Oc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zf=Cm.concat([Io,Do,"boxSizing","max"+Qa,"max"+Um,"position",ts,_n,_n+Fc,_n+Uc,_n+Bc,_n+Oc]),Aw=function(e,t,n){Ka(n);var i=e._gsap;if(i.spacerIsNative)Ka(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Sm=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Cm.length,o=t.style,a=e.style,l;r--;)l=Cm[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Nm]=a[Lm]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Io]=Gf(e,ti)+wn,o[Do]=Gf(e,gn)+wn,o[_n]=a[ts]=a[Wx]=a[Gx]="0",Ka(i),a[Io]=a["max"+Qa]=n[Io],a[Do]=a["max"+Um]=n[Do],a[_n]=n[_n],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Rw=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Rw,"-$1").toLowerCase())}},Nf=function(e){for(var t=zf.length,n=e.style,i=[],r=0;r<t;r++)i.push(zf[r],n[zf[r]]);return i.t=e,i},Cw=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Hf={left:0,top:0},Cx=function(e,t,n,i,r,o,a,l,c,h,f,d,u,p){si(e)&&(e=e(l)),zi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ff("0"+e.substr(3),n):0));var x=u?u.time():0,m,_,v;if(u&&u.seek(0),isNaN(e)||(e=+e),Dc(e))u&&(e=We.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&Bf(a,n,i,!0);else{si(t)&&(t=t(l));var T=(e||"0").split(" "),y,b,M,g;v=gi(t,l)||At,y=gr(v)||{},(!y||!y.left&&!y.top)&&ns(v).display==="none"&&(g=v.style.display,v.style.display="block",y=gr(v),g?v.style.display=g:v.style.removeProperty("display")),b=Ff(T[0],y[i.d]),M=Ff(T[1]||"0",n),e=y[i.p]-c[i.p]-h+b+r-M,a&&Bf(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+n,w=o._isStart;m="scroll"+i.d2,Bf(o,S,i,w&&S>20||!w&&(f?Math.max(At[m],Hi[m]):o.parentNode[m])<=S+1),f&&(c=gr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+wn))}return u&&v&&(m=gr(v),u.seek(d),_=gr(v),u._caScrollDist=m[i.p]-_[i.p],e=e/u._caScrollDist*d),u&&u.seek(x),u?e:Math.round(e)},Pw=/(webkit|moz|length|cssText|inset)/i,Px=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===At){e._stOrig=r.cssText,a=ns(e);for(o in a)!+o&&!Pw.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;We.core.getCache(e).uncache=1,t.appendChild(e)}},Kx=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Uf=function(e,t,n){var i={};i[t.p]="+="+n,We.set(e,i)},Ix=function(e,t){var n=pr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,p={};c=c||n();var x=Kx(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return x(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&_r()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=We.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ln(e,"wheel",n.wheelHandler),ft.isTouch&&Ln(e,"touchmove",n.wheelHandler),r},ft=(function(){function s(t,n){$a||s.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Em(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pc){this.update=this.refresh=this.kill=ks;return}n=Tx(zi(n)||Dc(n)||n.nodeType?{trigger:n}:n,Df);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,p=r.pinSpacing,x=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,b=r.pinReparent,M=r.pinSpacer,g=r.containerAnimation,S=r.fastScrollEnd,w=r.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ti:gn,D=!f&&f!==0,P=gi(n.scroller||mt),N=We.core.getCache(P),A=No(P),U=("pinType"in n?n.pinType:mr(P,"pinType")||A&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=D&&n.toggleActions.split(" "),Y="markers"in n?n.markers:Df.markers,W=A?0:parseFloat(ns(P)["border"+E.p2+Qa])||0,I=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(I)},de=yw(P,A,E),be=Sw(P,A),H=0,X=0,ue=0,ae=pr(P,E),fe,Se,Ge,Ce,Ve,ye,Pe,et,re,V,Me,Je,Be,ke,tt,je,z,it,j,oe,ee,Ke,Te,Oe,L,R,q,pe,ie,ge,xe,$,ne,me,F,se,te,Ee,ve;if(I._startClamp=I._endClamp=!1,I._dir=E,m*=45,I.scroller=P,I.scroll=g?g.time.bind(g):ae,Ce=ae(),Kr&&ae.rec==null&&(ae.rec=Ce),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ux=1,n.refreshPriority===-9999&&(kc=I)),N.tweenScroll=N.tweenScroll||{top:Ix(P,gn),left:Ix(P,ti)},I.tweenTo=fe=N.tweenScroll[E.p],I.scrubDuration=function(le){ne=Dc(le)&&le,ne?$?$.duration(le):$=We.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return _&&_(I)}}):($&&$.progress(1).kill(),$=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),ge=0,l||(l=i.vars.id)),y&&((!Co(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in At.style&&We.set(A?[At,Hi]:P,{scrollBehavior:"auto"}),ut.forEach(function(le){return si(le)&&le.target===(A?Rt.scrollingElement||Hi:P)&&(le.smooth=!1)}),Ge=si(y.snapTo)?y.snapTo:y.snapTo==="labels"?bw(i):y.snapTo==="labelsDirectional"?Tw(i):y.directional!==!1?function(le,Ie){return Om(y.snapTo)(le,ii()-X<500?0:Ie.direction)}:We.utils.snap(y.snapTo),me=y.duration||{min:.1,max:2},me=Co(me)?Nc(me.min,me.max):Nc(me,me),F=We.delayedCall(y.delay||ne/2||.1,function(){var le=ae(),Ie=ii()-X<500,ce=fe.tween;if((Ie||Math.abs(I.getVelocity())<10)&&!ce&&!Xf&&H!==le){var ze=(le-ye)/ke,_t=i&&!D?i.totalProgress():ze,at=Ie?0:(_t-xe)/(ii()-Cc)*1e3||0,zt=We.utils.clamp(-ze,1-ze,qa(at/2)*at/.185),un=ze+(y.inertia===!1?0:zt),Ht,Dt,wt=y,vn=wt.onStart,Lt=wt.onInterrupt,Vn=wt.onComplete;if(Ht=Ge(un,I),Dc(Ht)||(Ht=un),Dt=Math.max(0,Math.round(ye+Ht*ke)),le<=Pe&&le>=ye&&Dt!==le){if(ce&&!ce._initted&&ce.data<=qa(Dt-le))return;y.inertia===!1&&(zt=Ht-ze),fe(Dt,{duration:me(qa(Math.max(qa(un-_t),qa(Ht-_t))*.185/at/.05||0)),ease:y.ease||"power3",data:qa(Dt-le),onInterrupt:function(){return F.restart(!0)&&Lt&&Xa(I,Lt)},onComplete:function(){I.update(),H=ae(),i&&!D&&($?$.resetTo("totalProgress",Ht,i._tTime/i._tDur):i.progress(Ht)),ge=xe=i&&!D?i.totalProgress():I.progress,v&&v(I),Vn&&Xa(I,Vn)}},le,zt*ke,Dt-le-zt*ke),vn&&Xa(I,vn,fe.tween)}}else I.isActive&&H!==le&&F.restart(!0)}).pause()),l&&(Am[l]=I),d=I.trigger=gi(d||u!==!0&&u),ve=d&&d._gsap&&d._gsap.stRevert,ve&&(ve=ve(I)),u=u===!0?d:gi(u),zi(a)&&(a={targets:d,className:a}),u&&(p===!1||p===ts||(p=!p&&u.parentNode&&u.parentNode.style&&ns(u.parentNode).display==="flex"?!1:_n),I.pin=u,Se=We.core.getCache(u),Se.spacer?tt=Se.pinState:(M&&(M=gi(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),Se.spacerIsNative=!!M,M&&(Se.spacerState=Nf(M))),Se.spacer=it=M||Rt.createElement("div"),it.classList.add("pin-spacer"),l&&it.classList.add("pin-spacer-"+l),Se.pinState=tt=Nf(u)),n.force3D!==!1&&We.set(u,{force3D:!0}),I.spacer=it=Se.spacer,ie=ns(u),Oe=ie[p+E.os2],oe=We.getProperty(u),ee=We.quickSetter(u,E.a,wn),Sm(u,it,ie),z=Nf(u)),Y){Je=Co(Y)?Tx(Y,Ex):Ex,V=Lf("scroller-start",l,P,E,Je,0),Me=Lf("scroller-end",l,P,E,Je,0,V),j=V["offset"+E.op.d2];var we=gi(mr(P,"content")||P);et=this.markerStart=Lf("start",l,we,E,Je,j,0,g),re=this.markerEnd=Lf("end",l,we,E,Je,j,0,g),g&&(Ee=We.quickSetter([et,re],E.a,wn)),!U&&!(ys.length&&mr(P,"fixedMarkers")===!0)&&(Mw(A?At:P),We.set([V,Me],{force3D:!0}),R=We.quickSetter(V,E.a,wn),pe=We.quickSetter(Me,E.a,wn))}if(g){var _e=g.vars.onUpdate,Ae=g.vars.onUpdateParams;g.eventCallback("onUpdate",function(){I.update(0,0,1),_e&&_e.apply(g,Ae||[])})}if(I.previous=function(){return pt[pt.indexOf(I)-1]},I.next=function(){return pt[pt.indexOf(I)+1]},I.revert=function(le,Ie){if(!Ie)return I.kill(!0);var ce=le!==!1||!I.enabled,ze=ni;ce!==I.isReverted&&(ce&&(se=Math.max(ae(),I.scroll.rec||0),ue=I.progress,te=i&&i.progress()),et&&[et,re,V,Me].forEach(function(_t){return _t.style.display=ce?"none":"block"}),ce&&(ni=I,I.update(ce)),u&&(!b||!I.isActive)&&(ce?Aw(u,it,tt):Sm(u,it,ns(u),L)),ce||I.update(ce),ni=ze,I.isReverted=ce)},I.refresh=function(le,Ie,ce,ze){if(!((ni||!I.enabled)&&!Ie)){if(u&&le&&is){Ln(s,"scrollEnd",qx);return}!vi&&J&&J(I),ni=I,fe.tween&&!ce&&(fe.tween.kill(),fe.tween=0),$&&$.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Z){return Z.vars.immediateRender&&Z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var _t=de(),at=be(),zt=g?g.duration():zs(P,E),un=ke<=.01||!ke,Ht=0,Dt=ze||0,wt=Co(ce)?ce.end:n.end,vn=n.endTrigger||d,Lt=Co(ce)?ce.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),Vn=I.pinnedContainer=n.pinnedContainer&&gi(n.pinnedContainer,I),Ci=d&&Math.max(0,pt.indexOf(I))||0,Kt=Ci,fn,yn,Pi,ko,Sn,Qt,Vi,il,Zc,Sr,C,G,Q;for(Y&&Co(ce)&&(G=We.getProperty(V,E.p),Q=We.getProperty(Me,E.p));Kt-- >0;)Qt=pt[Kt],Qt.end||Qt.refresh(0,1)||(ni=I),Vi=Qt.pin,Vi&&(Vi===d||Vi===u||Vi===Vn)&&!Qt.isReverted&&(Sr||(Sr=[]),Sr.unshift(Qt),Qt.revert(!0,!0)),Qt!==pt[Kt]&&(Ci--,Kt--);for(si(Lt)&&(Lt=Lt(I)),Lt=yx(Lt,"start",I),ye=Cx(Lt,d,_t,E,ae(),et,V,I,at,W,U,zt,g,I._startClamp&&"_startClamp")||(u?-.001:0),si(wt)&&(wt=wt(I)),zi(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(zi(Lt)?Lt.split(" ")[0]:"")+wt:(Ht=Ff(wt.substr(2),_t),wt=zi(Lt)?Lt:(g?We.utils.mapRange(0,g.duration(),g.scrollTrigger.start,g.scrollTrigger.end,ye):ye)+Ht,vn=d)),wt=yx(wt,"end",I),Pe=Math.max(ye,Cx(wt||(vn?"100% 0":zt),vn,_t,E,ae()+Ht,re,Me,I,at,W,U,zt,g,I._endClamp&&"_endClamp"))||-.001,Ht=0,Kt=Ci;Kt--;)Qt=pt[Kt]||{},Vi=Qt.pin,Vi&&Qt.start-Qt._pinPush<=ye&&!g&&Qt.end>0&&(fn=Qt.end-(I._startClamp?Math.max(0,Qt.start):Qt.start),(Vi===d&&Qt.start-Qt._pinPush<ye||Vi===Vn)&&isNaN(Lt)&&(Ht+=fn*(1-Qt.progress)),Vi===u&&(Dt+=fn));if(ye+=Ht,Pe+=Ht,I._startClamp&&(I._startClamp+=Ht),I._endClamp&&!vi&&(I._endClamp=Pe||-.001,Pe=Math.min(Pe,zs(P,E))),ke=Pe-ye||(ye-=.01)&&.001,un&&(ue=We.utils.clamp(0,1,We.utils.normalize(ye,Pe,se))),I._pinPush=Dt,et&&Ht&&(fn={},fn[E.a]="+="+Ht,Vn&&(fn[E.p]="-="+ae()),We.set([et,re],fn)),u&&!(wm&&I.end>=zs(P,E)))fn=ns(u),ko=E===gn,Pi=ae(),Ke=parseFloat(oe(E.a))+Dt,!zt&&Pe>1&&(C=(A?Rt.scrollingElement||Hi:P).style,C={style:C,value:C["overflow"+E.a.toUpperCase()]},A&&ns(At)["overflow"+E.a.toUpperCase()]!=="scroll"&&(C.style["overflow"+E.a.toUpperCase()]="scroll")),Sm(u,it,fn),z=Nf(u),yn=gr(u,!0),il=U&&pr(P,ko?ti:gn)(),p?(L=[p+E.os2,ke+Dt+wn],L.t=it,Kt=p===_n?Gf(u,E)+ke+Dt:0,Kt&&(L.push(E.d,Kt+wn),it.style.flexBasis!=="auto"&&(it.style.flexBasis=Kt+wn)),Ka(L),Vn&&pt.forEach(function(Z){Z.pin===Vn&&Z.vars.pinSpacing!==!1&&(Z._subPinOffset=!0)}),U&&ae(se)):(Kt=Gf(u,E),Kt&&it.style.flexBasis!=="auto"&&(it.style.flexBasis=Kt+wn)),U&&(Sn={top:yn.top+(ko?Pi-ye:il)+wn,left:yn.left+(ko?il:Pi-ye)+wn,boxSizing:"border-box",position:"fixed"},Sn[Io]=Sn["max"+Qa]=Math.ceil(yn.width)+wn,Sn[Do]=Sn["max"+Um]=Math.ceil(yn.height)+wn,Sn[ts]=Sn[ts+Fc]=Sn[ts+Uc]=Sn[ts+Bc]=Sn[ts+Oc]="0",Sn[_n]=fn[_n],Sn[_n+Fc]=fn[_n+Fc],Sn[_n+Uc]=fn[_n+Uc],Sn[_n+Bc]=fn[_n+Bc],Sn[_n+Oc]=fn[_n+Oc],je=Cw(tt,Sn,b),vi&&ae(0)),i?(Zc=i._initted,_m(1),i.render(i.duration(),!0,!0),Te=oe(E.a)-Ke+ke+Dt,q=Math.abs(ke-Te)>1,U&&q&&je.splice(je.length-2,2),i.render(0,!0,!0),Zc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),_m(0)):Te=ke,C&&(C.value?C.style["overflow"+E.a.toUpperCase()]=C.value:C.style.removeProperty("overflow-"+E.a));else if(d&&ae()&&!g)for(yn=d.parentNode;yn&&yn!==At;)yn._pinOffset&&(ye-=yn._pinOffset,Pe-=yn._pinOffset),yn=yn.parentNode;Sr&&Sr.forEach(function(Z){return Z.revert(!1,!0)}),I.start=ye,I.end=Pe,Ce=Ve=vi?se:ae(),!g&&!vi&&!Kr&&(Ce<se&&ae(se),I.scroll.rec=0),I.revert(!1,!0),X=ii(),F&&(H=-1,F.restart(!0)),ni=0,i&&D&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(un||ue!==I.progress||g||x||i&&!i._initted)&&(i&&!D&&(i._initted||ue||i.vars.immediateRender!==!1)&&i.totalProgress(g&&ye<-.001&&!ue?We.utils.normalize(ye,Pe,0):ue,!0),I.progress=un||(Ce-ye)/ke===ue?0:ue),u&&p&&(it._pinOffset=Math.round(I.progress*Te)),$&&$.invalidate(),isNaN(G)||(G-=We.getProperty(V,E.p),Q-=We.getProperty(Me,E.p),Uf(V,E,G),Uf(et,E,G-(ze||0)),Uf(Me,E,Q),Uf(re,E,Q-(ze||0))),un&&!vi&&I.update(),h&&!vi&&!Be&&(Be=!0,h(I),Be=!1)}},I.getVelocity=function(){return(ae()-Ve)/(ii()-Cc)*1e3||0},I.endAnimation=function(){Rc(I.callbackAnimation),i&&($?$.progress(1):i.paused()?D||Rc(i,I.direction<0,1):Rc(i,i.reversed()))},I.labelToScroll=function(le){return i&&i.labels&&(ye||I.refresh()||ye)+i.labels[le]/i.duration()*ke||0},I.getTrailing=function(le){var Ie=pt.indexOf(I),ce=I.direction>0?pt.slice(0,Ie).reverse():pt.slice(Ie+1);return(zi(le)?ce.filter(function(ze){return ze.vars.preventOverlaps===le}):ce).filter(function(ze){return I.direction>0?ze.end<=ye:ze.start>=Pe})},I.update=function(le,Ie,ce){if(!(g&&!ce&&!le)){var ze=vi===!0?se:I.scroll(),_t=le?0:(ze-ye)/ke,at=_t<0?0:_t>1?1:_t||0,zt=I.progress,un,Ht,Dt,wt,vn,Lt,Vn,Ci;if(Ie&&(Ve=Ce,Ce=g?ae():ze,y&&(xe=ge,ge=i&&!D?i.totalProgress():at)),m&&u&&!ni&&!Rf&&is&&(!at&&ye<ze+(ze-Ve)/(ii()-Cc)*m?at=1e-4:at===1&&Pe>ze+(ze-Ve)/(ii()-Cc)*m&&(at=.9999)),at!==zt&&I.enabled){if(un=I.isActive=!!at&&at<1,Ht=!!zt&&zt<1,Lt=un!==Ht,vn=Lt||!!at!=!!zt,I.direction=at>zt?1:-1,I.progress=at,vn&&!ni&&(Dt=at&&!zt?0:at===1?1:zt===1?2:3,D&&(wt=!Lt&&B[Dt+1]!=="none"&&B[Dt+1]||B[Dt],Ci=i&&(wt==="complete"||wt==="reset"||wt in i))),w&&(Lt||Ci)&&(Ci||f||!i)&&(si(w)?w(I):I.getTrailing(w).forEach(function(Pi){return Pi.endAnimation()})),D||($&&!ni&&!Rf?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",at,i._tTime/i._tDur):($.vars.totalProgress=at,$.invalidate().restart())):i&&i.totalProgress(at,!!(ni&&(X||le)))),u){if(le&&p&&(it.style[p+E.os2]=Oe),!U)ee(Ic(Ke+Te*at));else if(vn){if(Vn=!le&&at>zt&&Pe+1>ze&&ze+1>=zs(P,E),b)if(!le&&(un||Vn)){var Kt=gr(u,!0),fn=ze-ye;Px(u,At,Kt.top+(E===gn?fn:0)+wn,Kt.left+(E===gn?0:fn)+wn)}else Px(u,it);Ka(un||Vn?je:z),q&&at<1&&un||ee(Ke+(at===1&&!Vn?Te:0))}}y&&!fe.tween&&!ni&&!Rf&&F.restart(!0),a&&(Lt||T&&at&&(at<1||!xm))&&zc(a.targets).forEach(function(Pi){return Pi.classList[un||T?"add":"remove"](a.className)}),o&&!D&&!le&&o(I),vn&&!ni?(D&&(Ci&&(wt==="complete"?i.pause().totalProgress(1):wt==="reset"?i.restart(!0).pause():wt==="restart"?i.restart(!0):i[wt]()),o&&o(I)),(Lt||!xm)&&(c&&Lt&&Xa(I,c),k[Dt]&&Xa(I,k[Dt]),T&&(at===1?I.kill(!1,1):k[Dt]=0),Lt||(Dt=at===1?1:3,k[Dt]&&Xa(I,k[Dt]))),S&&!un&&Math.abs(I.getVelocity())>(Dc(S)?S:2500)&&(Rc(I.callbackAnimation),$?$.progress(1):Rc(i,wt==="reverse"?1:!at,1))):D&&o&&!ni&&o(I)}if(pe){var yn=g?ze/g.duration()*(g._caScrollDist||0):ze;R(yn+(V._isFlipped?1:0)),pe(yn)}Ee&&Ee(-ze/g.duration()*(g._caScrollDist||0))}},I.enable=function(le,Ie){I.enabled||(I.enabled=!0,Ln(P,"resize",Lc),A||Ln(P,"scroll",Ya),J&&Ln(s,"refreshInit",J),le!==!1&&(I.progress=ue=0,Ce=Ve=H=ae()),Ie!==!1&&I.refresh())},I.getTween=function(le){return le&&fe?fe.tween:$},I.setPositions=function(le,Ie,ce,ze){if(g){var _t=g.scrollTrigger,at=g.duration(),zt=_t.end-_t.start;le=_t.start+zt*le/at,Ie=_t.start+zt*Ie/at}I.refresh(!1,!1,{start:Sx(le,ce&&!!I._startClamp),end:Sx(Ie,ce&&!!I._endClamp)},ze),I.update()},I.adjustPinSpacing=function(le){if(L&&le){var Ie=L.indexOf(E.d)+1;L[Ie]=parseFloat(L[Ie])+le+wn,L[1]=parseFloat(L[1])+le+wn,Ka(L)}},I.disable=function(le,Ie){if(le!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ie||$&&$.pause(),se=0,Se&&(Se.uncache=1),J&&Dn(s,"refreshInit",J),F&&(F.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!A)){for(var ce=pt.length;ce--;)if(pt[ce].scroller===P&&pt[ce]!==I)return;Dn(P,"resize",Lc),A||Dn(P,"scroll",Ya)}},I.kill=function(le,Ie){I.disable(le,Ie),$&&!Ie&&$.kill(),l&&delete Am[l];var ce=pt.indexOf(I);ce>=0&&pt.splice(ce,1),ce===xi&&kf>0&&xi--,ce=0,pt.forEach(function(ze){return ze.scroller===I.scroller&&(ce=1)}),ce||vi||Kr||(I.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Ie||i.kill()),et&&[et,re,V,Me].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),kc===I&&(kc=0),u&&(Se&&(Se.uncache=1),ce=0,pt.forEach(function(ze){return ze.pin===u&&ce++}),ce||(Se.spacer=0)),n.onKill&&n.onKill(I)},pt.push(I),I.enable(!1,!1),ve&&ve(I),i&&i.add&&!ke){var he=I.update;I.update=function(){I.update=he,ut.cache++,ye||Pe||I.refresh()},We.delayedCall(.01,I.update),ke=.01,ye=Pe=0}else I.refresh();u&&ww()},s.register=function(n){return $a||(We=n||zx(),kx()&&window.document&&s.enable(),$a=Pc),$a},s.defaults=function(n){if(n)for(var i in n)Df[i]=n[i];return Df},s.disable=function(n,i){Pc=0,pt.forEach(function(o){return o[i?"kill":"disable"](n)}),Dn(mt,"wheel",Ya),Dn(Rt,"scroll",Ya),clearInterval(Af),Dn(Rt,"touchcancel",ks),Dn(At,"touchstart",ks),Pf(Dn,Rt,"pointerdown,touchstart,mousedown",Mx),Pf(Dn,Rt,"pointerup,touchend,mouseup",bx),Vf.kill(),Cf(Dn);for(var r=0;r<ut.length;r+=3)If(Dn,ut[r],ut[r+1]),If(Dn,ut[r],ut[r+2])},s.enable=function(){if(mt=window,Rt=document,Hi=Rt.documentElement,At=Rt.body,We){if(zc=We.utils.toArray,Nc=We.utils.clamp,Em=We.core.context||ks,_m=We.core.suppressOverwrites||ks,Im=mt.history.scrollRestoration||"auto",Rm=mt.pageYOffset||0,We.core.globals("ScrollTrigger",s),At){Pc=1,Ja=document.createElement("div"),Ja.style.height="100vh",Ja.style.position="absolute",Jx(),vw(),rn.register(We),s.isTouch=rn.isTouch,Jr=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Tm=rn.isTouch===1,Ln(mt,"wheel",Ya),Pm=[mt,Rt,Hi,At],We.matchMedia?(s.matchMedia=function(h){var f=We.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},We.addEventListener("matchMediaInit",function(){$x(),Fm()}),We.addEventListener("matchMediaRevert",function(){return Yx()}),We.addEventListener("matchMedia",function(){Po(0,1),Oo("matchMedia")}),We.matchMedia().add("(orientation: portrait)",function(){return ym(),ym})):console.warn("Requires GSAP 3.11.0 or later"),ym(),Ln(Rt,"scroll",Ya);var n=At.hasAttribute("style"),i=At.style,r=i.borderTopStyle,o=We.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=gr(At),gn.m=Math.round(a.top+gn.sc())||0,ti.m=Math.round(a.left+ti.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),Af=setInterval(wx,250),We.delayedCall(.5,function(){return Rf=0}),Ln(Rt,"touchcancel",ks),Ln(At,"touchstart",ks),Pf(Ln,Rt,"pointerdown,touchstart,mousedown",Mx),Pf(Ln,Rt,"pointerup,touchend,mouseup",bx),bm=We.utils.checkPrefix("transform"),zf.push(bm),$a=ii(),Vf=We.delayedCall(.2,Po).pause(),Za=[Rt,"visibilitychange",function(){var h=mt.innerWidth,f=mt.innerHeight;Rt.hidden?(xx=h,vx=f):(xx!==h||vx!==f)&&Lc()},Rt,"DOMContentLoaded",Po,mt,"load",Po,mt,"resize",Lc],Cf(Ln),pt.forEach(function(h){return h.enable(0,1)}),l=0;l<ut.length;l+=3)If(Dn,ut[l],ut[l+1]),If(Dn,ut[l],ut[l+2])}else if(Rt){var c=function h(){s.enable(),Rt.removeEventListener("DOMContentLoaded",h)};Rt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(xm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Af)||(Af=i)&&setInterval(wx,i),"ignoreMobileResize"in n&&(Tm=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Cf(Dn)||Cf(Ln,n.autoRefreshEvents||"none"),Ox=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=gi(n),o=ut.indexOf(r),a=No(r);~o&&ut.splice(o,a?6:2),i&&(a?ys.unshift(mt,i,At,i,Hi,i):ys.unshift(r,i))},s.clearMatchMedia=function(n){pt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(zi(n)?gi(n):n).getBoundingClientRect(),a=o[r?Io:Do]*i||0;return r?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},s.positionInViewport=function(n,i,r){zi(n)&&(n=gi(n));var o=n.getBoundingClientRect(),a=o[r?Io:Do],l=i==null?a/2:i in Wf?Wf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},s.killAll=function(n){if(pt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Uo.killAll||[];Uo={},i.forEach(function(r){return r()})}},s})();ft.version="3.15.1";ft.saveStyles=function(s){return s?zc(s).forEach(function(e){if(e&&e.style){var t=ki.indexOf(e);t>=0&&ki.splice(t,5),ki.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),We.core.getCache(e),Em())}}):ki};ft.revert=function(s,e){return Fm(!s,e)};ft.create=function(s,e){return new ft(s,e)};ft.refresh=function(s){return s?Lc(!0):($a||ft.register())&&Po(!0)};ft.update=function(s){return++ut.cache&&_r(s===!0?2:0)};ft.clearScrollMemory=Zx;ft.maxScroll=function(s,e){return zs(s,e?ti:gn)};ft.getScrollFunc=function(s,e){return pr(gi(s),e?ti:gn)};ft.getById=function(s){return Am[s]};ft.getAll=function(){return pt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!is};ft.snapDirectional=Om;ft.addEventListener=function(s,e){var t=Uo[s]||(Uo[s]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(s,e){var t=Uo[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=We.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(p){f.length||u.restart(!0),f.push(p.trigger),d.push(p),r<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&si(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return si(r)&&(r=r(),Ln(ft,"refresh",function(){return r=e.batchMax()})),zc(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ft.create(c))}),t};var Dx=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Mm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Hi&&s(At,t)},Of={auto:1,scroll:1},Iw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||We.core.getCache(r),a=ii(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Of[(l=ns(r)).overflowY]||Of[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!No(r)&&(Of[(l=ns(r)).overflowY]||Of[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Qx=function(e,t,n,i){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Iw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ln(Rt,rn.eventTypes[0],Nx,!1,!0)},onDisable:function(){return Dn(Rt,rn.eventTypes[0],Nx,!0)}})},Dw=/(input|label|select|textarea)/i,Lx,Nx=function(e){var t=Dw.test(e.target.tagName);(t||Lx)&&(e._gsapAllow=!0,Lx=t)},Lw=function(e){Co(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=gi(e.target)||Hi,h=We.core.globals().ScrollSmoother,f=h&&h.get(),d=Jr&&(e.content&&gi(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=pr(c,gn),p=pr(c,ti),x=1,m=(rn.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,_=0,v=si(i)?function(){return i(a)}:function(){return i||2.8},T,y,b=Qx(c,e.type,!0,r),M=function(){return y=!1},g=ks,S=ks,w=function(){l=zs(c,gn),S=Nc(Jr?1:0,l),n&&(g=Nc(0,zs(c,ti))),T=Lo},E=function(){d._gsap.y=Ic(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(M);var Y=Ic(a.deltaY/2),W=S(u.v-Y);if(d&&W!==u.v+u.offset){u.offset=W-u.v;var I=Ic((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",u.cacheID=ut.cache,_r()}return!0}u.offset&&E(),y=!0},P,N,A,U,k=function(){w(),P.isActive()&&P.vars.scrollY>l&&(u()>l?P.progress(1)&&u(l):P.resetTo("scrollY",l))};return d&&We.set(d,{y:"+=0"}),e.ignoreCheck=function(B){return Jr&&B.type==="touchmove"&&D(B)||x>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){y=!1;var B=x;x=Ic((mt.visualViewport&&mt.visualViewport.scale||1)/m),P.pause(),B!==x&&Mm(c,x>1.01?!0:n?!1:"x"),N=p(),A=u(),w(),T=Lo},e.onRelease=e.onGestureStart=function(B,Y){if(u.offset&&E(),!Y)U.restart(!0);else{ut.cache++;var W=v(),I,J;n&&(I=p(),J=I+W*.05*-B.velocityX/.227,W*=Dx(p,I,J,zs(c,ti)),P.vars.scrollX=g(J)),I=u(),J=I+W*.05*-B.velocityY/.227,W*=Dx(u,I,J,zs(c,gn)),P.vars.scrollY=S(J),P.invalidate().duration(W).play(.01),(Jr&&P.vars.scrollY>=l||I>=l-1)&&We.to({},{onUpdate:k,duration:W})}o&&o(B)},e.onWheel=function(){P._ts&&P.pause(),ii()-_>1e3&&(T=0,_=ii())},e.onChange=function(B,Y,W,I,J){if(Lo!==T&&w(),Y&&n&&p(g(I[2]===Y?N+(B.startX-B.x):p()+Y-I[1])),W){u.offset&&E();var de=J[2]===W,be=de?A+B.startY-B.y:u()+W-J[1],H=S(be);de&&be!==H&&(A+=H-be),u(H)}(W||Y)&&_r()},e.onEnable=function(){Mm(c,n?!1:"x"),ft.addEventListener("refresh",k),Ln(mt,"resize",k),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),b.enable()},e.onDisable=function(){Mm(c,!0),Dn(mt,"resize",k),ft.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=Jr,Jr&&!u()&&u(1),Jr&&We.ticker.add(ks),U=a._dc,P=We.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Kx(u,u(),function(){return P.pause()})},onUpdate:_r,onComplete:U.vars.onComplete}),a};ft.sort=function(s){if(si(s))return pt.sort(s);var e=mt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+mt.innerHeight}),pt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(s){return new rn(s)};ft.normalizeScroll=function(s){if(typeof s>"u")return _i;if(s===!0&&_i)return _i.enable();if(s===!1){_i&&_i.kill(),_i=s;return}var e=s instanceof rn?s:Lw(s);return _i&&_i.target===e.target&&_i.kill(),No(e.target)&&(_i=e),e};ft.core={_getVelocityProp:wf,_inputObserver:Qx,_scrollers:ut,_proxies:ys,bridge:{ss:function(){is||Oo("scrollStart"),is=ii()},ref:function(){return ni}}};zx()&&We.registerPlugin(ft);var Vc,Gc,jx=typeof Symbol=="function"?Symbol():"_split",km,Nw=()=>km||$f.register(window.gsap),ev=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Wc=s=>s?typeof s=="string"?Wc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...Wc(t)):e.push(t),e),[]):[s]:[],tv=s=>Wc(s).filter(e=>e&&e.nodeType===1),qf=[],Bm=function(){},Uw={add:s=>s()},Ow=/\s+/g,nv=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Yf={left:0,top:0,width:0,height:0},Fw=(s,e)=>{for(;++e<s.length&&s[e]===Yf;);return s[e]||Yf},iv=({element:s,html:e,ariaL:t,ariaH:n})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},sv=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||qf),n=s.length,i,r,o,a;if(t.size)for(;--n>-1;){r=s[n];for(o of t)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},rv=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),ja=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),zm=(s,e,t)=>{let n=e[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=e,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let f=document.createElement(i),d=t.length+1;return n&&(f.className=n+(l?" "+n+d:"")),o&&f.style.setProperty("--"+s,d+""),r!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=h,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},Bw=(s,e,t,n)=>{let i=zm("line",t,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},ov=(s,e,t,n,i,r,o,a,l,c)=>{var h;let f=Array.from(s.childNodes),d=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:x}=e,m=s.getBoundingClientRect(),_=m,v=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",T=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=t.collection,M,g,S,w,E,D,P,N,A,U,k,B,Y,W,I,J,de,be;for(typeof u=="object"?(S=u.delimiter||u,g=u.replaceWith||""):g=u===""?"":u||" ",M=g!==" ";d<f.length;d++)if(w=f[d],w.nodeType===3){for(I=w.textContent||"",p?I=I.replace(Ow," "):v&&(I=I.replace(/\n/g,g+`
`)),x&&(I=x(I,s)),w.textContent=I,E=g||S?I.split(S||g):I.match(a)||qf,de=E[E.length-1],N=M?de.slice(-1)===" ":!de,de||E.pop(),_=m,P=M?E[0].charAt(0)===" ":!E[0],P&&ja(" ",s,w),E[0]||E.shift(),sv(E,l),r&&c||(w.textContent=""),A=1;A<=E.length;A++)if(J=E[A-1],!p&&v&&J.charAt(0)===`
`&&((h=w.previousSibling)==null||h.remove(),ja(document.createElement("br"),s,w),J=J.slice(1)),!p&&J==="")ja(g,s,w);else if(J===" ")s.insertBefore(document.createTextNode(" "),w);else{if(M&&J.charAt(0)===" "&&ja(" ",s,w),y&&A===1&&!P&&b.indexOf(y.parentNode)>-1?(D=b[b.length-1],D.appendChild(document.createTextNode(n?"":J))):(D=t(n?"":J),ja(D,s,w),y&&A===1&&!P&&D.insertBefore(y,D.firstChild)),n){if(k=ev?sv([...ev.segment(J)].map(H=>H.segment),l):J.match(a)||qf,l){let H=J.match(l);H&&H.some(X=>k.indexOf(X)<0)&&(k=J.match(a)||qf)}for(be=0;be<k.length;be++)D.appendChild(k[be]===" "?document.createTextNode(" "):n(k[be]))}if(r&&c){if(I=w.textContent=I.substring(J.length+1,I.length),U=D.getBoundingClientRect(),U.top>_.top&&(T?U.left>=_.left:U.left<=_.left)){for(B=s.cloneNode(),Y=s.childNodes[0];Y&&Y!==D;)W=Y,Y=Y.nextSibling,B.appendChild(W);s.parentNode.insertBefore(B,s),i&&rv(B)}_=U}(A<E.length||N)&&ja(A>=E.length?" ":M&&J.slice(-1)===" "?" "+g:g,s,w)}s.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(b.indexOf(w.previousSibling)>-1&&b[b.length-1].appendChild(w),y=w):(ov(w,e,t,n,i,r,o,a,l,!0),y=0),i&&rv(w))},av=class lv{constructor(e,t){this.isSplit=!1,Nw(),this.elements=tv(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(r=>{var o;t.overwrite!==!1&&((o=r[jx])==null||o._data.orig.filter(({element:a})=>a===r).forEach(iv)),r[jx]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Bm(this),this.split(t)}split(e){return(this._ctx||Uw).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,d=t.indexOf("words")>-1,u=f&&!d&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),x=p?new RegExp(p.source+"|"+nv.source,"gu"):nv,m=!!e.ignore&&tv(e.ignore),{orig:_,animTime:v,obs:T}=this._data,y;(f||d||h)&&(this.elements.forEach((b,M)=>{_[M]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let g=[],S=[],w=[],E=f?zm("char",e,g):null,D=zm("word",e,S),P,N,A,U;if(ov(b,e,D,E,u,i&&(h||u),m,x,p,!1),h){let k=Wc(b.childNodes),B=Bw(b,k,e,w),Y,W=[],I=0,J=window.getComputedStyle(b).direction==="rtl",de=k.map(X=>X.nodeType===1?X.getBoundingClientRect():Yf),be=Yf,H;for(P=0;P<k.length;P++)Y=k[P],Y.nodeType===1&&(Y.nodeName==="BR"?((!P||k[P-1].nodeName!=="BR")&&(W.push(Y),B(I,P+1)),I=P+1,be=Fw(de,P)):(H=de[P],P&&H.top>be.top&&(J?H.left+H.width>be.left+1:H.left<be.left+be.width-1)&&(B(I,P),I=P),be=H));I<P&&B(I,P),W.forEach(X=>{var ue;return(ue=X.parentNode)==null?void 0:ue.removeChild(X)})}if(!d){for(P=0;P<S.length;P++)if(N=S[P],f||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!h){for(A=document.createElement("span"),A.style.whiteSpace="nowrap";N.firstChild;)A.appendChild(N.firstChild);N.replaceWith(A)}else N.replaceWith(...N.childNodes);else U=N.nextSibling,U&&U.nodeType===3&&(U.textContent=(N.textContent||"")+(U.textContent||""),N.remove());S.length=0,b.normalize()}this.lines.push(...w),this.words.push(...S),this.chars.push(...g)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let M=b.cloneNode();return b.replaceWith(M),M.appendChild(b),b.className&&(M.className=b.className.trim().split(" ").map(g=>g+"-mask").join(" ")),M.style.overflow="clip",M.style.verticalAlign="top",M}))),this.isSplit=!0,Gc&&h&&a&&Gc.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,M)=>{_[M].width=b.offsetWidth,T&&T.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),Gc?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(iv),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new lv(e,t)}static register(e){Vc=Vc||e||window.gsap,Vc&&(Wc=Vc.utils.toArray,Bm=Vc.core.context||Bm),!km&&window.innerWidth>0&&(Gc=document.fonts,km=!0)}};av.version="3.15.1";var $f=av;var cv="1.3.28";function fv(s,e,t){return Math.max(s,Math.min(e,t))}function kw(s,e,t){return(1-t)*s+t*e}function zw(s,e,t,n){return kw(s,e,1-Math.exp(-t*n))}function Hw(s,e){return(s%e+e)%e}var Vw=class{constructor(){qe(this,"isRunning",!1);qe(this,"value",0);qe(this,"from",0);qe(this,"to",0);qe(this,"currentTime",0);qe(this,"lerp");qe(this,"duration");qe(this,"easing");qe(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=fv(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=zw(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Gw(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var Ww=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){qe(this,"wrapper");qe(this,"content");qe(this,"width",0);qe(this,"height",0);qe(this,"scrollHeight",0);qe(this,"scrollWidth",0);qe(this,"debouncedResize");qe(this,"wrapperResizeObserver");qe(this,"contentResizeObserver");qe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});qe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});qe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Gw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},dv=class{constructor(){qe(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Xw=100/6,Qr={passive:!1};function hv(s,e){return s===1?Xw:s===2?e:1}var qw=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){qe(this,"element");qe(this,"options");qe(this,"touchStart",{x:0,y:0});qe(this,"lastDelta",{x:0,y:0});qe(this,"window",{width:0,height:0});qe(this,"emitter",new dv);qe(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});qe(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});qe(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});qe(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s,i=hv(n,this.window.width),r=hv(n,this.window.height);e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});qe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Qr),this.element.addEventListener("touchstart",this.onTouchStart,Qr),this.element.addEventListener("touchmove",this.onTouchMove,Qr),this.element.addEventListener("touchend",this.onTouchEnd,Qr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Qr),this.element.removeEventListener("touchstart",this.onTouchStart,Qr),this.element.removeEventListener("touchmove",this.onTouchMove,Qr),this.element.removeEventListener("touchend",this.onTouchEnd,Qr)}},uv=s=>Math.min(1,1.001-2**(-10*s)),pv=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:x=!0,prevent:m,virtualScroll:_,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:g=!1,naiveDimensions:S=g,stopInertiaOnNavigate:w=!1,respectReducedMotion:E=!0}={}){qe(this,"_isScrolling",!1);qe(this,"_isStopped",!1);qe(this,"_isLocked",!1);qe(this,"_preventNextNativeScrollEvent",!1);qe(this,"_resetVelocityTimeout",null);qe(this,"_rafId",null);qe(this,"_isDraggingSelection",!1);qe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));qe(this,"isTouching");qe(this,"isIos");qe(this,"time",0);qe(this,"userData",{});qe(this,"lastVelocity",0);qe(this,"velocity",0);qe(this,"direction",0);qe(this,"options");qe(this,"targetScroll");qe(this,"animatedScroll");qe(this,"animate",new Vw);qe(this,"emitter",new dv);qe(this,"dimensions");qe(this,"virtualScroll");qe(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});qe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});qe(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});qe(this,"onClick",s=>{let e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){let n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});qe(this,"onPointerDown",s=>{s.button===1&&this.reset()});qe(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let d=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});qe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});qe(this,"raf",s=>{let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=cv,window.lenis||(window.lenis={}),window.lenis.version=cv,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=uv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:p,autoResize:x,prevent:m,virtualScroll:_,overscroll:v,autoRaf:T,anchors:y,autoToggle:b,allowNestedScroll:M,naiveDimensions:S,stopInertiaOnNavigate:w,respectReducedMotion:E},this.dimensions=new Ww(s,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new qw(t,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=s,u=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(p=d),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let x=p.getBoundingClientRect(),m=getComputedStyle(p),_=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);d=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(T)?0:T)}}if(typeof d=="number"){if(d+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=fv(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=uv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,f,d,u,p;if(n-(i.time??0)>2e3){i.time=Date.now();let M=window.getComputedStyle(s);if(i.computedStyle=M,r=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;f=s.scrollWidth,d=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=f>u,l=d>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,_,v,T,y,b;if(x==="horizontal")m=Math.round(s.scrollLeft),_=f-u,v=e,T=r,y=a,b=c;else if(x==="vertical")m=Math.round(s.scrollTop),_=d-p,v=t,T=o,y=l,b=h;else return!1;return!b&&(m>=_||m<=0)?!0:(v>0?m<_:m>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Hw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var Xc=new O;function ss(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Xc.copy(e),Xc[n]=0,Xc.normalize();let c=.5*o/(o+a),h=1-Xc.angleTo(s)/l;return Math.sign(Xc[t])===1?h*c:a/(o+a)+c+c*(1-h)}var xn=class s extends Fn{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new O,c=new O,h=new O(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=f.length/6,x=new O,m=.5/o;for(let _=0,v=0;_<f.length;_+=3,v+=2)switch(l.fromArray(f,_),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[_+0]=h.x*Math.sign(l.x)+c.x*r,f[_+1]=h.y*Math.sign(l.y)+c.y*r,f[_+2]=h.z*Math.sign(l.z)+c.z*r,d[_+0]=c.x,d[_+1]=c.y,d[_+2]=c.z,Math.floor(_/p)){case 0:x.set(1,0,0),u[v+0]=ss(x,c,"z","y",r,n),u[v+1]=1-ss(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),u[v+0]=1-ss(x,c,"z","y",r,n),u[v+1]=1-ss(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),u[v+0]=1-ss(x,c,"x","z",r,e),u[v+1]=ss(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),u[v+0]=1-ss(x,c,"x","z",r,e),u[v+1]=1-ss(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),u[v+0]=1-ss(x,c,"x","y",r,e),u[v+1]=1-ss(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),u[v+0]=ss(x,c,"x","y",r,e),u[v+1]=1-ss(x,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function jr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Jf(s,e,t=5){let n=document.createElement("canvas");n.width=n.height=s;let i=n.getContext("2d"),r=i.createImageData(s,s),o=jr(e),a=[];for(let l=0;l<t;l++){let c=4<<l,h=new Float32Array((c+1)*(c+1));for(let f=0;f<h.length;f++)h[f]=o();for(let f=0;f<=c;f++)h[f*(c+1)+c]=h[f*(c+1)],h[c*(c+1)+f]=h[f];a.push([c,h])}for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0,f=.5,d=0;for(let[x,m]of a){let _=c/s*x,v=l/s*x,T=_|0,y=v|0,b=_-T,M=v-y,g=b*b*(3-2*b),S=M*M*(3-2*M),w=x+1,E=m[y*w+T]*(1-g)+m[y*w+T+1]*g,D=m[(y+1)*w+T]*(1-g)+m[(y+1)*w+T+1]*g;h+=(E*(1-S)+D*S)*f,d+=f,f*=.5}let u=(l*s+c)*4,p=h/d*255;r.data[u]=r.data[u+1]=r.data[u+2]=p,r.data[u+3]=255}return i.putImageData(r,0,0),n}function mv(s,e=2.5){let t=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,t,n).data,r=document.createElement("canvas");r.width=t,r.height=n;let o=r.getContext("2d"),a=o.createImageData(t,n),l=a.data,c=(h,f)=>i[((f+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let f=0;f<t;f++){let d=(c(f+1,h)-c(f-1,h))*e,u=(c(f,h+1)-c(f,h-1))*e,p=Math.hypot(d,u,1),x=(h*t+f)*4;l[x]=(-d/p*.5+.5)*255,l[x+1]=(u/p*.5+.5)*255,l[x+2]=(1/p*.5+.5)*255,l[x+3]=255}return o.putImageData(a,0,0),r}function Zf(s,e){let t=new On(s);return t.wrapS=t.wrapT=Si,t.anisotropy=8,e&&(t.colorSpace=Vt),t}function Vm({w:s=1024,h:e=512,rows:t=4,seed:n=1}={}){let i=jr(n),r=document.createElement("canvas"),o=document.createElement("canvas"),a=document.createElement("canvas");for(let _ of[r,o,a])_.width=s,_.height=e;let l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d");l.fillStyle="#7a5a3c",l.fillRect(0,0,s,e),c.fillStyle="#1a1a1a",c.fillRect(0,0,s,e),h.fillStyle="#f2f2f2",h.fillRect(0,0,s,e);let f=e/t,d=5;for(let _=0;_<t;_++){let v=-i()*120;for(;v<s;){let T=110+i()*150,y=v+d/2,b=_*f+d/2,M=T-d,g=f-d,S=30+i()*8,w=36+i()*14,E=60+i()*12,D=l.createLinearGradient(0,b,0,b+g);D.addColorStop(0,`hsl(${S},${w}%,${E+4}%)`),D.addColorStop(.75,`hsl(${S},${w}%,${E}%)`),D.addColorStop(1,`hsl(${S-4},${w-6}%,${E-12}%)`),l.fillStyle=D,Hm(l,y,b,M,g,7),l.fill();let P=150+i()*60;for(let N=0;N<6;N++){let A=Math.min(255,P*(.55+N*.09))|0;c.fillStyle=`rgb(${A},${A},${A})`,Hm(c,y+N*1.6,b+N*1.6,M-N*3.2,g-N*3.2,7),c.fill()}h.fillStyle=`rgb(${200+i()*40|0},${200+i()*40|0},${200+i()*40|0})`,Hm(h,y,b,M,g,7),h.fill();for(let N=0;N<2;N++){let A=y+i()*M,U=i()<.5?b+i()*5:b+g-i()*5,k=3+i()*6;c.fillStyle="#5a5a5a",l.fillStyle=`hsla(${S},${w}%,${E-10}%,.7)`;for(let B of[c,l]){B.beginPath();for(let Y=0;Y<7;Y++){let W=k*(.5+i()*.7),I=Y/7*Math.PI*2;B.lineTo(A+Math.cos(I)*W*1.6,U+Math.sin(I)*W*.7)}B.closePath(),B.fill()}}v+=T}}let u=Jf(128,n+7,5),p=Jf(256,n+13,4);l.globalCompositeOperation="multiply",l.globalAlpha=.35,l.drawImage(u,0,0,s,e),l.globalAlpha=.25,l.drawImage(p,0,0,s,e),l.globalCompositeOperation="overlay",l.globalAlpha=.25,l.drawImage(p,0,0,s/2,e/2),l.drawImage(p,s/2,0,s/2,e/2),l.drawImage(p,0,e/2,s/2,e/2),l.drawImage(p,s/2,e/2,s/2,e/2),l.globalCompositeOperation="source-over",l.globalAlpha=1,c.globalCompositeOperation="overlay",c.globalAlpha=.6,c.drawImage(p,0,0,s,e),c.globalAlpha=1,c.globalCompositeOperation="source-over";let x=l.getImageData(0,0,s,e),m=c.getImageData(0,0,s,e);for(let _=0;_<s*e*.008;_++){let v=(i()*s*e|0)*4,T=.7+i()*.2;x.data[v]*=T,x.data[v+1]*=T,x.data[v+2]*=T,m.data[v]=m.data[v+1]=m.data[v+2]=m.data[v]*.6}return l.putImageData(x,0,0),c.putImageData(m,0,0),{map:Zf(r,!0),normalMap:Zf(mv(o,3.2),!1),roughnessMap:Zf(a,!1)}}function gv(s=4){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=Jf(128,s,4),r=n.createImageData(512,512),o=i.getContext("2d").getImageData(0,0,128,128).data;for(let a=0;a<512;a++)for(let l=0;l<512;l++){let c=o[((a>>2&127)*128+(l>>2&127))*4]/255,h=.5+.5*Math.sin((a+c*70)*.19+Math.sin(l*.02)*2),f=(a*512+l)*4,d=(h*.75+Math.random()*.25)*255;r.data[f]=r.data[f+1]=r.data[f+2]=d,r.data[f+3]=255}return n.putImageData(r,0,0),Zf(mv(t,1.6),!1)}function _v(s=9){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=jr(s);n.fillStyle="#e9e2cf",n.fillRect(0,0,512,512),n.globalCompositeOperation="multiply",n.globalAlpha=.6,n.drawImage(Jf(64,s,4),0,0,512,512),n.globalAlpha=1;for(let o=0;o<9;o++)n.fillStyle="rgba(120,115,110,.35)",n.beginPath(),n.ellipse(i()*512,i()*512,30+i()*80,20+i()*60,i()*3,0,7),n.fill();n.globalCompositeOperation="source-over";for(let o=0;o<70;o++){let a=i()*512,l=i()*512,c=2+i()*i()*22;n.fillStyle="rgba(90,85,80,.35)",n.beginPath(),n.arc(a,l,c,0,7),n.fill(),n.strokeStyle="rgba(255,250,235,.35)",n.lineWidth=1.2,n.beginPath(),n.arc(a-c*.15,l-c*.15,c,Math.PI*.9,Math.PI*1.8),n.stroke()}let r=new On(t);return r.colorSpace=Vt,r}function Hm(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+n,t,r),s.closePath()}var on={night:660019,lapis:1916863,faience:3134406,gold:15316044,sand:14267266,stone:13146723,terracotta:11883311,ink:724770},hn=[28,23.5,19,14.5,10,5.5],yi=2.6,Hs=2.25,rs=s=>s===0?0:s*yi,os=(s,e={})=>new Ir({color:s,roughness:.85,metalness:0,...e}),Ri=(s,e=2.6)=>new Mn({color:new Ue(s).multiplyScalar(e),toneMapped:!1});function Yw(s,e=1024,t=512){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d"),r=jr(s);i.fillStyle="#000",i.fillRect(0,0,e,t),i.strokeStyle="#fff",i.fillStyle="#fff",i.lineWidth=3,i.lineCap="round";for(let l=0;l<6;l++){let c=r()*e,h=t*(.2+r()*.6);i.beginPath(),i.moveTo(c,h);for(let f=0;f<5;f++)f%2?h=Math.max(20,Math.min(t-20,h+(r()-.5)*200)):c+=(r()-.3)*260,i.lineTo(c,h);i.stroke(),i.beginPath(),i.arc(c,h,8,0,Math.PI*2),i.fill()}i.font="bold 48px monospace";let o=["{ }","</>","=>","::","&&","[ ]","#",";","01","\u03BB"];for(let l=0;l<4;l++)i.fillText(o[r()*o.length|0],r()*(e-100),60+r()*(t-80));let a=new On(n);return a.wrapS=a.wrapT=Si,a}var el=(s,e,t)=>{let n={};for(let i in s){let r=s[i].clone();r.repeat.set(e,t),r.needsUpdate=!0,n[i]=r}return n};function xv(s,{w:e=512,h:t=160,font:n="700 64px Unbounded, sans-serif",fg:i="#f6ead2",bg:r="rgba(10,18,51,.92)",border:o="#e9b44c",radius:a=70,sub:l}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let h=c.getContext("2d");return((d,u,p,x,m)=>{h.beginPath(),h.moveTo(d+m,u),h.arcTo(d+p,u,d+p,u+x,m),h.arcTo(d+p,u+x,d,u+x,m),h.arcTo(d,u+x,d,u,m),h.arcTo(d,u,d+p,u,m),h.closePath()})(6,6,e-12,t-12,Math.min(a,(t-12)/2)),h.fillStyle=r,h.fill(),h.lineWidth=6,h.strokeStyle=o,h.stroke(),h.fillStyle=i,h.textAlign="center",h.textBaseline="middle",h.font=n,h.fillText(s,e/2,l?t*.4:t/2+2),l&&(h.font='500 30px "Instrument Sans", sans-serif',h.globalAlpha=.75,h.fillText(l,e/2,t*.72)),c}function vv(s,e,t,n="high"){let i={updaters:[],props:{},clickables:[]},r=g=>i.updaters.push(g),o=n==="high",a=new O(-.55,.32,-.77).normalize(),l=new Pt({side:Bn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ue(132378)},mid:{value:new Ue(857927)},hor:{value:new Ue(4862290)},moonDir:{value:a}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
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
        gl_FragColor = vec4(c,1.); }`});s.add(new Re(new mn(600,48,24),l));{let S=new Float32Array(9600),w=new Float32Array(3200),E=jr(7);for(let N=0;N<3200;N++){let A=E()*Math.PI*2,U=.04+E()*.96,k=Math.sqrt(1-U*U);S.set([Math.cos(A)*k*520,U*520,Math.sin(A)*k*520],N*3),w[N]=E()*6.28}let D=new Yt;D.setAttribute("position",new Un(S,3)),D.setAttribute("ph",new Un(w,1));let P=new Pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},px:{value:Math.min(devicePixelRatio,2)}},vertexShader:"attribute float ph; uniform float t,px; varying float a; varying vec3 col; void main(){ a = .4+.6*sin(t*1.7+ph*3.); float s = fract(ph*7.13); col = mix(vec3(1.,.93,.82), vec3(.8,.88,1.), fract(ph*3.7)); gl_PointSize = (0.9+s*s*2.6)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float a; varying vec3 col; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(col, a*smoothstep(.5,.0,d)); }"});s.add(new co(D,P)),r(N=>P.uniforms.t.value=N)}{let g=new Re(new mn(15,48,48),new Mn({map:_v(),color:new Ue(1.35,1.3,1.2),toneMapped:!1,fog:!1}));g.position.copy(a).multiplyScalar(300),g.rotation.y=1.2,s.add(g);let S=document.createElement("canvas");S.width=S.height=256;let w=S.getContext("2d"),E=w.createRadialGradient(128,128,14,128,128,128);E.addColorStop(0,"rgba(255,236,200,.5)"),E.addColorStop(.3,"rgba(150,165,255,.14)"),E.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=E,w.fillRect(0,0,256,256);let D=new Rr(new js({map:new On(S),transparent:!0,depthWrite:!1,fog:!1}));D.scale.setScalar(160),D.position.copy(g.position),s.add(D),g.userData.onClick="moon",i.clickables.push(g),i.props.moon=g}{let g=new ao;g.add(new Re(new mn(50,32,16),l.clone()));let S=new Re(new mn(4,16,16),new Mn({color:new Ue(3,3,2.6)}));S.position.copy(a).multiplyScalar(40),g.add(S);let w=new Aa(e);s.environment=w.fromScene(g,.04).texture,s.environmentIntensity=.55,w.dispose()}let c=new Nl(7438800,3811868,.55);s.add(c);let h=new ya(13358335,2.3);h.position.copy(a).multiplyScalar(60).setY(48),h.position.x=-38,h.position.z=32,h.castShadow=!0,h.shadow.mapSize.set(o?4096:2048,o?4096:2048),Object.assign(h.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),h.shadow.bias=-4e-4,h.shadow.normalBias=.04,h.shadow.radius=3,s.add(h);let f=new ya(16752234,.35);f.position.set(30,10,-20),s.add(f);let d=Vm({w:o?1024:512,h:o?512:256,rows:4,seed:11}),u=Vm({w:o?1024:512,h:o?1024:512,rows:8,seed:51}),p=gv();p.repeat.set(70,70);{let g=new gs(900,900,220,220);g.rotateX(-Math.PI/2);let S=g.attributes.position;for(let P=0;P<S.count;P++){let N=S.getX(P),A=S.getZ(P),U=Math.hypot(N,A),k=Math.sin(N*.03+A*.012)*2.2+Math.sin(A*.045-N*.02)*1.4+Math.sin(N*.11+A*.03)*.3;k=k>0?k*1.25:k*.7,k*=Ki.smoothstep(U,26,90),k+=Ki.smoothstep(U,120,420)*14,S.setY(P,k-.02)}g.computeVertexNormals();let w=new Re(g,os(11108437,{normalMap:p,normalScale:new De(.55,.55),roughness:.97}));w.receiveShadow=!0,s.add(w);let E=el(u,6,6),D=new Re(new jt(24,25,.3,64),os(10256996,{...E,roughness:1}));D.position.y=-.12,D.receiveShadow=!0,s.add(D)}{let g=new ma(1,2),S=g.attributes.position,w=jr(21);for(let k=0;k<S.count;k++){let B=new O().fromBufferAttribute(S,k);B.multiplyScalar(.75+Math.sin(B.x*3.1)*.1+Math.cos(B.y*4.3+B.z)*.12),S.setXYZ(k,B.x,B.y*.65,B.z)}g.computeVertexNormals();let E=46,D=new As(g,os(8216902,{...el(d,.5,.5),roughness:1}),E),P=new ct,N=new ci,A=new O,U=new O;for(let k=0;k<E;k++){let B=w()*Math.PI*2,Y=25+w()*45;Math.abs(Math.cos(B))<.25&&Math.sin(B)>0||(U.set(Math.cos(B)*Y,-.15,Math.sin(B)*Y),N.setFromEuler(new Xi(w(),w()*6,w())),A.setScalar(.3+w()*w()*1.8),P.compose(U,N,A),D.setMatrixAt(k,P))}D.castShadow=D.receiveShadow=!0,s.add(D)}for(let[g,S,w]of[[150,-260,34],[205,-300,46],[250,-270,26]]){let E=new Re(new qi(w,w*.95,4),os(3878984,{roughness:1}));E.rotation.y=Math.PI/4,E.position.set(g,w*.47+6,S),s.add(E)}let x=new Ct;s.add(x),i.pyramid=x;let m=Ri(on.faience,1);for(let g=0;g<hn.length;g++){let S=hn[g],w=os(16777215,{...el(d,S/7,1),emissiveMap:(()=>{let N=Yw(91+g*7);return N.repeat.set(S/14,1),N})(),emissive:new Ue(4176046),emissiveIntensity:.18,normalScale:new De(1,1)}),E=os(15787220,{...el(u,S/7,S/7)}),D=new Re(new Fn(S,yi,S),[w,w,E,E,w,w]);D.position.y=g*yi+yi/2,D.castShadow=D.receiveShadow=!0,x.add(D);let P=S/2;for(let[N,A,U,k]of[[S,.06,0,P],[S,.06,0,-P],[.06,S,P,0],[.06,S,-P,0]]){let B=new Re(new Fn(N,.05,A),m);B.position.set(U,(g+1)*yi+.01,k),x.add(B)}}let _=os(15259328,{...el(u,.35,.12)});i.stairPath=[];for(let g=0;g<hn.length;g++){let w=yi/8,E=Hs/8,D=hn[g]/2,P=rs(g);for(let N=0;N<8;N++){let A=new Re(new xn(2.6,w*(N+1),E+.01,1,.02),_);A.position.set(0,P+w*(N+1)/2,D+Hs-(N+.5)*E),A.castShadow=A.receiveShadow=!0,x.add(A)}for(let N of[-1.42,1.42]){let A=new O(N,P+.35,D+Hs),U=new O(N,P+yi+.35,D),k=A.distanceTo(U),B=new Re(new jt(.03,.03,k,8),Ri(N<0?on.faience:on.gold,.95));B.position.copy(A).add(U).multiplyScalar(.5),B.lookAt(U),B.rotateX(Math.PI/2),x.add(B)}i.stairPath.push(new O(0,P,D+Hs),new O(0,P+yi,D))}let v=new Bt({color:15909466,metalness:1,roughness:.18,clearcoat:.6,clearcoatRoughness:.1,envMapIntensity:2.2,emissive:new Ue(3810822),emissiveIntensity:.5}),T=new Re(new qi(2.3,3.2,4,1),v);T.rotation.y=Math.PI/4,T.position.set(0,6*yi+1.6,-.6),T.castShadow=!0,x.add(T),T.userData.onClick="cap",i.clickables.push(T),i.props.cap=T;let y=new Rs(16762726,5,20,1.6);y.position.set(0,6*yi+4.2,0),x.add(y),i.props.capLight=y;{let g=new Yi(i.stairPath.map(Y=>Y.clone().add(new O(-1.42,.55,0))),!1,"centripetal",0),S=new Yi(i.stairPath.map(Y=>Y.clone().add(new O(1.42,.55,0))),!1,"centripetal",0),w=36,E=new xn(.14,.14,.14,1,.03),D=new As(E,Ri(on.faience,1.4),w),P=new As(E,Ri(on.gold,1.3),w);x.add(D,P);let N=new ct,A=new ci,U=new O(1,1,1),k=new O,B=new Xi;i.packetBoost=0,r(Y=>{let W=.045+i.packetBoost*.25;i.packetBoost*=.97;for(let I=0;I<w;I++){let J=(I/w+Y*W)%1;g.getPointAt(J,k),A.setFromEuler(B.set(Y*2+I,Y+I,0)),N.compose(k,A,U),D.setMatrixAt(I,N),S.getPointAt(1-J,k),N.compose(k,A,U),P.setMatrixAt(I,N)}D.instanceMatrix.needsUpdate=P.instanceMatrix.needsUpdate=!0})}let b=new Pt({transparent:!0,depthWrite:!1,blending:nr,side:Zn,toneMapped:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float t; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ vec2 uv = vUv; float y = uv.y;
        float nn = n(vec2(uv.x*4., y*3.-t*3.2))*.6 + n(vec2(uv.x*9., y*7.-t*5.))*.4;
        float w = (1.-y)*.42 + .04; float d = abs(uv.x-.5 + (nn-.5)*.25*y);
        float f = smoothstep(w, w*.35, d) * smoothstep(1., .25, y + nn*.35) * smoothstep(0.,.08,y);
        vec3 c = mix(vec3(1.5,.5,.1), vec3(1.9,1.35,.7), smoothstep(.3,.9,f*(1.2-y)));
        gl_FragColor = vec4(c*f*.32, f*.85); }`});r(g=>b.uniforms.t.value=g);let M=new Bt({color:9067051,metalness:.9,roughness:.35});for(let g of[-4.6,4.6]){let S=hn[0]/2+3.2,w=new Re(new jt(.28,.36,2.2,16),os(16777215,{...el(d,.3,.5)}));w.position.set(g,1.1,S),w.castShadow=!0,s.add(w);let E=new Re(new jt(.6,.3,.4,24,1,!0),M);E.material.side=Zn,E.position.set(g,2.35,S),s.add(E);let D=new Re(new Pr(.55,20),Ri(16734746,.7));D.rotation.x=-Math.PI/2,D.position.set(g,2.45,S),s.add(D);let P=new Ct;P.position.set(g,2.45,S),s.add(P);for(let I=0;I<3;I++){let J=new Re(new gs(1.1,1.8),b);J.position.y=.85,J.rotation.y=I/3*Math.PI,P.add(J)}let N=new Rs(16747068,6,12,1.8);N.position.set(g,3.4,S+.3),s.add(N);let A=30,U=new Float32Array(A*3),k=Array.from({length:A},()=>Math.random()),B=new Yt;B.setAttribute("position",new Un(U,3));let Y=new co(B,new lo({color:new Ue(3,1.4,.4),size:.06,transparent:!0,depthWrite:!1,blending:nr,toneMapped:!1}));Y.position.set(g,2.6,S),s.add(Y);let W=Math.random()*10;r(I=>{let J=1+Math.sin(I*13+W)*.07+Math.sin(I*7.3+W)*.06;P.scale.set(1,J,1),N.intensity=5.5*J,P.rotation.y=Math.sin(I*.7+W)*.3;for(let de=0;de<A;de++){let be=(k[de]+I*(.25+k[de]*.3))%1;U[de*3]=Math.sin(k[de]*50+I)*.25*be,U[de*3+1]=be*3,U[de*3+2]=Math.cos(k[de]*70+I)*.25*be}B.attributes.position.needsUpdate=!0})}{let S=new Float32Array(1800),w=jr(3);for(let D=0;D<600;D++)S.set([(w()-.5)*80,w()*22,(w()-.5)*80],D*3);let E=new Yt;E.setAttribute("position",new Un(S,3)),s.add(new co(E,new lo({color:16769712,size:.06,transparent:!0,opacity:.45,depthWrite:!1}))),r((D,P)=>{let N=E.attributes.position;for(let A=0;A<600;A++){let U=N.getX(A)+P*1.6;U>40&&(U=-40),N.setX(A,U),N.setY(A,N.getY(A)+Math.sin(D+A)*P*.15)}N.needsUpdate=!0})}return $w(i,x,t),i.update=(g,S,w)=>{for(let E of i.updaters)E(g,S,w)},i}function $w(s,e,t){let n=a=>s.updaters.push(a),i=a=>hn[a]/2+Hs/2,r=new Ll(t),o=new Bt({color:14724682,metalness:1,roughness:.3,envMapIntensity:1.6});{let a=new Ct;a.position.set(-5.6,rs(1),i(1)),e.add(a);let l=os(6175522,{roughness:.6}),c=new Re(new xn(1.5,.08,.8,2,.03),l);c.position.y=.72,c.castShadow=!0,a.add(c);for(let[y,b]of[[-.65,-.32],[.65,-.32],[-.65,.32],[.65,.32]]){let M=new Re(new jt(.03,.03,.72,8),l);M.position.set(y,.36,b),M.castShadow=!0,a.add(M)}let h=new Bt({color:10133675,metalness:.9,roughness:.32}),f=new Re(new xn(.62,.025,.42,1,.01),h);f.position.set(0,.775,.05),a.add(f);let d=document.createElement("canvas");d.width=512,d.height=320;let u=d.getContext("2d");u.fillStyle="#0a1233",u.fillRect(0,0,512,320),u.font="28px monospace",[["#2fd3c6",'app.post("/hire",'],["#e9b44c","  auth, async (req,res)=>{"],["#f6ead2",'  const dev = "adham";'],["#f6ead2","  await db.save(dev);"],["#2fd3c6","  res.status(201)"],["#e9b44c","});"]].forEach(([y,b],M)=>{u.fillStyle=y,u.fillText(b,22,52+M*44)});let x=new On(d);x.colorSpace=Vt;let m=new Re(new gs(.58,.36),new Mn({map:x,color:13421772}));m.position.set(0,.98,-.148),m.rotation.x=-.18,a.add(m);let _=new Re(new xn(.62,.4,.015,1,.006),h);_.position.set(0,.98,-.16),_.rotation.x=-.18,a.add(_);let v=new Rs(8378623,1.2,2.2,2);v.position.set(0,1.05,.2),a.add(v);let T=new Re(new jt(.07,.06,.14,20),new Bt({color:on.terracotta,roughness:.25,clearcoat:.8}));T.position.set(.55,.83,.15),a.add(T),a.rotation.y=.5,s.props.desk=a}{let a=new Ct;a.position.set(7.3,rs(2)+2.95,i(2)+.25),e.add(a);let l=new Bt({color:11044442,metalness:1,roughness:.38,envMapIntensity:1.2}),c=new Re(new $i(1.2,.025,12,96),l),h=new Re(new $i(2.4,.032,12,128),l);a.add(c,h);for(let T=0;T<4;T++){let y=new Re(new jt(.012,.012,4.8,6),l);y.rotation.z=T/4*Math.PI,a.add(y)}let f=new Re(new jt(.05,.07,2.95,12),l);f.position.y=-2.95/2,f.castShadow=!0,a.add(f);let d=new Re(new jt(.42,.5,.16,32),os(7166532,{roughness:.9}));d.position.y=-2.95+.08,d.castShadow=d.receiveShadow=!0,a.add(d);let u=new Re(new ma(.3,1),new Bt({color:4176046,roughness:.15,metalness:.1,transmission:.4,thickness:.5,emissive:new Ue(739909),emissiveIntensity:.8}));a.add(u);let p=["C++","Python","SQL","Java","Git"],x=["TypeScript","Node.js","PostgreSQL","Express","socket.io","Docker","React"],m=[],_=(T,y,b,M,g)=>{let S=new On(xv(T,{font:'600 52px "Instrument Sans", sans-serif',bg:"rgba(12,16,40,1)",border:"#b8935a",fg:"#efe4cc"}));S.colorSpace=Vt,S.anisotropy=8;let w=new Re(new gs(1,.31),new Mn({map:S,transparent:!0,color:14211288}));w.userData={a:b/M*Math.PI*2,r:y,dir:g,label:T.toLowerCase(),hl:0},a.add(w),m.push(w)};p.forEach((T,y)=>_(T,1.2,y,p.length,1)),x.forEach((T,y)=>_(T,2.4,y,x.length,-1));let v=0;n((T,y,b)=>{v+=y,u.rotation.set(T*.4,T*.6,0),c.rotation.z=v*.25,h.rotation.z=-v*.16;for(let M of m){let g=M.userData;g.hl=Math.max(0,g.hl-y);let S=Math.min(1,g.hl*2),w=g.a+v*(g.dir>0?.25:-.16);M.position.set(Math.cos(w)*g.r,Math.sin(w)*g.r,.08+S*.25),M.scale.setScalar(1+S*.45),M.material.color.setScalar(.85+S*.15),b&&M.quaternion.copy(b.quaternion)}}),s.props.stack=a,s.highlightSkill=T=>{let y=!1,b=T.toLowerCase();return m.forEach(M=>{let g=M.userData.label;(b===g||b.startsWith(g.replace(".js",""))||g.startsWith(b))&&(M.userData.hl=3,y=!0)}),y}}{let a=new Ct;a.position.set(-6.6,rs(3),hn[3]/2+1.1),e.add(a);let l=new Bt({color:1513503,metalness:.6,roughness:.35,clearcoat:.4}),c=new Bt({color:9212057,metalness:1,roughness:.3});[{src:"assets/shots/title.jpg",x:-1.95,ry:.18},{src:"assets/shots/smarthabbit-dashboard.webp",x:0,ry:0},{src:"assets/shots/student-dashboard.webp",x:1.95,ry:-.18}].forEach((f,d)=>{var T;let u=f.canvas?new On(f.canvas):r.load(f.src);u.colorSpace=Vt,u.anisotropy=8;let p=new Ct;p.position.set(f.x,0,0),p.rotation.y=f.ry,a.add(p);let x=new Re(new xn(1.72,1.02,.07,3,.03),l);x.position.y=1.72,x.castShadow=!0,p.add(x);let m=new Re(new gs(1.62,.92),new Mn({map:u,color:10263708}));m.position.set(0,1.72,.037),p.add(m);let _=new Re(new xn(.09,1.2,.05,1,.02),c);_.position.set(0,.62,-.06),_.castShadow=!0,p.add(_);let v=new Re(new xn(.55,.03,.34,2,.012),c);v.position.set(0,.015,-.02),v.castShadow=v.receiveShadow=!0,p.add(v),((T=s.props).screens||(T.screens={}))[["capcom","smarthabbit","labtrack"][d]]=x}),s.props.work=a}{let a=new Ct;a.position.set(5.9,rs(4)+1.2,i(4)-.2),a.rotation.y=-.15,a.scale.setScalar(.6),e.add(a);{let P=new Re(new jt(.45,.55,.22,32),new Bt({color:2764088,metalness:.8,roughness:.35}));P.position.set(5.9,rs(4)+.11,i(4)-.2),P.castShadow=P.receiveShadow=!0,e.add(P);let N=new Re(new Pr(.3,32),Ri(on.faience,.9));N.rotation.x=-Math.PI/2,N.position.set(5.9,rs(4)+.225,i(4)-.2),e.add(N)}let l=new Re(new xn(.5,.5,.5,2,.06),Ri(on.faience,.9));l.position.set(-1.9,1.7,0);let c=new Re(new mn(.3,24,16),Ri(7310591,.9));c.position.set(-1.9,.3,0);let h=new Re(new Cl(.38),Ri(on.gold,1));h.position.set(.4,1,0),a.add(l,c,h);let f=new Yi([l.position,new O(-.8,1.8,.4),h.position]),d=new Yi([c.position,new O(-.8,.2,.4),h.position]),p=[[3134406,.35],[15316044,.6],[15764028,.85],[14698298,1.1]].map(([P,N],A)=>{let U=new Re(new Fn(.22,N,.22),Ri(P,.85));return U.position.set(1.4+A*.36,N/2+.1,0),a.add(U),U}),x=new Yi([h.position,new O(1.2,1.4,.2),new O(1.9,1.5,0)]),m=22,_=new mn(.05,8,6),v=new As(_,Ri(on.faience,1.1),m),T=new As(_,Ri(9414399,1.1),m),y=new As(_,Ri(on.gold,1.1),m);a.add(v,T,y);for(let[P,N,A]of[["XGBoost \xB7 sensors",-1.9,2.25],["Isolation Forest \xB7 traffic",-1.9,-.25],["Decision fusion",.4,1.6],["4-tier risk",1.95,1.55]]){let U=new Rr(new js({map:new On(xv(P,{w:640,h:120,font:'600 42px "Instrument Sans", sans-serif',radius:60})),transparent:!0,toneMapped:!1}));U.material.map.colorSpace=Vt,U.material.color.setScalar(.8),U.material.toneMapped=!0,U.scale.set(1.6,.3,1),U.position.set(N,A,.1),a.add(U)}let b=new ct,M=new O;a.userData.threat=0;let g=0,S=0,w=new Ue(9414399).multiplyScalar(1.1),E=new Ue(16730683).multiplyScalar(1.5),D=new Ue(on.gold).multiplyScalar(1);n((P,N)=>{g+=(a.userData.threat-g)*Math.min(1,N*4),S+=N*(.22+g*.6),T.material.color.copy(w).lerp(E,g),c.material.color.copy(w).lerp(E,g),c.scale.setScalar(1+g*.5+Math.sin(P*12)*.1*g),h.material.color.copy(D).lerp(E,g*.7),l.rotation.set(P,P*.7,0),h.rotation.y=P*1.4,h.scale.setScalar(1+Math.sin(P*4)*.06);for(let A=0;A<m;A++){let U=(A/m+P*.22)%1;f.getPointAt(U,M),b.makeTranslation(M.x,M.y,M.z),v.setMatrixAt(A,b),d.getPointAt((A/m+S)%1,M),b.makeTranslation(M.x,M.y,M.z),T.setMatrixAt(A,b),x.getPointAt(U,M),b.makeTranslation(M.x,M.y,M.z),y.setMatrixAt(A,b)}v.instanceMatrix.needsUpdate=T.instanceMatrix.needsUpdate=y.instanceMatrix.needsUpdate=!0,p.forEach((A,U)=>{let k=g>U*.25-.01;A.scale.y+=((k?1+g*.6:.25)+Math.sin(P*2+U)*.06-A.scale.y)*.1})}),s.props.research=a}{let a=new Ct;a.position.set(-3.9,rs(5),i(5)-.45),e.add(a);let l=[14698298,3134406,15316044,7310591,16181970];s.props.balloons=[],l.forEach((y,b)=>{let M=new Ct;M.position.set((b-2)*.42,0,b%2*.45);let g=new Re(new mn(.34,32,24),new Bt({color:y,roughness:.25,clearcoat:1,clearcoatRoughness:.15,sheen:.4}));g.scale.y=1.18,g.position.y=2.2+b%3*.35,g.castShadow=!0;let S=new Re(new qi(.06,.1,8),g.material);S.position.y=g.position.y-.42,S.rotation.x=Math.PI;let w=new Re(new jt(.005,.005,g.position.y-.45,4),os(16181970));w.position.y=(g.position.y-.45)/2,M.add(g,S,w),a.add(M),g.userData.onClick="balloon",g.userData.group=M,s.clickables.push(g),s.props.balloons.push(M);let E=b*1.3;n(D=>{M.rotation.z=Math.sin(D*1.2+E)*.06,M.rotation.x=Math.cos(D+E)*.05})});let c=new Ct,h=new Bt({color:15921128,metalness:.3,roughness:.35,clearcoat:.5}),f=new Re(new tr(.16,.6,8,16),h);c.add(f);let d=new Re(new qi(.16,.3,16),new Bt({color:on.terracotta,roughness:.3,clearcoat:.6}));d.position.y=.55,c.add(d);for(let y=0;y<3;y++){let b=new Re(new Fn(.02,.22,.18),os(on.lapis,{roughness:.4})),M=y/3*Math.PI*2;b.position.set(Math.cos(M)*.16,-.3,Math.sin(M)*.16),b.rotation.y=-M,c.add(b)}let u=new Re(new qi(.1,.4,12),Ri(16751173,3));u.position.y=-.62,u.rotation.x=Math.PI,c.add(u),e.add(c),s.props.rocket=c,c.userData.boost=0,f.userData.onClick="rocket",s.clickables.push(f);let p=0;n((y,b)=>{c.userData.boost*=.985,p+=b*(.45+c.userData.boost*3);let M=new O(0,rs(5)+4.6,0);c.position.set(M.x+Math.cos(p)*9,M.y+Math.sin(y*.9)*.6,M.z+Math.sin(p)*9),c.lookAt(M.x+Math.cos(p+.2)*9,c.position.y,M.z+Math.sin(p+.2)*9),c.rotateX(Math.PI/2),u.scale.y=1+Math.sin(y*30)*.2+c.userData.boost*2}),s.props.arena=a;let x=[],m=[14698298,3134406,15316044,7310591,11832575,16181970,5427827],_=new O(-2.9,rs(5),i(5)+.6);for(let y=0;y<14;y++){let b=new Re(new mn(.3,24,18),new Bt({color:m[y%m.length],roughness:.25,clearcoat:1,sheen:.4}));b.scale.y=1.18,b.visible=!1,b.userData.onClick="gameBalloon",e.add(b),x.push(b),s.clickables.push(b)}let v=s.game={active:!1,score:0,left:0,best:0,onEnd:null,onTick:null},T=y=>{y.position.set(_.x+(Math.random()-.5)*6,_.y-1.5-Math.random()*3,_.z+1+Math.random()*2.5),y.userData.v=.9+Math.random()*1.4,y.userData.w=Math.random()*6,y.visible=!0,y.scale.set(1,1.18,1)};v.start=(y=15)=>{v.active=!0,v.score=0,v.left=y,v.endAt=performance.now()+y*1e3,x.forEach(b=>{T(b),b.position.y=_.y+.3+Math.random()*4.5})},v.hit=y=>!v.active||!y.visible?!1:(v.score++,y.visible=!1,setTimeout(()=>v.active&&T(y),350),!0),n((y,b)=>{if(v.active){v.left=Math.max(0,(v.endAt-performance.now())/1e3),v.onTick&&v.onTick(v);for(let M of x)M.visible&&(M.position.y+=M.userData.v*b,M.position.x+=Math.sin(y*1.5+M.userData.w)*b*.3,M.position.y>_.y+7&&T(M));v.left<=0&&(v.active=!1,x.forEach(M=>M.visible=!1),v.best=Math.max(v.best,v.score),v.onEnd&&v.onEnd(v))}})}{let a=new Re(new jt(.35,1.2,160,32,1,!0),new Mn({color:new Ue(on.gold).multiplyScalar(2.2),transparent:!0,opacity:0,side:Zn,depthWrite:!1,toneMapped:!1,blending:nr}));a.position.set(0,6*yi+3+80,-.6),e.add(a);let l=[0,1,2].map(()=>{let c=new Re(new $i(1,.04,8,64),new Mn({color:new Ue(on.faience).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1}));return c.rotation.x=Math.PI/2,c.position.set(0,6*yi+.2,-.6),e.add(c),c});s.props.beam=a,s.props.rings=l}}var Fo=14263420,qm=1774609,Ym=1845854,Mv=2504829,qc=16052198,bv=8003371,Tv=1581119,Ev=15920354,Gm={};function as(s){if(Gm[s])return Gm[s];let e={color:s,roughness:.7};return s===Fo?Object.assign(e,{roughness:.5,sheen:.6,sheenColor:new Ue(16751226),sheenRoughness:.5}):s===Ym||s===Tv?Object.assign(e,{roughness:.82,sheen:1,sheenColor:new Ue(5596842),sheenRoughness:.55}):s===Mv?Object.assign(e,{roughness:.3,clearcoat:.6,sheen:.6,sheenColor:new Ue(8952319)}):s===qm?Object.assign(e,{roughness:.5,sheen:1,sheenColor:new Ue(9069648),sheenRoughness:.4,clearcoat:.15,clearcoatRoughness:.5}):s===Ev?Object.assign(e,{roughness:.3,clearcoat:.8}):s===qc?Object.assign(e,{roughness:.6,sheen:.5,sheenColor:new Ue(16777215)}):s===bv&&Object.assign(e,{roughness:.32,sheen:.9,sheenColor:new Ue(16739179)}),Gm[s]=new Bt(e)}function xr(s,e){let t=new Re(s,as(e));return t.castShadow=!0,t.receiveShadow=!0,t}function yv(s,e,t=64){let n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,1,t/2,t/2,t/2);return r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t),new On(n)}var vr={happy:{eyes:"normal",brows:"soft",mouth:"smile",blush:.3,aura:15316044,emote:null},excited:{eyes:"star",brows:"up",mouth:"grin",blush:.55,aura:16765286,emote:"sparkle"},focused:{eyes:"normal",brows:"determined",mouth:"smirk",blush:.1,aura:3134406,emote:null},thinking:{eyes:"normal",brows:"raised",mouth:"hmm",blush:.1,aura:9414399,emote:"question",look:[.6,.7]},cool:{eyes:"closed",brows:"soft",mouth:"smirk",blush:.15,aura:15316044,emote:"sparkle",glasses:!0},surprised:{eyes:"wide",brows:"up",mouth:"o",blush:.2,aura:16777215,emote:"bang"},shy:{eyes:"closed",brows:"worried",mouth:"wavy",blush:1,aura:16748465,emote:"sweat"},annoyed:{eyes:"angry",brows:"angry",mouth:"flat",blush:.1,aura:14698298,emote:"anger"},sleepy:{eyes:"half",brows:"soft",mouth:"small",blush:.15,aura:7299024,emote:"zzz"},dizzy:{eyes:"spiral",brows:"worried",mouth:"wavy",blush:.3,aura:11832575,emote:"swirl"},love:{eyes:"heart",brows:"up",mouth:"grin",blush:.85,aura:16740241,emote:"heart"},worried:{eyes:"normal",brows:"worried",mouth:"wavy",blush:.1,aura:15764028,emote:"sweat"},vibing:{eyes:"closed",brows:"soft",mouth:"smile",blush:.35,aura:3134406,emote:"note"}},wv=768,Av=512,Wm={x:226,y:276},Xm={x:542,y:276},Sv={x:384,y:400};function Yc(s,e,t,n,i=4){s.beginPath();for(let r=0;r<i*2;r++){let o=r/(i*2)*Math.PI*2-Math.PI/2,a=r%2?n*.38:n;s.lineTo(e+Math.cos(o)*a,t+Math.sin(o)*a)}s.closePath(),s.fill()}function Rv(s,e,t,n){s.beginPath(),s.moveTo(e,t+n*.9),s.bezierCurveTo(e-n*1.6,t-n*.1,e-n*.6,t-n*1.2,e,t-n*.35),s.bezierCurveTo(e+n*.6,t-n*1.2,e+n*1.6,t-n*.1,e,t+n*.9),s.fill()}function Zw(s,e){let t=vr[e.mood]||vr.happy;s.clearRect(0,0,wv,Av);let n=t.blush*(e.blushBoost||1);if(n>.02)for(let u of[Wm.x-46,Xm.x+46]){let p=s.createRadialGradient(u,352,4,u,352,64);p.addColorStop(0,`rgba(235,110,100,${.55*n})`),p.addColorStop(1,"rgba(235,110,100,0)"),s.fillStyle=p,s.fillRect(u-70,282,140,140)}let i="#1d120c",r="#5b3a22",o=e.blink,a=(t.look?t.look[0]:e.lx)*12,l=(t.look?-t.look[1]:-e.ly)*10;for(let[u,p]of[[0,Wm],[1,Xm]]){let x=t.eyes;if(o<.25&&x!=="closed"&&x!=="spiral"&&x!=="heart"&&(x="blink"),s.save(),x==="normal"||x==="star"||x==="half"||x==="angry"||x==="wide"){let m=x==="wide"?64:60,_=(x==="wide"?70:76)*Math.max(o,.25);if(x==="half"&&(s.beginPath(),s.rect(p.x-70,p.y-4,140,120),s.clip()),x==="angry"){s.beginPath();let v=u?-1:1;s.moveTo(p.x-80,p.y-80+(v>0?0:40)),s.lineTo(p.x+80,p.y-80+(v>0?40:0)),s.lineTo(p.x+80,p.y+90),s.lineTo(p.x-80,p.y+90),s.closePath(),s.clip()}s.fillStyle=i,s.beginPath(),s.ellipse(p.x,p.y,m,_,0,0,7),s.fill(),x!=="wide"?(s.fillStyle=r,s.beginPath(),s.ellipse(p.x+a,p.y+l+10,m*.62,_*.62,0,0,7),s.fill(),s.fillStyle=i,s.beginPath(),s.ellipse(p.x+a,p.y+l+10,m*.34,_*.36,0,0,7),s.fill()):(s.fillStyle="#fff",s.beginPath(),s.ellipse(p.x,p.y,m*.78,_*.8,0,0,7),s.fill(),s.fillStyle=i,s.beginPath(),s.arc(p.x+a*.6,p.y+l*.6,12,0,7),s.fill()),s.fillStyle="#fff",x==="star"?(Yc(s,p.x-10+a*.3,p.y-14+l*.3,26),Yc(s,p.x+18,p.y+22,10)):x!=="wide"&&(s.beginPath(),s.arc(p.x-17+a*.4,p.y-24+l*.4,16,0,7),s.fill(),s.beginPath(),s.arc(p.x+19+a*.4,p.y+22+l*.4,7,0,7),s.fill()),s.restore(),s.save(),s.strokeStyle=i,s.lineWidth=9,s.lineCap="round",x==="half"&&(s.beginPath(),s.moveTo(p.x-50,p.y-4),s.lineTo(p.x+50,p.y-4),s.stroke())}else if(x==="closed"||x==="blink")s.strokeStyle=i,s.lineWidth=12,s.lineCap="round",s.beginPath(),x==="closed"?s.arc(p.x,p.y+18,38,Math.PI*1.15,Math.PI*1.85):s.arc(p.x,p.y-22,40,Math.PI*.2,Math.PI*.8),s.stroke();else if(x==="spiral"){s.strokeStyle=i,s.lineWidth=7,s.beginPath();let m=e.t*6*(u?-1:1);for(let _=0;_<Math.PI*6;_+=.2){let v=_*6.5;s.lineTo(p.x+Math.cos(_+m)*v,p.y+Math.sin(_+m)*v)}s.stroke()}else x==="heart"&&(s.fillStyle="#e8325a",Rv(s,p.x,p.y+4,34+Math.sin(e.t*8)*3),s.fillStyle="rgba(255,255,255,.8)",s.beginPath(),s.arc(p.x-14,p.y-10,8,0,7),s.fill());s.restore()}s.strokeStyle="#1b1411",s.lineWidth=18,s.lineCap="round";for(let[u,p]of[[0,Wm],[1,Xm]]){let x=u?1:-1,m=p.y-100,_=0,v=0;switch(t.brows){case"up":m-=14;break;case"determined":_=14,v=-4;break;case"angry":_=24,v=-10;break;case"worried":_=-16,v=8;break;case"raised":u?m-=22:_=6;break}let T=p.x-x*34,y=p.x+x*40;s.beginPath(),s.moveTo(T,m+_),s.quadraticCurveTo((T+y)/2,m-10+(_+v)/2,y,m+v+6),s.stroke()}s.lineCap="round",s.lineJoin="round";let c=e.mouth,h=Sv.x,f=Sv.y,d=()=>{s.fillStyle="#5a1a16",s.fill()};if(c>.08)s.beginPath(),s.ellipse(h,f,30+c*12,10+c*30,0,0,7),d(),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,f+8+c*14,18+c*6,6+c*9,0,0,Math.PI),s.fill();else switch(s.strokeStyle="#4a1a14",s.lineWidth=10,t.mouth){case"smile":s.beginPath(),s.arc(h,f-26,40,Math.PI*.2,Math.PI*.8),s.stroke();break;case"grin":s.beginPath(),s.moveTo(h-52,f-12),s.quadraticCurveTo(h,f-6,h+52,f-12),s.quadraticCurveTo(h+40,f+46,h,f+46),s.quadraticCurveTo(h-40,f+46,h-52,f-12),d(),s.fillStyle="#fff",s.fillRect(h-38,f-9,76,12),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,f+34,22,10,0,Math.PI,0),s.fill();break;case"smirk":s.beginPath(),s.moveTo(h-34,f+2),s.quadraticCurveTo(h+6,f+16,h+40,f-16),s.stroke();break;case"hmm":s.beginPath(),s.moveTo(h-26,f+6),s.lineTo(h+24,f-2),s.stroke();break;case"o":s.beginPath(),s.ellipse(h,f+4,18,24,0,0,7),d();break;case"small":s.beginPath(),s.ellipse(h,f+2,10,8,0,0,7),d();break;case"flat":s.beginPath(),s.moveTo(h-30,f+4),s.lineTo(h+30,f+4),s.stroke();break;case"wavy":s.beginPath();for(let u=-40;u<=40;u+=4)s.lineTo(h+u,f+4+Math.sin(u*.16+e.t*6)*7);s.stroke();break}}function Jw(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(64,64),t.lineCap="round",t.lineJoin="round";let n=()=>{t.fillStyle="#fff7e6",t.beginPath(),t.arc(0,0,50,0,7),t.fill(),t.strokeStyle="rgba(26,21,48,.25)",t.lineWidth=4,t.stroke()};switch(s){case"bang":n(),t.fillStyle="#e0473a",t.font="900 72px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",0,4);break;case"question":n(),t.fillStyle="#1d3fbf",t.font="900 66px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("?",0,4);break;case"heart":t.fillStyle="#ff4d6d",Rv(t,0,6,40),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.arc(-18,-12,9,0,7),t.fill();break;case"sparkle":t.fillStyle="#ffd166",Yc(t,-8,0,44),t.fillStyle="#fff3c4",Yc(t,34,-30,16),Yc(t,30,34,12);break;case"zzz":t.fillStyle="#c9b8ff",t.font="900 44px Unbounded, sans-serif",t.fillText("z",-40,30),t.font="900 34px Unbounded, sans-serif",t.fillText("z",-6,0),t.font="900 26px Unbounded, sans-serif",t.fillText("z",22,-24);break;case"anger":t.strokeStyle="#e0473a",t.lineWidth=11;for(let[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.beginPath(),t.moveTo(r*10,o*34),t.quadraticCurveTo(r*10,o*10,r*34,o*10),t.stroke();break;case"sweat":t.fillStyle="#7fc8ff",t.beginPath(),t.moveTo(0,-44),t.quadraticCurveTo(34,10,0,40),t.quadraticCurveTo(-34,10,0,-44),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.ellipse(-8,12,6,12,.3,0,7),t.fill();break;case"swirl":t.strokeStyle="#b48cff",t.lineWidth=8,t.beginPath();for(let r=0;r<Math.PI*5;r+=.15)t.lineTo(Math.cos(r)*r*3,Math.sin(r)*r*3);t.stroke();break;case"note":t.fillStyle="#2fd3c6",t.beginPath(),t.ellipse(-16,26,18,13,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(26,14,18,13,-.4,0,7),t.fill(),t.fillRect(-2,-38,9,64),t.fillRect(40,-50,9,64),t.beginPath(),t.moveTo(-2,-38),t.lineTo(49,-50),t.lineTo(49,-34),t.lineTo(-2,-22),t.fill();break}let i=new On(e);return i.colorSpace=Vt,i}function Cv(){let s=new Ct,e=new Ct;s.add(e);let t=[-1,1].map(H=>{let X=new Ct;X.position.set(.12*H,.72,0),e.add(X);let ue=xr(new tr(.085,.48,8,20),Tv);ue.position.y=-.33,X.add(ue);let ae=xr(new xn(.18,.12,.3,3,.055),Ev);ae.position.set(0,-.65,.05),X.add(ae);let fe=new Re(new xn(.185,.035,.305,1,.015),as(2830141));fe.position.set(0,-.705,.05),X.add(fe);let Se=new Re(new Fn(.19,.02,.12),as(bv));return Se.position.set(0,-.64,0),X.add(Se),X}),n=new Ct;n.position.y=.72,e.add(n);let i=xr(new xn(.52,.5,.31,5,.11),Ym);i.position.y=.26,n.add(i);let r=new Re(new jt(0,.09,.22,3),as(qc));r.rotation.set(Math.PI,Math.PI/6,0),r.scale.z=.25,r.position.set(0,.4,.15),n.add(r);for(let H of[-1,1]){let X=new Re(new xn(.055,.3,.02,1,.008),as(Mv));X.position.set(H*.075,.37,.162),X.rotation.z=H*.38,n.add(X)}for(let H of[-1,1]){let X=new Re(new qi(.028,.05,3),as(qc));X.position.set(H*.04,.475,.158),X.rotation.set(0,0,Math.PI+H*.5),X.scale.z=.3,n.add(X)}let o=new Bt({color:on.gold,metalness:1,roughness:.25});for(let H of[.13]){let X=new Re(new mn(.016,12,8),o);X.position.set(0,H,.16),n.add(X)}let a=new Re(new qi(.035,.05,3),new Bt({color:on.gold,roughness:.35,sheen:1}));a.position.set(-.16,.405,.158),a.rotation.z=Math.PI,a.scale.z=.3,n.add(a);let l=new Re(new Fn(.47,.05,.29),as(1053734));l.position.y=.03,n.add(l);let c=[-1,1].map(H=>{let X=new Ct;X.position.set(.31*H,.46,0),n.add(X);let ue=xr(new tr(.074,.3,8,20),Ym);ue.position.y=-.18,X.add(ue);let ae=new Re(new jt(.068,.068,.04,14),as(qc));ae.position.y=-.37,X.add(ae);let fe=xr(new mn(.072,20,14),Fo);if(fe.position.y=-.43,fe.scale.set(1,1.08,.9),X.add(fe),H<0){let Ge=new Re(new $i(.07,.014,8,24),o);Ge.rotation.x=Math.PI/2,Ge.position.y=-.355,X.add(Ge)}let Se=xr(new tr(.022,.04,4,8),Fo);return Se.position.set(-H*.05,-.41,.04),Se.rotation.z=H*.6,X.add(Se),X}),h=new Ct;h.position.y=1.24,e.add(h),h.add(new Re(new jt(.07,.08,.1,14),as(Fo)));let f=new Re(new $i(.085,.022,8,20),as(qc));f.rotation.x=Math.PI/2,f.position.y=-.03,h.add(f);let d=new Ct;d.position.y=.06,h.add(d);let u=xr(new mn(.35,48,36),Fo);u.scale.set(1,.97,.94),u.position.y=.34,d.add(u);for(let H of[-1,1]){let X=xr(new mn(.075,16,12),Fo);X.scale.set(.6,1,.8),X.position.set(.34*H,.33,0),d.add(X)}let p=xr(new mn(.03,16,12),Fo);p.position.set(0,.31,.33),p.scale.set(1,.8,.9),d.add(p);let x=document.createElement("canvas");x.width=wv,x.height=Av;let m=x.getContext("2d"),_=new On(x);_.colorSpace=Vt,_.anisotropy=8;let v=new Re(new mn(.3535,48,32,Math.PI/2-.9,1.8,.9,1.35),new Ir({map:_,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}));v.renderOrder=2,u.add(v);{let H=new mn(.35,96,64),X=H.attributes.position,ue=new O,ae=new O,fe=(Ge,Ce,Ve)=>{let ye=Math.min(1,Math.max(0,(Ve-Ge)/(Ce-Ge)));return ye*ye*(3-2*ye)};for(let Ge=0;Ge<X.count;Ge++){ae.fromBufferAttribute(X,Ge).normalize();let Ce=(ae.z*.5+.5)**1.6,Ve=-.42+Ce*.95+.07*Math.exp(-(ae.x**2)/.05)*Math.max(0,ae.z)-Math.max(0,Math.abs(ae.x)-.8)*.6,ye=fe(Ve-.05,Ve+.06,ae.y),Pe=.31+ye*.068,et=(ae.z-.62)**2/.1+(ae.y-.68)**2/.06+ae.x**2/.16;Pe+=ye*.2*Math.exp(-et),Pe+=ye*.07*Math.exp(-((ae.z-.2)**2/.12+(ae.y-.9)**2/.05)),Pe+=ye*.03*fe(.2,.9,ae.y),Pe+=ye*.006*Math.sin(Math.atan2(ae.x,ae.z)*26+ae.y*9),ue.copy(ae).multiplyScalar(Pe),X.setXYZ(Ge,ue.x,ue.y,ue.z)}H.computeVertexNormals();let Se=new Re(H,as(qm));Se.castShadow=!0,u.add(Se)}for(let H of[-1,1]){let X=new Re(new xn(.05,.12,.07,1,.02),as(qm));X.position.set(.325*H,.32,.08),d.add(X)}let T=new Ct;T.position.set(0,.36,.36),d.add(T);let y=new Bt({color:460557,roughness:.04,metalness:.2,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2});for(let H of[-1,1]){let X=new Re(new xn(.19,.11,.025,3,.04),y);X.position.set(H*.115,0,-.01-Math.abs(H)*.012),X.rotation.y=H*.28,T.add(X);let ue=new Re(new xn(.2,.02,.03,1,.008),o);ue.position.set(H*.115,.055,-.01),ue.rotation.y=H*.28,T.add(ue)}let b=new Re(new Fn(.05,.015,.015),o);b.position.y=.03,T.add(b),T.scale.setScalar(.001),T.visible=!1;let M=new Ct;M.position.set(0,.36,-.02),d.add(M);let g=new Re(new $i(.4,.028,10,40,Math.PI),new Bt({color:1382442,roughness:.3,clearcoat:.6}));M.add(g);for(let H of[-1,1]){let X=new Re(new jt(.1,.1,.07,24),new Bt({color:1909312,roughness:.3,clearcoat:.7}));X.rotation.z=Math.PI/2,X.position.set(H*.39,-.03,0),M.add(X);let ue=new Re(new $i(.075,.012,8,24),new Mn({color:new Ue(on.faience).multiplyScalar(2.4),toneMapped:!1}));ue.rotation.y=Math.PI/2,ue.position.set(H*.428,-.03,0),M.add(ue)}M.scale.setScalar(.001),M.visible=!1;let S={},w=new Rr(new js({transparent:!0,depthWrite:!1,toneMapped:!1}));w.position.set(.45,2.3,0),w.scale.setScalar(.001),s.add(w);let E=new Re(new Pl(.42,.58,64),new Mn({color:new Ue(on.gold),transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1,alphaMap:yv("#fff","#000",128),side:Zn}));E.rotation.x=-Math.PI/2,E.position.y=.03,s.add(E);let D=new Rs(16769728,1.6,4.5,1.6);D.position.set(.7,2.1,1.5),s.add(D);let P=new Rs(9414911,.6,4,1.8);P.position.set(-1,1.4,1.2),s.add(P);let N=new Re(new Pr(.42,32),new Mn({color:0,transparent:!0,opacity:.22,depthWrite:!1,alphaMap:yv("#fff","#000")}));N.rotation.x=-Math.PI/2,N.position.y=.02,s.add(N),s.scale.setScalar(1.15);let A={mode:"idle",modeT:0,talk:0,walkPhase:0,speed:0,blinkT:2,blink:1,look:new De,spin:0,base:"happy",temp:null,tempT:0,mood:"happy",music:!1,faceKey:""},U=Ki.lerp,k=new Ue(on.gold),B=new Ue,Y=null;function W(H){A.mode!==H&&(A.mode=H,A.modeT=0)}function I(H,X=0){vr[H]&&(X?(A.temp=H,A.tempT=X):A.base=H)}function J(){A.spin=Math.PI*2,W("celebrate")}function de(H,X){H.visible=!0,H.userData.target=X?1:.001}function be(H,X,ue={}){A.modeT+=H,A.temp&&(A.tempT-=H,A.tempT<=0&&(A.temp=null));let ae=A.temp||(ue.sleepy?"sleepy":ue.dizzy?"dizzy":A.music&&!ue.busy?"vibing":A.base);if(ae!==A.mood){A.mood=ae;let je=vr[ae].emote;je!==Y&&(Y=je,je&&(w.material.map=S[je]||(S[je]=Jw(je)),w.material.needsUpdate=!0,w.userData.pop=0))}let fe=vr[ae],Se=Math.min(A.speed/2.4,1);A.walkPhase+=H*(4+A.speed*3.2);let Ge=Math.sin(A.walkPhase);t[0].rotation.x=U(t[0].rotation.x,Ge*.75*Se,.3),t[1].rotation.x=U(t[1].rotation.x,-Ge*.75*Se,.3);let Ce={x:-Ge*.6*Se,z:-.08},Ve={x:Ge*.6*Se,z:.08},ye=Math.sin(X*2.2)*.012,Pe=Math.abs(Math.cos(A.walkPhase))*.06*Se+ye,et=Math.sin(X*1.3)*.04,re=0;if(A.mode==="wave"?(Ve={x:-.2,z:2.55+Math.sin(X*9)*.32},et=.12,A.modeT>2.4&&W("idle")):A.mode==="point"?(Ve={x:-1.35,z:.45},Ce={x:.1,z:-.12}):A.mode==="celebrate"?(Ce={x:0,z:-2.6-Math.sin(X*12)*.2},Ve={x:0,z:2.6+Math.sin(X*12)*.2},Pe+=Math.abs(Math.sin(A.modeT*7))*.25*Math.max(0,1-A.modeT/2),A.modeT>2.2&&W("idle")):A.mode==="think"&&(Ve={x:-2.1,z:-.9},et=-.15),ae==="vibing"&&Se<.2){let je=Math.sin(X*Math.PI*2*1.6);Pe+=Math.abs(je)*.03,et=je*.12,re=je*.05,Ce.z=-.25-Math.abs(je)*.2,Ve.z=.25+Math.abs(je)*.2}ae==="sleepy"&&(et=.25+Math.sin(X*.8)*.05,Pe-=.02),ae==="dizzy"&&(re=Math.sin(X*5)*.12,et=Math.cos(X*5)*.2),ae==="annoyed"&&Se<.2&&(Ce={x:-.5,z:.9},Ve={x:-.5,z:-.9}),ae==="shy"&&Se<.2&&(Ce={x:-.6,z:.5},Ve={x:-.6,z:-.5},et=.18),ae==="thinking"&&A.mode==="idle"&&(Ve={x:-2.1,z:-.9}),(ae==="excited"||ae==="love")&&A.mode==="idle"&&Se<.2&&(Pe+=Math.abs(Math.sin(X*6))*.05),ae==="cool"&&A.mode==="idle"&&Se<.2&&(Ve={x:-.3,z:.15},Ce={x:.1,z:-.5}),c[0].rotation.x=U(c[0].rotation.x,Ce.x,.18),c[0].rotation.z=U(c[0].rotation.z,Ce.z,.18),c[1].rotation.x=U(c[1].rotation.x,Ve.x,.18),c[1].rotation.z=U(c[1].rotation.z,Ve.z,.18),e.position.y=Pe,e.rotation.z=U(e.rotation.z,re,.1),n.scale.y=1+ye,d.rotation.y=U(d.rotation.y,A.look.x*.5,.08),d.rotation.x=U(d.rotation.x,-A.look.y*.25+(A.talk?Math.sin(X*9)*.03:0),.08),d.rotation.z=U(d.rotation.z,et,.06),A.blinkT-=H;let V=1;A.blinkT<.14&&(V=Math.abs(A.blinkT-.07)/.07),A.blinkT<0&&(A.blinkT=2+Math.random()*3);let Me=A.talk?Math.round((.5+.5*Math.sin(X*22))*(.6+.4*Math.sin(X*7.1))*4)/4:0,Je=fe.eyes==="spiral"||fe.eyes==="heart"||fe.mouth==="wavy",Be=`${ae}|${V<.25?0:1}|${Me}|${Math.round(A.look.x*4)}|${Math.round(A.look.y*4)}|${Je?Math.floor(X*20):0}`;Be!==A.faceKey&&(A.faceKey=Be,Zw(m,{mood:ae,blink:V,mouth:Me,lx:A.look.x,ly:A.look.y,t:X}),_.needsUpdate=!0);let ke=!!fe.glasses,tt=A.music;ke!==!!T.userData.on&&(T.userData.on=ke,de(T,ke)),tt!==!!M.userData.on&&(M.userData.on=tt,de(M,tt));for(let je of[T,M]){let z=je.userData.target??.001,it=U(je.scale.x,z,.18);je.scale.setScalar(it),it<.01&&z<.01&&(je.visible=!1)}if(Y){w.userData.pop=Math.min(1,(w.userData.pop||0)+H*4);let je=w.userData.pop,z=1+Math.sin(je*Math.PI)*.35;w.scale.setScalar(.42*je*z),w.position.y=2.3+Math.sin(X*3)*.05}else w.scale.setScalar(U(w.scale.x,.001,.2));if(B.setHex(fe.aura),k.lerp(B,.06),E.material.color.copy(k).multiplyScalar(1.6),E.material.opacity=.35+Math.sin(X*3)*.12,E.scale.setScalar(1+Math.sin(X*3)*.04),A.spin>0){let je=Math.min(A.spin,H*12);A.spin-=je,e.rotation.y+=je}else e.rotation.y=U(e.rotation.y,0,.2)}return{root:s,head:d,st:A,update:be,setMode:W,setMood:I,poke:J,headAnchor:()=>d.localToWorld(new O(0,.9,0))}}var Vs=[new O(2.8,0,hn[0]/2+Hs+2.6),new O(-3.3,0,hn[1]/2+1),new O(3.3,0,hn[2]/2+1),new O(-3.3,0,hn[3]/2+1),new O(3.3,0,hn[4]/2+1),new O(-2.9,0,hn[5]/2+1),new O(0,0,2.05)],Pv=Vs.length,Kw=yi/8,Qw=Hs/8;function Kf(s,e){let t=0;for(let n=0;n<hn.length;n++)Math.abs(s)<=hn[n]/2+.05&&Math.abs(e)<=hn[n]/2+.05&&(t=Math.max(t,(n+1)*yi));if(Math.abs(s)<=1.3)for(let n=0;n<hn.length;n++){let i=hn[n]/2,r=i+Hs;e>=i&&e<=r&&(t=Math.max(t,rs(n)+Math.min(8,Math.ceil((r-e)/Qw+1e-4))*Kw))}return t}var $m=[];for(let s=0;s<Vs.length-1;s++){let e=Vs[s],t=Vs[s+1],n=[new De(e.x,e.z),new De(0,hn[s]/2+Hs+.35),new De(0,hn[s]/2-.4),new De(t.x,t.z)],i=[0];for(let r=1;r<n.length;r++)i.push(i[r-1]+n[r].distanceTo(n[r-1]));$m.push({pts:n,len:i})}function Zm(s,e=new De){let t=Math.min(Math.floor(s),$m.length-1),n=Ki.clamp(s-t,0,1);if(s>=Vs.length-1)return e.set(Vs[Vs.length-1].x,Vs[Vs.length-1].z),e;let i=$m[t],r=n*i.len[i.len.length-1],o=1;for(;o<i.len.length-1&&i.len[o]<r;)o++;let a=(r-i.len[o-1])/(i.len[o]-i.len[o-1]||1);return e.copy(i.pts[o-1]).lerp(i.pts[o],a)}var Iv=s=>{let e=Vs[s].clone();return e.y=Kf(e.x,e.z),e};var Jm=["Start","About","Stack","Work","Research","Contests","Contact"],Dv=["wave","point","think","point","point","celebrate","wave"],Lv={en:[["Hi, I'm Adham. This pyramid is my stack, one layer per step.","Scroll to climb with me, or click me anytime."],["Step one. I study AI & Data Science, but backend is home.","APIs, databases, and the logic nobody sees. That's my favourite part."],["Node.js and PostgreSQL for servers, C++ for contests, Python for data.","And tests: Jest and supertest on the SmartHabbit backend."],["SmartHabbit is my main project. I built most of its backend.","That space game? We built it for NASA Space Apps 2026."],["Sensor data goes to XGBoost, network traffic to Isolation Forest.","Both fuse into one risk tier. The paper is on IEEE Xplore."],["In ICPC, every balloon means a solved problem.","ECPC qualifications: 88th in 2025, 177th in 2026."],["We made it to the top. Send me a message below.","Or grab my email, GitHub or LinkedIn from the links."]],ar:[["\u0623\u0647\u0644\u0627\u064B\u060C \u0623\u0646\u0627 \u0623\u062F\u0647\u0645. \u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0627\u0644\u0640 stack \u0628\u062A\u0627\u0639\u064A\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u0637\u0628\u0642\u0629.","\u0627\u0639\u0645\u0644 scroll \u0648\u0623\u0646\u0627 \u0647\u0637\u0644\u0639 \u0645\u0639\u0627\u0643\u060C \u0648\u062F\u0648\u0633 \u0639\u0644\u064A\u0651\u0627 \u0641\u064A \u0623\u064A \u0648\u0642\u062A."],["\u0623\u0648\u0644 \u062F\u0631\u062C\u0629. \u0628\u062F\u0631\u0633 AI \u0648 Data Science\u060C \u0628\u0633 \u0642\u0644\u0628\u064A \u0645\u0639 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F.","\u0627\u0644\u0640 APIs \u0648\u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u0644\u064A \u0645\u062D\u062F\u0634 \u0628\u064A\u0634\u0648\u0641\u0647\u060C \u062F\u064A \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629 \u0628\u062D\u0628\u0647\u0627."],["Node.js \u0648 PostgreSQL \u0644\u0644\u0633\u064A\u0631\u0641\u0631\u0627\u062A\u060C C++ \u0644\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062A\u060C \u0648 Python \u0644\u0644\u062F\u0627\u062A\u0627.","\u0648\u062A\u0633\u062A\u0627\u062A: Jest \u0648 supertest \u0639\u0644\u0649 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639 SmartHabbit."],["SmartHabbit \u0623\u0647\u0645 \u0645\u0634\u0631\u0648\u0639 \u0639\u0646\u062F\u064A\u060C \u0648\u0623\u0646\u0627 \u0639\u0627\u0645\u0644 \u0623\u063A\u0644\u0628 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639\u0647.","\u0644\u0639\u0628\u0629 \u0627\u0644\u0641\u0636\u0627\u0621 \u062F\u064A\u061F \u0639\u0645\u0644\u0646\u0627\u0647\u0627 \u0641\u064A NASA Space Apps 2026."],["\u062F\u0627\u062A\u0627 \u0627\u0644\u062D\u0633\u0627\u0633\u0627\u062A \u0628\u062A\u0631\u0648\u062D \u0644\u0640 XGBoost\u060C \u0648\u062A\u0631\u0627\u0641\u064A\u0643 \u0627\u0644\u0634\u0628\u0643\u0629 \u0644\u0640 Isolation Forest.","\u0627\u0644\u0627\u062A\u0646\u064A\u0646 \u0628\u064A\u062A\u062C\u0645\u0639\u0648\u0627 \u0641\u064A risk tier \u0648\u0627\u062D\u062F\u060C \u0648\u0627\u0644\u0648\u0631\u0642\u0629 \u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 IEEE Xplore."],["\u0641\u064A \u0627\u0644\u0640 ICPC\u060C \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A.","\u062A\u0635\u0641\u064A\u0627\u062A ECPC: \u0627\u0644\u0645\u0631\u0643\u0632 88 \u0633\u0646\u0629 2025\u060C \u0648177 \u0633\u0646\u0629 2026."],["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u0642\u0645\u0629! \u0627\u0628\u0639\u062A\u0644\u064A \u0631\u0633\u0627\u0644\u0629 \u0645\u0646 \u062A\u062D\u062A.","\u0623\u0648 \u062E\u062F \u0627\u0644\u0625\u064A\u0645\u064A\u0644 \u0623\u0648 \u0627\u0644\u0640 GitHub \u0623\u0648 \u0627\u0644\u0640 LinkedIn \u0645\u0646 \u0627\u0644\u0644\u064A\u0646\u0643\u0627\u062A."]]},Nv={en:["Hey, that tickles!","Status 418: I'm a teapot.","SELECT * FROM snacks;"],ar:["\u0628\u062A\u0632\u063A\u0632\u063A\u0646\u064A \u0643\u062F\u0647!","Status 418: \u0623\u0646\u0627 \u0628\u0631\u0627\u062F \u0634\u0627\u064A \u2615","SELECT * FROM snacks;"]},Uv={en:"201 Created. Message sent.",ar:"201 Created. \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u062A\u0628\u0639\u062A\u062A."},$c={balloon:{en:"Pop! Each balloon is a solved problem.",ar:"\u0628\u0648\u0645! \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A."},rocket:{en:"Full thrust! Same energy as hackathon weekend.",ar:"Full thrust! \u0646\u0641\u0633 \u0637\u0627\u0642\u0629 \u0648\u064A\u0643 \u0625\u0646\u062F \u0627\u0644\u0647\u0627\u0643\u0627\u062B\u0648\u0646."},moon:{en:"The Moon from Level 0 of CAPCOM: Storm Watch says hi.",ar:"\u0627\u0644\u0642\u0645\u0631 \u0628\u062A\u0627\u0639 Level 0 \u0641\u064A \u0644\u0639\u0628\u0629 CAPCOM \u0628\u064A\u0633\u0644\u0651\u0645 \u0639\u0644\u064A\u0643."},cap:{en:"You found the capstone. Send me a message below.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628! \u0627\u0628\u0639\u062A\u0644\u064A \u0631\u0633\u0627\u0644\u0629 \u0645\u0646 \u062A\u062D\u062A."}},Km={"C++":["ICPC contests and Sentinel FDS, a Qt desktop app.","\u0645\u0633\u0627\u0628\u0642\u0627\u062A ICPC\u060C \u0648 Sentinel FDS \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 Qt."],TypeScript:["The SmartHabbit backend and the BU-LabTrack frontend.","\u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639 SmartHabbit \u0648\u0627\u0644\u0641\u0631\u0648\u0646\u062A \u0628\u062A\u0627\u0639 BU-LabTrack."],JavaScript:["CAPCOM: Storm Watch and this 3D portfolio.","\u0644\u0639\u0628\u0629 CAPCOM \u0648\u0627\u0644\u0628\u0648\u0631\u062A\u0641\u0648\u0644\u064A\u0648 \u0627\u0644\u0640 3D \u062F\u0647."],Python:["Experiments for my IEEE IoT anomaly-detection paper.","\u062A\u062C\u0627\u0631\u0628 \u0648\u0631\u0642\u0629 IEEE \u0628\u062A\u0627\u0639\u062A\u064A \u0639\u0646 anomaly detection \u0641\u064A IoT."],SQL:["SmartHabbit schema: 11 PostgreSQL migrations.","\u0633\u0643\u064A\u0645\u0627 SmartHabbit: 11 migration \u0639\u0644\u0649 PostgreSQL."],Java:["OOP at ITI DevBelt; HackerRank Java (Basic) certificate.","OOP \u0641\u064A ITI DevBelt\u060C \u0648\u0634\u0647\u0627\u062F\u0629 Java (Basic) \u0645\u0646 HackerRank."],"Node.js":["My main backend runtime: SmartHabbit and BU-LabTrack.","\u0627\u0644\u0640 runtime \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0628\u062A\u0627\u0639\u064A: SmartHabbit \u0648 BU-LabTrack."],Express:["Routes, middleware and error handling in SmartHabbit.","\u0627\u0644\u0640 routes \u0648\u0627\u0644\u0640 middleware \u0648\u0627\u0644\u0640 error handling \u0641\u064A SmartHabbit."],REST:["BU-LabTrack: labs, equipment, reservations, maintenance.","BU-LabTrack: \u0645\u0639\u0627\u0645\u0644 \u0648\u0623\u062C\u0647\u0632\u0629 \u0648\u062D\u062C\u0648\u0632\u0627\u062A \u0648\u0635\u064A\u0627\u0646\u0629."],JWT:["Access + refresh tokens, with bcrypt and rate limits.","Access \u0648 refresh tokens \u0645\u0639 bcrypt \u0648 rate limit."],"socket.io":["Real-time chat and notifications in SmartHabbit.","\u0627\u0644\u0634\u0627\u062A \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u062D\u0638\u064A\u0629 \u0641\u064A SmartHabbit."],PostgreSQL:["SmartHabbit's database, tested against a scratch DB.","\u062F\u0627\u062A\u0627\u0628\u064A\u0632 SmartHabbit\u060C \u0648\u0645\u062A\u064A\u0633\u0651\u062A\u0629 \u0639\u0644\u0649 \u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0645\u0624\u0642\u062A\u0629."],SQLite:["Sentinel FDS stores its transactions in SQLite.","Sentinel FDS \u0628\u064A\u062E\u0632\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A SQLite."],MySQL:["Database coursework.","\u0643\u0648\u0631\u0633\u0627\u062A \u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632."],XGBoost:["The supervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 supervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],"Isolation Forest":["The unsupervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 unsupervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],React:["BU-LabTrack's frontend, with shadcn/ui.","\u0641\u0631\u0648\u0646\u062A BU-LabTrack \u0645\u0639 shadcn/ui."],"three.js":["CAPCOM: Storm Watch and this 3D portfolio.","\u0644\u0639\u0628\u0629 CAPCOM \u0648\u0627\u0644\u0628\u0648\u0631\u062A\u0641\u0648\u0644\u064A\u0648 \u0627\u0644\u0640 3D \u062F\u0647."],Docker:["SmartHabbit ships in a non-root Docker image.","SmartHabbit \u0628\u064A\u062A\u0634\u062D\u0646 \u0641\u064A Docker image \u0645\u0646 \u063A\u064A\u0631 root."],Git:["Version control on every project.","Version control \u0641\u064A \u0643\u0644 \u0645\u0634\u0631\u0648\u0639."],Jest:["Integration tests with supertest in SmartHabbit.","\u062A\u0633\u062A\u0627\u062A integration \u0645\u0639 supertest \u0641\u064A SmartHabbit."],Postman:["Testing every API before the frontend touches it.","\u0628\u062C\u0631\u0628 \u0643\u0644 API \u0642\u0628\u0644 \u0645\u0627 \u0627\u0644\u0641\u0631\u0648\u0646\u062A \u064A\u0644\u0645\u0633\u0647."],Qt:["Sentinel FDS, a C++17 desktop app.","Sentinel FDS\u060C \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 C++17."],Vercel:["CAPCOM is deployed there, with a serverless function.","CAPCOM \u0645\u062A\u0646\u0634\u0631\u0629 \u0647\u0646\u0627\u0643 \u0645\u0639 serverless function."]},Ss={term:{en:'Ooh, a terminal. Type "help".',ar:"\u062A\u064A\u0631\u0645\u064A\u0646\u0627\u0644! \u0627\u0643\u062A\u0628 help."},threatHi:{en:"Critical risk! The fusion layer would raise the alarm right now.",ar:"\u062E\u0637\u0631 \u0639\u0627\u0644\u064A \u062C\u062F\u0627\u064B! \u0637\u0628\u0642\u0629 \u0627\u0644\u0640 fusion \u0643\u0627\u0646\u062A \u0647\u062A\u0636\u0631\u0628 \u0625\u0646\u0630\u0627\u0631 \u062D\u0627\u0644\u0627\u064B."},gameStart:{en:"Go go go! Pop them before they fly away!",ar:"\u064A\u0644\u0627 \u064A\u0644\u0627! \u0641\u0631\u0642\u0639\u0647\u0645 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0637\u064A\u0631\u0648\u0627!"},gameEnd:{en:s=>`${s} balloons! ${s>=8?"That's a gold-medal pace.":"Not bad. Try again?"}`,ar:s=>`${s} \u0628\u0627\u0644\u0648\u0646\u0629! ${s>=8?"\u062F\u0647 \u0645\u0633\u062A\u0648\u0649 \u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u062F\u0647\u0628.":"\u0645\u0634 \u0648\u062D\u0634. \u062A\u062C\u0631\u0628 \u062A\u0627\u0646\u064A\u061F"}`},wake:{en:"Huh? I wasn't sleeping. I was\u2026 compiling.",ar:"\u0647\u0627\u061F \u0623\u0646\u0627 \u0645\u0643\u0646\u062A\u0634 \u0646\u0627\u064A\u0645\u2026 \u0643\u0646\u062A \u0628\u0639\u0645\u0644 compile."},dizzy:{en:"Whoa, slow down! The stairs are spinning.",ar:"\u0628\u0627\u0644\u0631\u0627\u062D\u0629! \u0627\u0644\u0633\u0644\u0645 \u0628\u064A\u0644\u0641 \u0628\u064A\u0627."},shy:{en:"Okay, okay. Let's keep climbing.",ar:"\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635\u060C \u064A\u0644\u0627 \u0646\u0643\u0645\u0644 \u0637\u0644\u0648\u0639."},annoyed:{en:"Error 429: too many pokes.",ar:"Error 429: \u0632\u0642\u0627\u062A \u0643\u062A\u064A\u0631 \u0623\u0648\u064A."},allArtifacts:{en:"You found all ten artifacts. Thanks for exploring.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0639\u0634\u0631 \u0642\u0637\u0639 \u0643\u0644\u0647\u0645! \u0634\u0643\u0631\u0627\u064B \u0625\u0646\u0643 \u0627\u0633\u062A\u0643\u0634\u0641\u062A."},focus:{en:"Here it is, up close.",ar:"\u0623\u0647\u0648\u060C \u0645\u0646 \u0642\u0631\u064A\u0628."}},Ov=["happy","focused","thinking","excited","focused","cool","happy"];var Qm=[{id:"first-step",name:"First step",hint:"Climb to the first level",icon:"\u{13080}"},{id:"summit",name:"Summit",hint:"Reach the capstone",icon:"\u{13274}"},{id:"poker",name:"Poker face",hint:"Poke mini-Adham 5 times",icon:"\u{13000}"},{id:"moonwalker",name:"Moonwalker",hint:"Click the moon",icon:"\u{131F9}"},{id:"popper",name:"Balloon popper",hint:"Score 8+ in Balloon Rush",icon:"\u{131A3}"},{id:"red-team",name:"Red team",hint:"Max out the attack in Research",icon:"\u{132F9}"},{id:"root",name:"Root access",hint:"Open the terminal",icon:"\u{133CF}"},{id:"polyglot",name:"Polyglot",hint:"Make the guide speak Arabic",icon:"\u{13153}"},{id:"dj",name:"DJ",hint:"Turn the sound on",icon:"\u{13296}"},{id:"hired",name:"201 Created",hint:"Send a real request",icon:"\u{1339B}"}],Bv="adham-artifacts",Bo=new Set;try{Bo=new Set(JSON.parse(localStorage.getItem(Bv)||"[]"))}catch{}var Fv=[],An={list:Qm,has:s=>Bo.has(s),count:()=>Bo.size,onUnlock:s=>Fv.push(s),unlock(s){if(Bo.has(s))return!1;let e=Qm.find(t=>t.id===s);if(!e)return!1;Bo.add(s);try{localStorage.setItem(Bv,JSON.stringify([...Bo]))}catch{}return Fv.forEach(t=>t(e,Bo.size,Qm.length)),!0}};kt.registerPlugin(ft,$f);var st=s=>document.querySelector(s),yr=matchMedia("(prefers-reduced-motion: reduce)").matches,nl=()=>innerWidth<=820,Qf=Pv,an="en";try{an=localStorage.getItem("adham-guide-lang")||"en"}catch{}var ls=new pv({smoothWheel:!yr,lerp:.085,autoRaf:!1});ls.on("scroll",ft.update);kt.ticker.add(s=>ls.raf(s*1e3));kt.ticker.lagSmoothing(0);var jf=[...document.querySelectorAll(".sec")],jw=document.getElementById("stage"),Ms=()=>jw.getBoundingClientRect(),kv=()=>{let s=Ms();return s.width/Math.max(1,s.height)<1.15},tl=s=>ls.scrollTo(jf[s],{offset:nl()?-Ms().height:0,duration:yr?0:2});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",e=>{e.preventDefault(),tl(+s.dataset.go)}));function jm(){let s=st("#name"),e="Adham Harp",t=Array.from("\u{13080}\u{130ED}\u{131A3}\u{131F3}\u{13296}\u{132F9}\u{1339B}\u{133CF}\u{13153}\u{13216}\u{13000}\u{13079}\u{13193}\u{1336F}");if(yr){s.textContent=e;return}let n={p:0};kt.to(n,{p:1,duration:2.4,ease:"power2.inOut",onUpdate(){let i=Math.floor(n.p*e.length);s.innerHTML=[...e].map((r,o)=>o<i||r===" "?r:`<span class="gl">${t[Math.random()*t.length|0]}</span>`).join("")},onComplete(){s.textContent=e}})}var ed=st("#scene"),ri;try{ri=new Wu({canvas:ed,antialias:!0,powerPreference:"high-performance"})}catch{ri=null}var Tt=tA();ri?eA().catch(s=>{console.error(s),st("#loader").classList.add("done"),jm(),t0()}):(ed.remove(),st("#loader").classList.add("done"),jm(),t0());async function eA(){await Promise.race([Promise.all(["700 54px Unbounded",'600 42px "Instrument Sans"'].map(j=>document.fonts.load(j))),new Promise(j=>setTimeout(j,2500))]);let s=Math.min(devicePixelRatio,nl()?1.5:1.75);ri.setPixelRatio(s),ri.setSize(Ms().width,Ms().height,!1),ri.toneMapping=po,ri.toneMappingExposure=1.12,ri.shadowMap.enabled=!0,ri.shadowMap.type=uo;let e=new ao;e.fog=new yl(923202,.0072);let t=new Yn(42,innerWidth/innerHeight,.1,1500),n=new _a,i=0,r=1;n.onProgress=(j,oe,ee)=>{i=oe,r=ee,e0(oe/ee)};let o=nl()||(navigator.hardwareConcurrency||8)<=4?"low":"high",a=vv(e,ri,n,o),l=Cv();e.add(l.root);let c=j=>typeof j=="object"?j[an]:j,h=performance.now(),f=!1,d=[],u=null;for(let j of["pointermove","keydown","wheel","touchstart"])addEventListener(j,()=>{h=performance.now()},{passive:!0});Tt.mood=j=>l.setMood(j,4),document.querySelectorAll("[data-skill]").forEach(j=>j.addEventListener("click",()=>{document.querySelectorAll("[data-skill].on").forEach(Te=>Te.classList.remove("on")),j.classList.add("on");let oe=j.dataset.skill,ee=Km[oe];a.highlightSkill&&a.highlightSkill(oe);let Ke=st("#used-in");Ke&&ee&&(Ke.querySelector("b").textContent=`${oe} \u2014 ${Km[oe][0]}`,kt.fromTo(Ke,{opacity:.3},{opacity:1,duration:.4})),ee&&Tt.say(`${oe}: ${ee[an==="ar"?1:0]}`,{temp:!0,hold:5200}),l.setMood("excited",2.5),tn.play("arrive")})),document.querySelectorAll(".see3d").forEach(j=>j.addEventListener("click",()=>{let oe=a.props.screens?.[j.dataset.screen];if(!oe)return;let ee=new O;oe.getWorldPosition(ee);let Ke=new O(0,0,1).applyQuaternion(oe.getWorldQuaternion(new ci));u={tgt:ee,pos:ee.clone().add(Ke.multiplyScalar(2.6)).add(new O(0,.25,0)),k:0,q:ye},l.setMode("point"),l.setMood("excited",3),Tt.say(c(Ss.focus),{temp:!0}),tn.play("whoosh")}));let p=st("#threat"),x=st("#risk-out");p.addEventListener("input",()=>{let j=p.value/100,oe=Math.min(3,Math.floor(j*4-1e-4));a.props.research.userData.threat=j,x.dataset.tier=Math.max(0,oe),x.querySelector("b").textContent=["Low","Medium","High","Critical"][Math.max(0,oe)],j>.95?(An.unlock("red-team"),l.setMood("surprised",2.5),p.dataset.warned||(p.dataset.warned=1,Tt.say(c(Ss.threatHi),{temp:!0}))):j>.6?l.setMood("worried",2):j>.3&&l.setMood("focused",2)});let m=st("#game-hud"),_=st("#g-score"),v=st("#g-time"),T=st("#best"),y=0;try{y=+localStorage.getItem("adham-balloon-best")||0}catch{}let b=()=>{T.textContent=y?`Best: ${y}`:""};b(),st("#play")?.addEventListener("click",()=>{a.game.active||(tl(5),a.game.start(15),m.hidden=!1,l.setMood("excited",16),Tt.say(c(Ss.gameStart),{temp:!0}),tn.play("whoosh"))}),a.game.onTick=j=>{_.textContent=j.score,v.textContent=Math.max(0,Math.ceil(j.left))},a.game.onEnd=j=>{if(m.hidden=!0,j.score>y){y=j.score;try{localStorage.setItem("adham-balloon-best",y)}catch{}}b(),Tt.say(Ss.gameEnd[an](j.score),{temp:!0,hold:5e3}),l.setMood(j.score>=8?"cool":"happy",4),l.setMode("celebrate"),j.score>=8&&An.unlock("popper")},An.onUnlock((j,oe,ee)=>{l.setMood("love",2.5),tn.play("arrive"),oe===ee&&setTimeout(()=>Tt.say(c(Ss.allArtifacts),{temp:!0,hold:6e3}),1500)});let M=new Wt(Ms().width*s,Ms().height*s,{type:en,samples:4}),g=new Zu(ri,M);g.addPass(new Ju(e,t));let S=null;if(o==="high")try{S=new Ia(e,t,innerWidth,innerHeight),S.output=Ia.OUTPUT.Default,S.blendIntensity=.85,S.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1,scale:1.1}),g.addPass(S)}catch{S=null}let w=new Pa(new De(innerWidth/2,innerHeight/2),.36,.4,.95);g.addPass(w),g.addPass(new Ku);let E=new Ca({uniforms:{tDiffuse:{value:null},t:{value:0},amt:{value:.018}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, amt; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
      void main(){ vec2 d = vUv-.5; float r = dot(d,d);
        vec3 c = texture2D(tDiffuse, vUv).rgb;
        c *= 1. - smoothstep(.15,.7,r)*.45;
        c += (h(vUv*800.)-.5)*amt;
        gl_FragColor = vec4(c,1.); }`});g.addPass(E);let D=!0,P=[],N=[],A,U,k=null;function B(){k=kv(),P=[],N=[];for(let j=0;j<Qf;j++){let oe=Iv(j);if(j===0){k?(P.push(new O(5.6,3.1,oe.z+9.5)),N.push(new O(1.9,2.9,oe.z-3))):(P.push(new O(10,4.6,oe.z+13)),N.push(new O(-1.2,6.2,8)));continue}if(j===Qf-1){P.push(new O(-5.8,oe.y+3.1,10.2)),N.push(new O(-.4,oe.y+1.9,.6));continue}let ee=Math.sign(oe.x)||1,Ke=k?.9:1,Te=[0,-5.6,7.3,-6.6,5.9,-3.9][j],Oe=oe.x+(Te-oe.x)*(j===3?.6:.45);P.push(new O(Oe+Math.sign(Te-oe.x)*1.2,oe.y+3*Ke,oe.z+10.5*Ke)),N.push(new O(Oe,oe.y+1.5,oe.z-1))}A=new Yi(P,!1,"centripetal"),U=new Yi(N,!1,"centripetal")}B();let Y=jf.map(j=>({left:0,right:1,center:.5})[j.dataset.side]??.5),W={k:yr?0:1},I=new O(46,30,90),J=[],de=()=>{let j=ls.scroll??scrollY;J=jf.map(oe=>oe.getBoundingClientRect().top+j)};de(),addEventListener("load",de),new ResizeObserver(de).observe(document.body);let be=(j,oe,ee)=>{let Ke=Ki.clamp((ee-j)/(oe-j),0,1);return Ke*Ke*(3-2*Ke)};function H(){let j=nl()?Ms().height:0,oe=(ls.scroll??scrollY)+j+(innerHeight-j)*.45,ee=(innerHeight-j)*.4,Ke=0;for(let Te=1;Te<J.length;Te++)Ke+=be(J[Te]-ee,J[Te]+ee,oe);return Ke}let X=new De,ue=new Bl;addEventListener("pointermove",j=>{let oe=Ms();X.set(Ki.clamp((j.clientX-oe.left)/oe.width*2-1,-1.5,1.5),Ki.clamp(-((j.clientY-oe.top)/oe.height)*2+1,-1.5,1.5))}),ed.addEventListener("pointerdown",j=>{let oe=Ms(),ee=new De((j.clientX-oe.left)/oe.width*2-1,-((j.clientY-oe.top)/oe.height)*2+1);if(ue.setFromCamera(ee,t),ue.intersectObject(l.root,!0).length){l.poke(),tn.play("poke");let L=performance.now();d=d.filter(q=>L-q<6e3),d.push(L);let R=d.length;if(R>=5&&An.unlock("poker"),R>=7)l.setMood("dizzy",3),Tt.say(c(Ss.annoyed),{temp:!0});else if(R>=5)l.setMood("annoyed",3),Tt.say(c(Ss.annoyed),{temp:!0});else if(R>=3)l.setMood("shy",3),Tt.say(c(Ss.shy),{temp:!0});else{l.setMood("surprised",1.4);let q=Nv[an];Tt.say(q[Math.random()*q.length|0],{temp:!0})}return}let Ke=ue.intersectObjects(a.clickables,!1)[0];if(!Ke)return;let Te=Ke.object,Oe=Te.userData.onClick;if(Oe==="gameBalloon"){a.game.hit(Te)&&tn.play("pop");return}if(Oe==="balloon"){let L=Te.userData.group;if(L.userData.popped)return;L.userData.popped=!0,tn.play("pop"),kt.to(Te.scale,{x:1.5,y:1.7,z:1.5,duration:.08,onComplete:()=>{Te.visible=!1}}),Tt.say($c.balloon[an],{temp:!0}),setTimeout(()=>{Te.visible=!0,Te.scale.set(.01,.01,.01),kt.to(Te.scale,{x:1,y:1.18,z:1,duration:.8,ease:"elastic.out(1,.5)"}),L.userData.popped=!1},5e3)}else Oe==="rocket"?(a.props.rocket.userData.boost=1,tn.play("whoosh"),Tt.say($c.rocket[an],{temp:!0})):Oe==="moon"?(Tt.say($c.moon[an],{temp:!0}),tn.play("arrive"),An.unlock("moonwalker"),l.setMood("surprised",2)):Oe==="cap"&&(Se(),Tt.say($c.cap[an],{temp:!0}))});let ae=0,fe=!1;function Se(){let j=a.props;tn.play("beam"),l.setMode("celebrate"),a.packetBoost=1,kt.timeline().to(j.beam.material,{opacity:.85,duration:.35,ease:"power2.out"}).to(j.capLight,{intensity:60,duration:.3},0).to(j.beam.material,{opacity:0,duration:2.4,ease:"power1.in"},.9).to(j.capLight,{intensity:6,duration:2},1),j.rings.forEach((oe,ee)=>kt.fromTo(oe.scale,{x:1,y:1,z:1},{x:9,y:9,z:9,duration:2.2,delay:ee*.3,ease:"power2.out"})),j.rings.forEach((oe,ee)=>kt.fromTo(oe.material,{opacity:1},{opacity:0,duration:2.2,delay:ee*.3}))}Tt.onSend=()=>{Se(),Tt.say(Uv[an],{temp:!0,hold:5e3}),l.setMood("love",6),An.unlock("hired")},Tt.onTerm=()=>{l.setMood("focused",6),An.unlock("root")},Tt.onLangSet=()=>{an==="ar"&&An.unlock("polyglot")},Tt.onSound=j=>{j&&An.unlock("dj")},Tt.setMood=j=>vr[j]?(l.setMood(j,8),!0):!1,Tt.onLang=()=>{Pe=-1},Tt.onPoke=()=>{l.poke(),tn.play("poke")};function Ge(){let j=Ms(),oe=Math.max(1,j.width),ee=Math.max(1,j.height);ri.setSize(oe,ee,!1),g.setSize(oe,ee),w.setSize(oe/2,ee/2),S&&S.setSize(oe,ee),k!==kv()&&B(),t.aspect=oe/ee,t.fov=oe/ee<.8?58:oe/ee<1.2?50:42,t.updateProjectionMatrix()}addEventListener("resize",Ge),Ge();let Ce=performance.now(),Ve=0,ye=H(),Pe=-1,et=0,re=-1,V=new De,Me=new De,Je=new O,Be=new O;Zm(ye,Me),l.root.position.set(Me.x,Kf(Me.x,Me.y),Me.y);let ke=0,tt=0,je=location.hash.startsWith("#hq"),z=location.hash==="#hqsnap";function it(){let j=performance.now(),oe=Math.min((j-Ce)/1e3,.05);Ce=j,Ve+=oe;let ee=Ve,Ke=H();ye+=(Ke-ye)*Math.min(1,oe*(yr?30:3.4)),z&&(ye=Ke),Zm(ye,V);let Te=V.distanceTo(Me),Oe=l.root;Oe.position.x=V.x,Oe.position.z=V.y;let L=Kf(V.x,V.y);Oe.position.y+=(L-Oe.position.y)*Math.min(1,oe*16),l.st.speed+=(Te/Math.max(oe,.001)-l.st.speed)*.2;let R;Te>.004?R=Math.atan2(V.x-Me.x,V.y-Me.y):R=Math.atan2(t.position.x-Oe.position.x,t.position.z-Oe.position.z);let q=R-Oe.rotation.y;q=Math.atan2(Math.sin(q),Math.cos(q)),Oe.rotation.y+=q*Math.min(1,oe*7),Me.copy(V),l.st.look.set(X.x*.6,X.y*.5),l.st.talk=Tt.talking()?1:0;let pe=Ki.clamp(ye/(Qf-1),0,1);if(A.getPoint(pe,t.position),U.getPoint(pe,Be),W.k>0&&t.position.lerp(I,W.k*W.k),u&&(Math.abs(ye-u.q)>.25&&(u.out=!0),u.k+=((u.out?0:1)-u.k)*Math.min(1,oe*3),u.out&&u.k<.01&&(u=null),u)){let F=u.k*u.k*(3-2*u.k);t.position.lerp(u.pos,F),Be.lerp(u.tgt,F)}t.position.x+=X.x*.35,t.position.y+=X.y*.2,t.lookAt(Be);let ie=Math.round(ye);Math.abs(ye-ie)<.02?et+=z?1:oe:et=0,et>.25&&Pe!==ie&&(Pe=ie,Tt.lines(Lv[an][ie]),l.setMode(Dv[ie]),tn.play("arrive"),l.setMood(Ov[ie]),ie>=1&&An.unlock("first-step"),ie===Qf-1&&An.unlock("summit")),Math.abs(ye-Pe)>.18&&Pe!==-1&&(Pe=-1,Tt.hide(),l.st.mode!=="celebrate"&&l.setMode("idle")),ie!==re&&(re=ie,Tt.level(ie)),a.packetBoost=Math.max(a.packetBoost,Math.min(1,Math.abs(ls.velocity||0)/60)),a.update(ee,oe,t);let ge=(performance.now()-h)/1e3,xe=Math.abs(ls.velocity||0),$=ge>25&&!a.game.active;f&&!$&&(l.setMood("surprised",1.6),Tt.say(c(Ss.wake),{temp:!0})),f=$,xe>110&&l.st.mood!=="dizzy"&&Tt.say(c(Ss.dizzy),{temp:!0}),l.st.music=tn.on,l.update(oe,ee,{sleepy:$,dizzy:xe>110,busy:Te>.004}),Tt.moodChip(l.st.mood,vr[l.st.mood].aura);let ne=l.headAnchor();Je.copy(ne).project(t);let me=Ms();if(Tt.place((Je.x*.5+.5)*me.width,(-Je.y*.5+.5)*me.height,Je.z<1,me),(ae=(ae+1)%6)===0){ue.setFromCamera(X,t);let F=ue.intersectObject(l.root,!0).length>0,se=F||ue.intersectObjects(a.clickables,!1).length>0;se!==fe&&(fe=se,ed.style.cursor=se?"pointer":""),Tt.hint(F,(Je.x*.5+.5)*me.width,(-Je.y*.5+.5)*me.height)}if(E.uniforms.t.value=ee,D?g.render(oe):ri.render(e,t),ke++,!je&&ke>30&&(tt+=oe,ke>120)){je=!0;let F=tt/90;F>.028&&S&&(S.enabled=!1),F>.034&&(s=1,ri.setPixelRatio(1),Ge(),F>.05&&(D=!1,ri.shadowMap.enabled=!1))}}location.hash.startsWith("#hq")&&(window.__game=a.game),location.hash.startsWith("#hq")&&(window.__face=j=>{j&&l.setMood(j,60);let oe=l.headAnchor();oe.y-=.55;let ee=new O(t.position.x-oe.x,0,t.position.z-oe.z).normalize();u={tgt:oe,pos:oe.clone().add(ee.multiplyScalar(1.9)).add(new O(0,.15,0)),k:0,q:ye}}),location.hash==="#debug"&&(window.__dbg=()=>({qS:ye,q:H(),lastSpoken:Pe,settleT:et,mode:l.st.mode,speed:l.st.speed,pos:l.root.position.toArray().map(j=>+j.toFixed(2)),scroll:ls.scroll,bounds:J}));try{await Promise.race([ri.compileAsync(e,t),new Promise(j=>setTimeout(j,4e3))])}catch{}kt.ticker.add(it),await new Promise(j=>{r<=i&&j(),n.onLoad=j,setTimeout(j,6e3)}),e0(1),setTimeout(()=>{st("#loader").classList.add("done"),jm(),t0(),yr||kt.to(W,{k:0,duration:3.2,ease:"power3.inOut",onComplete:()=>{Math.round(ye)===0&&(Pe=-1)}})},350)}function e0(s){let e=document.querySelectorAll(".ld-s"),t=Math.round(s*e.length);e.forEach((i,r)=>i.classList.toggle("on",r<t));let n=st("#ld-pct");n&&(n.textContent=`${Math.round(s*100)}%`)}e0(.15);function t0(){yr||(document.querySelectorAll(".sec:not(#hero)").forEach(s=>{let e=s.querySelector("h2"),t=e?$f.create(e,{type:"words",mask:"words"}):null,n=kt.timeline({scrollTrigger:{trigger:s,start:"top 75%",once:!0}});t&&n.from(t.words,{yPercent:110,duration:.8,stagger:.06,ease:"power3.out"});let i=s.querySelectorAll(":scope > .label, :scope > p, .facts li, .skills button, .proj, .pipe > *, .sim, .game-card, .certs li, .bench li, #req, .contact-links li, .wall li");i.length&&n.from(i,{y:16,opacity:0,duration:.55,stagger:.025,ease:"power2.out"},.1)}),kt.from("#hero > :not(h1)",{y:20,opacity:0,duration:.9,stagger:.1,ease:"power3.out",delay:.4}))}function tA(){let s=st("#bubble"),e=st("#bubble-text"),t=st("#bubble-next"),n=st("#poke-hint"),i=[],r=0,o=null,a=!1,l=null,c=null,h=!1,f={onSend:null,onLang:null,onPoke:null};function d(re){clearTimeout(l),o&&o.kill(),e.innerHTML="";let V=document.createElement("span");V.className="ghost",V.textContent=re;let Me=document.createElement("span");Me.className="typed",e.append(V,Me),a=!0,s.hidden=!1,s.dir=an==="ar"?"rtl":"ltr",s.lang=an,h||(h=!0,kt.fromTo(s,{scale:.6,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2)"}));let Je=Array.from(re),Be={n:0};o=kt.to(Be,{n:Je.length,duration:yr?0:Math.min(2.6,Je.length*.028),ease:"none",onUpdate:()=>{let ke=Math.round(Be.n);ke!==Me.textContent.length&&ke%2===0&&tn.play("tick"),Me.textContent=Je.slice(0,ke).join("")},onComplete:()=>{a=!1,Me.textContent=re,r<i.length-1&&(l=setTimeout(()=>u(),2600))}})}function u(){r<i.length-1?(r++,d(i[r])):i.length&&(r=0,d(i[0]))}t.addEventListener("click",()=>{clearTimeout(c),u()}),s.addEventListener("click",re=>{(re.target===s||re.target===e)&&(clearTimeout(c),u())}),f.lines=re=>{clearTimeout(c),i=re,r=0,d(re[0])},f.say=(re,{temp:V,hold:Me=3200}={})=>{let Je=i.slice(),Be=r,ke=i;d(re),clearTimeout(c),V&&(c=setTimeout(()=>{Je.length&&i===ke&&(r=Be,d(i[r]))},Me))},f.hide=()=>{clearTimeout(l),clearTimeout(c),i=[],h&&(h=!1,a=!1,o&&o.kill(),kt.to(s,{scale:.7,opacity:0,duration:.2,onComplete:()=>{h||(s.hidden=!0)}}))},f.talking=()=>a;let p=0,x=0;f.place=(re,V,Me,Je)=>{if(s.hidden)return;p=s.offsetWidth,x=s.offsetHeight;let Be=nl()?62:74,ke=re-40,tt=V-x-20,je=!1,z=!1;tt<Be&&nl()?(z=!0,tt=V+10,ke=re+44+p<Je.width?re+44:re-p-44):tt<Be&&(tt=V+30,je=!0),ke=Math.max(10,Math.min(Je.width-p-10,ke)),tt=Math.max(Be,Math.min(Je.height-x-10,tt)),s.classList.toggle("below",je),s.classList.toggle("side",z),s.style.setProperty("--tail",`${Math.max(20,Math.min(p-20,re-ke))}px`),s.style.transform=`translate(${ke}px,${tt}px)`,s.style.visibility=Me?"visible":"hidden"},f.hint=(re,V,Me)=>{n.classList.toggle("on",re&&!h),re&&(n.style.transform=`translate(${V+30}px,${Me+40}px)`)};let m=st("#mini"),_=st("#mini-label"),v=[86,74,62,50,38,26,14];m.innerHTML=v.map((re,V)=>`<rect data-i="${V}" x="${(90-re)/2}" y="${128-V*19}" width="${re}" height="16" rx="2"><title>${Jm[V]}</title></rect>`).join(""),m.querySelectorAll("rect").forEach(re=>re.addEventListener("click",()=>tl(+re.dataset.i)));let T=document.querySelectorAll(".links a");f.level=re=>{f.current=re,m.querySelectorAll("rect").forEach((V,Me)=>{V.classList.toggle("on",Me===re),V.classList.toggle("done",Me<re)}),_.textContent=Jm[re],T.forEach(V=>V.classList.toggle("on",+V.dataset.go===re))};let y=st("#lang"),b=()=>{y.textContent=an==="ar"?"EN":"\u0639",y.setAttribute("aria-label",an==="ar"?"Switch the guide to English":"Switch the guide to Egyptian Arabic"),document.documentElement.classList.toggle("ar",an==="ar")};y.addEventListener("click",()=>{an=an==="ar"?"en":"ar";try{localStorage.setItem("adham-guide-lang",an)}catch{}b(),f.onLang&&f.onLang(),f.onLangSet&&f.onLangSet()}),b();let M={name:st("#f-name"),email:st("#f-email"),role:st("#f-role"),msg:st("#f-msg")},g=st("#req-preview"),S=st("#req-status"),w=re=>JSON.stringify(re),E="adhamharp994@gmail.com",D=`https://formsubmit.co/ajax/${E}`,P=()=>`POST /api/hire HTTP/1.1
Host: adham107harp.github.io
Content-Type: application/json

{
  "from": ${w(M.name.value||"you")},
  "replyTo": ${w(M.email.value||"you@company.com")},
  "about": ${w(M.role.value||"an opportunity")},
  "message": ${w((M.msg.value||"\u2026").slice(0,140))}
}`,N=()=>{g.textContent=P()};Object.values(M).forEach(re=>re.addEventListener("input",N)),N();let A=!1;st("#req").addEventListener("submit",async re=>{if(re.preventDefault(),A)return;let V=M.name.value.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(M.email.value.trim())?M.msg.value.trim()?null:M.msg:M.email:M.name;if(V){S.textContent=`400 Bad Request: ${V===M.email?"that email doesn't look right":`the ${V.name==="msg"?"message":V.name} is empty`}.`,V.focus(),f.mood&&f.mood("worried");return}if(st("#req .hp").value)return;A=!0;let Me=st("#send-btn");Me.disabled=!0,Me.textContent="Sending\u2026";let Je=performance.now();g.textContent=P()+`

\u2026 awaiting response`;try{let Be=await fetch(D,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:M.name.value.trim(),email:M.email.value.trim(),topic:M.role.value.trim()||"(none)",message:M.msg.value.trim(),_subject:`Portfolio: ${M.role.value.trim()||"new message"} from ${M.name.value.trim()}`,_template:"table",_captcha:"false",_replyto:M.email.value.trim()})}),ke=await Be.json().catch(()=>({}));if(!Be.ok||String(ke.success)!=="true")throw new Error(ke.message||Be.status);let tt=Math.round(performance.now()-Je);g.textContent=P()+`

HTTP/1.1 201 Created  (${tt} ms)
{ "delivered": true, "to": "Adham's inbox" }`,S.textContent="201 Created. Delivered to my inbox. I'll reply to your email.",f.onSend&&f.onSend(),M.msg.value=""}catch{let ke=`mailto:${E}?subject=${encodeURIComponent(`Portfolio: ${M.role.value||"Hello"}`)}&body=${encodeURIComponent(M.msg.value)}`;g.textContent=P()+`

HTTP/1.1 503 Service Unavailable
{ "fallback": "email" }`,S.innerHTML="",S.append("The relay didn't answer. ");let tt=document.createElement("a");tt.href=ke,tt.textContent=`Email me at ${E}`,S.append(tt," instead."),f.mood&&f.mood("worried")}finally{A=!1,Me.disabled=!1,Me.textContent="Send message"}}),st("#copy-mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(E),S.textContent=`Copied ${E}`}catch{S.textContent=E}});let U=st("#term"),k=st("#term-out"),B=st("#term-in"),Y=(re,V="")=>{let Me=document.createElement("div");V&&(Me.className=V),Me.textContent=re,k.appendChild(Me),k.scrollTop=k.scrollHeight},W={home:0,hero:0,about:1,stack:2,work:3,projects:3,research:4,arena:5,contact:6},I={artifacts:()=>(Pe(),"opening the artifact case\u2026"),moods:()=>"moods: happy excited focused thinking cool surprised shy annoyed sleepy dizzy love worried vibing \xB7 try: mood cool",help:()=>"commands: moods \xB7 mood <name> \xB7 artifacts \xB7 whoami \xB7 ls \xB7 cat about \xB7 projects \xB7 research \xB7 arena \xB7 contact \xB7 goto <section> \xB7 lang ar|en \xB7 poke \xB7 sudo hire adham \xB7 clear \xB7 exit",whoami:()=>"Adham Harp \u2014 AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).",ls:()=>"about/  stack/  work/  research/  arena/  contact/  capstone.gold","cat about":()=>"AI & Data Science student at Badya University. Backend in Node.js and PostgreSQL, ML in Python.",projects:()=>"SmartHabbit (backend) \xB7 BU-LabTrack (backend API) \xB7 CAPCOM: Storm Watch (NASA Space Apps 2026)",research:()=>"IoT Sentinel: XGBoost + Isolation Forest + decision fusion \u2192 4-tier risk. IEEE Xplore, ITC-Egypt 2026.",arena:()=>"ICPC ECPC qualifications: 88th (2025), 177th (2026). 248+ Codeforces problems.",contact:()=>`email: ${E}
github: adham107harp
linkedin: adham-harp-43bb6232b`,poke:()=>(f.onPoke&&f.onPoke(),"ouch. he says hi."),"sudo hire adham":()=>(setTimeout(()=>{be(),tl(6),setTimeout(()=>f.onSend&&f.onSend(),2800)},900),"[sudo] permission granted. 201 Created \u2014 taking you to the capstone\u2026"),clear:()=>(k.textContent="",null),exit:()=>(be(),null)};function J(re){let V=re.trim().replace(/\s+/g," ").toLowerCase();if(!V)return;if(Y(`$ ${re}`,"c"),V.startsWith("goto ")){let Be=W[V.slice(5)];if(Be===void 0)return Y(`no such section: ${V.slice(5)}`,"e");be(),tl(Be);return}if(V.startsWith("mood ")){let Be=V.slice(5);return Y(f.setMood&&f.setMood(Be)?`mini-Adham is now ${Be}.`:`unknown mood: ${Be}. try "moods".`,f.setMood&&vr[Be]?"":"e")}if(V.startsWith("lang ")){let Be=V.slice(5);if(Be!=="ar"&&Be!=="en")return Y("lang ar | lang en","e");an=Be;try{localStorage.setItem("adham-guide-lang",an)}catch{}return b(),f.onLang&&f.onLang(),Y(`guide speaks ${Be==="ar"?"Egyptian Arabic":"English"} now.`)}if(V==="sudo rm -rf /")return Y("nice try. the pyramid has stood for 4,600 years.","e");let Me=I[V];if(!Me)return Y(`command not found: ${V}. try "help".`,"e");let Je=Me();Je&&Y(Je)}function de(){f.onTerm&&f.onTerm(),U.hidden=!1,k.textContent||Y('Welcome to adham@saqqara. Type "help".'),setTimeout(()=>B.focus(),30),ls.stop()}function be(){U.hidden=!0,ls.start(),st("#term-btn").focus()}st("#term-btn").addEventListener("click",de),st("#term-close").addEventListener("click",be),U.addEventListener("click",re=>{re.target===U&&be()}),st("#term-form").addEventListener("submit",re=>{re.preventDefault(),J(B.value),B.value=""});let H=st("#sound"),X=()=>{H.setAttribute("aria-pressed",String(tn.on)),H.title=tn.on?"Sound on":"Sound off",H.classList.toggle("on",tn.on)};H.addEventListener("click",()=>{tn.toggle(),X(),f.onSound&&f.onSound(tn.on);try{localStorage.setItem("adham-sound",tn.on?"1":"0")}catch{}}),document.addEventListener("visibilitychange",()=>tn.pause(document.hidden)),X(),addEventListener("keydown",re=>{let V=/INPUT|TEXTAREA/.test(document.activeElement?.tagName);if(!V&&U.hidden&&(re.key==="ArrowDown"||re.key==="ArrowUp"||re.key==="PageDown"||re.key==="PageUp")){re.preventDefault();let Me=f.current??0;tl(Math.max(0,Math.min(jf.length-1,Me+(re.key==="ArrowDown"||re.key==="PageDown"?1:-1))));return}re.key==="Escape"&&!U.hidden?be():(re.key==="`"||re.key==="~")&&!V&&(re.preventDefault(),U.hidden?de():be())});let ue=st("#mood-chip"),ae="";f.moodChip=(re,V)=>{if(re===ae)return;ae=re,ue.querySelector("span").textContent=`mood: ${re}`;let Me="#"+V.toString(16).padStart(6,"0");ue.querySelector("i").style.background=Me,ue.querySelector("i").style.boxShadow=`0 0 10px ${Me}`};let fe=st("#art-btn"),Se=st("#art-count"),Ge=st("#art-panel"),Ce=st("#art-list"),Ve=st("#toasts"),ye=()=>{Se.textContent=An.count(),st("#art-of").textContent=`${An.count()}/${An.list.length}`,Ce.innerHTML=An.list.map(re=>`<li class="${An.has(re.id)?"got":""}"><span class="ic">${re.icon}</span><div><b>${An.has(re.id)?re.name:"???"}</b><span>${re.hint}</span></div></li>`).join("")};function Pe(){ye(),Ge.hidden=!1,ls.stop()}let et=()=>{Ge.hidden=!0,ls.start()};if(fe.addEventListener("click",Pe),st("#art-close").addEventListener("click",et),Ge.addEventListener("click",re=>{re.target===Ge&&et()}),addEventListener("keydown",re=>{re.key==="Escape"&&!Ge.hidden&&et()}),An.onUnlock((re,V,Me)=>{ye(),fe.classList.remove("bump"),fe.offsetWidth,fe.classList.add("bump");let Je=document.createElement("div");Je.className="toast";let Be=document.createElement("span");Be.className="ic",Be.textContent=re.icon;let ke=document.createElement("div");ke.innerHTML=`<small>Artifact ${V}/${Me} unlocked</small>`;let tt=document.createElement("b");tt.textContent=re.name,ke.append(tt),Je.append(Be,ke),Ve.append(Je),kt.fromTo(Je,{x:-40,opacity:0},{x:0,opacity:1,duration:.5,ease:"back.out(2)"}),kt.to(Je,{opacity:0,y:10,delay:3.6,duration:.5,onComplete:()=>Je.remove()})}),ye(),document.querySelectorAll("img.lg").forEach(re=>{let V=()=>{if(re.closest(".certs,.wall")){let Me=document.createElement("span");Me.className="lg-ph",re.replaceWith(Me)}else re.remove()};re.complete&&!re.naturalWidth?V():re.addEventListener("error",V)}),!yr){let re=st("#cursor"),V=re.querySelector(".c-dot"),Me=re.querySelector(".c-ring"),Je=innerWidth/2,Be=innerHeight/2,ke=Je,tt=Be;addEventListener("pointermove",z=>{Je=z.clientX,Be=z.clientY,re.classList.toggle("hot",!!z.target.closest("a,button,input,textarea,label,[data-go]")||document.body.style.cursor==="pointer"||je())});let je=()=>st("#scene")&&st("#scene").style.cursor==="pointer";kt.ticker.add(()=>{ke+=(Je-ke)*.2,tt+=(Be-tt)*.2,V.style.transform=`translate(${Je}px,${Be}px)`,Me.style.transform=`translate(${ke}px,${tt}px)`}),document.querySelectorAll(".mag").forEach(z=>{z.addEventListener("pointermove",it=>{let j=z.getBoundingClientRect();kt.to(z,{x:(it.clientX-j.left-j.width/2)*.25,y:(it.clientY-j.top-j.height/2)*.35,duration:.3})}),z.addEventListener("pointerleave",()=>kt.to(z,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}))}),document.querySelectorAll(".tilt").forEach(z=>{z.addEventListener("pointermove",it=>{if(innerWidth<=820)return;let j=z.getBoundingClientRect(),oe=(it.clientX-j.left)/j.width,ee=(it.clientY-j.top)/j.height;z.style.transform=`perspective(900px) rotateX(${(.5-ee)*5}deg) rotateY(${(oe-.5)*6}deg)`,z.style.setProperty("--gx",`${oe*100}%`),z.style.setProperty("--gy",`${ee*100}%`)}),z.addEventListener("pointerleave",()=>{z.style.transform=""})}),document.querySelectorAll("[data-count]").forEach(z=>{let it=+z.dataset.count,j=z.dataset.suffix||"",oe=it>1e3?it-30:0,ee={v:oe};ft.create({trigger:z,start:"top 90%",once:!0,onEnter:()=>kt.to(ee,{v:it,duration:1.6,ease:"power2.out",onUpdate:()=>z.textContent=Math.round(ee.v)+j})})})}return f}
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

var Wv=Object.defineProperty;var Xv=(s,e,t)=>e in s?Wv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var $e=(s,e,t)=>Xv(s,typeof e!="symbol"?e+"":e,t);var H0=0,Bd=1,V0=2;var fo=1,G0=2,Ta=3,Nr=0,kn=1,In=2,Dn=0,Ea=1,ir=2,kd=3,zd=4,iu=5;var Ji=100,W0=101,X0=102,q0=103,Y0=104,po=200,$0=201,Z0=202,J0=203,Hd=204,Vd=205,Vl=206,K0=207,Gl=208,Q0=209,j0=210,eg=211,tg=212,ng=213,ig=214,Ch=0,Ph=1,Ih=2,la=3,Dh=4,Lh=5,Nh=6,Uh=7,Gd=0,sg=1,rg=2,Ps=0,Wl=1,Xl=2,ql=3,mo=4,Yl=5,$l=6,Zl=7;var Wd=300,go=301,wa=302,su=303,ru=304,Si=1e3,bs=1001,Oh=1002,an=1003,og=1004;var Jl=1005;var ai=1006,ou=1007;var sr=1008;var Jn=1009,Xd=1010,qd=1011,Aa=1012,au=1013,ps=1014,Ki=1015,en=1016,lu=1017,cu=1018,rr=1020,Yd=35902,$d=35899,Zd=1021,Jd=1022,Li=1023,js=1026,ms=1027,hu=1028,uu=1029,Ur=1030,fu=1031;var du=1033,Kl=33776,Ql=33777,jl=33778,ec=33779,pu=35840,mu=35841,gu=35842,_u=35843,xu=36196,vu=37492,yu=37496,Su=37488,Mu=37489,tc=37490,bu=37491,Tu=37808,Eu=37809,wu=37810,Au=37811,Ru=37812,Cu=37813,Pu=37814,Iu=37815,Du=37816,Lu=37817,Nu=37818,Uu=37819,Ou=37820,Fu=37821,Bu=36492,ku=36494,zu=36495,Hu=36283,Vu=36284,nc=36285,Gu=36286;var vl=2300,Fh=2301,wh=2302,Rd=2303,Cd=2400,Pd=2401,Id=2402;var ag=3200;var ic=0,lg=1,or="",zt="srgb",yl="srgb-linear",Sl="linear",Tt="srgb";var Ah=7680;var cg=519,hg=512,ug=513,fg=514,Kd=515,dg=516,pg=517,Qd=518,jd=519,ep=35044;var tp="300 es",Yi=2e3,ca=2001;function qv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mg(){let s=ha("canvas");return s.style.display="block",s}var r0={},ua=null;function Ml(...s){let e="THREE."+s.shift();ua?ua("log",e,...s):console.log(e,...s)}function gg(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function nt(...s){s=gg(s);let e="THREE."+s.shift();if(ua)ua("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function st(...s){s=gg(s);let e="THREE."+s.shift();if(ua)ua("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ro(...s){let e=s.join(" ");e in r0||(r0[e]=!0,nt(...s))}function _g(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xg={[Ch]:Ch,[Ih]:Nh,[Dh]:Dh,[la]:Lh,[Ph]:Ph,[Nh]:Ih,[Uh]:Uh,[Lh]:la},Ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],o0=1234567,_l=Math.PI/180,fa=180/Math.PI;function Or(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function np(s,e){return(s%e+e)%e}function $v(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zv(s,e,t){return s!==e?(t-s)/(e-s):0}function xl(s,e,t){return(1-t)*s+t*e}function Jv(s,e,t,n){return xl(s,e,1-Math.exp(-t*n))}function Kv(s,e=1){return e-Math.abs(np(s,e*2)-e)}function Qv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function jv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ey(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ty(s,e){return s+Math.random()*(e-s)}function ny(s){return s*(.5-Math.random())}function iy(s){s!==void 0&&(o0=s);let e=o0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sy(s){return s*_l}function ry(s){return s*fa}function oy(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ay(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ly(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),u=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(s,e){if(e.constructor===Float32Array)return s;let t=Wu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function rp(s,e){if(e.constructor===Float32Array)return s;let t=Wu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var gs={DEG2RAD:_l,RAD2DEG:fa,generateUUID:Or,clamp:dt,euclideanModulo:np,mapLinear:$v,inverseLerp:Zv,lerp:xl,damp:Jv,pingpong:Kv,smoothstep:Qv,smootherstep:jv,randInt:ey,randFloat:ty,randFloatSpread:ny,seededRandom:iy,degToRad:sy,radToDeg:ry,isPowerOfTwo:oy,ceilPowerOfTwo:ay,floorPowerOfTwo:ip,setQuaternionFromProperEuler:ly,normalize:rp,denormalize:sp},up=class up{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;var De=up,li=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],p=r[o+2],g=r[o+3];if(f!==g||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*g;m<0&&(d=-d,u=-u,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);x=Math.sin(x*v)/T,a=Math.sin(a*v)/T,l=l*x+d*a,c=c*x+u*a,h=h*x+p*a,f=f*x+g*a}else{l=l*x+d*a,c=c*x+u*a,h=h*x+p*a,f=f*x+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-a*u,e[t+2]=c*p+h*u+a*d-l*f,e[t+3]=h*p-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),u=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fp=class fp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;var F=fp,sd=new F,a0=new li,dp=class dp{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],g=i[0],m=i[3],x=i[6],v=i[1],T=i[4],y=i[7],M=i[2],b=i[5],_=i[8];return r[0]=o*g+a*v+l*M,r[3]=o*m+a*T+l*b,r[6]=o*x+a*y+l*_,r[1]=c*g+h*v+f*M,r[4]=c*m+h*T+f*b,r[7]=c*x+h*y+f*_,r[2]=d*g+u*v+p*M,r[5]=d*m+u*T+p*b,r[8]=d*x+u*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,p=t*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=f*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=u*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(e,t)),this}rotate(e){return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-e)),this}translate(e,t){return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;var rt=dp,rd=new rt,l0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cy(){let s={enabled:!0,workingColorSpace:yl,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=aa(i.r),i.g=aa(i.g),i.b=aa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===or?Sl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yl]:{primaries:e,whitePoint:n,transfer:Sl,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),s}var gt=cy();function Qs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function aa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vo,Bh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vo===void 0&&(Vo=ha("canvas")),Vo.width=e.width,Vo.height=e.height;let i=Vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qs(t[n]/255)*255):t[n]=Qs(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hy=0,da=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(od(i[o].image)):r.push(od(i[o]))}else r=od(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function od(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var uy=0,ad=new F,Zn=class s extends Ts{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=bs,i=bs,r=ai,o=sr,a=Li,l=Jn,c=s.DEFAULT_ANISOTROPY,h=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Or(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case Oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case Oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Wd;Zn.DEFAULT_ANISOTROPY=1;var pp=class pp{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(u+1)/2,M=(x+1)/2,b=(h+d)/4,_=(f+g)/4,S=(p+m)/4;return T>y&&T>M?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=b/n,r=_/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=S/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=_/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;var Ht=pp,kh=class extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Zn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new da(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bl=class extends Zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zh=class extends Zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nu=class nu{constructor(e,t,n,i,r,o,a,l,c,h,f,d,u,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,d,u,p,g,m)}set(e,t,n,i,r,o,a,l,c,h,f,d,u,p,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=f,x[14]=d,x[3]=u,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Go.setFromMatrixColumn(e,0).length(),r=1/Go.setFromMatrixColumn(e,1).length(),o=1/Go.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=p+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,p=c*h,g=c*f;t[0]=d+g*a,t[4]=p*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,p=c*h,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=u*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-g*f}else if(e.order==="XZY"){let d=o*l,u=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+g,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,dy)}lookAt(e,t,n){let i=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),br.crossVectors(n,Pi),br.lengthSq()===0&&(Math.abs(n.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),br.crossVectors(n,Pi)),br.normalize(),eh.crossVectors(Pi,br),i[0]=br.x,i[4]=eh.x,i[8]=Pi.x,i[1]=br.y,i[5]=eh.y,i[9]=Pi.y,i[2]=br.z,i[6]=eh.z,i[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],g=n[6],m=n[10],x=n[14],v=n[3],T=n[7],y=n[11],M=n[15],b=i[0],_=i[4],S=i[8],w=i[12],E=i[1],D=i[5],I=i[9],N=i[13],P=i[2],B=i[6],k=i[10],O=i[14],q=i[3],U=i[7],C=i[11],Z=i[15];return r[0]=o*b+a*E+l*P+c*q,r[4]=o*_+a*D+l*B+c*U,r[8]=o*S+a*I+l*k+c*C,r[12]=o*w+a*N+l*O+c*Z,r[1]=h*b+f*E+d*P+u*q,r[5]=h*_+f*D+d*B+u*U,r[9]=h*S+f*I+d*k+u*C,r[13]=h*w+f*N+d*O+u*Z,r[2]=p*b+g*E+m*P+x*q,r[6]=p*_+g*D+m*B+x*U,r[10]=p*S+g*I+m*k+x*C,r[14]=p*w+g*N+m*O+x*Z,r[3]=v*b+T*E+y*P+M*q,r[7]=v*_+T*D+y*B+M*U,r[11]=v*S+T*I+y*k+M*C,r[15]=v*w+T*N+y*O+M*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],g=e[7],m=e[11],x=e[15],v=l*u-c*d,T=a*u-c*f,y=a*d-l*f,M=o*u-c*h,b=o*d-l*h,_=o*f-a*h;return t*(g*v-m*T+x*y)-n*(p*v-m*M+x*b)+i*(p*T-g*M+x*_)-r*(p*y-g*b+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],g=e[13],m=e[14],x=e[15],v=t*a-n*o,T=t*l-i*o,y=t*c-r*o,M=n*l-i*a,b=n*c-r*a,_=i*c-r*l,S=h*g-f*p,w=h*m-d*p,E=h*x-u*p,D=f*m-d*g,I=f*x-u*g,N=d*x-u*m,P=v*N-T*I+y*D+M*E-b*w+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/P;return e[0]=(a*N-l*I+c*D)*B,e[1]=(i*I-n*N-r*D)*B,e[2]=(g*_-m*b+x*M)*B,e[3]=(d*b-f*_-u*M)*B,e[4]=(l*E-o*N-c*w)*B,e[5]=(t*N-i*E+r*w)*B,e[6]=(m*y-p*_-x*T)*B,e[7]=(h*_-d*y+u*T)*B,e[8]=(o*I-a*E+c*S)*B,e[9]=(n*E-t*I-r*S)*B,e[10]=(p*b-g*y+x*v)*B,e[11]=(f*y-h*b-u*v)*B,e[12]=(a*w-o*D-l*S)*B,e[13]=(t*D-n*w+i*S)*B,e[14]=(g*T-p*M-m*v)*B,e[15]=(h*M-f*T+d*v)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,p=r*f,g=o*h,m=o*f,x=a*f,v=l*c,T=l*h,y=l*f,M=n.x,b=n.y,_=n.z;return i[0]=(1-(g+x))*M,i[1]=(u+y)*M,i[2]=(p-T)*M,i[3]=0,i[4]=(u-y)*b,i[5]=(1-(d+x))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(p+T)*_,i[9]=(m-v)*_,i[10]=(1-(d+g))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Go.set(i[0],i[1],i[2]).length(),a=Go.set(i[4],i[5],i[6]).length(),l=Go.set(i[8],i[9],i[10]).length();r<0&&(o=-o),os.copy(this);let c=1/o,h=1/a,f=1/l;return os.elements[0]*=c,os.elements[1]*=c,os.elements[2]*=c,os.elements[4]*=h,os.elements[5]*=h,os.elements[6]*=h,os.elements[8]*=f,os.elements[9]*=f,os.elements[10]*=f,t.setFromRotationMatrix(os),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Yi,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Yi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Yi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Yi)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===ca)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nu.prototype.isMatrix4=!0;var ct=nu,Go=new F,os=new ct,fy=new F(0,0,0),dy=new F(1,1,1),br=new F,eh=new F,Pi=new F,h0=new ct,u0=new li,$i=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return h0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u0.setFromEuler(this),this.setFromQuaternion(u0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},py=0,f0=new F,Wo=new li,qs=new ct,th=new F,ll=new F,my=new F,gy=new li,d0=new F(1,0,0),p0=new F(0,1,0),m0=new F(0,0,1),g0={type:"added"},_y={type:"removed"},Xo={type:"childadded",child:null},ld={type:"childremoved",child:null},Pn=class s extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new $i,n=new li,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new rt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.multiply(Wo),this}rotateOnWorldAxis(e,t){return Wo.setFromAxisAngle(e,t),this.quaternion.premultiply(Wo),this}rotateX(e){return this.rotateOnAxis(d0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,t){return f0.copy(e).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?th.copy(e):th.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qs.lookAt(ll,th,this.up):qs.lookAt(th,ll,this.up),this.quaternion.setFromRotationMatrix(qs),i&&(qs.extractRotation(i.matrixWorld),Wo.setFromRotationMatrix(qs),this.quaternion.premultiply(Wo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_y),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qs.multiply(e.parent.matrixWorld)),e.applyMatrix4(qs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,my),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pn.DEFAULT_UP=new F(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xy={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},nh={h:0,s:0,l:0};function cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=np(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cd(o,r,e+1/3),this.g=cd(o,r,e),this.b=cd(o,r,e-1/3)}return gt.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=vg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return gt.workingToColorSpace(Yn.copy(this),e),Math.round(dt(Yn.r*255,0,255))*65536+Math.round(dt(Yn.g*255,0,255))*256+Math.round(dt(Yn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Yn.copy(this),t);let n=Yn.r,i=Yn.g,r=Yn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=zt){gt.workingToColorSpace(Yn.copy(this),e);let t=Yn.r,n=Yn.g,i=Yn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(nh);let n=xl(Tr.h,nh.h,t),i=xl(Tr.s,nh.s,t),r=xl(Tr.l,nh.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yn=new Fe;Fe.NAMES=vg;var Tl=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var oo=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},as=new F,Ys=new F,hd=new F,$s=new F,qo=new F,Yo=new F,_0=new F,ud=new F,fd=new F,dd=new F,pd=new Ht,md=new Ht,gd=new Ht,Ks=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),as.subVectors(e,t),i.cross(as);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){as.subVectors(i,t),Ys.subVectors(n,t),hd.subVectors(e,t);let o=as.dot(as),a=as.dot(Ys),l=as.dot(hd),c=Ys.dot(Ys),h=Ys.dot(hd),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$s)===null?!1:$s.x>=0&&$s.y>=0&&$s.x+$s.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,$s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$s.x),l.addScaledVector(o,$s.y),l.addScaledVector(a,$s.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,t),md.fromBufferAttribute(e,n),gd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(pd,r.x),o.addScaledVector(md,r.y),o.addScaledVector(gd,r.z),o}static isFrontFacing(e,t,n,i){return as.subVectors(n,t),Ys.subVectors(e,t),as.cross(Ys).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return as.subVectors(this.c,this.b),Ys.subVectors(this.a,this.b),as.cross(Ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;qo.subVectors(i,n),Yo.subVectors(r,n),ud.subVectors(e,n);let l=qo.dot(ud),c=Yo.dot(ud);if(l<=0&&c<=0)return t.copy(n);fd.subVectors(e,i);let h=qo.dot(fd),f=Yo.dot(fd);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(qo,o);dd.subVectors(e,r);let u=qo.dot(dd),p=Yo.dot(dd);if(p>=0&&u<=p)return t.copy(r);let g=u*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Yo,a);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return _0.subVectors(r,i),a=(f-h)/(f-h+(u-p)),t.copy(i).addScaledVector(_0,a);let x=1/(m+g+d);return o=g*x,a=d*x,t.copy(n).addScaledVector(qo,o).addScaledVector(Yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Es=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ls.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ls.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ls.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ls):ls.fromBufferAttribute(r,o),ls.applyMatrix4(e.matrixWorld),this.expandByPoint(ls);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ih.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ih.copy(n.boundingBox)),ih.applyMatrix4(e.matrixWorld),this.union(ih)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ls),ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cl),sh.subVectors(this.max,cl),$o.subVectors(e.a,cl),Zo.subVectors(e.b,cl),Jo.subVectors(e.c,cl),Er.subVectors(Zo,$o),wr.subVectors(Jo,Zo),to.subVectors($o,Jo);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-to.z,to.y,Er.z,0,-Er.x,wr.z,0,-wr.x,to.z,0,-to.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-to.y,to.x,0];return!_d(t,$o,Zo,Jo,sh)||(t=[1,0,0,0,1,0,0,0,1],!_d(t,$o,Zo,Jo,sh))?!1:(rh.crossVectors(Er,wr),t=[rh.x,rh.y,rh.z],_d(t,$o,Zo,Jo,sh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ls).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ls).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zs=[new F,new F,new F,new F,new F,new F,new F,new F],ls=new F,ih=new Es,$o=new F,Zo=new F,Jo=new F,Er=new F,wr=new F,to=new F,cl=new F,sh=new F,rh=new F,no=new F;function _d(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){no.fromArray(s,r);let a=i.x*Math.abs(no.x)+i.y*Math.abs(no.y)+i.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),h=n.dot(no);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pn=new F,oh=new De,vy=0,On=class extends Ts{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ep,this.updateRanges=[],this.gpuType=Ki,this.version=0,this._normalizationScale=e!==void 0?Wu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oh.fromBufferAttribute(this,t),oh.applyMatrix3(e),this.setXY(t,oh.x,oh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.array)}};var El=class extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wl=class extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}},yy=new Es,hl=new F,xd=new F,er=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);let t=hl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(xd)),this.expandByPoint(hl.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sy=0,qi=new ct,vd=new Pn,Ko=new F,Ii=new Es,ul=new Es,Cn=new F,qt=class s extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qv(e)?wl:El)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qi.makeRotationFromQuaternion(e),this.applyMatrix4(qi),this}rotateX(e){return qi.makeRotationX(e),this.applyMatrix4(qi),this}rotateY(e){return qi.makeRotationY(e),this.applyMatrix4(qi),this}rotateZ(e){return qi.makeRotationZ(e),this.applyMatrix4(qi),this}translate(e,t,n){return qi.makeTranslation(e,t,n),this.applyMatrix4(qi),this}scale(e,t,n){return qi.makeScale(e,t,n),this.applyMatrix4(qi),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ul.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(Ii.min,ul.min),Ii.expandByPoint(Cn),Cn.addVectors(Ii.max,ul.max),Ii.expandByPoint(Cn)):(Ii.expandByPoint(ul.min),Ii.expandByPoint(ul.max))}Ii.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Cn.fromBufferAttribute(a,c),l&&(Ko.fromBufferAttribute(e,c),Cn.add(Ko)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new F,l[w]=new F;let h=new F,f=new F,d=new F,u=new De,p=new De,g=new De,m=new F,x=new F;function v(w,E,D){c[w]=c[E]=c[D]=1,h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,D),f.sub(h),d.sub(h),p.sub(u),g.sub(u);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),x.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(I),a[w].add(m),a[E].add(m),a[D].add(m),l[w].add(x),l[E].add(x),l[D].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,E=T.length;w<E;++w){let D=T[w],I=D.start,N=D.count;for(let P=I,B=I+N;P<B;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new F,M=new F,b=new F,_=new F;function S(w){b.fromBufferAttribute(i,w),_.copy(b);let E=a[w];y.copy(E),y.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(_,E);let I=M.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,I)}for(let w=0,E=n.count;w<E;++w)c[w]&&S(w);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[u++]}return new On(d,h,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ep,this.updateRanges=[],this.version=0,this.uuid=Or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=x0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=x0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function x0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Or()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var oi=new F,Al=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Wu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ml("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ml("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.data.array)}},yd=new F,My=new F,by=new rt,cs=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yd.subVectors(n,t).cross(My.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||by.getNormalMatrix(e),i=this.coplanarPoint(yd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ty=0,hs=class extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Ea,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Vd,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ah,this.stencilZFail=Ah,this.stencilZPass=Ah,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new cs().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new De().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tr=class extends hs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qo,fl=new F,jo=new F,ea=new F,ta=new De,dl=new De,yg=new ct,ah=new F,pl=new F,lh=new F,v0=new De,Sd=new De,y0=new De,Rr=class extends Pn{constructor(e=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Qo===void 0){Qo=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hh(t,5);Qo.setIndex([0,1,2,0,2,3]),Qo.setAttribute("position",new Al(n,3,0,!1)),Qo.setAttribute("uv",new Al(n,2,3,!1))}this.geometry=Qo,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jo.setFromMatrixScale(this.matrixWorld),yg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ea.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jo.multiplyScalar(-ea.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ch(ah.set(-.5,-.5,0),ea,o,jo,i,r),ch(pl.set(.5,-.5,0),ea,o,jo,i,r),ch(lh.set(.5,.5,0),ea,o,jo,i,r),v0.set(0,0),Sd.set(1,0),y0.set(1,1);let a=e.ray.intersectTriangle(ah,pl,lh,!1,fl);if(a===null&&(ch(pl.set(-.5,.5,0),ea,o,jo,i,r),Sd.set(0,1),a=e.ray.intersectTriangle(ah,lh,pl,!1,fl),a===null))return;let l=e.ray.origin.distanceTo(fl);l<e.near||l>e.far||t.push({distance:l,point:fl.clone(),uv:Ks.getInterpolation(fl,ah,pl,lh,v0,Sd,y0,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ch(s,e,t,n,i,r){ta.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(dl.x=r*ta.x-i*ta.y,dl.y=i*ta.x+r*ta.y):dl.copy(ta),s.copy(e),s.x+=dl.x,s.y+=dl.y,s.applyMatrix4(yg)}var Js=new F,Md=new F,hh=new F,uh=new F,ga=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Js)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Js.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Js.copy(this.origin).addScaledVector(this.direction,t),Js.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Md.copy(e).add(t).multiplyScalar(.5),hh.copy(t).sub(e).normalize(),uh.copy(this.origin).sub(Md);let r=e.distanceTo(t)*.5,o=-this.direction.dot(hh),a=uh.dot(this.direction),l=-uh.dot(hh),c=uh.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*l-a,d=o*a-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let g=1/h;f*=g,d*=g,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Md).addScaledVector(hh,d),u}intersectSphere(e,t){if(e.radius<0)return null;Js.subVectors(e.center,this.origin);let n=Js.dot(this.direction),i=Js.dot(Js)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Js)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=n.x-o.x,v=n.y-o.y,T=n.z-o.z,y=Math.abs(l),M=Math.abs(c),b=Math.abs(h),_,S,w,E,D,I,N,P,B,k,O,q;if(y>=M&&y>=b?(w=l,I=f,B=p,q=x,l>=0?(_=c,S=h,E=d,D=u,N=g,P=m,k=v,O=T):(_=h,S=c,E=u,D=d,N=m,P=g,k=T,O=v)):M>=b?(w=c,I=d,B=g,q=v,c>=0?(_=h,S=l,E=u,D=f,N=m,P=p,k=T,O=x):(_=l,S=h,E=f,D=u,N=p,P=m,k=x,O=T)):(w=h,I=u,B=m,q=T,h>=0?(_=l,S=c,E=f,D=d,N=p,P=g,k=x,O=v):(_=c,S=l,E=d,D=f,N=g,P=p,k=v,O=x)),w===0)return null;let U=_/w,C=S/w,Z=1/w,ue=E-U*I,Pe=D-C*I,Y=N-U*B,le=P-C*B,_e=k-U*q,we=O-C*q,de=_e*le-we*Y,ce=ue*we-Pe*_e,he=Y*Pe-le*ue;if(i){if(de<0||ce<0||he<0)return null}else if((de<0||ce<0||he<0)&&(de>0||ce>0||he>0))return null;let Me=de+ce+he;if(Me===0)return null;let Ce=Z*(de*I+ce*B+he*q);return(Me>0?Ce<0:Ce>0)?null:this.at(Ce/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},S0=new ct,io=new ga,fh=new er,M0=new F,dh=new F,ph=new F,mh=new F,bd=new F,gh=new F,b0=new F,_h=new F,Ue=class extends Pn{constructor(e=new qt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){gh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(bd.fromBufferAttribute(f,e),o?gh.addScaledVector(bd,h):gh.addScaledVector(bd.sub(t),h))}t.add(gh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fh.copy(n.boundingSphere),fh.applyMatrix4(r),io.copy(e.ray).recast(e.near),!(fh.containsPoint(io.origin)===!1&&(io.intersectSphere(fh,M0)===null||io.origin.distanceToSquared(M0)>(e.far-e.near)**2))&&(S0.copy(r).invert(),io.copy(e.ray).applyMatrix4(S0),!(n.boundingBox!==null&&io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,M=T;y<M;y+=3){let b=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);i=xh(this,x,e,n,c,h,f,b,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=p,x=g;m<x;m+=3){let v=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);i=xh(this,o,e,n,c,h,f,v,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let m=d[p],x=o[m.materialIndex],v=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,M=T;y<M;y+=3){let b=y,_=y+1,S=y+2;i=xh(this,x,e,n,c,h,f,b,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=p,x=g;m<x;m+=3){let v=m,T=m+1,y=m+2;i=xh(this,o,e,n,c,h,f,v,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Ey(s,e,t,n,i,r,o,a){let l;if(e.side===kn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Nr,a),l===null)return null;_h.copy(a),_h.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(_h);return c<t.near||c>t.far?null:{distance:c,point:_h.clone(),object:s}}function xh(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,dh),s.getVertexPosition(l,ph),s.getVertexPosition(c,mh);let h=Ey(s,e,t,n,dh,ph,mh,b0);if(h){let f=new F;Ks.getBarycoord(b0,dh,ph,mh,f),i&&(h.uv=Ks.getInterpolatedAttribute(i,a,l,c,f,new De)),r&&(h.uv1=Ks.getInterpolatedAttribute(r,a,l,c,f,new De)),o&&(h.normal=Ks.getInterpolatedAttribute(o,a,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Ks.getNormal(dh,ph,mh,d.normal),h.face=d,h.barycoord=f}return h}var nr=class extends Zn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=an,h=an,f,d){super(null,o,a,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rl=class extends On{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},na=new ct,T0=new ct,vh=[],E0=new Es,wy=new ct,ml=new Ue,gl=new er,ws=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,na),E0.copy(e.boundingBox).applyMatrix4(na),this.boundingBox.union(E0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,na),gl.copy(e.boundingSphere).applyMatrix4(na),this.boundingSphere.union(gl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ml.geometry=this.geometry,ml.material=this.material,ml.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(n),e.ray.intersectsSphere(gl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,na),T0.multiplyMatrices(n,na),ml.matrixWorld=T0,ml.raycast(e,vh);for(let o=0,a=vh.length;o<a;o++){let l=vh[o];l.instanceId=r,l.object=this,t.push(l)}vh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(i*this.count),i,this.count,hu,Ki));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},so=new er,Ay=new De(.5,.5),yh=new F,Cr=class{constructor(e=new cs,t=new cs,n=new cs,i=new cs,r=new cs,o=new cs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],g=r[9],m=r[10],x=r[11],v=r[12],T=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,u-h,x-p,M-v).normalize(),i[1].setComponents(c+o,u+h,x+p,M+v).normalize(),i[2].setComponents(c+a,u+f,x+g,M+T).normalize(),i[3].setComponents(c-a,u-f,x-g,M-T).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,u-d,x-m,M-y).normalize();else if(i[4].setComponents(c-l,u-d,x-m,M-y).normalize(),t===Yi)i[5].setComponents(c+l,u+d,x+m,M+y).normalize();else if(t===ca)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(e){so.center.set(0,0,0);let t=Ay.distanceTo(e.center);return so.radius=.7071067811865476+t,so.applyMatrix4(e.matrixWorld),this.intersectsSphere(so)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(yh.x=i.normal.x>0?e.max.x:e.min.x,yh.y=i.normal.y>0?e.max.y:e.min.y,yh.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},w0=new ct,Vh=class s{constructor(){this.coordinateSystem=Yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];w0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Cr),n[i].setFromProjectionMatrix(w0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Cr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var ao=class extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},A0=new ct,Dd=new ga,Sh=new er,Mh=new F,lo=class extends Pn{constructor(e=new qt,t=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sh.copy(n.boundingSphere),Sh.applyMatrix4(i),Sh.radius+=r,e.ray.intersectsSphere(Sh)===!1)return;A0.copy(i).invert(),Dd.copy(e.ray).applyMatrix4(A0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=d,g=u;p<g;p++){let m=c.getX(p);Mh.fromBufferAttribute(f,m),R0(Mh,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,g=u;p<g;p++)Mh.fromBufferAttribute(f,p),R0(Mh,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function R0(s,e,t,n,i,r,o){let a=Dd.distanceSqToPoint(s);if(a<t){let l=new F;Dd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Cl=class extends Zn{constructor(e=[],t=go,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fn=class extends Zn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends Zn{constructor(e,t,n=ps,i,r,o,a=an,l=an,c,h=js,f=1){if(h!==js&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pl=class extends us{constructor(e,t=ps,n=go,i,r,o=an,a=an,l,c=js){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Il=class extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bn=class s extends qt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function p(g,m,x,v,T,y,M,b,_,S,w){let E=y/_,D=M/S,I=y/2,N=M/2,P=b/2,B=_+1,k=S+1,O=0,q=0,U=new F;for(let C=0;C<k;C++){let Z=C*D-N;for(let ue=0;ue<B;ue++){let Pe=ue*E-I;U[g]=Pe*v,U[m]=Z*T,U[x]=P,c.push(U.x,U.y,U.z),U[g]=0,U[m]=0,U[x]=b>0?1:-1,h.push(U.x,U.y,U.z),f.push(ue/_),f.push(1-C/S),O+=1}}for(let C=0;C<S;C++)for(let Z=0;Z<_;Z++){let ue=d+Z+B*C,Pe=d+Z+B*(C+1),Y=d+(Z+1)+B*(C+1),le=d+(Z+1)+B*C;l.push(ue,Pe,le),l.push(Pe,Y,le),q+=6}a.addGroup(u,q,w),u+=q,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},As=class s extends qt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=n*2+r,g=i+1,m=new F,x=new F;for(let v=0;v<=p;v++){let T=0,y=0,M=0,b=0;if(v<=n){let w=v/n,E=w*Math.PI/2;y=-h-e*Math.cos(E),M=e*Math.sin(E),b=-e*Math.cos(E),T=w*f}else if(v<=n+r){let w=(v-n)/r;y=-h+w*t,M=e,b=0,T=f+w*d}else{let w=(v-n-r)/n,E=w*Math.PI/2;y=h+e*Math.sin(E),M=e*Math.cos(E),b=e*Math.sin(E),T=f+d+w*f}let _=Math.max(0,Math.min(1,T/u)),S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let w=0;w<=i;w++){let E=w/i,D=E*Math.PI*2,I=Math.sin(D),N=Math.cos(D);x.x=-M*N,x.y=y,x.z=M*I,a.push(x.x,x.y,x.z),m.set(-M*N,b,M*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+S,_)}if(v>0){let w=(v-1)*g;for(let E=0;E<i;E++){let D=w+E,I=w+E+1,N=v*g+E,P=v*g+E+1;o.push(D,I,N),o.push(I,P,N)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},co=class s extends qt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new De;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Sn=class s extends qt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,g=[],m=n/2,x=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(u,2));function v(){let y=new F,M=new F,b=0,_=(t-e)/n;for(let S=0;S<=r;S++){let w=[],E=S/r,D=E*(t-e)+e;for(let I=0;I<=i;I++){let N=I/i,P=N*l+a,B=Math.sin(P),k=Math.cos(P);M.x=D*B,M.y=-E*n+m,M.z=D*k,f.push(M.x,M.y,M.z),y.set(B,_,k).normalize(),d.push(y.x,y.y,y.z),u.push(N,1-E),w.push(p++)}g.push(w)}for(let S=0;S<i;S++)for(let w=0;w<r;w++){let E=g[w][S],D=g[w+1][S],I=g[w+1][S+1],N=g[w][S+1];(e>0||w!==0)&&(h.push(E,D,N),b+=3),(t>0||w!==r-1)&&(h.push(D,I,N),b+=3)}c.addGroup(x,b,0),x+=b}function T(y){let M=p,b=new De,_=new F,S=0,w=y===!0?e:t,E=y===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),p++;let D=p;for(let I=0;I<=i;I++){let P=I/i*l+a,B=Math.cos(P),k=Math.sin(P);_.x=w*k,_.y=m*E,_.z=w*B,f.push(_.x,_.y,_.z),d.push(0,E,0),b.x=B*.5+.5,b.y=k*.5*E+.5,u.push(b.x,b.y),p++}for(let I=0;I<i;I++){let N=M+I,P=D+I;y===!0?h.push(P,P+1,N):h.push(P+1,P,N),S+=3}c.addGroup(x,S,y===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fs=class s extends Sn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dl=class s extends qt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new F,y=new F,M=new F;for(let b=0;b<t.length;b+=3)u(t[b+0],T),u(t[b+1],y),u(t[b+2],M),l(T,y,M,v)}function l(v,T,y,M){let b=M+1,_=[];for(let S=0;S<=b;S++){_[S]=[];let w=v.clone().lerp(y,S/b),E=T.clone().lerp(y,S/b),D=b-S;for(let I=0;I<=D;I++)I===0&&S===b?_[S][I]=w:_[S][I]=w.clone().lerp(E,I/D)}for(let S=0;S<b;S++)for(let w=0;w<2*(b-S)-1;w++){let E=Math.floor(w/2);w%2===0?(d(_[S][E+1]),d(_[S+1][E]),d(_[S][E])):(d(_[S][E+1]),d(_[S+1][E+1]),d(_[S+1][E]))}}function c(v){let T=new F;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(v),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let v=new F;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let y=m(v)/2/Math.PI+.5,M=x(v)/Math.PI+.5;o.push(y,1-M)}p(),f()}function f(){for(let v=0;v<o.length;v+=6){let T=o[v+0],y=o[v+2],M=o[v+4],b=Math.max(T,y,M),_=Math.min(T,y,M);b>.9&&_<.1&&(T<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function p(){let v=new F,T=new F,y=new F,M=new F,b=new De,_=new De,S=new De;for(let w=0,E=0;w<r.length;w+=9,E+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(o[E+0],o[E+1]),_.set(o[E+2],o[E+3]),S.set(o[E+4],o[E+5]),M.copy(v).add(T).add(y).divideScalar(3);let D=m(M);g(b,E+0,v,D),g(_,E+2,T,D),g(S,E+4,y,D)}}function g(v,T,y,M){M<0&&v.x===1&&(o[T]=v.x-1),y.x===0&&y.z===0&&(o[T]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Gh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new De:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],r=[],o=[],a=new F,l=new ct;for(let u=0;u<=e;u++){let p=u/e;i[u]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(dt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(dt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function op(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var C0=new F,P0=new F,Td=new op,Ed=new op,wd=new op,Zi=class extends Gh{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(P0.subVectors(i[0],i[1]).add(i[0]),c=P0);let f=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(C0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=C0),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Td.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,g,m),Ed.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,g,m),wd.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(Td.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Ed.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),wd.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Td.calc(l),Ed.calc(l),wd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var _a=class s extends Dl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ll=class s extends Dl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ds=class s extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],p=[],g=[],m=[];for(let x=0;x<h;x++){let v=x*d-o;for(let T=0;T<c;T++){let y=T*f-r;p.push(y,-v,0),g.push(0,0,1),m.push(T/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let T=v+c*x,y=v+c*(x+1),M=v+1+c*(x+1),b=v+1+c*x;u.push(T,y,b),u.push(y,M,b)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ho=class s extends qt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=e,d=(t-e)/i,u=new F,p=new De;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let x=r+m/n*o;u.x=f*Math.cos(x),u.y=f*Math.sin(x),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let x=0;x<n;x++){let v=x+m,T=v,y=v+n+1,M=v+n+2,b=v+1;a.push(T,y,b),a.push(y,M,b)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var jt=class s extends qt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new F,d=new F,u=[],p=[],g=[],m=[];for(let x=0;x<=n;x++){let v=[],T=x/n,y=o+T*a,M=e*Math.cos(y),b=Math.sqrt(e*e-M*M),_=0;x===0&&o===0?_=.5/t:x===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let w=S/t,E=i+w*r;f.x=-b*Math.cos(E),f.y=M,f.z=b*Math.sin(E),p.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(w+_,1-T),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let T=h[x][v+1],y=h[x][v],M=h[x+1][v],b=h[x+1][v+1];(x!==0||o>0)&&u.push(T,y,b),(x!==n-1||l<Math.PI)&&u.push(y,M,b)}this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rs=class s extends qt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new F,u=new F,p=new F;for(let g=0;g<=n;g++){let m=o+g/n*a;for(let x=0;x<=i;x++){let v=x/i*r;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(x/i),f.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=i;m++){let x=(i+1)*g+m-1,v=(i+1)*(g-1)+m-1,T=(i+1)*(g-1)+m,y=(i+1)*g+m;l.push(x,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function _o(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(I0(i))i.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(I0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kn(s){let e={};for(let t=0;t<s.length;t++){let n=_o(s[t]);for(let i in n)e[i]=n[i]}return e}function I0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ry(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ap(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var ci={clone:_o,merge:Kn},Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(i.value);break;case"v2":this.uniforms[n].value=new De().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xa=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pr=class extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Pr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ro('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ro('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Nl=class extends hs{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Wh=class extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xh=class extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ia(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ir=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qh=class extends Ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pd:r=e,a=2*t-n;break;case Id:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pd:o=e,l=2*n-t;break;case Id:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-t)/(i-t),g=p*p,m=g*p,x=-d*m+2*d*g-d*p,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*p+1,T=(-1-u)*m+(1.5+u)*g+.5*p,y=u*m-u*g;for(let M=0;M!==a;++M)r[M]=x*o[h+M]+v*o[c+M]+T*o[l+M]+y*o[f+M];return r}},Yh=class extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},$h=class extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zh=class extends Ir{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=u*d+p*2,v=f[x],T=f[x+1],y=e*d+p*2,M=h[y],b=h[y+1],_=Dy(n,t,v,M,i);r[p]=Sg(_,g,T,b,m)}return r}};function Sg(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Iy(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Dy(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Sg(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Iy(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),bh(e.settings)&&(n.settings={inTangents:ia(e.settings.inTangents,Array),outTangents:ia(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vl:t=this.InterpolantFactoryMethodDiscrete;break;case Fh:t=this.InterpolantFactoryMethodLinear;break;case wh:t=this.InterpolantFactoryMethodSmooth;break;case Rd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vl;case this.InterpolantFactoryMethodLinear:return Fh;case this.InterpolantFactoryMethodSmooth:return wh;case this.InterpolantFactoryMethodBezier:return Rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;bh(this.settings)&&(D0(this.settings.inTangents,e),D0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;bh(this.settings)&&(L0(this.settings.inTangents,e),L0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){st("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Yv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let g=t[f+p];if(g!==t[d+p]||g!==t[u+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,bh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function D0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function L0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Fh;var Dr=class extends Di{constructor(e,t,n){super(e,t,n)}};Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=vl;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jh=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}};Jh.prototype.ValueTypeName="color";var Kh=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}};Kh.prototype.ValueTypeName="number";var Qh=class extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ul=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Qh(this.times,this.values,this.getValueSize(),e)}};Ul.prototype.ValueTypeName="quaternion";Ul.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Di{constructor(e,t,n){super(e,t,n)}};Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=vl;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var jh=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}};jh.prototype.ValueTypeName="vector";var Rh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(N0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!N0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function N0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var va=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mg=new va,ya=class{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=new WeakMap,eu=class extends ya{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Rh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=sa.get(o);f===void 0&&(f=[],sa.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=ha("img");function l(){h(),t&&t(this);let f=sa.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}sa.delete(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),Rh.remove(`image:${e}`);let d=sa.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}sa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Rh.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ol=class extends ya{constructor(e){super(e)}load(e,t,n,i){let r=new Zn,o=new eu(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Sa=class extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fl=class extends Sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ad=new ct,U0=new F,O0=new F,Bl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;U0.setFromMatrixPosition(e.matrixWorld),t.position.copy(U0),O0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(O0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ad,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===ca||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Th=new F,Eh=new li,Ms=new F,kl=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Th,Eh,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Th,Eh,Ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Th,Eh,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Th,Eh,Ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ar=new F,F0=new De,B0=new De,$n=class extends kl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,F0,B0),t.subVectors(B0,F0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_l*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ld=class extends Bl{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}},Cs=class extends Sa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},uo=class extends kl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nd=class extends Bl{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Nd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ra=-90,oa=1,ba=class extends Pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $n(ra,oa,e,t);i.layers=this.layers,this.add(i);let r=new $n(ra,oa,e,t);r.layers=this.layers,this.add(r);let o=new $n(ra,oa,e,t);o.layers=this.layers,this.add(o);let a=new $n(ra,oa,e,t);a.layers=this.layers,this.add(a);let l=new $n(ra,oa,e,t);l.layers=this.layers,this.add(l);let c=new $n(ra,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},tu=class extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},zl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ly.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ly(){this._document.hidden===!1&&this.reset()}var lp="\\[\\]\\.:\\/",Ny=new RegExp("["+lp+"]","g"),cp="[^"+lp+"]",Uy="[^"+lp.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",cp),Fy=/(WCOD+)?/.source.replace("WCOD",Uy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cp),ky=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cp),zy=new RegExp("^"+Oy+Fy+By+ky+"$"),Hy=["material","materials","bones","map"],Ud=class{constructor(e,t,n){let i=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ny,"")}static parseTrackName(e){let t=zy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Ud;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aA=new Float32Array(1);var k0=new ct,Hl=class{constructor(e,t,n=0,i=1/0){this.ray=new ga(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return k0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(k0),this}intersectObject(e,t=!0,n=[]){return Od(e,this,n,t),n.sort(z0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Od(e[i],this,n,t);return n.sort(z0),n}};function z0(s,e){return s.distance-e.distance}function Od(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Od(r[o],e,t,!0)}}var mp=class mp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};mp.prototype.isMatrix2=!0;var Fd=mp;function hp(s,e,t,n){let i=Vy(n);switch(t){case Zd:return s*e;case hu:return s*e/i.components*i.byteLength;case uu:return s*e/i.components*i.byteLength;case Ur:return s*e*2/i.components*i.byteLength;case fu:return s*e*2/i.components*i.byteLength;case Jd:return s*e*3/i.components*i.byteLength;case Li:return s*e*4/i.components*i.byteLength;case du:return s*e*4/i.components*i.byteLength;case Kl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mu:case _u:return Math.max(s,16)*Math.max(e,8)/4;case pu:case gu:return Math.max(s,8)*Math.max(e,8)/2;case xu:case vu:case Su:case Mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yu:case tc:case bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Du:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bu:case ku:case zu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hu:case Vu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nc:case Gu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(s){switch(s){case Jn:case Xd:return{byteLength:1,components:1};case Aa:case qd:case en:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case ps:case au:case Ki:return{byteLength:4,components:1};case Yd:case $d:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wg(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wy(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],g=f[u];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let g=f[u];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
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
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
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
#endif`,eS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sS=`#ifdef USE_IRIDESCENCE
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
#endif`,rS=`#ifdef USE_BUMPMAP
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
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pS=`#define PI 3.141592653589793
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
} // validated`,mS=`vec3 transformedNormal = objectNormal;
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
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IS=`#ifdef USE_GRADIENTMAP
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
}`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,OS=`#ifdef USE_ENVMAP
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
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
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
#endif`,VS=`uniform sampler2D dfgLUT;
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
}`,GS=`
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
#endif`,WS=`#if defined( RE_IndirectDiffuse )
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,YS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eM=`#if defined( USE_POINTS_UV )
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
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
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
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
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
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
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
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CM=`float getShadowMask() {
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
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,NM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XM=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform float backgroundBlurriness;
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`#include <common>
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
}`,KM=`#if DEPTH_PACKING == 3200
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
}`,QM=`#define DISTANCE
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
}`,jM=`#define DISTANCE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,ob=`#define LAMBERT
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
}`,ab=`#define LAMBERT
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
}`,lb=`#define MATCAP
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
}`,cb=`#define MATCAP
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
}`,hb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,fb=`#define PHONG
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
}`,db=`#define PHONG
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
}`,pb=`#define STANDARD
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
}`,mb=`#define STANDARD
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
}`,gb=`#define TOON
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
}`,_b=`#define TOON
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
}`,xb=`uniform float size;
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
}`,vb=`uniform vec3 diffuse;
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
}`,yb=`#include <common>
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
}`,Sb=`uniform vec3 color;
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
}`,Mb=`uniform float rotation;
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
}`,bb=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Xy,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:$y,alphatest_fragment:Zy,alphatest_pars_fragment:Jy,aomap_fragment:Ky,aomap_pars_fragment:Qy,batching_pars_vertex:jy,batching_vertex:eS,begin_vertex:tS,beginnormal_vertex:nS,bsdfs:iS,iridescence_fragment:sS,bumpmap_pars_fragment:rS,clipping_planes_fragment:oS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:cS,color_fragment:hS,color_pars_fragment:uS,color_pars_vertex:fS,color_vertex:dS,common:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:_S,emissivemap_fragment:xS,emissivemap_pars_fragment:vS,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:bS,envmap_pars_fragment:TS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:OS,envmap_vertex:wS,fog_vertex:AS,fog_pars_vertex:RS,fog_fragment:CS,fog_pars_fragment:PS,gradientmap_pars_fragment:IS,lightmap_pars_fragment:DS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:NS,lights_pars_begin:US,lights_toon_fragment:FS,lights_toon_pars_fragment:BS,lights_phong_fragment:kS,lights_phong_pars_fragment:zS,lights_physical_fragment:HS,lights_physical_pars_fragment:VS,lights_fragment_begin:GS,lights_fragment_maps:WS,lights_fragment_end:XS,lightprobes_pars_fragment:qS,logdepthbuf_fragment:YS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:JS,map_fragment:KS,map_pars_fragment:QS,map_particle_fragment:jS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:sM,morphnormal_vertex:rM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:hM,normal_pars_vertex:uM,normal_vertex:fM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:_M,opaque_fragment:xM,packing:vM,premultiplied_alpha_fragment:yM,project_vertex:SM,dithering_fragment:MM,dithering_pars_fragment:bM,roughnessmap_fragment:TM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:AM,shadowmap_vertex:RM,shadowmask_pars_fragment:CM,skinbase_vertex:PM,skinning_pars_vertex:IM,skinning_vertex:DM,skinnormal_vertex:LM,specularmap_fragment:NM,specularmap_pars_fragment:UM,tonemapping_fragment:OM,tonemapping_pars_fragment:FM,transmission_fragment:BM,transmission_pars_fragment:kM,uv_pars_fragment:zM,uv_pars_vertex:HM,uv_vertex:VM,worldpos_vertex:GM,background_vert:WM,background_frag:XM,backgroundCube_vert:qM,backgroundCube_frag:YM,cube_vert:$M,cube_frag:ZM,depth_vert:JM,depth_frag:KM,distance_vert:QM,distance_frag:jM,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:sb,meshbasic_frag:rb,meshlambert_vert:ob,meshlambert_frag:ab,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:hb,meshnormal_frag:ub,meshphong_vert:fb,meshphong_frag:db,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:_b,points_vert:xb,points_frag:vb,shadow_vert:yb,shadow_frag:Sb,sprite_vert:Mb,sprite_frag:bb},ze={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ds={basic:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Kn([ze.points,ze.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Kn([ze.common,ze.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Kn([ze.sprite,ze.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Kn([ze.common,ze.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Kn([ze.lights,ze.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ds.physical={uniforms:Kn([Ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Xu={r:0,b:0,g:0},Tb=new ct,Xg=new rt;Xg.set(-1,0,0,0,1,0,0,0,1);function Eb(s,e,t,n,i,r){let o=new Fe(0),a=i===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function p(v){let T=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),T=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,T){let y=u(T);y&&y.isCubeTexture?(c===void 0&&(c=new Ue(new Bn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:_o(Ds.backgroundCube.uniforms),vertexShader:Ds.backgroundCube.vertexShader,fragmentShader:Ds.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xg),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Tt,(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ue(new ds(2,2),new Pt({name:"BackgroundMaterial",uniforms:_o(Ds.background.uniforms),vertexShader:Ds.background.vertexShader,fragmentShader:Ds.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==Tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Xu,ap(s)),t.buffers.color.setClear(Xu.r,Xu.g,Xu.b,T,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:x}}function wb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(D,I,N,P,B){let k=!1,O=f(D,P,N,I);r!==O&&(r=O,c(r.object)),k=u(D,P,N,B),k&&p(D,P,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(D,I,N,P),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,I,N,P){let B=P.wireframe===!0,k=n[I.id];k===void 0&&(k={},n[I.id]=k);let O=D.isInstancedMesh===!0?D.id:0,q=k[O];q===void 0&&(q={},k[O]=q);let U=q[N.id];U===void 0&&(U={},q[N.id]=U);let C=U[B];return C===void 0&&(C=d(l()),U[B]=C),C}function d(D){let I=[],N=[],P=[];for(let B=0;B<t;B++)I[B]=0,N[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,I,N,P){let B=r.attributes,k=I.attributes,O=0,q=N.getAttributes();for(let U in q)if(q[U].location>=0){let Z=B[U],ue=k[U];if(ue===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;O++}return r.attributesNum!==O||r.index!==P}function p(D,I,N,P){let B={},k=I.attributes,O=0,q=N.getAttributes();for(let U in q)if(q[U].location>=0){let Z=k[U];Z===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));let ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),B[U]=ue,O++}r.attributes=B,r.attributesNum=O,r.index=P}function g(){let D=r.newAttributes;for(let I=0,N=D.length;I<N;I++)D[I]=0}function m(D){x(D,0)}function x(D,I){let N=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;N[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),B[D]!==I&&(s.vertexAttribDivisor(D,I),B[D]=I)}function v(){let D=r.newAttributes,I=r.enabledAttributes;for(let N=0,P=I.length;N<P;N++)I[N]!==D[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function T(D,I,N,P,B,k,O){O===!0?s.vertexAttribIPointer(D,I,N,B,k):s.vertexAttribPointer(D,I,N,P,B,k)}function y(D,I,N,P){g();let B=P.attributes,k=N.getAttributes(),O=I.defaultAttributeValues;for(let q in k){let U=k[q];if(U.location>=0){let C=B[q];if(C===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){let Z=C.normalized,ue=C.itemSize,Pe=e.get(C);if(Pe===void 0)continue;let Y=Pe.buffer,le=Pe.type,_e=Pe.bytesPerElement,we=le===s.INT||le===s.UNSIGNED_INT||C.gpuType===au;if(C.isInterleavedBufferAttribute){let de=C.data,ce=de.isInterleavedBuffer===!0?de.stride:de.itemSize,he=C.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let Me=0;Me<U.locationSize;Me++)x(U.location+Me,de.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Me=0;Me<U.locationSize;Me++)m(U.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Me=0;Me<U.locationSize;Me++)T(U.location+Me,ue/U.locationSize,le,Z,ce*_e,(he+ue/U.locationSize*Me)*_e,we)}else{if(C.isInstancedBufferAttribute){for(let de=0;de<U.locationSize;de++)x(U.location+de,C.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let de=0;de<U.locationSize;de++)m(U.location+de);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let de=0;de<U.locationSize;de++)T(U.location+de,ue/U.locationSize,le,Z,ue*_e,ue/U.locationSize*de*_e,we)}}else if(O!==void 0){let Z=O[q];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(U.location,Z);break;case 3:s.vertexAttrib3fv(U.location,Z);break;case 4:s.vertexAttrib4fv(U.location,Z);break;default:s.vertexAttrib1fv(U.location,Z)}}}}v()}function M(){w();for(let D in n){let I=n[D];for(let N in I){let P=I[N];for(let B in P){let k=P[B];for(let O in k)h(k[O].object),delete k[O];delete P[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let N in I){let P=I[N];for(let B in P){let k=P[B];for(let O in k)h(k[O].object),delete k[O];delete P[B]}}delete n[D.id]}function _(D){for(let I in n){let N=n[I];for(let P in N){let B=N[P];if(B[D.id]===void 0)continue;let k=B[D.id];for(let O in k)h(k[O].object),delete k[O];delete B[D.id]}}}function S(D){for(let I in n){let N=n[I],P=D.isInstancedMesh===!0?D.id:0,B=N[P];if(B!==void 0){for(let k in B){let O=B[k];for(let q in O)h(O[q].object),delete O[q];delete B[k]}delete N[P],Object.keys(N).length===0&&delete n[I]}}}function w(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Ab(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Li&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Jn&&_!==Ki&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:b}}function Cb(s){let e=this,t=null,n=0,i=!1,r=!1,o=new cs,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,x=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,y=x.clippingState||null;l.value=y,y=h(p,d,T,u);for(let M=0;M!==T;++M)y[M]=t[M];x.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=u+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<x)&&(m=new Float32Array(x));for(let T=0,y=u;T!==g;++T,y+=4)o.copy(f[T]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var oc=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bn(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Ue(i,r),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=ai),new ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},bg=256,Pb=3,Ib=20,qg=256,Yg=16,Db=3,Lb=new F,Nb=new Fe,Ca=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ba(1,10,null),this._boxMesh=new Ue(new Bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Lb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(Nb));let m=new ba(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=p,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bg,ip(e))}_fromTexture(e,t){e.mapping===go||e.mapping===wa?this._setSize(e.image.length===0?bg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Tg(e,!1,!1),n=Math.log2(e)-Pb;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===go||e.mapping===wa?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Eg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ub(),this._integrationMaterial=Ob());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Db)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(qg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Tg(s,e,t){return new oc(s,{minFilter:sr,generateMipmaps:e,type:en,colorSpace:yl,depthBuffer:t})}function ac(s,e,t){return new Pt({name:s,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:kn,blending:Dn,depthTest:!1,depthWrite:!1})}function Ub(){return ac("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qg}u

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
	`)}function Ob(){return ac("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yg}},`

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
	`)}function Fb(){return ac("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ib}
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
	`)}function Eg(){return ac("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wg(){return ac("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bb(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===su||u===ru)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let g=new oc(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===su||u===ru,g=u===go||u===wa;if(p||g){let m=t.get(d),x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Ca(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new Ca(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===su?d.mapping=go:u===ru&&(d.mapping=wa),d}function l(d){let u=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function kb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ro("WebGLRenderer: "+n+" extension not supported."),i}}}function zb(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return i[g.id]!==void 0||(g.addEventListener("dispose",a),i[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)e.update(g[m],s.ARRAY_BUFFER)}function f(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let v=g!==null?g.array.length:m.array.length/3-1,T=m.count>=65535?wl:El,y=new T(Math.ceil(v/3)*6,1),M=y.array;if(g!==null){let _=g.array;x=g.version;for(let S=0,w=0;S<v;S+=3){let E=_[S+0],D=_[S+1],I=_[S+2];M[w++]=E,M[w++]=D,M[w++]=D,M[w++]=I,M[w++]=I,M[w++]=E}}else{x=m.version;for(let _=0,S=0;_<v;_+=3){let w=_+0,E=_+1,D=_+2;M[S++]=w,M[S++]=E,M[S++]=E,M[S++]=D,M[S++]=D,M[S++]=w}}y.version=x;let b=r.get(p);b&&e.remove(b),r.set(p,y)}function d(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in i){let g=i[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Hb(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*o,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let g=0;for(let m=0;m<u;m++)g+=d[m];t.update(g,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gb(s,e,t){let n=new WeakMap,i=new Ht;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let w=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;u===!0&&(T=1),p===!0&&(T=2),g===!0&&(T=3);let y=a.attributes.position.count*T,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*M*4*f),_=new bl(b,y,M,f);_.type=Ki,_.needsUpdate=!0;let S=T*4;for(let E=0;E<f;E++){let D=m[E],I=x[E],N=v[E],P=y*M*4*E;for(let B=0;B<D.count;B++){let k=B*S;u===!0&&(i.fromBufferAttribute(D,B),b[P+k+0]=i.x,b[P+k+1]=i.y,b[P+k+2]=i.z,b[P+k+3]=0),p===!0&&(i.fromBufferAttribute(I,B),b[P+k+4]=i.x,b[P+k+5]=i.y,b[P+k+6]=i.z,b[P+k+7]=0),g===!0&&(i.fromBufferAttribute(N,B),b[P+k+8]=i.x,b[P+k+9]=i.y,b[P+k+10]=i.z,b[P+k+11]=N.itemSize===4?i.w:1)}}d={count:f,texture:_,size:new De(y,M)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Wb(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Xb={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[ql]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function qb(s,e,t,n,i,r){let o=new Vt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let f=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(h,f),u=new uo(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,v=null,T=[],y=!1;this.setSize=function(M,b){o.setSize(M,b),a!==null&&a.setSize(M,b),l!==null&&l.setSize(M,b);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(M,b)}},this.setEffects=function(M){T=M,y=T.length>0&&T[0].isRenderPass===!0;let b=o.width,_=o.height;T.length>0&&a===null&&(a=new Vt(b,_,{type:en,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(b,_,{type:en,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&T.some(w=>w.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new us(b,_),r===!0&&(c.format=ms,c.type=rr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let w=0;w<T.length;w++){let E=T[w];E.setSize&&E.setSize(b,_),S&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(M,b){if(m||M.toneMapping===Ps&&T.length===0)return!1;if(v=b,b!==null){let _=b.width,S=b.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Ps,!0},this.hasRenderPass=function(){return y},this.end=function(M,b){M.toneMapping=x,m=!0;let _=o,S=a;for(let w=0;w<T.length;w++){let E=T[w];E.enabled!==!1&&(E.render(M,S,_,b),E.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,f.defines={},gt.getTransfer(p)===Tt&&(f.defines.SRGB_TRANSFER="");let w=Xb[g];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(v),M.render(d,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var $g=new Zn,Zg=new us(1,1),Jg=new Pl(1),Kg=new bl,Qg=new zh,jg=new Cl,Ag=[],Rg=[],Cg=new Float32Array(16),Pg=new Float32Array(9),Ig=new Float32Array(4);function Pa(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ag[i];if(r===void 0&&(r=new Float32Array(i),Ag[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $u(s,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Yb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $b(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),bn(t,e)}}function Zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),bn(t,e)}}function Jb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),bn(t,e)}}function Kb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Ig.set(n),s.uniformMatrix2fv(this.addr,!1,Ig),bn(t,n)}}function Qb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Pg.set(n),s.uniformMatrix3fv(this.addr,!1,Pg),bn(t,n)}}function jb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Mn(t,n))return;Cg.set(n),s.uniformMatrix4fv(this.addr,!1,Cg),bn(t,n)}}function e1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function t1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),bn(t,e)}}function n1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),bn(t,e)}}function i1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),bn(t,e)}}function s1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function r1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),bn(t,e)}}function o1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),bn(t,e)}}function a1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),bn(t,e)}}function Zu(s){return s.version===0&&(s.compareFunction=jd,s.needsUpdate=!0),s}function l1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Zu(Zg):r=$g,t.setTexture2D(e||r,i)}function c1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qg,i)}function h1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Zu(Jg):r=jg,t.setTextureCube(e||r,i)}function u1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kg,i)}function f1(s){switch(s){case 5126:return Yb;case 35664:return $b;case 35665:return Zb;case 35666:return Jb;case 35674:return Kb;case 35675:return Qb;case 35676:return jb;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return u1}}function d1(s,e){s.uniform1fv(this.addr,e)}function p1(s,e){let t=Pa(e,this.size,2);s.uniform2fv(this.addr,t)}function m1(s,e){let t=Pa(e,this.size,3);s.uniform3fv(this.addr,t)}function g1(s,e){let t=Pa(e,this.size,4);s.uniform4fv(this.addr,t)}function _1(s,e){let t=Pa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function x1(s,e){let t=Pa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function v1(s,e){let t=Pa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y1(s,e){s.uniform1iv(this.addr,e)}function S1(s,e){s.uniform2iv(this.addr,e)}function M1(s,e){s.uniform3iv(this.addr,e)}function b1(s,e){s.uniform4iv(this.addr,e)}function T1(s,e){s.uniform1uiv(this.addr,e)}function E1(s,e){s.uniform2uiv(this.addr,e)}function w1(s,e){s.uniform3uiv(this.addr,e)}function A1(s,e){s.uniform4uiv(this.addr,e)}function R1(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Zu(Zg):o=$g;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function C1(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qg,r[o])}function P1(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Zu(Jg):o=jg;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function I1(s,e,t){let n=this.cache,i=e.length,r=$u(t,i);Mn(n,r)||(s.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Kg,r[o])}function D1(s){switch(s){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return x1;case 35676:return v1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return T1;case 36294:return E1;case 36295:return w1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}var xp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f1(t.type)}},vp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D1(t.type)}},yp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},gp=/(\w+)(\])?(\[|\.)?/g;function Dg(s,e){s.seq.push(e),s.map[e.id]=e}function L1(s,e,t){let n=s.name,i=n.length;for(gp.lastIndex=0;;){let r=gp.exec(n),o=gp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dg(t,c===void 0?new xp(a,s,e):new vp(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new yp(a),Dg(t,f)),t=f}}}var Ra=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);L1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Lg(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var N1=37297,U1=0;function O1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ng=new rt;function F1(s){gt._getMatrix(Ng,gt.workingColorSpace,s);let e=`mat3( ${Ng.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(s)){case Sl:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ug(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+O1(s.getShaderSource(e),a)}else return r}function B1(s,e){let t=F1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var k1={[Wl]:"Linear",[Xl]:"Reinhard",[ql]:"Cineon",[mo]:"ACESFilmic",[$l]:"AgX",[Zl]:"Neutral",[Yl]:"Custom"};function z1(s,e){let t=k1[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var qu=new F;function H1(){gt.getLuminanceCoefficients(qu);let s=qu.x.toFixed(4),e=qu.y.toFixed(4),t=qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rc).join(`
`)}function G1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rc(s){return s!==""}function Og(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(s){return s.replace(X1,q1)}function q1(s,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sp(t)}var Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bg(s){return s.replace(Y1,$1)}function $1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Z1={[fo]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function J1(s){return Z1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var K1={[wa]:"ENVMAP_MODE_REFRACTION"};function Q1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":K1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var j1={[Gd]:"ENVMAP_BLENDING_MULTIPLY",[sg]:"ENVMAP_BLENDING_MIX",[rg]:"ENVMAP_BLENDING_ADD"};function eT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":j1[s.combine]||"ENVMAP_BLENDING_NONE"}function tT(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=J1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Q1(t),f=eT(t),d=V1(t),u=G1(r),p=i.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(rc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(rc).join(`
`),m.length>0&&(m+=`
`)):(g=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rc).join(`
`),m=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ps?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,B1("linearToOutputTexel",t.outputColorSpace),H1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rc).join(`
`)),o=Sp(o),o=Og(o,t),o=Fg(o,t),a=Sp(a),a=Og(a,t),a=Fg(a,t),o=Bg(o),a=Bg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+g+o,T=x+m+a,y=Lg(i,i.VERTEX_SHADER,v),M=Lg(i,i.FRAGMENT_SHADER,T);i.attachShader(p,y),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(E){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",I=i.getShaderInfoLog(y)||"",N=i.getShaderInfoLog(M)||"",P=D.trim(),B=I.trim(),k=N.trim(),O=!0,q=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,M);else{let U=Ug(i,y,"vertex"),C=Ug(i,M,"fragment");st("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+U+`
`+C)}else P!==""?nt("WebGLProgram: Program Info Log:",P):(B===""||k==="")&&(q=!1);q&&(E.diagnostics={runnable:O,programLog:P,vertexShader:{log:B,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(y),i.deleteShader(M),_=new Ra(i,p),S=W1(i,p)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,N1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=M,this}var nT=0,Mp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bp(e),t.set(e,n)),n}},bp=class{constructor(e){this.id=nT++,this.code=e,this.usedTimes=0}};function iT(s){return s===Ur||s===tc||s===nc}function sT(s,e,t,n,i,r){let o=new pa,a=new Mp,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,w,E,D,I){let N=E.fog,P=D.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||B,k),q=d[_.type],U=n.precision;_.precision!==null&&(U=n.getMaxPrecision(_.precision),U!==_.precision&&nt("WebGLProgram.getParameters:",_.precision,"not supported, using",U,"instead."));let C=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=C!==void 0?C.length:0,ue=0;P.morphAttributes.position!==void 0&&(ue=1),P.morphAttributes.normal!==void 0&&(ue=2),P.morphAttributes.color!==void 0&&(ue=3);let Pe,Y,le,_e;if(q){let ae=Ds[q];Pe=ae.vertexShader,Y=ae.fragmentShader}else{Pe=_.vertexShader,Y=_.fragmentShader;let ae=a.getVertexShaderStage(_),Ve=a.getFragmentShaderStage(_);a.update(_,ae,Ve),le=ae.id,_e=Ve.id}let we=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),ce=D.isInstancedMesh===!0,he=D.isBatchedMesh===!0,Me=!!_.map,Ce=!!_.matcap,me=!!O,be=me&&O.isPMREMTexture===!0,je=!!_.aoMap,et=!!_.lightMap,W=!!_.bumpMap&&_.wireframe===!1,te=!!_.normalMap,Re=!!_.displacementMap,Be=!!_.emissiveMap,Oe=!!_.metalnessMap,He=!!_.roughnessMap,tt=_.anisotropy>0,H=_.clearcoat>0,ot=_.diffuseRoughness>0,Xe=_.dispersion>0,j=_.retroreflectivity>0,G=_.iridescence>0,ke=_.sheen>0,ve=_.transmission>0,We=tt&&!!_.anisotropyMap,L=H&&!!_.clearcoatMap,A=H&&!!_.clearcoatNormalMap,X=H&&!!_.clearcoatRoughnessMap,fe=ot&&!!_.diffuseRoughnessMap,se=G&&!!_.iridescenceMap,ge=G&&!!_.iridescenceThicknessMap,Te=ke&&!!_.sheenColorMap,$=ke&&!!_.sheenRoughnessMap,ne=!!_.specularMap,pe=!!_.specularColorMap,z=!!_.specularIntensityMap,ie=ve&&!!_.transmissionMap,Q=ve&&!!_.thicknessMap,Ae=!!_.gradientMap,ye=!!_.alphaMap,Ee=_.alphaTest>0,xe=!!_.alphaHash,Se=!!_.extensions,re=Ps;_.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(re=s.toneMapping);let oe=be?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Ie={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Pe,fragmentShader:Y,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:U,batching:he,batchingColor:he&&D._colorsTexture!==null,instancing:ce,instancingColor:ce&&D.instanceColor!==null,instancingMorph:ce&&D.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:Ce,envMap:me,envMapMode:me&&O.mapping,envMapPMREM:be,envMapMaxLod:be?oe.length-1:null,envMapSize:be?oe[0].width:null,aoMap:je,lightMap:et,bumpMap:W,normalMap:te,displacementMap:Re,emissiveMap:Be,normalMapObjectSpace:te&&_.normalMapType===lg,normalMapTangentSpace:te&&_.normalMapType===ic,packedNormalMap:te&&_.normalMapType===ic&&iT(_.normalMap.format),metalnessMap:Oe,roughnessMap:He,anisotropy:tt,anisotropyMap:We,clearcoat:H,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:X,diffuseRoughness:ot,diffuseRoughnessMap:fe,dispersion:Xe,retroreflection:j,iridescence:G,iridescenceMap:se,iridescenceThicknessMap:ge,sheen:ke,sheenColorMap:Te,sheenRoughnessMap:$,specularMap:ne,specularColorMap:pe,specularIntensityMap:z,transmission:ve,transmissionMap:ie,thicknessMap:Q,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===Ea&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ee,alphaHash:xe,combine:_.combine,mapUv:Me&&u(_.map.channel),aoMapUv:je&&u(_.aoMap.channel),lightMapUv:et&&u(_.lightMap.channel),bumpMapUv:W&&u(_.bumpMap.channel),normalMapUv:te&&u(_.normalMap.channel),displacementMapUv:Re&&u(_.displacementMap.channel),emissiveMapUv:Be&&u(_.emissiveMap.channel),metalnessMapUv:Oe&&u(_.metalnessMap.channel),roughnessMapUv:He&&u(_.roughnessMap.channel),anisotropyMapUv:We&&u(_.anisotropyMap.channel),clearcoatMapUv:L&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(_.sheenRoughnessMap.channel),specularMapUv:ne&&u(_.specularMap.channel),specularColorMapUv:pe&&u(_.specularColorMap.channel),specularIntensityMapUv:z&&u(_.specularIntensityMap.channel),transmissionMapUv:ie&&u(_.transmissionMap.channel),thicknessMapUv:Q&&u(_.thicknessMap.channel),alphaMapUv:ye&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(te||tt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Me||ye),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(ae=>ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:Be&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===kn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)S.push(w),S.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(m(S,_),x(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function x(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let S=d[_.type],w;if(S){let E=Ds[S];w=ci.clone(E.uniforms)}else w=_.uniforms;return w}function T(_,S){let w=h.get(S);return w!==void 0?++w.usedTimes:(w=new tT(s,S,_,i),c.push(w),h.set(S,w)),w}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:b}}function rT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function oT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,g,m,x){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},s[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=o(d),v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=x),e++,v}function l(d,u,p,g,m,x,v){v.reversedDepth===!0&&(m=-m);let T=a(d,u,p,g,m,x);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):t.push(T)}function c(d,u,p,g,m,x){let v=a(d,u,p,g,m,x);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,u){t.length>1&&t.sort(d||oT),n.length>1&&n.sort(u||zg),i.length>1&&i.sort(u||zg)}function f(){for(let d=e,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function aT(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Hg,s.set(n,[o])):i>=r.length?(o=new Hg,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function lT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function cT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var hT=0;function uT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fT(s){let e=new lT,t=cT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new ct,o=new ct;function a(c){let h=0,f=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,p=0,g=0,m=0,x=0,v=0,T=0,y=0,M=0,b=0,_=0,S=0,w=0,E=0;c.sort(uT);for(let I=0,N=c.length;I<N;I++){let P=c[I],B=P.color,k=P.intensity,O=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ur?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*k,f+=B.g*k,d+=B.b*k;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],k);E++}else if(P.isSunLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let C=P.shadow,Z=t.get(P);Z.shadowIntensity=C.intensity,Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=q;let ue=C.getViewportCount();for(let Pe=0;Pe<ue;Pe++)n.sunShadowMatrix[g+Pe]=C.getMatrix(Pe),n.sunShadowCascade[g+Pe]=C._cascadeData[Pe];g+=ue,p++}n.sun[u]=U,u++}else if(P.isDirectionalLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let C=P.shadow,Z=t.get(P);Z.shadowIntensity=C.intensity,Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,M++}n.directional[m]=U,m++}else if(P.isSpotLight){let U=e.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(B).multiplyScalar(k),U.distance=O,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[v]=U;let C=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,C.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=C.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=C.intensity,Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=q,_++}v++}else if(P.isRectAreaLight){let U=e.get(P);U.color.copy(B).multiplyScalar(k),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=U,T++}else if(P.isPointLight){let U=e.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let C=P.shadow,Z=t.get(P);Z.shadowIntensity=C.intensity,Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,n.pointShadow[x]=Z,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=P.shadow.matrix,b++}n.point[x]=U,x++}else if(P.isHemisphereLight){let U=e.get(P);U.skyColor.copy(P.color).multiplyScalar(k),U.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[y]=U,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==E)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=x,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,D.sunLength=u,D.directionalLength=m,D.pointLength=x,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=E,n.version=hT++)}function l(c,h){let f=0,d=0,u=0,p=0,g=0,m=0,x=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),f++}else if(y.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(x),d++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(x),p++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),u++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function Vg(s){let e=new fT(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}function a(f){n.push(f)}function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dT(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Vg(s),e.set(i,[a])):r>=o.length?(a=new Vg(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var pT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mT=`uniform sampler2D shadow_pass;
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
}`,gT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],_T=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Gg=new ct,sc=new F,_p=new F;function xT(s,e,t){let n=new Cr,i=new De,r=new De,o=new Ht,a=new Wh,l=new Xh,c={},h=t.maxTextureSize,f={[Nr]:kn,[kn]:Nr,[In]:In},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:pT,fragmentShader:mT}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ue(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let x=this.type;this.render=function(b,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===G0&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fo);let w=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Dn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=x!==this.type;N&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=b.length;P<B;P++){let k=b[P],O=k.shadow;if(O===void 0){nt("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let q=O.getFrameExtents();i.multiply(q),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,O.mapSize.y=r.y));let U=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=U,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ta){if(k.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Vt(i.x,i.y,{format:Ur,type:en,minFilter:ai,magFilter:ai,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new us(i.x,i.y,Ki),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=js,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an}else k.isPointLight?(O.map=new oc(i.x),O.map.depthTexture=new Pl(i.x,ps)):(O.map=new Vt(i.x,i.y),O.map.depthTexture=new us(i.x,i.y,ps)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=js,this.type===fo?(O.map.depthTexture.compareFunction=U?Qd:Kd,O.map.depthTexture.minFilter=ai,O.map.depthTexture.magFilter=ai):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let C=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();k.isPointLight!==!0&&O.updateMatrices(k,S);let Z=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:S.layers;for(let ue=0;ue<C;ue++){let Pe=O.getCamera(ue);if(k.isPointLight){let Y=O.camera,le=O.matrix,_e=k.distance||Y.far;_e!==Y.far&&(Y.far=_e,Y.updateProjectionMatrix()),sc.setFromMatrixPosition(k.matrixWorld),Y.position.copy(sc),_p.copy(Y.position),_p.add(gT[ue]),Y.up.copy(_T[ue]),Y.lookAt(_p),Y.updateMatrixWorld(),le.makeTranslation(-sc.x,-sc.y,-sc.z),Gg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Gg,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,ue),s.clear();else{ue===0&&(s.setRenderTarget(O.map),s.clear());let Y=O.getViewport(ue);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),I.viewport(o)}n=O.getFrustum(ue),y(_,S,Pe,k,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Ta&&v(O,S),O.needsUpdate=!1}x=this.type,m.needsUpdate=!1,s.setRenderTarget(w,E,D)};function v(b,_){let S=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null?b.mapPass=new Vt(i.x,i.y,{format:Ur,type:en}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(_,null,S,d,g,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(_,null,S,u,g,null)}function T(b,_,S,w){let E=null,D=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let I=E.uuid,N=_.uuid,P=c[I];P===void 0&&(P={},c[I]=P);let B=P[N];B===void 0&&(B=E.clone(),P[N]=B,_.addEventListener("dispose",M)),E=B}if(E.visible=_.visible,E.wireframe=_.wireframe,w===Ta?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:f[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=s.properties.get(E);I.light=S}return E}function y(b,_,S,w,E,D){if(b.visible===!1)return;if(b.layers.test(E)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Ta)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let P=e.update(b),B=b.material;if(Array.isArray(B)){let k=P.groups;for(let O=0,q=k.length;O<q;O++){let U=k[O],C=B[U.materialIndex];if(C&&C.visible){let Z=T(b,C,w,D);b.onBeforeShadow(s,b,_,S,P,Z,U),s.renderBufferDirect(S,null,P,Z,b,U),b.onAfterShadow(s,b,_,S,P,Z,U)}}}else if(B.visible){let k=T(b,B,w,D);b.onBeforeShadow(s,b,_,S,P,k,null),s.renderBufferDirect(S,null,P,k,b,null),b.onAfterShadow(s,b,_,S,P,k,null)}}let N=b.children;for(let P=0,B=N.length;P<B;P++)y(N[P],_,S,w,E,D)}function M(b){b.target.removeEventListener("dispose",M);for(let S in c){let w=c[S],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function vT(s,e){function t(){let z=!1,ie=new Ht,Q=null,Ae=new Ht(0,0,0,0);return{setMask:function(ye){Q!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){z=ye},setClear:function(ye,Ee,xe,Se,re){re===!0&&(ye*=Se,Ee*=Se,xe*=Se),ie.set(ye,Ee,xe,Se),Ae.equals(ie)===!1&&(s.clearColor(ye,Ee,xe,Se),Ae.copy(ie))},reset:function(){z=!1,Q=null,Ae.set(-1,0,0,0)}}}function n(){let z=!1,ie=!1,Q=null,Ae=null,ye=null;return{setReversed:function(Ee){if(ie!==Ee){let xe=e.get("EXT_clip_control");Ee?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=Ee;let Se=ye;ye=null,this.setClear(Se)}},getReversed:function(){return ie},setTest:function(Ee){Ee?de(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function(Ee){Q!==Ee&&!z&&(s.depthMask(Ee),Q=Ee)},setFunc:function(Ee){if(ie&&(Ee=xg[Ee]),Ae!==Ee){switch(Ee){case Ch:s.depthFunc(s.NEVER);break;case Ph:s.depthFunc(s.ALWAYS);break;case Ih:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case Dh:s.depthFunc(s.EQUAL);break;case Lh:s.depthFunc(s.GEQUAL);break;case Nh:s.depthFunc(s.GREATER);break;case Uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=Ee}},setLocked:function(Ee){z=Ee},setClear:function(Ee){ye!==Ee&&(ye=Ee,ie&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){z=!1,Q=null,Ae=null,ye=null,ie=!1}}}function i(){let z=!1,ie=null,Q=null,Ae=null,ye=null,Ee=null,xe=null,Se=null,re=null;return{setTest:function(oe){z||(oe?de(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(oe){ie!==oe&&!z&&(s.stencilMask(oe),ie=oe)},setFunc:function(oe,Ie,ae){(Q!==oe||Ae!==Ie||ye!==ae)&&(s.stencilFunc(oe,Ie,ae),Q=oe,Ae=Ie,ye=ae)},setOp:function(oe,Ie,ae){(Ee!==oe||xe!==Ie||Se!==ae)&&(s.stencilOp(oe,Ie,ae),Ee=oe,xe=Ie,Se=ae)},setLocked:function(oe){z=oe},setClear:function(oe){re!==oe&&(s.clearStencil(oe),re=oe)},reset:function(){z=!1,ie=null,Q=null,Ae=null,ye=null,Ee=null,xe=null,Se=null,re=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],g=null,m=!1,x=null,v=null,T=null,y=null,M=null,b=null,_=null,S=new Fe(0,0,0),w=0,E=!1,D=null,I=null,N=null,P=null,B=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,q=0,U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=q>=1):U.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=q>=2);let C=null,Z={},ue=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Y=new Ht().fromArray(ue),le=new Ht().fromArray(Pe);function _e(z,ie,Q,Ae){let ye=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(z,Ee),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<Q;xe++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(ie+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return Ee}let we={};we[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(la),W(!1),te(Bd),de(s.CULL_FACE),je(Dn);function de(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function ce(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function he(z,ie){return d[z]!==ie?(s.bindFramebuffer(z,ie),d[z]=ie,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ie),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Me(z,ie){let Q=p,Ae=!1;if(z){Q=u.get(ie),Q===void 0&&(Q=[],u.set(ie,Q));let ye=z.textures;if(Q.length!==ye.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,xe=ye.length;Ee<xe;Ee++)Q[Ee]=s.COLOR_ATTACHMENT0+Ee;Q.length=ye.length,Ae=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(Q)}function Ce(z){return g!==z?(s.useProgram(z),g=z,!0):!1}let me={[Ji]:s.FUNC_ADD,[W0]:s.FUNC_SUBTRACT,[X0]:s.FUNC_REVERSE_SUBTRACT};me[q0]=s.MIN,me[Y0]=s.MAX;let be={[po]:s.ZERO,[$0]:s.ONE,[Z0]:s.SRC_COLOR,[Hd]:s.SRC_ALPHA,[j0]:s.SRC_ALPHA_SATURATE,[Gl]:s.DST_COLOR,[Vl]:s.DST_ALPHA,[J0]:s.ONE_MINUS_SRC_COLOR,[Vd]:s.ONE_MINUS_SRC_ALPHA,[Q0]:s.ONE_MINUS_DST_COLOR,[K0]:s.ONE_MINUS_DST_ALPHA,[eg]:s.CONSTANT_COLOR,[tg]:s.ONE_MINUS_CONSTANT_COLOR,[ng]:s.CONSTANT_ALPHA,[ig]:s.ONE_MINUS_CONSTANT_ALPHA};function je(z,ie,Q,Ae,ye,Ee,xe,Se,re,oe){if(z===Dn){m===!0&&(ce(s.BLEND),m=!1);return}if(m===!1&&(de(s.BLEND),m=!0),z!==iu){if(z!==x||oe!==E){if((v!==Ji||M!==Ji)&&(s.blendEquation(s.FUNC_ADD),v=Ji,M=Ji),oe)switch(z){case Ea:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFunc(s.ONE,s.ONE);break;case kd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:st("WebGLState: Invalid blending: ",z);break}else switch(z){case Ea:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kd:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zd:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",z);break}T=null,y=null,b=null,_=null,S.set(0,0,0),w=0,x=z,E=oe}return}ye=ye||ie,Ee=Ee||Q,xe=xe||Ae,(ie!==v||ye!==M)&&(s.blendEquationSeparate(me[ie],me[ye]),v=ie,M=ye),(Q!==T||Ae!==y||Ee!==b||xe!==_)&&(s.blendFuncSeparate(be[Q],be[Ae],be[Ee],be[xe]),T=Q,y=Ae,b=Ee,_=xe),(Se.equals(S)===!1||re!==w)&&(s.blendColor(Se.r,Se.g,Se.b,re),S.copy(Se),w=re),x=z,E=!1}function et(z,ie){z.side===In?ce(s.CULL_FACE):de(s.CULL_FACE);let Q=z.side===kn;ie&&(Q=!Q),W(Q),z.blending===Ea&&z.transparent===!1?je(Dn):je(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ae=z.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Be(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function W(z){D!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),D=z)}function te(z){z!==H0?(de(s.CULL_FACE),z!==I&&(z===Bd?s.cullFace(s.BACK):z===V0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),I=z}function Re(z){z!==N&&(O&&s.lineWidth(z),N=z)}function Be(z,ie,Q){z?(de(s.POLYGON_OFFSET_FILL),(P!==ie||B!==Q)&&(P=ie,B=Q,o.getReversed()&&(ie=-ie,Q=-Q),s.polygonOffset(ie,Q))):ce(s.POLYGON_OFFSET_FILL)}function Oe(z){z?de(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function He(z){z===void 0&&(z=s.TEXTURE0+k-1),C!==z&&(s.activeTexture(z),C=z)}function tt(z,ie,Q){Q===void 0&&(C===null?Q=s.TEXTURE0+k-1:Q=C);let Ae=Z[Q];Ae===void 0&&(Ae={type:void 0,texture:void 0},Z[Q]=Ae),(Ae.type!==z||Ae.texture!==ie)&&(C!==Q&&(s.activeTexture(Q),C=Q),s.bindTexture(z,ie||we[z]),Ae.type=z,Ae.texture=ie)}function H(){let z=Z[C];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{s.compressedTexImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function Xe(){try{s.compressedTexImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function j(){try{s.texSubImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function G(){try{s.texSubImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function ke(){try{s.compressedTexSubImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function We(){try{s.texStorage2D(...arguments)}catch(z){st("WebGLState:",z)}}function L(){try{s.texStorage3D(...arguments)}catch(z){st("WebGLState:",z)}}function A(){try{s.texImage2D(...arguments)}catch(z){st("WebGLState:",z)}}function X(){try{s.texImage3D(...arguments)}catch(z){st("WebGLState:",z)}}function fe(z){return f[z]!==void 0?f[z]:s.getParameter(z)}function se(z,ie){f[z]!==ie&&(s.pixelStorei(z,ie),f[z]=ie)}function ge(z){Y.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Y.copy(z))}function Te(z){le.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),le.copy(z))}function $(z,ie){let Q=c.get(ie);Q===void 0&&(Q=new WeakMap,c.set(ie,Q));let Ae=Q.get(z);Ae===void 0&&(Ae=s.getUniformBlockIndex(ie,z.name),s.uniformBlockBinding(ie,Ae,Ae),Q.set(z,Ae))}function ne(z,ie,Q){let ye=c.get(ie).get(z);l[ye]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,ye,Q),l[ye]=Q)}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},C=null,Z={},d={},l={},u=new WeakMap,p=[],g=null,m=!1,x=null,v=null,T=null,y=null,M=null,b=null,_=null,S=new Fe(0,0,0),w=0,E=!1,D=null,I=null,N=null,P=null,B=null,Y.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:ce,bindFramebuffer:he,drawBuffers:Me,useProgram:Ce,setBlending:je,setMaterial:et,setFlipSided:W,setCullFace:te,setLineWidth:Re,setPolygonOffset:Be,setScissorTest:Oe,activeTexture:He,bindTexture:tt,unbindTexture:H,compressedTexImage2D:ot,compressedTexImage3D:Xe,texImage2D:A,texImage3D:X,pixelStorei:se,getParameter:fe,updateUBOMapping:$,uniformBlockBinding:ne,texStorage2D:We,texStorage3D:L,texSubImage2D:j,texSubImage3D:G,compressedTexSubImage2D:ke,compressedTexSubImage3D:ve,scissor:ge,viewport:Te,reset:pe}}function yT(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,g=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return m?new OffscreenCanvas(L,A):ha("canvas")}function v(L,A,X){let fe=1,se=We(L);if((se.width>X||se.height>X)&&(fe=X/Math.max(se.width,se.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ge=Math.floor(fe*se.width),Te=Math.floor(fe*se.height);d===void 0&&(d=x(ge,Te));let $=A?x(ge,Te):d;return $.width=ge,$.height=Te,$.getContext("2d").drawImage(L,0,0,ge,Te),nt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ge+"x"+Te+")."),$}else return"data"in L&&nt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),L;return L}function T(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,A,X,fe,se,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Te;fe&&(Te=e.get("EXT_texture_norm16"),Te||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=A;if(A===s.RED&&(X===s.FLOAT&&($=s.R32F),X===s.HALF_FLOAT&&($=s.R16F),X===s.UNSIGNED_BYTE&&($=s.R8),X===s.UNSIGNED_SHORT&&Te&&($=Te.R16_EXT),X===s.SHORT&&Te&&($=Te.R16_SNORM_EXT)),A===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.R8UI),X===s.UNSIGNED_SHORT&&($=s.R16UI),X===s.UNSIGNED_INT&&($=s.R32UI),X===s.BYTE&&($=s.R8I),X===s.SHORT&&($=s.R16I),X===s.INT&&($=s.R32I)),A===s.RG&&(X===s.FLOAT&&($=s.RG32F),X===s.HALF_FLOAT&&($=s.RG16F),X===s.UNSIGNED_BYTE&&($=s.RG8),X===s.UNSIGNED_SHORT&&Te&&($=Te.RG16_EXT),X===s.SHORT&&Te&&($=Te.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.RG8UI),X===s.UNSIGNED_SHORT&&($=s.RG16UI),X===s.UNSIGNED_INT&&($=s.RG32UI),X===s.BYTE&&($=s.RG8I),X===s.SHORT&&($=s.RG16I),X===s.INT&&($=s.RG32I)),A===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.RGB8UI),X===s.UNSIGNED_SHORT&&($=s.RGB16UI),X===s.UNSIGNED_INT&&($=s.RGB32UI),X===s.BYTE&&($=s.RGB8I),X===s.SHORT&&($=s.RGB16I),X===s.INT&&($=s.RGB32I)),A===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&($=s.RGBA8UI),X===s.UNSIGNED_SHORT&&($=s.RGBA16UI),X===s.UNSIGNED_INT&&($=s.RGBA32UI),X===s.BYTE&&($=s.RGBA8I),X===s.SHORT&&($=s.RGBA16I),X===s.INT&&($=s.RGBA32I)),A===s.RGB&&(X===s.UNSIGNED_SHORT&&Te&&($=Te.RGB16_EXT),X===s.SHORT&&Te&&($=Te.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),A===s.RGBA){let ne=ge?Sl:gt.getTransfer(se);X===s.FLOAT&&($=s.RGBA32F),X===s.HALF_FLOAT&&($=s.RGBA16F),X===s.UNSIGNED_BYTE&&($=ne===Tt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&Te&&($=Te.RGBA16_EXT),X===s.SHORT&&Te&&($=Te.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(L,A){let X;return L?A===null||A===ps||A===rr?X=s.DEPTH24_STENCIL8:A===Ki?X=s.DEPTH32F_STENCIL8:A===Aa&&(X=s.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ps||A===rr?X=s.DEPTH_COMPONENT24:A===Ki?X=s.DEPTH_COMPONENT32F:A===Aa&&(X=s.DEPTH_COMPONENT16),X}function S(L,A){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==ai?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){let A=new WeakRef(L);n.get(L).__ref=A,p.add(A),g.register(L,A,A)}function E(L){let A=n.get(L).__ref;A!==void 0&&(p.delete(A),g.unregister(A))}function D(L){N(L.target)}function I(L){P(L.target)}function N(L){L.removeEventListener("dispose",D),E(L),k(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&f.delete(L)}function P(L){L.removeEventListener("dispose",I),E(L),q(L)}function B(){for(let L of p){let A=L.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):N(A))}p.clear(),f.clear()}function k(L){let A=n.get(L);if(A.__webglInit===void 0)return;let X=L.source,fe=u.get(X);if(fe){let se=fe[A.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(L),Object.keys(fe).length===0&&u.delete(X)}n.remove(L)}function O(L){let A=n.get(L);s.deleteTexture(A.__webglTexture);let X=L.source,fe=u.get(X);delete fe[A.__cacheKey],o.memory.textures--}function q(L){let A=n.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();let X=L.depthTexture;if(X&&X.renderTarget===L&&N(X),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(A.__webglFramebuffer[se]))for(let ge=0;ge<A.__webglFramebuffer[se].length;ge++)s.deleteFramebuffer(A.__webglFramebuffer[se][ge]);else s.deleteFramebuffer(A.__webglFramebuffer[se]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[se])}else{if(Array.isArray(A.__webglFramebuffer))for(let se=0;se<A.__webglFramebuffer.length;se++)s.deleteFramebuffer(A.__webglFramebuffer[se]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let se=0;se<A.__webglColorRenderbuffer.length;se++)A.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[se]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let fe=L.textures;for(let se=0,ge=fe.length;se<ge;se++){let Te=n.get(fe[se]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(fe[se])}n.remove(L)}let U=0;function C(){U=0}function Z(){return U}function ue(L){U=L}function Pe(){let L=U;return L>=i.maxTextures&&nt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,L}function Y(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function le(L,A){let X=n.get(L);if(L.isVideoTexture&&ke(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let fe=L.image;if(fe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{et(X,L,A);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+A)}function _e(L,A){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){et(X,L,A);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+A)}function we(L,A){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){et(X,L,A);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+A)}function de(L,A){let X=n.get(L);if(L.version>0&&X.__version!==L.version){W(X,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+A)}let ce={[Si]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[Oh]:s.MIRRORED_REPEAT},he={[an]:s.NEAREST,[og]:s.NEAREST_MIPMAP_NEAREST,[Jl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[ou]:s.LINEAR_MIPMAP_NEAREST,[sr]:s.LINEAR_MIPMAP_LINEAR},Me={[hg]:s.NEVER,[jd]:s.ALWAYS,[ug]:s.LESS,[Kd]:s.LEQUAL,[fg]:s.EQUAL,[Qd]:s.GEQUAL,[dg]:s.GREATER,[pg]:s.NOTEQUAL};function Ce(L,A){if(A.type===Ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ai||A.magFilter===ou||A.magFilter===Jl||A.magFilter===sr||A.minFilter===ai||A.minFilter===ou||A.minFilter===Jl||A.minFilter===sr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ce[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,he[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,he[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===an||A.minFilter!==Jl&&A.minFilter!==sr||A.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function me(L,A){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",D),w(A));let fe=A.source,se=u.get(fe);se===void 0&&(se={},u.set(fe,se));let ge=Y(A);if(ge!==L.__cacheKey){se[ge]===void 0&&(se[ge]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),se[ge].usedTimes++;let Te=se[L.__cacheKey];Te!==void 0&&(se[L.__cacheKey].usedTimes--,Te.usedTimes===0&&O(A)),L.__cacheKey=ge,L.__webglTexture=se[ge].texture}return X}function be(L,A,X){return Math.floor(Math.floor(L/X)/A)}function je(L,A,X,fe){let ge=L.updateRanges;if(ge.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,X,fe,A.data);else{ge.sort((z,ie)=>z.start-ie.start);let Te=0;for(let z=1;z<ge.length;z++){let ie=ge[Te],Q=ge[z],Ae=ie.start+ie.count,ye=be(Q.start,A.width,4),Ee=be(ie.start,A.width,4);Q.start<=Ae+1&&ye===Ee&&be(Q.start+Q.count-1,A.width,4)===ye?ie.count=Math.max(ie.count,Q.start+Q.count-ie.start):(++Te,ge[Te]=Q)}ge.length=Te+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let z=0,ie=ge.length;z<ie;z++){let Q=ge[z],Ae=Math.floor(Q.start/4),ye=Math.ceil(Q.count/4),Ee=Ae%A.width,xe=Math.floor(Ae/A.width),Se=ye,re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,xe),t.texSubImage2D(s.TEXTURE_2D,0,Ee,xe,Se,re,X,fe,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe)}}function et(L,A,X){let fe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=s.TEXTURE_3D);let se=me(L,A),ge=A.source;t.bindTexture(fe,L.__webglTexture,s.TEXTURE0+X);let Te=n.get(ge);if(ge.version!==Te.__version||se===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let re=gt.getPrimaries(gt.workingColorSpace),oe=A.colorSpace===or?null:gt.getPrimaries(A.colorSpace),Ie=A.colorSpace===or||re===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ne=v(A.image,!1,i.maxTextureSize);ne=ve(A,ne);let pe=r.convert(A.format,A.colorSpace),z=r.convert(A.type),ie=b(A.internalFormat,pe,z,A.normalized,A.colorSpace,A.isVideoTexture);Ce(fe,A);let Q,Ae=A.mipmaps,ye=A.isVideoTexture!==!0,Ee=Te.__version===void 0||se===!0,xe=ge.dataReady,Se=S(A,ne);if(A.isDepthTexture)ie=_(A.format===ms,A.type),Ee&&(ye?t.texStorage2D(s.TEXTURE_2D,1,ie,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ie,ne.width,ne.height,0,pe,z,null));else if(A.isDataTexture)if(Ae.length>0){ye&&Ee&&t.texStorage2D(s.TEXTURE_2D,Se,ie,Ae[0].width,Ae[0].height);for(let re=0,oe=Ae.length;re<oe;re++)Q=Ae[re],ye?xe&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Q.width,Q.height,pe,z,Q.data):t.texImage2D(s.TEXTURE_2D,re,ie,Q.width,Q.height,0,pe,z,Q.data);A.generateMipmaps=!1}else ye?(Ee&&t.texStorage2D(s.TEXTURE_2D,Se,ie,ne.width,ne.height),xe&&je(A,ne,pe,z)):t.texImage2D(s.TEXTURE_2D,0,ie,ne.width,ne.height,0,pe,z,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ye&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,ie,Ae[0].width,Ae[0].height,ne.depth);for(let re=0,oe=Ae.length;re<oe;re++)if(Q=Ae[re],A.format!==Li)if(pe!==null)if(ye){if(xe)if(A.layerUpdates.size>0){let Ie=hp(Q.width,Q.height,A.format,A.type);for(let ae of A.layerUpdates){let Ve=Q.data.subarray(ae*Ie/Q.data.BYTES_PER_ELEMENT,(ae+1)*Ie/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,ae,Q.width,Q.height,1,pe,Ve)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Q.width,Q.height,ne.depth,pe,Q.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,ie,Q.width,Q.height,ne.depth,0,Q.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Q.width,Q.height,ne.depth,pe,z,Q.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,ie,Q.width,Q.height,ne.depth,0,pe,z,Q.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ye&&Ee&&t.texStorage2D(s.TEXTURE_2D,Se,ie,Ae[0].width,Ae[0].height);for(let re=0,oe=Ae.length;re<oe;re++)Q=Ae[re],A.format!==Li?pe!==null?ye?xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Q.width,Q.height,pe,Q.data):t.compressedTexImage2D(s.TEXTURE_2D,re,ie,Q.width,Q.height,0,Q.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?xe&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Q.width,Q.height,pe,z,Q.data):t.texImage2D(s.TEXTURE_2D,re,ie,Q.width,Q.height,0,pe,z,Q.data)}else if(A.isDataArrayTexture)if(ye){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,ie,ne.width,ne.height,ne.depth),xe)if(A.layerUpdates.size>0){let re=hp(ne.width,ne.height,A.format,A.type);for(let oe of A.layerUpdates){let Ie=ne.data.subarray(oe*re/ne.data.BYTES_PER_ELEMENT,(oe+1)*re/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,ne.width,ne.height,1,pe,z,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,z,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,pe,z,ne.data);else if(A.isData3DTexture)ye?(Ee&&t.texStorage3D(s.TEXTURE_3D,Se,ie,ne.width,ne.height,ne.depth),xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,z,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,pe,z,ne.data);else if(A.isFramebufferTexture){if(Ee)if(ye)t.texStorage2D(s.TEXTURE_2D,Se,ie,ne.width,ne.height);else{let re=ne.width,oe=ne.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,ie,re,oe,0,pe,z,null),re>>=1,oe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let re=s.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ne.parentNode!==re){re.appendChild(ne),f.add(A),re.onpaint=oe=>{let Ie=oe.changedElements;for(let ae of f)Ie.includes(ae.image)&&(ae.needsUpdate=!0)},re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{let Ie=s.RGBA,ae=s.RGBA,Ve=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,ae,Ve,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ye&&Ee){let re=We(Ae[0]);t.texStorage2D(s.TEXTURE_2D,Se,ie,re.width,re.height)}for(let re=0,oe=Ae.length;re<oe;re++)Q=Ae[re],ye?xe&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,pe,z,Q):t.texImage2D(s.TEXTURE_2D,re,ie,pe,z,Q);A.generateMipmaps=!1}else if(ye){if(Ee){let re=We(ne);t.texStorage2D(s.TEXTURE_2D,Se,ie,re.width,re.height)}xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,z,ne)}else t.texImage2D(s.TEXTURE_2D,0,ie,pe,z,ne);T(A)&&A.mipmapsAutoUpdate===!0&&y(fe),Te.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function W(L,A,X){if(A.image.length!==6)return;let fe=me(L,A),se=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);let ge=n.get(se);if(se.version!==ge.__version||fe===!0){t.activeTexture(s.TEXTURE0+X);let Te=gt.getPrimaries(gt.workingColorSpace),$=A.colorSpace===or?null:gt.getPrimaries(A.colorSpace),ne=A.colorSpace===or||Te===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pe=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,ie=[];for(let ae=0;ae<6;ae++)!pe&&!z?ie[ae]=v(A.image[ae],!0,i.maxCubemapSize):ie[ae]=z?A.image[ae].image:A.image[ae],ie[ae]=ve(A,ie[ae]);let Q=ie[0],Ae=r.convert(A.format,A.colorSpace),ye=r.convert(A.type),Ee=b(A.internalFormat,Ae,ye,A.normalized,A.colorSpace),xe=A.isVideoTexture!==!0,Se=ge.__version===void 0||fe===!0,re=se.dataReady,oe=S(A,Q);Ce(s.TEXTURE_CUBE_MAP,A);let Ie;if(A.isDepthTexture){if(Ee=_(A.format===ms,A.type),Se)if(xe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ee,Q.width,Q.height);else for(let ae=0;ae<6;ae++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ee,Q.width,Q.height,0,Ae,ye,null)}else if(pe){xe&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ee,Q.width,Q.height);for(let ae=0;ae<6;ae++){Ie=ie[ae].mipmaps;for(let Ve=0;Ve<Ie.length;Ve++){let _t=Ie[Ve];A.format!==Li?Ae!==null?xe?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,_t.width,_t.height,Ae,_t.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,Ee,_t.width,_t.height,0,_t.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,_t.width,_t.height,Ae,ye,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,Ee,_t.width,_t.height,0,Ae,ye,_t.data)}}}else{if(Ie=A.mipmaps,xe&&Se){Ie.length>0&&oe++;let ae=We(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ee,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(z){xe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ie[ae].width,ie[ae].height,Ae,ye,ie[ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ee,ie[ae].width,ie[ae].height,0,Ae,ye,ie[ae].data);for(let Ve=0;Ve<Ie.length;Ve++){let at=Ie[Ve].image[ae].image;xe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,at.width,at.height,Ae,ye,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,Ee,at.width,at.height,0,Ae,ye,at.data)}}else{xe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae,ye,ie[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ee,Ae,ye,ie[ae]);for(let Ve=0;Ve<Ie.length;Ve++){let _t=Ie[Ve];xe?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Ae,ye,_t.image[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,Ee,Ae,ye,_t.image[ae])}}}T(A)&&A.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ge.__version=se.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function te(L,A,X,fe,se,ge){let Te=r.convert(X.format,X.colorSpace),$=r.convert(X.type),ne=b(X.internalFormat,Te,$,X.normalized,X.colorSpace),pe=n.get(A),z=n.get(X);if(z.__renderTarget=A,!pe.__hasExternalTextures){let ie=Math.max(1,A.width>>ge),Q=Math.max(1,A.height>>ge);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,ge,ne,ie,Q,A.depth,0,Te,$,null):t.texImage2D(se,ge,ne,ie,Q,0,Te,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),G(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,se,z.__webglTexture,0,j(A)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,se,z.__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(L,A,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){let fe=A.depthTexture,se=fe&&fe.isDepthTexture?fe.type:null,ge=_(A.stencilBuffer,se),Te=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;G(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(A),ge,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,L)}else{let fe=A.textures;for(let se=0;se<fe.length;se++){let ge=fe[se],Te=r.convert(ge.format,ge.colorSpace),$=r.convert(ge.type),ne=b(ge.internalFormat,Te,$,ge.normalized,ge.colorSpace);G(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(A),ne,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(A),ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(L,A,X){let fe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(A.depthTexture);se.__renderTarget=A;let ge=fe?A.depthTexture.image[0]:A.depthTexture.image;(!se.__webglTexture||ge.width!==A.width||ge.height!==A.height)&&(ge.width=A.width,ge.height=A.height,A.depthTexture.needsUpdate=!0),fe?de(A.depthTexture,0):le(A.depthTexture,0);let Te=se.__webglTexture,$=j(A),ne=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,pe=A.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===js)G(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ne,Te,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ne,Te,0);else if(A.depthTexture.format===ms)G(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ne,Te,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ne,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(L){let A=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let fe=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){let se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",se)};fe.addEventListener("dispose",se),A.__depthDisposeCallback=se}A.__boundDepthTexture=fe}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(X)for(let fe=0;fe<6;fe++)Be(A.__webglFramebuffer[fe],L,fe);else L.texture.mipmaps.length>0?Be(A.__webglFramebuffer[0],L,0):Be(A.__webglFramebuffer,L,0);else if(X){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=s.createRenderbuffer(),Re(A.__webglDepthbuffer[fe],L,!1);else{let se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ge)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Re(A.__webglDepthbuffer,L,!1);else{let se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(L,A,X){let fe=n.get(L);A!==void 0&&te(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Oe(L)}function tt(L){let A=L.texture,X=n.get(L),fe=n.get(A);L.addEventListener("dispose",I),w(L);let se=L.textures,ge=L.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=A.version,o.memory.textures++),ge){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(A.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let ne=0;ne<A.mipmaps.length;ne++)X.__webglFramebuffer[$][ne]=s.createFramebuffer()}else X.__webglFramebuffer[$]=s.createFramebuffer()}else{if(A.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<A.mipmaps.length;$++)X.__webglFramebuffer[$]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Te)for(let $=0,ne=se.length;$<ne;$++){let pe=n.get(se[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&G(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<se.length;$++){let ne=se[$];X.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[$]);let pe=r.convert(ne.format,ne.colorSpace),z=r.convert(ne.type),ie=b(ne.internalFormat,pe,z,ne.normalized,ne.colorSpace,L.isXRRenderTarget===!0),Q=j(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,X.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,A);for(let $=0;$<6;$++)if(A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)te(X.__webglFramebuffer[$][ne],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne);else te(X.__webglFramebuffer[$],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(A)?y(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let $=0,ne=se.length;$<ne;$++){let pe=se[$],z=n.get(pe),ie=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,z.__webglTexture),Ce(ie,pe),te(X.__webglFramebuffer,L,pe,s.COLOR_ATTACHMENT0+$,ie,0),T(pe)&&y(ie)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,fe.__webglTexture),Ce($,A),A.mipmaps.length>0)for(let ne=0;ne<A.mipmaps.length;ne++)te(X.__webglFramebuffer[ne],L,A,s.COLOR_ATTACHMENT0,$,ne);else te(X.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,$,0);T(A)?y($):A.mipmaps.length>0&&s.texParameteri($,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Oe(L)}function H(L){let A=L.textures;for(let X=0,fe=A.length;X<fe;X++){let se=A[X];if(T(se)&&se.mipmapsAutoUpdate===!0){let ge=M(L),Te=n.get(se).__webglTexture;t.bindTexture(ge,Te),y(ge),t.unbindTexture()}}}let ot=[];function Xe(L){if(L.samples>0){if(G(L)===!1){let A=L.textures,X=L.width,fe=L.height,se=s.COLOR_BUFFER_BIT,ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(L),$=A.length>1;if($)for(let pe=0;pe<A.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let pe=0;pe<A.length;pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);let z=n.get(A[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,X,fe,0,0,X,fe,se,s.NEAREST),l===!0&&(ot.length=0,ot.push(s.COLOR_ATTACHMENT0+pe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ot.push(ge),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<A.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Te.__webglColorRenderbuffer[pe]);let z=n.get(A[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function j(L){return Math.min(i.maxSamples,L.samples)}function G(L){let A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(L){let A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function ve(L,A){let X=L.colorSpace,fe=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==yl&&X!==or&&(gt.getTransfer(X)===Tt?(fe!==Li||se!==Jn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",X)),A}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=C,this.getTextureUnits=Z,this.setTextureUnits=ue,this.setTexture2D=le,this.setTexture2DArray=_e,this.setTexture3D=we,this.setTextureCube=de,this.rebindTextures=He,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=G,this.dispose=B}function ST(s,e){function t(n,i=or){let r,o=gt.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===lu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$d)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xd)return s.BYTE;if(n===qd)return s.SHORT;if(n===Aa)return s.UNSIGNED_SHORT;if(n===au)return s.INT;if(n===ps)return s.UNSIGNED_INT;if(n===Ki)return s.FLOAT;if(n===en)return s.HALF_FLOAT;if(n===Zd)return s.ALPHA;if(n===Jd)return s.RGB;if(n===Li)return s.RGBA;if(n===js)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===hu)return s.RED;if(n===uu)return s.RED_INTEGER;if(n===Ur)return s.RG;if(n===fu)return s.RG_INTEGER;if(n===du)return s.RGBA_INTEGER;if(n===Kl||n===Ql||n===jl||n===ec)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ec)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ql)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ec)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pu||n===mu||n===gu||n===_u)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xu||n===vu||n===yu||n===Su||n===Mu||n===tc||n===bu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xu||n===vu)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Su)return r.COMPRESSED_R11_EAC;if(n===Mu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tc)return r.COMPRESSED_RG11_EAC;if(n===bu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tu||n===Eu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Du||n===Lu||n===Nu||n===Uu||n===Ou||n===Fu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Au)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bu||n===ku||n===zu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bu)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===Vu||n===nc||n===Gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var MT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
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

}`,Tp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Il(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:MT,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ep=class extends Ts{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",m=new Tp,x={},v=t.getContextAttributes(),T=null,y=null,M=[],b=[],_=new De,S=null,w=null,E=new $n;E.viewport=new Ht;let D=new $n;D.viewport=new Ht;let I=[E,D],N=new tu,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let le=M[Y];return le===void 0&&(le=new ma,M[Y]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Y){let le=M[Y];return le===void 0&&(le=new ma,M[Y]=le),le.getGripSpace()},this.getHand=function(Y){let le=M[Y];return le===void 0&&(le=new ma,M[Y]=le),le.getHandSpace()};function k(Y){let le=b.indexOf(Y.inputSource);if(le===-1)return;let _e=M[le];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||o),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<M.length;Y++){let le=b[Y];le!==null&&(b[Y]=null,M[Y].disconnect(le))}P=null,B=null,m.reset();for(let Y in x)delete x[Y];if(e.setRenderTarget(T),u=null,d=null,f=null,i=null,y=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",O),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,we=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?ms:js,we=v.stencil?rr:ps);let ce={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Vt(d.textureWidth,d.textureHeight,{format:Li,type:Jn,depthTexture:new us(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Vt(u.framebufferWidth,u.framebufferHeight,{format:Li,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let le=0;le<Y.removed.length;le++){let _e=Y.removed[le],we=b.indexOf(_e);we>=0&&(b[we]=null,M[we].disconnect(_e))}for(let le=0;le<Y.added.length;le++){let _e=Y.added[le],we=b.indexOf(_e);if(we===-1){for(let ce=0;ce<M.length;ce++)if(ce>=b.length){b.push(_e),we=ce;break}else if(b[ce]===null){b[ce]=_e,we=ce;break}if(we===-1)break}let de=M[we];de&&de.connect(_e)}}function U(Y,le){le===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(le.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let le=Y.near,_e=Y.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),N.near=D.near=E.near=le,N.far=D.far=E.far=_e,(P!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,B=N.far),N.layers.mask=Y.layers.mask|6,E.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let we=Y.parent,de=N.cameras;U(N,we);for(let ce=0;ce<de.length;ce++)U(de[ce],we);N.projectionMatrix.copy(E.projectionMatrix),N.projectionMatrixInverse.copy(E.projectionMatrixInverse),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),C(Y,N,we)};function C(Y,le,_e){_e===null?Y.matrix.copy(le.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(le.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(le.projectionMatrix),Y.projectionMatrixInverse.copy(le.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return x[Y]};let Z=null;function ue(Y,le){if(h=le.getViewerPose(c||o),p=le,h!==null){let _e=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let we=!1;_e.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let Me=0;Me<_e.length;Me++){let Ce=_e[Me],me=null;if(u!==null)me=u.getViewport(Ce);else{let je=f.getViewSubImage(d,Ce);me=je.viewport,Me===0&&(e.setRenderTargetTextures(y,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(y))}let be=I[Me];be===void 0&&(be=new $n,be.layers.enable(Me),be.viewport=new Ht,I[Me]=be),be.matrix.fromArray(Ce.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ce.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(me.x,me.y,me.width,me.height),Me===0&&(N.matrix.copy(be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(be)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();let Me=f.getDepthInformation(_e[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,i.renderState)}if(de&&de.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let Me=0;Me<_e.length;Me++){let Ce=_e[Me].camera;if(Ce){let me=x[Ce];me||(me=new Il,x[Ce]=me);let be=f.getCameraImage(Ce);me.sourceTexture=be}}}}for(let _e=0;_e<M.length;_e++){let we=b[_e],de=M[_e];we!==null&&de!==void 0&&de.update(we,le,c||o)}Z&&Z(Y,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),p=null}let Pe=new Wg;Pe.setAnimationLoop(ue),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}},TT=new ct,e_=new rt;e_.set(-1,0,0,0,1,0,0,0,1);function ET(s,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,ap(s)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function i(m,x,v,T,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),f(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&u(m,x,y)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,v,T):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===kn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===kn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let v=e.get(x),T=v.envMap,y=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(TT.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(e_),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,v,T){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*v,m.scale.value=T*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function f(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function u(m,x,v){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let v=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wT(s,e,t,n){let i={},r={};function o(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,T){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let M=T.program;n.updateUBOMapping(v,M);let b=e.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){let T=s.createBuffer(),y=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,M),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,M=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let b=0,_=y.length;b<_;b++){let S=y[b];if(Array.isArray(S))for(let w=0,E=S.length;w<E;w++)h(S[w],b,w,M);else h(S,b,0,M)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,M){if(d(v,T,y,M)===!0){let b=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let w=0;w<_.length;w++){let E=_[w],D=g(E,!0);f(E,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,v.__data)}}function f(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,M){let b=v.value,_=T+"_"+y;if(Array.isArray(b)){M[_]===void 0&&(M[_]=[]);let S=M[_],w=!1;for(let E=0;E<b.length;E++)u(b[E],S,E)===!0&&(w=!0);return w}return u(b,M,_)}function u(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let M=T[y];if(typeof v=="number"||typeof v=="boolean"){if(M!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(M.equals(v)===!1)return M.copy(v),!0}}return!1}function p(v){let T=v.uniforms,y=0,M=16;for(let _=0,S=T.length;_<S;_++){let w=Array.isArray(T[_])?T[_]:[T[_]];for(let E=0,D=w.length;E<D;E++){let I=w[E],N=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(T[_])||Array.isArray(I.value),B=y;for(let O=0,q=N.length;O<q;O++){let U=N[O],C=g(U,P),Z=y%M,ue=Z%C.boundary,Pe=Z+ue;y+=ue,Pe!==0&&M-Pe<C.storage&&(y+=M-Pe),O===0&&(B=y),y+=C.storage}let k=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new k((y-B)/Float32Array.BYTES_PER_ELEMENT),I.__offset=B}}let b=y%M;return b>0&&(y+=M-b),v.__size=y,v.__cache={},this}function g(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let T=v.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function x(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:x}}var AT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Is=null;function RT(){return Is===null&&(Is=new nr(AT,16,16,Ur,en),Is.name="DFG_LUT",Is.minFilter=ai,Is.magFilter=ai,Is.wrapS=bs,Is.wrapT=bs,Is.generateMipmaps=!1,Is.needsUpdate=!0),Is}var Yu=class{constructor(e={}){let{canvas:t=mg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=u,m=new Set([du,fu,uu]),x=new Set([Jn,ps,Aa,rr,lu,cu]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,b=null,_=[],S=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,I=null,N=null,P=null,B=null;this._outputColorSpace=zt;let k=0,O=0,q=null,U=-1,C=null,Z=new Ht,ue=new Ht,Pe=null,Y=new Fe(0),le=0,_e=t.width,we=t.height,de=1,ce=null,he=null,Me=new Ht(0,0,_e,we),Ce=new Ht(0,0,_e,we),me=!1,be=new Cr,je=new Vh,et=!1,W=!1,te=new ct,Re=new F,Be=new Ht,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function tt(){return q===null?de:1}let H=n;function ot(R,V){return t.getContext(R,V)}let Xe,j,G,ke,ve,We,L,A,X,fe,se,ge,Te,$,ne,pe,z,ie,Q,Ae,ye,Ee,xe;try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ae,!1),H===null){let V="webgl2";if(H=ot(V,R),H===null)throw ot(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(R){throw t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),st("WebGLRenderer: "+R.message),R}function Se(){Xe=new kb(H),Xe.init(),ye=new ST(H,Xe),j=new Rb(H,Xe,e,ye),G=new vT(H,Xe),j.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),N=H.createFramebuffer(),P=H.createFramebuffer(),B=H.createFramebuffer(),ke=new Vb(H),ve=new rT,We=new yT(H,Xe,G,ve,j,ye,ke),L=new Bb(E),A=new Wy(H),Ee=new wb(H,A),X=new zb(H,A,ke,Ee),fe=new Wb(H,X,A,Ee,ke),ie=new Gb(H,j,We),ne=new Cb(ve),se=new sT(E,L,Xe,j,Ee,ne),ge=new ET(E,ve),Te=new aT,$=new dT(Xe),z=new Eb(E,L,G,fe,p,l),pe=new xT(E,fe,j),xe=new wT(H,ke,j,G),Q=new Ab(H,Xe,ke),Ae=new Hb(H,Xe,ke),ke.programs=se.programs,E.capabilities=j,E.extensions=Xe,E.properties=ve,E.renderLists=Te,E.shadowMap=pe,E.state=G,E.info=ke}g!==Jn&&(w=new qb(g,t.width,t.height,a,i,r));let re=new Ep(E,H);this.xr=re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(R){R!==void 0&&(de=R,this.setSize(_e,we,!1))},this.getSize=function(R){return R.set(_e,we)},this.setSize=function(R,V,ee=!0){if(re.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=R,we=V,t.width=Math.floor(R*de),t.height=Math.floor(V*de),ee===!0&&(t.style.width=R+"px",t.style.height=V+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(_e*de,we*de).floor()},this.setDrawingBufferSize=function(R,V,ee){_e=R,we=V,de=ee,t.width=Math.floor(R*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(g===Jn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(Me)},this.setViewport=function(R,V,ee,J){R.isVector4?Me.set(R.x,R.y,R.z,R.w):Me.set(R,V,ee,J),G.viewport(Z.copy(Me).multiplyScalar(tt()).round())},this.getScissor=function(R){return R.copy(Ce)},this.setScissor=function(R,V,ee,J){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,V,ee,J),G.scissor(ue.copy(Ce).multiplyScalar(tt()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){G.setScissorTest(me=R)},this.setOpaqueSort=function(R){ce=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,ee=!0){let J=0;if(R){let K=!1;if(q!==null){let Ne=q.texture.format;K=m.has(Ne)}if(K){let Ne=q.texture.type,Ye=x.has(Ne),Le=z.getClearColor(),Ge=z.getClearAlpha(),Qe=Le.r,lt=Le.g,xt=Le.b;Ye?(v[0]=Qe,v[1]=lt,v[2]=xt,v[3]=Ge,H.clearBufferuiv(H.COLOR,0,v)):(T[0]=Qe,T[1]=lt,T[2]=xt,T[3]=Ge,H.clearBufferiv(H.COLOR,0,T))}else J|=H.COLOR_BUFFER_BIT}V&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),z.dispose(),Te.dispose(),$.dispose(),We.dispose(),ve.dispose(),L.dispose(),fe.dispose(),X.dispose(),Ee.dispose(),xe.dispose(),se.dispose(),re.dispose(),re.removeEventListener("sessionstart",Dt),re.removeEventListener("sessionend",wt),xn.stop()};function oe(R){R.preventDefault(),Ml("WebGLRenderer: Context Lost."),D=!0}function Ie(){Ml("WebGLRenderer: Context Restored."),D=!1;let R=ke.autoReset,V=pe.enabled,ee=pe.autoUpdate,J=pe.needsUpdate,K=pe.type;Se(),ke.autoReset=R,pe.enabled=V,pe.autoUpdate=ee,pe.needsUpdate=J,pe.type=K}function ae(R){st("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ve(R){let V=R.target;V.removeEventListener("dispose",Ve),_t(V)}function _t(R){at(R),ve.remove(R)}function at(R){let V=ve.get(R).programs;V!==void 0&&(V.forEach(function(ee){se.releaseProgram(ee)}),R.isShaderMaterial&&se.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ee,J,K,Ne){V===null&&(V=Oe);let Ye=K.isMesh&&K.matrixWorld.determinantAffine()<0,Le=Xi(R,V,ee,J,K);G.setMaterial(J,Ye);let Ge=ee.index,Qe=1;if(J.wireframe===!0){if(Ge=X.getWireframeAttribute(ee),Ge===void 0)return;Qe=2}let lt=ee.drawRange,xt=ee.attributes.position,Je=lt.start*Qe,vt=(lt.start+lt.count)*Qe;Ne!==null&&(Je=Math.max(Je,Ne.start*Qe),vt=Math.min(vt,(Ne.start+Ne.count)*Qe)),Ge!==null?(Je=Math.max(Je,0),vt=Math.min(vt,Ge.count)):xt!=null&&(Je=Math.max(Je,0),vt=Math.min(vt,xt.count));let dn=vt-Je;if(dn<0||dn===1/0)return;Ee.setup(K,J,Le,ee,Ge);let Ot,Nt=Q;if(Ge!==null&&(Ot=A.get(Ge),Nt=Ae,Nt.setIndex(Ot)),K.isMesh)J.wireframe===!0?(G.setLineWidth(J.wireframeLinewidth*tt()),Nt.setMode(H.LINES)):Nt.setMode(H.TRIANGLES);else if(K.isLine){let Wn=J.linewidth;Wn===void 0&&(Wn=1),G.setLineWidth(Wn*tt()),K.isLineSegments?Nt.setMode(H.LINES):K.isLineLoop?Nt.setMode(H.LINE_LOOP):Nt.setMode(H.LINE_STRIP)}else K.isPoints?Nt.setMode(H.POINTS):K.isSprite&&Nt.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Wn=K._multiDrawStarts,Ke=K._multiDrawCounts,ri=K._multiDrawCount,Et=Ge?A.get(Ge).bytesPerElement:1,jr=ve.get(J).currentProgram.getUniforms();for(let Xn=0;Xn<ri;Xn++)jr.setValue(H,"_gl_DrawID",Xn),Nt.render(Wn[Xn]/Et,Ke[Xn])}else if(K.isInstancedMesh)Nt.renderInstances(Je,dn,K.count);else if(ee.isInstancedBufferGeometry){let Wn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ke=Math.min(ee.instanceCount,Wn);Nt.renderInstances(Je,dn,Ke)}else Nt.render(Je,dn)};function Bt(R,V,ee,J){I!==null&&R.isNodeMaterial&&I.setObject(J,R),et===!0&&ne.setState(R,ee,!1),R.transparent===!0&&R.side===In&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Ci(R,V,J),R.side=Nr,R.needsUpdate=!0,Ci(R,V,J),R.side=In):Ci(R,V,J)}this.compile=function(R,V,ee=null){ee===null&&(ee=R),I!==null&&I.renderStart(R,V,ee),b=$.get(ee),b.init(V),S.push(b),ee.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),R!==ee&&R.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),W=this.localClippingEnabled,et=ne.init(this.clippingPlanes,W),et===!0&&ne.setGlobalState(this.clippingPlanes,V),I!==null&&pe.render(b.state.shadowsArray,ee,V);let J=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Ye=0;Ye<Ne.length;Ye++){let Le=Ne[Ye];Bt(Le,ee,V,K),J.add(Le)}else Bt(Ne,ee,V,K),J.add(Ne)}),b=S.pop(),I!==null&&I.renderEnd(),J},this.compileAsync=function(R,V,ee=null){let J=this.compile(R,V,ee);return new Promise(K=>{function Ne(){if(J.forEach(function(Ye){let Ge=ve.get(Ye).currentProgram;(Ge===void 0||Ge.isReady())&&J.delete(Ye)}),J.size===0){K(R);return}setTimeout(Ne,10)}Xe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let un=null;function kt(R){un&&un(R)}function Dt(){xn.stop()}function wt(){xn.start()}let xn=new Wg;xn.setAnimationLoop(kt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(R){un=R,re.setAnimationLoop(R),R===null?xn.stop():xn.start()},re.addEventListener("sessionstart",Dt),re.addEventListener("sessionend",wt),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(R,V);let ee=re.enabled===!0&&re.isPresenting===!0,J=w!==null&&(q===null||ee)&&w.begin(E,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,V,q),b=$.get(R,S.length),b.init(V),b.state.textureUnits=We.getTextureUnits(),S.push(b),te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?je.setFromArrayCamera(V):be.setFromProjectionMatrix(te,Yi,V.reversedDepth),W=this.localClippingEnabled,et=ne.init(this.clippingPlanes,W),M=Te.get(R,_.length),M.init(),_.push(M),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ye=E.xr.getDepthSensingMesh();Ye!==null&&Lt(Ye,V,-1/0,E.sortObjects)}Lt(R,V,0,E.sortObjects),M.finish(),I!==null&&I.updateLights(b.state.lightsArray),E.sortObjects===!0&&M.sort(ce,he),He=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,He&&z.addToRenderList(M,R),this.info.autoReset===!0&&this.info.reset(),et===!0&&ne.beginShadows();let K=b.state.shadowsArray;if(pe.render(K,R,V),et===!0&&ne.endShadows(),(J&&w.hasRenderPass())===!1){let Ye=M.opaque,Le=M.transmissive;if(b.setupLights(),V.isArrayCamera){let Ge=V.cameras;if(Le.length>0)for(let Qe=0,lt=Ge.length;Qe<lt;Qe++){let xt=Ge[Qe];Ri(Ye,Le,R,xt)}He&&z.render(R);for(let Qe=0,lt=Ge.length;Qe<lt;Qe++){let xt=Ge[Qe];Gn(M,R,xt,xt.viewport)}}else Le.length>0&&Ri(Ye,Le,R,V),He&&z.render(R),Gn(M,R,V)}q!==null&&O===0&&(We.updateMultisampleRenderTarget(q),We.updateRenderTargetMipmap(q)),J&&w.end(E),R.isScene===!0&&R.onAfterRender(E,R,V),Ee.resetDefaultState(),U=-1,C=null,S.pop(),S.length>0?(b=S[S.length-1],We.setTextureUnits(b.state.textureUnits),et===!0&&ne.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,I!==null&&I.renderEnd()};function Lt(R,V,ee,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){let Ye=V.isArrayCamera?je:be;if(!R.frustumCulled||R.intersectsFrustum(Ye)){J&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);let Le=fe.update(R),Ge=R.material;Ge.visible&&M.push(R,Le,Ge,ee,Be.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){let Ye=V.isArrayCamera?je:be;if(!R.frustumCulled||R.intersectsFrustum(Ye)){let Le=fe.update(R),Ge=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Be.copy(Le.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Ge)){let Qe=Le.groups;for(let lt=0,xt=Qe.length;lt<xt;lt++){let Je=Qe[lt],vt=Ge[Je.materialIndex];vt&&vt.visible&&M.push(R,Le,vt,ee,Be.z,Je,V)}}else Ge.visible&&M.push(R,Le,Ge,ee,Be.z,null,V)}}}let Ne=R.children;for(let Ye=0,Le=Ne.length;Ye<Le;Ye++)Lt(Ne[Ye],V,ee,J)}function Gn(R,V,ee,J){let{opaque:K,transmissive:Ne,transparent:Ye}=R;b.setupLightsView(ee),et===!0&&ne.setGlobalState(E.clippingPlanes,ee),J&&G.viewport(Z.copy(J)),K.length>0&&Kt(K,V,ee),Ne.length>0&&Kt(Ne,V,ee),Ye.length>0&&Kt(Ye,V,ee),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Ri(R,V,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){let Je=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new Vt(1,1,{generateMipmaps:!0,type:Je?en:Jn,minFilter:sr,samples:Math.max(4,j.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ne=b.state.transmissionRenderTarget[J.id],Ye=J.viewport||Z;Ne.setSize(Ye.z*E.transmissionResolutionScale,Ye.w*E.transmissionResolutionScale);let Le=E.getRenderTarget(),Ge=E.getActiveCubeFace(),Qe=E.getActiveMipmapLevel();E.setRenderTarget(Ne),E.getClearColor(Y),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),He&&z.render(ee);let lt=E.toneMapping;E.toneMapping=Ps;let xt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),et===!0&&ne.setGlobalState(E.clippingPlanes,J),Kt(R,ee,J),We.updateMultisampleRenderTarget(Ne),We.updateRenderTargetMipmap(Ne),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let vt=0,dn=V.length;vt<dn;vt++){let Ot=V[vt],{object:Nt,geometry:Wn,material:Ke,group:ri}=Ot;if(Ke.side===In&&Nt.layers.test(J.layers)){let Et=Ke.side;Ke.side=kn,Ke.needsUpdate=!0,fn(Nt,ee,J,Wn,Ke,ri),Ke.side=Et,Ke.needsUpdate=!0,Je=!0}}Je===!0&&(We.updateMultisampleRenderTarget(Ne),We.updateRenderTargetMipmap(Ne))}E.setRenderTarget(Le,Ge,Qe),E.setClearColor(Y,le),xt!==void 0&&(J.viewport=xt),E.toneMapping=lt}function Kt(R,V,ee){let J=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Ne=R.length;K<Ne;K++){let Ye=R[K],{object:Le,geometry:Ge,group:Qe}=Ye,lt=Ye.material;lt.allowOverride===!0&&J!==null&&(lt=J),Le.layers.test(ee.layers)&&fn(Le,V,ee,Ge,lt,Qe)}}function fn(R,V,ee,J,K,Ne){I!==null&&K.isNodeMaterial&&I.setObject(R,K),R.onBeforeRender(E,V,ee,J,K,Ne),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(E,V,ee,J,R,Ne),K.transparent===!0&&K.side===In&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,E.renderBufferDirect(ee,V,J,K,R,Ne),K.side=Nr,K.needsUpdate=!0,E.renderBufferDirect(ee,V,J,K,R,Ne),K.side=In):E.renderBufferDirect(ee,V,J,K,R,Ne),R.onAfterRender(E,V,ee,J,K,Ne)}function vn(R){let V=0;for(let ee of R)ee.texture!==null&&V++;return V}function Ci(R,V,ee){V.isScene!==!0&&(V=Oe);let J=ve.get(R),K=b.state.lights,Ne=b.state.shadowsArray,Ye=K.state.version,Le=se.getParameters(R,K.state,Ne,V,ee,b.state.lightProbeGridArray),Ge=se.getProgramCacheKey(Le),Qe=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let lt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=L.get(R.envMap||J.environment,lt),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",Ve),Qe=new Map,J.programs=Qe,J.programVariants=new Map);let xt=Qe.get(Ge);if(xt!==void 0){if(J.currentProgram===xt&&J.lightsStateVersion===Ye)return Qt(R,Le),xt}else Le.uniforms=se.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,ee,Le),R.onBeforeCompile(Le,E),xt=se.acquireProgram(Le,Ge),Qe.set(Ge,xt),J.uniforms=Le.uniforms;let Je=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=ne.uniform),Qt(R,Le),J.needsLights=Qc(R),J.lightsStateVersion=Ye,J.needsLights&&(Je.ambientLightColor.value=K.state.ambient,Je.lightProbe.value=K.state.probe,Je.sunLights.value=K.state.sun,Je.sunLightShadows.value=K.state.sunShadow,Je.directionalLights.value=K.state.directional,Je.directionalLightShadows.value=K.state.directionalShadow,Je.spotLights.value=K.state.spot,Je.spotLightShadows.value=K.state.spotShadow,Je.rectAreaLights.value=K.state.rectArea,Je.ltc_1.value=K.state.rectAreaLTC1,Je.ltc_2.value=K.state.rectAreaLTC2,Je.pointLights.value=K.state.point,Je.pointLightShadows.value=K.state.pointShadow,Je.hemisphereLights.value=K.state.hemi,Je.sunShadowMatrix.value=K.state.sunShadowMatrix,Je.sunShadowCascade.value=K.state.sunShadowCascade,Je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Je.spotLightMatrix.value=K.state.spotLightMatrix,Je.spotLightMap.value=K.state.spotLightMap,Je.pointShadowMatrix.value=K.state.pointShadowMatrix),J.numLightProbeGrids=vn(b.state.lightProbeGridArray),J.currentProgram=xt,J.uniformsList=null,xt}function Ho(R,V,ee,J,K){let Ne=ve.get(R),Ye=Ne.currentProgram.id+","+J+","+K,Le=Ne.programVariants.get(Ye);return Le===void 0?(Le=Ci(R,V,ee),Ne.programVariants.set(Ye,Le)):(Ne.currentProgram=Le,Ne.uniformsList=null,Ne.outputColorSpace=J,Ne.toneMapping=K),Le}function yn(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=Ra.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Qt(R,V){let ee=ve.get(R);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Xi(R,V,ee,J,K){V.isScene!==!0&&(V=Oe),We.resetTextureUnits();let Ne=V.fog,Ye=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Le=q===null?E.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:gt.workingColorSpace,Ge=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Qe=L.get(J.envMap||Ye,Ge),lt=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,xt=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!ee.morphAttributes.position,vt=!!ee.morphAttributes.normal,dn=!!ee.morphAttributes.color,Ot=Ps;J.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ot=E.toneMapping);let Nt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Wn=Nt!==void 0?Nt.length:0,Ke=ve.get(J),ri=b.state.lights;if(et===!0&&(W===!0||R!==C)){let Xt=R===C&&J.id===U;ne.setState(J,R,Xt)}let Et=!1,jr=!1;J.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==ri.state.version||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Qe||J.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ne.numPlanes||Ke.numIntersection!==ne.numIntersection)||Ke.vertexAlphas!==lt||Ke.vertexTangents!==xt||Ke.morphTargets!==Je||Ke.morphNormals!==vt||Ke.morphColors!==dn||Ke.morphTargetsCount!==Wn||Ke.numLightProbeGrids!==vn(b.state.lightProbeGridArray)?Et=!0:(Ke.outputColorSpace!==Le||Ke.toneMapping!==Ot)&&(jr=!0):(Et=!0,Ke.__version=J.version);let Xn=Ke.currentProgram;(Et===!0||jr===!0)&&(Xn=jr===!0?Ho(J,V,K,Le,Ot):Ci(J,V,K),I&&J.isNodeMaterial&&I.onUpdateProgram(J,Xn,Ke));let jc=!1,Mr=!1,eo=!1,Mt=Xn.getUniforms(),Un=Ke.uniforms;if(G.useProgram(Xn.program)&&(jc=!0,Mr=!0,eo=!0),J.id!==U&&(U=J.id,Mr=!0),jc||C!==R){G.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Mt.setValue(H,"projectionMatrix",R.projectionMatrix),Mt.setValue(H,"viewMatrix",R.matrixWorldInverse);let Rn=Mt.map.cameraPosition;Rn!==void 0&&Rn.setValue(H,Re.setFromMatrixPosition(R.matrixWorld)),j.logarithmicDepthBuffer&&Mt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Mt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Mr=!0,eo=!0)}if(Ke.needsLights&&(ri.state.sunShadowMap.length>0&&Mt.setValue(H,"sunShadowMap",ri.state.sunShadowMap,We),ri.state.directionalShadowMap.length>0&&Mt.setValue(H,"directionalShadowMap",ri.state.directionalShadowMap,We),ri.state.spotShadowMap.length>0&&Mt.setValue(H,"spotShadowMap",ri.state.spotShadowMap,We),ri.state.pointShadowMap.length>0&&Mt.setValue(H,"pointShadowMap",ri.state.pointShadowMap,We)),K.isSkinnedMesh){Mt.setOptional(H,K,"bindMatrix"),Mt.setOptional(H,K,"bindMatrixInverse");let Xt=K.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Mt.setValue(H,"boneTexture",Xt.boneTexture,We))}K.isBatchedMesh&&(Mt.setOptional(H,K,"batchingTexture"),Mt.setValue(H,"batchingTexture",K._matricesTexture,We),Mt.setOptional(H,K,"batchingIdTexture"),Mt.setValue(H,"batchingIdTexture",K._indirectTexture,We),Mt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(H,"batchingColorTexture",K._colorsTexture,We));let rs=ee.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&ie.update(K,ee,Xn),(Mr||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Mt.setValue(H,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(Un.envMapIntensity.value=V.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=RT()),Mr){if(Mt.setValue(H,"toneMappingExposure",E.toneMappingExposure),Ke.needsLights&&al(Un,eo),Ne&&J.fog===!0&&ge.refreshFogUniforms(Un,Ne),ge.refreshMaterialUniforms(Un,J,de,we,b.state.transmissionRenderTarget[R.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let Xt=y,Rn=0;for(let Xs of b.state.lightProbeGridArray)Xs.texture!==null&&(Xt.textures[Rn]=Xs.texture,Xt.min[Rn]=Xs.boundingBox.min,Xt.max[Rn]=Xs.boundingBox.max,Xt.resolution[Rn]=Xs.resolution,Rn++);for(let Xs in Xt)Xt[Xs].length=Rn;Un.probesSH.value=Xt.textures,Un.probesMin.value=Xt.min,Un.probesMax.value=Xt.max,Un.probesResolution.value=Xt.resolution}Ra.upload(H,yn(Ke),Un,We)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ra.upload(H,yn(Ke),Un,We),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Mt.setValue(H,"center",K.center),Mt.setValue(H,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(H,"normalMatrix",K.normalMatrix),Mt.setValue(H,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let Xt=J.uniformsGroups;for(let Rn=0,Xs=Xt.length;Rn<Xs;Rn++){let s0=Xt[Rn];xe.update(s0,Xn),xe.bind(s0,Xn)}}return Xn}function al(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Qc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,V,ee){let J=ve.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ve.get(R.texture).__webglTexture=V,ve.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){let ee=ve.get(R);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,ee=0){q=R,k=V,O=ee;let J=null,K=!1,Ne=!1;if(R){let Le=ve.get(R);if(Le.__useDefaultFramebuffer!==void 0){G.bindFramebuffer(H.FRAMEBUFFER,Le.__webglFramebuffer),Z.copy(R.viewport),ue.copy(R.scissor),Pe=R.scissorTest,G.viewport(Z),G.scissor(ue),G.setScissorTest(Pe),U=-1;return}else if(Le.__webglFramebuffer===void 0)We.setupRenderTarget(R);else if(Le.__hasExternalTextures)We.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let lt=R.depthTexture;if(Le.__boundDepthTexture!==lt){if(lt!==null&&ve.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(R)}}let Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ne=!0);let Qe=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?J=Qe[V][ee]:J=Qe[V],K=!0):R.samples>0&&We.useMultisampledRTT(R)===!1?J=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?J=Qe[ee]:J=Qe,Z.copy(R.viewport),ue.copy(R.scissor),Pe=R.scissorTest}else Z.copy(Me).multiplyScalar(de).floor(),ue.copy(Ce).multiplyScalar(de).floor(),Pe=me;if(ee!==0&&(J=N),G.bindFramebuffer(H.FRAMEBUFFER,J)&&G.drawBuffers(R,J),G.viewport(Z),G.scissor(ue),G.setScissorTest(Pe),K){let Le=ve.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,ee)}else if(Ne){let Le=V;for(let Ge=0;Ge<R.textures.length;Ge++){let Qe=ve.get(R.textures[Ge]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ge,Qe.__webglTexture,ee,Le)}}else if(R!==null&&ee!==0){let Le=ve.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Le.__webglTexture,ee)}U=-1};function Sr(R){let V=ve.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=j.textureFormatReadable(R.format),V.__typeReadable=j.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,ee,J,K,Ne,Ye,Le=0){if(!(R&&R.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ge=Ge[Ye],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){G.bindFramebuffer(H.FRAMEBUFFER,Ge);try{let Qe=R.textures[Le],lt=Qe.format,xt=Qe.type;R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Le);let Je=Sr(Qe);if(Je.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&ee>=0&&ee<=R.height-K&&H.readPixels(V,ee,J,K,ye.convert(lt),ye.convert(xt),Ne)}finally{let Qe=q!==null?ve.get(q).__webglFramebuffer:null;G.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,V,ee,J,K,Ne,Ye,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ge=Ge[Ye],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(V>=0&&V<=R.width-J&&ee>=0&&ee<=R.height-K){G.bindFramebuffer(H.FRAMEBUFFER,Ge);let Qe=R.textures[Le],lt=Qe.format,xt=Qe.type;R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Le);let Je=Sr(Qe);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,vt),H.bufferData(H.PIXEL_PACK_BUFFER,Ne.byteLength,H.STREAM_READ),H.readPixels(V,ee,J,K,ye.convert(lt),ye.convert(xt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let dn=q!==null?ve.get(q).__webglFramebuffer:null;G.bindFramebuffer(H.FRAMEBUFFER,dn);let Ot=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _g(H,Ot,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,vt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ne),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(vt),H.deleteSync(Ot),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,ee=0){let J=Math.pow(2,-ee),K=Math.floor(R.image.width*J),Ne=Math.floor(R.image.height*J),Ye=V!==null?V.x:0,Le=V!==null?V.y:0;We.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,Ye,Le,K,Ne),G.unbindTexture()},this.copyTextureToTexture=function(R,V,ee=null,J=null,K=0,Ne=0){let Ye,Le,Ge,Qe,lt,xt,Je,vt,dn,Ot=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(ee!==null)Ye=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,Qe=ee.min.x,lt=ee.min.y,xt=ee.isBox3?ee.min.z:0;else{let Mt=Math.pow(2,-K);Ye=Math.floor(Ot.width*Mt),Le=Math.floor(Ot.height*Mt),R.isDataArrayTexture?Ge=Ot.depth:R.isData3DTexture?Ge=Math.floor(Ot.depth*Mt):Ge=1,Qe=0,lt=0,xt=0}J!==null?(Je=J.x,vt=J.y,dn=J.z):(Je=0,vt=0,dn=0);let Nt=ye.convert(V.format),Wn=ye.convert(V.type),Ke;V.isData3DTexture?(We.setTexture3D(V,0),Ke=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(We.setTexture2DArray(V,0),Ke=H.TEXTURE_2D_ARRAY):(We.setTexture2D(V,0),Ke=H.TEXTURE_2D),G.activeTexture(H.TEXTURE0),G.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);let ri=G.getParameter(H.UNPACK_ROW_LENGTH),Et=G.getParameter(H.UNPACK_IMAGE_HEIGHT),jr=G.getParameter(H.UNPACK_SKIP_PIXELS),Xn=G.getParameter(H.UNPACK_SKIP_ROWS),jc=G.getParameter(H.UNPACK_SKIP_IMAGES);G.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),G.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),G.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),G.pixelStorei(H.UNPACK_SKIP_ROWS,lt),G.pixelStorei(H.UNPACK_SKIP_IMAGES,xt);let Mr=R.isDataArrayTexture||R.isData3DTexture,eo=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){let Mt=ve.get(R),Un=ve.get(V),rs=ve.get(Mt.__renderTarget),Xt=ve.get(Un.__renderTarget);G.bindFramebuffer(H.READ_FRAMEBUFFER,rs.__webglFramebuffer),G.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Rn=0;Rn<Ge;Rn++)Mr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ve.get(R).__webglTexture,K,xt+Rn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ve.get(V).__webglTexture,Ne,dn+Rn)),H.blitFramebuffer(Qe,lt,Qe+Ye,lt+Le,Je,vt,Je+Ye,vt+Le,H.DEPTH_BUFFER_BIT,H.NEAREST);G.bindFramebuffer(H.READ_FRAMEBUFFER,null),G.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||ve.has(R)){let Mt=ve.get(R),Un=ve.get(V);G.bindFramebuffer(H.READ_FRAMEBUFFER,P),G.bindFramebuffer(H.DRAW_FRAMEBUFFER,B);for(let rs=0;rs<Ge;rs++)Mr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mt.__webglTexture,K,xt+rs):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mt.__webglTexture,K),eo?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Un.__webglTexture,Ne,dn+rs):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Un.__webglTexture,Ne),K!==0?H.blitFramebuffer(Qe,lt,Qe+Ye,lt+Le,Je,vt,Je+Ye,vt+Le,H.COLOR_BUFFER_BIT,H.NEAREST):eo?H.copyTexSubImage3D(Ke,Ne,Je,vt,dn+rs,Qe,lt,Ye,Le):H.copyTexSubImage2D(Ke,Ne,Je,vt,Qe,lt,Ye,Le);G.bindFramebuffer(H.READ_FRAMEBUFFER,null),G.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else eo?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ke,Ne,Je,vt,dn,Ye,Le,Ge,Nt,Wn,Ot.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,Ne,Je,vt,dn,Ye,Le,Ge,Nt,Ot.data):H.texSubImage3D(Ke,Ne,Je,vt,dn,Ye,Le,Ge,Nt,Wn,Ot):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ne,Je,vt,Ye,Le,Nt,Wn,Ot.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ne,Je,vt,Ot.width,Ot.height,Nt,Ot.data):H.texSubImage2D(H.TEXTURE_2D,Ne,Je,vt,Ye,Le,Nt,Wn,Ot);G.pixelStorei(H.UNPACK_ROW_LENGTH,ri),G.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et),G.pixelStorei(H.UNPACK_SKIP_PIXELS,jr),G.pixelStorei(H.UNPACK_SKIP_ROWS,Xn),G.pixelStorei(H.UNPACK_SKIP_IMAGES,jc),Ne===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&H.generateMipmap(Ke),G.unbindTexture()},this.initRenderTarget=function(R){ve.get(R).__webglFramebuffer===void 0&&We.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?We.setTextureCube(R,0):R.isData3DTexture?We.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?We.setTexture2DArray(R,0):We.setTexture2D(R,0),G.unbindTexture()},this.resetState=function(){k=0,O=0,q=null,G.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Ls={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},CT=new uo(-1,1,1,-1,0,1),wp=class extends qt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},PT=new wp,Ns=class{constructor(e){this._mesh=new Ue(PT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,CT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ia=class extends hi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ci.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ns(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lc=class extends hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ku=class extends hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Qu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ia(Ls),this.copyPass.material.blending=Dn,this.timer=new zl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lc!==void 0&&(o instanceof lc?n=!0:o instanceof Ku&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ju=class extends hi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Fe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var t_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Da=class s extends hi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,o,{type:en,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Vt(r,o,{type:en,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Vt(r,o,{type:en,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=t_;this.highPassUniforms=ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new De(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ci.clone(Ls.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader,premultipliedAlpha:!0,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new mn,this._fsQuad=new Ns(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Da.BlurDirectionX=new De(1,0);Da.BlurDirectionY=new De(0,1);var cc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ef=class extends hi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ci.clone(cc.uniforms),this.material=new xa({name:cc.name,uniforms:this.uniforms,vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader}),this._fsQuad=new Ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var hc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ct},cameraProjectionMatrixInverse:{value:new ct},cameraWorldMatrix:{value:new ct},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},uc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},tf={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function n_(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=IT(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new nr(i,e,e);return r.wrapS=Si,r.wrapT=Si,r.needsUpdate=!0,r}function IT(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var fc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ap(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraProjectionMatrixInverse:{value:new ct},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ap(s,e,t){let n=DT(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function DT(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new F(Math.cos(r),Math.sin(r),o))}return n}var nf=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,f=(l+c)*h,d=l-f,u=c-f,p=e-d,g=t-u,m,x;p>g?(m=1,x=0):(m=0,x=1);let v=p-m+h,T=g-x+h,y=p-1+2*h,M=g-1+2*h,b=l&255,_=c&255,S=this.perm[b+this.perm[_]]%12,w=this.perm[b+m+this.perm[_+x]]%12,E=this.perm[b+1+this.perm[_+1]]%12,D=.5-p*p-g*g;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[S],p,g));let I=.5-v*v-T*T;I<0?i=0:(I*=I,i=I*I*this._dot(this.grad3[w],v,T));let N=.5-y*y-M*M;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[E],y,M)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),d=Math.floor(n+c),u=1/6,p=(h+f+d)*u,g=h-p,m=f-p,x=d-p,v=e-g,T=t-m,y=n-x,M,b,_,S,w,E;v>=T?T>=y?(M=1,b=0,_=0,S=1,w=1,E=0):v>=y?(M=1,b=0,_=0,S=1,w=0,E=1):(M=0,b=0,_=1,S=1,w=0,E=1):T<y?(M=0,b=0,_=1,S=0,w=1,E=1):v<y?(M=0,b=1,_=0,S=0,w=1,E=1):(M=0,b=1,_=0,S=1,w=1,E=0);let D=v-M+u,I=T-b+u,N=y-_+u,P=v-S+2*u,B=T-w+2*u,k=y-E+2*u,O=v-1+3*u,q=T-1+3*u,U=y-1+3*u,C=h&255,Z=f&255,ue=d&255,Pe=this.perm[C+this.perm[Z+this.perm[ue]]]%12,Y=this.perm[C+M+this.perm[Z+b+this.perm[ue+_]]]%12,le=this.perm[C+S+this.perm[Z+w+this.perm[ue+E]]]%12,_e=this.perm[C+1+this.perm[Z+1+this.perm[ue+1]]]%12,we=.6-v*v-T*T-y*y;we<0?i=0:(we*=we,i=we*we*this._dot3(this.grad3[Pe],v,T,y));let de=.6-D*D-I*I-N*N;de<0?r=0:(de*=de,r=de*de*this._dot3(this.grad3[Y],D,I,N));let ce=.6-P*P-B*B-k*k;ce<0?o=0:(ce*=ce,o=ce*ce*this._dot3(this.grad3[le],P,B,k));let he=.6-O*O-q*q-U*U;return he<0?a=0:(he*=he,a=he*he*this._dot3(this.grad3[_e],O,q,U)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,d,u,p,g=(e+t+n+i)*l,m=Math.floor(e+g),x=Math.floor(t+g),v=Math.floor(n+g),T=Math.floor(i+g),y=(m+x+v+T)*c,M=m-y,b=x-y,_=v-y,S=T-y,w=e-M,E=t-b,D=n-_,I=i-S,N=w>E?32:0,P=w>D?16:0,B=E>D?8:0,k=w>I?4:0,O=E>I?2:0,q=D>I?1:0,U=N+P+B+k+O+q,C=o[U][0]>=3?1:0,Z=o[U][1]>=3?1:0,ue=o[U][2]>=3?1:0,Pe=o[U][3]>=3?1:0,Y=o[U][0]>=2?1:0,le=o[U][1]>=2?1:0,_e=o[U][2]>=2?1:0,we=o[U][3]>=2?1:0,de=o[U][0]>=1?1:0,ce=o[U][1]>=1?1:0,he=o[U][2]>=1?1:0,Me=o[U][3]>=1?1:0,Ce=w-C+c,me=E-Z+c,be=D-ue+c,je=I-Pe+c,et=w-Y+2*c,W=E-le+2*c,te=D-_e+2*c,Re=I-we+2*c,Be=w-de+3*c,Oe=E-ce+3*c,He=D-he+3*c,tt=I-Me+3*c,H=w-1+4*c,ot=E-1+4*c,Xe=D-1+4*c,j=I-1+4*c,G=m&255,ke=x&255,ve=v&255,We=T&255,L=a[G+a[ke+a[ve+a[We]]]]%32,A=a[G+C+a[ke+Z+a[ve+ue+a[We+Pe]]]]%32,X=a[G+Y+a[ke+le+a[ve+_e+a[We+we]]]]%32,fe=a[G+de+a[ke+ce+a[ve+he+a[We+Me]]]]%32,se=a[G+1+a[ke+1+a[ve+1+a[We+1]]]]%32,ge=.6-w*w-E*E-D*D-I*I;ge<0?h=0:(ge*=ge,h=ge*ge*this._dot4(r[L],w,E,D,I));let Te=.6-Ce*Ce-me*me-be*be-je*je;Te<0?f=0:(Te*=Te,f=Te*Te*this._dot4(r[A],Ce,me,be,je));let $=.6-et*et-W*W-te*te-Re*Re;$<0?d=0:($*=$,d=$*$*this._dot4(r[X],et,W,te,Re));let ne=.6-Be*Be-Oe*Oe-He*He-tt*tt;ne<0?u=0:(ne*=ne,u=ne*ne*this._dot4(r[fe],Be,Oe,He,tt));let pe=.6-H*H-ot*ot-Xe*Xe-j*j;return pe<0?p=0:(pe*=pe,p=pe*pe*this._dot4(r[se],H,ot,Xe,j)),27*(h+f+d+u+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var La=class s extends hi{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=n_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Vt(this.width,this.height,{type:en,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},hc.defines),uniforms:ci.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,blending:Dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Nl,this.normalMaterial.blending=Dn,this.pdMaterial=new Pt({defines:Object.assign({},fc.defines),uniforms:ci.clone(fc.uniforms),vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},uc.defines),uniforms:ci.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,blending:Dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:ci.clone(Ls.uniforms),vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Gl,blendDst:po,blendEquation:Ji,blendSrcAlpha:Vl,blendDstAlpha:po,blendEquationAlpha:Ji}),this.blendMaterial=new Pt({uniforms:ci.clone(tf.uniforms),vertexShader:tf.vertexShader,fragmentShader:tf.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:iu,blendSrc:Gl,blendDst:po,blendEquation:Ji,blendSrcAlpha:Vl,blendDstAlpha:po,blendEquationAlpha:Ji}),this._fsQuad=new Ns(null),this._originalClearColor=new Fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let i=new us;i.format=ms,i.type=rr,this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:an,magFilter:an,type:en,depthTexture:i})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ap(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new nf,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new nr(i,e,e,Li,Jn);return r.wrapS=Si,r.wrapT=Si,r.needsUpdate=!0,r}};La.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ze=null,lr=null,ar=null,Us=null,Fr=!1,sf=null,i_=0,s_=[146.83,155.56,185,196,220,233.08,261.63,293.66,311.13,369.99];function rf(s=2){let e=Ze.createBuffer(1,Ze.sampleRate*s,Ze.sampleRate),t=e.getChannelData(0),n=0;for(let i=0;i<t.length;i++){let r=Math.random()*2-1;n=(n+.02*r)/1.02,t[i]=n*3.5}return e}function LT(){Ze=new(window.AudioContext||window.webkitAudioContext),lr=Ze.createGain(),lr.gain.value=0;let s=Ze.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,lr.connect(s).connect(Ze.destination),ar=Ze.createGain(),ar.gain.value=.9,ar.connect(lr),Us=Ze.createGain(),Us.gain.value=.8,Us.connect(lr);let e=Ze.createDelay(1.5);e.delayTime.value=.42;let t=Ze.createGain();t.gain.value=.33;let n=Ze.createBiquadFilter();n.type="lowpass",n.frequency.value=2200,e.connect(n).connect(t).connect(e);let i=Ze.createGain();i.gain.value=.35,e.connect(i).connect(ar),ar.echo=e;let r=Ze.createBufferSource();r.buffer=rf(4),r.loop=!0;let o=Ze.createBiquadFilter();o.type="bandpass",o.frequency.value=420,o.Q.value=.7;let a=Ze.createGain();a.gain.value=.16;let l=Ze.createOscillator();l.frequency.value=.07;let c=Ze.createGain();c.gain.value=260,l.connect(c).connect(o.frequency);let h=Ze.createOscillator();h.frequency.value=.11;let f=Ze.createGain();f.gain.value=.07,h.connect(f).connect(a.gain),r.connect(o).connect(a).connect(ar),r.start(),l.start(),h.start();let d=Ze.createBiquadFilter();d.type="lowpass",d.frequency.value=520;let u=Ze.createGain();u.gain.value=.05,d.connect(u).connect(ar);for(let[m,x,v]of[[73.42,"sine",0],[110,"triangle",4],[146.83,"sine",-3]]){let T=Ze.createOscillator();T.type=x,T.frequency.value=m,T.detune.value=v,T.connect(d),T.start()}let p=Ze.createOscillator();p.frequency.value=.18;let g=Ze.createGain();g.gain.value=.015,p.connect(g).connect(u.gain),p.start()}function NT(s,e=0,t=.12){let n=Ze.currentTime+e,i=Ze.createGain();i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(t,n+.006),i.gain.exponentialRampToValueAtTime(8e-4,n+1.8);let r=Ze.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(s*9,n),r.frequency.exponentialRampToValueAtTime(s*1.6,n+.6);for(let[o,a,l]of[[1,1,"triangle"],[2,.35,"sine"],[3.01,.12,"sine"]]){let c=Ze.createOscillator();c.type=l,c.frequency.value=s*o;let h=Ze.createGain();h.gain.value=a,c.connect(h).connect(r),c.start(n),c.stop(n+2)}r.connect(i),i.connect(ar),i.connect(ar.echo)}function o_(){if(!Fr)return;let s=2+(Math.random()*5|0),e=2+(Math.random()*4|0),t=0;for(let n=0;n<e;n++)NT(s_[s],t,.09+Math.random()*.05),t+=[.28,.42,.56][Math.random()*3|0],s=Math.max(0,Math.min(s_.length-1,s+[-2,-1,-1,1,1,2][Math.random()*6|0]));sf=setTimeout(o_,(t+2.2+Math.random()*4)*1e3)}function xo(s,e,t,n,i){s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(i,e+t),s.gain.exponentialRampToValueAtTime(5e-4,e+t+n)}var r_={tick(){let s=Ze.currentTime;if(s-i_<.045)return;i_=s;let e=Ze.createOscillator(),t=Ze.createGain();e.type="sine",e.frequency.value=1700+Math.random()*500,xo(t,s,.002,.03,.025),e.connect(t).connect(Us),e.start(s),e.stop(s+.05)},arrive(){[0,.11].forEach((s,e)=>{let t=Ze.currentTime+s,n=Ze.createOscillator(),i=Ze.createGain();n.type="sine",n.frequency.value=e?880:659.25,xo(i,t,.01,.6,.07),n.connect(i).connect(Us),n.start(t),n.stop(t+.7)})},poke(){let s=Ze.currentTime,e=Ze.createOscillator(),t=Ze.createGain();e.type="sine",e.frequency.setValueAtTime(260,s),e.frequency.exponentialRampToValueAtTime(620,s+.12),e.frequency.exponentialRampToValueAtTime(330,s+.3),xo(t,s,.01,.32,.12),e.connect(t).connect(Us),e.start(s),e.stop(s+.4)},pop(){let s=Ze.currentTime,e=Ze.createBufferSource();e.buffer=rf(.3);let t=Ze.createBiquadFilter();t.type="highpass",t.frequency.value=900;let n=Ze.createGain();xo(n,s,.001,.12,.5),e.connect(t).connect(n).connect(Us),e.start(s),e.stop(s+.2)},beam(){let s=Ze.currentTime,e=Ze.createBufferSource();e.buffer=rf(3);let t=Ze.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(3200,s+1.2);let n=Ze.createGain();xo(n,s,.25,1.8,.35),e.connect(t).connect(n).connect(Us),e.start(s),e.stop(s+2.4),[587.33,739.99,880,1174.66].forEach((i,r)=>{let o=Ze.createOscillator(),a=Ze.createGain();o.type="sine",o.frequency.value=i,xo(a,s+.3+r*.12,.02,1.6,.05),o.connect(a).connect(Us),o.connect(a),o.start(s),o.stop(s+3)})},whoosh(){let s=Ze.currentTime,e=Ze.createBufferSource();e.buffer=rf(1);let t=Ze.createBiquadFilter();t.type="bandpass",t.Q.value=1.2,t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(1400,s+.5);let n=Ze.createGain();xo(n,s,.15,.5,.18),e.connect(t).connect(n).connect(Us),e.start(s),e.stop(s+.8)}},tn={get on(){return Fr},toggle(){return Ze||LT(),Fr=!Fr,Fr?(Ze.resume(),lr.gain.cancelScheduledValues(Ze.currentTime),lr.gain.linearRampToValueAtTime(.55,Ze.currentTime+1.2),clearTimeout(sf),sf=setTimeout(o_,900)):(lr.gain.cancelScheduledValues(Ze.currentTime),lr.gain.linearRampToValueAtTime(0,Ze.currentTime+.4),clearTimeout(sf)),Fr},play(s){if(!(!Fr||!Ze||Ze.state!=="running"))try{r_[s]&&r_[s]()}catch{}},pause(s){Ze&&(s?Ze.suspend():Fr&&Ze.resume())}};var Na="adham107harp",Ni=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),a_={TypeScript:"#3178c6",JavaScript:"#e9c84c",Python:"#3572A5","C++":"#f34b7d",C:"#8a8a8a","C#":"#178600",Java:"#b07219",HTML:"#e34c26",CSS:"#663399"};function l_(s){let e=(Date.now()-new Date(s).getTime())/1e3,t=[[31536e3,"year"],[2592e3,"month"],[604800,"week"],[86400,"day"],[3600,"hour"],[60,"minute"]];for(let[n,i]of t)if(e>=n){let r=Math.floor(e/n);return`${r} ${i}${r>1?"s":""} ago`}return"just now"}async function Rp(s){let e="gh:"+s;try{let i=JSON.parse(sessionStorage.getItem(e)||"null");if(i&&Date.now()-i.at<9e5)return i.data}catch{}let t=await fetch(s,{headers:{Accept:"application/vnd.github+json"}});if(!t.ok)throw new Error(t.status);let n=await t.json();try{sessionStorage.setItem(e,JSON.stringify({at:Date.now(),data:n}))}catch{}return n}async function c_(s){if(s)try{let[e,t,n]=await Promise.all([Rp(`https://api.github.com/users/${Na}`),Rp(`https://api.github.com/users/${Na}/repos?per_page=100&sort=pushed`),Rp(`https://api.github.com/users/${Na}/events/public?per_page=30`).catch(()=>[])]),i=t.filter(l=>!l.fork&&l.name!==Na),r=i.reduce((l,c)=>l+c.stargazers_count,0),o={};i.forEach(l=>{l.language&&(o[l.language]=(o[l.language]||0)+1)});let a=n.filter(l=>l.type==="PushEvent").slice(0,3);s.innerHTML=`
      <div class="gh-stats">
        <span><b>${Ni(e.public_repos)}</b> public repos</span>
        <span><b>${Ni(e.followers)}</b> followers</span>
        <span><b>${Ni(r)}</b> stars</span>
      </div>
      <ul class="gh-repos">${i.slice(0,4).map(l=>`
        <li><a href="${Ni(l.html_url)}" target="_blank" rel="noopener">${Ni(l.name)}</a>
          <span class="gh-meta">${l.language?`<i style="background:${Ni(a_[l.language]||"#9fb0e8")}"></i>${Ni(l.language)} \xB7 `:""}pushed ${Ni(l_(l.pushed_at))}</span></li>`).join("")}
      </ul>
      ${a.length?`<p class="gh-sub">Latest commits</p><ul class="gh-commits">${a.map(l=>{let c=(l.payload.commits||[]).slice(-1)[0];return`<li><span class="mono">${Ni(l.repo.name.split("/")[1])}</span> ${Ni((c&&c.message||"pushed").split(`
`)[0]).slice(0,80)} <em>${Ni(l_(l.created_at))}</em></li>`}).join("")}</ul>`:""}
      <p class="gh-langs">${Object.entries(o).sort((l,c)=>c[1]-l[1]).map(([l])=>`<span><i style="background:${Ni(a_[l]||"#9fb0e8")}"></i>${Ni(l)}</span>`).join("")}</p>`,s.classList.add("ready")}catch{s.innerHTML=`<p class="gh-off">Live data is resting (GitHub's API limit). Everything is at <a href="https://github.com/${Na}" target="_blank" rel="noopener">github.com/${Na}</a>.</p>`}}function cr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function x_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xc={duration:.5,overwrite:!1,delay:0},Wp,zn,Gt,ji=1e8,It=1/ji,Op=Math.PI*2,UT=Op/4,OT=0,v_=Math.sqrt,FT=Math.cos,BT=Math.sin,Tn=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},_f=function(e){return typeof e>"u"},Bs=function(e){return typeof e=="object"},Ti=function(e){return e!==!1},Xp=function(){return typeof window<"u"},of=function(e){return nn(e)||Tn(e)},y_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,kT=/random\([^)]+\)/g,zT=/,\s*/g,h_=/(?:-?\.?\d|\.)+/gi,qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yp=/[+-]=-?[.\d]+/,HT=/[^,'"\[\]\s]+/gi,VT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,Os,Fp,$p,Oi={},hf={},S_,M_=function(e){return(hf=Oa(e,Oi))&&ei},xf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vc=function(e,t){return!t&&console.warn(e)},b_=function(e,t){return e&&(Oi[e]=t)&&hf&&(hf[e]=t)||Oi},yc=function(){return 0},GT={suppressEvents:!0,isStart:!0,kill:!1},af={suppressEvents:!0,kill:!1},WT={suppressEvents:!0},Zp={},kr=[],Bp={},T_,Mi={},Pp={},u_=30,lf=[],Jp="",Kp=function(e){var t=e[0],n,i;if(Bs(t)||nn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=lf.length;i--&&!lf[i].targetTest(t););n=lf[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new tm(e[i],n)))||e.splice(i,1);return e},zr=function(e){return e._gsap||Kp(es(e))[0]._gsap},Qp=function(e,t,n){return(n=e[t])&&nn(n)?e[t]():_f(n)&&e.getAttribute&&e.getAttribute(t)||n},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},bo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},XT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},uf=function(){var e=kr.length,t=kr.slice(0),n,i;for(Bp={},kr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jp=function(e){return!!(e._initted||e._startAt||e.add)},E_=function(e,t,n,i){kr.length&&!zn&&uf(),e.render(t,n,i||!!(zn&&t<0&&jp(e))),kr.length&&!zn&&uf()},w_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(HT).length<2?t:Tn(e)?e.trim():e},A_=function(e){return e},Fi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Oa=function(e,t){for(var n in t)e[n]=t[n];return e},f_=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bs(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ff=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},mc=function(e){var t=e.parent||$t,n=e.keyframes?qT(jn(e.keyframes)):Fi;if(Ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},YT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},R_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},vf=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$T=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kp=function(e,t,n,i){return e._startAt&&(zn?e._startAt.revert(af):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ZT=function s(e){return!e||e._ts&&s(e.parent)},d_=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var n=Math.floor(e=Yt(e/t));return e&&n===e?n-1:n},df=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yf=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},Sf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yf(e),n._dirty||vo(n,e)),e},C_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=df(e.rawTime(),t),(!t._dur||Tc(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Fs=function(e,t,n,i){return t.parent&&Hr(t),t._start=Yt((ur(n)?n:!n&&pf(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==$t?Qi(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),R_(e,t,"_first","_last",e._sort?"_start":0),pf(t)||(e._recent=t),i||C_(e,t),e._ts<0&&Sf(e,e._tTime),e},P_=function(e,t){return(Oi.ScrollTrigger||xf("scrollTrigger",t))&&Oi.ScrollTrigger.create(t,e)},I_=function(e,t,n,i,r){if(sm(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!zn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&T_!==bi.frame)return kr.push(e),e._lazy=[r,i],1},JT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},pf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&JT(e)&&!(!e._initted&&pf(e))||(e._ts<0||e._dp._ts<0)&&!pf(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=Tc(0,e._tDur,t),h=Fa(l,a),e._yoyo&&h&1&&(o=1-o),h!==Fa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||zn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&I_(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&kp(e,t,n,!0),e._onUpdate&&!n&&Ui(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hr(e,1),!n&&!zn&&(Ui(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ba=function(e,t,n,i){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Sf(e,e._tTime=e._tDur*a),e.parent&&yf(e),n||vo(e.parent,e),e},p_=function(e){return e instanceof Qn?vo(e):Ba(e,e._dur)},jT={_start:0,endTime:yc,totalDuration:yc},Qi=function s(e,t,n){var i=e.labels,r=e._recent||jT,o=e.duration()>=ji?r.endTime(!1):e._dur,a,l,c;return Tn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(jn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},gc=function(e,t,n){var i=ur(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ti(l.vars.inherit)&&l.parent;o.immediateRender=Ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new cn(t[0],o,t[r+1])},Vr=function(e,t){return e||e===0?t(e):t},Tc=function(e,t,n){return n<e?e:n>t?t:n},Hn=function(e,t){return!Tn(e)||!(t=VT.exec(e))?"":t[1]},eE=function(e,t,n){return Vr(n,function(i){return Tc(e,t,i)})},zp=[].slice,D_=function(e,t){return e&&Bs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bs(e[0]))&&!e.nodeType&&e!==Os},tE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Tn(i)&&!t||D_(i,1)?(r=n).push.apply(r,es(i)):n.push(i)})||n},es=function(e,t,n){return Gt&&!t&&Gt.selector?Gt.selector(e):Tn(e)&&!n&&(Fp||!ka())?zp.call((t||$p).querySelectorAll(e),0):jn(e)?tE(e,n):D_(e)?zp.call(e,0):e?[e]:[]},Hp=function(e){return e=es(e)[0]||vc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return es(t,n.querySelectorAll?n:n===e?vc("Invalid scope")||$p.createElement("div"):e)}},L_=function(e){return e.sort(function(){return .5-Math.random()})},N_=function(e){if(nn(e))return e;var t=Bs(e)?e:{each:e},n=yo(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Tn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,p){var g=(p||t).length,m=o[g],x,v,T,y,M,b,_,S,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,ji])[1],!w){for(_=-ji;_<(_=p[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(m=o[g]=[],x=l?Math.min(w,g)*h-.5:i%w,v=w===ji?0:l?g*f/w-.5:i/w|0,_=0,S=ji,b=0;b<g;b++)T=b%w-x,y=v-(b/w|0),m[b]=M=c?Math.abs(c==="y"?y:T):v_(T*T+y*y),M>_&&(_=M),M<S&&(S=M);i==="random"&&L_(m),m.max=_-S,m.min=S,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Hn(t.amount||t.each)||0,n=n&&g<0?pE(n):n}return g=(m[d]-m.min)/m.max||0,Yt(m.b+(n?n(g):g)*m.v)+m.u}},Vp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ur(n)?0:Hn(n))}},U_=function(e,t){var n=jn(e),i,r;return!n&&Bs(e)&&(i=n=e.radius||ji,e.values?(e=es(e.values),(r=!ur(e[0]))&&(i*=i)):e=Vp(e.increment)),Vr(t,n?nn(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ji,h=0,f=e.length,d,u;f--;)r?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,r||h===o||ur(o)?h:h+Hn(o)}:Vp(e))},O_=function(e,t,n,i){return Vr(jn(e)?!t:n===!0?!!(n=0):!i,function(){return jn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},nE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},iE=function(e,t){return function(n){return e(parseFloat(n))+(t||Hn(n))}},sE=function(e,t,n){return B_(e,t,0,1,n)},F_=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},rE=function s(e,t,n){var i=t-e;return jn(e)?F_(e,s(0,e.length),t):Vr(n,function(r){return(i+(r-e)%i)%i+e})},oE=function s(e,t,n){var i=t-e,r=i*2;return jn(e)?F_(e,s(0,e.length-1),t):Vr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},za=function(e){return e.replace(kT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(zT);return O_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},B_=function(e,t,n,i,r){var o=t-e,a=i-n;return Vr(r,function(l){return n+((l-e)/o*a||0)})},aE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!r){var o=Tn(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(jn(e)&&!jn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(s(e[c-1],e[c]));f--,r=function(p){p*=f;var g=Math.min(d,~~p);return h[g](p-g)},n=t}else i||(e=Oa(jn(e)?[]:{},e));if(!h){for(l in t)nm.call(a,e,l,"get",t[l]);r=function(p){return am(p,a)||(o?e.p:e)}}}return Vr(n,r)},m_=function(e,t,n){var i=e.labels,r=ji,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ui=function(e,t,n){var i=e.vars,r=i[t],o=Gt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&kr.length&&uf(),a&&(Gt=a),h=l?r.apply(c,l):r.call(c),Gt=o,h},dc=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zn),e.progress()<1&&Ui(e,"onInterrupt"),e},Ua,k_=[],z_=function(e){if(e)if(e=!e.name&&e.default||e,Xp()||e.headless){var t=e.name,n=nn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:yc,render:am,add:nm,kill:TE,modifier:bE,rawVars:0},o={targetTest:0,get:0,getSetter:Mf,aliases:{},register:0};if(ka(),e!==i){if(Mi[t])return;Fi(i,Fi(ff(e,r),o)),Oa(i.prototype,Oa(r,ff(e,o))),Mi[i.prop=t]=i,e.targetTest&&(lf.push(i),Zp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}b_(t,i),e.register&&e.register(ei,i,fi)}else k_.push(e)},Ut=255,pc={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Ip=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},H_=function(e,t,n){var i=e?ur(e)?[e>>16,e>>8&Ut,e&Ut]:0:pc.black,r,o,a,l,c,h,f,d,u,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pc[e])i=pc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(h_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Ip(l+1/3,r,o),i[1]=Ip(l,r,o),i[2]=Ip(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(qp),n&&i.length<4&&(i[3]=1),i}else i=e.match(h_)||pc.transparent;i=i.map(Number)}return t&&!p&&(r=i[0]/Ut,o=i[1]/Ut,a=i[2]/Ut,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},V_=function(e){var t=[],n=[],i=-1;return e.split(hr).forEach(function(r){var o=r.match(Mo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},g_=function(e,t,n){var i="",r=(e+i).match(hr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return e;if(r=r.map(function(d){return(d=H_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=V_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(hr,"1").split(Mo),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(hr),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},hr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in pc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),lE=/hsl[a]?\(/,em=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=lE.test(t),e[1]=g_(e[1],n),e[0]=g_(e[0],n,V_(e[1])),!0},Sc,bi=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,f,d,u,p=function g(m){var x=s()-i,v=m===!0,T,y,M,b;if((x>e||x<0)&&(n+=x-t),i+=x,M=i-n,T=M-o,(T>0||v)&&(b=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(g)),y)for(u=0;u<a.length;u++)a[u](M,d,b,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){S_&&(!Fp&&Xp()&&(Os=Fp=window,$p=Os.document||{},Oi.gsap=ei,(Os.gsapVersions||(Os.gsapVersions=[])).push(ei.version),M_(hf||Os.GreenSockGlobals||!Os.gsap&&Os||{}),k_.forEach(z_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Sc=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Sc=0,c=yc},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,x,v){var T=x?function(y,M,b,_){m(y,M,b,_),f.remove(T)}:m;return f.remove(m),a[v?"unshift":"push"](T),ka(),T},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&u>=x&&u--},_listeners:a},f})(),ka=function(){return!Sc&&bi.wake()},St={},cE=/^[\d.\-M][\d.\-,\s]/,hE=/["']/g,uE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(hE,"").trim():+c,i=l.substr(a+1).trim();return t},fE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dE=function(e){var t=(e+"").split("("),n=St[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uE(t[1])]:fE(e).split(",").map(w_)):St._CE&&cE.test(e)?St._CE("",e):n},pE=function(e){return function(t){return 1-e(1-t)}},yo=function(e,t){return e&&(nn(e)?e:St[e]||dE(e))||t},To=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return ui(e,function(a){St[a]=Oi[a]=r,St[o=a.toLowerCase()]=n;for(var l in r)St[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=r[l]}),r},G_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Dp=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Op*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*BT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:G_(a);return r=Op/r,l.config=function(c,h){return s(e,c,h)},l},Lp=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:G_(n);return i.config=function(r){return s(e,r)},i};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;To(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;To("Elastic",Dp("in"),Dp("out"),Dp());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};To("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);To("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});To("Circ",function(s){return-(v_(1-s*s)-1)});To("Sine",function(s){return s===1?1:-FT(s*UT)+1});To("Back",Lp("in"),Lp("out"),Lp());St.SteppedEase=St.steps=Oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-It;return function(a){return((i*Tc(0,o,a)|0)+r)*n}}};xc.ease=St["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Jp+=s+","+s+"Params,"});var tm=function(e,t){this.id=OT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qp,this.set=t?t.getSetter:Mf},Mc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ba(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),Sc||bi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ba(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ka(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sf(this,n),!r._dp||r.parent||C_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fs(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),E_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+d_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+d_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Fa(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?df(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Tc(-Math.abs(this._delay),a,r),i!==!1),yf(this),$T(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ka(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==It,o;if(r)for(this._tTime-=It,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+It){r=!1;break}o=o._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Yt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fs(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?df(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=WT);var i=zn;return zn=n,jp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,p_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,p_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qi(this,n),Ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ti(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-It)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=nn(n)?n:A_,l=function(){var h=i.then;i.then=null,r&&r(),nn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){dc(this)},s})();Fi(Mc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Qn=(function(s){x_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ti(n.sortChildren),$t&&Fs(n.parent||$t,cr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&P_(cr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return gc(0,arguments,this),this},t.from=function(i,r,o){return gc(1,arguments,this),this},t.fromTo=function(i,r,o,a){return gc(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,mc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new cn(i,r,Qi(this,o),1),this},t.call=function(i,r,o){return Fs(this,cn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new cn(i,o,Qi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,mc(o).immediateRender=Ti(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,f){return a.startAt=o,mc(a).immediateRender=Ti(a.immediateRender),this.staggerTo(i,r,a,l,c,h,f)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Yt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,p,g,m,x,v,T,y,M,b,_;if(this!==$t&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,T=this._ts,x=!T,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Yt(h%m),h===l?(g=this._repeat,d=c):(M=Yt(h/m),g=~~M,g&&g===M&&(d=c,g--),d>c&&(d=c)),M=Fa(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),b&&g&1&&(d=c-d,_=1),g!==M&&!this._lock){var S=b&&M&1,w=S===(b&&g&1);if(g<M&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Yt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ui(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,M=g),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=QT(this,Yt(a),Yt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!M&&(Ui(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(p=u._next,(u._act||d>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!x){v=0,p&&(h+=this._zTime=-It);break}}u=p}else{u=this._last;for(var E=i<0?i:d;u;){if(p=u._prev,(u._act||E<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(E-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(E-u._start)*u._ts,r,o||zn&&jp(u)),d!==this._time||!this._ts&&!x){v=0,p&&(h+=this._zTime=E?-It:It);break}}u=p}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-It)._zTime=d>=a?1:-1,this._ts))return this._start=y,yf(this),this.render(i,r,o);this._onUpdate&&!r&&Ui(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Hr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Ui(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ur(r)||(r=Qi(this,r,i)),!(i instanceof Mc)){if(jn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Tn(i))return this.addLabel(i,r);if(nn(i))i=cn.delayedCall(0,i);else return this}return this!==i?Fs(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ji);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof cn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Tn(i)?this.removeLabel(i):nn(i)?this.killTweensOf(i):(i.parent===this&&vf(this,i),i===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(bi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Qi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=cn.delayedCall(0,r||yc,o);return a.data="isPause",this._hasPause=1,Fs(this,a,Qi(this,i))},t.removePause=function(i){var r=this._first;for(i=Qi(this,i);r;)r._start===i&&r.data==="isPause"&&Hr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Br!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=es(i),l=this._first,c=ur(r),h;l;)l instanceof cn?XT(l._targets,a)&&(c?(!Br||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Qi(o,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,p=cn.to(o,Fi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Ba(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,f||[])}},r));return d?p.render(0):p},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Fi({startAt:{time:Qi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),m_(this,Qi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),m_(this,Qi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Yt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return vo(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vo(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=ji,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fs(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Yt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ba(o,o===$t&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if($t._ts&&(E_($t,df(i,$t)),T_=bi.frame),bi.frame>=u_){u_+=Ei.autoSleep||120;var r=$t._first;if((!r||!r._ts)&&Ei.autoSleep&&bi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||bi.sleep()}}},e})(Mc);Fi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mE=function(e,t,n,i,r,o,a){var l=new fi(this._pt,e,t,0,1,om,null,r),c=0,h=0,f,d,u,p,g,m,x,v;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=za(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Cp)||[];f=Cp.exec(i);)p=f[0],g=i.substring(c,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),p!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:p.charAt(1)==="="?bo(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=Cp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Yp.test(i)||x)&&(l.e=0),this._pt=l,l},nm=function(e,t,n,i,r,o,a,l,c,h){nn(i)&&(i=i(r||0,e,o));var f=e[t],d=n!=="get"?n:nn(f)?c?e[t.indexOf("set")||!nn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=nn(f)?c?yE:X_:rm,p;if(Tn(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(p=bo(d,i)+(Hn(d)||0),(p||p===0)&&(i=p))),!h||d!==i||Gp)return!isNaN(d*i)&&i!==""?(p=new fi(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?ME:q_,0,u),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!f&&!(t in e)&&xf(t,i),mE.call(this,e,t,d,i,u,l||Ei.stringFilter,c))},gE=function(e,t,n,i,r){if(nn(e)&&(e=_c(e,r,t,n,i)),!Bs(e)||e.style&&e.nodeType||jn(e)||y_(e))return Tn(e)?_c(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=_c(e[a],r,t,n,i);return o},im=function(e,t,n,i,r,o){var a,l,c,h;if(Mi[e]&&(a=new Mi[e]).init(r,a.rawVars?t[e]:gE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new fi(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ua))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Br,Gp,sm=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:m,T=e._overwrite==="auto"&&!Wp,y=e.timeline,M=i.easeReverse||f,b,_,S,w,E,D,I,N,P,B,k,O,q;if(y&&(!d||!r)&&(r="none"),e._ease=yo(r,xc.ease),e._rEase=M&&(yo(M)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||d&&!i.stagger){if(N=m[0]?zr(m[0]).harness:0,O=N&&i[N.prop],b=ff(i,Zp),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!u?g.render(-1,!0):g.revert(h&&p?af:GT),g._lazy=0),o){if(Hr(e._startAt=cn.set(m,Fi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!g&&Ti(l),startAt:null,delay:0,onUpdate:c&&function(){return Ui(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zn||!a&&!u)&&e._startAt.revert(af),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!g){if(t&&(a=!1),S=Fi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Ti(l),immediateRender:a,stagger:0,parent:x},b),O&&(S[N.prop]=O),Hr(e._startAt=cn.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zn?e._startAt.revert(af):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ti(l)||l&&!p,_=0;_<m.length;_++){if(E=m[_],I=E._gsap||Kp(m)[_]._gsap,e._ptLookup[_]=B={},Bp[I.id]&&kr.length&&uf(),k=v===m?_:v.indexOf(E),N&&(P=new N).init(E,O||b,e,k,v)!==!1&&(e._pt=w=new fi(e._pt,E,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(U){B[U]=w}),P.priority&&(D=1)),!N||O)for(S in b)Mi[S]&&(P=im(S,b,e,k,E,v))?P.priority&&(D=1):B[S]=w=nm.call(e,E,S,"get",b[S],k,v,0,i.stringFilter);e._op&&e._op[_]&&e.kill(E,e._op[_]),T&&e._pt&&(Br=e,$t.killTweensOf(E,B,e.globalTime(t)),q=!e.parent,Br=0),e._pt&&l&&(Bp[I.id]=1)}D&&lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&y.render(ji,!0,!0)},_E=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Gp=1,e.vars[t]="+=0",sm(e,a),Gp=0,l?vc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=sn(n)+Hn(f.e)),f.b&&(f.b=h.s+Hn(f.b))},xE=function(e,t){var n=e[0]?zr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Oa({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},vE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(jn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},_c=function(e,t,n,i,r){return nn(e)?e.call(t,n,i,r):Tn(e)&&~e.indexOf("random(")?za(e):e},mf=Jp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",W_={};ui(mf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return W_[s]=1});mf=mf.split(",");var cn=(function(s){x_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:mc(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,x=i.parent||$t,v=(jn(n)||y_(n)?ur(n[0]):"length"in i)?[n]:es(n),T,y,M,b,_,S,w,E;if(a._targets=v.length?Kp(v):vc("GSAP target "+n+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||d||of(c)||of(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(T=a.timeline=new Qn({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),T.kill(),T.parent=T._dp=cr(a),T._start=0,d||of(c)||of(h)){if(b=v.length,w=d&&N_(d),Bs(d))for(_ in d)~mf.indexOf(_)&&(E||(E={}),E[_]=d[_]);for(y=0;y<b;y++)M=ff(i,W_),M.stagger=0,D&&(M.easeReverse=D),E&&Oa(M,E),S=v[y],M.duration=+_c(c,cr(a),y,S,v),M.delay=(+_c(h,cr(a),y,S,v)||0)-a._delay,!d&&b===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),T.to(S,M,w?w(y,S,v):0),T._ease=St.none;T.duration()?c=h=0:a.timeline=0}else if(p){mc(Fi(T.vars.defaults,{ease:"none"})),T._ease=yo(p.ease||i.ease||"none");var I=0,N,P,B;if(jn(p))p.forEach(function(k){return T.to(v,k,">")}),T.duration();else{M={};for(_ in p)_==="ease"||_==="easeEach"||vE(_,p[_],M,p.easeEach);for(_ in M)for(N=M[_].sort(function(k,O){return k.t-O.t}),I=0,y=0;y<N.length;y++)P=N[y],B={ease:P.e,duration:(P.t-(y?N[y-1].t:0))/100*c},B[_]=P.v,T.to(v,B,I),I+=B.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return u===!0&&!Wp&&(Br=cr(a),$t.killTweensOf(v),Br=0),Fs(x,cr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===Yt(x._time)&&Ti(f)&&ZT(cr(a))&&x.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-h)||0)),m&&P_(cr(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-It&&!h?l:i<It?0:i,d,u,p,g,m,x,v,T;if(!c)KT(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=Yt(f%g),f===l?(p=this._repeat,d=c):(m=Yt(f/g),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),x=this._yoyo&&p&1,x&&(d=c-d),m=Fa(this._tTime,g),d===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!x&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Yt(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(I_(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var M=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!r&&!m&&(Ui(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&kp(this,i,r,o),Ui(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&Ui(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&kp(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Hr(this,1),!r&&!(h&&!a)&&(f||a||x)&&(Ui(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Sc||bi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||sm(this,c),h=this._ease(c/this._dur),_E(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Sf(this,0),this.parent||R_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?dc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Br&&Br.vars.overwrite!==!0)._first||dc(this),this.parent&&o!==this.timeline.totalDuration()&&Ba(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?es(i):a,c=this._ptLookup,h=this._pt,f,d,u,p,g,m,x;if((!r||r==="all")&&YT(a,l))return r==="all"&&(this._pt=0),dc(this);for(f=this._op=this._op||[],r!=="all"&&(Tn(r)&&(g={},ui(r,function(v){return g[v]=1}),r=g),r=xE(a,r)),x=a.length;x--;)if(~l.indexOf(a[x])){d=c[x],r==="all"?(f[x]=r,p=d,u={}):(u=f[x]=f[x]||{},p=r);for(g in p)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&vf(this,m,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&dc(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return gc(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return gc(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return $t.killTweensOf(i,r,o)},e})(Mc);Fi(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(s){cn[s]=function(){var e=new Qn,t=zp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var rm=function(e,t,n){return e[t]=n},X_=function(e,t,n){return e[t](n)},yE=function(e,t,n,i){return e[t](i.fp,n)},SE=function(e,t,n){return e.setAttribute(t,n)},Mf=function(e,t){return nn(e[t])?X_:_f(e[t])&&e.setAttribute?SE:rm},q_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ME=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},om=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},am=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bE=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},TE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vf(this,t,"_pt"):t.dep||(n=1),t=i;return!n},EE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lm=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},fi=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||q_,this.d=l||this,this.set=c||rm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=EE,this.m=n,this.mt=r,this.tween=i},s})();ui(Jp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Zp[s]=1});Oi.TweenMax=Oi.TweenLite=cn;Oi.TimelineLite=Oi.TimelineMax=Qn;$t=new Qn({sortChildren:!1,defaults:xc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=em;var So=[],cf={},wE=[],__=0,AE=0,Np=function(e){return(cf[e]||wE).map(function(t){return t()})},bc=function(){var e=Date.now(),t=[];e-__>2&&(Np("matchMediaInit"),So.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Os.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Np("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),__=e,Np("matchMedia"))},Y_=(function(){function s(t,n){this.selector=n&&Hp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){nn(n)&&(r=i,i=n,n=nn);var o=this,a=function(){var c=Gt,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Hp(r)),Gt=o,f=i.apply(o,arguments),nn(f)&&o._r.push(f),Gt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===nn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Gt;Gt=null,n(this),Gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof cn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof cn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=So.length;o--;)So[o].id===this.id&&So.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(bc):a.removeEventListener("change",bc)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),RE=(function(){function s(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Bs(n)||(n={matches:n});var o=new Y_(0,r||this.scope),a=o.conditions={},l,c,h;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Os.matchMedia(n[c]),l&&(So.indexOf(o)<0&&So.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(bc):l.addEventListener("change",bc),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),gf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return z_(i)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return $t.getTweensOf(e,t)},getProperty:function(e,t,n,i){Tn(e)&&(e=es(e)[0]);var r=zr(e||{}).get,o=n?A_:w_;return n==="native"&&(n=""),e&&(t?o((Mi[t]&&Mi[t].get||r)(e,t,n,i)):function(a,l,c){return o((Mi[a]&&Mi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=es(e),e.length>1){var i=e.map(function(h){return ei.quickSetter(h,t,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}e=e[0]||{};var o=Mi[t],a=zr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;Ua._pt=0,f.init(e,n?h+n:h,Ua,0,[e]),f.render(1,f),Ua._pt&&am(1,Ua)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=ei.to(e,Fi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return $t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,xc.ease)),f_(xc,e||{})},config:function(e){return f_(Ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Mi[a]&&!Oi[a]&&vc(t+" effect requires "+a+" plugin.")}),Pp[t]=function(a,l,c){return n(es(a),Fi(l||{},r),c)},o&&(Qn.prototype[t]=function(a,l,c){return this.add(Pp[t](a,Bs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):St},getById:function(e){return $t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qn(e),i,r;for(n.smoothChildTiming=Ti(e.smoothChildTiming),$t.remove(n),n._dp=0,n._time=n._tTime=$t._time,i=$t._first;i;)r=i._next,(t||!(!i._dur&&i instanceof cn&&i.vars.onComplete===i._targets[0]))&&Fs(n,i,i._start-i._delay),i=r;return Fs($t,n,0),n},context:function(e,t){return e?new Y_(e,t):Gt},matchMedia:function(e){return new RE(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bc()},addEventListener:function(e,t){var n=cf[e]||(cf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=cf[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rE,wrapYoyo:oE,distribute:N_,random:O_,snap:U_,normalize:sE,getUnit:Hn,clamp:eE,splitColor:H_,toArray:es,selector:Hp,mapRange:B_,pipe:nE,unitize:iE,interpolate:aE,shuffle:L_},install:M_,effects:Pp,ticker:bi,updateRoot:Qn.updateRoot,plugins:Mi,globalTimeline:$t,core:{PropTween:fi,globals:b_,Tween:cn,Timeline:Qn,Animation:Mc,getCache:zr,_removeLinkedListItem:vf,reverting:function(){return zn},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return Wp=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return gf[s]=cn[s]});bi.add(Qn.updateRoot);Ua=gf.to({},{duration:0});var CE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},PE=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=CE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Up=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Tn(r)&&(l={},ui(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}PE(a,r)}}}},ei=gf.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)zn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Up("roundProps",Vp),Up("modifiers"),Up("snap",U_))||gf;cn.version=Qn.version=ei.version="3.15.1";S_=1;Xp()&&ka();var IE=St.Power0,DE=St.Power1,LE=St.Power2,NE=St.Power3,UE=St.Power4,OE=St.Linear,FE=St.Quad,BE=St.Cubic,kE=St.Quart,zE=St.Quint,HE=St.Strong,VE=St.Elastic,GE=St.Back,WE=St.SteppedEase,XE=St.Bounce,qE=St.Sine,YE=St.Expo,$E=St.Circ;var $_,Gr,Va,pm,Ro,ZE,Z_,mm,JE=function(){return typeof window<"u"},dr={},Ao=180/Math.PI,Ga=Math.PI/180,Ha=Math.atan2,J_=1e8,gm=/([A-Z])/g,KE=/(left|right|width|margin|padding|x)/i,QE=/[\s,\(]\S/,ks={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ew=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iw=function(e,t,n){return e.style[t]=n},sw=function(e,t,n){return e.style.setProperty(t,n)},rw=function(e,t,n){return e._gsap[t]=n},ow=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},aw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},lw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Zt="transform",wi=Zt+"Origin",cw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in dr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ks[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(i,a)}):this.tfm[e]=o.x?o[e]:fr(i,e),e===wi&&(this.tfm.zOrigin=o.zOrigin);else return ks.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Zt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wi,t,"")),e=Zt}(r||t)&&this.props.push(e,t,r[e])},ox=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(gm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=mm(),(!r||!r.isStart)&&!n[Zt]&&(ox(n),i.zOrigin&&n[wi]&&(n[wi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ax=function(e,t){var n={target:e,props:[],revert:hw,save:cw};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},lx,um=function(e,t){var n=Gr.createElementNS?Gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gr.createElement(e);return n&&n.style?n:Gr.createElement(e)},Bi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Wa(t)||t,1)||""},K_="O,Moz,ms,Ms,Webkit".split(","),Wa=function(e,t,n){var i=t||Ro,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(K_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?K_[o]:"")+e},fm=function(){JE()&&window.document&&($_=window,Gr=$_.document,Va=Gr.documentElement,Ro=um("div")||{style:{}},ZE=um("div"),Zt=Wa(Zt),wi=Zt+"Origin",Ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lx=!!Wa("perspective"),mm=ei.core.reverting,pm=1)},Q_=function(e){var t=e.ownerSVGElement,n=um("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Va.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Va.removeChild(n),r},j_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cx=function(e){var t,n;try{t=e.getBBox()}catch{t=Q_(e),n=1}return t&&(t.width||t.height)||n||(t=Q_(e)),t&&!t.width&&!t.x&&!t.y?{x:+j_(e,["x","cx","x1"])||0,y:+j_(e,["y","cy","y1"])||0,width:0,height:0}:t},hx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cx(e))},Xr=function(e,t){if(t){var n=e.style,i;t in dr&&t!==wi&&(t=Zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gm,"-$1").toLowerCase())):n.removeAttribute(t)}},Wr=function(e,t,n,i,r,o){var a=new fi(e._pt,t,n,0,1,o?rx:sx);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},ex={deg:1,rad:1,turn:1},uw={grid:1,flex:1},qr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ro.style,l=KE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",p,g,m,x;if(i===o||!r||ex[i]||ex[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),x=e.getCTM&&hx(e),(u||o==="%")&&(dr[t]||~t.indexOf("adius")))return p=x?e.getBBox()[l?"width":"height"]:e[h],sn(u?r/p*f:r/100*p);if(a[l?"width":"height"]=f+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Gr||!g.appendChild)&&(g=Gr.body),m=g._gsap,m&&u&&m.width&&l&&m.time===bi.time&&!m.uncache)return sn(r/m.width*f);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,p=e[h],v?e.style[t]=v:Xr(e,t)}else(u||o==="%")&&!uw[Bi(g,"display")]&&(a.position=Bi(e,"position")),g===e&&(a.position="static"),g.appendChild(Ro),p=Ro[h],g.removeChild(Ro),a.position="absolute";return l&&u&&(m=zr(g),m.time=bi.time,m.width=g[h]),sn(d?p*r/f:p&&r?f/p*r:0)},fr=function(e,t,n,i){var r;return pm||fm(),t in ks&&t!=="transform"&&(t=ks[t],~t.indexOf(",")&&(t=t.split(",")[0])),dr[t]&&t!=="transform"?(r=Ac(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Tf(Bi(e,wi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=bf[t]&&bf[t](e,t,n)||Bi(e,t)||Qp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qr(e,t,r,n)+n:r},fw=function(e,t,n,i){if(!n||n==="none"){var r=Wa(t,e,1),o=r&&Bi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Bi(e,"borderTopColor"))}var a=new fi(this._pt,e.style,t,0,1,om),l=0,c=0,h,f,d,u,p,g,m,x,v,T,y,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=Bi(e,t)||i,g?e.style[t]=g:Xr(e,t)),h=[n,i],em(h),n=h[0],i=h[1],d=n.match(Mo)||[],M=i.match(Mo)||[],M.length){for(;f=Mo.exec(i);)m=f[0],v=i.substring(l,f.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=d[c++]||"")&&(u=parseFloat(g)||0,y=g.substr((u+"").length),m.charAt(1)==="="&&(m=bo(u,m)+y),x=parseFloat(m),T=m.substr((x+"").length),l=Mo.lastIndex-T.length,T||(T=T||Ei.units[t]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(u=qr(e,t,g,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:x-u,m:p&&p<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?rx:sx;return Yp.test(i)&&(a.e=0),this._pt=a,a},tx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tx[n]||n,t[1]=tx[i]||i,t.join(" ")},pw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],dr[a]&&(l=1,a=a==="transformOrigin"?wi:Zt),Xr(n,a);l&&(Xr(n,Zt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ac(n,1),o.uncache=1,ox(i)))}},bf={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new fi(e._pt,t,n,0,0,pw);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},wc=[1,0,0,1,0,0],ux={},fx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nx=function(e){var t=Bi(e,Zt);return fx(t)?wc:t.substr(7).match(qp).map(sn)},_m=function(e,t){var n=e._gsap||zr(e),i=e.style,r=nx(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?wc:r):(r===wc&&!e.offsetParent&&e!==Va&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Va.appendChild(e)),r=nx(e),l?i.display=l:Xr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Va.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},dm=function(e,t,n,i,r,o){var a=e._gsap,l=r||_m(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],p=l[1],g=l[2],m=l[3],x=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,M=parseFloat(T[1])||0,b,_,S,w;n?l!==wc&&(_=u*m-p*g)&&(S=y*(m/_)+M*(-g/_)+(g*v-m*x)/_,w=y*(-p/_)+M*(u/_)-(u*v-p*x)/_,y=S,M=w):(b=cx(e),y=b.x+(~T[0].indexOf("%")?y/100*b.width:y),M=b.y+(~(T[1]||T[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(x=y-c,v=M-h,a.xOffset=f+(x*u+v*g)-x,a.yOffset=d+(x*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wi]="0px 0px",o&&(Wr(o,a,"xOrigin",c,y),Wr(o,a,"yOrigin",h,M),Wr(o,a,"xOffset",f,a.xOffset),Wr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ac=function(e,t){var n=e._gsap||new tm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bi(e,wi)||"0",h,f,d,u,p,g,m,x,v,T,y,M,b,_,S,w,E,D,I,N,P,B,k,O,q,U,C,Z,ue,Pe,Y,le;return h=f=d=g=m=x=v=T=y=0,u=p=1,n.svg=!!(e.getCTM&&hx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),i.scale=i.rotate=i.translate="none"),_=_m(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),dm(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,_)),M=n.xOrigin||0,b=n.yOrigin||0,_!==wc&&(D=_[0],I=_[1],N=_[2],P=_[3],h=B=_[4],f=k=_[5],_.length===6?(u=Math.sqrt(D*D+I*I),p=Math.sqrt(P*P+N*N),g=D||I?Ha(I,D)*Ao:0,v=N||P?Ha(N,P)*Ao+g:0,v&&(p*=Math.abs(Math.cos(v*Ga))),n.svg&&(h-=M-(M*D+b*N),f-=b-(M*I+b*P))):(le=_[6],Pe=_[7],C=_[8],Z=_[9],ue=_[10],Y=_[11],h=_[12],f=_[13],d=_[14],S=Ha(le,ue),m=S*Ao,S&&(w=Math.cos(-S),E=Math.sin(-S),O=B*w+C*E,q=k*w+Z*E,U=le*w+ue*E,C=B*-E+C*w,Z=k*-E+Z*w,ue=le*-E+ue*w,Y=Pe*-E+Y*w,B=O,k=q,le=U),S=Ha(-N,ue),x=S*Ao,S&&(w=Math.cos(-S),E=Math.sin(-S),O=D*w-C*E,q=I*w-Z*E,U=N*w-ue*E,Y=P*E+Y*w,D=O,I=q,N=U),S=Ha(I,D),g=S*Ao,S&&(w=Math.cos(S),E=Math.sin(S),O=D*w+I*E,q=B*w+k*E,I=I*w-D*E,k=k*w-B*E,D=O,B=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,x=180-x),u=sn(Math.sqrt(D*D+I*I+N*N)),p=sn(Math.sqrt(k*k+le*le)),S=Ha(B,k),v=Math.abs(S)>2e-4?S*Ao:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fx(Bi(e,Zt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=sn(u),n.scaleY=sn(p),n.rotation=sn(g)+a,n.rotationX=sn(m)+a,n.rotationY=sn(x)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wi]=Tf(c)),n.xOffset=n.yOffset=0,n.force3D=Ei.force3D,n.renderTransform=n.svg?gw:lx?dx:mw,n.uncache=0,n},Tf=function(e){return(e=e.split(" "))[0]+" "+e[1]},cm=function(e,t,n){var i=Hn(t);return sn(parseFloat(t)+parseFloat(qr(e,"x",n+"px",i)))+i},mw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dx(e,t)},Eo="0deg",Ec="0px",wo=") ",dx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,x=n.force3D,v=n.target,T=n.zOrigin,y="",M=x==="auto"&&e&&e!==1||x===!0;if(T&&(f!==Eo||h!==Eo)){var b=parseFloat(h)*Ga,_=Math.sin(b),S=Math.cos(b),w;b=parseFloat(f)*Ga,w=Math.cos(b),o=cm(v,o,_*w*-T),a=cm(v,a,-Math.sin(b)*-T),l=cm(v,l,S*w*-T+T)}m!==Ec&&(y+="perspective("+m+wo),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||o!==Ec||a!==Ec||l!==Ec)&&(y+=l!==Ec||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+wo),c!==Eo&&(y+="rotate("+c+wo),h!==Eo&&(y+="rotateY("+h+wo),f!==Eo&&(y+="rotateX("+f+wo),(d!==Eo||u!==Eo)&&(y+="skew("+d+", "+u+wo),(p!==1||g!==1)&&(y+="scale("+p+", "+g+wo),v.style[Zt]=y||"translate(0, 0)"},gw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,x=n.yOffset,v=n.forceCSS,T=parseFloat(o),y=parseFloat(a),M,b,_,S,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ga,c*=Ga,M=Math.cos(l)*f,b=Math.sin(l)*f,_=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(h*=Ga,w=Math.tan(c-h),w=Math.sqrt(1+w*w),_*=w,S*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),M*=w,b*=w)),M=sn(M),b=sn(b),_=sn(_),S=sn(S)):(M=f,S=d,b=_=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=qr(u,"x",o,"px"),y=qr(u,"y",a,"px")),(p||g||m||x)&&(T=sn(T+p-(p*M+g*_)+m),y=sn(y+g-(p*b+g*S)+x)),(i||r)&&(w=u.getBBox(),T=sn(T+i/100*w.width),y=sn(y+r/100*w.height)),w="matrix("+M+","+b+","+_+","+S+","+T+","+y+")",u.setAttribute("transform",w),v&&(u.style[Zt]=w)},_w=function(e,t,n,i,r){var o=360,a=Tn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ao:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*J_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*J_)%o-~~(c/o)*o)),e._pt=d=new fi(e._pt,t,n,i,c,jE),d.e=h,d.u="deg",e._props.push(n),d},ix=function(e,t){for(var n in t)e[n]=t[n];return e},xw=function(e,t,n){var i=ix({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Zt]=t,a=Ac(n,1),Xr(n,Zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Zt],o[Zt]=t,a=Ac(n,1),o[Zt]=c);for(l in dr)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Hn(c),p=Hn(h),f=u!==p?qr(n,l,c,p):parseFloat(c),d=parseFloat(h),e._pt=new fi(e._pt,a,l,f,d-f,hm),e._pt.u=p||0,e._props.push(l));ix(a,i)};ui("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});bf[e>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(p){return fr(a,p,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(p,g){return u[p]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,u,f)}});var xm={name:"css",register:fm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,p,g,m,x,v,T,y,M,b,_,S,w;pm||fm(),this.styles=this.styles||ax(e),S=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Mi[g]&&im(g,t,n,i,e,r)))){if(u=typeof h,p=bf[g],u==="function"&&(h=h.call(n,i,e,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=za(h)),p)p(this,e,g,h,n)&&(_=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",hr.lastIndex=0,hr.test(c)||(m=Hn(c),x=Hn(h),x?m!==x&&(c=qr(e,g,c,x)+x):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),S.push(g,0,a[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Tn(c)&&~c.indexOf("random(")&&(c=za(c)),Hn(c+"")||c==="auto"||(c+=Ei.units[g]||Hn(fr(e,g))||""),(c+"").charAt(1)==="="&&(c=fr(e,g))):c=fr(e,g),d=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),f=parseFloat(h),g in ks&&(g==="autoAlpha"&&(d===1&&fr(e,"visibility")==="hidden"&&f&&(d=0),S.push("visibility",0,a.visibility),Wr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=ks[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in dr,T){if(this.styles.save(g),w=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=Bi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=Bi(e,"perspective"),E?e.style.perspective=E:Xr(e,"perspective")}f=parseFloat(h)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ac(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new fi(this._pt,a,Zt,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new fi(this._pt,M,"scaleY",M.scaleY,(v?bo(M.scaleY,v+f):f)-M.scaleY||0,hm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(wi,0,a[wi]),h=dw(h),M.svg?dm(e,h,0,b,0,this):(x=parseFloat(h.split(" ")[2])||0,x!==M.zOrigin&&Wr(this,M,"zOrigin",M.zOrigin,x),Wr(this,a,g,Tf(c),Tf(h)));continue}else if(g==="svgOrigin"){dm(e,h,1,b,0,this);continue}else if(g in ux){_w(this,M,g,d,v?bo(d,v+h):h);continue}else if(g==="smoothOrigin"){Wr(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){xw(this,h,e);continue}}else g in a||(g=Wa(g)||g);if(T||(f||f===0)&&(d||d===0)&&!QE.test(h)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),x=Hn(h)||(g in Ei.units?Ei.units[g]:m),m!==x&&(d=qr(e,g,c,x)),this._pt=new fi(this._pt,T?M:a,g,d,(v?bo(d,v+f):f)-d,!T&&(x==="px"||g==="zIndex")&&t.autoRound!==!1?nw:hm),this._pt.u=x||0,T&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=tw):m!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=ew);else if(g in a)fw.call(this,e,g,c,v?v+h:h);else if(g in e)this.add(e,g,c||e[g],v?v+h:h,i,r);else if(g!=="parseTransform"){xf(g,h);continue}T||(g in a?S.push(g,0,a[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),o.push(g)}}_&&lm(this)},render:function(e,t){if(t.tween._time||!mm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:ks,getSetter:function(e,t,n){var i=ks[t];return i&&i.indexOf(",")<0&&(t=i),t in dr&&t!==wi&&(e._gsap.x||fr(e,"x"))?n&&Z_===n?t==="scale"?ow:rw:(Z_=n||{})&&(t==="scale"?aw:lw):e.style&&!_f(e.style[t])?iw:~t.indexOf("-")?sw:Mf(e,t)},core:{_removeProperty:Xr,_getMatrix:_m}};ei.utils.checkPrefix=Wa;ei.core.getStyleSaver=ax;(function(s,e,t,n){var i=ui(s+","+e+","+t,function(r){dr[r]=1});ui(e,function(r){Ei.units[r]="deg",ux[r]=1}),ks[i[13]]=s+","+e,ui(n,function(r){var o=r.split(":");ks[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ei.units[s]="px"});ei.registerPlugin(xm);var Wt=ei.registerPlugin(xm)||ei,hP=Wt.core.Tween;function px(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function vw(s,e,t){return e&&px(s.prototype,e),t&&px(s,t),s}var Vn,Af,yw,Ai,Yr,$r,qa,gx,Co,Ya,_x,pr,_s,xx,vx=function(){return Vn||typeof window<"u"&&(Vn=window.gsap)&&Vn.registerPlugin&&Vn},yx=1,Xa=[],ut=[],xs=[],Cc=Date.now,vm=function(e,t){return t},Sw=function(){var e=Ya.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,xs),ut=n,xs=i,vm=function(o,a){return t[o](a)}},gr=function(e,t){return~xs.indexOf(e)&&xs[xs.indexOf(e)+1][t]},Pc=function(e){return!!~_x.indexOf(e)},pi=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},di=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ef="scrollLeft",wf="scrollTop",ym=function(){return pr&&pr.isPressed||ut.cache++},Rf=function(e,t){var n=function i(r){if(r||r===0){yx&&Ai.history.scrollRestoration!=="manual"&&(Ai.history.scrollRestoration="manual");var o=pr&&pr.isPressed;r=i.v=Math.round(r)||(pr&&pr.iOS?1:0),e(r),i.cacheID=ut.cache,o&&vm("ss",r)}else(t||ut.cache!==i.cacheID||vm("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ti={s:Ef,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rf(function(s){return arguments.length?Ai.scrollTo(s,gn.sc()):Ai.pageXOffset||Yr[Ef]||$r[Ef]||qa[Ef]||0})},gn={s:wf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ti,sc:Rf(function(s){return arguments.length?Ai.scrollTo(ti.sc(),s):Ai.pageYOffset||Yr[wf]||$r[wf]||qa[wf]||0})},mi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Vn.utils.toArray)(e)[0]||(typeof e=="string"&&Vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},mr=function(e,t){var n=t.s,i=t.sc;Pc(e)&&(e=Yr.scrollingElement||$r);var r=ut.indexOf(e),o=i===gn.sc?1:2;!~r&&(r=ut.push(e)-1),ut[r+o]||pi(e,"scroll",ym);var a=ut[r+o],l=a||(ut[r+o]=Rf(gr(e,n),!0)||(Pc(e)?i:Rf(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Vn.getProperty(e,"scrollBehavior")==="smooth"),l},Cf=function(e,t,n){var i=e,r=e,o=Cc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(p,g){var m=Cc();g||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(p){var g=a,m=r,x=Cc();return(p||p===0)&&p!==i&&h(p),o===a||x-a>c?0:(i+(n?m:-m))/((n?x:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},Rc=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Sx=function(){Ya=Vn.core.globals().ScrollTrigger,Ya&&Ya.core&&Sw()},Mx=function(e){return Vn=e||vx(),!Af&&Vn&&typeof document<"u"&&document.body&&(Ai=window,Yr=document,$r=Yr.documentElement,qa=Yr.body,_x=[Ai,Yr,$r,qa],yw=Vn.utils.clamp,xx=Vn.core.context||function(){},Co="onpointerenter"in qa?"pointer":"mouse",gx=rn.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_s=rn.eventTypes=("ontouchstart"in $r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in $r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yx=0},500),Af=1),Ya||Sx(),Af};ti.op=gn;ut.cache=0;var rn=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Af||Mx(Vn)||console.warn("Please gsap.registerPlugin(Observer)"),Ya||Sx();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,x=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,M=n.onRight,b=n.onLeft,_=n.onUp,S=n.onDown,w=n.onChangeX,E=n.onChangeY,D=n.onChange,I=n.onToggleX,N=n.onToggleY,P=n.onHover,B=n.onHoverEnd,k=n.onMove,O=n.ignoreCheck,q=n.isNormalizer,U=n.onGestureStart,C=n.onGestureEnd,Z=n.onWheel,ue=n.onEnable,Pe=n.onDisable,Y=n.onClick,le=n.scrollSpeed,_e=n.capture,we=n.allowClicks,de=n.lockAxis,ce=n.onLockAxis;this.target=a=mi(a)||$r,this.vars=n,u&&(u=Vn.utils.toArray(u)),i=i||1e-9,r=r||0,p=p||1,le=le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ai.getComputedStyle(qa).lineHeight)||22);var he,Me,Ce,me,be,je,et,W=this,te=0,Re=0,Be=n.passive||!h&&n.passive!==!1,Oe=mr(a,ti),He=mr(a,gn),tt=Oe(),H=He(),ot=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_s[0]==="pointerdown",Xe=Pc(a),j=a.ownerDocument||Yr,G=[0,0,0],ke=[0,0,0],ve=0,We=function(){return ve=Cc()},L=function(Se,re){return(W.event=Se)&&u&&Mw(Se.target,u)||re&&ot&&Se.pointerType!=="touch"||O&&O(Se,re)},A=function(){W._vx.reset(),W._vy.reset(),Me.pause(),f&&f(W)},X=function(){var Se=W.deltaX=mx(G),re=W.deltaY=mx(ke),oe=Math.abs(Se)>=i,Ie=Math.abs(re)>=i;D&&(oe||Ie)&&D(W,Se,re,G,ke),oe&&(M&&W.deltaX>0&&M(W),b&&W.deltaX<0&&b(W),w&&w(W),I&&W.deltaX<0!=te<0&&I(W),te=W.deltaX,G[0]=G[1]=G[2]=0),Ie&&(S&&W.deltaY>0&&S(W),_&&W.deltaY<0&&_(W),E&&E(W),N&&W.deltaY<0!=Re<0&&N(W),Re=W.deltaY,ke[0]=ke[1]=ke[2]=0),(me||Ce)&&(k&&k(W),Ce&&(m&&Ce===1&&m(W),v&&v(W),Ce=0),me=!1),je&&!(je=!1)&&ce&&ce(W),be&&(Z(W),be=!1),he=0},fe=function(Se,re,oe){G[oe]+=Se,ke[oe]+=re,W._vx.update(Se),W._vy.update(re),c?he||(he=requestAnimationFrame(X)):X()},se=function(Se,re){de&&!et&&(W.axis=et=Math.abs(Se)>Math.abs(re)?"x":"y",je=!0),et!=="y"&&(G[2]+=Se,W._vx.update(Se,!0)),et!=="x"&&(ke[2]+=re,W._vy.update(re,!0)),c?he||(he=requestAnimationFrame(X)):X()},ge=function(Se){if(!L(Se,1)){Se=Rc(Se,h);var re=Se.clientX,oe=Se.clientY,Ie=re-W.x,ae=oe-W.y,Ve=W.isDragging;W.x=re,W.y=oe,(Ve||(Ie||ae)&&(Math.abs(W.startX-re)>=r||Math.abs(W.startY-oe)>=r))&&(Ce||(Ce=Ve?2:1),Ve||(W.isDragging=!0),se(Ie,ae))}},Te=W.onPress=function(xe){L(xe,1)||xe&&xe.button||(W.axis=et=null,Me.pause(),W.isPressed=!0,xe=Rc(xe),te=Re=0,W.startX=W.x=xe.clientX,W.startY=W.y=xe.clientY,W._vx.reset(),W._vy.reset(),pi(q?a:j,_s[1],ge,Be,!0),W.deltaX=W.deltaY=0,T&&T(W))},$=W.onRelease=function(xe){if(!L(xe,1)){di(q?a:j,_s[1],ge,!0);var Se=!isNaN(W.y-W.startY),re=W.isDragging,oe=re&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Ie=Rc(xe);!oe&&Se&&(W._vx.reset(),W._vy.reset(),h&&we&&Vn.delayedCall(.08,function(){if(Cc()-ve>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(j.createEvent){var ae=j.createEvent("MouseEvents");ae.initMouseEvent("click",!0,!0,Ai,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(ae)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&re&&!q&&Me.restart(!0),Ce&&X(),x&&re&&x(W),y&&y(W,oe)}},ne=function(Se){return Se.touches&&Se.touches.length>1&&(W.isGesturing=!0)&&U(Se,W.isDragging)},pe=function(){return(W.isGesturing=!1)||C(W)},z=function(Se){if(!L(Se)){var re=Oe(),oe=He();fe((re-tt)*le,(oe-H)*le,1),tt=re,H=oe,f&&Me.restart(!0)}},ie=function(Se){if(!L(Se)){Se=Rc(Se,h),Z&&(be=!0);var re=(Se.deltaMode===1?l:Se.deltaMode===2?Ai.innerHeight:1)*p;fe(Se.deltaX*re,Se.deltaY*re,0),f&&!q&&Me.restart(!0)}},Q=function(Se){if(!L(Se)){var re=Se.clientX,oe=Se.clientY,Ie=re-W.x,ae=oe-W.y;W.x=re,W.y=oe,me=!0,f&&Me.restart(!0),(Ie||ae)&&se(Ie,ae)}},Ae=function(Se){W.event=Se,P(W)},ye=function(Se){W.event=Se,B(W)},Ee=function(Se){return L(Se)||Rc(Se,h)&&Y(W)};Me=W._dc=Vn.delayedCall(d||.25,A).pause(),W.deltaX=W.deltaY=0,W._vx=Cf(0,50,!0),W._vy=Cf(0,50,!0),W.scrollX=Oe,W.scrollY=He,W.isDragging=W.isGesturing=W.isPressed=!1,xx(this),W.enable=function(xe){return W.isEnabled||(pi(Xe?j:a,"scroll",ym),o.indexOf("scroll")>=0&&pi(Xe?j:a,"scroll",z,Be,_e),o.indexOf("wheel")>=0&&pi(a,"wheel",ie,Be,_e),(o.indexOf("touch")>=0&&gx||o.indexOf("pointer")>=0)&&(pi(a,_s[0],Te,Be,_e),pi(j,_s[2],$),pi(j,_s[3],$),we&&pi(a,"click",We,!0,!0),Y&&pi(a,"click",Ee),U&&pi(j,"gesturestart",ne),C&&pi(j,"gestureend",pe),P&&pi(a,Co+"enter",Ae),B&&pi(a,Co+"leave",ye),k&&pi(a,Co+"move",Q)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=me=Ce=!1,W._vx.reset(),W._vy.reset(),tt=Oe(),H=He(),xe&&xe.type&&Te(xe),ue&&ue(W)),W},W.disable=function(){W.isEnabled&&(Xa.filter(function(xe){return xe!==W&&Pc(xe.target)}).length||di(Xe?j:a,"scroll",ym),W.isPressed&&(W._vx.reset(),W._vy.reset(),di(q?a:j,_s[1],ge,!0)),di(Xe?j:a,"scroll",z,_e),di(a,"wheel",ie,_e),di(a,_s[0],Te,_e),di(j,_s[2],$),di(j,_s[3],$),di(a,"click",We,!0),di(a,"click",Ee),di(j,"gesturestart",ne),di(j,"gestureend",pe),di(a,Co+"enter",Ae),di(a,Co+"leave",ye),di(a,Co+"move",Q),W.isEnabled=W.isPressed=W.isDragging=!1,Pe&&Pe(W))},W.kill=W.revert=function(){W.disable();var xe=Xa.indexOf(W);xe>=0&&Xa.splice(xe,1),pr===W&&(pr=0)},Xa.push(W),q&&Pc(a)&&(pr=W),W.enable(g)},vw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();rn.version="3.15.1";rn.create=function(s){return new rn(s)};rn.register=Mx;rn.getAll=function(){return Xa.slice()};rn.getById=function(s){return Xa.filter(function(e){return e.vars.id===s})[0]};vx()&&Vn.registerPlugin(rn);var qe,Ka,mt,Rt,Hi,At,Nm,Xf,Gc,Fc,Dc,Pf,ni,$f,Am,_i,bx,Tx,Qa,zx,Sm,Hx,gi,Rm,Vx,Gx,Zr,Cm,Um,ja,Om,Jr,Pm,Mm,If=1,ii=Date.now,bm=ii(),is=0,Lc=0,Ex=function(e,t,n){var i=zi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},wx=function(e,t){return t&&(!zi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},bw=function s(){return Lc&&requestAnimationFrame(s)},Ax=function(){return $f=1},Rx=function(){return $f=0},zs=function(e){return e},Nc=function(e){return Math.round(e*1e5)/1e5||0},Wx=function(){return typeof window<"u"},Xx=function(){return qe||Wx()&&(qe=window.gsap)&&qe.registerPlugin&&qe},Uo=function(e){return!!~Nm.indexOf(e)},qx=function(e){return(e==="Height"?Om:mt["inner"+e])||Hi["client"+e]||At["client"+e]},Yx=function(e){return gr(e,"getBoundingClientRect")||(Uo(e)?function(){return Wf.width=mt.innerWidth,Wf.height=Om,Wf}:function(){return _r(e)})},Tw=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=gr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?qx(r):e["client"+r])||0}},Ew=function(e,t){return!t||~xs.indexOf(e)?Yx(e):function(){return Wf}},Hs=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=gr(e,n))?o()-Yx(e)()[r]:Uo(e)?(Hi[n]||At[n])-qx(i):e[n]-e["offset"+i])},Df=function(e,t){for(var n=0;n<Qa.length;n+=3)(!t||~t.indexOf(Qa[n+1]))&&e(Qa[n],Qa[n+1],Qa[n+2])},zi=function(e){return typeof e=="string"},si=function(e){return typeof e=="function"},Uc=function(e){return typeof e=="number"},Po=function(e){return typeof e=="object"},Ic=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},$a=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Za=Math.abs,$x="left",Zx="top",Fm="right",Bm="bottom",Do="width",Lo="height",Bc="Right",kc="Left",zc="Top",Hc="Bottom",_n="padding",ts="margin",tl="Width",km="Height",En="px",ns=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ww=function(e){var t=ns(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_r=function(e,t){var n=t&&ns(e)[Am]!=="matrix(1, 0, 0, 1, 0, 0)"&&qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},qf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jx=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Aw=function(e){return function(t){return qe.utils.snap(Jx(e),t)}},zm=function(e){var t=qe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Rw=function(e){return function(t,n){return zm(Jx(e))(t,n.direction)}},Lf=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Nn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Px={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Uf={toggleActions:"play",anticipatePin:0},Yf={top:0,left:0,center:.5,bottom:1,right:1},zf=function(e,t){if(zi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Yf?Yf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Of=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,p=Rt.createElement("div"),g=Uo(n)||gr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,x=g?At:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===gn?Fm:Bm)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||t===0?e+"-"+t:e,x.children[0]?x.insertBefore(p,x.children[0]):x.appendChild(p),p._offset=p["offset"+i.op.d2],Hf(p,0,i,v),p},Hf=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+tl]=1,r["border"+a+tl]=0,r[n.p]=t+"px",qe.set(e,r)},pt=[],Im={},Wc,Ix=function(){return ii()-is>34&&(Wc||(Wc=requestAnimationFrame(xr)))},Ja=function(){(!gi||!gi.isPressed||gi.startX>At.clientWidth)&&(ut.cache++,gi?Wc||(Wc=requestAnimationFrame(xr)):xr(),is||Fo("scrollStart"),is=ii())},Tm=function(){Gx=mt.innerWidth,Vx=mt.innerHeight},Oc=function(e){ut.cache++,(e===!0||!ni&&!Hx&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!Rm||Gx!==mt.innerWidth||Math.abs(mt.innerHeight-Vx)>mt.innerHeight*.25))&&Xf.restart(!0)},Oo={},Cw=[],Kx=function s(){return Ln(ft,"scrollEnd",s)||Io(!0)},Fo=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||Cw},ki=[],Qx=function(e){for(var t=0;t<ki.length;t+=5)(!e||ki[t+4]&&ki[t+4].query===e)&&(ki[t].style.cssText=ki[t+1],ki[t].getBBox&&ki[t].setAttribute("transform",ki[t+2]||""),ki[t+3].uncache=1)},jx=function(){ut.cache++,ut.forEach(function(e){return si(e)&&(e.rec=e())})},Hm=function(e,t){var n;for(_i=0;_i<pt.length;_i++)n=pt[_i],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Jr=!0,t&&Qx(t),t||Fo("revert")},ev=function(e,t){ut.cache++,(t||!xi)&&ut.forEach(function(n){return si(n)&&n.cacheID++&&(n.rec=0)}),zi(e)&&(Um=e,mt.history.scrollRestoration!==e&&(mt.history.scrollRestoration=e))},xi,No=0,Dx,Pw=function(){if(Dx!==No){var e=Dx=No;requestAnimationFrame(function(){return e===No&&Io(!0)})}},tv=function(){At.appendChild(ja),Om=!gi&&ja.offsetHeight||mt.innerHeight,At.removeChild(ja)},Lx=function(e){return Gc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Io=function(e,t){if(Hi=Rt.documentElement,At=Rt.body,Nm=[mt,Rt,Hi,At],is&&!e&&!Jr){Nn(ft,"scrollEnd",Kx);return}tv(),xi=ft.isRefreshing=!0,Jr||jx();var n=Fo("refreshInit");zx&&ft.sort(),t||Hm(),ut.forEach(function(i){si(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),pt.slice(0).forEach(function(i){return i.refresh()}),Jr=!1,pt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Pm=1,Lx(!0),pt.forEach(function(i){var r=Hs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Lx(!1),Pm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){si(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ev(Um,1),Xf.pause(),No++,xi=2,xr(2),pt.forEach(function(i){return si(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xi=ft.isRefreshing=!1,Fo("refresh")},Dm=0,Vf=1,Vc,xr=function(e){if(e===2||!xi&&!Jr){ft.isUpdating=!0,Vc&&Vc.update(0);var t=pt.length,n=ii(),i=n-bm>=50,r=t&&pt[0].scroll();if(Vf=Dm>r?-1:1,xi||(Dm=r),i&&(is&&!$f&&n-is>200&&(is=0,Fo("scrollEnd")),Dc=bm,bm=n),Vf<0){for(_i=t;_i-- >0;)pt[_i]&&pt[_i].update(0,i);Vf=1}else for(_i=0;_i<t;_i++)pt[_i]&&pt[_i].update(0,i);ft.isUpdating=!1}Wc=0},Lm=[$x,Zx,Bm,Fm,ts+Hc,ts+Bc,ts+zc,ts+kc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gf=Lm.concat([Do,Lo,"boxSizing","max"+tl,"max"+km,"position",ts,_n,_n+zc,_n+Bc,_n+Hc,_n+kc]),Iw=function(e,t,n){el(n);var i=e._gsap;if(i.spacerIsNative)el(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Em=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Lm.length,o=t.style,a=e.style,l;r--;)l=Lm[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Bm]=a[Fm]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Do]=qf(e,ti)+En,o[Lo]=qf(e,gn)+En,o[_n]=a[ts]=a[Zx]=a[$x]="0",el(i),a[Do]=a["max"+tl]=n[Do],a[Lo]=a["max"+km]=n[Lo],a[_n]=n[_n],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Dw=/([A-Z])/g,el=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||qe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Dw,"-$1").toLowerCase())}},Ff=function(e){for(var t=Gf.length,n=e.style,i=[],r=0;r<t;r++)i.push(Gf[r],n[Gf[r]]);return i.t=e,i},Lw=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Wf={left:0,top:0},Nx=function(e,t,n,i,r,o,a,l,c,h,f,d,u,p){si(e)&&(e=e(l)),zi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?zf("0"+e.substr(3),n):0));var g=u?u.time():0,m,x,v;if(u&&u.seek(0),isNaN(e)||(e=+e),Uc(e))u&&(e=qe.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&Hf(a,n,i,!0);else{si(t)&&(t=t(l));var T=(e||"0").split(" "),y,M,b,_;v=mi(t,l)||At,y=_r(v)||{},(!y||!y.left&&!y.top)&&ns(v).display==="none"&&(_=v.style.display,v.style.display="block",y=_r(v),_?v.style.display=_:v.style.removeProperty("display")),M=zf(T[0],y[i.d]),b=zf(T[1]||"0",n),e=y[i.p]-c[i.p]-h+M+r-b,a&&Hf(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=e||-.001,e<0&&(e=0)),o){var S=e+n,w=o._isStart;m="scroll"+i.d2,Hf(o,S,i,w&&S>20||!w&&(f?Math.max(At[m],Hi[m]):o.parentNode[m])<=S+1),f&&(c=_r(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+En))}return u&&v&&(m=_r(v),u.seek(d),x=_r(v),u._caScrollDist=m[i.p]-x[i.p],e=e/u._caScrollDist*d),u&&u.seek(g),u?e:Math.round(e)},Nw=/(webkit|moz|length|cssText|inset)/i,Ux=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===At){e._stOrig=r.cssText,a=ns(e);for(o in a)!+o&&!Nw.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;qe.core.getCache(e).uncache=1,t.appendChild(e)}},nv=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Bf=function(e,t,n){var i={};i[t.p]="+="+n,qe.set(e,i)},Ox=function(e,t){var n=mr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,p={};c=c||n();var g=nv(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=qe.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Nn(e,"wheel",n.wheelHandler),ft.isTouch&&Nn(e,"touchmove",n.wheelHandler),r},ft=(function(){function s(t,n){Ka||s.register(qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cm(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Lc){this.update=this.refresh=this.kill=zs;return}n=Cx(zi(n)||Uc(n)||n.nodeType?{trigger:n}:n,Uf);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,x=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,M=r.pinReparent,b=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,w=r.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ti:gn,D=!f&&f!==0,I=mi(n.scroller||mt),N=qe.core.getCache(I),P=Uo(I),B=("pinType"in n?n.pinType:gr(I,"pinType")||P&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),q="markers"in n?n.markers:Uf.markers,U=P?0:parseFloat(ns(I)["border"+E.p2+tl])||0,C=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ue=Tw(I,P,E),Pe=Ew(I,P),Y=0,le=0,_e=0,we=mr(I,E),de,ce,he,Me,Ce,me,be,je,et,W,te,Re,Be,Oe,He,tt,H,ot,Xe,j,G,ke,ve,We,L,A,X,fe,se,ge,Te,$,ne,pe,z,ie,Q,Ae,ye;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=I,C.scroll=_?_.time.bind(_):we,Me=we(),Jr&&we.rec==null&&(we.rec=Me),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(zx=1,n.refreshPriority===-9999&&(Vc=C)),N.tweenScroll=N.tweenScroll||{top:Ox(I,gn),left:Ox(I,ti)},C.tweenTo=de=N.tweenScroll[E.p],C.scrubDuration=function(oe){ne=Uc(oe)&&oe,ne?$?$.duration(oe):$=qe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return x&&x(C)}}):($&&$.progress(1).kill(),$=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),ge=0,l||(l=i.vars.id)),y&&((!Po(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in At.style&&qe.set(P?[At,Hi]:I,{scrollBehavior:"auto"}),ut.forEach(function(oe){return si(oe)&&oe.target===(P?Rt.scrollingElement||Hi:I)&&(oe.smooth=!1)}),he=si(y.snapTo)?y.snapTo:y.snapTo==="labels"?Aw(i):y.snapTo==="labelsDirectional"?Rw(i):y.directional!==!1?function(oe,Ie){return zm(y.snapTo)(oe,ii()-le<500?0:Ie.direction)}:qe.utils.snap(y.snapTo),pe=y.duration||{min:.1,max:2},pe=Po(pe)?Fc(pe.min,pe.max):Fc(pe,pe),z=qe.delayedCall(y.delay||ne/2||.1,function(){var oe=we(),Ie=ii()-le<500,ae=de.tween;if((Ie||Math.abs(C.getVelocity())<10)&&!ae&&!$f&&Y!==oe){var Ve=(oe-me)/Oe,_t=i&&!D?i.totalProgress():Ve,at=Ie?0:(_t-Te)/(ii()-Dc)*1e3||0,Bt=qe.utils.clamp(-Ve,1-Ve,Za(at/2)*at/.185),un=Ve+(y.inertia===!1?0:Bt),kt,Dt,wt=y,xn=wt.onStart,Lt=wt.onInterrupt,Gn=wt.onComplete;if(kt=he(un,C),Uc(kt)||(kt=un),Dt=Math.max(0,Math.round(me+kt*Oe)),oe<=be&&oe>=me&&Dt!==oe){if(ae&&!ae._initted&&ae.data<=Za(Dt-oe))return;y.inertia===!1&&(Bt=kt-Ve),de(Dt,{duration:pe(Za(Math.max(Za(un-_t),Za(kt-_t))*.185/at/.05||0)),ease:y.ease||"power3",data:Za(Dt-oe),onInterrupt:function(){return z.restart(!0)&&Lt&&$a(C,Lt)},onComplete:function(){C.update(),Y=we(),i&&!D&&($?$.resetTo("totalProgress",kt,i._tTime/i._tDur):i.progress(kt)),ge=Te=i&&!D?i.totalProgress():C.progress,v&&v(C),Gn&&$a(C,Gn)}},oe,Bt*Oe,Dt-oe-Bt*Oe),xn&&$a(C,xn,de.tween)}}else C.isActive&&Y!==oe&&z.restart(!0)}).pause()),l&&(Im[l]=C),d=C.trigger=mi(d||u!==!0&&u),ye=d&&d._gsap&&d._gsap.stRevert,ye&&(ye=ye(C)),u=u===!0?d:mi(u),zi(a)&&(a={targets:d,className:a}),u&&(p===!1||p===ts||(p=!p&&u.parentNode&&u.parentNode.style&&ns(u.parentNode).display==="flex"?!1:_n),C.pin=u,ce=qe.core.getCache(u),ce.spacer?He=ce.pinState:(b&&(b=mi(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ce.spacerIsNative=!!b,b&&(ce.spacerState=Ff(b))),ce.spacer=ot=b||Rt.createElement("div"),ot.classList.add("pin-spacer"),l&&ot.classList.add("pin-spacer-"+l),ce.pinState=He=Ff(u)),n.force3D!==!1&&qe.set(u,{force3D:!0}),C.spacer=ot=ce.spacer,se=ns(u),We=se[p+E.os2],j=qe.getProperty(u),G=qe.quickSetter(u,E.a,En),Em(u,ot,se),H=Ff(u)),q){Re=Po(q)?Cx(q,Px):Px,W=Of("scroller-start",l,I,E,Re,0),te=Of("scroller-end",l,I,E,Re,0,W),Xe=W["offset"+E.op.d2];var Ee=mi(gr(I,"content")||I);je=this.markerStart=Of("start",l,Ee,E,Re,Xe,0,_),et=this.markerEnd=Of("end",l,Ee,E,Re,Xe,0,_),_&&(Ae=qe.quickSetter([je,et],E.a,En)),!B&&!(xs.length&&gr(I,"fixedMarkers")===!0)&&(ww(P?At:I),qe.set([W,te],{force3D:!0}),A=qe.quickSetter(W,E.a,En),fe=qe.quickSetter(te,E.a,En))}if(_){var xe=_.vars.onUpdate,Se=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){C.update(0,0,1),xe&&xe.apply(_,Se||[])})}if(C.previous=function(){return pt[pt.indexOf(C)-1]},C.next=function(){return pt[pt.indexOf(C)+1]},C.revert=function(oe,Ie){if(!Ie)return C.kill(!0);var ae=oe!==!1||!C.enabled,Ve=ni;ae!==C.isReverted&&(ae&&(ie=Math.max(we(),C.scroll.rec||0),_e=C.progress,Q=i&&i.progress()),je&&[je,et,W,te].forEach(function(_t){return _t.style.display=ae?"none":"block"}),ae&&(ni=C,C.update(ae)),u&&(!M||!C.isActive)&&(ae?Iw(u,ot,He):Em(u,ot,ns(u),L)),ae||C.update(ae),ni=Ve,C.isReverted=ae)},C.refresh=function(oe,Ie,ae,Ve){if(!((ni||!C.enabled)&&!Ie)){if(u&&oe&&is){Nn(s,"scrollEnd",Kx);return}!xi&&Z&&Z(C),ni=C,de.tween&&!ae&&(de.tween.kill(),de.tween=0),$&&$.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(J){return J.vars.immediateRender&&J.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var _t=ue(),at=Pe(),Bt=_?_.duration():Hs(I,E),un=Oe<=.01||!Oe,kt=0,Dt=Ve||0,wt=Po(ae)?ae.end:n.end,xn=n.endTrigger||d,Lt=Po(ae)?ae.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),Gn=C.pinnedContainer=n.pinnedContainer&&mi(n.pinnedContainer,C),Ri=d&&Math.max(0,pt.indexOf(C))||0,Kt=Ri,fn,vn,Ci,Ho,yn,Qt,Xi,al,Qc,Sr,R,V,ee;for(q&&Po(ae)&&(V=qe.getProperty(W,E.p),ee=qe.getProperty(te,E.p));Kt-- >0;)Qt=pt[Kt],Qt.end||Qt.refresh(0,1)||(ni=C),Xi=Qt.pin,Xi&&(Xi===d||Xi===u||Xi===Gn)&&!Qt.isReverted&&(Sr||(Sr=[]),Sr.unshift(Qt),Qt.revert(!0,!0)),Qt!==pt[Kt]&&(Ri--,Kt--);for(si(Lt)&&(Lt=Lt(C)),Lt=Ex(Lt,"start",C),me=Nx(Lt,d,_t,E,we(),je,W,C,at,U,B,Bt,_,C._startClamp&&"_startClamp")||(u?-.001:0),si(wt)&&(wt=wt(C)),zi(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(zi(Lt)?Lt.split(" ")[0]:"")+wt:(kt=zf(wt.substr(2),_t),wt=zi(Lt)?Lt:(_?qe.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,me):me)+kt,xn=d)),wt=Ex(wt,"end",C),be=Math.max(me,Nx(wt||(xn?"100% 0":Bt),xn,_t,E,we()+kt,et,te,C,at,U,B,Bt,_,C._endClamp&&"_endClamp"))||-.001,kt=0,Kt=Ri;Kt--;)Qt=pt[Kt]||{},Xi=Qt.pin,Xi&&Qt.start-Qt._pinPush<=me&&!_&&Qt.end>0&&(fn=Qt.end-(C._startClamp?Math.max(0,Qt.start):Qt.start),(Xi===d&&Qt.start-Qt._pinPush<me||Xi===Gn)&&isNaN(Lt)&&(kt+=fn*(1-Qt.progress)),Xi===u&&(Dt+=fn));if(me+=kt,be+=kt,C._startClamp&&(C._startClamp+=kt),C._endClamp&&!xi&&(C._endClamp=be||-.001,be=Math.min(be,Hs(I,E))),Oe=be-me||(me-=.01)&&.001,un&&(_e=qe.utils.clamp(0,1,qe.utils.normalize(me,be,ie))),C._pinPush=Dt,je&&kt&&(fn={},fn[E.a]="+="+kt,Gn&&(fn[E.p]="-="+we()),qe.set([je,et],fn)),u&&!(Pm&&C.end>=Hs(I,E)))fn=ns(u),Ho=E===gn,Ci=we(),ke=parseFloat(j(E.a))+Dt,!Bt&&be>1&&(R=(P?Rt.scrollingElement||Hi:I).style,R={style:R,value:R["overflow"+E.a.toUpperCase()]},P&&ns(At)["overflow"+E.a.toUpperCase()]!=="scroll"&&(R.style["overflow"+E.a.toUpperCase()]="scroll")),Em(u,ot,fn),H=Ff(u),vn=_r(u,!0),al=B&&mr(I,Ho?ti:gn)(),p?(L=[p+E.os2,Oe+Dt+En],L.t=ot,Kt=p===_n?qf(u,E)+Oe+Dt:0,Kt&&(L.push(E.d,Kt+En),ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=Kt+En)),el(L),Gn&&pt.forEach(function(J){J.pin===Gn&&J.vars.pinSpacing!==!1&&(J._subPinOffset=!0)}),B&&we(ie)):(Kt=qf(u,E),Kt&&ot.style.flexBasis!=="auto"&&(ot.style.flexBasis=Kt+En)),B&&(yn={top:vn.top+(Ho?Ci-me:al)+En,left:vn.left+(Ho?al:Ci-me)+En,boxSizing:"border-box",position:"fixed"},yn[Do]=yn["max"+tl]=Math.ceil(vn.width)+En,yn[Lo]=yn["max"+km]=Math.ceil(vn.height)+En,yn[ts]=yn[ts+zc]=yn[ts+Bc]=yn[ts+Hc]=yn[ts+kc]="0",yn[_n]=fn[_n],yn[_n+zc]=fn[_n+zc],yn[_n+Bc]=fn[_n+Bc],yn[_n+Hc]=fn[_n+Hc],yn[_n+kc]=fn[_n+kc],tt=Lw(He,yn,M),xi&&we(0)),i?(Qc=i._initted,Sm(1),i.render(i.duration(),!0,!0),ve=j(E.a)-ke+Oe+Dt,X=Math.abs(Oe-ve)>1,B&&X&&tt.splice(tt.length-2,2),i.render(0,!0,!0),Qc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Sm(0)):ve=Oe,R&&(R.value?R.style["overflow"+E.a.toUpperCase()]=R.value:R.style.removeProperty("overflow-"+E.a));else if(d&&we()&&!_)for(vn=d.parentNode;vn&&vn!==At;)vn._pinOffset&&(me-=vn._pinOffset,be-=vn._pinOffset),vn=vn.parentNode;Sr&&Sr.forEach(function(J){return J.revert(!1,!0)}),C.start=me,C.end=be,Me=Ce=xi?ie:we(),!_&&!xi&&!Jr&&(Me<ie&&we(ie),C.scroll.rec=0),C.revert(!1,!0),le=ii(),z&&(Y=-1,z.restart(!0)),ni=0,i&&D&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(un||_e!==C.progress||_||g||i&&!i._initted)&&(i&&!D&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(_&&me<-.001&&!_e?qe.utils.normalize(me,be,0):_e,!0),C.progress=un||(Me-me)/Oe===_e?0:_e),u&&p&&(ot._pinOffset=Math.round(C.progress*ve)),$&&$.invalidate(),isNaN(V)||(V-=qe.getProperty(W,E.p),ee-=qe.getProperty(te,E.p),Bf(W,E,V),Bf(je,E,V-(Ve||0)),Bf(te,E,ee),Bf(et,E,ee-(Ve||0))),un&&!xi&&C.update(),h&&!xi&&!Be&&(Be=!0,h(C),Be=!1)}},C.getVelocity=function(){return(we()-Ce)/(ii()-Dc)*1e3||0},C.endAnimation=function(){Ic(C.callbackAnimation),i&&($?$.progress(1):i.paused()?D||Ic(i,C.direction<0,1):Ic(i,i.reversed()))},C.labelToScroll=function(oe){return i&&i.labels&&(me||C.refresh()||me)+i.labels[oe]/i.duration()*Oe||0},C.getTrailing=function(oe){var Ie=pt.indexOf(C),ae=C.direction>0?pt.slice(0,Ie).reverse():pt.slice(Ie+1);return(zi(oe)?ae.filter(function(Ve){return Ve.vars.preventOverlaps===oe}):ae).filter(function(Ve){return C.direction>0?Ve.end<=me:Ve.start>=be})},C.update=function(oe,Ie,ae){if(!(_&&!ae&&!oe)){var Ve=xi===!0?ie:C.scroll(),_t=oe?0:(Ve-me)/Oe,at=_t<0?0:_t>1?1:_t||0,Bt=C.progress,un,kt,Dt,wt,xn,Lt,Gn,Ri;if(Ie&&(Ce=Me,Me=_?we():Ve,y&&(Te=ge,ge=i&&!D?i.totalProgress():at)),m&&u&&!ni&&!If&&is&&(!at&&me<Ve+(Ve-Ce)/(ii()-Dc)*m?at=1e-4:at===1&&be>Ve+(Ve-Ce)/(ii()-Dc)*m&&(at=.9999)),at!==Bt&&C.enabled){if(un=C.isActive=!!at&&at<1,kt=!!Bt&&Bt<1,Lt=un!==kt,xn=Lt||!!at!=!!Bt,C.direction=at>Bt?1:-1,C.progress=at,xn&&!ni&&(Dt=at&&!Bt?0:at===1?1:Bt===1?2:3,D&&(wt=!Lt&&O[Dt+1]!=="none"&&O[Dt+1]||O[Dt],Ri=i&&(wt==="complete"||wt==="reset"||wt in i))),w&&(Lt||Ri)&&(Ri||f||!i)&&(si(w)?w(C):C.getTrailing(w).forEach(function(Ci){return Ci.endAnimation()})),D||($&&!ni&&!If?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",at,i._tTime/i._tDur):($.vars.totalProgress=at,$.invalidate().restart())):i&&i.totalProgress(at,!!(ni&&(le||oe)))),u){if(oe&&p&&(ot.style[p+E.os2]=We),!B)G(Nc(ke+ve*at));else if(xn){if(Gn=!oe&&at>Bt&&be+1>Ve&&Ve+1>=Hs(I,E),M)if(!oe&&(un||Gn)){var Kt=_r(u,!0),fn=Ve-me;Ux(u,At,Kt.top+(E===gn?fn:0)+En,Kt.left+(E===gn?0:fn)+En)}else Ux(u,ot);el(un||Gn?tt:H),X&&at<1&&un||G(ke+(at===1&&!Gn?ve:0))}}y&&!de.tween&&!ni&&!If&&z.restart(!0),a&&(Lt||T&&at&&(at<1||!Mm))&&Gc(a.targets).forEach(function(Ci){return Ci.classList[un||T?"add":"remove"](a.className)}),o&&!D&&!oe&&o(C),xn&&!ni?(D&&(Ri&&(wt==="complete"?i.pause().totalProgress(1):wt==="reset"?i.restart(!0).pause():wt==="restart"?i.restart(!0):i[wt]()),o&&o(C)),(Lt||!Mm)&&(c&&Lt&&$a(C,c),k[Dt]&&$a(C,k[Dt]),T&&(at===1?C.kill(!1,1):k[Dt]=0),Lt||(Dt=at===1?1:3,k[Dt]&&$a(C,k[Dt]))),S&&!un&&Math.abs(C.getVelocity())>(Uc(S)?S:2500)&&(Ic(C.callbackAnimation),$?$.progress(1):Ic(i,wt==="reverse"?1:!at,1))):D&&o&&!ni&&o(C)}if(fe){var vn=_?Ve/_.duration()*(_._caScrollDist||0):Ve;A(vn+(W._isFlipped?1:0)),fe(vn)}Ae&&Ae(-Ve/_.duration()*(_._caScrollDist||0))}},C.enable=function(oe,Ie){C.enabled||(C.enabled=!0,Nn(I,"resize",Oc),P||Nn(I,"scroll",Ja),Z&&Nn(s,"refreshInit",Z),oe!==!1&&(C.progress=_e=0,Me=Ce=Y=we()),Ie!==!1&&C.refresh())},C.getTween=function(oe){return oe&&de?de.tween:$},C.setPositions=function(oe,Ie,ae,Ve){if(_){var _t=_.scrollTrigger,at=_.duration(),Bt=_t.end-_t.start;oe=_t.start+Bt*oe/at,Ie=_t.start+Bt*Ie/at}C.refresh(!1,!1,{start:wx(oe,ae&&!!C._startClamp),end:wx(Ie,ae&&!!C._endClamp)},Ve),C.update()},C.adjustPinSpacing=function(oe){if(L&&oe){var Ie=L.indexOf(E.d)+1;L[Ie]=parseFloat(L[Ie])+oe+En,L[1]=parseFloat(L[1])+oe+En,el(L)}},C.disable=function(oe,Ie){if(oe!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ie||$&&$.pause(),ie=0,ce&&(ce.uncache=1),Z&&Ln(s,"refreshInit",Z),z&&(z.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!P)){for(var ae=pt.length;ae--;)if(pt[ae].scroller===I&&pt[ae]!==C)return;Ln(I,"resize",Oc),P||Ln(I,"scroll",Ja)}},C.kill=function(oe,Ie){C.disable(oe,Ie),$&&!Ie&&$.kill(),l&&delete Im[l];var ae=pt.indexOf(C);ae>=0&&pt.splice(ae,1),ae===_i&&Vf>0&&_i--,ae=0,pt.forEach(function(Ve){return Ve.scroller===C.scroller&&(ae=1)}),ae||xi||Jr||(C.scroll.rec=0),i&&(i.scrollTrigger=null,oe&&i.revert({kill:!1}),Ie||i.kill()),je&&[je,et,W,te].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),Vc===C&&(Vc=0),u&&(ce&&(ce.uncache=1),ae=0,pt.forEach(function(Ve){return Ve.pin===u&&ae++}),ae||(ce.spacer=0)),n.onKill&&n.onKill(C)},pt.push(C),C.enable(!1,!1),ye&&ye(C),i&&i.add&&!Oe){var re=C.update;C.update=function(){C.update=re,ut.cache++,me||be||C.refresh()},qe.delayedCall(.01,C.update),Oe=.01,me=be=0}else C.refresh();u&&Pw()},s.register=function(n){return Ka||(qe=n||Xx(),Wx()&&window.document&&s.enable(),Ka=Lc),Ka},s.defaults=function(n){if(n)for(var i in n)Uf[i]=n[i];return Uf},s.disable=function(n,i){Lc=0,pt.forEach(function(o){return o[i?"kill":"disable"](n)}),Ln(mt,"wheel",Ja),Ln(Rt,"scroll",Ja),clearInterval(Pf),Ln(Rt,"touchcancel",zs),Ln(At,"touchstart",zs),Lf(Ln,Rt,"pointerdown,touchstart,mousedown",Ax),Lf(Ln,Rt,"pointerup,touchend,mouseup",Rx),Xf.kill(),Df(Ln);for(var r=0;r<ut.length;r+=3)Nf(Ln,ut[r],ut[r+1]),Nf(Ln,ut[r],ut[r+2])},s.enable=function(){if(mt=window,Rt=document,Hi=Rt.documentElement,At=Rt.body,qe){if(Gc=qe.utils.toArray,Fc=qe.utils.clamp,Cm=qe.core.context||zs,Sm=qe.core.suppressOverwrites||zs,Um=mt.history.scrollRestoration||"auto",Dm=mt.pageYOffset||0,qe.core.globals("ScrollTrigger",s),At){Lc=1,ja=document.createElement("div"),ja.style.height="100vh",ja.style.position="absolute",tv(),bw(),rn.register(qe),s.isTouch=rn.isTouch,Zr=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Rm=rn.isTouch===1,Nn(mt,"wheel",Ja),Nm=[mt,Rt,Hi,At],qe.matchMedia?(s.matchMedia=function(h){var f=qe.matchMedia(),d;for(d in h)f.add(d,h[d]);return f},qe.addEventListener("matchMediaInit",function(){jx(),Hm()}),qe.addEventListener("matchMediaRevert",function(){return Qx()}),qe.addEventListener("matchMedia",function(){Io(0,1),Fo("matchMedia")}),qe.matchMedia().add("(orientation: portrait)",function(){return Tm(),Tm})):console.warn("Requires GSAP 3.11.0 or later"),Tm(),Nn(Rt,"scroll",Ja);var n=At.hasAttribute("style"),i=At.style,r=i.borderTopStyle,o=qe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=_r(At),gn.m=Math.round(a.top+gn.sc())||0,ti.m=Math.round(a.left+ti.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),Pf=setInterval(Ix,250),qe.delayedCall(.5,function(){return If=0}),Nn(Rt,"touchcancel",zs),Nn(At,"touchstart",zs),Lf(Nn,Rt,"pointerdown,touchstart,mousedown",Ax),Lf(Nn,Rt,"pointerup,touchend,mouseup",Rx),Am=qe.utils.checkPrefix("transform"),Gf.push(Am),Ka=ii(),Xf=qe.delayedCall(.2,Io).pause(),Qa=[Rt,"visibilitychange",function(){var h=mt.innerWidth,f=mt.innerHeight;Rt.hidden?(bx=h,Tx=f):(bx!==h||Tx!==f)&&Oc()},Rt,"DOMContentLoaded",Io,mt,"load",Io,mt,"resize",Oc],Df(Nn),pt.forEach(function(h){return h.enable(0,1)}),l=0;l<ut.length;l+=3)Nf(Ln,ut[l],ut[l+1]),Nf(Ln,ut[l],ut[l+2])}else if(Rt){var c=function h(){s.enable(),Rt.removeEventListener("DOMContentLoaded",h)};Rt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Mm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Pf)||(Pf=i)&&setInterval(Ix,i),"ignoreMobileResize"in n&&(Rm=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Df(Ln)||Df(Nn,n.autoRefreshEvents||"none"),Hx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=mi(n),o=ut.indexOf(r),a=Uo(r);~o&&ut.splice(o,a?6:2),i&&(a?xs.unshift(mt,i,At,i,Hi,i):xs.unshift(r,i))},s.clearMatchMedia=function(n){pt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(zi(n)?mi(n):n).getBoundingClientRect(),a=o[r?Do:Lo]*i||0;return r?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},s.positionInViewport=function(n,i,r){zi(n)&&(n=mi(n));var o=n.getBoundingClientRect(),a=o[r?Do:Lo],l=i==null?a/2:i in Yf?Yf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},s.killAll=function(n){if(pt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Oo.killAll||[];Oo={},i.forEach(function(r){return r()})}},s})();ft.version="3.15.1";ft.saveStyles=function(s){return s?Gc(s).forEach(function(e){if(e&&e.style){var t=ki.indexOf(e);t>=0&&ki.splice(t,5),ki.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),qe.core.getCache(e),Cm())}}):ki};ft.revert=function(s,e){return Hm(!s,e)};ft.create=function(s,e){return new ft(s,e)};ft.refresh=function(s){return s?Oc(!0):(Ka||ft.register())&&Io(!0)};ft.update=function(s){return++ut.cache&&xr(s===!0?2:0)};ft.clearScrollMemory=ev;ft.maxScroll=function(s,e){return Hs(s,e?ti:gn)};ft.getScrollFunc=function(s,e){return mr(mi(s),e?ti:gn)};ft.getById=function(s){return Im[s]};ft.getAll=function(){return pt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!is};ft.snapDirectional=zm;ft.addEventListener=function(s,e){var t=Oo[s]||(Oo[s]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(s,e){var t=Oo[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=qe.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(p){f.length||u.restart(!0),f.push(p.trigger),d.push(p),r<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&si(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return si(r)&&(r=r(),Nn(ft,"refresh",function(){return r=e.batchMax()})),Gc(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ft.create(c))}),t};var Fx=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},wm=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Hi&&s(At,t)},kf={auto:1,scroll:1},Uw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||qe.core.getCache(r),a=ii(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(kf[(l=ns(r)).overflowY]||kf[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Uo(r)&&(kf[(l=ns(r)).overflowY]||kf[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},iv=function(e,t,n,i){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Uw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Nn(Rt,rn.eventTypes[0],kx,!1,!0)},onDisable:function(){return Ln(Rt,rn.eventTypes[0],kx,!0)}})},Ow=/(input|label|select|textarea)/i,Bx,kx=function(e){var t=Ow.test(e.target.tagName);(t||Bx)&&(e._gsapAllow=!0,Bx=t)},Fw=function(e){Po(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=mi(e.target)||Hi,h=qe.core.globals().ScrollSmoother,f=h&&h.get(),d=Zr&&(e.content&&mi(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=mr(c,gn),p=mr(c,ti),g=1,m=(rn.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,x=0,v=si(i)?function(){return i(a)}:function(){return i||2.8},T,y,M=iv(c,e.type,!0,r),b=function(){return y=!1},_=zs,S=zs,w=function(){l=Hs(c,gn),S=Fc(Zr?1:0,l),n&&(_=Fc(0,Hs(c,ti))),T=No},E=function(){d._gsap.y=Nc(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(b);var q=Nc(a.deltaY/2),U=S(u.v-q);if(d&&U!==u.v+u.offset){u.offset=U-u.v;var C=Nc((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",u.cacheID=ut.cache,xr()}return!0}u.offset&&E(),y=!0},I,N,P,B,k=function(){w(),I.isActive()&&I.vars.scrollY>l&&(u()>l?I.progress(1)&&u(l):I.resetTo("scrollY",l))};return d&&qe.set(d,{y:"+=0"}),e.ignoreCheck=function(O){return Zr&&O.type==="touchmove"&&D(O)||g>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=g;g=Nc((mt.visualViewport&&mt.visualViewport.scale||1)/m),I.pause(),O!==g&&wm(c,g>1.01?!0:n?!1:"x"),N=p(),P=u(),w(),T=No},e.onRelease=e.onGestureStart=function(O,q){if(u.offset&&E(),!q)B.restart(!0);else{ut.cache++;var U=v(),C,Z;n&&(C=p(),Z=C+U*.05*-O.velocityX/.227,U*=Fx(p,C,Z,Hs(c,ti)),I.vars.scrollX=_(Z)),C=u(),Z=C+U*.05*-O.velocityY/.227,U*=Fx(u,C,Z,Hs(c,gn)),I.vars.scrollY=S(Z),I.invalidate().duration(U).play(.01),(Zr&&I.vars.scrollY>=l||C>=l-1)&&qe.to({},{onUpdate:k,duration:U})}o&&o(O)},e.onWheel=function(){I._ts&&I.pause(),ii()-x>1e3&&(T=0,x=ii())},e.onChange=function(O,q,U,C,Z){if(No!==T&&w(),q&&n&&p(_(C[2]===q?N+(O.startX-O.x):p()+q-C[1])),U){u.offset&&E();var ue=Z[2]===U,Pe=ue?P+O.startY-O.y:u()+U-Z[1],Y=S(Pe);ue&&Pe!==Y&&(P+=Y-Pe),u(Y)}(U||q)&&xr()},e.onEnable=function(){wm(c,n?!1:"x"),ft.addEventListener("refresh",k),Nn(mt,"resize",k),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),M.enable()},e.onDisable=function(){wm(c,!0),Ln(mt,"resize",k),ft.removeEventListener("refresh",k),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=Zr,Zr&&!u()&&u(1),Zr&&qe.ticker.add(zs),B=a._dc,I=qe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:nv(u,u(),function(){return I.pause()})},onUpdate:xr,onComplete:B.vars.onComplete}),a};ft.sort=function(s){if(si(s))return pt.sort(s);var e=mt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+mt.innerHeight}),pt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(s){return new rn(s)};ft.normalizeScroll=function(s){if(typeof s>"u")return gi;if(s===!0&&gi)return gi.enable();if(s===!1){gi&&gi.kill(),gi=s;return}var e=s instanceof rn?s:Fw(s);return gi&&gi.target===e.target&&gi.kill(),Uo(e.target)&&(gi=e),e};ft.core={_getVelocityProp:Cf,_inputObserver:iv,_scrollers:ut,_proxies:xs,bridge:{ss:function(){is||Fo("scrollStart"),is=ii()},ref:function(){return ni}}};Xx()&&qe.registerPlugin(ft);var Xc,qc,sv=typeof Symbol=="function"?Symbol():"_split",Gm,Bw=()=>Gm||Kf.register(window.gsap),rv=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Yc=s=>s?typeof s=="string"?Yc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...Yc(t)):e.push(t),e),[]):[s]:[],ov=s=>Yc(s).filter(e=>e&&e.nodeType===1),Zf=[],Vm=function(){},kw={add:s=>s()},zw=/\s+/g,av=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Jf={left:0,top:0,width:0,height:0},Hw=(s,e)=>{for(;++e<s.length&&s[e]===Jf;);return s[e]||Jf},lv=({element:s,html:e,ariaL:t,ariaH:n})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},cv=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||Zf),n=s.length,i,r,o,a;if(t.size)for(;--n>-1;){r=s[n];for(o of t)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},hv=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),nl=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),Wm=(s,e,t)=>{let n=e[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=e,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let f=document.createElement(i),d=t.length+1;return n&&(f.className=n+(l?" "+n+d:"")),o&&f.style.setProperty("--"+s,d+""),r!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=h,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},Vw=(s,e,t,n)=>{let i=Wm("line",t,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},uv=(s,e,t,n,i,r,o,a,l,c)=>{var h;let f=Array.from(s.childNodes),d=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:g}=e,m=s.getBoundingClientRect(),x=m,v=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",T=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,M=t.collection,b,_,S,w,E,D,I,N,P,B,k,O,q,U,C,Z,ue,Pe;for(typeof u=="object"?(S=u.delimiter||u,_=u.replaceWith||""):_=u===""?"":u||" ",b=_!==" ";d<f.length;d++)if(w=f[d],w.nodeType===3){for(C=w.textContent||"",p?C=C.replace(zw," "):v&&(C=C.replace(/\n/g,_+`
`)),g&&(C=g(C,s)),w.textContent=C,E=_||S?C.split(S||_):C.match(a)||Zf,ue=E[E.length-1],N=b?ue.slice(-1)===" ":!ue,ue||E.pop(),x=m,I=b?E[0].charAt(0)===" ":!E[0],I&&nl(" ",s,w),E[0]||E.shift(),cv(E,l),r&&c||(w.textContent=""),P=1;P<=E.length;P++)if(Z=E[P-1],!p&&v&&Z.charAt(0)===`
`&&((h=w.previousSibling)==null||h.remove(),nl(document.createElement("br"),s,w),Z=Z.slice(1)),!p&&Z==="")nl(_,s,w);else if(Z===" ")s.insertBefore(document.createTextNode(" "),w);else{if(b&&Z.charAt(0)===" "&&nl(" ",s,w),y&&P===1&&!I&&M.indexOf(y.parentNode)>-1?(D=M[M.length-1],D.appendChild(document.createTextNode(n?"":Z))):(D=t(n?"":Z),nl(D,s,w),y&&P===1&&!I&&D.insertBefore(y,D.firstChild)),n){if(k=rv?cv([...rv.segment(Z)].map(Y=>Y.segment),l):Z.match(a)||Zf,l){let Y=Z.match(l);Y&&Y.some(le=>k.indexOf(le)<0)&&(k=Z.match(a)||Zf)}for(Pe=0;Pe<k.length;Pe++)D.appendChild(k[Pe]===" "?document.createTextNode(" "):n(k[Pe]))}if(r&&c){if(C=w.textContent=C.substring(Z.length+1,C.length),B=D.getBoundingClientRect(),B.top>x.top&&(T?B.left>=x.left:B.left<=x.left)){for(O=s.cloneNode(),q=s.childNodes[0];q&&q!==D;)U=q,q=q.nextSibling,O.appendChild(U);s.parentNode.insertBefore(O,s),i&&hv(O)}x=B}(P<E.length||N)&&nl(P>=E.length?" ":b&&Z.slice(-1)===" "?" "+_:_,s,w)}s.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(M.indexOf(w.previousSibling)>-1&&M[M.length-1].appendChild(w),y=w):(uv(w,e,t,n,i,r,o,a,l,!0),y=0),i&&hv(w))},fv=class dv{constructor(e,t){this.isSplit=!1,Bw(),this.elements=ov(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(r=>{var o;t.overwrite!==!1&&((o=r[sv])==null||o._data.orig.filter(({element:a})=>a===r).forEach(lv)),r[sv]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Vm(this),this.split(t)}split(e){return(this._ctx||kw).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,d=t.indexOf("words")>-1,u=f&&!d&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=p?new RegExp(p.source+"|"+av.source,"gu"):av,m=!!e.ignore&&ov(e.ignore),{orig:x,animTime:v,obs:T}=this._data,y;(f||d||h)&&(this.elements.forEach((M,b)=>{x[b]={element:M,html:M.innerHTML,ariaL:M.getAttribute("aria-label"),ariaH:M.getAttribute("aria-hidden")},n==="auto"?M.setAttribute("aria-label",(M.textContent||"").trim()):n==="hidden"&&M.setAttribute("aria-hidden","true");let _=[],S=[],w=[],E=f?Wm("char",e,_):null,D=Wm("word",e,S),I,N,P,B;if(uv(M,e,D,E,u,i&&(h||u),m,g,p,!1),h){let k=Yc(M.childNodes),O=Vw(M,k,e,w),q,U=[],C=0,Z=window.getComputedStyle(M).direction==="rtl",ue=k.map(le=>le.nodeType===1?le.getBoundingClientRect():Jf),Pe=Jf,Y;for(I=0;I<k.length;I++)q=k[I],q.nodeType===1&&(q.nodeName==="BR"?((!I||k[I-1].nodeName!=="BR")&&(U.push(q),O(C,I+1)),C=I+1,Pe=Hw(ue,I)):(Y=ue[I],I&&Y.top>Pe.top&&(Z?Y.left+Y.width>Pe.left+1:Y.left<Pe.left+Pe.width-1)&&(O(C,I),C=I),Pe=Y));C<I&&O(C,I),U.forEach(le=>{var _e;return(_e=le.parentNode)==null?void 0:_e.removeChild(le)})}if(!d){for(I=0;I<S.length;I++)if(N=S[I],f||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!h){for(P=document.createElement("span"),P.style.whiteSpace="nowrap";N.firstChild;)P.appendChild(N.firstChild);N.replaceWith(P)}else N.replaceWith(...N.childNodes);else B=N.nextSibling,B&&B.nodeType===3&&(B.textContent=(N.textContent||"")+(B.textContent||""),N.remove());S.length=0,M.normalize()}this.lines.push(...w),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(M=>{let b=M.cloneNode();return M.replaceWith(b),b.appendChild(M),M.className&&(b.className=M.className.trim().split(" ").map(_=>_+"-mask").join(" ")),b.style.overflow="clip",b.style.verticalAlign="top",b}))),this.isSplit=!0,qc&&h&&a&&qc.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((M,b)=>{x[b].width=M.offsetWidth,T&&T.observe(M)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),qc?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(lv),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new dv(e,t)}static register(e){Xc=Xc||e||window.gsap,Xc&&(Yc=Xc.utils.toArray,Vm=Xc.core.context||Vm),!Gm&&window.innerWidth>0&&(qc=document.fonts,Gm=!0)}};fv.version="3.15.1";var Kf=fv;var pv="1.3.28";function _v(s,e,t){return Math.max(s,Math.min(e,t))}function Gw(s,e,t){return(1-t)*s+t*e}function Ww(s,e,t,n){return Gw(s,e,1-Math.exp(-t*n))}function Xw(s,e){return(s%e+e)%e}var qw=class{constructor(){$e(this,"isRunning",!1);$e(this,"value",0);$e(this,"from",0);$e(this,"to",0);$e(this,"currentTime",0);$e(this,"lerp");$e(this,"duration");$e(this,"easing");$e(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=_v(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Ww(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Yw(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var $w=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){$e(this,"wrapper");$e(this,"content");$e(this,"width",0);$e(this,"height",0);$e(this,"scrollHeight",0);$e(this,"scrollWidth",0);$e(this,"debouncedResize");$e(this,"wrapperResizeObserver");$e(this,"contentResizeObserver");$e(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});$e(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});$e(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Yw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xv=class{constructor(){$e(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Zw=100/6,Kr={passive:!1};function mv(s,e){return s===1?Zw:s===2?e:1}var Jw=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){$e(this,"element");$e(this,"options");$e(this,"touchStart",{x:0,y:0});$e(this,"lastDelta",{x:0,y:0});$e(this,"window",{width:0,height:0});$e(this,"emitter",new xv);$e(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});$e(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});$e(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});$e(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s,i=mv(n,this.window.width),r=mv(n,this.window.height);e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});$e(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Kr),this.element.addEventListener("touchstart",this.onTouchStart,Kr),this.element.addEventListener("touchmove",this.onTouchMove,Kr),this.element.addEventListener("touchend",this.onTouchEnd,Kr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Kr),this.element.removeEventListener("touchstart",this.onTouchStart,Kr),this.element.removeEventListener("touchmove",this.onTouchMove,Kr),this.element.removeEventListener("touchend",this.onTouchEnd,Kr)}},gv=s=>Math.min(1,1.001-2**(-10*s)),vv=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:m,virtualScroll:x,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:w=!1,respectReducedMotion:E=!0}={}){$e(this,"_isScrolling",!1);$e(this,"_isStopped",!1);$e(this,"_isLocked",!1);$e(this,"_preventNextNativeScrollEvent",!1);$e(this,"_resetVelocityTimeout",null);$e(this,"_rafId",null);$e(this,"_isDraggingSelection",!1);$e(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));$e(this,"isTouching");$e(this,"isIos");$e(this,"time",0);$e(this,"userData",{});$e(this,"lastVelocity",0);$e(this,"velocity",0);$e(this,"direction",0);$e(this,"options");$e(this,"targetScroll");$e(this,"animatedScroll");$e(this,"animate",new qw);$e(this,"emitter",new xv);$e(this,"dimensions");$e(this,"virtualScroll");$e(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});$e(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});$e(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});$e(this,"onClick",s=>{let e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){let n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});$e(this,"onPointerDown",s=>{s.button===1&&this.reset()});$e(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let d=i&&this.options.syncTouch,u=i&&n.type==="touchend";u&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});$e(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});$e(this,"raf",s=>{let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=pv,window.lenis||(window.lenis={}),window.lenis.version=pv,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=gv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:p,autoResize:g,prevent:m,virtualScroll:x,overscroll:v,autoRaf:T,anchors:y,autoToggle:M,allowNestedScroll:b,naiveDimensions:S,stopInertiaOnNavigate:w,respectReducedMotion:E},this.dimensions=new $w(s,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Jw(t,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=s,u=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(p=d),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let g=p.getBoundingClientRect(),m=getComputedStyle(p),x=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(T)?0:T)}}if(typeof d=="number"){if(d+=u,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=_v(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=gv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,f,d,u,p;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(s);if(i.computedStyle=b,r=["auto","overlay","scroll"].includes(b.overflowX),o=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),h=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;f=s.scrollWidth,d=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=f>u,l=d>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=d,i.clientWidth=u,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,f=i.scrollWidth,d=i.scrollHeight,u=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,x,v,T,y,M;if(g==="horizontal")m=Math.round(s.scrollLeft),x=f-u,v=e,T=r,y=a,M=c;else if(g==="vertical")m=Math.round(s.scrollTop),x=d-p,v=t,T=o,y=l,M=h;else return!1;return!M&&(m>=x||m<=0)?!0:(v>0?m<x:m>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Xw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var $c=new F;function ss(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;$c.copy(e),$c[n]=0,$c.normalize();let c=.5*o/(o+a),h=1-$c.angleTo(s)/l;return Math.sign($c[t])===1?h*c:a/(o+a)+c+c*(1-h)}var wn=class s extends Bn{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new F,c=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=f.length/6,g=new F,m=.5/o;for(let x=0,v=0;x<f.length;x+=3,v+=2)switch(l.fromArray(f,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[x+0]=h.x*Math.sign(l.x)+c.x*r,f[x+1]=h.y*Math.sign(l.y)+c.y*r,f[x+2]=h.z*Math.sign(l.z)+c.z*r,d[x+0]=c.x,d[x+1]=c.y,d[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),u[v+0]=ss(g,c,"z","y",r,n),u[v+1]=1-ss(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),u[v+0]=1-ss(g,c,"z","y",r,n),u[v+1]=1-ss(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),u[v+0]=1-ss(g,c,"x","z",r,e),u[v+1]=ss(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),u[v+0]=1-ss(g,c,"x","z",r,e),u[v+1]=1-ss(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),u[v+0]=1-ss(g,c,"x","y",r,e),u[v+1]=1-ss(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),u[v+0]=ss(g,c,"x","y",r,e),u[v+1]=1-ss(g,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Qr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function jf(s,e,t=5){let n=document.createElement("canvas");n.width=n.height=s;let i=n.getContext("2d"),r=i.createImageData(s,s),o=Qr(e),a=[];for(let l=0;l<t;l++){let c=4<<l,h=new Float32Array((c+1)*(c+1));for(let f=0;f<h.length;f++)h[f]=o();for(let f=0;f<=c;f++)h[f*(c+1)+c]=h[f*(c+1)],h[c*(c+1)+f]=h[f];a.push([c,h])}for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0,f=.5,d=0;for(let[g,m]of a){let x=c/s*g,v=l/s*g,T=x|0,y=v|0,M=x-T,b=v-y,_=M*M*(3-2*M),S=b*b*(3-2*b),w=g+1,E=m[y*w+T]*(1-_)+m[y*w+T+1]*_,D=m[(y+1)*w+T]*(1-_)+m[(y+1)*w+T+1]*_;h+=(E*(1-S)+D*S)*f,d+=f,f*=.5}let u=(l*s+c)*4,p=h/d*255;r.data[u]=r.data[u+1]=r.data[u+2]=p,r.data[u+3]=255}return i.putImageData(r,0,0),n}function yv(s,e=2.5){let t=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,t,n).data,r=document.createElement("canvas");r.width=t,r.height=n;let o=r.getContext("2d"),a=o.createImageData(t,n),l=a.data,c=(h,f)=>i[((f+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let f=0;f<t;f++){let d=(c(f+1,h)-c(f-1,h))*e,u=(c(f,h+1)-c(f,h-1))*e,p=Math.hypot(d,u,1),g=(h*t+f)*4;l[g]=(-d/p*.5+.5)*255,l[g+1]=(u/p*.5+.5)*255,l[g+2]=(1/p*.5+.5)*255,l[g+3]=255}return o.putImageData(a,0,0),r}function Qf(s,e){let t=new Fn(s);return t.wrapS=t.wrapT=Si,t.anisotropy=8,e&&(t.colorSpace=zt),t}function qm({w:s=1024,h:e=512,rows:t=4,seed:n=1}={}){let i=Qr(n),r=document.createElement("canvas"),o=document.createElement("canvas"),a=document.createElement("canvas");for(let x of[r,o,a])x.width=s,x.height=e;let l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d");l.fillStyle="#7a5a3c",l.fillRect(0,0,s,e),c.fillStyle="#1a1a1a",c.fillRect(0,0,s,e),h.fillStyle="#f2f2f2",h.fillRect(0,0,s,e);let f=e/t,d=5;for(let x=0;x<t;x++){let v=-i()*120;for(;v<s;){let T=110+i()*150,y=v+d/2,M=x*f+d/2,b=T-d,_=f-d,S=30+i()*8,w=36+i()*14,E=60+i()*12,D=l.createLinearGradient(0,M,0,M+_);D.addColorStop(0,`hsl(${S},${w}%,${E+4}%)`),D.addColorStop(.75,`hsl(${S},${w}%,${E}%)`),D.addColorStop(1,`hsl(${S-4},${w-6}%,${E-12}%)`),l.fillStyle=D,Xm(l,y,M,b,_,7),l.fill();let I=150+i()*60;for(let N=0;N<6;N++){let P=Math.min(255,I*(.55+N*.09))|0;c.fillStyle=`rgb(${P},${P},${P})`,Xm(c,y+N*1.6,M+N*1.6,b-N*3.2,_-N*3.2,7),c.fill()}h.fillStyle=`rgb(${200+i()*40|0},${200+i()*40|0},${200+i()*40|0})`,Xm(h,y,M,b,_,7),h.fill();for(let N=0;N<2;N++){let P=y+i()*b,B=i()<.5?M+i()*5:M+_-i()*5,k=3+i()*6;c.fillStyle="#5a5a5a",l.fillStyle=`hsla(${S},${w}%,${E-10}%,.7)`;for(let O of[c,l]){O.beginPath();for(let q=0;q<7;q++){let U=k*(.5+i()*.7),C=q/7*Math.PI*2;O.lineTo(P+Math.cos(C)*U*1.6,B+Math.sin(C)*U*.7)}O.closePath(),O.fill()}}v+=T}}let u=jf(128,n+7,5),p=jf(256,n+13,4);l.globalCompositeOperation="multiply",l.globalAlpha=.35,l.drawImage(u,0,0,s,e),l.globalAlpha=.25,l.drawImage(p,0,0,s,e),l.globalCompositeOperation="overlay",l.globalAlpha=.25,l.drawImage(p,0,0,s/2,e/2),l.drawImage(p,s/2,0,s/2,e/2),l.drawImage(p,0,e/2,s/2,e/2),l.drawImage(p,s/2,e/2,s/2,e/2),l.globalCompositeOperation="source-over",l.globalAlpha=1,c.globalCompositeOperation="overlay",c.globalAlpha=.6,c.drawImage(p,0,0,s,e),c.globalAlpha=1,c.globalCompositeOperation="source-over";let g=l.getImageData(0,0,s,e),m=c.getImageData(0,0,s,e);for(let x=0;x<s*e*.008;x++){let v=(i()*s*e|0)*4,T=.7+i()*.2;g.data[v]*=T,g.data[v+1]*=T,g.data[v+2]*=T,m.data[v]=m.data[v+1]=m.data[v+2]=m.data[v]*.6}return l.putImageData(g,0,0),c.putImageData(m,0,0),{map:Qf(r,!0),normalMap:Qf(yv(o,3.2),!1),roughnessMap:Qf(a,!1)}}function Sv(s=4){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=jf(128,s,4),r=n.createImageData(512,512),o=i.getContext("2d").getImageData(0,0,128,128).data;for(let a=0;a<512;a++)for(let l=0;l<512;l++){let c=o[((a>>2&127)*128+(l>>2&127))*4]/255,h=.5+.5*Math.sin((a+c*70)*.19+Math.sin(l*.02)*2),f=(a*512+l)*4,d=(h*.75+Math.random()*.25)*255;r.data[f]=r.data[f+1]=r.data[f+2]=d,r.data[f+3]=255}return n.putImageData(r,0,0),Qf(yv(t,1.6),!1)}function Mv(s=9){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=Qr(s);n.fillStyle="#e9e2cf",n.fillRect(0,0,512,512),n.globalCompositeOperation="multiply",n.globalAlpha=.6,n.drawImage(jf(64,s,4),0,0,512,512),n.globalAlpha=1;for(let o=0;o<9;o++)n.fillStyle="rgba(120,115,110,.35)",n.beginPath(),n.ellipse(i()*512,i()*512,30+i()*80,20+i()*60,i()*3,0,7),n.fill();n.globalCompositeOperation="source-over";for(let o=0;o<70;o++){let a=i()*512,l=i()*512,c=2+i()*i()*22;n.fillStyle="rgba(90,85,80,.35)",n.beginPath(),n.arc(a,l,c,0,7),n.fill(),n.strokeStyle="rgba(255,250,235,.35)",n.lineWidth=1.2,n.beginPath(),n.arc(a-c*.15,l-c*.15,c,Math.PI*.9,Math.PI*1.8),n.stroke()}let r=new Fn(t);return r.colorSpace=zt,r}function Xm(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+n,t,r),s.closePath()}var Jt={night:660019,lapis:1916863,faience:3134406,gold:15316044,sand:14267266,stone:13146723,terracotta:11883311,ink:724770},hn=[28,23.5,19,14.5,10,5.5],vi=2.6,Gs=2.25,Vs=s=>s===0?0:s*vi,vs=(s,e={})=>new Pr({color:s,roughness:.85,metalness:0,...e}),Vi=(s,e=2.6)=>new mn({color:new Fe(s).multiplyScalar(e),toneMapped:!1});function Kw(s,e=1024,t=512){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d"),r=Qr(s);i.fillStyle="#000",i.fillRect(0,0,e,t),i.strokeStyle="#fff",i.fillStyle="#fff",i.lineWidth=3,i.lineCap="round";for(let l=0;l<6;l++){let c=r()*e,h=t*(.2+r()*.6);i.beginPath(),i.moveTo(c,h);for(let f=0;f<5;f++)f%2?h=Math.max(20,Math.min(t-20,h+(r()-.5)*200)):c+=(r()-.3)*260,i.lineTo(c,h);i.stroke(),i.beginPath(),i.arc(c,h,8,0,Math.PI*2),i.fill()}i.font="bold 48px monospace";let o=["{ }","</>","=>","::","&&","[ ]","#",";","01","\u03BB"];for(let l=0;l<4;l++)i.fillText(o[r()*o.length|0],r()*(e-100),60+r()*(t-80));let a=new Fn(n);return a.wrapS=a.wrapT=Si,a}var il=(s,e,t)=>{let n={};for(let i in s){let r=s[i].clone();r.repeat.set(e,t),r.needsUpdate=!0,n[i]=r}return n};function bv(s,{w:e=512,h:t=160,font:n="700 64px Unbounded, sans-serif",fg:i="#f6ead2",bg:r="rgba(10,18,51,.92)",border:o="#e9b44c",radius:a=70,sub:l}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let h=c.getContext("2d");return((d,u,p,g,m)=>{h.beginPath(),h.moveTo(d+m,u),h.arcTo(d+p,u,d+p,u+g,m),h.arcTo(d+p,u+g,d,u+g,m),h.arcTo(d,u+g,d,u,m),h.arcTo(d,u,d+p,u,m),h.closePath()})(6,6,e-12,t-12,Math.min(a,(t-12)/2)),h.fillStyle=r,h.fill(),h.lineWidth=6,h.strokeStyle=o,h.stroke(),h.fillStyle=i,h.textAlign="center",h.textBaseline="middle",h.font=n,h.fillText(s,e/2,l?t*.4:t/2+2),l&&(h.font='500 30px "Instrument Sans", sans-serif',h.globalAlpha=.75,h.fillText(l,e/2,t*.72)),c}function Tv(s,e,t,n="high"){let i={updaters:[],props:{},clickables:[]},r=_=>i.updaters.push(_),o=n==="high",a=new F(-.55,.32,-.77).normalize(),l=new Pt({side:kn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Fe(132378)},mid:{value:new Fe(857927)},hor:{value:new Fe(4862290)},moonDir:{value:a}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
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
        gl_FragColor = vec4(c,1.); }`});s.add(new Ue(new jt(600,48,24),l));{let S=new Float32Array(9600),w=new Float32Array(3200),E=Qr(7);for(let N=0;N<3200;N++){let P=E()*Math.PI*2,B=.04+E()*.96,k=Math.sqrt(1-B*B);S.set([Math.cos(P)*k*520,B*520,Math.sin(P)*k*520],N*3),w[N]=E()*6.28}let D=new qt;D.setAttribute("position",new On(S,3)),D.setAttribute("ph",new On(w,1));let I=new Pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},px:{value:Math.min(devicePixelRatio,2)}},vertexShader:"attribute float ph; uniform float t,px; varying float a; varying vec3 col; void main(){ a = .4+.6*sin(t*1.7+ph*3.); float s = fract(ph*7.13); col = mix(vec3(1.,.93,.82), vec3(.8,.88,1.), fract(ph*3.7)); gl_PointSize = (0.9+s*s*2.6)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float a; varying vec3 col; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(col, a*smoothstep(.5,.0,d)); }"});s.add(new lo(D,I)),r(N=>I.uniforms.t.value=N)}{let _=new Ue(new jt(15,48,48),new mn({map:Mv(),color:new Fe(1.35,1.3,1.2),toneMapped:!1,fog:!1}));_.position.copy(a).multiplyScalar(300),_.rotation.y=1.2,s.add(_);let S=document.createElement("canvas");S.width=S.height=256;let w=S.getContext("2d"),E=w.createRadialGradient(128,128,14,128,128,128);E.addColorStop(0,"rgba(255,236,200,.5)"),E.addColorStop(.3,"rgba(150,165,255,.14)"),E.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=E,w.fillRect(0,0,256,256);let D=new Rr(new tr({map:new Fn(S),transparent:!0,depthWrite:!1,fog:!1}));D.scale.setScalar(160),D.position.copy(_.position),s.add(D),_.userData.onClick="moon",i.clickables.push(_),i.props.moon=_}{let _=new oo;_.add(new Ue(new jt(50,32,16),l.clone()));let S=new Ue(new jt(4,16,16),new mn({color:new Fe(3,3,2.6)}));S.position.copy(a).multiplyScalar(40),_.add(S);let w=new Ca(e);s.environment=w.fromScene(_,.04).texture,s.environmentIntensity=.55,w.dispose()}let c=new Fl(7438800,3811868,.55);s.add(c);let h=new Ma(13358335,2.3);h.position.copy(a).multiplyScalar(60).setY(48),h.position.x=-38,h.position.z=32,h.castShadow=!0,h.shadow.mapSize.set(o?4096:2048,o?4096:2048),Object.assign(h.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),h.shadow.bias=-4e-4,h.shadow.normalBias=.04,h.shadow.radius=3,s.add(h);let f=new Ma(16752234,.35);f.position.set(30,10,-20),s.add(f);let d=qm({w:o?1024:512,h:o?512:256,rows:4,seed:11}),u=qm({w:o?1024:512,h:o?1024:512,rows:8,seed:51}),p=Sv();p.repeat.set(70,70);{let _=new ds(900,900,220,220);_.rotateX(-Math.PI/2);let S=_.attributes.position;for(let I=0;I<S.count;I++){let N=S.getX(I),P=S.getZ(I),B=Math.hypot(N,P),k=Math.sin(N*.03+P*.012)*2.2+Math.sin(P*.045-N*.02)*1.4+Math.sin(N*.11+P*.03)*.3;k=k>0?k*1.25:k*.7,k*=gs.smoothstep(B,26,90),k+=gs.smoothstep(B,120,420)*14,S.setY(I,k-.02)}_.computeVertexNormals();let w=new Ue(_,vs(11108437,{normalMap:p,normalScale:new De(.55,.55),roughness:.97}));w.receiveShadow=!0,s.add(w);let E=il(u,6,6),D=new Ue(new Sn(24,25,.3,64),vs(10256996,{...E,roughness:1}));D.position.y=-.12,D.receiveShadow=!0,s.add(D)}{let _=new _a(1,2),S=_.attributes.position,w=Qr(21);for(let k=0;k<S.count;k++){let O=new F().fromBufferAttribute(S,k);O.multiplyScalar(.75+Math.sin(O.x*3.1)*.1+Math.cos(O.y*4.3+O.z)*.12),S.setXYZ(k,O.x,O.y*.65,O.z)}_.computeVertexNormals();let E=46,D=new ws(_,vs(8216902,{...il(d,.5,.5),roughness:1}),E),I=new ct,N=new li,P=new F,B=new F;for(let k=0;k<E;k++){let O=w()*Math.PI*2,q=25+w()*45;Math.abs(Math.cos(O))<.25&&Math.sin(O)>0||(B.set(Math.cos(O)*q,-.15,Math.sin(O)*q),N.setFromEuler(new $i(w(),w()*6,w())),P.setScalar(.3+w()*w()*1.8),I.compose(B,N,P),D.setMatrixAt(k,I))}D.castShadow=D.receiveShadow=!0,s.add(D)}for(let[_,S,w]of[[150,-260,34],[205,-300,46],[250,-270,26]]){let E=new Ue(new fs(w,w*.95,4),vs(3878984,{roughness:1}));E.rotation.y=Math.PI/4,E.position.set(_,w*.47+6,S),s.add(E)}let g=new Ct;s.add(g),i.pyramid=g;let m=Vi(Jt.faience,1.7);for(let _=0;_<hn.length;_++){let S=hn[_],w=vs(16777215,{...il(d,S/7,1),emissiveMap:(()=>{let N=Kw(91+_*7);return N.repeat.set(S/14,1),N})(),emissive:new Fe(Jt.faience),emissiveIntensity:.38,normalScale:new De(1,1)}),E=vs(15787220,{...il(u,S/7,S/7)}),D=new Ue(new Bn(S,vi,S),[w,w,E,E,w,w]);D.position.y=_*vi+vi/2,D.castShadow=D.receiveShadow=!0,g.add(D);let I=S/2;for(let[N,P,B,k]of[[S,.06,0,I],[S,.06,0,-I],[.06,S,I,0],[.06,S,-I,0]]){let O=new Ue(new Bn(N,.05,P),m);O.position.set(B,(_+1)*vi+.01,k),g.add(O)}}let x=vs(15259328,{...il(u,.35,.12)});i.stairPath=[];for(let _=0;_<hn.length;_++){let w=vi/8,E=Gs/8,D=hn[_]/2,I=Vs(_);for(let N=0;N<8;N++){let P=new Ue(new wn(2.6,w*(N+1),E+.01,1,.02),x);P.position.set(0,I+w*(N+1)/2,D+Gs-(N+.5)*E),P.castShadow=P.receiveShadow=!0,g.add(P)}for(let N of[-1.42,1.42]){let P=new F(N,I+.35,D+Gs),B=new F(N,I+vi+.35,D),k=P.distanceTo(B),O=new Ue(new Sn(.035,.035,k,8),Vi(N<0?Jt.faience:Jt.gold,1.6));O.position.copy(P).add(B).multiplyScalar(.5),O.lookAt(B),O.rotateX(Math.PI/2),g.add(O)}i.stairPath.push(new F(0,I,D+Gs),new F(0,I+vi,D))}let v=new ln({color:15909466,metalness:1,roughness:.18,clearcoat:.6,clearcoatRoughness:.1,envMapIntensity:2.2,emissive:new Fe(3810822),emissiveIntensity:.5}),T=new Ue(new fs(2.3,3.2,4,1),v);T.rotation.y=Math.PI/4,T.position.set(0,6*vi+1.6,-.6),T.castShadow=!0,g.add(T),T.userData.onClick="cap",i.clickables.push(T),i.props.cap=T;let y=new Cs(16762726,5,20,1.6);y.position.set(0,6*vi+4.2,0),g.add(y),i.props.capLight=y;{let _=new Zi(i.stairPath.map(q=>q.clone().add(new F(-1.42,.55,0))),!1,"centripetal",0),S=new Zi(i.stairPath.map(q=>q.clone().add(new F(1.42,.55,0))),!1,"centripetal",0),w=36,E=new wn(.14,.14,.14,1,.03),D=new ws(E,Vi(Jt.faience,3),w),I=new ws(E,Vi(Jt.gold,2.8),w);g.add(D,I);let N=new ct,P=new li,B=new F(1,1,1),k=new F,O=new $i;i.packetBoost=0,r(q=>{let U=.045+i.packetBoost*.25;i.packetBoost*=.97;for(let C=0;C<w;C++){let Z=(C/w+q*U)%1;_.getPointAt(Z,k),P.setFromEuler(O.set(q*2+C,q+C,0)),N.compose(k,P,B),D.setMatrixAt(C,N),S.getPointAt(1-Z,k),N.compose(k,P,B),I.setMatrixAt(C,N)}D.instanceMatrix.needsUpdate=I.instanceMatrix.needsUpdate=!0})}let M=new Pt({transparent:!0,depthWrite:!1,blending:ir,side:In,toneMapped:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float t; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ vec2 uv = vUv; float y = uv.y;
        float nn = n(vec2(uv.x*4., y*3.-t*3.2))*.6 + n(vec2(uv.x*9., y*7.-t*5.))*.4;
        float w = (1.-y)*.42 + .04; float d = abs(uv.x-.5 + (nn-.5)*.25*y);
        float f = smoothstep(w, w*.35, d) * smoothstep(1., .25, y + nn*.35) * smoothstep(0.,.08,y);
        vec3 c = mix(vec3(1.5,.5,.1), vec3(1.9,1.35,.7), smoothstep(.3,.9,f*(1.2-y)));
        gl_FragColor = vec4(c*f*.75, f); }`});r(_=>M.uniforms.t.value=_);let b=new ln({color:9067051,metalness:.9,roughness:.35});for(let _ of[-4.6,4.6]){let S=hn[0]/2+3.2,w=new Ue(new Sn(.28,.36,2.2,16),vs(16777215,{...il(d,.3,.5)}));w.position.set(_,1.1,S),w.castShadow=!0,s.add(w);let E=new Ue(new Sn(.6,.3,.4,24,1,!0),b);E.material.side=In,E.position.set(_,2.35,S),s.add(E);let D=new Ue(new co(.55,20),Vi(16734746,1.2));D.rotation.x=-Math.PI/2,D.position.set(_,2.45,S),s.add(D);let I=new Ct;I.position.set(_,2.45,S),s.add(I);for(let C=0;C<3;C++){let Z=new Ue(new ds(1.1,1.8),M);Z.position.y=.85,Z.rotation.y=C/3*Math.PI,I.add(Z)}let N=new Cs(16747068,8,14,1.7);N.position.set(_,3.4,S+.3),s.add(N);let P=30,B=new Float32Array(P*3),k=Array.from({length:P},()=>Math.random()),O=new qt;O.setAttribute("position",new On(B,3));let q=new lo(O,new ao({color:new Fe(3,1.4,.4),size:.06,transparent:!0,depthWrite:!1,blending:ir,toneMapped:!1}));q.position.set(_,2.6,S),s.add(q);let U=Math.random()*10;r(C=>{let Z=1+Math.sin(C*13+U)*.07+Math.sin(C*7.3+U)*.06;I.scale.set(1,Z,1),N.intensity=7.5*Z,I.rotation.y=Math.sin(C*.7+U)*.3;for(let ue=0;ue<P;ue++){let Pe=(k[ue]+C*(.25+k[ue]*.3))%1;B[ue*3]=Math.sin(k[ue]*50+C)*.25*Pe,B[ue*3+1]=Pe*3,B[ue*3+2]=Math.cos(k[ue]*70+C)*.25*Pe}O.attributes.position.needsUpdate=!0})}{let S=new Float32Array(1800),w=Qr(3);for(let D=0;D<600;D++)S.set([(w()-.5)*80,w()*22,(w()-.5)*80],D*3);let E=new qt;E.setAttribute("position",new On(S,3)),s.add(new lo(E,new ao({color:16769712,size:.06,transparent:!0,opacity:.45,depthWrite:!1}))),r((D,I)=>{let N=E.attributes.position;for(let P=0;P<600;P++){let B=N.getX(P)+I*1.6;B>40&&(B=-40),N.setX(P,B),N.setY(P,N.getY(P)+Math.sin(D+P)*I*.15)}N.needsUpdate=!0})}return Qw(i,g,t),i.update=(_,S,w)=>{for(let E of i.updaters)E(_,S,w)},i}function Qw(s,e,t){let n=a=>s.updaters.push(a),i=a=>hn[a]/2+Gs/2,r=new Ol(t),o=new ln({color:14724682,metalness:1,roughness:.3,envMapIntensity:1.6});{let a=new Ct;a.position.set(-5.6,Vs(1),i(1)),e.add(a);let l=vs(6175522,{roughness:.6}),c=new Ue(new wn(1.5,.08,.8,2,.03),l);c.position.y=.72,c.castShadow=!0,a.add(c);for(let[y,M]of[[-.65,-.32],[.65,-.32],[-.65,.32],[.65,.32]]){let b=new Ue(new Sn(.03,.03,.72,8),l);b.position.set(y,.36,M),b.castShadow=!0,a.add(b)}let h=new ln({color:10133675,metalness:.9,roughness:.32}),f=new Ue(new wn(.62,.025,.42,1,.01),h);f.position.set(0,.775,.05),a.add(f);let d=document.createElement("canvas");d.width=512,d.height=320;let u=d.getContext("2d");u.fillStyle="#0a1233",u.fillRect(0,0,512,320),u.font="28px monospace",[["#2fd3c6",'app.post("/hire",'],["#e9b44c","  auth, async (req,res)=>{"],["#f6ead2",'  const dev = "adham";'],["#f6ead2","  await db.save(dev);"],["#2fd3c6","  res.status(201)"],["#e9b44c","});"]].forEach(([y,M],b)=>{u.fillStyle=y,u.fillText(M,22,52+b*44)});let g=new Fn(d);g.colorSpace=zt;let m=new Ue(new ds(.58,.36),new mn({map:g,color:13421772}));m.position.set(0,.98,-.148),m.rotation.x=-.18,a.add(m);let x=new Ue(new wn(.62,.4,.015,1,.006),h);x.position.set(0,.98,-.16),x.rotation.x=-.18,a.add(x);let v=new Cs(8378623,1.2,2.2,2);v.position.set(0,1.05,.2),a.add(v);let T=new Ue(new Sn(.07,.06,.14,20),new ln({color:Jt.terracotta,roughness:.25,clearcoat:.8}));T.position.set(.55,.83,.15),a.add(T),a.rotation.y=.5,s.props.desk=a}{let a=new Ct;a.position.set(5.8,Vs(2)+3.1,i(2)-.6),e.add(a);let l=["C++","TypeScript","Node.js","PostgreSQL","Python","SQL","Docker","React","Express","socket.io","Git","Java"];l.forEach((h,f)=>{let d=new Ue(new ds(1.05,.33),new mn({map:new Fn(bv(h,{font:"700 54px Unbounded, sans-serif"})),transparent:!0,side:In,toneMapped:!1}));d.material.map.colorSpace=zt,d.userData={a:f/l.length*Math.PI*2,r:f%2?2.9:2.2,y:f%3*.45-.45,label:h.toLowerCase(),hl:0},a.add(d)});let c=new Ue(new _a(.42,0),new ln({color:3134406,roughness:.05,transmission:.6,thickness:.6,emissive:new Fe(879974),emissiveIntensity:1.5}));a.add(c),n((h,f,d)=>{c.rotation.set(h*.6,h*.9,0),a.children.forEach(u=>{if(!u.userData.r)return;let p=u.userData;p.hl=Math.max(0,p.hl-f);let g=Math.min(1,p.hl*2),m=p.a+h*.35;u.position.set(Math.cos(m)*p.r*(1-g*.6),p.y+Math.sin(h+p.a)*.12+g*.9,Math.sin(m)*p.r*(1-g*.6)+g*1.2),u.scale.setScalar(1+g*.9),d&&u.quaternion.copy(d.quaternion)})}),s.props.stack=a,s.highlightSkill=h=>{let f=!1;return a.children.forEach(d=>{d.userData.label&&h.toLowerCase().startsWith(d.userData.label.replace(".js",""))&&(d.userData.hl=3,f=!0)}),f}}{let a=new Ct;a.position.set(-3.6,Vs(3)+2.45,hn[3]/2+.35),e.add(a);let l=document.createElement("canvas");l.width=640,l.height=400,jw(l.getContext("2d")),[{src:"assets/shots/title.jpg",x:-1.9,ry:.42},{canvas:l,x:0,ry:0},{src:"assets/shots/student-dashboard.webp",x:1.9,ry:-.42}].forEach((h,f)=>{var x;let d=h.canvas?new Fn(h.canvas):r.load(h.src);d.colorSpace=zt,d.anisotropy=8;let u=new Ct;u.position.set(h.x,f===1?.35:0,f===1?-.4:0),u.rotation.y=h.ry,a.add(u),((x=s.props).screens||(x.screens={}))[["capcom","smarthabbit","labtrack"][f]]=u;let p=new Ue(new wn(1.86,1.1,.06,2,.03),o);p.castShadow=!0,u.add(p);let g=new Ue(new ds(1.74,.98),new mn({map:d,color:12105912}));g.position.z=.035,u.add(g);let m=f*1.7;n(v=>{u.position.y=(f===1?.35:0)+Math.sin(v*1.1+m)*.08})}),a.rotation.y=.12,s.props.work=a}{let a=new Ct;a.position.set(6.7,Vs(4)+1.3,i(4)-.6),a.rotation.y=-.5,e.add(a);let l=new Ue(new wn(.5,.5,.5,2,.06),Vi(Jt.faience,2));l.position.set(-1.9,1.7,0);let c=new Ue(new jt(.3,24,16),Vi(7310591,2.2));c.position.set(-1.9,.3,0);let h=new Ue(new Ll(.38),Vi(Jt.gold,2.6));h.position.set(.4,1,0),a.add(l,c,h);let f=new Zi([l.position,new F(-.8,1.8,.4),h.position]),d=new Zi([c.position,new F(-.8,.2,.4),h.position]),p=[[3134406,.35],[15316044,.6],[15764028,.85],[14698298,1.1]].map(([N,P],B)=>{let k=new Ue(new Bn(.22,P,.22),Vi(N,1.8));return k.position.set(1.4+B*.36,P/2+.1,0),a.add(k),k}),g=new Zi([h.position,new F(1.2,1.4,.2),new F(1.9,1.5,0)]),m=22,x=new jt(.05,8,6),v=new ws(x,Vi(Jt.faience,3),m),T=new ws(x,Vi(9414399,3),m),y=new ws(x,Vi(Jt.gold,3),m);a.add(v,T,y);for(let[N,P,B]of[["XGBoost \xB7 sensors",-1.9,2.25],["Isolation Forest \xB7 traffic",-1.9,-.25],["Decision fusion",.4,1.6],["4-tier risk",1.95,1.55]]){let k=new Rr(new tr({map:new Fn(bv(N,{w:640,h:120,font:'600 42px "Instrument Sans", sans-serif',radius:60})),transparent:!0,toneMapped:!1}));k.material.map.colorSpace=zt,k.scale.set(1.6,.3,1),k.position.set(P,B,.1),a.add(k)}let M=new Ue(new ho(.2,2.6,64),new mn({color:new Fe(Jt.faience).multiplyScalar(.6),transparent:!0,opacity:.18,side:In,toneMapped:!1,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(0,-1.25,0),a.add(M);let b=new ct,_=new F;a.userData.threat=0;let S=0,w=0,E=new Fe(9414399).multiplyScalar(3),D=new Fe(16726843).multiplyScalar(3.4),I=new Fe(Jt.gold).multiplyScalar(2.6);n((N,P)=>{S+=(a.userData.threat-S)*Math.min(1,P*4),w+=P*(.22+S*.6),T.material.color.copy(E).lerp(D,S),c.material.color.copy(E).lerp(D,S),c.scale.setScalar(1+S*.5+Math.sin(N*12)*.1*S),h.material.color.copy(I).lerp(D,S*.7),l.rotation.set(N,N*.7,0),h.rotation.y=N*1.4,h.scale.setScalar(1+Math.sin(N*4)*.06);for(let B=0;B<m;B++){let k=(B/m+N*.22)%1;f.getPointAt(k,_),b.makeTranslation(_.x,_.y,_.z),v.setMatrixAt(B,b),d.getPointAt((B/m+w)%1,_),b.makeTranslation(_.x,_.y,_.z),T.setMatrixAt(B,b),g.getPointAt(k,_),b.makeTranslation(_.x,_.y,_.z),y.setMatrixAt(B,b)}v.instanceMatrix.needsUpdate=T.instanceMatrix.needsUpdate=y.instanceMatrix.needsUpdate=!0,p.forEach((B,k)=>{let O=S>k*.25-.01;B.scale.y+=((O?1+S*.6:.25)+Math.sin(N*2+k)*.06-B.scale.y)*.1}),M.rotation.z=N*.2}),s.props.research=a}{let a=new Ct;a.position.set(-4.4,Vs(5),i(5)-.5),e.add(a);let l=[14698298,3134406,15316044,7310591,16181970];s.props.balloons=[],l.forEach((y,M)=>{let b=new Ct;b.position.set((M-2)*.42,0,M%2*.45);let _=new Ue(new jt(.34,32,24),new ln({color:y,roughness:.25,clearcoat:1,clearcoatRoughness:.15,sheen:.4}));_.scale.y=1.18,_.position.y=2.2+M%3*.35,_.castShadow=!0;let S=new Ue(new fs(.06,.1,8),_.material);S.position.y=_.position.y-.42,S.rotation.x=Math.PI;let w=new Ue(new Sn(.005,.005,_.position.y-.45,4),vs(16181970));w.position.y=(_.position.y-.45)/2,b.add(_,S,w),a.add(b),_.userData.onClick="balloon",_.userData.group=b,s.clickables.push(_),s.props.balloons.push(b);let E=M*1.3;n(D=>{b.rotation.z=Math.sin(D*1.2+E)*.06,b.rotation.x=Math.cos(D+E)*.05})});let c=new Ct,h=new ln({color:15921128,metalness:.3,roughness:.35,clearcoat:.5}),f=new Ue(new As(.16,.6,8,16),h);c.add(f);let d=new Ue(new fs(.16,.3,16),new ln({color:Jt.terracotta,roughness:.3,clearcoat:.6}));d.position.y=.55,c.add(d);for(let y=0;y<3;y++){let M=new Ue(new Bn(.02,.22,.18),vs(Jt.lapis,{roughness:.4})),b=y/3*Math.PI*2;M.position.set(Math.cos(b)*.16,-.3,Math.sin(b)*.16),M.rotation.y=-b,c.add(M)}let u=new Ue(new fs(.1,.4,12),Vi(16751173,3));u.position.y=-.62,u.rotation.x=Math.PI,c.add(u),e.add(c),s.props.rocket=c,c.userData.boost=0,f.userData.onClick="rocket",s.clickables.push(f);let p=0;n((y,M)=>{c.userData.boost*=.985,p+=M*(.45+c.userData.boost*3);let b=new F(0,Vs(5)+4.6,0);c.position.set(b.x+Math.cos(p)*9,b.y+Math.sin(y*.9)*.6,b.z+Math.sin(p)*9),c.lookAt(b.x+Math.cos(p+.2)*9,c.position.y,b.z+Math.sin(p+.2)*9),c.rotateX(Math.PI/2),u.scale.y=1+Math.sin(y*30)*.2+c.userData.boost*2}),s.props.arena=a;let g=[],m=[14698298,3134406,15316044,7310591,11832575,16181970,5427827],x=new F(-2.9,Vs(5),i(5)+.6);for(let y=0;y<14;y++){let M=new Ue(new jt(.3,24,18),new ln({color:m[y%m.length],roughness:.25,clearcoat:1,sheen:.4}));M.scale.y=1.18,M.visible=!1,M.userData.onClick="gameBalloon",e.add(M),g.push(M),s.clickables.push(M)}let v=s.game={active:!1,score:0,left:0,best:0,onEnd:null,onTick:null},T=y=>{y.position.set(x.x+(Math.random()-.5)*6,x.y-1.5-Math.random()*3,x.z+1+Math.random()*2.5),y.userData.v=.9+Math.random()*1.4,y.userData.w=Math.random()*6,y.visible=!0,y.scale.set(1,1.18,1)};v.start=(y=15)=>{v.active=!0,v.score=0,v.left=y,g.forEach((M,b)=>{T(M),M.position.y-=b*.5})},v.hit=y=>!v.active||!y.visible?!1:(v.score++,y.visible=!1,setTimeout(()=>v.active&&T(y),350),!0),n((y,M)=>{if(v.active){v.left-=M,v.onTick&&v.onTick(v);for(let b of g)b.visible&&(b.position.y+=b.userData.v*M,b.position.x+=Math.sin(y*1.5+b.userData.w)*M*.3,b.position.y>x.y+7&&T(b));v.left<=0&&(v.active=!1,g.forEach(b=>b.visible=!1),v.best=Math.max(v.best,v.score),v.onEnd&&v.onEnd(v))}})}{let a=new Ue(new Sn(.35,1.2,160,32,1,!0),new mn({color:new Fe(Jt.gold).multiplyScalar(2.2),transparent:!0,opacity:0,side:In,depthWrite:!1,toneMapped:!1,blending:ir}));a.position.set(0,6*vi+3+80,-.6),e.add(a);let l=[0,1,2].map(()=>{let c=new Ue(new Rs(1,.04,8,64),new mn({color:new Fe(Jt.faience).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1}));return c.rotation.x=Math.PI/2,c.position.set(0,6*vi+.2,-.6),e.add(c),c});s.props.beam=a,s.props.rings=l}}function jw(s){s.fillStyle="#101a3f",s.fillRect(0,0,640,400),s.fillStyle="#e9b44c",s.font="700 34px Unbounded, sans-serif",s.fillText("SmartHabbit",30,56),s.fillStyle="#f6ead2",s.font='500 20px "Instrument Sans", sans-serif',s.fillText("Level 7  \xB7  1,240 XP  \xB7  12-day streak",30,92),s.fillStyle="#26305e",s.fillRect(30,112,580,18),s.fillStyle="#2fd3c6",s.fillRect(30,112,410,18),[["Read 20 pages","easy","+10 XP"],["Codeforces problem","hard","+40 XP"],["Gym","medium","+25 XP"]].forEach(([t,n,i],r)=>{let o=160+r*62;s.fillStyle="#18234f",s.fillRect(30,o,580,50),s.fillStyle="#f6ead2",s.font='600 22px "Instrument Sans", sans-serif',s.fillText(t,50,o+32),s.fillStyle="#9fb0e8",s.font='500 17px "Instrument Sans", sans-serif',s.fillText(n,330,o+31),s.fillStyle="#e9b44c",s.fillText(i,520,o+31)}),["#e0473a","#2fd3c6","#e9b44c","#6f8cff"].forEach((t,n)=>{s.fillStyle=t,s.beginPath(),s.arc(60+n*56,370,18,0,7),s.fill()})}var Bo=14263420,ko=1774609,Jm=1845854,Av=2504829,ed=16052198,td=8003371,Rv=1581119,Cv=15920354,Ym={};function Wi(s){if(Ym[s])return Ym[s];let e={color:s,roughness:.7};return s===Bo?Object.assign(e,{roughness:.5,sheen:.6,sheenColor:new Fe(16751226),sheenRoughness:.5}):s===Jm||s===Rv?Object.assign(e,{roughness:.82,sheen:1,sheenColor:new Fe(5596842),sheenRoughness:.55}):s===Av?Object.assign(e,{roughness:.3,clearcoat:.6,sheen:.6,sheenColor:new Fe(8952319)}):s===ko?Object.assign(e,{roughness:.62,sheen:1,sheenColor:new Fe(8018504),sheenRoughness:.45}):s===Cv?Object.assign(e,{roughness:.3,clearcoat:.8}):s===ed?Object.assign(e,{roughness:.6,sheen:.5,sheenColor:new Fe(16777215)}):s===td&&Object.assign(e,{roughness:.32,sheen:.9,sheenColor:new Fe(16739179)}),Ym[s]=new ln(e)}function Gi(s,e){let t=new Ue(s,Wi(e));return t.castShadow=!0,t.receiveShadow=!0,t}function Ev(s,e,t=64){let n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,1,t/2,t/2,t/2);return r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t),new Fn(n)}var vr={happy:{eyes:"normal",brows:"soft",mouth:"smile",blush:.3,aura:15316044,emote:null},excited:{eyes:"star",brows:"up",mouth:"grin",blush:.55,aura:16765286,emote:"sparkle"},focused:{eyes:"normal",brows:"determined",mouth:"smirk",blush:.1,aura:3134406,emote:null},thinking:{eyes:"normal",brows:"raised",mouth:"hmm",blush:.1,aura:9414399,emote:"question",look:[.6,.7]},cool:{eyes:"closed",brows:"soft",mouth:"smirk",blush:.15,aura:15316044,emote:"sparkle",glasses:!0},surprised:{eyes:"wide",brows:"up",mouth:"o",blush:.2,aura:16777215,emote:"bang"},shy:{eyes:"closed",brows:"worried",mouth:"wavy",blush:1,aura:16748465,emote:"sweat"},annoyed:{eyes:"angry",brows:"angry",mouth:"flat",blush:.1,aura:14698298,emote:"anger"},sleepy:{eyes:"half",brows:"soft",mouth:"small",blush:.15,aura:7299024,emote:"zzz"},dizzy:{eyes:"spiral",brows:"worried",mouth:"wavy",blush:.3,aura:11832575,emote:"swirl"},love:{eyes:"heart",brows:"up",mouth:"grin",blush:.85,aura:16740241,emote:"heart"},worried:{eyes:"normal",brows:"worried",mouth:"wavy",blush:.1,aura:15764028,emote:"sweat"},vibing:{eyes:"closed",brows:"soft",mouth:"smile",blush:.35,aura:3134406,emote:"note"}},Pv=768,Iv=512,$m={x:226,y:276},Zm={x:542,y:276},wv={x:384,y:400};function Zc(s,e,t,n,i=4){s.beginPath();for(let r=0;r<i*2;r++){let o=r/(i*2)*Math.PI*2-Math.PI/2,a=r%2?n*.38:n;s.lineTo(e+Math.cos(o)*a,t+Math.sin(o)*a)}s.closePath(),s.fill()}function Dv(s,e,t,n){s.beginPath(),s.moveTo(e,t+n*.9),s.bezierCurveTo(e-n*1.6,t-n*.1,e-n*.6,t-n*1.2,e,t-n*.35),s.bezierCurveTo(e+n*.6,t-n*1.2,e+n*1.6,t-n*.1,e,t+n*.9),s.fill()}function eA(s,e){let t=vr[e.mood]||vr.happy;s.clearRect(0,0,Pv,Iv);let n=t.blush*(e.blushBoost||1);if(n>.02)for(let u of[$m.x-46,Zm.x+46]){let p=s.createRadialGradient(u,352,4,u,352,64);p.addColorStop(0,`rgba(235,110,100,${.55*n})`),p.addColorStop(1,"rgba(235,110,100,0)"),s.fillStyle=p,s.fillRect(u-70,282,140,140)}let i="#1d120c",r="#5b3a22",o=e.blink,a=(t.look?t.look[0]:e.lx)*12,l=(t.look?-t.look[1]:-e.ly)*10;for(let[u,p]of[[0,$m],[1,Zm]]){let g=t.eyes;if(o<.25&&g!=="closed"&&g!=="spiral"&&g!=="heart"&&(g="blink"),s.save(),g==="normal"||g==="star"||g==="half"||g==="angry"||g==="wide"){let m=g==="wide"?64:60,x=(g==="wide"?70:76)*Math.max(o,.25);if(g==="half"&&(s.beginPath(),s.rect(p.x-70,p.y-4,140,120),s.clip()),g==="angry"){s.beginPath();let v=u?-1:1;s.moveTo(p.x-80,p.y-80+(v>0?0:40)),s.lineTo(p.x+80,p.y-80+(v>0?40:0)),s.lineTo(p.x+80,p.y+90),s.lineTo(p.x-80,p.y+90),s.closePath(),s.clip()}s.fillStyle=i,s.beginPath(),s.ellipse(p.x,p.y,m,x,0,0,7),s.fill(),g!=="wide"?(s.fillStyle=r,s.beginPath(),s.ellipse(p.x+a,p.y+l+10,m*.62,x*.62,0,0,7),s.fill(),s.fillStyle=i,s.beginPath(),s.ellipse(p.x+a,p.y+l+10,m*.34,x*.36,0,0,7),s.fill()):(s.fillStyle="#fff",s.beginPath(),s.ellipse(p.x,p.y,m*.78,x*.8,0,0,7),s.fill(),s.fillStyle=i,s.beginPath(),s.arc(p.x+a*.6,p.y+l*.6,12,0,7),s.fill()),s.fillStyle="#fff",g==="star"?(Zc(s,p.x-10+a*.3,p.y-14+l*.3,26),Zc(s,p.x+18,p.y+22,10)):g!=="wide"&&(s.beginPath(),s.arc(p.x-17+a*.4,p.y-24+l*.4,16,0,7),s.fill(),s.beginPath(),s.arc(p.x+19+a*.4,p.y+22+l*.4,7,0,7),s.fill()),s.restore(),s.save(),s.strokeStyle=i,s.lineWidth=9,s.lineCap="round",g==="half"&&(s.beginPath(),s.moveTo(p.x-50,p.y-4),s.lineTo(p.x+50,p.y-4),s.stroke())}else if(g==="closed"||g==="blink")s.strokeStyle=i,s.lineWidth=12,s.lineCap="round",s.beginPath(),g==="closed"?s.arc(p.x,p.y+18,38,Math.PI*1.15,Math.PI*1.85):s.arc(p.x,p.y-22,40,Math.PI*.2,Math.PI*.8),s.stroke();else if(g==="spiral"){s.strokeStyle=i,s.lineWidth=7,s.beginPath();let m=e.t*6*(u?-1:1);for(let x=0;x<Math.PI*6;x+=.2){let v=x*6.5;s.lineTo(p.x+Math.cos(x+m)*v,p.y+Math.sin(x+m)*v)}s.stroke()}else g==="heart"&&(s.fillStyle="#e8325a",Dv(s,p.x,p.y+4,34+Math.sin(e.t*8)*3),s.fillStyle="rgba(255,255,255,.8)",s.beginPath(),s.arc(p.x-14,p.y-10,8,0,7),s.fill());s.restore()}s.strokeStyle="#1b1411",s.lineWidth=18,s.lineCap="round";for(let[u,p]of[[0,$m],[1,Zm]]){let g=u?1:-1,m=p.y-100,x=0,v=0;switch(t.brows){case"up":m-=14;break;case"determined":x=14,v=-4;break;case"angry":x=24,v=-10;break;case"worried":x=-16,v=8;break;case"raised":u?m-=22:x=6;break}let T=p.x-g*34,y=p.x+g*40;s.beginPath(),s.moveTo(T,m+x),s.quadraticCurveTo((T+y)/2,m-10+(x+v)/2,y,m+v+6),s.stroke()}s.lineCap="round",s.lineJoin="round";let c=e.mouth,h=wv.x,f=wv.y,d=()=>{s.fillStyle="#5a1a16",s.fill()};if(c>.08)s.beginPath(),s.ellipse(h,f,30+c*12,10+c*30,0,0,7),d(),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,f+8+c*14,18+c*6,6+c*9,0,0,Math.PI),s.fill();else switch(s.strokeStyle="#4a1a14",s.lineWidth=10,t.mouth){case"smile":s.beginPath(),s.arc(h,f-26,40,Math.PI*.2,Math.PI*.8),s.stroke();break;case"grin":s.beginPath(),s.moveTo(h-52,f-12),s.quadraticCurveTo(h,f-6,h+52,f-12),s.quadraticCurveTo(h+40,f+46,h,f+46),s.quadraticCurveTo(h-40,f+46,h-52,f-12),d(),s.fillStyle="#fff",s.fillRect(h-38,f-9,76,12),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,f+34,22,10,0,Math.PI,0),s.fill();break;case"smirk":s.beginPath(),s.moveTo(h-34,f+2),s.quadraticCurveTo(h+6,f+16,h+40,f-16),s.stroke();break;case"hmm":s.beginPath(),s.moveTo(h-26,f+6),s.lineTo(h+24,f-2),s.stroke();break;case"o":s.beginPath(),s.ellipse(h,f+4,18,24,0,0,7),d();break;case"small":s.beginPath(),s.ellipse(h,f+2,10,8,0,0,7),d();break;case"flat":s.beginPath(),s.moveTo(h-30,f+4),s.lineTo(h+30,f+4),s.stroke();break;case"wavy":s.beginPath();for(let u=-40;u<=40;u+=4)s.lineTo(h+u,f+4+Math.sin(u*.16+e.t*6)*7);s.stroke();break}}function tA(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(64,64),t.lineCap="round",t.lineJoin="round";let n=()=>{t.fillStyle="#fff7e6",t.beginPath(),t.arc(0,0,50,0,7),t.fill(),t.strokeStyle="rgba(26,21,48,.25)",t.lineWidth=4,t.stroke()};switch(s){case"bang":n(),t.fillStyle="#e0473a",t.font="900 72px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",0,4);break;case"question":n(),t.fillStyle="#1d3fbf",t.font="900 66px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("?",0,4);break;case"heart":t.fillStyle="#ff4d6d",Dv(t,0,6,40),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.arc(-18,-12,9,0,7),t.fill();break;case"sparkle":t.fillStyle="#ffd166",Zc(t,-8,0,44),t.fillStyle="#fff3c4",Zc(t,34,-30,16),Zc(t,30,34,12);break;case"zzz":t.fillStyle="#c9b8ff",t.font="900 44px Unbounded, sans-serif",t.fillText("z",-40,30),t.font="900 34px Unbounded, sans-serif",t.fillText("z",-6,0),t.font="900 26px Unbounded, sans-serif",t.fillText("z",22,-24);break;case"anger":t.strokeStyle="#e0473a",t.lineWidth=11;for(let[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.beginPath(),t.moveTo(r*10,o*34),t.quadraticCurveTo(r*10,o*10,r*34,o*10),t.stroke();break;case"sweat":t.fillStyle="#7fc8ff",t.beginPath(),t.moveTo(0,-44),t.quadraticCurveTo(34,10,0,40),t.quadraticCurveTo(-34,10,0,-44),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.ellipse(-8,12,6,12,.3,0,7),t.fill();break;case"swirl":t.strokeStyle="#b48cff",t.lineWidth=8,t.beginPath();for(let r=0;r<Math.PI*5;r+=.15)t.lineTo(Math.cos(r)*r*3,Math.sin(r)*r*3);t.stroke();break;case"note":t.fillStyle="#2fd3c6",t.beginPath(),t.ellipse(-16,26,18,13,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(26,14,18,13,-.4,0,7),t.fill(),t.fillRect(-2,-38,9,64),t.fillRect(40,-50,9,64),t.beginPath(),t.moveTo(-2,-38),t.lineTo(49,-50),t.lineTo(49,-34),t.lineTo(-2,-22),t.fill();break}let i=new Fn(e);return i.colorSpace=zt,i}function Lv(){let s=new Ct,e=new Ct;s.add(e);let t=[-1,1].map(ce=>{let he=new Ct;he.position.set(.12*ce,.6,0),e.add(he);let Me=Gi(new As(.088,.36,8,20),Rv);Me.position.y=-.27,he.add(Me);let Ce=Gi(new wn(.18,.12,.3,3,.055),Cv);Ce.position.set(0,-.53,.05),he.add(Ce);let me=new Ue(new wn(.185,.035,.305,1,.015),Wi(2830141));me.position.set(0,-.585,.05),he.add(me);let be=new Ue(new Bn(.19,.02,.12),Wi(td));return be.position.set(0,-.52,0),he.add(be),he}),n=new Ct;n.position.y=.6,e.add(n);let i=Gi(new wn(.52,.5,.31,5,.11),Jm);i.position.y=.26,n.add(i);let r=new Ue(new Sn(0,.12,.27,3),Wi(ed));r.rotation.set(Math.PI,Math.PI/6,0),r.scale.z=.25,r.position.set(0,.37,.15),n.add(r);for(let ce of[-1,1]){let he=new Ue(new wn(.055,.3,.02,1,.008),Wi(Av));he.position.set(ce*.075,.37,.162),he.rotation.z=ce*.38,n.add(he)}let o=new Ue(new Sn(.005,.035,.24,4),Wi(td));o.position.set(0,.33,.165),o.scale.z=.35,n.add(o);let a=new Ue(new wn(.06,.05,.03,1,.01),Wi(td));a.position.set(0,.465,.162),n.add(a);let l=new ln({color:Jt.gold,metalness:1,roughness:.25});for(let ce of[.15,.07]){let he=new Ue(new jt(.014,10,8),l);he.position.set(0,ce,.158),n.add(he)}let c=new Ue(new fs(.035,.05,3),new ln({color:Jt.gold,roughness:.35,sheen:1}));c.position.set(-.16,.405,.158),c.rotation.z=Math.PI,c.scale.z=.3,n.add(c);let h=new Ue(new Bn(.47,.05,.29),Wi(1053734));h.position.y=.03,n.add(h);let f=[-1,1].map(ce=>{let he=new Ct;he.position.set(.31*ce,.46,0),n.add(he);let Me=Gi(new As(.074,.3,8,20),Jm);Me.position.y=-.18,he.add(Me);let Ce=new Ue(new Sn(.068,.068,.04,14),Wi(ed));Ce.position.y=-.37,he.add(Ce);let me=Gi(new jt(.072,20,14),Bo);me.position.y=-.43,me.scale.set(1,1.08,.9),he.add(me);let be=Gi(new As(.022,.04,4,8),Bo);return be.position.set(-ce*.05,-.41,.04),be.rotation.z=ce*.6,he.add(be),he}),d=new Ct;d.position.y=1.12,e.add(d),d.add(new Ue(new Sn(.07,.08,.1,14),Wi(Bo)));let u=new Ue(new Rs(.085,.022,8,20),Wi(ed));u.rotation.x=Math.PI/2,u.position.y=-.03,d.add(u);let p=new Ct;p.position.y=.06,d.add(p);let g=Gi(new jt(.35,48,36),Bo);g.scale.set(1,.97,.94),g.position.y=.34,p.add(g);for(let ce of[-1,1]){let he=Gi(new jt(.075,16,12),Bo);he.scale.set(.6,1,.8),he.position.set(.34*ce,.33,0),p.add(he)}let m=Gi(new jt(.03,16,12),Bo);m.position.set(0,.31,.33),m.scale.set(1,.8,.9),p.add(m);let x=document.createElement("canvas");x.width=Pv,x.height=Iv;let v=x.getContext("2d"),T=new Fn(x);T.colorSpace=zt,T.anisotropy=8;let y=new Ue(new jt(.3535,48,32,Math.PI/2-.9,1.8,.9,1.35),new Pr({map:T,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}));y.renderOrder=2,g.add(y);let M=Gi(new jt(.372,40,20,0,Math.PI*2,0,Math.PI*.52),ko);M.position.set(0,.36,-.035),M.rotation.x=-.32,p.add(M);let b=[[.27,.5,.1,.13],[-.27,.5,.1,.13],[0,.66,-.05,.2]];for(let[ce,he,Me,Ce]of b){let me=Gi(new jt(Ce,20,14),ko);me.position.set(ce,he,Me),me.scale.set(1.1,.75,1),p.add(me)}for(let[ce,he,Me,Ce,me,be,je,et]of[[0,.6,.2,1.75,.62,.95,-.25,0],[-.08,.7,.12,1.2,.62,1,-.5,.25],[.1,.71,.1,1.1,.6,1,-.5,-.3],[0,.76,0,1.3,.55,1.1,-.2,0]]){let W=Gi(new jt(.17,28,18),ko);W.position.set(ce,he,Me),W.scale.set(Ce,me,be),W.rotation.set(je,0,et),p.add(W)}let _=Gi(new Rs(.075,.035,10,24,Math.PI*1.4),ko);_.position.set(.03,.8,.2),_.rotation.set(0,Math.PI/2,.6),p.add(_);for(let ce of[-1,1]){let he=new Ue(new wn(.05,.12,.07,1,.02),Wi(ko));he.position.set(.325*ce,.32,.08),p.add(he)}{let ce=new As(.045,.15,4,8),he=3,Me=()=>(he=he*16807%2147483647)/2147483647;for(let Ce=0;Ce<56;Ce++){let me=Me()*Math.PI*2,be=Me()*Math.PI*.42,je=new F(Math.sin(be)*Math.cos(me),Math.cos(be),Math.sin(be)*Math.sin(me)-.08).normalize();if(je.z>.3&&je.y<.85)continue;let et=new Ue(ce,Wi(ko));et.castShadow=!0,et.position.copy(je).multiplyScalar(.368).add(new F(0,.37,-.03));let W=je.z>.35?new F(0,.7,1).projectOnPlane(je).normalize():new F(0,-.35,-1).projectOnPlane(je).normalize();et.quaternion.setFromUnitVectors(new F(0,1,0),W),p.add(et)}}let S=new Ct;S.position.set(0,.35,.37),p.add(S);let w=new ln({color:460557,roughness:.04,metalness:.2,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2});for(let ce of[-1,1]){let he=new Ue(new wn(.19,.11,.025,3,.04),w);he.position.set(ce*.115,0,-.01-Math.abs(ce)*.012),he.rotation.y=ce*.28,S.add(he);let Me=new Ue(new wn(.2,.02,.03,1,.008),l);Me.position.set(ce*.115,.055,-.01),Me.rotation.y=ce*.28,S.add(Me)}let E=new Ue(new Bn(.05,.015,.015),l);E.position.y=.03,S.add(E),S.scale.setScalar(.001),S.visible=!1;let D=new Ct;D.position.set(0,.36,-.02),p.add(D);let I=new Ue(new Rs(.4,.028,10,40,Math.PI),new ln({color:1382442,roughness:.3,clearcoat:.6}));D.add(I);for(let ce of[-1,1]){let he=new Ue(new Sn(.1,.1,.07,24),new ln({color:1909312,roughness:.3,clearcoat:.7}));he.rotation.z=Math.PI/2,he.position.set(ce*.39,-.03,0),D.add(he);let Me=new Ue(new Rs(.075,.012,8,24),new mn({color:new Fe(Jt.faience).multiplyScalar(2.4),toneMapped:!1}));Me.rotation.y=Math.PI/2,Me.position.set(ce*.428,-.03,0),D.add(Me)}D.scale.setScalar(.001),D.visible=!1;let N={},P=new Rr(new tr({transparent:!0,depthWrite:!1,toneMapped:!1}));P.position.set(.42,2.15,0),P.scale.setScalar(.001),s.add(P);let B=new Ue(new ho(.42,.58,64),new mn({color:new Fe(Jt.gold),transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1,alphaMap:Ev("#fff","#000",128),side:In}));B.rotation.x=-Math.PI/2,B.position.y=.03,s.add(B);let k=new Cs(16769728,1.6,4.5,1.6);k.position.set(.7,2.1,1.5),s.add(k);let O=new Cs(9414911,.6,4,1.8);O.position.set(-1,1.4,1.2),s.add(O);let q=new Ue(new co(.42,32),new mn({color:0,transparent:!0,opacity:.22,depthWrite:!1,alphaMap:Ev("#fff","#000")}));q.rotation.x=-Math.PI/2,q.position.y=.02,s.add(q),s.scale.setScalar(1.15);let U={mode:"idle",modeT:0,talk:0,walkPhase:0,speed:0,blinkT:2,blink:1,look:new De,spin:0,base:"happy",temp:null,tempT:0,mood:"happy",music:!1,faceKey:""},C=gs.lerp,Z=new Fe(Jt.gold),ue=new Fe,Pe=null;function Y(ce){U.mode!==ce&&(U.mode=ce,U.modeT=0)}function le(ce,he=0){vr[ce]&&(he?(U.temp=ce,U.tempT=he):U.base=ce)}function _e(){U.spin=Math.PI*2,Y("celebrate")}function we(ce,he){ce.visible=!0,ce.userData.target=he?1:.001}function de(ce,he,Me={}){U.modeT+=ce,U.temp&&(U.tempT-=ce,U.tempT<=0&&(U.temp=null));let Ce=U.temp||(Me.sleepy?"sleepy":Me.dizzy?"dizzy":U.music&&!Me.busy?"vibing":U.base);if(Ce!==U.mood){U.mood=Ce;let G=vr[Ce].emote;G!==Pe&&(Pe=G,G&&(P.material.map=N[G]||(N[G]=tA(G)),P.material.needsUpdate=!0,P.userData.pop=0))}let me=vr[Ce],be=Math.min(U.speed/2.4,1);U.walkPhase+=ce*(4+U.speed*3.2);let je=Math.sin(U.walkPhase);t[0].rotation.x=C(t[0].rotation.x,je*.75*be,.3),t[1].rotation.x=C(t[1].rotation.x,-je*.75*be,.3);let et={x:-je*.6*be,z:-.08},W={x:je*.6*be,z:.08},te=Math.sin(he*2.2)*.012,Re=Math.abs(Math.cos(U.walkPhase))*.06*be+te,Be=Math.sin(he*1.3)*.04,Oe=0;if(U.mode==="wave"?(W={x:-.2,z:2.55+Math.sin(he*9)*.32},Be=.12,U.modeT>2.4&&Y("idle")):U.mode==="point"?(W={x:-1.35,z:.45},et={x:.1,z:-.12}):U.mode==="celebrate"?(et={x:0,z:-2.6-Math.sin(he*12)*.2},W={x:0,z:2.6+Math.sin(he*12)*.2},Re+=Math.abs(Math.sin(U.modeT*7))*.25*Math.max(0,1-U.modeT/2),U.modeT>2.2&&Y("idle")):U.mode==="think"&&(W={x:-2.1,z:-.9},Be=-.15),Ce==="vibing"&&be<.2){let G=Math.sin(he*Math.PI*2*1.6);Re+=Math.abs(G)*.03,Be=G*.12,Oe=G*.05,et.z=-.25-Math.abs(G)*.2,W.z=.25+Math.abs(G)*.2}Ce==="sleepy"&&(Be=.25+Math.sin(he*.8)*.05,Re-=.02),Ce==="dizzy"&&(Oe=Math.sin(he*5)*.12,Be=Math.cos(he*5)*.2),Ce==="annoyed"&&be<.2&&(et={x:-.5,z:.9},W={x:-.5,z:-.9}),Ce==="shy"&&be<.2&&(et={x:-.6,z:.5},W={x:-.6,z:-.5},Be=.18),Ce==="thinking"&&U.mode==="idle"&&(W={x:-2.1,z:-.9}),(Ce==="excited"||Ce==="love")&&U.mode==="idle"&&be<.2&&(Re+=Math.abs(Math.sin(he*6))*.05),Ce==="cool"&&U.mode==="idle"&&be<.2&&(W={x:-.3,z:.15},et={x:.1,z:-.5}),f[0].rotation.x=C(f[0].rotation.x,et.x,.18),f[0].rotation.z=C(f[0].rotation.z,et.z,.18),f[1].rotation.x=C(f[1].rotation.x,W.x,.18),f[1].rotation.z=C(f[1].rotation.z,W.z,.18),e.position.y=Re,e.rotation.z=C(e.rotation.z,Oe,.1),n.scale.y=1+te,p.rotation.y=C(p.rotation.y,U.look.x*.5,.08),p.rotation.x=C(p.rotation.x,-U.look.y*.25+(U.talk?Math.sin(he*9)*.03:0),.08),p.rotation.z=C(p.rotation.z,Be,.06),U.blinkT-=ce;let He=1;U.blinkT<.14&&(He=Math.abs(U.blinkT-.07)/.07),U.blinkT<0&&(U.blinkT=2+Math.random()*3);let tt=U.talk?Math.round((.5+.5*Math.sin(he*22))*(.6+.4*Math.sin(he*7.1))*4)/4:0,H=me.eyes==="spiral"||me.eyes==="heart"||me.mouth==="wavy",ot=`${Ce}|${He<.25?0:1}|${tt}|${Math.round(U.look.x*4)}|${Math.round(U.look.y*4)}|${H?Math.floor(he*20):0}`;ot!==U.faceKey&&(U.faceKey=ot,eA(v,{mood:Ce,blink:He,mouth:tt,lx:U.look.x,ly:U.look.y,t:he}),T.needsUpdate=!0);let Xe=!!me.glasses,j=U.music;Xe!==!!S.userData.on&&(S.userData.on=Xe,we(S,Xe)),j!==!!D.userData.on&&(D.userData.on=j,we(D,j));for(let G of[S,D]){let ke=G.userData.target??.001,ve=C(G.scale.x,ke,.18);G.scale.setScalar(ve),ve<.01&&ke<.01&&(G.visible=!1)}if(Pe){P.userData.pop=Math.min(1,(P.userData.pop||0)+ce*4);let G=P.userData.pop,ke=1+Math.sin(G*Math.PI)*.35;P.scale.setScalar(.42*G*ke),P.position.y=2.15+Math.sin(he*3)*.05}else P.scale.setScalar(C(P.scale.x,.001,.2));if(ue.setHex(me.aura),Z.lerp(ue,.06),B.material.color.copy(Z).multiplyScalar(1.6),B.material.opacity=.35+Math.sin(he*3)*.12,B.scale.setScalar(1+Math.sin(he*3)*.04),U.spin>0){let G=Math.min(U.spin,ce*12);U.spin-=G,e.rotation.y+=G}else e.rotation.y=C(e.rotation.y,0,.2)}return{root:s,head:p,st:U,update:de,setMode:Y,setMood:le,poke:_e,headAnchor:()=>p.localToWorld(new F(0,.9,0))}}var Ws=[new F(2.8,0,hn[0]/2+Gs+2.6),new F(-3.3,0,hn[1]/2+1),new F(3.3,0,hn[2]/2+1),new F(-3.3,0,hn[3]/2+1),new F(3.3,0,hn[4]/2+1),new F(-2.9,0,hn[5]/2+1),new F(0,0,2.05)],Nv=Ws.length,nA=vi/8,iA=Gs/8;function nd(s,e){let t=0;for(let n=0;n<hn.length;n++)Math.abs(s)<=hn[n]/2+.05&&Math.abs(e)<=hn[n]/2+.05&&(t=Math.max(t,(n+1)*vi));if(Math.abs(s)<=1.3)for(let n=0;n<hn.length;n++){let i=hn[n]/2,r=i+Gs;e>=i&&e<=r&&(t=Math.max(t,Vs(n)+Math.min(8,Math.ceil((r-e)/iA+1e-4))*nA))}return t}var Km=[];for(let s=0;s<Ws.length-1;s++){let e=Ws[s],t=Ws[s+1],n=[new De(e.x,e.z),new De(0,hn[s]/2+Gs+.35),new De(0,hn[s]/2-.4),new De(t.x,t.z)],i=[0];for(let r=1;r<n.length;r++)i.push(i[r-1]+n[r].distanceTo(n[r-1]));Km.push({pts:n,len:i})}function Qm(s,e=new De){let t=Math.min(Math.floor(s),Km.length-1),n=gs.clamp(s-t,0,1);if(s>=Ws.length-1)return e.set(Ws[Ws.length-1].x,Ws[Ws.length-1].z),e;let i=Km[t],r=n*i.len[i.len.length-1],o=1;for(;o<i.len.length-1&&i.len[o]<r;)o++;let a=(r-i.len[o-1])/(i.len[o]-i.len[o-1]||1);return e.copy(i.pts[o-1]).lerp(i.pts[o],a)}var Uv=s=>{let e=Ws[s].clone();return e.y=nd(e.x,e.z),e};var jm=["Ground","Foundation","Stack","Work","Research","Arena","Capstone"],Ov=["wave","point","think","point","point","celebrate","wave"],Fv={en:[["Hey! I'm Adham. Well, the mini version.","This pyramid is my stack. Every step is one layer of what I do.","Scroll and I'll climb it with you. Click me if you get bored."],["Step one: the foundation.","I study AI & Data Science at Badya University, class of 2028.","My favourite part is the backend: APIs, databases, the logic nobody sees."],["These are my tools. They orbit me all day.","Node.js and PostgreSQL for servers, C++ for contests, Python for data.","And tests. Lots of tests."],["My projects! Real screenshots, real repos.","SmartHabbit is my main one. I built most of its backend.","See the space game on that screen? We built it for NASA Space Apps 2026."],["Research level. Watch the particles.","Sensor data goes to XGBoost, network traffic goes to Isolation Forest.","They meet in the gold node and become one risk score. It is on IEEE Xplore!"],["The arena! In ICPC, every balloon means a solved problem.","88th in the ECPC qualifications in 2025, 177th in 2026. The next one is mine.","And that rocket? Still orbiting since Space Apps."],["We made it to the top!","Write me a request below and the capstone will fire it.","I reply faster than my APIs. Almost."]],ar:[["\u0623\u0647\u0644\u0627\u064B! \u0623\u0646\u0627 \u0623\u062F\u0647\u0645\u2026 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0645\u064A\u0646\u064A \u064A\u0639\u0646\u064A \u{1F604}","\u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0647\u0648 \u0627\u0644\u0640 stack \u0628\u062A\u0627\u0639\u064A\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u0641\u064A\u0647 \u0637\u0628\u0642\u0629 \u0645\u0646 \u0634\u063A\u0644\u064A.","\u0627\u0639\u0645\u0644 scroll \u0648\u0623\u0646\u0627 \u0647\u0637\u0644\u0639 \u0645\u0639\u0627\u0643 \u062F\u0631\u062C\u0629 \u062F\u0631\u062C\u0629. \u0648\u0644\u0648 \u0632\u0647\u0642\u062A \u062F\u0648\u0633 \u0639\u0644\u064A\u0651\u0627."],["\u0623\u0648\u0644 \u062F\u0631\u062C\u0629: \u0627\u0644\u0623\u0633\u0627\u0633.","\u0628\u062F\u0631\u0633 AI \u0648 Data Science \u0641\u064A \u062C\u0627\u0645\u0639\u0629 \u0628\u0627\u062F\u064A\u0629\u060C \u062F\u0641\u0639\u0629 2028.","\u0628\u0633 \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629 \u0628\u062D\u0628\u0647\u0627 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F: \u0627\u0644\u0640 APIs \u0648\u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u0644\u064A \u0645\u062D\u062F\u0634 \u0628\u064A\u0634\u0648\u0641\u0647."],["\u062F\u064A \u0623\u062F\u0648\u0627\u062A\u064A\u060C \u0628\u062A\u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0627 \u0637\u0648\u0644 \u0627\u0644\u064A\u0648\u0645.","Node.js \u0648 PostgreSQL \u0644\u0644\u0633\u064A\u0631\u0641\u0631\u0627\u062A\u060C C++ \u0644\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062A\u060C \u0648 Python \u0644\u0644\u062F\u0627\u062A\u0627.","\u0648\u062A\u0633\u062A\u0627\u062A\u2026 \u062A\u0633\u062A\u0627\u062A \u0643\u062A\u064A\u0631."],["\u062F\u064A \u0645\u0634\u0627\u0631\u064A\u0639\u064A! \u0633\u0643\u0631\u064A\u0646 \u0634\u0648\u062A\u0633 \u062D\u0642\u064A\u0642\u064A\u0629 \u0648\u0631\u064A\u0628\u0648\u0632 \u062D\u0642\u064A\u0642\u064A\u0629.","SmartHabbit \u0623\u0647\u0645\u0647\u0645\u060C \u0648\u0623\u0646\u0627 \u0639\u0627\u0645\u0644 \u0623\u063A\u0644\u0628 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639\u0647.","\u0634\u0627\u064A\u0641 \u0644\u0639\u0628\u0629 \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629\u061F \u0639\u0645\u0644\u0646\u0627\u0647\u0627 \u0641\u064A \u0647\u0627\u0643\u0627\u062B\u0648\u0646 \u0646\u0627\u0633\u0627 Space Apps 2026."],["\u062F\u064A \u062F\u0631\u062C\u0629 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0639\u0644\u0645\u064A. \u0628\u0635 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0644\u064A \u0628\u062A\u062C\u0631\u064A.","\u062F\u0627\u062A\u0627 \u0627\u0644\u062D\u0633\u0627\u0633\u0627\u062A \u0628\u062A\u0631\u0648\u062D \u0644\u0640 XGBoost\u060C \u0648\u062A\u0631\u0627\u0641\u064A\u0643 \u0627\u0644\u0634\u0628\u0643\u0629 \u0628\u064A\u0631\u0648\u062D \u0644\u0640 Isolation Forest.","\u0628\u064A\u062A\u0642\u0627\u0628\u0644\u0648\u0627 \u0641\u064A \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062F\u0647\u0628 \u0648\u064A\u0637\u0644\u0639\u0648\u0627 risk score \u0648\u0627\u062D\u062F. \u0648\u0627\u0644\u0648\u0631\u0642\u0629 \u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 IEEE Xplore!"],["\u0627\u0644\u0623\u0631\u064A\u0646\u0627! \u0641\u064A \u0627\u0644\u0640 ICPC \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A.","\u0627\u0644\u0645\u0631\u0643\u0632 88 \u0641\u064A \u062A\u0635\u0641\u064A\u0627\u062A ECPC \u0633\u0646\u0629 2025\u060C \u0648177 \u0641\u064A 2026. \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u064A.","\u0648\u0627\u0644\u0635\u0627\u0631\u0648\u062E \u062F\u0647\u061F \u0644\u0633\u0647 \u0628\u064A\u0644\u0641 \u0645\u0646 \u0623\u064A\u0627\u0645 Space Apps."],["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u0642\u0645\u0629!","\u0627\u0628\u0639\u062A\u0644\u064A request \u0645\u0646 \u062A\u062D\u062A\u060C \u0648\u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628 \u0647\u062A\u0637\u0644\u0642\u0647.","\u0628\u0631\u062F \u0623\u0633\u0631\u0639 \u0645\u0646 \u0627\u0644\u0640 APIs \u0628\u062A\u0627\u0639\u062A\u064A\u2026 \u062A\u0642\u0631\u064A\u0628\u0627\u064B."]]},Bv={en:["Hey, that tickles!","Status 418: I'm a teapot.","Did you try turning it off and on again?","SELECT * FROM snacks;","My code works and I know exactly why. Mostly.","Rate limit: 5 pokes per 15 minutes. Just kidding."],ar:["\u0628\u062A\u0632\u063A\u0632\u063A\u0646\u064A \u0643\u062F\u0647!","Status 418: \u0623\u0646\u0627 \u0628\u0631\u0627\u062F \u0634\u0627\u064A \u2615","\u062C\u0631\u0628\u062A \u062A\u0642\u0641\u0644\u0647 \u0648\u062A\u0641\u062A\u062D\u0647 \u062A\u0627\u0646\u064A\u061F","SELECT * FROM snacks;","\u0627\u0644\u0643\u0648\u062F \u0634\u063A\u0627\u0644 \u0648\u0623\u0646\u0627 \u0639\u0627\u0631\u0641 \u0644\u064A\u0647\u2026 \u063A\u0627\u0644\u0628\u0627\u064B.","Rate limit: \u062E\u0645\u0633 \u0632\u0642\u0627\u062A \u0643\u0644 \u0631\u0628\u0639 \u0633\u0627\u0639\u0629. \u0628\u0647\u0632\u0631."]},kv={en:"201 Created! Your request reached the top.",ar:"201 Created! \u0627\u0644\u0631\u064A\u0643\u0648\u064A\u0633\u062A \u0628\u062A\u0627\u0639\u0643 \u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629."},Jc={balloon:{en:"Pop! Every balloon is a solved problem. It comes back when I solve another one.",ar:"\u0628\u0648\u0645! \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A\u060C \u0648\u0647\u062A\u0631\u062C\u0639 \u0644\u0645\u0627 \u0623\u062D\u0644 \u0648\u0627\u062D\u062F\u0629 \u0643\u0645\u0627\u0646."},rocket:{en:"Full thrust! Same energy as hackathon weekend.",ar:"Full thrust! \u0646\u0641\u0633 \u0637\u0627\u0642\u0629 \u0648\u064A\u0643 \u0625\u0646\u062F \u0627\u0644\u0647\u0627\u0643\u0627\u062B\u0648\u0646."},moon:{en:"The Moon from Level 0 of CAPCOM: Storm Watch says hi.",ar:"\u0627\u0644\u0642\u0645\u0631 \u0628\u062A\u0627\u0639 Level 0 \u0641\u064A \u0644\u0639\u0628\u0629 CAPCOM \u0628\u064A\u0633\u0644\u0651\u0645 \u0639\u0644\u064A\u0643."},cap:{en:"You found the capstone! Now send me a real request below.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628! \u0627\u0628\u0639\u062A\u0644\u064A \u0628\u0642\u0649 request \u0628\u062C\u062F \u0645\u0646 \u062A\u062D\u062A."}},zv={"C++":["ICPC contests and Sentinel FDS, a Qt desktop app.","\u0645\u0633\u0627\u0628\u0642\u0627\u062A ICPC\u060C \u0648 Sentinel FDS \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 Qt."],TypeScript:["The SmartHabbit backend and the BU-LabTrack frontend.","\u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639 SmartHabbit \u0648\u0627\u0644\u0641\u0631\u0648\u0646\u062A \u0628\u062A\u0627\u0639 BU-LabTrack."],JavaScript:["CAPCOM: Storm Watch and this whole pyramid.","\u0644\u0639\u0628\u0629 CAPCOM \u0648\u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0643\u0644\u0647."],Python:["The IoT Sentinel experiments and Shubha's fraud model.","\u062A\u062C\u0627\u0631\u0628 IoT Sentinel \u0648\u0645\u0648\u062F\u064A\u0644 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0644 \u0628\u062A\u0627\u0639 \u0634\u064F\u0628\u0647\u0629."],SQL:["Every schema I design. SmartHabbit has 11 migrations.","\u0643\u0644 \u0633\u0643\u064A\u0645\u0627 \u0628\u0639\u0645\u0644\u0647\u0627. SmartHabbit \u0641\u064A\u0647 11 migration."],Java:["ITI DevBelt OOP and the HackerRank certificate.","\u0643\u0648\u0631\u0633 OOP \u0641\u064A ITI \u0648\u0634\u0647\u0627\u062F\u0629 HackerRank."],"C#":["University coursework, and a lot of curiosity.","\u0634\u063A\u0644 \u0627\u0644\u062C\u0627\u0645\u0639\u0629\u2026 \u0648\u0641\u0636\u0648\u0644 \u0643\u062A\u064A\u0631."],"Node.js":["My main backend runtime: SmartHabbit and BU-LabTrack.","\u0627\u0644\u0640 runtime \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0628\u062A\u0627\u0639\u064A: SmartHabbit \u0648 BU-LabTrack."],Express:["Routes, middleware and error handling in SmartHabbit.","\u0627\u0644\u0640 routes \u0648\u0627\u0644\u0640 middleware \u0648\u0627\u0644\u0640 error handling \u0641\u064A SmartHabbit."],REST:["BU-LabTrack: labs, equipment, reservations, maintenance.","BU-LabTrack: \u0645\u0639\u0627\u0645\u0644 \u0648\u0623\u062C\u0647\u0632\u0629 \u0648\u062D\u062C\u0648\u0632\u0627\u062A \u0648\u0635\u064A\u0627\u0646\u0629."],JWT:["Access + refresh tokens, with bcrypt and rate limits.","Access \u0648 refresh tokens \u0645\u0639 bcrypt \u0648 rate limit."],"socket.io":["Real-time chat and notifications in SmartHabbit.","\u0627\u0644\u0634\u0627\u062A \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u062D\u0638\u064A\u0629 \u0641\u064A SmartHabbit."],PostgreSQL:["SmartHabbit's database, tested against a scratch DB.","\u062F\u0627\u062A\u0627\u0628\u064A\u0632 SmartHabbit\u060C \u0648\u0645\u062A\u064A\u0633\u0651\u062A\u0629 \u0639\u0644\u0649 \u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0645\u0624\u0642\u062A\u0629."],SQLite:["Sentinel FDS stores its transactions in SQLite.","Sentinel FDS \u0628\u064A\u062E\u0632\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A SQLite."],MySQL:["Database courses and side projects.","\u0643\u0648\u0631\u0633\u0627\u062A \u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0645\u0634\u0627\u0631\u064A\u0639 \u062C\u0627\u0646\u0628\u064A\u0629."],XGBoost:["The supervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 supervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],"Isolation Forest":["The unsupervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 unsupervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],"Power BI":["DataCamp: Introduction to Power BI.","\u0643\u0648\u0631\u0633 Power BI \u0639\u0644\u0649 DataCamp."],React:["BU-LabTrack's frontend, with shadcn/ui.","\u0641\u0631\u0648\u0646\u062A BU-LabTrack \u0645\u0639 shadcn/ui."],"three.js":["CAPCOM: Storm Watch, and the pyramid you're standing on.","\u0644\u0639\u0628\u0629 CAPCOM\u060C \u0648\u0627\u0644\u0647\u0631\u0645 \u0627\u0644\u0644\u064A \u0625\u0646\u062A \u0648\u0627\u0642\u0641 \u0639\u0644\u064A\u0647."],Docker:["SmartHabbit ships in a non-root Docker image.","SmartHabbit \u0628\u064A\u062A\u0634\u062D\u0646 \u0641\u064A Docker image \u0645\u0646 \u063A\u064A\u0631 root."],Git:["Every project. Small commits, clear messages.","\u0643\u0644 \u0645\u0634\u0631\u0648\u0639. commits \u0635\u063A\u064A\u0631\u0629 \u0648\u0631\u0633\u0627\u064A\u0644 \u0648\u0627\u0636\u062D\u0629."],Jest:["Integration tests with supertest in SmartHabbit.","\u062A\u0633\u062A\u0627\u062A integration \u0645\u0639 supertest \u0641\u064A SmartHabbit."],Postman:["Testing every API before the frontend touches it.","\u0628\u062C\u0631\u0628 \u0643\u0644 API \u0642\u0628\u0644 \u0645\u0627 \u0627\u0644\u0641\u0631\u0648\u0646\u062A \u064A\u0644\u0645\u0633\u0647."],Qt:["Sentinel FDS, a C++17 desktop app.","Sentinel FDS\u060C \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 C++17."],Vercel:["CAPCOM is deployed there, with a serverless function.","CAPCOM \u0645\u062A\u0646\u0634\u0631\u0629 \u0647\u0646\u0627\u0643 \u0645\u0639 serverless function."]},Hv=["happy","focused","thinking","excited","focused","cool","happy"],ys={term:{en:'Ooh, a terminal. Type "help".',ar:"\u062A\u064A\u0631\u0645\u064A\u0646\u0627\u0644! \u0627\u0643\u062A\u0628 help."},threatHi:{en:"Critical risk! The fusion layer would raise the alarm right now.",ar:"\u062E\u0637\u0631 \u0639\u0627\u0644\u064A \u062C\u062F\u0627\u064B! \u0637\u0628\u0642\u0629 \u0627\u0644\u0640 fusion \u0643\u0627\u0646\u062A \u0647\u062A\u0636\u0631\u0628 \u0625\u0646\u0630\u0627\u0631 \u062D\u0627\u0644\u0627\u064B."},gameStart:{en:"Go go go! Pop them before they fly away!",ar:"\u064A\u0644\u0627 \u064A\u0644\u0627! \u0641\u0631\u0642\u0639\u0647\u0645 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0637\u064A\u0631\u0648\u0627!"},gameEnd:{en:s=>`${s} balloons! ${s>=8?"That's a gold-medal pace.":"Not bad. Try again?"}`,ar:s=>`${s} \u0628\u0627\u0644\u0648\u0646\u0629! ${s>=8?"\u062F\u0647 \u0645\u0633\u062A\u0648\u0649 \u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u062F\u0647\u0628.":"\u0645\u0634 \u0648\u062D\u0634. \u062A\u062C\u0631\u0628 \u062A\u0627\u0646\u064A\u061F"}`},wake:{en:"Huh? I wasn't sleeping. I was\u2026 compiling.",ar:"\u0647\u0627\u061F \u0623\u0646\u0627 \u0645\u0643\u0646\u062A\u0634 \u0646\u0627\u064A\u0645\u2026 \u0643\u0646\u062A \u0628\u0639\u0645\u0644 compile."},dizzy:{en:"Whoa, slow down! The stairs are spinning.",ar:"\u0628\u0627\u0644\u0631\u0627\u062D\u0629! \u0627\u0644\u0633\u0644\u0645 \u0628\u064A\u0644\u0641 \u0628\u064A\u0627."},shy:{en:"Okay okay, I get it, I'm cute.",ar:"\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635\u060C \u0639\u0631\u0641\u062A \u0625\u0646\u064A \u0643\u064A\u0648\u062A."},annoyed:{en:"Error 429: too many pokes.",ar:"Error 429: \u0632\u0642\u0627\u062A \u0643\u062A\u064A\u0631 \u0623\u0648\u064A."},allArtifacts:{en:"You found all ten artifacts! You'd be a great teammate.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0639\u0634\u0631 \u0642\u0637\u0639 \u0643\u0644\u0647\u0645! \u0625\u0646\u062A \u0647\u062A\u0628\u0642\u0649 teammate \u062C\u0627\u0645\u062F."},focus:{en:"Here it is, up close.",ar:"\u0623\u0647\u0648\u060C \u0645\u0646 \u0642\u0631\u064A\u0628."}};var e0=[{id:"first-step",name:"First step",hint:"Climb to the first level",icon:"\u{13080}"},{id:"summit",name:"Summit",hint:"Reach the capstone",icon:"\u{13274}"},{id:"poker",name:"Poker face",hint:"Poke mini-Adham 5 times",icon:"\u{13000}"},{id:"moonwalker",name:"Moonwalker",hint:"Click the moon",icon:"\u{131F9}"},{id:"popper",name:"Balloon popper",hint:"Score 8+ in Balloon Rush",icon:"\u{131A3}"},{id:"red-team",name:"Red team",hint:"Max out the attack in Research",icon:"\u{132F9}"},{id:"root",name:"Root access",hint:"Open the terminal",icon:"\u{133CF}"},{id:"polyglot",name:"Polyglot",hint:"Make the guide speak Arabic",icon:"\u{13153}"},{id:"dj",name:"DJ",hint:"Turn the sound on",icon:"\u{13296}"},{id:"hired",name:"201 Created",hint:"Send a real request",icon:"\u{1339B}"}],Gv="adham-artifacts",zo=new Set;try{zo=new Set(JSON.parse(localStorage.getItem(Gv)||"[]"))}catch{}var Vv=[],An={list:e0,has:s=>zo.has(s),count:()=>zo.size,onUnlock:s=>Vv.push(s),unlock(s){if(zo.has(s))return!1;let e=e0.find(t=>t.id===s);if(!e)return!1;zo.add(s);try{localStorage.setItem(Gv,JSON.stringify([...zo]))}catch{}return Vv.forEach(t=>t(e,zo.size,e0.length)),!0}};Wt.registerPlugin(ft,Kf);var it=s=>document.querySelector(s),yr=matchMedia("(prefers-reduced-motion: reduce)").matches,sl=()=>innerWidth<=820,Kc=Nv,on="en";try{on=localStorage.getItem("adham-guide-lang")||"en"}catch{}var Ss=new vv({smoothWheel:!yr,lerp:.085,autoRaf:!1});Ss.on("scroll",ft.update);Wt.ticker.add(s=>Ss.raf(s*1e3));Wt.ticker.lagSmoothing(0);var ol=[...document.querySelectorAll(".sec")],rl=s=>Ss.scrollTo(ol[s],{offset:s===0?0:-Math.max(0,(innerHeight-ol[s].offsetHeight)/2),duration:yr?0:2.2});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",e=>{e.preventDefault(),rl(+s.dataset.go)}));function t0(){let s=it("#name"),e="Adham Harp",t=Array.from("\u{13080}\u{130ED}\u{131A3}\u{131F3}\u{13296}\u{132F9}\u{1339B}\u{133CF}\u{13153}\u{13216}\u{13000}\u{13079}\u{13193}\u{1336F}");if(yr){s.textContent=e;return}let n={p:0};Wt.to(n,{p:1,duration:2.4,ease:"power2.inOut",onUpdate(){let i=Math.floor(n.p*e.length);s.innerHTML=[...e].map((r,o)=>o<i||r===" "?r:`<span class="gl">${t[Math.random()*t.length|0]}</span>`).join("")},onComplete(){s.textContent=e}})}var id=it("#scene"),yi;try{yi=new Yu({canvas:id,antialias:!0,powerPreference:"high-performance"})}catch{yi=null}var bt=rA();yi?sA().catch(s=>{console.error(s),it("#loader").classList.add("done"),t0(),i0()}):(id.remove(),it("#loader").classList.add("done"),t0(),i0());async function sA(){await Promise.race([Promise.all(["700 54px Unbounded",'600 42px "Instrument Sans"'].map(j=>document.fonts.load(j))),new Promise(j=>setTimeout(j,2500))]);let s=Math.min(devicePixelRatio,sl()?1.5:1.75);yi.setPixelRatio(s),yi.setSize(innerWidth,innerHeight,!1),yi.toneMapping=mo,yi.toneMappingExposure=1.12,yi.shadowMap.enabled=!0,yi.shadowMap.type=fo;let e=new oo;e.fog=new Tl(923202,.0072);let t=new $n(42,innerWidth/innerHeight,.1,1500),n=new va,i=0,r=1;n.onProgress=(j,G,ke)=>{i=G,r=ke,n0(G/ke)};let o=sl()||(navigator.hardwareConcurrency||8)<=4?"low":"high",a=Tv(e,yi,n,o),l=Lv();e.add(l.root);let c=j=>typeof j=="object"?j[on]:j,h=performance.now(),f=!1,d=[],u=null;for(let j of["pointermove","keydown","wheel","touchstart"])addEventListener(j,()=>{h=performance.now()},{passive:!0});bt.mood=j=>l.setMood(j,4),document.querySelectorAll("[data-skill]").forEach(j=>j.addEventListener("click",()=>{document.querySelectorAll("[data-skill].on").forEach(ve=>ve.classList.remove("on")),j.classList.add("on");let G=j.dataset.skill,ke=zv[G];a.highlightSkill&&a.highlightSkill(G),ke&&bt.say(`${G}: ${ke[on==="ar"?1:0]}`,{temp:!0,hold:5200}),l.setMood("excited",2.5),tn.play("arrive")})),document.querySelectorAll(".see3d").forEach(j=>j.addEventListener("click",()=>{let G=a.props.screens?.[j.dataset.screen];if(!G)return;let ke=new F;G.getWorldPosition(ke);let ve=new F(0,0,1).applyQuaternion(G.getWorldQuaternion(new li));u={tgt:ke,pos:ke.clone().add(ve.multiplyScalar(2.6)).add(new F(0,.25,0)),k:0,q:me},l.setMode("point"),l.setMood("excited",3),bt.say(c(ys.focus),{temp:!0}),tn.play("whoosh")}));let p=it("#threat"),g=it("#risk-out");p.addEventListener("input",()=>{let j=p.value/100,G=Math.min(3,Math.floor(j*4-1e-4));a.props.research.userData.threat=j,g.dataset.tier=Math.max(0,G),g.querySelector("b").textContent=["Low","Medium","High","Critical"][Math.max(0,G)],j>.95?(An.unlock("red-team"),l.setMood("surprised",2.5),p.dataset.warned||(p.dataset.warned=1,bt.say(c(ys.threatHi),{temp:!0}))):j>.6?l.setMood("worried",2):j>.3&&l.setMood("focused",2)});let m=it("#game-hud"),x=it("#g-score"),v=it("#g-time"),T=it("#best"),y=0;try{y=+localStorage.getItem("adham-balloon-best")||0}catch{}let M=()=>{T.textContent=y?`Best: ${y}`:""};M(),it("#play").addEventListener("click",()=>{a.game.active||(rl(5),a.game.start(15),m.hidden=!1,l.setMood("excited",16),bt.say(c(ys.gameStart),{temp:!0}),tn.play("whoosh"))}),a.game.onTick=j=>{x.textContent=j.score,v.textContent=Math.max(0,Math.ceil(j.left))},a.game.onEnd=j=>{if(m.hidden=!0,j.score>y){y=j.score;try{localStorage.setItem("adham-balloon-best",y)}catch{}}M(),bt.say(ys.gameEnd[on](j.score),{temp:!0,hold:5e3}),l.setMood(j.score>=8?"cool":"happy",4),l.setMode("celebrate"),j.score>=8&&An.unlock("popper")},An.onUnlock((j,G,ke)=>{l.setMood("love",2.5),tn.play("arrive"),G===ke&&setTimeout(()=>bt.say(c(ys.allArtifacts),{temp:!0,hold:6e3}),1500)});let b=new Vt(innerWidth*s,innerHeight*s,{type:en,samples:4}),_=new Qu(yi,b);_.addPass(new ju(e,t));let S=null;if(o==="high")try{S=new La(e,t,innerWidth,innerHeight),S.output=La.OUTPUT.Default,S.blendIntensity=.85,S.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1,scale:1.1}),_.addPass(S)}catch{S=null}let w=new Da(new De(innerWidth/2,innerHeight/2),.62,.5,.92);_.addPass(w),_.addPass(new ef);let E=new Ia({uniforms:{tDiffuse:{value:null},t:{value:0},amt:{value:.028}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, amt; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
      void main(){ vec2 d = vUv-.5; float r = dot(d,d);
        vec3 c = vec3(texture2D(tDiffuse, vUv - d*r*.005).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + d*r*.005).b);
        c *= 1. - smoothstep(.15,.7,r)*.45;
        c += (h(vUv*800.)-.5)*amt;
        gl_FragColor = vec4(c,1.); }`});_.addPass(E);let D=!0,I=[],N=[],P,B,k=null;function O(){k=sl(),I=[],N=[];for(let j=0;j<Kc;j++){let G=Uv(j);if(j===0){k?(I.push(new F(5.5,3.2,G.z+10)),N.push(new F(2.2,2.6,G.z-2))):(I.push(new F(10,4.6,G.z+13)),N.push(new F(-1.2,6.2,8)));continue}if(j===Kc-1){I.push(new F(-7.5,G.y+3.6,12.5)),N.push(new F(-.6,G.y+2.1,.4));continue}let ke=Math.sign(G.x)||1;I.push(new F(G.x+ke*3.2,G.y+3.3,G.z+10.5)),N.push(new F(G.x*.85+ke*1.2,G.y+1.7,G.z-1.2))}P=new Zi(I,!1,"centripetal"),B=new Zi(N,!1,"centripetal")}O();let q=ol.map(j=>({left:0,right:1,center:.5})[j.dataset.side]??.5),U={k:yr?0:1},C=new F(46,30,90),Z=[],ue=()=>{Z=ol.map(j=>j.offsetTop)};ue(),addEventListener("load",ue),new ResizeObserver(ue).observe(document.body);let Pe=(j,G,ke)=>{let ve=gs.clamp((ke-j)/(G-j),0,1);return ve*ve*(3-2*ve)};function Y(){let j=(Ss.scroll??scrollY)+innerHeight*.5,G=innerHeight*.42,ke=0;for(let ve=1;ve<Z.length;ve++)ke+=Pe(Z[ve]-G,Z[ve]+G,j);return ke}let le=new De,_e=new Hl;addEventListener("pointermove",j=>{le.set(j.clientX/innerWidth*2-1,-(j.clientY/innerHeight)*2+1)}),id.addEventListener("pointerdown",j=>{let G=new De(j.clientX/innerWidth*2-1,-(j.clientY/innerHeight)*2+1);if(_e.setFromCamera(G,t),_e.intersectObject(l.root,!0).length){l.poke(),tn.play("poke");let L=performance.now();d=d.filter(X=>L-X<6e3),d.push(L);let A=d.length;if(A>=5&&An.unlock("poker"),A>=7)l.setMood("dizzy",3),bt.say(c(ys.annoyed),{temp:!0});else if(A>=5)l.setMood("annoyed",3),bt.say(c(ys.annoyed),{temp:!0});else if(A>=3)l.setMood("shy",3),bt.say(c(ys.shy),{temp:!0});else{l.setMood("surprised",1.4);let X=Bv[on];bt.say(X[Math.random()*X.length|0],{temp:!0})}return}let ke=_e.intersectObjects(a.clickables,!1)[0];if(!ke)return;let ve=ke.object,We=ve.userData.onClick;if(We==="gameBalloon"){a.game.hit(ve)&&tn.play("pop");return}if(We==="balloon"){let L=ve.userData.group;if(L.userData.popped)return;L.userData.popped=!0,tn.play("pop"),Wt.to(ve.scale,{x:1.5,y:1.7,z:1.5,duration:.08,onComplete:()=>{ve.visible=!1}}),bt.say(Jc.balloon[on],{temp:!0}),setTimeout(()=>{ve.visible=!0,ve.scale.set(.01,.01,.01),Wt.to(ve.scale,{x:1,y:1.18,z:1,duration:.8,ease:"elastic.out(1,.5)"}),L.userData.popped=!1},5e3)}else We==="rocket"?(a.props.rocket.userData.boost=1,tn.play("whoosh"),bt.say(Jc.rocket[on],{temp:!0})):We==="moon"?(bt.say(Jc.moon[on],{temp:!0}),tn.play("arrive"),An.unlock("moonwalker"),l.setMood("surprised",2)):We==="cap"&&(ce(),bt.say(Jc.cap[on],{temp:!0}))});let we=0,de=!1;function ce(){let j=a.props;tn.play("beam"),l.setMode("celebrate"),a.packetBoost=1,Wt.timeline().to(j.beam.material,{opacity:.85,duration:.35,ease:"power2.out"}).to(j.capLight,{intensity:60,duration:.3},0).to(j.beam.material,{opacity:0,duration:2.4,ease:"power1.in"},.9).to(j.capLight,{intensity:6,duration:2},1),j.rings.forEach((G,ke)=>Wt.fromTo(G.scale,{x:1,y:1,z:1},{x:9,y:9,z:9,duration:2.2,delay:ke*.3,ease:"power2.out"})),j.rings.forEach((G,ke)=>Wt.fromTo(G.material,{opacity:1},{opacity:0,duration:2.2,delay:ke*.3}))}bt.onSend=()=>{ce(),bt.say(kv[on],{temp:!0,hold:5e3}),l.setMood("love",6),An.unlock("hired")},bt.onTerm=()=>{l.setMood("focused",6),An.unlock("root")},bt.onLangSet=()=>{on==="ar"&&An.unlock("polyglot")},bt.onSound=j=>{j&&An.unlock("dj")},bt.setMood=j=>vr[j]?(l.setMood(j,8),!0):!1,bt.onLang=()=>{be=-1},bt.onPoke=()=>{l.poke(),tn.play("poke")};function he(){let j=innerWidth,G=innerHeight;yi.setSize(j,G,!1),_.setSize(j,G),w.setSize(j/2,G/2),S&&S.setSize(j,G),k!==sl()&&O(),t.aspect=j/G,t.fov=j/G<.8?60:j/G<1.2?50:42,t.updateProjectionMatrix()}addEventListener("resize",he),he();let Me=performance.now(),Ce=0,me=Y(),be=-1,je=0,et=-1,W=new De,te=new De,Re=new F,Be=new F;Qm(me,te),l.root.position.set(te.x,nd(te.x,te.y),te.y);let Oe=0,He=0,tt=location.hash.startsWith("#hq"),H=location.hash==="#hqsnap",ot=q[0];function Xe(){let j=performance.now(),G=Math.min((j-Me)/1e3,.05);Me=j,Ce+=G;let ke=Ce,ve=Y();me+=(ve-me)*Math.min(1,G*(yr?30:3.4)),H&&(me=ve),Qm(me,W);let We=W.distanceTo(te),L=l.root;L.position.x=W.x,L.position.z=W.y;let A=nd(W.x,W.y);L.position.y+=(A-L.position.y)*Math.min(1,G*16),l.st.speed+=(We/Math.max(G,.001)-l.st.speed)*.2;let X;We>.004?X=Math.atan2(W.x-te.x,W.y-te.y):X=Math.atan2(t.position.x-L.position.x,t.position.z-L.position.z);let fe=X-L.rotation.y;fe=Math.atan2(Math.sin(fe),Math.cos(fe)),L.rotation.y+=fe*Math.min(1,G*7),te.copy(W),l.st.look.set(le.x*.6,le.y*.5),l.st.talk=bt.talking()?1:0;let se=gs.clamp(me/(Kc-1),0,1);if(P.getPoint(se,t.position),B.getPoint(se,Be),U.k>0&&t.position.lerp(C,U.k*U.k),u&&(Math.abs(me-u.q)>.25&&(u.out=!0),u.k+=((u.out?0:1)-u.k)*Math.min(1,G*3),u.out&&u.k<.01&&(u=null),u)){let Se=u.k*u.k*(3-2*u.k);t.position.lerp(u.pos,Se),Be.lerp(u.tgt,Se)}t.position.x+=le.x*.35,t.position.y+=le.y*.2,t.lookAt(Be);let ge=Math.floor(me),Te=Math.min(ge+1,Kc-1),$=me-ge,ne=sl()?.5:gs.lerp(q[ge],q[Te],$);ot+=(ne-ot)*Math.min(1,G*5);let pe=innerWidth,z=innerHeight,ie=sl()?0:.42;ie?t.setViewOffset(pe*(1+ie),z,pe*ie*ot,0,pe,z):t.setViewOffset(pe,z*1.5,0,z*.4,pe,z);let Q=Math.round(me);Math.abs(me-Q)<.02?je+=H?1:G:je=0,je>.25&&be!==Q&&(be=Q,bt.lines(Fv[on][Q]),l.setMode(Ov[Q]),tn.play("arrive"),l.setMood(Hv[Q]),Q>=1&&An.unlock("first-step"),Q===Kc-1&&An.unlock("summit")),Math.abs(me-be)>.18&&be!==-1&&(be=-1,bt.hide(),l.st.mode!=="celebrate"&&l.setMode("idle")),Q!==et&&(et=Q,bt.level(Q),bt.avoid(ol[Q])),a.packetBoost=Math.max(a.packetBoost,Math.min(1,Math.abs(Ss.velocity||0)/60)),a.update(ke,G,t);let Ae=(performance.now()-h)/1e3,ye=Math.abs(Ss.velocity||0),Ee=Ae>25&&!a.game.active;f&&!Ee&&(l.setMood("surprised",1.6),bt.say(c(ys.wake),{temp:!0})),f=Ee,ye>110&&l.st.mood!=="dizzy"&&bt.say(c(ys.dizzy),{temp:!0}),l.st.music=tn.on,l.update(G,ke,{sleepy:Ee,dizzy:ye>110,busy:We>.004}),bt.moodChip(l.st.mood,vr[l.st.mood].aura);let xe=l.headAnchor();if(Re.copy(xe).project(t),bt.place((Re.x*.5+.5)*innerWidth,(-Re.y*.5+.5)*innerHeight,Re.z<1),(we=(we+1)%6)===0){_e.setFromCamera(le,t);let Se=_e.intersectObject(l.root,!0).length>0,re=Se||_e.intersectObjects(a.clickables,!1).length>0;re!==de&&(de=re,id.style.cursor=re?"pointer":""),bt.hint(Se,(Re.x*.5+.5)*innerWidth,(-Re.y*.5+.5)*innerHeight)}if(E.uniforms.t.value=ke,D?_.render(G):yi.render(e,t),Oe++,!tt&&Oe>30&&(He+=G,Oe>120)){tt=!0;let Se=He/90;Se>.028&&S&&(S.enabled=!1),Se>.034&&(s=1,yi.setPixelRatio(1),he(),Se>.05&&(D=!1,yi.shadowMap.enabled=!1))}}Wt.ticker.add(Xe),location.hash.startsWith("#hq")&&(window.__game=a.game),location.hash==="#debug"&&(window.__dbg=()=>({qS:me,q:Y(),lastSpoken:be,settleT:je,mode:l.st.mode,speed:l.st.speed,pos:l.root.position.toArray().map(j=>+j.toFixed(2)),scroll:Ss.scroll,bounds:Z})),await new Promise(j=>{r<=i&&j(),n.onLoad=j,setTimeout(j,6e3)}),n0(1),setTimeout(()=>{it("#loader").classList.add("done"),t0(),i0(),yr||Wt.to(U,{k:0,duration:3.2,ease:"power3.inOut",onComplete:()=>{Math.round(me)===0&&(be=-1)}})},350)}function n0(s){let e=document.querySelectorAll(".ld-s"),t=Math.round(s*e.length);e.forEach((i,r)=>i.classList.toggle("on",r<t));let n=it("#ld-pct");n&&(n.textContent=`${Math.round(s*100)}%`)}n0(.15);function i0(){yr||(document.querySelectorAll(".sec:not(#hero) .panel").forEach(s=>{let e=s.querySelector("h2"),t=e?Kf.create(e,{type:"words",mask:"words"}):null,n=Wt.timeline({scrollTrigger:{trigger:s,start:"top 82%",toggleActions:"play none none reverse"}});n.from(s,{y:60,opacity:0,duration:.9,ease:"power3.out"}),t&&n.from(t.words,{yPercent:110,duration:.7,stagger:.06,ease:"power3.out"},.15);let i=s.querySelectorAll(".facts li,.chips span,.proj,.arena li,.certs li,.bench li,.pipe li");i.length&&n.from(i,{y:14,opacity:0,duration:.5,stagger:.03,ease:"power2.out"},.3)}),Wt.from(".hero-panel > :not(h1)",{y:24,opacity:0,duration:1,stagger:.12,ease:"power3.out",delay:.5}))}function rA(){let s=it("#bubble"),e=it("#bubble-text"),t=it("#bubble-next"),n=it("#poke-hint"),i=[],r=0,o=null,a=!1,l=null,c=null,h=!1,f={onSend:null,onLang:null,onPoke:null};function d(te){clearTimeout(l),o&&o.kill(),e.innerHTML="";let Re=document.createElement("span");Re.className="ghost",Re.textContent=te;let Be=document.createElement("span");Be.className="typed",e.append(Re,Be),a=!0,s.hidden=!1,s.dir=on==="ar"?"rtl":"ltr",s.lang=on,h||(h=!0,Wt.fromTo(s,{scale:.6,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2)"}));let Oe=Array.from(te),He={n:0};o=Wt.to(He,{n:Oe.length,duration:yr?0:Math.min(2.6,Oe.length*.028),ease:"none",onUpdate:()=>{let tt=Math.round(He.n);tt!==Be.textContent.length&&tt%2===0&&tn.play("tick"),Be.textContent=Oe.slice(0,tt).join("")},onComplete:()=>{a=!1,Be.textContent=te,r<i.length-1&&(l=setTimeout(()=>u(),2600))}})}function u(){r<i.length-1?(r++,d(i[r])):i.length&&(r=0,d(i[0]))}t.addEventListener("click",()=>{clearTimeout(c),u()}),s.addEventListener("click",te=>{(te.target===s||te.target===e)&&(clearTimeout(c),u())}),f.lines=te=>{clearTimeout(c),i=te,r=0,d(te[0])},f.say=(te,{temp:Re,hold:Be=3200}={})=>{let Oe=i.slice(),He=r;d(te),clearTimeout(c),Re&&Oe.length&&(c=setTimeout(()=>{i=Oe,r=He,d(i[r])},Be))},f.hide=()=>{clearTimeout(l),h&&(h=!1,a=!1,o&&o.kill(),Wt.to(s,{scale:.7,opacity:0,duration:.2,onComplete:()=>{h||(s.hidden=!0)}}))},f.talking=()=>a;let p=0,g=0,m=null,x="";f.avoid=te=>{m=te?te.querySelector(".panel"):null,x=te?te.dataset.side:""},f.place=(te,Re,Be)=>{if(s.hidden)return;p=s.offsetWidth,g=s.offsetHeight;let Oe=te-40,He=Re-g-22,tt=!1;if(He<76&&(He=Re+34,tt=!0),m&&innerWidth>820){let H=m.getBoundingClientRect();H.bottom>He&&H.top<He+g&&(x==="left"&&Oe<H.right+14&&(Oe=H.right+14),x==="right"&&Oe+p>H.left-14&&(Oe=H.left-p-14))}Oe=Math.max(12,Math.min(innerWidth-p-12,Oe)),He=Math.max(70,Math.min(innerHeight-g-12,He)),s.classList.toggle("below",tt),s.style.setProperty("--tail",`${Math.max(22,Math.min(p-22,te-Oe))}px`),s.style.transform=`translate(${Oe}px,${He}px)`,s.style.visibility=Be?"visible":"hidden"},f.hint=(te,Re,Be)=>{n.classList.toggle("on",te&&!h),te&&(n.style.transform=`translate(${Re+30}px,${Be+40}px)`)};let v=it("#mini"),T=it("#mini-label"),y=[86,74,62,50,38,26,14];v.innerHTML=y.map((te,Re)=>`<rect data-i="${Re}" x="${(90-te)/2}" y="${128-Re*19}" width="${te}" height="16" rx="2"><title>${jm[Re]}</title></rect>`).join(""),v.querySelectorAll("rect").forEach(te=>te.addEventListener("click",()=>rl(+te.dataset.i)));let M=document.querySelectorAll(".links a");f.level=te=>{f.current=te,v.querySelectorAll("rect").forEach((Re,Be)=>{Re.classList.toggle("on",Be===te),Re.classList.toggle("done",Be<te)}),T.textContent=jm[te],M.forEach(Re=>Re.classList.toggle("on",+Re.dataset.go===te))};let b=it("#lang"),_=()=>{b.textContent=on==="ar"?"EN":"\u0639",b.setAttribute("aria-label",on==="ar"?"Switch the guide to English":"Switch the guide to Egyptian Arabic"),document.documentElement.classList.toggle("ar",on==="ar")};b.addEventListener("click",()=>{on=on==="ar"?"en":"ar";try{localStorage.setItem("adham-guide-lang",on)}catch{}_(),f.onLang&&f.onLang(),f.onLangSet&&f.onLangSet()}),_();let S={name:it("#f-name"),email:it("#f-email"),role:it("#f-role"),msg:it("#f-msg")},w=it("#req-preview"),E=it("#req-status"),D=te=>JSON.stringify(te),I="adhamharp994@gmail.com",N=`https://formsubmit.co/ajax/${I}`,P=()=>`POST /api/hire HTTP/1.1
Host: adham107harp.github.io
Content-Type: application/json

{
  "from": ${D(S.name.value||"you")},
  "replyTo": ${D(S.email.value||"you@company.com")},
  "about": ${D(S.role.value||"an opportunity")},
  "message": ${D((S.msg.value||"\u2026").slice(0,140))}
}`,B=()=>{w.textContent=P()};Object.values(S).forEach(te=>te.addEventListener("input",B)),B();let k=!1;it("#req").addEventListener("submit",async te=>{if(te.preventDefault(),k)return;let Re=S.name.value.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(S.email.value.trim())?S.msg.value.trim()?null:S.msg:S.email:S.name;if(Re){E.textContent=`400 Bad Request: ${Re===S.email?"that email doesn't look right":`the ${Re.name==="msg"?"message":Re.name} is empty`}.`,Re.focus(),f.mood&&f.mood("worried");return}if(it("#req .hp").value)return;k=!0;let Be=it("#send-btn");Be.disabled=!0,Be.textContent="Sending\u2026";let Oe=performance.now();w.textContent=P()+`

\u2026 awaiting response`;try{let He=await fetch(N,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:S.name.value.trim(),email:S.email.value.trim(),topic:S.role.value.trim()||"(none)",message:S.msg.value.trim(),_subject:`Portfolio: ${S.role.value.trim()||"new message"} from ${S.name.value.trim()}`,_template:"table",_captcha:"false",_replyto:S.email.value.trim()})}),tt=await He.json().catch(()=>({}));if(!He.ok||String(tt.success)!=="true")throw new Error(tt.message||He.status);let H=Math.round(performance.now()-Oe);w.textContent=P()+`

HTTP/1.1 201 Created  (${H} ms)
{ "delivered": true, "to": "Adham's inbox" }`,E.textContent="201 Created. Delivered to my inbox. I'll reply to your email.",f.onSend&&f.onSend(),S.msg.value=""}catch{let tt=`mailto:${I}?subject=${encodeURIComponent(`Portfolio: ${S.role.value||"Hello"}`)}&body=${encodeURIComponent(S.msg.value)}`;w.textContent=P()+`

HTTP/1.1 503 Service Unavailable
{ "fallback": "email" }`,E.innerHTML="",E.append("The relay didn't answer. ");let H=document.createElement("a");H.href=tt,H.textContent=`Email me at ${I}`,E.append(H," instead."),f.mood&&f.mood("worried")}finally{k=!1,Be.disabled=!1,Be.textContent="Send request"}}),it("#copy-mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(I),E.textContent=`Copied ${I}`}catch{E.textContent=I}});let O=it("#term"),q=it("#term-out"),U=it("#term-in"),C=(te,Re="")=>{let Be=document.createElement("div");Re&&(Be.className=Re),Be.textContent=te,q.appendChild(Be),q.scrollTop=q.scrollHeight},Z={home:0,hero:0,about:1,stack:2,work:3,projects:3,research:4,arena:5,contact:6},ue={artifacts:()=>(et(),"opening the artifact case\u2026"),moods:()=>"moods: happy excited focused thinking cool surprised shy annoyed sleepy dizzy love worried vibing \xB7 try: mood cool",help:()=>"commands: moods \xB7 mood <name> \xB7 artifacts \xB7 whoami \xB7 ls \xB7 cat about \xB7 projects \xB7 research \xB7 arena \xB7 contact \xB7 goto <section> \xB7 lang ar|en \xB7 poke \xB7 sudo hire adham \xB7 clear \xB7 exit",whoami:()=>"Adham Harp \u2014 AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).",ls:()=>"about/  stack/  work/  research/  arena/  contact/  capstone.gold","cat about":()=>"Backend first, AI on top. Builds APIs, databases and the logic behind products. Class of 2028.",projects:()=>"SmartHabbit (backend) \xB7 BU-LabTrack (backend API) \xB7 CAPCOM: Storm Watch (NASA Space Apps) \xB7 Shubha (in progress) \xB7 Sentinel FDS \xB7 The RSA Heist",research:()=>"IoT Sentinel: XGBoost + Isolation Forest + decision fusion \u2192 4-tier risk. IEEE Xplore, ITC-Egypt 2026.",arena:()=>"ICPC ECPC quals: 88th (2025), 177th (2026). 248+ Codeforces problems. Next: ODC Champions, 3 Dec.",contact:()=>`email: ${I}
github: adham107harp
linkedin: adham-harp-43bb6232b`,poke:()=>(f.onPoke&&f.onPoke(),"ouch. he says hi."),"sudo hire adham":()=>(setTimeout(()=>{le(),rl(6),setTimeout(()=>f.onSend&&f.onSend(),2800)},900),"[sudo] permission granted. 201 Created \u2014 taking you to the capstone\u2026"),clear:()=>(q.textContent="",null),exit:()=>(le(),null)};function Pe(te){let Re=te.trim().replace(/\s+/g," ").toLowerCase();if(!Re)return;if(C(`$ ${te}`,"c"),Re.startsWith("goto ")){let He=Z[Re.slice(5)];if(He===void 0)return C(`no such section: ${Re.slice(5)}`,"e");le(),rl(He);return}if(Re.startsWith("mood ")){let He=Re.slice(5);return C(f.setMood&&f.setMood(He)?`mini-Adham is now ${He}.`:`unknown mood: ${He}. try "moods".`,f.setMood&&vr[He]?"":"e")}if(Re.startsWith("lang ")){let He=Re.slice(5);if(He!=="ar"&&He!=="en")return C("lang ar | lang en","e");on=He;try{localStorage.setItem("adham-guide-lang",on)}catch{}return _(),f.onLang&&f.onLang(),C(`guide speaks ${He==="ar"?"Egyptian Arabic":"English"} now.`)}if(Re==="sudo rm -rf /")return C("nice try. the pyramid has stood for 4,600 years.","e");let Be=ue[Re];if(!Be)return C(`command not found: ${Re}. try "help".`,"e");let Oe=Be();Oe&&C(Oe)}function Y(){f.onTerm&&f.onTerm(),O.hidden=!1,q.textContent||C('Welcome to adham@saqqara. Type "help".'),setTimeout(()=>U.focus(),30),Ss.stop()}function le(){O.hidden=!0,Ss.start(),it("#term-btn").focus()}it("#term-btn").addEventListener("click",Y),it("#term-close").addEventListener("click",le),O.addEventListener("click",te=>{te.target===O&&le()}),it("#term-form").addEventListener("submit",te=>{te.preventDefault(),Pe(U.value),U.value=""});let _e=it("#sound"),we=()=>{_e.setAttribute("aria-pressed",String(tn.on)),_e.title=tn.on?"Sound on":"Sound off",_e.classList.toggle("on",tn.on)};_e.addEventListener("click",()=>{tn.toggle(),we(),f.onSound&&f.onSound(tn.on);try{localStorage.setItem("adham-sound",tn.on?"1":"0")}catch{}}),document.addEventListener("visibilitychange",()=>tn.pause(document.hidden)),we(),c_(it("#gh-live")),addEventListener("keydown",te=>{let Re=/INPUT|TEXTAREA/.test(document.activeElement?.tagName);if(!Re&&O.hidden&&(te.key==="ArrowDown"||te.key==="ArrowUp"||te.key==="PageDown"||te.key==="PageUp")){te.preventDefault();let Be=f.current??0;rl(Math.max(0,Math.min(ol.length-1,Be+(te.key==="ArrowDown"||te.key==="PageDown"?1:-1))));return}te.key==="Escape"&&!O.hidden?le():(te.key==="`"||te.key==="~")&&!Re&&(te.preventDefault(),O.hidden?Y():le())});let de=it("#mood-chip"),ce="";f.moodChip=(te,Re)=>{if(te===ce)return;ce=te,de.querySelector("span").textContent=`mood: ${te}`;let Be="#"+Re.toString(16).padStart(6,"0");de.querySelector("i").style.background=Be,de.querySelector("i").style.boxShadow=`0 0 10px ${Be}`};let he=it("#art-btn"),Me=it("#art-count"),Ce=it("#art-panel"),me=it("#art-list"),be=it("#toasts"),je=()=>{Me.textContent=An.count(),it("#art-of").textContent=`${An.count()}/${An.list.length}`,me.innerHTML=An.list.map(te=>`<li class="${An.has(te.id)?"got":""}"><span class="ic">${te.icon}</span><div><b>${An.has(te.id)?te.name:"???"}</b><span>${te.hint}</span></div></li>`).join("")};function et(){je(),Ce.hidden=!1,Ss.stop()}let W=()=>{Ce.hidden=!0,Ss.start()};if(he.addEventListener("click",et),it("#art-close").addEventListener("click",W),Ce.addEventListener("click",te=>{te.target===Ce&&W()}),addEventListener("keydown",te=>{te.key==="Escape"&&!Ce.hidden&&W()}),An.onUnlock((te,Re,Be)=>{je(),he.classList.remove("bump"),he.offsetWidth,he.classList.add("bump");let Oe=document.createElement("div");Oe.className="toast";let He=document.createElement("span");He.className="ic",He.textContent=te.icon;let tt=document.createElement("div");tt.innerHTML=`<small>Artifact ${Re}/${Be} unlocked</small>`;let H=document.createElement("b");H.textContent=te.name,tt.append(H),Oe.append(He,tt),be.append(Oe),Wt.fromTo(Oe,{x:-40,opacity:0},{x:0,opacity:1,duration:.5,ease:"back.out(2)"}),Wt.to(Oe,{opacity:0,y:10,delay:3.6,duration:.5,onComplete:()=>Oe.remove()})}),je(),document.querySelectorAll("img.lg").forEach(te=>{let Re=()=>te.remove();te.complete&&!te.naturalWidth?Re():te.addEventListener("error",Re)}),!yr){let te=it("#cursor"),Re=te.querySelector(".c-dot"),Be=te.querySelector(".c-ring"),Oe=innerWidth/2,He=innerHeight/2,tt=Oe,H=He;addEventListener("pointermove",Xe=>{Oe=Xe.clientX,He=Xe.clientY,te.classList.toggle("hot",!!Xe.target.closest("a,button,input,textarea,label,[data-go]")||document.body.style.cursor==="pointer"||ot())});let ot=()=>it("#scene")&&it("#scene").style.cursor==="pointer";Wt.ticker.add(()=>{tt+=(Oe-tt)*.2,H+=(He-H)*.2,Re.style.transform=`translate(${Oe}px,${He}px)`,Be.style.transform=`translate(${tt}px,${H}px)`}),document.querySelectorAll(".mag").forEach(Xe=>{Xe.addEventListener("pointermove",j=>{let G=Xe.getBoundingClientRect();Wt.to(Xe,{x:(j.clientX-G.left-G.width/2)*.25,y:(j.clientY-G.top-G.height/2)*.35,duration:.3})}),Xe.addEventListener("pointerleave",()=>Wt.to(Xe,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}))}),document.querySelectorAll(".tilt").forEach(Xe=>{Xe.addEventListener("pointermove",j=>{if(innerWidth<=820)return;let G=Xe.getBoundingClientRect(),ke=(j.clientX-G.left)/G.width,ve=(j.clientY-G.top)/G.height;Xe.style.transform=`perspective(900px) rotateX(${(.5-ve)*5}deg) rotateY(${(ke-.5)*6}deg)`,Xe.style.setProperty("--gx",`${ke*100}%`),Xe.style.setProperty("--gy",`${ve*100}%`)}),Xe.addEventListener("pointerleave",()=>{Xe.style.transform=""})}),document.querySelectorAll("[data-count]").forEach(Xe=>{let j=+Xe.dataset.count,G=Xe.dataset.suffix||"",ke=j>1e3?j-30:0,ve={v:ke};ft.create({trigger:Xe,start:"top 90%",once:!0,onEnter:()=>Wt.to(ve,{v:j,duration:1.6,ease:"power2.out",onUpdate:()=>Xe.textContent=Math.round(ve.v)+G})})})}return f}
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

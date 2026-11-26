var Hx=Object.defineProperty;var Gx=(s,t,e)=>t in s?Hx(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Nt=(s,t,e)=>Gx(s,typeof t!="symbol"?t+"":t,e);var jm=0,nd=1,tg=2;var Hr=1,eg=2,ea=3,cr=0,pi=1,Mn=2,Ds=0,ia=1,Gr=2,sd=3,rd=4,ig=5;var Vr=100,ng=101,sg=102,rg=103,og=104,ag=200,lg=201,cg=202,hg=203,od=204,ad=205,ug=206,fg=207,dg=208,pg=209,mg=210,gg=211,_g=212,xg=213,vg=214,Kc=0,Qc=1,jc=2,Oo=3,th=4,eh=5,ih=6,nh=7,ld=0,yg=1,Sg=2,hs=0,gl=1,_l=2,xl=3,Wr=4,vl=5,yl=6,Sl=7;var cd=300,Xr=301,na=302,Eh=303,wh=304,Fo=1e3,rs=1001,sh=1002,ri=1003,Mg=1004;var Ml=1005;var Ji=1006,Ah=1007;var Ns=1008;var ln=1009,hd=1010,ud=1011,sa=1012,Rh=1013,ts=1014,Fn=1015,wi=1016,Ch=1017,Ph=1018,qr=1020,fd=35902,dd=35899,pd=1021,md=1022,bn=1023,Cs=1026,Us=1027,Ih=1028,Lh=1029,hr=1030,Dh=1031;var Nh=1033,bl=33776,Tl=33777,El=33778,wl=33779,Uh=35840,Oh=35841,Fh=35842,Bh=35843,zh=36196,kh=37492,Hh=37496,Gh=37488,Vh=37489,Al=37490,Wh=37491,Xh=37808,qh=37809,Yh=37810,Zh=37811,Jh=37812,$h=37813,Kh=37814,Qh=37815,jh=37816,tu=37817,eu=37818,iu=37819,nu=37820,su=37821,ru=36492,ou=36494,au=36495,lu=36283,cu=36284,Rl=36285,hu=36286;var Wa=2300,rh=2301,Zc=2302,Yf=2303,Zf=2400,Jf=2401,$f=2402;var bg=3200;var Cl=0,Tg=1,Os="",fi="srgb",Xa="srgb-linear",qa="linear",_e="srgb";var Jc=7680;var Eg=519,wg=512,Ag=513,Rg=514,gd=515,Cg=516,Pg=517,_d=518,xd=519,vd=35044;var yd="300 es",Nn=2e3,Bo=2001;function Vx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ig(){let s=zo("canvas");return s.style.display="block",s}var _m={},ko=null;function Ya(...s){let t="THREE."+s.shift();ko?ko("log",t,...s):console.log(t,...s)}function Lg(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=Lg(s);let t="THREE."+s.shift();if(ko)ko("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Xt(...s){s=Lg(s);let t="THREE."+s.shift();if(ko)ko("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ha(...s){let t=s.join(" ");t in _m||(_m[t]=!0,Vt(...s))}function Dg(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ng={[Kc]:Kc,[jc]:ih,[th]:th,[Oo]:eh,[Qc]:Qc,[ih]:jc,[nh]:nh,[eh]:Oo},os=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=1234567,Ga=Math.PI/180,Ho=180/Math.PI;function ur(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Di[s&255]+Di[s>>8&255]+Di[s>>16&255]+Di[s>>24&255]+"-"+Di[t&255]+Di[t>>8&255]+"-"+Di[t>>16&15|64]+Di[t>>24&255]+"-"+Di[e&63|128]+Di[e>>8&255]+"-"+Di[e>>16&255]+Di[e>>24&255]+Di[i&255]+Di[i>>8&255]+Di[i>>16&255]+Di[i>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function Sd(s,t){return(s%t+t)%t}function Xx(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function qx(s,t,e){return s!==t?(e-s)/(t-s):0}function Va(s,t,e){return(1-e)*s+e*t}function Yx(s,t,e,i){return Va(s,t,1-Math.exp(-e*i))}function Zx(s,t=1){return t-Math.abs(Sd(s,t*2)-t)}function Jx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $x(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Kx(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qx(s,t){return s+Math.random()*(t-s)}function jx(s){return s*(.5-Math.random())}function tv(s){s!==void 0&&(xm=s);let t=xm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ev(s){return s*Ga}function iv(s){return s*Ho}function nv(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function sv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Md(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rv(s,t,e,i,n){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),u=r((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":s.set(a*h,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*u,a*h,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function uu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bd(s,t){if(t.constructor===Float32Array)return s;let e=uu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Td(s,t){if(t.constructor===Float32Array)return s;let e=uu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var es={DEG2RAD:Ga,RAD2DEG:Ho,generateUUID:ur,clamp:re,euclideanModulo:Sd,mapLinear:Xx,inverseLerp:qx,lerp:Va,damp:Yx,pingpong:Zx,smoothstep:Jx,smootherstep:$x,randInt:Kx,randFloat:Qx,randFloatSpread:jx,seededRandom:tv,degToRad:ev,radToDeg:iv,isPowerOfTwo:nv,ceilPowerOfTwo:sv,floorPowerOfTwo:Md,setQuaternionFromProperEuler:rv,normalize:Td,denormalize:bd},Pd=class Pd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pd.prototype.isVector2=!0;var At=Pd,Un=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],f=r[o+1],u=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),f=l(i/2),u=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-n)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Id=class Id{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Id.prototype.isVector3=!0;var O=Id,bf=new O,vm=new Un,Ld=class Ld{constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],p=i[8],_=n[0],m=n[3],g=n[6],v=n[1],b=n[4],y=n[7],S=n[2],T=n[5],x=n[8];return r[0]=o*_+a*v+l*S,r[3]=o*m+a*b+l*T,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*S,r[4]=c*m+h*b+d*T,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+p*S,r[5]=f*m+u*b+p*T,r[8]=f*g+u*y+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,p=e*d+i*f+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-a*e)*_,t[6]=u*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tf.makeScale(t,e)),this}rotate(t){return Ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tf.makeRotation(-t)),this}translate(t,e){return Ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ld.prototype.isMatrix3=!0;var Yt=Ld,Tf=new Yt,ym=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ov(){let s={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(n.r=Rs(n.r),n.g=Rs(n.g),n.b=Rs(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(n.r=Uo(n.r),n.g=Uo(n.g),n.b=Uo(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Os?qa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Xa]:{primaries:t,whitePoint:i,transfer:qa,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}var se=ov();function Rs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var go,oh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{go===void 0&&(go=zo("canvas")),go.width=t.width,go.height=t.height;let n=go.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=go}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Rs(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rs(e[i]/255)*255):e[i]=Rs(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},av=0,Go=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Ef(n[o].image)):r.push(Ef(n[o]))}else r=Ef(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ef(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var lv=0,wf=new O,Fi=class s extends os{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=rs,n=rs,r=Ji,o=Ns,a=bn,l=ln,c=s.DEFAULT_ANISOTROPY,h=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ur(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wf).x}get height(){return this.source.getSize(wf).y}get depth(){return this.source.getSize(wf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fi.DEFAULT_IMAGE=null;Fi.DEFAULT_MAPPING=cd;Fi.DEFAULT_ANISOTROPY=1;var Dd=class Dd{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(u+1)/2,S=(g+1)/2,T=(h+f)/4,x=(d+_)/4,M=(p+m)/4;return b>y&&b>S?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=T/i,r=x/i):y>S?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=T/n,r=M/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=x/r,n=M/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dd.prototype.isVector4=!0;var Be=Dd,ah=class extends os{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Fi({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ji,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Go(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends ah{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Za=class extends Fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lh=class extends Fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Th=class Th{constructor(t,e,i,n,r,o,a,l,c,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,f,u,p,_,m)}set(t,e,i,n,r,o,a,l,c,h,d,f,u,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Th().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/_o.setFromMatrixColumn(t,0).length(),r=1/_o.setFromMatrixColumn(t,1).length(),o=1/_o.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,_=c*d;e[0]=f+_*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cv,t,hv)}lookAt(t,e,i){let n=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Qs.crossVectors(i,vn),Qs.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Qs.crossVectors(i,vn)),Qs.normalize(),Mc.crossVectors(vn,Qs),n[0]=Qs.x,n[4]=Mc.x,n[8]=vn.x,n[1]=Qs.y,n[5]=Mc.y,n[9]=vn.y,n[2]=Qs.z,n[6]=Mc.z,n[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],p=i[2],_=i[6],m=i[10],g=i[14],v=i[3],b=i[7],y=i[11],S=i[15],T=n[0],x=n[4],M=n[8],w=n[12],E=n[1],D=n[5],L=n[9],k=n[13],P=n[2],N=n[6],z=n[10],F=n[14],Y=n[3],V=n[7],C=n[11],J=n[15];return r[0]=o*T+a*E+l*P+c*Y,r[4]=o*x+a*D+l*N+c*V,r[8]=o*M+a*L+l*z+c*C,r[12]=o*w+a*k+l*F+c*J,r[1]=h*T+d*E+f*P+u*Y,r[5]=h*x+d*D+f*N+u*V,r[9]=h*M+d*L+f*z+u*C,r[13]=h*w+d*k+f*F+u*J,r[2]=p*T+_*E+m*P+g*Y,r[6]=p*x+_*D+m*N+g*V,r[10]=p*M+_*L+m*z+g*C,r[14]=p*w+_*k+m*F+g*J,r[3]=v*T+b*E+y*P+S*Y,r[7]=v*x+b*D+y*N+S*V,r[11]=v*M+b*L+y*z+S*C,r[15]=v*w+b*k+y*F+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],_=t[7],m=t[11],g=t[15],v=l*u-c*f,b=a*u-c*d,y=a*f-l*d,S=o*u-c*h,T=o*f-l*h,x=o*d-a*h;return e*(_*v-m*b+g*y)-i*(p*v-m*S+g*T)+n*(p*b-_*S+g*x)-r*(p*y-_*T+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=e*a-i*o,b=e*l-n*o,y=e*c-r*o,S=i*l-n*a,T=i*c-r*a,x=n*c-r*l,M=h*_-d*p,w=h*m-f*p,E=h*g-u*p,D=d*m-f*_,L=d*g-u*_,k=f*g-u*m,P=v*k-b*L+y*D+S*E-T*w+x*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return t[0]=(a*k-l*L+c*D)*N,t[1]=(n*L-i*k-r*D)*N,t[2]=(_*x-m*T+g*S)*N,t[3]=(f*T-d*x-u*S)*N,t[4]=(l*E-o*k-c*w)*N,t[5]=(e*k-n*E+r*w)*N,t[6]=(m*y-p*x-g*b)*N,t[7]=(h*x-f*y+u*b)*N,t[8]=(o*L-a*E+c*M)*N,t[9]=(i*E-e*L-r*M)*N,t[10]=(p*T-_*y+g*v)*N,t[11]=(d*y-h*T-u*v)*N,t[12]=(a*w-o*D-l*M)*N,t[13]=(e*D-i*w+n*M)*N,t[14]=(_*b-p*S-m*v)*N,t[15]=(h*S-d*b+f*v)*N,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,p=r*d,_=o*h,m=o*d,g=a*d,v=l*c,b=l*h,y=l*d,S=i.x,T=i.y,x=i.z;return n[0]=(1-(_+g))*S,n[1]=(u+y)*S,n[2]=(p-b)*S,n[3]=0,n[4]=(u-y)*T,n[5]=(1-(f+g))*T,n[6]=(m+v)*T,n[7]=0,n[8]=(p+b)*x,n[9]=(m-v)*x,n[10]=(1-(f+_))*x,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=_o.set(n[0],n[1],n[2]).length(),a=_o.set(n[4],n[5],n[6]).length(),l=_o.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Yn.copy(this);let c=1/o,h=1/a,d=1/l;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=Nn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Nn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Bo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Nn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Nn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Bo)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Th.prototype.isMatrix4=!0;var de=Th,_o=new O,Yn=new de,cv=new O(0,0,0),hv=new O(1,1,1),Qs=new O,Mc=new O,vn=new O,Mm=new de,bm=new Un,Kn=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mm,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bm.setFromEuler(this),this.setFromQuaternion(bm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uv=0,Tm=new O,xo=new Un,Ms=new de,bc=new O,La=new O,fv=new O,dv=new Un,Em=new O(1,0,0),wm=new O(0,1,0),Am=new O(0,0,1),Rm={type:"added"},pv={type:"removed"},vo={type:"childadded",child:null},Af={type:"childremoved",child:null},Si=class s extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new O,e=new Kn,i=new Un,n=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new de},normalMatrix:{value:new Yt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.multiply(xo),this}rotateOnWorldAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.premultiply(xo),this}rotateX(t){return this.rotateOnAxis(Em,t)}rotateY(t){return this.rotateOnAxis(wm,t)}rotateZ(t){return this.rotateOnAxis(Am,t)}translateOnAxis(t,e){return Tm.copy(t).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Em,t)}translateY(t){return this.translateOnAxis(wm,t)}translateZ(t){return this.translateOnAxis(Am,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bc.copy(t):bc.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(La,bc,this.up):Ms.lookAt(bc,La,this.up),this.quaternion.setFromRotationMatrix(Ms),n&&(Ms.extractRotation(n.matrixWorld),xo.setFromRotationMatrix(Ms),this.quaternion.premultiply(xo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rm),vo.child=t,this.dispatchEvent(vo),vo.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pv),Af.child=t,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rm),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,t,fv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,dv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Si.DEFAULT_UP=new O(0,1,0);Si.DEFAULT_MATRIX_AUTO_UPDATE=!0;Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}},mv={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Rf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=se.workingColorSpace){if(t=Sd(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Rf(o,r,t+1/3),this.g=Rf(o,r,t),this.b=Rf(o,r,t-1/3)}return se.colorSpaceToWorking(this,n),this}setStyle(t,e=fi){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fi){let i=Ug[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Uo(t.r),this.g=Uo(t.g),this.b=Uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return se.workingToColorSpace(Ni.copy(this),t),Math.round(re(Ni.r*255,0,255))*65536+Math.round(re(Ni.g*255,0,255))*256+Math.round(re(Ni.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ni.copy(this),e);let i=Ni.r,n=Ni.g,r=Ni.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ni.copy(this),e),t.r=Ni.r,t.g=Ni.g,t.b=Ni.b,t}getStyle(t=fi){se.workingToColorSpace(Ni.copy(this),t);let e=Ni.r,i=Ni.g,n=Ni.b;return t!==fi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(js),this.setHSL(js.h+t,js.s+e,js.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(js),t.getHSL(Tc);let i=Va(js.h,Tc.h,e),n=Va(js.s,Tc.s,e),r=Va(js.l,Tc.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ni=new Ft;Ft.NAMES=Ug;var Ja=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var $a=class extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new O,bs=new O,Cf=new O,Ts=new O,yo=new O,So=new O,Cm=new O,Pf=new O,If=new O,Lf=new O,Df=new Be,Nf=new Be,Uf=new Be,As=class s{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Zn.subVectors(t,e),n.cross(Zn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Zn.subVectors(n,e),bs.subVectors(i,e),Cf.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(bs),l=Zn.dot(Cf),c=bs.dot(bs),h=bs.dot(Cf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Df.setScalar(0),Nf.setScalar(0),Uf.setScalar(0),Df.fromBufferAttribute(t,e),Nf.fromBufferAttribute(t,i),Uf.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Df,r.x),o.addScaledVector(Nf,r.y),o.addScaledVector(Uf,r.z),o}static isFrontFacing(t,e,i,n){return Zn.subVectors(i,e),bs.subVectors(t,e),Zn.cross(bs).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Zn.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;yo.subVectors(n,i),So.subVectors(r,i),Pf.subVectors(t,i);let l=yo.dot(Pf),c=So.dot(Pf);if(l<=0&&c<=0)return e.copy(i);If.subVectors(t,n);let h=yo.dot(If),d=So.dot(If);if(h>=0&&d<=h)return e.copy(n);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(yo,o);Lf.subVectors(t,r);let u=yo.dot(Lf),p=So.dot(Lf);if(p>=0&&u<=p)return e.copy(r);let _=u*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(So,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Cm.subVectors(r,n),a=(d-h)/(d-h+(u-p)),e.copy(n).addScaledVector(Cm,a);let g=1/(m+_+f);return o=_*g,a=f*g,e.copy(i).addScaledVector(yo,o).addScaledVector(So,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ec.copy(i.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Da),wc.subVectors(this.max,Da),Mo.subVectors(t.a,Da),bo.subVectors(t.b,Da),To.subVectors(t.c,Da),tr.subVectors(bo,Mo),er.subVectors(To,bo),Lr.subVectors(Mo,To);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Lr.z,Lr.y,tr.z,0,-tr.x,er.z,0,-er.x,Lr.z,0,-Lr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Lr.y,Lr.x,0];return!Of(e,Mo,bo,To,wc)||(e=[1,0,0,0,1,0,0,0,1],!Of(e,Mo,bo,To,wc))?!1:(Ac.crossVectors(tr,er),e=[Ac.x,Ac.y,Ac.z],Of(e,Mo,bo,To,wc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Es=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,Ec=new as,Mo=new O,bo=new O,To=new O,tr=new O,er=new O,Lr=new O,Da=new O,wc=new O,Ac=new O,Dr=new O;function Of(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Dr.fromArray(s,r);let a=n.x*Math.abs(Dr.x)+n.y*Math.abs(Dr.y)+n.z*Math.abs(Dr.z),l=t.dot(Dr),c=e.dot(Dr),h=i.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var si=new O,Rc=new At,gv=0,Oi=class extends os{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vd,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?uu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rc.fromBufferAttribute(this,e),Rc.applyMatrix3(t),this.setXY(e,Rc.x,Rc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix3(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):bd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.array)}};var Ka=class extends Oi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qa=class extends Oi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var me=class extends Oi{constructor(t,e,i){super(new Float32Array(t),e,i)}},_v=new as,Na=new O,Ff=new O,Ps=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_v.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Na.subVectors(t,this.center);let e=Na.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Na,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ff.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Na.copy(t.center).add(Ff)),this.expandByPoint(Na.copy(t.center).sub(Ff))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xv=0,Dn=new de,Bf=new Si,Eo=new O,yn=new as,Ua=new as,yi=new O,Ke=class s extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vx(t)?Qa:Ka)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Bf.lookAt(t),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(yi.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(yi),yi.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(yi)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ua.setFromBufferAttribute(a),this.morphTargetsRelative?(yi.addVectors(yn.min,Ua.min),yn.expandByPoint(yi),yi.addVectors(yn.max,Ua.max),yn.expandByPoint(yi)):(yn.expandByPoint(Ua.min),yn.expandByPoint(Ua.max))}yn.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)yi.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(yi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yi.fromBufferAttribute(a,c),l&&(Eo.fromBufferAttribute(t,c),yi.add(Eo)),n=Math.max(n,i.distanceToSquared(yi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let w=0;w<i.count;w++)a[w]=new O,l[w]=new O;let h=new O,d=new O,f=new O,u=new At,p=new At,_=new At,m=new O,g=new O;function v(w,E,D){c[w]=c[E]=c[D]=1,h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,D),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,D),d.sub(h),f.sub(h),p.sub(u),_.sub(u);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(L),a[w].add(m),a[E].add(m),a[D].add(m),l[w].add(g),l[E].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let w=0,E=b.length;w<E;++w){let D=b[w],L=D.start,k=D.count;for(let P=L,N=L+k;P<N;P+=3)v(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new O,S=new O,T=new O,x=new O;function M(w){T.fromBufferAttribute(n,w),x.copy(T);let E=a[w];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),S.crossVectors(x,E);let L=S.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,L)}for(let w=0,E=i.count;w<E;++w)c[w]&&M(w);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Oi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)yi.fromBufferAttribute(t,e),yi.normalize(),t.setXYZ(e,yi.x,yi.y,yi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Oi(f,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ch=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vd,this.updateRanges=[],this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Pm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Pm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Pm(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ur()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Zi=new O,ja=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?uu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix4(t),this.setXYZ(e,Zi.x,Zi.y,Zi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Zi.fromBufferAttribute(this,e),Zi.applyNormalMatrix(t),this.setXYZ(e,Zi.x,Zi.y,Zi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Zi.fromBufferAttribute(this,e),Zi.transformDirection(t),this.setXYZ(e,Zi.x,Zi.y,Zi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Oi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):bd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.data.array)}},zf=new O,vv=new O,yv=new Yt,$n=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=zf.subVectors(i,e).cross(vv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(zf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||yv.getNormalMatrix(t),n=this.coplanarPoint(zf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sv=0,Qn=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=ia,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ad,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jc,this.stencilZFail=Jc,this.stencilZPass=Jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $n().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new At().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Or=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wo,Oa=new O,Ao=new O,Ro=new O,Co=new At,Fa=new At,Og=new de,Cc=new O,Ba=new O,Pc=new O,Im=new At,kf=new At,Lm=new At,Xo=class extends Si{constructor(t=new Or){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ch(e,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new ja(i,3,0,!1)),wo.setAttribute("uv",new ja(i,2,3,!1))}this.geometry=wo,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),Og.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ro.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Ro.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Ic(Cc.set(-.5,-.5,0),Ro,o,Ao,n,r),Ic(Ba.set(.5,-.5,0),Ro,o,Ao,n,r),Ic(Pc.set(.5,.5,0),Ro,o,Ao,n,r),Im.set(0,0),kf.set(1,0),Lm.set(1,1);let a=t.ray.intersectTriangle(Cc,Ba,Pc,!1,Oa);if(a===null&&(Ic(Ba.set(-.5,.5,0),Ro,o,Ao,n,r),kf.set(0,1),a=t.ray.intersectTriangle(Cc,Pc,Ba,!1,Oa),a===null))return;let l=t.ray.origin.distanceTo(Oa);l<t.near||l>t.far||e.push({distance:l,point:Oa.clone(),uv:As.getInterpolation(Oa,Cc,Ba,Pc,Im,kf,Lm,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ic(s,t,e,i,n,r){Co.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Fa.x=r*Co.x-n*Co.y,Fa.y=n*Co.x+r*Co.y):Fa.copy(Co),s.copy(t),s.x+=Fa.x,s.y+=Fa.y,s.applyMatrix4(Og)}var ws=new O,Hf=new O,Lc=new O,Dc=new O,qo=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ws)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ws.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ws.copy(this.origin).addScaledVector(this.direction,e),ws.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Hf.copy(t).add(e).multiplyScalar(.5),Lc.copy(e).sub(t).normalize(),Dc.copy(this.origin).sub(Hf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Lc),a=Dc.dot(this.direction),l=-Dc.dot(Lc),c=Dc.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Hf).addScaledVector(Lc,f),u}intersectSphere(t,e){if(t.radius<0)return null;ws.subVectors(t.center,this.origin);let i=ws.dot(this.direction),n=ws.dot(ws)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ws)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=i.x-o.x,v=i.y-o.y,b=i.z-o.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(h),x,M,w,E,D,L,k,P,N,z,F,Y;if(y>=S&&y>=T?(w=l,L=d,N=p,Y=g,l>=0?(x=c,M=h,E=f,D=u,k=_,P=m,z=v,F=b):(x=h,M=c,E=u,D=f,k=m,P=_,z=b,F=v)):S>=T?(w=c,L=f,N=_,Y=v,c>=0?(x=h,M=l,E=u,D=d,k=m,P=p,z=b,F=g):(x=l,M=h,E=d,D=u,k=p,P=m,z=g,F=b)):(w=h,L=u,N=m,Y=b,h>=0?(x=l,M=c,E=d,D=f,k=p,P=_,z=g,F=v):(x=c,M=l,E=f,D=d,k=_,P=p,z=v,F=g)),w===0)return null;let V=x/w,C=M/w,J=1/w,ft=E-V*L,it=D-C*L,H=k-V*N,tt=P-C*N,ct=z-V*Y,pt=F-C*Y,Q=ct*tt-pt*H,lt=ft*pt-it*ct,Wt=H*it-tt*ft;if(n){if(Q<0||lt<0||Wt<0)return null}else if((Q<0||lt<0||Wt<0)&&(Q>0||lt>0||Wt>0))return null;let Et=Q+lt+Wt;if(Et===0)return null;let qt=J*(Q*L+lt*N+Wt*Y);return(Et>0?qt<0:qt>0)?null:this.at(qt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dm=new de,Nr=new qo,Nc=new Ps,Nm=new O,Uc=new O,Oc=new O,Fc=new O,Gf=new O,Bc=new O,Um=new O,zc=new O,Pt=class extends Si{constructor(t=new Ke,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Bc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Gf.fromBufferAttribute(d,t),o?Bc.addScaledVector(Gf,h):Bc.addScaledVector(Gf.sub(e),h))}e.add(Bc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Nr.copy(t.ray).recast(t.near),!(Nc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Nc,Nm)===null||Nr.origin.distanceToSquared(Nm)>(t.far-t.near)**2))&&(Dm.copy(r).invert(),Nr.copy(t.ray).applyMatrix4(Dm),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,S=b;y<S;y+=3){let T=a.getX(y),x=a.getX(y+1),M=a.getX(y+2);n=kc(this,g,t,i,c,h,d,T,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);n=kc(this,o,t,i,c,h,d,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,S=b;y<S;y+=3){let T=y,x=y+1,M=y+2;n=kc(this,g,t,i,c,h,d,T,x,M),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let v=m,b=m+1,y=m+2;n=kc(this,o,t,i,c,h,d,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Mv(s,t,e,i,n,r,o,a){let l;if(t.side===pi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===cr,a),l===null)return null;zc.copy(a),zc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(zc);return c<e.near||c>e.far?null:{distance:c,point:zc.clone(),object:s}}function kc(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Uc),s.getVertexPosition(l,Oc),s.getVertexPosition(c,Fc);let h=Mv(s,t,e,i,Uc,Oc,Fc,Um);if(h){let d=new O;As.getBarycoord(Um,Uc,Oc,Fc,d),n&&(h.uv=As.getInterpolatedAttribute(n,a,l,c,d,new At)),r&&(h.uv1=As.getInterpolatedAttribute(r,a,l,c,d,new At)),o&&(h.normal=As.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};As.getNormal(Uc,Oc,Fc,f.normal),h.face=f,h.barycoord=d}return h}var Fr=class extends Fi{constructor(t=null,e=1,i=1,n,r,o,a,l,c=ri,h=ri,d,f){super(null,o,a,l,c,h,n,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tl=class extends Oi{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Po=new de,Om=new de,Hc=[],Fm=new as,bv=new de,za=new Pt,ka=new Ps,Is=class extends Pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new tl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,bv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Po),Fm.copy(t.boundingBox).applyMatrix4(Po),this.boundingBox.union(Fm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Po),ka.copy(t.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(ka)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),t.ray.intersectsSphere(ka)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Po),Om.multiplyMatrices(i,Po),za.matrixWorld=Om,za.raycast(t,Hc);for(let o=0,a=Hc.length;o<a;o++){let l=Hc[o];l.instanceId=r,l.object=this,e.push(l)}Hc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(n*this.count),n,this.count,Ih,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ur=new Ps,Tv=new At(.5,.5),Gc=new O,nr=class{constructor(t=new $n,e=new $n,i=new $n,n=new $n,r=new $n,o=new $n){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],b=r[13],y=r[14],S=r[15];if(n[0].setComponents(c-o,u-h,g-p,S-v).normalize(),n[1].setComponents(c+o,u+h,g+p,S+v).normalize(),n[2].setComponents(c+a,u+d,g+_,S+b).normalize(),n[3].setComponents(c-a,u-d,g-_,S-b).normalize(),i)n[4].setComponents(l,f,m,y).normalize(),n[5].setComponents(c-l,u-f,g-m,S-y).normalize();else if(n[4].setComponents(c-l,u-f,g-m,S-y).normalize(),e===Nn)n[5].setComponents(c+l,u+f,g+m,S+y).normalize();else if(e===Bo)n[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);let e=Tv.distanceTo(t.center);return Ur.radius=.7071067811865476+e,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Gc.x=n.normal.x>0?t.max.x:t.min.x,Gc.y=n.normal.y>0?t.max.y:t.min.y,Gc.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bm=new de,hh=class s{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let r=e[n];Bm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new nr),i[n].setFromProjectionMatrix(Bm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new nr),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Yo=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zm=new de,Kf=new qo,Vc=new Ps,Wc=new O,Zo=class extends Si{constructor(t=new Ke,e=new Yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(n),Vc.radius+=r,t.ray.intersectsSphere(Vc)===!1)return;zm.copy(n).invert(),Kf.copy(t.ray).applyMatrix4(zm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,_=u;p<_;p++){let m=c.getX(p);Wc.fromBufferAttribute(d,m),km(Wc,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,_=u;p<_;p++)Wc.fromBufferAttribute(d,p),km(Wc,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function km(s,t,e,i,n,r,o){let a=Kf.distanceSqToPoint(s);if(a<e){let l=new O;Kf.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var el=class extends Fi{constructor(t=[],e=Xr,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ls=class extends Fi{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ls=class extends Fi{constructor(t,e,i=ts,n,r,o,a=ri,l=ri,c,h=Cs,d=1){if(h!==Cs&&h!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},il=class extends Ls{constructor(t,e=ts,i=Xr,n,r,o=ri,a=ri,l,c=Cs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nl=class extends Fi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pe=class s extends Ke{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function p(_,m,g,v,b,y,S,T,x,M,w){let E=y/x,D=S/M,L=y/2,k=S/2,P=T/2,N=x+1,z=M+1,F=0,Y=0,V=new O;for(let C=0;C<z;C++){let J=C*D-k;for(let ft=0;ft<N;ft++){let it=ft*E-L;V[_]=it*v,V[m]=J*b,V[g]=P,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[g]=T>0?1:-1,h.push(V.x,V.y,V.z),d.push(ft/x),d.push(1-C/M),F+=1}}for(let C=0;C<M;C++)for(let J=0;J<x;J++){let ft=f+J+N*C,it=f+J+N*(C+1),H=f+(J+1)+N*(C+1),tt=f+(J+1)+N*C;l.push(ft,it,tt),l.push(it,H,tt),Y+=6}a.addGroup(u,Y,w),u+=Y,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},sr=class s extends Ke{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=i*2+r,_=n+1,m=new O,g=new O;for(let v=0;v<=p;v++){let b=0,y=0,S=0,T=0;if(v<=i){let w=v/i,E=w*Math.PI/2;y=-h-t*Math.cos(E),S=t*Math.sin(E),T=-t*Math.cos(E),b=w*d}else if(v<=i+r){let w=(v-i)/r;y=-h+w*e,S=t,T=0,b=d+w*f}else{let w=(v-i-r)/i,E=w*Math.PI/2;y=h+t*Math.sin(E),S=t*Math.cos(E),T=t*Math.sin(E),b=d+f+w*d}let x=Math.max(0,Math.min(1,b/u)),M=0;v===0?M=.5/n:v===p&&(M=-.5/n);for(let w=0;w<=n;w++){let E=w/n,D=E*Math.PI*2,L=Math.sin(D),k=Math.cos(D);g.x=-S*k,g.y=y,g.z=S*L,a.push(g.x,g.y,g.z),m.set(-S*k,T,S*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+M,x)}if(v>0){let w=(v-1)*_;for(let E=0;E<n;E++){let D=w+E,L=w+E+1,k=v*_+E,P=v*_+E+1;o.push(D,L,k),o.push(L,P,k)}}}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Br=class s extends Ke{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=i+d/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class s extends Ke{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,_=[],m=i/2,g=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(u,2));function v(){let y=new O,S=new O,T=0,x=(e-t)/i;for(let M=0;M<=r;M++){let w=[],E=M/r,D=E*(e-t)+t;for(let L=0;L<=n;L++){let k=L/n,P=k*l+a,N=Math.sin(P),z=Math.cos(P);S.x=D*N,S.y=-E*i+m,S.z=D*z,d.push(S.x,S.y,S.z),y.set(N,x,z).normalize(),f.push(y.x,y.y,y.z),u.push(k,1-E),w.push(p++)}_.push(w)}for(let M=0;M<n;M++)for(let w=0;w<r;w++){let E=_[w][M],D=_[w+1][M],L=_[w+1][M+1],k=_[w][M+1];(t>0||w!==0)&&(h.push(E,D,k),T+=3),(e>0||w!==r-1)&&(h.push(D,L,k),T+=3)}c.addGroup(g,T,0),g+=T}function b(y){let S=p,T=new At,x=new O,M=0,w=y===!0?t:e,E=y===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*E,0),f.push(0,E,0),u.push(.5,.5),p++;let D=p;for(let L=0;L<=n;L++){let P=L/n*l+a,N=Math.cos(P),z=Math.sin(P);x.x=w*z,x.y=m*E,x.z=w*N,d.push(x.x,x.y,x.z),f.push(0,E,0),T.x=N*.5+.5,T.y=z*.5*E+.5,u.push(T.x,T.y),p++}for(let L=0;L<n;L++){let k=S+L,P=D+L;y===!0?h.push(P,P+1,k):h.push(P+1,P,k),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class s extends $i{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sl=class s extends Ke{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new O,y=new O,S=new O;for(let T=0;T<e.length;T+=3)u(e[T+0],b),u(e[T+1],y),u(e[T+2],S),l(b,y,S,v)}function l(v,b,y,S){let T=S+1,x=[];for(let M=0;M<=T;M++){x[M]=[];let w=v.clone().lerp(y,M/T),E=b.clone().lerp(y,M/T),D=T-M;for(let L=0;L<=D;L++)L===0&&M===T?x[M][L]=w:x[M][L]=w.clone().lerp(E,L/D)}for(let M=0;M<T;M++)for(let w=0;w<2*(T-M)-1;w++){let E=Math.floor(w/2);w%2===0?(f(x[M][E+1]),f(x[M+1][E]),f(x[M][E])):(f(x[M][E+1]),f(x[M+1][E+1]),f(x[M+1][E]))}}function c(v){let b=new O;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let v=new O;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=m(v)/2/Math.PI+.5,S=g(v)/Math.PI+.5;o.push(y,1-S)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],S=o[v+4],T=Math.max(b,y,S),x=Math.min(b,y,S);T>.9&&x<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let v=new O,b=new O,y=new O,S=new O,T=new At,x=new At,M=new At;for(let w=0,E=0;w<r.length;w+=9,E+=6){v.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(o[E+0],o[E+1]),x.set(o[E+2],o[E+3]),M.set(o[E+4],o[E+5]),S.copy(v).add(b).add(y).divideScalar(3);let D=m(S);_(T,E+0,v,D),_(x,E+2,b,D),_(M,E+4,y,D)}}function _(v,b,y,S){S<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var uh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,u=(o-h)/f;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new At:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,n=[],r=[],o=[],a=new O,l=new de;for(let u=0;u<=t;u++){let p=u/t;n[u]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(re(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(re(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],u*p)),o[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function Ed(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,n(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Hm=new O,Gm=new O,Vf=new Ed,Wf=new Ed,Xf=new Ed,On=class extends uh{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new O){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Gm.subVectors(n[0],n[1]).add(n[0]),c=Gm);let d=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Hm.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Hm),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Vf.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,_,m),Wf.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,_,m),Xf.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Vf.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Wf.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Xf.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Vf.calc(l),Wf.calc(l),Xf.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new O().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var rl=class s extends sl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ol=class s extends sl{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},cs=class s extends Ke{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-v,0),_.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,y=v+c*(g+1),S=v+1+c*(g+1),T=v+1+c*g;u.push(b,y,T),u.push(y,S,T)}this.setIndex(u),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Mi=class s extends Ke{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,f=new O,u=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let v=[],b=g/i,y=o+b*a,S=t*Math.cos(y),T=Math.sqrt(t*t-S*S),x=0;g===0&&o===0?x=.5/e:g===i&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let w=M/e,E=n+w*r;d.x=-T*Math.cos(E),d.y=S,d.z=T*Math.sin(E),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-b),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let b=h[g][v+1],y=h[g][v],S=h[g+1][v],T=h[g+1][v+1];(g!==0||o>0)&&u.push(b,y,T),(g!==i-1||l<Math.PI)&&u.push(y,S,T)}this.setIndex(u),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zr=class s extends Ke{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],f=new O,u=new O,p=new O;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let g=0;g<=n;g++){let v=g/n*r;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/n),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=n;m++){let g=(n+1)*_+m-1,v=(n+1)*(_-1)+m-1,b=(n+1)*(_-1)+m,y=(n+1)*_+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Yr(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Vm(n))n.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Vm(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Bi(s){let t={};for(let e=0;e<s.length;e++){let i=Yr(s[e]);for(let n in i)t[n]=i[n]}return t}function Vm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ev(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Fs={clone:Yr,merge:Bi},wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=Ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Ft().setHex(n.value);break;case"v2":this.uniforms[i].value=new At().fromArray(n.value);break;case"v3":this.uniforms[i].value=new O().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new de().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Jo=class extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},al=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ll=class extends Qn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fh=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dh=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Io(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Xc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var rr=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ph=class extends rr{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zf,endingEnd:Zf}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jf:r=t,a=2*e-i;break;case $f:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jf:o=t,l=2*i-e;break;case $f:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-e)/(n-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,b=(-1-u)*m+(1.5+u)*_+.5*p,y=u*m-u*_;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+v*o[c+S]+b*o[l+S]+y*o[d+S];return r}},mh=class extends rr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},gh=class extends rr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},_h=class extends rr{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=u*f+p*2,v=d[g],b=d[g+1],y=t*f+p*2,S=h[y],T=h[y+1],x=Cv(i,e,v,S,n);r[p]=Fg(x,_,b,T,m)}return r}};function Fg(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function Rv(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function Cv(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=Fg(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=Rv(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Io(e,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Io(t.times,Array),values:Io(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Xc(t.settings)&&(i.settings={inTangents:Io(t.settings.inTangents,Array),outTangents:Io(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _h(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wa:e=this.InterpolantFactoryMethodDiscrete;break;case rh:e=this.InterpolantFactoryMethodLinear;break;case Zc:e=this.InterpolantFactoryMethodSmooth;break;case Yf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return rh;case this.InterpolantFactoryMethodSmooth:return Zc;case this.InterpolantFactoryMethodBezier:return Yf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Xc(this.settings)&&(Wm(this.settings.inTangents,t),Wm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Xc(this.settings)&&(Xm(this.settings.inTangents,t),Xm(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Wx(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Zc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let p=0;p!==i;++p){let _=e[d+p];if(_!==e[f+p]||_!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Xc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Wm(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]+=t}function Xm(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=rh;var or=class extends Sn{constructor(t,e,i){super(t,e,i)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Wa;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};xh.prototype.ValueTypeName="color";var vh=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};vh.prototype.ValueTypeName="number";var yh=class extends rr{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},cl=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new yh(this.times,this.values,this.getValueSize(),t)}};cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends Sn{constructor(t,e,i){super(t,e,i)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Wa;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends Sn{constructor(t,e,i,n){super(t,e,i,n)}};Sh.prototype.ValueTypeName="vector";var $c={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(qm(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!qm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function qm(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var $o=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bg=new $o,Ko=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo=new WeakMap,Mh=class extends Ko{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=$c.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Lo.get(o);d===void 0&&(d=[],Lo.set(o,d)),d.push({onLoad:e,onError:n})}return o}let a=zo("img");function l(){h(),e&&e(this);let d=Lo.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Lo.delete(this),r.manager.itemEnd(t)}function c(d){h(),n&&n(d),$c.remove(`image:${t}`);let f=Lo.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onError&&p.onError(d)}Lo.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$c.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var hl=class extends Ko{constructor(t){super(t)}load(t,e,i,n){let r=new Fi,o=new Mh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},Qo=class extends Si{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ul=class extends Qo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Si.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qf=new de,Ym=new O,Zm=new O,fl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ym.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ym),Zm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){qf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(qf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Bo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(qf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qc=new O,Yc=new Un,ss=new O,dl=class extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qc,Yc,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Yc,ss.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(qc,Yc,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Yc,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ir=new O,Jm=new At,$m=new At,Ui=class extends dl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ir.x,ir.y).multiplyScalar(-t/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-t/ir.z)}getViewSize(t,e){return this.getViewBounds(t,Jm,$m),e.subVectors($m,Jm)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qf=class extends fl{constructor(){super(new Ui(90,1,.5,500)),this.isPointLightShadow=!0}},lr=class extends Qo{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},kr=class extends dl{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jf=class extends fl{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jo=class extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Si.DEFAULT_UP),this.updateMatrix(),this.target=new Si,this.shadow=new jf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Do=-90,No=1,ta=class extends Si{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ui(Do,No,t,e);n.layers=this.layers,this.add(n);let r=new Ui(Do,No,t,e);r.layers=this.layers,this.add(r);let o=new Ui(Do,No,t,e);o.layers=this.layers,this.add(o);let a=new Ui(Do,No,t,e);a.layers=this.layers,this.add(a);let l=new Ui(Do,No,t,e);l.layers=this.layers,this.add(l);let c=new Ui(Do,No,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},bh=class extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},pl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Pv.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Pv(){this._document.hidden===!1&&this.reset()}var Ad="\\[\\]\\.:\\/",Iv=new RegExp("["+Ad+"]","g"),Rd="[^"+Ad+"]",Lv="[^"+Ad.replace("\\.","")+"]",Dv=/((?:WC+[\/:])*)/.source.replace("WC",Rd),Nv=/(WCOD+)?/.source.replace("WCOD",Lv),Uv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rd),Ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rd),Fv=new RegExp("^"+Dv+Nv+Uv+Ov+"$"),Bv=["material","materials","bones","map"],td=class{constructor(t,e,i){let n=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(t){let e=Fv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Bv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=td;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i1=new Float32Array(1);var Km=new de,ml=class{constructor(t,e,i=0,n=1/0){this.ray=new qo(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Km.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(t,e=!0,i=[]){return ed(t,this,i,e),i.sort(Qm),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)ed(t[n],this,i,e);return i.sort(Qm),i}};function Qm(s,t){return s.distance-t.distance}function ed(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ed(r[o],t,e,!0)}}var Nd=class Nd{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Nd.prototype.isMatrix2=!0;var id=Nd;function Cd(s,t,e,i){let n=zv(i);switch(e){case pd:return s*t;case Ih:return s*t/n.components*n.byteLength;case Lh:return s*t/n.components*n.byteLength;case hr:return s*t*2/n.components*n.byteLength;case Dh:return s*t*2/n.components*n.byteLength;case md:return s*t*3/n.components*n.byteLength;case bn:return s*t*4/n.components*n.byteLength;case Nh:return s*t*4/n.components*n.byteLength;case bl:case Tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case El:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oh:case Bh:return Math.max(s,16)*Math.max(t,8)/4;case Uh:case Fh:return Math.max(s,8)*Math.max(t,8)/2;case zh:case kh:case Gh:case Vh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hh:case Al:case Wh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case tu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case eu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case iu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case su:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ru:case ou:case au:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lu:case cu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Rl:case hu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zv(s){switch(s){case ln:case hd:return{byteLength:1,components:1};case sa:case ud:case wi:return{byteLength:2,components:1};case Ch:case Ph:return{byteLength:2,components:4};case ts:case Rh:case Fn:return{byteLength:4,components:1};case fd:case dd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function o0(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hv(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
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
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zv=`#ifdef USE_AOMAP
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
#endif`,Jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
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
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ey=`#ifdef USE_IRIDESCENCE
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
#endif`,iy=`#ifdef USE_BUMPMAP
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uy=`#define PI 3.141592653589793
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
} // validated`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_y="gl_FragColor = linearToOutputTexel( gl_FragColor );",xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
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
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,zy=`uniform sampler2D dfgLUT;
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
}`,ky=`
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ky=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eS=`#if defined( USE_MORPHCOLORS )
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
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wS=`float getShadowMask() {
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
}`,AS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,US=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GS=`uniform sampler2D t2D;
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform float backgroundBlurriness;
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`#include <common>
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
}`,ZS=`#if DEPTH_PACKING == 3200
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
}`,JS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
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
}`,tM=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,nM=`#define LAMBERT
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
}`,sM=`#define LAMBERT
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
}`,rM=`#define MATCAP
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
}`,oM=`#define MATCAP
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
}`,aM=`#define NORMAL
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
}`,lM=`#define NORMAL
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
}`,cM=`#define PHONG
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
}`,hM=`#define PHONG
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
}`,uM=`#define STANDARD
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
}`,fM=`#define STANDARD
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
}`,dM=`#define TOON
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
}`,pM=`#define TOON
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
}`,mM=`uniform float size;
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,xM=`uniform vec3 color;
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
}`,vM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Gv,alphahash_pars_fragment:Vv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:qv,alphatest_pars_fragment:Yv,aomap_fragment:Zv,aomap_pars_fragment:Jv,batching_pars_vertex:$v,batching_vertex:Kv,begin_vertex:Qv,beginnormal_vertex:jv,bsdfs:ty,iridescence_fragment:ey,bumpmap_pars_fragment:iy,clipping_planes_fragment:ny,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:oy,color_fragment:ay,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:hy,common:uy,defaultnormal_vertex:fy,displacementmap_pars_vertex:dy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:gy,colorspace_fragment:_y,colorspace_pars_fragment:xy,envmap_fragment:vy,envmap_common_pars_fragment:yy,envmap_pars_fragment:Sy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Dy,envmap_vertex:by,fog_vertex:Ty,fog_pars_vertex:Ey,fog_fragment:wy,fog_pars_fragment:Ay,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Cy,lights_lambert_fragment:Py,lights_lambert_pars_fragment:Iy,lights_pars_begin:Ly,lights_toon_fragment:Ny,lights_toon_pars_fragment:Uy,lights_phong_fragment:Oy,lights_phong_pars_fragment:Fy,lights_physical_fragment:By,lights_physical_pars_fragment:zy,lights_fragment_begin:ky,lights_fragment_maps:Hy,lights_fragment_end:Gy,lightprobes_pars_fragment:Vy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Yy,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:$y,map_particle_pars_fragment:Ky,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:jy,morphinstance_vertex:tS,morphcolor_vertex:eS,morphnormal_vertex:iS,morphtarget_pars_vertex:nS,morphtarget_vertex:sS,normal_fragment_begin:rS,normal_fragment_maps:oS,normal_pars_fragment:aS,normal_pars_vertex:lS,normal_vertex:cS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:pS,opaque_fragment:mS,packing:gS,premultiplied_alpha_fragment:_S,project_vertex:xS,dithering_fragment:vS,dithering_pars_fragment:yS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:TS,shadowmap_vertex:ES,shadowmask_pars_fragment:wS,skinbase_vertex:AS,skinning_pars_vertex:RS,skinning_vertex:CS,skinnormal_vertex:PS,specularmap_fragment:IS,specularmap_pars_fragment:LS,tonemapping_fragment:DS,tonemapping_pars_fragment:NS,transmission_fragment:US,transmission_pars_fragment:OS,uv_pars_fragment:FS,uv_pars_vertex:BS,uv_vertex:zS,worldpos_vertex:kS,background_vert:HS,background_frag:GS,backgroundCube_vert:VS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:qS,depth_vert:YS,depth_frag:ZS,distance_vert:JS,distance_frag:$S,equirect_vert:KS,equirect_frag:QS,linedashed_vert:jS,linedashed_frag:tM,meshbasic_vert:eM,meshbasic_frag:iM,meshlambert_vert:nM,meshlambert_frag:sM,meshmatcap_vert:rM,meshmatcap_frag:oM,meshnormal_vert:aM,meshnormal_frag:lM,meshphong_vert:cM,meshphong_frag:hM,meshphysical_vert:uM,meshphysical_frag:fM,meshtoon_vert:dM,meshtoon_frag:pM,points_vert:mM,points_frag:gM,shadow_vert:_M,shadow_frag:xM,sprite_vert:vM,sprite_frag:yM},wt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},fs={basic:{uniforms:Bi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Bi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Bi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Bi([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Bi([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Bi([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Bi([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Bi([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Bi([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Bi([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Bi([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Bi([wt.common,wt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Bi([wt.lights,wt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};fs.physical={uniforms:Bi([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var fu={r:0,b:0,g:0},SM=new de,a0=new Yt;a0.set(-1,0,0,0,1,0,0,0,1);function MM(s,t,e,i,n,r){let o=new Ft(0),a=n===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,b){let y=u(b);y&&y.isCubeTexture?(c===void 0&&(c=new Pt(new Pe(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Yr(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(a0),c.material.toneMapped=se.getTransfer(y.colorSpace)!==_e,(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new cs(2,2),new Qe({name:"BackgroundMaterial",uniforms:Yr(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(fu,wd(s)),e.buffers.color.setClear(fu.r,fu.g,fu.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function bM(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(D,L,k,P,N){let z=!1,F=d(D,P,k,L);r!==F&&(r=F,c(r.object)),z=u(D,P,k,N),z&&p(D,P,k,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(D,L,k,P),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,k,P){let N=P.wireframe===!0,z=i[L.id];z===void 0&&(z={},i[L.id]=z);let F=D.isInstancedMesh===!0?D.id:0,Y=z[F];Y===void 0&&(Y={},z[F]=Y);let V=Y[k.id];V===void 0&&(V={},Y[k.id]=V);let C=V[N];return C===void 0&&(C=f(l()),V[N]=C),C}function f(D){let L=[],k=[],P=[];for(let N=0;N<e;N++)L[N]=0,k[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,L,k,P){let N=r.attributes,z=L.attributes,F=0,Y=k.getAttributes();for(let V in Y)if(Y[V].location>=0){let J=N[V],ft=z[V];if(ft===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),J===void 0||J.attribute!==ft||ft&&J.data!==ft.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function p(D,L,k,P){let N={},z=L.attributes,F=0,Y=k.getAttributes();for(let V in Y)if(Y[V].location>=0){let J=z[V];J===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let ft={};ft.attribute=J,J&&J.data&&(ft.data=J.data),N[V]=ft,F++}r.attributes=N,r.attributesNum=F,r.index=P}function _(){let D=r.newAttributes;for(let L=0,k=D.length;L<k;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let k=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;k[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),N[D]!==L&&(s.vertexAttribDivisor(D,L),N[D]=L)}function v(){let D=r.newAttributes,L=r.enabledAttributes;for(let k=0,P=L.length;k<P;k++)L[k]!==D[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function b(D,L,k,P,N,z,F){F===!0?s.vertexAttribIPointer(D,L,k,N,z):s.vertexAttribPointer(D,L,k,P,N,z)}function y(D,L,k,P){_();let N=P.attributes,z=k.getAttributes(),F=L.defaultAttributeValues;for(let Y in z){let V=z[Y];if(V.location>=0){let C=N[Y];if(C===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(C=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(C=D.instanceColor)),C!==void 0){let J=C.normalized,ft=C.itemSize,it=t.get(C);if(it===void 0)continue;let H=it.buffer,tt=it.type,ct=it.bytesPerElement,pt=tt===s.INT||tt===s.UNSIGNED_INT||C.gpuType===Rh;if(C.isInterleavedBufferAttribute){let Q=C.data,lt=Q.isInterleavedBuffer===!0?Q.stride:Q.itemSize,Wt=C.offset;if(Q.isInstancedInterleavedBuffer||Q.isInstancedBufferAttribute){for(let Et=0;Et<V.locationSize;Et++)g(V.location+Et,Q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<V.locationSize;Et++)m(V.location+Et);s.bindBuffer(s.ARRAY_BUFFER,H);for(let Et=0;Et<V.locationSize;Et++)b(V.location+Et,ft/V.locationSize,tt,J,lt*ct,(Wt+ft/V.locationSize*Et)*ct,pt)}else{if(C.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)g(V.location+Q,C.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);s.bindBuffer(s.ARRAY_BUFFER,H);for(let Q=0;Q<V.locationSize;Q++)b(V.location+Q,ft/V.locationSize,tt,J,ft*ct,ft/V.locationSize*Q*ct,pt)}}else if(F!==void 0){let J=F[Y];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(V.location,J);break;case 3:s.vertexAttrib3fv(V.location,J);break;case 4:s.vertexAttrib4fv(V.location,J);break;default:s.vertexAttrib1fv(V.location,J)}}}}v()}function S(){w();for(let D in i){let L=i[D];for(let k in L){let P=L[k];for(let N in P){let z=P[N];for(let F in z)h(z[F].object),delete z[F];delete P[N]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let L=i[D.id];for(let k in L){let P=L[k];for(let N in P){let z=P[N];for(let F in z)h(z[F].object),delete z[F];delete P[N]}}delete i[D.id]}function x(D){for(let L in i){let k=i[L];for(let P in k){let N=k[P];if(N[D.id]===void 0)continue;let z=N[D.id];for(let F in z)h(z[F].object),delete z[F];delete N[D.id]}}}function M(D){for(let L in i){let k=i[L],P=D.isInstancedMesh===!0?D.id:0,N=k[P];if(N!==void 0){for(let z in N){let F=N[z];for(let Y in F)h(F[Y].object),delete F[Y];delete N[z]}delete k[P],Object.keys(k).length===0&&delete i[L]}}}function w(){E(),o=!0,r!==n&&(r=n,c(r.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function TM(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function EM(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(x){return!(x!==bn&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let M=x===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==ln&&x!==Fn&&!M&&i.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:S,samples:T}}function wM(s){let t=this,e=null,i=0,n=!1,r=!1,o=new $n,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,f,b,u);for(let S=0;S!==b;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=u;b!==_;++b,y+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Ll=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new el(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Pe(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pi,blending:Ds});r.uniforms.tEquirect.value=e;let o=new Pt(n,r),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=Ji),new ta(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},zg=256,AM=3,RM=20,l0=256,c0=16,CM=3,PM=new O,IM=new Ft,pu=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ta(1,10,null),this._boxMesh=new Pt(new Pe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=PM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(IM));let m=new ta(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zg,Md(t))}_fromTexture(t,e){t.mapping===Xr||t.mapping===na?this._setSize(t.image.length===0?zg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=kg(t,!1,!1),i=Math.log2(t)-AM;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=kg(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Xr||t.mapping===na?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hg()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=LM(),this._integrationMaterial=DM());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/c0);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-CM)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(l0*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=NM());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}};function kg(s,t,e){return new Ll(s,{minFilter:Ns,generateMipmaps:t,type:wi,colorSpace:Xa,depthBuffer:e})}function Dl(s,t,e){return new Qe({name:s,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:pi,blending:Ds,depthTest:!1,depthWrite:!1})}function LM(){return Dl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${l0}u

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
	`)}function DM(){return Dl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:c0}},`

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
	`)}function NM(){return Dl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${RM}
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
	`)}function Hg(){return Dl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gg(){return Dl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function UM(s){let t=new WeakMap,e=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Eh||u===wh)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Ll(p.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===Eh||u===wh,_=u===Xr||u===na;if(p||_){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new pu(s)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new pu(s)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Eh?f.mapping=Xr:u===wh&&(f.mapping=na),f}function l(f){let u=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function OM(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Ha("WebGLRenderer: "+i+" extension not supported."),n}}}function FM(s,t,e,i){let n={},r=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return n[_.id]!==void 0||(_.addEventListener("dispose",a),n[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],s.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?Qa:Ka,y=new b(Math.ceil(v/3)*6,1),S=y.array;if(_!==null){let x=_.array;g=_.version;for(let M=0,w=0;M<v;M+=3){let E=x[M+0],D=x[M+1],L=x[M+2];S[w++]=E,S[w++]=D,S[w++]=D,S[w++]=L,S[w++]=L,S[w++]=E}}else{g=m.version;for(let x=0,M=0;x<v;x+=3){let w=x+0,E=x+1,D=x+2;S[M++]=w,S[M++]=E,S[M++]=E,S[M++]=D,S[M++]=D,S[M++]=w}}y.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,y)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in n){let _=n[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function BM(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(i,f,r,d*o,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];e.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zM(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function kM(s,t,e){let i=new WeakMap,n=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let w=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=a.attributes.position.count*b,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*d),x=new Za(T,y,S,d);x.type=Fn,x.needsUpdate=!0;let M=b*4;for(let E=0;E<d;E++){let D=m[E],L=g[E],k=v[E],P=y*S*4*E;for(let N=0;N<D.count;N++){let z=N*M;u===!0&&(n.fromBufferAttribute(D,N),T[P+z+0]=n.x,T[P+z+1]=n.y,T[P+z+2]=n.z,T[P+z+3]=0),p===!0&&(n.fromBufferAttribute(L,N),T[P+z+4]=n.x,T[P+z+5]=n.y,T[P+z+6]=n.z,T[P+z+7]=0),_===!0&&(n.fromBufferAttribute(k,N),T[P+z+8]=n.x,T[P+z+9]=n.y,T[P+z+10]=n.z,T[P+z+11]=k.itemSize===4?n.w:1)}}f={count:d,texture:x,size:new At(y,S)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function HM(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var GM={[gl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[Wr]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function VM(s,t,e,i,n,r){let o=new di(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ke;h.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new me([0,2,0,0,2,0],2));let d=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(h,d),u=new kr(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,v=null,b=[],y=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let x=0;x<b.length;x++){let M=b[x];M.setSize&&M.setSize(S,T)}},this.setEffects=function(S){b=S,y=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new di(T,x,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new di(T,x,{type:wi,depthBuffer:!1,stencilBuffer:!1}));let M=n===!0&&b.some(w=>w.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ls(T,x),r===!0&&(c.format=Us,c.type=qr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let w=0;w<b.length;w++){let E=b[w];E.setSize&&E.setSize(T,x),M&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(S,T){if(m||S.toneMapping===hs&&b.length===0)return!1;if(v=T,T!==null){let x=T.width,M=T.height;(o.width!==x||o.height!==M)&&this.setSize(x,M)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=hs,!0},this.hasRenderPass=function(){return y},this.end=function(S,T){S.toneMapping=g,m=!0;let x=o,M=a;for(let w=0;w<b.length;w++){let E=b[w];E.enabled!==!1&&(E.render(S,M,x,T),E.needsSwap!==!1&&(x=M,M=M===a?l:a))}if(p!==S.outputColorSpace||_!==S.toneMapping){p=S.outputColorSpace,_=S.toneMapping,d.defines={},se.getTransfer(p)===_e&&(d.defines.SRGB_TRANSFER="");let w=GM[_];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(f,u),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var h0=new Fi,u0=new Ls(1,1),f0=new il(1),d0=new Za,p0=new lh,m0=new el,Vg=[],Wg=[],Xg=new Float32Array(16),qg=new Float32Array(9),Yg=new Float32Array(4);function oa(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Vg[n];if(r===void 0&&(r=new Float32Array(n),Vg[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function mi(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function gi(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function gu(s,t){let e=Wg[t];e===void 0&&(e=new Int32Array(t),Wg[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function WM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function XM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mi(e,t))return;s.uniform2fv(this.addr,t),gi(e,t)}}function qM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mi(e,t))return;s.uniform3fv(this.addr,t),gi(e,t)}}function YM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mi(e,t))return;s.uniform4fv(this.addr,t),gi(e,t)}}function ZM(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(mi(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),gi(e,t)}else{if(mi(e,i))return;Yg.set(i),s.uniformMatrix2fv(this.addr,!1,Yg),gi(e,i)}}function JM(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(mi(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),gi(e,t)}else{if(mi(e,i))return;qg.set(i),s.uniformMatrix3fv(this.addr,!1,qg),gi(e,i)}}function $M(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(mi(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),gi(e,t)}else{if(mi(e,i))return;Xg.set(i),s.uniformMatrix4fv(this.addr,!1,Xg),gi(e,i)}}function KM(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function QM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mi(e,t))return;s.uniform2iv(this.addr,t),gi(e,t)}}function jM(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mi(e,t))return;s.uniform3iv(this.addr,t),gi(e,t)}}function tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mi(e,t))return;s.uniform4iv(this.addr,t),gi(e,t)}}function eb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ib(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mi(e,t))return;s.uniform2uiv(this.addr,t),gi(e,t)}}function nb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mi(e,t))return;s.uniform3uiv(this.addr,t),gi(e,t)}}function sb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mi(e,t))return;s.uniform4uiv(this.addr,t),gi(e,t)}}function _u(s){return s.version===0&&(s.compareFunction=xd,s.needsUpdate=!0),s}function rb(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=_u(u0):r=h0,e.setTexture2D(t||r,n)}function ob(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||p0,n)}function ab(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=_u(f0):r=m0,e.setTextureCube(t||r,n)}function lb(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||d0,n)}function cb(s){switch(s){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return YM;case 35674:return ZM;case 35675:return JM;case 35676:return $M;case 5124:case 35670:return KM;case 35667:case 35671:return QM;case 35668:case 35672:return jM;case 35669:case 35673:return tb;case 5125:return eb;case 36294:return ib;case 36295:return nb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}function hb(s,t){s.uniform1fv(this.addr,t)}function ub(s,t){let e=oa(t,this.size,2);s.uniform2fv(this.addr,e)}function fb(s,t){let e=oa(t,this.size,3);s.uniform3fv(this.addr,e)}function db(s,t){let e=oa(t,this.size,4);s.uniform4fv(this.addr,e)}function pb(s,t){let e=oa(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mb(s,t){let e=oa(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gb(s,t){let e=oa(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function _b(s,t){s.uniform1iv(this.addr,t)}function xb(s,t){s.uniform2iv(this.addr,t)}function vb(s,t){s.uniform3iv(this.addr,t)}function yb(s,t){s.uniform4iv(this.addr,t)}function Sb(s,t){s.uniform1uiv(this.addr,t)}function Mb(s,t){s.uniform2uiv(this.addr,t)}function bb(s,t){s.uniform3uiv(this.addr,t)}function Tb(s,t){s.uniform4uiv(this.addr,t)}function Eb(s,t,e){let i=this.cache,n=t.length,r=gu(e,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=_u(u0):o=h0;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function wb(s,t,e){let i=this.cache,n=t.length,r=gu(e,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||p0,r[o])}function Ab(s,t,e){let i=this.cache,n=t.length,r=gu(e,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=_u(f0):o=m0;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,r[a])}function Rb(s,t,e){let i=this.cache,n=t.length,r=gu(e,n);mi(i,r)||(s.uniform1iv(this.addr,r),gi(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||d0,r[o])}function Cb(s){switch(s){case 5126:return hb;case 35664:return ub;case 35665:return fb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return Mb;case 36295:return bb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}var Fd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cb(e.type)}},Bd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cb(e.type)}},zd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Ud=/(\w+)(\])?(\[|\.)?/g;function Zg(s,t){s.seq.push(t),s.map[t.id]=t}function Pb(s,t,e){let i=s.name,n=i.length;for(Ud.lastIndex=0;;){let r=Ud.exec(i),o=Ud.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Zg(e,c===void 0?new Fd(a,s,t):new Bd(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new zd(a),Zg(e,d)),e=d}}}var ra=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Pb(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Jg(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Ib=37297,Lb=0;function Db(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var $g=new Yt;function Nb(s){se._getMatrix($g,se.workingColorSpace,s);let t=`mat3( ${$g.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case qa:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kg(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Db(s.getShaderSource(t),a)}else return r}function Ub(s,t){let e=Nb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ob={[gl]:"Linear",[_l]:"Reinhard",[xl]:"Cineon",[Wr]:"ACESFilmic",[yl]:"AgX",[Sl]:"Neutral",[vl]:"Custom"};function Fb(s,t){let e=Ob[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var du=new O;function Bb(){se.getLuminanceCoefficients(du);let s=du.x.toFixed(4),t=du.y.toFixed(4),e=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function kb(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hb(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Il(s){return s!==""}function Qg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function jg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(s){return s.replace(Gb,Vb)}function Vb(s,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return kd(e)}var Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(s){return s.replace(Wb,Xb)}function Xb(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function e0(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var qb={[Hr]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function Yb(s){return qb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zb={[na]:"ENVMAP_MODE_REFRACTION"};function Jb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Zb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $b={[ld]:"ENVMAP_BLENDING_MULTIPLY",[yg]:"ENVMAP_BLENDING_MIX",[Sg]:"ENVMAP_BLENDING_ADD"};function Kb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$b[s.combine]||"ENVMAP_BLENDING_NONE"}function Qb(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Yb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Jb(e),d=Kb(e),f=zb(e),u=kb(r),p=n.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Il).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Il).join(`
`),m.length>0&&(m+=`
`)):(_=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),m=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?Qt.tonemapping_pars_fragment:"",e.toneMapping!==hs?Fb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Ub("linearToOutputTexel",e.outputColorSpace),Bb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Il).join(`
`)),o=kd(o),o=Qg(o,e),o=jg(o,e),a=kd(a),a=Qg(a,e),a=jg(a,e),o=t0(o),a=t0(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+_+o,b=g+m+a,y=Jg(n,n.VERTEX_SHADER,v),S=Jg(n,n.FRAGMENT_SHADER,b);n.attachShader(p,y),n.attachShader(p,S),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function T(E){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(p)||"",L=n.getShaderInfoLog(y)||"",k=n.getShaderInfoLog(S)||"",P=D.trim(),N=L.trim(),z=k.trim(),F=!0,Y=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,y,S);else{let V=Kg(n,y,"vertex"),C=Kg(n,S,"fragment");Xt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+V+`
`+C)}else P!==""?Vt("WebGLProgram: Program Info Log:",P):(N===""||z==="")&&(Y=!1);Y&&(E.diagnostics={runnable:F,programLog:P,vertexShader:{log:N,prefix:_},fragmentShader:{log:z,prefix:m}})}n.deleteShader(y),n.deleteShader(S),x=new ra(n,p),M=Hb(n,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(p,Ib)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lb++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=S,this}var jb=0,Hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gd(t),e.set(t,i)),i}},Gd=class{constructor(t){this.id=jb++,this.code=t,this.usedTimes=0}};function tT(s){return s===hr||s===Al||s===Rl}function eT(s,t,e,i,n,r){let o=new Vo,a=new Hd,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,w,E,D,L){let k=E.fog,P=D.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||N,z),Y=f[x.type],V=i.precision;x.precision!==null&&(V=i.getMaxPrecision(x.precision),V!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));let C=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=C!==void 0?C.length:0,ft=0;P.morphAttributes.position!==void 0&&(ft=1),P.morphAttributes.normal!==void 0&&(ft=2),P.morphAttributes.color!==void 0&&(ft=3);let it,H,tt,ct;if(Y){let rt=fs[Y];it=rt.vertexShader,H=rt.fragmentShader}else{it=x.vertexShader,H=x.fragmentShader;let rt=a.getVertexShaderStage(x),Rt=a.getFragmentShaderStage(x);a.update(x,rt,Rt),tt=rt.id,ct=Rt.id}let pt=s.getRenderTarget(),Q=s.state.buffers.depth.getReversed(),lt=D.isInstancedMesh===!0,Wt=D.isBatchedMesh===!0,Et=!!x.map,qt=!!x.matcap,It=!!F,zt=It&&F.isPMREMTexture===!0,le=!!x.aoMap,ne=!!x.lightMap,$=!!x.bumpMap&&x.wireframe===!1,$t=!!x.normalMap,Xe=!!x.displacementMap,Se=!!x.emissiveMap,oe=!!x.metalnessMap,Te=!!x.roughnessMap,we=x.anisotropy>0,G=x.clearcoat>0,Kt=x.diffuseRoughness>0,ue=x.dispersion>0,Ht=x.retroreflectivity>0,_t=x.iridescence>0,ge=x.sheen>0,Bt=x.transmission>0,Gt=we&&!!x.anisotropyMap,I=G&&!!x.clearcoatMap,A=G&&!!x.clearcoatNormalMap,X=G&&!!x.clearcoatRoughnessMap,ht=Kt&&!!x.diffuseRoughnessMap,ot=_t&&!!x.iridescenceMap,gt=_t&&!!x.iridescenceThicknessMap,St=ge&&!!x.sheenColorMap,q=ge&&!!x.sheenRoughnessMap,nt=!!x.specularMap,mt=!!x.specularColorMap,U=!!x.specularIntensityMap,et=Bt&&!!x.transmissionMap,j=Bt&&!!x.thicknessMap,xt=!!x.gradientMap,dt=!!x.alphaMap,vt=x.alphaTest>0,ut=!!x.alphaHash,yt=!!x.extensions,at=hs;x.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(at=s.toneMapping);let st=zt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Mt={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:it,fragmentShader:H,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Wt,batchingColor:Wt&&D._colorsTexture!==null,instancing:lt,instancingColor:lt&&D.instanceColor!==null,instancingMorph:lt&&D.morphTexture!==null,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Et,matcap:qt,envMap:It,envMapMode:It&&F.mapping,envMapPMREM:zt,envMapMaxLod:zt?st.length-1:null,envMapSize:zt?st[0].width:null,aoMap:le,lightMap:ne,bumpMap:$,normalMap:$t,displacementMap:Xe,emissiveMap:Se,normalMapObjectSpace:$t&&x.normalMapType===Tg,normalMapTangentSpace:$t&&x.normalMapType===Cl,packedNormalMap:$t&&x.normalMapType===Cl&&tT(x.normalMap.format),metalnessMap:oe,roughnessMap:Te,anisotropy:we,anisotropyMap:Gt,clearcoat:G,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:X,diffuseRoughness:Kt,diffuseRoughnessMap:ht,dispersion:ue,retroreflection:Ht,iridescence:_t,iridescenceMap:ot,iridescenceThicknessMap:gt,sheen:ge,sheenColorMap:St,sheenRoughnessMap:q,specularMap:nt,specularColorMap:mt,specularIntensityMap:U,transmission:Bt,transmissionMap:et,thicknessMap:j,gradientMap:xt,opaque:x.transparent===!1&&x.blending===ia&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:vt,alphaHash:ut,combine:x.combine,mapUv:Et&&u(x.map.channel),aoMapUv:le&&u(x.aoMap.channel),lightMapUv:ne&&u(x.lightMap.channel),bumpMapUv:$&&u(x.bumpMap.channel),normalMapUv:$t&&u(x.normalMap.channel),displacementMapUv:Xe&&u(x.displacementMap.channel),emissiveMapUv:Se&&u(x.emissiveMap.channel),metalnessMapUv:oe&&u(x.metalnessMap.channel),roughnessMapUv:Te&&u(x.roughnessMap.channel),anisotropyMapUv:Gt&&u(x.anisotropyMap.channel),clearcoatMapUv:I&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&u(x.sheenRoughnessMap.channel),specularMapUv:nt&&u(x.specularMap.channel),specularColorMapUv:mt&&u(x.specularColorMap.channel),specularIntensityMapUv:U&&u(x.specularIntensityMap.channel),transmissionMapUv:et&&u(x.transmissionMap.channel),thicknessMapUv:j&&u(x.thicknessMap.channel),alphaMapUv:dt&&u(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&($t||we),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Et||dt),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Q,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ft,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(rt=>rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Et&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:Se&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===pi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||Wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function _(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)M.push(w),M.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(m(M,x),g(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function m(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let M=f[x.type],w;if(M){let E=fs[M];w=Fs.clone(E.uniforms)}else w=x.uniforms;return w}function b(x,M){let w=h.get(M);return w!==void 0?++w.usedTimes:(w=new Qb(s,M,x,n),c.push(w),h.set(M,w)),w}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:T}}function iT(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function nT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function i0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function n0(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,_,m,g){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},s[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),t++,v}function l(f,u,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let b=a(f,u,p,_,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):e.push(b)}function c(f,u,p,_,m,g){let v=a(f,u,p,_,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||nT),i.length>1&&i.sort(u||i0),n.length>1&&n.sort(u||i0)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function sT(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new n0,s.set(i,[o])):n>=r.length?(o=new n0,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function rT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ft};break;case"SpotLight":e={position:new O,direction:new O,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function oT(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var aT=0;function lT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cT(s){let t=new rT,e=oT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let n=new O,r=new de,o=new de;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,v=0,b=0,y=0,S=0,T=0,x=0,M=0,w=0,E=0;c.sort(lT);for(let L=0,k=c.length;L<k;L++){let P=c[L],N=P.color,z=P.intensity,F=P.distance,Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hr?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*z,d+=N.g*z,f+=N.b*z;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],z);E++}else if(P.isSunLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let C=P.shadow,J=e.get(P);J.shadowIntensity=C.intensity,J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=Y;let ft=C.getViewportCount();for(let it=0;it<ft;it++)i.sunShadowMatrix[_+it]=C.getMatrix(it),i.sunShadowCascade[_+it]=C._cascadeData[it];_+=ft,p++}i.sun[u]=V,u++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let C=P.shadow,J=e.get(P);J.shadowIntensity=C.intensity,J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=P.shadow.matrix,S++}i.directional[m]=V,m++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(N).multiplyScalar(z),V.distance=F,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[v]=V;let C=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,C.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[v]=C.matrix,P.castShadow){let J=e.get(P);J.shadowIntensity=C.intensity,J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=Y,x++}v++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(N).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=V,b++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let C=P.shadow,J=e.get(P);J.shadowIntensity=C.intensity,J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,J.shadowCameraNear=C.camera.near,J.shadowCameraFar=C.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=V,g++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(z),V.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[y]=V,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==S||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==M||D.numLightProbes!==E)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-w,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,D.sunLength=u,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=S,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=M,D.numLightProbes=E,i.version=aT++)}function l(c,h){let d=0,f=0,u=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),f++}else if(y.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function s0(s){let t=new cT(s),e=[],i=[],n=[];function r(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hT(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new s0(s),t.set(n,[a])):r>=o.length?(a=new s0(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
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
}`,dT=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],pT=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],r0=new de,Pl=new O,Od=new O;function mT(s,t,e){let i=new nr,n=new At,r=new At,o=new Be,a=new fh,l=new dh,c={},h=e.maxTextureSize,d={[cr]:pi,[pi]:cr,[Mn]:Mn},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:uT,fragmentShader:fT}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Ke;p.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let g=this.type;this.render=function(T,x,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===eg&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hr);let w=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ds),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=g!==this.type;k&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=T.length;P<N;P++){let z=T[P],F=z.shadow;if(F===void 0){Vt("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let Y=F.getFrameExtents();n.multiply(Y),r.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,F.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,F.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ea){if(z.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new di(n.x,n.y,{format:hr,type:wi,minFilter:Ji,magFilter:Ji,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new Ls(n.x,n.y,Fn),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=Cs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ri,F.map.depthTexture.magFilter=ri}else z.isPointLight?(F.map=new Ll(n.x),F.map.depthTexture=new il(n.x,ts)):(F.map=new di(n.x,n.y),F.map.depthTexture=new Ls(n.x,n.y,ts)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=Cs,this.type===Hr?(F.map.depthTexture.compareFunction=V?_d:gd,F.map.depthTexture.minFilter=Ji,F.map.depthTexture.magFilter=Ji):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ri,F.map.depthTexture.magFilter=ri);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==n.x||F.map.height!==n.y)&&F.map.setSize(n.x,n.y);let C=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();z.isPointLight!==!0&&F.updateMatrices(z,M);let J=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let ft=0;ft<C;ft++){let it=F.getCamera(ft);if(z.isPointLight){let H=F.camera,tt=F.matrix,ct=z.distance||H.far;ct!==H.far&&(H.far=ct,H.updateProjectionMatrix()),Pl.setFromMatrixPosition(z.matrixWorld),H.position.copy(Pl),Od.copy(H.position),Od.add(dT[ft]),H.up.copy(pT[ft]),H.lookAt(Od),H.updateMatrixWorld(),tt.makeTranslation(-Pl.x,-Pl.y,-Pl.z),r0.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),F._frustum.setFromProjectionMatrix(r0,H.coordinateSystem,H.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,ft),s.clear();else{ft===0&&(s.setRenderTarget(F.map),s.clear());let H=F.getViewport(ft);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),L.viewport(o)}i=F.getFrustum(ft),y(x,M,it,z,J,this.type)}F.isPointLightShadow!==!0&&this.type===ea&&v(F,M),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(w,E,D)};function v(T,x){let M=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new di(n.x,n.y,{format:hr,type:wi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(x,null,M,f,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(x,null,M,u,_,null)}function b(T,x,M,w){let E=null,D=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)E=D;else if(E=M.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=E.uuid,k=x.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let N=P[k];N===void 0&&(N=E.clone(),P[k]=N,x.addEventListener("dispose",S)),E=N}if(E.visible=x.visible,E.wireframe=x.wireframe,w===ea?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:d[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=s.properties.get(E);L.light=M}return E}function y(T,x,M,w,E,D){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===ea)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let P=t.update(T),N=T.material;if(Array.isArray(N)){let z=P.groups;for(let F=0,Y=z.length;F<Y;F++){let V=z[F],C=N[V.materialIndex];if(C&&C.visible){let J=b(T,C,w,D);T.onBeforeShadow(s,T,x,M,P,J,V),s.renderBufferDirect(M,null,P,J,T,V),T.onAfterShadow(s,T,x,M,P,J,V)}}}else if(N.visible){let z=b(T,N,w,D);T.onBeforeShadow(s,T,x,M,P,z,null),s.renderBufferDirect(M,null,P,z,T,null),T.onAfterShadow(s,T,x,M,P,z,null)}}let k=T.children;for(let P=0,N=k.length;P<N;P++)y(k[P],x,M,w,E,D)}function S(T){T.target.removeEventListener("dispose",S);for(let M in c){let w=c[M],E=T.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function gT(s,t){function e(){let U=!1,et=new Be,j=null,xt=new Be(0,0,0,0);return{setMask:function(dt){j!==dt&&!U&&(s.colorMask(dt,dt,dt,dt),j=dt)},setLocked:function(dt){U=dt},setClear:function(dt,vt,ut,yt,at){at===!0&&(dt*=yt,vt*=yt,ut*=yt),et.set(dt,vt,ut,yt),xt.equals(et)===!1&&(s.clearColor(dt,vt,ut,yt),xt.copy(et))},reset:function(){U=!1,j=null,xt.set(-1,0,0,0)}}}function i(){let U=!1,et=!1,j=null,xt=null,dt=null;return{setReversed:function(vt){if(et!==vt){let ut=t.get("EXT_clip_control");vt?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),et=vt;let yt=dt;dt=null,this.setClear(yt)}},getReversed:function(){return et},setTest:function(vt){vt?Q(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(vt){j!==vt&&!U&&(s.depthMask(vt),j=vt)},setFunc:function(vt){if(et&&(vt=Ng[vt]),xt!==vt){switch(vt){case Kc:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case jc:s.depthFunc(s.LESS);break;case Oo:s.depthFunc(s.LEQUAL);break;case th:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case ih:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=vt}},setLocked:function(vt){U=vt},setClear:function(vt){dt!==vt&&(dt=vt,et&&(vt=1-vt),s.clearDepth(vt))},reset:function(){U=!1,j=null,xt=null,dt=null,et=!1}}}function n(){let U=!1,et=null,j=null,xt=null,dt=null,vt=null,ut=null,yt=null,at=null;return{setTest:function(st){U||(st?Q(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(st){et!==st&&!U&&(s.stencilMask(st),et=st)},setFunc:function(st,Mt,rt){(j!==st||xt!==Mt||dt!==rt)&&(s.stencilFunc(st,Mt,rt),j=st,xt=Mt,dt=rt)},setOp:function(st,Mt,rt){(vt!==st||ut!==Mt||yt!==rt)&&(s.stencilOp(st,Mt,rt),vt=st,ut=Mt,yt=rt)},setLocked:function(st){U=st},setClear:function(st){at!==st&&(s.clearStencil(st),at=st)},reset:function(){U=!1,et=null,j=null,xt=null,dt=null,vt=null,ut=null,yt=null,at=null}}}let r=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,S=null,T=null,x=null,M=new Ft(0,0,0),w=0,E=!1,D=null,L=null,k=null,P=null,N=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=Y>=2);let C=null,J={},ft=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),H=new Be().fromArray(ft),tt=new Be().fromArray(it);function ct(U,et,j,xt){let dt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(U,vt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<j;ut++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(et+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return vt}let pt={};pt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),pt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Oo),$(!1),$t(nd),Q(s.CULL_FACE),le(Ds);function Q(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function lt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Wt(U,et){return f[U]!==et?(s.bindFramebuffer(U,et),f[U]=et,U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=et),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Et(U,et){let j=p,xt=!1;if(U){j=u.get(et),j===void 0&&(j=[],u.set(et,j));let dt=U.textures;if(j.length!==dt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,ut=dt.length;vt<ut;vt++)j[vt]=s.COLOR_ATTACHMENT0+vt;j.length=dt.length,xt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,xt=!0);xt&&s.drawBuffers(j)}function qt(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let It={[Vr]:s.FUNC_ADD,[ng]:s.FUNC_SUBTRACT,[sg]:s.FUNC_REVERSE_SUBTRACT};It[rg]=s.MIN,It[og]=s.MAX;let zt={[ag]:s.ZERO,[lg]:s.ONE,[cg]:s.SRC_COLOR,[od]:s.SRC_ALPHA,[mg]:s.SRC_ALPHA_SATURATE,[dg]:s.DST_COLOR,[ug]:s.DST_ALPHA,[hg]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[pg]:s.ONE_MINUS_DST_COLOR,[fg]:s.ONE_MINUS_DST_ALPHA,[gg]:s.CONSTANT_COLOR,[_g]:s.ONE_MINUS_CONSTANT_COLOR,[xg]:s.CONSTANT_ALPHA,[vg]:s.ONE_MINUS_CONSTANT_ALPHA};function le(U,et,j,xt,dt,vt,ut,yt,at,st){if(U===Ds){m===!0&&(lt(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),U!==ig){if(U!==g||st!==E){if((v!==Vr||S!==Vr)&&(s.blendEquation(s.FUNC_ADD),v=Vr,S=Vr),st)switch(U){case ia:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFunc(s.ONE,s.ONE);break;case sd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",U);break}else switch(U){case ia:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sd:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rd:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",U);break}b=null,y=null,T=null,x=null,M.set(0,0,0),w=0,g=U,E=st}return}dt=dt||et,vt=vt||j,ut=ut||xt,(et!==v||dt!==S)&&(s.blendEquationSeparate(It[et],It[dt]),v=et,S=dt),(j!==b||xt!==y||vt!==T||ut!==x)&&(s.blendFuncSeparate(zt[j],zt[xt],zt[vt],zt[ut]),b=j,y=xt,T=vt,x=ut),(yt.equals(M)===!1||at!==w)&&(s.blendColor(yt.r,yt.g,yt.b,at),M.copy(yt),w=at),g=U,E=!1}function ne(U,et){U.side===Mn?lt(s.CULL_FACE):Q(s.CULL_FACE);let j=U.side===pi;et&&(j=!j),$(j),U.blending===ia&&U.transparent===!1?le(Ds):le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let xt=U.stencilWrite;a.setTest(xt),xt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function $t(U){U!==jm?(Q(s.CULL_FACE),U!==L&&(U===nd?s.cullFace(s.BACK):U===tg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),L=U}function Xe(U){U!==k&&(F&&s.lineWidth(U),k=U)}function Se(U,et,j){U?(Q(s.POLYGON_OFFSET_FILL),(P!==et||N!==j)&&(P=et,N=j,o.getReversed()&&(et=-et,j=-j),s.polygonOffset(et,j))):lt(s.POLYGON_OFFSET_FILL)}function oe(U){U?Q(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function Te(U){U===void 0&&(U=s.TEXTURE0+z-1),C!==U&&(s.activeTexture(U),C=U)}function we(U,et,j){j===void 0&&(C===null?j=s.TEXTURE0+z-1:j=C);let xt=J[j];xt===void 0&&(xt={type:void 0,texture:void 0},J[j]=xt),(xt.type!==U||xt.texture!==et)&&(C!==j&&(s.activeTexture(j),C=j),s.bindTexture(U,et||pt[U]),xt.type=U,xt.texture=et)}function G(){let U=J[C];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function ue(){try{s.compressedTexImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function _t(){try{s.texSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Bt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Gt(){try{s.texStorage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function I(){try{s.texStorage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function A(){try{s.texImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function X(){try{s.texImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function ht(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function ot(U,et){d[U]!==et&&(s.pixelStorei(U,et),d[U]=et)}function gt(U){H.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),H.copy(U))}function St(U){tt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),tt.copy(U))}function q(U,et){let j=c.get(et);j===void 0&&(j=new WeakMap,c.set(et,j));let xt=j.get(U);xt===void 0&&(xt=s.getUniformBlockIndex(et,U.name),s.uniformBlockBinding(et,xt,xt),j.set(U,xt))}function nt(U,et,j){let dt=c.get(et).get(U);l[dt]!==j&&(s.bindBufferBase(s.UNIFORM_BUFFER,dt,j),l[dt]=j)}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},C=null,J={},f={},l={},u=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,S=null,T=null,x=null,M=new Ft(0,0,0),w=0,E=!1,D=null,L=null,k=null,P=null,N=null,H.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:lt,bindFramebuffer:Wt,drawBuffers:Et,useProgram:qt,setBlending:le,setMaterial:ne,setFlipSided:$,setCullFace:$t,setLineWidth:Xe,setPolygonOffset:Se,setScissorTest:oe,activeTexture:Te,bindTexture:we,unbindTexture:G,compressedTexImage2D:Kt,compressedTexImage3D:ue,texImage2D:A,texImage3D:X,pixelStorei:ot,getParameter:ht,updateUBOMapping:q,uniformBlockBinding:nt,texStorage2D:Gt,texStorage3D:I,texSubImage2D:Ht,texSubImage3D:_t,compressedTexSubImage2D:ge,compressedTexSubImage3D:Bt,scissor:gt,viewport:St,reset:mt}}function _T(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return m?new OffscreenCanvas(I,A):zo("canvas")}function v(I,A,X){let ht=1,ot=Gt(I);if((ot.width>X||ot.height>X)&&(ht=X/Math.max(ot.width,ot.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let gt=Math.floor(ht*ot.width),St=Math.floor(ht*ot.height);f===void 0&&(f=g(gt,St));let q=A?g(gt,St):f;return q.width=gt,q.height=St,q.getContext("2d").drawImage(I,0,0,gt,St),Vt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+gt+"x"+St+")."),q}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function b(I){return I.generateMipmaps}function y(I){s.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(I,A,X,ht,ot,gt=!1){if(I!==null){if(s[I]!==void 0)return s[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let St;ht&&(St=t.get("EXT_texture_norm16"),St||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=A;if(A===s.RED&&(X===s.FLOAT&&(q=s.R32F),X===s.HALF_FLOAT&&(q=s.R16F),X===s.UNSIGNED_BYTE&&(q=s.R8),X===s.UNSIGNED_SHORT&&St&&(q=St.R16_EXT),X===s.SHORT&&St&&(q=St.R16_SNORM_EXT)),A===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(q=s.R8UI),X===s.UNSIGNED_SHORT&&(q=s.R16UI),X===s.UNSIGNED_INT&&(q=s.R32UI),X===s.BYTE&&(q=s.R8I),X===s.SHORT&&(q=s.R16I),X===s.INT&&(q=s.R32I)),A===s.RG&&(X===s.FLOAT&&(q=s.RG32F),X===s.HALF_FLOAT&&(q=s.RG16F),X===s.UNSIGNED_BYTE&&(q=s.RG8),X===s.UNSIGNED_SHORT&&St&&(q=St.RG16_EXT),X===s.SHORT&&St&&(q=St.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(q=s.RG8UI),X===s.UNSIGNED_SHORT&&(q=s.RG16UI),X===s.UNSIGNED_INT&&(q=s.RG32UI),X===s.BYTE&&(q=s.RG8I),X===s.SHORT&&(q=s.RG16I),X===s.INT&&(q=s.RG32I)),A===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(q=s.RGB8UI),X===s.UNSIGNED_SHORT&&(q=s.RGB16UI),X===s.UNSIGNED_INT&&(q=s.RGB32UI),X===s.BYTE&&(q=s.RGB8I),X===s.SHORT&&(q=s.RGB16I),X===s.INT&&(q=s.RGB32I)),A===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),X===s.UNSIGNED_INT&&(q=s.RGBA32UI),X===s.BYTE&&(q=s.RGBA8I),X===s.SHORT&&(q=s.RGBA16I),X===s.INT&&(q=s.RGBA32I)),A===s.RGB&&(X===s.UNSIGNED_SHORT&&St&&(q=St.RGB16_EXT),X===s.SHORT&&St&&(q=St.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),A===s.RGBA){let nt=gt?qa:se.getTransfer(ot);X===s.FLOAT&&(q=s.RGBA32F),X===s.HALF_FLOAT&&(q=s.RGBA16F),X===s.UNSIGNED_BYTE&&(q=nt===_e?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&St&&(q=St.RGBA16_EXT),X===s.SHORT&&St&&(q=St.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(I,A){let X;return I?A===null||A===ts||A===qr?X=s.DEPTH24_STENCIL8:A===Fn?X=s.DEPTH32F_STENCIL8:A===sa&&(X=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ts||A===qr?X=s.DEPTH_COMPONENT24:A===Fn?X=s.DEPTH_COMPONENT32F:A===sa&&(X=s.DEPTH_COMPONENT16),X}function M(I,A){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==ri&&I.minFilter!==Ji?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){let A=new WeakRef(I);i.get(I).__ref=A,p.add(A),_.register(I,A,A)}function E(I){let A=i.get(I).__ref;A!==void 0&&(p.delete(A),_.unregister(A))}function D(I){k(I.target)}function L(I){P(I.target)}function k(I){I.removeEventListener("dispose",D),E(I),z(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function P(I){I.removeEventListener("dispose",L),E(I),Y(I)}function N(){for(let I of p){let A=I.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):k(A))}p.clear(),d.clear()}function z(I){let A=i.get(I);if(A.__webglInit===void 0)return;let X=I.source,ht=u.get(X);if(ht){let ot=ht[A.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&F(I),Object.keys(ht).length===0&&u.delete(X)}i.remove(I)}function F(I){let A=i.get(I);s.deleteTexture(A.__webglTexture);let X=I.source,ht=u.get(X);delete ht[A.__cacheKey],o.memory.textures--}function Y(I){let A=i.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();let X=I.depthTexture;if(X&&X.renderTarget===I&&k(X),I.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(A.__webglFramebuffer[ot]))for(let gt=0;gt<A.__webglFramebuffer[ot].length;gt++)s.deleteFramebuffer(A.__webglFramebuffer[ot][gt]);else s.deleteFramebuffer(A.__webglFramebuffer[ot]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ot])}else{if(Array.isArray(A.__webglFramebuffer))for(let ot=0;ot<A.__webglFramebuffer.length;ot++)s.deleteFramebuffer(A.__webglFramebuffer[ot]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ot=0;ot<A.__webglColorRenderbuffer.length;ot++)A.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ot]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ht=I.textures;for(let ot=0,gt=ht.length;ot<gt;ot++){let St=i.get(ht[ot]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(ht[ot])}i.remove(I)}let V=0;function C(){V=0}function J(){return V}function ft(I){V=I}function it(){let I=V;return I>=n.maxTextures&&Vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),V+=1,I}function H(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function tt(I,A){let X=i.get(I);if(I.isVideoTexture&&ge(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){let ht=I.image;if(ht===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(X,I,A);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+A)}function ct(I,A){let X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ne(X,I,A);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+A)}function pt(I,A){let X=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ne(X,I,A);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+A)}function Q(I,A){let X=i.get(I);if(I.version>0&&X.__version!==I.version){$(X,I,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+A)}let lt={[Fo]:s.REPEAT,[rs]:s.CLAMP_TO_EDGE,[sh]:s.MIRRORED_REPEAT},Wt={[ri]:s.NEAREST,[Mg]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[Ji]:s.LINEAR,[Ah]:s.LINEAR_MIPMAP_NEAREST,[Ns]:s.LINEAR_MIPMAP_LINEAR},Et={[wg]:s.NEVER,[xd]:s.ALWAYS,[Ag]:s.LESS,[gd]:s.LEQUAL,[Rg]:s.EQUAL,[_d]:s.GEQUAL,[Cg]:s.GREATER,[Pg]:s.NOTEQUAL};function qt(I,A){if(A.type===Fn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ji||A.magFilter===Ah||A.magFilter===Ml||A.magFilter===Ns||A.minFilter===Ji||A.minFilter===Ah||A.minFilter===Ml||A.minFilter===Ns)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,lt[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,lt[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,lt[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Wt[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Wt[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Et[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==Ml&&A.minFilter!==Ns||A.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function It(I,A){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",D),w(A));let ht=A.source,ot=u.get(ht);ot===void 0&&(ot={},u.set(ht,ot));let gt=H(A);if(gt!==I.__cacheKey){ot[gt]===void 0&&(ot[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[gt].usedTimes++;let St=ot[I.__cacheKey];St!==void 0&&(ot[I.__cacheKey].usedTimes--,St.usedTimes===0&&F(A)),I.__cacheKey=gt,I.__webglTexture=ot[gt].texture}return X}function zt(I,A,X){return Math.floor(Math.floor(I/X)/A)}function le(I,A,X,ht){let gt=I.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,X,ht,A.data);else{gt.sort((U,et)=>U.start-et.start);let St=0;for(let U=1;U<gt.length;U++){let et=gt[St],j=gt[U],xt=et.start+et.count,dt=zt(j.start,A.width,4),vt=zt(et.start,A.width,4);j.start<=xt+1&&dt===vt&&zt(j.start+j.count-1,A.width,4)===dt?et.count=Math.max(et.count,j.start+j.count-et.start):(++St,gt[St]=j)}gt.length=St+1;let q=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let U=0,et=gt.length;U<et;U++){let j=gt[U],xt=Math.floor(j.start/4),dt=Math.ceil(j.count/4),vt=xt%A.width,ut=Math.floor(xt/A.width),yt=dt,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ut),e.texSubImage2D(s.TEXTURE_2D,0,vt,ut,yt,at,X,ht,A.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function ne(I,A,X){let ht=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ht=s.TEXTURE_3D);let ot=It(I,A),gt=A.source;e.bindTexture(ht,I.__webglTexture,s.TEXTURE0+X);let St=i.get(gt);if(gt.version!==St.__version||ot===!0){if(e.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let at=se.getPrimaries(se.workingColorSpace),st=A.colorSpace===Os?null:se.getPrimaries(A.colorSpace),Mt=A.colorSpace===Os||at===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let nt=v(A.image,!1,n.maxTextureSize);nt=Bt(A,nt);let mt=r.convert(A.format,A.colorSpace),U=r.convert(A.type),et=T(A.internalFormat,mt,U,A.normalized,A.colorSpace,A.isVideoTexture);qt(ht,A);let j,xt=A.mipmaps,dt=A.isVideoTexture!==!0,vt=St.__version===void 0||ot===!0,ut=gt.dataReady,yt=M(A,nt);if(A.isDepthTexture)et=x(A.format===Us,A.type),vt&&(dt?e.texStorage2D(s.TEXTURE_2D,1,et,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,et,nt.width,nt.height,0,mt,U,null));else if(A.isDataTexture)if(xt.length>0){dt&&vt&&e.texStorage2D(s.TEXTURE_2D,yt,et,xt[0].width,xt[0].height);for(let at=0,st=xt.length;at<st;at++)j=xt[at],dt?ut&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,j.width,j.height,mt,U,j.data):e.texImage2D(s.TEXTURE_2D,at,et,j.width,j.height,0,mt,U,j.data);A.generateMipmaps=!1}else dt?(vt&&e.texStorage2D(s.TEXTURE_2D,yt,et,nt.width,nt.height),ut&&le(A,nt,mt,U)):e.texImage2D(s.TEXTURE_2D,0,et,nt.width,nt.height,0,mt,U,nt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){dt&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,et,xt[0].width,xt[0].height,nt.depth);for(let at=0,st=xt.length;at<st;at++)if(j=xt[at],A.format!==bn)if(mt!==null)if(dt){if(ut)if(A.layerUpdates.size>0){let Mt=Cd(j.width,j.height,A.format,A.type);for(let rt of A.layerUpdates){let Rt=j.data.subarray(rt*Mt/j.data.BYTES_PER_ELEMENT,(rt+1)*Mt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,rt,j.width,j.height,1,mt,Rt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,j.width,j.height,nt.depth,mt,j.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,et,j.width,j.height,nt.depth,0,j.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?ut&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,j.width,j.height,nt.depth,mt,U,j.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,et,j.width,j.height,nt.depth,0,mt,U,j.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{dt&&vt&&e.texStorage2D(s.TEXTURE_2D,yt,et,xt[0].width,xt[0].height);for(let at=0,st=xt.length;at<st;at++)j=xt[at],A.format!==bn?mt!==null?dt?ut&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,j.width,j.height,mt,j.data):e.compressedTexImage2D(s.TEXTURE_2D,at,et,j.width,j.height,0,j.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?ut&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,j.width,j.height,mt,U,j.data):e.texImage2D(s.TEXTURE_2D,at,et,j.width,j.height,0,mt,U,j.data)}else if(A.isDataArrayTexture)if(dt){if(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,et,nt.width,nt.height,nt.depth),ut)if(A.layerUpdates.size>0){let at=Cd(nt.width,nt.height,A.format,A.type);for(let st of A.layerUpdates){let Mt=nt.data.subarray(st*at/nt.data.BYTES_PER_ELEMENT,(st+1)*at/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,nt.width,nt.height,1,mt,U,Mt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,U,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,et,nt.width,nt.height,nt.depth,0,mt,U,nt.data);else if(A.isData3DTexture)dt?(vt&&e.texStorage3D(s.TEXTURE_3D,yt,et,nt.width,nt.height,nt.depth),ut&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,U,nt.data)):e.texImage3D(s.TEXTURE_3D,0,et,nt.width,nt.height,nt.depth,0,mt,U,nt.data);else if(A.isFramebufferTexture){if(vt)if(dt)e.texStorage2D(s.TEXTURE_2D,yt,et,nt.width,nt.height);else{let at=nt.width,st=nt.height;for(let Mt=0;Mt<yt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,et,at,st,0,mt,U,null),at>>=1,st>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),nt.parentNode!==at){at.appendChild(nt),d.add(A),at.onpaint=st=>{let Mt=st.changedElements;for(let rt of d)Mt.includes(rt.image)&&(rt.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let Mt=s.RGBA,rt=s.RGBA,Rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Mt,rt,Rt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(xt.length>0){if(dt&&vt){let at=Gt(xt[0]);e.texStorage2D(s.TEXTURE_2D,yt,et,at.width,at.height)}for(let at=0,st=xt.length;at<st;at++)j=xt[at],dt?ut&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,mt,U,j):e.texImage2D(s.TEXTURE_2D,at,et,mt,U,j);A.generateMipmaps=!1}else if(dt){if(vt){let at=Gt(nt);e.texStorage2D(s.TEXTURE_2D,yt,et,at.width,at.height)}ut&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,U,nt)}else e.texImage2D(s.TEXTURE_2D,0,et,mt,U,nt);b(A)&&A.mipmapsAutoUpdate===!0&&y(ht),St.__version=gt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function $(I,A,X){if(A.image.length!==6)return;let ht=It(I,A),ot=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);let gt=i.get(ot);if(ot.version!==gt.__version||ht===!0){e.activeTexture(s.TEXTURE0+X);let St=se.getPrimaries(se.workingColorSpace),q=A.colorSpace===Os?null:se.getPrimaries(A.colorSpace),nt=A.colorSpace===Os||St===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let mt=A.isCompressedTexture||A.image[0].isCompressedTexture,U=A.image[0]&&A.image[0].isDataTexture,et=[];for(let rt=0;rt<6;rt++)!mt&&!U?et[rt]=v(A.image[rt],!0,n.maxCubemapSize):et[rt]=U?A.image[rt].image:A.image[rt],et[rt]=Bt(A,et[rt]);let j=et[0],xt=r.convert(A.format,A.colorSpace),dt=r.convert(A.type),vt=T(A.internalFormat,xt,dt,A.normalized,A.colorSpace),ut=A.isVideoTexture!==!0,yt=gt.__version===void 0||ht===!0,at=ot.dataReady,st=M(A,j);qt(s.TEXTURE_CUBE_MAP,A);let Mt;if(A.isDepthTexture){if(vt=x(A.format===Us,A.type),yt)if(ut)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,vt,j.width,j.height);else for(let rt=0;rt<6;rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,vt,j.width,j.height,0,xt,dt,null)}else if(mt){ut&&yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,vt,j.width,j.height);for(let rt=0;rt<6;rt++){Mt=et[rt].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){let ae=Mt[Rt];A.format!==bn?xt!==null?ut?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,ae.width,ae.height,xt,ae.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,vt,ae.width,ae.height,0,ae.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,ae.width,ae.height,xt,dt,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,vt,ae.width,ae.height,0,xt,dt,ae.data)}}}else{if(Mt=A.mipmaps,ut&&yt){Mt.length>0&&st++;let rt=Gt(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,vt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(U){ut?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,et[rt].width,et[rt].height,xt,dt,et[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,vt,et[rt].width,et[rt].height,0,xt,dt,et[rt].data);for(let Rt=0;Rt<Mt.length;Rt++){let Zt=Mt[Rt].image[rt].image;ut?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,Zt.width,Zt.height,xt,dt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,vt,Zt.width,Zt.height,0,xt,dt,Zt.data)}}else{ut?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt,dt,et[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,vt,xt,dt,et[rt]);for(let Rt=0;Rt<Mt.length;Rt++){let ae=Mt[Rt];ut?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,xt,dt,ae.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,vt,xt,dt,ae.image[rt])}}}b(A)&&A.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),gt.__version=ot.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function $t(I,A,X,ht,ot,gt){let St=r.convert(X.format,X.colorSpace),q=r.convert(X.type),nt=T(X.internalFormat,St,q,X.normalized,X.colorSpace),mt=i.get(A),U=i.get(X);if(U.__renderTarget=A,!mt.__hasExternalTextures){let et=Math.max(1,A.width>>gt),j=Math.max(1,A.height>>gt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,gt,nt,et,j,A.depth,0,St,q,null):e.texImage2D(ot,gt,nt,et,j,0,St,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),_t(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,ot,U.__webglTexture,0,Ht(A)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,ot,U.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(I,A,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){let ht=A.depthTexture,ot=ht&&ht.isDepthTexture?ht.type:null,gt=x(A.stencilBuffer,ot),St=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(A),gt,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(A),gt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,I)}else{let ht=A.textures;for(let ot=0;ot<ht.length;ot++){let gt=ht[ot],St=r.convert(gt.format,gt.colorSpace),q=r.convert(gt.type),nt=T(gt.internalFormat,St,q,gt.normalized,gt.colorSpace);_t(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(A),nt,A.width,A.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(A),nt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,nt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(I,A,X){let ht=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(A.depthTexture);ot.__renderTarget=A;let gt=ht?A.depthTexture.image[0]:A.depthTexture.image;(!ot.__webglTexture||gt.width!==A.width||gt.height!==A.height)&&(gt.width=A.width,gt.height=A.height,A.depthTexture.needsUpdate=!0),ht?Q(A.depthTexture,0):tt(A.depthTexture,0);let St=ot.__webglTexture,q=Ht(A),nt=ht?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,mt=A.depthTexture.format===Us?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Cs)_t(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,nt,St,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,mt,nt,St,0);else if(A.depthTexture.format===Us)_t(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,nt,St,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,mt,nt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(I){let A=i.get(I),X=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){let ht=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ht){let ot=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ht.removeEventListener("dispose",ot)};ht.addEventListener("dispose",ot),A.__depthDisposeCallback=ot}A.__boundDepthTexture=ht}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(X)for(let ht=0;ht<6;ht++)Se(A.__webglFramebuffer[ht],I,ht);else I.texture.mipmaps.length>0?Se(A.__webglFramebuffer[0],I,0):Se(A.__webglFramebuffer,I,0);else if(X){A.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ht]),A.__webglDepthbuffer[ht]===void 0)A.__webglDepthbuffer[ht]=s.createRenderbuffer(),Xe(A.__webglDepthbuffer[ht],I,!1);else{let ot=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,gt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Xe(A.__webglDepthbuffer,I,!1);else{let ot=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,gt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(I,A,X){let ht=i.get(I);A!==void 0&&$t(ht.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&oe(I)}function we(I){let A=I.texture,X=i.get(I),ht=i.get(A);I.addEventListener("dispose",L),w(I);let ot=I.textures,gt=I.isWebGLCubeRenderTarget===!0,St=ot.length>1;if(St||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=A.version,o.memory.textures++),gt){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(A.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let nt=0;nt<A.mipmaps.length;nt++)X.__webglFramebuffer[q][nt]=s.createFramebuffer()}else X.__webglFramebuffer[q]=s.createFramebuffer()}else{if(A.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<A.mipmaps.length;q++)X.__webglFramebuffer[q]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(St)for(let q=0,nt=ot.length;q<nt;q++){let mt=i.get(ot[q]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&_t(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<ot.length;q++){let nt=ot[q];X.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[q]);let mt=r.convert(nt.format,nt.colorSpace),U=r.convert(nt.type),et=T(nt.internalFormat,mt,U,nt.normalized,nt.colorSpace,I.isXRRenderTarget===!0),j=Ht(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,et,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,X.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),qt(s.TEXTURE_CUBE_MAP,A);for(let q=0;q<6;q++)if(A.mipmaps.length>0)for(let nt=0;nt<A.mipmaps.length;nt++)$t(X.__webglFramebuffer[q][nt],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt);else $t(X.__webglFramebuffer[q],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);b(A)?y(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(St){for(let q=0,nt=ot.length;q<nt;q++){let mt=ot[q],U=i.get(mt),et=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,U.__webglTexture),qt(et,mt),$t(X.__webglFramebuffer,I,mt,s.COLOR_ATTACHMENT0+q,et,0),b(mt)&&y(et)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,ht.__webglTexture),qt(q,A),A.mipmaps.length>0)for(let nt=0;nt<A.mipmaps.length;nt++)$t(X.__webglFramebuffer[nt],I,A,s.COLOR_ATTACHMENT0,q,nt);else $t(X.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,q,0);b(A)?y(q):A.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&oe(I)}function G(I){let A=I.textures;for(let X=0,ht=A.length;X<ht;X++){let ot=A[X];if(b(ot)&&ot.mipmapsAutoUpdate===!0){let gt=S(I),St=i.get(ot).__webglTexture;e.bindTexture(gt,St),y(gt),e.unbindTexture()}}}let Kt=[];function ue(I){if(I.samples>0){if(_t(I)===!1){let A=I.textures,X=I.width,ht=I.height,ot=s.COLOR_BUFFER_BIT,gt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(I),q=A.length>1;if(q)for(let mt=0;mt<A.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<A.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let U=i.get(A[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,X,ht,0,0,X,ht,ot,s.NEAREST),l===!0&&(Kt.length=0,Kt.push(s.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Kt.push(gt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let mt=0;mt<A.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);let U=i.get(A[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ht(I){return Math.min(n.maxSamples,I.samples)}function _t(I){let A=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ge(I){let A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Bt(I,A){let X=I.colorSpace,ht=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Xa&&X!==Os&&(se.getTransfer(X)===_e?(ht!==bn||ot!==ln)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",X)),A}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=C,this.getTextureUnits=J,this.setTextureUnits=ft,this.setTexture2D=tt,this.setTexture2DArray=ct,this.setTexture3D=pt,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=we,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=_t,this.dispose=N}function xT(s,t){function e(i,n=Os){let r,o=se.getTransfer(n);if(i===ln)return s.UNSIGNED_BYTE;if(i===Ch)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ph)return s.UNSIGNED_SHORT_5_5_5_1;if(i===fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===dd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===hd)return s.BYTE;if(i===ud)return s.SHORT;if(i===sa)return s.UNSIGNED_SHORT;if(i===Rh)return s.INT;if(i===ts)return s.UNSIGNED_INT;if(i===Fn)return s.FLOAT;if(i===wi)return s.HALF_FLOAT;if(i===pd)return s.ALPHA;if(i===md)return s.RGB;if(i===bn)return s.RGBA;if(i===Cs)return s.DEPTH_COMPONENT;if(i===Us)return s.DEPTH_STENCIL;if(i===Ih)return s.RED;if(i===Lh)return s.RED_INTEGER;if(i===hr)return s.RG;if(i===Dh)return s.RG_INTEGER;if(i===Nh)return s.RGBA_INTEGER;if(i===bl||i===Tl||i===El||i===wl)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uh||i===Oh||i===Fh||i===Bh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zh||i===kh||i===Hh||i===Gh||i===Vh||i===Al||i===Wh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zh||i===kh)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gh)return r.COMPRESSED_R11_EAC;if(i===Vh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Al)return r.COMPRESSED_RG11_EAC;if(i===Wh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xh||i===qh||i===Yh||i===Zh||i===Jh||i===$h||i===Kh||i===Qh||i===jh||i===tu||i===eu||i===iu||i===nu||i===su)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$h)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===iu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nu)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ru||i===ou||i===au)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ru)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lu||i===cu||i===Rl||i===hu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var vT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yT=`
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

}`,Vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new nl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Qe({vertexShader:vT,fragmentShader:yT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wd=class extends os{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new Vd,g={},v=e.getContextAttributes(),b=null,y=null,S=[],T=[],x=new At,M=null,w=null,E=new Ui;E.viewport=new Be;let D=new Ui;D.viewport=new Be;let L=[E,D],k=new bh,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let tt=S[H];return tt===void 0&&(tt=new Wo,S[H]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(H){let tt=S[H];return tt===void 0&&(tt=new Wo,S[H]=tt),tt.getGripSpace()},this.getHand=function(H){let tt=S[H];return tt===void 0&&(tt=new Wo,S[H]=tt),tt.getHandSpace()};function z(H){let tt=T.indexOf(H.inputSource);if(tt===-1)return;let ct=S[tt];ct!==void 0&&(ct.update(H.inputSource,H.frame,c||o),ct.dispatchEvent({type:H.type,data:H.inputSource}))}function F(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",Y);for(let H=0;H<S.length;H++){let tt=T[H];tt!==null&&(T[H]=null,S[H].disconnect(tt))}P=null,N=null,m.reset();for(let H in g)delete g[H];if(t.setRenderTarget(b),u=null,f=null,d=null,n=null,y=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),w!==null){let H=w.camera;H.fov=w.fov,H.zoom=w.zoom,H.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",F),n.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,pt=null,Q=null;v.depth&&(Q=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=v.stencil?Us:Cs,pt=v.stencil?qr:ts);let lt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(lt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new di(f.textureWidth,f.textureHeight,{format:bn,type:ln,depthTexture:new Ls(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,ct),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new di(u.framebufferWidth,u.framebufferHeight,{format:bn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),it.setContext(n),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(H){for(let tt=0;tt<H.removed.length;tt++){let ct=H.removed[tt],pt=T.indexOf(ct);pt>=0&&(T[pt]=null,S[pt].disconnect(ct))}for(let tt=0;tt<H.added.length;tt++){let ct=H.added[tt],pt=T.indexOf(ct);if(pt===-1){for(let lt=0;lt<S.length;lt++)if(lt>=T.length){T.push(ct),pt=lt;break}else if(T[lt]===null){T[lt]=ct,pt=lt;break}if(pt===-1)break}let Q=S[pt];Q&&Q.connect(ct)}}function V(H,tt){tt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(tt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;let tt=H.near,ct=H.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),k.near=D.near=E.near=tt,k.far=D.far=E.far=ct,(P!==k.near||N!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,N=k.far),k.layers.mask=H.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let pt=H.parent,Q=k.cameras;V(k,pt);for(let lt=0;lt<Q.length;lt++)V(Q[lt],pt);k.projectionMatrix.copy(E.projectionMatrix),k.projectionMatrixInverse.copy(E.projectionMatrixInverse),w===null&&H.isPerspectiveCamera&&(w={camera:H,fov:H.fov,zoom:H.zoom}),C(H,k,pt)};function C(H,tt,ct){ct===null?H.matrix.copy(tt.matrixWorld):(H.matrix.copy(ct.matrixWorld),H.matrix.invert(),H.matrix.multiply(tt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(tt.projectionMatrix),H.projectionMatrixInverse.copy(tt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ho*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(H){return g[H]};let J=null;function ft(H,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let ct=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let pt=!1;ct.length!==k.cameras.length&&(k.cameras.length=0,pt=!0);for(let Et=0;Et<ct.length;Et++){let qt=ct[Et],It=null;if(u!==null)It=u.getViewport(qt);else{let le=d.getViewSubImage(f,qt);It=le.viewport,Et===0&&(t.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(y))}let zt=L[Et];zt===void 0&&(zt=new Ui,zt.layers.enable(Et),zt.viewport=new Be,L[Et]=zt),zt.matrix.fromArray(qt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(qt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(It.x,It.y,It.width,It.height),Et===0&&(k.matrix.copy(zt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),pt===!0&&k.cameras.push(zt)}let Q=n.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Et=d.getDepthInformation(ct[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,n.renderState)}if(Q&&Q.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Et=0;Et<ct.length;Et++){let qt=ct[Et].camera;if(qt){let It=g[qt];It||(It=new nl,g[qt]=It);let zt=d.getCameraImage(qt);It.sourceTexture=zt}}}}for(let ct=0;ct<S.length;ct++){let pt=T[ct],Q=S[ct];pt!==null&&Q!==void 0&&Q.update(pt,tt,c||o)}J&&J(H,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),p=null}let it=new o0;it.setAnimationLoop(ft),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}},ST=new de,g0=new Yt;g0.set(-1,0,0,0,1,0,0,0,1);function MT(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,wd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(g0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bT(s,t,e,i){let n={},r={};function o(v,b){let y=b.program;i.uniformBlockBinding(v,y,n[v.id])}function a(v,b){let y=n[v.id];y===void 0&&(p(v),y=l(v),n[v.id]=y,v.addEventListener("dispose",m));let S=b.program;i.updateUBOMapping(v,S);let T=t.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let b=s.createBuffer(),y=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,y,S),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function c(v){let b=n[v.id],y=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let T=0,x=y.length;T<x;T++){let M=y[T];if(Array.isArray(M))for(let w=0,E=M.length;w<E;w++)h(M[w],T,w,S);else h(M,T,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,b,y,S){if(f(v,b,y,S)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let w=0;w<x.length;w++){let E=x[w],D=_(E,!0);d(E,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,v.__data)}}function d(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function f(v,b,y,S){let T=v.value,x=b+"_"+y;if(Array.isArray(T)){S[x]===void 0&&(S[x]=[]);let M=S[x],w=!1;for(let E=0;E<T.length;E++)u(T[E],M,E)===!0&&(w=!0);return w}return u(T,S,x)}function u(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let S=b[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function p(v){let b=v.uniforms,y=0,S=16;for(let x=0,M=b.length;x<M;x++){let w=Array.isArray(b[x])?b[x]:[b[x]];for(let E=0,D=w.length;E<D;E++){let L=w[E],k=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(b[x])||Array.isArray(L.value),N=y;for(let F=0,Y=k.length;F<Y;F++){let V=k[F],C=_(V,P),J=y%S,ft=J%C.boundary,it=J+ft;y+=ft,it!==0&&S-it<C.storage&&(y+=S-it),F===0&&(N=y),y+=C.storage}let z=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new z((y-N)/Float32Array.BYTES_PER_ELEMENT),L.__offset=N}}let T=y%S;return T>0&&(y+=S-T),v.__size=y,v.__cache={},this}function _(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let b=v.target;b.removeEventListener("dispose",m),s.deleteBuffer(n[b.id]),delete n[b.id],delete r[b.id]}function g(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:g}}var TT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),us=null;function ET(){return us===null&&(us=new Fr(TT,16,16,hr,wi),us.name="DFG_LUT",us.minFilter=Ji,us.magFilter=Ji,us.wrapS=rs,us.wrapT=rs,us.generateMipmaps=!1,us.needsUpdate=!0),us}var mu=class{constructor(t={}){let{canvas:e=Ig(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ln}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=u,m=new Set([Nh,Dh,Lh]),g=new Set([ln,ts,sa,qr,Ch,Ph]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,T=null,x=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,L=null,k=null,P=null,N=null;this._outputColorSpace=fi;let z=0,F=0,Y=null,V=-1,C=null,J=new Be,ft=new Be,it=null,H=new Ft(0),tt=0,ct=e.width,pt=e.height,Q=1,lt=null,Wt=null,Et=new Be(0,0,ct,pt),qt=new Be(0,0,ct,pt),It=!1,zt=new nr,le=new hh,ne=!1,$=!1,$t=new de,Xe=new O,Se=new Be,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function we(){return Y===null?Q:1}let G=i;function Kt(R,B){return e.getContext(R,B)}let ue,Ht,_t,ge,Bt,Gt,I,A,X,ht,ot,gt,St,q,nt,mt,U,et,j,xt,dt,vt,ut;try{let R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),G===null){let B="webgl2";if(G=Kt(B,R),G===null)throw Kt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}yt()}catch(R){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Xt("WebGLRenderer: "+R.message),R}function yt(){ue=new OM(G),ue.init(),dt=new xT(G,ue),Ht=new EM(G,ue,t,dt),_t=new gT(G,ue),Ht.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),k=G.createFramebuffer(),P=G.createFramebuffer(),N=G.createFramebuffer(),ge=new zM(G),Bt=new iT,Gt=new _T(G,ue,_t,Bt,Ht,dt,ge),I=new UM(E),A=new Hv(G),vt=new bM(G,A),X=new FM(G,A,ge,vt),ht=new HM(G,X,A,vt,ge),et=new kM(G,Ht,Gt),nt=new wM(Bt),ot=new eT(E,I,ue,Ht,vt,nt),gt=new MT(E,Bt),St=new sT,q=new hT(ue),U=new MM(E,I,_t,ht,p,l),mt=new mT(E,ht,Ht),ut=new bT(G,ge,Ht,_t),j=new TM(G,ue,ge),xt=new BM(G,ue,ge),ge.programs=ot.programs,E.capabilities=Ht,E.extensions=ue,E.properties=Bt,E.renderLists=St,E.shadowMap=mt,E.state=_t,E.info=ge}_!==ln&&(w=new VM(_,e.width,e.height,a,n,r));let at=new Wd(E,G);this.xr=at,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(ct,pt,!1))},this.getSize=function(R){return R.set(ct,pt)},this.setSize=function(R,B,K=!0){if(at.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=R,pt=B,e.width=Math.floor(R*Q),e.height=Math.floor(B*Q),K===!0&&(e.style.width=R+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(ct*Q,pt*Q).floor()},this.setDrawingBufferSize=function(R,B,K){ct=R,pt=B,Q=K,e.width=Math.floor(R*K),e.height=Math.floor(B*K),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(_===ln){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(J)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,B,K,W){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,B,K,W),_t.viewport(J.copy(Et).multiplyScalar(we()).round())},this.getScissor=function(R){return R.copy(qt)},this.setScissor=function(R,B,K,W){R.isVector4?qt.set(R.x,R.y,R.z,R.w):qt.set(R,B,K,W),_t.scissor(ft.copy(qt).multiplyScalar(we()).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(R){_t.setScissorTest(It=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){Wt=R},this.getClearColor=function(R){return R.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,K=!0){let W=0;if(R){let Z=!1;if(Y!==null){let Tt=Y.texture.format;Z=m.has(Tt)}if(Z){let Tt=Y.texture.type,Dt=g.has(Tt),bt=U.getClearColor(),Ct=U.getClearAlpha(),kt=bt.r,Jt=bt.g,ce=bt.b;Dt?(v[0]=kt,v[1]=Jt,v[2]=ce,v[3]=Ct,G.clearBufferuiv(G.COLOR,0,v)):(b[0]=kt,b[1]=Jt,b[2]=ce,b[3]=Ct,G.clearBufferiv(G.COLOR,0,b))}else W|=G.COLOR_BUFFER_BIT}B&&(W|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),U.dispose(),St.dispose(),q.dispose(),Gt.dispose(),Bt.dispose(),I.dispose(),ht.dispose(),X.dispose(),vt.dispose(),ut.dispose(),ot.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ae),at.removeEventListener("sessionend",ve),ci.stop()};function st(R){R.preventDefault(),Ya("WebGLRenderer: Context Lost."),D=!0}function Mt(){Ya("WebGLRenderer: Context Restored."),D=!1;let R=ge.autoReset,B=mt.enabled,K=mt.autoUpdate,W=mt.needsUpdate,Z=mt.type;yt(),ge.autoReset=R,mt.enabled=B,mt.autoUpdate=K,mt.needsUpdate=W,mt.type=Z}function rt(R){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Rt(R){let B=R.target;B.removeEventListener("dispose",Rt),ae(B)}function ae(R){Zt(R),Bt.remove(R)}function Zt(R){let B=Bt.get(R).programs;B!==void 0&&(B.forEach(function(K){ot.releaseProgram(K)}),R.isShaderMaterial&&ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,K,W,Z,Tt){B===null&&(B=oe);let Dt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,bt=Ln(R,B,K,W,Z);_t.setMaterial(W,Dt);let Ct=K.index,kt=1;if(W.wireframe===!0){if(Ct=X.getWireframeAttribute(K),Ct===void 0)return;kt=2}let Jt=K.drawRange,ce=K.attributes.position,Ut=Jt.start*kt,he=(Jt.start+Jt.count)*kt;Tt!==null&&(Ut=Math.max(Ut,Tt.start*kt),he=Math.min(he,(Tt.start+Tt.count)*kt)),Ct!==null?(Ut=Math.max(Ut,0),he=Math.min(he,Ct.count)):ce!=null&&(Ut=Math.max(Ut,0),he=Math.min(he,ce.count));let ni=he-Ut;if(ni<0||ni===1/0)return;vt.setup(Z,W,bt,K,Ct);let De,Ce=j;if(Ct!==null&&(De=A.get(Ct),Ce=xt,Ce.setIndex(De)),Z.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*we()),Ce.setMode(G.LINES)):Ce.setMode(G.TRIANGLES);else if(Z.isLine){let Ii=W.linewidth;Ii===void 0&&(Ii=1),_t.setLineWidth(Ii*we()),Z.isLineSegments?Ce.setMode(G.LINES):Z.isLineLoop?Ce.setMode(G.LINE_LOOP):Ce.setMode(G.LINE_STRIP)}else Z.isPoints?Ce.setMode(G.POINTS):Z.isSprite&&Ce.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ii=Z._multiDrawStarts,Ot=Z._multiDrawCounts,Yi=Z._multiDrawCount,xe=Ct?A.get(Ct).bytesPerElement:1,Pr=Bt.get(W).currentProgram.getUniforms();for(let Li=0;Li<Yi;Li++)Pr.setValue(G,"_gl_DrawID",Li),Ce.render(Ii[Li]/xe,Ot[Li])}else if(Z.isInstancedMesh)Ce.renderInstances(Ut,ni,Z.count);else if(K.isInstancedBufferGeometry){let Ii=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ot=Math.min(K.instanceCount,Ii);Ce.renderInstances(Ut,ni,Ot)}else Ce.render(Ut,ni)};function Oe(R,B,K,W){L!==null&&R.isNodeMaterial&&L.setObject(W,R),ne===!0&&nt.setState(R,K,!1),R.transparent===!0&&R.side===Mn&&R.forceSinglePass===!1?(R.side=pi,R.needsUpdate=!0,xn(R,B,W),R.side=cr,R.needsUpdate=!0,xn(R,B,W),R.side=Mn):xn(R,B,W)}this.compile=function(R,B,K=null){K===null&&(K=R),L!==null&&L.renderStart(R,B,K),T=q.get(K),T.init(B),M.push(T),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),R!==K&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),$=this.localClippingEnabled,ne=nt.init(this.clippingPlanes,$),ne===!0&&nt.setGlobalState(this.clippingPlanes,B),L!==null&&mt.render(T.state.shadowsArray,K,B);let W=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){let bt=Tt[Dt];Oe(bt,K,B,Z),W.add(bt)}else Oe(Tt,K,B,Z),W.add(Tt)}),T=M.pop(),L!==null&&L.renderEnd(),W},this.compileAsync=function(R,B,K=null){let W=this.compile(R,B,K);return new Promise(Z=>{function Tt(){if(W.forEach(function(Dt){let Ct=Bt.get(Dt).currentProgram;(Ct===void 0||Ct.isReady())&&W.delete(Dt)}),W.size===0){Z(R);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ei=null;function Fe(R){ei&&ei(R)}function Ae(){ci.stop()}function ve(){ci.start()}let ci=new o0;ci.setAnimationLoop(Fe),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(R){ei=R,at.setAnimationLoop(R),R===null?ci.stop():ci.start()},at.addEventListener("sessionstart",Ae),at.addEventListener("sessionend",ve),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(R,B);let K=at.enabled===!0&&at.isPresenting===!0,W=w!==null&&(Y===null||K)&&w.begin(E,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(B),B=at.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,B,Y),T=q.get(R,M.length),T.init(B),T.state.textureUnits=Gt.getTextureUnits(),M.push(T),$t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?le.setFromArrayCamera(B):zt.setFromProjectionMatrix($t,Nn,B.reversedDepth),$=this.localClippingEnabled,ne=nt.init(this.clippingPlanes,$),S=St.get(R,x.length),S.init(),x.push(S),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let Dt=E.xr.getDepthSensingMesh();Dt!==null&&Re(Dt,B,-1/0,E.sortObjects)}Re(R,B,0,E.sortObjects),S.finish(),L!==null&&L.updateLights(T.state.lightsArray),E.sortObjects===!0&&S.sort(lt,Wt),Te=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Te&&U.addToRenderList(S,R),this.info.autoReset===!0&&this.info.reset(),ne===!0&&nt.beginShadows();let Z=T.state.shadowsArray;if(mt.render(Z,R,B),ne===!0&&nt.endShadows(),(W&&w.hasRenderPass())===!1){let Dt=S.opaque,bt=S.transmissive;if(T.setupLights(),B.isArrayCamera){let Ct=B.cameras;if(bt.length>0)for(let kt=0,Jt=Ct.length;kt<Jt;kt++){let ce=Ct[kt];_n(Dt,bt,R,ce)}Te&&U.render(R);for(let kt=0,Jt=Ct.length;kt<Jt;kt++){let ce=Ct[kt];Pi(S,R,ce,ce.viewport)}}else bt.length>0&&_n(Dt,bt,R,B),Te&&U.render(R),Pi(S,R,B)}Y!==null&&F===0&&(Gt.updateMultisampleRenderTarget(Y),Gt.updateRenderTargetMipmap(Y)),W&&w.end(E),R.isScene===!0&&R.onAfterRender(E,R,B),vt.resetDefaultState(),V=-1,C=null,M.pop(),M.length>0?(T=M[M.length-1],Gt.setTextureUnits(T.state.textureUnits),ne===!0&&nt.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,L!==null&&L.renderEnd()};function Re(R,B,K,W){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let Dt=B.isArrayCamera?le:zt;if(!R.frustumCulled||R.intersectsFrustum(Dt)){W&&Se.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);let bt=ht.update(R),Ct=R.material;Ct.visible&&S.push(R,bt,Ct,K,Se.z,null,B)}}else if(R.isMesh||R.isLine||R.isPoints){let Dt=B.isArrayCamera?le:zt;if(!R.frustumCulled||R.intersectsFrustum(Dt)){let bt=ht.update(R),Ct=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Se.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Se.copy(bt.boundingSphere.center)),Se.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Ct)){let kt=bt.groups;for(let Jt=0,ce=kt.length;Jt<ce;Jt++){let Ut=kt[Jt],he=Ct[Ut.materialIndex];he&&he.visible&&S.push(R,bt,he,K,Se.z,Ut,B)}}else Ct.visible&&S.push(R,bt,Ct,K,Se.z,null,B)}}}let Tt=R.children;for(let Dt=0,bt=Tt.length;Dt<bt;Dt++)Re(Tt[Dt],B,K,W)}function Pi(R,B,K,W){let{opaque:Z,transmissive:Tt,transparent:Dt}=R;T.setupLightsView(K),ne===!0&&nt.setGlobalState(E.clippingPlanes,K),W&&_t.viewport(J.copy(W)),Z.length>0&&qe(Z,B,K),Tt.length>0&&qe(Tt,B,K),Dt.length>0&&qe(Dt,B,K),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function _n(R,B,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Ut=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new di(1,1,{generateMipmaps:!0,type:Ut?wi:ln,minFilter:Ns,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Tt=T.state.transmissionRenderTarget[W.id],Dt=W.viewport||J;Tt.setSize(Dt.z*E.transmissionResolutionScale,Dt.w*E.transmissionResolutionScale);let bt=E.getRenderTarget(),Ct=E.getActiveCubeFace(),kt=E.getActiveMipmapLevel();E.setRenderTarget(Tt),E.getClearColor(H),tt=E.getClearAlpha(),tt<1&&E.setClearColor(16777215,.5),E.clear(),Te&&U.render(K);let Jt=E.toneMapping;E.toneMapping=hs;let ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),ne===!0&&nt.setGlobalState(E.clippingPlanes,W),qe(R,K,W),Gt.updateMultisampleRenderTarget(Tt),Gt.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let he=0,ni=B.length;he<ni;he++){let De=B[he],{object:Ce,geometry:Ii,material:Ot,group:Yi}=De;if(Ot.side===Mn&&Ce.layers.test(W.layers)){let xe=Ot.side;Ot.side=pi,Ot.needsUpdate=!0,ii(Ce,K,W,Ii,Ot,Yi),Ot.side=xe,Ot.needsUpdate=!0,Ut=!0}}Ut===!0&&(Gt.updateMultisampleRenderTarget(Tt),Gt.updateRenderTargetMipmap(Tt))}E.setRenderTarget(bt,Ct,kt),E.setClearColor(H,tt),ce!==void 0&&(W.viewport=ce),E.toneMapping=Jt}function qe(R,B,K){let W=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Tt=R.length;Z<Tt;Z++){let Dt=R[Z],{object:bt,geometry:Ct,group:kt}=Dt,Jt=Dt.material;Jt.allowOverride===!0&&W!==null&&(Jt=W),bt.layers.test(K.layers)&&ii(bt,B,K,Ct,Jt,kt)}}function ii(R,B,K,W,Z,Tt){L!==null&&Z.isNodeMaterial&&L.setObject(R,Z),R.onBeforeRender(E,B,K,W,Z,Tt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(E,B,K,W,R,Tt),Z.transparent===!0&&Z.side===Mn&&Z.forceSinglePass===!1?(Z.side=pi,Z.needsUpdate=!0,E.renderBufferDirect(K,B,W,Z,R,Tt),Z.side=cr,Z.needsUpdate=!0,E.renderBufferDirect(K,B,W,Z,R,Tt),Z.side=Mn):E.renderBufferDirect(K,B,W,Z,R,Tt),R.onAfterRender(E,B,K,W,Z,Tt)}function hi(R){let B=0;for(let K of R)K.texture!==null&&B++;return B}function xn(R,B,K){B.isScene!==!0&&(B=oe);let W=Bt.get(R),Z=T.state.lights,Tt=T.state.shadowsArray,Dt=Z.state.version,bt=ot.getParameters(R,Z.state,Tt,B,K,T.state.lightProbeGridArray),Ct=ot.getProgramCacheKey(bt),kt=W.programs;W.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let Jt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;W.envMap=I.get(R.envMap||W.environment,Jt),W.envMapRotation=W.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Rt),kt=new Map,W.programs=kt,W.programVariants=new Map);let ce=kt.get(Ct);if(ce!==void 0){if(W.currentProgram===ce&&W.lightsStateVersion===Dt)return Ye(R,bt),ce}else bt.uniforms=ot.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,K,bt),R.onBeforeCompile(bt,E),ce=ot.acquireProgram(bt,Ct),kt.set(Ct,ce),W.uniforms=bt.uniforms;let Ut=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ut.clippingPlanes=nt.uniform),Ye(R,bt),W.needsLights=yc(R),W.lightsStateVersion=Dt,W.needsLights&&(Ut.ambientLightColor.value=Z.state.ambient,Ut.lightProbe.value=Z.state.probe,Ut.sunLights.value=Z.state.sun,Ut.sunLightShadows.value=Z.state.sunShadow,Ut.directionalLights.value=Z.state.directional,Ut.directionalLightShadows.value=Z.state.directionalShadow,Ut.spotLights.value=Z.state.spot,Ut.spotLightShadows.value=Z.state.spotShadow,Ut.rectAreaLights.value=Z.state.rectArea,Ut.ltc_1.value=Z.state.rectAreaLTC1,Ut.ltc_2.value=Z.state.rectAreaLTC2,Ut.pointLights.value=Z.state.point,Ut.pointLightShadows.value=Z.state.pointShadow,Ut.hemisphereLights.value=Z.state.hemi,Ut.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ut.sunShadowCascade.value=Z.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Z.state.spotLightMatrix,Ut.spotLightMap.value=Z.state.spotLightMap,Ut.pointShadowMatrix.value=Z.state.pointShadowMatrix),W.numLightProbeGrids=hi(T.state.lightProbeGridArray),W.currentProgram=ce,W.uniformsList=null,ce}function mo(R,B,K,W,Z){let Tt=Bt.get(R),Dt=Tt.currentProgram.id+","+W+","+Z,bt=Tt.programVariants.get(Dt);return bt===void 0?(bt=xn(R,B,K),Tt.programVariants.set(Dt,bt)):(Tt.currentProgram=bt,Tt.uniformsList=null,Tt.outputColorSpace=W,Tt.toneMapping=Z),bt}function ui(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=ra.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Ye(R,B){let K=Bt.get(R);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ln(R,B,K,W,Z){B.isScene!==!0&&(B=oe),Gt.resetTextureUnits();let Tt=B.fog,Dt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,bt=Y===null?E.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:se.workingColorSpace,Ct=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,kt=I.get(W.envMap||Dt,Ct),Jt=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ce=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!K.morphAttributes.position,he=!!K.morphAttributes.normal,ni=!!K.morphAttributes.color,De=hs;W.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(De=E.toneMapping);let Ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ii=Ce!==void 0?Ce.length:0,Ot=Bt.get(W),Yi=T.state.lights;if(ne===!0&&($===!0||R!==C)){let He=R===C&&W.id===V;nt.setState(W,R,He)}let xe=!1,Pr=!1;W.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==Yi.state.version||Z.isBatchedMesh&&Ot.batching===!1||!Z.isBatchedMesh&&Ot.batching===!0||Z.isBatchedMesh&&Ot.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ot.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ot.instancing===!1||!Z.isInstancedMesh&&Ot.instancing===!0||Z.isSkinnedMesh&&Ot.skinning===!1||!Z.isSkinnedMesh&&Ot.skinning===!0||Z.isInstancedMesh&&Ot.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ot.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ot.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ot.instancingMorph===!1&&Z.morphTexture!==null||Ot.envMap!==kt||W.fog===!0&&Ot.fog!==Tt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==nt.numPlanes||Ot.numIntersection!==nt.numIntersection)||Ot.vertexAlphas!==Jt||Ot.vertexTangents!==ce||Ot.morphTargets!==Ut||Ot.morphNormals!==he||Ot.morphColors!==ni||Ot.morphTargetsCount!==Ii||Ot.numLightProbeGrids!==hi(T.state.lightProbeGridArray)?xe=!0:(Ot.outputColorSpace!==bt||Ot.toneMapping!==De)&&(Pr=!0):(xe=!0,Ot.__version=W.version);let Li=Ot.currentProgram;(xe===!0||Pr===!0)&&(Li=Pr===!0?mo(W,B,Z,bt,De):xn(W,B,Z),L&&W.isNodeMaterial&&L.onUpdateProgram(W,Li,Ot));let Sc=!1,Ks=!1,Ir=!1,pe=Li.getUniforms(),Ei=Ot.uniforms;if(_t.useProgram(Li.program)&&(Sc=!0,Ks=!0,Ir=!0),W.id!==V&&(V=W.id,Ks=!0),Sc||C!==R){_t.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),pe.setValue(G,"projectionMatrix",R.projectionMatrix),pe.setValue(G,"viewMatrix",R.matrixWorldInverse);let vi=pe.map.cameraPosition;vi!==void 0&&vi.setValue(G,Xe.setFromMatrixPosition(R.matrixWorld)),Ht.logarithmicDepthBuffer&&pe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ks=!0,Ir=!0)}if(Ot.needsLights&&(Yi.state.sunShadowMap.length>0&&pe.setValue(G,"sunShadowMap",Yi.state.sunShadowMap,Gt),Yi.state.directionalShadowMap.length>0&&pe.setValue(G,"directionalShadowMap",Yi.state.directionalShadowMap,Gt),Yi.state.spotShadowMap.length>0&&pe.setValue(G,"spotShadowMap",Yi.state.spotShadowMap,Gt),Yi.state.pointShadowMap.length>0&&pe.setValue(G,"pointShadowMap",Yi.state.pointShadowMap,Gt)),Z.isSkinnedMesh){pe.setOptional(G,Z,"bindMatrix"),pe.setOptional(G,Z,"bindMatrixInverse");let He=Z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),pe.setValue(G,"boneTexture",He.boneTexture,Gt))}Z.isBatchedMesh&&(pe.setOptional(G,Z,"batchingTexture"),pe.setValue(G,"batchingTexture",Z._matricesTexture,Gt),pe.setOptional(G,Z,"batchingIdTexture"),pe.setValue(G,"batchingIdTexture",Z._indirectTexture,Gt),pe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pe.setValue(G,"batchingColorTexture",Z._colorsTexture,Gt));let qn=K.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&et.update(Z,K,Li),(Ks||Ot.receiveShadow!==Z.receiveShadow)&&(Ot.receiveShadow=Z.receiveShadow,pe.setValue(G,"receiveShadow",Z.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Ei.envMapIntensity.value=B.environmentIntensity),Ei.dfgLUT!==void 0&&(Ei.dfgLUT.value=ET()),Ks){if(pe.setValue(G,"toneMappingExposure",E.toneMappingExposure),Ot.needsLights&&Ia(Ei,Ir),Tt&&W.fog===!0&&gt.refreshFogUniforms(Ei,Tt),gt.refreshMaterialUniforms(Ei,W,Q,pt,T.state.transmissionRenderTarget[R.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let He=y,vi=0;for(let Ss of T.state.lightProbeGridArray)Ss.texture!==null&&(He.textures[vi]=Ss.texture,He.min[vi]=Ss.boundingBox.min,He.max[vi]=Ss.boundingBox.max,He.resolution[vi]=Ss.resolution,vi++);for(let Ss in He)He[Ss].length=vi;Ei.probesSH.value=He.textures,Ei.probesMin.value=He.min,Ei.probesMax.value=He.max,Ei.probesResolution.value=He.resolution}ra.upload(G,ui(Ot),Ei,Gt)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ra.upload(G,ui(Ot),Ei,Gt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pe.setValue(G,"center",Z.center),pe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),pe.setValue(G,"normalMatrix",Z.normalMatrix),pe.setValue(G,"modelMatrix",Z.matrixWorld),W.uniformsGroups!==void 0){let He=W.uniformsGroups;for(let vi=0,Ss=He.length;vi<Ss;vi++){let gm=He[vi];ut.update(gm,Li),ut.bind(gm,Li)}}return Li}function Ia(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.sunLights.needsUpdate=B,R.sunLightShadows.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function yc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,B,K){let W=Bt.get(R);W.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Bt.get(R.texture).__webglTexture=B,Bt.get(R.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){let K=Bt.get(R);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,K=0){Y=R,z=B,F=K;let W=null,Z=!1,Tt=!1;if(R){let bt=Bt.get(R);if(bt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(G.FRAMEBUFFER,bt.__webglFramebuffer),J.copy(R.viewport),ft.copy(R.scissor),it=R.scissorTest,_t.viewport(J),_t.scissor(ft),_t.setScissorTest(it),V=-1;return}else if(bt.__webglFramebuffer===void 0)Gt.setupRenderTarget(R);else if(bt.__hasExternalTextures)Gt.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Jt=R.depthTexture;if(bt.__boundDepthTexture!==Jt){if(Jt!==null&&Bt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(R)}}let Ct=R.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Tt=!0);let kt=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?W=kt[B][K]:W=kt[B],Z=!0):R.samples>0&&Gt.useMultisampledRTT(R)===!1?W=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?W=kt[K]:W=kt,J.copy(R.viewport),ft.copy(R.scissor),it=R.scissorTest}else J.copy(Et).multiplyScalar(Q).floor(),ft.copy(qt).multiplyScalar(Q).floor(),it=It;if(K!==0&&(W=k),_t.bindFramebuffer(G.FRAMEBUFFER,W)&&_t.drawBuffers(R,W),_t.viewport(J),_t.scissor(ft),_t.setScissorTest(it),Z){let bt=Bt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,K)}else if(Tt){let bt=B;for(let Ct=0;Ct<R.textures.length;Ct++){let kt=Bt.get(R.textures[Ct]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ct,kt.__webglTexture,K,bt)}}else if(R!==null&&K!==0){let bt=Bt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bt.__webglTexture,K)}V=-1};function $s(R){let B=Bt.get(R);return(B.__readFormat!==R.format||B.__readType!==R.type)&&(B.__readFormat=R.format,B.__readType=R.type,B.__formatReadable=Ht.textureFormatReadable(R.format),B.__typeReadable=Ht.textureTypeReadable(R.type)),B}this.readRenderTargetPixels=function(R,B,K,W,Z,Tt,Dt,bt=0){if(!(R&&R.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ct=Ct[Dt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){_t.bindFramebuffer(G.FRAMEBUFFER,Ct);try{let kt=R.textures[bt],Jt=kt.format,ce=kt.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+bt);let Ut=$s(kt);if(Ut.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-W&&K>=0&&K<=R.height-Z&&G.readPixels(B,K,W,Z,dt.convert(Jt),dt.convert(ce),Tt)}finally{let kt=Y!==null?Bt.get(Y).__webglFramebuffer:null;_t.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,B,K,W,Z,Tt,Dt,bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ct=Ct[Dt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(B>=0&&B<=R.width-W&&K>=0&&K<=R.height-Z){_t.bindFramebuffer(G.FRAMEBUFFER,Ct);let kt=R.textures[bt],Jt=kt.format,ce=kt.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+bt);let Ut=$s(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(B,K,W,Z,dt.convert(Jt),dt.convert(ce),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let ni=Y!==null?Bt.get(Y).__webglFramebuffer:null;_t.bindFramebuffer(G.FRAMEBUFFER,ni);let De=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Dg(G,De,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(he),G.deleteSync(De),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,K=0){let W=Math.pow(2,-K),Z=Math.floor(R.image.width*W),Tt=Math.floor(R.image.height*W),Dt=B!==null?B.x:0,bt=B!==null?B.y:0;Gt.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,Dt,bt,Z,Tt),_t.unbindTexture()},this.copyTextureToTexture=function(R,B,K=null,W=null,Z=0,Tt=0){let Dt,bt,Ct,kt,Jt,ce,Ut,he,ni,De=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(K!==null)Dt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Ct=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Jt=K.min.y,ce=K.isBox3?K.min.z:0;else{let pe=Math.pow(2,-Z);Dt=Math.floor(De.width*pe),bt=Math.floor(De.height*pe),R.isDataArrayTexture?Ct=De.depth:R.isData3DTexture?Ct=Math.floor(De.depth*pe):Ct=1,kt=0,Jt=0,ce=0}W!==null?(Ut=W.x,he=W.y,ni=W.z):(Ut=0,he=0,ni=0);let Ce=dt.convert(B.format),Ii=dt.convert(B.type),Ot;B.isData3DTexture?(Gt.setTexture3D(B,0),Ot=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Gt.setTexture2DArray(B,0),Ot=G.TEXTURE_2D_ARRAY):(Gt.setTexture2D(B,0),Ot=G.TEXTURE_2D),_t.activeTexture(G.TEXTURE0),_t.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),_t.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_t.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let Yi=_t.getParameter(G.UNPACK_ROW_LENGTH),xe=_t.getParameter(G.UNPACK_IMAGE_HEIGHT),Pr=_t.getParameter(G.UNPACK_SKIP_PIXELS),Li=_t.getParameter(G.UNPACK_SKIP_ROWS),Sc=_t.getParameter(G.UNPACK_SKIP_IMAGES);_t.pixelStorei(G.UNPACK_ROW_LENGTH,De.width),_t.pixelStorei(G.UNPACK_IMAGE_HEIGHT,De.height),_t.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),_t.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),_t.pixelStorei(G.UNPACK_SKIP_IMAGES,ce);let Ks=R.isDataArrayTexture||R.isData3DTexture,Ir=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){let pe=Bt.get(R),Ei=Bt.get(B),qn=Bt.get(pe.__renderTarget),He=Bt.get(Ei.__renderTarget);_t.bindFramebuffer(G.READ_FRAMEBUFFER,qn.__webglFramebuffer),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let vi=0;vi<Ct;vi++)Ks&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,Z,ce+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(B).__webglTexture,Tt,ni+vi)),G.blitFramebuffer(kt,Jt,kt+Dt,Jt+bt,Ut,he,Ut+Dt,he+bt,G.DEPTH_BUFFER_BIT,G.NEAREST);_t.bindFramebuffer(G.READ_FRAMEBUFFER,null),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Bt.has(R)){let pe=Bt.get(R),Ei=Bt.get(B);_t.bindFramebuffer(G.READ_FRAMEBUFFER,P),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let qn=0;qn<Ct;qn++)Ks?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pe.__webglTexture,Z,ce+qn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pe.__webglTexture,Z),Ir?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ei.__webglTexture,Tt,ni+qn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ei.__webglTexture,Tt),Z!==0?G.blitFramebuffer(kt,Jt,kt+Dt,Jt+bt,Ut,he,Ut+Dt,he+bt,G.COLOR_BUFFER_BIT,G.NEAREST):Ir?G.copyTexSubImage3D(Ot,Tt,Ut,he,ni+qn,kt,Jt,Dt,bt):G.copyTexSubImage2D(Ot,Tt,Ut,he,kt,Jt,Dt,bt);_t.bindFramebuffer(G.READ_FRAMEBUFFER,null),_t.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ir?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ot,Tt,Ut,he,ni,Dt,bt,Ct,Ce,Ii,De.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(Ot,Tt,Ut,he,ni,Dt,bt,Ct,Ce,De.data):G.texSubImage3D(Ot,Tt,Ut,he,ni,Dt,bt,Ct,Ce,Ii,De):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,Ut,he,Dt,bt,Ce,Ii,De.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,Ut,he,De.width,De.height,Ce,De.data):G.texSubImage2D(G.TEXTURE_2D,Tt,Ut,he,Dt,bt,Ce,Ii,De);_t.pixelStorei(G.UNPACK_ROW_LENGTH,Yi),_t.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe),_t.pixelStorei(G.UNPACK_SKIP_PIXELS,Pr),_t.pixelStorei(G.UNPACK_SKIP_ROWS,Li),_t.pixelStorei(G.UNPACK_SKIP_IMAGES,Sc),Tt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&G.generateMipmap(Ot),_t.unbindTexture()},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&Gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Gt.setTextureCube(R,0):R.isData3DTexture?Gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Gt.setTexture2DArray(R,0):Gt.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){z=0,F=0,Y=null,_t.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wT=new kr(-1,1,1,-1,0,1),qd=class extends Ke{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},AT=new qd,fr=class{constructor(t){this._mesh=new Pt(AT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,wT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xu=class extends Tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fs.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new fr(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nl=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},vu=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var yu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xu(aa),this.copyPass.material.blending=Ds,this.timer=new pl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nl!==void 0&&(o instanceof Nl?i=!0:o instanceof vu&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Su=class extends Tn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ft}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var _0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var la=class s extends Tn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new di(r,o,{type:wi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new di(r,o,{type:wi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new di(r,o,{type:wi,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=_0;this.highPassUniforms=Fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fs.clone(aa.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,premultipliedAlpha:!0,blending:Gr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new ze,this._fsQuad=new fr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new Qe({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};la.BlurDirectionX=new At(1,0);la.BlurDirectionY=new At(0,1);var Ul={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Mu=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fs.clone(Ul.uniforms),this.material=new Jo({name:Ul.name,uniforms:this.uniforms,vertexShader:Ul.vertexShader,fragmentShader:Ul.fragmentShader}),this._fsQuad=new fr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Bs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function w0(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hl={duration:.5,overwrite:!1,delay:0},lp,Ai,ke,zn=1e8,Ee=1/zn,tp=Math.PI*2,RT=tp/4,CT=0,A0=Math.sqrt,PT=Math.cos,IT=Math.sin,_i=function(t){return typeof t=="string"},Ze=function(t){return typeof t=="function"},ks=function(t){return typeof t=="number"},Nu=function(t){return typeof t>"u"},ms=function(t){return typeof t=="object"},un=function(t){return t!==!1},cp=function(){return typeof window<"u"},bu=function(t){return Ze(t)||_i(t)},R0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ki=Array.isArray,LT=/random\([^)]+\)/g,DT=/,\s*/g,x0=/(?:-?\.?\d|\.)+/gi,hp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,up=/[+-]=-?[.\d]+/,NT=/[^,'"\[\]\s]+/gi,UT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ve,ds,ep,fp,wn={},Au={},C0,P0=function(t){return(Au=ha(t,wn))&&Hi},Uu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Gl=function(t,e){return!e&&console.warn(t)},I0=function(t,e){return t&&(wn[t]=e)&&Au&&(Au[t]=e)||wn},Vl=function(){return 0},OT={suppressEvents:!0,isStart:!0,kill:!1},Tu={suppressEvents:!0,kill:!1},FT={suppressEvents:!0},dp={},pr=[],ip={},L0,cn={},Zd={},v0=30,Eu=[],pp="",mp=function(t){var e=t[0],i,n;if(ms(e)||Ze(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Eu.length;n--&&!Eu[n].targetTest(e););i=Eu[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new vp(t[n],i)))||t.splice(n,1);return t},mr=function(t){return t._gsap||mp(kn(t))[0]._gsap},gp=function(t,e,i){return(i=t[e])&&Ze(i)?t[e]():Nu(i)&&t.getAttribute&&t.getAttribute(e)||i},Ki=function(t,e){return(t=t.split(",")).forEach(e)||t},Je=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Qr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},BT=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Ru=function(){var t=pr.length,e=pr.slice(0),i,n;for(ip={},pr.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},_p=function(t){return!!(t._initted||t._startAt||t.add)},D0=function(t,e,i,n){pr.length&&!Ai&&Ru(),t.render(e,i,n||!!(Ai&&e<0&&_p(t))),pr.length&&!Ai&&Ru()},N0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(NT).length<2?e:_i(t)?t.trim():t},U0=function(t){return t},An=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},zT=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},ha=function(t,e){for(var i in e)t[i]=e[i];return t},y0=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ms(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Cu=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Bl=function(t){var e=t.parent||Ve,i=t.keyframes?zT(ki(t.keyframes)):An;if(un(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},kT=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},O0=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},Ou=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},gr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},HT=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},np=function(t,e,i,n){return t._startAt&&(Ai?t._startAt.revert(Tu):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},GT=function s(t){return!t||t._ts&&s(t.parent)},S0=function(t){return t._repeat?ua(t._tTime,t=t.duration()+t._rDelay)*t:0},ua=function(t,e){var i=Math.floor(t=Ge(t/e));return t&&i===t?i-1:i},Pu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fu=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Bu=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ge(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fu(t),i._dirty||Zr(i,t)),t},F0=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Pu(t.rawTime(),e),(!e._dur||Yl(0,e.totalDuration(),i)-e._tTime>Ee)&&e.render(i,!0)),Zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ee}},ps=function(t,e,i,n){return e.parent&&gr(e),e._start=Ge((ks(i)?i:!i&&Iu(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==Ve?Bn(t,i,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),O0(t,e,"_first","_last",t._sort?"_start":0),Iu(e)||(t._recent=e),n||F0(t,e),t._ts<0&&Bu(t,t._tTime),t},B0=function(t,e){return(wn.ScrollTrigger||Uu("scrollTrigger",e))&&wn.ScrollTrigger.create(e,t)},z0=function(t,e,i,n,r){if(Mp(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!Ai&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&L0!==hn.frame)return pr.push(t),t._lazy=[r,n],1},VT=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Iu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},WT=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&VT(t)&&!(!t._initted&&Iu(t))||(t._ts<0||t._dp._ts<0)&&!Iu(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Yl(0,t._tDur,e),h=ua(l,a),t._yoyo&&h&1&&(o=1-o),h!==ua(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ai||n||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&z0(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?Ee:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&np(t,e,i,!0),t._onUpdate&&!i&&En(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&En(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&gr(t,1),!i&&!Ai&&(En(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},XT=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},fa=function(t,e,i,n){var r=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ge(o*(r+1)+t._rDelay*r):o,a>0&&!n&&Bu(t,t._tTime=t._tDur*a),t.parent&&Fu(t),i||Zr(t.parent,t),t},M0=function(t){return t instanceof zi?Zr(t):fa(t,t._dur)},qT={_start:0,endTime:Vl,totalDuration:Vl},Bn=function s(t,e,i){var n=t.labels,r=t._recent||qT,o=t.duration()>=zn?r.endTime(!1):t._dur,a,l,c;return _i(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(ki(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},zl=function(t,e,i){var n=ks(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;o.immediateRender=un(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new je(e[0],o,e[r+1])},_r=function(t,e){return t||t===0?e(t):e},Yl=function(t,e,i){return i<t?t:i>e?e:i},Ri=function(t,e){return!_i(t)||!(e=UT.exec(t))?"":e[1]},YT=function(t,e,i){return _r(i,function(n){return Yl(t,e,n)})},sp=[].slice,k0=function(t,e){return t&&ms(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ms(t[0]))&&!t.nodeType&&t!==ds},ZT=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return _i(n)&&!e||k0(n,1)?(r=i).push.apply(r,kn(n)):i.push(n)})||i},kn=function(t,e,i){return ke&&!e&&ke.selector?ke.selector(t):_i(t)&&!i&&(ep||!da())?sp.call((e||fp).querySelectorAll(t),0):ki(t)?ZT(t,i):k0(t)?sp.call(t,0):t?[t]:[]},rp=function(t){return t=kn(t)[0]||Gl("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return kn(e,i.querySelectorAll?i:i===t?Gl("Invalid scope")||fp.createElement("div"):t)}},H0=function(t){return t.sort(function(){return .5-Math.random()})},G0=function(t){if(Ze(t))return t;var e=ms(t)?t:{each:t},i=Jr(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return _i(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(f,u,p){var _=(p||e).length,m=o[_],g,v,b,y,S,T,x,M,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,zn])[1],!w){for(x=-zn;x<(x=p[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(m=o[_]=[],g=l?Math.min(w,_)*h-.5:n%w,v=w===zn?0:l?_*d/w-.5:n/w|0,x=0,M=zn,T=0;T<_;T++)b=T%w-g,y=v-(T/w|0),m[T]=S=c?Math.abs(c==="y"?y:b):A0(b*b+y*y),S>x&&(x=S),S<M&&(M=S);n==="random"&&H0(m),m.max=x-M,m.min=M,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(n==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ri(e.amount||e.each)||0,i=i&&_<0?aE(i):i}return _=(m[f]-m.min)/m.max||0,Ge(m.b+(i?i(_):_)*m.v)+m.u}},op=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Ge(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(ks(i)?0:Ri(i))}},V0=function(t,e){var i=ki(t),n,r;return!i&&ms(t)&&(n=i=t.radius||zn,t.values?(t=kn(t.values),(r=!ks(t[0]))&&(n*=n)):t=op(t.increment)),_r(e,i?Ze(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=zn,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!n||c<=n?t[h]:o,r||h===o||ks(o)?h:h+Ri(o)}:op(t))},W0=function(t,e,i,n){return _r(ki(t)?!e:i===!0?!!(i=0):!n,function(){return ki(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},JT=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},$T=function(t,e){return function(i){return t(parseFloat(i))+(e||Ri(i))}},KT=function(t,e,i){return q0(t,e,0,1,i)},X0=function(t,e,i){return _r(i,function(n){return t[~~e(n)]})},QT=function s(t,e,i){var n=e-t;return ki(t)?X0(t,s(0,t.length),e):_r(i,function(r){return(n+(r-t)%n)%n+t})},jT=function s(t,e,i){var n=e-t,r=n*2;return ki(t)?X0(t,s(0,t.length-1),e):_r(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},pa=function(t){return t.replace(LT,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(DT);return W0(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},q0=function(t,e,i,n,r){var o=e-t,a=n-i;return _r(r,function(l){return i+((l-t)/o*a||0)})},tE=function s(t,e,i,n){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=_i(t),a={},l,c,h,d,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(ki(t)&&!ki(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var _=Math.min(f,~~p);return h[_](p-_)},i=e}else n||(t=ha(ki(t)?[]:{},t));if(!h){for(l in e)yp.call(a,t,l,"get",e[l]);r=function(p){return Ep(p,a)||(o?t.p:t)}}}return _r(i,r)},b0=function(t,e,i){var n=t.labels,r=zn,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},En=function(t,e,i){var n=t.vars,r=n[e],o=ke,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&pr.length&&Ru(),a&&(ke=a),h=l?r.apply(c,l):r.call(c),ke=o,h},Ol=function(t){return gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ai),t.progress()<1&&En(t,"onInterrupt"),t},ca,Y0=[],Z0=function(t){if(t)if(t=!t.name&&t.default||t,cp()||t.headless){var e=t.name,i=Ze(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:Vl,render:Ep,add:yp,kill:_E,modifier:gE,rawVars:0},o={targetTest:0,get:0,getSetter:zu,aliases:{},register:0};if(da(),t!==n){if(cn[e])return;An(n,An(Cu(t,r),o)),ha(n.prototype,ha(r,Cu(t,o))),cn[n.prop=e]=n,t.targetTest&&(Eu.push(n),dp[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}I0(e,n),t.register&&t.register(Hi,n,Qi)}else Y0.push(t)},Ie=255,Fl={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},Jd=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Ie+.5|0},J0=function(t,e,i){var n=t?ks(t)?[t>>16,t>>8&Ie,t&Ie]:0:Fl.black,r,o,a,l,c,h,d,f,u,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Fl[t])n=Fl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Ie,n&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(x0),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Jd(l+1/3,r,o),n[1]=Jd(l,r,o),n[2]=Jd(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(hp),i&&n.length<4&&(n[3]=1),n}else n=t.match(x0)||Fl.transparent;n=n.map(Number)}return e&&!p&&(r=n[0]/Ie,o=n[1]/Ie,a=n[2]/Ie,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},$0=function(t){var e=[],i=[],n=-1;return t.split(zs).forEach(function(r){var o=r.match(Kr)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},T0=function(t,e,i){var n="",r=(t+n).match(zs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=J0(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=$0(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(zs,"1").split(Kr),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(zs),d=c.length-1;a<d;a++)n+=c[a]+r[a];return n+c[d]},zs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Fl)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),eE=/hsl[a]?\(/,xp=function(t){var e=t.join(" "),i;if(zs.lastIndex=0,zs.test(e))return i=eE.test(e),t[1]=T0(t[1],i),t[0]=T0(t[0],i,$0(t[1])),!0},Wl,hn=(function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,d,f,u,p=function _(m){var g=s()-n,v=m===!0,b,y,S,T;if((g>t||g<0)&&(i+=g-e),n+=g,S=n-i,b=S-o,(b>0||v)&&(T=++d.frame,f=S-d.time*1e3,d.time=S=S/1e3,o+=b+(b>=r?0:r-b),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](S,f,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){C0&&(!ep&&cp()&&(ds=ep=window,fp=ds.document||{},wn.gsap=Hi,(ds.gsapVersions||(ds.gsapVersions=[])).push(Hi.version),P0(Au||ds.GreenSockGlobals||!ds.gsap&&ds||{}),Y0.forEach(Z0)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Wl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Wl=0,c=Vl},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,g,v){var b=g?function(y,S,T,x){m(y,S,T,x),d.remove(b)}:m;return d.remove(m),a[v?"unshift":"push"](b),da(),b},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),da=function(){return!Wl&&hn.wake()},fe={},iE=/^[\d.\-M][\d.\-,\s]/,nE=/["']/g,sE=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(nE,"").trim():+c,n=l.substr(a+1).trim();return e},rE=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},oE=function(t){var e=(t+"").split("("),i=fe[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[sE(e[1])]:rE(t).split(",").map(N0)):fe._CE&&iE.test(t)?fe._CE("",t):i},aE=function(t){return function(e){return 1-t(1-e)}},Jr=function(t,e){return t&&(Ze(t)?t:fe[t]||oE(t))||e},jr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return Ki(t,function(a){fe[a]=wn[a]=r,fe[o=a.toLowerCase()]=i;for(var l in r)fe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=fe[a+"."+l]=r[l]}),r},K0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},$d=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/tp*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*IT((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:K0(a);return r=tp/r,l.config=function(c,h){return s(t,c,h)},l},Kd=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:K0(i);return n.config=function(r){return s(t,r)},n};Ki("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;jr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});fe.Linear.easeNone=fe.none=fe.Linear.easeIn;jr("Elastic",$d("in"),$d("out"),$d());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};jr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);jr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});jr("Circ",function(s){return-(A0(1-s*s)-1)});jr("Sine",function(s){return s===1?1:-PT(s*RT)+1});jr("Back",Kd("in"),Kd("out"),Kd());fe.SteppedEase=fe.steps=wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-Ee;return function(a){return((n*Yl(0,o,a)|0)+r)*i}}};Hl.ease=fe["quad.out"];Ki("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return pp+=s+","+s+"Params,"});var vp=function(t,e){this.id=CT++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:gp,this.set=e?e.getSetter:zu},Xl=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,fa(this,+e.duration,1,1),this.data=e.data,ke&&(this._ctx=ke,ke.data.push(this)),Wl||hn.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,fa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(da(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Bu(this,i),!r._dp||r.parent||F0(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ps(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),D0(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+S0(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+S0(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ua(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Pu(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ee?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Yl(-Math.abs(this._delay),a,r),n!==!1),Fu(this),HT(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{da(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Ee,o;if(r)for(this._tTime-=Ee,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+Ee){r=!1;break}o=o._next}this.totalTime(n,r)}return this},t.startTime=function(i){if(arguments.length){this._start=Ge(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ps(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(un(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pu(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=FT);var n=Ai;return Ai=i,_p(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ai=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,M0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,M0(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Bn(this,i),un(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,un(n)),this._dur||(this._zTime=-Ee),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Ee)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(o){var a=Ze(i)?i:U0,l=function(){var h=n.then;n.then=null,r&&r(),Ze(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){Ol(this)},s})();An(Xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var zi=(function(s){w0(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=un(i.sortChildren),Ve&&ps(i.parent||Ve,Bs(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&B0(Bs(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return zl(0,arguments,this),this},e.from=function(n,r,o){return zl(1,arguments,this),this},e.fromTo=function(n,r,o,a){return zl(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,Bl(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new je(n,r,Bn(this,o),1),this},e.call=function(n,r,o){return ps(this,je.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new je(n,o,Bn(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,Bl(o).immediateRender=un(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,d){return a.startAt=o,Bl(a).immediateRender=un(a.immediateRender),this.staggerTo(n,r,a,l,c,h,d)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Ge(n),d=this._zTime<0!=n<0&&(this._initted||!c),f,u,p,_,m,g,v,b,y,S,T,x;if(this!==Ve&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,y=this._start,b=this._ts,g=!b,d&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,o);if(f=Ge(h%m),h===l?(_=this._repeat,f=c):(S=Ge(h/m),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=ua(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),T&&_&1&&(f=c-f,x=1),_!==S&&!this._lock){var M=T&&S&1,w=M===(T&&_&1);if(_<S&&(M=!M),a=M?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Ge(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=XT(this,Ge(a),Ge(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!r&&!S&&(En(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(u=this._first;u;){if(p=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=-Ee);break}}u=p}else{u=this._last;for(var E=n<0?n:f;u;){if(p=u._prev,(u._act||E<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(n,r,o);if(u.render(u._ts>0?(E-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(E-u._start)*u._ts,r,o||Ai&&_p(u)),f!==this._time||!this._ts&&!g){v=0,p&&(h+=this._zTime=E?-Ee:Ee);break}}u=p}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Ee)._zTime=f>=a?1:-1,this._ts))return this._start=y,Fu(this),this.render(n,r,o);this._onUpdate&&!r&&En(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&gr(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(En(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(ks(r)||(r=Bn(this,r,n)),!(n instanceof Xl)){if(ki(n))return n.forEach(function(a){return o.add(a,r)}),this;if(_i(n))return this.addLabel(n,r);if(Ze(n))n=je.delayedCall(0,n);else return this}return this!==n?ps(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-zn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return _i(n)?this.removeLabel(n):Ze(n)?this.killTweensOf(n):(n.parent===this&&Ou(this,n),n===this._recent&&(this._recent=this._last),Zr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(hn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=Bn(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=je.delayedCall(0,r||Vl,o);return a.data="isPause",this._hasPause=1,ps(this,a,Bn(this,n))},e.removePause=function(n){var r=this._first;for(n=Bn(this,n);r;)r._start===n&&r.data==="isPause"&&gr(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=kn(n),l=this._first,c=ks(r),h;l;)l instanceof je?BT(l._targets,a)&&(c?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=Bn(o,n),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,p=je.to(o,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&fa(p,m,0,1).render(p._time,!0,!0),u=1}h&&h.apply(p,d||[])}},r));return f?p.render(0):p},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,An({startAt:{time:Bn(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),b0(this,Bn(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),b0(this,Bn(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Ge(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return Zr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Zr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=zn,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ps(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ge(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;fa(o,o===Ve&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(Ve._ts&&(D0(Ve,Pu(n,Ve)),L0=hn.frame),hn.frame>=v0){v0+=fn.autoSleep||120;var r=Ve._first;if((!r||!r._ts)&&fn.autoSleep&&hn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||hn.sleep()}}},t})(Xl);An(zi.prototype,{_lock:0,_hasPause:0,_forcing:0});var lE=function(t,e,i,n,r,o,a){var l=new Qi(this._pt,t,e,0,1,Tp,null,r),c=0,h=0,d,f,u,p,_,m,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=pa(n)),o&&(v=[i,n],o(v,t,e),i=v[0],n=v[1]),f=i.match(Yd)||[];d=Yd.exec(n);)p=d[0],_=n.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Qr(m,p)-m:parseFloat(p)-m,m:u&&u<4?Math.round:0},c=Yd.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(up.test(n)||g)&&(l.e=0),this._pt=l,l},yp=function(t,e,i,n,r,o,a,l,c,h){Ze(n)&&(n=n(r||0,t,o));var d=t[e],f=i!=="get"?i:Ze(d)?c?t[e.indexOf("set")||!Ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ze(d)?c?dE:j0:bp,p;if(_i(n)&&(~n.indexOf("random(")&&(n=pa(n)),n.charAt(1)==="="&&(p=Qr(f,n)+(Ri(f)||0),(p||p===0)&&(n=p))),!h||f!==n||ap)return!isNaN(f*n)&&n!==""?(p=new Qi(this._pt,t,e,+f||0,n-(f||0),typeof d=="boolean"?mE:t_,0,u),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Uu(e,n),lE.call(this,t,e,f,n,u,l||fn.stringFilter,c))},cE=function(t,e,i,n,r){if(Ze(t)&&(t=kl(t,r,e,i,n)),!ms(t)||t.style&&t.nodeType||ki(t)||R0(t))return _i(t)?kl(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=kl(t[a],r,e,i,n);return o},Sp=function(t,e,i,n,r,o){var a,l,c,h;if(cn[t]&&(a=new cn[t]).init(r,a.rawVars?e[t]:cE(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new Qi(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==ca))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},dr,ap,Mp=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,f=n.keyframes,u=n.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:m,b=t._overwrite==="auto"&&!lp,y=t.timeline,S=n.easeReverse||d,T,x,M,w,E,D,L,k,P,N,z,F,Y;if(y&&(!f||!r)&&(r="none"),t._ease=Jr(r,Hl.ease),t._rEase=S&&(Jr(S)||t._ease),t._from=!y&&!!n.runBackwards,t._from&&(t.ratio=1),!y||f&&!n.stagger){if(k=m[0]?mr(m[0]).harness:0,F=k&&n[k.prop],T=Cu(n,dp),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&p?Tu:OT),_._lazy=0),o){if(gr(t._startAt=je.set(m,An({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&un(l),startAt:null,delay:0,onUpdate:c&&function(){return En(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ai||!a&&!u)&&t._startAt.revert(Tu),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),M=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&un(l),immediateRender:a,stagger:0,parent:g},T),F&&(M[k.prop]=F),gr(t._startAt=je.set(m,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ai?t._startAt.revert(Tu):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&un(l)||l&&!p,x=0;x<m.length;x++){if(E=m[x],L=E._gsap||mp(m)[x]._gsap,t._ptLookup[x]=N={},ip[L.id]&&pr.length&&Ru(),z=v===m?x:v.indexOf(E),k&&(P=new k).init(E,F||T,t,z,v)!==!1&&(t._pt=w=new Qi(t._pt,E,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(V){N[V]=w}),P.priority&&(D=1)),!k||F)for(M in T)cn[M]&&(P=Sp(M,T,t,z,E,v))?P.priority&&(D=1):N[M]=w=yp.call(t,E,M,"get",T[M],z,v,0,n.stringFilter);t._op&&t._op[x]&&t.kill(E,t._op[x]),b&&t._pt&&(dr=t,Ve.killTweensOf(E,N,t.globalTime(e)),Y=!t.parent,dr=0),t._pt&&l&&(ip[L.id]=1)}D&&wp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,f&&e<=0&&y.render(zn,!0,!0)},hE=function(t,e,i,n,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ap=1,t.vars[e]="+=0",Mp(t,a),ap=0,l?Gl(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Je(i)+Ri(d.e)),d.b&&(d.b=h.s+Ri(d.b))},uE=function(t,e){var i=t[0]?mr(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=ha({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},fE=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if(ki(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},kl=function(t,e,i,n,r){return Ze(t)?t.call(e,i,n,r):_i(t)&&~t.indexOf("random(")?pa(t):t},Lu=pp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Q0={};Ki(Lu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Q0[s]=1});Lu=Lu.split(",");var je=(function(s){w0(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:Bl(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=n.parent||Ve,v=(ki(i)||R0(i)?ks(i[0]):"length"in n)?[i]:kn(i),b,y,S,T,x,M,w,E;if(a._targets=v.length?mp(v):Gl("GSAP target "+i+" not found. https://gsap.com",!fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,p||f||bu(c)||bu(h)){n=a.vars;var D=n.easeReverse||n.yoyoEase;if(b=a.timeline=new zi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),b.kill(),b.parent=b._dp=Bs(a),b._start=0,f||bu(c)||bu(h)){if(T=v.length,w=f&&G0(f),ms(f))for(x in f)~Lu.indexOf(x)&&(E||(E={}),E[x]=f[x]);for(y=0;y<T;y++)S=Cu(n,Q0),S.stagger=0,D&&(S.easeReverse=D),E&&ha(S,E),M=v[y],S.duration=+kl(c,Bs(a),y,M,v),S.delay=(+kl(h,Bs(a),y,M,v)||0)-a._delay,!f&&T===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),b.to(M,S,w?w(y,M,v):0),b._ease=fe.none;b.duration()?c=h=0:a.timeline=0}else if(p){Bl(An(b.vars.defaults,{ease:"none"})),b._ease=Jr(p.ease||n.ease||"none");var L=0,k,P,N;if(ki(p))p.forEach(function(z){return b.to(v,z,">")}),b.duration();else{S={};for(x in p)x==="ease"||x==="easeEach"||fE(x,p[x],S,p.easeEach);for(x in S)for(k=S[x].sort(function(z,F){return z.t-F.t}),L=0,y=0;y<k.length;y++)P=k[y],N={ease:P.e,duration:(P.t-(y?k[y-1].t:0))/100*c},N[x]=P.v,b.to(v,N,L),L+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return u===!0&&!lp&&(dr=Bs(a),Ve.killTweensOf(v),dr=0),ps(g,Bs(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ge(g._time)&&un(d)&&GT(Bs(a))&&g.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-h)||0)),m&&B0(Bs(a),m),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-Ee&&!h?l:n<Ee?0:n,f,u,p,_,m,g,v,b;if(!c)WT(this,n,r,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,r,o);if(f=Ge(d%_),d===l?(p=this._repeat,f=c):(m=Ge(d/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=ua(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ge(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(z0(this,h?n:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var S=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(En(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;b&&b.render(n<0?n:b._dur*b._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&np(this,n,r,o),En(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&np(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&gr(this,1),!r&&!(h&&!a)&&(d||a||g)&&(En(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a,l){Wl||hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mp(this,c),h=this._ease(c/this._dur),hE(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(Bu(this,0),this.parent||O0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ol(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ai),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,dr&&dr.vars.overwrite!==!0)._first||Ol(this),this.parent&&o!==this.timeline.totalDuration()&&fa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?kn(n):a,c=this._ptLookup,h=this._pt,d,f,u,p,_,m,g;if((!r||r==="all")&&kT(a,l))return r==="all"&&(this._pt=0),Ol(this);for(d=this._op=this._op||[],r!=="all"&&(_i(r)&&(_={},Ki(r,function(v){return _[v]=1}),r=_),r=uE(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,p=f,u={}):(u=d[g]=d[g]||{},p=r);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ou(this,m,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Ol(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return zl(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return zl(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return Ve.killTweensOf(n,r,o)},t})(Xl);An(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ki("staggerTo,staggerFrom,staggerFromTo",function(s){je[s]=function(){var t=new zi,e=sp.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var bp=function(t,e,i){return t[e]=i},j0=function(t,e,i){return t[e](i)},dE=function(t,e,i,n){return t[e](n.fp,i)},pE=function(t,e,i){return t.setAttribute(e,i)},zu=function(t,e){return Ze(t[e])?j0:Nu(t[e])&&t.setAttribute?pE:bp},t_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},mE=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Tp=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Ep=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},gE=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},_E=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Ou(this,e,"_pt"):e.dep||(i=1),e=n;return!i},xE=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},wp=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},Qi=(function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||t_,this.d=l||this,this.set=c||bp,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=xE,this.m=i,this.mt=r,this.tween=n},s})();Ki(pp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return dp[s]=1});wn.TweenMax=wn.TweenLite=je;wn.TimelineLite=wn.TimelineMax=zi;Ve=new zi({sortChildren:!1,defaults:Hl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=xp;var $r=[],wu={},vE=[],E0=0,yE=0,Qd=function(t){return(wu[t]||vE).map(function(e){return e()})},ql=function(){var t=Date.now(),e=[];t-E0>2&&(Qd("matchMediaInit"),$r.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=ds.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Qd("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),E0=t,Qd("matchMedia"))},e_=(function(){function s(e,i){this.selector=i&&rp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=yE++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){Ze(i)&&(r=n,n=i,i=Ze);var o=this,a=function(){var c=ke,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=rp(r)),ke=o,d=n.apply(o,arguments),Ze(d)&&o._r.push(d),ke=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===Ze?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=ke;ke=null,i(this),ke=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof je&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof zi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=$r.length;o--;)$r[o].id===this.id&&$r.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(ql):a.removeEventListener("change",ql)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},s})(),SE=(function(){function s(e){this.contexts=[],this.scope=e,ke&&ke.data.push(this)}var t=s.prototype;return t.add=function(i,n,r){ms(i)||(i={matches:i});var o=new e_(0,r||this.scope),a=o.conditions={},l,c,h;ke&&!o.selector&&(o.selector=ke.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=ds.matchMedia(i[c]),l&&($r.indexOf(o)<0&&$r.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ql):l.addEventListener("change",ql),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s})(),Du={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Z0(n)})},timeline:function(t){return new zi(t)},getTweensOf:function(t,e){return Ve.getTweensOf(t,e)},getProperty:function(t,e,i,n){_i(t)&&(t=kn(t)[0]);var r=mr(t||{}).get,o=i?U0:N0;return i==="native"&&(i=""),t&&(e?o((cn[e]&&cn[e].get||r)(t,e,i,n)):function(a,l,c){return o((cn[a]&&cn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=kn(t),t.length>1){var n=t.map(function(h){return Hi.quickSetter(h,e,i)}),r=n.length;return function(h){for(var d=r;d--;)n[d](h)}}t=t[0]||{};var o=cn[e],a=mr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;ca._pt=0,d.init(t,i?h+i:h,ca,0,[t]),d.render(1,d),ca._pt&&Ep(1,ca)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=Hi.to(t,An((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Jr(t.ease,Hl.ease)),y0(Hl,t||{})},config:function(t){return y0(fn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!cn[a]&&!wn[a]&&Gl(e+" effect requires "+a+" plugin.")}),Zd[e]=function(a,l,c){return i(kn(a),An(l||{},r),c)},o&&(zi.prototype[e]=function(a,l,c){return this.add(Zd[e](a,ms(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){fe[t]=Jr(e)},parseEase:function(t,e){return arguments.length?Jr(t,e):fe},getById:function(t){return Ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new zi(t),n,r;for(i.smoothChildTiming=un(t.smoothChildTiming),Ve.remove(i),i._dp=0,i._time=i._tTime=Ve._time,n=Ve._first;n;)r=n._next,(e||!(!n._dur&&n instanceof je&&n.vars.onComplete===n._targets[0]))&&ps(i,n,n._start-n._delay),n=r;return ps(Ve,i,0),i},context:function(t,e){return t?new e_(t,e):ke},matchMedia:function(t){return new SE(t)},matchMediaRefresh:function(){return $r.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||ql()},addEventListener:function(t,e){var i=wu[t]||(wu[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=wu[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:QT,wrapYoyo:jT,distribute:G0,random:W0,snap:V0,normalize:KT,getUnit:Ri,clamp:YT,splitColor:J0,toArray:kn,selector:rp,mapRange:q0,pipe:JT,unitize:$T,interpolate:tE,shuffle:H0},install:P0,effects:Zd,ticker:hn,updateRoot:zi.updateRoot,plugins:cn,globalTimeline:Ve,core:{PropTween:Qi,globals:I0,Tween:je,Timeline:zi,Animation:Xl,getCache:mr,_removeLinkedListItem:Ou,reverting:function(){return Ai},context:function(t){return t&&ke&&(ke.data.push(t),t._ctx=ke),ke},suppressOverwrites:function(t){return lp=t}}};Ki("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Du[s]=je[s]});hn.add(zi.updateRoot);ca=Du.to({},{duration:0});var ME=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},bE=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=ME(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},jd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(_i(r)&&(l={},Ki(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}bE(a,r)}}}},Hi=Du.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ai?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},jd("roundProps",op),jd("modifiers"),jd("snap",V0))||Du;je.version=zi.version=Hi.version="3.15.1";C0=1;cp()&&da();var TE=fe.Power0,EE=fe.Power1,wE=fe.Power2,AE=fe.Power3,RE=fe.Power4,CE=fe.Linear,PE=fe.Quad,IE=fe.Cubic,LE=fe.Quart,DE=fe.Quint,NE=fe.Strong,UE=fe.Elastic,OE=fe.Back,FE=fe.SteppedEase,BE=fe.Bounce,zE=fe.Sine,kE=fe.Expo,HE=fe.Circ;var i_,xr,ga,Lp,no,GE,n_,Dp,VE=function(){return typeof window<"u"},Gs={},io=180/Math.PI,_a=Math.PI/180,ma=Math.atan2,s_=1e8,Np=/([A-Z])/g,WE=/(left|right|width|margin|padding|x)/i,XE=/[\s,\(]\S/,gs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ZE=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},JE=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},f_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},d_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$E=function(t,e,i){return t.style[e]=i},KE=function(t,e,i){return t.style.setProperty(e,i)},QE=function(t,e,i){return t._gsap[e]=i},jE=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},tw=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},ew=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},We="transform",dn=We+"Origin",iw=function s(t,e){var i=this,n=this.target,r=n.style,o=n._gsap;if(t in Gs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=gs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Hs(n,a)}):this.tfm[t]=o.x?o[t]:Hs(n,t),t===dn&&(this.tfm.zOrigin=o.zOrigin);else return gs.transform.split(",").forEach(function(a){return s.call(i,a,e)});if(this.props.indexOf(We)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(dn,e,"")),t=We}(r||e)&&this.props.push(t,e,r[t])},p_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},nw=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Np,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Dp(),(!r||!r.isStart)&&!i[We]&&(p_(i),n.zOrigin&&i[dn]&&(i[dn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},m_=function(t,e){var i={target:t,props:[],revert:nw,save:iw};return t._gsap||Hi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},g_,Cp=function(t,e){var i=xr.createElementNS?xr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xr.createElement(t);return i&&i.style?i:xr.createElement(t)},Rn=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Np,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,xa(e)||e,1)||""},r_="O,Moz,ms,Ms,Webkit".split(","),xa=function(t,e,i){var n=e||no,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(r_[o]+t in r););return o<0?null:(o===3?"ms":o>=0?r_[o]:"")+t},Pp=function(){VE()&&window.document&&(i_=window,xr=i_.document,ga=xr.documentElement,no=Cp("div")||{style:{}},GE=Cp("div"),We=xa(We),dn=We+"Origin",no.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",g_=!!xa("perspective"),Dp=Hi.core.reverting,Lp=1)},o_=function(t){var e=t.ownerSVGElement,i=Cp("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),ga.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),ga.removeChild(i),r},a_=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},__=function(t){var e,i;try{e=t.getBBox()}catch{e=o_(t),i=1}return e&&(e.width||e.height)||i||(e=o_(t)),e&&!e.width&&!e.x&&!e.y?{x:+a_(t,["x","cx","x1"])||0,y:+a_(t,["y","cy","y1"])||0,width:0,height:0}:e},x_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&__(t))},yr=function(t,e){if(e){var i=t.style,n;e in Gs&&e!==dn&&(e=We),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Np,"-$1").toLowerCase())):i.removeAttribute(e)}},vr=function(t,e,i,n,r,o){var a=new Qi(t._pt,e,i,0,1,o?d_:f_);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},l_={deg:1,rad:1,turn:1},sw={grid:1,flex:1},Sr=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=no.style,l=WE.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=n==="px",u=n==="%",p,_,m,g;if(n===o||!r||l_[n]||l_[o])return r;if(o!=="px"&&!f&&(r=s(t,e,i,"px")),g=t.getCTM&&x_(t),(u||o==="%")&&(Gs[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Je(u?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(f?o:n),_=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===xr||!_.appendChild)&&(_=xr.body),m=_._gsap,m&&u&&m.width&&l&&m.time===hn.time&&!m.uncache)return Je(r/m.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+n,p=t[h],v?t.style[e]=v:yr(t,e)}else(u||o==="%")&&!sw[Rn(_,"display")]&&(a.position=Rn(t,"position")),_===t&&(a.position="static"),_.appendChild(no),p=no[h],_.removeChild(no),a.position="absolute";return l&&u&&(m=mr(_),m.time=hn.time,m.width=_[h]),Je(f?p*r/d:p&&r?d/p*r:0)},Hs=function(t,e,i,n){var r;return Lp||Pp(),e in gs&&e!=="transform"&&(e=gs[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gs[e]&&e!=="transform"?(r=$l(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Hu(Rn(t,dn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=ku[e]&&ku[e](t,e,i)||Rn(t,e)||gp(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Sr(t,e,r,i)+i:r},rw=function(t,e,i,n){if(!i||i==="none"){var r=xa(e,t,1),o=r&&Rn(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=Rn(t,"borderTopColor"))}var a=new Qi(this._pt,t.style,e,0,1,Tp),l=0,c=0,h,d,f,u,p,_,m,g,v,b,y,S;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Rn(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=t.style[e],t.style[e]=n,n=Rn(t,e)||n,_?t.style[e]=_:yr(t,e)),h=[i,n],xp(h),i=h[0],n=h[1],f=i.match(Kr)||[],S=n.match(Kr)||[],S.length){for(;d=Kr.exec(n);)m=d[0],v=n.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),m.charAt(1)==="="&&(m=Qr(u,m)+y),g=parseFloat(m),b=m.substr((g+"").length),l=Kr.lastIndex-b.length,b||(b=b||fn.units[e]||y,l===n.length&&(n+=b,a.e+=b)),y!==b&&(u=Sr(t,e,_,b)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?d_:f_;return up.test(n)&&(a.e=0),this._pt=a,a},c_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ow=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=c_[i]||i,e[1]=c_[n]||n,e.join(" ")},aw=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Gs[a]&&(l=1,a=a==="transformOrigin"?dn:We),yr(i,a);l&&(yr(i,We),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",$l(i,1),o.uncache=1,p_(n)))}},ku={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new Qi(t._pt,e,i,0,0,aw);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},Jl=[1,0,0,1,0,0],v_={},y_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},h_=function(t){var e=Rn(t,We);return y_(e)?Jl:e.substr(7).match(hp).map(Je)},Up=function(t,e){var i=t._gsap||mr(t),n=t.style,r=h_(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Jl:r):(r===Jl&&!t.offsetParent&&t!==ga&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ga.appendChild(t)),r=h_(t),l?n.display=l:yr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ga.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ip=function(t,e,i,n,r,o){var a=t._gsap,l=r||Up(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],b=e.split(" "),y=parseFloat(b[0])||0,S=parseFloat(b[1])||0,T,x,M,w;i?l!==Jl&&(x=u*m-p*_)&&(M=y*(m/x)+S*(-_/x)+(_*v-m*g)/x,w=y*(-p/x)+S*(u/x)-(u*v-p*g)/x,y=M,S=w):(T=__(t),y=T.x+(~b[0].indexOf("%")?y/100*T.width:y),S=T.y+(~(b[1]||b[0]).indexOf("%")?S/100*T.height:S)),n||n!==!1&&a.smooth?(g=y-c,v=S-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[dn]="0px 0px",o&&(vr(o,a,"xOrigin",c,y),vr(o,a,"yOrigin",h,S),vr(o,a,"xOffset",d,a.xOffset),vr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},$l=function(t,e){var i=t._gsap||new vp(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Rn(t,dn)||"0",h,d,f,u,p,_,m,g,v,b,y,S,T,x,M,w,E,D,L,k,P,N,z,F,Y,V,C,J,ft,it,H,tt;return h=d=f=_=m=g=v=b=y=0,u=p=1,i.svg=!!(t.getCTM&&x_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),n.scale=n.rotate=n.translate="none"),x=Up(t,i.svg),i.svg&&(i.uncache?(Y=t.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Ip(t,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,x)),S=i.xOrigin||0,T=i.yOrigin||0,x!==Jl&&(D=x[0],L=x[1],k=x[2],P=x[3],h=N=x[4],d=z=x[5],x.length===6?(u=Math.sqrt(D*D+L*L),p=Math.sqrt(P*P+k*k),_=D||L?ma(L,D)*io:0,v=k||P?ma(k,P)*io+_:0,v&&(p*=Math.abs(Math.cos(v*_a))),i.svg&&(h-=S-(S*D+T*k),d-=T-(S*L+T*P))):(tt=x[6],it=x[7],C=x[8],J=x[9],ft=x[10],H=x[11],h=x[12],d=x[13],f=x[14],M=ma(tt,ft),m=M*io,M&&(w=Math.cos(-M),E=Math.sin(-M),F=N*w+C*E,Y=z*w+J*E,V=tt*w+ft*E,C=N*-E+C*w,J=z*-E+J*w,ft=tt*-E+ft*w,H=it*-E+H*w,N=F,z=Y,tt=V),M=ma(-k,ft),g=M*io,M&&(w=Math.cos(-M),E=Math.sin(-M),F=D*w-C*E,Y=L*w-J*E,V=k*w-ft*E,H=P*E+H*w,D=F,L=Y,k=V),M=ma(L,D),_=M*io,M&&(w=Math.cos(M),E=Math.sin(M),F=D*w+L*E,Y=N*w+z*E,L=L*w-D*E,z=z*w-N*E,D=F,N=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),u=Je(Math.sqrt(D*D+L*L+k*k)),p=Je(Math.sqrt(z*z+tt*tt)),M=ma(N,z),v=Math.abs(M)>2e-4?M*io:0,y=H?1/(H<0?-H:H):0),i.svg&&(F=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!y_(Rn(t,We)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Je(u),i.scaleY=Je(p),i.rotation=Je(_)+a,i.rotationX=Je(m)+a,i.rotationY=Je(g)+a,i.skewX=v+a,i.skewY=b+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[dn]=Hu(c)),i.xOffset=i.yOffset=0,i.force3D=fn.force3D,i.renderTransform=i.svg?cw:g_?S_:lw,i.uncache=0,i},Hu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ap=function(t,e,i){var n=Ri(e);return Je(parseFloat(e)+parseFloat(Sr(t,"x",i+"px",n)))+n},lw=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,S_(t,e)},to="0deg",Zl="0px",eo=") ",S_=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,f=i.skewX,u=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,v=i.target,b=i.zOrigin,y="",S=g==="auto"&&t&&t!==1||g===!0;if(b&&(d!==to||h!==to)){var T=parseFloat(h)*_a,x=Math.sin(T),M=Math.cos(T),w;T=parseFloat(d)*_a,w=Math.cos(T),o=Ap(v,o,x*w*-b),a=Ap(v,a,-Math.sin(T)*-b),l=Ap(v,l,M*w*-b+b)}m!==Zl&&(y+="perspective("+m+eo),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(S||o!==Zl||a!==Zl||l!==Zl)&&(y+=l!==Zl||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+eo),c!==to&&(y+="rotate("+c+eo),h!==to&&(y+="rotateY("+h+eo),d!==to&&(y+="rotateX("+d+eo),(f!==to||u!==to)&&(y+="skew("+f+", "+u+eo),(p!==1||_!==1)&&(y+="scale("+p+", "+_+eo),v.style[We]=y||"translate(0, 0)"},cw=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,f=i.scaleY,u=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,v=i.forceCSS,b=parseFloat(o),y=parseFloat(a),S,T,x,M,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=_a,c*=_a,S=Math.cos(l)*d,T=Math.sin(l)*d,x=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=_a,w=Math.tan(c-h),w=Math.sqrt(1+w*w),x*=w,M*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),S*=w,T*=w)),S=Je(S),T=Je(T),x=Je(x),M=Je(M)):(S=d,M=f,T=x=0),(b&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=Sr(u,"x",o,"px"),y=Sr(u,"y",a,"px")),(p||_||m||g)&&(b=Je(b+p-(p*S+_*x)+m),y=Je(y+_-(p*T+_*M)+g)),(n||r)&&(w=u.getBBox(),b=Je(b+n/100*w.width),y=Je(y+r/100*w.height)),w="matrix("+S+","+T+","+x+","+M+","+b+","+y+")",u.setAttribute("transform",w),v&&(u.style[We]=w)},hw=function(t,e,i,n,r){var o=360,a=_i(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?io:1),c=l-n,h=n+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*s_)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*s_)%o-~~(c/o)*o)),t._pt=f=new Qi(t._pt,e,i,n,c,qE),f.e=h,f.u="deg",t._props.push(i),f},u_=function(t,e){for(var i in e)t[i]=e[i];return t},uw=function(t,e,i){var n=u_({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,f,u,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[We]=e,a=$l(i,1),yr(i,We),i.setAttribute("transform",c)):(c=getComputedStyle(i)[We],o[We]=e,a=$l(i,1),o[We]=c);for(l in Gs)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Ri(c),p=Ri(h),d=u!==p?Sr(i,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new Qi(t._pt,a,l,d,f-d,Rp),t._pt.u=p||0,t._props.push(l));u_(a,n)};Ki("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});ku[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(p){return Hs(a,p,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(p,_){return u[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var Op={name:"css",register:Pp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,f,u,p,_,m,g,v,b,y,S,T,x,M,w;Lp||Pp(),this.styles=this.styles||m_(t),M=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(cn[_]&&Sp(_,e,i,n,t,r)))){if(u=typeof h,p=ku[_],u==="function"&&(h=h.call(i,n,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=pa(h)),p)p(this,t,_,h,i)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",zs.lastIndex=0,zs.test(c)||(m=Ri(c),g=Ri(h),g?m!==g&&(c=Sr(t,_,c,g)+g):m&&(h+=m)),this.add(a,"setProperty",c,h,n,r,0,0,_),o.push(_),M.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,t,r):l[_],_i(c)&&~c.indexOf("random(")&&(c=pa(c)),Ri(c+"")||c==="auto"||(c+=fn.units[_]||Ri(Hs(t,_))||""),(c+"").charAt(1)==="="&&(c=Hs(t,_))):c=Hs(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in gs&&(_==="autoAlpha"&&(f===1&&Hs(t,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,a.visibility),vr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=gs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Gs,b){if(this.styles.save(_),w=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=Rn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=h,h=Rn(t,"perspective"),E?t.style.perspective=E:yr(t,"perspective")}d=parseFloat(h)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||$l(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Qi(this._pt,a,We,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Qi(this._pt,S,"scaleY",S.scaleY,(v?Qr(S.scaleY,v+d):d)-S.scaleY||0,Rp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){M.push(dn,0,a[dn]),h=ow(h),S.svg?Ip(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&vr(this,S,"zOrigin",S.zOrigin,g),vr(this,a,_,Hu(c),Hu(h)));continue}else if(_==="svgOrigin"){Ip(t,h,1,T,0,this);continue}else if(_ in v_){hw(this,S,_,f,v?Qr(f,v+h):h);continue}else if(_==="smoothOrigin"){vr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){uw(this,h,t);continue}}else _ in a||(_=xa(_)||_);if(b||(d||d===0)&&(f||f===0)&&!XE.test(h)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),g=Ri(h)||(_ in fn.units?fn.units[_]:m),m!==g&&(f=Sr(t,_,c,g)),this._pt=new Qi(this._pt,b?S:a,_,f,(v?Qr(f,v+d):d)-f,!b&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?JE:Rp),this._pt.u=g||0,b&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=ZE):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=YE);else if(_ in a)rw.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,n,r);else if(_!=="parseTransform"){Uu(_,h);continue}b||(_ in a?M.push(_,0,a[_]):typeof t[_]=="function"?M.push(_,2,t[_]()):M.push(_,1,c||t[_])),o.push(_)}}x&&wp(this)},render:function(t,e){if(e.tween._time||!Dp())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Hs,aliases:gs,getSetter:function(t,e,i){var n=gs[e];return n&&n.indexOf(",")<0&&(e=n),e in Gs&&e!==dn&&(t._gsap.x||Hs(t,"x"))?i&&n_===i?e==="scale"?jE:QE:(n_=i||{})&&(e==="scale"?tw:ew):t.style&&!Nu(t.style[e])?$E:~e.indexOf("-")?KE:zu(t,e)},core:{_removeProperty:yr,_getMatrix:Up}};Hi.utils.checkPrefix=xa;Hi.core.getStyleSaver=m_;(function(s,t,e,i){var n=Ki(s+","+t+","+e,function(r){Gs[r]=1});Ki(t,function(r){fn.units[r]="deg",v_[r]=1}),gs[n[13]]=s+","+t,Ki(i,function(r){var o=r.split(":");gs[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ki("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fn.units[s]="px"});Hi.registerPlugin(Op);var Gi=Hi.registerPlugin(Op)||Hi,YC=Gi.core.Tween;function M_(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function fw(s,t,e){return t&&M_(s.prototype,t),e&&M_(s,e),s}var Ci,Wu,dw,pn,Mr,br,ya,T_,so,Sa,E_,Vs,is,w_,A_=function(){return Ci||typeof window<"u"&&(Ci=window.gsap)&&Ci.registerPlugin&&Ci},R_=1,va=[],jt=[],ns=[],Ql=Date.now,Fp=function(t,e){return e},pw=function(){var t=Sa.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,jt),n.push.apply(n,ns),jt=i,ns=n,Fp=function(o,a){return e[o](a)}},Xs=function(t,e){return~ns.indexOf(t)&&ns[ns.indexOf(t)+1][e]},jl=function(t){return!!~E_.indexOf(t)},tn=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:n!==!1,capture:!!r})},ji=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Gu="scrollLeft",Vu="scrollTop",Bp=function(){return Vs&&Vs.isPressed||jt.cache++},Xu=function(t,e){var i=function n(r){if(r||r===0){R_&&pn.history.scrollRestoration!=="manual"&&(pn.history.scrollRestoration="manual");var o=Vs&&Vs.isPressed;r=n.v=Math.round(r)||(Vs&&Vs.iOS?1:0),t(r),n.cacheID=jt.cache,o&&Fp("ss",r)}else(e||jt.cache!==n.cacheID||Fp("ref"))&&(n.cacheID=jt.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Vi={s:Gu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xu(function(s){return arguments.length?pn.scrollTo(s,oi.sc()):pn.pageXOffset||Mr[Gu]||br[Gu]||ya[Gu]||0})},oi={s:Vu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vi,sc:Xu(function(s){return arguments.length?pn.scrollTo(Vi.sc(),s):pn.pageYOffset||Mr[Vu]||br[Vu]||ya[Vu]||0})},en=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ci.utils.toArray)(t)[0]||(typeof t=="string"&&Ci.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},mw=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},Ws=function(t,e){var i=e.s,n=e.sc;jl(t)&&(t=Mr.scrollingElement||br);var r=jt.indexOf(t),o=n===oi.sc?1:2;!~r&&(r=jt.push(t)-1),jt[r+o]||tn(t,"scroll",Bp);var a=jt[r+o],l=a||(jt[r+o]=Xu(Xs(t,i),!0)||(jl(t)?n:Xu(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Ci.getProperty(t,"scrollBehavior")==="smooth"),l},qu=function(t,e,i){var n=t,r=t,o=Ql(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=Ql();_||m-o>l?(r=n,n=p,a=o,o=m):i?n+=p:n=r+(p-r)/(m-a)*(o-a)},d=function(){r=n=i?0:n,a=o=0},f=function(p){var _=a,m=r,g=Ql();return(p||p===0)&&p!==n&&h(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},Kl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},b_=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},C_=function(){Sa=Ci.core.globals().ScrollTrigger,Sa&&Sa.core&&pw()},P_=function(t){return Ci=t||A_(),!Wu&&Ci&&typeof document<"u"&&document.body&&(pn=window,Mr=document,br=Mr.documentElement,ya=Mr.body,E_=[pn,Mr,br,ya],dw=Ci.utils.clamp,w_=Ci.core.context||function(){},so="onpointerenter"in ya?"pointer":"mouse",T_=$e.isTouch=pn.matchMedia&&pn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,is=$e.eventTypes=("ontouchstart"in br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return R_=0},500),Wu=1),Sa||C_(),Wu};Vi.op=oi;jt.cache=0;var $e=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){Wu||P_(Ci)||console.warn("Please gsap.registerPlugin(Observer)"),Sa||C_();var n=i.tolerance,r=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,f=i.onStopDelay,u=i.ignore,p=i.wheelSpeed,_=i.event,m=i.onDragStart,g=i.onDragEnd,v=i.onDrag,b=i.onPress,y=i.onRelease,S=i.onRight,T=i.onLeft,x=i.onUp,M=i.onDown,w=i.onChangeX,E=i.onChangeY,D=i.onChange,L=i.onToggleX,k=i.onToggleY,P=i.onHover,N=i.onHoverEnd,z=i.onMove,F=i.ignoreCheck,Y=i.isNormalizer,V=i.onGestureStart,C=i.onGestureEnd,J=i.onWheel,ft=i.onEnable,it=i.onDisable,H=i.onClick,tt=i.scrollSpeed,ct=i.capture,pt=i.allowClicks,Q=i.lockAxis,lt=i.onLockAxis;this.target=a=en(a)||br,this.vars=i,u&&(u=Ci.utils.toArray(u)),n=n||1e-9,r=r||0,p=p||1,tt=tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(pn.getComputedStyle(ya).lineHeight)||22);var Wt,Et,qt,It,zt,le,ne,$=this,$t=0,Xe=0,Se=i.passive||!h&&i.passive!==!1,oe=Ws(a,Vi),Te=Ws(a,oi),we=oe(),G=Te(),Kt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&is[0]==="pointerdown",ue=jl(a),Ht=a.ownerDocument||Mr,_t=[0,0,0],ge=[0,0,0],Bt=0,Gt=function(){return Bt=Ql()},I=function(yt,at){return($.event=yt)&&u&&mw(yt.target,u)||at&&Kt&&yt.pointerType!=="touch"||F&&F(yt,at)},A=function(){$._vx.reset(),$._vy.reset(),Et.pause(),d&&d($)},X=function(){var yt=$.deltaX=b_(_t),at=$.deltaY=b_(ge),st=Math.abs(yt)>=n,Mt=Math.abs(at)>=n;D&&(st||Mt)&&D($,yt,at,_t,ge),st&&(S&&$.deltaX>0&&S($),T&&$.deltaX<0&&T($),w&&w($),L&&$.deltaX<0!=$t<0&&L($),$t=$.deltaX,_t[0]=_t[1]=_t[2]=0),Mt&&(M&&$.deltaY>0&&M($),x&&$.deltaY<0&&x($),E&&E($),k&&$.deltaY<0!=Xe<0&&k($),Xe=$.deltaY,ge[0]=ge[1]=ge[2]=0),(It||qt)&&(z&&z($),qt&&(m&&qt===1&&m($),v&&v($),qt=0),It=!1),le&&!(le=!1)&&lt&&lt($),zt&&(J($),zt=!1),Wt=0},ht=function(yt,at,st){_t[st]+=yt,ge[st]+=at,$._vx.update(yt),$._vy.update(at),c?Wt||(Wt=requestAnimationFrame(X)):X()},ot=function(yt,at){Q&&!ne&&($.axis=ne=Math.abs(yt)>Math.abs(at)?"x":"y",le=!0),ne!=="y"&&(_t[2]+=yt,$._vx.update(yt,!0)),ne!=="x"&&(ge[2]+=at,$._vy.update(at,!0)),c?Wt||(Wt=requestAnimationFrame(X)):X()},gt=function(yt){if(!I(yt,1)){yt=Kl(yt,h);var at=yt.clientX,st=yt.clientY,Mt=at-$.x,rt=st-$.y,Rt=$.isDragging;$.x=at,$.y=st,(Rt||(Mt||rt)&&(Math.abs($.startX-at)>=r||Math.abs($.startY-st)>=r))&&(qt||(qt=Rt?2:1),Rt||($.isDragging=!0),ot(Mt,rt))}},St=$.onPress=function(ut){I(ut,1)||ut&&ut.button||($.axis=ne=null,Et.pause(),$.isPressed=!0,ut=Kl(ut),$t=Xe=0,$.startX=$.x=ut.clientX,$.startY=$.y=ut.clientY,$._vx.reset(),$._vy.reset(),tn(Y?a:Ht,is[1],gt,Se,!0),$.deltaX=$.deltaY=0,b&&b($))},q=$.onRelease=function(ut){if(!I(ut,1)){ji(Y?a:Ht,is[1],gt,!0);var yt=!isNaN($.y-$.startY),at=$.isDragging,st=at&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),Mt=Kl(ut);!st&&yt&&($._vx.reset(),$._vy.reset(),h&&pt&&Ci.delayedCall(.08,function(){if(Ql()-Bt>300&&!ut.defaultPrevented){if(ut.target.click)ut.target.click();else if(Ht.createEvent){var rt=Ht.createEvent("MouseEvents");rt.initMouseEvent("click",!0,!0,pn,1,Mt.screenX,Mt.screenY,Mt.clientX,Mt.clientY,!1,!1,!1,!1,0,null),ut.target.dispatchEvent(rt)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&at&&!Y&&Et.restart(!0),qt&&X(),g&&at&&g($),y&&y($,st)}},nt=function(yt){return yt.touches&&yt.touches.length>1&&($.isGesturing=!0)&&V(yt,$.isDragging)},mt=function(){return($.isGesturing=!1)||C($)},U=function(yt){if(!I(yt)){var at=oe(),st=Te();ht((at-we)*tt,(st-G)*tt,1),we=at,G=st,d&&Et.restart(!0)}},et=function(yt){if(!I(yt)){yt=Kl(yt,h),J&&(zt=!0);var at=(yt.deltaMode===1?l:yt.deltaMode===2?pn.innerHeight:1)*p;ht(yt.deltaX*at,yt.deltaY*at,0),d&&!Y&&Et.restart(!0)}},j=function(yt){if(!I(yt)){var at=yt.clientX,st=yt.clientY,Mt=at-$.x,rt=st-$.y;$.x=at,$.y=st,It=!0,d&&Et.restart(!0),(Mt||rt)&&ot(Mt,rt)}},xt=function(yt){$.event=yt,P($)},dt=function(yt){$.event=yt,N($)},vt=function(yt){return I(yt)||Kl(yt,h)&&H($)};Et=$._dc=Ci.delayedCall(f||.25,A).pause(),$.deltaX=$.deltaY=0,$._vx=qu(0,50,!0),$._vy=qu(0,50,!0),$.scrollX=oe,$.scrollY=Te,$.isDragging=$.isGesturing=$.isPressed=!1,w_(this),$.enable=function(ut){return $.isEnabled||(tn(ue?Ht:a,"scroll",Bp),o.indexOf("scroll")>=0&&tn(ue?Ht:a,"scroll",U,Se,ct),o.indexOf("wheel")>=0&&tn(a,"wheel",et,Se,ct),(o.indexOf("touch")>=0&&T_||o.indexOf("pointer")>=0)&&(tn(a,is[0],St,Se,ct),tn(Ht,is[2],q),tn(Ht,is[3],q),pt&&tn(a,"click",Gt,!0,!0),H&&tn(a,"click",vt),V&&tn(Ht,"gesturestart",nt),C&&tn(Ht,"gestureend",mt),P&&tn(a,so+"enter",xt),N&&tn(a,so+"leave",dt),z&&tn(a,so+"move",j)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=It=qt=!1,$._vx.reset(),$._vy.reset(),we=oe(),G=Te(),ut&&ut.type&&St(ut),ft&&ft($)),$},$.disable=function(){$.isEnabled&&(va.filter(function(ut){return ut!==$&&jl(ut.target)}).length||ji(ue?Ht:a,"scroll",Bp),$.isPressed&&($._vx.reset(),$._vy.reset(),ji(Y?a:Ht,is[1],gt,!0)),ji(ue?Ht:a,"scroll",U,ct),ji(a,"wheel",et,ct),ji(a,is[0],St,ct),ji(Ht,is[2],q),ji(Ht,is[3],q),ji(a,"click",Gt,!0),ji(a,"click",vt),ji(Ht,"gesturestart",nt),ji(Ht,"gestureend",mt),ji(a,so+"enter",xt),ji(a,so+"leave",dt),ji(a,so+"move",j),$.isEnabled=$.isPressed=$.isDragging=!1,it&&it($))},$.kill=$.revert=function(){$.disable();var ut=va.indexOf($);ut>=0&&va.splice(ut,1),Vs===$&&(Vs=0)},va.push($),Y&&jl(a)&&(Vs=$),$.enable(_)},fw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();$e.version="3.15.1";$e.create=function(s){return new $e(s)};$e.register=P_;$e.getAll=function(){return va.slice()};$e.getById=function(s){return va.filter(function(t){return t.vars.id===s})[0]};A_()&&Ci.registerPlugin($e);var Lt,Ea,ee,Me,In,ye,Qp,cf,fc,oc,ec,Yu,Wi,ff,Xp,sn,I_,L_,wa,Z_,zp,J_,nn,qp,$_,K_,Tr,Yp,jp,Aa,tm,Er,Zp,kp,Zu=1,Xi=Date.now,Hp=Xi(),Vn=0,ic=0,D_=function(t,e,i){var n=Pn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},N_=function(t,e){return e&&(!Pn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},gw=function s(){return ic&&requestAnimationFrame(s)},U_=function(){return ff=1},O_=function(){return ff=0},_s=function(t){return t},nc=function(t){return Math.round(t*1e5)/1e5||0},Q_=function(){return typeof window<"u"},j_=function(){return Lt||Q_()&&(Lt=window.gsap)&&Lt.registerPlugin&&Lt},ho=function(t){return!!~Qp.indexOf(t)},tx=function(t){return(t==="Height"?tm:ee["inner"+t])||In["client"+t]||ye["client"+t]},ex=function(t){return Xs(t,"getBoundingClientRect")||(ho(t)?function(){return lf.width=ee.innerWidth,lf.height=tm,lf}:function(){return qs(t)})},_w=function(t,e,i){var n=i.d,r=i.d2,o=i.a;return(o=Xs(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?tx(r):t["client"+r])||0}},xw=function(t,e){return!e||~ns.indexOf(t)?ex(t):function(){return lf}},xs=function(t,e){var i=e.s,n=e.d2,r=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=Xs(t,i))?o()-ex(t)()[r]:ho(t)?(In[i]||ye[i])-tx(n):t[i]-t["offset"+n])},Ju=function(t,e){for(var i=0;i<wa.length;i+=3)(!e||~e.indexOf(wa[i+1]))&&t(wa[i],wa[i+1],wa[i+2])},Pn=function(t){return typeof t=="string"},qi=function(t){return typeof t=="function"},sc=function(t){return typeof t=="number"},ro=function(t){return typeof t=="object"},tc=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Ma=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},ba=Math.abs,ix="left",nx="top",em="right",im="bottom",ao="width",lo="height",ac="Right",lc="Left",cc="Top",hc="Bottom",ai="padding",Hn="margin",Ca="Width",nm="Height",xi="px",Gn=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},vw=function(t){var e=Gn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},F_=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},qs=function(t,e){var i=e&&Gn(t)[Xp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},hf=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},sx=function(t){var e=[],i=t.labels,n=t.duration(),r;for(r in i)e.push(i[r]/n);return e},yw=function(t){return function(e){return Lt.utils.snap(sx(t),e)}},sm=function(t){var e=Lt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,r){return n-r});return i?function(n,r,o){o===void 0&&(o=.001);var a;if(!r)return e(n);if(r>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,r,o){o===void 0&&(o=.001);var a=e(n);return!r||Math.abs(a-n)<o||a-n<0==r<0?a:e(r<0?n-t:n+t)}},Sw=function(t){return function(e,i){return sm(sx(t))(e,i.direction)}},$u=function(t,e,i,n){return i.split(",").forEach(function(r){return t(e,r,n)})},Ti=function(t,e,i,n,r){return t.addEventListener(e,i,{passive:!n,capture:!!r})},bi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Ku=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},B_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qu={toggleActions:"play",anticipatePin:0},uf={top:0,left:0,center:.5,bottom:1,right:1},sf=function(t,e){if(Pn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in uf?uf[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ju=function(t,e,i,n,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,p=Me.createElement("div"),_=ho(i)||Xs(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?ye:i.tagName==="IFRAME"?i.contentDocument.body:i,v=t.indexOf("start")!==-1,b=v?c:h,y="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(n===oi?em:im)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],rf(p,0,n,v),p},rf=function(t,e,i,n){var r={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,r[i.a+"Percent"]=n?-100:0,r[i.a]=n?"1px":0,r["border"+o+Ca]=1,r["border"+a+Ca]=0,r[i.p]=e+"px",Lt.set(t,r)},te=[],Jp={},dc,z_=function(){return Xi()-Vn>34&&(dc||(dc=requestAnimationFrame(Ys)))},Ta=function(){(!nn||!nn.isPressed||nn.startX>ye.clientWidth)&&(jt.cache++,nn?dc||(dc=requestAnimationFrame(Ys)):Ys(),Vn||fo("scrollStart"),Vn=Xi())},Gp=function(){K_=ee.innerWidth,$_=ee.innerHeight},rc=function(t){jt.cache++,(t===!0||!Wi&&!J_&&!Me.fullscreenElement&&!Me.webkitFullscreenElement&&(!qp||K_!==ee.innerWidth||Math.abs(ee.innerHeight-$_)>ee.innerHeight*.25))&&cf.restart(!0)},uo={},Mw=[],rx=function s(){return bi(ie,"scrollEnd",s)||oo(!0)},fo=function(t){return uo[t]&&uo[t].map(function(e){return e()})||Mw},Cn=[],ox=function(t){for(var e=0;e<Cn.length;e+=5)(!t||Cn[e+4]&&Cn[e+4].query===t)&&(Cn[e].style.cssText=Cn[e+1],Cn[e].getBBox&&Cn[e].setAttribute("transform",Cn[e+2]||""),Cn[e+3].uncache=1)},ax=function(){jt.cache++,jt.forEach(function(t){return qi(t)&&(t.rec=t())})},rm=function(t,e){var i;for(sn=0;sn<te.length;sn++)i=te[sn],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Er=!0,e&&ox(e),e||fo("revert")},lx=function(t,e){jt.cache++,(e||!rn)&&jt.forEach(function(i){return qi(i)&&i.cacheID++&&(i.rec=0)}),Pn(t)&&(jp=t,ee.history.scrollRestoration!==t&&(ee.history.scrollRestoration=t))},rn,co=0,k_,bw=function(){if(k_!==co){var t=k_=co;requestAnimationFrame(function(){return t===co&&oo(!0)})}},cx=function(){ye.appendChild(Aa),tm=!nn&&Aa.offsetHeight||ee.innerHeight,ye.removeChild(Aa)},H_=function(t){return fc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},oo=function(t,e){if(In=Me.documentElement,ye=Me.body,Qp=[ee,Me,In,ye],Vn&&!t&&!Er){Ti(ie,"scrollEnd",rx);return}cx(),rn=ie.isRefreshing=!0,Er||ax();var i=fo("refreshInit");Z_&&ie.sort(),e||rm(),jt.forEach(function(n){qi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),te.slice(0).forEach(function(n){return n.refresh()}),Er=!1,te.forEach(function(n){if(n._subPinOffset&&n.pin){var r=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[r];n.revert(!0,1),n.adjustPinSpacing(n.pin[r]-o),n.refresh()}}),Zp=1,H_(!0),te.forEach(function(n){var r=xs(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>r,a=n._startClamp&&n.start>=r;(o||a)&&n.setPositions(a?r-1:n.start,o?Math.max(a?r:n.start+1,r):n.end,!0)}),H_(!1),Zp=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),jt.forEach(function(n){qi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),lx(jp,1),cf.pause(),co++,rn=2,Ys(2),te.forEach(function(n){return qi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),rn=ie.isRefreshing=!1,fo("refresh")},$p=0,of=1,uc,Ys=function(t){if(t===2||!rn&&!Er){ie.isUpdating=!0,uc&&uc.update(0);var e=te.length,i=Xi(),n=i-Hp>=50,r=e&&te[0].scroll();if(of=$p>r?-1:1,rn||($p=r),n&&(Vn&&!ff&&i-Vn>200&&(Vn=0,fo("scrollEnd")),ec=Hp,Hp=i),of<0){for(sn=e;sn-- >0;)te[sn]&&te[sn].update(0,n);of=1}else for(sn=0;sn<e;sn++)te[sn]&&te[sn].update(0,n);ie.isUpdating=!1}dc=0},Kp=[ix,nx,im,em,Hn+hc,Hn+ac,Hn+cc,Hn+lc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],af=Kp.concat([ao,lo,"boxSizing","max"+Ca,"max"+nm,"position",Hn,ai,ai+cc,ai+ac,ai+hc,ai+lc]),Tw=function(t,e,i){Ra(i);var n=t._gsap;if(n.spacerIsNative)Ra(n.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Vp=function(t,e,i,n){if(!t._gsap.swappedIn){for(var r=Kp.length,o=e.style,a=t.style,l;r--;)l=Kp[r],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[im]=a[em]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ao]=hf(t,Vi)+xi,o[lo]=hf(t,oi)+xi,o[ai]=a[Hn]=a[nx]=a[ix]="0",Ra(n),a[ao]=a["max"+Ca]=i[ao],a[lo]=a["max"+nm]=i[lo],a[ai]=i[ai],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ew=/([A-Z])/g,Ra=function(t){if(t){var e=t.t.style,i=t.length,n=0,r,o;for((t.t._gsap||Lt.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],r=t[n],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Ew,"-$1").toLowerCase())}},tf=function(t){for(var e=af.length,i=t.style,n=[],r=0;r<e;r++)n.push(af[r],i[af[r]]);return n.t=t,n},ww=function(t,e,i){for(var n=[],r=t.length,o=i?8:0,a;o<r;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},lf={left:0,top:0},G_=function(t,e,i,n,r,o,a,l,c,h,d,f,u,p){qi(t)&&(t=t(l)),Pn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?sf("0"+t.substr(3),i):0));var _=u?u.time():0,m,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),sc(t))u&&(t=Lt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&rf(a,i,n,!0);else{qi(e)&&(e=e(l));var b=(t||"0").split(" "),y,S,T,x;v=en(e,l)||ye,y=qs(v)||{},(!y||!y.left&&!y.top)&&Gn(v).display==="none"&&(x=v.style.display,v.style.display="block",y=qs(v),x?v.style.display=x:v.style.removeProperty("display")),S=sf(b[0],y[n.d]),T=sf(b[1]||"0",i),t=y[n.p]-c[n.p]-h+S+r-T,a&&rf(a,T,n,i-T<20||a._isStart&&T>20),i-=i-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var M=t+i,w=o._isStart;m="scroll"+n.d2,rf(o,M,n,w&&M>20||!w&&(d?Math.max(ye[m],In[m]):o.parentNode[m])<=M+1),d&&(c=qs(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+xi))}return u&&v&&(m=qs(v),u.seek(f),g=qs(v),u._caScrollDist=m[n.p]-g[n.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},Aw=/(webkit|moz|length|cssText|inset)/i,V_=function(t,e,i,n){if(t.parentNode!==e){var r=t.style,o,a;if(e===ye){t._stOrig=r.cssText,a=Gn(t);for(o in a)!+o&&!Aw.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=i,r.left=n}else r.cssText=t._stOrig;Lt.core.getCache(t).uncache=1,e.appendChild(t)}},hx=function(t,e,i){var n=e,r=n;return function(o){var a=Math.round(t());return a!==n&&a!==r&&Math.abs(a-n)>3&&Math.abs(a-r)>3&&(o=a,i&&i()),r=n,n=Math.round(o),n}},ef=function(t,e,i){var n={};n[e.p]="+="+i,Lt.set(t,n)},W_=function(t,e){var i=Ws(t,e),n="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,p={};c=c||i();var _=hx(i,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){jt.cache++,o.tween&&Ys()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Lt.to(t,l),f};return t[n]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ti(t,"wheel",i.wheelHandler),ie.isTouch&&Ti(t,"touchmove",i.wheelHandler),r},ie=(function(){function s(e,i){Ea||s.register(Lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yp(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ic){this.update=this.refresh=this.kill=_s;return}i=F_(Pn(i)||sc(i)||i.nodeType?{trigger:i}:i,Qu);var r=i,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,b=r.once,y=r.snap,S=r.pinReparent,T=r.pinSpacer,x=r.containerAnimation,M=r.fastScrollEnd,w=r.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Vi:oi,D=!d&&d!==0,L=en(i.scroller||ee),k=Lt.core.getCache(L),P=ho(L),N=("pinType"in i?i.pinType:Xs(L,"pinType")||P&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],F=D&&i.toggleActions.split(" "),Y="markers"in i?i.markers:Qu.markers,V=P?0:parseFloat(Gn(L)["border"+E.p2+Ca])||0,C=this,J=i.onRefreshInit&&function(){return i.onRefreshInit(C)},ft=_w(L,P,E),it=xw(L,P),H=0,tt=0,ct=0,pt=Ws(L,E),Q,lt,Wt,Et,qt,It,zt,le,ne,$,$t,Xe,Se,oe,Te,we,G,Kt,ue,Ht,_t,ge,Bt,Gt,I,A,X,ht,ot,gt,St,q,nt,mt,U,et,j,xt,dt;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=L,C.scroll=x?x.time.bind(x):pt,Et=pt(),Er&&pt.rec==null&&(pt.rec=Et),C.vars=i,n=n||i.animation,"refreshPriority"in i&&(Z_=1,i.refreshPriority===-9999&&(uc=C)),k.tweenScroll=k.tweenScroll||{top:W_(L,oi),left:W_(L,Vi)},C.tweenTo=Q=k.tweenScroll[E.p],C.scrubDuration=function(st){nt=sc(st)&&st,nt?q?q.duration(st):q=Lt.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nt,paused:!0,onComplete:function(){return g&&g(C)}}):(q&&q.progress(1).kill(),q=0)},n&&(n.vars.lazy=!1,n._initted&&!C.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),C.animation=n.pause(),n.scrollTrigger=C,C.scrubDuration(d),gt=0,l||(l=n.vars.id)),y&&((!ro(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ye.style&&Lt.set(P?[ye,In]:L,{scrollBehavior:"auto"}),jt.forEach(function(st){return qi(st)&&st.target===(P?Me.scrollingElement||In:L)&&(st.smooth=!1)}),Wt=qi(y.snapTo)?y.snapTo:y.snapTo==="labels"?yw(n):y.snapTo==="labelsDirectional"?Sw(n):y.directional!==!1?function(st,Mt){return sm(y.snapTo)(st,Xi()-tt<500?0:Mt.direction)}:Lt.utils.snap(y.snapTo),mt=y.duration||{min:.1,max:2},mt=ro(mt)?oc(mt.min,mt.max):oc(mt,mt),U=Lt.delayedCall(y.delay||nt/2||.1,function(){var st=pt(),Mt=Xi()-tt<500,rt=Q.tween;if((Mt||Math.abs(C.getVelocity())<10)&&!rt&&!ff&&H!==st){var Rt=(st-It)/oe,ae=n&&!D?n.totalProgress():Rt,Zt=Mt?0:(ae-St)/(Xi()-ec)*1e3||0,Oe=Lt.utils.clamp(-Rt,1-Rt,ba(Zt/2)*Zt/.185),ei=Rt+(y.inertia===!1?0:Oe),Fe,Ae,ve=y,ci=ve.onStart,Re=ve.onInterrupt,Pi=ve.onComplete;if(Fe=Wt(ei,C),sc(Fe)||(Fe=ei),Ae=Math.max(0,Math.round(It+Fe*oe)),st<=zt&&st>=It&&Ae!==st){if(rt&&!rt._initted&&rt.data<=ba(Ae-st))return;y.inertia===!1&&(Oe=Fe-Rt),Q(Ae,{duration:mt(ba(Math.max(ba(ei-ae),ba(Fe-ae))*.185/Zt/.05||0)),ease:y.ease||"power3",data:ba(Ae-st),onInterrupt:function(){return U.restart(!0)&&Re&&Ma(C,Re)},onComplete:function(){C.update(),H=pt(),n&&!D&&(q?q.resetTo("totalProgress",Fe,n._tTime/n._tDur):n.progress(Fe)),gt=St=n&&!D?n.totalProgress():C.progress,v&&v(C),Pi&&Ma(C,Pi)}},st,Oe*oe,Ae-st-Oe*oe),ci&&Ma(C,ci,Q.tween)}}else C.isActive&&H!==st&&U.restart(!0)}).pause()),l&&(Jp[l]=C),f=C.trigger=en(f||u!==!0&&u),dt=f&&f._gsap&&f._gsap.stRevert,dt&&(dt=dt(C)),u=u===!0?f:en(u),Pn(a)&&(a={targets:f,className:a}),u&&(p===!1||p===Hn||(p=!p&&u.parentNode&&u.parentNode.style&&Gn(u.parentNode).display==="flex"?!1:ai),C.pin=u,lt=Lt.core.getCache(u),lt.spacer?Te=lt.pinState:(T&&(T=en(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),lt.spacerIsNative=!!T,T&&(lt.spacerState=tf(T))),lt.spacer=Kt=T||Me.createElement("div"),Kt.classList.add("pin-spacer"),l&&Kt.classList.add("pin-spacer-"+l),lt.pinState=Te=tf(u)),i.force3D!==!1&&Lt.set(u,{force3D:!0}),C.spacer=Kt=lt.spacer,ot=Gn(u),Gt=ot[p+E.os2],Ht=Lt.getProperty(u),_t=Lt.quickSetter(u,E.a,xi),Vp(u,Kt,ot),G=tf(u)),Y){Xe=ro(Y)?F_(Y,B_):B_,$=ju("scroller-start",l,L,E,Xe,0),$t=ju("scroller-end",l,L,E,Xe,0,$),ue=$["offset"+E.op.d2];var vt=en(Xs(L,"content")||L);le=this.markerStart=ju("start",l,vt,E,Xe,ue,0,x),ne=this.markerEnd=ju("end",l,vt,E,Xe,ue,0,x),x&&(xt=Lt.quickSetter([le,ne],E.a,xi)),!N&&!(ns.length&&Xs(L,"fixedMarkers")===!0)&&(vw(P?ye:L),Lt.set([$,$t],{force3D:!0}),A=Lt.quickSetter($,E.a,xi),ht=Lt.quickSetter($t,E.a,xi))}if(x){var ut=x.vars.onUpdate,yt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){C.update(0,0,1),ut&&ut.apply(x,yt||[])})}if(C.previous=function(){return te[te.indexOf(C)-1]},C.next=function(){return te[te.indexOf(C)+1]},C.revert=function(st,Mt){if(!Mt)return C.kill(!0);var rt=st!==!1||!C.enabled,Rt=Wi;rt!==C.isReverted&&(rt&&(et=Math.max(pt(),C.scroll.rec||0),ct=C.progress,j=n&&n.progress()),le&&[le,ne,$,$t].forEach(function(ae){return ae.style.display=rt?"none":"block"}),rt&&(Wi=C,C.update(rt)),u&&(!S||!C.isActive)&&(rt?Tw(u,Kt,Te):Vp(u,Kt,Gn(u),I)),rt||C.update(rt),Wi=Rt,C.isReverted=rt)},C.refresh=function(st,Mt,rt,Rt){if(!((Wi||!C.enabled)&&!Mt)){if(u&&st&&Vn){Ti(s,"scrollEnd",rx);return}!rn&&J&&J(C),Wi=C,Q.tween&&!rt&&(Q.tween.kill(),Q.tween=0),q&&q.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(W){return W.vars.immediateRender&&W.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var ae=ft(),Zt=it(),Oe=x?x.duration():xs(L,E),ei=oe<=.01||!oe,Fe=0,Ae=Rt||0,ve=ro(rt)?rt.end:i.end,ci=i.endTrigger||f,Re=ro(rt)?rt.start:i.start||(i.start===0||!f?0:u?"0 0":"0 100%"),Pi=C.pinnedContainer=i.pinnedContainer&&en(i.pinnedContainer,C),_n=f&&Math.max(0,te.indexOf(C))||0,qe=_n,ii,hi,xn,mo,ui,Ye,Ln,Ia,yc,$s,R,B,K;for(Y&&ro(rt)&&(B=Lt.getProperty($,E.p),K=Lt.getProperty($t,E.p));qe-- >0;)Ye=te[qe],Ye.end||Ye.refresh(0,1)||(Wi=C),Ln=Ye.pin,Ln&&(Ln===f||Ln===u||Ln===Pi)&&!Ye.isReverted&&($s||($s=[]),$s.unshift(Ye),Ye.revert(!0,!0)),Ye!==te[qe]&&(_n--,qe--);for(qi(Re)&&(Re=Re(C)),Re=D_(Re,"start",C),It=G_(Re,f,ae,E,pt(),le,$,C,Zt,V,N,Oe,x,C._startClamp&&"_startClamp")||(u?-.001:0),qi(ve)&&(ve=ve(C)),Pn(ve)&&!ve.indexOf("+=")&&(~ve.indexOf(" ")?ve=(Pn(Re)?Re.split(" ")[0]:"")+ve:(Fe=sf(ve.substr(2),ae),ve=Pn(Re)?Re:(x?Lt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,It):It)+Fe,ci=f)),ve=D_(ve,"end",C),zt=Math.max(It,G_(ve||(ci?"100% 0":Oe),ci,ae,E,pt()+Fe,ne,$t,C,Zt,V,N,Oe,x,C._endClamp&&"_endClamp"))||-.001,Fe=0,qe=_n;qe--;)Ye=te[qe]||{},Ln=Ye.pin,Ln&&Ye.start-Ye._pinPush<=It&&!x&&Ye.end>0&&(ii=Ye.end-(C._startClamp?Math.max(0,Ye.start):Ye.start),(Ln===f&&Ye.start-Ye._pinPush<It||Ln===Pi)&&isNaN(Re)&&(Fe+=ii*(1-Ye.progress)),Ln===u&&(Ae+=ii));if(It+=Fe,zt+=Fe,C._startClamp&&(C._startClamp+=Fe),C._endClamp&&!rn&&(C._endClamp=zt||-.001,zt=Math.min(zt,xs(L,E))),oe=zt-It||(It-=.01)&&.001,ei&&(ct=Lt.utils.clamp(0,1,Lt.utils.normalize(It,zt,et))),C._pinPush=Ae,le&&Fe&&(ii={},ii[E.a]="+="+Fe,Pi&&(ii[E.p]="-="+pt()),Lt.set([le,ne],ii)),u&&!(Zp&&C.end>=xs(L,E)))ii=Gn(u),mo=E===oi,xn=pt(),ge=parseFloat(Ht(E.a))+Ae,!Oe&&zt>1&&(R=(P?Me.scrollingElement||In:L).style,R={style:R,value:R["overflow"+E.a.toUpperCase()]},P&&Gn(ye)["overflow"+E.a.toUpperCase()]!=="scroll"&&(R.style["overflow"+E.a.toUpperCase()]="scroll")),Vp(u,Kt,ii),G=tf(u),hi=qs(u,!0),Ia=N&&Ws(L,mo?Vi:oi)(),p?(I=[p+E.os2,oe+Ae+xi],I.t=Kt,qe=p===ai?hf(u,E)+oe+Ae:0,qe&&(I.push(E.d,qe+xi),Kt.style.flexBasis!=="auto"&&(Kt.style.flexBasis=qe+xi)),Ra(I),Pi&&te.forEach(function(W){W.pin===Pi&&W.vars.pinSpacing!==!1&&(W._subPinOffset=!0)}),N&&pt(et)):(qe=hf(u,E),qe&&Kt.style.flexBasis!=="auto"&&(Kt.style.flexBasis=qe+xi)),N&&(ui={top:hi.top+(mo?xn-It:Ia)+xi,left:hi.left+(mo?Ia:xn-It)+xi,boxSizing:"border-box",position:"fixed"},ui[ao]=ui["max"+Ca]=Math.ceil(hi.width)+xi,ui[lo]=ui["max"+nm]=Math.ceil(hi.height)+xi,ui[Hn]=ui[Hn+cc]=ui[Hn+ac]=ui[Hn+hc]=ui[Hn+lc]="0",ui[ai]=ii[ai],ui[ai+cc]=ii[ai+cc],ui[ai+ac]=ii[ai+ac],ui[ai+hc]=ii[ai+hc],ui[ai+lc]=ii[ai+lc],we=ww(Te,ui,S),rn&&pt(0)),n?(yc=n._initted,zp(1),n.render(n.duration(),!0,!0),Bt=Ht(E.a)-ge+oe+Ae,X=Math.abs(oe-Bt)>1,N&&X&&we.splice(we.length-2,2),n.render(0,!0,!0),yc||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),zp(0)):Bt=oe,R&&(R.value?R.style["overflow"+E.a.toUpperCase()]=R.value:R.style.removeProperty("overflow-"+E.a));else if(f&&pt()&&!x)for(hi=f.parentNode;hi&&hi!==ye;)hi._pinOffset&&(It-=hi._pinOffset,zt-=hi._pinOffset),hi=hi.parentNode;$s&&$s.forEach(function(W){return W.revert(!1,!0)}),C.start=It,C.end=zt,Et=qt=rn?et:pt(),!x&&!rn&&!Er&&(Et<et&&pt(et),C.scroll.rec=0),C.revert(!1,!0),tt=Xi(),U&&(H=-1,U.restart(!0)),Wi=0,n&&D&&(n._initted||j)&&n.progress()!==j&&n.progress(j||0,!0).render(n.time(),!0,!0),(ei||ct!==C.progress||x||_||n&&!n._initted)&&(n&&!D&&(n._initted||ct||n.vars.immediateRender!==!1)&&n.totalProgress(x&&It<-.001&&!ct?Lt.utils.normalize(It,zt,0):ct,!0),C.progress=ei||(Et-It)/oe===ct?0:ct),u&&p&&(Kt._pinOffset=Math.round(C.progress*Bt)),q&&q.invalidate(),isNaN(B)||(B-=Lt.getProperty($,E.p),K-=Lt.getProperty($t,E.p),ef($,E,B),ef(le,E,B-(Rt||0)),ef($t,E,K),ef(ne,E,K-(Rt||0))),ei&&!rn&&C.update(),h&&!rn&&!Se&&(Se=!0,h(C),Se=!1)}},C.getVelocity=function(){return(pt()-qt)/(Xi()-ec)*1e3||0},C.endAnimation=function(){tc(C.callbackAnimation),n&&(q?q.progress(1):n.paused()?D||tc(n,C.direction<0,1):tc(n,n.reversed()))},C.labelToScroll=function(st){return n&&n.labels&&(It||C.refresh()||It)+n.labels[st]/n.duration()*oe||0},C.getTrailing=function(st){var Mt=te.indexOf(C),rt=C.direction>0?te.slice(0,Mt).reverse():te.slice(Mt+1);return(Pn(st)?rt.filter(function(Rt){return Rt.vars.preventOverlaps===st}):rt).filter(function(Rt){return C.direction>0?Rt.end<=It:Rt.start>=zt})},C.update=function(st,Mt,rt){if(!(x&&!rt&&!st)){var Rt=rn===!0?et:C.scroll(),ae=st?0:(Rt-It)/oe,Zt=ae<0?0:ae>1?1:ae||0,Oe=C.progress,ei,Fe,Ae,ve,ci,Re,Pi,_n;if(Mt&&(qt=Et,Et=x?pt():Rt,y&&(St=gt,gt=n&&!D?n.totalProgress():Zt)),m&&u&&!Wi&&!Zu&&Vn&&(!Zt&&It<Rt+(Rt-qt)/(Xi()-ec)*m?Zt=1e-4:Zt===1&&zt>Rt+(Rt-qt)/(Xi()-ec)*m&&(Zt=.9999)),Zt!==Oe&&C.enabled){if(ei=C.isActive=!!Zt&&Zt<1,Fe=!!Oe&&Oe<1,Re=ei!==Fe,ci=Re||!!Zt!=!!Oe,C.direction=Zt>Oe?1:-1,C.progress=Zt,ci&&!Wi&&(Ae=Zt&&!Oe?0:Zt===1?1:Oe===1?2:3,D&&(ve=!Re&&F[Ae+1]!=="none"&&F[Ae+1]||F[Ae],_n=n&&(ve==="complete"||ve==="reset"||ve in n))),w&&(Re||_n)&&(_n||d||!n)&&(qi(w)?w(C):C.getTrailing(w).forEach(function(xn){return xn.endAnimation()})),D||(q&&!Wi&&!Zu?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Zt,n._tTime/n._tDur):(q.vars.totalProgress=Zt,q.invalidate().restart())):n&&n.totalProgress(Zt,!!(Wi&&(tt||st)))),u){if(st&&p&&(Kt.style[p+E.os2]=Gt),!N)_t(nc(ge+Bt*Zt));else if(ci){if(Pi=!st&&Zt>Oe&&zt+1>Rt&&Rt+1>=xs(L,E),S)if(!st&&(ei||Pi)){var qe=qs(u,!0),ii=Rt-It;V_(u,ye,qe.top+(E===oi?ii:0)+xi,qe.left+(E===oi?0:ii)+xi)}else V_(u,Kt);Ra(ei||Pi?we:G),X&&Zt<1&&ei||_t(ge+(Zt===1&&!Pi?Bt:0))}}y&&!Q.tween&&!Wi&&!Zu&&U.restart(!0),a&&(Re||b&&Zt&&(Zt<1||!kp))&&fc(a.targets).forEach(function(xn){return xn.classList[ei||b?"add":"remove"](a.className)}),o&&!D&&!st&&o(C),ci&&!Wi?(D&&(_n&&(ve==="complete"?n.pause().totalProgress(1):ve==="reset"?n.restart(!0).pause():ve==="restart"?n.restart(!0):n[ve]()),o&&o(C)),(Re||!kp)&&(c&&Re&&Ma(C,c),z[Ae]&&Ma(C,z[Ae]),b&&(Zt===1?C.kill(!1,1):z[Ae]=0),Re||(Ae=Zt===1?1:3,z[Ae]&&Ma(C,z[Ae]))),M&&!ei&&Math.abs(C.getVelocity())>(sc(M)?M:2500)&&(tc(C.callbackAnimation),q?q.progress(1):tc(n,ve==="reverse"?1:!Zt,1))):D&&o&&!Wi&&o(C)}if(ht){var hi=x?Rt/x.duration()*(x._caScrollDist||0):Rt;A(hi+($._isFlipped?1:0)),ht(hi)}xt&&xt(-Rt/x.duration()*(x._caScrollDist||0))}},C.enable=function(st,Mt){C.enabled||(C.enabled=!0,Ti(L,"resize",rc),P||Ti(L,"scroll",Ta),J&&Ti(s,"refreshInit",J),st!==!1&&(C.progress=ct=0,Et=qt=H=pt()),Mt!==!1&&C.refresh())},C.getTween=function(st){return st&&Q?Q.tween:q},C.setPositions=function(st,Mt,rt,Rt){if(x){var ae=x.scrollTrigger,Zt=x.duration(),Oe=ae.end-ae.start;st=ae.start+Oe*st/Zt,Mt=ae.start+Oe*Mt/Zt}C.refresh(!1,!1,{start:N_(st,rt&&!!C._startClamp),end:N_(Mt,rt&&!!C._endClamp)},Rt),C.update()},C.adjustPinSpacing=function(st){if(I&&st){var Mt=I.indexOf(E.d)+1;I[Mt]=parseFloat(I[Mt])+st+xi,I[1]=parseFloat(I[1])+st+xi,Ra(I)}},C.disable=function(st,Mt){if(st!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Mt||q&&q.pause(),et=0,lt&&(lt.uncache=1),J&&bi(s,"refreshInit",J),U&&(U.pause(),Q.tween&&Q.tween.kill()&&(Q.tween=0)),!P)){for(var rt=te.length;rt--;)if(te[rt].scroller===L&&te[rt]!==C)return;bi(L,"resize",rc),P||bi(L,"scroll",Ta)}},C.kill=function(st,Mt){C.disable(st,Mt),q&&!Mt&&q.kill(),l&&delete Jp[l];var rt=te.indexOf(C);rt>=0&&te.splice(rt,1),rt===sn&&of>0&&sn--,rt=0,te.forEach(function(Rt){return Rt.scroller===C.scroller&&(rt=1)}),rt||rn||Er||(C.scroll.rec=0),n&&(n.scrollTrigger=null,st&&n.revert({kill:!1}),Mt||n.kill()),le&&[le,ne,$,$t].forEach(function(Rt){return Rt.parentNode&&Rt.parentNode.removeChild(Rt)}),uc===C&&(uc=0),u&&(lt&&(lt.uncache=1),rt=0,te.forEach(function(Rt){return Rt.pin===u&&rt++}),rt||(lt.spacer=0)),i.onKill&&i.onKill(C)},te.push(C),C.enable(!1,!1),dt&&dt(C),n&&n.add&&!oe){var at=C.update;C.update=function(){C.update=at,jt.cache++,It||zt||C.refresh()},Lt.delayedCall(.01,C.update),oe=.01,It=zt=0}else C.refresh();u&&bw()},s.register=function(i){return Ea||(Lt=i||j_(),Q_()&&window.document&&s.enable(),Ea=ic),Ea},s.defaults=function(i){if(i)for(var n in i)Qu[n]=i[n];return Qu},s.disable=function(i,n){ic=0,te.forEach(function(o){return o[n?"kill":"disable"](i)}),bi(ee,"wheel",Ta),bi(Me,"scroll",Ta),clearInterval(Yu),bi(Me,"touchcancel",_s),bi(ye,"touchstart",_s),$u(bi,Me,"pointerdown,touchstart,mousedown",U_),$u(bi,Me,"pointerup,touchend,mouseup",O_),cf.kill(),Ju(bi);for(var r=0;r<jt.length;r+=3)Ku(bi,jt[r],jt[r+1]),Ku(bi,jt[r],jt[r+2])},s.enable=function(){if(ee=window,Me=document,In=Me.documentElement,ye=Me.body,Lt){if(fc=Lt.utils.toArray,oc=Lt.utils.clamp,Yp=Lt.core.context||_s,zp=Lt.core.suppressOverwrites||_s,jp=ee.history.scrollRestoration||"auto",$p=ee.pageYOffset||0,Lt.core.globals("ScrollTrigger",s),ye){ic=1,Aa=document.createElement("div"),Aa.style.height="100vh",Aa.style.position="absolute",cx(),gw(),$e.register(Lt),s.isTouch=$e.isTouch,Tr=$e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qp=$e.isTouch===1,Ti(ee,"wheel",Ta),Qp=[ee,Me,In,ye],Lt.matchMedia?(s.matchMedia=function(h){var d=Lt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Lt.addEventListener("matchMediaInit",function(){ax(),rm()}),Lt.addEventListener("matchMediaRevert",function(){return ox()}),Lt.addEventListener("matchMedia",function(){oo(0,1),fo("matchMedia")}),Lt.matchMedia().add("(orientation: portrait)",function(){return Gp(),Gp})):console.warn("Requires GSAP 3.11.0 or later"),Gp(),Ti(Me,"scroll",Ta);var i=ye.hasAttribute("style"),n=ye.style,r=n.borderTopStyle,o=Lt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=qs(ye),oi.m=Math.round(a.top+oi.sc())||0,Vi.m=Math.round(a.left+Vi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),i||(ye.setAttribute("style",""),ye.removeAttribute("style")),Yu=setInterval(z_,250),Lt.delayedCall(.5,function(){return Zu=0}),Ti(Me,"touchcancel",_s),Ti(ye,"touchstart",_s),$u(Ti,Me,"pointerdown,touchstart,mousedown",U_),$u(Ti,Me,"pointerup,touchend,mouseup",O_),Xp=Lt.utils.checkPrefix("transform"),af.push(Xp),Ea=Xi(),cf=Lt.delayedCall(.2,oo).pause(),wa=[Me,"visibilitychange",function(){var h=ee.innerWidth,d=ee.innerHeight;Me.hidden?(I_=h,L_=d):(I_!==h||L_!==d)&&rc()},Me,"DOMContentLoaded",oo,ee,"load",oo,ee,"resize",rc],Ju(Ti),te.forEach(function(h){return h.enable(0,1)}),l=0;l<jt.length;l+=3)Ku(bi,jt[l],jt[l+1]),Ku(bi,jt[l],jt[l+2])}else if(Me){var c=function h(){s.enable(),Me.removeEventListener("DOMContentLoaded",h)};Me.addEventListener("DOMContentLoaded",c)}}},s.config=function(i){"limitCallbacks"in i&&(kp=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Yu)||(Yu=n)&&setInterval(z_,n),"ignoreMobileResize"in i&&(qp=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ju(bi)||Ju(Ti,i.autoRefreshEvents||"none"),J_=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,n){var r=en(i),o=jt.indexOf(r),a=ho(r);~o&&jt.splice(o,a?6:2),n&&(a?ns.unshift(ee,n,ye,n,In,n):ns.unshift(r,n))},s.clearMatchMedia=function(i){te.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},s.isInViewport=function(i,n,r){var o=(Pn(i)?en(i):i).getBoundingClientRect(),a=o[r?ao:lo]*n||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},s.positionInViewport=function(i,n,r){Pn(i)&&(i=en(i));var o=i.getBoundingClientRect(),a=o[r?ao:lo],l=n==null?a/2:n in uf?uf[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},s.killAll=function(i){if(te.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var n=uo.killAll||[];uo={},n.forEach(function(r){return r()})}},s})();ie.version="3.15.1";ie.saveStyles=function(s){return s?fc(s).forEach(function(t){if(t&&t.style){var e=Cn.indexOf(t);e>=0&&Cn.splice(e,5),Cn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Lt.core.getCache(t),Yp())}}):Cn};ie.revert=function(s,t){return rm(!s,t)};ie.create=function(s,t){return new ie(s,t)};ie.refresh=function(s){return s?rc(!0):(Ea||ie.register())&&oo(!0)};ie.update=function(s){return++jt.cache&&Ys(s===!0?2:0)};ie.clearScrollMemory=lx;ie.maxScroll=function(s,t){return xs(s,t?Vi:oi)};ie.getScrollFunc=function(s,t){return Ws(en(s),t?Vi:oi)};ie.getById=function(s){return Jp[s]};ie.getAll=function(){return te.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!Vn};ie.snapDirectional=sm;ie.addEventListener=function(s,t){var e=uo[s]||(uo[s]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(s,t){var e=uo[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ie.batch=function(s,t){var e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Lt.delayedCall(n,function(){h(d,f),d=[],f=[]}).pause();return function(p){d.length||u.restart(!0),d.push(p.trigger),f.push(p),r<=d.length&&u.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&qi(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return qi(r)&&(r=r(),Ti(ie,"refresh",function(){return r=t.batchMax()})),fc(s).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(ie.create(c))}),e};var X_=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Wp=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+($e.isTouch?" pinch-zoom":""):"none",t===In&&s(ye,e)},nf={auto:1,scroll:1},Rw=function(t){var e=t.event,i=t.target,n=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Lt.core.getCache(r),a=Xi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==ye&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(nf[(l=Gn(r)).overflowY]||nf[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==i&&!ho(r)&&(nf[(l=Gn(r)).overflowY]||nf[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},ux=function(t,e,i,n){return $e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&Rw,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ti(Me,$e.eventTypes[0],Y_,!1,!0)},onDisable:function(){return bi(Me,$e.eventTypes[0],Y_,!0)}})},Cw=/(input|label|select|textarea)/i,q_,Y_=function(t){var e=Cw.test(t.target.tagName);(e||q_)&&(t._gsapAllow=!0,q_=e)},Pw=function(t){ro(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=en(t.target)||In,h=Lt.core.globals().ScrollSmoother,d=h&&h.get(),f=Tr&&(t.content&&en(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Ws(c,oi),p=Ws(c,Vi),_=1,m=($e.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,g=0,v=qi(n)?function(){return n(a)}:function(){return n||2.8},b,y,S=ux(c,t.type,!0,r),T=function(){return y=!1},x=_s,M=_s,w=function(){l=xs(c,oi),M=oc(Tr?1:0,l),i&&(x=oc(0,xs(c,Vi))),b=co},E=function(){f._gsap.y=nc(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(T);var Y=nc(a.deltaY/2),V=M(u.v-Y);if(f&&V!==u.v+u.offset){u.offset=V-u.v;var C=nc((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",u.cacheID=jt.cache,Ys()}return!0}u.offset&&E(),y=!0},L,k,P,N,z=function(){w(),L.isActive()&&L.vars.scrollY>l&&(u()>l?L.progress(1)&&u(l):L.resetTo("scrollY",l))};return f&&Lt.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return Tr&&F.type==="touchmove"&&D(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){y=!1;var F=_;_=nc((ee.visualViewport&&ee.visualViewport.scale||1)/m),L.pause(),F!==_&&Wp(c,_>1.01?!0:i?!1:"x"),k=p(),P=u(),w(),b=co},t.onRelease=t.onGestureStart=function(F,Y){if(u.offset&&E(),!Y)N.restart(!0);else{jt.cache++;var V=v(),C,J;i&&(C=p(),J=C+V*.05*-F.velocityX/.227,V*=X_(p,C,J,xs(c,Vi)),L.vars.scrollX=x(J)),C=u(),J=C+V*.05*-F.velocityY/.227,V*=X_(u,C,J,xs(c,oi)),L.vars.scrollY=M(J),L.invalidate().duration(V).play(.01),(Tr&&L.vars.scrollY>=l||C>=l-1)&&Lt.to({},{onUpdate:z,duration:V})}o&&o(F)},t.onWheel=function(){L._ts&&L.pause(),Xi()-g>1e3&&(b=0,g=Xi())},t.onChange=function(F,Y,V,C,J){if(co!==b&&w(),Y&&i&&p(x(C[2]===Y?k+(F.startX-F.x):p()+Y-C[1])),V){u.offset&&E();var ft=J[2]===V,it=ft?P+F.startY-F.y:u()+V-J[1],H=M(it);ft&&it!==H&&(P+=H-it),u(H)}(V||Y)&&Ys()},t.onEnable=function(){Wp(c,i?!1:"x"),ie.addEventListener("refresh",z),Ti(ee,"resize",z),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){Wp(c,!0),bi(ee,"resize",z),ie.removeEventListener("refresh",z),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new $e(t),a.iOS=Tr,Tr&&!u()&&u(1),Tr&&Lt.ticker.add(_s),N=a._dc,L=Lt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:hx(u,u(),function(){return L.pause()})},onUpdate:Ys,onComplete:N.vars.onComplete}),a};ie.sort=function(s){if(qi(s))return te.sort(s);var t=ee.pageYOffset||0;return ie.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),te.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ie.observe=function(s){return new $e(s)};ie.normalizeScroll=function(s){if(typeof s>"u")return nn;if(s===!0&&nn)return nn.enable();if(s===!1){nn&&nn.kill(),nn=s;return}var t=s instanceof $e?s:Pw(s);return nn&&nn.target===t.target&&nn.kill(),ho(t.target)&&(nn=t),t};ie.core={_getVelocityProp:qu,_inputObserver:ux,_scrollers:jt,_proxies:ns,bridge:{ss:function(){Vn||fo("scrollStart"),Vn=Xi()},ref:function(){return Wi}}};j_()&&Lt.registerPlugin(ie);var pc,mc,fx=typeof Symbol=="function"?Symbol():"_split",am,Iw=()=>am||mf.register(window.gsap),dx=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,gc=s=>s?typeof s=="string"?gc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((t,e)=>(typeof e=="string"?t.push(...gc(e)):t.push(e),t),[]):[s]:[],px=s=>gc(s).filter(t=>t&&t.nodeType===1),df=[],om=function(){},Lw={add:s=>s()},Dw=/\s+/g,mx=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),pf={left:0,top:0,width:0,height:0},Nw=(s,t)=>{for(;++t<s.length&&s[t]===pf;);return s[t]||pf},gx=({element:s,html:t,ariaL:e,ariaH:i})=>{s.innerHTML=t,e?s.setAttribute("aria-label",e):s.removeAttribute("aria-label"),i?s.setAttribute("aria-hidden",i):s.removeAttribute("aria-hidden")},_x=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||df),i=s.length,n,r,o,a;if(e.size)for(;--i>-1;){r=s[i];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(n=0,a=r;o.startsWith(a+=s[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){s[i]=o,s.splice(i+1,n);break}}}}return s},xx=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Pa=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),lm=(s,t,e)=>{let i=t[s+"sClass"]||"",{tag:n="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),f=e.length+1;return i&&(d.className=i+(l?" "+i+f:"")),o&&d.style.setProperty("--"+s,f+""),r!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},Uw=(s,t,e,i)=>{let n=lm("line",e,i),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},vx=(s,t,e,i,n,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),f=0,{wordDelimiter:u,reduceWhiteSpace:p=!0,prepareText:_}=t,m=s.getBoundingClientRect(),g=m,v=!p&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",b=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,S=e.collection,T,x,M,w,E,D,L,k,P,N,z,F,Y,V,C,J,ft,it;for(typeof u=="object"?(M=u.delimiter||u,x=u.replaceWith||""):x=u===""?"":u||" ",T=x!==" ";f<d.length;f++)if(w=d[f],w.nodeType===3){for(C=w.textContent||"",p?C=C.replace(Dw," "):v&&(C=C.replace(/\n/g,x+`
`)),_&&(C=_(C,s)),w.textContent=C,E=x||M?C.split(M||x):C.match(a)||df,ft=E[E.length-1],k=T?ft.slice(-1)===" ":!ft,ft||E.pop(),g=m,L=T?E[0].charAt(0)===" ":!E[0],L&&Pa(" ",s,w),E[0]||E.shift(),_x(E,l),r&&c||(w.textContent=""),P=1;P<=E.length;P++)if(J=E[P-1],!p&&v&&J.charAt(0)===`
`&&((h=w.previousSibling)==null||h.remove(),Pa(document.createElement("br"),s,w),J=J.slice(1)),!p&&J==="")Pa(x,s,w);else if(J===" ")s.insertBefore(document.createTextNode(" "),w);else{if(T&&J.charAt(0)===" "&&Pa(" ",s,w),y&&P===1&&!L&&S.indexOf(y.parentNode)>-1?(D=S[S.length-1],D.appendChild(document.createTextNode(i?"":J))):(D=e(i?"":J),Pa(D,s,w),y&&P===1&&!L&&D.insertBefore(y,D.firstChild)),i){if(z=dx?_x([...dx.segment(J)].map(H=>H.segment),l):J.match(a)||df,l){let H=J.match(l);H&&H.some(tt=>z.indexOf(tt)<0)&&(z=J.match(a)||df)}for(it=0;it<z.length;it++)D.appendChild(z[it]===" "?document.createTextNode(" "):i(z[it]))}if(r&&c){if(C=w.textContent=C.substring(J.length+1,C.length),N=D.getBoundingClientRect(),N.top>g.top&&(b?N.left>=g.left:N.left<=g.left)){for(F=s.cloneNode(),Y=s.childNodes[0];Y&&Y!==D;)V=Y,Y=Y.nextSibling,F.appendChild(V);s.parentNode.insertBefore(F,s),n&&xx(F)}g=N}(P<E.length||k)&&Pa(P>=E.length?" ":T&&J.slice(-1)===" "?" "+x:x,s,w)}s.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(S.indexOf(w.previousSibling)>-1&&S[S.length-1].appendChild(w),y=w):(vx(w,t,e,i,n,r,o,a,l,!0),y=0),n&&xx(w))},yx=class Sx{constructor(t,e){this.isSplit=!1,Iw(),this.elements=px(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(r=>{var o;e.overwrite!==!1&&((o=r[fx])==null||o._data.orig.filter(({element:a})=>a===r).forEach(gx)),r[fx]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let r=i.length,o;for(;r--;){o=i[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},om(this),this.split(e)}split(t){return(this._ctx||Lw).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,u=d&&!f&&!h,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+mx.source,"gu"):mx,m=!!t.ignore&&px(t.ignore),{orig:g,animTime:v,obs:b}=this._data,y;(d||f||h)&&(this.elements.forEach((S,T)=>{g[T]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},i==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):i==="hidden"&&S.setAttribute("aria-hidden","true");let x=[],M=[],w=[],E=d?lm("char",t,x):null,D=lm("word",t,M),L,k,P,N;if(vx(S,t,D,E,u,n&&(h||u),m,_,p,!1),h){let z=gc(S.childNodes),F=Uw(S,z,t,w),Y,V=[],C=0,J=window.getComputedStyle(S).direction==="rtl",ft=z.map(tt=>tt.nodeType===1?tt.getBoundingClientRect():pf),it=pf,H;for(L=0;L<z.length;L++)Y=z[L],Y.nodeType===1&&(Y.nodeName==="BR"?((!L||z[L-1].nodeName!=="BR")&&(V.push(Y),F(C,L+1)),C=L+1,it=Nw(ft,L)):(H=ft[L],L&&H.top>it.top&&(J?H.left+H.width>it.left+1:H.left<it.left+it.width-1)&&(F(C,L),C=L),it=H));C<L&&F(C,L),V.forEach(tt=>{var ct;return(ct=tt.parentNode)==null?void 0:ct.removeChild(tt)})}if(!f){for(L=0;L<M.length;L++)if(k=M[L],d||!k.nextSibling||k.nextSibling.nodeType!==3)if(r&&!h){for(P=document.createElement("span"),P.style.whiteSpace="nowrap";k.firstChild;)P.appendChild(k.firstChild);k.replaceWith(P)}else k.replaceWith(...k.childNodes);else N=k.nextSibling,N&&N.nodeType===3&&(N.textContent=(k.textContent||"")+(N.textContent||""),k.remove());M.length=0,S.normalize()}this.lines.push(...w),this.words.push(...M),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let T=S.cloneNode();return S.replaceWith(T),T.appendChild(S),S.className&&(T.className=S.className.trim().split(" ").map(x=>x+"-mask").join(" ")),T.style.overflow="clip",T.style.verticalAlign="top",T}))),this.isSplit=!0,mc&&h&&a&&mc.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((S,T)=>{g[T].width=S.offsetWidth,b&&b.observe(S)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),mc?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(gx),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Sx(t,e)}static register(t){pc=pc||t||window.gsap,pc&&(gc=pc.utils.toArray,om=pc.core.context||om),!am&&window.innerWidth>0&&(mc=document.fonts,am=!0)}};yx.version="3.15.1";var mf=yx;var Mx="1.3.28";function Ex(s,t,e){return Math.max(s,Math.min(t,e))}function Ow(s,t,e){return(1-e)*s+e*t}function Fw(s,t,e,i){return Ow(s,t,1-Math.exp(-e*i))}function Bw(s,t){return(s%t+t)%t}var zw=class{constructor(){Nt(this,"isRunning",!1);Nt(this,"value",0);Nt(this,"from",0);Nt(this,"to",0);Nt(this,"currentTime",0);Nt(this,"lerp");Nt(this,"duration");Nt(this,"easing");Nt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=Ex(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Fw(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:i,easing:n,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function kw(s,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,i)},t)}}var Hw=class{constructor(s,t,{autoResize:e=!0,debounce:i=250}={}){Nt(this,"wrapper");Nt(this,"content");Nt(this,"width",0);Nt(this,"height",0);Nt(this,"scrollHeight",0);Nt(this,"scrollWidth",0);Nt(this,"debouncedResize");Nt(this,"wrapperResizeObserver");Nt(this,"contentResizeObserver");Nt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Nt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Nt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=kw(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},wx=class{constructor(){Nt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},Gw=100/6,wr={passive:!1};function bx(s,t){return s===1?Gw:s===2?t:1}var Vw=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Nt(this,"element");Nt(this,"options");Nt(this,"touchStart",{x:0,y:0});Nt(this,"lastDelta",{x:0,y:0});Nt(this,"window",{width:0,height:0});Nt(this,"emitter",new wx);Nt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Nt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:s})});Nt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Nt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:i}=s,n=bx(i,this.window.width),r=bx(i,this.window.height);t*=n,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Nt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,wr),this.element.addEventListener("touchstart",this.onTouchStart,wr),this.element.addEventListener("touchmove",this.onTouchMove,wr),this.element.addEventListener("touchend",this.onTouchEnd,wr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,wr),this.element.removeEventListener("touchstart",this.onTouchStart,wr),this.element.removeEventListener("touchmove",this.onTouchMove,wr),this.element.removeEventListener("touchend",this.onTouchEnd,wr)}},Tx=s=>Math.min(1,1.001-2**(-10*s)),Ax=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:b=!1,anchors:y=!1,autoToggle:S=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:M=x,stopInertiaOnNavigate:w=!1,respectReducedMotion:E=!0}={}){Nt(this,"_isScrolling",!1);Nt(this,"_isStopped",!1);Nt(this,"_isLocked",!1);Nt(this,"_preventNextNativeScrollEvent",!1);Nt(this,"_resetVelocityTimeout",null);Nt(this,"_rafId",null);Nt(this,"_isDraggingSelection",!1);Nt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Nt(this,"isTouching");Nt(this,"isIos");Nt(this,"time",0);Nt(this,"userData",{});Nt(this,"lastVelocity",0);Nt(this,"velocity",0);Nt(this,"direction",0);Nt(this,"options");Nt(this,"targetScroll");Nt(this,"animatedScroll");Nt(this,"animate",new zw);Nt(this,"emitter",new wx);Nt(this,"dimensions");Nt(this,"virtualScroll");Nt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Nt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Nt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Nt(this,"onClick",s=>{let t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(i.hash);this.scrollTo(r,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Nt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Nt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),r=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let f=n&&this.options.syncTouch,u=n&&i.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Nt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Nt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Mx,window.lenis||(window.lenis={}),window.lenis.version=Mx,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Tx:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:v,autoRaf:b,anchors:y,autoToggle:S,allowNestedScroll:T,naiveDimensions:M,stopInertiaOnNavigate:w,respectReducedMotion:E},this.dimensions=new Hw(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Vw(e,{touchMultiplier:u,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],r=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:r=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(p=f),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=Ex(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Tx:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let i=Date.now();s._lenis||(s._lenis={});let n=s._lenis,r,o,a,l,c,h,d,f,u,p;if(i-(n.time??0)>2e3){n.time=Date.now();let T=window.getComputedStyle(s);if(n.computedStyle=T,r=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),n.hasOverflowX=r,n.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,p=s.clientHeight,a=d>u,l=f>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=f,n.clientWidth=u,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,r=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,f=n.scrollHeight,u=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,v,b,y,S;if(_==="horizontal")m=Math.round(s.scrollLeft),g=d-u,v=t,b=r,y=a,S=c;else if(_==="vertical")m=Math.round(s.scrollTop),g=f-p,v=e,b=o,y=l,S=h;else return!1;return!S&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&b&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Bw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var _c=new O;function Wn(s,t,e,i,n,r){let o=2*Math.PI*n/4,a=Math.max(r-2*n,0),l=Math.PI/4;_c.copy(t),_c[i]=0,_c.normalize();let c=.5*o/(o+a),h=1-_c.angleTo(s)/l;return Math.sign(_c[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ar=class s extends Pe{constructor(t=1,e=1,i=1,n=2,r=.1){let o=n*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new O,c=new O,h=new O(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,_=new O,m=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),u[v+0]=Wn(_,c,"z","y",r,i),u[v+1]=1-Wn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),u[v+0]=1-Wn(_,c,"z","y",r,i),u[v+1]=1-Wn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),u[v+0]=1-Wn(_,c,"x","z",r,t),u[v+1]=Wn(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),u[v+0]=1-Wn(_,c,"x","z",r,t),u[v+1]=1-Wn(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),u[v+0]=1-Wn(_,c,"x","y",r,t),u[v+1]=1-Wn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),u[v+0]=Wn(_,c,"x","y",r,t),u[v+1]=1-Wn(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var li={night:660019,lapis:1916863,faience:3134406,gold:15316044,sand:14267266,stone:13146723,terracotta:11883311,ink:724770},ti=[28,23.5,19,14.5,10,5.5],on=2.6,vs=2.25,Zs=s=>s===0?0:s*on,po;function Ww(){if(po)return po;let s=new Uint8Array([70,70,70,255,140,140,140,255,205,205,205,255,255,255,255,255]);return po=new Fr(s,4,1,bn),po.minFilter=po.magFilter=ri,po.needsUpdate=!0,po}var be=(s,t={})=>new ll({color:s,gradientMap:Ww(),...t}),an=(s,t=2.6)=>new ze({color:new Ft(s).multiplyScalar(t),toneMapped:!1});function gf(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Rx(s,t=512,e=256,i=4){let n=document.createElement("canvas");n.width=t,n.height=e;let r=n.getContext("2d"),o=gf(s);r.fillStyle="#8f6a43",r.fillRect(0,0,t,e);let a=e/i;for(let l=0;l<i;l++){let c=-o()*80;for(;c<t;){let h=70+o()*90,d=44+o()*12;r.fillStyle=`hsl(${30+o()*8},${38+o()*12}%,${d}%)`,r.fillRect(c+2,l*a+2,h-4,a-4);for(let f=0;f<40;f++)r.fillStyle=`rgba(60,35,15,${o()*.12})`,r.fillRect(c+o()*h,l*a+o()*a,1+o()*3,1+o()*3);r.fillStyle="rgba(255,240,210,.18)",r.fillRect(c+2,l*a+2,h-4,3),c+=h}}return n}function Xw(s,t=512,e=256){let i=document.createElement("canvas");i.width=t,i.height=e;let n=i.getContext("2d"),r=gf(s);n.fillStyle="#000",n.fillRect(0,0,t,e),n.strokeStyle="#fff",n.fillStyle="#fff",n.lineWidth=2.2,n.lineCap="round";for(let a=0;a<7;a++){let l=r()*t,c=e*(.2+r()*.6);n.beginPath(),n.moveTo(l,c);for(let h=0;h<5;h++)h%2?c=Math.max(14,Math.min(e-14,c+(r()-.5)*110)):l+=(r()-.3)*140,n.lineTo(l,c);n.stroke(),n.beginPath(),n.arc(l,c,5,0,Math.PI*2),n.fill()}n.font="bold 26px monospace",n.globalAlpha=.9;let o=["{ }","</>","=>","::","&&","[ ]","#",";","01","\u03BB"];for(let a=0;a<5;a++)n.fillText(o[r()*o.length|0],r()*(t-60),30+r()*(e-40));return i}function cm(s,t=1,e=1,i=!0){let n=new ls(s);return n.wrapS=n.wrapT=Fo,n.repeat.set(t,e),i&&(n.colorSpace=fi),n.anisotropy=4,n}function Cx(s,{w:t=512,h:e=160,font:i="700 64px Unbounded, sans-serif",fg:n="#f6ead2",bg:r="rgba(10,18,51,.92)",border:o="#e9b44c",radius:a=70,sub:l}={}){let c=document.createElement("canvas");c.width=t,c.height=e;let h=c.getContext("2d");return((f,u,p,_,m)=>{h.beginPath(),h.moveTo(f+m,u),h.arcTo(f+p,u,f+p,u+_,m),h.arcTo(f+p,u+_,f,u+_,m),h.arcTo(f,u+_,f,u,m),h.arcTo(f,u,f+p,u,m),h.closePath()})(6,6,t-12,e-12,Math.min(a,(e-12)/2)),h.fillStyle=r,h.fill(),h.lineWidth=6,h.strokeStyle=o,h.stroke(),h.fillStyle=n,h.textAlign="center",h.textBaseline="middle",h.font=i,h.fillText(s,t/2,l?e*.4:e/2+2),l&&(h.font='500 30px "Instrument Sans", sans-serif',h.globalAlpha=.75,h.fillText(l,t/2,e*.72)),c}function Px(s,t){let e={updaters:[],props:{}},i=u=>e.updaters.push(u),n=new Qe({side:pi,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ft(264228)},mid:{value:new Ft(1319002)},hor:{value:new Ft(7028574)},moonDir:{value:new O(-.55,.32,-.77).normalize()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.);
        vec3 c = mix(hor, mid, smoothstep(0.,.22,h)); c = mix(c, top, smoothstep(.2,.75,h));
        float m = max(dot(vP, moonDir),0.); c += vec3(.35,.38,.6)*pow(m,24.)*.6 + vec3(.5,.3,.25)*pow(m,4.)*.12*(1.-h);
        gl_FragColor = vec4(c,1.); }`});s.add(new Pt(new Mi(600,32,16),n));{let p=new Float32Array(6600),_=new Float32Array(2200),m=gf(7);for(let b=0;b<2200;b++){let y=m()*Math.PI*2,S=.06+m()*.94,T=Math.sqrt(1-S*S);p.set([Math.cos(y)*T*520,S*520,Math.sin(y)*T*520],b*3),_[b]=m()*6.28}let g=new Ke;g.setAttribute("position",new Oi(p,3)),g.setAttribute("ph",new Oi(_,1));let v=new Qe({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},px:{value:Math.min(devicePixelRatio,2)}},vertexShader:"attribute float ph; uniform float t,px; varying float a; void main(){ a = .45+.55*sin(t*1.7+ph*3.); gl_PointSize = (1.2+fract(ph*7.13)*2.2)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float a; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(vec3(1.,.96,.88), a*smoothstep(.5,.0,d)); }"});s.add(new Zo(g,v)),i(b=>v.uniforms.t.value=b)}{let u=new Pt(new Mi(16,32,32),new ze({color:new Ft(16773584).multiplyScalar(1.35),toneMapped:!1,fog:!1}));u.position.set(-170,105,-235),s.add(u);let p=document.createElement("canvas");p.width=p.height=256;let _=p.getContext("2d"),m=_.createRadialGradient(128,128,20,128,128,128);m.addColorStop(0,"rgba(255,236,200,.55)"),m.addColorStop(.35,"rgba(160,170,255,.16)"),m.addColorStop(1,"rgba(0,0,0,0)"),_.fillStyle=m,_.fillRect(0,0,256,256);let g=new Xo(new Or({map:new ls(p),transparent:!0,depthWrite:!1,fog:!1}));g.scale.setScalar(150),g.position.copy(u.position),s.add(g)}s.add(new ul(7307480,2759956,.62));let r=new jo(13226751,1.35);r.position.set(-34,46,30),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:140}),r.shadow.bias=-6e-4,r.shadow.normalBias=.03,s.add(r);let o=new jo(16753514,.4);o.position.set(30,12,-20),s.add(o);{let u=new cs(900,900,180,180);u.rotateX(-Math.PI/2);let p=u.attributes.position;for(let g=0;g<p.count;g++){let v=p.getX(g),b=p.getZ(g),y=Math.hypot(v,b),S=Math.sin(v*.03+b*.012)*2.2+Math.sin(b*.045-v*.02)*1.4+Math.sin(v*.11)*.25;S*=es.smoothstep(y,26,90),S+=es.smoothstep(y,120,420)*14,p.setY(g,S-.02)}u.computeVertexNormals();let _=new Pt(u,be(11831898));_.receiveShadow=!0,s.add(_);let m=new Pt(new $i(24,25,.3,48),be(11108952));m.position.y=-.12,m.receiveShadow=!0,s.add(m)}for(let[u,p,_]of[[150,-260,34],[205,-300,46],[250,-270,26]]){let m=new Pt(new jn(_,_*.95,4),be(2761536));m.rotation.y=Math.PI/4,m.position.set(u,_*.47+6,p),s.add(m)}let a=new Ne;s.add(a),e.pyramid=a;let l=an(li.faience,1.9);for(let u=0;u<ti.length;u++){let p=ti[u],_=be(16777215,{map:cm(Rx(11+u),p/6,1),emissiveMap:cm(Xw(91+u*7),p/12,1,!1),emissive:new Ft(li.faience),emissiveIntensity:.75}),m=be(16777215,{map:cm(Rx(51+u,512,512,6),p/6,p/6)}),g=new Pt(new Pe(p,on,p),[_,_,m,m,_,_]);g.position.y=u*on+on/2,g.castShadow=g.receiveShadow=!0,a.add(g);let v=p/2;for(let[b,y,S,T]of[[p,.08,0,v],[p,.08,0,-v],[.08,p,v,0],[.08,p,-v,0]]){let x=new Pt(new Pe(b,.06,y),l);x.position.set(S,(u+1)*on+.01,T),a.add(x)}}let c=be(13805682);e.stairPath=[];for(let u=0;u<ti.length;u++){let _=on/8,m=vs/8,g=ti[u]/2,v=Zs(u);for(let b=0;b<8;b++){let y=new Pt(new Pe(2.6,_*(b+1),m+.01),c);y.position.set(0,v+_*(b+1)/2,g+vs-(b+.5)*m),y.castShadow=y.receiveShadow=!0,a.add(y)}for(let b of[-1.42,1.42]){let y=new O(b,v+.35,g+vs),S=new O(b,v+on+.35,g),T=y.distanceTo(S),x=new Pt(new Pe(.07,.07,T),an(b<0?li.faience:li.gold,2));x.position.copy(y).add(S).multiplyScalar(.5),x.lookAt(S),a.add(x)}e.stairPath.push(new O(0,v,g+vs),new O(0,v+on,g))}let h=new al({color:li.gold,metalness:.85,roughness:.28,emissive:new Ft(7031312),emissiveIntensity:.6}),d=new Pt(new jn(2.3,3.2,4),h);d.rotation.y=Math.PI/4,d.position.set(0,6*on+1.6,-.6),d.castShadow=!0,a.add(d),e.props.cap=d;let f=new lr(16762726,4,18,1.6);f.position.set(0,6*on+4.2,0),a.add(f),e.props.capLight=f;{let u=new On(e.stairPath.map(x=>x.clone().add(new O(-1.42,.55,0))),!1,"centripetal",0),p=new On(e.stairPath.map(x=>x.clone().add(new O(1.42,.55,0))),!1,"centripetal",0),_=36,m=new Pe(.16,.16,.16),g=new Is(m,an(li.faience,3.2),_),v=new Is(m,an(li.gold,3),_);a.add(g,v);let b=new de,y=new Un,S=new O(1,1,1),T=new O;e.packetBoost=0,i((x,M)=>{let w=.045+e.packetBoost*.25;e.packetBoost*=.97;for(let E=0;E<_;E++){let D=(E/_+x*w)%1;u.getPointAt(D,T),y.setFromEuler(new Kn(x*2+E,x+E,0)),b.compose(T,y,S),g.setMatrixAt(E,b),p.getPointAt(1-D,T),b.compose(T,y,S),v.setMatrixAt(E,b)}g.instanceMatrix.needsUpdate=v.instanceMatrix.needsUpdate=!0})}for(let u of[-4.6,4.6]){let p=ti[0]/2+3.2,_=new Pt(new $i(.28,.36,2.2,8),be(9202245));_.position.set(u,1.1,p),_.castShadow=!0,s.add(_);let m=new Pt(new $i(.6,.3,.4,12),be(5978914));m.position.set(u,2.35,p),s.add(m);let g=new Pt(new jn(.38,1,10),an(16747050,3));g.position.set(u,3,p),s.add(g);let v=new Pt(new jn(.2,.6,8),an(16769162,3));v.position.set(u,2.85,p),s.add(v);let b=new lr(16751173,7,13,1.8);b.position.set(u,3.4,p+.3),s.add(b);let y=Math.random()*10;i(S=>{let T=1+Math.sin(S*13+y)*.08+Math.sin(S*7.3+y)*.07;g.scale.set(1,T*1.1,1),v.scale.set(1,T,1),b.intensity=6.5*T,g.rotation.y=S*2})}{let p=new Float32Array(1500),_=gf(3);for(let v=0;v<500;v++)p.set([(_()-.5)*80,_()*22,(_()-.5)*80],v*3);let m=new Ke;m.setAttribute("position",new Oi(p,3));let g=new Zo(m,new Yo({color:16769712,size:.09,transparent:!0,opacity:.55,depthWrite:!1}));s.add(g),i((v,b)=>{let y=m.attributes.position;for(let S=0;S<500;S++){let T=y.getX(S)+b*1.6;T>40&&(T=-40),y.setX(S,T),y.setY(S,y.getY(S)+Math.sin(v+S)*b*.15)}y.needsUpdate=!0})}return qw(e,a,t),e.update=(u,p,_)=>{for(let m of e.updaters)m(u,p,_)},e}function qw(s,t,e){let i=o=>s.updaters.push(o),n=o=>ti[o]/2+vs/2,r=new hl(e);{let o=new Ne;o.position.set(-5.6,Zs(1),n(1)),t.add(o);let a=be(7227948),l=new Pt(new Ar(1.5,.08,.8,2,.03),a);l.position.y=.72,l.castShadow=!0,o.add(l);for(let[m,g]of[[-.65,-.32],[.65,-.32],[-.65,.32],[.65,.32]]){let v=new Pt(new Pe(.06,.72,.06),a);v.position.set(m,.36,g),o.add(v)}let c=new Pt(new Pe(.62,.03,.42),be(2830141));c.position.set(0,.775,.05),o.add(c);let h=document.createElement("canvas");h.width=256,h.height=160;let d=h.getContext("2d");d.fillStyle="#0a1233",d.fillRect(0,0,256,160),d.font="15px monospace",[["#2fd3c6",'app.post("/hire",'],["#e9b44c","  auth, async (req,res)=>{"],["#f6ead2",'  const dev = "adham";'],["#f6ead2","  await db.save(dev);"],["#2fd3c6","  res.status(201)"],["#e9b44c","});"]].forEach(([m,g],v)=>{d.fillStyle=m,d.fillText(g,12,26+v*22)});let u=new Pt(new cs(.6,.38),new ze({map:new ls(h),toneMapped:!1}));u.material.map.colorSpace=fi,u.position.set(0,.98,-.15),u.rotation.x=-.18,o.add(u);let p=new Pt(new Pe(.64,.41,.02),be(2830141));p.position.set(0,.98,-.165),p.rotation.x=-.18,o.add(p);let _=new Pt(new $i(.07,.06,.14,12),be(li.terracotta));_.position.set(.55,.83,.15),o.add(_),o.rotation.y=.5,s.props.desk=o}{let o=new Ne;o.position.set(5.8,Zs(2)+3.1,n(2)-.6),t.add(o);let a=["C++","TypeScript","Node.js","PostgreSQL","Python","SQL","Docker","React","Express","socket.io","Git","Java"];a.forEach((c,h)=>{let d=new Pt(new cs(1.05,.33),new ze({map:new ls(Cx(c,{font:"700 54px Unbounded, sans-serif"})),transparent:!0,side:Mn,toneMapped:!1}));d.material.map.colorSpace=fi,d.userData={a:h/a.length*Math.PI*2,r:h%2?2.9:2.2,y:h%3*.45-.45},o.add(d)});let l=new Pt(new rl(.42,0),an(li.faience,2.2));o.add(l),i((c,h,d)=>{l.rotation.set(c*.6,c*.9,0),o.children.forEach(f=>{if(!f.userData.r)return;let u=f.userData.a+c*.35;f.position.set(Math.cos(u)*f.userData.r,f.userData.y+Math.sin(c+f.userData.a)*.12,Math.sin(u)*f.userData.r),d&&f.quaternion.copy(d.quaternion)})}),s.props.stack=o}{let o=new Ne;o.position.set(-3.6,Zs(3)+2.45,ti[3]/2+.35),t.add(o);let a=be(li.gold,{emissive:new Ft(3811336)}),l=document.createElement("canvas");l.width=640,l.height=400,Yw(l.getContext("2d")),[{src:"assets/shots/title.jpg",x:-1.9,ry:.42},{canvas:l,x:0,ry:0},{src:"assets/shots/student-dashboard.webp",x:1.9,ry:-.42}].forEach((h,d)=>{let f=h.canvas?new ls(h.canvas):r.load(h.src);f.colorSpace=fi;let u=new Ne;u.position.set(h.x,d===1?.35:0,d===1?-.4:0),u.rotation.y=h.ry,o.add(u);let p=new Pt(new Ar(1.86,1.1,.07,2,.04),a);u.add(p);let _=new Pt(new cs(1.74,.98),new ze({map:f,color:12105912}));_.position.z=.04,u.add(_);let m=d*1.7;i(g=>{u.position.y=(d===1?.35:0)+Math.sin(g*1.1+m)*.08})}),o.rotation.y=.12,s.props.work=o}{let o=new Ne;o.position.set(5.6,Zs(4)+1.3,n(4)-.4),o.rotation.y=-.4,t.add(o);let a=new Pt(new Pe(.5,.5,.5),an(li.faience,2));a.position.set(-1.9,1.7,0);let l=new Pt(new Mi(.3,16,12),an(7310591,2.2));l.position.set(-1.9,.3,0);let c=new Pt(new ol(.38),an(li.gold,2.6));c.position.set(.4,1,0),o.add(a,l,c);let h=new On([a.position,new O(-.8,1.8,.4),c.position]),d=new On([l.position,new O(-.8,.2,.4),c.position]),u=[[3134406,.35],[15316044,.6],[15764028,.85],[14698298,1.1]].map(([T,x],M)=>{let w=new Pt(new Pe(.22,x,.22),an(T,1.8));return w.position.set(1.4+M*.36,x/2+.1,0),o.add(w),w}),p=new On([c.position,new O(1.2,1.4,.2),new O(1.9,1.5,0)]),_=22,m=new Mi(.05,6,4),g=new Is(m,an(li.faience,3),_),v=new Is(m,an(9414399,3),_),b=new Is(m,an(li.gold,3),_);o.add(g,v,b);for(let[T,x,M]of[["XGBoost \xB7 sensors",-1.9,2.25],["Isolation Forest \xB7 traffic",-1.9,-.25],["Decision fusion",.4,1.6],["4-tier risk",1.95,1.55]]){let w=new Xo(new Or({map:new ls(Cx(T,{w:640,h:120,font:'600 42px "Instrument Sans", sans-serif',radius:60})),transparent:!0,toneMapped:!1}));w.material.map.colorSpace=fi,w.scale.set(1.6,.3,1),w.position.set(x,M,.1),o.add(w)}let y=new de,S=new O;i(T=>{a.rotation.set(T,T*.7,0),c.rotation.y=T*1.4,c.scale.setScalar(1+Math.sin(T*4)*.06);for(let x=0;x<_;x++){let M=(x/_+T*.22)%1;h.getPointAt(M,S),y.makeTranslation(S.x,S.y,S.z),g.setMatrixAt(x,y),d.getPointAt((M+.5)%1,S),y.makeTranslation(S.x,S.y,S.z),v.setMatrixAt(x,y),p.getPointAt(M,S),y.makeTranslation(S.x,S.y,S.z),b.setMatrixAt(x,y)}g.instanceMatrix.needsUpdate=v.instanceMatrix.needsUpdate=b.instanceMatrix.needsUpdate=!0,u.forEach((x,M)=>x.scale.y=.85+Math.sin(T*2+M)*.15)}),s.props.research=o}{let o=new Ne;o.position.set(-4.4,Zs(5),n(5)-.5),t.add(o),[14698298,3134406,15316044,7310591,16181970].forEach((f,u)=>{let p=new Ne;p.position.set((u-2)*.42,0,u%2*.45);let _=new Pt(new Mi(.34,20,16),be(f,{emissive:new Ft(f),emissiveIntensity:.25}));_.scale.y=1.18,_.position.y=2.2+u%3*.35;let m=new Pt(new jn(.06,.1,6),be(f));m.position.y=_.position.y-.42,m.rotation.x=Math.PI;let g=new Pt(new $i(.006,.006,_.position.y-.45,4),be(16181970));g.position.y=(_.position.y-.45)/2,p.add(_,m,g),o.add(p);let v=u*1.3;i(b=>{p.rotation.z=Math.sin(b*1.2+v)*.06,p.rotation.x=Math.cos(b+v)*.05})});let l=new Ne,c=new Pt(new sr(.16,.6,6,12),be(16181970));l.add(c);let h=new Pt(new jn(.16,.3,12),be(li.terracotta));h.position.y=.55,l.add(h);for(let f=0;f<3;f++){let u=new Pt(new Pe(.02,.22,.18),be(li.lapis)),p=f/3*Math.PI*2;u.position.set(Math.cos(p)*.16,-.3,Math.sin(p)*.16),u.rotation.y=-p,l.add(u)}let d=new Pt(new jn(.1,.4,8),an(16751173,3));d.position.y=-.62,d.rotation.x=Math.PI,l.add(d),t.add(l),i(f=>{let u=f*.45,p=new O(0,Zs(5)+4.6,0);l.position.set(p.x+Math.cos(u)*9,p.y+Math.sin(f*.9)*.6,p.z+Math.sin(u)*9),l.lookAt(p.x+Math.cos(u+.2)*9,l.position.y,p.z+Math.sin(u+.2)*9),l.rotateX(Math.PI/2),d.scale.y=1+Math.sin(f*30)*.2}),s.props.arena=o}{let o=new Pt(new $i(.35,1.2,160,24,1,!0),new ze({color:new Ft(li.gold).multiplyScalar(2.2),transparent:!0,opacity:0,side:Mn,depthWrite:!1,toneMapped:!1,blending:Gr}));o.position.set(0,6*on+3+80,-.6),t.add(o);let a=[0,1,2].map(()=>{let l=new Pt(new zr(1,.05,8,48),new ze({color:new Ft(li.faience).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1}));return l.rotation.x=Math.PI/2,l.position.set(0,6*on+.2,-.6),t.add(l),l});s.props.beam=o,s.props.rings=a}}function Yw(s){s.fillStyle="#101a3f",s.fillRect(0,0,640,400),s.fillStyle="#e9b44c",s.font="700 34px Unbounded, sans-serif",s.fillText("SmartHabbit",30,56),s.fillStyle="#f6ead2",s.font='500 20px "Instrument Sans", sans-serif',s.fillText("Level 7  \xB7  1,240 XP  \xB7  \u{1F525} 12-day streak",30,92),s.fillStyle="#26305e",s.fillRect(30,112,580,18),s.fillStyle="#2fd3c6",s.fillRect(30,112,410,18),[["Read 20 pages","easy","+10 XP"],["Codeforces problem","hard","+40 XP"],["Gym","medium","+25 XP"]].forEach(([e,i,n],r)=>{let o=160+r*62;s.fillStyle="#18234f",s.fillRect(30,o,580,50),s.fillStyle="#f6ead2",s.font='600 22px "Instrument Sans", sans-serif',s.fillText(e,50,o+32),s.fillStyle="#9fb0e8",s.font='500 17px "Instrument Sans", sans-serif',s.fillText(i,330,o+31),s.fillStyle="#e9b44c",s.fillText(n,520,o+31)}),["#e0473a","#2fd3c6","#e9b44c","#6f8cff"].forEach((e,i)=>{s.fillStyle=e,s.beginPath(),s.arc(60+i*56,370,18,0,7),s.fill()})}var _f=14263420,xf=1774609,Ix=1845854,Lx=16052198,Dx=1317178,Zw=1581119,Jw=15920354,$w=new ze({color:658716,side:pi});function Js(s,t,e=1.06,i){let n=new Pt(s,be(t,i));if(n.castShadow=!0,e){let r=new Pt(s,$w);r.scale.setScalar(e),n.add(r)}return n}function Nx(){let s=new Ne,t=new Ne;s.add(t);let e=[-1,1].map(P=>{let N=new Ne;N.position.set(.12*P,.6,0),t.add(N);let z=Js(new sr(.085,.36,4,10),Zw);z.position.y=-.27,N.add(z);let F=Js(new Ar(.17,.11,.28,2,.05),Jw);F.position.set(0,-.53,.05),N.add(F);let Y=new Pt(new Pe(.17,.03,.28),be(2830141));return Y.position.set(0,-.585,.05),N.add(Y),N}),i=new Ne;i.position.y=.6,t.add(i);let n=Js(new Ar(.5,.5,.3,3,.1),Ix);n.position.y=.26,i.add(n);let r=new Pt(new $i(0,.11,.26,3),be(Lx));r.rotation.set(Math.PI,Math.PI/6,0),r.scale.z=.25,r.position.set(0,.36,.145),i.add(r);let o=new Pt(new Pe(.045,.22,.02),be(Dx));o.position.set(0,.32,.158),i.add(o);let a=new Pt(new Pe(.06,.045,.03),be(Dx));a.position.set(0,.46,.155),i.add(a);let l=new Pt(new Br(.025,12),new ze({color:new Ft(li.gold).multiplyScalar(1.6),toneMapped:!1}));l.position.set(-.14,.4,.152),i.add(l);let c=new Pt(new Pe(.46,.05,.28),be(1053734));c.position.y=.03,i.add(c);let h=[-1,1].map(P=>{let N=new Ne;N.position.set(.3*P,.46,0),i.add(N);let z=Js(new sr(.072,.3,4,10),Ix);z.position.y=-.18,N.add(z);let F=new Pt(new $i(.066,.066,.04,10),be(Lx));F.position.y=-.37,N.add(F);let Y=Js(new Mi(.07,14,10),_f);return Y.position.y=-.43,N.add(Y),N}),d=new Ne;d.position.y=1.12,t.add(d);let f=new Pt(new $i(.07,.08,.1,10),be(_f));d.add(f);let u=new Ne;u.position.y=.06,d.add(u);let p=Js(new Mi(.35,32,24),_f,1.04);p.scale.set(1,.97,.94),p.position.y=.34,u.add(p);for(let P of[-1,1]){let N=Js(new Mi(.075,12,10),_f,1.08);N.scale.set(.6,1,.8),N.position.set(.34*P,.33,0),u.add(N)}let _=Js(new Mi(.37,32,16,0,Math.PI*2,0,Math.PI*.52),xf,1.03);_.scale.set(1.02,1,1),_.position.set(0,.36,-.03),_.rotation.x=-.32,u.add(_);let m=[[-.17,.62,.17,.15],[0,.67,.19,.17],[.17,.62,.15,.15],[.09,.66,.06,.16],[-.09,.66,.06,.16],[.26,.5,.12,.12],[-.26,.5,.12,.12]];for(let[P,N,z,F]of m){let Y=Js(new Mi(F,16,12),xf,1.05);Y.position.set(P,N,z),Y.scale.set(1.1,.75,1),u.add(Y)}for(let P of[-1,1]){let N=new Pt(new Pe(.05,.12,.07),be(xf));N.position.set(.325*P,.32,.08),u.add(N)}let g=new Ne;g.position.set(0,.34,.305),u.add(g);let v=[-1,1].map(P=>{let N=new Pt(new Mi(.046,14,10),new ze({color:1182987}));N.scale.set(.95,1.3,.55),N.position.set(.12*P,.02,.02);let z=new Pt(new Mi(.014,8,6),new ze({color:16777215}));return z.position.set(.018,.022,.04),N.add(z),g.add(N),N}),b=[-1,1].map(P=>{let N=new Pt(new Pe(.09,.022,.02),new ze({color:xf}));return N.position.set(.12*P,.11,.02),g.add(N),N}),y=new Pt(new zr(.055,.012,6,16,Math.PI),new ze({color:4857366}));y.rotation.z=Math.PI,y.position.set(0,-.1,.01),g.add(y);let S=new Pt(new Mi(.05,14,10),new ze({color:4857366}));S.scale.set(1,.1,.4),S.position.set(0,-.12,0),g.add(S);let T=[-1,1].map(P=>{let N=new Pt(new Br(.04,12),new ze({color:14712938,transparent:!0,opacity:.35}));return N.position.set(.2*P,-.04,.005),N.rotation.y=.35*P,g.add(N),N}),x=new lr(16770756,2.2,4.5,1.5);x.position.set(.6,2,1.4),s.add(x);let M=new Pt(new Br(.42,24),new ze({color:0,transparent:!0,opacity:.28,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.02,s.add(M),s.scale.setScalar(1.15);let w={mode:"idle",modeT:0,talk:0,walkPhase:0,speed:0,blinkT:2,look:new At,yaw:0,spin:0,jump:0},E=es.lerp;function D(P){w.mode!==P&&(w.mode=P,w.modeT=0)}function L(){w.spin=Math.PI*2,w.jump=1,D("celebrate")}function k(P,N){w.modeT+=P;let z=Math.min(w.speed/2.4,1);w.walkPhase+=P*(4+w.speed*3.2);let F=Math.sin(w.walkPhase);e[0].rotation.x=E(e[0].rotation.x,F*.75*z,.3),e[1].rotation.x=E(e[1].rotation.x,-F*.75*z,.3);let Y={x:-F*.6*z,z:-.08},V={x:F*.6*z,z:.08},C=Math.sin(N*2.2)*.012,J=Math.abs(Math.cos(w.walkPhase))*.06*z+C,ft=Math.sin(N*1.3)*.04;w.mode==="wave"?(V={x:-.2,z:2.55+Math.sin(N*9)*.32},ft=.12,w.modeT>2.4&&D("idle")):w.mode==="point"?(V={x:-1.35,z:.45},Y={x:.1,z:-.12}):w.mode==="type"?(Y={x:-1.1,z:.25+Math.sin(N*18)*.05},V={x:-1.1,z:-.25+Math.cos(N*17)*.05}):w.mode==="celebrate"?(Y={x:0,z:-2.6-Math.sin(N*12)*.2},V={x:0,z:2.6+Math.sin(N*12)*.2},J+=Math.abs(Math.sin(w.modeT*7))*.25*Math.max(0,1-w.modeT/2),w.modeT>2.2&&D("idle")):w.mode==="think"&&(V={x:-2.1,z:-.9},ft=-.15),h[0].rotation.x=E(h[0].rotation.x,Y.x,.18),h[0].rotation.z=E(h[0].rotation.z,Y.z,.18),h[1].rotation.x=E(h[1].rotation.x,V.x,.18),h[1].rotation.z=E(h[1].rotation.z,V.z,.18),t.position.y=J,i.scale.y=1+C,u.rotation.y=E(u.rotation.y,w.look.x*.5,.08),u.rotation.x=E(u.rotation.x,-w.look.y*.25+Math.max(0,w.talk)*Math.sin(N*9)*.03,.08),u.rotation.z=E(u.rotation.z,ft,.06),w.blinkT-=P;let it=1;w.blinkT<.12&&(it=Math.abs(w.blinkT-.06)/.06),w.blinkT<0&&(w.blinkT=2+Math.random()*3),v.forEach(tt=>tt.scale.y=1.3*Math.max(.08,it));let H=w.talk>0?(.5+.5*Math.sin(N*22))*(.6+.4*Math.sin(N*7.1)):0;if(S.scale.y=E(S.scale.y,.1+H*.9,.5),y.visible=H<.25,b.forEach((tt,ct)=>{tt.position.y=.11+(w.mode==="celebrate"||w.mode==="wave"?.025:0)+H*.01,tt.rotation.z=(ct?-1:1)*(w.mode==="think"?.25:.05)}),w.spin>0){let tt=Math.min(w.spin,P*12);w.spin-=tt,t.rotation.y+=tt}else t.rotation.y=E(t.rotation.y,0,.2)}return{root:s,head:u,st:w,update:k,setMode:D,poke:L,headAnchor:()=>u.localToWorld(new O(0,.9,0))}}var ys=[new O(2.8,0,ti[0]/2+vs+2.6),new O(-3.3,0,ti[1]/2+1),new O(3.3,0,ti[2]/2+1),new O(-3.3,0,ti[3]/2+1),new O(3.3,0,ti[4]/2+1),new O(-2.9,0,ti[5]/2+1),new O(0,0,2.05)],Ux=ys.length,Kw=on/8,Qw=vs/8;function vf(s,t){let e=0;for(let i=0;i<ti.length;i++)Math.abs(s)<=ti[i]/2+.05&&Math.abs(t)<=ti[i]/2+.05&&(e=Math.max(e,(i+1)*on));if(Math.abs(s)<=1.3)for(let i=0;i<ti.length;i++){let n=ti[i]/2,r=n+vs;t>=n&&t<=r&&(e=Math.max(e,Zs(i)+Math.min(8,Math.ceil((r-t)/Qw+1e-4))*Kw))}return e}var hm=[];for(let s=0;s<ys.length-1;s++){let t=ys[s],e=ys[s+1],i=[new At(t.x,t.z),new At(0,ti[s]/2+vs+.35),new At(0,ti[s]/2-.4),new At(e.x,e.z)],n=[0];for(let r=1;r<i.length;r++)n.push(n[r-1]+i[r].distanceTo(i[r-1]));hm.push({pts:i,len:n})}function um(s,t=new At){let e=Math.min(Math.floor(s),hm.length-1),i=es.clamp(s-e,0,1);if(s>=ys.length-1)return t.set(ys[ys.length-1].x,ys[ys.length-1].z),t;let n=hm[e],r=i*n.len[n.len.length-1],o=1;for(;o<n.len.length-1&&n.len[o]<r;)o++;let a=(r-n.len[o-1])/(n.len[o]-n.len[o-1]||1);return t.copy(n.pts[o-1]).lerp(n.pts[o],a)}var Ox=s=>{let t=ys[s].clone();return t.y=vf(t.x,t.z),t};var fm=["Ground","Foundation","Stack","Work","Research","Arena","Capstone"],Fx=["wave","point","think","point","point","celebrate","wave"],Bx={en:[["Hey! I'm Adham. Well, the mini version.","This pyramid is my stack. Every step is one layer of what I do.","Scroll and I'll climb it with you. Click me if you get bored."],["Step one: the foundation.","I study AI & Data Science at Badya University, class of 2028.","My favourite part is the backend: APIs, databases, the logic nobody sees."],["These are my tools. They orbit me all day.","Node.js and PostgreSQL for servers, C++ for contests, Python for data.","And tests. Lots of tests."],["My projects! Real screenshots, real repos.","SmartHabbit is my main one. I built most of its backend.","See the space game on that screen? We built it for NASA Space Apps 2026."],["Research level. Watch the particles.","Sensor data goes to XGBoost, network traffic goes to Isolation Forest.","They meet in the gold node and become one risk score. It is on IEEE Xplore!"],["The arena! In ICPC, every balloon means a solved problem.","88th in the ECPC qualifications in 2025, 177th in 2026. The next one is mine.","And that rocket? Still orbiting since Space Apps."],["We made it to the top!","Write me a request below and the capstone will fire it.","I reply faster than my APIs. Almost."]],ar:[["\u0623\u0647\u0644\u0627\u064B! \u0623\u0646\u0627 \u0623\u062F\u0647\u0645\u2026 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0645\u064A\u0646\u064A \u064A\u0639\u0646\u064A \u{1F604}","\u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0647\u0648 \u0627\u0644\u0640 stack \u0628\u062A\u0627\u0639\u064A\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u0641\u064A\u0647 \u0637\u0628\u0642\u0629 \u0645\u0646 \u0634\u063A\u0644\u064A.","\u0627\u0639\u0645\u0644 scroll \u0648\u0623\u0646\u0627 \u0647\u0637\u0644\u0639 \u0645\u0639\u0627\u0643 \u062F\u0631\u062C\u0629 \u062F\u0631\u062C\u0629. \u0648\u0644\u0648 \u0632\u0647\u0642\u062A \u062F\u0648\u0633 \u0639\u0644\u064A\u0651\u0627."],["\u0623\u0648\u0644 \u062F\u0631\u062C\u0629: \u0627\u0644\u0623\u0633\u0627\u0633.","\u0628\u062F\u0631\u0633 AI \u0648 Data Science \u0641\u064A \u062C\u0627\u0645\u0639\u0629 \u0628\u0627\u062F\u064A\u0629\u060C \u062F\u0641\u0639\u0629 2028.","\u0628\u0633 \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629 \u0628\u062D\u0628\u0647\u0627 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F: \u0627\u0644\u0640 APIs \u0648\u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u0644\u064A \u0645\u062D\u062F\u0634 \u0628\u064A\u0634\u0648\u0641\u0647."],["\u062F\u064A \u0623\u062F\u0648\u0627\u062A\u064A\u060C \u0628\u062A\u0644\u0641 \u062D\u0648\u0627\u0644\u064A\u0627 \u0637\u0648\u0644 \u0627\u0644\u064A\u0648\u0645.","Node.js \u0648 PostgreSQL \u0644\u0644\u0633\u064A\u0631\u0641\u0631\u0627\u062A\u060C C++ \u0644\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062A\u060C \u0648 Python \u0644\u0644\u062F\u0627\u062A\u0627.","\u0648\u062A\u0633\u062A\u0627\u062A\u2026 \u062A\u0633\u062A\u0627\u062A \u0643\u062A\u064A\u0631."],["\u062F\u064A \u0645\u0634\u0627\u0631\u064A\u0639\u064A! \u0633\u0643\u0631\u064A\u0646 \u0634\u0648\u062A\u0633 \u062D\u0642\u064A\u0642\u064A\u0629 \u0648\u0631\u064A\u0628\u0648\u0632 \u062D\u0642\u064A\u0642\u064A\u0629.","SmartHabbit \u0623\u0647\u0645\u0647\u0645\u060C \u0648\u0623\u0646\u0627 \u0639\u0627\u0645\u0644 \u0623\u063A\u0644\u0628 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639\u0647.","\u0634\u0627\u064A\u0641 \u0644\u0639\u0628\u0629 \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u0644\u064A \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629\u061F \u0639\u0645\u0644\u0646\u0627\u0647\u0627 \u0641\u064A \u0647\u0627\u0643\u0627\u062B\u0648\u0646 \u0646\u0627\u0633\u0627 Space Apps 2026."],["\u062F\u064A \u062F\u0631\u062C\u0629 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0639\u0644\u0645\u064A. \u0628\u0635 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0637 \u0627\u0644\u0644\u064A \u0628\u062A\u062C\u0631\u064A.","\u062F\u0627\u062A\u0627 \u0627\u0644\u062D\u0633\u0627\u0633\u0627\u062A \u0628\u062A\u0631\u0648\u062D \u0644\u0640 XGBoost\u060C \u0648\u062A\u0631\u0627\u0641\u064A\u0643 \u0627\u0644\u0634\u0628\u0643\u0629 \u0628\u064A\u0631\u0648\u062D \u0644\u0640 Isolation Forest.","\u0628\u064A\u062A\u0642\u0627\u0628\u0644\u0648\u0627 \u0641\u064A \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062F\u0647\u0628 \u0648\u064A\u0637\u0644\u0639\u0648\u0627 risk score \u0648\u0627\u062D\u062F. \u0648\u0627\u0644\u0648\u0631\u0642\u0629 \u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 IEEE Xplore!"],["\u0627\u0644\u0623\u0631\u064A\u0646\u0627! \u0641\u064A \u0627\u0644\u0640 ICPC \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A.","\u0627\u0644\u0645\u0631\u0643\u0632 88 \u0641\u064A \u062A\u0635\u0641\u064A\u0627\u062A ECPC \u0633\u0646\u0629 2025\u060C \u0648177 \u0641\u064A 2026. \u0627\u0644\u062C\u0627\u064A\u0629 \u0628\u062A\u0627\u0639\u062A\u064A.","\u0648\u0627\u0644\u0635\u0627\u0631\u0648\u062E \u062F\u0647\u061F \u0644\u0633\u0647 \u0628\u064A\u0644\u0641 \u0645\u0646 \u0623\u064A\u0627\u0645 Space Apps."],["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u0642\u0645\u0629!","\u0627\u0628\u0639\u062A\u0644\u064A request \u0645\u0646 \u062A\u062D\u062A\u060C \u0648\u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628 \u0647\u062A\u0637\u0644\u0642\u0647.","\u0628\u0631\u062F \u0623\u0633\u0631\u0639 \u0645\u0646 \u0627\u0644\u0640 APIs \u0628\u062A\u0627\u0639\u062A\u064A\u2026 \u062A\u0642\u0631\u064A\u0628\u0627\u064B."]]},zx={en:["Hey, that tickles!","Status 418: I'm a teapot.","Did you try turning it off and on again?","SELECT * FROM snacks;","My code works and I know exactly why. Mostly.","Rate limit: 5 pokes per 15 minutes. Just kidding."],ar:["\u0628\u062A\u0632\u063A\u0632\u063A\u0646\u064A \u0643\u062F\u0647!","Status 418: \u0623\u0646\u0627 \u0628\u0631\u0627\u062F \u0634\u0627\u064A \u2615","\u062C\u0631\u0628\u062A \u062A\u0642\u0641\u0644\u0647 \u0648\u062A\u0641\u062A\u062D\u0647 \u062A\u0627\u0646\u064A\u061F","SELECT * FROM snacks;","\u0627\u0644\u0643\u0648\u062F \u0634\u063A\u0627\u0644 \u0648\u0623\u0646\u0627 \u0639\u0627\u0631\u0641 \u0644\u064A\u0647\u2026 \u063A\u0627\u0644\u0628\u0627\u064B.","Rate limit: \u062E\u0645\u0633 \u0632\u0642\u0627\u062A \u0643\u0644 \u0631\u0628\u0639 \u0633\u0627\u0639\u0629. \u0628\u0647\u0632\u0631."]},kx={en:"201 Created! Your request reached the top.",ar:"201 Created! \u0627\u0644\u0631\u064A\u0643\u0648\u064A\u0633\u062A \u0628\u062A\u0627\u0639\u0643 \u0648\u0635\u0644 \u0644\u0644\u0642\u0645\u0629."};Gi.registerPlugin(ie,mf);var Le=s=>document.querySelector(s),Rr=matchMedia("(prefers-reduced-motion: reduce)").matches,xc=()=>innerWidth<=820,yf=Ux,gn="en";try{gn=localStorage.getItem("adham-guide-lang")||"en"}catch{}var Cr=new Ax({smoothWheel:!Rr,lerp:.085,autoRaf:!1});Cr.on("scroll",ie.update);Gi.ticker.add(s=>Cr.raf(s*1e3));Gi.ticker.lagSmoothing(0);var vc=[...document.querySelectorAll(".sec")],Sf=s=>Cr.scrollTo(vc[s],{offset:s===0?0:-Math.max(0,(innerHeight-vc[s].offsetHeight)/2),duration:Rr?0:2.2});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",t=>{t.preventDefault(),Sf(+s.dataset.go)}));function dm(){let s=Le("#name"),t="Adham Harp",e=Array.from("\u{13080}\u{130ED}\u{131A3}\u{131F3}\u{13296}\u{132F9}\u{1339B}\u{133CF}\u{13153}\u{13216}\u{13000}\u{13079}\u{13193}\u{1336F}");if(Rr){s.textContent=t;return}let i={p:0};Gi.to(i,{p:1,duration:2.4,ease:"power2.inOut",onUpdate(){let n=Math.floor(i.p*t.length);s.innerHTML=[...t].map((r,o)=>o<n||r===" "?r:`<span class="gl">${e[Math.random()*e.length|0]}</span>`).join("")},onComplete(){s.textContent=t}})}var Mf=Le("#scene"),mn;try{mn=new mu({canvas:Mf,antialias:!0,powerPreference:"high-performance"})}catch{mn=null}var Xn=t1();mn?jw().catch(s=>{console.error(s),Le("#loader").classList.add("done"),dm(),mm()}):(Mf.remove(),Le("#loader").classList.add("done"),dm(),mm());async function jw(){await Promise.race([Promise.all(["700 54px Unbounded",'600 42px "Instrument Sans"'].map(Q=>document.fonts.load(Q))),new Promise(Q=>setTimeout(Q,2500))]);let s=Math.min(devicePixelRatio,xc()?1.5:1.75);mn.setPixelRatio(s),mn.setSize(innerWidth,innerHeight,!1),mn.toneMapping=Wr,mn.toneMappingExposure=.92,mn.shadowMap.enabled=!0,mn.shadowMap.type=Hr;let t=new $a;t.fog=new Ja(1055304,.0085);let e=new Ui(42,innerWidth/innerHeight,.1,1500),i=new $o,n=0,r=1;i.onProgress=(Q,lt,Wt)=>{n=lt,r=Wt,pm(lt/Wt)};let o=Px(t,i),a=Nx();t.add(a.root);let l=new yu(mn);l.addPass(new Su(t,e));let c=new la(new At(innerWidth/2,innerHeight/2),.7,.45,.9);l.addPass(c),l.addPass(new Mu);let h=!0,d=[],f=[],u,p,_=null;function m(){_=xc(),d=[],f=[];for(let Q=0;Q<yf;Q++){let lt=Ox(Q);if(Q===0){_?(d.push(new O(5.5,3.2,lt.z+10)),f.push(new O(2.2,2.6,lt.z-2))):(d.push(new O(10,4.6,lt.z+13)),f.push(new O(-1.2,6.2,8)));continue}if(Q===yf-1){d.push(new O(-7.5,lt.y+3.6,12.5)),f.push(new O(-.6,lt.y+2.1,.4));continue}let Wt=Math.sign(lt.x)||1;d.push(new O(lt.x+Wt*3.2,lt.y+3.3,lt.z+10.5)),f.push(new O(lt.x*.85+Wt*1.2,lt.y+1.7,lt.z-1.2))}u=new On(d,!1,"centripetal"),p=new On(f,!1,"centripetal")}m();let g=vc.map(Q=>({left:0,right:1,center:.5})[Q.dataset.side]??.5),v={k:Rr?0:1},b=new O(46,30,90),y=[],S=()=>{y=vc.map(Q=>Q.offsetTop)};S(),addEventListener("load",S),new ResizeObserver(S).observe(document.body);let T=(Q,lt,Wt)=>{let Et=es.clamp((Wt-Q)/(lt-Q),0,1);return Et*Et*(3-2*Et)};function x(){let Q=(Cr.scroll??scrollY)+innerHeight*.5,lt=innerHeight*.42,Wt=0;for(let Et=1;Et<y.length;Et++)Wt+=T(y[Et]-lt,y[Et]+lt,Q);return Wt}let M=new At,w=new ml;addEventListener("pointermove",Q=>{M.set(Q.clientX/innerWidth*2-1,-(Q.clientY/innerHeight)*2+1)}),Mf.addEventListener("pointerdown",Q=>{let lt=new At(Q.clientX/innerWidth*2-1,-(Q.clientY/innerHeight)*2+1);if(w.setFromCamera(lt,e),w.intersectObject(a.root,!0).length){a.poke();let Wt=zx[gn];Xn.say(Wt[Math.random()*Wt.length|0],{temp:!0})}});let E=0,D=!1;Xn.onSend=()=>{let Q=o.props;a.setMode("celebrate"),o.packetBoost=1,Gi.timeline().to(Q.beam.material,{opacity:.85,duration:.35,ease:"power2.out"}).to(Q.capLight,{intensity:60,duration:.3},0).to(Q.beam.material,{opacity:0,duration:2.4,ease:"power1.in"},.9).to(Q.capLight,{intensity:6,duration:2},1),Q.rings.forEach((lt,Wt)=>Gi.fromTo(lt.scale,{x:1,y:1,z:1},{x:9,y:9,z:9,duration:2.2,delay:Wt*.3,ease:"power2.out"})),Q.rings.forEach((lt,Wt)=>Gi.fromTo(lt.material,{opacity:1},{opacity:0,duration:2.2,delay:Wt*.3})),Xn.say(kx[gn],{temp:!0})},Xn.onLang=()=>{z=-1},Xn.onPoke=()=>{a.poke()};function L(){let Q=innerWidth,lt=innerHeight;mn.setSize(Q,lt,!1),l.setSize(Q,lt),c.setSize(Q/2,lt/2),_!==xc()&&m(),e.aspect=Q/lt,e.fov=Q/lt<.8?60:Q/lt<1.2?50:42,e.updateProjectionMatrix()}addEventListener("resize",L),L();let k=performance.now(),P=0,N=x(),z=-1,F=0,Y=-1,V=new At,C=new At,J=new O,ft=new O;um(N,C),a.root.position.set(C.x,vf(C.x,C.y),C.y);let it=0,H=0,tt=!1,ct=g[0];function pt(){let Q=performance.now(),lt=Math.min((Q-k)/1e3,.05);k=Q,P+=lt;let Wt=P,Et=x();N+=(Et-N)*Math.min(1,lt*(Rr?30:3.4)),um(N,V);let qt=V.distanceTo(C),It=a.root;It.position.x=V.x,It.position.z=V.y;let zt=vf(V.x,V.y);It.position.y+=(zt-It.position.y)*Math.min(1,lt*16),a.st.speed+=(qt/Math.max(lt,.001)-a.st.speed)*.2;let le;qt>.004?le=Math.atan2(V.x-C.x,V.y-C.y):le=Math.atan2(e.position.x-It.position.x,e.position.z-It.position.z);let ne=le-It.rotation.y;ne=Math.atan2(Math.sin(ne),Math.cos(ne)),It.rotation.y+=ne*Math.min(1,lt*7),C.copy(V),a.st.look.set(M.x*.6,M.y*.5),a.st.talk=Xn.talking()?1:0;let $=es.clamp(N/(yf-1),0,1);u.getPoint($,e.position),p.getPoint($,ft),v.k>0&&e.position.lerp(b,v.k*v.k),e.position.x+=M.x*.35,e.position.y+=M.y*.2,e.lookAt(ft);let $t=Math.floor(N),Xe=Math.min($t+1,yf-1),Se=N-$t,oe=xc()?.5:es.lerp(g[$t],g[Xe],Se);ct+=(oe-ct)*Math.min(1,lt*5);let Te=innerWidth,we=innerHeight,G=xc()?0:.42;G?e.setViewOffset(Te*(1+G),we,Te*G*ct,0,Te,we):e.setViewOffset(Te,we*1.5,0,we*.4,Te,we);let Kt=Math.round(N);Math.abs(N-Kt)<.02?F+=lt:F=0,F>.25&&z!==Kt&&(z=Kt,Xn.lines(Bx[gn][Kt]),a.setMode(Fx[Kt])),Math.abs(N-z)>.18&&z!==-1&&(z=-1,Xn.hide(),a.st.mode!=="celebrate"&&a.setMode("idle")),Kt!==Y&&(Y=Kt,Xn.level(Kt),Xn.avoid(vc[Kt])),o.packetBoost=Math.max(o.packetBoost,Math.min(1,Math.abs(Cr.velocity||0)/60)),o.update(Wt,lt,e),a.update(lt,Wt);let ue=a.headAnchor();if(J.copy(ue).project(e),Xn.place((J.x*.5+.5)*innerWidth,(-J.y*.5+.5)*innerHeight,J.z<1),(E=(E+1)%6)===0){w.setFromCamera(M,e);let Ht=w.intersectObject(a.root,!0).length>0;Ht!==D&&(D=Ht,Mf.style.cursor=Ht?"pointer":""),Xn.hint(Ht,(J.x*.5+.5)*innerWidth,(-J.y*.5+.5)*innerHeight)}if(h?l.render(lt):mn.render(t,e),it++,!tt&&it>30&&(H+=lt,it>120)){tt=!0;let Ht=H/90;Ht>.03&&(s=1,mn.setPixelRatio(1),L(),Ht>.045&&(h=!1,mn.shadowMap.enabled=!1))}}Gi.ticker.add(pt),location.hash==="#debug"&&(window.__dbg=()=>({qS:N,q:x(),lastSpoken:z,settleT:F,mode:a.st.mode,speed:a.st.speed,pos:a.root.position.toArray().map(Q=>+Q.toFixed(2)),scroll:Cr.scroll,bounds:y})),await new Promise(Q=>{r<=n&&Q(),i.onLoad=Q,setTimeout(Q,6e3)}),pm(1),setTimeout(()=>{Le("#loader").classList.add("done"),dm(),mm(),Rr||Gi.to(v,{k:0,duration:3.2,ease:"power3.inOut",onComplete:()=>{Math.round(N)===0&&(z=-1)}})},350)}function pm(s){let t=document.querySelectorAll(".ld-s"),e=Math.round(s*t.length);t.forEach((n,r)=>n.classList.toggle("on",r<e));let i=Le("#ld-pct");i&&(i.textContent=`${Math.round(s*100)}%`)}pm(.15);function mm(){Rr||(document.querySelectorAll(".sec:not(#hero) .panel").forEach(s=>{let t=s.querySelector("h2"),e=t?mf.create(t,{type:"words",mask:"words"}):null,i=Gi.timeline({scrollTrigger:{trigger:s,start:"top 82%",toggleActions:"play none none reverse"}});i.from(s,{y:60,opacity:0,duration:.9,ease:"power3.out"}),e&&i.from(e.words,{yPercent:110,duration:.7,stagger:.06,ease:"power3.out"},.15);let n=s.querySelectorAll(".facts li,.chips span,.proj,.arena li,.certs li,.bench li,.pipe li");n.length&&i.from(n,{y:14,opacity:0,duration:.5,stagger:.03,ease:"power2.out"},.3)}),Gi.from(".hero-panel > :not(h1)",{y:24,opacity:0,duration:1,stagger:.12,ease:"power3.out",delay:.5}))}function t1(){let s=Le("#bubble"),t=Le("#bubble-text"),e=Le("#bubble-next"),i=Le("#poke-hint"),n=[],r=0,o=null,a=!1,l=null,c=null,h=!1,d={onSend:null,onLang:null,onPoke:null};function f(it){clearTimeout(l),o&&o.kill(),t.innerHTML="";let H=document.createElement("span");H.className="ghost",H.textContent=it;let tt=document.createElement("span");tt.className="typed",t.append(H,tt),a=!0,s.hidden=!1,s.dir=gn==="ar"?"rtl":"ltr",s.lang=gn,h||(h=!0,Gi.fromTo(s,{scale:.6,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2)"}));let ct=Array.from(it),pt={n:0};o=Gi.to(pt,{n:ct.length,duration:Rr?0:Math.min(2.6,ct.length*.028),ease:"none",onUpdate:()=>tt.textContent=ct.slice(0,Math.round(pt.n)).join(""),onComplete:()=>{a=!1,tt.textContent=it,r<n.length-1&&(l=setTimeout(()=>u(),2600))}})}function u(){r<n.length-1?(r++,f(n[r])):n.length&&(r=0,f(n[0]))}e.addEventListener("click",()=>{clearTimeout(c),u()}),s.addEventListener("click",it=>{(it.target===s||it.target===t)&&(clearTimeout(c),u())}),d.lines=it=>{clearTimeout(c),n=it,r=0,f(it[0])},d.say=(it,{temp:H}={})=>{let tt=n.slice(),ct=r;f(it),clearTimeout(c),H&&tt.length&&(c=setTimeout(()=>{n=tt,r=ct,f(n[r])},3200))},d.hide=()=>{clearTimeout(l),h&&(h=!1,a=!1,o&&o.kill(),Gi.to(s,{scale:.7,opacity:0,duration:.2,onComplete:()=>{h||(s.hidden=!0)}}))},d.talking=()=>a;let p=0,_=0,m=null,g="";d.avoid=it=>{m=it?it.querySelector(".panel"):null,g=it?it.dataset.side:""},d.place=(it,H,tt)=>{if(s.hidden)return;p=s.offsetWidth,_=s.offsetHeight;let ct=it-40,pt=H-_-22,Q=!1;if(pt<76&&(pt=H+34,Q=!0),m&&innerWidth>820){let lt=m.getBoundingClientRect();lt.bottom>pt&&lt.top<pt+_&&(g==="left"&&ct<lt.right+14&&(ct=lt.right+14),g==="right"&&ct+p>lt.left-14&&(ct=lt.left-p-14))}ct=Math.max(12,Math.min(innerWidth-p-12,ct)),pt=Math.max(70,Math.min(innerHeight-_-12,pt)),s.classList.toggle("below",Q),s.style.setProperty("--tail",`${Math.max(22,Math.min(p-22,it-ct))}px`),s.style.transform=`translate(${ct}px,${pt}px)`,s.style.visibility=tt?"visible":"hidden"},d.hint=(it,H,tt)=>{i.classList.toggle("on",it&&!h),it&&(i.style.transform=`translate(${H+30}px,${tt+40}px)`)};let v=Le("#mini"),b=Le("#mini-label"),y=[86,74,62,50,38,26,14];v.innerHTML=y.map((it,H)=>`<rect data-i="${H}" x="${(90-it)/2}" y="${128-H*19}" width="${it}" height="16" rx="2"><title>${fm[H]}</title></rect>`).join(""),v.querySelectorAll("rect").forEach(it=>it.addEventListener("click",()=>Sf(+it.dataset.i)));let S=document.querySelectorAll(".links a");d.level=it=>{v.querySelectorAll("rect").forEach((H,tt)=>{H.classList.toggle("on",tt===it),H.classList.toggle("done",tt<it)}),b.textContent=fm[it],S.forEach(H=>H.classList.toggle("on",+H.dataset.go===it))};let T=Le("#lang"),x=()=>{T.textContent=gn==="ar"?"EN":"\u0639",T.setAttribute("aria-label",gn==="ar"?"Switch the guide to English":"Switch the guide to Egyptian Arabic"),document.documentElement.classList.toggle("ar",gn==="ar")};T.addEventListener("click",()=>{gn=gn==="ar"?"en":"ar";try{localStorage.setItem("adham-guide-lang",gn)}catch{}x(),d.onLang&&d.onLang()}),x();let M={name:Le("#f-name"),role:Le("#f-role"),msg:Le("#f-msg")},w=Le("#req-preview"),E=Le("#req-status"),D=it=>JSON.stringify(it),L=()=>{w.textContent=`POST /api/hire HTTP/1.1
Host: adham107harp.github.io
Content-Type: application/json

{
  "from": ${D(M.name.value||"you")},
  "about": ${D(M.role.value||"an opportunity")},
  "message": ${D((M.msg.value||"\u2026").slice(0,140))}
}`};Object.values(M).forEach(it=>it.addEventListener("input",L)),L();let k="adhamharp994@gmail.com";Le("#req").addEventListener("submit",it=>{if(it.preventDefault(),!M.msg.value.trim()){E.textContent="400 Bad Request: the message is empty.",M.msg.focus();return}let H=`${M.role.value||"Hello"} \u2014 from ${M.name.value||"your portfolio"}`,tt=`mailto:${k}?subject=${encodeURIComponent(H)}&body=${encodeURIComponent(M.msg.value)}`;E.textContent=`201 Created. Your mail app should open; if it doesn't, write to ${k}.`,d.onSend&&d.onSend(),setTimeout(()=>{location.href=tt},900)}),Le("#copy-mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(k),E.textContent=`Copied ${k}`}catch{E.textContent=k}});let P=Le("#term"),N=Le("#term-out"),z=Le("#term-in"),F=(it,H="")=>{let tt=document.createElement("div");H&&(tt.className=H),tt.textContent=it,N.appendChild(tt),N.scrollTop=N.scrollHeight},Y={home:0,hero:0,about:1,stack:2,work:3,projects:3,research:4,arena:5,contact:6},V={help:()=>"commands: whoami \xB7 ls \xB7 cat about \xB7 projects \xB7 research \xB7 arena \xB7 contact \xB7 goto <section> \xB7 lang ar|en \xB7 poke \xB7 sudo hire adham \xB7 clear \xB7 exit",whoami:()=>"Adham Harp \u2014 AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).",ls:()=>"about/  stack/  work/  research/  arena/  contact/  capstone.gold","cat about":()=>"Backend first, AI on top. Builds APIs, databases and the logic behind products. Class of 2028.",projects:()=>"SmartHabbit (backend) \xB7 BU-LabTrack (backend API) \xB7 CAPCOM: Storm Watch (NASA Space Apps) \xB7 Shubha (in progress) \xB7 Sentinel FDS \xB7 The RSA Heist",research:()=>"IoT Sentinel: XGBoost + Isolation Forest + decision fusion \u2192 4-tier risk. IEEE Xplore, ITC-Egypt 2026.",arena:()=>"ICPC ECPC quals: 88th (2025), 177th (2026). 248+ Codeforces problems. Next: ODC Champions, 3 Dec.",contact:()=>`email: ${k}
github: adham107harp
linkedin: adham-harp-43bb6232b`,poke:()=>(d.onPoke&&d.onPoke(),"ouch. he says hi."),"sudo hire adham":()=>(setTimeout(()=>{ft(),Sf(6),setTimeout(()=>d.onSend&&d.onSend(),2800)},900),"[sudo] permission granted. 201 Created \u2014 taking you to the capstone\u2026"),clear:()=>(N.textContent="",null),exit:()=>(ft(),null)};function C(it){let H=it.trim().replace(/\s+/g," ").toLowerCase();if(!H)return;if(F(`$ ${it}`,"c"),H.startsWith("goto ")){let pt=Y[H.slice(5)];if(pt===void 0)return F(`no such section: ${H.slice(5)}`,"e");ft(),Sf(pt);return}if(H.startsWith("lang ")){let pt=H.slice(5);if(pt!=="ar"&&pt!=="en")return F("lang ar | lang en","e");gn=pt;try{localStorage.setItem("adham-guide-lang",gn)}catch{}return x(),d.onLang&&d.onLang(),F(`guide speaks ${pt==="ar"?"Egyptian Arabic":"English"} now.`)}if(H==="sudo rm -rf /")return F("nice try. the pyramid has stood for 4,600 years.","e");let tt=V[H];if(!tt)return F(`command not found: ${H}. try "help".`,"e");let ct=tt();ct&&F(ct)}function J(){P.hidden=!1,N.textContent||F('Welcome to adham@saqqara. Type "help".'),setTimeout(()=>z.focus(),30),Cr.stop()}function ft(){P.hidden=!0,Cr.start(),Le("#term-btn").focus()}return Le("#term-btn").addEventListener("click",J),Le("#term-close").addEventListener("click",ft),P.addEventListener("click",it=>{it.target===P&&ft()}),Le("#term-form").addEventListener("submit",it=>{it.preventDefault(),C(z.value),z.value=""}),addEventListener("keydown",it=>{let H=/INPUT|TEXTAREA/.test(document.activeElement?.tagName);it.key==="Escape"&&!P.hidden?ft():(it.key==="`"||it.key==="~")&&!H&&(it.preventDefault(),P.hidden?J():ft())}),d}
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

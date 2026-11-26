var Xv=Object.defineProperty;var qv=(s,e,t)=>e in s?Xv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ve=(s,e,t)=>qv(s,typeof e!="symbol"?e+"":e,t);var V0=0,Bf=1,G0=2;var fo=1,W0=2,ba=3,Fr=0,Bn=1,Zn=2,In=0,Ta=1,ir=2,kf=3,zf=4,tu=5;var Ki=100,X0=101,q0=102,Y0=103,$0=104,po=200,Z0=201,J0=202,K0=203,Hf=204,Vf=205,zl=206,Q0=207,Hl=208,j0=209,eg=210,tg=211,ng=212,ig=213,sg=214,Ah=0,Rh=1,Ch=2,aa=3,Ph=4,Ih=5,Dh=6,Lh=7,Gf=0,rg=1,og=2,Rs=0,Vl=1,Gl=2,Wl=3,mo=4,Xl=5,ql=6,Yl=7;var Wf=300,go=301,Ea=302,nu=303,iu=304,Mi=1e3,bs=1001,Nh=1002,ln=1003,ag=1004;var $l=1005;var ci=1006,su=1007;var sr=1008;var Jn=1009,Xf=1010,qf=1011,wa=1012,ru=1013,xs=1014,Qi=1015,nn=1016,ou=1017,au=1018,rr=1020,Yf=35902,$f=35899,Zf=1021,Jf=1022,Oi=1023,Qs=1026,vs=1027,lu=1028,cu=1029,Br=1030,hu=1031;var uu=1033,Zl=33776,Jl=33777,Kl=33778,Ql=33779,du=35840,fu=35841,pu=35842,mu=35843,gu=36196,_u=37492,xu=37496,vu=37488,yu=37489,jl=37490,Su=37491,Mu=37808,bu=37809,Tu=37810,Eu=37811,wu=37812,Au=37813,Ru=37814,Cu=37815,Pu=37816,Iu=37817,Du=37818,Lu=37819,Nu=37820,Uu=37821,Ou=36492,Fu=36494,Bu=36495,ku=36283,zu=36284,ec=36285,Hu=36286;var gl=2300,Uh=2301,Th=2302,Rf=2303,Cf=2400,Pf=2401,If=2402;var lg=3200;var tc=0,cg=1,or="",Vt="srgb",_l="srgb-linear",xl="linear",bt="srgb";var Eh=7680;var hg=519,ug=512,dg=513,fg=514,Kf=515,pg=516,mg=517,Qf=518,jf=519,ep=35044;var tp="300 es",qi=2e3,la=2001;function Yv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $v(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gg(){let s=ca("canvas");return s.style.display="block",s}var o0={},ha=null;function vl(...s){let e="THREE."+s.shift();ha?ha("log",e,...s):console.log(e,...s)}function _g(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=_g(s);let e="THREE."+s.shift();if(ha)ha("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function st(...s){s=_g(s);let e="THREE."+s.shift();if(ha)ha("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function lo(...s){let e=s.join(" ");e in o0||(o0[e]=!0,it(...s))}function xg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var vg={[Ah]:Ah,[Ch]:Dh,[Ph]:Ph,[aa]:Ih,[Rh]:Rh,[Dh]:Ch,[Lh]:Lh,[Ih]:aa},Ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a0=1234567,pl=Math.PI/180,ua=180/Math.PI;function kr(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]).toLowerCase()}function ft(s,e,t){return Math.max(e,Math.min(t,s))}function np(s,e){return(s%e+e)%e}function Zv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jv(s,e,t){return s!==e?(t-s)/(e-s):0}function ml(s,e,t){return(1-t)*s+t*e}function Kv(s,e,t,n){return ml(s,e,1-Math.exp(-t*n))}function Qv(s,e=1){return e-Math.abs(np(s,e*2)-e)}function jv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ey(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ty(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ny(s,e){return s+Math.random()*(e-s)}function iy(s){return s*(.5-Math.random())}function sy(s){s!==void 0&&(a0=s);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ry(s){return s*pl}function oy(s){return s*ua}function ay(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ly(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cy(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(s,e){if(e.constructor===Float32Array)return s;let t=Vu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function rp(s,e){if(e.constructor===Float32Array)return s;let t=Vu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var Kn={DEG2RAD:pl,RAD2DEG:ua,generateUUID:kr,clamp:ft,euclideanModulo:np,mapLinear:Zv,inverseLerp:Jv,lerp:ml,damp:Kv,pingpong:Qv,smoothstep:jv,smootherstep:ey,randInt:ty,randFloat:ny,randFloatSpread:iy,seededRandom:sy,degToRad:ry,radToDeg:oy,isPowerOfTwo:ay,ceilPowerOfTwo:ly,floorPowerOfTwo:ip,setQuaternionFromProperEuler:cy,normalize:rp,denormalize:sp},up=class up{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;var Ce=up,hi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),T=Math.sin(v);p=Math.sin(p*v)/T,a=Math.sin(a*v)/T,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dp=class dp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(l0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(l0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dp.prototype.isVector3=!0;var B=dp,sf=new B,l0=new hi,fp=class fp{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],T=i[4],y=i[7],b=i[2],M=i[5],_=i[8];return r[0]=o*x+a*v+l*b,r[3]=o*g+a*T+l*M,r[6]=o*p+a*y+l*_,r[1]=c*x+h*v+u*b,r[4]=c*g+h*T+u*M,r[7]=c*p+h*y+u*_,r[2]=f*x+d*v+m*b,r[5]=f*g+d*T+m*M,r[8]=f*p+d*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rf.makeScale(e,t)),this}rotate(e){return lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;var rt=fp,rf=new rt,c0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){let s={enabled:!0,workingColorSpace:_l,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(i.r=oa(i.r),i.g=oa(i.g),i.b=oa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===or?xl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_l]:{primaries:e,whitePoint:n,transfer:xl,toXYZ:c0,fromXYZ:h0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:c0,fromXYZ:h0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}var gt=hy();function Ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ho,Oh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=ca("canvas")),Ho.width=e.width,Ho.height=e.height;let i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ks(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ks(t[n]/255)*255):t[n]=Ks(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uy=0,da=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(of(i[o].image)):r.push(of(i[o]))}else r=of(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var dy=0,af=new B,$n=class s extends Ts{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=bs,i=bs,r=ci,o=sr,a=Oi,l=Jn,c=s.DEFAULT_ANISOTROPY,h=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=kr(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(af).x}get height(){return this.source.getSize(af).y}get depth(){return this.source.getSize(af).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case Nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case Nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Wf;$n.DEFAULT_ANISOTROPY=1;var pp=class pp{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(d+1)/2,b=(p+1)/2,M=(h+f)/4,_=(u+x)/4,S=(m+g)/4;return T>y&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=M/n,r=_/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=_/r,i=S/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pp.prototype.isVector4=!0;var Gt=pp,Fh=class extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new $n({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new da(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wt=class extends Fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yl=class extends $n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bh=class extends $n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var eu=class eu{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Vo.setFromMatrixColumn(e,0).length(),r=1/Vo.setFromMatrixColumn(e,1).length(),o=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,py)}lookAt(e,t,n){let i=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Tr.crossVectors(n,Li),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Tr.crossVectors(n,Li)),Tr.normalize(),Qc.crossVectors(Li,Tr),i[0]=Tr.x,i[4]=Qc.x,i[8]=Li.x,i[1]=Tr.y,i[5]=Qc.y,i[9]=Li.y,i[2]=Tr.z,i[6]=Qc.z,i[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],T=n[7],y=n[11],b=n[15],M=i[0],_=i[4],S=i[8],A=i[12],w=i[1],D=i[5],P=i[9],N=i[13],R=i[2],U=i[6],H=i[10],k=i[14],$=i[3],X=i[7],I=i[11],J=i[15];return r[0]=o*M+a*w+l*R+c*$,r[4]=o*_+a*D+l*U+c*X,r[8]=o*S+a*P+l*H+c*I,r[12]=o*A+a*N+l*k+c*J,r[1]=h*M+u*w+f*R+d*$,r[5]=h*_+u*D+f*U+d*X,r[9]=h*S+u*P+f*H+d*I,r[13]=h*A+u*N+f*k+d*J,r[2]=m*M+x*w+g*R+p*$,r[6]=m*_+x*D+g*U+p*X,r[10]=m*S+x*P+g*H+p*I,r[14]=m*A+x*N+g*k+p*J,r[3]=v*M+T*w+y*R+b*$,r[7]=v*_+T*D+y*U+b*X,r[11]=v*S+T*P+y*H+b*I,r[15]=v*A+T*N+y*k+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=l*d-c*f,T=a*d-c*u,y=a*f-l*u,b=o*d-c*h,M=o*f-l*h,_=o*u-a*h;return t*(x*v-g*T+p*y)-n*(m*v-g*b+p*M)+i*(m*T-x*b+p*_)-r*(m*y-x*M+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*a-n*o,T=t*l-i*o,y=t*c-r*o,b=n*l-i*a,M=n*c-r*a,_=i*c-r*l,S=h*x-u*m,A=h*g-f*m,w=h*p-d*m,D=u*g-f*x,P=u*p-d*x,N=f*p-d*g,R=v*N-T*P+y*D+b*w-M*A+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(a*N-l*P+c*D)*U,e[1]=(i*P-n*N-r*D)*U,e[2]=(x*_-g*M+p*b)*U,e[3]=(f*M-u*_-d*b)*U,e[4]=(l*w-o*N-c*A)*U,e[5]=(t*N-i*w+r*A)*U,e[6]=(g*y-m*_-p*T)*U,e[7]=(h*_-f*y+d*T)*U,e[8]=(o*P-a*w+c*S)*U,e[9]=(n*w-t*P-r*S)*U,e[10]=(m*M-x*y+p*v)*U,e[11]=(u*y-h*M-d*v)*U,e[12]=(a*A-o*D-l*S)*U,e[13]=(t*D-n*A+i*S)*U,e[14]=(x*T-m*b-g*v)*U,e[15]=(h*b-u*T+f*v)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,v=l*c,T=l*h,y=l*u,b=n.x,M=n.y,_=n.z;return i[0]=(1-(x+p))*b,i[1]=(d+y)*b,i[2]=(m-T)*b,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(f+p))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(m+T)*_,i[9]=(g-v)*_,i[10]=(1-(f+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Vo.set(i[0],i[1],i[2]).length(),a=Vo.set(i[4],i[5],i[6]).length(),l=Vo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),us.copy(this);let c=1/o,h=1/a,u=1/l;return us.elements[0]*=c,us.elements[1]*=c,us.elements[2]*=c,us.elements[4]*=h,us.elements[5]*=h,us.elements[6]*=h,us.elements[8]*=u,us.elements[9]*=u,us.elements[10]*=u,t.setFromRotationMatrix(us),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=qi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===qi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===la)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=qi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===qi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===la)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};eu.prototype.isMatrix4=!0;var lt=eu,Vo=new B,us=new lt,fy=new B(0,0,0),py=new B(1,1,1),Tr=new B,Qc=new B,Li=new B,u0=new lt,d0=new hi,Yi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return d0.setFromEuler(this),this.setFromQuaternion(d0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},my=0,f0=new B,Go=new hi,Xs=new lt,jc=new B,rl=new B,gy=new B,_y=new hi,p0=new B(1,0,0),m0=new B(0,1,0),g0=new B(0,0,1),_0={type:"added"},xy={type:"removed"},Wo={type:"childadded",child:null},lf={type:"childremoved",child:null},gn=class s extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new Yi,n=new hi,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new rt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(p0,e)}rotateY(e){return this.rotateOnAxis(m0,e)}rotateZ(e){return this.rotateOnAxis(g0,e)}translateOnAxis(e,t){return f0.copy(e).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(p0,e)}translateY(e){return this.translateOnAxis(m0,e)}translateZ(e){return this.translateOnAxis(g0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jc.copy(e):jc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xs.lookAt(rl,jc,this.up):Xs.lookAt(jc,rl,this.up),this.quaternion.setFromRotationMatrix(Xs),i&&(Xs.extractRotation(i.matrixWorld),Go.setFromRotationMatrix(Xs),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_0),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xy),lf.child=e,this.dispatchEvent(lf),lf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_0),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new B(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vy={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},eh={h:0,s:0,l:0};function cf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=np(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cf(o,r,e+1/3),this.g=cf(o,r,e),this.b=cf(o,r,e-1/3)}return gt.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=yg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return gt.workingToColorSpace(qn.copy(this),e),Math.round(ft(qn.r*255,0,255))*65536+Math.round(ft(qn.g*255,0,255))*256+Math.round(ft(qn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(qn.copy(this),t);let n=qn.r,i=qn.g,r=qn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=Vt){gt.workingToColorSpace(qn.copy(this),e);let t=qn.r,n=qn.g,i=qn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(eh);let n=ml(Er.h,eh.h,t),i=ml(Er.s,eh.s,t),r=ml(Er.l,eh.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new Le;Le.NAMES=yg;var Sl=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Cr=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ds=new B,qs=new B,hf=new B,Ys=new B,Xo=new B,qo=new B,x0=new B,uf=new B,df=new B,ff=new B,pf=new Gt,mf=new Gt,gf=new Gt,Js=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ds.subVectors(e,t),i.cross(ds);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ds.subVectors(i,t),qs.subVectors(n,t),hf.subVectors(e,t);let o=ds.dot(ds),a=ds.dot(qs),l=ds.dot(hf),c=qs.dot(qs),h=qs.dot(hf),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ys)===null?!1:Ys.x>=0&&Ys.y>=0&&Ys.x+Ys.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ys.x),l.addScaledVector(o,Ys.y),l.addScaledVector(a,Ys.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,n),gf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(pf,r.x),o.addScaledVector(mf,r.y),o.addScaledVector(gf,r.z),o}static isFrontFacing(e,t,n,i){return ds.subVectors(n,t),qs.subVectors(e,t),ds.cross(qs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ds.subVectors(this.c,this.b),qs.subVectors(this.a,this.b),ds.cross(qs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Xo.subVectors(i,n),qo.subVectors(r,n),uf.subVectors(e,n);let l=Xo.dot(uf),c=qo.dot(uf);if(l<=0&&c<=0)return t.copy(n);df.subVectors(e,i);let h=Xo.dot(df),u=qo.dot(df);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Xo,o);ff.subVectors(e,r);let d=Xo.dot(ff),m=qo.dot(ff);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(qo,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return x0.subVectors(r,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(x0,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Xo,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Es=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fs):fs.fromBufferAttribute(r,o),fs.applyMatrix4(e.matrixWorld),this.expandByPoint(fs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),th.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),th.copy(n.boundingBox)),th.applyMatrix4(e.matrixWorld),this.union(th)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fs),fs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),nh.subVectors(this.max,ol),Yo.subVectors(e.a,ol),$o.subVectors(e.b,ol),Zo.subVectors(e.c,ol),wr.subVectors($o,Yo),Ar.subVectors(Zo,$o),so.subVectors(Yo,Zo);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-so.z,so.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,so.z,0,-so.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-so.y,so.x,0];return!_f(t,Yo,$o,Zo,nh)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,Yo,$o,Zo,nh))?!1:(ih.crossVectors(wr,Ar),t=[ih.x,ih.y,ih.z],_f(t,Yo,$o,Zo,nh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$s=[new B,new B,new B,new B,new B,new B,new B,new B],fs=new B,th=new Es,Yo=new B,$o=new B,Zo=new B,wr=new B,Ar=new B,so=new B,ol=new B,nh=new B,ih=new B,ro=new B;function _f(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ro.fromArray(s,r);let a=i.x*Math.abs(ro.x)+i.y*Math.abs(ro.y)+i.z*Math.abs(ro.z),l=e.dot(ro),c=t.dot(ro),h=n.dot(ro);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var mn=new B,sh=new Ce,yy=0,Un=class extends Ts{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ep,this.updateRanges=[],this.gpuType=Qi,this.version=0,this._normalizationScale=e!==void 0?Vu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sh.fromBufferAttribute(this,t),sh.applyMatrix3(e),this.setXY(t,sh.x,sh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.array)}};var Ml=class extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bl=class extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sy=new Es,al=new B,xf=new B,js=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);let t=al.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(al,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(xf)),this.expandByPoint(al.copy(e.center).sub(xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},My=0,Xi=new lt,vf=new gn,Jo=new B,Ni=new Es,ll=new Es,Pn=new B,Yt=class s extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?bl:Ml)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,n){return Xi.makeTranslation(e,t,n),this.applyMatrix4(Xi),this}scale(e,t,n){return Xi.makeScale(e,t,n),this.applyMatrix4(Xi),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ll.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(Ni.min,ll.min),Ni.expandByPoint(Pn),Pn.addVectors(Ni.max,ll.max),Ni.expandByPoint(Pn)):(Ni.expandByPoint(ll.min),Ni.expandByPoint(ll.max))}Ni.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Pn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pn.fromBufferAttribute(a,c),l&&(Jo.fromBufferAttribute(e,c),Pn.add(Jo)),i=Math.max(i,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)a[A]=new B,l[A]=new B;let h=new B,u=new B,f=new B,d=new Ce,m=new Ce,x=new Ce,g=new B,p=new B;function v(A,w,D){c[A]=c[w]=c[D]=1,h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,D),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,D),u.sub(h),f.sub(h),m.sub(d),x.sub(d);let P=1/(m.x*x.y-x.x*m.y);isFinite(P)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(P),a[A].add(g),a[w].add(g),a[D].add(g),l[A].add(p),l[w].add(p),l[D].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let A=0,w=T.length;A<w;++A){let D=T[A],P=D.start,N=D.count;for(let R=P,U=P+N;R<U;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new B,b=new B,M=new B,_=new B;function S(A){M.fromBufferAttribute(i,A),_.copy(M);let w=a[A];y.copy(w),y.sub(M.multiplyScalar(M.dot(w))).normalize(),b.crossVectors(_,w);let P=b.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,P)}for(let A=0,w=n.count;A<w;++A)c[A]&&S(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Un(f,h,u)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},kh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ep,this.updateRanges=[],this.version=0,this.uuid=kr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=v0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=v0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function v0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=kr()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var li=new B,Tl=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Vu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)li.fromBufferAttribute(this,t),li.applyMatrix4(e),this.setXYZ(t,li.x,li.y,li.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)li.fromBufferAttribute(this,t),li.applyNormalMatrix(e),this.setXYZ(t,li.x,li.y,li.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)li.fromBufferAttribute(this,t),li.transformDirection(e),this.setXYZ(t,li.x,li.y,li.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.data.array)}},yf=new B,by=new B,Ty=new rt,ps=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yf.subVectors(n,t).cross(by.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ty.getNormalMatrix(e),i=this.coplanarPoint(yf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ey=0,ms=class extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Ta,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Vf,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eh,this.stencilZFail=Eh,this.stencilZPass=Eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ps().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},er=class extends ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ko,cl=new B,Qo=new B,jo=new B,ea=new Ce,hl=new Ce,Sg=new lt,rh=new B,ul=new B,oh=new B,y0=new Ce,Sf=new Ce,S0=new Ce,Pr=class extends gn{constructor(e=new er){if(super(),this.isSprite=!0,this.type="Sprite",Ko===void 0){Ko=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kh(t,5);Ko.setIndex([0,1,2,0,2,3]),Ko.setAttribute("position",new Tl(n,3,0,!1)),Ko.setAttribute("uv",new Tl(n,2,3,!1))}this.geometry=Ko,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qo.setFromMatrixScale(this.matrixWorld),Sg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),jo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qo.multiplyScalar(-jo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ah(rh.set(-.5,-.5,0),jo,o,Qo,i,r),ah(ul.set(.5,-.5,0),jo,o,Qo,i,r),ah(oh.set(.5,.5,0),jo,o,Qo,i,r),y0.set(0,0),Sf.set(1,0),S0.set(1,1);let a=e.ray.intersectTriangle(rh,ul,oh,!1,cl);if(a===null&&(ah(ul.set(-.5,.5,0),jo,o,Qo,i,r),Sf.set(0,1),a=e.ray.intersectTriangle(rh,oh,ul,!1,cl),a===null))return;let l=e.ray.origin.distanceTo(cl);l<e.near||l>e.far||t.push({distance:l,point:cl.clone(),uv:Js.getInterpolation(cl,rh,ul,oh,y0,Sf,S0,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ah(s,e,t,n,i,r){ea.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(hl.x=r*ea.x-i*ea.y,hl.y=i*ea.x+r*ea.y):hl.copy(ea),s.copy(e),s.x+=hl.x,s.y+=hl.y,s.applyMatrix4(Sg)}var Zs=new B,Mf=new B,lh=new B,ch=new B,ma=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zs.copy(this.origin).addScaledVector(this.direction,t),Zs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mf.copy(e).add(t).multiplyScalar(.5),lh.copy(t).sub(e).normalize(),ch.copy(this.origin).sub(Mf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(lh),a=ch.dot(this.direction),l=-ch.dot(lh),c=ch.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mf).addScaledVector(lh,f),d}intersectSphere(e,t){if(e.radius<0)return null;Zs.subVectors(e.center,this.origin);let n=Zs.dot(this.direction),i=Zs.dot(Zs)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zs)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=n.x-o.x,v=n.y-o.y,T=n.z-o.z,y=Math.abs(l),b=Math.abs(c),M=Math.abs(h),_,S,A,w,D,P,N,R,U,H,k,$;if(y>=b&&y>=M?(A=l,P=u,U=m,$=p,l>=0?(_=c,S=h,w=f,D=d,N=x,R=g,H=v,k=T):(_=h,S=c,w=d,D=f,N=g,R=x,H=T,k=v)):b>=M?(A=c,P=f,U=x,$=v,c>=0?(_=h,S=l,w=d,D=u,N=g,R=m,H=T,k=p):(_=l,S=h,w=u,D=d,N=m,R=g,H=p,k=T)):(A=h,P=d,U=g,$=T,h>=0?(_=l,S=c,w=u,D=f,N=m,R=x,H=p,k=v):(_=c,S=l,w=f,D=u,N=x,R=m,H=v,k=p)),A===0)return null;let X=_/A,I=S/A,J=1/A,pe=w-X*P,Me=D-I*P,V=N-X*U,Y=R-I*U,ue=H-X*$,ce=k-I*$,he=ue*Y-ce*V,ye=pe*ce-Me*ue,We=V*Me-Y*pe;if(i){if(he<0||ye<0||We<0)return null}else if((he<0||ye<0||We<0)&&(he>0||ye>0||We>0))return null;let Ee=he+ye+We;if(Ee===0)return null;let Ue=J*(he*P+ye*U+We*$);return(Ee>0?Ue<0:Ue>0)?null:this.at(Ue/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},M0=new lt,oo=new ma,hh=new js,b0=new B,uh=new B,dh=new B,fh=new B,bf=new B,ph=new B,T0=new B,mh=new B,Te=class extends gn{constructor(e=new Yt,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ph.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(bf.fromBufferAttribute(u,e),o?ph.addScaledVector(bf,h):ph.addScaledVector(bf.sub(t),h))}t.add(ph)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hh.copy(n.boundingSphere),hh.applyMatrix4(r),oo.copy(e.ray).recast(e.near),!(hh.containsPoint(oo.origin)===!1&&(oo.intersectSphere(hh,b0)===null||oo.origin.distanceToSquared(b0)>(e.far-e.near)**2))&&(M0.copy(r).invert(),oo.copy(e.ray).applyMatrix4(M0),!(n.boundingBox!==null&&oo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oo)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,b=T;y<b;y+=3){let M=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);i=gh(this,p,e,n,c,h,u,M,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),T=a.getX(g+1),y=a.getX(g+2);i=gh(this,o,e,n,c,h,u,v,T,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,b=T;y<b;y+=3){let M=y,_=y+1,S=y+2;i=gh(this,p,e,n,c,h,u,M,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=g,T=g+1,y=g+2;i=gh(this,o,e,n,c,h,u,v,T,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function wy(s,e,t,n,i,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Fr,a),l===null)return null;mh.copy(a),mh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(mh);return c<t.near||c>t.far?null:{distance:c,point:mh.clone(),object:s}}function gh(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,uh),s.getVertexPosition(l,dh),s.getVertexPosition(c,fh);let h=wy(s,e,t,n,uh,dh,fh,T0);if(h){let u=new B;Js.getBarycoord(T0,uh,dh,fh,u),i&&(h.uv=Js.getInterpolatedAttribute(i,a,l,c,u,new Ce)),r&&(h.uv1=Js.getInterpolatedAttribute(r,a,l,c,u,new Ce)),o&&(h.normal=Js.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new B,materialIndex:0};Js.getNormal(uh,dh,fh,f.normal),h.face=f,h.barycoord=u}return h}var tr=class extends $n{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ln,h=ln,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var El=class extends Un{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ta=new lt,E0=new lt,_h=[],w0=new Es,Ay=new lt,dl=new Te,fl=new js,ws=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ay)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ta),w0.copy(e.boundingBox).applyMatrix4(ta),this.boundingBox.union(w0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ta),fl.copy(e.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(fl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(dl.geometry=this.geometry,dl.material=this.material,dl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(n),e.ray.intersectsSphere(fl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ta),E0.multiplyMatrices(n,ta),dl.matrixWorld=E0,dl.raycast(e,_h);for(let o=0,a=_h.length;o<a;o++){let l=_h[o];l.instanceId=r,l.object=this,t.push(l)}_h.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(i*this.count),i,this.count,lu,Qi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ao=new js,Ry=new Ce(.5,.5),xh=new B,Ir=class{constructor(e=new ps,t=new ps,n=new ps,i=new ps,r=new ps,o=new ps){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],T=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,p-m,b-v).normalize(),i[1].setComponents(c+o,d+h,p+m,b+v).normalize(),i[2].setComponents(c+a,d+u,p+x,b+T).normalize(),i[3].setComponents(c-a,d-u,p-x,b-T).normalize(),n)i[4].setComponents(l,f,g,y).normalize(),i[5].setComponents(c-l,d-f,p-g,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-g,b-y).normalize(),t===qi)i[5].setComponents(c+l,d+f,p+g,b+y).normalize();else if(t===la)i[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ao.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ao.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ao)}intersectsSprite(e){ao.center.set(0,0,0);let t=Ry.distanceTo(e.center);return ao.radius=.7071067811865476+t,ao.applyMatrix4(e.matrixWorld),this.intersectsSphere(ao)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xh.x=i.normal.x>0?e.max.x:e.min.x,xh.y=i.normal.y>0?e.max.y:e.min.y,xh.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},A0=new lt,zh=class s{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];A0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ir),n[i].setFromProjectionMatrix(A0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ir),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var co=class extends ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},R0=new lt,Df=new ma,vh=new js,yh=new B,ho=class extends gn{constructor(e=new Yt,t=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vh.copy(n.boundingSphere),vh.applyMatrix4(i),vh.radius+=r,e.ray.intersectsSphere(vh)===!1)return;R0.copy(i).invert(),Df.copy(e.ray).applyMatrix4(R0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);yh.fromBufferAttribute(u,g),C0(yh,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)yh.fromBufferAttribute(u,m),C0(yh,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function C0(s,e,t,n,i,r,o){let a=Df.distanceSqToPoint(s);if(a<t){let l=new B;Df.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var wl=class extends $n{constructor(e=[],t=go,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends $n{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends $n{constructor(e,t,n=xs,i,r,o,a=ln,l=ln,c,h=Qs,u=1){if(h!==Qs&&h!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Al=class extends gs{constructor(e,t=xs,n=go,i,r,o=ln,a=ln,l,c=Qs){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rl=class extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class s extends Yt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function m(x,g,p,v,T,y,b,M,_,S,A){let w=y/_,D=b/S,P=y/2,N=b/2,R=M/2,U=_+1,H=S+1,k=0,$=0,X=new B;for(let I=0;I<H;I++){let J=I*D-N;for(let pe=0;pe<U;pe++){let Me=pe*w-P;X[x]=Me*v,X[g]=J*T,X[p]=R,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=M>0?1:-1,h.push(X.x,X.y,X.z),u.push(pe/_),u.push(1-I/S),k+=1}}for(let I=0;I<S;I++)for(let J=0;J<_;J++){let pe=f+J+U*I,Me=f+J+U*(I+1),V=f+(J+1)+U*(I+1),Y=f+(J+1)+U*I;l.push(pe,Me,Y),l.push(Me,V,Y),$+=6}a.addGroup(d,$,A),d+=$,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},nr=class s extends Yt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,x=i+1,g=new B,p=new B;for(let v=0;v<=m;v++){let T=0,y=0,b=0,M=0;if(v<=n){let A=v/n,w=A*Math.PI/2;y=-h-e*Math.cos(w),b=e*Math.sin(w),M=-e*Math.cos(w),T=A*u}else if(v<=n+r){let A=(v-n)/r;y=-h+A*t,b=e,M=0,T=u+A*f}else{let A=(v-n-r)/n,w=A*Math.PI/2;y=h+e*Math.sin(w),b=e*Math.cos(w),M=e*Math.sin(w),T=u+f+A*u}let _=Math.max(0,Math.min(1,T/d)),S=0;v===0?S=.5/i:v===m&&(S=-.5/i);for(let A=0;A<=i;A++){let w=A/i,D=w*Math.PI*2,P=Math.sin(D),N=Math.cos(D);p.x=-b*N,p.y=y,p.z=b*P,a.push(p.x,p.y,p.z),g.set(-b*N,M,b*P),g.normalize(),l.push(g.x,g.y,g.z),c.push(w+S,_)}if(v>0){let A=(v-1)*x;for(let w=0;w<i;w++){let D=A+w,P=A+w+1,N=v*x+w,R=v*x+w+1;o.push(D,P,N),o.push(P,R,N)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Dr=class s extends Yt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new B,h=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},tn=class s extends Yt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function v(){let y=new B,b=new B,M=0,_=(t-e)/n;for(let S=0;S<=r;S++){let A=[],w=S/r,D=w*(t-e)+e;for(let P=0;P<=i;P++){let N=P/i,R=N*l+a,U=Math.sin(R),H=Math.cos(R);b.x=D*U,b.y=-w*n+g,b.z=D*H,u.push(b.x,b.y,b.z),y.set(U,_,H).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-w),A.push(m++)}x.push(A)}for(let S=0;S<i;S++)for(let A=0;A<r;A++){let w=x[A][S],D=x[A+1][S],P=x[A+1][S+1],N=x[A][S+1];(e>0||A!==0)&&(h.push(w,D,N),M+=3),(t>0||A!==r-1)&&(h.push(D,P,N),M+=3)}c.addGroup(p,M,0),p+=M}function T(y){let b=m,M=new Ce,_=new B,S=0,A=y===!0?e:t,w=y===!0?1:-1;for(let P=1;P<=i;P++)u.push(0,g*w,0),f.push(0,w,0),d.push(.5,.5),m++;let D=m;for(let P=0;P<=i;P++){let R=P/i*l+a,U=Math.cos(R),H=Math.sin(R);_.x=A*H,_.y=g*w,_.z=A*U,u.push(_.x,_.y,_.z),f.push(0,w,0),M.x=U*.5+.5,M.y=H*.5*w+.5,d.push(M.x,M.y),m++}for(let P=0;P<i;P++){let N=b+P,R=D+P;y===!0?h.push(R,R+1,N):h.push(R+1,R,N),S+=3}c.addGroup(p,S,y===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$i=class s extends tn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cl=class s extends Yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new B,y=new B,b=new B;for(let M=0;M<t.length;M+=3)d(t[M+0],T),d(t[M+1],y),d(t[M+2],b),l(T,y,b,v)}function l(v,T,y,b){let M=b+1,_=[];for(let S=0;S<=M;S++){_[S]=[];let A=v.clone().lerp(y,S/M),w=T.clone().lerp(y,S/M),D=M-S;for(let P=0;P<=D;P++)P===0&&S===M?_[S][P]=A:_[S][P]=A.clone().lerp(w,P/D)}for(let S=0;S<M;S++)for(let A=0;A<2*(M-S)-1;A++){let w=Math.floor(A/2);A%2===0?(f(_[S][w+1]),f(_[S+1][w]),f(_[S][w])):(f(_[S][w+1]),f(_[S+1][w+1]),f(_[S+1][w]))}}function c(v){let T=new B;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(v),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let v=new B;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let y=g(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(y,1-b)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let T=o[v+0],y=o[v+2],b=o[v+4],M=Math.max(T,y,b),_=Math.min(T,y,b);M>.9&&_<.1&&(T<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function m(){let v=new B,T=new B,y=new B,b=new B,M=new Ce,_=new Ce,S=new Ce;for(let A=0,w=0;A<r.length;A+=9,w+=6){v.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),M.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),S.set(o[w+4],o[w+5]),b.copy(v).add(T).add(y).divideScalar(3);let D=g(b);x(M,w+0,v,D),x(_,w+2,T,D),x(S,w+4,y,D)}}function x(v,T,y,b){b<0&&v.x===1&&(o[T]=v.x-1),y.x===0&&y.z===0&&(o[T]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Hh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,i=[],r=[],o=[],a=new B,l=new lt;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ft(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ft(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function op(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var P0=new B,I0=new B,Tf=new op,Ef=new op,wf=new op,Zi=class extends Hh{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(I0.subVectors(i[0],i[1]).add(i[0]),c=I0);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(P0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=P0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Tf.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Ef.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),wf.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Tf.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ef.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wf.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Tf.calc(l),Ef.calc(l),wf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ga=class s extends Cl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Pl=class s extends Cl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},_s=class s extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*f-o;for(let T=0;T<c;T++){let y=T*u-r;m.push(y,-v,0),x.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let T=v+c*p,y=v+c*(p+1),b=v+1+c*(p+1),M=v+1+c*p;d.push(T,y,M),d.push(y,b,M)}this.setIndex(d),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Il=class s extends Yt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new B,m=new Ce;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,T=v,y=v+n+1,b=v+n+2,M=v+1;a.push(T,y,M),a.push(y,b,M)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _n=class s extends Yt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new B,f=new B,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],T=p/n,y=o+T*a,b=e*Math.cos(y),M=Math.sqrt(e*e-b*b),_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let A=S/t,w=i+A*r;u.x=-M*Math.cos(w),u.y=b,u.z=M*Math.sin(w),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+_,1-T),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let T=h[p][v+1],y=h[p][v],b=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&d.push(T,y,M),(p!==n-1||l<Math.PI)&&d.push(y,b,M)}this.setIndex(d),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ji=class s extends Yt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new B,d=new B,m=new B;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let p=0;p<=i;p++){let v=p/i*r;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let p=(i+1)*x+g-1,v=(i+1)*(x-1)+g-1,T=(i+1)*(x-1)+g,y=(i+1)*x+g;l.push(p,v,y),l.push(v,T,y)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function _o(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(D0(i))i.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(D0(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Qn(s){let e={};for(let t=0;t<s.length;t++){let n=_o(s[t]);for(let i in n)e[i]=n[i]}return e}function D0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cy(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ap(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var ui={clone:_o,merge:Qn},Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_a=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lr=class extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kt=class extends Lr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return lo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){lo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Dl=class extends ms{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Vh=class extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gh=class extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function na(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Nr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wh=class extends Nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cf,endingEnd:Cf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pf:r=e,a=2*t-n;break;case If:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pf:o=e,l=2*n-t;break;case If:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,T=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+v*o[c+b]+T*o[l+b]+y*o[u+b];return r}},Xh=class extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},qh=class extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Yh=class extends Nr{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,v=u[p],T=u[p+1],y=e*f+m*2,b=h[y],M=h[y+1],_=Ly(n,t,v,b,i);r[m]=Mg(_,x,T,M,g)}return r}};function Mg(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Dy(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Ly(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Mg(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Dy(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ui=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Sh(e.settings)&&(n.settings={inTangents:na(e.settings.inTangents,Array),outTangents:na(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gl:t=this.InterpolantFactoryMethodDiscrete;break;case Uh:t=this.InterpolantFactoryMethodLinear;break;case Th:t=this.InterpolantFactoryMethodSmooth;break;case Rf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return Uh;case this.InterpolantFactoryMethodSmooth:return Th;case this.InterpolantFactoryMethodBezier:return Rf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Sh(this.settings)&&(L0(this.settings.inTangents,e),L0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Sh(this.settings)&&(N0(this.settings.inTangents,e),N0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(st("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(st("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){st("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){st("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&$v(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){st("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Th,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Sh(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function L0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function N0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=Uh;var Ur=class extends Ui{constructor(e,t,n){super(e,t,n)}};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=gl;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var $h=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}};$h.prototype.ValueTypeName="color";var Zh=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}};Zh.prototype.ValueTypeName="number";var Jh=class extends Nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)hi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ll=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Jh(this.times,this.values,this.getValueSize(),e)}};Ll.prototype.ValueTypeName="quaternion";Ll.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends Ui{constructor(e,t,n){super(e,t,n)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=gl;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Kh=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}};Kh.prototype.ValueTypeName="vector";var wh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(U0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!U0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function U0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var xa=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bg=new xa,va=class{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var ia=new WeakMap,Qh=class extends va{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=wh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ia.get(o);u===void 0&&(u=[],ia.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=ca("img");function l(){h(),t&&t(this);let u=ia.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}ia.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),wh.remove(`image:${e}`);let f=ia.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}ia.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wh.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Nl=class extends va{constructor(e){super(e)}load(e,t,n,i){let r=new $n,o=new Qh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ya=class extends gn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ul=class extends ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Af=new lt,O0=new B,F0=new B,Ol=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;O0.setFromMatrixPosition(e.matrixWorld),t.position.copy(O0),F0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Af.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Af,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===la||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mh=new B,bh=new hi,Ms=new B,Fl=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mh,bh,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mh,bh,Ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Mh,bh,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mh,bh,Ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Rr=new B,B0=new Ce,k0=new Ce,Yn=class extends Fl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,B0,k0),t.subVectors(k0,B0)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Lf=class extends Ol{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}},As=class extends ya{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},uo=class extends Fl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nf=class extends Ol{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sa=class extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Nf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var sa=-90,ra=1,Ma=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yn(sa,ra,e,t);i.layers=this.layers,this.add(i);let r=new Yn(sa,ra,e,t);r.layers=this.layers,this.add(r);let o=new Yn(sa,ra,e,t);o.layers=this.layers,this.add(o);let a=new Yn(sa,ra,e,t);a.layers=this.layers,this.add(a);let l=new Yn(sa,ra,e,t);l.layers=this.layers,this.add(l);let c=new Yn(sa,ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jh=class extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Bl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ny.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ny(){this._document.hidden===!1&&this.reset()}var lp="\\[\\]\\.:\\/",Uy=new RegExp("["+lp+"]","g"),cp="[^"+lp+"]",Oy="[^"+lp.replace("\\.","")+"]",Fy=/((?:WC+[\/:])*)/.source.replace("WC",cp),By=/(WCOD+)?/.source.replace("WCOD",Oy),ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cp),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cp),Hy=new RegExp("^"+Fy+By+ky+zy+"$"),Vy=["material","materials","bones","map"],Uf=class{constructor(e,t,n){let i=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){let t=Hy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){st("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){st("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){st("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){st("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){st("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){st("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;st("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){st("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Uf;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hA=new Float32Array(1);var z0=new lt,kl=class{constructor(e,t,n=0,i=1/0){this.ray=new ma(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return z0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(z0),this}intersectObject(e,t=!0,n=[]){return Of(e,this,n,t),n.sort(H0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Of(e[i],this,n,t);return n.sort(H0),n}};function H0(s,e){return s.distance-e.distance}function Of(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Of(r[o],e,t,!0)}}var mp=class mp{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};mp.prototype.isMatrix2=!0;var Ff=mp;function hp(s,e,t,n){let i=Gy(n);switch(t){case Zf:return s*e;case lu:return s*e/i.components*i.byteLength;case cu:return s*e/i.components*i.byteLength;case Br:return s*e*2/i.components*i.byteLength;case hu:return s*e*2/i.components*i.byteLength;case Jf:return s*e*3/i.components*i.byteLength;case Oi:return s*e*4/i.components*i.byteLength;case uu:return s*e*4/i.components*i.byteLength;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fu:case mu:return Math.max(s,16)*Math.max(e,8)/4;case du:case pu:return Math.max(s,8)*Math.max(e,8)/2;case gu:case _u:case vu:case yu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xu:case jl:case Su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Au:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Du:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ou:case Fu:case Bu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ku:case zu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ec:case Hu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gy(s){switch(s){case Jn:case Xf:return{byteLength:1,components:1};case wa:case qf:case nn:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case xs:case ru:case Qi:return{byteLength:4,components:1};case Yf:case $f:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xg(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xy(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
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
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
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
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rS=`#ifdef USE_IRIDESCENCE
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
#endif`,oS=`#ifdef USE_BUMPMAP
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
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mS=`#define PI 3.141592653589793
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
} // validated`,gS=`vec3 transformedNormal = objectNormal;
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
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SS="gl_FragColor = linearToOutputTexel( gl_FragColor );",MS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bS=`#ifdef USE_ENVMAP
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
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DS=`#ifdef USE_GRADIENTMAP
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
}`,LS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,FS=`#ifdef USE_ENVMAP
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
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VS=`PhysicalMaterial material;
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
#endif`,GS=`uniform sampler2D dfgLUT;
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
}`,WS=`
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
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
#endif`,oM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
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
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uM=`#ifndef FLAT_SHADED
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
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
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
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PM=`float getShadowMask() {
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
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,zM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qM=`uniform sampler2D t2D;
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform float backgroundBlurriness;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
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
}`,QM=`#if DEPTH_PACKING == 3200
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
}`,jM=`#define DISTANCE
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
}`,eb=`#define DISTANCE
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
}`,tb=`varying vec3 vWorldDirection;
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
}`,ib=`uniform float scale;
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,ob=`uniform vec3 diffuse;
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
}`,ab=`#define LAMBERT
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
}`,lb=`#define LAMBERT
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
}`,cb=`#define MATCAP
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
}`,hb=`#define MATCAP
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
}`,ub=`#define NORMAL
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
}`,pb=`#define PHONG
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
}`,mb=`#define STANDARD
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
}`,gb=`#define STANDARD
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
}`,_b=`#define TOON
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
}`,xb=`#define TOON
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
}`,vb=`uniform float size;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,Mb=`uniform vec3 color;
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
}`,bb=`uniform float rotation;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:qy,alphahash_pars_fragment:Yy,alphamap_fragment:$y,alphamap_pars_fragment:Zy,alphatest_fragment:Jy,alphatest_pars_fragment:Ky,aomap_fragment:Qy,aomap_pars_fragment:jy,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:sS,iridescence_fragment:rS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:cS,clipping_planes_vertex:hS,color_fragment:uS,color_pars_fragment:dS,color_pars_vertex:fS,color_vertex:pS,common:mS,defaultnormal_vertex:gS,displacementmap_pars_vertex:_S,displacementmap_vertex:xS,emissivemap_fragment:vS,emissivemap_pars_fragment:yS,colorspace_fragment:SS,colorspace_pars_fragment:MS,envmap_fragment:bS,envmap_common_pars_fragment:TS,envmap_pars_fragment:ES,envmap_pars_vertex:wS,envmap_physical_pars_fragment:FS,envmap_vertex:AS,fog_vertex:RS,fog_pars_vertex:CS,fog_fragment:PS,fog_pars_fragment:IS,gradientmap_pars_fragment:DS,lightmap_pars_fragment:LS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:US,lights_pars_begin:OS,lights_toon_fragment:BS,lights_toon_pars_fragment:kS,lights_phong_fragment:zS,lights_phong_pars_fragment:HS,lights_physical_fragment:VS,lights_physical_pars_fragment:GS,lights_fragment_begin:WS,lights_fragment_maps:XS,lights_fragment_end:qS,lightprobes_pars_fragment:YS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:ZS,logdepthbuf_pars_vertex:JS,logdepthbuf_vertex:KS,map_fragment:QS,map_pars_fragment:jS,map_particle_fragment:eM,map_particle_pars_fragment:tM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:sM,morphcolor_vertex:rM,morphnormal_vertex:oM,morphtarget_pars_vertex:aM,morphtarget_vertex:lM,normal_fragment_begin:cM,normal_fragment_maps:hM,normal_pars_fragment:uM,normal_pars_vertex:dM,normal_vertex:fM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:_M,iridescence_pars_fragment:xM,opaque_fragment:vM,packing:yM,premultiplied_alpha_fragment:SM,project_vertex:MM,dithering_fragment:bM,dithering_pars_fragment:TM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:RM,shadowmap_vertex:CM,shadowmask_pars_fragment:PM,skinbase_vertex:IM,skinning_pars_vertex:DM,skinning_vertex:LM,skinnormal_vertex:NM,specularmap_fragment:UM,specularmap_pars_fragment:OM,tonemapping_fragment:FM,tonemapping_pars_fragment:BM,transmission_fragment:kM,transmission_pars_fragment:zM,uv_pars_fragment:HM,uv_pars_vertex:VM,uv_vertex:GM,worldpos_vertex:WM,background_vert:XM,background_frag:qM,backgroundCube_vert:YM,backgroundCube_frag:$M,cube_vert:ZM,cube_frag:JM,depth_vert:KM,depth_frag:QM,distance_vert:jM,distance_frag:eb,equirect_vert:tb,equirect_frag:nb,linedashed_vert:ib,linedashed_frag:sb,meshbasic_vert:rb,meshbasic_frag:ob,meshlambert_vert:ab,meshlambert_frag:lb,meshmatcap_vert:cb,meshmatcap_frag:hb,meshnormal_vert:ub,meshnormal_frag:db,meshphong_vert:fb,meshphong_frag:pb,meshphysical_vert:mb,meshphysical_frag:gb,meshtoon_vert:_b,meshtoon_frag:xb,points_vert:vb,points_frag:yb,shadow_vert:Sb,shadow_frag:Mb,sprite_vert:bb,sprite_frag:Tb},Oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ps={basic:{uniforms:Qn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Qn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Qn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Qn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Qn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Qn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Qn([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Qn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Qn([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Qn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Qn([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Qn([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Qn([Oe.lights,Oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ps.physical={uniforms:Qn([Ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Gu={r:0,b:0,g:0},Eb=new lt,qg=new rt;qg.set(-1,0,0,0,1,0,0,0,1);function wb(s,e,t,n,i,r){let o=new Le(0),a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(v){let T=!1,y=d(v);y===null?g(o,a):y&&y.isColor&&(g(y,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let y=d(T);y&&y.isCubeTexture?(c===void 0&&(c=new Te(new Fn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:_o(Ps.backgroundCube.uniforms),vertexShader:Ps.backgroundCube.vertexShader,fragmentShader:Ps.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qg),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==bt,(h!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Te(new _s(2,2),new Pt({name:"BackgroundMaterial",uniforms:_o(Ps.background.uniforms),vertexShader:Ps.background.vertexShader,fragmentShader:Ps.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,T){v.getRGB(Gu,ap(s)),t.buffers.color.setClear(Gu.r,Gu.g,Gu.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Ab(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(D,P,N,R,U){let H=!1,k=u(D,R,N,P);r!==k&&(r=k,c(r.object)),H=d(D,R,N,U),H&&m(D,R,N,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(D,P,N,R),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function u(D,P,N,R){let U=R.wireframe===!0,H=n[P.id];H===void 0&&(H={},n[P.id]=H);let k=D.isInstancedMesh===!0?D.id:0,$=H[k];$===void 0&&($={},H[k]=$);let X=$[N.id];X===void 0&&(X={},$[N.id]=X);let I=X[U];return I===void 0&&(I=f(l()),X[U]=I),I}function f(D){let P=[],N=[],R=[];for(let U=0;U<t;U++)P[U]=0,N[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:R,object:D,attributes:{},index:null}}function d(D,P,N,R){let U=r.attributes,H=P.attributes,k=0,$=N.getAttributes();for(let X in $)if($[X].location>=0){let J=U[X],pe=H[X];if(pe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function m(D,P,N,R){let U={},H=P.attributes,k=0,$=N.getAttributes();for(let X in $)if($[X].location>=0){let J=H[X];J===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),U[X]=pe,k++}r.attributes=U,r.attributesNum=k,r.index=R}function x(){let D=r.newAttributes;for(let P=0,N=D.length;P<N;P++)D[P]=0}function g(D){p(D,0)}function p(D,P){let N=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;N[D]=1,R[D]===0&&(s.enableVertexAttribArray(D),R[D]=1),U[D]!==P&&(s.vertexAttribDivisor(D,P),U[D]=P)}function v(){let D=r.newAttributes,P=r.enabledAttributes;for(let N=0,R=P.length;N<R;N++)P[N]!==D[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function T(D,P,N,R,U,H,k){k===!0?s.vertexAttribIPointer(D,P,N,U,H):s.vertexAttribPointer(D,P,N,R,U,H)}function y(D,P,N,R){x();let U=R.attributes,H=N.getAttributes(),k=P.defaultAttributeValues;for(let $ in H){let X=H[$];if(X.location>=0){let I=U[$];if(I===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){let J=I.normalized,pe=I.itemSize,Me=e.get(I);if(Me===void 0)continue;let V=Me.buffer,Y=Me.type,ue=Me.bytesPerElement,ce=Y===s.INT||Y===s.UNSIGNED_INT||I.gpuType===ru;if(I.isInterleavedBufferAttribute){let he=I.data,ye=he.isInterleavedBuffer===!0?he.stride:he.itemSize,We=I.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ee=0;Ee<X.locationSize;Ee++)p(X.location+Ee,he.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ee=0;Ee<X.locationSize;Ee++)g(X.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,V);for(let Ee=0;Ee<X.locationSize;Ee++)T(X.location+Ee,pe/X.locationSize,Y,J,ye*ue,(We+pe/X.locationSize*Ee)*ue,ce)}else{if(I.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)p(X.location+he,I.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let he=0;he<X.locationSize;he++)g(X.location+he);s.bindBuffer(s.ARRAY_BUFFER,V);for(let he=0;he<X.locationSize;he++)T(X.location+he,pe/X.locationSize,Y,J,pe*ue,pe/X.locationSize*he*ue,ce)}}else if(k!==void 0){let J=k[$];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(X.location,J);break;case 3:s.vertexAttrib3fv(X.location,J);break;case 4:s.vertexAttrib4fv(X.location,J);break;default:s.vertexAttrib1fv(X.location,J)}}}}v()}function b(){A();for(let D in n){let P=n[D];for(let N in P){let R=P[N];for(let U in R){let H=R[U];for(let k in H)h(H[k].object),delete H[k];delete R[U]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let P=n[D.id];for(let N in P){let R=P[N];for(let U in R){let H=R[U];for(let k in H)h(H[k].object),delete H[k];delete R[U]}}delete n[D.id]}function _(D){for(let P in n){let N=n[P];for(let R in N){let U=N[R];if(U[D.id]===void 0)continue;let H=U[D.id];for(let k in H)h(H[k].object),delete H[k];delete U[D.id]}}}function S(D){for(let P in n){let N=n[P],R=D.isInstancedMesh===!0?D.id:0,U=N[R];if(U!==void 0){for(let H in U){let k=U[H];for(let $ in k)h(k[$].object),delete k[$];delete U[H]}delete N[R],Object.keys(N).length===0&&delete n[P]}}}function A(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Rb(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Oi&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Jn&&_!==Qi&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:M}}function Pb(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ps,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,T=v*4,y=p.clippingState||null;l.value=y,y=h(m,f,T,d);for(let b=0;b!==T;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,y=d;T!==x;++T,y+=4)o.copy(u[T]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var sc=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fn(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:_o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:In});r.uniforms.tEquirect.value=t;let o=new Te(i,r),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=ci),new Ma(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Tg=256,Ib=3,Db=20,Yg=256,$g=16,Lb=3,Nb=new B,Ub=new Le,Ra=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ma(1,10,null),this._boxMesh=new Te(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Nb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Ub));let g=new Ma(n,i,h);return g.position.copy(a),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Tg,ip(e))}_fromTexture(e,t){e.mapping===go||e.mapping===Ea?this._setSize(e.image.length===0?Tg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Eg(e,!1,!1),n=Math.log2(e)-Ib;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Eg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===go||e.mapping===Ea?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ob(),this._integrationMaterial=Fb());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$g);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Lb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Yg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Bb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Eg(s,e,t){return new sc(s,{minFilter:sr,generateMipmaps:e,type:nn,colorSpace:_l,depthBuffer:t})}function rc(s,e,t){return new Pt({name:s,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:Bn,blending:In,depthTest:!1,depthWrite:!1})}function Ob(){return rc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Fb(){return rc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$g}},`

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
	`)}function Bb(){return rc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Db}
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
	`)}function wg(){return rc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ag(){return rc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kb(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===nu||d===iu)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new sc(m.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===nu||d===iu,x=d===go||d===Ea;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ra(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Ra(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===nu?f.mapping=go:d===iu&&(f.mapping=Ea),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function zb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&lo("WebGLRenderer: "+n+" extension not supported."),i}}}function Hb(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(m=>delete i[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete i[m.id],o.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let g in x)e.update(x[g],s.ARRAY_BUFFER)}function u(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,T=g.count>=65535?bl:Ml,y=new T(Math.ceil(v/3)*6,1),b=y.array;if(x!==null){let _=x.array;p=x.version;for(let S=0,A=0;S<v;S+=3){let w=_[S+0],D=_[S+1],P=_[S+2];b[A++]=w,b[A++]=D,b[A++]=D,b[A++]=P,b[A++]=P,b[A++]=w}}else{p=g.version;for(let _=0,S=0;_<v;_+=3){let A=_+0,w=_+1,D=_+2;b[S++]=A,b[S++]=w,b[S++]=w,b[S++]=D,b[S++]=D,b[S++]=A}}y.version=p;let M=r.get(m);M&&e.remove(M),r.set(m,y)}function f(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&u(m)}else u(m);return r.get(m)}function d(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Vb(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:st("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wb(s,e,t){let n=new WeakMap,i=new Gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let A=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),x===!0&&(T=3);let y=a.attributes.position.count*T,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*u),_=new yl(M,y,b,u);_.type=Qi,_.needsUpdate=!0;let S=T*4;for(let w=0;w<u;w++){let D=g[w],P=p[w],N=v[w],R=y*b*4*w;for(let U=0;U<D.count;U++){let H=U*S;d===!0&&(i.fromBufferAttribute(D,U),M[R+H+0]=i.x,M[R+H+1]=i.y,M[R+H+2]=i.z,M[R+H+3]=0),m===!0&&(i.fromBufferAttribute(P,U),M[R+H+4]=i.x,M[R+H+5]=i.y,M[R+H+6]=i.z,M[R+H+7]=0),x===!0&&(i.fromBufferAttribute(N,U),M[R+H+8]=i.x,M[R+H+9]=i.y,M[R+H+10]=i.z,M[R+H+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:_,size:new Ce(y,b)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Xb(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var qb={[Vl]:"LINEAR_TONE_MAPPING",[Gl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[ql]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Xl]:"CUSTOM_TONE_MAPPING"};function Yb(s,e,t,n,i,r){let o=new Wt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Yt;h.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yt([0,2,0,0,2,0],2));let u=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Te(h,u),d=new uo(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,v=null,T=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a!==null&&a.setSize(b,M),l!==null&&l.setSize(b,M);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(b,M)}},this.setEffects=function(b){T=b,y=T.length>0&&T[0].isRenderPass===!0;let M=o.width,_=o.height;T.length>0&&a===null&&(a=new Wt(M,_,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(M,_,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&T.some(A=>A.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new gs(M,_),r===!0&&(c.format=vs,c.type=rr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let A=0;A<T.length;A++){let w=T[A];w.setSize&&w.setSize(M,_),S&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,M){if(g||b.toneMapping===Rs&&T.length===0)return!1;if(v=M,M!==null){let _=M.width,S=M.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=Rs,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=p,g=!0;let _=o,S=a;for(let A=0;A<T.length;A++){let w=T[A];w.enabled!==!1&&(w.render(b,S,_,M),w.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,u.defines={},gt.getTransfer(m)===bt&&(u.defines.SRGB_TRANSFER="");let A=qb[x];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(f,d),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Zg=new $n,Jg=new gs(1,1),Kg=new Al(1),Qg=new yl,jg=new Bh,e_=new wl,Rg=[],Cg=[],Pg=new Float32Array(16),Ig=new Float32Array(9),Dg=new Float32Array(4);function Ca(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Rg[i];if(r===void 0&&(r=new Float32Array(i),Rg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function En(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qu(s,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $b(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function Jb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function Kb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function Qb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(En(t,n))return;Dg.set(n),s.uniformMatrix2fv(this.addr,!1,Dg),wn(t,n)}}function jb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(En(t,n))return;Ig.set(n),s.uniformMatrix3fv(this.addr,!1,Ig),wn(t,n)}}function e1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(En(t,n))return;Pg.set(n),s.uniformMatrix4fv(this.addr,!1,Pg),wn(t,n)}}function t1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function i1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function s1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function r1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function o1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function a1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function l1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function Yu(s){return s.version===0&&(s.compareFunction=jf,s.needsUpdate=!0),s}function c1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Yu(Jg):r=Zg,t.setTexture2D(e||r,i)}function h1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jg,i)}function u1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Yu(Kg):r=e_,t.setTextureCube(e||r,i)}function d1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qg,i)}function f1(s){switch(s){case 5126:return $b;case 35664:return Zb;case 35665:return Jb;case 35666:return Kb;case 35674:return Qb;case 35675:return jb;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return d1}}function p1(s,e){s.uniform1fv(this.addr,e)}function m1(s,e){let t=Ca(e,this.size,2);s.uniform2fv(this.addr,t)}function g1(s,e){let t=Ca(e,this.size,3);s.uniform3fv(this.addr,t)}function _1(s,e){let t=Ca(e,this.size,4);s.uniform4fv(this.addr,t)}function x1(s,e){let t=Ca(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function v1(s,e){let t=Ca(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function y1(s,e){let t=Ca(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function S1(s,e){s.uniform1iv(this.addr,e)}function M1(s,e){s.uniform2iv(this.addr,e)}function b1(s,e){s.uniform3iv(this.addr,e)}function T1(s,e){s.uniform4iv(this.addr,e)}function E1(s,e){s.uniform1uiv(this.addr,e)}function w1(s,e){s.uniform2uiv(this.addr,e)}function A1(s,e){s.uniform3uiv(this.addr,e)}function R1(s,e){s.uniform4uiv(this.addr,e)}function C1(s,e,t){let n=this.cache,i=e.length,r=qu(t,i);En(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Yu(Jg):o=Zg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function P1(s,e,t){let n=this.cache,i=e.length,r=qu(t,i);En(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jg,r[o])}function I1(s,e,t){let n=this.cache,i=e.length,r=qu(t,i);En(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Yu(Kg):o=e_;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function D1(s,e,t){let n=this.cache,i=e.length,r=qu(t,i);En(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Qg,r[o])}function L1(s){switch(s){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return x1;case 35675:return v1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return b1;case 35669:case 35673:return T1;case 5125:return E1;case 36294:return w1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return D1}}var xp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f1(t.type)}},vp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L1(t.type)}},yp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},gp=/(\w+)(\])?(\[|\.)?/g;function Lg(s,e){s.seq.push(e),s.map[e.id]=e}function N1(s,e,t){let n=s.name,i=n.length;for(gp.lastIndex=0;;){let r=gp.exec(n),o=gp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lg(t,c===void 0?new xp(a,s,e):new vp(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new yp(a),Lg(t,u)),t=u}}}var Aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);N1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ng(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var U1=37297,O1=0;function F1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ug=new rt;function B1(s){gt._getMatrix(Ug,gt.workingColorSpace,s);let e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(s)){case xl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Og(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+F1(s.getShaderSource(e),a)}else return r}function k1(s,e){let t=B1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var z1={[Vl]:"Linear",[Gl]:"Reinhard",[Wl]:"Cineon",[mo]:"ACESFilmic",[ql]:"AgX",[Yl]:"Neutral",[Xl]:"Custom"};function H1(s,e){let t=z1[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wu=new B;function V1(){gt.getLuminanceCoefficients(Wu);let s=Wu.x.toFixed(4),e=Wu.y.toFixed(4),t=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ic).join(`
`)}function W1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ic(s){return s!==""}function Fg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sp(s){return s.replace(q1,Y1)}function Y1(s,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sp(t)}var $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(s){return s.replace($1,Z1)}function Z1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var J1={[fo]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function K1(s){return J1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q1={[Ea]:"ENVMAP_MODE_REFRACTION"};function j1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Q1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eT={[Gf]:"ENVMAP_BLENDING_MULTIPLY",[rg]:"ENVMAP_BLENDING_MIX",[og]:"ENVMAP_BLENDING_ADD"};function tT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eT[s.combine]||"ENVMAP_BLENDING_NONE"}function nT(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=K1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=j1(t),u=tT(t),f=G1(t),d=W1(r),m=i.createProgram(),x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ic).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ic).join(`
`),g.length>0&&(g+=`
`)):(x=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ic).join(`
`),g=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?ht.tonemapping_pars_fragment:"",t.toneMapping!==Rs?H1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,k1("linearToOutputTexel",t.outputColorSpace),V1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ic).join(`
`)),o=Sp(o),o=Fg(o,t),o=Bg(o,t),a=Sp(a),a=Fg(a,t),a=Bg(a,t),o=kg(o),a=kg(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+x+o,T=p+g+a,y=Ng(i,i.VERTEX_SHADER,v),b=Ng(i,i.FRAGMENT_SHADER,T);i.attachShader(m,y),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function M(w){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(m)||"",P=i.getShaderInfoLog(y)||"",N=i.getShaderInfoLog(b)||"",R=D.trim(),U=P.trim(),H=N.trim(),k=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,b);else{let X=Og(i,y,"vertex"),I=Og(i,b,"fragment");st("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+X+`
`+I)}else R!==""?it("WebGLProgram: Program Info Log:",R):(U===""||H==="")&&($=!1);$&&(w.diagnostics={runnable:k,programLog:R,vertexShader:{log:U,prefix:x},fragmentShader:{log:H,prefix:g}})}i.deleteShader(y),i.deleteShader(b),_=new Aa(i,m),S=X1(i,m)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(m,U1)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=b,this}var iT=0,Mp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bp(e),t.set(e,n)),n}},bp=class{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}};function sT(s){return s===Br||s===jl||s===ec}function rT(s,e,t,n,i,r){let o=new fa,a=new Mp,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,A,w,D,P){let N=w.fog,R=D.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=e.get(_.envMap||U,H),$=f[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&it("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let I=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=I!==void 0?I.length:0,pe=0;R.morphAttributes.position!==void 0&&(pe=1),R.morphAttributes.normal!==void 0&&(pe=2),R.morphAttributes.color!==void 0&&(pe=3);let Me,V,Y,ue;if($){let le=Ps[$];Me=le.vertexShader,V=le.fragmentShader}else{Me=_.vertexShader,V=_.fragmentShader;let le=a.getVertexShaderStage(_),Fe=a.getFragmentShaderStage(_);a.update(_,le,Fe),Y=le.id,ue=Fe.id}let ce=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),ye=D.isInstancedMesh===!0,We=D.isBatchedMesh===!0,Ee=!!_.map,Ue=!!_.matcap,be=!!k,De=be&&k.isPMREMTexture===!0,tt=!!_.aoMap,se=!!_.lightMap,G=!!_.bumpMap&&_.wireframe===!1,Ae=!!_.normalMap,Qe=!!_.displacementMap,Re=!!_.emissiveMap,Ne=!!_.metalnessMap,je=!!_.roughnessMap,Ke=_.anisotropy>0,z=_.clearcoat>0,Je=_.diffuseRoughness>0,et=_.dispersion>0,Ze=_.retroreflectivity>0,ge=_.iridescence>0,ct=_.sheen>0,ke=_.transmission>0,Ye=Ke&&!!_.anisotropyMap,L=z&&!!_.clearcoatMap,E=z&&!!_.clearcoatNormalMap,O=z&&!!_.clearcoatRoughnessMap,ie=Je&&!!_.diffuseRoughnessMap,j=ge&&!!_.iridescenceMap,re=ge&&!!_.iridescenceThicknessMap,de=ct&&!!_.sheenColorMap,q=ct&&!!_.sheenRoughnessMap,ee=!!_.specularMap,fe=!!_.specularColorMap,F=!!_.specularIntensityMap,Q=ke&&!!_.transmissionMap,ne=ke&&!!_.thicknessMap,ve=!!_.gradientMap,_e=!!_.alphaMap,Se=_.alphaTest>0,me=!!_.alphaHash,xe=!!_.extensions,oe=Rs;_.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(oe=s.toneMapping);let ae=De?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,we={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:V,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:We,batchingColor:We&&D._colorsTexture!==null,instancing:ye,instancingColor:ye&&D.instanceColor!==null,instancingMorph:ye&&D.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:Ue,envMap:be,envMapMode:be&&k.mapping,envMapPMREM:De,envMapMaxLod:De?ae.length-1:null,envMapSize:De?ae[0].width:null,aoMap:tt,lightMap:se,bumpMap:G,normalMap:Ae,displacementMap:Qe,emissiveMap:Re,normalMapObjectSpace:Ae&&_.normalMapType===cg,normalMapTangentSpace:Ae&&_.normalMapType===tc,packedNormalMap:Ae&&_.normalMapType===tc&&sT(_.normalMap.format),metalnessMap:Ne,roughnessMap:je,anisotropy:Ke,anisotropyMap:Ye,clearcoat:z,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:O,diffuseRoughness:Je,diffuseRoughnessMap:ie,dispersion:et,retroreflection:Ze,iridescence:ge,iridescenceMap:j,iridescenceThicknessMap:re,sheen:ct,sheenColorMap:de,sheenRoughnessMap:q,specularMap:ee,specularColorMap:fe,specularIntensityMap:F,transmission:ke,transmissionMap:Q,thicknessMap:ne,gradientMap:ve,opaque:_.transparent===!1&&_.blending===Ta&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:Se,alphaHash:me,combine:_.combine,mapUv:Ee&&d(_.map.channel),aoMapUv:tt&&d(_.aoMap.channel),lightMapUv:se&&d(_.lightMap.channel),bumpMapUv:G&&d(_.bumpMap.channel),normalMapUv:Ae&&d(_.normalMap.channel),displacementMapUv:Qe&&d(_.displacementMap.channel),emissiveMapUv:Re&&d(_.emissiveMap.channel),metalnessMapUv:Ne&&d(_.metalnessMap.channel),roughnessMapUv:je&&d(_.roughnessMap.channel),anisotropyMapUv:Ye&&d(_.anisotropyMap.channel),clearcoatMapUv:L&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(_.sheenRoughnessMap.channel),specularMapUv:ee&&d(_.specularMap.channel),specularColorMapUv:fe&&d(_.specularColorMap.channel),specularIntensityMapUv:F&&d(_.specularIntensityMap.channel),transmissionMapUv:Q&&d(_.transmissionMap.channel),thicknessMapUv:ne&&d(_.thicknessMap.channel),alphaMapUv:_e&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ae||Ke),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Ee||_e),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.filter(le=>le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===bt,decodeVideoTextureEmissive:Re&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zn,flipSided:_.side===Bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)S.push(A),S.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(S,_),p(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let S=f[_.type],A;if(S){let w=Ps[S];A=ui.clone(w.uniforms)}else A=_.uniforms;return A}function T(_,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new nT(s,S,_,i),c.push(A),h.set(S,A)),A}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function M(){a.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:M}}function oT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function aT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},s[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=g,v.group=p),e++,v}function l(f,d,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let T=a(f,d,m,x,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):t.push(T)}function c(f,d,m,x,g,p){let v=a(f,d,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||aT),n.length>1&&n.sort(d||Hg),i.length>1&&i.sort(d||Hg)}function u(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function lT(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Vg,s.set(n,[o])):i>=r.length?(o=new Vg,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function cT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Le};break;case"SpotLight":t={position:new B,direction:new B,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function hT(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var uT=0;function dT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fT(s){let e=new cT,t=hT(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new lt,o=new lt;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,v=0,T=0,y=0,b=0,M=0,_=0,S=0,A=0,w=0;c.sort(dT);for(let P=0,N=c.length;P<N;P++){let R=c[P],U=R.color,H=R.intensity,k=R.distance,$=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Br?$=R.shadow.map.texture:$=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*H,u+=U.g*H,f+=U.b*H;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],H);w++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let I=R.shadow,J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[m]=J,n.sunShadowMap[m]=$;let pe=I.getViewportCount();for(let Me=0;Me<pe;Me++)n.sunShadowMatrix[x+Me]=I.getMatrix(Me),n.sunShadowCascade[x+Me]=I._cascadeData[Me];x+=pe,m++}n.sun[d]=X,d++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let I=R.shadow,J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=R.shadow.matrix,b++}n.directional[g]=X,g++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(H),X.distance=k,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[v]=X;let I=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,I.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=I.matrix,R.castShadow){let J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=$,_++}v++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(U).multiplyScalar(H),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[T]=X,T++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let I=R.shadow,J=t.get(R);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=R.shadow.matrix,M++}n.point[p]=X,p++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(H),X.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,D.sunLength=d,D.directionalLength=g,D.pointLength=p,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=w,n.version=uT++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(y.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Gg(s){let e=new fT(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pT(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Gg(s),e.set(i,[a])):r>=o.length?(a=new Gg(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gT=`uniform sampler2D shadow_pass;
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
}`,_T=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],xT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Wg=new lt,nc=new B,_p=new B;function vT(s,e,t){let n=new Ir,i=new Ce,r=new Ce,o=new Gt,a=new Vh,l=new Gh,c={},h=t.maxTextureSize,u={[Fr]:Bn,[Bn]:Fr,[Zn]:Zn},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:mT,fragmentShader:gT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Yt;m.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Te(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let p=this.type;this.render=function(M,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===W0&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fo);let A=s.getRenderTarget(),w=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(In),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=p!==this.type;N&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=M.length;R<U;R++){let H=M[R],k=H.shadow;if(k===void 0){it("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let $=k.getFrameExtents();i.multiply($),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,k.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ba){if(H.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Wt(i.x,i.y,{format:Br,type:nn,minFilter:ci,magFilter:ci,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new gs(i.x,i.y,Qi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Qs,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln}else H.isPointLight?(k.map=new sc(i.x),k.map.depthTexture=new Al(i.x,xs)):(k.map=new Wt(i.x,i.y),k.map.depthTexture=new gs(i.x,i.y,xs)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Qs,this.type===fo?(k.map.depthTexture.compareFunction=X?Qf:Kf,k.map.depthTexture.minFilter=ci,k.map.depthTexture.magFilter=ci):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let I=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,S);let J=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:S.layers;for(let pe=0;pe<I;pe++){let Me=k.getCamera(pe);if(H.isPointLight){let V=k.camera,Y=k.matrix,ue=H.distance||V.far;ue!==V.far&&(V.far=ue,V.updateProjectionMatrix()),nc.setFromMatrixPosition(H.matrixWorld),V.position.copy(nc),_p.copy(V.position),_p.add(_T[pe]),V.up.copy(xT[pe]),V.lookAt(_p),V.updateMatrixWorld(),Y.makeTranslation(-nc.x,-nc.y,-nc.z),Wg.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Wg,V.coordinateSystem,V.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(k.map),s.clear());let V=k.getViewport(pe);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(o)}n=k.getFrustum(pe),y(_,S,Me,H,J,this.type)}k.isPointLightShadow!==!0&&this.type===ba&&v(k,S),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(A,w,D)};function v(M,_){let S=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Wt(i.x,i.y,{format:Br,type:nn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(_,null,S,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(_,null,S,d,x,null)}function T(M,_,S,A){let w=null,D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)w=D;else if(w=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let P=w.uuid,N=_.uuid,R=c[P];R===void 0&&(R={},c[P]=R);let U=R[N];U===void 0&&(U=w.clone(),R[N]=U,_.addEventListener("dispose",b)),w=U}if(w.visible=_.visible,w.wireframe=_.wireframe,A===ba?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=s.properties.get(w);P.light=S}return w}function y(M,_,S,A,w,D){if(M.visible===!1)return;if(M.layers.test(w)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===ba)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let R=e.update(M),U=M.material;if(Array.isArray(U)){let H=R.groups;for(let k=0,$=H.length;k<$;k++){let X=H[k],I=U[X.materialIndex];if(I&&I.visible){let J=T(M,I,A,D);M.onBeforeShadow(s,M,_,S,R,J,X),s.renderBufferDirect(S,null,R,J,M,X),M.onAfterShadow(s,M,_,S,R,J,X)}}}else if(U.visible){let H=T(M,U,A,D);M.onBeforeShadow(s,M,_,S,R,H,null),s.renderBufferDirect(S,null,R,H,M,null),M.onAfterShadow(s,M,_,S,R,H,null)}}let N=M.children;for(let R=0,U=N.length;R<U;R++)y(N[R],_,S,A,w,D)}function b(M){M.target.removeEventListener("dispose",b);for(let S in c){let A=c[S],w=M.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function yT(s,e){function t(){let F=!1,Q=new Gt,ne=null,ve=new Gt(0,0,0,0);return{setMask:function(_e){ne!==_e&&!F&&(s.colorMask(_e,_e,_e,_e),ne=_e)},setLocked:function(_e){F=_e},setClear:function(_e,Se,me,xe,oe){oe===!0&&(_e*=xe,Se*=xe,me*=xe),Q.set(_e,Se,me,xe),ve.equals(Q)===!1&&(s.clearColor(_e,Se,me,xe),ve.copy(Q))},reset:function(){F=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,Q=!1,ne=null,ve=null,_e=null;return{setReversed:function(Se){if(Q!==Se){let me=e.get("EXT_clip_control");Se?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),Q=Se;let xe=_e;_e=null,this.setClear(xe)}},getReversed:function(){return Q},setTest:function(Se){Se?he(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Se){ne!==Se&&!F&&(s.depthMask(Se),ne=Se)},setFunc:function(Se){if(Q&&(Se=vg[Se]),ve!==Se){switch(Se){case Ah:s.depthFunc(s.NEVER);break;case Rh:s.depthFunc(s.ALWAYS);break;case Ch:s.depthFunc(s.LESS);break;case aa:s.depthFunc(s.LEQUAL);break;case Ph:s.depthFunc(s.EQUAL);break;case Ih:s.depthFunc(s.GEQUAL);break;case Dh:s.depthFunc(s.GREATER);break;case Lh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Se}},setLocked:function(Se){F=Se},setClear:function(Se){_e!==Se&&(_e=Se,Q&&(Se=1-Se),s.clearDepth(Se))},reset:function(){F=!1,ne=null,ve=null,_e=null,Q=!1}}}function i(){let F=!1,Q=null,ne=null,ve=null,_e=null,Se=null,me=null,xe=null,oe=null;return{setTest:function(ae){F||(ae?he(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(ae){Q!==ae&&!F&&(s.stencilMask(ae),Q=ae)},setFunc:function(ae,we,le){(ne!==ae||ve!==we||_e!==le)&&(s.stencilFunc(ae,we,le),ne=ae,ve=we,_e=le)},setOp:function(ae,we,le){(Se!==ae||me!==we||xe!==le)&&(s.stencilOp(ae,we,le),Se=ae,me=we,xe=le)},setLocked:function(ae){F=ae},setClear:function(ae){oe!==ae&&(s.clearStencil(ae),oe=ae)},reset:function(){F=!1,Q=null,ne=null,ve=null,_e=null,Se=null,me=null,xe=null,oe=null}}}let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,T=null,y=null,b=null,M=null,_=null,S=new Le(0,0,0),A=0,w=!1,D=null,P=null,N=null,R=null,U=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=$>=2);let I=null,J={},pe=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),V=new Gt().fromArray(pe),Y=new Gt().fromArray(Me);function ue(F,Q,ne,ve){let _e=new Uint8Array(4),Se=s.createTexture();s.bindTexture(F,Se),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<ne;me++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Q+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Se}let ce={};ce[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(aa),G(!1),Ae(Bf),he(s.CULL_FACE),tt(In);function he(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function ye(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function We(F,Q){return f[F]!==Q?(s.bindFramebuffer(F,Q),f[F]=Q,F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Q),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ee(F,Q){let ne=m,ve=!1;if(F){ne=d.get(Q),ne===void 0&&(ne=[],d.set(Q,ne));let _e=F.textures;if(ne.length!==_e.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,me=_e.length;Se<me;Se++)ne[Se]=s.COLOR_ATTACHMENT0+Se;ne.length=_e.length,ve=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ne)}function Ue(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let be={[Ki]:s.FUNC_ADD,[X0]:s.FUNC_SUBTRACT,[q0]:s.FUNC_REVERSE_SUBTRACT};be[Y0]=s.MIN,be[$0]=s.MAX;let De={[po]:s.ZERO,[Z0]:s.ONE,[J0]:s.SRC_COLOR,[Hf]:s.SRC_ALPHA,[eg]:s.SRC_ALPHA_SATURATE,[Hl]:s.DST_COLOR,[zl]:s.DST_ALPHA,[K0]:s.ONE_MINUS_SRC_COLOR,[Vf]:s.ONE_MINUS_SRC_ALPHA,[j0]:s.ONE_MINUS_DST_COLOR,[Q0]:s.ONE_MINUS_DST_ALPHA,[tg]:s.CONSTANT_COLOR,[ng]:s.ONE_MINUS_CONSTANT_COLOR,[ig]:s.CONSTANT_ALPHA,[sg]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(F,Q,ne,ve,_e,Se,me,xe,oe,ae){if(F===In){g===!0&&(ye(s.BLEND),g=!1);return}if(g===!1&&(he(s.BLEND),g=!0),F!==tu){if(F!==p||ae!==w){if((v!==Ki||b!==Ki)&&(s.blendEquation(s.FUNC_ADD),v=Ki,b=Ki),ae)switch(F){case Ta:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFunc(s.ONE,s.ONE);break;case kf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:st("WebGLState: Invalid blending: ",F);break}else switch(F){case Ta:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kf:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zf:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",F);break}T=null,y=null,M=null,_=null,S.set(0,0,0),A=0,p=F,w=ae}return}_e=_e||Q,Se=Se||ne,me=me||ve,(Q!==v||_e!==b)&&(s.blendEquationSeparate(be[Q],be[_e]),v=Q,b=_e),(ne!==T||ve!==y||Se!==M||me!==_)&&(s.blendFuncSeparate(De[ne],De[ve],De[Se],De[me]),T=ne,y=ve,M=Se,_=me),(xe.equals(S)===!1||oe!==A)&&(s.blendColor(xe.r,xe.g,xe.b,oe),S.copy(xe),A=oe),p=F,w=!1}function se(F,Q){F.side===Zn?ye(s.CULL_FACE):he(s.CULL_FACE);let ne=F.side===Bn;Q&&(ne=!ne),G(ne),F.blending===Ta&&F.transparent===!1?tt(In):tt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ve=F.stencilWrite;a.setTest(ve),ve&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function G(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}function Ae(F){F!==V0?(he(s.CULL_FACE),F!==P&&(F===Bf?s.cullFace(s.BACK):F===G0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),P=F}function Qe(F){F!==N&&(k&&s.lineWidth(F),N=F)}function Re(F,Q,ne){F?(he(s.POLYGON_OFFSET_FILL),(R!==Q||U!==ne)&&(R=Q,U=ne,o.getReversed()&&(Q=-Q,ne=-ne),s.polygonOffset(Q,ne))):ye(s.POLYGON_OFFSET_FILL)}function Ne(F){F?he(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function je(F){F===void 0&&(F=s.TEXTURE0+H-1),I!==F&&(s.activeTexture(F),I=F)}function Ke(F,Q,ne){ne===void 0&&(I===null?ne=s.TEXTURE0+H-1:ne=I);let ve=J[ne];ve===void 0&&(ve={type:void 0,texture:void 0},J[ne]=ve),(ve.type!==F||ve.texture!==Q)&&(I!==ne&&(s.activeTexture(ne),I=ne),s.bindTexture(F,Q||ce[F]),ve.type=F,ve.texture=Q)}function z(){let F=J[I];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Je(){try{s.compressedTexImage2D(...arguments)}catch(F){st("WebGLState:",F)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(F){st("WebGLState:",F)}}function Ze(){try{s.texSubImage2D(...arguments)}catch(F){st("WebGLState:",F)}}function ge(){try{s.texSubImage3D(...arguments)}catch(F){st("WebGLState:",F)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(F){st("WebGLState:",F)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(F){st("WebGLState:",F)}}function Ye(){try{s.texStorage2D(...arguments)}catch(F){st("WebGLState:",F)}}function L(){try{s.texStorage3D(...arguments)}catch(F){st("WebGLState:",F)}}function E(){try{s.texImage2D(...arguments)}catch(F){st("WebGLState:",F)}}function O(){try{s.texImage3D(...arguments)}catch(F){st("WebGLState:",F)}}function ie(F){return u[F]!==void 0?u[F]:s.getParameter(F)}function j(F,Q){u[F]!==Q&&(s.pixelStorei(F,Q),u[F]=Q)}function re(F){V.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),V.copy(F))}function de(F){Y.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function q(F,Q){let ne=c.get(Q);ne===void 0&&(ne=new WeakMap,c.set(Q,ne));let ve=ne.get(F);ve===void 0&&(ve=s.getUniformBlockIndex(Q,F.name),s.uniformBlockBinding(Q,ve,ve),ne.set(F,ve))}function ee(F,Q,ne){let _e=c.get(Q).get(F);l[_e]!==ne&&(s.bindBufferBase(s.UNIFORM_BUFFER,_e,ne),l[_e]=ne)}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},I=null,J={},f={},l={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,T=null,y=null,b=null,M=null,_=null,S=new Le(0,0,0),A=0,w=!1,D=null,P=null,N=null,R=null,U=null,V.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:ye,bindFramebuffer:We,drawBuffers:Ee,useProgram:Ue,setBlending:tt,setMaterial:se,setFlipSided:G,setCullFace:Ae,setLineWidth:Qe,setPolygonOffset:Re,setScissorTest:Ne,activeTexture:je,bindTexture:Ke,unbindTexture:z,compressedTexImage2D:Je,compressedTexImage3D:et,texImage2D:E,texImage3D:O,pixelStorei:j,getParameter:ie,updateUBOMapping:q,uniformBlockBinding:ee,texStorage2D:Ye,texStorage3D:L,texSubImage2D:Ze,texSubImage3D:ge,compressedTexSubImage2D:ct,compressedTexSubImage3D:ke,scissor:re,viewport:de,reset:fe}}function ST(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,u=new Set,f,d=new WeakMap,m=new Set,x=new FinalizationRegistry(L=>m.delete(L)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return g?new OffscreenCanvas(L,E):ca("canvas")}function v(L,E,O){let ie=1,j=Ye(L);if((j.width>O||j.height>O)&&(ie=O/Math.max(j.width,j.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let re=Math.floor(ie*j.width),de=Math.floor(ie*j.height);f===void 0&&(f=p(re,de));let q=E?p(re,de):f;return q.width=re,q.height=de,q.getContext("2d").drawImage(L,0,0,re,de),it("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+de+")."),q}else return"data"in L&&it("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function T(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(L,E,O,ie,j,re=!1){if(L!==null){if(s[L]!==void 0)return s[L];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de;ie&&(de=e.get("EXT_texture_norm16"),de||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=E;if(E===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8),O===s.UNSIGNED_SHORT&&de&&(q=de.R16_EXT),O===s.SHORT&&de&&(q=de.R16_SNORM_EXT)),E===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),E===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8),O===s.UNSIGNED_SHORT&&de&&(q=de.RG16_EXT),O===s.SHORT&&de&&(q=de.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),E===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),E===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),E===s.RGB&&(O===s.UNSIGNED_SHORT&&de&&(q=de.RGB16_EXT),O===s.SHORT&&de&&(q=de.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),E===s.RGBA){let ee=re?xl:gt.getTransfer(j);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=ee===bt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&de&&(q=de.RGBA16_EXT),O===s.SHORT&&de&&(q=de.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(L,E){let O;return L?E===null||E===xs||E===rr?O=s.DEPTH24_STENCIL8:E===Qi?O=s.DEPTH32F_STENCIL8:E===wa&&(O=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xs||E===rr?O=s.DEPTH_COMPONENT24:E===Qi?O=s.DEPTH_COMPONENT32F:E===wa&&(O=s.DEPTH_COMPONENT16),O}function S(L,E){return T(L)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==ci?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function A(L){let E=new WeakRef(L);n.get(L).__ref=E,m.add(E),x.register(L,E,E)}function w(L){let E=n.get(L).__ref;E!==void 0&&(m.delete(E),x.unregister(E))}function D(L){N(L.target)}function P(L){R(L.target)}function N(L){L.removeEventListener("dispose",D),w(L),H(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function R(L){L.removeEventListener("dispose",P),w(L),$(L)}function U(){for(let L of m){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?R(E):N(E))}m.clear(),u.clear()}function H(L){let E=n.get(L);if(E.__webglInit===void 0)return;let O=L.source,ie=d.get(O);if(ie){let j=ie[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(L),Object.keys(ie).length===0&&d.delete(O)}n.remove(L)}function k(L){let E=n.get(L);s.deleteTexture(E.__webglTexture);let O=L.source,ie=d.get(O);delete ie[E.__cacheKey],o.memory.textures--}function $(L){let E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let O=L.depthTexture;if(O&&O.renderTarget===L&&N(O),L.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let re=0;re<E.__webglFramebuffer[j].length;re++)s.deleteFramebuffer(E.__webglFramebuffer[j][re]);else s.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)s.deleteFramebuffer(E.__webglFramebuffer[j]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ie=L.textures;for(let j=0,re=ie.length;j<re;j++){let de=n.get(ie[j]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(ie[j])}n.remove(L)}let X=0;function I(){X=0}function J(){return X}function pe(L){X=L}function Me(){let L=X;return L>=i.maxTextures&&it("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,L}function V(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Y(L,E){let O=n.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&O.__version!==L.version){let ie=L.image;if(ie===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,L,E);return}}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+E)}function ue(L,E){let O=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){se(O,L,E);return}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+E)}function ce(L,E){let O=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){se(O,L,E);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+E)}function he(L,E){let O=n.get(L);if(L.version>0&&O.__version!==L.version){G(O,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+E)}let ye={[Mi]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[Nh]:s.MIRRORED_REPEAT},We={[ln]:s.NEAREST,[ag]:s.NEAREST_MIPMAP_NEAREST,[$l]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[su]:s.LINEAR_MIPMAP_NEAREST,[sr]:s.LINEAR_MIPMAP_LINEAR},Ee={[ug]:s.NEVER,[jf]:s.ALWAYS,[dg]:s.LESS,[Kf]:s.LEQUAL,[fg]:s.EQUAL,[Qf]:s.GEQUAL,[pg]:s.GREATER,[mg]:s.NOTEQUAL};function Ue(L,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ci||E.magFilter===su||E.magFilter===$l||E.magFilter===sr||E.minFilter===ci||E.minFilter===su||E.minFilter===$l||E.minFilter===sr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ye[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ye[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ye[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,We[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,We[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==$l&&E.minFilter!==sr||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function be(L,E){let O=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",D),A(E));let ie=E.source,j=d.get(ie);j===void 0&&(j={},d.set(ie,j));let re=V(E);if(re!==L.__cacheKey){j[re]===void 0&&(j[re]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[re].usedTimes++;let de=j[L.__cacheKey];de!==void 0&&(j[L.__cacheKey].usedTimes--,de.usedTimes===0&&k(E)),L.__cacheKey=re,L.__webglTexture=j[re].texture}return O}function De(L,E,O){return Math.floor(Math.floor(L/O)/E)}function tt(L,E,O,ie){let re=L.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,O,ie,E.data);else{re.sort((F,Q)=>F.start-Q.start);let de=0;for(let F=1;F<re.length;F++){let Q=re[de],ne=re[F],ve=Q.start+Q.count,_e=De(ne.start,E.width,4),Se=De(Q.start,E.width,4);ne.start<=ve+1&&_e===Se&&De(ne.start+ne.count-1,E.width,4)===_e?Q.count=Math.max(Q.count,ne.start+ne.count-Q.start):(++de,re[de]=ne)}re.length=de+1;let q=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let F=0,Q=re.length;F<Q;F++){let ne=re[F],ve=Math.floor(ne.start/4),_e=Math.ceil(ne.count/4),Se=ve%E.width,me=Math.floor(ve/E.width),xe=_e,oe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,me),t.texSubImage2D(s.TEXTURE_2D,0,Se,me,xe,oe,O,ie,E.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,q),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function se(L,E,O){let ie=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=s.TEXTURE_3D);let j=be(L,E),re=E.source;t.bindTexture(ie,L.__webglTexture,s.TEXTURE0+O);let de=n.get(re);if(re.version!==de.__version||j===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let oe=gt.getPrimaries(gt.workingColorSpace),ae=E.colorSpace===or?null:gt.getPrimaries(E.colorSpace),we=E.colorSpace===or||oe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=v(E.image,!1,i.maxTextureSize);ee=ke(E,ee);let fe=r.convert(E.format,E.colorSpace),F=r.convert(E.type),Q=M(E.internalFormat,fe,F,E.normalized,E.colorSpace,E.isVideoTexture);Ue(ie,E);let ne,ve=E.mipmaps,_e=E.isVideoTexture!==!0,Se=de.__version===void 0||j===!0,me=re.dataReady,xe=S(E,ee);if(E.isDepthTexture)Q=_(E.format===vs,E.type),Se&&(_e?t.texStorage2D(s.TEXTURE_2D,1,Q,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Q,ee.width,ee.height,0,fe,F,null));else if(E.isDataTexture)if(ve.length>0){_e&&Se&&t.texStorage2D(s.TEXTURE_2D,xe,Q,ve[0].width,ve[0].height);for(let oe=0,ae=ve.length;oe<ae;oe++)ne=ve[oe],_e?me&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ne.width,ne.height,fe,F,ne.data):t.texImage2D(s.TEXTURE_2D,oe,Q,ne.width,ne.height,0,fe,F,ne.data);E.generateMipmaps=!1}else _e?(Se&&t.texStorage2D(s.TEXTURE_2D,xe,Q,ee.width,ee.height),me&&tt(E,ee,fe,F)):t.texImage2D(s.TEXTURE_2D,0,Q,ee.width,ee.height,0,fe,F,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){_e&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Q,ve[0].width,ve[0].height,ee.depth);for(let oe=0,ae=ve.length;oe<ae;oe++)if(ne=ve[oe],E.format!==Oi)if(fe!==null)if(_e){if(me)if(E.layerUpdates.size>0){let we=hp(ne.width,ne.height,E.format,E.type);for(let le of E.layerUpdates){let Fe=ne.data.subarray(le*we/ne.data.BYTES_PER_ELEMENT,(le+1)*we/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,le,ne.width,ne.height,1,fe,Fe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ne.width,ne.height,ee.depth,fe,ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Q,ne.width,ne.height,ee.depth,0,ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,ne.width,ne.height,ee.depth,fe,F,ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Q,ne.width,ne.height,ee.depth,0,fe,F,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{_e&&Se&&t.texStorage2D(s.TEXTURE_2D,xe,Q,ve[0].width,ve[0].height);for(let oe=0,ae=ve.length;oe<ae;oe++)ne=ve[oe],E.format!==Oi?fe!==null?_e?me&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,ne.width,ne.height,fe,ne.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Q,ne.width,ne.height,0,ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?me&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,ne.width,ne.height,fe,F,ne.data):t.texImage2D(s.TEXTURE_2D,oe,Q,ne.width,ne.height,0,fe,F,ne.data)}else if(E.isDataArrayTexture)if(_e){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,Q,ee.width,ee.height,ee.depth),me)if(E.layerUpdates.size>0){let oe=hp(ee.width,ee.height,E.format,E.type);for(let ae of E.layerUpdates){let we=ee.data.subarray(ae*oe/ee.data.BYTES_PER_ELEMENT,(ae+1)*oe/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ae,ee.width,ee.height,1,fe,F,we)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,F,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,ee.width,ee.height,ee.depth,0,fe,F,ee.data);else if(E.isData3DTexture)_e?(Se&&t.texStorage3D(s.TEXTURE_3D,xe,Q,ee.width,ee.height,ee.depth),me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,F,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Q,ee.width,ee.height,ee.depth,0,fe,F,ee.data);else if(E.isFramebufferTexture){if(Se)if(_e)t.texStorage2D(s.TEXTURE_2D,xe,Q,ee.width,ee.height);else{let oe=ee.width,ae=ee.height;for(let we=0;we<xe;we++)t.texImage2D(s.TEXTURE_2D,we,Q,oe,ae,0,fe,F,null),oe>>=1,ae>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){let oe=s.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ee.parentNode!==oe){oe.appendChild(ee),u.add(E),oe.onpaint=ae=>{let we=ae.changedElements;for(let le of u)we.includes(le.image)&&(le.needsUpdate=!0)},oe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{let we=s.RGBA,le=s.RGBA,Fe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,we,le,Fe,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ve.length>0){if(_e&&Se){let oe=Ye(ve[0]);t.texStorage2D(s.TEXTURE_2D,xe,Q,oe.width,oe.height)}for(let oe=0,ae=ve.length;oe<ae;oe++)ne=ve[oe],_e?me&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,fe,F,ne):t.texImage2D(s.TEXTURE_2D,oe,Q,fe,F,ne);E.generateMipmaps=!1}else if(_e){if(Se){let oe=Ye(ee);t.texStorage2D(s.TEXTURE_2D,xe,Q,oe.width,oe.height)}me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,F,ee)}else t.texImage2D(s.TEXTURE_2D,0,Q,fe,F,ee);T(E)&&E.mipmapsAutoUpdate===!0&&y(ie),de.__version=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function G(L,E,O){if(E.image.length!==6)return;let ie=be(L,E),j=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+O);let re=n.get(j);if(j.version!==re.__version||ie===!0){t.activeTexture(s.TEXTURE0+O);let de=gt.getPrimaries(gt.workingColorSpace),q=E.colorSpace===or?null:gt.getPrimaries(E.colorSpace),ee=E.colorSpace===or||de===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let fe=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let le=0;le<6;le++)!fe&&!F?Q[le]=v(E.image[le],!0,i.maxCubemapSize):Q[le]=F?E.image[le].image:E.image[le],Q[le]=ke(E,Q[le]);let ne=Q[0],ve=r.convert(E.format,E.colorSpace),_e=r.convert(E.type),Se=M(E.internalFormat,ve,_e,E.normalized,E.colorSpace),me=E.isVideoTexture!==!0,xe=re.__version===void 0||ie===!0,oe=j.dataReady,ae=S(E,ne);Ue(s.TEXTURE_CUBE_MAP,E);let we;if(E.isDepthTexture){if(Se=_(E.format===vs,E.type),xe)if(me)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Se,ne.width,ne.height);else for(let le=0;le<6;le++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,ne.width,ne.height,0,ve,_e,null)}else if(fe){me&&xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Se,ne.width,ne.height);for(let le=0;le<6;le++){we=Q[le].mipmaps;for(let Fe=0;Fe<we.length;Fe++){let _t=we[Fe];E.format!==Oi?ve!==null?me?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,_t.width,_t.height,ve,_t.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,Se,_t.width,_t.height,0,_t.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,_t.width,_t.height,ve,_e,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,Se,_t.width,_t.height,0,ve,_e,_t.data)}}}else{if(we=E.mipmaps,me&&xe){we.length>0&&ae++;let le=Ye(Q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Se,le.width,le.height)}for(let le=0;le<6;le++)if(F){me?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Q[le].width,Q[le].height,ve,_e,Q[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,Q[le].width,Q[le].height,0,ve,_e,Q[le].data);for(let Fe=0;Fe<we.length;Fe++){let ot=we[Fe].image[le].image;me?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,ot.width,ot.height,ve,_e,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,Se,ot.width,ot.height,0,ve,_e,ot.data)}}else{me?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve,_e,Q[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,ve,_e,Q[le]);for(let Fe=0;Fe<we.length;Fe++){let _t=we[Fe];me?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,ve,_e,_t.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,Se,ve,_e,_t.image[le])}}}T(E)&&E.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),re.__version=j.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ae(L,E,O,ie,j,re){let de=r.convert(O.format,O.colorSpace),q=r.convert(O.type),ee=M(O.internalFormat,de,q,O.normalized,O.colorSpace),fe=n.get(E),F=n.get(O);if(F.__renderTarget=E,!fe.__hasExternalTextures){let Q=Math.max(1,E.width>>re),ne=Math.max(1,E.height>>re);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,re,ee,Q,ne,E.depth,0,de,q,null):t.texImage2D(j,re,ee,Q,ne,0,de,q,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,j,F.__webglTexture,0,Ze(E)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,j,F.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(L,E,O){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){let ie=E.depthTexture,j=ie&&ie.isDepthTexture?ie.type:null,re=_(E.stencilBuffer,j),de=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze(E),re,E.width,E.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze(E),re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,re,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,L)}else{let ie=E.textures;for(let j=0;j<ie.length;j++){let re=ie[j],de=r.convert(re.format,re.colorSpace),q=r.convert(re.type),ee=M(re.internalFormat,de,q,re.normalized,re.colorSpace);ge(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze(E),ee,E.width,E.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze(E),ee,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ee,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(L,E,O){let ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(E.depthTexture);j.__renderTarget=E;let re=ie?E.depthTexture.image[0]:E.depthTexture.image;(!j.__webglTexture||re.width!==E.width||re.height!==E.height)&&(re.width=E.width,re.height=E.height,E.depthTexture.needsUpdate=!0),ie?he(E.depthTexture,0):Y(E.depthTexture,0);let de=j.__webglTexture,q=Ze(E),ee=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,fe=E.depthTexture.format===vs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qs)ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ee,de,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,fe,ee,de,0);else if(E.depthTexture.format===vs)ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ee,de,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,fe,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(L){let E=n.get(L),O=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let ie=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",j)};ie.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=ie}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(O)for(let ie=0;ie<6;ie++)Re(E.__webglFramebuffer[ie],L,ie);else L.texture.mipmaps.length>0?Re(E.__webglFramebuffer[0],L,0):Re(E.__webglFramebuffer,L,0);else if(O){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=s.createRenderbuffer(),Qe(E.__webglDepthbuffer[ie],L,!1);else{let j=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,re)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Qe(E.__webglDepthbuffer,L,!1);else{let j=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(L,E,O){let ie=n.get(L);E!==void 0&&Ae(ie.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ne(L)}function Ke(L){let E=L.texture,O=n.get(L),ie=n.get(E);L.addEventListener("dispose",P),A(L);let j=L.textures,re=L.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=E.version,o.memory.textures++),re){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let ee=0;ee<E.mipmaps.length;ee++)O.__webglFramebuffer[q][ee]=s.createFramebuffer()}else O.__webglFramebuffer[q]=s.createFramebuffer()}else{if(E.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)O.__webglFramebuffer[q]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(de)for(let q=0,ee=j.length;q<ee;q++){let fe=n.get(j[q]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&ge(L)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<j.length;q++){let ee=j[q];O.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[q]);let fe=r.convert(ee.format,ee.colorSpace),F=r.convert(ee.type),Q=M(ee.internalFormat,fe,F,ee.normalized,ee.colorSpace,L.isXRRenderTarget===!0),ne=Ze(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Q,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,O.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Qe(O.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ae(O.__webglFramebuffer[q][ee],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee);else Ae(O.__webglFramebuffer[q],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);T(E)?y(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(de){for(let q=0,ee=j.length;q<ee;q++){let fe=j[q],F=n.get(fe),Q=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,F.__webglTexture),Ue(Q,fe),Ae(O.__webglFramebuffer,L,fe,s.COLOR_ATTACHMENT0+q,Q,0),T(fe)&&y(Q)}t.unbindTexture()}else{let q=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(q=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(q,ie.__webglTexture),Ue(q,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)Ae(O.__webglFramebuffer[ee],L,E,s.COLOR_ATTACHMENT0,q,ee);else Ae(O.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,q,0);T(E)?y(q):E.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Ne(L)}function z(L){let E=L.textures;for(let O=0,ie=E.length;O<ie;O++){let j=E[O];if(T(j)&&j.mipmapsAutoUpdate===!0){let re=b(L),de=n.get(j).__webglTexture;t.bindTexture(re,de),y(re),t.unbindTexture()}}}let Je=[];function et(L){if(L.samples>0){if(ge(L)===!1){let E=L.textures,O=L.width,ie=L.height,j=s.COLOR_BUFFER_BIT,re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(L),q=E.length>1;if(q)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let F=n.get(E[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,O,ie,0,0,O,ie,j,s.NEAREST),l===!0&&(Je.length=0,Je.push(s.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Je.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let F=n.get(E[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ze(L){return Math.min(i.maxSamples,L.samples)}function ge(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(L){let E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function ke(L,E){let O=L.colorSpace,ie=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||O!==_l&&O!==or&&(gt.getTransfer(O)===bt?(ie!==Oi||j!==Jn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",O)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Me,this.resetTextureUnits=I,this.getTextureUnits=J,this.setTextureUnits=pe,this.setTexture2D=Y,this.setTexture2DArray=ue,this.setTexture3D=ce,this.setTextureCube=he,this.rebindTextures=je,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ge,this.dispose=U}function MT(s,e){function t(n,i=or){let r,o=gt.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===ou)return s.UNSIGNED_SHORT_4_4_4_4;if(n===au)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$f)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xf)return s.BYTE;if(n===qf)return s.SHORT;if(n===wa)return s.UNSIGNED_SHORT;if(n===ru)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===Qi)return s.FLOAT;if(n===nn)return s.HALF_FLOAT;if(n===Zf)return s.ALPHA;if(n===Jf)return s.RGB;if(n===Oi)return s.RGBA;if(n===Qs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===lu)return s.RED;if(n===cu)return s.RED_INTEGER;if(n===Br)return s.RG;if(n===hu)return s.RG_INTEGER;if(n===uu)return s.RGBA_INTEGER;if(n===Zl||n===Jl||n===Kl||n===Ql)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===du||n===fu||n===pu||n===mu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gu||n===_u||n===xu||n===vu||n===yu||n===jl||n===Su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gu||n===_u)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vu)return r.COMPRESSED_R11_EAC;if(n===yu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jl)return r.COMPRESSED_RG11_EAC;if(n===Su)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mu||n===bu||n===Tu||n===Eu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Du||n===Lu||n===Nu||n===Uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Au)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ru)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Du)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ou||n===Fu||n===Bu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ou)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ku||n===zu||n===ec||n===Hu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ku)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
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

}`,Tp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:bT,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ep=class extends Ts{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Tp,p={},v=t.getContextAttributes(),T=null,y=null,b=[],M=[],_=new Ce,S=null,A=null,w=new Yn;w.viewport=new Gt;let D=new Yn;D.viewport=new Gt;let P=[w,D],N=new jh,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=b[V];return Y===void 0&&(Y=new pa,b[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=b[V];return Y===void 0&&(Y=new pa,b[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=b[V];return Y===void 0&&(Y=new pa,b[V]=Y),Y.getHandSpace()};function H(V){let Y=M.indexOf(V.inputSource);if(Y===-1)return;let ue=b[Y];ue!==void 0&&(ue.update(V.inputSource,V.frame,c||o),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",$);for(let V=0;V<b.length;V++){let Y=M[V];Y!==null&&(M[V]=null,b[V].disconnect(Y))}R=null,U=null,g.reset();for(let V in p)delete p[V];if(e.setRenderTarget(T),d=null,f=null,u=null,i=null,y=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),A!==null){let V=A.camera;V.fov=A.fov,V.zoom=A.zoom,V.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",k),i.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ce=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?vs:Qs,ce=v.stencil?rr:xs);let ye={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Wt(f.textureWidth,f.textureHeight,{format:Oi,type:Jn,depthTexture:new gs(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Wt(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(V){for(let Y=0;Y<V.removed.length;Y++){let ue=V.removed[Y],ce=M.indexOf(ue);ce>=0&&(M[ce]=null,b[ce].disconnect(ue))}for(let Y=0;Y<V.added.length;Y++){let ue=V.added[Y],ce=M.indexOf(ue);if(ce===-1){for(let ye=0;ye<b.length;ye++)if(ye>=M.length){M.push(ue),ce=ye;break}else if(M[ye]===null){M[ye]=ue,ce=ye;break}if(ce===-1)break}let he=b[ce];he&&he.connect(ue)}}function X(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let Y=V.near,ue=V.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),N.near=D.near=w.near=Y,N.far=D.far=w.far=ue,(R!==N.near||U!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,U=N.far),N.layers.mask=V.layers.mask|6,w.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let ce=V.parent,he=N.cameras;X(N,ce);for(let ye=0;ye<he.length;ye++)X(he[ye],ce);N.projectionMatrix.copy(w.projectionMatrix),N.projectionMatrixInverse.copy(w.projectionMatrixInverse),A===null&&V.isPerspectiveCamera&&(A={camera:V,fov:V.fov,zoom:V.zoom}),I(V,N,ce)};function I(V,Y,ue){ue===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ua*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(V){return p[V]};let J=null;function pe(V,Y){if(h=Y.getViewerPose(c||o),m=Y,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ce=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,ce=!0);for(let Ee=0;Ee<ue.length;Ee++){let Ue=ue[Ee],be=null;if(d!==null)be=d.getViewport(Ue);else{let tt=u.getViewSubImage(f,Ue);be=tt.viewport,Ee===0&&(e.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(y))}let De=P[Ee];De===void 0&&(De=new Yn,De.layers.enable(Ee),De.viewport=new Gt,P[Ee]=De),De.matrix.fromArray(Ue.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ue.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(be.x,be.y,be.width,be.height),Ee===0&&(N.matrix.copy(De.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ce===!0&&N.cameras.push(De)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ee=u.getDepthInformation(ue[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,i.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ee=0;Ee<ue.length;Ee++){let Ue=ue[Ee].camera;if(Ue){let be=p[Ue];be||(be=new Rl,p[Ue]=be);let De=u.getCameraImage(Ue);be.sourceTexture=De}}}}for(let ue=0;ue<b.length;ue++){let ce=M[ue],he=b[ue];ce!==null&&he!==void 0&&he.update(ce,Y,c||o)}J&&J(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let Me=new Xg;Me.setAnimationLoop(pe),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}},ET=new lt,t_=new rt;t_.set(-1,0,0,0,1,0,0,0,1);function wT(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ap(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Bn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Bn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),T=v.envMap,y=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(t_),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AT(s,e,t,n){let i={},r={};function o(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,T){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",g));let b=T.program;n.updateUBOMapping(v,b);let M=e.render.frame;r[v.id]!==M&&(c(v),r[v.id]=M)}function l(v){let T=s.createBuffer(),y=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,y,b),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let M=0,_=y.length;M<_;M++){let S=y[M];if(Array.isArray(S))for(let A=0,w=S.length;A<w;A++)h(S[A],M,A,b);else h(S,M,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,y,b){if(f(v,T,y,b)===!0){let M=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let A=0;A<_.length;A++){let w=_[A],D=x(w,!0);u(w,v.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function u(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function f(v,T,y,b){let M=v.value,_=T+"_"+y;if(Array.isArray(M)){b[_]===void 0&&(b[_]=[]);let S=b[_],A=!1;for(let w=0;w<M.length;w++)d(M[w],S,w)===!0&&(A=!0);return A}return d(M,b,_)}function d(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let b=T[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(v){let T=v.uniforms,y=0,b=16;for(let _=0,S=T.length;_<S;_++){let A=Array.isArray(T[_])?T[_]:[T[_]];for(let w=0,D=A.length;w<D;w++){let P=A[w],N=Array.isArray(P.value)?P.value:[P.value],R=Array.isArray(T[_])||Array.isArray(P.value),U=y;for(let k=0,$=N.length;k<$;k++){let X=N[k],I=x(X,R),J=y%b,pe=J%I.boundary,Me=J+pe;y+=pe,Me!==0&&b-Me<I.storage&&(y+=b-Me),k===0&&(U=y),y+=I.storage}let H=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new H((y-U)/Float32Array.BYTES_PER_ELEMENT),P.__offset=U}}let M=y%b;return M>0&&(y+=b-M),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):it("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let T=v.target;T.removeEventListener("dispose",g),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:p}}var RT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cs=null;function CT(){return Cs===null&&(Cs=new tr(RT,16,16,Br,nn),Cs.name="DFG_LUT",Cs.minFilter=ci,Cs.magFilter=ci,Cs.wrapS=bs,Cs.wrapT=bs,Cs.generateMipmaps=!1,Cs.needsUpdate=!0),Cs}var Xu=class{constructor(e={}){let{canvas:t=gg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Jn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([uu,hu,cu]),p=new Set([Jn,xs,wa,rr,ou,au]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,M=null,_=[],S=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,D=!1,P=null,N=null,R=null,U=null;this._outputColorSpace=Vt;let H=0,k=0,$=null,X=-1,I=null,J=new Gt,pe=new Gt,Me=null,V=new Le(0),Y=0,ue=t.width,ce=t.height,he=1,ye=null,We=null,Ee=new Gt(0,0,ue,ce),Ue=new Gt(0,0,ue,ce),be=!1,De=new Ir,tt=new zh,se=!1,G=!1,Ae=new lt,Qe=new B,Re=new Gt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Ke(){return $===null?he:1}let z=n;function Je(C,W){return t.getContext(C,W)}let et,Ze,ge,ct,ke,Ye,L,E,O,ie,j,re,de,q,ee,fe,F,Q,ne,ve,_e,Se,me;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",le,!1),z===null){let W="webgl2";if(z=Je(W,C),z===null)throw Je(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(C){throw t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",le,!1),st("WebGLRenderer: "+C.message),C}function xe(){et=new zb(z),et.init(),_e=new MT(z,et),Ze=new Cb(z,et,e,_e),ge=new yT(z,et),Ze.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),N=z.createFramebuffer(),R=z.createFramebuffer(),U=z.createFramebuffer(),ct=new Gb(z),ke=new oT,Ye=new ST(z,et,ge,ke,Ze,_e,ct),L=new kb(w),E=new Xy(z),Se=new Ab(z,E),O=new Hb(z,E,ct,Se),ie=new Xb(z,O,E,Se,ct),Q=new Wb(z,Ze,Ye),ee=new Pb(ke),j=new rT(w,L,et,Ze,Se,ee),re=new wT(w,ke),de=new lT,q=new pT(et),F=new wb(w,L,ge,ie,m,l),fe=new vT(w,ie,Ze),me=new AT(z,ct,Ze,ge),ne=new Rb(z,et,ct),ve=new Vb(z,et,ct),ct.programs=j.programs,w.capabilities=Ze,w.extensions=et,w.properties=ke,w.renderLists=de,w.shadowMap=fe,w.state=ge,w.info=ct}x!==Jn&&(A=new Yb(x,t.width,t.height,a,i,r));let oe=new Ep(w,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(C){C!==void 0&&(he=C,this.setSize(ue,ce,!1))},this.getSize=function(C){return C.set(ue,ce)},this.setSize=function(C,W,te=!0){if(oe.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=C,ce=W,t.width=Math.floor(C*he),t.height=Math.floor(W*he),te===!0&&(t.style.width=C+"px",t.style.height=W+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ue*he,ce*he).floor()},this.setDrawingBufferSize=function(C,W,te){ue=C,ce=W,he=te,t.width=Math.floor(C*te),t.height=Math.floor(W*te),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(x===Jn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,W,te,Z){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,W,te,Z),ge.viewport(J.copy(Ee).multiplyScalar(Ke()).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,W,te,Z){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,W,te,Z),ge.scissor(pe.copy(Ue).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){ge.setScissorTest(be=C)},this.setOpaqueSort=function(C){ye=C},this.setTransparentSort=function(C){We=C},this.getClearColor=function(C){return C.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,te=!0){let Z=0;if(C){let K=!1;if($!==null){let Ie=$.texture.format;K=g.has(Ie)}if(K){let Ie=$.texture.type,He=p.has(Ie),Pe=F.getClearColor(),Be=F.getClearAlpha(),$e=Pe.r,at=Pe.g,xt=Pe.b;He?(v[0]=$e,v[1]=at,v[2]=xt,v[3]=Be,z.clearBufferuiv(z.COLOR,0,v)):(T[0]=$e,T[1]=at,T[2]=xt,T[3]=Be,z.clearBufferiv(z.COLOR,0,T))}else Z|=z.COLOR_BUFFER_BIT}W&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",le,!1),F.dispose(),de.dispose(),q.dispose(),Ye.dispose(),ke.dispose(),L.dispose(),ie.dispose(),O.dispose(),Se.dispose(),me.dispose(),j.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Dt),oe.removeEventListener("sessionend",wt),Sn.stop()};function ae(C){C.preventDefault(),vl("WebGLRenderer: Context Lost."),D=!0}function we(){vl("WebGLRenderer: Context Restored."),D=!1;let C=ct.autoReset,W=fe.enabled,te=fe.autoUpdate,Z=fe.needsUpdate,K=fe.type;xe(),ct.autoReset=C,fe.enabled=W,fe.autoUpdate=te,fe.needsUpdate=Z,fe.type=K}function le(C){st("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Fe(C){let W=C.target;W.removeEventListener("dispose",Fe),_t(W)}function _t(C){ot(C),ke.remove(C)}function ot(C){let W=ke.get(C).programs;W!==void 0&&(W.forEach(function(te){j.releaseProgram(te)}),C.isShaderMaterial&&j.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,te,Z,K,Ie){W===null&&(W=Ne);let He=K.isMesh&&K.matrixWorld.determinantAffine()<0,Pe=Wi(C,W,te,Z,K);ge.setMaterial(Z,He);let Be=te.index,$e=1;if(Z.wireframe===!0){if(Be=O.getWireframeAttribute(te),Be===void 0)return;$e=2}let at=te.drawRange,xt=te.attributes.position,Xe=at.start*$e,vt=(at.start+at.count)*$e;Ie!==null&&(Xe=Math.max(Xe,Ie.start*$e),vt=Math.min(vt,(Ie.start+Ie.count)*$e)),Be!==null?(Xe=Math.max(Xe,0),vt=Math.min(vt,Be.count)):xt!=null&&(Xe=Math.max(Xe,0),vt=Math.min(vt,xt.count));let pn=vt-Xe;if(pn<0||pn===1/0)return;Se.setup(K,Z,Pe,te,Be);let Ft,Nt=ne;if(Be!==null&&(Ft=E.get(Be),Nt=ve,Nt.setIndex(Ft)),K.isMesh)Z.wireframe===!0?(ge.setLineWidth(Z.wireframeLinewidth*Ke()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(K.isLine){let Gn=Z.linewidth;Gn===void 0&&(Gn=1),ge.setLineWidth(Gn*Ke()),K.isLineSegments?Nt.setMode(z.LINES):K.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else K.isPoints?Nt.setMode(z.POINTS):K.isSprite&&Nt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Gn=K._multiDrawStarts,qe=K._multiDrawCounts,ai=K._multiDrawCount,Et=Be?E.get(Be).bytesPerElement:1,no=ke.get(Z).currentProgram.getUniforms();for(let Wn=0;Wn<ai;Wn++)no.setValue(z,"_gl_DrawID",Wn),Nt.render(Gn[Wn]/Et,qe[Wn])}else if(K.isInstancedMesh)Nt.renderInstances(Xe,pn,K.count);else if(te.isInstancedBufferGeometry){let Gn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,qe=Math.min(te.instanceCount,Gn);Nt.renderInstances(Xe,pn,qe)}else Nt.render(Xe,pn)};function zt(C,W,te,Z){P!==null&&C.isNodeMaterial&&P.setObject(Z,C),se===!0&&ee.setState(C,te,!1),C.transparent===!0&&C.side===Zn&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,Di(C,W,Z),C.side=Fr,C.needsUpdate=!0,Di(C,W,Z),C.side=Zn):Di(C,W,Z)}this.compile=function(C,W,te=null){te===null&&(te=C),P!==null&&P.renderStart(C,W,te),M=q.get(te),M.init(W),S.push(M),te.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),C!==te&&C.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),M.setupLights(),P!==null&&P.updateLights(M.state.lightsArray),G=this.localClippingEnabled,se=ee.init(this.clippingPlanes,G),se===!0&&ee.setGlobalState(this.clippingPlanes,W),P!==null&&fe.render(M.state.shadowsArray,te,W);let Z=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ie=K.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){let Pe=Ie[He];zt(Pe,te,W,K),Z.add(Pe)}else zt(Ie,te,W,K),Z.add(Ie)}),M=S.pop(),P!==null&&P.renderEnd(),Z},this.compileAsync=function(C,W,te=null){let Z=this.compile(C,W,te);return new Promise(K=>{function Ie(){if(Z.forEach(function(He){let Be=ke.get(He).currentProgram;(Be===void 0||Be.isReady())&&Z.delete(He)}),Z.size===0){K(C);return}setTimeout(Ie,10)}et.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let dn=null;function Ht(C){dn&&dn(C)}function Dt(){Sn.stop()}function wt(){Sn.start()}let Sn=new Xg;Sn.setAnimationLoop(Ht),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(C){dn=C,oe.setAnimationLoop(C),C===null?Sn.stop():Sn.start()},oe.addEventListener("sessionstart",Dt),oe.addEventListener("sessionend",wt),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(C,W);let te=oe.enabled===!0&&oe.isPresenting===!0,Z=A!==null&&($===null||te)&&A.begin(w,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,W,$),M=q.get(C,S.length),M.init(W),M.state.textureUnits=Ye.getTextureUnits(),S.push(M),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?tt.setFromArrayCamera(W):De.setFromProjectionMatrix(Ae,qi,W.reversedDepth),G=this.localClippingEnabled,se=ee.init(this.clippingPlanes,G),b=de.get(C,_.length),b.init(),_.push(b),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let He=w.xr.getDepthSensingMesh();He!==null&&Lt(He,W,-1/0,w.sortObjects)}Lt(C,W,0,w.sortObjects),b.finish(),P!==null&&P.updateLights(M.state.lightsArray),w.sortObjects===!0&&b.sort(ye,We),je=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,je&&F.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),se===!0&&ee.beginShadows();let K=M.state.shadowsArray;if(fe.render(K,C,W),se===!0&&ee.endShadows(),(Z&&A.hasRenderPass())===!1){let He=b.opaque,Pe=b.transmissive;if(M.setupLights(),W.isArrayCamera){let Be=W.cameras;if(Pe.length>0)for(let $e=0,at=Be.length;$e<at;$e++){let xt=Be[$e];Ii(He,Pe,C,xt)}je&&F.render(C);for(let $e=0,at=Be.length;$e<at;$e++){let xt=Be[$e];Vn(b,C,xt,xt.viewport)}}else Pe.length>0&&Ii(He,Pe,C,W),je&&F.render(C),Vn(b,C,W)}$!==null&&k===0&&(Ye.updateMultisampleRenderTarget($),Ye.updateRenderTargetMipmap($)),Z&&A.end(w),C.isScene===!0&&C.onAfterRender(w,C,W),Se.resetDefaultState(),X=-1,I=null,S.pop(),S.length>0?(M=S[S.length-1],Ye.setTextureUnits(M.state.textureUnits),se===!0&&ee.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,P!==null&&P.renderEnd()};function Lt(C,W,te,Z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){let He=W.isArrayCamera?tt:De;if(!C.frustumCulled||C.intersectsFrustum(He)){Z&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);let Pe=ie.update(C),Be=C.material;Be.visible&&b.push(C,Pe,Be,te,Re.z,null,W)}}else if(C.isMesh||C.isLine||C.isPoints){let He=W.isArrayCamera?tt:De;if(!C.frustumCulled||C.intersectsFrustum(He)){let Pe=ie.update(C),Be=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Re.copy(Pe.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Be)){let $e=Pe.groups;for(let at=0,xt=$e.length;at<xt;at++){let Xe=$e[at],vt=Be[Xe.materialIndex];vt&&vt.visible&&b.push(C,Pe,vt,te,Re.z,Xe,W)}}else Be.visible&&b.push(C,Pe,Be,te,Re.z,null,W)}}}let Ie=C.children;for(let He=0,Pe=Ie.length;He<Pe;He++)Lt(Ie[He],W,te,Z)}function Vn(C,W,te,Z){let{opaque:K,transmissive:Ie,transparent:He}=C;M.setupLightsView(te),se===!0&&ee.setGlobalState(w.clippingPlanes,te),Z&&ge.viewport(J.copy(Z)),K.length>0&&jt(K,W,te),Ie.length>0&&jt(Ie,W,te),He.length>0&&jt(He,W,te),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ii(C,W,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Z.id]===void 0){let Xe=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Z.id]=new Wt(1,1,{generateMipmaps:!0,type:Xe?nn:Jn,minFilter:sr,samples:Math.max(4,Ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ie=M.state.transmissionRenderTarget[Z.id],He=Z.viewport||J;Ie.setSize(He.z*w.transmissionResolutionScale,He.w*w.transmissionResolutionScale);let Pe=w.getRenderTarget(),Be=w.getActiveCubeFace(),$e=w.getActiveMipmapLevel();w.setRenderTarget(Ie),w.getClearColor(V),Y=w.getClearAlpha(),Y<1&&w.setClearColor(16777215,.5),w.clear(),je&&F.render(te);let at=w.toneMapping;w.toneMapping=Rs;let xt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),M.setupLightsView(Z),se===!0&&ee.setGlobalState(w.clippingPlanes,Z),jt(C,te,Z),Ye.updateMultisampleRenderTarget(Ie),Ye.updateRenderTargetMipmap(Ie),et.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let vt=0,pn=W.length;vt<pn;vt++){let Ft=W[vt],{object:Nt,geometry:Gn,material:qe,group:ai}=Ft;if(qe.side===Zn&&Nt.layers.test(Z.layers)){let Et=qe.side;qe.side=Bn,qe.needsUpdate=!0,fn(Nt,te,Z,Gn,qe,ai),qe.side=Et,qe.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ye.updateMultisampleRenderTarget(Ie),Ye.updateRenderTargetMipmap(Ie))}w.setRenderTarget(Pe,Be,$e),w.setClearColor(V,Y),xt!==void 0&&(Z.viewport=xt),w.toneMapping=at}function jt(C,W,te){let Z=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ie=C.length;K<Ie;K++){let He=C[K],{object:Pe,geometry:Be,group:$e}=He,at=He.material;at.allowOverride===!0&&Z!==null&&(at=Z),Pe.layers.test(te.layers)&&fn(Pe,W,te,Be,at,$e)}}function fn(C,W,te,Z,K,Ie){P!==null&&K.isNodeMaterial&&P.setObject(C,K),C.onBeforeRender(w,W,te,Z,K,Ie),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(w,W,te,Z,C,Ie),K.transparent===!0&&K.side===Zn&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,w.renderBufferDirect(te,W,Z,K,C,Ie),K.side=Fr,K.needsUpdate=!0,w.renderBufferDirect(te,W,Z,K,C,Ie),K.side=Zn):w.renderBufferDirect(te,W,Z,K,C,Ie),C.onAfterRender(w,W,te,Z,K,Ie)}function Mn(C){let W=0;for(let te of C)te.texture!==null&&W++;return W}function Di(C,W,te){W.isScene!==!0&&(W=Ne);let Z=ke.get(C),K=M.state.lights,Ie=M.state.shadowsArray,He=K.state.version,Pe=j.getParameters(C,K.state,Ie,W,te,M.state.lightProbeGridArray),Be=j.getProgramCacheKey(Pe),$e=Z.programs;Z.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;let at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Z.envMap=L.get(C.envMap||Z.environment,at),Z.envMapRotation=Z.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Fe),$e=new Map,Z.programs=$e,Z.programVariants=new Map);let xt=$e.get(Be);if(xt!==void 0){if(Z.currentProgram===xt&&Z.lightsStateVersion===He)return en(C,Pe),xt}else Pe.uniforms=j.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,te,Pe),C.onBeforeCompile(Pe,w),xt=j.acquireProgram(Pe,Be),$e.set(Be,xt),Z.uniforms=Pe.uniforms;let Xe=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=ee.uniform),en(C,Pe),Z.needsLights=Jc(C),Z.lightsStateVersion=He,Z.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.sunLights.value=K.state.sun,Xe.sunLightShadows.value=K.state.sunShadow,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.sunShadowMatrix.value=K.state.sunShadowMatrix,Xe.sunShadowCascade.value=K.state.sunShadowCascade,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.numLightProbeGrids=Mn(M.state.lightProbeGridArray),Z.currentProgram=xt,Z.uniformsList=null,xt}function zo(C,W,te,Z,K){let Ie=ke.get(C),He=Ie.currentProgram.id+","+Z+","+K,Pe=Ie.programVariants.get(He);return Pe===void 0?(Pe=Di(C,W,te),Ie.programVariants.set(He,Pe)):(Ie.currentProgram=Pe,Ie.uniformsList=null,Ie.outputColorSpace=Z,Ie.toneMapping=K),Pe}function bn(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Aa.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function en(C,W){let te=ke.get(C);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Wi(C,W,te,Z,K){W.isScene!==!0&&(W=Ne),Ye.resetTextureUnits();let Ie=W.fog,He=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,Pe=$===null?w.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:gt.workingColorSpace,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,$e=L.get(Z.envMap||He,Be),at=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,xt=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!te.morphAttributes.position,vt=!!te.morphAttributes.normal,pn=!!te.morphAttributes.color,Ft=Rs;Z.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ft=w.toneMapping);let Nt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Gn=Nt!==void 0?Nt.length:0,qe=ke.get(Z),ai=M.state.lights;if(se===!0&&(G===!0||C!==I)){let qt=C===I&&Z.id===X;ee.setState(Z,C,qt)}let Et=!1,no=!1;Z.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==ai.state.version||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==$e||Z.fog===!0&&qe.fog!==Ie||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ee.numPlanes||qe.numIntersection!==ee.numIntersection)||qe.vertexAlphas!==at||qe.vertexTangents!==xt||qe.morphTargets!==Xe||qe.morphNormals!==vt||qe.morphColors!==pn||qe.morphTargetsCount!==Gn||qe.numLightProbeGrids!==Mn(M.state.lightProbeGridArray)?Et=!0:(qe.outputColorSpace!==Pe||qe.toneMapping!==Ft)&&(no=!0):(Et=!0,qe.__version=Z.version);let Wn=qe.currentProgram;(Et===!0||no===!0)&&(Wn=no===!0?zo(Z,W,K,Pe,Ft):Di(Z,W,K),P&&Z.isNodeMaterial&&P.onUpdateProgram(Z,Wn,qe));let Kc=!1,br=!1,io=!1,Mt=Wn.getUniforms(),Nn=qe.uniforms;if(ge.useProgram(Wn.program)&&(Kc=!0,br=!0,io=!0),Z.id!==X&&(X=Z.id,br=!0),Kc||I!==C){ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(z,"projectionMatrix",C.projectionMatrix),Mt.setValue(z,"viewMatrix",C.matrixWorldInverse);let Cn=Mt.map.cameraPosition;Cn!==void 0&&Cn.setValue(z,Qe.setFromMatrixPosition(C.matrixWorld)),Ze.logarithmicDepthBuffer&&Mt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,br=!0,io=!0)}if(qe.needsLights&&(ai.state.sunShadowMap.length>0&&Mt.setValue(z,"sunShadowMap",ai.state.sunShadowMap,Ye),ai.state.directionalShadowMap.length>0&&Mt.setValue(z,"directionalShadowMap",ai.state.directionalShadowMap,Ye),ai.state.spotShadowMap.length>0&&Mt.setValue(z,"spotShadowMap",ai.state.spotShadowMap,Ye),ai.state.pointShadowMap.length>0&&Mt.setValue(z,"pointShadowMap",ai.state.pointShadowMap,Ye)),K.isSkinnedMesh){Mt.setOptional(z,K,"bindMatrix"),Mt.setOptional(z,K,"bindMatrixInverse");let qt=K.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Mt.setValue(z,"boneTexture",qt.boneTexture,Ye))}K.isBatchedMesh&&(Mt.setOptional(z,K,"batchingTexture"),Mt.setValue(z,"batchingTexture",K._matricesTexture,Ye),Mt.setOptional(z,K,"batchingIdTexture"),Mt.setValue(z,"batchingIdTexture",K._indirectTexture,Ye),Mt.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(z,"batchingColorTexture",K._colorsTexture,Ye));let hs=te.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Q.update(K,te,Wn),(br||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Mt.setValue(z,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=CT()),br){if(Mt.setValue(z,"toneMappingExposure",w.toneMappingExposure),qe.needsLights&&sl(Nn,io),Ie&&Z.fog===!0&&re.refreshFogUniforms(Nn,Ie),re.refreshMaterialUniforms(Nn,Z,he,ce,M.state.transmissionRenderTarget[C.id]),qe.needsLights&&qe.numLightProbeGrids>0){let qt=y,Cn=0;for(let Ws of M.state.lightProbeGridArray)Ws.texture!==null&&(qt.textures[Cn]=Ws.texture,qt.min[Cn]=Ws.boundingBox.min,qt.max[Cn]=Ws.boundingBox.max,qt.resolution[Cn]=Ws.resolution,Cn++);for(let Ws in qt)qt[Ws].length=Cn;Nn.probesSH.value=qt.textures,Nn.probesMin.value=qt.min,Nn.probesMax.value=qt.max,Nn.probesResolution.value=qt.resolution}Aa.upload(z,bn(qe),Nn,Ye)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Aa.upload(z,bn(qe),Nn,Ye),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(z,"center",K.center),Mt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(z,"normalMatrix",K.normalMatrix),Mt.setValue(z,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let qt=Z.uniformsGroups;for(let Cn=0,Ws=qt.length;Cn<Ws;Cn++){let r0=qt[Cn];me.update(r0,Wn),me.bind(r0,Wn)}}return Wn}function sl(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Jc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,W,te){let Z=ke.get(C);Z.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ke.get(C.texture).__webglTexture=W,ke.get(C.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){let te=ke.get(C);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,te=0){$=C,H=W,k=te;let Z=null,K=!1,Ie=!1;if(C){let Pe=ke.get(C);if(Pe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(z.FRAMEBUFFER,Pe.__webglFramebuffer),J.copy(C.viewport),pe.copy(C.scissor),Me=C.scissorTest,ge.viewport(J),ge.scissor(pe),ge.setScissorTest(Me),X=-1;return}else if(Pe.__webglFramebuffer===void 0)Ye.setupRenderTarget(C);else if(Pe.__hasExternalTextures)Ye.rebindTextures(C,ke.get(C.texture).__webglTexture,ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let at=C.depthTexture;if(Pe.__boundDepthTexture!==at){if(at!==null&&ke.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(C)}}let Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);let $e=ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[W])?Z=$e[W][te]:Z=$e[W],K=!0):C.samples>0&&Ye.useMultisampledRTT(C)===!1?Z=ke.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?Z=$e[te]:Z=$e,J.copy(C.viewport),pe.copy(C.scissor),Me=C.scissorTest}else J.copy(Ee).multiplyScalar(he).floor(),pe.copy(Ue).multiplyScalar(he).floor(),Me=be;if(te!==0&&(Z=N),ge.bindFramebuffer(z.FRAMEBUFFER,Z)&&ge.drawBuffers(C,Z),ge.viewport(J),ge.scissor(pe),ge.setScissorTest(Me),K){let Pe=ke.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,te)}else if(Ie){let Pe=W;for(let Be=0;Be<C.textures.length;Be++){let $e=ke.get(C.textures[Be]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Be,$e.__webglTexture,te,Pe)}}else if(C!==null&&te!==0){let Pe=ke.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pe.__webglTexture,te)}X=-1};function Mr(C){let W=ke.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=Ze.textureFormatReadable(C.format),W.__typeReadable=Ze.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,te,Z,K,Ie,He,Pe=0){if(!(C&&C.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be){ge.bindFramebuffer(z.FRAMEBUFFER,Be);try{let $e=C.textures[Pe],at=$e.format,xt=$e.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);let Xe=Mr($e);if(Xe.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Z&&te>=0&&te<=C.height-K&&z.readPixels(W,te,Z,K,_e.convert(at),_e.convert(xt),Ie)}finally{let $e=$!==null?ke.get($).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,W,te,Z,K,Ie,He,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&(Be=Be[He],Array.isArray(Be)&&(Be=Be[0])),Be)if(W>=0&&W<=C.width-Z&&te>=0&&te<=C.height-K){ge.bindFramebuffer(z.FRAMEBUFFER,Be);let $e=C.textures[Pe],at=$e.format,xt=$e.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe);let Xe=Mr($e);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.bufferData(z.PIXEL_PACK_BUFFER,Ie.byteLength,z.STREAM_READ),z.readPixels(W,te,Z,K,_e.convert(at),_e.convert(xt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let pn=$!==null?ke.get($).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,pn);let Ft=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xg(z,Ft,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ie),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(vt),z.deleteSync(Ft),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,te=0){let Z=Math.pow(2,-te),K=Math.floor(C.image.width*Z),Ie=Math.floor(C.image.height*Z),He=W!==null?W.x:0,Pe=W!==null?W.y:0;Ye.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,He,Pe,K,Ie),ge.unbindTexture()},this.copyTextureToTexture=function(C,W,te=null,Z=null,K=0,Ie=0){let He,Pe,Be,$e,at,xt,Xe,vt,pn,Ft=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(te!==null)He=te.max.x-te.min.x,Pe=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,$e=te.min.x,at=te.min.y,xt=te.isBox3?te.min.z:0;else{let Mt=Math.pow(2,-K);He=Math.floor(Ft.width*Mt),Pe=Math.floor(Ft.height*Mt),C.isDataArrayTexture?Be=Ft.depth:C.isData3DTexture?Be=Math.floor(Ft.depth*Mt):Be=1,$e=0,at=0,xt=0}Z!==null?(Xe=Z.x,vt=Z.y,pn=Z.z):(Xe=0,vt=0,pn=0);let Nt=_e.convert(W.format),Gn=_e.convert(W.type),qe;W.isData3DTexture?(Ye.setTexture3D(W,0),qe=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ye.setTexture2DArray(W,0),qe=z.TEXTURE_2D_ARRAY):(Ye.setTexture2D(W,0),qe=z.TEXTURE_2D),ge.activeTexture(z.TEXTURE0),ge.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),ge.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ge.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);let ai=ge.getParameter(z.UNPACK_ROW_LENGTH),Et=ge.getParameter(z.UNPACK_IMAGE_HEIGHT),no=ge.getParameter(z.UNPACK_SKIP_PIXELS),Wn=ge.getParameter(z.UNPACK_SKIP_ROWS),Kc=ge.getParameter(z.UNPACK_SKIP_IMAGES);ge.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,$e),ge.pixelStorei(z.UNPACK_SKIP_ROWS,at),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,xt);let br=C.isDataArrayTexture||C.isData3DTexture,io=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){let Mt=ke.get(C),Nn=ke.get(W),hs=ke.get(Mt.__renderTarget),qt=ke.get(Nn.__renderTarget);ge.bindFramebuffer(z.READ_FRAMEBUFFER,hs.__webglFramebuffer),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Cn=0;Cn<Be;Cn++)br&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(C).__webglTexture,K,xt+Cn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(W).__webglTexture,Ie,pn+Cn)),z.blitFramebuffer($e,at,$e+He,at+Pe,Xe,vt,Xe+He,vt+Pe,z.DEPTH_BUFFER_BIT,z.NEAREST);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||ke.has(C)){let Mt=ke.get(C),Nn=ke.get(W);ge.bindFramebuffer(z.READ_FRAMEBUFFER,R),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let hs=0;hs<Be;hs++)br?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.__webglTexture,K,xt+hs):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,K),io?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nn.__webglTexture,Ie,pn+hs):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nn.__webglTexture,Ie),K!==0?z.blitFramebuffer($e,at,$e+He,at+Pe,Xe,vt,Xe+He,vt+Pe,z.COLOR_BUFFER_BIT,z.NEAREST):io?z.copyTexSubImage3D(qe,Ie,Xe,vt,pn+hs,$e,at,He,Pe):z.copyTexSubImage2D(qe,Ie,Xe,vt,$e,at,He,Pe);ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else io?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(qe,Ie,Xe,vt,pn,He,Pe,Be,Nt,Gn,Ft.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(qe,Ie,Xe,vt,pn,He,Pe,Be,Nt,Ft.data):z.texSubImage3D(qe,Ie,Xe,vt,pn,He,Pe,Be,Nt,Gn,Ft):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ie,Xe,vt,He,Pe,Nt,Gn,Ft.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ie,Xe,vt,Ft.width,Ft.height,Nt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Ie,Xe,vt,He,Pe,Nt,Gn,Ft);ge.pixelStorei(z.UNPACK_ROW_LENGTH,ai),ge.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),ge.pixelStorei(z.UNPACK_SKIP_PIXELS,no),ge.pixelStorei(z.UNPACK_SKIP_ROWS,Wn),ge.pixelStorei(z.UNPACK_SKIP_IMAGES,Kc),Ie===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&z.generateMipmap(qe),ge.unbindTexture()},this.initRenderTarget=function(C){ke.get(C).__webglFramebuffer===void 0&&Ye.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ye.setTextureCube(C,0):C.isData3DTexture?Ye.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ye.setTexture2DArray(C,0):Ye.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){H=0,k=0,$=null,ge.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Is={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},PT=new uo(-1,1,1,-1,0,1),wp=class extends Yt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},IT=new wp,Ds=class{constructor(e){this._mesh=new Te(IT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pa=class extends di{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ui.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oc=class extends di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Zu=class extends di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ju=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pa(Is),this.copyPass.material.blending=In,this.timer=new Bl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oc!==void 0&&(o instanceof oc?n=!0:o instanceof Zu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ku=class extends di{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var n_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ia=class s extends di{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,o,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Wt(r,o,{type:nn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Wt(r,o,{type:nn,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=n_;this.highPassUniforms=ui.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ui.clone(Is.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Is.vertexShader,fragmentShader:Is.fragmentShader,premultipliedAlpha:!0,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Tn,this._fsQuad=new Ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Pt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Ia.BlurDirectionX=new Ce(1,0);Ia.BlurDirectionY=new Ce(0,1);var ac={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Qu=class extends di{constructor(){super(),this.isOutputPass=!0,this.uniforms=ui.clone(ac.uniforms),this.material=new _a({name:ac.name,uniforms:this.uniforms,vertexShader:ac.vertexShader,fragmentShader:ac.fragmentShader}),this._fsQuad=new Ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new B(-1,-1,-1)},sceneBoxMax:{value:new B(1,1,1)}},vertexShader:`

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
		}`},cc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ju={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function i_(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=DT(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new B(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new tr(i,e,e);return r.wrapS=Mi,r.wrapT=Mi,r.needsUpdate=!0,r}function DT(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var hc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ap(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ce},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ap(s,e,t){let n=LT(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function LT(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new B(Math.cos(r),Math.sin(r),o))}return n}var ed=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=e-f,x=t-d,g,p;m>x?(g=1,p=0):(g=0,p=1);let v=m-g+h,T=x-p+h,y=m-1+2*h,b=x-1+2*h,M=l&255,_=c&255,S=this.perm[M+this.perm[_]]%12,A=this.perm[M+g+this.perm[_+p]]%12,w=this.perm[M+1+this.perm[_+1]]%12,D=.5-m*m-x*x;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[S],m,x));let P=.5-v*v-T*T;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[A],v,T));let N=.5-y*y-b*b;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[w],y,b)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,x=h-m,g=u-m,p=f-m,v=e-x,T=t-g,y=n-p,b,M,_,S,A,w;v>=T?T>=y?(b=1,M=0,_=0,S=1,A=1,w=0):v>=y?(b=1,M=0,_=0,S=1,A=0,w=1):(b=0,M=0,_=1,S=1,A=0,w=1):T<y?(b=0,M=0,_=1,S=0,A=1,w=1):v<y?(b=0,M=1,_=0,S=0,A=1,w=1):(b=0,M=1,_=0,S=1,A=1,w=0);let D=v-b+d,P=T-M+d,N=y-_+d,R=v-S+2*d,U=T-A+2*d,H=y-w+2*d,k=v-1+3*d,$=T-1+3*d,X=y-1+3*d,I=h&255,J=u&255,pe=f&255,Me=this.perm[I+this.perm[J+this.perm[pe]]]%12,V=this.perm[I+b+this.perm[J+M+this.perm[pe+_]]]%12,Y=this.perm[I+S+this.perm[J+A+this.perm[pe+w]]]%12,ue=this.perm[I+1+this.perm[J+1+this.perm[pe+1]]]%12,ce=.6-v*v-T*T-y*y;ce<0?i=0:(ce*=ce,i=ce*ce*this._dot3(this.grad3[Me],v,T,y));let he=.6-D*D-P*P-N*N;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[V],D,P,N));let ye=.6-R*R-U*U-H*H;ye<0?o=0:(ye*=ye,o=ye*ye*this._dot3(this.grad3[Y],R,U,H));let We=.6-k*k-$*$-X*X;return We<0?a=0:(We*=We,a=We*We*this._dot3(this.grad3[ue],k,$,X)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,m,x=(e+t+n+i)*l,g=Math.floor(e+x),p=Math.floor(t+x),v=Math.floor(n+x),T=Math.floor(i+x),y=(g+p+v+T)*c,b=g-y,M=p-y,_=v-y,S=T-y,A=e-b,w=t-M,D=n-_,P=i-S,N=A>w?32:0,R=A>D?16:0,U=w>D?8:0,H=A>P?4:0,k=w>P?2:0,$=D>P?1:0,X=N+R+U+H+k+$,I=o[X][0]>=3?1:0,J=o[X][1]>=3?1:0,pe=o[X][2]>=3?1:0,Me=o[X][3]>=3?1:0,V=o[X][0]>=2?1:0,Y=o[X][1]>=2?1:0,ue=o[X][2]>=2?1:0,ce=o[X][3]>=2?1:0,he=o[X][0]>=1?1:0,ye=o[X][1]>=1?1:0,We=o[X][2]>=1?1:0,Ee=o[X][3]>=1?1:0,Ue=A-I+c,be=w-J+c,De=D-pe+c,tt=P-Me+c,se=A-V+2*c,G=w-Y+2*c,Ae=D-ue+2*c,Qe=P-ce+2*c,Re=A-he+3*c,Ne=w-ye+3*c,je=D-We+3*c,Ke=P-Ee+3*c,z=A-1+4*c,Je=w-1+4*c,et=D-1+4*c,Ze=P-1+4*c,ge=g&255,ct=p&255,ke=v&255,Ye=T&255,L=a[ge+a[ct+a[ke+a[Ye]]]]%32,E=a[ge+I+a[ct+J+a[ke+pe+a[Ye+Me]]]]%32,O=a[ge+V+a[ct+Y+a[ke+ue+a[Ye+ce]]]]%32,ie=a[ge+he+a[ct+ye+a[ke+We+a[Ye+Ee]]]]%32,j=a[ge+1+a[ct+1+a[ke+1+a[Ye+1]]]]%32,re=.6-A*A-w*w-D*D-P*P;re<0?h=0:(re*=re,h=re*re*this._dot4(r[L],A,w,D,P));let de=.6-Ue*Ue-be*be-De*De-tt*tt;de<0?u=0:(de*=de,u=de*de*this._dot4(r[E],Ue,be,De,tt));let q=.6-se*se-G*G-Ae*Ae-Qe*Qe;q<0?f=0:(q*=q,f=q*q*this._dot4(r[O],se,G,Ae,Qe));let ee=.6-Re*Re-Ne*Ne-je*je-Ke*Ke;ee<0?d=0:(ee*=ee,d=ee*ee*this._dot4(r[ie],Re,Ne,je,Ke));let fe=.6-z*z-Je*Je-et*et-Ze*Ze;return fe<0?m=0:(fe*=fe,m=fe*fe*this._dot4(r[j],z,Je,et,Ze)),27*(h+u+f+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Da=class s extends di{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=i_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:nn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Pt({defines:Object.assign({},lc.defines),uniforms:ui.clone(lc.uniforms),vertexShader:lc.vertexShader,fragmentShader:lc.fragmentShader,blending:In,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Dl,this.normalMaterial.blending=In,this.pdMaterial=new Pt({defines:Object.assign({},hc.defines),uniforms:ui.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Pt({defines:Object.assign({},cc.defines),uniforms:ui.clone(cc.uniforms),vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader,blending:In}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Pt({uniforms:ui.clone(Is.uniforms),vertexShader:Is.vertexShader,fragmentShader:Is.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Hl,blendDst:po,blendEquation:Ki,blendSrcAlpha:zl,blendDstAlpha:po,blendEquationAlpha:Ki}),this.blendMaterial=new Pt({uniforms:ui.clone(ju.uniforms),vertexShader:ju.vertexShader,fragmentShader:ju.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:tu,blendSrc:Hl,blendDst:po,blendEquation:Ki,blendSrcAlpha:zl,blendDstAlpha:po,blendEquationAlpha:Ki}),this._fsQuad=new Ds(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let i=new gs;i.format=vs,i.type=rr,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:ln,magFilter:ln,type:nn,depthTexture:i})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ap(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=In,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new ed,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new tr(i,e,e,Oi,Jn);return r.wrapS=Mi,r.wrapT=Mi,r.needsUpdate=!0,r}};Da.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var s_=new B,NT=new hi,r_=new B,td=class extends gn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}};var Ls=new lt,UT=new lt,nd=class{constructor(e={}){let t=this,n,i,r,o,a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;let c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);let h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(g,p){let v=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let T,y;p.isOrthographicCamera&&(T=-(p.right+p.left)/2,y=(p.top+p.bottom)/2);let b=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,M=p.isOrthographicCamera?`scale( ${b} )scale(`+v+")translate("+u(T)+"px,"+u(y)+"px)"+f(p.matrixWorldInverse):`scale( ${b} )translateZ(`+v+"px)"+f(p.matrixWorldInverse),S=(p.isPerspectiveCamera?"perspective("+v+"px) ":"")+M+"translate("+r+"px,"+o+"px)";a.camera.style!==S&&(h.style.transform=S,a.camera.style=S),x(g,g,p,M)},this.setSize=function(g,p){n=g,i=p,r=n/2,o=i/2,l.style.width=g+"px",l.style.height=p+"px",c.style.width=g+"px",c.style.height=p+"px",h.style.width=g+"px",h.style.height=p+"px"};function u(g){return Math.abs(g)<1e-10?0:g}function f(g){let p=g.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function d(g){let p=g.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function m(g){g.isCSS3DObject&&(g.element.style.display="none");for(let p=0,v=g.children.length;p<v;p++)m(g.children[p])}function x(g,p,v,T){if(g.visible===!1){m(g);return}if(g.isCSS3DObject){let y=g.layers.test(v.layers)===!0,b=g.element;if(b.style.display=y===!0?"":"none",y===!0){g.onBeforeRender(t,p,v);let M;g.isCSS3DSprite?(Ls.copy(v.matrixWorldInverse),Ls.transpose(),g.rotation2D!==0&&Ls.multiply(UT.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(s_,NT,r_),Ls.setPosition(s_),Ls.scale(r_),Ls.elements[3]=0,Ls.elements[7]=0,Ls.elements[11]=0,Ls.elements[15]=1,M=d(Ls)):M=d(g.matrixWorld);let _=a.objects.get(g);if(_===void 0||_.style!==M){b.style.transform=M;let S={style:M};a.objects.set(g,S)}b.parentNode!==h&&h.appendChild(b),g.onAfterRender(t,p,v)}}for(let y=0,b=g.children.length;y<b;y++)x(g.children[y],p,v,T)}}};var Ge=null,lr=null,ar=null,Ns=null,zr=!1,id=null,o_=0,a_=[146.83,155.56,185,196,220,233.08,261.63,293.66,311.13,369.99];function sd(s=2){let e=Ge.createBuffer(1,Ge.sampleRate*s,Ge.sampleRate),t=e.getChannelData(0),n=0;for(let i=0;i<t.length;i++){let r=Math.random()*2-1;n=(n+.02*r)/1.02,t[i]=n*3.5}return e}function OT(){Ge=new(window.AudioContext||window.webkitAudioContext),lr=Ge.createGain(),lr.gain.value=0;let s=Ge.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,lr.connect(s).connect(Ge.destination),ar=Ge.createGain(),ar.gain.value=.9,ar.connect(lr),Ns=Ge.createGain(),Ns.gain.value=.8,Ns.connect(lr);let e=Ge.createDelay(1.5);e.delayTime.value=.42;let t=Ge.createGain();t.gain.value=.33;let n=Ge.createBiquadFilter();n.type="lowpass",n.frequency.value=2200,e.connect(n).connect(t).connect(e);let i=Ge.createGain();i.gain.value=.35,e.connect(i).connect(ar),ar.echo=e;let r=Ge.createBufferSource();r.buffer=sd(4),r.loop=!0;let o=Ge.createBiquadFilter();o.type="bandpass",o.frequency.value=420,o.Q.value=.7;let a=Ge.createGain();a.gain.value=.16;let l=Ge.createOscillator();l.frequency.value=.07;let c=Ge.createGain();c.gain.value=260,l.connect(c).connect(o.frequency);let h=Ge.createOscillator();h.frequency.value=.11;let u=Ge.createGain();u.gain.value=.07,h.connect(u).connect(a.gain),r.connect(o).connect(a).connect(ar),r.start(),l.start(),h.start();let f=Ge.createBiquadFilter();f.type="lowpass",f.frequency.value=520;let d=Ge.createGain();d.gain.value=.05,f.connect(d).connect(ar);for(let[g,p,v]of[[73.42,"sine",0],[110,"triangle",4],[146.83,"sine",-3]]){let T=Ge.createOscillator();T.type=p,T.frequency.value=g,T.detune.value=v,T.connect(f),T.start()}let m=Ge.createOscillator();m.frequency.value=.18;let x=Ge.createGain();x.gain.value=.015,m.connect(x).connect(d.gain),m.start()}function FT(s,e=0,t=.12){let n=Ge.currentTime+e,i=Ge.createGain();i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(t,n+.006),i.gain.exponentialRampToValueAtTime(8e-4,n+1.8);let r=Ge.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(s*9,n),r.frequency.exponentialRampToValueAtTime(s*1.6,n+.6);for(let[o,a,l]of[[1,1,"triangle"],[2,.35,"sine"],[3.01,.12,"sine"]]){let c=Ge.createOscillator();c.type=l,c.frequency.value=s*o;let h=Ge.createGain();h.gain.value=a,c.connect(h).connect(r),c.start(n),c.stop(n+2)}r.connect(i),i.connect(ar),i.connect(ar.echo)}function c_(){if(!zr)return;let s=2+(Math.random()*5|0),e=2+(Math.random()*4|0),t=0;for(let n=0;n<e;n++)FT(a_[s],t,.09+Math.random()*.05),t+=[.28,.42,.56][Math.random()*3|0],s=Math.max(0,Math.min(a_.length-1,s+[-2,-1,-1,1,1,2][Math.random()*6|0]));id=setTimeout(c_,(t+2.2+Math.random()*4)*1e3)}function xo(s,e,t,n,i){s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(i,e+t),s.gain.exponentialRampToValueAtTime(5e-4,e+t+n)}var l_={tick(){let s=Ge.currentTime;if(s-o_<.045)return;o_=s;let e=Ge.createOscillator(),t=Ge.createGain();e.type="sine",e.frequency.value=1700+Math.random()*500,xo(t,s,.002,.03,.025),e.connect(t).connect(Ns),e.start(s),e.stop(s+.05)},arrive(){[0,.11].forEach((s,e)=>{let t=Ge.currentTime+s,n=Ge.createOscillator(),i=Ge.createGain();n.type="sine",n.frequency.value=e?880:659.25,xo(i,t,.01,.6,.07),n.connect(i).connect(Ns),n.start(t),n.stop(t+.7)})},poke(){let s=Ge.currentTime,e=Ge.createOscillator(),t=Ge.createGain();e.type="sine",e.frequency.setValueAtTime(260,s),e.frequency.exponentialRampToValueAtTime(620,s+.12),e.frequency.exponentialRampToValueAtTime(330,s+.3),xo(t,s,.01,.32,.12),e.connect(t).connect(Ns),e.start(s),e.stop(s+.4)},pop(){let s=Ge.currentTime,e=Ge.createBufferSource();e.buffer=sd(.3);let t=Ge.createBiquadFilter();t.type="highpass",t.frequency.value=900;let n=Ge.createGain();xo(n,s,.001,.12,.5),e.connect(t).connect(n).connect(Ns),e.start(s),e.stop(s+.2)},beam(){let s=Ge.currentTime,e=Ge.createBufferSource();e.buffer=sd(3);let t=Ge.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(3200,s+1.2);let n=Ge.createGain();xo(n,s,.25,1.8,.35),e.connect(t).connect(n).connect(Ns),e.start(s),e.stop(s+2.4),[587.33,739.99,880,1174.66].forEach((i,r)=>{let o=Ge.createOscillator(),a=Ge.createGain();o.type="sine",o.frequency.value=i,xo(a,s+.3+r*.12,.02,1.6,.05),o.connect(a).connect(Ns),o.connect(a),o.start(s),o.stop(s+3)})},whoosh(){let s=Ge.currentTime,e=Ge.createBufferSource();e.buffer=sd(1);let t=Ge.createBiquadFilter();t.type="bandpass",t.Q.value=1.2,t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(1400,s+.5);let n=Ge.createGain();xo(n,s,.15,.5,.18),e.connect(t).connect(n).connect(Ns),e.start(s),e.stop(s+.8)}},$t={get on(){return zr},toggle(){return Ge||OT(),zr=!zr,zr?(Ge.resume(),lr.gain.cancelScheduledValues(Ge.currentTime),lr.gain.linearRampToValueAtTime(.55,Ge.currentTime+1.2),clearTimeout(id),id=setTimeout(c_,900)):(lr.gain.cancelScheduledValues(Ge.currentTime),lr.gain.linearRampToValueAtTime(0,Ge.currentTime+.4),clearTimeout(id)),zr},play(s){if(!(!zr||!Ge||Ge.state!=="running"))try{l_[s]&&l_[s]()}catch{}},pause(s){Ge&&(s?Ge.suspend():zr&&Ge.resume())}};function cr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function x_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gc={duration:.5,overwrite:!1,delay:0},Gp,kn,Xt,es=1e8,It=1/es,Up=Math.PI*2,BT=Up/4,kT=0,v_=Math.sqrt,zT=Math.cos,HT=Math.sin,An=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},gd=function(e){return typeof e>"u"},Fs=function(e){return typeof e=="object"},Ei=function(e){return e!==!1},Wp=function(){return typeof window<"u"},rd=function(e){return sn(e)||An(e)},y_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ei=Array.isArray,VT=/random\([^)]+\)/g,GT=/,\s*/g,h_=/(?:-?\.?\d|\.)+/gi,Xp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qp=/[+-]=-?[.\d]+/,WT=/[^,'"\[\]\s]+/gi,XT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,Us,Op,Yp,Bi={},cd={},S_,M_=function(e){return(cd=Na(e,Bi))&&ti},_d=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_c=function(e,t){return!t&&console.warn(e)},b_=function(e,t){return e&&(Bi[e]=t)&&cd&&(cd[e]=t)||Bi},xc=function(){return 0},qT={suppressEvents:!0,isStart:!0,kill:!1},od={suppressEvents:!0,kill:!1},YT={suppressEvents:!0},$p={},Vr=[],Fp={},T_,bi={},Cp={},u_=30,ad=[],Zp="",Jp=function(e){var t=e[0],n,i;if(Fs(t)||sn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ad.length;i--&&!ad[i].targetTest(t););n=ad[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new em(e[i],n)))||e.splice(i,1);return e},Gr=function(e){return e._gsap||Jp(ts(e))[0]._gsap},Kp=function(e,t,n){return(n=e[t])&&sn(n)?e[t]():gd(n)&&e.getAttribute&&e.getAttribute(t)||n},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},rn=function(e){return Math.round(e*1e5)/1e5||0},Zt=function(e){return Math.round(e*1e7)/1e7||0},bo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$T=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hd=function(){var e=Vr.length,t=Vr.slice(0),n,i;for(Fp={},Vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qp=function(e){return!!(e._initted||e._startAt||e.add)},E_=function(e,t,n,i){Vr.length&&!kn&&hd(),e.render(t,n,i||!!(kn&&t<0&&Qp(e))),Vr.length&&!kn&&hd()},w_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(WT).length<2?t:An(e)?e.trim():e},A_=function(e){return e},ki=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ZT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Na=function(e,t){for(var n in t)e[n]=t[n];return e},d_=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fs(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ud=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fc=function(e){var t=e.parent||Jt,n=e.keyframes?ZT(ei(e.keyframes)):ki;if(Ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},JT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},R_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},xd=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},KT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bp=function(e,t,n,i){return e._startAt&&(kn?e._startAt.revert(od):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},QT=function s(e){return!e||e._ts&&s(e.parent)},f_=function(e){return e._repeat?Ua(e._tTime,e=e.duration()+e._rDelay)*e:0},Ua=function(e,t){var n=Math.floor(e=Zt(e/t));return e&&n===e?n-1:n},dd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vd=function(e){return e._end=Zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},yd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vd(e),n._dirty||vo(n,e)),e},C_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dd(e.rawTime(),t),(!t._dur||Mc(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Os=function(e,t,n,i){return t.parent&&Wr(t),t._start=Zt((ur(n)?n:!n&&fd(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Jt?ji(e,n,t):e._time)+t._delay),t._end=Zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),R_(e,t,"_first","_last",e._sort?"_start":0),fd(t)||(e._recent=t),i||C_(e,t),e._ts<0&&yd(e,e._tTime),e},P_=function(e,t){return(Bi.ScrollTrigger||_d("scrollTrigger",t))&&Bi.ScrollTrigger.create(t,e)},I_=function(e,t,n,i,r){if(im(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!kn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&T_!==Ti.frame)return Vr.push(e),e._lazy=[r,i],1},jT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},fd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&jT(e)&&!(!e._initted&&fd(e))||(e._ts<0||e._dp._ts<0)&&!fd(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Mc(0,e._tDur,t),h=Ua(l,a),e._yoyo&&h&1&&(o=1-o),h!==Ua(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||kn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&I_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Bp(e,t,n,!0),e._onUpdate&&!n&&Fi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Wr(e,1),!n&&!kn&&(Fi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Oa=function(e,t,n,i){var r=e._repeat,o=Zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Zt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&yd(e,e._tTime=e._tDur*a),e.parent&&vd(e),n||vo(e.parent,e),e},p_=function(e){return e instanceof jn?vo(e):Oa(e,e._dur)},nE={_start:0,endTime:xc,totalDuration:xc},ji=function s(e,t,n){var i=e.labels,r=e._recent||nE,o=e.duration()>=es?r.endTime(!1):e._dur,a,l,c;return An(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ei(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},pc=function(e,t,n){var i=ur(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ei(l.vars.inherit)&&l.parent;o.immediateRender=Ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new cn(t[0],o,t[r+1])},Xr=function(e,t){return e||e===0?t(e):t},Mc=function(e,t,n){return n<e?e:n>t?t:n},zn=function(e,t){return!An(e)||!(t=XT.exec(e))?"":t[1]},iE=function(e,t,n){return Xr(n,function(i){return Mc(e,t,i)})},kp=[].slice,D_=function(e,t){return e&&Fs(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fs(e[0]))&&!e.nodeType&&e!==Us},sE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return An(i)&&!t||D_(i,1)?(r=n).push.apply(r,ts(i)):n.push(i)})||n},ts=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):An(e)&&!n&&(Op||!Fa())?kp.call((t||Yp).querySelectorAll(e),0):ei(e)?sE(e,n):D_(e)?kp.call(e,0):e?[e]:[]},zp=function(e){return e=ts(e)[0]||_c("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ts(t,n.querySelectorAll?n:n===e?_c("Invalid scope")||Yp.createElement("div"):e)}},L_=function(e){return e.sort(function(){return .5-Math.random()})},N_=function(e){if(sn(e))return e;var t=Fs(e)?e:{each:e},n=yo(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return An(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,m){var x=(m||t).length,g=o[x],p,v,T,y,b,M,_,S,A;if(!g){if(A=t.grid==="auto"?0:(t.grid||[1,es])[1],!A){for(_=-es;_<(_=m[A++].getBoundingClientRect().left)&&A<x;);A<x&&A--}for(g=o[x]=[],p=l?Math.min(A,x)*h-.5:i%A,v=A===es?0:l?x*u/A-.5:i/A|0,_=0,S=es,M=0;M<x;M++)T=M%A-p,y=v-(M/A|0),g[M]=b=c?Math.abs(c==="y"?y:T):v_(T*T+y*y),b>_&&(_=b),b<S&&(S=b);i==="random"&&L_(g),g.max=_-S,g.min=S,g.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(A>x?x-1:c?c==="y"?x/A:A:Math.max(A,x/A))||0)*(i==="edges"?-1:1),g.b=x<0?r-x:r,g.u=zn(t.amount||t.each)||0,n=n&&x<0?_E(n):n}return x=(g[f]-g.min)/g.max||0,Zt(g.b+(n?n(x):x)*g.v)+g.u}},Hp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ur(n)?0:zn(n))}},U_=function(e,t){var n=ei(e),i,r;return!n&&Fs(e)&&(i=n=e.radius||es,e.values?(e=ts(e.values),(r=!ur(e[0]))&&(i*=i)):e=Hp(e.increment)),Xr(t,n?sn(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=es,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,r||h===o||ur(o)?h:h+zn(o)}:Hp(e))},O_=function(e,t,n,i){return Xr(ei(e)?!t:n===!0?!!(n=0):!i,function(){return ei(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},rE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},oE=function(e,t){return function(n){return e(parseFloat(n))+(t||zn(n))}},aE=function(e,t,n){return B_(e,t,0,1,n)},F_=function(e,t,n){return Xr(n,function(i){return e[~~t(i)]})},lE=function s(e,t,n){var i=t-e;return ei(e)?F_(e,s(0,e.length),t):Xr(n,function(r){return(i+(r-e)%i)%i+e})},cE=function s(e,t,n){var i=t-e,r=i*2;return ei(e)?F_(e,s(0,e.length-1),t):Xr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ba=function(e){return e.replace(VT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(GT);return O_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},B_=function(e,t,n,i,r){var o=t-e,a=i-n;return Xr(r,function(l){return n+((l-e)/o*a||0)})},hE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=An(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ei(e)&&!ei(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(m){m*=u;var x=Math.min(f,~~m);return h[x](m-x)},n=t}else i||(e=Na(ei(e)?[]:{},e));if(!h){for(l in t)tm.call(a,e,l,"get",t[l]);r=function(m){return om(m,a)||(o?e.p:e)}}}return Xr(n,r)},m_=function(e,t,n){var i=e.labels,r=es,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Fi=function(e,t,n){var i=e.vars,r=i[t],o=Xt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vr.length&&hd(),a&&(Xt=a),h=l?r.apply(c,l):r.call(c),Xt=o,h},uc=function(e){return Wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kn),e.progress()<1&&Fi(e,"onInterrupt"),e},La,k_=[],z_=function(e){if(e)if(e=!e.name&&e.default||e,Wp()||e.headless){var t=e.name,n=sn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:xc,render:om,add:tm,kill:AE,modifier:wE,rawVars:0},o={targetTest:0,get:0,getSetter:Sd,aliases:{},register:0};if(Fa(),e!==i){if(bi[t])return;ki(i,ki(ud(e,r),o)),Na(i.prototype,Na(r,ud(e,o))),bi[i.prop=t]=i,e.targetTest&&(ad.push(i),$p[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}b_(t,i),e.register&&e.register(ti,i,pi)}else k_.push(e)},Ut=255,dc={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Pp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},H_=function(e,t,n){var i=e?ur(e)?[e>>16,e>>8&Ut,e&Ut]:0:dc.black,r,o,a,l,c,h,u,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),dc[e])i=dc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(h_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Pp(l+1/3,r,o),i[1]=Pp(l,r,o),i[2]=Pp(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Xp),n&&i.length<4&&(i[3]=1),i}else i=e.match(h_)||dc.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/Ut,o=i[1]/Ut,a=i[2]/Ut,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},V_=function(e){var t=[],n=[],i=-1;return e.split(hr).forEach(function(r){var o=r.match(Mo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},g_=function(e,t,n){var i="",r=(e+i).match(hr),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=H_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=V_(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(hr,"1").split(Mo),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(hr),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},hr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in dc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),uE=/hsl[a]?\(/,jp=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=uE.test(t),e[1]=g_(e[1],n),e[0]=g_(e[0],n,V_(e[1])),!0},vc,Ti=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,m=function x(g){var p=s()-i,v=g===!0,T,y,b,M;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,T=b-o,(T>0||v)&&(M=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=T+(T>=r?0:r-T),y=1),v||(l=c(x)),y)for(d=0;d<a.length;d++)a[d](b,f,M,g)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){S_&&(!Op&&Wp()&&(Us=Op=window,Yp=Us.document||{},Bi.gsap=ti,(Us.gsapVersions||(Us.gsapVersions=[])).push(ti.version),M_(cd||Us.GreenSockGlobals||!Us.gsap&&Us||{}),k_.forEach(z_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},vc=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),vc=0,c=xc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){r=1e3/(g||240),o=u.time*1e3+r},add:function(g,p,v){var T=p?function(y,b,M,_){g(y,b,M,_),u.remove(T)}:g;return u.remove(g),a[v?"unshift":"push"](T),Fa(),T},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u})(),Fa=function(){return!vc&&Ti.wake()},St={},dE=/^[\d.\-M][\d.\-,\s]/,fE=/["']/g,pE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(fE,"").trim():+c,i=l.substr(a+1).trim();return t},mE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gE=function(e){var t=(e+"").split("("),n=St[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[pE(t[1])]:mE(e).split(",").map(w_)):St._CE&&dE.test(e)?St._CE("",e):n},_E=function(e){return function(t){return 1-e(1-t)}},yo=function(e,t){return e&&(sn(e)?e:St[e]||gE(e))||t},To=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return fi(e,function(a){St[a]=Bi[a]=r,St[o=a.toLowerCase()]=n;for(var l in r)St[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=r[l]}),r},G_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ip=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Up*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*HT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:G_(a);return r=Up/r,l.config=function(c,h){return s(e,c,h)},l},Dp=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:G_(n);return i.config=function(r){return s(e,r)},i};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;To(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;To("Elastic",Ip("in"),Ip("out"),Ip());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};To("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);To("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});To("Circ",function(s){return-(v_(1-s*s)-1)});To("Sine",function(s){return s===1?1:-zT(s*BT)+1});To("Back",Dp("in"),Dp("out"),Dp());St.SteppedEase=St.steps=Bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-It;return function(a){return((i*Mc(0,o,a)|0)+r)*n}}};gc.ease=St["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Zp+=s+","+s+"Params,"});var em=function(e,t){this.id=kT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kp,this.set=t?t.getSetter:Sd},yc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Oa(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),vc||Ti.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Oa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(yd(this,n),!r._dp||r.parent||C_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Os(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),E_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+f_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+f_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ua(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?dd(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(Mc(-Math.abs(this._delay),a,r),i!==!1),vd(this),KT(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Fa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==It,o;if(r)for(this._tTime-=It,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+It){r=!1;break}o=o._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Os(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dd(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=YT);var i=kn;return kn=n,Qp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),kn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,p_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,p_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ji(this,n),Ei(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ei(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-It)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=sn(n)?n:A_,l=function(){var h=i.then;i.then=null,r&&r(),sn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){uc(this)},s})();ki(yc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var jn=(function(s){x_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ei(n.sortChildren),Jt&&Os(n.parent||Jt,cr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&P_(cr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return pc(0,arguments,this),this},t.from=function(i,r,o){return pc(1,arguments,this),this},t.fromTo=function(i,r,o,a){return pc(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,fc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new cn(i,r,ji(this,o),1),this},t.call=function(i,r,o){return Os(this,cn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new cn(i,o,ji(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,fc(o).immediateRender=Ei(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,fc(a).immediateRender=Ei(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Zt(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,x,g,p,v,T,y,b,M,_;if(this!==Jt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,T=this._ts,p=!T,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(f=Zt(h%g),h===l?(x=this._repeat,f=c):(b=Zt(h/g),x=~~b,x&&x===b&&(f=c,x--),f>c&&(f=c)),b=Ua(this._tTime,g),!a&&this._tTime&&b!==x&&this._tTime-b*g-this._dur<=0&&(b=x),M&&x&1&&(f=c-f,_=1),x!==b&&!this._lock){var S=M&&b&1,A=S===(M&&x&1);if(x<b&&(S=!S),a=S?0:h%c?c:h,this._lock=1,this.render(a||(_?0:Zt(x*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Fi(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,b=x),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=tE(this,Zt(a),Zt(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!b&&(Fi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){v=0,m&&(h+=this._zTime=-It);break}}d=m}else{d=this._last;for(var w=i<0?i:f;d;){if(m=d._prev,(d._act||w<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,r,o||kn&&Qp(d)),f!==this._time||!this._ts&&!p){v=0,m&&(h+=this._zTime=w?-It:It);break}}d=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-It)._zTime=f>=a?1:-1,this._ts))return this._start=y,vd(this),this.render(i,r,o);this._onUpdate&&!r&&Fi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Fi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ur(r)||(r=ji(this,r,i)),!(i instanceof yc)){if(ei(i))return i.forEach(function(a){return o.add(a,r)}),this;if(An(i))return this.addLabel(i,r);if(sn(i))i=cn.delayedCall(0,i);else return this}return this!==i?Os(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-es);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof cn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return An(i)?this.removeLabel(i):sn(i)?this.killTweensOf(i):(i.parent===this&&xd(this,i),i===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zt(Ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ji(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=cn.delayedCall(0,r||xc,o);return a.data="isPause",this._hasPause=1,Os(this,a,ji(this,i))},t.removePause=function(i){var r=this._first;for(i=ji(this,i);r;)r._start===i&&r.data==="isPause"&&Wr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=ts(i),l=this._first,c=ur(r),h;l;)l instanceof cn?$T(l._targets,a)&&(c?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ji(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,m=cn.to(o,ki({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!d){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Oa(m,g,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,u||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ki({startAt:{time:ji(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),m_(this,ji(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),m_(this,ji(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return vo(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vo(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=es,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Os(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Zt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Oa(o,o===Jt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Jt._ts&&(E_(Jt,dd(i,Jt)),T_=Ti.frame),Ti.frame>=u_){u_+=wi.autoSleep||120;var r=Jt._first;if((!r||!r._ts)&&wi.autoSleep&&Ti._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ti.sleep()}}},e})(yc);ki(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var xE=function(e,t,n,i,r,o,a){var l=new pi(this._pt,e,t,0,1,rm,null,r),c=0,h=0,u,f,d,m,x,g,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ba(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(Rp)||[];u=Rp.exec(i);)m=u[0],x=i.substring(c,u.index),d?d=(d+1)%5:x.substr(-5)==="rgba("&&(d=1),m!==f[h++]&&(g=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:g,c:m.charAt(1)==="="?bo(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=Rp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(qp.test(i)||p)&&(l.e=0),this._pt=l,l},tm=function(e,t,n,i,r,o,a,l,c,h){sn(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:sn(u)?c?e[t.indexOf("set")||!sn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=sn(u)?c?bE:X_:sm,m;if(An(i)&&(~i.indexOf("random(")&&(i=Ba(i)),i.charAt(1)==="="&&(m=bo(f,i)+(zn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Vp)return!isNaN(f*i)&&i!==""?(m=new pi(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?EE:q_,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!u&&!(t in e)&&_d(t,i),xE.call(this,e,t,f,i,d,l||wi.stringFilter,c))},vE=function(e,t,n,i,r){if(sn(e)&&(e=mc(e,r,t,n,i)),!Fs(e)||e.style&&e.nodeType||ei(e)||y_(e))return An(e)?mc(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=mc(e[a],r,t,n,i);return o},nm=function(e,t,n,i,r,o){var a,l,c,h;if(bi[e]&&(a=new bi[e]).init(r,a.rawVars?t[e]:vE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new pi(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==La))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hr,Vp,im=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,x=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,T=e._overwrite==="auto"&&!Gp,y=e.timeline,b=i.easeReverse||u,M,_,S,A,w,D,P,N,R,U,H,k,$;if(y&&(!f||!r)&&(r="none"),e._ease=yo(r,gc.ease),e._rEase=b&&(yo(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(N=g[0]?Gr(g[0]).harness:0,k=N&&i[N.prop],M=ud(i,$p),x&&(x._zTime<0&&x.progress(1),t<0&&h&&a&&!d?x.render(-1,!0):x.revert(h&&m?od:qT),x._lazy=0),o){if(Wr(e._startAt=cn.set(g,ki({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!x&&Ei(l),startAt:null,delay:0,onUpdate:c&&function(){return Fi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn||!a&&!d)&&e._startAt.revert(od),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!x){if(t&&(a=!1),S=ki({overwrite:!1,data:"isFromStart",lazy:a&&!x&&Ei(l),immediateRender:a,stagger:0,parent:p},M),k&&(S[N.prop]=k),Wr(e._startAt=cn.set(g,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn?e._startAt.revert(od):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ei(l)||l&&!m,_=0;_<g.length;_++){if(w=g[_],P=w._gsap||Jp(g)[_]._gsap,e._ptLookup[_]=U={},Fp[P.id]&&Vr.length&&hd(),H=v===g?_:v.indexOf(w),N&&(R=new N).init(w,k||M,e,H,v)!==!1&&(e._pt=A=new pi(e._pt,w,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(X){U[X]=A}),R.priority&&(D=1)),!N||k)for(S in M)bi[S]&&(R=nm(S,M,e,H,w,v))?R.priority&&(D=1):U[S]=A=tm.call(e,w,S,"get",M[S],H,v,0,i.stringFilter);e._op&&e._op[_]&&e.kill(w,e._op[_]),T&&e._pt&&(Hr=e,Jt.killTweensOf(w,U,e.globalTime(t)),$=!e.parent,Hr=0),e._pt&&l&&(Fp[P.id]=1)}D&&am(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,f&&t<=0&&y.render(es,!0,!0)},yE=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Vp=1,e.vars[t]="+=0",im(e,a),Vp=0,l?_c(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=rn(n)+zn(u.e)),u.b&&(u.b=h.s+zn(u.b))},SE=function(e,t){var n=e[0]?Gr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Na({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},ME=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(ei(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},mc=function(e,t,n,i,r){return sn(e)?e.call(t,n,i,r):An(e)&&~e.indexOf("random(")?Ba(e):e},pd=Zp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",W_={};fi(pd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return W_[s]=1});pd=pd.split(",");var cn=(function(s){x_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:fc(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,x=l.defaults,g=l.scrollTrigger,p=i.parent||Jt,v=(ei(n)||y_(n)?ur(n[0]):"length"in i)?[n]:ts(n),T,y,b,M,_,S,A,w;if(a._targets=v.length?Jp(v):_c("GSAP target "+n+" not found. https://gsap.com",!wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||rd(c)||rd(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(T=a.timeline=new jn({data:"nested",defaults:x||{},targets:p&&p.data==="nested"?p.vars.targets:v}),T.kill(),T.parent=T._dp=cr(a),T._start=0,f||rd(c)||rd(h)){if(M=v.length,A=f&&N_(f),Fs(f))for(_ in f)~pd.indexOf(_)&&(w||(w={}),w[_]=f[_]);for(y=0;y<M;y++)b=ud(i,W_),b.stagger=0,D&&(b.easeReverse=D),w&&Na(b,w),S=v[y],b.duration=+mc(c,cr(a),y,S,v),b.delay=(+mc(h,cr(a),y,S,v)||0)-a._delay,!f&&M===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),T.to(S,b,A?A(y,S,v):0),T._ease=St.none;T.duration()?c=h=0:a.timeline=0}else if(m){fc(ki(T.vars.defaults,{ease:"none"})),T._ease=yo(m.ease||i.ease||"none");var P=0,N,R,U;if(ei(m))m.forEach(function(H){return T.to(v,H,">")}),T.duration();else{b={};for(_ in m)_==="ease"||_==="easeEach"||ME(_,m[_],b,m.easeEach);for(_ in b)for(N=b[_].sort(function(H,k){return H.t-k.t}),P=0,y=0;y<N.length;y++)R=N[y],U={ease:R.e,duration:(R.t-(y?N[y-1].t:0))/100*c},U[_]=R.v,T.to(v,U,P),P+=U.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return d===!0&&!Gp&&(Hr=cr(a),Jt.killTweensOf(v),Hr=0),Os(p,cr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!m&&a._start===Zt(p._time)&&Ei(u)&&QT(cr(a))&&p.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-h)||0)),g&&P_(cr(a),g),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-It&&!h?l:i<It?0:i,f,d,m,x,g,p,v,T;if(!c)eE(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,r,o);if(f=Zt(u%x),u===l?(m=this._repeat,f=c):(g=Zt(u/x),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(f=c-f),g=Ua(this._tTime,x),f===a&&!o&&this._initted&&m===g)return this._tTime=u,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==x&&this._initted&&(this._lock=o=1,this.render(Zt(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(I_(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!r&&!g&&(Fi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Bp(this,i,r,o),Fi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!r&&this.parent&&Fi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Bp(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Wr(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Fi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){vc||Ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||im(this,c),h=this._ease(c/this._dur),yE(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(yd(this,0),this.parent||R_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?uc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!kn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hr&&Hr.vars.overwrite!==!0)._first||uc(this),this.parent&&o!==this.timeline.totalDuration()&&Oa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ts(i):a,c=this._ptLookup,h=this._pt,u,f,d,m,x,g,p;if((!r||r==="all")&&JT(a,l))return r==="all"&&(this._pt=0),uc(this);for(u=this._op=this._op||[],r!=="all"&&(An(r)&&(x={},fi(r,function(v){return x[v]=1}),r=x),r=SE(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(u[p]=r,m=f,d={}):(d=u[p]=u[p]||{},m=r);for(x in m)g=f&&f[x],g&&((!("kill"in g.d)||g.d.kill(x)===!0)&&xd(this,g,"_pt"),delete f[x]),d!=="all"&&(d[x]=1)}return this._initted&&!this._pt&&h&&uc(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return pc(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return pc(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Jt.killTweensOf(i,r,o)},e})(yc);ki(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(s){cn[s]=function(){var e=new jn,t=kp.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var sm=function(e,t,n){return e[t]=n},X_=function(e,t,n){return e[t](n)},bE=function(e,t,n,i){return e[t](i.fp,n)},TE=function(e,t,n){return e.setAttribute(t,n)},Sd=function(e,t){return sn(e[t])?X_:gd(e[t])&&e.setAttribute?TE:sm},q_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},EE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},om=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},wE=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},AE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xd(this,t,"_pt"):t.dep||(n=1),t=i;return!n},RE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},am=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},pi=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||q_,this.d=l||this,this.set=c||sm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=RE,this.m=n,this.mt=r,this.tween=i},s})();fi(Zp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return $p[s]=1});Bi.TweenMax=Bi.TweenLite=cn;Bi.TimelineLite=Bi.TimelineMax=jn;Jt=new jn({sortChildren:!1,defaults:gc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=jp;var So=[],ld={},CE=[],__=0,PE=0,Lp=function(e){return(ld[e]||CE).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-__>2&&(Lp("matchMediaInit"),So.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Us.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Lp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),__=e,Lp("matchMedia"))},Y_=(function(){function s(t,n){this.selector=n&&zp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=PE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){sn(n)&&(r=i,i=n,n=sn);var o=this,a=function(){var c=Xt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=zp(r)),Xt=o,u=i.apply(o,arguments),sn(u)&&o._r.push(u),Xt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===sn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Xt;Xt=null,n(this),Xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof cn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof cn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=So.length;o--;)So[o].id===this.id&&So.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Sc):a.removeEventListener("change",Sc)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),IE=(function(){function s(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Fs(n)||(n={matches:n});var o=new Y_(0,r||this.scope),a=o.conditions={},l,c,h;Xt&&!o.selector&&(o.selector=Xt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Us.matchMedia(n[c]),l&&(So.indexOf(o)<0&&So.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),md={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return z_(i)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return Jt.getTweensOf(e,t)},getProperty:function(e,t,n,i){An(e)&&(e=ts(e)[0]);var r=Gr(e||{}).get,o=n?A_:w_;return n==="native"&&(n=""),e&&(t?o((bi[t]&&bi[t].get||r)(e,t,n,i)):function(a,l,c){return o((bi[a]&&bi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ts(e),e.length>1){var i=e.map(function(h){return ti.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=bi[t],a=Gr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;La._pt=0,u.init(e,n?h+n:h,La,0,[e]),u.render(1,u),La._pt&&om(1,La)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=ti.to(e,ki((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,gc.ease)),d_(gc,e||{})},config:function(e){return d_(wi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!bi[a]&&!Bi[a]&&_c(t+" effect requires "+a+" plugin.")}),Cp[t]=function(a,l,c){return n(ts(a),ki(l||{},r),c)},o&&(jn.prototype[t]=function(a,l,c){return this.add(Cp[t](a,Fs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){St[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):St},getById:function(e){return Jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jn(e),i,r;for(n.smoothChildTiming=Ei(e.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof cn&&i.vars.onComplete===i._targets[0]))&&Os(n,i,i._start-i._delay),i=r;return Os(Jt,n,0),n},context:function(e,t){return e?new Y_(e,t):Xt},matchMedia:function(e){return new IE(e)},matchMediaRefresh:function(){return So.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=ld[e]||(ld[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ld[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:lE,wrapYoyo:cE,distribute:N_,random:O_,snap:U_,normalize:aE,getUnit:zn,clamp:iE,splitColor:H_,toArray:ts,selector:zp,mapRange:B_,pipe:rE,unitize:oE,interpolate:hE,shuffle:L_},install:M_,effects:Cp,ticker:Ti,updateRoot:jn.updateRoot,plugins:bi,globalTimeline:Jt,core:{PropTween:pi,globals:b_,Tween:cn,Timeline:jn,Animation:yc,getCache:Gr,_removeLinkedListItem:xd,reverting:function(){return kn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return Gp=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return md[s]=cn[s]});Ti.add(jn.updateRoot);La=md.to({},{duration:0});var DE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},LE=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=DE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Np=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(An(r)&&(l={},fi(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}LE(a,r)}}}},ti=md.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)kn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Np("roundProps",Hp),Np("modifiers"),Np("snap",U_))||md;cn.version=jn.version=ti.version="3.15.1";S_=1;Wp()&&Fa();var NE=St.Power0,UE=St.Power1,OE=St.Power2,FE=St.Power3,BE=St.Power4,kE=St.Linear,zE=St.Quad,HE=St.Cubic,VE=St.Quart,GE=St.Quint,WE=St.Strong,XE=St.Elastic,qE=St.Back,YE=St.SteppedEase,$E=St.Bounce,ZE=St.Sine,JE=St.Expo,KE=St.Circ;var $_,qr,za,fm,Ro,QE,Z_,pm,jE=function(){return typeof window<"u"},fr={},Ao=180/Math.PI,Ha=Math.PI/180,ka=Math.atan2,J_=1e8,mm=/([A-Z])/g,ew=/(left|right|width|margin|padding|x)/i,tw=/[\s,\(]\S/,Bs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ow=function(e,t,n){return e.style[t]=n},aw=function(e,t,n){return e.style.setProperty(t,n)},lw=function(e,t,n){return e._gsap[t]=n},cw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hw=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},uw=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Kt="transform",Ai=Kt+"Origin",dw=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in fr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=dr(i,a)}):this.tfm[e]=o.x?o[e]:dr(i,e),e===Ai&&(this.tfm.zOrigin=o.zOrigin);else return Bs.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ai,t,"")),e=Kt}(r||t)&&this.props.push(e,t,r[e])},ox=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(mm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=pm(),(!r||!r.isStart)&&!n[Kt]&&(ox(n),i.zOrigin&&n[Ai]&&(n[Ai]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ax=function(e,t){var n={target:e,props:[],revert:fw,save:dw};return e._gsap||ti.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},lx,hm=function(e,t){var n=qr.createElementNS?qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qr.createElement(e);return n&&n.style?n:qr.createElement(e)},zi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Va(t)||t,1)||""},K_="O,Moz,ms,Ms,Webkit".split(","),Va=function(e,t,n){var i=t||Ro,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(K_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?K_[o]:"")+e},um=function(){jE()&&window.document&&($_=window,qr=$_.document,za=qr.documentElement,Ro=hm("div")||{style:{}},QE=hm("div"),Kt=Va(Kt),Ai=Kt+"Origin",Ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lx=!!Va("perspective"),pm=ti.core.reverting,fm=1)},Q_=function(e){var t=e.ownerSVGElement,n=hm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),za.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),za.removeChild(n),r},j_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cx=function(e){var t,n;try{t=e.getBBox()}catch{t=Q_(e),n=1}return t&&(t.width||t.height)||n||(t=Q_(e)),t&&!t.width&&!t.x&&!t.y?{x:+j_(e,["x","cx","x1"])||0,y:+j_(e,["y","cy","y1"])||0,width:0,height:0}:t},hx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cx(e))},$r=function(e,t){if(t){var n=e.style,i;t in fr&&t!==Ai&&(t=Kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(mm,"-$1").toLowerCase())):n.removeAttribute(t)}},Yr=function(e,t,n,i,r,o){var a=new pi(e._pt,t,n,0,1,o?rx:sx);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},ex={deg:1,rad:1,turn:1},pw={grid:1,flex:1},Zr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ro.style,l=ew.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",m,x,g,p;if(i===o||!r||ex[i]||ex[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&hx(e),(d||o==="%")&&(fr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[h],rn(d?r/m*u:r/100*m);if(a[l?"width":"height"]=u+(f?o:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===qr||!x.appendChild)&&(x=qr.body),g=x._gsap,g&&d&&g.width&&l&&g.time===Ti.time&&!g.uncache)return rn(r/g.width*u);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,m=e[h],v?e.style[t]=v:$r(e,t)}else(d||o==="%")&&!pw[zi(x,"display")]&&(a.position=zi(e,"position")),x===e&&(a.position="static"),x.appendChild(Ro),m=Ro[h],x.removeChild(Ro),a.position="absolute";return l&&d&&(g=Gr(x),g.time=Ti.time,g.width=x[h]),rn(f?m*r/u:m&&r?u/m*r:0)},dr=function(e,t,n,i){var r;return fm||um(),t in Bs&&t!=="transform"&&(t=Bs[t],~t.indexOf(",")&&(t=t.split(",")[0])),fr[t]&&t!=="transform"?(r=Ec(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:bd(zi(e,Ai))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Md[t]&&Md[t](e,t,n)||zi(e,t)||Kp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zr(e,t,r,n)+n:r},mw=function(e,t,n,i){if(!n||n==="none"){var r=Va(t,e,1),o=r&&zi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=zi(e,"borderTopColor"))}var a=new pi(this._pt,e.style,t,0,1,rm),l=0,c=0,h,u,f,d,m,x,g,p,v,T,y,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=zi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=zi(e,t)||i,x?e.style[t]=x:$r(e,t)),h=[n,i],jp(h),n=h[0],i=h[1],f=n.match(Mo)||[],b=i.match(Mo)||[],b.length){for(;u=Mo.exec(i);)g=u[0],v=i.substring(l,u.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(x=f[c++]||"")&&(d=parseFloat(x)||0,y=x.substr((d+"").length),g.charAt(1)==="="&&(g=bo(d,g)+y),p=parseFloat(g),T=g.substr((p+"").length),l=Mo.lastIndex-T.length,T||(T=T||wi.units[t]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(d=Zr(e,t,x,T)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?rx:sx;return qp.test(i)&&(a.e=0),this._pt=a,a},tx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tx[n]||n,t[1]=tx[i]||i,t.join(" ")},_w=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fr[a]&&(l=1,a=a==="transformOrigin"?Ai:Kt),$r(n,a);l&&($r(n,Kt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ec(n,1),o.uncache=1,ox(i)))}},Md={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new pi(e._pt,t,n,0,0,_w);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Tc=[1,0,0,1,0,0],ux={},dx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nx=function(e){var t=zi(e,Kt);return dx(t)?Tc:t.substr(7).match(Xp).map(rn)},gm=function(e,t){var n=e._gsap||Gr(e),i=e.style,r=nx(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Tc:r):(r===Tc&&!e.offsetParent&&e!==za&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,za.appendChild(e)),r=nx(e),l?i.display=l:$r(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):za.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},dm=function(e,t,n,i,r,o){var a=e._gsap,l=r||gm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],x=l[2],g=l[3],p=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,b=parseFloat(T[1])||0,M,_,S,A;n?l!==Tc&&(_=d*g-m*x)&&(S=y*(g/_)+b*(-x/_)+(x*v-g*p)/_,A=y*(-m/_)+b*(d/_)-(d*v-m*p)/_,y=S,b=A):(M=cx(e),y=M.x+(~T[0].indexOf("%")?y/100*M.width:y),b=M.y+(~(T[1]||T[0]).indexOf("%")?b/100*M.height:b)),i||i!==!1&&a.smooth?(p=y-c,v=b-h,a.xOffset=u+(p*d+v*x)-p,a.yOffset=f+(p*m+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ai]="0px 0px",o&&(Yr(o,a,"xOrigin",c,y),Yr(o,a,"yOrigin",h,b),Yr(o,a,"xOffset",u,a.xOffset),Yr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Ec=function(e,t){var n=e._gsap||new em(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=zi(e,Ai)||"0",h,u,f,d,m,x,g,p,v,T,y,b,M,_,S,A,w,D,P,N,R,U,H,k,$,X,I,J,pe,Me,V,Y;return h=u=f=x=g=p=v=T=y=0,d=m=1,n.svg=!!(e.getCTM&&hx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),i.scale=i.rotate=i.translate="none"),_=gm(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),dm(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,_)),b=n.xOrigin||0,M=n.yOrigin||0,_!==Tc&&(D=_[0],P=_[1],N=_[2],R=_[3],h=U=_[4],u=H=_[5],_.length===6?(d=Math.sqrt(D*D+P*P),m=Math.sqrt(R*R+N*N),x=D||P?ka(P,D)*Ao:0,v=N||R?ka(N,R)*Ao+x:0,v&&(m*=Math.abs(Math.cos(v*Ha))),n.svg&&(h-=b-(b*D+M*N),u-=M-(b*P+M*R))):(Y=_[6],Me=_[7],I=_[8],J=_[9],pe=_[10],V=_[11],h=_[12],u=_[13],f=_[14],S=ka(Y,pe),g=S*Ao,S&&(A=Math.cos(-S),w=Math.sin(-S),k=U*A+I*w,$=H*A+J*w,X=Y*A+pe*w,I=U*-w+I*A,J=H*-w+J*A,pe=Y*-w+pe*A,V=Me*-w+V*A,U=k,H=$,Y=X),S=ka(-N,pe),p=S*Ao,S&&(A=Math.cos(-S),w=Math.sin(-S),k=D*A-I*w,$=P*A-J*w,X=N*A-pe*w,V=R*w+V*A,D=k,P=$,N=X),S=ka(P,D),x=S*Ao,S&&(A=Math.cos(S),w=Math.sin(S),k=D*A+P*w,$=U*A+H*w,P=P*A-D*w,H=H*A-U*w,D=k,U=$),g&&Math.abs(g)+Math.abs(x)>359.9&&(g=x=0,p=180-p),d=rn(Math.sqrt(D*D+P*P+N*N)),m=rn(Math.sqrt(H*H+Y*Y)),S=ka(U,H),v=Math.abs(S)>2e-4?S*Ao:0,y=V?1/(V<0?-V:V):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!dx(zi(e,Kt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=rn(d),n.scaleY=rn(m),n.rotation=rn(x)+a,n.rotationX=rn(g)+a,n.rotationY=rn(p)+a,n.skewX=v+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ai]=bd(c)),n.xOffset=n.yOffset=0,n.force3D=wi.force3D,n.renderTransform=n.svg?vw:lx?fx:xw,n.uncache=0,n},bd=function(e){return(e=e.split(" "))[0]+" "+e[1]},lm=function(e,t,n){var i=zn(t);return rn(parseFloat(t)+parseFloat(Zr(e,"x",n+"px",i)))+i},xw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fx(e,t)},Eo="0deg",bc="0px",wo=") ",fx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,x=n.scaleY,g=n.transformPerspective,p=n.force3D,v=n.target,T=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(T&&(u!==Eo||h!==Eo)){var M=parseFloat(h)*Ha,_=Math.sin(M),S=Math.cos(M),A;M=parseFloat(u)*Ha,A=Math.cos(M),o=lm(v,o,_*A*-T),a=lm(v,a,-Math.sin(M)*-T),l=lm(v,l,S*A*-T+T)}g!==bc&&(y+="perspective("+g+wo),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||o!==bc||a!==bc||l!==bc)&&(y+=l!==bc||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+wo),c!==Eo&&(y+="rotate("+c+wo),h!==Eo&&(y+="rotateY("+h+wo),u!==Eo&&(y+="rotateX("+u+wo),(f!==Eo||d!==Eo)&&(y+="skew("+f+", "+d+wo),(m!==1||x!==1)&&(y+="scale("+m+", "+x+wo),v.style[Kt]=y||"translate(0, 0)"},vw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,x=n.yOrigin,g=n.xOffset,p=n.yOffset,v=n.forceCSS,T=parseFloat(o),y=parseFloat(a),b,M,_,S,A;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ha,c*=Ha,b=Math.cos(l)*u,M=Math.sin(l)*u,_=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(h*=Ha,A=Math.tan(c-h),A=Math.sqrt(1+A*A),_*=A,S*=A,h&&(A=Math.tan(h),A=Math.sqrt(1+A*A),b*=A,M*=A)),b=rn(b),M=rn(M),_=rn(_),S=rn(S)):(b=u,S=f,M=_=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=Zr(d,"x",o,"px"),y=Zr(d,"y",a,"px")),(m||x||g||p)&&(T=rn(T+m-(m*b+x*_)+g),y=rn(y+x-(m*M+x*S)+p)),(i||r)&&(A=d.getBBox(),T=rn(T+i/100*A.width),y=rn(y+r/100*A.height)),A="matrix("+b+","+M+","+_+","+S+","+T+","+y+")",d.setAttribute("transform",A),v&&(d.style[Kt]=A)},yw=function(e,t,n,i,r){var o=360,a=An(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ao:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*J_)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*J_)%o-~~(c/o)*o)),e._pt=f=new pi(e._pt,t,n,i,c,nw),f.e=h,f.u="deg",e._props.push(n),f},ix=function(e,t){for(var n in t)e[n]=t[n];return e},Sw=function(e,t,n){var i=ix({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Kt]=t,a=Ec(n,1),$r(n,Kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Kt],o[Kt]=t,a=Ec(n,1),o[Kt]=c);for(l in fr)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=zn(c),m=zn(h),u=d!==m?Zr(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new pi(e._pt,a,l,u,f-u,cm),e._pt.u=m||0,e._props.push(l));ix(a,i)};fi("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Md[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(m){return dr(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(m,x){return d[m]=f[x]=f[x]||f[(x-1)/2|0]}),a.init(l,d,u)}});var _m={name:"css",register:um,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,m,x,g,p,v,T,y,b,M,_,S,A;fm||um(),this.styles=this.styles||ax(e),S=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(h=t[x],!(bi[x]&&nm(x,t,n,i,e,r)))){if(d=typeof h,m=Md[x],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ba(h)),m)m(this,e,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",hr.lastIndex=0,hr.test(c)||(g=zn(c),p=zn(h),p?g!==p&&(c=Zr(e,x,c,p)+p):g&&(h+=g)),this.add(a,"setProperty",c,h,i,r,0,0,x),o.push(x),S.push(x,0,a[x]);else if(d!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,r):l[x],An(c)&&~c.indexOf("random(")&&(c=Ba(c)),zn(c+"")||c==="auto"||(c+=wi.units[x]||zn(dr(e,x))||""),(c+"").charAt(1)==="="&&(c=dr(e,x))):c=dr(e,x),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),x in Bs&&(x==="autoAlpha"&&(f===1&&dr(e,"visibility")==="hidden"&&u&&(f=0),S.push("visibility",0,a.visibility),Yr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),x!=="scale"&&x!=="transform"&&(x=Bs[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in fr,T){if(this.styles.save(x),A=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=zi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=h,h=zi(e,"perspective"),w?e.style.perspective=w:$r(e,"perspective")}u=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Ec(e,t.parseTransform),M=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new pi(this._pt,a,Kt,0,1,b.renderTransform,b,0,-1),y.dep=1),x==="scale")this._pt=new pi(this._pt,b,"scaleY",b.scaleY,(v?bo(b.scaleY,v+u):u)-b.scaleY||0,cm),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){S.push(Ai,0,a[Ai]),h=gw(h),b.svg?dm(e,h,0,M,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&Yr(this,b,"zOrigin",b.zOrigin,p),Yr(this,a,x,bd(c),bd(h)));continue}else if(x==="svgOrigin"){dm(e,h,1,M,0,this);continue}else if(x in ux){yw(this,b,x,f,v?bo(f,v+h):h);continue}else if(x==="smoothOrigin"){Yr(this,b,"smooth",b.smooth,h);continue}else if(x==="force3D"){b[x]=h;continue}else if(x==="transform"){Sw(this,h,e);continue}}else x in a||(x=Va(x)||x);if(T||(u||u===0)&&(f||f===0)&&!tw.test(h)&&x in a)g=(c+"").substr((f+"").length),u||(u=0),p=zn(h)||(x in wi.units?wi.units[x]:g),g!==p&&(f=Zr(e,x,c,p)),this._pt=new pi(this._pt,T?b:a,x,f,(v?bo(f,v+u):u)-f,!T&&(p==="px"||x==="zIndex")&&t.autoRound!==!1?rw:cm),this._pt.u=p||0,T&&A!==h?(this._pt.b=c,this._pt.e=A,this._pt.r=sw):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=iw);else if(x in a)mw.call(this,e,x,c,v?v+h:h);else if(x in e)this.add(e,x,c||e[x],v?v+h:h,i,r);else if(x!=="parseTransform"){_d(x,h);continue}T||(x in a?S.push(x,0,a[x]):typeof e[x]=="function"?S.push(x,2,e[x]()):S.push(x,1,c||e[x])),o.push(x)}}_&&am(this)},render:function(e,t){if(t.tween._time||!pm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:dr,aliases:Bs,getSetter:function(e,t,n){var i=Bs[t];return i&&i.indexOf(",")<0&&(t=i),t in fr&&t!==Ai&&(e._gsap.x||dr(e,"x"))?n&&Z_===n?t==="scale"?cw:lw:(Z_=n||{})&&(t==="scale"?hw:uw):e.style&&!gd(e.style[t])?ow:~t.indexOf("-")?aw:Sd(e,t)},core:{_removeProperty:$r,_getMatrix:gm}};ti.utils.checkPrefix=Va;ti.core.getStyleSaver=ax;(function(s,e,t,n){var i=fi(s+","+e+","+t,function(r){fr[r]=1});fi(e,function(r){wi.units[r]="deg",ux[r]=1}),Bs[i[13]]=s+","+e,fi(n,function(r){var o=r.split(":");Bs[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){wi.units[s]="px"});ti.registerPlugin(_m);var Ot=ti.registerPlugin(_m)||ti,pP=Ot.core.Tween;function px(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Mw(s,e,t){return e&&px(s.prototype,e),t&&px(s,t),s}var Hn,wd,bw,Ri,Jr,Kr,Wa,gx,Co,Xa,_x,pr,ys,xx,vx=function(){return Hn||typeof window<"u"&&(Hn=window.gsap)&&Hn.registerPlugin&&Hn},yx=1,Ga=[],ut=[],Ss=[],Ac=Date.now,xm=function(e,t){return t},Tw=function(){var e=Xa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,Ss),ut=n,Ss=i,xm=function(o,a){return t[o](a)}},gr=function(e,t){return~Ss.indexOf(e)&&Ss[Ss.indexOf(e)+1][t]},Rc=function(e){return!!~_x.indexOf(e)},gi=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},mi=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Td="scrollLeft",Ed="scrollTop",vm=function(){return pr&&pr.isPressed||ut.cache++},Ad=function(e,t){var n=function i(r){if(r||r===0){yx&&Ri.history.scrollRestoration!=="manual"&&(Ri.history.scrollRestoration="manual");var o=pr&&pr.isPressed;r=i.v=Math.round(r)||(pr&&pr.iOS?1:0),e(r),i.cacheID=ut.cache,o&&xm("ss",r)}else(t||ut.cache!==i.cacheID||xm("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},ni={s:Td,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ad(function(s){return arguments.length?Ri.scrollTo(s,xn.sc()):Ri.pageXOffset||Jr[Td]||Kr[Td]||Wa[Td]||0})},xn={s:Ed,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ni,sc:Ad(function(s){return arguments.length?Ri.scrollTo(ni.sc(),s):Ri.pageYOffset||Jr[Ed]||Kr[Ed]||Wa[Ed]||0})},_i=function(e,t){return(t&&t._ctx&&t._ctx.selector||Hn.utils.toArray)(e)[0]||(typeof e=="string"&&Hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ew=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},mr=function(e,t){var n=t.s,i=t.sc;Rc(e)&&(e=Jr.scrollingElement||Kr);var r=ut.indexOf(e),o=i===xn.sc?1:2;!~r&&(r=ut.push(e)-1),ut[r+o]||gi(e,"scroll",vm);var a=ut[r+o],l=a||(ut[r+o]=Ad(gr(e,n),!0)||(Rc(e)?i:Ad(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Hn.getProperty(e,"scrollBehavior")==="smooth"),l},Rd=function(e,t,n){var i=e,r=e,o=Ac(),a=o,l=t||50,c=Math.max(500,l*3),h=function(m,x){var g=Ac();x||g-o>l?(r=i,i=m,a=o,o=g):n?i+=m:i=r+(m-r)/(g-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},f=function(m){var x=a,g=r,p=Ac();return(m||m===0)&&m!==i&&h(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-x)*1e3};return{update:h,reset:u,getVelocity:f}},wc=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Sx=function(){Xa=Hn.core.globals().ScrollTrigger,Xa&&Xa.core&&Tw()},Mx=function(e){return Hn=e||vx(),!wd&&Hn&&typeof document<"u"&&document.body&&(Ri=window,Jr=document,Kr=Jr.documentElement,Wa=Jr.body,_x=[Ri,Jr,Kr,Wa],bw=Hn.utils.clamp,xx=Hn.core.context||function(){},Co="onpointerenter"in Wa?"pointer":"mouse",gx=on.isTouch=Ri.matchMedia&&Ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ys=on.eventTypes=("ontouchstart"in Kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yx=0},500),wd=1),Xa||Sx(),wd};ni.op=xn;ut.cache=0;var on=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){wd||Mx(Hn)||console.warn("Please gsap.registerPlugin(Observer)"),Xa||Sx();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,x=n.event,g=n.onDragStart,p=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,b=n.onRight,M=n.onLeft,_=n.onUp,S=n.onDown,A=n.onChangeX,w=n.onChangeY,D=n.onChange,P=n.onToggleX,N=n.onToggleY,R=n.onHover,U=n.onHoverEnd,H=n.onMove,k=n.ignoreCheck,$=n.isNormalizer,X=n.onGestureStart,I=n.onGestureEnd,J=n.onWheel,pe=n.onEnable,Me=n.onDisable,V=n.onClick,Y=n.scrollSpeed,ue=n.capture,ce=n.allowClicks,he=n.lockAxis,ye=n.onLockAxis;this.target=a=_i(a)||Kr,this.vars=n,d&&(d=Hn.utils.toArray(d)),i=i||1e-9,r=r||0,m=m||1,Y=Y||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ri.getComputedStyle(Wa).lineHeight)||22);var We,Ee,Ue,be,De,tt,se,G=this,Ae=0,Qe=0,Re=n.passive||!h&&n.passive!==!1,Ne=mr(a,ni),je=mr(a,xn),Ke=Ne(),z=je(),Je=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ys[0]==="pointerdown",et=Rc(a),Ze=a.ownerDocument||Jr,ge=[0,0,0],ct=[0,0,0],ke=0,Ye=function(){return ke=Ac()},L=function(xe,oe){return(G.event=xe)&&d&&Ew(xe.target,d)||oe&&Je&&xe.pointerType!=="touch"||k&&k(xe,oe)},E=function(){G._vx.reset(),G._vy.reset(),Ee.pause(),u&&u(G)},O=function(){var xe=G.deltaX=mx(ge),oe=G.deltaY=mx(ct),ae=Math.abs(xe)>=i,we=Math.abs(oe)>=i;D&&(ae||we)&&D(G,xe,oe,ge,ct),ae&&(b&&G.deltaX>0&&b(G),M&&G.deltaX<0&&M(G),A&&A(G),P&&G.deltaX<0!=Ae<0&&P(G),Ae=G.deltaX,ge[0]=ge[1]=ge[2]=0),we&&(S&&G.deltaY>0&&S(G),_&&G.deltaY<0&&_(G),w&&w(G),N&&G.deltaY<0!=Qe<0&&N(G),Qe=G.deltaY,ct[0]=ct[1]=ct[2]=0),(be||Ue)&&(H&&H(G),Ue&&(g&&Ue===1&&g(G),v&&v(G),Ue=0),be=!1),tt&&!(tt=!1)&&ye&&ye(G),De&&(J(G),De=!1),We=0},ie=function(xe,oe,ae){ge[ae]+=xe,ct[ae]+=oe,G._vx.update(xe),G._vy.update(oe),c?We||(We=requestAnimationFrame(O)):O()},j=function(xe,oe){he&&!se&&(G.axis=se=Math.abs(xe)>Math.abs(oe)?"x":"y",tt=!0),se!=="y"&&(ge[2]+=xe,G._vx.update(xe,!0)),se!=="x"&&(ct[2]+=oe,G._vy.update(oe,!0)),c?We||(We=requestAnimationFrame(O)):O()},re=function(xe){if(!L(xe,1)){xe=wc(xe,h);var oe=xe.clientX,ae=xe.clientY,we=oe-G.x,le=ae-G.y,Fe=G.isDragging;G.x=oe,G.y=ae,(Fe||(we||le)&&(Math.abs(G.startX-oe)>=r||Math.abs(G.startY-ae)>=r))&&(Ue||(Ue=Fe?2:1),Fe||(G.isDragging=!0),j(we,le))}},de=G.onPress=function(me){L(me,1)||me&&me.button||(G.axis=se=null,Ee.pause(),G.isPressed=!0,me=wc(me),Ae=Qe=0,G.startX=G.x=me.clientX,G.startY=G.y=me.clientY,G._vx.reset(),G._vy.reset(),gi($?a:Ze,ys[1],re,Re,!0),G.deltaX=G.deltaY=0,T&&T(G))},q=G.onRelease=function(me){if(!L(me,1)){mi($?a:Ze,ys[1],re,!0);var xe=!isNaN(G.y-G.startY),oe=G.isDragging,ae=oe&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),we=wc(me);!ae&&xe&&(G._vx.reset(),G._vy.reset(),h&&ce&&Hn.delayedCall(.08,function(){if(Ac()-ke>300&&!me.defaultPrevented){if(me.target.click)me.target.click();else if(Ze.createEvent){var le=Ze.createEvent("MouseEvents");le.initMouseEvent("click",!0,!0,Ri,1,we.screenX,we.screenY,we.clientX,we.clientY,!1,!1,!1,!1,0,null),me.target.dispatchEvent(le)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,u&&oe&&!$&&Ee.restart(!0),Ue&&O(),p&&oe&&p(G),y&&y(G,ae)}},ee=function(xe){return xe.touches&&xe.touches.length>1&&(G.isGesturing=!0)&&X(xe,G.isDragging)},fe=function(){return(G.isGesturing=!1)||I(G)},F=function(xe){if(!L(xe)){var oe=Ne(),ae=je();ie((oe-Ke)*Y,(ae-z)*Y,1),Ke=oe,z=ae,u&&Ee.restart(!0)}},Q=function(xe){if(!L(xe)){xe=wc(xe,h),J&&(De=!0);var oe=(xe.deltaMode===1?l:xe.deltaMode===2?Ri.innerHeight:1)*m;ie(xe.deltaX*oe,xe.deltaY*oe,0),u&&!$&&Ee.restart(!0)}},ne=function(xe){if(!L(xe)){var oe=xe.clientX,ae=xe.clientY,we=oe-G.x,le=ae-G.y;G.x=oe,G.y=ae,be=!0,u&&Ee.restart(!0),(we||le)&&j(we,le)}},ve=function(xe){G.event=xe,R(G)},_e=function(xe){G.event=xe,U(G)},Se=function(xe){return L(xe)||wc(xe,h)&&V(G)};Ee=G._dc=Hn.delayedCall(f||.25,E).pause(),G.deltaX=G.deltaY=0,G._vx=Rd(0,50,!0),G._vy=Rd(0,50,!0),G.scrollX=Ne,G.scrollY=je,G.isDragging=G.isGesturing=G.isPressed=!1,xx(this),G.enable=function(me){return G.isEnabled||(gi(et?Ze:a,"scroll",vm),o.indexOf("scroll")>=0&&gi(et?Ze:a,"scroll",F,Re,ue),o.indexOf("wheel")>=0&&gi(a,"wheel",Q,Re,ue),(o.indexOf("touch")>=0&&gx||o.indexOf("pointer")>=0)&&(gi(a,ys[0],de,Re,ue),gi(Ze,ys[2],q),gi(Ze,ys[3],q),ce&&gi(a,"click",Ye,!0,!0),V&&gi(a,"click",Se),X&&gi(Ze,"gesturestart",ee),I&&gi(Ze,"gestureend",fe),R&&gi(a,Co+"enter",ve),U&&gi(a,Co+"leave",_e),H&&gi(a,Co+"move",ne)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=be=Ue=!1,G._vx.reset(),G._vy.reset(),Ke=Ne(),z=je(),me&&me.type&&de(me),pe&&pe(G)),G},G.disable=function(){G.isEnabled&&(Ga.filter(function(me){return me!==G&&Rc(me.target)}).length||mi(et?Ze:a,"scroll",vm),G.isPressed&&(G._vx.reset(),G._vy.reset(),mi($?a:Ze,ys[1],re,!0)),mi(et?Ze:a,"scroll",F,ue),mi(a,"wheel",Q,ue),mi(a,ys[0],de,ue),mi(Ze,ys[2],q),mi(Ze,ys[3],q),mi(a,"click",Ye,!0),mi(a,"click",Se),mi(Ze,"gesturestart",ee),mi(Ze,"gestureend",fe),mi(a,Co+"enter",ve),mi(a,Co+"leave",_e),mi(a,Co+"move",ne),G.isEnabled=G.isPressed=G.isDragging=!1,Me&&Me(G))},G.kill=G.revert=function(){G.disable();var me=Ga.indexOf(G);me>=0&&Ga.splice(me,1),pr===G&&(pr=0)},Ga.push(G),$&&Rc(a)&&(pr=G),G.enable(x)},Mw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();on.version="3.15.1";on.create=function(s){return new on(s)};on.register=Mx;on.getAll=function(){return Ga.slice()};on.getById=function(s){return Ga.filter(function(e){return e.vars.id===s})[0]};vx()&&Hn.registerPlugin(on);var ze,Za,mt,Rt,Gi,At,Lm,Wd,Hc,Uc,Pc,Cd,ii,Yd,wm,vi,bx,Tx,Ja,zx,ym,Hx,xi,Am,Vx,Gx,Qr,Rm,Nm,Ka,Um,jr,Cm,Sm,Pd=1,si=Date.now,Mm=si(),ss=0,Ic=0,Ex=function(e,t,n){var i=Vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},wx=function(e,t){return t&&(!Vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ww=function s(){return Ic&&requestAnimationFrame(s)},Ax=function(){return Yd=1},Rx=function(){return Yd=0},ks=function(e){return e},Dc=function(e){return Math.round(e*1e5)/1e5||0},Wx=function(){return typeof window<"u"},Xx=function(){return ze||Wx()&&(ze=window.gsap)&&ze.registerPlugin&&ze},Uo=function(e){return!!~Lm.indexOf(e)},qx=function(e){return(e==="Height"?Um:mt["inner"+e])||Gi["client"+e]||At["client"+e]},Yx=function(e){return gr(e,"getBoundingClientRect")||(Uo(e)?function(){return Gd.width=mt.innerWidth,Gd.height=Um,Gd}:function(){return _r(e)})},Aw=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=gr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?qx(r):e["client"+r])||0}},Rw=function(e,t){return!t||~Ss.indexOf(e)?Yx(e):function(){return Gd}},zs=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=gr(e,n))?o()-Yx(e)()[r]:Uo(e)?(Gi[n]||At[n])-qx(i):e[n]-e["offset"+i])},Id=function(e,t){for(var n=0;n<Ja.length;n+=3)(!t||~t.indexOf(Ja[n+1]))&&e(Ja[n],Ja[n+1],Ja[n+2])},Vi=function(e){return typeof e=="string"},ri=function(e){return typeof e=="function"},Lc=function(e){return typeof e=="number"},Po=function(e){return typeof e=="object"},Cc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},qa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ya=Math.abs,$x="left",Zx="top",Om="right",Fm="bottom",Do="width",Lo="height",Oc="Right",Fc="Left",Bc="Top",kc="Bottom",vn="padding",ns="margin",ja="Width",Bm="Height",Rn="px",is=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Cw=function(e){var t=is(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_r=function(e,t){var n=t&&is(e)[wm]!=="matrix(1, 0, 0, 1, 0, 0)"&&ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jx=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Pw=function(e){return function(t){return ze.utils.snap(Jx(e),t)}},km=function(e){var t=ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Iw=function(e){return function(t,n){return km(Jx(e))(t,n.direction)}},Dd=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ld=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Px={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nd={toggleActions:"play",anticipatePin:0},qd={top:0,left:0,center:.5,bottom:1,right:1},kd=function(e,t){if(Vi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in qd?qd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ud=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,f=r.indent,d=r.fontWeight,m=Rt.createElement("div"),x=Uo(n)||gr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=x?At:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,T=v?c:h,y="border-color:"+T+";font-size:"+u+";color:"+T+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&x?"fixed;":"absolute;"),(g||l||!x)&&(y+=(i===xn?Om:Fm)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],zd(m,0,i,v),m},zd=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+ja]=1,r["border"+a+ja]=0,r[n.p]=t+"px",ze.set(e,r)},pt=[],Pm={},Vc,Ix=function(){return si()-ss>34&&(Vc||(Vc=requestAnimationFrame(xr)))},$a=function(){(!xi||!xi.isPressed||xi.startX>At.clientWidth)&&(ut.cache++,xi?Vc||(Vc=requestAnimationFrame(xr)):xr(),ss||Fo("scrollStart"),ss=si())},bm=function(){Gx=mt.innerWidth,Vx=mt.innerHeight},Nc=function(e){ut.cache++,(e===!0||!ii&&!Hx&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!Am||Gx!==mt.innerWidth||Math.abs(mt.innerHeight-Vx)>mt.innerHeight*.25))&&Wd.restart(!0)},Oo={},Dw=[],Kx=function s(){return Dn(dt,"scrollEnd",s)||Io(!0)},Fo=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||Dw},Hi=[],Qx=function(e){for(var t=0;t<Hi.length;t+=5)(!e||Hi[t+4]&&Hi[t+4].query===e)&&(Hi[t].style.cssText=Hi[t+1],Hi[t].getBBox&&Hi[t].setAttribute("transform",Hi[t+2]||""),Hi[t+3].uncache=1)},jx=function(){ut.cache++,ut.forEach(function(e){return ri(e)&&(e.rec=e())})},zm=function(e,t){var n;for(vi=0;vi<pt.length;vi++)n=pt[vi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));jr=!0,t&&Qx(t),t||Fo("revert")},ev=function(e,t){ut.cache++,(t||!yi)&&ut.forEach(function(n){return ri(n)&&n.cacheID++&&(n.rec=0)}),Vi(e)&&(Nm=e,mt.history.scrollRestoration!==e&&(mt.history.scrollRestoration=e))},yi,No=0,Dx,Lw=function(){if(Dx!==No){var e=Dx=No;requestAnimationFrame(function(){return e===No&&Io(!0)})}},tv=function(){At.appendChild(Ka),Um=!xi&&Ka.offsetHeight||mt.innerHeight,At.removeChild(Ka)},Lx=function(e){return Hc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Io=function(e,t){if(Gi=Rt.documentElement,At=Rt.body,Lm=[mt,Rt,Gi,At],ss&&!e&&!jr){Ln(dt,"scrollEnd",Kx);return}tv(),yi=dt.isRefreshing=!0,jr||jx();var n=Fo("refreshInit");zx&&dt.sort(),t||zm(),ut.forEach(function(i){ri(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),pt.slice(0).forEach(function(i){return i.refresh()}),jr=!1,pt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Cm=1,Lx(!0),pt.forEach(function(i){var r=zs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Lx(!1),Cm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){ri(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ev(Nm,1),Wd.pause(),No++,yi=2,xr(2),pt.forEach(function(i){return ri(i.vars.onRefresh)&&i.vars.onRefresh(i)}),yi=dt.isRefreshing=!1,Fo("refresh")},Im=0,Hd=1,zc,xr=function(e){if(e===2||!yi&&!jr){dt.isUpdating=!0,zc&&zc.update(0);var t=pt.length,n=si(),i=n-Mm>=50,r=t&&pt[0].scroll();if(Hd=Im>r?-1:1,yi||(Im=r),i&&(ss&&!Yd&&n-ss>200&&(ss=0,Fo("scrollEnd")),Pc=Mm,Mm=n),Hd<0){for(vi=t;vi-- >0;)pt[vi]&&pt[vi].update(0,i);Hd=1}else for(vi=0;vi<t;vi++)pt[vi]&&pt[vi].update(0,i);dt.isUpdating=!1}Vc=0},Dm=[$x,Zx,Fm,Om,ns+kc,ns+Oc,ns+Bc,ns+Fc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vd=Dm.concat([Do,Lo,"boxSizing","max"+ja,"max"+Bm,"position",ns,vn,vn+Bc,vn+Oc,vn+kc,vn+Fc]),Nw=function(e,t,n){Qa(n);var i=e._gsap;if(i.spacerIsNative)Qa(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Tm=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Dm.length,o=t.style,a=e.style,l;r--;)l=Dm[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Fm]=a[Om]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Do]=Xd(e,ni)+Rn,o[Lo]=Xd(e,xn)+Rn,o[vn]=a[ns]=a[Zx]=a[$x]="0",Qa(i),a[Do]=a["max"+ja]=n[Do],a[Lo]=a["max"+Bm]=n[Lo],a[vn]=n[vn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Uw=/([A-Z])/g,Qa=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||ze.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Uw,"-$1").toLowerCase())}},Od=function(e){for(var t=Vd.length,n=e.style,i=[],r=0;r<t;r++)i.push(Vd[r],n[Vd[r]]);return i.t=e,i},Ow=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Gd={left:0,top:0},Nx=function(e,t,n,i,r,o,a,l,c,h,u,f,d,m){ri(e)&&(e=e(l)),Vi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?kd("0"+e.substr(3),n):0));var x=d?d.time():0,g,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),Lc(e))d&&(e=ze.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&zd(a,n,i,!0);else{ri(t)&&(t=t(l));var T=(e||"0").split(" "),y,b,M,_;v=_i(t,l)||At,y=_r(v)||{},(!y||!y.left&&!y.top)&&is(v).display==="none"&&(_=v.style.display,v.style.display="block",y=_r(v),_?v.style.display=_:v.style.removeProperty("display")),b=kd(T[0],y[i.d]),M=kd(T[1]||"0",n),e=y[i.p]-c[i.p]-h+b+r-M,a&&zd(a,M,i,n-M<20||a._isStart&&M>20),n-=n-M}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+n,A=o._isStart;g="scroll"+i.d2,zd(o,S,i,A&&S>20||!A&&(u?Math.max(At[g],Gi[g]):o.parentNode[g])<=S+1),u&&(c=_r(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Rn))}return d&&v&&(g=_r(v),d.seek(f),p=_r(v),d._caScrollDist=g[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(x),d?e:Math.round(e)},Fw=/(webkit|moz|length|cssText|inset)/i,Ux=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===At){e._stOrig=r.cssText,a=is(e);for(o in a)!+o&&!Fw.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;ze.core.getCache(e).uncache=1,t.appendChild(e)}},nv=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Fd=function(e,t,n){var i={};i[t.p]="+="+n,ze.set(e,i)},Ox=function(e,t){var n=mr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,m={};c=c||n();var x=nv(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return x(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ze.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ln(e,"wheel",n.wheelHandler),dt.isTouch&&Ln(e,"touchmove",n.wheelHandler),r},dt=(function(){function s(t,n){Za||s.register(ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rm(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ic){this.update=this.refresh=this.kill=ks;return}n=Cx(Vi(n)||Lc(n)||n.nodeType?{trigger:n}:n,Nd);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,f=r.trigger,d=r.pin,m=r.pinSpacing,x=r.invalidateOnRefresh,g=r.anticipatePin,p=r.onScrubComplete,v=r.onSnapComplete,T=r.once,y=r.snap,b=r.pinReparent,M=r.pinSpacer,_=r.containerAnimation,S=r.fastScrollEnd,A=r.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ni:xn,D=!u&&u!==0,P=_i(n.scroller||mt),N=ze.core.getCache(P),R=Uo(P),U=("pinType"in n?n.pinType:gr(P,"pinType")||R&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),$="markers"in n?n.markers:Nd.markers,X=R?0:parseFloat(is(P)["border"+w.p2+ja])||0,I=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(I)},pe=Aw(P,R,w),Me=Rw(P,R),V=0,Y=0,ue=0,ce=mr(P,w),he,ye,We,Ee,Ue,be,De,tt,se,G,Ae,Qe,Re,Ne,je,Ke,z,Je,et,Ze,ge,ct,ke,Ye,L,E,O,ie,j,re,de,q,ee,fe,F,Q,ne,ve,_e;if(I._startClamp=I._endClamp=!1,I._dir=w,g*=45,I.scroller=P,I.scroll=_?_.time.bind(_):ce,Ee=ce(),jr&&ce.rec==null&&(ce.rec=Ee),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(zx=1,n.refreshPriority===-9999&&(zc=I)),N.tweenScroll=N.tweenScroll||{top:Ox(P,xn),left:Ox(P,ni)},I.tweenTo=he=N.tweenScroll[w.p],I.scrubDuration=function(ae){ee=Lc(ae)&&ae,ee?q?q.duration(ae):q=ze.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return p&&p(I)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(u),re=0,l||(l=i.vars.id)),y&&((!Po(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in At.style&&ze.set(R?[At,Gi]:P,{scrollBehavior:"auto"}),ut.forEach(function(ae){return ri(ae)&&ae.target===(R?Rt.scrollingElement||Gi:P)&&(ae.smooth=!1)}),We=ri(y.snapTo)?y.snapTo:y.snapTo==="labels"?Pw(i):y.snapTo==="labelsDirectional"?Iw(i):y.directional!==!1?function(ae,we){return km(y.snapTo)(ae,si()-Y<500?0:we.direction)}:ze.utils.snap(y.snapTo),fe=y.duration||{min:.1,max:2},fe=Po(fe)?Uc(fe.min,fe.max):Uc(fe,fe),F=ze.delayedCall(y.delay||ee/2||.1,function(){var ae=ce(),we=si()-Y<500,le=he.tween;if((we||Math.abs(I.getVelocity())<10)&&!le&&!Yd&&V!==ae){var Fe=(ae-be)/Ne,_t=i&&!D?i.totalProgress():Fe,ot=we?0:(_t-de)/(si()-Pc)*1e3||0,zt=ze.utils.clamp(-Fe,1-Fe,Ya(ot/2)*ot/.185),dn=Fe+(y.inertia===!1?0:zt),Ht,Dt,wt=y,Sn=wt.onStart,Lt=wt.onInterrupt,Vn=wt.onComplete;if(Ht=We(dn,I),Lc(Ht)||(Ht=dn),Dt=Math.max(0,Math.round(be+Ht*Ne)),ae<=De&&ae>=be&&Dt!==ae){if(le&&!le._initted&&le.data<=Ya(Dt-ae))return;y.inertia===!1&&(zt=Ht-Fe),he(Dt,{duration:fe(Ya(Math.max(Ya(dn-_t),Ya(Ht-_t))*.185/ot/.05||0)),ease:y.ease||"power3",data:Ya(Dt-ae),onInterrupt:function(){return F.restart(!0)&&Lt&&qa(I,Lt)},onComplete:function(){I.update(),V=ce(),i&&!D&&(q?q.resetTo("totalProgress",Ht,i._tTime/i._tDur):i.progress(Ht)),re=de=i&&!D?i.totalProgress():I.progress,v&&v(I),Vn&&qa(I,Vn)}},ae,zt*Ne,Dt-ae-zt*Ne),Sn&&qa(I,Sn,he.tween)}}else I.isActive&&V!==ae&&F.restart(!0)}).pause()),l&&(Pm[l]=I),f=I.trigger=_i(f||d!==!0&&d),_e=f&&f._gsap&&f._gsap.stRevert,_e&&(_e=_e(I)),d=d===!0?f:_i(d),Vi(a)&&(a={targets:f,className:a}),d&&(m===!1||m===ns||(m=!m&&d.parentNode&&d.parentNode.style&&is(d.parentNode).display==="flex"?!1:vn),I.pin=d,ye=ze.core.getCache(d),ye.spacer?je=ye.pinState:(M&&(M=_i(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),ye.spacerIsNative=!!M,M&&(ye.spacerState=Od(M))),ye.spacer=Je=M||Rt.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),ye.pinState=je=Od(d)),n.force3D!==!1&&ze.set(d,{force3D:!0}),I.spacer=Je=ye.spacer,j=is(d),Ye=j[m+w.os2],Ze=ze.getProperty(d),ge=ze.quickSetter(d,w.a,Rn),Tm(d,Je,j),z=Od(d)),$){Qe=Po($)?Cx($,Px):Px,G=Ud("scroller-start",l,P,w,Qe,0),Ae=Ud("scroller-end",l,P,w,Qe,0,G),et=G["offset"+w.op.d2];var Se=_i(gr(P,"content")||P);tt=this.markerStart=Ud("start",l,Se,w,Qe,et,0,_),se=this.markerEnd=Ud("end",l,Se,w,Qe,et,0,_),_&&(ve=ze.quickSetter([tt,se],w.a,Rn)),!U&&!(Ss.length&&gr(P,"fixedMarkers")===!0)&&(Cw(R?At:P),ze.set([G,Ae],{force3D:!0}),E=ze.quickSetter(G,w.a,Rn),ie=ze.quickSetter(Ae,w.a,Rn))}if(_){var me=_.vars.onUpdate,xe=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){I.update(0,0,1),me&&me.apply(_,xe||[])})}if(I.previous=function(){return pt[pt.indexOf(I)-1]},I.next=function(){return pt[pt.indexOf(I)+1]},I.revert=function(ae,we){if(!we)return I.kill(!0);var le=ae!==!1||!I.enabled,Fe=ii;le!==I.isReverted&&(le&&(Q=Math.max(ce(),I.scroll.rec||0),ue=I.progress,ne=i&&i.progress()),tt&&[tt,se,G,Ae].forEach(function(_t){return _t.style.display=le?"none":"block"}),le&&(ii=I,I.update(le)),d&&(!b||!I.isActive)&&(le?Nw(d,Je,je):Tm(d,Je,is(d),L)),le||I.update(le),ii=Fe,I.isReverted=le)},I.refresh=function(ae,we,le,Fe){if(!((ii||!I.enabled)&&!we)){if(d&&ae&&ss){Ln(s,"scrollEnd",Kx);return}!yi&&J&&J(I),ii=I,he.tween&&!le&&(he.tween.kill(),he.tween=0),q&&q.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Z){return Z.vars.immediateRender&&Z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var _t=pe(),ot=Me(),zt=_?_.duration():zs(P,w),dn=Ne<=.01||!Ne,Ht=0,Dt=Fe||0,wt=Po(le)?le.end:n.end,Sn=n.endTrigger||f,Lt=Po(le)?le.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Vn=I.pinnedContainer=n.pinnedContainer&&_i(n.pinnedContainer,I),Ii=f&&Math.max(0,pt.indexOf(I))||0,jt=Ii,fn,Mn,Di,zo,bn,en,Wi,sl,Jc,Mr,C,W,te;for($&&Po(le)&&(W=ze.getProperty(G,w.p),te=ze.getProperty(Ae,w.p));jt-- >0;)en=pt[jt],en.end||en.refresh(0,1)||(ii=I),Wi=en.pin,Wi&&(Wi===f||Wi===d||Wi===Vn)&&!en.isReverted&&(Mr||(Mr=[]),Mr.unshift(en),en.revert(!0,!0)),en!==pt[jt]&&(Ii--,jt--);for(ri(Lt)&&(Lt=Lt(I)),Lt=Ex(Lt,"start",I),be=Nx(Lt,f,_t,w,ce(),tt,G,I,ot,X,U,zt,_,I._startClamp&&"_startClamp")||(d?-.001:0),ri(wt)&&(wt=wt(I)),Vi(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(Vi(Lt)?Lt.split(" ")[0]:"")+wt:(Ht=kd(wt.substr(2),_t),wt=Vi(Lt)?Lt:(_?ze.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,be):be)+Ht,Sn=f)),wt=Ex(wt,"end",I),De=Math.max(be,Nx(wt||(Sn?"100% 0":zt),Sn,_t,w,ce()+Ht,se,Ae,I,ot,X,U,zt,_,I._endClamp&&"_endClamp"))||-.001,Ht=0,jt=Ii;jt--;)en=pt[jt]||{},Wi=en.pin,Wi&&en.start-en._pinPush<=be&&!_&&en.end>0&&(fn=en.end-(I._startClamp?Math.max(0,en.start):en.start),(Wi===f&&en.start-en._pinPush<be||Wi===Vn)&&isNaN(Lt)&&(Ht+=fn*(1-en.progress)),Wi===d&&(Dt+=fn));if(be+=Ht,De+=Ht,I._startClamp&&(I._startClamp+=Ht),I._endClamp&&!yi&&(I._endClamp=De||-.001,De=Math.min(De,zs(P,w))),Ne=De-be||(be-=.01)&&.001,dn&&(ue=ze.utils.clamp(0,1,ze.utils.normalize(be,De,Q))),I._pinPush=Dt,tt&&Ht&&(fn={},fn[w.a]="+="+Ht,Vn&&(fn[w.p]="-="+ce()),ze.set([tt,se],fn)),d&&!(Cm&&I.end>=zs(P,w)))fn=is(d),zo=w===xn,Di=ce(),ct=parseFloat(Ze(w.a))+Dt,!zt&&De>1&&(C=(R?Rt.scrollingElement||Gi:P).style,C={style:C,value:C["overflow"+w.a.toUpperCase()]},R&&is(At)["overflow"+w.a.toUpperCase()]!=="scroll"&&(C.style["overflow"+w.a.toUpperCase()]="scroll")),Tm(d,Je,fn),z=Od(d),Mn=_r(d,!0),sl=U&&mr(P,zo?ni:xn)(),m?(L=[m+w.os2,Ne+Dt+Rn],L.t=Je,jt=m===vn?Xd(d,w)+Ne+Dt:0,jt&&(L.push(w.d,jt+Rn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=jt+Rn)),Qa(L),Vn&&pt.forEach(function(Z){Z.pin===Vn&&Z.vars.pinSpacing!==!1&&(Z._subPinOffset=!0)}),U&&ce(Q)):(jt=Xd(d,w),jt&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=jt+Rn)),U&&(bn={top:Mn.top+(zo?Di-be:sl)+Rn,left:Mn.left+(zo?sl:Di-be)+Rn,boxSizing:"border-box",position:"fixed"},bn[Do]=bn["max"+ja]=Math.ceil(Mn.width)+Rn,bn[Lo]=bn["max"+Bm]=Math.ceil(Mn.height)+Rn,bn[ns]=bn[ns+Bc]=bn[ns+Oc]=bn[ns+kc]=bn[ns+Fc]="0",bn[vn]=fn[vn],bn[vn+Bc]=fn[vn+Bc],bn[vn+Oc]=fn[vn+Oc],bn[vn+kc]=fn[vn+kc],bn[vn+Fc]=fn[vn+Fc],Ke=Ow(je,bn,b),yi&&ce(0)),i?(Jc=i._initted,ym(1),i.render(i.duration(),!0,!0),ke=Ze(w.a)-ct+Ne+Dt,O=Math.abs(Ne-ke)>1,U&&O&&Ke.splice(Ke.length-2,2),i.render(0,!0,!0),Jc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ym(0)):ke=Ne,C&&(C.value?C.style["overflow"+w.a.toUpperCase()]=C.value:C.style.removeProperty("overflow-"+w.a));else if(f&&ce()&&!_)for(Mn=f.parentNode;Mn&&Mn!==At;)Mn._pinOffset&&(be-=Mn._pinOffset,De-=Mn._pinOffset),Mn=Mn.parentNode;Mr&&Mr.forEach(function(Z){return Z.revert(!1,!0)}),I.start=be,I.end=De,Ee=Ue=yi?Q:ce(),!_&&!yi&&!jr&&(Ee<Q&&ce(Q),I.scroll.rec=0),I.revert(!1,!0),Y=si(),F&&(V=-1,F.restart(!0)),ii=0,i&&D&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(dn||ue!==I.progress||_||x||i&&!i._initted)&&(i&&!D&&(i._initted||ue||i.vars.immediateRender!==!1)&&i.totalProgress(_&&be<-.001&&!ue?ze.utils.normalize(be,De,0):ue,!0),I.progress=dn||(Ee-be)/Ne===ue?0:ue),d&&m&&(Je._pinOffset=Math.round(I.progress*ke)),q&&q.invalidate(),isNaN(W)||(W-=ze.getProperty(G,w.p),te-=ze.getProperty(Ae,w.p),Fd(G,w,W),Fd(tt,w,W-(Fe||0)),Fd(Ae,w,te),Fd(se,w,te-(Fe||0))),dn&&!yi&&I.update(),h&&!yi&&!Re&&(Re=!0,h(I),Re=!1)}},I.getVelocity=function(){return(ce()-Ue)/(si()-Pc)*1e3||0},I.endAnimation=function(){Cc(I.callbackAnimation),i&&(q?q.progress(1):i.paused()?D||Cc(i,I.direction<0,1):Cc(i,i.reversed()))},I.labelToScroll=function(ae){return i&&i.labels&&(be||I.refresh()||be)+i.labels[ae]/i.duration()*Ne||0},I.getTrailing=function(ae){var we=pt.indexOf(I),le=I.direction>0?pt.slice(0,we).reverse():pt.slice(we+1);return(Vi(ae)?le.filter(function(Fe){return Fe.vars.preventOverlaps===ae}):le).filter(function(Fe){return I.direction>0?Fe.end<=be:Fe.start>=De})},I.update=function(ae,we,le){if(!(_&&!le&&!ae)){var Fe=yi===!0?Q:I.scroll(),_t=ae?0:(Fe-be)/Ne,ot=_t<0?0:_t>1?1:_t||0,zt=I.progress,dn,Ht,Dt,wt,Sn,Lt,Vn,Ii;if(we&&(Ue=Ee,Ee=_?ce():Fe,y&&(de=re,re=i&&!D?i.totalProgress():ot)),g&&d&&!ii&&!Pd&&ss&&(!ot&&be<Fe+(Fe-Ue)/(si()-Pc)*g?ot=1e-4:ot===1&&De>Fe+(Fe-Ue)/(si()-Pc)*g&&(ot=.9999)),ot!==zt&&I.enabled){if(dn=I.isActive=!!ot&&ot<1,Ht=!!zt&&zt<1,Lt=dn!==Ht,Sn=Lt||!!ot!=!!zt,I.direction=ot>zt?1:-1,I.progress=ot,Sn&&!ii&&(Dt=ot&&!zt?0:ot===1?1:zt===1?2:3,D&&(wt=!Lt&&k[Dt+1]!=="none"&&k[Dt+1]||k[Dt],Ii=i&&(wt==="complete"||wt==="reset"||wt in i))),A&&(Lt||Ii)&&(Ii||u||!i)&&(ri(A)?A(I):I.getTrailing(A).forEach(function(Di){return Di.endAnimation()})),D||(q&&!ii&&!Pd?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",ot,i._tTime/i._tDur):(q.vars.totalProgress=ot,q.invalidate().restart())):i&&i.totalProgress(ot,!!(ii&&(Y||ae)))),d){if(ae&&m&&(Je.style[m+w.os2]=Ye),!U)ge(Dc(ct+ke*ot));else if(Sn){if(Vn=!ae&&ot>zt&&De+1>Fe&&Fe+1>=zs(P,w),b)if(!ae&&(dn||Vn)){var jt=_r(d,!0),fn=Fe-be;Ux(d,At,jt.top+(w===xn?fn:0)+Rn,jt.left+(w===xn?0:fn)+Rn)}else Ux(d,Je);Qa(dn||Vn?Ke:z),O&&ot<1&&dn||ge(ct+(ot===1&&!Vn?ke:0))}}y&&!he.tween&&!ii&&!Pd&&F.restart(!0),a&&(Lt||T&&ot&&(ot<1||!Sm))&&Hc(a.targets).forEach(function(Di){return Di.classList[dn||T?"add":"remove"](a.className)}),o&&!D&&!ae&&o(I),Sn&&!ii?(D&&(Ii&&(wt==="complete"?i.pause().totalProgress(1):wt==="reset"?i.restart(!0).pause():wt==="restart"?i.restart(!0):i[wt]()),o&&o(I)),(Lt||!Sm)&&(c&&Lt&&qa(I,c),H[Dt]&&qa(I,H[Dt]),T&&(ot===1?I.kill(!1,1):H[Dt]=0),Lt||(Dt=ot===1?1:3,H[Dt]&&qa(I,H[Dt]))),S&&!dn&&Math.abs(I.getVelocity())>(Lc(S)?S:2500)&&(Cc(I.callbackAnimation),q?q.progress(1):Cc(i,wt==="reverse"?1:!ot,1))):D&&o&&!ii&&o(I)}if(ie){var Mn=_?Fe/_.duration()*(_._caScrollDist||0):Fe;E(Mn+(G._isFlipped?1:0)),ie(Mn)}ve&&ve(-Fe/_.duration()*(_._caScrollDist||0))}},I.enable=function(ae,we){I.enabled||(I.enabled=!0,Ln(P,"resize",Nc),R||Ln(P,"scroll",$a),J&&Ln(s,"refreshInit",J),ae!==!1&&(I.progress=ue=0,Ee=Ue=V=ce()),we!==!1&&I.refresh())},I.getTween=function(ae){return ae&&he?he.tween:q},I.setPositions=function(ae,we,le,Fe){if(_){var _t=_.scrollTrigger,ot=_.duration(),zt=_t.end-_t.start;ae=_t.start+zt*ae/ot,we=_t.start+zt*we/ot}I.refresh(!1,!1,{start:wx(ae,le&&!!I._startClamp),end:wx(we,le&&!!I._endClamp)},Fe),I.update()},I.adjustPinSpacing=function(ae){if(L&&ae){var we=L.indexOf(w.d)+1;L[we]=parseFloat(L[we])+ae+Rn,L[1]=parseFloat(L[1])+ae+Rn,Qa(L)}},I.disable=function(ae,we){if(ae!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,we||q&&q.pause(),Q=0,ye&&(ye.uncache=1),J&&Dn(s,"refreshInit",J),F&&(F.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!R)){for(var le=pt.length;le--;)if(pt[le].scroller===P&&pt[le]!==I)return;Dn(P,"resize",Nc),R||Dn(P,"scroll",$a)}},I.kill=function(ae,we){I.disable(ae,we),q&&!we&&q.kill(),l&&delete Pm[l];var le=pt.indexOf(I);le>=0&&pt.splice(le,1),le===vi&&Hd>0&&vi--,le=0,pt.forEach(function(Fe){return Fe.scroller===I.scroller&&(le=1)}),le||yi||jr||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ae&&i.revert({kill:!1}),we||i.kill()),tt&&[tt,se,G,Ae].forEach(function(Fe){return Fe.parentNode&&Fe.parentNode.removeChild(Fe)}),zc===I&&(zc=0),d&&(ye&&(ye.uncache=1),le=0,pt.forEach(function(Fe){return Fe.pin===d&&le++}),le||(ye.spacer=0)),n.onKill&&n.onKill(I)},pt.push(I),I.enable(!1,!1),_e&&_e(I),i&&i.add&&!Ne){var oe=I.update;I.update=function(){I.update=oe,ut.cache++,be||De||I.refresh()},ze.delayedCall(.01,I.update),Ne=.01,be=De=0}else I.refresh();d&&Lw()},s.register=function(n){return Za||(ze=n||Xx(),Wx()&&window.document&&s.enable(),Za=Ic),Za},s.defaults=function(n){if(n)for(var i in n)Nd[i]=n[i];return Nd},s.disable=function(n,i){Ic=0,pt.forEach(function(o){return o[i?"kill":"disable"](n)}),Dn(mt,"wheel",$a),Dn(Rt,"scroll",$a),clearInterval(Cd),Dn(Rt,"touchcancel",ks),Dn(At,"touchstart",ks),Dd(Dn,Rt,"pointerdown,touchstart,mousedown",Ax),Dd(Dn,Rt,"pointerup,touchend,mouseup",Rx),Wd.kill(),Id(Dn);for(var r=0;r<ut.length;r+=3)Ld(Dn,ut[r],ut[r+1]),Ld(Dn,ut[r],ut[r+2])},s.enable=function(){if(mt=window,Rt=document,Gi=Rt.documentElement,At=Rt.body,ze){if(Hc=ze.utils.toArray,Uc=ze.utils.clamp,Rm=ze.core.context||ks,ym=ze.core.suppressOverwrites||ks,Nm=mt.history.scrollRestoration||"auto",Im=mt.pageYOffset||0,ze.core.globals("ScrollTrigger",s),At){Ic=1,Ka=document.createElement("div"),Ka.style.height="100vh",Ka.style.position="absolute",tv(),ww(),on.register(ze),s.isTouch=on.isTouch,Qr=on.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Am=on.isTouch===1,Ln(mt,"wheel",$a),Lm=[mt,Rt,Gi,At],ze.matchMedia?(s.matchMedia=function(h){var u=ze.matchMedia(),f;for(f in h)u.add(f,h[f]);return u},ze.addEventListener("matchMediaInit",function(){jx(),zm()}),ze.addEventListener("matchMediaRevert",function(){return Qx()}),ze.addEventListener("matchMedia",function(){Io(0,1),Fo("matchMedia")}),ze.matchMedia().add("(orientation: portrait)",function(){return bm(),bm})):console.warn("Requires GSAP 3.11.0 or later"),bm(),Ln(Rt,"scroll",$a);var n=At.hasAttribute("style"),i=At.style,r=i.borderTopStyle,o=ze.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=_r(At),xn.m=Math.round(a.top+xn.sc())||0,ni.m=Math.round(a.left+ni.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),Cd=setInterval(Ix,250),ze.delayedCall(.5,function(){return Pd=0}),Ln(Rt,"touchcancel",ks),Ln(At,"touchstart",ks),Dd(Ln,Rt,"pointerdown,touchstart,mousedown",Ax),Dd(Ln,Rt,"pointerup,touchend,mouseup",Rx),wm=ze.utils.checkPrefix("transform"),Vd.push(wm),Za=si(),Wd=ze.delayedCall(.2,Io).pause(),Ja=[Rt,"visibilitychange",function(){var h=mt.innerWidth,u=mt.innerHeight;Rt.hidden?(bx=h,Tx=u):(bx!==h||Tx!==u)&&Nc()},Rt,"DOMContentLoaded",Io,mt,"load",Io,mt,"resize",Nc],Id(Ln),pt.forEach(function(h){return h.enable(0,1)}),l=0;l<ut.length;l+=3)Ld(Dn,ut[l],ut[l+1]),Ld(Dn,ut[l],ut[l+2])}else if(Rt){var c=function h(){s.enable(),Rt.removeEventListener("DOMContentLoaded",h)};Rt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Sm=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Cd)||(Cd=i)&&setInterval(Ix,i),"ignoreMobileResize"in n&&(Am=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Id(Dn)||Id(Ln,n.autoRefreshEvents||"none"),Hx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=_i(n),o=ut.indexOf(r),a=Uo(r);~o&&ut.splice(o,a?6:2),i&&(a?Ss.unshift(mt,i,At,i,Gi,i):Ss.unshift(r,i))},s.clearMatchMedia=function(n){pt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Vi(n)?_i(n):n).getBoundingClientRect(),a=o[r?Do:Lo]*i||0;return r?o.right-a>0&&o.left+a<mt.innerWidth:o.bottom-a>0&&o.top+a<mt.innerHeight},s.positionInViewport=function(n,i,r){Vi(n)&&(n=_i(n));var o=n.getBoundingClientRect(),a=o[r?Do:Lo],l=i==null?a/2:i in qd?qd[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/mt.innerWidth:(o.top+l)/mt.innerHeight},s.killAll=function(n){if(pt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Oo.killAll||[];Oo={},i.forEach(function(r){return r()})}},s})();dt.version="3.15.1";dt.saveStyles=function(s){return s?Hc(s).forEach(function(e){if(e&&e.style){var t=Hi.indexOf(e);t>=0&&Hi.splice(t,5),Hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ze.core.getCache(e),Rm())}}):Hi};dt.revert=function(s,e){return zm(!s,e)};dt.create=function(s,e){return new dt(s,e)};dt.refresh=function(s){return s?Nc(!0):(Za||dt.register())&&Io(!0)};dt.update=function(s){return++ut.cache&&xr(s===!0?2:0)};dt.clearScrollMemory=ev;dt.maxScroll=function(s,e){return zs(s,e?ni:xn)};dt.getScrollFunc=function(s,e){return mr(_i(s),e?ni:xn)};dt.getById=function(s){return Pm[s]};dt.getAll=function(){return pt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};dt.isScrolling=function(){return!!ss};dt.snapDirectional=km;dt.addEventListener=function(s,e){var t=Oo[s]||(Oo[s]=[]);~t.indexOf(e)||t.push(e)};dt.removeEventListener=function(s,e){var t=Oo[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};dt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=ze.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(m){u.length||d.restart(!0),u.push(m.trigger),f.push(m),r<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&ri(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return ri(r)&&(r=r(),Ln(dt,"refresh",function(){return r=e.batchMax()})),Hc(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(dt.create(c))}),t};var Fx=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Em=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(on.isTouch?" pinch-zoom":""):"none",e===Gi&&s(At,t)},Bd={auto:1,scroll:1},Bw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||ze.core.getCache(r),a=si(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==At&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Bd[(l=is(r)).overflowY]||Bd[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Uo(r)&&(Bd[(l=is(r)).overflowY]||Bd[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},iv=function(e,t,n,i){return on.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Bw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ln(Rt,on.eventTypes[0],kx,!1,!0)},onDisable:function(){return Dn(Rt,on.eventTypes[0],kx,!0)}})},kw=/(input|label|select|textarea)/i,Bx,kx=function(e){var t=kw.test(e.target.tagName);(t||Bx)&&(e._gsapAllow=!0,Bx=t)},zw=function(e){Po(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=_i(e.target)||Gi,h=ze.core.globals().ScrollSmoother,u=h&&h.get(),f=Qr&&(e.content&&_i(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=mr(c,xn),m=mr(c,ni),x=1,g=(on.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,p=0,v=ri(i)?function(){return i(a)}:function(){return i||2.8},T,y,b=iv(c,e.type,!0,r),M=function(){return y=!1},_=ks,S=ks,A=function(){l=zs(c,xn),S=Uc(Qr?1:0,l),n&&(_=Uc(0,zs(c,ni))),T=No},w=function(){f._gsap.y=Dc(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(M);var $=Dc(a.deltaY/2),X=S(d.v-$);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var I=Dc((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",d.cacheID=ut.cache,xr()}return!0}d.offset&&w(),y=!0},P,N,R,U,H=function(){A(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return f&&ze.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return Qr&&k.type==="touchmove"&&D(k)||x>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=x;x=Dc((mt.visualViewport&&mt.visualViewport.scale||1)/g),P.pause(),k!==x&&Em(c,x>1.01?!0:n?!1:"x"),N=m(),R=d(),A(),T=No},e.onRelease=e.onGestureStart=function(k,$){if(d.offset&&w(),!$)U.restart(!0);else{ut.cache++;var X=v(),I,J;n&&(I=m(),J=I+X*.05*-k.velocityX/.227,X*=Fx(m,I,J,zs(c,ni)),P.vars.scrollX=_(J)),I=d(),J=I+X*.05*-k.velocityY/.227,X*=Fx(d,I,J,zs(c,xn)),P.vars.scrollY=S(J),P.invalidate().duration(X).play(.01),(Qr&&P.vars.scrollY>=l||I>=l-1)&&ze.to({},{onUpdate:H,duration:X})}o&&o(k)},e.onWheel=function(){P._ts&&P.pause(),si()-p>1e3&&(T=0,p=si())},e.onChange=function(k,$,X,I,J){if(No!==T&&A(),$&&n&&m(_(I[2]===$?N+(k.startX-k.x):m()+$-I[1])),X){d.offset&&w();var pe=J[2]===X,Me=pe?R+k.startY-k.y:d()+X-J[1],V=S(Me);pe&&Me!==V&&(R+=V-Me),d(V)}(X||$)&&xr()},e.onEnable=function(){Em(c,n?!1:"x"),dt.addEventListener("refresh",H),Ln(mt,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),b.enable()},e.onDisable=function(){Em(c,!0),Dn(mt,"resize",H),dt.removeEventListener("refresh",H),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new on(e),a.iOS=Qr,Qr&&!d()&&d(1),Qr&&ze.ticker.add(ks),U=a._dc,P=ze.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:nv(d,d(),function(){return P.pause()})},onUpdate:xr,onComplete:U.vars.onComplete}),a};dt.sort=function(s){if(ri(s))return pt.sort(s);var e=mt.pageYOffset||0;return dt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+mt.innerHeight}),pt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};dt.observe=function(s){return new on(s)};dt.normalizeScroll=function(s){if(typeof s>"u")return xi;if(s===!0&&xi)return xi.enable();if(s===!1){xi&&xi.kill(),xi=s;return}var e=s instanceof on?s:zw(s);return xi&&xi.target===e.target&&xi.kill(),Uo(e.target)&&(xi=e),e};dt.core={_getVelocityProp:Rd,_inputObserver:iv,_scrollers:ut,_proxies:Ss,bridge:{ss:function(){ss||Fo("scrollStart"),ss=si()},ref:function(){return ii}}};Xx()&&ze.registerPlugin(dt);var Gc,Wc,sv=typeof Symbol=="function"?Symbol():"_split",Vm,Hw=()=>Vm||Jd.register(window.gsap),rv=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Xc=s=>s?typeof s=="string"?Xc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...Xc(t)):e.push(t),e),[]):[s]:[],ov=s=>Xc(s).filter(e=>e&&e.nodeType===1),$d=[],Hm=function(){},Vw={add:s=>s()},Gw=/\s+/g,av=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Zd={left:0,top:0,width:0,height:0},Ww=(s,e)=>{for(;++e<s.length&&s[e]===Zd;);return s[e]||Zd},lv=({element:s,html:e,ariaL:t,ariaH:n})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},cv=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||$d),n=s.length,i,r,o,a;if(t.size)for(;--n>-1;){r=s[n];for(o of t)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},hv=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),el=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),Gm=(s,e,t)=>{let n=e[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=e,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let u=document.createElement(i),f=t.length+1;return n&&(u.className=n+(l?" "+n+f:"")),o&&u.style.setProperty("--"+s,f+""),r!=="none"&&u.setAttribute("aria-hidden","true"),i!=="span"&&(u.style.position="relative",u.style.display=a),u.textContent=h,t.push(u),u};return l&&(n=n.replace("++","")),c.collection=t,c},Xw=(s,e,t,n)=>{let i=Gm("line",t,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},uv=(s,e,t,n,i,r,o,a,l,c)=>{var h;let u=Array.from(s.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:m=!0,prepareText:x}=e,g=s.getBoundingClientRect(),p=g,v=!m&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",T=r&&c&&window.getComputedStyle(s).direction==="rtl",y=0,b=t.collection,M,_,S,A,w,D,P,N,R,U,H,k,$,X,I,J,pe,Me;for(typeof d=="object"?(S=d.delimiter||d,_=d.replaceWith||""):_=d===""?"":d||" ",M=_!==" ";f<u.length;f++)if(A=u[f],A.nodeType===3){for(I=A.textContent||"",m?I=I.replace(Gw," "):v&&(I=I.replace(/\n/g,_+`
`)),x&&(I=x(I,s)),A.textContent=I,w=_||S?I.split(S||_):I.match(a)||$d,pe=w[w.length-1],N=M?pe.slice(-1)===" ":!pe,pe||w.pop(),p=g,P=M?w[0].charAt(0)===" ":!w[0],P&&el(" ",s,A),w[0]||w.shift(),cv(w,l),r&&c||(A.textContent=""),R=1;R<=w.length;R++)if(J=w[R-1],!m&&v&&J.charAt(0)===`
`&&((h=A.previousSibling)==null||h.remove(),el(document.createElement("br"),s,A),J=J.slice(1)),!m&&J==="")el(_,s,A);else if(J===" ")s.insertBefore(document.createTextNode(" "),A);else{if(M&&J.charAt(0)===" "&&el(" ",s,A),y&&R===1&&!P&&b.indexOf(y.parentNode)>-1?(D=b[b.length-1],D.appendChild(document.createTextNode(n?"":J))):(D=t(n?"":J),el(D,s,A),y&&R===1&&!P&&D.insertBefore(y,D.firstChild)),n){if(H=rv?cv([...rv.segment(J)].map(V=>V.segment),l):J.match(a)||$d,l){let V=J.match(l);V&&V.some(Y=>H.indexOf(Y)<0)&&(H=J.match(a)||$d)}for(Me=0;Me<H.length;Me++)D.appendChild(H[Me]===" "?document.createTextNode(" "):n(H[Me]))}if(r&&c){if(I=A.textContent=I.substring(J.length+1,I.length),U=D.getBoundingClientRect(),U.top>p.top&&(T?U.left>=p.left:U.left<=p.left)){for(k=s.cloneNode(),$=s.childNodes[0];$&&$!==D;)X=$,$=$.nextSibling,k.appendChild(X);s.parentNode.insertBefore(k,s),i&&hv(k)}p=U}(R<w.length||N)&&el(R>=w.length?" ":M&&J.slice(-1)===" "?" "+_:_,s,A)}s.removeChild(A),y=0}else A.nodeType===1&&(o&&o.indexOf(A)>-1?(b.indexOf(A.previousSibling)>-1&&b[b.length-1].appendChild(A),y=A):(uv(A,e,t,n,i,r,o,a,l,!0),y=0),i&&hv(A))},dv=class fv{constructor(e,t){this.isSplit=!1,Hw(),this.elements=ov(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(r=>{var o;t.overwrite!==!1&&((o=r[sv])==null||o._data.orig.filter(({element:a})=>a===r).forEach(lv)),r[sv]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let r=n.length,o;for(;r--;){o=n[r];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},Hm(this),this.split(t)}split(e){return(this._ctx||Vw).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=t.indexOf("lines")>-1,u=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=u&&!f&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),x=m?new RegExp(m.source+"|"+av.source,"gu"):av,g=!!e.ignore&&ov(e.ignore),{orig:p,animTime:v,obs:T}=this._data,y;(u||f||h)&&(this.elements.forEach((b,M)=>{p[M]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let _=[],S=[],A=[],w=u?Gm("char",e,_):null,D=Gm("word",e,S),P,N,R,U;if(uv(b,e,D,w,d,i&&(h||d),g,x,m,!1),h){let H=Xc(b.childNodes),k=Xw(b,H,e,A),$,X=[],I=0,J=window.getComputedStyle(b).direction==="rtl",pe=H.map(Y=>Y.nodeType===1?Y.getBoundingClientRect():Zd),Me=Zd,V;for(P=0;P<H.length;P++)$=H[P],$.nodeType===1&&($.nodeName==="BR"?((!P||H[P-1].nodeName!=="BR")&&(X.push($),k(I,P+1)),I=P+1,Me=Ww(pe,P)):(V=pe[P],P&&V.top>Me.top&&(J?V.left+V.width>Me.left+1:V.left<Me.left+Me.width-1)&&(k(I,P),I=P),Me=V));I<P&&k(I,P),X.forEach(Y=>{var ue;return(ue=Y.parentNode)==null?void 0:ue.removeChild(Y)})}if(!f){for(P=0;P<S.length;P++)if(N=S[P],u||!N.nextSibling||N.nextSibling.nodeType!==3)if(r&&!h){for(R=document.createElement("span"),R.style.whiteSpace="nowrap";N.firstChild;)R.appendChild(N.firstChild);N.replaceWith(R)}else N.replaceWith(...N.childNodes);else U=N.nextSibling,U&&U.nodeType===3&&(U.textContent=(N.textContent||"")+(U.textContent||""),N.remove());S.length=0,b.normalize()}this.lines.push(...A),this.words.push(...S),this.chars.push(..._)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let M=b.cloneNode();return b.replaceWith(M),M.appendChild(b),b.className&&(M.className=b.className.trim().split(" ").map(_=>_+"-mask").join(" ")),M.style.overflow="clip",M.style.verticalAlign="top",M}))),this.isSplit=!0,Wc&&h&&a&&Wc.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),h&&a&&this.elements.forEach((b,M)=>{p[M].width=b.offsetWidth,T&&T.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),Wc?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(lv),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new fv(e,t)}static register(e){Gc=Gc||e||window.gsap,Gc&&(Xc=Gc.utils.toArray,Hm=Gc.core.context||Hm),!Vm&&window.innerWidth>0&&(Wc=document.fonts,Vm=!0)}};dv.version="3.15.1";var Jd=dv;var pv="1.3.28";function _v(s,e,t){return Math.max(s,Math.min(e,t))}function qw(s,e,t){return(1-t)*s+t*e}function Yw(s,e,t,n){return qw(s,e,1-Math.exp(-t*n))}function $w(s,e){return(s%e+e)%e}var Zw=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;let t=_v(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Yw(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Jw(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var Kw=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"wrapper");Ve(this,"content");Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Jw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xv=class{constructor(){Ve(this,"events",{})}emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Qw=100/6,eo={passive:!1};function mv(s,e){return s===1?Qw:s===2?e:1}var jw=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"element");Ve(this,"options");Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new xv);Ve(this,"onTouchStart",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Ve(this,"onTouchMove",s=>{let{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Ve(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Ve(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s,i=mv(n,this.window.width),r=mv(n,this.window.height);e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,eo),this.element.addEventListener("touchstart",this.onTouchStart,eo),this.element.addEventListener("touchmove",this.onTouchMove,eo),this.element.addEventListener("touchend",this.onTouchEnd,eo)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,eo),this.element.removeEventListener("touchstart",this.onTouchStart,eo),this.element.removeEventListener("touchmove",this.onTouchMove,eo),this.element.removeEventListener("touchend",this.onTouchEnd,eo)}},gv=s=>Math.min(1,1.001-2**(-10*s)),vv=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:m=1,autoResize:x=!0,prevent:g,virtualScroll:p,overscroll:v=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:S=_,stopInertiaOnNavigate:A=!1,respectReducedMotion:w=!0}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"_rafId",null);Ve(this,"_isDraggingSelection",!1);Ve(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ve(this,"isTouching");Ve(this,"isIos");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new Zw);Ve(this,"emitter",new xv);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Ve(this,"onClick",s=>{let e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){let n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Ve(this,"onPointerDown",s=>{s.button===1&&this.reset()});Ve(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=t;this.options.gestureOrientation==="both"?u=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(u=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",s=>{let e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=pv,window.lenis||(window.lenis={}),window.lenis.version=pv,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=gv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:m,autoResize:x,prevent:g,virtualScroll:p,overscroll:v,autoRaf:T,anchors:y,autoToggle:b,allowNestedScroll:M,naiveDimensions:S,stopInertiaOnNavigate:A,respectReducedMotion:w},this.dimensions=new Kw(s,e,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new jw(t,{touchMultiplier:d,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.options.autoToggle&&this.rootElement.removeEventListener("transitionend",this.onTransitionEnd),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;let t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;let n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-r.right,t.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(i?t=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=s,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}let x=m.getBoundingClientRect(),g=getComputedStyle(m),p=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),v=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?x.left:x.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(T)?0:T)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=_v(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=gv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,x)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),i&&(this.targetScroll=m),x||this.emit(),x&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,u,f,d,m;if(n-(i.time??0)>2e3){i.time=Date.now();let M=window.getComputedStyle(s);if(i.computedStyle=M,r=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),h=["auto"].includes(M.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;u=s.scrollWidth,f=s.scrollHeight,d=s.clientWidth,m=s.clientHeight,a=u>d,l=f>m,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=m,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,m=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let x=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",g,p,v,T,y,b;if(x==="horizontal")g=Math.round(s.scrollLeft),p=u-d,v=e,T=r,y=a,b=c;else if(x==="vertical")g=Math.round(s.scrollTop),p=f-m,v=t,T=o,y=l,b=h;else return!1;return!b&&(g>=p||g<=0)?!0:(v>0?g<p:g>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?$w(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var qc=new B;function rs(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;qc.copy(e),qc[n]=0,qc.normalize();let c=.5*o/(o+a),h=1-qc.angleTo(s)/l;return Math.sign(qc[t])===1?h*c:a/(o+a)+c+c*(1-h)}var yn=class s extends Fn{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new B,c=new B,h=new B(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,x=new B,g=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),d[v+0]=rs(x,c,"z","y",r,n),d[v+1]=1-rs(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[v+0]=1-rs(x,c,"z","y",r,n),d[v+1]=1-rs(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[v+0]=1-rs(x,c,"x","z",r,e),d[v+1]=rs(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-rs(x,c,"x","z",r,e),d[v+1]=1-rs(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-rs(x,c,"x","y",r,e),d[v+1]=1-rs(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[v+0]=rs(x,c,"x","y",r,e),d[v+1]=1-rs(x,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function to(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Qd(s,e,t=5){let n=document.createElement("canvas");n.width=n.height=s;let i=n.getContext("2d"),r=i.createImageData(s,s),o=to(e),a=[];for(let l=0;l<t;l++){let c=4<<l,h=new Float32Array((c+1)*(c+1));for(let u=0;u<h.length;u++)h[u]=o();for(let u=0;u<=c;u++)h[u*(c+1)+c]=h[u*(c+1)],h[c*(c+1)+u]=h[u];a.push([c,h])}for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0,u=.5,f=0;for(let[x,g]of a){let p=c/s*x,v=l/s*x,T=p|0,y=v|0,b=p-T,M=v-y,_=b*b*(3-2*b),S=M*M*(3-2*M),A=x+1,w=g[y*A+T]*(1-_)+g[y*A+T+1]*_,D=g[(y+1)*A+T]*(1-_)+g[(y+1)*A+T+1]*_;h+=(w*(1-S)+D*S)*u,f+=u,u*=.5}let d=(l*s+c)*4,m=h/f*255;r.data[d]=r.data[d+1]=r.data[d+2]=m,r.data[d+3]=255}return i.putImageData(r,0,0),n}function yv(s,e=2.5){let t=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,t,n).data,r=document.createElement("canvas");r.width=t,r.height=n;let o=r.getContext("2d"),a=o.createImageData(t,n),l=a.data,c=(h,u)=>i[((u+n)%n*t+(h+t)%t)*4]/255;for(let h=0;h<n;h++)for(let u=0;u<t;u++){let f=(c(u+1,h)-c(u-1,h))*e,d=(c(u,h+1)-c(u,h-1))*e,m=Math.hypot(f,d,1),x=(h*t+u)*4;l[x]=(-f/m*.5+.5)*255,l[x+1]=(d/m*.5+.5)*255,l[x+2]=(1/m*.5+.5)*255,l[x+3]=255}return o.putImageData(a,0,0),r}function Kd(s,e){let t=new On(s);return t.wrapS=t.wrapT=Mi,t.anisotropy=8,e&&(t.colorSpace=Vt),t}function Xm({w:s=1024,h:e=512,rows:t=4,seed:n=1}={}){let i=to(n),r=document.createElement("canvas"),o=document.createElement("canvas"),a=document.createElement("canvas");for(let p of[r,o,a])p.width=s,p.height=e;let l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d");l.fillStyle="#7a5a3c",l.fillRect(0,0,s,e),c.fillStyle="#1a1a1a",c.fillRect(0,0,s,e),h.fillStyle="#f2f2f2",h.fillRect(0,0,s,e);let u=e/t,f=5;for(let p=0;p<t;p++){let v=-i()*120;for(;v<s;){let T=110+i()*150,y=v+f/2,b=p*u+f/2,M=T-f,_=u-f,S=30+i()*8,A=36+i()*14,w=60+i()*12,D=l.createLinearGradient(0,b,0,b+_);D.addColorStop(0,`hsl(${S},${A}%,${w+4}%)`),D.addColorStop(.75,`hsl(${S},${A}%,${w}%)`),D.addColorStop(1,`hsl(${S-4},${A-6}%,${w-12}%)`),l.fillStyle=D,Wm(l,y,b,M,_,7),l.fill();let P=150+i()*60;for(let N=0;N<6;N++){let R=Math.min(255,P*(.55+N*.09))|0;c.fillStyle=`rgb(${R},${R},${R})`,Wm(c,y+N*1.6,b+N*1.6,M-N*3.2,_-N*3.2,7),c.fill()}h.fillStyle=`rgb(${200+i()*40|0},${200+i()*40|0},${200+i()*40|0})`,Wm(h,y,b,M,_,7),h.fill();for(let N=0;N<2;N++){let R=y+i()*M,U=i()<.5?b+i()*5:b+_-i()*5,H=3+i()*6;c.fillStyle="#5a5a5a",l.fillStyle=`hsla(${S},${A}%,${w-10}%,.7)`;for(let k of[c,l]){k.beginPath();for(let $=0;$<7;$++){let X=H*(.5+i()*.7),I=$/7*Math.PI*2;k.lineTo(R+Math.cos(I)*X*1.6,U+Math.sin(I)*X*.7)}k.closePath(),k.fill()}}v+=T}}let d=Qd(128,n+7,5),m=Qd(256,n+13,4);l.globalCompositeOperation="multiply",l.globalAlpha=.35,l.drawImage(d,0,0,s,e),l.globalAlpha=.25,l.drawImage(m,0,0,s,e),l.globalCompositeOperation="overlay",l.globalAlpha=.25,l.drawImage(m,0,0,s/2,e/2),l.drawImage(m,s/2,0,s/2,e/2),l.drawImage(m,0,e/2,s/2,e/2),l.drawImage(m,s/2,e/2,s/2,e/2),l.globalCompositeOperation="source-over",l.globalAlpha=1,c.globalCompositeOperation="overlay",c.globalAlpha=.6,c.drawImage(m,0,0,s,e),c.globalAlpha=1,c.globalCompositeOperation="source-over";let x=l.getImageData(0,0,s,e),g=c.getImageData(0,0,s,e);for(let p=0;p<s*e*.008;p++){let v=(i()*s*e|0)*4,T=.7+i()*.2;x.data[v]*=T,x.data[v+1]*=T,x.data[v+2]*=T,g.data[v]=g.data[v+1]=g.data[v+2]=g.data[v]*.6}return l.putImageData(x,0,0),c.putImageData(g,0,0),{map:Kd(r,!0),normalMap:Kd(yv(o,3.2),!1),roughnessMap:Kd(a,!1)}}function Sv(s=4){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=Qd(128,s,4),r=n.createImageData(512,512),o=i.getContext("2d").getImageData(0,0,128,128).data;for(let a=0;a<512;a++)for(let l=0;l<512;l++){let c=o[((a>>2&127)*128+(l>>2&127))*4]/255,h=.5+.5*Math.sin((a+c*70)*.19+Math.sin(l*.02)*2),u=(a*512+l)*4,f=(h*.75+Math.random()*.25)*255;r.data[u]=r.data[u+1]=r.data[u+2]=f,r.data[u+3]=255}return n.putImageData(r,0,0),Kd(yv(t,1.6),!1)}function Mv(s=9){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=to(s);n.fillStyle="#e9e2cf",n.fillRect(0,0,512,512),n.globalCompositeOperation="multiply",n.globalAlpha=.6,n.drawImage(Qd(64,s,4),0,0,512,512),n.globalAlpha=1;for(let o=0;o<9;o++)n.fillStyle="rgba(120,115,110,.35)",n.beginPath(),n.ellipse(i()*512,i()*512,30+i()*80,20+i()*60,i()*3,0,7),n.fill();n.globalCompositeOperation="source-over";for(let o=0;o<70;o++){let a=i()*512,l=i()*512,c=2+i()*i()*22;n.fillStyle="rgba(90,85,80,.35)",n.beginPath(),n.arc(a,l,c,0,7),n.fill(),n.strokeStyle="rgba(255,250,235,.35)",n.lineWidth=1.2,n.beginPath(),n.arc(a-c*.15,l-c*.15,c,Math.PI*.9,Math.PI*1.8),n.stroke()}let r=new On(t);return r.colorSpace=Vt,r}function Wm(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+n,t,r),s.closePath()}var an={night:660019,lapis:1916863,faience:3134406,gold:15316044,sand:14267266,stone:13146723,terracotta:11883311,ink:724770},hn=[28,23.5,19,14.5,10,5.5],Si=2.6,Hs=2.25,os=s=>s===0?0:s*Si,as=(s,e={})=>new Lr({color:s,roughness:.85,metalness:0,...e}),Ci=(s,e=2.6)=>new Tn({color:new Le(s).multiplyScalar(e),toneMapped:!1});function eA(s,e=1024,t=512){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d"),r=to(s);i.fillStyle="#000",i.fillRect(0,0,e,t),i.strokeStyle="#fff",i.fillStyle="#fff",i.lineWidth=3,i.lineCap="round";for(let l=0;l<6;l++){let c=r()*e,h=t*(.2+r()*.6);i.beginPath(),i.moveTo(c,h);for(let u=0;u<5;u++)u%2?h=Math.max(20,Math.min(t-20,h+(r()-.5)*200)):c+=(r()-.3)*260,i.lineTo(c,h);i.stroke(),i.beginPath(),i.arc(c,h,8,0,Math.PI*2),i.fill()}i.font="bold 48px monospace";let o=["{ }","</>","=>","::","&&","[ ]","#",";","01","\u03BB"];for(let l=0;l<4;l++)i.fillText(o[r()*o.length|0],r()*(e-100),60+r()*(t-80));let a=new On(n);return a.wrapS=a.wrapT=Mi,a}var tl=(s,e,t)=>{let n={};for(let i in s){let r=s[i].clone();r.repeat.set(e,t),r.needsUpdate=!0,n[i]=r}return n};function bv(s,{w:e=512,h:t=160,font:n="700 64px Unbounded, sans-serif",fg:i="#f6ead2",bg:r="rgba(10,18,51,.92)",border:o="#e9b44c",radius:a=70,sub:l}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let h=c.getContext("2d");return((f,d,m,x,g)=>{h.beginPath(),h.moveTo(f+g,d),h.arcTo(f+m,d,f+m,d+x,g),h.arcTo(f+m,d+x,f,d+x,g),h.arcTo(f,d+x,f,d,g),h.arcTo(f,d,f+m,d,g),h.closePath()})(6,6,e-12,t-12,Math.min(a,(t-12)/2)),h.fillStyle=r,h.fill(),h.lineWidth=6,h.strokeStyle=o,h.stroke(),h.fillStyle=i,h.textAlign="center",h.textBaseline="middle",h.font=n,h.fillText(s,e/2,l?t*.4:t/2+2),l&&(h.font='500 30px "Instrument Sans", sans-serif',h.globalAlpha=.75,h.fillText(l,e/2,t*.72)),c}function Tv(s,e,t,n="high"){let i={updaters:[],props:{},clickables:[]},r=_=>i.updaters.push(_),o=n==="high",a=new B(-.55,.32,-.77).normalize(),l=new Pt({side:Bn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Le(132378)},mid:{value:new Le(857927)},hor:{value:new Le(4862290)},moonDir:{value:a}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
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
        gl_FragColor = vec4(c,1.); }`});s.add(new Te(new _n(600,48,24),l));{let S=new Float32Array(9600),A=new Float32Array(3200),w=to(7);for(let N=0;N<3200;N++){let R=w()*Math.PI*2,U=.04+w()*.96,H=Math.sqrt(1-U*U);S.set([Math.cos(R)*H*520,U*520,Math.sin(R)*H*520],N*3),A[N]=w()*6.28}let D=new Yt;D.setAttribute("position",new Un(S,3)),D.setAttribute("ph",new Un(A,1));let P=new Pt({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},px:{value:Math.min(devicePixelRatio,2)}},vertexShader:"attribute float ph; uniform float t,px; varying float a; varying vec3 col; void main(){ a = .4+.6*sin(t*1.7+ph*3.); float s = fract(ph*7.13); col = mix(vec3(1.,.93,.82), vec3(.8,.88,1.), fract(ph*3.7)); gl_PointSize = (0.9+s*s*2.6)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying float a; varying vec3 col; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(col, a*smoothstep(.5,.0,d)); }"});s.add(new ho(D,P)),r(N=>P.uniforms.t.value=N)}{let _=new Te(new _n(15,48,48),new Tn({map:Mv(),color:new Le(1.35,1.3,1.2),toneMapped:!1,fog:!1}));_.position.copy(a).multiplyScalar(300),_.rotation.y=1.2,s.add(_);let S=document.createElement("canvas");S.width=S.height=256;let A=S.getContext("2d"),w=A.createRadialGradient(128,128,14,128,128,128);w.addColorStop(0,"rgba(255,236,200,.5)"),w.addColorStop(.3,"rgba(150,165,255,.14)"),w.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=w,A.fillRect(0,0,256,256);let D=new Pr(new er({map:new On(S),transparent:!0,depthWrite:!1,fog:!1}));D.scale.setScalar(160),D.position.copy(_.position),s.add(D),_.userData.onClick="moon",i.clickables.push(_),i.props.moon=_}{let _=new Cr;_.add(new Te(new _n(50,32,16),l.clone()));let S=new Te(new _n(4,16,16),new Tn({color:new Le(3,3,2.6)}));S.position.copy(a).multiplyScalar(40),_.add(S);let A=new Ra(e);s.environment=A.fromScene(_,.04).texture,s.environmentIntensity=.55,A.dispose()}let c=new Ul(7438800,3811868,.55);s.add(c);let h=new Sa(13358335,2.3);h.position.copy(a).multiplyScalar(60).setY(48),h.position.x=-38,h.position.z=32,h.castShadow=!0,h.shadow.mapSize.set(o?4096:2048,o?4096:2048),Object.assign(h.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),h.shadow.bias=-4e-4,h.shadow.normalBias=.04,h.shadow.radius=3,s.add(h);let u=new Sa(16752234,.35);u.position.set(30,10,-20),s.add(u);let f=Xm({w:o?1024:512,h:o?512:256,rows:4,seed:11}),d=Xm({w:o?1024:512,h:o?1024:512,rows:8,seed:51}),m=Sv();m.repeat.set(70,70);{let _=new _s(900,900,220,220);_.rotateX(-Math.PI/2);let S=_.attributes.position;for(let P=0;P<S.count;P++){let N=S.getX(P),R=S.getZ(P),U=Math.hypot(N,R),H=Math.sin(N*.03+R*.012)*2.2+Math.sin(R*.045-N*.02)*1.4+Math.sin(N*.11+R*.03)*.3;H=H>0?H*1.25:H*.7,H*=Kn.smoothstep(U,26,90),H+=Kn.smoothstep(U,120,420)*14,S.setY(P,H-.02)}_.computeVertexNormals();let A=new Te(_,as(11108437,{normalMap:m,normalScale:new Ce(.55,.55),roughness:.97}));A.receiveShadow=!0,s.add(A);let w=tl(d,6,6),D=new Te(new tn(24,25,.3,64),as(10256996,{...w,roughness:1}));D.position.y=-.12,D.receiveShadow=!0,s.add(D)}{let _=new ga(1,2),S=_.attributes.position,A=to(21);for(let H=0;H<S.count;H++){let k=new B().fromBufferAttribute(S,H);k.multiplyScalar(.75+Math.sin(k.x*3.1)*.1+Math.cos(k.y*4.3+k.z)*.12),S.setXYZ(H,k.x,k.y*.65,k.z)}_.computeVertexNormals();let w=46,D=new ws(_,as(8216902,{...tl(f,.5,.5),roughness:1}),w),P=new lt,N=new hi,R=new B,U=new B;for(let H=0;H<w;H++){let k=A()*Math.PI*2,$=25+A()*45;Math.abs(Math.cos(k))<.25&&Math.sin(k)>0||(U.set(Math.cos(k)*$,-.15,Math.sin(k)*$),N.setFromEuler(new Yi(A(),A()*6,A())),R.setScalar(.3+A()*A()*1.8),P.compose(U,N,R),D.setMatrixAt(H,P))}D.castShadow=D.receiveShadow=!0,s.add(D)}for(let[_,S,A]of[[150,-260,34],[205,-300,46],[250,-270,26]]){let w=new Te(new $i(A,A*.95,4),as(3878984,{roughness:1}));w.rotation.y=Math.PI/4,w.position.set(_,A*.47+6,S),s.add(w)}let x=new Ct;s.add(x),i.pyramid=x;let g=Ci(an.faience,1);for(let _=0;_<hn.length;_++){let S=hn[_],A=as(16777215,{...tl(f,S/7,1),emissiveMap:(()=>{let N=eA(91+_*7);return N.repeat.set(S/14,1),N})(),emissive:new Le(4176046),emissiveIntensity:.18,normalScale:new Ce(1,1)}),w=as(15787220,{...tl(d,S/7,S/7)}),D=new Te(new Fn(S,Si,S),[A,A,w,w,A,A]);D.position.y=_*Si+Si/2,D.castShadow=D.receiveShadow=!0,x.add(D);let P=S/2;for(let[N,R,U,H]of[[S,.06,0,P],[S,.06,0,-P],[.06,S,P,0],[.06,S,-P,0]]){let k=new Te(new Fn(N,.05,R),g);k.position.set(U,(_+1)*Si+.01,H),x.add(k)}}let p=as(15259328,{...tl(d,.35,.12)});i.stairPath=[];for(let _=0;_<hn.length;_++){let A=Si/8,w=Hs/8,D=hn[_]/2,P=os(_);for(let N=0;N<8;N++){let R=new Te(new yn(2.6,A*(N+1),w+.01,1,.02),p);R.position.set(0,P+A*(N+1)/2,D+Hs-(N+.5)*w),R.castShadow=R.receiveShadow=!0,x.add(R)}for(let N of[-1.42,1.42]){let R=new B(N,P+.35,D+Hs),U=new B(N,P+Si+.35,D),H=R.distanceTo(U),k=new Te(new tn(.03,.03,H,8),Ci(N<0?an.faience:an.gold,.95));k.position.copy(R).add(U).multiplyScalar(.5),k.lookAt(U),k.rotateX(Math.PI/2),x.add(k)}i.stairPath.push(new B(0,P,D+Hs),new B(0,P+Si,D))}let v=new kt({color:15909466,metalness:1,roughness:.18,clearcoat:.6,clearcoatRoughness:.1,envMapIntensity:2.2,emissive:new Le(3810822),emissiveIntensity:.5}),T=new Te(new $i(2.3,3.2,4,1),v);T.rotation.y=Math.PI/4,T.position.set(0,6*Si+1.6,-.6),T.castShadow=!0,x.add(T),T.userData.onClick="cap",i.clickables.push(T),i.props.cap=T;let y=new As(16762726,5,20,1.6);y.position.set(0,6*Si+4.2,0),x.add(y),i.props.capLight=y;{let _=new Zi(i.stairPath.map($=>$.clone().add(new B(-1.42,.55,0))),!1,"centripetal",0),S=new Zi(i.stairPath.map($=>$.clone().add(new B(1.42,.55,0))),!1,"centripetal",0),A=36,w=new yn(.14,.14,.14,1,.03),D=new ws(w,Ci(an.faience,1.4),A),P=new ws(w,Ci(an.gold,1.3),A);x.add(D,P);let N=new lt,R=new hi,U=new B(1,1,1),H=new B,k=new Yi;i.packetBoost=0,r($=>{let X=.045+i.packetBoost*.25;i.packetBoost*=.97;for(let I=0;I<A;I++){let J=(I/A+$*X)%1;_.getPointAt(J,H),R.setFromEuler(k.set($*2+I,$+I,0)),N.compose(H,R,U),D.setMatrixAt(I,N),S.getPointAt(1-J,H),N.compose(H,R,U),P.setMatrixAt(I,N)}D.instanceMatrix.needsUpdate=P.instanceMatrix.needsUpdate=!0})}let b=new Pt({transparent:!0,depthWrite:!1,blending:ir,side:Zn,toneMapped:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float t; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ vec2 uv = vUv; float y = uv.y;
        float nn = n(vec2(uv.x*4., y*3.-t*3.2))*.6 + n(vec2(uv.x*9., y*7.-t*5.))*.4;
        float w = (1.-y)*.42 + .04; float d = abs(uv.x-.5 + (nn-.5)*.25*y);
        float f = smoothstep(w, w*.35, d) * smoothstep(1., .25, y + nn*.35) * smoothstep(0.,.08,y);
        vec3 c = mix(vec3(1.5,.5,.1), vec3(1.9,1.35,.7), smoothstep(.3,.9,f*(1.2-y)));
        gl_FragColor = vec4(c*f*.32, f*.85); }`});r(_=>b.uniforms.t.value=_);let M=new kt({color:9067051,metalness:.9,roughness:.35});for(let _ of[-4.6,4.6]){let S=hn[0]/2+3.2,A=new Te(new tn(.28,.36,2.2,16),as(16777215,{...tl(f,.3,.5)}));A.position.set(_,1.1,S),A.castShadow=!0,s.add(A);let w=new Te(new tn(.6,.3,.4,24,1,!0),M);w.material.side=Zn,w.position.set(_,2.35,S),s.add(w);let D=new Te(new Dr(.55,20),Ci(16734746,.7));D.rotation.x=-Math.PI/2,D.position.set(_,2.45,S),s.add(D);let P=new Ct;P.position.set(_,2.45,S),s.add(P);for(let I=0;I<3;I++){let J=new Te(new _s(1.1,1.8),b);J.position.y=.85,J.rotation.y=I/3*Math.PI,P.add(J)}let N=new As(16747068,6,12,1.8);N.position.set(_,3.4,S+.3),s.add(N);let R=30,U=new Float32Array(R*3),H=Array.from({length:R},()=>Math.random()),k=new Yt;k.setAttribute("position",new Un(U,3));let $=new ho(k,new co({color:new Le(3,1.4,.4),size:.06,transparent:!0,depthWrite:!1,blending:ir,toneMapped:!1}));$.position.set(_,2.6,S),s.add($);let X=Math.random()*10;r(I=>{let J=1+Math.sin(I*13+X)*.07+Math.sin(I*7.3+X)*.06;P.scale.set(1,J,1),N.intensity=5.5*J,P.rotation.y=Math.sin(I*.7+X)*.3;for(let pe=0;pe<R;pe++){let Me=(H[pe]+I*(.25+H[pe]*.3))%1;U[pe*3]=Math.sin(H[pe]*50+I)*.25*Me,U[pe*3+1]=Me*3,U[pe*3+2]=Math.cos(H[pe]*70+I)*.25*Me}k.attributes.position.needsUpdate=!0})}{let S=new Float32Array(1800),A=to(3);for(let D=0;D<600;D++)S.set([(A()-.5)*80,A()*22,(A()-.5)*80],D*3);let w=new Yt;w.setAttribute("position",new Un(S,3)),s.add(new ho(w,new co({color:16769712,size:.06,transparent:!0,opacity:.45,depthWrite:!1}))),r((D,P)=>{let N=w.attributes.position;for(let R=0;R<600;R++){let U=N.getX(R)+P*1.6;U>40&&(U=-40),N.setX(R,U),N.setY(R,N.getY(R)+Math.sin(D+R)*P*.15)}N.needsUpdate=!0})}return tA(i,x,t),i.update=(_,S,A)=>{for(let w of i.updaters)w(_,S,A)},i}function tA(s,e,t){let n=a=>s.updaters.push(a),i=a=>hn[a]/2+Hs/2,r=new Nl(t),o=new kt({color:14724682,metalness:1,roughness:.3,envMapIntensity:1.6});{let a=new Ct;a.position.set(-5.6,os(1),i(1)),e.add(a);let l=as(6175522,{roughness:.6}),c=new Te(new yn(1.5,.08,.8,2,.03),l);c.position.y=.72,c.castShadow=!0,a.add(c);for(let[y,b]of[[-.65,-.32],[.65,-.32],[-.65,.32],[.65,.32]]){let M=new Te(new tn(.03,.03,.72,8),l);M.position.set(y,.36,b),M.castShadow=!0,a.add(M)}let h=new kt({color:10133675,metalness:.9,roughness:.32}),u=new Te(new yn(.62,.025,.42,1,.01),h);u.position.set(0,.775,.05),a.add(u);let f=document.createElement("canvas");f.width=512,f.height=320;let d=f.getContext("2d");d.fillStyle="#0a1233",d.fillRect(0,0,512,320),d.font="28px monospace",[["#2fd3c6",'app.post("/hire",'],["#e9b44c","  auth, async (req,res)=>{"],["#f6ead2",'  const dev = "adham";'],["#f6ead2","  await db.save(dev);"],["#2fd3c6","  res.status(201)"],["#e9b44c","});"]].forEach(([y,b],M)=>{d.fillStyle=y,d.fillText(b,22,52+M*44)});let x=new On(f);x.colorSpace=Vt;let g=new Te(new _s(.58,.36),new Tn({map:x,color:13421772}));g.position.set(0,.98,-.148),g.rotation.x=-.18,a.add(g);let p=new Te(new yn(.62,.4,.015,1,.006),h);p.position.set(0,.98,-.16),p.rotation.x=-.18,a.add(p);let v=new As(8378623,1.2,2.2,2);v.position.set(0,1.05,.2),a.add(v);let T=new Te(new tn(.07,.06,.14,20),new kt({color:an.terracotta,roughness:.25,clearcoat:.8}));T.position.set(.55,.83,.15),a.add(T),a.rotation.y=.5,s.props.desk=a}{let a=new Ct;a.position.set(7.3,os(2)+2.95,i(2)+.25),e.add(a);let l=new kt({color:11044442,metalness:1,roughness:.38,envMapIntensity:1.2}),c=new Te(new Ji(1.2,.025,12,96),l),h=new Te(new Ji(2.4,.032,12,128),l);a.add(c,h);for(let T=0;T<4;T++){let y=new Te(new tn(.012,.012,4.8,6),l);y.rotation.z=T/4*Math.PI,a.add(y)}let u=new Te(new tn(.05,.07,2.95,12),l);u.position.y=-2.95/2,u.castShadow=!0,a.add(u);let f=new Te(new tn(.42,.5,.16,32),as(7166532,{roughness:.9}));f.position.y=-2.95+.08,f.castShadow=f.receiveShadow=!0,a.add(f);let d=new Te(new ga(.3,1),new kt({color:4176046,roughness:.15,metalness:.1,transmission:.4,thickness:.5,emissive:new Le(739909),emissiveIntensity:.8}));a.add(d);let m=["C++","Python","SQL","Java","Git"],x=["TypeScript","Node.js","PostgreSQL","Express","socket.io","Docker","React"],g=[],p=(T,y,b,M,_)=>{let S=new On(bv(T,{font:'600 52px "Instrument Sans", sans-serif',bg:"rgba(12,16,40,1)",border:"#b8935a",fg:"#efe4cc"}));S.colorSpace=Vt,S.anisotropy=8;let A=new Te(new _s(1,.31),new Tn({map:S,transparent:!0,color:14211288}));A.userData={a:b/M*Math.PI*2,r:y,dir:_,label:T.toLowerCase(),hl:0},a.add(A),g.push(A)};m.forEach((T,y)=>p(T,1.2,y,m.length,1)),x.forEach((T,y)=>p(T,2.4,y,x.length,-1));let v=0;n((T,y,b)=>{v+=y,d.rotation.set(T*.4,T*.6,0),c.rotation.z=v*.25,h.rotation.z=-v*.16;for(let M of g){let _=M.userData;_.hl=Math.max(0,_.hl-y);let S=Math.min(1,_.hl*2),A=_.a+v*(_.dir>0?.25:-.16);M.position.set(Math.cos(A)*_.r,Math.sin(A)*_.r,.08+S*.25),M.scale.setScalar(1+S*.45),M.material.color.setScalar(.85+S*.15),b&&M.quaternion.copy(b.quaternion)}}),s.props.stack=a,s.highlightSkill=T=>{let y=!1,b=T.toLowerCase();return g.forEach(M=>{let _=M.userData.label;(b===_||b.startsWith(_.replace(".js",""))||_.startsWith(b))&&(M.userData.hl=3,y=!0)}),y}}{let a=new Ct;a.position.set(-6.6,os(3),hn[3]/2+1.1),e.add(a);let l=new kt({color:1513503,metalness:.6,roughness:.35,clearcoat:.4}),c=new kt({color:9212057,metalness:1,roughness:.3});[{src:"assets/shots/title.jpg",x:-1.95,ry:.18},{src:"assets/shots/smarthabbit-dashboard.webp",x:0,ry:0},{src:"assets/shots/student-dashboard.webp",x:1.95,ry:-.18}].forEach((u,f)=>{var y,b;let d=u.canvas?new On(u.canvas):r.load(u.src);d.colorSpace=Vt,d.anisotropy=8;let m=new Ct;m.position.set(u.x,0,0),m.rotation.y=u.ry,a.add(m);let x=new Te(new yn(1.72,1.02,.07,3,.03),l);x.position.y=1.72,x.castShadow=!0,m.add(x);let g=new Te(new _s(1.62,.92),new Tn({map:d,color:10263708}));g.position.set(0,1.72,.037),m.add(g);let p=new Te(new yn(.09,1.2,.05,1,.02),c);p.position.set(0,.62,-.06),p.castShadow=!0,m.add(p);let v=new Te(new yn(.55,.03,.34,2,.012),c);v.position.set(0,.015,-.02),v.castShadow=v.receiveShadow=!0,m.add(v);let T=["capcom","smarthabbit","labtrack"][f];((y=s.props).screens||(y.screens={}))[T]=x,((b=s.props).screenPlanes||(b.screenPlanes={}))[T]=g,g.userData.onClick="screen",g.userData.key=T,s.clickables.push(g)}),s.props.work=a}{let a=new Ct;a.position.set(5.9,os(4)+1.2,i(4)-.2),a.rotation.y=-.15,a.scale.setScalar(.6),e.add(a);{let P=new Te(new tn(.45,.55,.22,32),new kt({color:2764088,metalness:.8,roughness:.35}));P.position.set(5.9,os(4)+.11,i(4)-.2),P.castShadow=P.receiveShadow=!0,e.add(P);let N=new Te(new Dr(.3,32),Ci(an.faience,.9));N.rotation.x=-Math.PI/2,N.position.set(5.9,os(4)+.225,i(4)-.2),e.add(N)}let l=new Te(new yn(.5,.5,.5,2,.06),Ci(an.faience,.9));l.position.set(-1.9,1.7,0);let c=new Te(new _n(.3,24,16),Ci(7310591,.9));c.position.set(-1.9,.3,0);let h=new Te(new Pl(.38),Ci(an.gold,1));h.position.set(.4,1,0),a.add(l,c,h);let u=new Zi([l.position,new B(-.8,1.8,.4),h.position]),f=new Zi([c.position,new B(-.8,.2,.4),h.position]),m=[[3134406,.35],[15316044,.6],[15764028,.85],[14698298,1.1]].map(([P,N],R)=>{let U=new Te(new Fn(.22,N,.22),Ci(P,.85));return U.position.set(1.4+R*.36,N/2+.1,0),a.add(U),U}),x=new Zi([h.position,new B(1.2,1.4,.2),new B(1.9,1.5,0)]),g=22,p=new _n(.05,8,6),v=new ws(p,Ci(an.faience,1.1),g),T=new ws(p,Ci(9414399,1.1),g),y=new ws(p,Ci(an.gold,1.1),g);a.add(v,T,y);for(let[P,N,R]of[["XGBoost \xB7 sensors",-1.9,2.25],["Isolation Forest \xB7 traffic",-1.9,-.25],["Decision fusion",.4,1.6],["4-tier risk",1.95,1.55]]){let U=new Pr(new er({map:new On(bv(P,{w:640,h:120,font:'600 42px "Instrument Sans", sans-serif',radius:60})),transparent:!0,toneMapped:!1}));U.material.map.colorSpace=Vt,U.material.color.setScalar(.8),U.material.toneMapped=!0,U.scale.set(1.6,.3,1),U.position.set(N,R,.1),a.add(U)}let b=new lt,M=new B;a.userData.threat=0;let _=0,S=0,A=new Le(9414399).multiplyScalar(1.1),w=new Le(16730683).multiplyScalar(1.5),D=new Le(an.gold).multiplyScalar(1);n((P,N)=>{_+=(a.userData.threat-_)*Math.min(1,N*4),S+=N*(.22+_*.6),T.material.color.copy(A).lerp(w,_),c.material.color.copy(A).lerp(w,_),c.scale.setScalar(1+_*.5+Math.sin(P*12)*.1*_),h.material.color.copy(D).lerp(w,_*.7),l.rotation.set(P,P*.7,0),h.rotation.y=P*1.4,h.scale.setScalar(1+Math.sin(P*4)*.06);for(let R=0;R<g;R++){let U=(R/g+P*.22)%1;u.getPointAt(U,M),b.makeTranslation(M.x,M.y,M.z),v.setMatrixAt(R,b),f.getPointAt((R/g+S)%1,M),b.makeTranslation(M.x,M.y,M.z),T.setMatrixAt(R,b),x.getPointAt(U,M),b.makeTranslation(M.x,M.y,M.z),y.setMatrixAt(R,b)}v.instanceMatrix.needsUpdate=T.instanceMatrix.needsUpdate=y.instanceMatrix.needsUpdate=!0,m.forEach((R,U)=>{let H=_>U*.25-.01;R.scale.y+=((H?1+_*.6:.25)+Math.sin(P*2+U)*.06-R.scale.y)*.1})}),s.props.research=a}{let a=new Ct;a.position.set(-3.9,os(5),i(5)-.45),e.add(a);let l=[14698298,3134406,15316044,7310591,16181970];s.props.balloons=[],l.forEach((y,b)=>{let M=new Ct;M.position.set((b-2)*.42,0,b%2*.45);let _=new Te(new _n(.34,32,24),new kt({color:y,roughness:.25,clearcoat:1,clearcoatRoughness:.15,sheen:.4}));_.scale.y=1.18,_.position.y=2.2+b%3*.35,_.castShadow=!0;let S=new Te(new $i(.06,.1,8),_.material);S.position.y=_.position.y-.42,S.rotation.x=Math.PI;let A=new Te(new tn(.005,.005,_.position.y-.45,4),as(16181970));A.position.y=(_.position.y-.45)/2,M.add(_,S,A),a.add(M),_.userData.onClick="balloon",_.userData.group=M,s.clickables.push(_),s.props.balloons.push(M);let w=b*1.3;n(D=>{M.rotation.z=Math.sin(D*1.2+w)*.06,M.rotation.x=Math.cos(D+w)*.05})});let c=new Ct,h=new kt({color:15921128,metalness:.3,roughness:.35,clearcoat:.5}),u=new Te(new nr(.16,.6,8,16),h);c.add(u);let f=new Te(new $i(.16,.3,16),new kt({color:an.terracotta,roughness:.3,clearcoat:.6}));f.position.y=.55,c.add(f);for(let y=0;y<3;y++){let b=new Te(new Fn(.02,.22,.18),as(an.lapis,{roughness:.4})),M=y/3*Math.PI*2;b.position.set(Math.cos(M)*.16,-.3,Math.sin(M)*.16),b.rotation.y=-M,c.add(b)}let d=new Te(new $i(.1,.4,12),Ci(16751173,3));d.position.y=-.62,d.rotation.x=Math.PI,c.add(d),e.add(c),s.props.rocket=c,c.userData.boost=0,u.userData.onClick="rocket",s.clickables.push(u);let m=0;n((y,b)=>{c.userData.boost*=.985,m+=b*(.45+c.userData.boost*3);let M=new B(0,os(5)+4.6,0);c.position.set(M.x+Math.cos(m)*9,M.y+Math.sin(y*.9)*.6,M.z+Math.sin(m)*9),c.lookAt(M.x+Math.cos(m+.2)*9,c.position.y,M.z+Math.sin(m+.2)*9),c.rotateX(Math.PI/2),d.scale.y=1+Math.sin(y*30)*.2+c.userData.boost*2}),s.props.arena=a;let x=[],g=[14698298,3134406,15316044,7310591,11832575,16181970,5427827],p=new B(-2.9,os(5),i(5)+.6);for(let y=0;y<14;y++){let b=new Te(new _n(.3,24,18),new kt({color:g[y%g.length],roughness:.25,clearcoat:1,sheen:.4}));b.scale.y=1.18,b.visible=!1,b.userData.onClick="gameBalloon",e.add(b),x.push(b),s.clickables.push(b)}let v=s.game={active:!1,score:0,left:0,best:0,onEnd:null,onTick:null},T=y=>{y.position.set(p.x+(Math.random()-.5)*6,p.y-1.5-Math.random()*3,p.z+1+Math.random()*2.5),y.userData.v=.9+Math.random()*1.4,y.userData.w=Math.random()*6,y.visible=!0,y.scale.set(1,1.18,1)};v.start=(y=15)=>{v.active=!0,v.score=0,v.left=y,v.endAt=performance.now()+y*1e3,x.forEach(b=>{T(b),b.position.y=p.y+.3+Math.random()*4.5})},v.hit=y=>!v.active||!y.visible?!1:(v.score++,y.visible=!1,setTimeout(()=>v.active&&T(y),350),!0),n((y,b)=>{if(v.active){v.left=Math.max(0,(v.endAt-performance.now())/1e3),v.onTick&&v.onTick(v);for(let M of x)M.visible&&(M.position.y+=M.userData.v*b,M.position.x+=Math.sin(y*1.5+M.userData.w)*b*.3,M.position.y>p.y+7&&T(M));v.left<=0&&(v.active=!1,x.forEach(M=>M.visible=!1),v.best=Math.max(v.best,v.score),v.onEnd&&v.onEnd(v))}})}{let a=new Te(new tn(.35,1.2,160,32,1,!0),new Tn({color:new Le(an.gold).multiplyScalar(2.2),transparent:!0,opacity:0,side:Zn,depthWrite:!1,toneMapped:!1,blending:ir}));a.position.set(0,6*Si+3+80,-.6),e.add(a);let l=[0,1,2].map(()=>{let c=new Te(new Ji(1,.04,8,64),new Tn({color:new Le(an.faience).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1}));return c.rotation.x=Math.PI/2,c.position.set(0,6*Si+.2,-.6),e.add(c),c});s.props.beam=a,s.props.rings=l}}var Bo=14263420,Zm=1774609,Jm=1845854,Av=2504829,Yc=16052198,Rv=8003371,Cv=1581119,Pv=15920354,qm={};function ls(s){if(qm[s])return qm[s];let e={color:s,roughness:.7};return s===Bo?Object.assign(e,{roughness:.5,sheen:.6,sheenColor:new Le(16751226),sheenRoughness:.5}):s===Jm||s===Cv?Object.assign(e,{roughness:.82,sheen:1,sheenColor:new Le(5596842),sheenRoughness:.55}):s===Av?Object.assign(e,{roughness:.3,clearcoat:.6,sheen:.6,sheenColor:new Le(8952319)}):s===Zm?Object.assign(e,{roughness:.5,sheen:1,sheenColor:new Le(9069648),sheenRoughness:.4,clearcoat:.15,clearcoatRoughness:.5}):s===Pv?Object.assign(e,{roughness:.3,clearcoat:.8}):s===Yc?Object.assign(e,{roughness:.6,sheen:.5,sheenColor:new Le(16777215)}):s===Rv&&Object.assign(e,{roughness:.32,sheen:.9,sheenColor:new Le(16739179)}),qm[s]=new kt(e)}function vr(s,e){let t=new Te(s,ls(e));return t.castShadow=!0,t.receiveShadow=!0,t}function Ev(s,e,t=64){let n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),r=i.createRadialGradient(t/2,t/2,1,t/2,t/2,t/2);return r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,t,t),new On(n)}var yr={happy:{eyes:"normal",brows:"soft",mouth:"smile",blush:.3,aura:15316044,emote:null},excited:{eyes:"star",brows:"up",mouth:"grin",blush:.55,aura:16765286,emote:"sparkle"},focused:{eyes:"normal",brows:"determined",mouth:"smirk",blush:.1,aura:3134406,emote:null},thinking:{eyes:"normal",brows:"raised",mouth:"hmm",blush:.1,aura:9414399,emote:"question",look:[.6,.7]},cool:{eyes:"closed",brows:"soft",mouth:"smirk",blush:.15,aura:15316044,emote:"sparkle",glasses:!0},surprised:{eyes:"wide",brows:"up",mouth:"o",blush:.2,aura:16777215,emote:"bang"},shy:{eyes:"closed",brows:"worried",mouth:"wavy",blush:1,aura:16748465,emote:"sweat"},annoyed:{eyes:"angry",brows:"angry",mouth:"flat",blush:.1,aura:14698298,emote:"anger"},sleepy:{eyes:"half",brows:"soft",mouth:"small",blush:.15,aura:7299024,emote:"zzz"},dizzy:{eyes:"spiral",brows:"worried",mouth:"wavy",blush:.3,aura:11832575,emote:"swirl"},love:{eyes:"heart",brows:"up",mouth:"grin",blush:.85,aura:16740241,emote:"heart"},worried:{eyes:"normal",brows:"worried",mouth:"wavy",blush:.1,aura:15764028,emote:"sweat"},vibing:{eyes:"closed",brows:"soft",mouth:"smile",blush:.35,aura:3134406,emote:"note"}},Iv=768,Dv=512,Ym={x:226,y:276},$m={x:542,y:276},wv={x:384,y:400};function $c(s,e,t,n,i=4){s.beginPath();for(let r=0;r<i*2;r++){let o=r/(i*2)*Math.PI*2-Math.PI/2,a=r%2?n*.38:n;s.lineTo(e+Math.cos(o)*a,t+Math.sin(o)*a)}s.closePath(),s.fill()}function Lv(s,e,t,n){s.beginPath(),s.moveTo(e,t+n*.9),s.bezierCurveTo(e-n*1.6,t-n*.1,e-n*.6,t-n*1.2,e,t-n*.35),s.bezierCurveTo(e+n*.6,t-n*1.2,e+n*1.6,t-n*.1,e,t+n*.9),s.fill()}function nA(s,e){let t=yr[e.mood]||yr.happy;s.clearRect(0,0,Iv,Dv);let n=t.blush*(e.blushBoost||1);if(n>.02)for(let d of[Ym.x-46,$m.x+46]){let m=s.createRadialGradient(d,352,4,d,352,64);m.addColorStop(0,`rgba(235,110,100,${.55*n})`),m.addColorStop(1,"rgba(235,110,100,0)"),s.fillStyle=m,s.fillRect(d-70,282,140,140)}let i="#1d120c",r="#5b3a22",o=e.blink,a=(t.look?t.look[0]:e.lx)*12,l=(t.look?-t.look[1]:-e.ly)*10;for(let[d,m]of[[0,Ym],[1,$m]]){let x=t.eyes;if(o<.25&&x!=="closed"&&x!=="spiral"&&x!=="heart"&&(x="blink"),s.save(),x==="normal"||x==="star"||x==="half"||x==="angry"||x==="wide"){let g=x==="wide"?64:60,p=(x==="wide"?70:76)*Math.max(o,.25);if(x==="half"&&(s.beginPath(),s.rect(m.x-70,m.y-4,140,120),s.clip()),x==="angry"){s.beginPath();let v=d?-1:1;s.moveTo(m.x-80,m.y-80+(v>0?0:40)),s.lineTo(m.x+80,m.y-80+(v>0?40:0)),s.lineTo(m.x+80,m.y+90),s.lineTo(m.x-80,m.y+90),s.closePath(),s.clip()}s.fillStyle=i,s.beginPath(),s.ellipse(m.x,m.y,g,p,0,0,7),s.fill(),x!=="wide"?(s.fillStyle=r,s.beginPath(),s.ellipse(m.x+a,m.y+l+10,g*.62,p*.62,0,0,7),s.fill(),s.fillStyle=i,s.beginPath(),s.ellipse(m.x+a,m.y+l+10,g*.34,p*.36,0,0,7),s.fill()):(s.fillStyle="#fff",s.beginPath(),s.ellipse(m.x,m.y,g*.78,p*.8,0,0,7),s.fill(),s.fillStyle=i,s.beginPath(),s.arc(m.x+a*.6,m.y+l*.6,12,0,7),s.fill()),s.fillStyle="#fff",x==="star"?($c(s,m.x-10+a*.3,m.y-14+l*.3,26),$c(s,m.x+18,m.y+22,10)):x!=="wide"&&(s.beginPath(),s.arc(m.x-17+a*.4,m.y-24+l*.4,16,0,7),s.fill(),s.beginPath(),s.arc(m.x+19+a*.4,m.y+22+l*.4,7,0,7),s.fill()),s.restore(),s.save(),s.strokeStyle=i,s.lineWidth=9,s.lineCap="round",x==="half"&&(s.beginPath(),s.moveTo(m.x-50,m.y-4),s.lineTo(m.x+50,m.y-4),s.stroke())}else if(x==="closed"||x==="blink")s.strokeStyle=i,s.lineWidth=12,s.lineCap="round",s.beginPath(),x==="closed"?s.arc(m.x,m.y+18,38,Math.PI*1.15,Math.PI*1.85):s.arc(m.x,m.y-22,40,Math.PI*.2,Math.PI*.8),s.stroke();else if(x==="spiral"){s.strokeStyle=i,s.lineWidth=7,s.beginPath();let g=e.t*6*(d?-1:1);for(let p=0;p<Math.PI*6;p+=.2){let v=p*6.5;s.lineTo(m.x+Math.cos(p+g)*v,m.y+Math.sin(p+g)*v)}s.stroke()}else x==="heart"&&(s.fillStyle="#e8325a",Lv(s,m.x,m.y+4,34+Math.sin(e.t*8)*3),s.fillStyle="rgba(255,255,255,.8)",s.beginPath(),s.arc(m.x-14,m.y-10,8,0,7),s.fill());s.restore()}s.strokeStyle="#1b1411",s.lineWidth=18,s.lineCap="round";for(let[d,m]of[[0,Ym],[1,$m]]){let x=d?1:-1,g=m.y-100,p=0,v=0;switch(t.brows){case"up":g-=14;break;case"determined":p=14,v=-4;break;case"angry":p=24,v=-10;break;case"worried":p=-16,v=8;break;case"raised":d?g-=22:p=6;break}let T=m.x-x*34,y=m.x+x*40;s.beginPath(),s.moveTo(T,g+p),s.quadraticCurveTo((T+y)/2,g-10+(p+v)/2,y,g+v+6),s.stroke()}s.lineCap="round",s.lineJoin="round";let c=e.mouth,h=wv.x,u=wv.y,f=()=>{s.fillStyle="#5a1a16",s.fill()};if(c>.08)s.beginPath(),s.ellipse(h,u,30+c*12,10+c*30,0,0,7),f(),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,u+8+c*14,18+c*6,6+c*9,0,0,Math.PI),s.fill();else switch(s.strokeStyle="#4a1a14",s.lineWidth=10,t.mouth){case"smile":s.beginPath(),s.arc(h,u-26,40,Math.PI*.2,Math.PI*.8),s.stroke();break;case"grin":s.beginPath(),s.moveTo(h-52,u-12),s.quadraticCurveTo(h,u-6,h+52,u-12),s.quadraticCurveTo(h+40,u+46,h,u+46),s.quadraticCurveTo(h-40,u+46,h-52,u-12),f(),s.fillStyle="#fff",s.fillRect(h-38,u-9,76,12),s.fillStyle="#e0705f",s.beginPath(),s.ellipse(h,u+34,22,10,0,Math.PI,0),s.fill();break;case"smirk":s.beginPath(),s.moveTo(h-34,u+2),s.quadraticCurveTo(h+6,u+16,h+40,u-16),s.stroke();break;case"hmm":s.beginPath(),s.moveTo(h-26,u+6),s.lineTo(h+24,u-2),s.stroke();break;case"o":s.beginPath(),s.ellipse(h,u+4,18,24,0,0,7),f();break;case"small":s.beginPath(),s.ellipse(h,u+2,10,8,0,0,7),f();break;case"flat":s.beginPath(),s.moveTo(h-30,u+4),s.lineTo(h+30,u+4),s.stroke();break;case"wavy":s.beginPath();for(let d=-40;d<=40;d+=4)s.lineTo(h+d,u+4+Math.sin(d*.16+e.t*6)*7);s.stroke();break}}function iA(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.translate(64,64),t.lineCap="round",t.lineJoin="round";let n=()=>{t.fillStyle="#fff7e6",t.beginPath(),t.arc(0,0,50,0,7),t.fill(),t.strokeStyle="rgba(26,21,48,.25)",t.lineWidth=4,t.stroke()};switch(s){case"bang":n(),t.fillStyle="#e0473a",t.font="900 72px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",0,4);break;case"question":n(),t.fillStyle="#1d3fbf",t.font="900 66px Unbounded, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("?",0,4);break;case"heart":t.fillStyle="#ff4d6d",Lv(t,0,6,40),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.arc(-18,-12,9,0,7),t.fill();break;case"sparkle":t.fillStyle="#ffd166",$c(t,-8,0,44),t.fillStyle="#fff3c4",$c(t,34,-30,16),$c(t,30,34,12);break;case"zzz":t.fillStyle="#c9b8ff",t.font="900 44px Unbounded, sans-serif",t.fillText("z",-40,30),t.font="900 34px Unbounded, sans-serif",t.fillText("z",-6,0),t.font="900 26px Unbounded, sans-serif",t.fillText("z",22,-24);break;case"anger":t.strokeStyle="#e0473a",t.lineWidth=11;for(let[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.beginPath(),t.moveTo(r*10,o*34),t.quadraticCurveTo(r*10,o*10,r*34,o*10),t.stroke();break;case"sweat":t.fillStyle="#7fc8ff",t.beginPath(),t.moveTo(0,-44),t.quadraticCurveTo(34,10,0,40),t.quadraticCurveTo(-34,10,0,-44),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.ellipse(-8,12,6,12,.3,0,7),t.fill();break;case"swirl":t.strokeStyle="#b48cff",t.lineWidth=8,t.beginPath();for(let r=0;r<Math.PI*5;r+=.15)t.lineTo(Math.cos(r)*r*3,Math.sin(r)*r*3);t.stroke();break;case"note":t.fillStyle="#2fd3c6",t.beginPath(),t.ellipse(-16,26,18,13,-.4,0,7),t.fill(),t.beginPath(),t.ellipse(26,14,18,13,-.4,0,7),t.fill(),t.fillRect(-2,-38,9,64),t.fillRect(40,-50,9,64),t.beginPath(),t.moveTo(-2,-38),t.lineTo(49,-50),t.lineTo(49,-34),t.lineTo(-2,-22),t.fill();break}let i=new On(e);return i.colorSpace=Vt,i}function Nv(){let s=new Ct,e=new Ct;s.add(e);let t=[-1,1].map(V=>{let Y=new Ct;Y.position.set(.12*V,.72,0),e.add(Y);let ue=vr(new nr(.085,.48,8,20),Cv);ue.position.y=-.33,Y.add(ue);let ce=vr(new yn(.18,.12,.3,3,.055),Pv);ce.position.set(0,-.65,.05),Y.add(ce);let he=new Te(new yn(.185,.035,.305,1,.015),ls(2830141));he.position.set(0,-.705,.05),Y.add(he);let ye=new Te(new Fn(.19,.02,.12),ls(Rv));return ye.position.set(0,-.64,0),Y.add(ye),Y}),n=new Ct;n.position.y=.72,e.add(n);let i=vr(new yn(.52,.5,.31,5,.11),Jm);i.position.y=.26,n.add(i);let r=new Te(new tn(0,.09,.22,3),ls(Yc));r.rotation.set(Math.PI,Math.PI/6,0),r.scale.z=.25,r.position.set(0,.4,.15),n.add(r);for(let V of[-1,1]){let Y=new Te(new yn(.055,.3,.02,1,.008),ls(Av));Y.position.set(V*.075,.37,.162),Y.rotation.z=V*.38,n.add(Y)}for(let V of[-1,1]){let Y=new Te(new $i(.028,.05,3),ls(Yc));Y.position.set(V*.04,.475,.158),Y.rotation.set(0,0,Math.PI+V*.5),Y.scale.z=.3,n.add(Y)}let o=new kt({color:an.gold,metalness:1,roughness:.25});for(let V of[.13]){let Y=new Te(new _n(.016,12,8),o);Y.position.set(0,V,.16),n.add(Y)}let a=new Te(new $i(.035,.05,3),new kt({color:an.gold,roughness:.35,sheen:1}));a.position.set(-.16,.405,.158),a.rotation.z=Math.PI,a.scale.z=.3,n.add(a);let l=new Te(new Fn(.47,.05,.29),ls(1053734));l.position.y=.03,n.add(l);let c=[-1,1].map(V=>{let Y=new Ct;Y.position.set(.31*V,.46,0),n.add(Y);let ue=vr(new nr(.074,.3,8,20),Jm);ue.position.y=-.18,Y.add(ue);let ce=new Te(new tn(.068,.068,.04,14),ls(Yc));ce.position.y=-.37,Y.add(ce);let he=vr(new _n(.072,20,14),Bo);if(he.position.y=-.43,he.scale.set(1,1.08,.9),Y.add(he),V<0){let We=new Te(new Ji(.07,.014,8,24),o);We.rotation.x=Math.PI/2,We.position.y=-.355,Y.add(We)}let ye=vr(new nr(.022,.04,4,8),Bo);return ye.position.set(-V*.05,-.41,.04),ye.rotation.z=V*.6,Y.add(ye),Y}),h=new Ct;h.position.y=1.24,e.add(h),h.add(new Te(new tn(.07,.08,.1,14),ls(Bo)));let u=new Te(new Ji(.085,.022,8,20),ls(Yc));u.rotation.x=Math.PI/2,u.position.y=-.03,h.add(u);let f=new Ct;f.position.y=.06,h.add(f);let d=vr(new _n(.35,48,36),Bo);d.scale.set(1,.97,.94),d.position.y=.34,f.add(d);for(let V of[-1,1]){let Y=vr(new _n(.075,16,12),Bo);Y.scale.set(.6,1,.8),Y.position.set(.34*V,.33,0),f.add(Y)}let m=vr(new _n(.03,16,12),Bo);m.position.set(0,.31,.33),m.scale.set(1,.8,.9),f.add(m);let x=document.createElement("canvas");x.width=Iv,x.height=Dv;let g=x.getContext("2d"),p=new On(x);p.colorSpace=Vt,p.anisotropy=8;let v=new Te(new _n(.3535,48,32,Math.PI/2-.9,1.8,.9,1.35),new Lr({map:p,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}));v.renderOrder=2,d.add(v);{let V=new _n(.35,96,64),Y=V.attributes.position,ue=new B,ce=new B,he=(We,Ee,Ue)=>{let be=Math.min(1,Math.max(0,(Ue-We)/(Ee-We)));return be*be*(3-2*be)};for(let We=0;We<Y.count;We++){ce.fromBufferAttribute(Y,We).normalize();let Ee=(ce.z*.5+.5)**1.6,Ue=-.42+Ee*.95+.07*Math.exp(-(ce.x**2)/.05)*Math.max(0,ce.z)-Math.max(0,Math.abs(ce.x)-.8)*.6,be=he(Ue-.05,Ue+.06,ce.y),De=.31+be*.068,tt=(ce.z-.62)**2/.1+(ce.y-.68)**2/.06+ce.x**2/.16;De+=be*.2*Math.exp(-tt),De+=be*.07*Math.exp(-((ce.z-.2)**2/.12+(ce.y-.9)**2/.05)),De+=be*.03*he(.2,.9,ce.y),De+=be*.006*Math.sin(Math.atan2(ce.x,ce.z)*26+ce.y*9),ue.copy(ce).multiplyScalar(De),Y.setXYZ(We,ue.x,ue.y,ue.z)}V.computeVertexNormals();let ye=new Te(V,ls(Zm));ye.castShadow=!0,d.add(ye)}for(let V of[-1,1]){let Y=new Te(new yn(.05,.12,.07,1,.02),ls(Zm));Y.position.set(.325*V,.32,.08),f.add(Y)}let T=new Ct;T.position.set(0,.36,.36),f.add(T);let y=new kt({color:460557,roughness:.04,metalness:.2,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2});for(let V of[-1,1]){let Y=new Te(new yn(.19,.11,.025,3,.04),y);Y.position.set(V*.115,0,-.01-Math.abs(V)*.012),Y.rotation.y=V*.28,T.add(Y);let ue=new Te(new yn(.2,.02,.03,1,.008),o);ue.position.set(V*.115,.055,-.01),ue.rotation.y=V*.28,T.add(ue)}let b=new Te(new Fn(.05,.015,.015),o);b.position.y=.03,T.add(b),T.scale.setScalar(.001),T.visible=!1;let M=new Ct;M.position.set(0,.36,-.02),f.add(M);let _=new Te(new Ji(.4,.028,10,40,Math.PI),new kt({color:1382442,roughness:.3,clearcoat:.6}));M.add(_);for(let V of[-1,1]){let Y=new Te(new tn(.1,.1,.07,24),new kt({color:1909312,roughness:.3,clearcoat:.7}));Y.rotation.z=Math.PI/2,Y.position.set(V*.39,-.03,0),M.add(Y);let ue=new Te(new Ji(.075,.012,8,24),new Tn({color:new Le(an.faience).multiplyScalar(2.4),toneMapped:!1}));ue.rotation.y=Math.PI/2,ue.position.set(V*.428,-.03,0),M.add(ue)}M.scale.setScalar(.001),M.visible=!1;let S={},A=new Pr(new er({transparent:!0,depthWrite:!1,toneMapped:!1}));A.position.set(.45,2.3,0),A.scale.setScalar(.001),s.add(A);let w=new Te(new Il(.42,.58,64),new Tn({color:new Le(an.gold),transparent:!0,opacity:.55,depthWrite:!1,toneMapped:!1,alphaMap:Ev("#fff","#000",128),side:Zn}));w.rotation.x=-Math.PI/2,w.position.y=.03,s.add(w);let D=new As(16769728,1.6,4.5,1.6);D.position.set(.7,2.1,1.5),s.add(D);let P=new As(9414911,.6,4,1.8);P.position.set(-1,1.4,1.2),s.add(P);let N=new Te(new Dr(.42,32),new Tn({color:0,transparent:!0,opacity:.22,depthWrite:!1,alphaMap:Ev("#fff","#000")}));N.rotation.x=-Math.PI/2,N.position.y=.02,s.add(N),s.scale.setScalar(1.15);let R={mode:"idle",modeT:0,talk:0,walkPhase:0,speed:0,blinkT:2,blink:1,look:new Ce,spin:0,base:"happy",temp:null,tempT:0,mood:"happy",music:!1,faceKey:""},U=Kn.lerp,H=new Le(an.gold),k=new Le,$=null;function X(V){R.mode!==V&&(R.mode=V,R.modeT=0)}function I(V,Y=0){yr[V]&&(Y?(R.temp=V,R.tempT=Y):R.base=V)}function J(){R.spin=Math.PI*2,X("celebrate")}function pe(V,Y){V.visible=!0,V.userData.target=Y?1:.001}function Me(V,Y,ue={}){R.modeT+=V,R.temp&&(R.tempT-=V,R.tempT<=0&&(R.temp=null));let ce=R.temp||(ue.sleepy?"sleepy":ue.dizzy?"dizzy":R.music&&!ue.busy?"vibing":R.base);if(ce!==R.mood){R.mood=ce;let Ke=yr[ce].emote;Ke!==$&&($=Ke,Ke&&(A.material.map=S[Ke]||(S[Ke]=iA(Ke)),A.material.needsUpdate=!0,A.userData.pop=0))}let he=yr[ce],ye=Math.min(R.speed/2.4,1);R.walkPhase+=V*(4+R.speed*3.2);let We=Math.sin(R.walkPhase);t[0].rotation.x=U(t[0].rotation.x,We*.75*ye,.3),t[1].rotation.x=U(t[1].rotation.x,-We*.75*ye,.3);let Ee={x:-We*.6*ye,z:-.08},Ue={x:We*.6*ye,z:.08},be=Math.sin(Y*2.2)*.012,De=Math.abs(Math.cos(R.walkPhase))*.06*ye+be,tt=Math.sin(Y*1.3)*.04,se=0;if(R.mode==="wave"?(Ue={x:-.2,z:2.55+Math.sin(Y*9)*.32},tt=.12,R.modeT>2.4&&X("idle")):R.mode==="point"?(Ue={x:-1.35,z:.45},Ee={x:.1,z:-.12}):R.mode==="celebrate"?(Ee={x:0,z:-2.6-Math.sin(Y*12)*.2},Ue={x:0,z:2.6+Math.sin(Y*12)*.2},De+=Math.abs(Math.sin(R.modeT*7))*.25*Math.max(0,1-R.modeT/2),R.modeT>2.2&&X("idle")):R.mode==="think"&&(Ue={x:-2.1,z:-.9},tt=-.15),ce==="vibing"&&ye<.2){let Ke=Math.sin(Y*Math.PI*2*1.6);De+=Math.abs(Ke)*.03,tt=Ke*.12,se=Ke*.05,Ee.z=-.25-Math.abs(Ke)*.2,Ue.z=.25+Math.abs(Ke)*.2}ce==="sleepy"&&(tt=.25+Math.sin(Y*.8)*.05,De-=.02),ce==="dizzy"&&(se=Math.sin(Y*5)*.12,tt=Math.cos(Y*5)*.2),ce==="annoyed"&&ye<.2&&(Ee={x:-.5,z:.9},Ue={x:-.5,z:-.9}),ce==="shy"&&ye<.2&&(Ee={x:-.6,z:.5},Ue={x:-.6,z:-.5},tt=.18),ce==="thinking"&&R.mode==="idle"&&(Ue={x:-2.1,z:-.9}),(ce==="excited"||ce==="love")&&R.mode==="idle"&&ye<.2&&(De+=Math.abs(Math.sin(Y*6))*.05),ce==="cool"&&R.mode==="idle"&&ye<.2&&(Ue={x:-.3,z:.15},Ee={x:.1,z:-.5}),c[0].rotation.x=U(c[0].rotation.x,Ee.x,.18),c[0].rotation.z=U(c[0].rotation.z,Ee.z,.18),c[1].rotation.x=U(c[1].rotation.x,Ue.x,.18),c[1].rotation.z=U(c[1].rotation.z,Ue.z,.18),e.position.y=De,e.rotation.z=U(e.rotation.z,se,.1),n.scale.y=1+be,f.rotation.y=U(f.rotation.y,R.look.x*.5,.08),f.rotation.x=U(f.rotation.x,-R.look.y*.25+(R.talk?Math.sin(Y*9)*.03:0),.08),f.rotation.z=U(f.rotation.z,tt,.06),R.blinkT-=V;let G=1;R.blinkT<.14&&(G=Math.abs(R.blinkT-.07)/.07),R.blinkT<0&&(R.blinkT=2+Math.random()*3);let Ae=R.talk?Math.round((.5+.5*Math.sin(Y*22))*(.6+.4*Math.sin(Y*7.1))*4)/4:0,Qe=he.eyes==="spiral"||he.eyes==="heart"||he.mouth==="wavy",Re=`${ce}|${G<.25?0:1}|${Ae}|${Math.round(R.look.x*4)}|${Math.round(R.look.y*4)}|${Qe?Math.floor(Y*20):0}`;Re!==R.faceKey&&(R.faceKey=Re,nA(g,{mood:ce,blink:G,mouth:Ae,lx:R.look.x,ly:R.look.y,t:Y}),p.needsUpdate=!0);let Ne=!!he.glasses,je=R.music;Ne!==!!T.userData.on&&(T.userData.on=Ne,pe(T,Ne)),je!==!!M.userData.on&&(M.userData.on=je,pe(M,je));for(let Ke of[T,M]){let z=Ke.userData.target??.001,Je=U(Ke.scale.x,z,.18);Ke.scale.setScalar(Je),Je<.01&&z<.01&&(Ke.visible=!1)}if($){A.userData.pop=Math.min(1,(A.userData.pop||0)+V*4);let Ke=A.userData.pop,z=1+Math.sin(Ke*Math.PI)*.35;A.scale.setScalar(.42*Ke*z),A.position.y=2.3+Math.sin(Y*3)*.05}else A.scale.setScalar(U(A.scale.x,.001,.2));if(k.setHex(he.aura),H.lerp(k,.06),w.material.color.copy(H).multiplyScalar(1.6),w.material.opacity=.35+Math.sin(Y*3)*.12,w.scale.setScalar(1+Math.sin(Y*3)*.04),R.spin>0){let Ke=Math.min(R.spin,V*12);R.spin-=Ke,e.rotation.y+=Ke}else e.rotation.y=U(e.rotation.y,0,.2)}return{root:s,head:f,st:R,update:Me,setMode:X,setMood:I,poke:J,headAnchor:()=>f.localToWorld(new B(0,.9,0))}}var Vs=[new B(2.8,0,hn[0]/2+Hs+2.6),new B(-3.3,0,hn[1]/2+1),new B(3.3,0,hn[2]/2+1),new B(-3.3,0,hn[3]/2+1),new B(3.3,0,hn[4]/2+1),new B(-2.9,0,hn[5]/2+1),new B(0,0,2.05)],Uv=Vs.length,sA=Si/8,rA=Hs/8;function jd(s,e){let t=0;for(let n=0;n<hn.length;n++)Math.abs(s)<=hn[n]/2+.05&&Math.abs(e)<=hn[n]/2+.05&&(t=Math.max(t,(n+1)*Si));if(Math.abs(s)<=1.3)for(let n=0;n<hn.length;n++){let i=hn[n]/2,r=i+Hs;e>=i&&e<=r&&(t=Math.max(t,os(n)+Math.min(8,Math.ceil((r-e)/rA+1e-4))*sA))}return t}var Km=[];for(let s=0;s<Vs.length-1;s++){let e=Vs[s],t=Vs[s+1],n=[new Ce(e.x,e.z),new Ce(0,hn[s]/2+Hs+.35),new Ce(0,hn[s]/2-.4),new Ce(t.x,t.z)],i=[0];for(let r=1;r<n.length;r++)i.push(i[r-1]+n[r].distanceTo(n[r-1]));Km.push({pts:n,len:i})}function Qm(s,e=new Ce){let t=Math.min(Math.floor(s),Km.length-1),n=Kn.clamp(s-t,0,1);if(s>=Vs.length-1)return e.set(Vs[Vs.length-1].x,Vs[Vs.length-1].z),e;let i=Km[t],r=n*i.len[i.len.length-1],o=1;for(;o<i.len.length-1&&i.len[o]<r;)o++;let a=(r-i.len[o-1])/(i.len[o]-i.len[o-1]||1);return e.copy(i.pts[o-1]).lerp(i.pts[o],a)}var Ov=s=>{let e=Vs[s].clone();return e.y=jd(e.x,e.z),e};var jm=["Start","About","Stack","Work","Research","Contests","Contact"],Fv=["wave","point","think","point","point","celebrate","wave"],Bv={en:[["Hi, I'm Adham. This pyramid is my stack, one layer per step.","Scroll to climb with me, or click me anytime."],["Step one. I study AI & Data Science, but backend is home.","APIs, databases, and the logic nobody sees. That's my favourite part."],["Node.js and PostgreSQL for servers, C++ for contests, Python for data.","And tests: Jest and supertest on the SmartHabbit backend."],["SmartHabbit is my main project. I built most of its backend.","That space game? We built it for NASA Space Apps 2026."],["Sensor data goes to XGBoost, network traffic to Isolation Forest.","Both fuse into one risk tier. The paper is on IEEE Xplore."],["In ICPC, every balloon means a solved problem.","ECPC qualifications: 88th in 2025, 177th in 2026."],["We made it to the top. Send me a message below.","Or grab my email, GitHub or LinkedIn from the links."]],ar:[["\u0623\u0647\u0644\u0627\u064B\u060C \u0623\u0646\u0627 \u0623\u062F\u0647\u0645. \u0627\u0644\u0647\u0631\u0645 \u062F\u0647 \u0627\u0644\u0640 stack \u0628\u062A\u0627\u0639\u064A\u060C \u0643\u0644 \u062F\u0631\u062C\u0629 \u0637\u0628\u0642\u0629.","\u0627\u0639\u0645\u0644 scroll \u0648\u0623\u0646\u0627 \u0647\u0637\u0644\u0639 \u0645\u0639\u0627\u0643\u060C \u0648\u062F\u0648\u0633 \u0639\u0644\u064A\u0651\u0627 \u0641\u064A \u0623\u064A \u0648\u0642\u062A."],["\u0623\u0648\u0644 \u062F\u0631\u062C\u0629. \u0628\u062F\u0631\u0633 AI \u0648 Data Science\u060C \u0628\u0633 \u0642\u0644\u0628\u064A \u0645\u0639 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F.","\u0627\u0644\u0640 APIs \u0648\u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0648\u0627\u0644\u0645\u0646\u0637\u0642 \u0627\u0644\u0644\u064A \u0645\u062D\u062F\u0634 \u0628\u064A\u0634\u0648\u0641\u0647\u060C \u062F\u064A \u0623\u0643\u062A\u0631 \u062D\u0627\u062C\u0629 \u0628\u062D\u0628\u0647\u0627."],["Node.js \u0648 PostgreSQL \u0644\u0644\u0633\u064A\u0631\u0641\u0631\u0627\u062A\u060C C++ \u0644\u0644\u0645\u0633\u0627\u0628\u0642\u0627\u062A\u060C \u0648 Python \u0644\u0644\u062F\u0627\u062A\u0627.","\u0648\u062A\u0633\u062A\u0627\u062A: Jest \u0648 supertest \u0639\u0644\u0649 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639 SmartHabbit."],["SmartHabbit \u0623\u0647\u0645 \u0645\u0634\u0631\u0648\u0639 \u0639\u0646\u062F\u064A\u060C \u0648\u0623\u0646\u0627 \u0639\u0627\u0645\u0644 \u0623\u063A\u0644\u0628 \u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639\u0647.","\u0644\u0639\u0628\u0629 \u0627\u0644\u0641\u0636\u0627\u0621 \u062F\u064A\u061F \u0639\u0645\u0644\u0646\u0627\u0647\u0627 \u0641\u064A NASA Space Apps 2026."],["\u062F\u0627\u062A\u0627 \u0627\u0644\u062D\u0633\u0627\u0633\u0627\u062A \u0628\u062A\u0631\u0648\u062D \u0644\u0640 XGBoost\u060C \u0648\u062A\u0631\u0627\u0641\u064A\u0643 \u0627\u0644\u0634\u0628\u0643\u0629 \u0644\u0640 Isolation Forest.","\u0627\u0644\u0627\u062A\u0646\u064A\u0646 \u0628\u064A\u062A\u062C\u0645\u0639\u0648\u0627 \u0641\u064A risk tier \u0648\u0627\u062D\u062F\u060C \u0648\u0627\u0644\u0648\u0631\u0642\u0629 \u0645\u0646\u0634\u0648\u0631\u0629 \u0639\u0644\u0649 IEEE Xplore."],["\u0641\u064A \u0627\u0644\u0640 ICPC\u060C \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0639\u0646\u0627\u0647\u0627 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A.","\u062A\u0635\u0641\u064A\u0627\u062A ECPC: \u0627\u0644\u0645\u0631\u0643\u0632 88 \u0633\u0646\u0629 2025\u060C \u0648177 \u0633\u0646\u0629 2026."],["\u0648\u0635\u0644\u0646\u0627 \u0627\u0644\u0642\u0645\u0629! \u0627\u0628\u0639\u062A\u0644\u064A \u0631\u0633\u0627\u0644\u0629 \u0645\u0646 \u062A\u062D\u062A.","\u0623\u0648 \u062E\u062F \u0627\u0644\u0625\u064A\u0645\u064A\u0644 \u0623\u0648 \u0627\u0644\u0640 GitHub \u0623\u0648 \u0627\u0644\u0640 LinkedIn \u0645\u0646 \u0627\u0644\u0644\u064A\u0646\u0643\u0627\u062A."]]},kv={en:["Hey, that tickles!","Status 418: I'm a teapot.","SELECT * FROM snacks;"],ar:["\u0628\u062A\u0632\u063A\u0632\u063A\u0646\u064A \u0643\u062F\u0647!","Status 418: \u0623\u0646\u0627 \u0628\u0631\u0627\u062F \u0634\u0627\u064A \u2615","SELECT * FROM snacks;"]},zv={en:"201 Created. Message sent.",ar:"201 Created. \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u062A\u0628\u0639\u062A\u062A."},Zc={balloon:{en:"Pop! Each balloon is a solved problem.",ar:"\u0628\u0648\u0645! \u0643\u0644 \u0628\u0627\u0644\u0648\u0646\u0629 \u0645\u0633\u0623\u0644\u0629 \u0627\u062A\u062D\u0644\u062A."},rocket:{en:"Full thrust! Same energy as hackathon weekend.",ar:"Full thrust! \u0646\u0641\u0633 \u0637\u0627\u0642\u0629 \u0648\u064A\u0643 \u0625\u0646\u062F \u0627\u0644\u0647\u0627\u0643\u0627\u062B\u0648\u0646."},moon:{en:"The Moon from Level 0 of CAPCOM: Storm Watch says hi.",ar:"\u0627\u0644\u0642\u0645\u0631 \u0628\u062A\u0627\u0639 Level 0 \u0641\u064A \u0644\u0639\u0628\u0629 CAPCOM \u0628\u064A\u0633\u0644\u0651\u0645 \u0639\u0644\u064A\u0643."},cap:{en:"You found the capstone. Send me a message below.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0642\u0645\u0629 \u0627\u0644\u062F\u0647\u0628! \u0627\u0628\u0639\u062A\u0644\u064A \u0631\u0633\u0627\u0644\u0629 \u0645\u0646 \u062A\u062D\u062A."}},e0={"C++":["ICPC contests and Sentinel FDS, a Qt desktop app.","\u0645\u0633\u0627\u0628\u0642\u0627\u062A ICPC\u060C \u0648 Sentinel FDS \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 Qt."],TypeScript:["The SmartHabbit backend and the BU-LabTrack frontend.","\u0627\u0644\u0628\u0627\u0643 \u0625\u0646\u062F \u0628\u062A\u0627\u0639 SmartHabbit \u0648\u0627\u0644\u0641\u0631\u0648\u0646\u062A \u0628\u062A\u0627\u0639 BU-LabTrack."],JavaScript:["CAPCOM: Storm Watch and this 3D portfolio.","\u0644\u0639\u0628\u0629 CAPCOM \u0648\u0627\u0644\u0628\u0648\u0631\u062A\u0641\u0648\u0644\u064A\u0648 \u0627\u0644\u0640 3D \u062F\u0647."],Python:["Experiments for my IEEE IoT anomaly-detection paper.","\u062A\u062C\u0627\u0631\u0628 \u0648\u0631\u0642\u0629 IEEE \u0628\u062A\u0627\u0639\u062A\u064A \u0639\u0646 anomaly detection \u0641\u064A IoT."],SQL:["SmartHabbit schema: 11 PostgreSQL migrations.","\u0633\u0643\u064A\u0645\u0627 SmartHabbit: 11 migration \u0639\u0644\u0649 PostgreSQL."],Java:["OOP at ITI DevBelt; HackerRank Java (Basic) certificate.","OOP \u0641\u064A ITI DevBelt\u060C \u0648\u0634\u0647\u0627\u062F\u0629 Java (Basic) \u0645\u0646 HackerRank."],"Node.js":["My main backend runtime: SmartHabbit and BU-LabTrack.","\u0627\u0644\u0640 runtime \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0628\u062A\u0627\u0639\u064A: SmartHabbit \u0648 BU-LabTrack."],Express:["Routes, middleware and error handling in SmartHabbit.","\u0627\u0644\u0640 routes \u0648\u0627\u0644\u0640 middleware \u0648\u0627\u0644\u0640 error handling \u0641\u064A SmartHabbit."],REST:["BU-LabTrack: labs, equipment, reservations, maintenance.","BU-LabTrack: \u0645\u0639\u0627\u0645\u0644 \u0648\u0623\u062C\u0647\u0632\u0629 \u0648\u062D\u062C\u0648\u0632\u0627\u062A \u0648\u0635\u064A\u0627\u0646\u0629."],JWT:["Access + refresh tokens, with bcrypt and rate limits.","Access \u0648 refresh tokens \u0645\u0639 bcrypt \u0648 rate limit."],"socket.io":["Real-time chat and notifications in SmartHabbit.","\u0627\u0644\u0634\u0627\u062A \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u062D\u0638\u064A\u0629 \u0641\u064A SmartHabbit."],PostgreSQL:["SmartHabbit's database, tested against a scratch DB.","\u062F\u0627\u062A\u0627\u0628\u064A\u0632 SmartHabbit\u060C \u0648\u0645\u062A\u064A\u0633\u0651\u062A\u0629 \u0639\u0644\u0649 \u062F\u0627\u062A\u0627\u0628\u064A\u0632 \u0645\u0624\u0642\u062A\u0629."],SQLite:["Sentinel FDS stores its transactions in SQLite.","Sentinel FDS \u0628\u064A\u062E\u0632\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A SQLite."],MySQL:["Database coursework.","\u0643\u0648\u0631\u0633\u0627\u062A \u0627\u0644\u062F\u0627\u062A\u0627\u0628\u064A\u0632."],XGBoost:["The supervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 supervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],"Isolation Forest":["The unsupervised pipeline in my IEEE paper.","\u0627\u0644\u0640 pipeline \u0627\u0644\u0640 unsupervised \u0641\u064A \u0648\u0631\u0642\u0629 IEEE."],React:["BU-LabTrack's frontend, with shadcn/ui.","\u0641\u0631\u0648\u0646\u062A BU-LabTrack \u0645\u0639 shadcn/ui."],"three.js":["CAPCOM: Storm Watch and this 3D portfolio.","\u0644\u0639\u0628\u0629 CAPCOM \u0648\u0627\u0644\u0628\u0648\u0631\u062A\u0641\u0648\u0644\u064A\u0648 \u0627\u0644\u0640 3D \u062F\u0647."],Docker:["SmartHabbit ships in a non-root Docker image.","SmartHabbit \u0628\u064A\u062A\u0634\u062D\u0646 \u0641\u064A Docker image \u0645\u0646 \u063A\u064A\u0631 root."],Git:["Version control on every project.","Version control \u0641\u064A \u0643\u0644 \u0645\u0634\u0631\u0648\u0639."],Jest:["Integration tests with supertest in SmartHabbit.","\u062A\u0633\u062A\u0627\u062A integration \u0645\u0639 supertest \u0641\u064A SmartHabbit."],Postman:["Testing every API before the frontend touches it.","\u0628\u062C\u0631\u0628 \u0643\u0644 API \u0642\u0628\u0644 \u0645\u0627 \u0627\u0644\u0641\u0631\u0648\u0646\u062A \u064A\u0644\u0645\u0633\u0647."],Qt:["Sentinel FDS, a C++17 desktop app.","Sentinel FDS\u060C \u0628\u0631\u0646\u0627\u0645\u062C \u062F\u064A\u0633\u0643\u062A\u0648\u0628 \u0628\u0640 C++17."],Vercel:["CAPCOM is deployed there, with a serverless function.","CAPCOM \u0645\u062A\u0646\u0634\u0631\u0629 \u0647\u0646\u0627\u0643 \u0645\u0639 serverless function."]},Gs={term:{en:'Ooh, a terminal. Type "help".',ar:"\u062A\u064A\u0631\u0645\u064A\u0646\u0627\u0644! \u0627\u0643\u062A\u0628 help."},threatHi:{en:"Critical risk! The fusion layer would raise the alarm right now.",ar:"\u062E\u0637\u0631 \u0639\u0627\u0644\u064A \u062C\u062F\u0627\u064B! \u0637\u0628\u0642\u0629 \u0627\u0644\u0640 fusion \u0643\u0627\u0646\u062A \u0647\u062A\u0636\u0631\u0628 \u0625\u0646\u0630\u0627\u0631 \u062D\u0627\u0644\u0627\u064B."},gameStart:{en:"Go go go! Pop them before they fly away!",ar:"\u064A\u0644\u0627 \u064A\u0644\u0627! \u0641\u0631\u0642\u0639\u0647\u0645 \u0642\u0628\u0644 \u0645\u0627 \u064A\u0637\u064A\u0631\u0648\u0627!"},gameEnd:{en:s=>`${s} balloons! ${s>=8?"That's a gold-medal pace.":"Not bad. Try again?"}`,ar:s=>`${s} \u0628\u0627\u0644\u0648\u0646\u0629! ${s>=8?"\u062F\u0647 \u0645\u0633\u062A\u0648\u0649 \u0645\u064A\u062F\u0627\u0644\u064A\u0629 \u062F\u0647\u0628.":"\u0645\u0634 \u0648\u062D\u0634. \u062A\u062C\u0631\u0628 \u062A\u0627\u0646\u064A\u061F"}`},wake:{en:"Huh? I wasn't sleeping. I was\u2026 compiling.",ar:"\u0647\u0627\u061F \u0623\u0646\u0627 \u0645\u0643\u0646\u062A\u0634 \u0646\u0627\u064A\u0645\u2026 \u0643\u0646\u062A \u0628\u0639\u0645\u0644 compile."},dizzy:{en:"Whoa, slow down! The stairs are spinning.",ar:"\u0628\u0627\u0644\u0631\u0627\u062D\u0629! \u0627\u0644\u0633\u0644\u0645 \u0628\u064A\u0644\u0641 \u0628\u064A\u0627."},shy:{en:"Okay, okay. Let's keep climbing.",ar:"\u062E\u0644\u0627\u0635 \u062E\u0644\u0627\u0635\u060C \u064A\u0644\u0627 \u0646\u0643\u0645\u0644 \u0637\u0644\u0648\u0639."},annoyed:{en:"Error 429: too many pokes.",ar:"Error 429: \u0632\u0642\u0627\u062A \u0643\u062A\u064A\u0631 \u0623\u0648\u064A."},allArtifacts:{en:"You found all ten artifacts. Thanks for exploring.",ar:"\u0644\u0642\u064A\u062A \u0627\u0644\u0639\u0634\u0631 \u0642\u0637\u0639 \u0643\u0644\u0647\u0645! \u0634\u0643\u0631\u0627\u064B \u0625\u0646\u0643 \u0627\u0633\u062A\u0643\u0634\u0641\u062A."},focus:{en:"Here it is, up close.",ar:"\u0623\u0647\u0648\u060C \u0645\u0646 \u0642\u0631\u064A\u0628."}},Hv=["happy","focused","thinking","excited","focused","cool","happy"];var t0=[{id:"first-step",name:"First step",hint:"Climb to the first level",icon:"\u{13080}"},{id:"summit",name:"Summit",hint:"Reach the capstone",icon:"\u{13274}"},{id:"poker",name:"Poker face",hint:"Poke mini-Adham 5 times",icon:"\u{13000}"},{id:"moonwalker",name:"Moonwalker",hint:"Click the moon",icon:"\u{131F9}"},{id:"popper",name:"Balloon popper",hint:"Score 8+ in Balloon Rush",icon:"\u{131A3}"},{id:"red-team",name:"Red team",hint:"Max out the attack in Research",icon:"\u{132F9}"},{id:"root",name:"Root access",hint:"Open the terminal",icon:"\u{133CF}"},{id:"polyglot",name:"Polyglot",hint:"Make the guide speak Arabic",icon:"\u{13153}"},{id:"dj",name:"DJ",hint:"Turn the sound on",icon:"\u{13296}"},{id:"insider",name:"Insider",hint:"Use a live demo inside the pyramid",icon:"\u{13250}"},{id:"hired",name:"201 Created",hint:"Send a real request",icon:"\u{1339B}"}],Gv="adham-artifacts",ko=new Set;try{ko=new Set(JSON.parse(localStorage.getItem(Gv)||"[]"))}catch{}var Vv=[],un={list:t0,has:s=>ko.has(s),count:()=>ko.size,onUnlock:s=>Vv.push(s),unlock(s){if(ko.has(s))return!1;let e=t0.find(t=>t.id===s);if(!e)return!1;ko.add(s);try{localStorage.setItem(Gv,JSON.stringify([...ko]))}catch{}return Vv.forEach(t=>t(e,ko.size,t0.length)),!0}};Ot.registerPlugin(dt,Jd);var nt=s=>document.querySelector(s),Sr=matchMedia("(prefers-reduced-motion: reduce)").matches,il=()=>innerWidth<=820,ef=Uv,Qt="en";try{Qt=localStorage.getItem("adham-guide-lang")||"en"}catch{}var Pi=new vv({smoothWheel:!Sr,lerp:.085,autoRaf:!1});Pi.on("scroll",dt.update);Ot.ticker.add(s=>Pi.raf(s*1e3));Ot.ticker.lagSmoothing(0);var tf=[...document.querySelectorAll(".sec")],oA=document.getElementById("stage"),cs=()=>oA.getBoundingClientRect(),Wv=()=>{let s=cs();return s.width/Math.max(1,s.height)<1.15},nl=s=>Pi.scrollTo(tf[s],{offset:il()?-cs().height:0,duration:Sr?0:2});document.querySelectorAll("[data-go]").forEach(s=>s.addEventListener("click",e=>{e.preventDefault(),nl(+s.dataset.go)}));function n0(){let s=nt("#name"),e="Adham Harp",t=Array.from("\u{13080}\u{130ED}\u{131A3}\u{131F3}\u{13296}\u{132F9}\u{1339B}\u{133CF}\u{13153}\u{13216}\u{13000}\u{13079}\u{13193}\u{1336F}");if(Sr){s.textContent=e;return}let n={p:0};Ot.to(n,{p:1,duration:2.4,ease:"power2.inOut",onUpdate(){let i=Math.floor(n.p*e.length);s.innerHTML=[...e].map((r,o)=>o<i||r===" "?r:`<span class="gl">${t[Math.random()*t.length|0]}</span>`).join("")},onComplete(){s.textContent=e}})}var nf=nt("#scene"),oi;try{oi=new Xu({canvas:nf,antialias:!0,powerPreference:"high-performance"})}catch{oi=null}var Tt=lA();oi?aA().catch(s=>{console.error(s),nt("#loader").classList.add("done"),n0(),s0()}):(nf.remove(),nt("#loader").classList.add("done"),n0(),s0());async function aA(){await Promise.race([Promise.all(["700 54px Unbounded",'600 42px "Instrument Sans"'].map(E=>document.fonts.load(E))),new Promise(E=>setTimeout(E,2500))]);let s=Math.min(devicePixelRatio,il()?1.5:1.75);oi.setPixelRatio(s),oi.setSize(cs().width,cs().height,!1),oi.toneMapping=mo,oi.toneMappingExposure=1.12,oi.shadowMap.enabled=!0,oi.shadowMap.type=fo;let e=new Cr;e.fog=new Sl(923202,.0072);let t=new Yn(42,innerWidth/innerHeight,.1,1500),n=new xa,i=0,r=1;n.onProgress=(E,O,ie)=>{i=O,r=ie,i0(O/ie)};let o=il()||(navigator.hardwareConcurrency||8)<=4?"low":"high",a=Tv(e,oi,n,o),l=Nv();e.add(l.root);let c=E=>typeof E=="object"?E[Qt]:E,h=performance.now(),u=!1,f=[],d=null;for(let E of["pointermove","keydown","wheel","touchstart"])addEventListener(E,()=>{h=performance.now()},{passive:!0});Tt.mood=E=>l.setMood(E,4),document.querySelectorAll("[data-skill]").forEach(E=>E.addEventListener("click",()=>{document.querySelectorAll("[data-skill].on").forEach(re=>re.classList.remove("on")),E.classList.add("on");let O=E.dataset.skill,ie=e0[O];a.highlightSkill&&a.highlightSkill(O);let j=nt("#used-in");j&&ie&&(j.querySelector("b").textContent=`${O} \u2014 ${e0[O][0]}`,Ot.fromTo(j,{opacity:.3},{opacity:1,duration:.4})),ie&&Tt.say(`${O}: ${ie[Qt==="ar"?1:0]}`,{temp:!0,hold:5200}),l.setMood("excited",2.5),$t.play("arrive")}));let m={smarthabbit:{name:"SmartHabbit",url:"https://adham107harp.github.io/smarthabbit/login.html"},labtrack:{name:"BU-LabTrack",url:"https://adham107harp.github.io/BU-LabTrack/"},capcom:{name:"CAPCOM: Storm Watch",url:"https://adham107harp.github.io/capcom/",open:"https://capcom-storm-watch.vercel.app/"}},x=new nd;x.domElement.className="live-layer",nt("#stage").append(x.domElement);let g=new Cr,p=document.createElement("div");p.className="live-hud",p.hidden=!0,p.innerHTML='<button type="button" class="live-back">\u2190 Back to the tour</button><span class="live-name"></span><a class="live-open" target="_blank" rel="noopener">Open in a new tab \u2197</a>',nt("#stage").append(p);let v=null;function T(E){let O=a.props.screenPlanes?.[E],ie=m[E];if(!O||!ie||v?.key===E)return;v&&y(!0),document.body.classList.add("live-mode"),Pi.stop(),G();let j=cs(),re=j.width/j.height<.9,de=re?.92:1.62,q=re?1.62:.92,ee=Math.round(re?Kn.clamp(innerWidth*.96,360,480):Kn.clamp(innerWidth*.92,820,1280)),fe=Math.round(ee*q/de),F=document.createElement("div");F.className="live-screen",F.style.width=ee+"px",F.style.height=fe+"px";let Q=document.createElement("iframe");Q.src=ie.url,Q.title=ie.name+" live demo",Q.loading="eager",Q.allow="clipboard-write; fullscreen",F.append(Q);let ne=document.createElement("div");ne.className="live-loading",ne.textContent="Loading the live demo\u2026",F.append(ne),Q.addEventListener("load",()=>{ne.remove()});let ve=new td(F);O.updateWorldMatrix(!0,!1),O.getWorldPosition(ve.position),O.getWorldQuaternion(ve.quaternion);let _e=new B(0,0,1).applyQuaternion(ve.quaternion);ve.position.addScaledVector(_e,.003),ve.scale.setScalar(de/ee),g.add(ve);let Se=a.props.screens[E];re&&Ot.to([Se.rotation,O.rotation],{z:-Math.PI/2,duration:.8,ease:"power2.inOut"});let me=j.width/j.height,xe=Kn.degToRad(t.fov),oe=de/(re?.94:.88)/2/(Math.tan(xe/2)*me),ae=q/(re?.8:.84)/2/Math.tan(xe/2),we=ve.position.clone();d={tgt:we,pos:we.clone().addScaledVector(_e,Math.max(oe,ae)),k:0,q:Re,lock:!0},F.style.opacity="0",v={key:E,obj:ve,wrap:F,plane:O,bezel:Se,portrait:re,t0:performance.now()},p.querySelector(".live-name").textContent=ie.name+" \xB7 live demo",p.querySelector(".live-open").href=ie.open||ie.url,p.hidden=!1,l.setMood("excited",3),Tt.say(Qt==="ar"?"\u062F\u0647 \u0627\u0644\u062F\u064A\u0645\u0648 \u0627\u0644\u062D\u0642\u064A\u0642\u064A. \u062C\u0631\u0651\u0628\u0647 \u0628\u0646\u0641\u0633\u0643.":"This is the real thing. Go ahead, try it.",{temp:!0}),$t.play("whoosh"),un.unlock&&un.unlock("insider")}function y(E){v&&(v.portrait&&Ot.to([v.bezel.rotation,v.plane.rotation],{z:0,duration:.8,ease:"power2.inOut"}),g.remove(v.obj),v.wrap.remove(),v=null,p.hidden=!0,document.body.classList.remove("live-mode"),G(),Pi.start(),d&&(d.out=!0),E||$t.play("whoosh"))}location.hash.startsWith("#hq")&&(window.__live=()=>({k:d&&d.k,lock:d&&d.lock,out:d&&d.out,op:v&&v.wrap.style.opacity,cam:t.position.toArray(),tgt:d&&d.pos.toArray(),fov:t.fov})),p.querySelector(".live-back").addEventListener("click",()=>y()),addEventListener("keydown",E=>{E.key==="Escape"&&v&&y()}),document.querySelectorAll(".see3d").forEach(E=>E.addEventListener("click",()=>T(E.dataset.screen)));let b=nt("#threat"),M=nt("#risk-out");b.addEventListener("input",()=>{let E=b.value/100,O=Math.min(3,Math.floor(E*4-1e-4));a.props.research.userData.threat=E,M.dataset.tier=Math.max(0,O),M.querySelector("b").textContent=["Low","Medium","High","Critical"][Math.max(0,O)],E>.95?(un.unlock("red-team"),l.setMood("surprised",2.5),b.dataset.warned||(b.dataset.warned=1,Tt.say(c(Gs.threatHi),{temp:!0}))):E>.6?l.setMood("worried",2):E>.3&&l.setMood("focused",2)});let _=nt("#game-hud"),S=nt("#g-score"),A=nt("#g-time"),w=nt("#best"),D=0;try{D=+localStorage.getItem("adham-balloon-best")||0}catch{}let P=()=>{w.textContent=D?`Best: ${D}`:""};P(),nt("#play")?.addEventListener("click",()=>{a.game.active||(nl(5),a.game.start(15),_.hidden=!1,l.setMood("excited",16),Tt.say(c(Gs.gameStart),{temp:!0}),$t.play("whoosh"))}),a.game.onTick=E=>{S.textContent=E.score,A.textContent=Math.max(0,Math.ceil(E.left))},a.game.onEnd=E=>{if(_.hidden=!0,E.score>D){D=E.score;try{localStorage.setItem("adham-balloon-best",D)}catch{}}P(),Tt.say(Gs.gameEnd[Qt](E.score),{temp:!0,hold:5e3}),l.setMood(E.score>=8?"cool":"happy",4),l.setMode("celebrate"),E.score>=8&&un.unlock("popper")},un.onUnlock((E,O,ie)=>{l.setMood("love",2.5),$t.play("arrive"),O===ie&&setTimeout(()=>Tt.say(c(Gs.allArtifacts),{temp:!0,hold:6e3}),1500)});let N=new Wt(cs().width*s,cs().height*s,{type:nn,samples:4}),R=new Ju(oi,N);R.addPass(new Ku(e,t));let U=null;if(o==="high")try{U=new Da(e,t,innerWidth,innerHeight),U.output=Da.OUTPUT.Default,U.blendIntensity=.85,U.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1,scale:1.1}),R.addPass(U)}catch{U=null}let H=new Ia(new Ce(innerWidth/2,innerHeight/2),.36,.4,.95);R.addPass(H),R.addPass(new Qu);let k=new Pa({uniforms:{tDiffuse:{value:null},t:{value:0},amt:{value:.018}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t, amt; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
      void main(){ vec2 d = vUv-.5; float r = dot(d,d);
        vec3 c = texture2D(tDiffuse, vUv).rgb;
        c *= 1. - smoothstep(.15,.7,r)*.45;
        c += (h(vUv*800.)-.5)*amt;
        gl_FragColor = vec4(c,1.); }`});R.addPass(k);let $=!0,X=[],I=[],J,pe,Me=null;function V(){Me=Wv(),X=[],I=[];for(let E=0;E<ef;E++){let O=Ov(E);if(E===0){Me?(X.push(new B(5.6,3.1,O.z+9.5)),I.push(new B(1.9,2.9,O.z-3))):(X.push(new B(10,4.6,O.z+13)),I.push(new B(-1.2,6.2,8)));continue}if(E===ef-1){X.push(new B(-5.8,O.y+3.1,10.2)),I.push(new B(-.4,O.y+1.9,.6));continue}let ie=Math.sign(O.x)||1,j=Me?.9:1,re=[0,-5.6,7.3,-6.6,5.9,-3.9][E],de=O.x+(re-O.x)*(E===3?.6:.45);X.push(new B(de+Math.sign(re-O.x)*1.2,O.y+3*j,O.z+10.5*j)),I.push(new B(de,O.y+1.5,O.z-1))}J=new Zi(X,!1,"centripetal"),pe=new Zi(I,!1,"centripetal")}V();let Y=tf.map(E=>({left:0,right:1,center:.5})[E.dataset.side]??.5),ue={k:Sr?0:1},ce=new B(46,30,90),he=[],ye=()=>{let E=Pi.scroll??scrollY;he=tf.map(O=>O.getBoundingClientRect().top+E)};ye(),addEventListener("load",ye),new ResizeObserver(ye).observe(document.body);let We=(E,O,ie)=>{let j=Kn.clamp((ie-E)/(O-E),0,1);return j*j*(3-2*j)};function Ee(){let E=il()?cs().height:0,O=(Pi.scroll??scrollY)+E+(innerHeight-E)*.45,ie=(innerHeight-E)*.4,j=0;for(let re=1;re<he.length;re++)j+=We(he[re]-ie,he[re]+ie,O);return j}let Ue=new Ce,be=new kl;addEventListener("pointermove",E=>{let O=cs();Ue.set(Kn.clamp((E.clientX-O.left)/O.width*2-1,-1.5,1.5),Kn.clamp(-((E.clientY-O.top)/O.height)*2+1,-1.5,1.5))}),nf.addEventListener("pointerdown",E=>{let O=cs(),ie=new Ce((E.clientX-O.left)/O.width*2-1,-((E.clientY-O.top)/O.height)*2+1);if(be.setFromCamera(ie,t),be.intersectObject(l.root,!0).length){l.poke(),$t.play("poke");let q=performance.now();f=f.filter(fe=>q-fe<6e3),f.push(q);let ee=f.length;if(ee>=5&&un.unlock("poker"),ee>=7)l.setMood("dizzy",3),Tt.say(c(Gs.annoyed),{temp:!0});else if(ee>=5)l.setMood("annoyed",3),Tt.say(c(Gs.annoyed),{temp:!0});else if(ee>=3)l.setMood("shy",3),Tt.say(c(Gs.shy),{temp:!0});else{l.setMood("surprised",1.4);let fe=kv[Qt];Tt.say(fe[Math.random()*fe.length|0],{temp:!0})}return}let j=be.intersectObjects(a.clickables,!1)[0];if(!j)return;let re=j.object,de=re.userData.onClick;if(de==="gameBalloon"){a.game.hit(re)&&$t.play("pop");return}if(de==="balloon"){let q=re.userData.group;if(q.userData.popped)return;q.userData.popped=!0,$t.play("pop"),Ot.to(re.scale,{x:1.5,y:1.7,z:1.5,duration:.08,onComplete:()=>{re.visible=!1}}),Tt.say(Zc.balloon[Qt],{temp:!0}),setTimeout(()=>{re.visible=!0,re.scale.set(.01,.01,.01),Ot.to(re.scale,{x:1,y:1.18,z:1,duration:.8,ease:"elastic.out(1,.5)"}),q.userData.popped=!1},5e3)}else de==="rocket"?(a.props.rocket.userData.boost=1,$t.play("whoosh"),Tt.say(Zc.rocket[Qt],{temp:!0})):de==="moon"?(Tt.say(Zc.moon[Qt],{temp:!0}),$t.play("arrive"),un.unlock("moonwalker"),l.setMood("surprised",2)):de==="screen"?T(re.userData.key):de==="cap"&&(se(),Tt.say(Zc.cap[Qt],{temp:!0}))});let De=0,tt=!1;function se(){let E=a.props;$t.play("beam"),l.setMode("celebrate"),a.packetBoost=1,Ot.timeline().to(E.beam.material,{opacity:.85,duration:.35,ease:"power2.out"}).to(E.capLight,{intensity:60,duration:.3},0).to(E.beam.material,{opacity:0,duration:2.4,ease:"power1.in"},.9).to(E.capLight,{intensity:6,duration:2},1),E.rings.forEach((O,ie)=>Ot.fromTo(O.scale,{x:1,y:1,z:1},{x:9,y:9,z:9,duration:2.2,delay:ie*.3,ease:"power2.out"})),E.rings.forEach((O,ie)=>Ot.fromTo(O.material,{opacity:1},{opacity:0,duration:2.2,delay:ie*.3}))}Tt.onSend=()=>{se(),Tt.say(zv[Qt],{temp:!0,hold:5e3}),l.setMood("love",6),un.unlock("hired")},Tt.onTerm=()=>{l.setMood("focused",6),un.unlock("root")},Tt.onLangSet=()=>{Qt==="ar"&&un.unlock("polyglot")},Tt.onSound=E=>{E&&un.unlock("dj")},Tt.setMood=E=>yr[E]?(l.setMood(E,8),!0):!1,Tt.onLang=()=>{Ne=-1},Tt.onPoke=()=>{l.poke(),$t.play("poke")};function G(){let E=cs(),O=Math.max(1,E.width),ie=Math.max(1,E.height);oi.setSize(O,ie,!1),x.setSize(O,ie),R.setSize(O,ie),H.setSize(O/2,ie/2),U&&U.setSize(O,ie),Me!==Wv()&&V(),t.aspect=O/ie,t.fov=O/ie<.8?58:O/ie<1.2?50:42,t.updateProjectionMatrix()}addEventListener("resize",G),G();let Ae=performance.now(),Qe=0,Re=Ee(),Ne=-1,je=0,Ke=-1,z=new Ce,Je=new Ce,et=new B,Ze=new B;Qm(Re,Je),l.root.position.set(Je.x,jd(Je.x,Je.y),Je.y);let ge=0,ct=0,ke=location.hash.startsWith("#hq"),Ye=location.hash==="#hqsnap";function L(){let E=performance.now(),O=Math.min((E-Ae)/1e3,.05);Ae=E,Qe+=O;let ie=Qe,j=Ee();Re+=(j-Re)*Math.min(1,O*(Sr?30:3.4)),Ye&&(Re=j),Qm(Re,z);let re=z.distanceTo(Je),de=l.root;de.position.x=z.x,de.position.z=z.y;let q=jd(z.x,z.y);de.position.y+=(q-de.position.y)*Math.min(1,O*16),l.st.speed+=(re/Math.max(O,.001)-l.st.speed)*.2;let ee;re>.004?ee=Math.atan2(z.x-Je.x,z.y-Je.y):ee=Math.atan2(t.position.x-de.position.x,t.position.z-de.position.z);let fe=ee-de.rotation.y;fe=Math.atan2(Math.sin(fe),Math.cos(fe)),de.rotation.y+=fe*Math.min(1,O*7),Je.copy(z),l.st.look.set(Ue.x*.6,Ue.y*.5),l.st.talk=Tt.talking()?1:0;let F=Kn.clamp(Re/(ef-1),0,1);if(J.getPoint(F,t.position),pe.getPoint(F,Ze),ue.k>0&&t.position.lerp(ce,ue.k*ue.k),d&&(!d.lock&&Math.abs(Re-d.q)>.25&&(d.out=!0),d.k+=((d.out?0:1)-d.k)*Math.min(1,O*(d.lock?4:3)),d.out&&d.k<.01&&(d=null),d)){let xe=d.k*d.k*(3-2*d.k);t.position.lerp(d.pos,xe),Ze.lerp(d.tgt,xe)}v||(t.position.x+=Ue.x*.35,t.position.y+=Ue.y*.2),t.lookAt(Ze);let Q=Math.round(Re);Math.abs(Re-Q)<.02?je+=Ye?1:O:je=0,je>.25&&Ne!==Q&&(Ne=Q,Tt.lines(Bv[Qt][Q]),l.setMode(Fv[Q]),$t.play("arrive"),l.setMood(Hv[Q]),Q>=1&&un.unlock("first-step"),Q===ef-1&&un.unlock("summit")),Math.abs(Re-Ne)>.18&&Ne!==-1&&(Ne=-1,Tt.hide(),l.st.mode!=="celebrate"&&l.setMode("idle")),Q!==Ke&&(Ke=Q,Tt.level(Q)),a.packetBoost=Math.max(a.packetBoost,Math.min(1,Math.abs(Pi.velocity||0)/60)),a.update(ie,O,t);let ne=(performance.now()-h)/1e3,ve=Math.abs(Pi.velocity||0),_e=ne>25&&!a.game.active;u&&!_e&&(l.setMood("surprised",1.6),Tt.say(c(Gs.wake),{temp:!0})),u=_e,ve>110&&l.st.mood!=="dizzy"&&Tt.say(c(Gs.dizzy),{temp:!0}),l.st.music=$t.on,l.update(O,ie,{sleepy:_e,dizzy:ve>110,busy:re>.004}),Tt.moodChip(l.st.mood,yr[l.st.mood].aura);let Se=l.headAnchor();et.copy(Se).project(t);let me=cs();if(Tt.place((et.x*.5+.5)*me.width,(-et.y*.5+.5)*me.height,et.z<1,me),(De=(De+1)%6)===0){be.setFromCamera(Ue,t);let xe=be.intersectObject(l.root,!0).length>0,oe=xe||be.intersectObjects(a.clickables,!1).length>0;oe!==tt&&(tt=oe,nf.style.cursor=oe?"pointer":""),Tt.hint(xe,(et.x*.5+.5)*me.width,(-et.y*.5+.5)*me.height)}if(k.uniforms.t.value=ie,$?R.render(O):oi.render(e,t),v&&(v.wrap.style.opacity=String(Kn.clamp(Math.max((E-v.t0-900)/400,d?(d.k-.9)*10:1),0,1)),x.render(g,t)),ge++,!ke&&ge>30&&(ct+=O,ge>120)){ke=!0;let xe=ct/90;xe>.028&&U&&(U.enabled=!1),xe>.034&&(s=1,oi.setPixelRatio(1),G(),xe>.05&&($=!1,oi.shadowMap.enabled=!1))}}location.hash.startsWith("#hq")&&(window.__game=a.game),location.hash.startsWith("#hq")&&(window.__face=E=>{E&&l.setMood(E,60);let O=l.headAnchor();O.y-=.55;let ie=new B(t.position.x-O.x,0,t.position.z-O.z).normalize();d={tgt:O,pos:O.clone().add(ie.multiplyScalar(1.9)).add(new B(0,.15,0)),k:0,q:Re}}),location.hash==="#debug"&&(window.__dbg=()=>({qS:Re,q:Ee(),lastSpoken:Ne,settleT:je,mode:l.st.mode,speed:l.st.speed,pos:l.root.position.toArray().map(E=>+E.toFixed(2)),scroll:Pi.scroll,bounds:he}));try{await Promise.race([oi.compileAsync(e,t),new Promise(E=>setTimeout(E,4e3))])}catch{}Ot.ticker.add(L),await new Promise(E=>{r<=i&&E(),n.onLoad=E,setTimeout(E,6e3)}),i0(1),setTimeout(()=>{nt("#loader").classList.add("done"),n0(),s0(),Sr||Ot.to(ue,{k:0,duration:3.2,ease:"power3.inOut",onComplete:()=>{Math.round(Re)===0&&(Ne=-1)}})},350)}function i0(s){let e=document.querySelectorAll(".ld-s"),t=Math.round(s*e.length);e.forEach((i,r)=>i.classList.toggle("on",r<t));let n=nt("#ld-pct");n&&(n.textContent=`${Math.round(s*100)}%`)}i0(.15);function s0(){Sr||(document.querySelectorAll(".sec:not(#hero)").forEach(s=>{let e=s.querySelector("h2"),t=e?Jd.create(e,{type:"words",mask:"words"}):null,n=Ot.timeline({scrollTrigger:{trigger:s,start:"top 75%",once:!0}});t&&n.from(t.words,{yPercent:110,duration:.8,stagger:.06,ease:"power3.out"});let i=s.querySelectorAll(":scope > .label, :scope > p, .facts li, .skills button, .proj, .pipe > *, .sim, .game-card, .certs li, .bench li, #req, .contact-links li, .wall li");i.length&&n.from(i,{y:16,opacity:0,duration:.55,stagger:.025,ease:"power2.out"},.1)}),Ot.from("#hero > :not(h1)",{y:20,opacity:0,duration:.9,stagger:.1,ease:"power3.out",delay:.4}))}function lA(){let s=nt("#bubble"),e=nt("#bubble-text"),t=nt("#bubble-next"),n=nt("#poke-hint"),i=[],r=0,o=null,a=!1,l=null,c=null,h=!1,u={onSend:null,onLang:null,onPoke:null};function f(se){clearTimeout(l),o&&o.kill(),e.innerHTML="";let G=document.createElement("span");G.className="ghost",G.textContent=se;let Ae=document.createElement("span");Ae.className="typed",e.append(G,Ae),a=!0,s.hidden=!1,s.dir=Qt==="ar"?"rtl":"ltr",s.lang=Qt,h||(h=!0,Ot.fromTo(s,{scale:.6,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2)"}));let Qe=Array.from(se),Re={n:0};o=Ot.to(Re,{n:Qe.length,duration:Sr?0:Math.min(2.6,Qe.length*.028),ease:"none",onUpdate:()=>{let Ne=Math.round(Re.n);Ne!==Ae.textContent.length&&Ne%2===0&&$t.play("tick"),Ae.textContent=Qe.slice(0,Ne).join("")},onComplete:()=>{a=!1,Ae.textContent=se,r<i.length-1&&(l=setTimeout(()=>d(),2600))}})}function d(){r<i.length-1?(r++,f(i[r])):i.length&&(r=0,f(i[0]))}t.addEventListener("click",()=>{clearTimeout(c),d()}),s.addEventListener("click",se=>{(se.target===s||se.target===e)&&(clearTimeout(c),d())}),u.lines=se=>{clearTimeout(c),i=se,r=0,f(se[0])},u.say=(se,{temp:G,hold:Ae=3200}={})=>{let Qe=i.slice(),Re=r,Ne=i;f(se),clearTimeout(c),G&&(c=setTimeout(()=>{Qe.length&&i===Ne&&(r=Re,f(i[r]))},Ae))},u.hide=()=>{clearTimeout(l),clearTimeout(c),i=[],h&&(h=!1,a=!1,o&&o.kill(),Ot.to(s,{scale:.7,opacity:0,duration:.2,onComplete:()=>{h||(s.hidden=!0)}}))},u.talking=()=>a;let m=0,x=0;u.place=(se,G,Ae,Qe)=>{if(s.hidden)return;m=s.offsetWidth,x=s.offsetHeight;let Re=il()?62:74,Ne=se-40,je=G-x-20,Ke=!1,z=!1;je<Re&&il()?(z=!0,je=G+10,Ne=se+44+m<Qe.width?se+44:se-m-44):je<Re&&(je=G+30,Ke=!0),Ne=Math.max(10,Math.min(Qe.width-m-10,Ne)),je=Math.max(Re,Math.min(Qe.height-x-10,je)),s.classList.toggle("below",Ke),s.classList.toggle("side",z),s.style.setProperty("--tail",`${Math.max(20,Math.min(m-20,se-Ne))}px`),s.style.transform=`translate(${Ne}px,${je}px)`,s.style.visibility=Ae?"visible":"hidden"},u.hint=(se,G,Ae)=>{n.classList.toggle("on",se&&!h),se&&(n.style.transform=`translate(${G+30}px,${Ae+40}px)`)};let g=nt("#mini"),p=nt("#mini-label"),v=[86,74,62,50,38,26,14];g.innerHTML=v.map((se,G)=>`<rect data-i="${G}" x="${(90-se)/2}" y="${128-G*19}" width="${se}" height="16" rx="2"><title>${jm[G]}</title></rect>`).join(""),g.querySelectorAll("rect").forEach(se=>se.addEventListener("click",()=>nl(+se.dataset.i)));let T=document.querySelectorAll(".links a");u.level=se=>{u.current=se,g.querySelectorAll("rect").forEach((G,Ae)=>{G.classList.toggle("on",Ae===se),G.classList.toggle("done",Ae<se)}),p.textContent=jm[se],T.forEach(G=>G.classList.toggle("on",+G.dataset.go===se))};let y=nt("#lang"),b=()=>{y.textContent=Qt==="ar"?"EN":"\u0639",y.setAttribute("aria-label",Qt==="ar"?"Switch the guide to English":"Switch the guide to Egyptian Arabic"),document.documentElement.classList.toggle("ar",Qt==="ar")};y.addEventListener("click",()=>{Qt=Qt==="ar"?"en":"ar";try{localStorage.setItem("adham-guide-lang",Qt)}catch{}b(),u.onLang&&u.onLang(),u.onLangSet&&u.onLangSet()}),b();let M={name:nt("#f-name"),email:nt("#f-email"),role:nt("#f-role"),msg:nt("#f-msg")},_=nt("#req-preview"),S=nt("#req-status"),A=se=>JSON.stringify(se),w="adhamharp994@gmail.com",D=`https://formsubmit.co/ajax/${w}`,P=()=>`POST /api/hire HTTP/1.1
Host: adham107harp.github.io
Content-Type: application/json

{
  "from": ${A(M.name.value||"you")},
  "replyTo": ${A(M.email.value||"you@company.com")},
  "about": ${A(M.role.value||"an opportunity")},
  "message": ${A((M.msg.value||"\u2026").slice(0,140))}
}`,N=()=>{_.textContent=P()};Object.values(M).forEach(se=>se.addEventListener("input",N)),N();let R=!1;nt("#req").addEventListener("submit",async se=>{if(se.preventDefault(),R)return;let G=M.name.value.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(M.email.value.trim())?M.msg.value.trim()?null:M.msg:M.email:M.name;if(G){S.textContent=`400 Bad Request: ${G===M.email?"that email doesn't look right":`the ${G.name==="msg"?"message":G.name} is empty`}.`,G.focus(),u.mood&&u.mood("worried");return}if(nt("#req .hp").value)return;R=!0;let Ae=nt("#send-btn");Ae.disabled=!0,Ae.textContent="Sending\u2026";let Qe=performance.now();_.textContent=P()+`

\u2026 awaiting response`;try{let Re=await fetch(D,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:M.name.value.trim(),email:M.email.value.trim(),topic:M.role.value.trim()||"(none)",message:M.msg.value.trim(),_subject:`Portfolio: ${M.role.value.trim()||"new message"} from ${M.name.value.trim()}`,_template:"table",_captcha:"false",_replyto:M.email.value.trim()})}),Ne=await Re.json().catch(()=>({}));if(!Re.ok||String(Ne.success)!=="true")throw new Error(Ne.message||Re.status);let je=Math.round(performance.now()-Qe);_.textContent=P()+`

HTTP/1.1 201 Created  (${je} ms)
{ "delivered": true, "to": "Adham's inbox" }`,S.textContent="201 Created. Delivered to my inbox. I'll reply to your email.",u.onSend&&u.onSend(),M.msg.value=""}catch{let Ne=`mailto:${w}?subject=${encodeURIComponent(`Portfolio: ${M.role.value||"Hello"}`)}&body=${encodeURIComponent(M.msg.value)}`;_.textContent=P()+`

HTTP/1.1 503 Service Unavailable
{ "fallback": "email" }`,S.innerHTML="",S.append("The relay didn't answer. ");let je=document.createElement("a");je.href=Ne,je.textContent=`Email me at ${w}`,S.append(je," instead."),u.mood&&u.mood("worried")}finally{R=!1,Ae.disabled=!1,Ae.textContent="Send message"}}),nt("#copy-mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(w),S.textContent=`Copied ${w}`}catch{S.textContent=w}});let U=nt("#term"),H=nt("#term-out"),k=nt("#term-in"),$=(se,G="")=>{let Ae=document.createElement("div");G&&(Ae.className=G),Ae.textContent=se,H.appendChild(Ae),H.scrollTop=H.scrollHeight},X={home:0,hero:0,about:1,stack:2,work:3,projects:3,research:4,arena:5,contact:6},I={artifacts:()=>(De(),"opening the artifact case\u2026"),moods:()=>"moods: happy excited focused thinking cool surprised shy annoyed sleepy dizzy love worried vibing \xB7 try: mood cool",help:()=>"commands: moods \xB7 mood <name> \xB7 artifacts \xB7 whoami \xB7 ls \xB7 cat about \xB7 projects \xB7 research \xB7 arena \xB7 contact \xB7 goto <section> \xB7 lang ar|en \xB7 poke \xB7 sudo hire adham \xB7 clear \xB7 exit",whoami:()=>"Adham Harp \u2014 AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).",ls:()=>"about/  stack/  work/  research/  arena/  contact/  capstone.gold","cat about":()=>"AI & Data Science student at Badya University. Backend in Node.js and PostgreSQL, ML in Python.",projects:()=>"SmartHabbit (backend) \xB7 BU-LabTrack (backend API) \xB7 CAPCOM: Storm Watch (NASA Space Apps 2026)",research:()=>"IoT Sentinel: XGBoost + Isolation Forest + decision fusion \u2192 4-tier risk. IEEE Xplore, ITC-Egypt 2026.",arena:()=>"ICPC ECPC qualifications: 88th (2025), 177th (2026). 248+ Codeforces problems.",contact:()=>`email: ${w}
github: adham107harp
linkedin: adham-harp-43bb6232b`,poke:()=>(u.onPoke&&u.onPoke(),"ouch. he says hi."),"sudo hire adham":()=>(setTimeout(()=>{Me(),nl(6),setTimeout(()=>u.onSend&&u.onSend(),2800)},900),"[sudo] permission granted. 201 Created \u2014 taking you to the capstone\u2026"),clear:()=>(H.textContent="",null),exit:()=>(Me(),null)};function J(se){let G=se.trim().replace(/\s+/g," ").toLowerCase();if(!G)return;if($(`$ ${se}`,"c"),G.startsWith("goto ")){let Re=X[G.slice(5)];if(Re===void 0)return $(`no such section: ${G.slice(5)}`,"e");Me(),nl(Re);return}if(G.startsWith("mood ")){let Re=G.slice(5);return $(u.setMood&&u.setMood(Re)?`mini-Adham is now ${Re}.`:`unknown mood: ${Re}. try "moods".`,u.setMood&&yr[Re]?"":"e")}if(G.startsWith("lang ")){let Re=G.slice(5);if(Re!=="ar"&&Re!=="en")return $("lang ar | lang en","e");Qt=Re;try{localStorage.setItem("adham-guide-lang",Qt)}catch{}return b(),u.onLang&&u.onLang(),$(`guide speaks ${Re==="ar"?"Egyptian Arabic":"English"} now.`)}if(G==="sudo rm -rf /")return $("nice try. the pyramid has stood for 4,600 years.","e");let Ae=I[G];if(!Ae)return $(`command not found: ${G}. try "help".`,"e");let Qe=Ae();Qe&&$(Qe)}function pe(){u.onTerm&&u.onTerm(),U.hidden=!1,H.textContent||$('Welcome to adham@saqqara. Type "help".'),setTimeout(()=>k.focus(),30),Pi.stop()}function Me(){U.hidden=!0,Pi.start(),nt("#term-btn").focus()}nt("#term-btn").addEventListener("click",pe),nt("#term-close").addEventListener("click",Me),U.addEventListener("click",se=>{se.target===U&&Me()}),nt("#term-form").addEventListener("submit",se=>{se.preventDefault(),J(k.value),k.value=""});let V=nt("#sound"),Y=()=>{V.setAttribute("aria-pressed",String($t.on)),V.title=$t.on?"Sound on":"Sound off",V.classList.toggle("on",$t.on)};V.addEventListener("click",()=>{$t.toggle(),Y(),u.onSound&&u.onSound($t.on);try{localStorage.setItem("adham-sound",$t.on?"1":"0")}catch{}}),document.addEventListener("visibilitychange",()=>$t.pause(document.hidden)),Y(),addEventListener("keydown",se=>{let G=/INPUT|TEXTAREA/.test(document.activeElement?.tagName);if(!G&&U.hidden&&(se.key==="ArrowDown"||se.key==="ArrowUp"||se.key==="PageDown"||se.key==="PageUp")){se.preventDefault();let Ae=u.current??0;nl(Math.max(0,Math.min(tf.length-1,Ae+(se.key==="ArrowDown"||se.key==="PageDown"?1:-1))));return}se.key==="Escape"&&!U.hidden?Me():(se.key==="`"||se.key==="~")&&!G&&(se.preventDefault(),U.hidden?pe():Me())});let ue=nt("#mood-chip"),ce="";u.moodChip=(se,G)=>{if(se===ce)return;ce=se,ue.querySelector("span").textContent=`mood: ${se}`;let Ae="#"+G.toString(16).padStart(6,"0");ue.querySelector("i").style.background=Ae,ue.querySelector("i").style.boxShadow=`0 0 10px ${Ae}`};let he=nt("#art-btn"),ye=nt("#art-count"),We=nt("#art-panel"),Ee=nt("#art-list"),Ue=nt("#toasts"),be=()=>{ye.textContent=un.count(),nt("#art-of").textContent=`${un.count()}/${un.list.length}`,Ee.innerHTML=un.list.map(se=>`<li class="${un.has(se.id)?"got":""}"><span class="ic">${se.icon}</span><div><b>${un.has(se.id)?se.name:"???"}</b><span>${se.hint}</span></div></li>`).join("")};function De(){be(),We.hidden=!1,Pi.stop()}let tt=()=>{We.hidden=!0,Pi.start()};if(he.addEventListener("click",De),nt("#art-close").addEventListener("click",tt),We.addEventListener("click",se=>{se.target===We&&tt()}),addEventListener("keydown",se=>{se.key==="Escape"&&!We.hidden&&tt()}),un.onUnlock((se,G,Ae)=>{be(),he.classList.remove("bump"),he.offsetWidth,he.classList.add("bump");let Qe=document.createElement("div");Qe.className="toast";let Re=document.createElement("span");Re.className="ic",Re.textContent=se.icon;let Ne=document.createElement("div");Ne.innerHTML=`<small>Artifact ${G}/${Ae} unlocked</small>`;let je=document.createElement("b");je.textContent=se.name,Ne.append(je),Qe.append(Re,Ne),Ue.append(Qe),Ot.fromTo(Qe,{x:-40,opacity:0},{x:0,opacity:1,duration:.5,ease:"back.out(2)"}),Ot.to(Qe,{opacity:0,y:10,delay:3.6,duration:.5,onComplete:()=>Qe.remove()})}),be(),document.querySelectorAll("img.lg").forEach(se=>{let G=()=>{if(se.closest(".certs,.wall")){let Ae=document.createElement("span");Ae.className="lg-ph",se.replaceWith(Ae)}else se.remove()};se.complete&&!se.naturalWidth?G():se.addEventListener("error",G)}),!Sr){let se=nt("#cursor"),G=se.querySelector(".c-dot"),Ae=se.querySelector(".c-ring"),Qe=innerWidth/2,Re=innerHeight/2,Ne=Qe,je=Re;addEventListener("pointermove",z=>{Qe=z.clientX,Re=z.clientY,se.classList.toggle("hot",!!z.target.closest("a,button,input,textarea,label,[data-go]")||document.body.style.cursor==="pointer"||Ke())});let Ke=()=>nt("#scene")&&nt("#scene").style.cursor==="pointer";Ot.ticker.add(()=>{Ne+=(Qe-Ne)*.2,je+=(Re-je)*.2,G.style.transform=`translate(${Qe}px,${Re}px)`,Ae.style.transform=`translate(${Ne}px,${je}px)`}),document.querySelectorAll(".mag").forEach(z=>{z.addEventListener("pointermove",Je=>{let et=z.getBoundingClientRect();Ot.to(z,{x:(Je.clientX-et.left-et.width/2)*.25,y:(Je.clientY-et.top-et.height/2)*.35,duration:.3})}),z.addEventListener("pointerleave",()=>Ot.to(z,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}))}),document.querySelectorAll(".tilt").forEach(z=>{z.addEventListener("pointermove",Je=>{if(innerWidth<=820)return;let et=z.getBoundingClientRect(),Ze=(Je.clientX-et.left)/et.width,ge=(Je.clientY-et.top)/et.height;z.style.transform=`perspective(900px) rotateX(${(.5-ge)*5}deg) rotateY(${(Ze-.5)*6}deg)`,z.style.setProperty("--gx",`${Ze*100}%`),z.style.setProperty("--gy",`${ge*100}%`)}),z.addEventListener("pointerleave",()=>{z.style.transform=""})}),document.querySelectorAll("[data-count]").forEach(z=>{let Je=+z.dataset.count,et=z.dataset.suffix||"",Ze=Je>1e3?Je-30:0,ge={v:Ze};dt.create({trigger:z,start:"top 90%",once:!0,onEnter:()=>Ot.to(ge,{v:Je,duration:1.6,ease:"power2.out",onUpdate:()=>z.textContent=Math.round(ge.v)+et})})})}return u}
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

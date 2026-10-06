var W=Object.defineProperty;var n=(i,e)=>W(i,"name",{value:e,configurable:!0});function o(i){return new Error(`[unenv] ${i} is not implemented yet!`)}n(o,"createNotImplementedError");function c(i){return Object.assign(n(()=>{throw o(i)},"fn"),{__unenv__:!0})}n(c,"notImplemented");function O(i){return class{__unenv__=!0;constructor(){throw new Error(`[unenv] ${i} is not implemented yet!`)}}}n(O,"notImplementedClass");var w=globalThis.performance?.timeOrigin??Date.now(),P=globalThis.performance?.now?globalThis.performance.now.bind(globalThis.performance):()=>Date.now()-w,V={name:"node",entryType:"node",startTime:0,duration:0,nodeStart:0,v8Start:0,bootstrapComplete:0,environment:0,loopStart:0,loopExit:0,idleTime:0,uvMetricsInfo:{loopCount:0,events:0,eventsWaiting:0},detail:void 0,toJSON(){return this}},p=class{static{n(this,"PerformanceEntry")}__unenv__=!0;detail;entryType="event";name;startTime;constructor(e,t){this.name=e,this.startTime=t?.startTime||P(),this.detail=t?.detail}get duration(){return P()-this.startTime}toJSON(){return{name:this.name,entryType:this.entryType,startTime:this.startTime,duration:this.duration,detail:this.detail}}},y=class extends p{static{n(this,"PerformanceMark")}entryType="mark";constructor(){super(...arguments)}get duration(){return 0}},_=class extends p{static{n(this,"PerformanceMeasure")}entryType="measure"},m=class extends p{static{n(this,"PerformanceResourceTiming")}entryType="resource";serverTiming=[];connectEnd=0;connectStart=0;decodedBodySize=0;domainLookupEnd=0;domainLookupStart=0;encodedBodySize=0;fetchStart=0;initiatorType="";name="";nextHopProtocol="";redirectEnd=0;redirectStart=0;requestStart=0;responseEnd=0;responseStart=0;secureConnectionStart=0;startTime=0;transferSize=0;workerStart=0;responseStatus=0},E=class{static{n(this,"PerformanceObserverEntryList")}__unenv__=!0;getEntries(){return[]}getEntriesByName(e,t){return[]}getEntriesByType(e){return[]}},f=class{static{n(this,"Performance")}__unenv__=!0;timeOrigin=w;eventCounts=new Map;_entries=[];_resourceTimingBufferSize=0;navigation=void 0;timing=void 0;timerify(e,t){throw o("Performance.timerify")}get nodeTiming(){return V}eventLoopUtilization(){return{}}markResourceTiming(){return new m("")}onresourcetimingbufferfull=null;now(){return this.timeOrigin===w?P():Date.now()-this.timeOrigin}clearMarks(e){this._entries=e?this._entries.filter(t=>t.name!==e):this._entries.filter(t=>t.entryType!=="mark")}clearMeasures(e){this._entries=e?this._entries.filter(t=>t.name!==e):this._entries.filter(t=>t.entryType!=="measure")}clearResourceTimings(){this._entries=this._entries.filter(e=>e.entryType!=="resource"||e.entryType!=="navigation")}getEntries(){return this._entries}getEntriesByName(e,t){return this._entries.filter(r=>r.name===e&&(!t||r.entryType===t))}getEntriesByType(e){return this._entries.filter(t=>t.entryType===e)}mark(e,t){let r=new y(e,t);return this._entries.push(r),r}measure(e,t,r){let l,d;typeof t=="string"?(l=this.getEntriesByName(t,"mark")[0]?.startTime,d=this.getEntriesByName(r,"mark")[0]?.startTime):(l=Number.parseFloat(t?.start)||this.now(),d=Number.parseFloat(t?.end)||this.now());let u=new _(e,{startTime:l,detail:{start:l,end:d}});return this._entries.push(u),u}setResourceTimingBufferSize(e){this._resourceTimingBufferSize=e}addEventListener(e,t,r){throw o("Performance.addEventListener")}removeEventListener(e,t,r){throw o("Performance.removeEventListener")}dispatchEvent(e){throw o("Performance.dispatchEvent")}toJSON(){return this}},b=class{static{n(this,"PerformanceObserver")}__unenv__=!0;static supportedEntryTypes=[];_callback=null;constructor(e){this._callback=e}takeRecords(){return[]}disconnect(){throw o("PerformanceObserver.disconnect")}observe(e){throw o("PerformanceObserver.observe")}bind(e){return e}runInAsyncScope(e,t,...r){return e.call(t,...r)}asyncId(){return 0}triggerAsyncId(){return 0}emitDestroy(){return this}},h=globalThis.performance&&"addEventListener"in globalThis.performance?globalThis.performance:new f;if(!("__unenv__"in h)){let i=f.prototype;for(let e of Object.getOwnPropertyNames(i))if(e!=="constructor"&&!(e in h)){let t=Object.getOwnPropertyDescriptor(i,e);t&&Object.defineProperty(h,e,t)}}globalThis.performance=h;globalThis.Performance=f;globalThis.PerformanceEntry=p;globalThis.PerformanceMark=y;globalThis.PerformanceMeasure=_;globalThis.PerformanceObserver=b;globalThis.PerformanceObserverEntryList=E;globalThis.PerformanceResourceTiming=m;import{Writable as S}from"node:stream";var s=Object.assign(()=>{},{__unenv__:!0});var a=globalThis.console,L=!0,M=new S,N=new S,T=a?.log??s,X=a?.info??T,Sr=a?.trace??X,Lr=a?.debug??T,Mr=a?.table??T,j=a?.error??T,Nr=a?.warn??j,Cr=a?.createTask??c("console.createTask");var Ir=a?.clear??s,Fr=a?.count??s,Dr=a?.countReset??s,kr=a?.dir??s,Br=a?.dirxml??s,Gr=a?.group??s,Ur=a?.groupEnd??s,zr=a?.groupCollapsed??s,Hr=a?.profile??s,Yr=a?.profileEnd??s,Wr=a?.time??s,Vr=a?.timeEnd??s,Xr=a?.timeLog??s,jr=a?.timeStamp??s,C=a?.Console??O("console.Console"),I=new Map;var F=s,D=s;var A=globalThis.console,{assert:en,clear:tn,context:rn,count:nn,countReset:on,createTask:an,debug:sn,dir:cn,dirxml:ln,error:dn,group:un,groupCollapsed:pn,groupEnd:fn,info:gn,log:_n,profile:mn,profileEnd:hn,table:xn,time:En,timeEnd:bn,timeLog:Tn,timeStamp:vn,trace:wn,warn:Pn}=A;Object.assign(A,{Console:C,_ignoreErrors:L,_stderr:M,_stderrErrorHandler:D,_stdout:N,_stdoutErrorHandler:F,_times:I});var k=A;globalThis.console=k;var B=Object.assign(n(function(e){let t=Date.now(),r=Math.trunc(t/1e3),l=t%1e3*1e6;if(e){let d=r-e[0],u=l-e[0];return u<0&&(d=d-1,u=1e9+u),[d,u]}return[r,l]},"hrtime"),{bigint:n(function(){return BigInt(Date.now()*1e6)},"bigint")});import{EventEmitter as G}from"node:events";var x=class{static{n(this,"ReadStream")}fd;isRaw=!1;isTTY=!1;constructor(e){this.fd=e}setRawMode(e){return this.isRaw=e,this}};var g=class{static{n(this,"WriteStream")}fd;columns=80;rows=24;isTTY=!1;constructor(e){this.fd=e}clearLine(e,t){return t&&t(),!1}clearScreenDown(e){return e&&e(),!1}cursorTo(e,t,r){return r&&typeof r=="function"&&r(),!1}moveCursor(e,t,r){return r&&r(),!1}getColorDepth(e){return 1}hasColors(e,t){return!1}getWindowSize(){return[this.columns,this.rows]}write(e,t,r){e instanceof Uint8Array&&(e=new TextDecoder().decode(e));try{console.log(e)}catch{}return r&&typeof r=="function"&&r(),!1}};var R="22.14.0";var v=class i extends G{static{n(this,"Process")}env;hrtime;nextTick;constructor(e){super(),this.env=e.env,this.hrtime=e.hrtime,this.nextTick=e.nextTick;for(let t of[...Object.getOwnPropertyNames(i.prototype),...Object.getOwnPropertyNames(G.prototype)]){let r=this[t];typeof r=="function"&&(this[t]=r.bind(this))}}emitWarning(e,t,r){console.warn(`${r?`[${r}] `:""}${t?`${t}: `:""}${e}`)}emit(...e){return super.emit(...e)}listeners(e){return super.listeners(e)}#t;#r;#n;get stdin(){return this.#t??=new x(0)}get stdout(){return this.#r??=new g(1)}get stderr(){return this.#n??=new g(2)}#e="/";chdir(e){this.#e=e}cwd(){return this.#e}arch="";platform="";argv=[];argv0="";execArgv=[];execPath="";title="";pid=200;ppid=100;get version(){return`v${R}`}get versions(){return{node:R}}get allowedNodeEnvironmentFlags(){return new Set}get sourceMapsEnabled(){return!1}get debugPort(){return 0}get throwDeprecation(){return!1}get traceDeprecation(){return!1}get features(){return{}}get release(){return{}}get connected(){return!1}get config(){return{}}get moduleLoadList(){return[]}constrainedMemory(){return 0}availableMemory(){return 0}uptime(){return 0}resourceUsage(){return{}}ref(){}unref(){}umask(){throw o("process.umask")}getBuiltinModule(){}getActiveResourcesInfo(){throw o("process.getActiveResourcesInfo")}exit(){throw o("process.exit")}reallyExit(){throw o("process.reallyExit")}kill(){throw o("process.kill")}abort(){throw o("process.abort")}dlopen(){throw o("process.dlopen")}setSourceMapsEnabled(){throw o("process.setSourceMapsEnabled")}loadEnvFile(){throw o("process.loadEnvFile")}disconnect(){throw o("process.disconnect")}cpuUsage(){throw o("process.cpuUsage")}setUncaughtExceptionCaptureCallback(){throw o("process.setUncaughtExceptionCaptureCallback")}hasUncaughtExceptionCaptureCallback(){throw o("process.hasUncaughtExceptionCaptureCallback")}initgroups(){throw o("process.initgroups")}openStdin(){throw o("process.openStdin")}assert(){throw o("process.assert")}binding(){throw o("process.binding")}permission={has:c("process.permission.has")};report={directory:"",filename:"",signal:"SIGUSR2",compact:!1,reportOnFatalError:!1,reportOnSignal:!1,reportOnUncaughtException:!1,getReport:c("process.report.getReport"),writeReport:c("process.report.writeReport")};finalization={register:c("process.finalization.register"),unregister:c("process.finalization.unregister"),registerBeforeExit:c("process.finalization.registerBeforeExit")};memoryUsage=Object.assign(()=>({arrayBuffers:0,rss:0,external:0,heapTotal:0,heapUsed:0}),{rss:n(()=>0,"rss")});mainModule=void 0;domain=void 0;send=void 0;exitCode=void 0;channel=void 0;getegid=void 0;geteuid=void 0;getgid=void 0;getgroups=void 0;getuid=void 0;setegid=void 0;seteuid=void 0;setgid=void 0;setgroups=void 0;setuid=void 0;_events=void 0;_eventsCount=void 0;_exiting=void 0;_maxListeners=void 0;_debugEnd=void 0;_debugProcess=void 0;_fatalException=void 0;_getActiveHandles=void 0;_getActiveRequests=void 0;_kill=void 0;_preload_modules=void 0;_rawDebug=void 0;_startProfilerIdleNotifier=void 0;_stopProfilerIdleNotifier=void 0;_tickCallback=void 0;_disconnect=void 0;_handleQueue=void 0;_pendingMessage=void 0;_channel=void 0;_send=void 0;_linkedBinding=void 0};var U=globalThis.process,z=U.getBuiltinModule,H=z("node:process"),q=new v({env:U.env,hrtime:B,nextTick:H.nextTick}),{exit:$,features:K,platform:J}=H,{_channel:Z,_debugEnd:Q,_debugProcess:ee,_disconnect:te,_events:re,_eventsCount:ne,_exiting:oe,_fatalException:ie,_getActiveHandles:ae,_getActiveRequests:se,_handleQueue:ce,_kill:le,_linkedBinding:de,_maxListeners:ue,_pendingMessage:pe,_preload_modules:fe,_rawDebug:ge,_send:_e,_startProfilerIdleNotifier:me,_stopProfilerIdleNotifier:he,_tickCallback:xe,abort:Ee,addListener:be,allowedNodeEnvironmentFlags:Te,arch:ve,argv:we,argv0:Pe,assert:ye,availableMemory:Ae,binding:Re,channel:Oe,chdir:Se,config:Le,connected:Me,constrainedMemory:Ne,cpuUsage:Ce,cwd:Ie,debugPort:Fe,disconnect:De,dlopen:ke,domain:Be,emit:Ge,emitWarning:Ue,env:ze,eventNames:He,execArgv:Ye,execPath:We,exitCode:Ve,finalization:Xe,getActiveResourcesInfo:je,getegid:qe,geteuid:$e,getgid:Ke,getgroups:Je,getMaxListeners:Ze,getuid:Qe,hasUncaughtExceptionCaptureCallback:et,hrtime:tt,initgroups:rt,kill:nt,listenerCount:ot,listeners:it,loadEnvFile:at,mainModule:st,memoryUsage:ct,moduleLoadList:lt,nextTick:dt,off:ut,on:pt,once:ft,openStdin:gt,permission:_t,pid:mt,ppid:ht,prependListener:xt,prependOnceListener:Et,rawListeners:bt,reallyExit:Tt,ref:go,release:vt,removeAllListeners:wt,removeListener:Pt,report:yt,resourceUsage:At,send:Rt,setegid:Ot,seteuid:St,setgid:Lt,setgroups:Mt,setMaxListeners:Nt,setSourceMapsEnabled:Ct,setuid:It,setUncaughtExceptionCaptureCallback:Ft,sourceMapsEnabled:Dt,stderr:kt,stdin:Bt,stdout:Gt,throwDeprecation:Ut,title:zt,traceDeprecation:Ht,umask:Yt,unref:_o,uptime:Wt,version:Vt,versions:Xt}=q,jt={abort:Ee,addListener:be,allowedNodeEnvironmentFlags:Te,hasUncaughtExceptionCaptureCallback:et,setUncaughtExceptionCaptureCallback:Ft,loadEnvFile:at,sourceMapsEnabled:Dt,arch:ve,argv:we,argv0:Pe,chdir:Se,config:Le,connected:Me,constrainedMemory:Ne,availableMemory:Ae,cpuUsage:Ce,cwd:Ie,debugPort:Fe,dlopen:ke,disconnect:De,emit:Ge,emitWarning:Ue,env:ze,eventNames:He,execArgv:Ye,execPath:We,exit:$,finalization:Xe,features:K,getBuiltinModule:z,getActiveResourcesInfo:je,getMaxListeners:Ze,hrtime:tt,kill:nt,listeners:it,listenerCount:ot,memoryUsage:ct,nextTick:dt,on:pt,off:ut,once:ft,pid:mt,platform:J,ppid:ht,prependListener:xt,prependOnceListener:Et,rawListeners:bt,release:vt,removeAllListeners:wt,removeListener:Pt,report:yt,resourceUsage:At,setMaxListeners:Nt,setSourceMapsEnabled:Ct,stderr:kt,stdin:Bt,stdout:Gt,title:zt,throwDeprecation:Ut,traceDeprecation:Ht,umask:Yt,uptime:Wt,version:Vt,versions:Xt,domain:Be,initgroups:rt,moduleLoadList:lt,reallyExit:Tt,openStdin:gt,assert:ye,binding:Re,send:Rt,exitCode:Ve,channel:Oe,getegid:qe,geteuid:$e,getgid:Ke,getgroups:Je,getuid:Qe,setegid:Ot,seteuid:St,setgid:Lt,setgroups:Mt,setuid:It,permission:_t,mainModule:st,_events:re,_eventsCount:ne,_exiting:oe,_maxListeners:ue,_debugEnd:Q,_debugProcess:ee,_fatalException:ie,_getActiveHandles:ae,_getActiveRequests:se,_kill:le,_preload_modules:fe,_rawDebug:ge,_startProfilerIdleNotifier:me,_stopProfilerIdleNotifier:he,_tickCallback:xe,_disconnect:te,_handleQueue:ce,_pendingMessage:pe,_channel:Z,_send:_e,_linkedBinding:de},Y=jt;globalThis.process=Y;var qt=`#version 300 es
in vec2 a_position;
out vec2 vTexCoord;
void main() {
    vTexCoord = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,$t=`#version 300 es
precision highp float;
in vec2 vTexCoord;
out vec4 fragColor;
uniform sampler2D u_state;
uniform float u_step;
uniform float u_scale_a;
uniform float u_four_loop_gamma;
uniform float u_grid_size;
const float PI = 3.14159265;
const float TWO_PI = 6.28318531;
const float PHI = 1.618033988749895;
void main() {
    float local_step = u_step / (u_grid_size * max(0.01, u_scale_a * u_grid_size));
    vec4 data = texture(u_state, vTexCoord);
    vec4 n_right = texture(u_state, vTexCoord + vec2(local_step, 0.0));
    vec4 n_left  = texture(u_state, vTexCoord + vec2(-local_step, 0.0));
    vec4 n_top   = texture(u_state, vTexCoord + vec2(0.0, local_step));
    vec4 n_down  = texture(u_state, vTexCoord + vec2(0.0, -local_step));
    float phase = data.r, type = data.g, flash = data.b, neutrino = data.a;
    float phase_gradient_x = sin((n_right.r - n_left.r) * 0.5);
    float phase_gradient_y = sin((n_top.r - n_down.r) * 0.5);
    float field_tension = clamp(abs(phase_gradient_x) + abs(phase_gradient_y), 0.0, 1.0);
    float current_gamma = u_scale_a / (1.0 + field_tension);
    if (current_gamma < u_four_loop_gamma) {
        phase = mod(phase + u_step * (1.0 + field_tension * PHI * (1.0 / u_four_loop_gamma)), TWO_PI);
    } else {
        phase = mod(phase + u_step * (1.0 + field_tension * PHI), TWO_PI);
    }
    float c_diff = 1.0 / PHI;
    float avg_flash = (n_right.b + n_left.b + n_top.b + n_down.b) * 0.25;
    flash = max(0.0, mix(flash, avg_flash, c_diff) - (PI * u_step * 0.005));
    float avg_n = (n_right.a + n_left.a + n_top.a + n_down.a) * 0.25;
    neutrino = max(0.0, mix(neutrino, avg_n, c_diff) - (PI * u_step * 0.002));
    float cdm_scaffold = sin(vTexCoord.x * PI * 6.0) * cos(vTexCoord.y * PI * 6.0) * 0.3 +
                         sin(vTexCoord.x * PI * 14.3 + 0.5) * sin(vTexCoord.y * PI * 11.2 + 1.2) * 0.15 +
                         cos(vTexCoord.x * PI * 28.1) * cos(vTexCoord.y * PI * 33.4) * 0.08;
    float cdm_density = max(0.0, cdm_scaffold + 0.2);
    float local_stress = field_tension + (flash * 0.05) + (neutrino * 0.02) + (cdm_density * 0.12);
    if (type == 0.0 && local_stress > (0.35 / PHI)) {
        type = fract(sin(dot(vTexCoord, vec2(12.9898, 78.233))) * 43758.5453) > 0.5 ? 0.75 : 0.25;
    }
    fragColor = vec4(phase, type, flash, neutrino);
}`,Kt=`#version 300 es
precision highp float;
in vec2 a_grid_pos;
uniform sampler2D u_state;
uniform mat4 u_projection;
uniform mat4 u_view;
uniform float u_scale_a;
uniform float u_camera_distance;
uniform float u_grid_size;
uniform float u_growth;
out vec4 v_color;
const float PI = 3.14159265;
const float TWO_PI = 6.28318531;
const float PHI = 1.618033988749895;
void main() {
    vec2 uv = (a_grid_pos + 0.5) / u_grid_size;
    vec4 data = texelFetch(u_state, ivec2(a_grid_pos), 0);
    float phase = data.r; float type = data.g; float flash = data.b; float neutrino = data.a;
    float fp = clamp(flash / (PI*PI) + neutrino / (PI * 1.618) + step(0.0001, type), 0.0, 2.4);
    if (u_camera_distance < 6.0) {
        if (type == 0.0 && flash < 0.01 && neutrino < 0.01) { gl_Position = vec4(9999.0); return; }
        float g = clamp(u_growth, 0.0, 1.0);
        vec3 pur = mix(vec3(0.22, 0.06, 0.58), vec3(0.78, 0.20, 1.0), fract(data.r / TWO_PI));
        vec3 grn = mix(vec3(0.02, 0.22, 0.10), vec3(0.45, 1.00, 0.62), fract(data.r / TWO_PI));
        vec3 col = mix(pur, grn, g);
        if(type > 0.5) col = mix(col, vec3(1.0, 0.12, 0.22), 0.4);
        v_color = vec4(col, clamp(0.12 + fp * 0.22, 0.06, 0.50));
        gl_PointSize = clamp(1.5 + fp * 0.8, 1.5, 3.5);
    } else if (u_camera_distance >= 6.0 && u_camera_distance < 15.0) {
        if (type == 0.0) { gl_Position = vec4(9999.0); return; }
        vec3 col = type > 0.5 ? vec3(1.0, 0.22, 0.3) : vec3(0.2, 0.6, 1.0);
        v_color = vec4(col, 0.42);
        gl_PointSize = 2.0;
    } else if (u_camera_distance >= 15.0 && u_camera_distance < 35.0) {
        if (type == 0.0 || fp < 0.38) { gl_Position = vec4(9999.0); return; }
        v_color = vec4(0.85, 0.55, 1.0, 0.55);
        gl_PointSize = 3.2;
    } else {
        if (type == 0.0 || fp < 0.92) { gl_Position = vec4(9999.0); return; }
        v_color = vec4(1.0, 0.96, 0.82, 0.7);
        gl_PointSize = 4.5;
    }
    float s_phi = uv.x * TWO_PI, theta = acos(1.0 - 2.0 * uv.y), radius = u_scale_a * TWO_PI * (1.0 + fp * 0.32);
    gl_Position = u_projection * u_view * vec4(radius * sin(theta) * cos(s_phi), radius * sin(theta) * sin(s_phi), radius * cos(theta), 1.0);
}`,Jt=`#version 300 es
precision highp float;
in vec4 v_color;
out vec4 fragColor;
void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    if (dot(p, p) > 1.0) discard;
    fragColor = v_color;
}`,Zt=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\u03C3/H = \u03B3 - FOUR LOOP SUPERFORCE GPU (ANIMATION ONLY)</title>
    <style>
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #000; font-family: Consolas, "SFMono-Regular", monospace; }
        canvas { width: 100vw; height: 100vh; display: block; cursor: grab; background: #000; }
        canvas:active { cursor: grabbing; }
        #bolt { position: fixed; inset: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 2; }
    </style>
</head>
<body>
    <canvas id="c"></canvas>
    <canvas id="bolt"></canvas>
    <script id="glsl-compute-vs" type="x-shader/x-vertex">${qt}<\/script>
    <script id="glsl-compute-fs" type="x-shader/x-fragment">${$t}<\/script>
    <script id="glsl-render-vs" type="x-shader/x-vertex">${Kt}<\/script>
    <script id="glsl-render-fs" type="x-shader/x-fragment">${Jt}<\/script>
    <script>
"use strict";

function derivePhaseLimit() {
    let n = 3, s = 1.73205081; 
    for (let i = 0; i < 15; i++) { 
        s = Math.sqrt(2 - 2 * Math.sqrt(1 - (s * s) / 4));
        n *= 2;
    }
    return (n * s) / 2.0;
}

function mix(x, y, a) { return x * (1.0 - a) + y * a; }

const VAL_PI = derivePhaseLimit();
const VAL_TWO_PI = VAL_PI * 2.0;
const VAL_HALF_PI = VAL_PI * 0.5;
const VAL_PHI = 1.618033988749895;
const FOUR_LOOP_GAMMA = 0.1;

let currentGridSize = 512;
let A_SIM_FLOOR = 1.0 / currentGridSize;
let TOPOLOGICAL_STEP = 1.0 / (currentGridSize * VAL_PHI);

const SPEEDS = [0.1, 0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256];
const VISUAL_SPEEDS = [0.1, 0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 2560, 4096, 8192, 16384, 25600];

const THEORY_MODEL = {
    omegaX: 0.05, omegaCDM: 0.25, wX: -1.0, rhoLambda: 0.70, rhoBreathing0: 0.03
};

const canvas = document.getElementById("c");
let gl, computeProg, renderProg;
let computeAttr = {}, renderAttr = {}, computeLoc = {}, renderLoc = {};
let stateTexA, stateTexB, currentTex, framebuffer, quadBuffer, gridBuffer;
let physicalDrive = 1, visualSpeed = 4, seedTick = 0, scaleA = A_SIM_FLOOR, reservoir = 1.0;
let replaySeed = makeReplaySeed();
let rx = 0.58, ry = 0.82, baseCameraDistance = 3.2, dragging = false, lastX = 0, lastY = 0;

function updateGridConstants() {
    A_SIM_FLOOR = 1.0 / currentGridSize;
    TOPOLOGICAL_STEP = 1.0 / (currentGridSize * VAL_PHI);
}

function allocateGridBuffersAndTextures() {
    if (gridBuffer) gl.deleteBuffer(gridBuffer);
    const grid = new Float32Array(currentGridSize * currentGridSize * 2); 
    let w = 0;
    for (let y = 0; y < currentGridSize; y++) { 
        for (let x = 0; x < currentGridSize; x++) { 
            grid[w++] = x; grid[w++] = y; 
        } 
    }
    gridBuffer = gl.createBuffer(); 
    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, grid, gl.STATIC_DRAW);

    if (stateTexA) gl.deleteTexture(stateTexA);
    if (stateTexB) gl.deleteTexture(stateTexB);
    stateTexA = makeStateTexture(); 
    stateTexB = makeStateTexture();
}

function initEngine() {
    gl = canvas.getContext("webgl2", { antialias: false, alpha: false, preserveDrawingBuffer: false });
    if (!gl || !gl.getExtension("EXT_color_buffer_float")) throw new Error("Floating point setup unsupported.");
    
    framebuffer = gl.createFramebuffer();
    quadBuffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);

    // Load shaders from DOM
    const computeVsSrc = document.getElementById('glsl-compute-vs').textContent;
    const computeFsSrc = document.getElementById('glsl-compute-fs').textContent;
    const renderVsSrc = document.getElementById('glsl-render-vs').textContent;
    const renderFsSrc = document.getElementById('glsl-render-fs').textContent;

    computeProg = makeProgram(computeVsSrc, computeFsSrc); 
    renderProg = makeProgram(renderVsSrc, renderFsSrc);
    
    computeAttr.position = gl.getAttribLocation(computeProg, "a_position");
    computeLoc.u_state = gl.getUniformLocation(computeProg, "u_state");
    computeLoc.u_step = gl.getUniformLocation(computeProg, "u_step");
    computeLoc.u_scale_a = gl.getUniformLocation(computeProg, "u_scale_a");
    computeLoc.u_four_loop_gamma = gl.getUniformLocation(computeProg, "u_four_loop_gamma");
    computeLoc.u_grid_size = gl.getUniformLocation(computeProg, "u_grid_size");

    renderAttr.gridPos = gl.getAttribLocation(renderProg, "a_grid_pos");
    renderLoc.u_state = gl.getUniformLocation(renderProg, "u_state");
    renderLoc.u_projection = gl.getUniformLocation(renderProg, "u_projection");
    renderLoc.u_view = gl.getUniformLocation(renderProg, "u_view");
    renderLoc.u_scale_a = gl.getUniformLocation(renderProg, "u_scale_a");
    renderLoc.u_camera_distance = gl.getUniformLocation(renderProg, "u_camera_distance");
    renderLoc.u_grid_size = gl.getUniformLocation(renderProg, "u_grid_size");
    renderLoc.u_growth = gl.getUniformLocation(renderProg, "u_growth");

    updateGridConstants();
    allocateGridBuffersAndTextures();
    resizeCanvas(); bindUi(); resetSimulation();
}

function uploadInitialTexture(tex) {
    const data = new Float32Array(currentGridSize * currentGridSize * 4); let p = 0;
    const rng = mulberry32(replaySeed);
    for (let y = 0; y < currentGridSize; y++) {
        let v = (y + 0.5) / currentGridSize;
        for (let x = 0; x < currentGridSize; x++) {
            let u = (x + 0.5) / currentGridSize, dx = u - 0.5, dy = v - 0.5, r = Math.hypot(dx, dy);
            data[p++] = positiveMod(Math.atan2(dy, dx) + r * VAL_TWO_PI * VAL_PHI + (rng() - 0.5)*0.1, VAL_TWO_PI);
            data[p++] = r < 0.15 ? 0.75 : 0.0;
            data[p++] = r < 0.2 ? VAL_PI * rng() : 0.0;
            data[p++] = r < 0.2 ? (1.0 / VAL_PHI) * rng() : 0.0;
        }
    }
    gl.bindTexture(gl.TEXTURE_2D, tex); 
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, currentGridSize, currentGridSize, gl.RGBA, gl.FLOAT, data);
}

function makeShader(type, src) {
    const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s;
}
function makeProgram(vs, fs) {
    const p = gl.createProgram(); gl.attachShader(p, makeShader(gl.VERTEX_SHADER, vs)); gl.attachShader(p, makeShader(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p)); return p;
}
function makeStateTexture() {
    const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, currentGridSize, currentGridSize, 0, gl.RGBA, gl.FLOAT, null); return t;
}

function rhoEff(a) {
    const sA = Math.max(a, 1e-6);
    return (THEORY_MODEL.omegaX * Math.pow(sA, -3 * (1 + THEORY_MODEL.wX))) + 
           (THEORY_MODEL.omegaCDM * Math.pow(sA, -3)) + 
           (THEORY_MODEL.rhoBreathing0 * Math.pow(sA, -2));
}

function runPhysicsStep(dtScalar) {
    const a = Math.max(1e-6, scaleA * currentGridSize);
    const rho = rhoEff(a);
    const expansion_rate = (1.0 / VAL_TWO_PI) * (1.0 + 0.08 * rho) + ((1.0 + 0.18 * (rho + THEORY_MODEL.rhoLambda)) / (scaleA * currentGridSize * VAL_PHI));

    scaleA += expansion_rate * TOPOLOGICAL_STEP * physicalDrive * dtScalar;
    
    let volume_expansion_factor = expansion_rate * scaleA * VAL_PHI;
    reservoir = Math.max(0.01, mix(reservoir, 1.0 / (1.0 + volume_expansion_factor * THEORY_MODEL.rhoLambda), TOPOLOGICAL_STEP * physicalDrive * dtScalar);

    const readTex = currentTex; const writeTex = currentTex === stateTexA ? stateTexB : stateTexA;
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, writeTex, 0);
    gl.viewport(0, 0, currentGridSize, currentGridSize); gl.useProgram(computeProg);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, readTex);
    
    gl.uniform1i(computeLoc.u_state, 0); 
    gl.uniform1f(computeLoc.u_step, dtScalar); 
    gl.uniform1f(computeLoc.u_scale_a, scaleA);
    gl.uniform1f(computeLoc.u_grid_size, currentGridSize);
    gl.uniform1f(computeLoc.u_four_loop_gamma, FOUR_LOOP_GAMMA);

    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer); gl.enableVertexAttribArray(computeAttr.position);
    gl.vertexAttribPointer(computeAttr.position, 2, gl.FLOAT, false, 0, 0); gl.drawArrays(gl.TRIANGLES, 0, 6);
    currentTex = writeTex; seedTick++;
}

function viewMatrix(dist) {
    let cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry);
    return new Float32Array([cy, sx*sy, -cx*sy, 0, 0, cx, sx, 0, sy, -sx*cy, cx*cy, 0, 0, 0, -dist, 1]);
}

function perspectiveMatrix(fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2.0), nf = 1.0 / (near - far);
    return new Float32Array([f/aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far+near)*nf, -1, 0, 0, (2*far*near)*nf, 0]);
}

function loop() {
    let targetDt = 1.0 / Math.max(1.0, Math.log10(baseCameraDistance));
    let frameWork = visualSpeed * targetDt;
    
    let maxIterations = 16; 
    let iterations = 1;
    let dtPerIteration = frameWork;
    
    if (frameWork > maxIterations) {
        iterations = maxIterations;
        dtPerIteration = frameWork / maxIterations;
    } else if (frameWork < 1.0) {
        iterations = 1;
        dtPerIteration = frameWork;
    } else {
        iterations = Math.floor(frameWork);
        dtPerIteration = frameWork / iterations;
    }
    
    for (let i = 0; i < iterations; i++) {
        runPhysicsStep(dtPerIteration);
    }
    
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0,0,0,1); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    
    gl.useProgram(renderProg); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, currentTex);
    gl.uniform1i(renderLoc.u_state, 0); gl.uniform1f(renderLoc.u_scale_a, scaleA);
    gl.uniform1f(renderLoc.u_camera_distance, baseCameraDistance);
    gl.uniform1f(renderLoc.u_grid_size, currentGridSize);
    gl.uniform1f(renderLoc.u_growth, getGrowth());
    
    let asp = canvas.width / canvas.height;
    let dynamicFarPlane = Math.max(100.0, baseCameraDistance * 3.0);
    gl.uniformMatrix4fv(renderLoc.u_projection, false, perspectiveMatrix(45 * VAL_PI / 180, asp, 0.1, dynamicFarPlane));
    gl.uniformMatrix4fv(renderLoc.u_view, false, viewMatrix(baseCameraDistance));

    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuffer); gl.enableVertexAttribArray(renderAttr.gridPos);
    gl.vertexAttribPointer(renderAttr.gridPos, 2, gl.FLOAT, false, 0, 0); gl.drawArrays(gl.POINTS, 0, currentGridSize * currentGridSize);

    drawBolts();

    requestAnimationFrame(loop);
}

function resetSimulation() {
    scaleA = A_SIM_FLOOR; seedTick = 0; reservoir = 1.0;
    uploadInitialTexture(stateTexA); uploadInitialTexture(stateTexB); currentTex = stateTexA;
}

function makeReplaySeed() { return Math.floor(Math.random() * 1000000000); }

function mulberry32(seed) {
    let t = seed >>> 0;
    return function() {
        t = (t + 0x6D2B79F5) | 0;
        let r = Math.imul(t ^ (t >>> 15), 1 | t);
        r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
        return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
}

function positiveMod(v, m) { return ((v % m) + m) % m; }
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

function bindUi() {
    canvas.addEventListener("mousedown", e => { dragging = true; lastX = e.clientX; lastY = e.clientY; });
    window.addEventListener("mouseup", () => dragging = false);
    window.addEventListener("mousemove", e => {
        if (!dragging) return;
        ry += (e.clientX - lastX) * 0.005; rx += (e.clientY - lastY) * 0.005;
        lastX = e.clientX; lastY = e.clientY;
    });
}

// ================= PINK/GREEN ORB LIGHTNING =================
// Bolts walk node-to-node across a fibonacci-sphere of points that tracks
// the visible orb. Per jump: 15% chance of a 90-degree turn; per turn:
// 20% chance to fork (branch continues straight while main takes the turn).
// 3-5 concurrent strikes. Path lingers ~0.2s, fades out ~0.3s total.
const BOLT = (() => {
  const N = 380, K = 5;
  const PINK = [255, 95, 191], GREEN = [61, 255, 136];
  const TURN_P = 0.15, FORK_P = 0.20;
  const STEP_MS = 48, FADE_MS = 300;
  const LAUNCH = Date.UTC(2026, 7, 23), RAMP_MS = 30 * 864e5;

  function getGrowth() {
    const q = new URLSearchParams(location.search).get("growth");
    if (q !== null) { const v = parseFloat(q); if (!isNaN(v)) return Math.min(1, Math.max(0, v)); }
    return Math.min(1, (Date.now() - LAUNCH) / RAMP_MS);
  }

  // fibonacci sphere + kNN graph
  const px = new Float32Array(N), py = new Float32Array(N), pz = new Float32Array(N);
  const nb = []; for (let i = 0; i < N; i++) nb.push([]);
  const GA = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = GA * i;
    px[i] = Math.cos(th) * r; py[i] = y; pz[i] = Math.sin(th) * r;
  }
  for (let i = 0; i < N; i++) {
    const d = [];
    for (let j = 0; j < N; j++) if (j !== i) {
      const dx = px[i]-px[j], dy = py[i]-py[j], dz = pz[i]-pz[j];
      d.push([dx*dx+dy*dy+dz*dz, j]);
    }
    d.sort((a,b)=>a[0]-b[0]);
    for (let k = 0; k < K; k++) nb[i].push(d[k][1]);
  }

  const bc = document.getElementById("bolt");
  const bctx = bc.getContext("2d");
  let bw = 0, bh = 0, dpr = 1;
  function resizeBolt() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    bw = window.innerWidth; bh = window.innerHeight;
    bc.width = bw * dpr; bc.height = bh * dpr;
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resizeBolt); resizeBolt();

  // project world->screen with same rx/ry/camera as GL scene
  const R_ORB = 1.15, CAM = 3.2, FOV = 45 * Math.PI / 180;
  function project(i, w, h) {
    const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry);
    const X = px[i]*R_ORB, Y = py[i]*R_ORB, Z = pz[i]*R_ORB;
    const vx = cy*X + sx*sy*Y - cx*sy*Z;
    const vy = cx*Y + sx*Z;
    const vz = sy*X - sx*cy*Y + cx*cy*Z - CAM;
    const f = 1/Math.tan(FOV/2), asp = w/h;
    const cw = f/asp*vx, ch = f*vy, cl = (-1)*vz;
    if (cl <= 0.05) return null;
    return [(cw/cl*.5+.5)*w, (1-(ch/cl*.5+.5))*h, cl];
  }

  let bolts = [], nextSpawn = 0, targetCount = 4;
  function rand(a,b){ return a + Math.random()*(b-a); }
  function headingOf(a,b){
    let hx=px[b]-px[a], hy=py[b]-py[a], hz=pz[b]-pz[a];
    const l=Math.hypot(hx,hy,hz)||1; return [hx/l,hy/l,hz/l];
  }
  function pickNext(cur, head, exclude){
    const cands = nb[cur].filter(n=>n!==exclude);
    if (!cands.length) return nb[cur][0];
    if (head && Math.random() < TURN_P) {
      // 90-degree band: near-perpendicular to current heading
      const perp = cands.filter(n=>{
        const h2 = headingOf(cur,n);
        return Math.abs(h2[0]*head[0]+h2[1]*head[1]+h2[2]*head[2]) < 0.35;
      });
      const pool = perp.length ? perp : cands;
      const nxt = pool[(Math.random()*pool.length)|0];
      if (Math.random() < FORK_P && bolts.length < 8) {
        // fork: child continues straight along old heading
        forks.push({ cur, head: head.slice(), steps: Math.max(3, this.steps>>1), color: this.color, w: this.w*0.6 });
      }
      return nxt;
    }
    // forward-biased pick
    let best=null, bs=-2;
    for (const n of cands){
      const h2 = headingOf(cur,n);
      const dotv = h2[0]*head[0]+h2[1]*head[1]+h2[2]*head[2];
      const s = dotv + Math.random()*0.9;
      if (s>bs){bs=s;best=n;}
    }
    return best;
  }
  let forks = [];
  function spawn(){
    const start = (Math.random()*N)|0;
    const color = Math.random() < 0.5 ? PINK : GREEN;
    bolts.push({
      path:[start], head:null, prev:-1,
      steps: 14 + (Math.random()*12|0),
      lastStep: performance.now(),
      born: performance.now(), deadAt: 0,
      color, w: rand(1.6, 2.4)
    });
  }
  function stepBolts(now){
    forks = [];
    for (const b of bolts){
      if (b.deadAt || now - b.lastStep < STEP_MS) continue;
      b.lastStep = now;
      const self = b;
      const nxt = pickNext.call(b, b.path[b.path.length-1], b.head || headingOf(b.path[Math.max(0,b.path.length-2)]||b.path[0], b.path[b.path.length-1]), b.prev);
      b.prev = b.path[b.path.length-1];
      b.head = headingOf(b.prev, nxt);
      b.path.push(nxt);
      if (b.path.length >= b.steps){ b.deadAt = now + FADE_MS; }
    }
    // forked children spawn as independent short bolts, continuing FORWARD along parent heading
    for (const f of forks){
      const st = f.cur;
      let fwd = nb[st][0], bs = -2;
      for (const n of nb[st]){
        const h2 = headingOf(st, n);
        const s = h2[0]*f.head[0]+h2[1]*f.head[1]+h2[2]*f.head[2];
        if (s > bs){ bs = s; fwd = n; }
      }
      const b = { path:[st], head:f.head.slice(), prev:-1, steps:f.steps,
                  lastStep:now, born:now, deadAt:0, color:f.color, w:f.w };
      b.prev = st; b.head = headingOf(st, fwd); b.path.push(fwd);
      bolts.push(b);
    }
    bolts = bolts.filter(b=>{
      if (!b.deadAt) return true;
      if (now > b.deadAt) return false;
      return true;
    });
    if (bolts.length === 0 && now > nextSpawn){ targetCount = 3 + (Math.random()*3|0); }
    while (bolts.length < targetCount && now > nextSpawn){ spawn(); nextSpawn = now + rand(250, 900); }
  }
  function drawBolts(now){
    stepBolts(now || performance.now());
    bctx.clearRect(0,0,bw,bh);
    const now = performance.now();
    for (const b of bolts){
      let alpha = 1;
      if (b.deadAt) alpha = Math.max(0, (b.deadAt - now)/FADE_MS);
      const life = now - b.born;
      if (life < 60) alpha *= life/60;
      const [r,g,bl] = b.color;
      // faint orb dots under active bolt heads
      const pts = [];
      for (let i=0;i<b.path.length;i++){
        const p = project(b.path[i], bw, bh);
        if (p) pts.push(p);
      }
      if (pts.length < 2) continue;
      bctx.lineCap = "round"; bctx.lineJoin = "round";
      // glow pass
      bctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + bl + ',' + (0.28*alpha).toFixed(3) + ')';
      bctx.lineWidth = b.w*3;
      bctx.beginPath(); bctx.moveTo(pts[0][0], pts[0][1]);
      for (let i=1;i<pts.length;i++) bctx.lineTo(pts[i][0], pts[i][1]);
      bctx.stroke();
      // core pass
      bctx.strokeStyle = 'rgba(' + Math.min(255,r+70) + ',' + g + ',' + bl + ',' + (0.95*alpha).toFixed(3) + ')';
      bctx.lineWidth = b.w;
      bctx.stroke();
      // head spark
      const h = pts[pts.length-1];
      bctx.fillStyle = 'rgba(255,255,255,' + (0.9*alpha).toFixed(3) + ')';
      bctx.beginPath(); bctx.arc(h[0], h[1], b.w*0.9, 0, 6.2832); bctx.fill();
    }
  }
  return { drawBolts, getGrowth };
})();
// =============== END ORB LIGHTNING ===============

window.addEventListener("resize", resizeCanvas);
initEngine(); loop();
<\/script>
</body>
</html>`;function Qt(){return`User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://bg.fogeboro.workers.dev/sitemap.xml`}n(Qt,"robotsTxt");function er(){return`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bg.fogeboro.workers.dev/</loc><changefreq>yearly</changefreq><priority>1.0</priority></url>
</urlset>`}n(er,"sitemapXml");var To={async fetch(i){let e=new URL(i.url);return e.pathname==="/robots.txt"?new Response(Qt(),{headers:{"content-type":"text/plain"}}):e.pathname==="/sitemap.xml"?new Response(er(),{headers:{"content-type":"application/xml"}}):new Response(Zt,{headers:{"content-type":"text/html; charset=utf-8"}})}};export{To as default};
//# sourceMappingURL=worker.js.map
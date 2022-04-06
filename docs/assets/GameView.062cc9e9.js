var q=Object.defineProperty;var j=(r,s,t)=>s in r?q(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var a=(r,s,t)=>(j(r,typeof s!="symbol"?s+"":s,t),t);import{d as w,c as x,o as f,a as b,t as z,n as H,u as I,i as Y,b as Z,e as V,f as X,g as J,h as C,w as W,F as L,r as O,T as K,j as T,k as Q,l as U,m as tt,p as et,q as st,s as ot,v as it,x as at,y as nt,z as lt,A as G,B as ut,C as rt,D as ct,E as ht,R as yt,G as mt,H as pt}from"./index.bfbf9f44.js";class A{static create(){return this.num++}}a(A,"num",1);const gt=(r,s)=>({key:A.create(),puyo:r,element:s}),ft=()=>[[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]],P={Green:1,Blue:2,Purple:3,Red:4,Yellow:5},D=()=>Math.floor(Math.random()*5)+1,dt=r=>typeof r=="number"&&1<=r&&r<=5;class B{constructor(s,t,e,i){this.key=s,this.x=t,this.y=e,this.color=i}static create(s,t,e,i){return new B(s,t,e,i)}static createList(s){const t=[];for(let e=0;e<s.length;e++)for(let i=0;i<s[e].length;i++){const n=s[e][i];n!==null&&t.push(B.create(n.key,i,e,n.puyo))}return t}}class o{static initialize(){const s=this.calcPuyoImgSize();this.puyoImgWidth=s,this.puyoImgHeight=s}static calcPuyoImgSize(){return(window.innerHeight-this.fontHeight)/this.stageRows}}a(o,"puyoImgWidth",40),a(o,"puyoImgHeight",40),a(o,"fontHeight",33),a(o,"stageCols",6),a(o,"stageRows",12),a(o,"stageBackgroundColor","#ffffff"),a(o,"scoreBackgroundColor","#24c0bb"),a(o,"freeFallingSpeed",16),a(o,"erasePuyoCount",4),a(o,"eraseAnimationDuration",30),a(o,"puyoColors",4),a(o,"playerFallingSpeed",.9),a(o,"playerDownSpeed",15),a(o,"playerGroundFrame",20),a(o,"playerMoveFrame",10),a(o,"playerRotateFrame",10),a(o,"zenkeshiDuration",150),a(o,"gameOverFrame",3e3);var M=(r,s)=>{const t=r.__vccOpts||r;for(const[e,i]of s)t[e]=i;return t};const kt=w({props:{puyo:null},setup(r){const s=r,t=i=>{switch(i){case P.Green:return`url(${J})`;case P.Blue:return`url(${X})`;case P.Purple:return`url(${V})`;case P.Red:return`url(${Z})`;case P.Yellow:return`url(${Y})`;default:return null}},e=x(()=>({left:`${s.puyo.x*o.puyoImgWidth}px`,top:`${s.puyo.y*o.puyoImgHeight}px`,width:`${o.puyoImgWidth}px`,height:`${o.puyoImgHeight}px`,backgroundImage:t(s.puyo.color)}));return(i,n)=>(f(),b("div",{class:"game-stage-puyo",style:H(I(e))},z(r.puyo.y+1)+","+z(r.puyo.x+1)+"("+z(r.puyo.key)+") ",5))}});var St=M(kt,[["__scopeId","data-v-969d5892"]]);const bt={id:"stage",class:"game-stage"},It=w({props:{puyoList:null},setup(r){return(s,t)=>(f(),b("div",bt,[C(K,{name:"flip-list"},{default:W(()=>[(f(!0),b(L,null,O(r.puyoList,e=>(f(),T(St,{key:e.key,puyo:e},null,8,["puyo"]))),128))]),_:1})]))}});var Pt=M(It,[["__scopeId","data-v-314bd737"]]);const vt=["src"],xt=w({props:{num:null},setup(r){const s=r,t=[Q,U,tt,et,st,ot,it,at,nt,lt],e=x(()=>t[s.num]),i=x(()=>({backgroundColor:o.scoreBackgroundColor}));return(n,l)=>(f(),b("img",{src:I(e),style:H(I(i))},null,12,vt))}});const wt=r=>(ut("data-v-7d03265a"),r=r(),rt(),r),_t=wt(()=>G("div",{id:"score"},null,-1)),Ft=w({props:{value:null},setup(r){const s=r,t=x(()=>({top:`${o.puyoImgHeight*o.stageRows}px`,width:`${o.puyoImgWidth*o.stageCols}px`,height:`${o.fontHeight}px`,backgroundColor:o.scoreBackgroundColor})),e=30,i=x(()=>s.value.toString().padStart(e,"0").split("").map(n=>Number(n)));return(n,l)=>(f(),b(L,null,[_t,G("div",{ref:"root",style:H(I(t))},[(f(!0),b(L,null,O(I(i),(c,y)=>(f(),T(xt,{key:y,num:c},null,8,["num"]))),128))],4)],64))}});var Et=M(Ft,[["__scopeId","data-v-7d03265a"]]);class u{static initialize(){const s=document.getElementById("stage");s.style.width=o.puyoImgWidth*o.stageCols+"px",s.style.height=o.puyoImgHeight*o.stageRows+"px",s.style.backgroundColor=o.stageBackgroundColor,this.stageElement=s;const t=document.getElementById("zenkeshi");t.width=o.puyoImgWidth*6,t.style.position="absolute",t.style.display="none",this.zenkeshiImage=t,s.appendChild(t);const e=document.getElementById("score");e.style.backgroundColor=o.scoreBackgroundColor,e.style.top=o.puyoImgHeight*o.stageRows+"px",e.style.width=o.puyoImgWidth*o.stageCols+"px",e.style.height=o.fontHeight+"px",this.scoreElement=e,this.board=ft();const i=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];let n=0;for(let l=0;l<o.stageRows;l++){const c=i[l]||(this.board[l]=[]);for(let y=0;y<o.stageCols;y++){const p=c[y];dt(p)?(this.setPuyo(y,l,p),n++):this.board[l][y]=null}}this.puyoCount=n}static setPuyo(s,t,e){const i=d.getPuyo(e);i.style.left=s*o.puyoImgWidth+"px",i.style.top=t*o.puyoImgHeight+"px",this.stageElement.appendChild(i),this.board[t][s]=gt(e,i)}static getPuyo(s,t){if(0<=t&&t<this.board.length){const e=this.board[t];if(0<=s&&s<e.length)return this.board[t][s]}return null}static checkFall(){this.fallingPuyoList.length=0;let s=!1;for(let t=o.stageRows-2;t>=0;t--){const e=this.board[t];for(let i=0;i<e.length;i++)if(!!this.board[t][i]&&!this.board[t+1][i]){const n=this.board[t][i];this.board[t][i]=null;let l=t;for(;l+1<o.stageRows&&this.board[l+1][i]==null;)l++;this.board[l][i]=n,n!==null&&this.fallingPuyoList.push({element:n.element,position:t*o.puyoImgHeight,destination:l*o.puyoImgHeight,falling:!0}),s=!0}}return s}static fall(){let s=!1;for(const t of this.fallingPuyoList){if(!t.falling)continue;let e=t.position;e+=o.freeFallingSpeed,e>=t.destination?(e=t.destination,t.falling=!1):s=!0,t.position=e,t.element.style.top=e+"px"}return s}static checkErase(s){var l;this.eraseStartFrame=s,this.erasingPuyoInfoList.length=0;const t=new Map,e=[],i=[],n=(c,y)=>{if(!this.board[y][c])return;const S=this.getPuyo(c,y),N=S==null?void 0:S.puyo;S!==null&&e.push({x:c,y,cell:S}),this.board[y][c]=null;const R=[[0,1],[1,0],[0,-1],[-1,0]];for(let _=0;_<R.length;_++){const F=c+R[_][0],E=y+R[_][1];if(F<0||E<0||F>=o.stageCols||E>=o.stageRows)continue;const $=this.board[E][F];!$||$.puyo!==N||n(F,E)}};for(let c=0;c<o.stageRows;c++)for(let y=0;y<o.stageCols;y++){e.length=0;const p=this.getPuyo(y,c);if(p===null)continue;const S=(l=p==null?void 0:p.puyo)!=null?l:null;n(y,c),e.length==0||e.length<o.erasePuyoCount?e.length&&i.push(...e):(this.erasingPuyoInfoList.push(...e),t.set(S,!0))}this.puyoCount-=this.erasingPuyoInfoList.length;for(const c of i)this.board[c.y][c.x]=c.cell;return this.erasingPuyoInfoList.length?{piece:this.erasingPuyoInfoList.length,color:Object.keys(t).length}:null}static erasing(s){const e=(s-this.eraseStartFrame)/o.eraseAnimationDuration;if(e>1){for(const i of this.erasingPuyoInfoList){const n=i.cell.element;this.stageElement.removeChild(n)}return!1}else if(e>.75){for(const i of this.erasingPuyoInfoList){const n=i.cell.element;n.style.display="block"}return!0}else if(e>.5){for(const i of this.erasingPuyoInfoList){const n=i.cell.element;n.style.display="none"}return!0}else if(e>.25){for(const i of this.erasingPuyoInfoList){const n=i.cell.element;n.style.display="block"}return!0}else{for(const i of this.erasingPuyoInfoList){const n=i.cell.element;n.style.display="none"}return!0}}static showZenkeshi(){this.zenkeshiImage.style.display="block",this.zenkeshiImage.style.opacity="1";const s=Date.now(),t=o.puyoImgHeight*o.stageRows,e=o.puyoImgHeight*o.stageRows/3,i=()=>{const n=Math.min((Date.now()-s)/o.zenkeshiDuration,1);this.zenkeshiImage.style.top=(e-t)*n+t+"px",n!==1&&requestAnimationFrame(i)};i()}static hideZenkeshi(){const s=Date.now(),t=()=>{const e=Math.min((Date.now()-s)/o.zenkeshiDuration,1);this.zenkeshiImage.style.opacity=String(1-e),e!==1?requestAnimationFrame(t):this.zenkeshiImage.style.display="none"};t()}}a(u,"stageElement"),a(u,"scoreElement"),a(u,"zenkeshiImage"),a(u,"board"),a(u,"puyoCount"),a(u,"fallingPuyoList",[]),a(u,"eraseStartFrame"),a(u,"erasingPuyoInfoList",[]);class d{static initialize(){this.puyoImages=[];for(let s=0;s<5;s++){const t=document.getElementById(`puyo_${s+1}`);t.removeAttribute("id"),t.width=o.puyoImgWidth,t.height=o.puyoImgHeight,t.style.position="absolute",this.puyoImages[s]=t}this.batankyuImage=document.getElementById("batankyu"),this.batankyuImage.width=o.puyoImgWidth*6,this.batankyuImage.style.position="absolute"}static getPuyo(s){return this.puyoImages[s-1].cloneNode(!0)}static prepareBatankyu(s){this.gameOverFrame=s,u.stageElement.appendChild(this.batankyuImage),this.batankyuImage.style.top=-this.batankyuImage.height+"px"}static batankyu(s){const t=(s-this.gameOverFrame)/o.gameOverFrame,e=Math.cos(Math.PI/2+t*Math.PI*2*10)*o.puyoImgWidth,i=Math.cos(Math.PI+t*Math.PI*2)*o.puyoImgHeight*o.stageRows/4+o.puyoImgHeight*o.stageRows/2;this.batankyuImage.style.left=e+"px",this.batankyuImage.style.top=i+"px"}}a(d,"puyoImages"),a(d,"batankyuImage"),a(d,"gameOverFrame");const k=class{static initialize(){this.fontTemplateList=[];let s=0;for(let t=0;t<10;t++){const e=document.getElementById(`font${t}`);s===0&&(s=e.width/e.height*o.fontHeight),e.height=o.fontHeight,e.width=s,this.fontTemplateList.push(e)}this.fontLength=Math.floor(o.stageCols*o.puyoImgWidth/this.fontTemplateList[0].width),this.score=0,this.showScore()}static showScore(){let s=this.score;const t=u.scoreElement;for(;t.firstChild;)t.removeChild(t.firstChild);for(let e=0;e<this.fontLength;e++){const i=s%10;t.insertBefore(this.fontTemplateList[i].cloneNode(!0),t.firstChild),s=Math.floor(s/10)}}static calculateScore(s,t,e){s=Math.min(s,k.rensaBonus.length-1),t=Math.min(t,k.pieceBonus.length-1),e=Math.min(e,k.colorBonus.length-1);let i=k.rensaBonus[s]+k.pieceBonus[t]+k.colorBonus[e];i===0&&(i=1),this.addScore(i*t*10)}static addScore(s){this.score+=s,this.showScore()}};let g=k;a(g,"rensaBonus",[0,8,16,32,64,96,128,160,192,224,256,288,320,352,384,416,448,480,512,544,576,608,640,672]),a(g,"pieceBonus",[0,0,0,0,2,3,4,5,6,7,10,10]),a(g,"colorBonus",[0,0,3,6,12,24]),a(g,"fontTemplateList",[]),a(g,"fontLength"),a(g,"score",0);class h{static initialize(){this.keyStatus={right:!1,left:!1,up:!1,down:!1},document.addEventListener("keydown",t=>{switch(t.keyCode){case 37:return this.keyStatus.left=!0,t.preventDefault(),!1;case 38:return this.keyStatus.up=!0,t.preventDefault(),!1;case 39:return this.keyStatus.right=!0,t.preventDefault(),!1;case 40:return this.keyStatus.down=!0,t.preventDefault(),!1}}),document.addEventListener("keyup",t=>{switch(t.keyCode){case 37:return this.keyStatus.left=!1,t.preventDefault(),!1;case 38:return this.keyStatus.up=!1,t.preventDefault(),!1;case 39:return this.keyStatus.right=!1,t.preventDefault(),!1;case 40:return this.keyStatus.down=!1,t.preventDefault(),!1}}),this.touchPoint={xs:0,ys:0,xe:0,ye:0},document.addEventListener("touchstart",t=>{this.touchPoint.xs=t.touches[0].clientX,this.touchPoint.ys=t.touches[0].clientY}),document.addEventListener("touchmove",t=>{if(Math.abs(t.touches[0].clientX-this.touchPoint.xs)<20&&Math.abs(t.touches[0].clientY-this.touchPoint.ys)<20)return;this.touchPoint.xe=t.touches[0].clientX,this.touchPoint.ye=t.touches[0].clientY;const{xs:e,ys:i,xe:n,ye:l}=this.touchPoint;s(e,i,n,l),this.touchPoint.xs=this.touchPoint.xe,this.touchPoint.ys=this.touchPoint.ye}),document.addEventListener("touchend",()=>{this.keyStatus.up=!1,this.keyStatus.down=!1,this.keyStatus.left=!1,this.keyStatus.right=!1});const s=(t,e,i,n)=>{const l=i-t,c=n-e;Math.abs(l)<Math.abs(c)?c<0?(this.keyStatus.up=!0,this.keyStatus.down=!1,this.keyStatus.left=!1,this.keyStatus.right=!1):0<=c&&(this.keyStatus.up=!1,this.keyStatus.down=!0,this.keyStatus.left=!1,this.keyStatus.right=!1):l<0?(this.keyStatus.up=!1,this.keyStatus.down=!1,this.keyStatus.left=!0,this.keyStatus.right=!1):0<=l&&(this.keyStatus.up=!1,this.keyStatus.down=!1,this.keyStatus.left=!1,this.keyStatus.right=!0)}}static createNewPuyo(){return u.board[0][2]?!1:(this.centerPuyo=D(),this.movablePuyo=D(),this.centerPuyoElement=d.getPuyo(this.centerPuyo),this.movablePuyoElement=d.getPuyo(this.movablePuyo),u.stageElement.appendChild(this.centerPuyoElement),u.stageElement.appendChild(this.movablePuyoElement),this.puyoStatus={x:2,y:-1,left:2*o.puyoImgWidth,top:-1*o.puyoImgHeight,dx:0,dy:-1,rotation:90},this.groundFrame=0,this.setPuyoPosition(),!0)}static setPuyoPosition(){this.centerPuyoElement&&(this.centerPuyoElement.style.left=this.puyoStatus.left+"px",this.centerPuyoElement.style.top=this.puyoStatus.top+"px");const s=this.puyoStatus.left+Math.cos(this.puyoStatus.rotation*Math.PI/180)*o.puyoImgWidth,t=this.puyoStatus.top-Math.sin(this.puyoStatus.rotation*Math.PI/180)*o.puyoImgHeight;this.movablePuyoElement&&(this.movablePuyoElement.style.left=s+"px",this.movablePuyoElement.style.top=t+"px")}static falling(s=!1){let t=!1;const e=this.puyoStatus.x;let i=this.puyoStatus.y;const n=this.puyoStatus.dx,l=this.puyoStatus.dy;if((i+1>=o.stageRows||u.board[i+1][e]||i+l+1>=0&&(i+l+1>=o.stageRows||u.board[i+l+1][e+n]))&&(t=!0),!t)if(this.puyoStatus.top+=o.playerFallingSpeed,s&&(this.puyoStatus.top+=o.playerDownSpeed),Math.floor(this.puyoStatus.top/o.puyoImgHeight)!=i)if(s&&g.addScore(1),i+=1,this.puyoStatus.y=i,(i+1>=o.stageRows||u.board[i+1][e]||i+l+1>=0&&(i+l+1>=o.stageRows||u.board[i+l+1][e+n]))&&(t=!0),t){this.puyoStatus.top=i*o.puyoImgHeight,this.groundFrame=1;return}else{this.groundFrame=0;return}else{this.groundFrame=0;return}if(this.groundFrame==0){this.groundFrame=1;return}else if(this.groundFrame++,this.groundFrame>o.playerGroundFrame)return!0}static playing(s){if(this.falling(this.keyStatus.down))return this.setPuyoPosition(),"fix";if(this.setPuyoPosition(),this.keyStatus.right||this.keyStatus.left){const t=this.keyStatus.right?1:-1,e=this.puyoStatus.x,i=this.puyoStatus.y,n=e+this.puyoStatus.dx,l=i+this.puyoStatus.dy;let c=!0;if((i<0||e+t<0||e+t>=o.stageCols||u.board[i][e+t])&&i>=0&&(c=!1),(l<0||n+t<0||n+t>=o.stageCols||u.board[l][n+t])&&l>=0&&(c=!1),this.groundFrame===0&&((i+1<0||e+t<0||e+t>=o.stageCols||u.board[i+1][e+t])&&i+1>=0&&(c=!1),(l+1<0||n+t<0||n+t>=o.stageCols||u.board[l+1][n+t])&&l+1>=0&&(c=!1)),c)return this.actionStartFrame=s,this.moveSource=e*o.puyoImgWidth,this.moveDestination=(e+t)*o.puyoImgWidth,this.puyoStatus.x+=t,"moving"}else if(this.keyStatus.up){const t=this.puyoStatus.x,e=this.puyoStatus.y;t+this.puyoStatus.dx,e+this.puyoStatus.dy;const i=this.puyoStatus.rotation;let n=!0,l=0,c=0;if(i===0||(i===90?((e+1<0||t-1<0||t-1>=o.stageCols||u.board[e+1][t-1])&&e+1>=0&&(l=1),l===1&&(e+1<0||t+1<0||e+1>=o.stageRows||t+1>=o.stageCols||u.board[e+1][t+1])&&e+1>=0&&(n=!1)):i===180?((e+2<0||e+2>=o.stageRows||u.board[e+2][t])&&e+2>=0&&(c=-1),(e+2<0||e+2>=o.stageRows||t-1<0||u.board[e+2][t-1])&&e+2>=0&&(c=-1)):i===270&&((e+1<0||t+1<0||t+1>=o.stageCols||u.board[e+1][t+1])&&e+1>=0&&(l=-1),l===-1&&(e+1<0||t-1<0||t-1>=o.stageCols||u.board[e+1][t-1])&&e+1>=0&&(n=!1))),n){c===-1&&(this.groundFrame>0&&(this.puyoStatus.y-=1,this.groundFrame=0),this.puyoStatus.top=this.puyoStatus.y*o.puyoImgHeight),this.actionStartFrame=s,this.rotateBeforeLeft=t*o.puyoImgHeight,this.rotateAfterLeft=(t+l)*o.puyoImgHeight,this.rotateFromRotation=this.puyoStatus.rotation,this.puyoStatus.x+=l;const y=(this.puyoStatus.rotation+90)%360,p=[[1,0],[0,-1],[-1,0],[0,1]][y/90];return this.puyoStatus.dx=p[0],this.puyoStatus.dy=p[1],"rotating"}}return"playing"}static moving(s){this.falling();const t=Math.min(1,(s-this.actionStartFrame)/o.playerMoveFrame);return this.puyoStatus.left=t*(this.moveDestination-this.moveSource)+this.moveSource,this.setPuyoPosition(),t!==1}static rotating(s){this.falling();const t=Math.min(1,(s-this.actionStartFrame)/o.playerRotateFrame);return this.puyoStatus.left=(this.rotateAfterLeft-this.rotateBeforeLeft)*t+this.rotateBeforeLeft,this.puyoStatus.rotation=this.rotateFromRotation+t*90,this.setPuyoPosition(),t===1?(this.puyoStatus.rotation=(this.rotateFromRotation+90)%360,!1):!0}static fix(){const s=this.puyoStatus.x,t=this.puyoStatus.y,e=this.puyoStatus.dx,i=this.puyoStatus.dy;t>=0&&(u.setPuyo(s,t,this.centerPuyo),u.puyoCount++),t+i>=0&&(u.setPuyo(s+e,t+i,this.movablePuyo),u.puyoCount++),this.centerPuyoElement&&u.stageElement.removeChild(this.centerPuyoElement),this.movablePuyoElement&&u.stageElement.removeChild(this.movablePuyoElement),this.centerPuyoElement=null,this.movablePuyoElement=null}static batankyu(){this.keyStatus.up&&location.reload()}}a(h,"centerPuyo"),a(h,"movablePuyo"),a(h,"puyoStatus"),a(h,"centerPuyoElement"),a(h,"movablePuyoElement"),a(h,"groundFrame"),a(h,"keyStatus"),a(h,"actionStartFrame"),a(h,"moveSource"),a(h,"moveDestination"),a(h,"rotateBeforeLeft"),a(h,"rotateAfterLeft"),a(h,"rotateFromRotation"),a(h,"touchPoint");const m={start:"start",checkFall:"checkFall",fall:"fall",checkErase:"checkErase",erasing:"erasing",newPuyo:"newPuyo",playing:"playing",moving:"moving",rotating:"rotating",fix:"fix",gameOver:"gameOver",batankyu:"batankyu"};class v{static initialize(){o.initialize(),d.initialize(),u.initialize(),h.initialize(),g.initialize(),this.mode="start",this.frame=0}static loop(){switch(this.mode){case m.start:this.mode="checkFall";break;case m.checkFall:u.checkFall()?this.mode="fall":this.mode="checkErase";break;case m.fall:u.fall()||(this.mode="checkErase");break;case m.checkErase:{const s=u.checkErase(this.frame);s?(this.mode="erasing",this.combinationCount++,g.calculateScore(this.combinationCount,s.piece,s.color),u.hideZenkeshi()):(u.puyoCount===0&&this.combinationCount>0&&(u.showZenkeshi(),g.addScore(3600)),this.combinationCount=0,this.mode="newPuyo")}break;case m.erasing:u.erasing(this.frame)||(this.mode="checkFall");break;case m.newPuyo:h.createNewPuyo()?this.mode="playing":this.mode="gameOver";break;case m.playing:{const s=h.playing(this.frame);this.mode=s}break;case m.moving:h.moving(this.frame)||(this.mode="playing");break;case m.rotating:h.rotating(this.frame)||(this.mode="playing");break;case m.fix:h.fix(),this.mode="checkFall";break;case m.gameOver:d.prepareBatankyu(this.frame),this.mode="batankyu";break;case m.batankyu:d.batankyu(this.frame),h.batankyu();break}this.frame++}}a(v,"mode"),a(v,"frame"),a(v,"combinationCount",0);const Ct=()=>{const r=ct([]),s=()=>{v.initialize(),t()},t=()=>{v.loop(),r.value.splice(0),r.value.push(...B.createList(u.board)),requestAnimationFrame(t)};return{initialize:s,puyoList:r}},Lt=pt("\u623B\u308B"),zt=w({setup(r){const s=yt.toHome(),{puyoList:t,initialize:e}=Ct();return ht(()=>{e()}),(i,n)=>{const l=mt("RouterLink");return f(),b(L,null,[C(l,{style:{position:"fixed",left:"0px",top:"0px"},to:I(s)},{default:W(()=>[Lt]),_:1},8,["to"]),C(Pt,{puyoList:I(t)},null,8,["puyoList"]),C(Et,{value:1234567890})],64)}}});export{zt as default};

!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"getColors",value:function(){return["red","green","blue","yellow","black","orange","pink"]}},{key:"getRandomColor",value:function(t){return t[Math.floor(Math.random()*t.length)]}}])&&r(e.prototype,n),i&&r(e,i),t}(),o=document.querySelector("#canvas-id");o.width=innerWidth,o.height=innerHeight;var a=o.getContext("2d"),u=new i;window.addEventListener("resize",(function(t){o.width=innerWidth,o.height=innerHeight,c()}));var d={x:void 0,y:void 0};function s(t,e,n,r,i,o){this.x=t,this.y=e,this.dx=n,this.dy=r,this.radius=i,this.Min_Radius=i,this.color=o}window.addEventListener("mousemove",(function(t){d.x=t.x,d.y=t.y})),s.prototype.draw=function(){a.beginPath(),a.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),a.fillStyle=this.color,a.fill(),a.stroke(),a.closePath()},s.prototype.update=function(){this.y+this.radius+this.dy>o.height?this.dy=.99*-this.dy:(this.dy+=1,console.log(this.dy)),(this.x+this.radius+this.dx>o.width||this.x-this.radius<=0)&&(this.dx=-this.dx),this.x+=this.dx,this.y+=this.dy,this.draw()};var h=[],l=u.getColors();function c(){h=[];for(var t=0;t<100;t++){var e=Math.random()*o.width/2,n=Math.random()*o.height/2,r=3*(Math.random()-.5),i=3*(Math.random()-.5),a=(Math.random(),new s(e,n,r,i,30,u.getRandomColor(l)));h.push(a)}}c(),function t(){requestAnimationFrame(t),a.clearRect(0,0,innerWidth,innerHeight),h.forEach((function(t){t.update()}))}()}]);
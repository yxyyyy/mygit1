"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var l=0;l<t.length;l++){var s=t[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,l,s){return l&&e(t.prototype,l),s&&e(t,s),t}}(),Bullet=function(){function e(){_classCallCheck(this,e),this.ele=null}return _createClass(e,[{key:"init",value:function(e){return this.ele=document.createElement("div"),this.ele.className="bullet",gameEngine.ele.appendChild(this.ele),gameEngine.allBullets.push(this),0==e?this.ele.style.left=myPlan.ele.offsetLeft+myPlan.ele.offsetWidth/2-this.ele.offsetWidth/2+"px":1==e?this.ele.style.left=myPlan.ele.offsetLeft+myPlan.ele.offsetWidth/2-this.ele.offsetWidth/2+10+"px":2==e&&(this.ele.style.left=myPlan.ele.offsetLeft+myPlan.ele.offsetWidth/2-this.ele.offsetWidth/2-10+"px"),this.ele.style.top=myPlan.ele.offsetTop-this.ele.offsetHeight+"px",this}},{key:"move",value:function(e){var t=this;this.timer=setInterval(function(){if(t.ele.offsetTop<-18){clearInterval(t.timer),gameEngine.ele.removeChild(t.ele);var l=gameEngine.allBullets.indexOf(t);gameEngine.allBullets.splice(l,1)}else t.ele.style.top=t.ele.offsetTop-12+"px",1==e&&(t.ele.style.left=t.ele.offsetLeft-6+"px"),2==e&&(t.ele.style.left=t.ele.offsetLeft-4+"px"),3==e&&(t.ele.style.left=t.ele.offsetLeft-2+"px"),4==e&&(t.ele.style.left=t.ele.offsetLeft+"px"),5==e&&(t.ele.style.left=t.ele.offsetLeft+2+"px"),6==e&&(t.ele.style.left=t.ele.offsetLeft+4+"px"),7==e&&(t.ele.style.left=t.ele.offsetLeft+6+"px")},30)}},{key:"boom",value:function(){clearInterval(this.timer),this.ele.className="bullet-die";var e=this,t=0,l=["images/die1.png","images/die2.png"],s=setInterval(function(){t>=1?(clearInterval(s),gameEngine.ele.removeChild(e.ele)):e.ele.style.backgroundImage="url("+l[++t]+")"},100)}}]),e}();
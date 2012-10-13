/** DOMReady v2.0.1 - MIT license - https://github.com/freelancephp/DOMReady */
(function(a){a.DOMReady=function(){var b=[],c=false,d=null,e=function(a,b){try{a.apply(this,b||[])}catch(c){if(d)d.call(this,c)}},f=function(){c=true;for(var a=0;a<b.length;a++)e(b[a].fn,b[a].args||[]);b=[]};this.setOnError=function(a){d=a;return this};this.add=function(a,d){if(c){e(a,d)}else{b[b.length]={fn:a,args:d}}return this};if(a.addEventListener){a.document.addEventListener("DOMContentLoaded",function(){f()},false)}else{(function(){if(!a.document.uniqueID&&a.document.expando)return;var b=a.document.createElement("document:ready");try{b.doScroll("left");f()}catch(c){setTimeout(arguments.callee,0)}})()}return this}()})(window);

var myAPP = function() {
	//var counter = 0;
	var occurX = 0;
	var occurY = 0;
	var checkOccur = function(n) {
		return (n%2 == 0) ? true : false;
	};
	function slide(el) {
		if(checkOccur(occurX)) {
			(el.offsetLeft > 50) ? el.style.left = el.offsetLeft - Math.random()*103 + 'px' : el.style.left = el.offsetLeft + Math.random()*103 + 'px', occurX++;
		} else {
			if(el.offsetLeft < (window.innerWidth - 150)) {
				el.style.left = el.offsetLeft + Math.random()*103 + 'px';
			} else {
				el.style.left = el.offsetLeft - Math.random()*103 + 'px'
				occurX--;
			}
		}
		if(checkOccur(occurY)) {
			if(el.offsetTop > 50) {
				el.style.top = el.offsetTop - Math.random()*90 + 'px';
			} else {
				el.style.top = el.offsetTop + Math.random()*90 + 'px';
				occurY++;
			}
		} else {
			if(el.offsetTop < (window.innerHeight - 150)) {
				el.style.top = el.offsetTop + Math.random()*90 + 'px';
			} else {
				el.style.top = el.offsetTop - Math.random()*90 + 'px';
				occurY--;
			}
		}
	};
	function Dot(el) {
		//this.id = 'id'+ ++counter,
		this.el = el;
		this.scene = document.getElementsByTagName('body')[0];
		this.activateDot();
	}
	Dot.prototype = {
		constructor: Dot,
		activateDot: function() {
			//this.el.setAttribute('id',this.id);
			var originDot = this;
			originDot.el.style.backgroundColor = "#"+(function(a,b){while(a--){b+=""+(~~(Math.random()*16)).toString(16);} return b;})(6,"");
			originDot.el.style.top = (originDot.el.offsetTop + 10)+'px';
			originDot.el.style.left = (originDot.el.offsetLeft + 10)+'px';
			originDot.el.onclick = function() {
				var i = 0;
				do {
					var cloneDot, newDot;
					cloneDot = this.cloneNode();
					//cloneDot.id = '';
					originDot.scene.appendChild(cloneDot);
					newDot = new Dot(cloneDot);
					slide(newDot.el);
					i += 1;
				}
				while (i < 2);
				slide(this);
			}
		}
	}
	function init() { 
		var initDot = new Dot(document.querySelector('.boringelement'));
	}
	DOMReady.add(function(){ init(); });
}();
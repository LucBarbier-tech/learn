parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.querySelector(".card");e&&e.addEventListener("click",function(){e.classList.toggle("is-flipped")});var t=document.querySelector(".formContainer");t&&t.addEventListener("click",function(){e.classList.toggle("is-flipped")}),window.sendCodeMirror=function(){var e=document.getElementById("puzzle_input");e&&("5555"===e.value&&(window.location.href="./codes.html"))},window.sendCodeMedia=function(){var e=document.getElementById("media_input");e&&("5555"===e.value&&(window.location.href="./codeis5555.html"))},window.sendCodes=function(){var e=document.getElementById("codes_input_1"),t=document.getElementById("codes_input_2"),n=document.getElementById("codes_input_3");e&&t&&n&&"WHATALIFE"===e.value.toUpperCase()&&"BUBZ"===t.value.toUpperCase()&&"MARTEAU"===n.value.toUpperCase()&&(window.location.href="./end.html")};
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.364cae9b.js.map
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";n.r(t);var r=n(0),o=wp.i18n.__,a=wp.blocks.registerBlockType,c=wp.editor.RichText;a("gutenberg-examples/example-03-editable-esnext",{title:o("Example: Editable (ESNext)","gutenberg-examples"),icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"}},edit:function(e){var t=e.attributes.content,n=e.setAttributes,o=e.className;return Object(r.createElement)(c,{tagName:"p",className:o,onChange:function(e){n({content:e})},value:t})},save:function(e){return Object(r.createElement)(c.Content,{tagName:"p",value:e.attributes.content})}})}]);
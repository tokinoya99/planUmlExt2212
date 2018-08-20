var hello = require('hello');

const $ = require("../node_modules/jquery/dist/jquery.min.js");
window.$ = $;
window.jQuery = $; //おまじない取るとSemanticUIでエラーになる
const semantic = require('./node_modules/semantic/semantic.min.js');
hello();

console.log("Hwllo world Babel 1001");

console.log("Hwllo world Babel 2");

console.log("Hwllo world Semantic UI UI実装してみる2");
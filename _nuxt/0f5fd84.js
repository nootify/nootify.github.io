(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{219:function(t,o,e){var content=e(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("48ab9f84",content,!0,{sourceMap:!1})},221:function(t,o,e){"use strict";e(219)},222:function(t,o,e){var n=e(43)(!1);n.push([t.i,".icons[data-v-67e7fee8]{padding-top:15px}#option-text[data-v-67e7fee8]{opacity:0;transition:opacity .5s}#picker-container:hover #option-text[data-v-67e7fee8]{opacity:1;transition:opacity .5s}",""]),t.exports=n},225:function(t,o,e){"use strict";e.r(o);e(80);var n={data:function(){return{options:[{color:"system",tooltip:"System",icon:"desktop",position:"left center"},{color:"light",tooltip:"Light Mode",icon:"sun",position:"bottom center"},{color:"dark",tooltip:"Dark Mode",icon:"moon",position:"right center"}]}},methods:{getIconColor:function(t,o){return t===o&&"dark"===o?"blue":t===o&&"light"===o?"black":"grey"},getOptionText:function(t,o){var e="".concat(o.charAt(0).toUpperCase()).concat(o.substr(1)," Mode");return"system"===t?"Auto (".concat(e,")"):e}}},r=(e(221),e(35)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"picker-container"}},[e("sui-list",{attrs:{horizontal:""}},t._l(t.options,(function(option){return e("sui-list-item",{key:option.tooltip,on:{click:function(o){t.$colorMode.preference=option.color}}},[e("sui-list-content",{staticClass:"icons"},[e("sui-icon",{attrs:{name:option.icon,size:"large",color:t.getIconColor(option.color,t.$colorMode.value),link:"",inverted:"",bordered:""}})],1)],1)})),1),t._v(" "),e("sui-header",{tag:"h3",staticClass:"subtitle",attrs:{id:"option-text"}},[t._v("\n    "+t._s(t.getOptionText(t.$colorMode.preference,t.$colorMode.value))+"\n  ")])],1)}),[],!1,null,"67e7fee8",null);o.default=component.exports}}]);
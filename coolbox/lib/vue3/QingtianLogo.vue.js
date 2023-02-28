"use strict";
const QingtianLogo_vue_vue_type_script_lang = require("./QingtianLogo.vue2.js");
const vue = require("vue");
require("./QingtianLogo.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = /* @__PURE__ */ vue.createStaticVNode('<g data-v-eef9dd0c><defs data-v-eef9dd0c><linearGradient id="b5b88__a" y2="49.993%" x2="99.962%" y1="49.993%" x1="-.009%" data-v-eef9dd0c><stop offset="0%" stop-color="#0025FC" data-v-eef9dd0c></stop><stop offset="8%" stop-color="#002DFC" data-v-eef9dd0c></stop><stop offset="46%" stop-color="#004BFC" data-v-eef9dd0c></stop><stop offset="78%" stop-color="#005EFC" data-v-eef9dd0c></stop><stop offset="100%" stop-color="#0065FC" data-v-eef9dd0c></stop></linearGradient></defs><g fill="none" data-v-eef9dd0c><path d="M111.02 5.02h6.44v12.26c0 .333-.06.62-.18.86-.093.24-.24.46-.44.66a2.589 2.589 0 0 1-.68.48 2.19 2.19 0 0 1-.82.16H111V5l.02.02Zm2.48 6.2h1.48v-4.3h-1.48v4.3Zm0 6.22h.94a.457.457 0 0 0 .36-.16.493.493 0 0 0 .18-.38v-3.72h-1.48v4.26ZM124.76 6.8v.7h3.76v1.4h-3.76v.74h3.76v1.4h-10.28v-1.4h3.78V8.9h-3.78V7.5h3.78v-.7h-3.78V5.38h3.78v-.36h2.74v.36h3.76V6.8h-3.76Zm3.76 10.48c0 .32-.06.607-.18.86a2.388 2.388 0 0 1-.42.66 2.675 2.675 0 0 1-.7.48 2.19 2.19 0 0 1-.82.16h-2.08l.64-1.48h.36a.457.457 0 0 0 .36-.16.457.457 0 0 0 .16-.36H121v2h-2.76v-7.76h8.86c.4 0 .737.14 1.01.42.273.28.41.613.41 1v4.18Zm-3.18-4.2H121v.76h4.86v-.36c0-.2-.047-.317-.14-.35a1.164 1.164 0 0 0-.38-.05Zm.52 2.16H121v.8h4.86v-.8Zm11.215 3-6.02 1.2V5.92h2.92l-.4-.92h3.04l.42.92h3.18V11a1.99 1.99 0 0 1-.16.8 1.54 1.54 0 0 1-.38.66c-.16.173-.36.313-.6.42-.24.12-.48.18-.72.18h-4.44v3.74l2.78-.54-.34-1.86h2.56l.98 5.04h-2.6l-.22-1.2ZM147.135 5h-6.3v14.44h2.42v-4.52h2.76v2.42a.568.568 0 0 1-.16.42.632.632 0 0 1-.46.2h-.04l-.78 1.48h1.96c.133 0 .26-.013.38-.04.12-.027.24-.06.36-.1.226-.107.426-.247.6-.42.16-.147.3-.34.42-.58.04-.107.073-.223.1-.35a1.99 1.99 0 0 0 .04-.41V6.32c0-.36-.127-.67-.38-.93-.254-.26-.56-.39-.92-.39Zm-3.88 1.68h2.12a.6.6 0 0 1 .45.2c.126.133.19.293.19.48v1.62h-2.76v-2.3Zm2.76 4.26V13h-2.76v-2.06h2.76Zm-8.16-.64h-3.94v1.1h3.42c.146 0 .273-.06.38-.18a.814.814 0 0 0 .14-.44v-.48Zm-3.94-2.7v1.02h3.94V7.6h-3.94Z" fill="#0025FC" data-v-eef9dd0c></path><path fill="url(#b5b88__a)" d="M15.124 8.18h8.602c.4.005.776-.2.99-.54l4.14-6.82a.542.542 0 0 0-.505-.818H.57a.54.54 0 0 0-.495.815l13.89 22.91a.587.587 0 0 0 .99 0l4.142-6.818a1.04 1.04 0 0 0 0-1.083l-4.307-7.1a.361.361 0 0 1 .333-.545Z" data-v-eef9dd0c></path><path fill="#00E9E9" d="m19.91 16.942 4.149 6.787a.588.588 0 0 0 .992 0l8.943-14.657a.537.537 0 0 0-.495-.812h-8.29c-.402-.004-.777.2-.991.54l-4.307 7.06c-.205.33-.205.75 0 1.082Z" data-v-eef9dd0c></path><path fill="#0025FC" d="m54.128 4.52-2.605 12.067-2.014-9.798a1.548 1.548 0 0 0-1.496-1.26h-2.15l-2.355 11.05-2.461-11.13a1.152 1.152 0 0 0-1.107-.93h-2.138l3.605 15.117h3.898L47.622 8.49l2.087 11.145h3.889L57.09 4.52h-2.963Zm5.559 15.116h2.955V6.883a.974.974 0 0 0-.986-.96h-1.97v13.713Z" data-v-eef9dd0c></path><path fill="#00E9E9" d="M62.64 4.52h-2.953V1.557h2.067a.885.885 0 0 1 .888.889l-.002 2.072v.002Z" data-v-eef9dd0c></path><path fill="#0025FC" d="m65.239 16.92 1.4-.998a.87.87 0 0 1 1.1.072 6.07 6.07 0 0 0 4.11 1.666c2.5 0 4.049-.542 4.049-2.22 0-2.21-3.003-1.934-6.1-2.823-2.187-.627-3.95-1.673-3.95-4.248 0-2.424 2.256-4.066 5.87-4.154 2.725-.09 5.002.645 6.897 2.89l-1.334.968a.946.946 0 0 1-1.214-.09c-1.12-1.12-2.372-1.51-3.89-1.53-2.417-.026-3.566.724-3.49 2.2.066 1.314 1.569 1.569 3.683 2.03 3.582.783 6.4 1.52 6.4 4.459 0 2.71-2.566 4.806-6.88 4.806-2.83 0-5.311-1.17-6.652-3.032M84.243 20v-2l-.01-2.235 3.413-4.136 5.645-6.897h-3.426l-4.721 6.028h-.9V5.732a1 1 0 0 0-1-1h-1.878V20h2.877Z" data-v-eef9dd0c></path><path fill="#0025FC" d="M85.77 14.05 89.954 20h3.535l-4.372-5.97zM103.45 20v-6.27l5.512-8.998h-2.644a1 1 0 0 0-.871.508l-3.314 5.872H102l-3.272-5.867a1 1 0 0 0-.873-.513h-2.772l5.468 9.042V20h2.898Z" data-v-eef9dd0c></path></g></g>', 1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 149 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, _hoisted_3, 8, _hoisted_1);
}
const QingtianLogo = /* @__PURE__ */ _pluginVue_exportHelper(QingtianLogo_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-eef9dd0c"]]);
module.exports = QingtianLogo;

"use strict";
const Changjingfengkong_vue_vue_type_script_lang = require("./Changjingfengkong.vue2.js");
const vue = require("vue");
require("./Changjingfengkong.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-84a916ca"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("path", {
  "fill-rule": "nonzero",
  fill: "#FFF",
  "fill-opacity": ".01",
  d: "M0 0h32v32H0z"
}, null, -1));
const _hoisted_4 = { transform: "translate(5 5)" };
const _hoisted_5 = ["fill"];
const _hoisted_6 = ["stroke"];
const _hoisted_7 = ["stroke"];
const _hoisted_8 = ["stroke"];
const _hoisted_9 = ["stroke"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("g", _hoisted_4, [
          vue.createElementVNode("path", {
            "data-follow-fill": "#1D2129",
            "fill-rule": "nonzero",
            d: "M19 10.8a.8.8 0 1 0-1.6 0H19Zm-8.4-5.2a.8.8 0 1 0 0-1.6v1.6ZM17 18.4H5V20h12v-1.6ZM4.6 18v-7H3v7h1.6Zm0-10V6H3v2h1.6Zm12.8 2.8V18H19v-7.2h-1.6ZM5 5.6h5.6V4H5v1.6Zm0 12.8a.4.4 0 0 1-.4-.4H3a2 2 0 0 0 2 2v-1.6ZM17 20a2 2 0 0 0 2-2h-1.6a.4.4 0 0 1-.4.4V20ZM4.6 6c0-.22.18-.4.4-.4V4a2 2 0 0 0-2 2h1.6Z",
            fill: _ctx._fill
          }, null, 8, _hoisted_5),
          vue.createElementVNode("path", {
            "data-follow-stroke": "#1D2129",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": "2",
            d: "m4 16.559 4.113-4.327a.697.697 0 0 1 1.02-.02L14 17m-2-2 2.046-1.781a.954.954 0 0 1 1.12-.07L18 15",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_6),
          vue.createElementVNode("circle", {
            "data-follow-stroke": "#1D2129",
            r: "2",
            cy: "6",
            cx: "16",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_7),
          vue.createElementVNode("path", {
            "data-follow-stroke": "#1D2129",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": "2",
            d: "M16.21 0h4.632C21.482 0 22 .518 22 1.158v4.631m0 10.422v4.631c0 .64-.518 1.158-1.158 1.158h-4.631M5.789 22H1.158C.518 22 0 21.482 0 20.842v-4.631M0 5.789V1.158C0 .518.518 0 1.158 0h4.631",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_8),
          vue.createElementVNode("path", {
            "data-follow-stroke": "#1D2129",
            "stroke-linecap": "round",
            d: "M1 9.289h20.842",
            stroke: _ctx._stroke
          }, null, 8, _hoisted_9)
        ])
      ])
    ])
  ], 8, _hoisted_1);
}
const Changjingfengkong = /* @__PURE__ */ _pluginVue_exportHelper(Changjingfengkong_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-84a916ca"]]);
module.exports = Changjingfengkong;

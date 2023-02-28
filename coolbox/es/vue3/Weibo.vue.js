import Weibo$1 from "./Weibo.vue2.js";
import { openBlock, createElementBlock, createElementVNode, pushScopeId, popScopeId } from "vue";
import "./Weibo.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-c6ab652e"), n = n(), popScopeId(), n);
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  "fill-rule": "evenodd",
  fill: "none"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M0 0h24v24H0z" }, null, -1));
const _hoisted_4 = { "fill-rule": "nonzero" };
const _hoisted_5 = ["fill"];
const _hoisted_6 = ["fill"];
const _hoisted_7 = ["fill"];
const _hoisted_8 = ["fill"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    createElementVNode("g", null, [
      createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        createElementVNode("g", _hoisted_4, [
          createElementVNode("path", {
            "data-follow-fill": "#E71F19",
            d: "M18.944 13.656c-.457-1.366-1.86-1.866-2.18-1.895-.32-.03-.61-.206-.398-.568.212-.363.604-1.418-.149-2.16-.753-.747-2.399-.464-3.564.017-1.162.482-1.1.146-1.063-.184.039-.348.666-2.291-1.252-2.526-2.512-.306-5.735 2.788-6.874 4.57-1.72 2.693-1.448 4.515-1.448 4.515h.012c.206 2.514 3.928 4.517 8.49 4.517 3.922 0 7.225-1.483 8.202-3.498 0 0 .003-.009.012-.024a3.02 3.02 0 0 0 .227-.665c.138-.541.242-1.326-.015-2.098Zm-8.991 5.186c-3.247 0-5.882-1.735-5.882-3.875 0-2.14 2.632-3.875 5.882-3.875 3.247 0 5.882 1.735 5.882 3.875 0 2.143-2.635 3.875-5.882 3.875Z",
            fill: _ctx._fill
          }, null, 8, _hoisted_5),
          createElementVNode("path", {
            "data-follow-fill": "#F5AA15",
            d: "M17.664 10.626a.504.504 0 0 0 .661-.269 2.492 2.492 0 0 0-3.263-3.262.508.508 0 0 0-.269.663.509.509 0 0 0 .665.27 1.479 1.479 0 0 1 1.937 1.935.504.504 0 0 0 .269.662Z",
            fill: _ctx._fill
          }, null, 8, _hoisted_6),
          createElementVNode("path", {
            "data-follow-fill": "#F5AA15",
            d: "M16.32 4c-.55 0-1.095.08-1.618.233a.737.737 0 0 0-.498.914.74.74 0 0 0 .916.497 4.26 4.26 0 0 1 1.2-.172 4.2 4.2 0 0 1 4.022 5.406.735.735 0 0 0 .708.948.743.743 0 0 0 .707-.521c.16-.53.243-1.083.243-1.644C21.997 6.54 19.45 4 16.32 4Z",
            fill: _ctx._fill
          }, null, 8, _hoisted_7),
          createElementVNode("path", {
            "data-follow-fill": "#040000",
            d: "M9.391 12.406c-1.68 0-3.043 1.231-3.043 2.753s1.362 2.754 3.043 2.754 3.044-1.231 3.044-2.754c0-1.522-1.363-2.753-3.044-2.753Zm-.994 4.542c-.588 0-1.067-.494-1.067-1.102 0-.609.479-1.103 1.067-1.103.589 0 1.067.494 1.067 1.103 0 .608-.478 1.102-1.067 1.102Zm1.994-1.986c-.127.23-.385.326-.574.212-.188-.11-.234-.39-.107-.62.128-.23.386-.327.574-.213.188.114.235.393.107.62Z",
            fill: _ctx._fill
          }, null, 8, _hoisted_8)
        ])
      ])
    ])
  ], 8, _hoisted_1);
}
const Weibo = /* @__PURE__ */ _export_sfc(Weibo$1, [["render", _sfc_render], ["__scopeId", "data-v-c6ab652e"]]);
export {
  Weibo as default
};

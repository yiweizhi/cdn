"use strict";
const Zanwufangan_vue_vue_type_script_lang = require("./Zanwufangan.vue2.js");
const vue = require("vue");
require("./Zanwufangan.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = ["width", "height", "spin", "rtl"];
const _hoisted_2 = {
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_3 = /* @__PURE__ */ vue.createStaticVNode('<path d="M33.807 75.994c17.266 0 31.265-13.998 31.265-31.327 0-17.328-13.999-31.326-31.265-31.326-17.267 0-31.265 13.998-31.265 31.326 0 17.329 13.998 31.327 31.265 31.327Z" stroke="#D6DCE8" stroke-width="2" fill="#F1F3F9" fill-rule="nonzero" data-v-a8c43afd></path><path d="M10.805 24.38h44.462c1.788 0 3.145 1.356 3.145 3.144v28.182c0 1.788-1.357 3.145-3.145 3.145H10.805c-1.788 0-3.145-1.357-3.145-3.145V27.524c0-1.788 1.48-3.145 3.145-3.145Z" stroke="#D6DCE8" stroke-width="2" fill="#F1F3F9" fill-rule="nonzero" data-v-a8c43afd></path><path d="M59.275 42.447v13.875a3.25 3.25 0 0 1-3.268 3.269H10.312c-1.789 0-3.269-1.48-3.269-3.269V41.276" stroke="#1676EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-a8c43afd></path><path d="M55.39 34.677H40.96a6.028 6.028 0 0 0-3.823 1.357l-3.762 3.083a6.028 6.028 0 0 1-3.823 1.357h-16.28a3.027 3.027 0 0 0-3.022 3.022c0 .123 0 .308.062.431l3.021 15.91c.247 1.48 1.48 2.59 3.022 2.59h34.842c1.48 0 2.775-1.048 3.021-2.528l4.194-21.768c.308-1.665-.802-3.145-2.467-3.454h-.555Z" fill="#FFF" fill-rule="nonzero" data-v-a8c43afd></path><path d="M61.865 30.422H43.118c-1.85 0-3.576.617-4.995 1.789l-4.933 4.008a7.972 7.972 0 0 1-4.995 1.788H6.982c-2.159 0-3.885 1.789-3.885 3.885 0 .185 0 .37.061.555L7.043 63.23c.309 1.973 1.974 3.392 3.885 3.392h45.387c1.973 0 3.577-1.357 3.885-3.33l5.488-28.429c.37-2.158-1.048-4.07-3.206-4.501-.185.061-.432.061-.617.061Z" stroke="#D6DCE8" stroke-width="2" fill="#FFF" fill-rule="nonzero" data-v-a8c43afd></path><path d="M25.605 51.944c1.11 0 2.035-.925 2.035-2.035s-.925-2.035-2.035-2.035-2.035.925-2.035 2.035.925 2.035 2.035 2.035Zm15.848-.062c1.11 0 2.035-.925 2.035-2.035s-.925-2.035-2.035-2.035-2.035.925-2.035 2.035c0 1.172.925 2.035 2.035 2.035Z" fill="#AAB2C5" fill-rule="nonzero" data-v-a8c43afd></path><path d="M64.887 65.202a16.492 16.492 0 0 1-1.049 3.084c-1.171 2.281-3.021 4.07-5.303 5.241-2.343 1.172-5.118 1.665-7.893 1.049-6.537-1.357-10.73-7.77-9.374-14.307 1.357-6.537 7.709-10.792 14.245-9.373 2.344.493 4.379 1.665 6.105 3.268 2.899 2.898 4.132 7.092 3.269 11.038Z" stroke="#AAB2C5" stroke-width="2" fill="#D6DCE8" fill-rule="nonzero" data-v-a8c43afd></path>', 7);
const _hoisted_10 = ["fill"];
const _hoisted_11 = /* @__PURE__ */ vue.createStaticVNode('<path d="M31.032 37.33c-2.22-4.318-2.714-9.498-1.234-14.184 1.419-4.687 4.81-8.695 9.004-10.977 1.295-.678 2.775-1.233 4.255-1.295 1.48-.062 3.083.432 4.07 1.665.986 1.11 1.171 2.96.37 4.193-.864 1.172-2.59 1.665-4.009 1.295-2.281-.431-4.131-2.22-4.686-4.378-.555-2.158.185-4.687 1.911-6.105 1.11-.987 2.652-1.542 4.07-1.973 6.907-2.035 14.43-2.282 21.46-.74" stroke="#D6DCE8" stroke-width="2" stroke-dasharray="4" data-v-a8c43afd></path><path d="M35.472 54.102h-3.824v.925h3.824z" fill="#AAB2C5" fill-rule="nonzero" data-v-a8c43afd></path><path d="M69.943 3.227c-.061.925-.123 1.789-.801 1.974-.679.185-.987-.432-1.419-1.295-.431-.802-.185-1.665.555-1.85.679-.185 1.789.061 1.665 1.171Zm-.74 4.44c.185-1.11.37-1.726-.246-2.035-.679-.308-1.11.247-1.85.987-.617.678-.247 1.665.37 1.973.74.37 1.541 0 1.726-.925Z" stroke="#D6DCE8" stroke-width="2" fill="#F1F3F9" fill-rule="nonzero" data-v-a8c43afd></path><path d="M70.067 5.632a.917.917 0 0 1-.802.802h-.617c-.863-.123-1.541-.678-1.48-1.233.062-.555.864-.864 1.85-.74.185 0 .37.061.494.123.37.123.616.555.555 1.048 0 0 0-.061 0 0Z" fill="#F1F3F9" fill-rule="nonzero" data-v-a8c43afd></path><path d="M70.067 5.632a.917.917 0 0 1-.802.802h-.617c-.863-.123-1.541-.678-1.48-1.233.062-.555.864-.864 1.85-.74.185 0 .37.061.494.123.37.123.616.555.555 1.048Z" stroke="#D6DCE8" stroke-width="2" data-v-a8c43afd></path><path d="M1.247 22.96c0-1.048 0-2.096.74-2.404.801-.309 1.233.431 1.85 1.48.555.925.308 1.911-.494 2.22-.678.308-2.096.123-2.096-1.295Zm.431-5.18c-.123 1.296-.308 2.036.494 2.344.801.308 1.233-.37 2.035-1.357.616-.863.185-1.973-.617-2.281-.802-.309-1.788.246-1.912 1.295Z" stroke="#D6DCE8" stroke-width="2" fill="#F1F3F9" fill-rule="nonzero" data-v-a8c43afd></path><path d="M1 20.247c0-.493.37-.863.802-.925.185-.061.431-.061.678 0 .987.062 1.85.617 1.788 1.234-.061.616-.863 1.048-1.911.925-.185 0-.37-.062-.555-.124-.494-.061-.802-.555-.802-1.11Z" stroke="#D6DCE8" stroke-width="2" fill="#F1F3F9" fill-rule="nonzero" data-v-a8c43afd></path><path d="M5.193 20.432c6.475 0 18.439 3.762 18.624 17.575" stroke="#D6DCE8" stroke-width="2" stroke-dasharray="4" data-v-a8c43afd></path>', 8);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _ctx._width,
    height: _ctx._height,
    spin: _ctx.spin,
    rtl: _ctx.rtl,
    viewBox: "0 0 72 77",
    preserveAspectRatio: "xMidYMid meet",
    fill: "",
    role: "presentation",
    ref: "host"
  }, [
    vue.createElementVNode("g", null, [
      vue.createElementVNode("g", _hoisted_2, [
        _hoisted_3,
        vue.createElementVNode("path", {
          "data-follow-fill": "#0052D9",
          d: "M56.932 61.687h-2.775v-2.775a1.04 1.04 0 0 0-1.049-1.048 1.04 1.04 0 0 0-1.048 1.048v2.775h-2.775a1.04 1.04 0 0 0-1.048 1.049c0 .616.431 1.048 1.048 1.048h2.775v2.775a1.04 1.04 0 0 0 1.048 1.048 1.04 1.04 0 0 0 1.049-1.048v-2.775h2.775a1.04 1.04 0 0 0 1.048-1.048 1.04 1.04 0 0 0-1.048-1.049Z",
          "fill-rule": "nonzero",
          fill: _ctx._fill
        }, null, 8, _hoisted_10),
        _hoisted_11
      ])
    ])
  ], 8, _hoisted_1);
}
const Zanwufangan = /* @__PURE__ */ _pluginVue_exportHelper(Zanwufangan_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-a8c43afd"]]);
module.exports = Zanwufangan;

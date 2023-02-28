"use strict";
const vueClassComponent_esmBundler = require("../vue-class-component.esm-bundler.js");
class Props {
  constructor() {
    this.width = vueClassComponent_esmBundler.prop({
      type: [Number, String],
      required: false
    });
    this.height = vueClassComponent_esmBundler.prop({
      type: [Number, String],
      required: false
    });
    this.stroke = vueClassComponent_esmBundler.prop({
      type: String,
      required: false
    });
    this.fill = vueClassComponent_esmBundler.prop({
      type: String,
      required: false
    });
    this.color = vueClassComponent_esmBundler.prop({
      type: String,
      required: false
    });
    this.spin = vueClassComponent_esmBundler.prop({
      type: Boolean,
      required: false
    });
    this.rtl = vueClassComponent_esmBundler.prop({
      type: Boolean,
      required: false
    });
    this.size = vueClassComponent_esmBundler.prop({ default: "1em" });
  }
}
class Qiehuan extends vueClassComponent_esmBundler.Vue.with(Props) {
  get _fill() {
    return this.fill || this.color;
  }
  get _stroke() {
    return this.stroke || this.color;
  }
  get _width() {
    return this.width || this.size;
  }
  get _height() {
    return this.height || this.size;
  }
  mounted() {
    var _a, _b;
    if (!this._fill) {
      (_a = this.$refs.host) == null ? void 0 : _a.querySelectorAll("[data-follow-fill]").forEach((item) => {
        item.setAttribute("fill", item.getAttribute("data-follow-fill") || "");
      });
    }
    if (!this._stroke) {
      (_b = this.$refs.host) == null ? void 0 : _b.querySelectorAll("[data-follow-stroke]").forEach((item) => {
        item.setAttribute("stroke", item.getAttribute("data-follow-stroke") || "");
      });
    }
  }
  updated() {
    var _a, _b;
    if (!this._fill) {
      (_a = this.$refs.host) == null ? void 0 : _a.querySelectorAll("[data-follow-fill]").forEach((item) => {
        item.setAttribute("fill", item.getAttribute("data-follow-fill") || "");
      });
    }
    if (!this._stroke) {
      (_b = this.$refs.host) == null ? void 0 : _b.querySelectorAll("[data-follow-stroke]").forEach((item) => {
        item.setAttribute("stroke", item.getAttribute("data-follow-stroke") || "");
      });
    }
  }
}
module.exports = Qiehuan;

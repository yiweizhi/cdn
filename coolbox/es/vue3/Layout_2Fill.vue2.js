import { Vue, prop } from "../vue-class-component.esm-bundler.js";
class Props {
  constructor() {
    this.width = prop({
      type: [Number, String],
      required: false
    });
    this.height = prop({
      type: [Number, String],
      required: false
    });
    this.stroke = prop({
      type: String,
      required: false
    });
    this.fill = prop({
      type: String,
      required: false
    });
    this.color = prop({
      type: String,
      required: false
    });
    this.spin = prop({
      type: Boolean,
      required: false
    });
    this.rtl = prop({
      type: Boolean,
      required: false
    });
    this.size = prop({ default: "1em" });
  }
}
class Layout_2Fill extends Vue.with(Props) {
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
export {
  Layout_2Fill as default
};

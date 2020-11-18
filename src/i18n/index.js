import VueI18n from "vue-i18n";
import Vue from "vue";
import tw from "./tw-lang"; // 自訂語言檔
Vue.use(VueI18n);

// 建立 VueI18n 實體
const i18n = new VueI18n({
  locale: "tw", // 取得預設語系
  messages: { tw }
});
export default i18n;

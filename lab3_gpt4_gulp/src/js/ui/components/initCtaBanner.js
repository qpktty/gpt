import { ctaBannerData } from "../../mockData/ctaBannerData.js";
import { ctaBannerTemplate } from "../templates/ctaBannerTemplate.js";

const initCtaBanner = (ctaBannerNode) => {
  ctaBannerNode.insertAdjacentHTML("beforeend", ctaBannerTemplate(ctaBannerData));
};
export default initCtaBanner;
import linksData from "../../mockData/linksData.js";
import { linksTemplate } from "../templates/linksTemplate.js";

const initLinks = (linksNode) => {
  linksNode.insertAdjacentHTML("beforeend", linksTemplate(linksData));
};

export default initLinks;
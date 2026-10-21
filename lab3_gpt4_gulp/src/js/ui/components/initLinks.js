import linksData from "../../mockData/linksData.js";
import { linksTemplate } from "../templates/linksTemplate.js";

const initLinks = (linksNode) => {
  const template = linksTemplate(linksData);
  linksNode.insertAdjacentHTML("beforeend", template);
};

export default initLinks;
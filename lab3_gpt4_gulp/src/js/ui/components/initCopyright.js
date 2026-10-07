import copyrightData from "../../mockData/copyrightData.js";
import { copyrightTemplate } from "../templates/copyrightTemplate.js";

const initCopyright = (copyrightNode) => {
  copyrightNode.insertAdjacentHTML(
    "beforeend",
    copyrightTemplate(copyrightData)
  );
};

export default initCopyright;
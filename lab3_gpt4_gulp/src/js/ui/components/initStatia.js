import statiaData from "../../mockData/statiaData.js";
import { statiaTemplate } from "../templates/statiaTemplate.js";

const initStatia = (statiaNode) => {
  statiaNode.insertAdjacentHTML("beforeend", statiaTemplate(statiaData));
};

export default initStatia;

import stepSectionData from "../../mockData/stepSectionData.js";
import { stepSectionTemplate } from "../templates/stepSectionTemplate.js";

const initStepSection = (stepSectionNode) => {
  stepSectionNode.insertAdjacentHTML(
    "beforeend",
    stepSectionTemplate(stepSectionData)
  );
};

export default initStepSection;
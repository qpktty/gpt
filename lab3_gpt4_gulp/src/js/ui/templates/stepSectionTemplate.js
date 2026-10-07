export const createStepSectionHeaderTemplate = (header) => {
  const template = `
    <h2 class="step_section__header">
      ${header}
    </h2>
  `;

  return template;
};

export const createStepSectionButtonTemplate = ({ href, title }) => {
  const template = `
    <a href="${href}" class="step_section__link">
      ${title}
    </a>
  `;

  return template;
};

export const stepSectionTemplate = ({ header, button }) => {
  const stepSectionHeaderTemplate = createStepSectionHeaderTemplate(header);
  const stepSectionButtonTemplate = createStepSectionButtonTemplate(button);

  const resultTemplate =
    stepSectionHeaderTemplate + stepSectionButtonTemplate;

  return resultTemplate;
};
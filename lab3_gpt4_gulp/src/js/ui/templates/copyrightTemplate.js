export const createCopyrightTextTemplate = (text) => {
  const template = `
    <p class="copyright__text">
      ${text}
    </p>
  `;

  return template;
};

export const copyrightTemplate = ({ text }) => {
  const copyrightTextTemplate = createCopyrightTextTemplate(text);

  return copyrightTextTemplate;
};
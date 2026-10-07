export const createWomanImageTemplate = ({ src, alt }) => {
  return `
    <img class="woman__img" src="${src}" alt="${alt}" />
  `;
};

export const createWomanSubtitleTemplate = (subtitle) => {
  return `
    <p class="content__subtitle">
      ${subtitle}
    </p>
  `;
};

export const createWomanHeaderTemplate = (header) => {
  return `
    <h2 class="content__header">
      ${header}
    </h2>
  `;
};

export const createWomanDescriptionTemplate = (description) => {
  return `
    <p class="content__description">
      ${description}
    </p>
  `;
};

export const createWomanLinkTemplate = ({ href, title }) => {
  return `
    <a href="${href}" class="content__link">
      ${title}
    </a>
  `;
};

export const womanTemplate = ({
  womanImage,
  womanSubtitle,
  womanHeader,
  womanDescription,
  womanLink,
}) => {
  const imageTemplate = createWomanImageTemplate(womanImage);
  const subtitleTemplate = createWomanSubtitleTemplate(womanSubtitle);
  const headerTemplate = createWomanHeaderTemplate(womanHeader);
  const descriptionTemplate = createWomanDescriptionTemplate(womanDescription);
  const linkTemplate = createWomanLinkTemplate(womanLink);

  const resultTemplate = `
    ${imageTemplate}
    <div class="woman__content">
      ${subtitleTemplate}
      ${headerTemplate}
      ${descriptionTemplate}
      ${linkTemplate}
    </div>
  `;

  return resultTemplate;
};
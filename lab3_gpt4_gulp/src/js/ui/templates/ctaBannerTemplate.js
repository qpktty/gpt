export const createCtaBannerSubtitleTemplate = (subtitle) => {
  return `
    <p class="content__subtitle">
      ${subtitle}
    </p>
  `;
};

export const createCtaBannerHeaderTemplate = (header) => {
  return `
    <h3 class="content__header">
      ${header}
    </h3>
  `;
};

export const createCtaBannerButtonTemplate = ({ href, title }) => {
  return `
    <a href="${href}" class="cta_banner__button">
      ${title}
    </a>
  `;
};

export const ctaBannerTemplate = ({
  ctaBannerSubtitle,
  ctaBannerHeader,
  ctaBannerButton,
}) => {
  const subtitleTemplate = createCtaBannerSubtitleTemplate(ctaBannerSubtitle);
  const headerTemplate = createCtaBannerHeaderTemplate(ctaBannerHeader);
  const buttonTemplate = createCtaBannerButtonTemplate(ctaBannerButton);

  const resultTemplate = `
    <div class="cta_banner__content">
      ${subtitleTemplate}
      ${headerTemplate}
    </div>
    ${buttonTemplate}
  `;

  return resultTemplate;
};
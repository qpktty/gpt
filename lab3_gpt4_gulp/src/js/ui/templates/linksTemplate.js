export const createLinksLeftTemplate = ({ logo, address, copyright }) => {
  const template = `
    <div class="links__left">
      <h3 class="left__logo">${logo}</h3>
      <p class="left__address">
        ${address}
      </p>
      <p class="left__copyright">${copyright}</p>
    </div>
  `;

  return template;
};

export const createLinksColumnItemTemplate = ({ type, title, href }) => {
  switch (type) {
    case "text":
      return `
        <li>
          <p class="item__text">
            ${title}
          </p>
        </li>
      `;

    default:
      return `
        <li><a href="${href}" class="item__link">${title}</a></li>
      `;
  }
};

export const createLinksColumnTemplate = ({ header, items }) => {
  const columnItemsTemplate = items
    .map((item) => createLinksColumnItemTemplate(item))
    .join("");

  const template = `
    <div class="right__column">
      <h3 class="column__header">${header}</h3>
      <ul class="column__list">
        ${columnItemsTemplate}
      </ul>
    </div>
  `;

  return template;
};

export const createLinksRightTemplate = (linksColumnsData) => {
  const linksColumnsTemplate = linksColumnsData
    .map((column) => createLinksColumnTemplate(column))
    .join("");

  const template = `
    <div class="links__right">
      ${linksColumnsTemplate}
    </div>
  `;

  return template;
};

export const linksTemplate = ({ linksLeftData, linksColumnsData }) => {
  const linksLeftTemplate = createLinksLeftTemplate(linksLeftData);
  const linksRightTemplate = createLinksRightTemplate(linksColumnsData);

  const resultTemplate = linksLeftTemplate + linksRightTemplate;

  return resultTemplate;
};
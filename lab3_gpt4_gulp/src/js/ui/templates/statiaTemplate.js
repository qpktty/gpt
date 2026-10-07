export const createStatiaHeaderTemplate = (statiaHeader) => {
  return `
    <div class="statia_header">
      <h2 class="left_header">
        ${statiaHeader}
      </h2>
    </div>
  `;
};

export const createStatiaCardBodyTemplate = ({
  data,
  header,
  link: { href, title },
}) => {
  const template = `
    <div class="card_body">
      <p class="card_date">
        ${data}
      </p>

      <h3 class="card_title">
        ${header}
      </h3>

      <a href="${href}" class="card_link">
        ${title}
      </a>
    </div>
  `;

  return template;
};

export const createStatiaLeftTemplate = ({
  img: { src, src2, src3, src4, src5 },
  data,
  header,
  link: { href, title },
}) => {
  const bodyTemplate = createStatiaCardBodyTemplate({
    data,
    header,
    link: { href, title },
  });

  const template = `
    <div class="statia_cards_left">
      <img class="card_img" src="${src}"/>
      ${bodyTemplate}
    </div>
  `;

  return template;
};

export const createStatiaMiddleTemplate = ({
  img: { src, src2, src3, src4, src5},
  data,
  header,
  link: { href, title },
}) => {
  const bodyTemplate = createStatiaCardBodyTemplate({
    data,
    header,
    link: { href, title },
  });

  const card1 = `
    <div class="card">
      <img class="card_img" src="${src2}"/>
      ${bodyTemplate}
    </div>
  `;

  const card2 = `
    <div class="card">
      <img class="card_img" src="${src3}"/>
      ${bodyTemplate}
    </div>
  `;

  const template = `
    <div class="statia_cards_middles">
      ${card1}
      ${card2}
    </div>
  `;

  return template;
};

export const createStatiaRightTemplate = ({
  img: { src, src2, src3, src4, src5 },
  data,
  header,
  link: { href, title },
}) => {
  const bodyTemplate = createStatiaCardBodyTemplate({
    data,
    header,
    link: { href, title },
  });

  const card1 = `
    <div class="card">
      <img class="card_img" src="${src4}"/>
      ${bodyTemplate}
    </div>
  `;

  const card2 = `
    <div class="card">
      <img class="card_img" src="${src5}"/>
      ${bodyTemplate}
    </div>
  `;

  const template = `
    <div class="statia_cards_right">
      ${card1}
      ${card2}
    </div>
  `;

  return template;
};

export const statiaTemplate = ({
  statiaHeader,
  statiaCardsData,
}) => {
  const headerTemplate = createStatiaHeaderTemplate(statiaHeader);

  const leftTemplate = createStatiaLeftTemplate(statiaCardsData);

  const middlesTemplate = createStatiaMiddleTemplate(statiaCardsData);

  const rightsTemplate = createStatiaRightTemplate(statiaCardsData);

  const resultTemplate = `
    ${headerTemplate}
    <div class="statia_cards">
      ${leftTemplate}
      ${middlesTemplate}
      ${rightsTemplate}
    </div>
  `;

  return resultTemplate;
};
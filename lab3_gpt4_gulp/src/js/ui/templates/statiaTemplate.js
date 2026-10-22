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
  img: { src },
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
      <img class="card_img" src="${src}" />
      ${bodyTemplate}
    </div>
  `;

  return template;
};

export const createStatiaCardTemplate = ({
  img: { src },
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
    <div class="card">
      <img class="card_img" src="${src}" />
      ${bodyTemplate}
    </div>
  `;

  return template;
};

export const createStatiaMiddleTemplate = (cards) => {
  const cardsTemplate = cards
    .map((card) => createStatiaCardTemplate(card))
    .join("");

  const template = `
    <div class="statia_cards_middles">
      ${cardsTemplate}
    </div>
  `;

  return template;
};

export const createStatiaRightTemplate = (cards) => {
  const cardsTemplate = cards
    .map((card) => createStatiaCardTemplate(card))
    .join("");

  const template = `
    <div class="statia_cards_right">
      ${cardsTemplate}
    </div>
  `;

  return template;
};

export const statiaTemplate = ({
  statiaHeader,
  statiaCardsLeftData,
  statiaCardsMiddleData,
  statiaCardsRightData,
}) => {
  const headerTemplate =
    createStatiaHeaderTemplate(statiaHeader);

  const leftTemplate =
    createStatiaLeftTemplate(statiaCardsLeftData);

  const middlesTemplate =
    createStatiaMiddleTemplate(statiaCardsMiddleData);

  const rightsTemplate =
    createStatiaRightTemplate(statiaCardsRightData);

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
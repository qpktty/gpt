import linksData from "../mockData/linksData";

export const LinksLogo = ({ logoData }) => (
  <h3 className="left__logo">{logoData.title}</h3>
);

export const LinksAddress = ({ addressData }) => (
  <p className="left__address">
    {addressData.line1} <br /> {addressData.line2}
  </p>
);

export const LinksCopyright = ({ copyrightData }) => (
  <p className="left__copyright">{copyrightData.title}</p>
);

export const LinkItem = ({ item }) => {
  switch (item.type) {
    case "text":
      return (
        <li>
          <p className="item__text">{item.title}</p>
        </li>
      );
    default:
      return (
        <li>
          <a href={item.href} className="item__link">
            {item.title}
          </a>
        </li>
      );
  }
};

export const LinksColumn = ({ header, items }) => {
  return (
    <div className="right__column">
      <h3 className="column__header">{header}</h3>
      <ul className="column__list">
        {items.map((item, index) => (
          <LinkItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const Links = () => {
  const {
    logoData,
    addressData,
    copyrightData,
    linksMenuData,
    companyData,
    contactsData,
  } = linksData;

  return (
    <>
      <div className="links__left">
        <LinksLogo logoData={logoData} />
        <LinksAddress addressData={addressData} />
        <LinksCopyright copyrightData={copyrightData} />
      </div>

      <div className="links__right">
        <LinksColumn header="Ссылки" items={linksMenuData} />
        <LinksColumn header="Компания" items={companyData} />
        <LinksColumn header="Контакты" items={contactsData} />
      </div>
    </>
  );
};

export default Links;
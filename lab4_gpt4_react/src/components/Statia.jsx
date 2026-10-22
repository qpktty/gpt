import statiaData from "../mockData/statiaData";

export const StatiaCardBody = ({ data, header, link }) => {
    const { href, title } = link;
    return (
        <div className="card_body">
            <p className="card_date">{data}</p>
            <h3 className="card_title">{header}</h3>
            <a href={href} className="card_link">
                {title}
            </a>
        </div>
    );
};

export const StatiaCardLeft = ({ cardData }) => {
    const { img: { src }, data, header, link } = cardData;
    return (
        <div className="statia_cards_left">
            <img className="card_img" src={src} />
            <StatiaCardBody data={data} header={header} link={link} />
        </div>
    );
};

export const StatiaCard = ({ cardData }) => {
    const { img: { src }, data, header, link } = cardData;
    return (
        <div className="card">
            <img className="card_img" src={src} />
            <StatiaCardBody data={data} header={header} link={link} />
        </div>
    );
};

const Statia = () => {
    const {
        statiaHeader,
        statiaCardsLeftData,
        statiaCardsMiddleData,
        statiaCardsRightData,
    } = statiaData;

    return (
        <>
            <div className="statia_header">
                <h2 className="statia_header">{statiaHeader}</h2>
            </div>
            <div className="statia_cards">

                <StatiaCardLeft cardData={statiaCardsLeftData} />

                <div className="statia_cards_middles">
                    {statiaCardsMiddleData.map((card, index) => (
                        <StatiaCard key={index} cardData={card} />
                    ))}
                </div>

                <div className="statia_cards_right">
                    {statiaCardsRightData.map((card, index) => (
                        <StatiaCard key={index} cardData={card} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Statia;
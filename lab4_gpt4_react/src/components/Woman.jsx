import { womanData } from "../mockData/womanData";

export const WomanImage = ({ womanImage: { src, alt } }) => (
    <img className="woman__img" src={src} alt={alt} />
);

export const WomanSubtitle = ({ womanSubtitle }) => (
    <p className="content__subtitle">{womanSubtitle}</p>
);

export const WomanHeader = ({ womanHeader }) => (
    <h2 className="content__header">{womanHeader}</h2>
);

export const WomanDescription = ({ womanDescription }) => (
    <p className="content__description">{womanDescription}</p>
);

export const WomanLink = ({ womanLink: { href, title } }) => (
    <a href={href} className="content__link">
        {title}
    </a>
);

const Woman = () => {
    const { womanImage, womanSubtitle, womanHeader, womanDescription, womanLink } = womanData;

    return (
        <>
            <WomanImage womanImage={womanImage} />
            <div className="woman__content">
                <WomanSubtitle womanSubtitle={womanSubtitle} />
                <WomanHeader womanHeader={womanHeader} />
                <WomanDescription womanDescription={womanDescription} />
                <WomanLink womanLink={womanLink} />
            </div>
        </>
    );
};

export default Woman;

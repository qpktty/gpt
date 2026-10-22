import { ctaBannerData } from "../mockData/ctaBannerData";

export const CtaBannerSubtitle = ({ ctaBannerSubtitle }) => (
    <p className="content__subtitle">{ctaBannerSubtitle}</p>
);

export const CtaBannerHeader = ({ ctaBannerHeader }) => (
    <h3 className="content__header">{ctaBannerHeader}</h3>
);

export const CtaBannerButton = ({ ctaBannerButton: { href, title } }) => (
    <a href={href} className="cta_banner__button">
        {title}
    </a>
);

const CtaBanner = () => {
    const { ctaBannerSubtitle, ctaBannerHeader, ctaBannerButton } = ctaBannerData;

    return (
        <>
            <div className="cta_banner__content">
                <CtaBannerSubtitle ctaBannerSubtitle={ctaBannerSubtitle} />
                <CtaBannerHeader ctaBannerHeader={ctaBannerHeader} />
            </div>
            <CtaBannerButton ctaBannerButton={ctaBannerButton} />
        </>
    );
};

export default CtaBanner;

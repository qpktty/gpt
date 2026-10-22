import copyrightData from "../mockData/copyrightData";

const Copyright = () => {
  const { text } = copyrightData;

  return (
    <p className="copyright__text">{text}</p>
  );
};

export default Copyright;
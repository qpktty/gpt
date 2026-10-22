import stepSectionData from "../mockData/stepSectionData";

export const StepSectionHeader = ({ header }) => (
  <h2 className="step_section__header">{header}</h2>
);

export const StepSectionButton = ({ button: { href, title } }) => (
  <a href={href} className="step_section__link">
    {title}
  </a>
);

const StepSection = () => {
  const { header, button } = stepSectionData;

  return (
    <>
      <StepSectionHeader header={header} />
      <StepSectionButton button={button} />
    </>
  );
};

export default StepSection;
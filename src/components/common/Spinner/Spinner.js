const {
  SpinnerDiv1,
  SpinnerDiv2,
  SpinnerContainer,
} = require("./Spinner.style");

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerDiv1 />
      <SpinnerDiv2 />
    </SpinnerContainer>
  );
};

export default Spinner;

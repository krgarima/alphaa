import "../styles/mainContent.css";
import Header from "./Header";
import ComparingResignation from "./Charts/ComparingResignation";

const MainContent = () => {
  const ButtonContainer = () => {
    return (
      <div className="btnContainer">
        <button className="btnSecondary">
          <i className="far fa-calendar"></i> Mar 2019
        </button>
        <button className="btnSecondary">+ Add a filter</button>
      </div>
    );
  };
  return (
    <div className="container">
      <Header />
      <ButtonContainer />
      <ComparingResignation />
    </div>
  );
};

export default MainContent;

import "../styles/mainContent.css";
import Header from "./Header";
import EmployeePerformanceCharts from "./EmployeePerformanceCharts";

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
      <EmployeePerformanceCharts />
    </div>
  );
};

export default MainContent;

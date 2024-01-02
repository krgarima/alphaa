import "../styles/employeePerformanceCharts.css";
import ComparingResignation from "./Charts/ComparingResignation";
import DifferenceInResignation from "./Charts/DifferenceInResignation";

const EmployeePerformanceCharts = () => {
  return (
    <div className="parentChartContainer">
      <div className="chart">
        <ComparingResignation />
      </div>
      <div className="chart">
        <DifferenceInResignation />
      </div>
    </div>
  );
};

export default EmployeePerformanceCharts;

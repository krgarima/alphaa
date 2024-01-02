import "../styles/sidebar.css";
// import comparsionChartsData from "../components/Charts/data/comparisonChartData.json";
// import differenceChartData from "../components/Charts/data/differenceChartData.json";
// import { calcSum } from "../Helpers";

const Sidebar = () => {
  // console.log(
  //   calcSum(comparsionChartsData[1].data) / comparsionChartsData[1].data.length
  // );

  const Summary = {
    overall: {
      values: {
        Overall: "14.0 %",
        "Resignation Count": "639",
        "Average HeadCount": "4.58 K",
      },
    },
    highPerformer: {
      values: {
        "High Performer": "14.1 %",
        "Resignation Count": "152",
        "Average HeadCount": "108 K",
      },
    },
    difference: {
      values: {
        Difference: "-0.16 pp",
      },
    },
  };

  return (
    <div className="sidebarContainer">
      <h3>Summary</h3>
      <h5>Apr 2018 - Mar 2019</h5>
      {/* SUMMARY DETAILS */}
      <div className="summaryContent fw-500">
        {Object.values(Summary)?.map((data: any) =>
          Object.keys(data.values).map((key, idx) => (
            <div className="contentBox " key={idx}>
              <p>{key}</p>
              <p>{data.values[key]}</p>
            </div>
          ))
        )}
      </div>
      {/* BUTTON */}
      <button className="btnSecondary btnViewDetails fw-600 br-3 ">
        View details
      </button>
      {/* LEGEND */}
      <p className="fw-500">Legend</p>
      {/* INFORMATION */}
      <div className="info fw-500 br-3">
        <p>Not all data items are shown in this chart.</p>
        <p>To show these values, go to</p>
        <button className="btnLink">CHAT SETTINGS</button>
      </div>

      {/* ICONS LINKS */}
      <div className="iconsContainer">
        <i className="fas fa-info"></i>
        <i className="fas fa-bars"></i>
        <i className="fas fa-cog"></i>
        <i className="fas fa-chevron-circle-down"></i>
        <i className="fas fa-border-all"></i>
      </div>
    </div>
  );
};

export default Sidebar;

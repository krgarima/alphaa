import ReactECharts from "echarts-for-react";
import comparisonChartData from "../Charts/data/comparisonChartData.json";

const Chart = () => {
  const overallData = comparisonChartData.map((item: any) => item["overall"]);
  const highPerformerData = comparisonChartData.map(
    (item: any) => item["high_performer"]
  );
  const differenceData = comparisonChartData.map(
    (item: any) => item["overall"] - item["high_performer"]
  );

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: [
      {
        x: "5%",
        y: "12%",
        width: "40%",
        height: "85%",
        containLabel: true,
        aspectRatio: 1.5,
      },
      {
        x2: "5%",
        y: "12%",
        width: "40%",
        height: "85%",
        containLabel: true,
        aspectRatio: 1.5,
      },
    ],
    xAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: (val: number) => `${val.toFixed(2)}%`,
        },
        boundaryGap: [0, 0.01],
      },
      {
        gridIndex: 1,
        type: "value",
        axisLabel: {
          formatter: (val: number) => `${val.toFixed(2)} pp`,
        },
        min: -20,
        max: 20,
      },
    ],
    yAxis: [
      {
        type: "category",
        data: [
          "Product",
          "Office of CEO",
          "Marketing",
          "Customer Support",
          "Finance",
          "HR",
          "IT",
          "Sales",
          "Operations",
        ],
      },
      {
        gridIndex: 1,
        type: "category",
        show: false,
        axisTick: {
          show: false,
        },
        data: [
          "Product",
          "Office of CEO",
          "Marketing",
          "Customer Support",
          "Finance",
          "HR",
          "IT",
          "Sales",
          "Operations",
        ],
      },
    ],
    series: [
      {
        name: "Overall",
        type: "bar",
        color: "#5db5e3",
        label: {
          show: true,
          position: "outside",
          color: "#5db5e3",
          formatter: (obj: { value: number }) => `${obj.value}%`,
        },
        data: overallData,
      },
      {
        name: "High Performer",
        type: "bar",
        color: "#ff9179",
        label: {
          show: true,
          position: "outside",
          color: "#ff9179",
          formatter: (obj: { value: number }) => `${obj.value}%`,
        },
        data: highPerformerData,
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: "Difference",
        type: "bar",
        itemStyle: {
          color: (obj: { value: number }) =>
            obj.value > 0 ? "#59d1c8" : "#ff9179",
        },
        label: {
          show: true,
          position: "outside",
          color: "inherit",
          formatter: (obj: { value: number }) =>
            `${obj.value > 0 ? "+" : ""}${obj.value.toFixed(2)} pp`,
        },
        emphasis: {
          focus: "series",
        },
        data: differenceData,
      },
    ],
  };

  return <ReactECharts style={{ height: "85%" }} option={options} />;
};

export default Chart;

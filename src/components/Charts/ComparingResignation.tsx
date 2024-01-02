// Chart.js
import React from "react";
import ReactECharts from "echarts-for-react";
import comparisonChartData from "../Charts/data/comparisonChartData.json";

const Chart = () => {
  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: (val: number) => `${val.toFixed(2)}%`,
      },
      boundaryGap: [0, 0.01],
    },
    yAxis: {
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
    series: comparisonChartData.map((data) => ({
      ...data,
      label: {
        ...data.label,
        formatter: (obj: { value: number }) => `${obj.value}%`,
      },
    })),
  };

  return <ReactECharts style={{ height: "100%" }} option={options} />;
};

export default Chart;

import ReactECharts from "echarts-for-react";
import comparisonChartData from "../Charts/data/comparisonChartData.json";

const Chart = () => {
  const formatValues = (obj: { value: number }, name: string) => {
    if (name === "Overall" || name === "High Performer") return `${obj.value}%`;
    else if (name === "Difference")
      return `${obj.value > 0 ? "+" : ""}${obj.value.toFixed(2)} pp`;
    else return "";
  };

  const data = [
    {
      department: "Operation",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "Office of CEO",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "Marketing",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "Customer Support",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "Finance",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "HR",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "IT",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "Sales",
      overall: 0,
      high_performer: 0,
    },
    {
      department: "Operations",
      overall: 0,
      high_performer: 0,
    },
  ];

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
      },
    ],
    series: comparisonChartData.map((data) => ({
      ...data,
      label: {
        ...data.label,
        formatter: (obj: { value: number }) => formatValues(obj, data.name),
      },
    })),
  };

  return <ReactECharts style={{ height: "85%" }} option={options} />;
};

export default Chart;

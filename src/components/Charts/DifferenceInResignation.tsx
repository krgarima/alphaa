import ReactECharts from "echarts-for-react";
import differenceChartData from "../Charts/data/differenceChartData.json";

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
    xAxis: [
      {
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
        show: false,
        axisTick: {
          show: false,
        },
      },
    ],
    series: differenceChartData.map((data) => ({
      ...data,
      label: {
        ...data.label,
        formatter: (obj: { value: number }) =>
          `${obj.value > 0 ? "+" : ""}${obj.value.toFixed(2)} pp`,
      },
    })),
  };

  return <ReactECharts style={{ height: "100%" }} option={options} />;
};

export default Chart;

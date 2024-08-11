import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Define the Props interface
interface DiagnosisData {
  month: string;
  year: number;
  blood_pressure: {
    systolic: {
      value: number;
      levels: string;
    };
    diastolic: {
      value: number;
      levels: string;
    };
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
}

interface Props {
  data: DiagnosisData;
}

const DiagnosisChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: [
      "Oct,2023",
      "Nov,2023",
      "Dec,2023",
      "Jan,2024",
      "Feb,2024",
      "Mar,2024",
    ],
    datasets: [
      {
        label: "Blood Pressure",
        data: [
          data.blood_pressure.systolic.value,
          data.blood_pressure.diastolic.value,
        ],
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        borderWidth: 2,
        fill: false,
        pointRadius: 5,
      },
      {
        label: "Other Measurements",
        data: [
          null,
          null,
          data.heart_rate.value,
          data.respiratory_rate.value,
          data.temperature.value,
        ],
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        borderWidth: 2,
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to fill the container's height
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const index = tooltipItem.dataIndex;
            const levels = [
              data.blood_pressure.systolic.levels,
              data.blood_pressure.diastolic.levels,
              data.heart_rate.levels,
              data.respiratory_rate.levels,
              data.temperature.levels,
            ];
            return `${tooltipItem.label}: ${tooltipItem.raw} (${
              levels[index] || "No Data"
            })`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div
      className="chart-container mt-3"
      style={{ height: "250px", width: "500px" }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DiagnosisChart;

export default {
  responsive: true,
  tooltips: { enabled: false },
  hover: { mode: null },
  elements: {
    line: {
      tension: 0.2,
    },
  },
  legend: {
    display: false,
  },
  scale: {
    gridLines: {
      color: "#808080",
    },
    angleLines: {
      color: "#808080",
    },
    pointLabels: {
      fontColor: "white",
    },
    ticks: {
      beginAtZero: true,
      display: false,
      max: 100,
      min: 0,
      stepSize: 20,
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
      },
    ],
  },
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */

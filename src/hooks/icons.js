import { useMemo, useState } from "react";

const rules = [
  {
    range: [200, 299],
    icons: {
      day: "",
      night: "",
    },
  },
  {
    range: [300, 399],
    icons: {
      day: "",
      night: "",
    },
  },
  {
    range: [500, 599],
    icons: {
      day: "",
      night: "",
    },
  },
  {
    range: [600, 699],
    icons: {
      day: "",
      night: "",
    },
  },
  {
    range: [700, 799],
    icons: {
      day: "",
      night: "",
    },
  },
  {
    range: [800, 800],
    icons: {
      day: "",
      night: "",
    },
  },
  {
    range: [800, 804],
    icons: {
      day: "",
      night: "",
    },
  },
];

export default function (id) {
  const hour = new Date().getHours();
  const isDayTime = hour >= 6 && hour < 18;

  const rule = rules.find(({ range }) => id >= range[0] && id <= range[1]);
  if (!rule) return "";
  return isDayTime ? rule.day : rule.night;
}

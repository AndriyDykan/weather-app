import { useMemo, useState } from "react";
import defaultIcon from "../assets/icons/not-available.svg";

import d01 from "../assets/icons/day_icons/01d.svg";
import n01 from "../assets/icons/night_icons/01n.svg";

import d11 from "../assets/icons/day_icons/11d.svg";
import n11 from "../assets/icons/night_icons/11n.svg";

import d04 from "../assets/icons/day_icons/04d.svg";
import n04 from "../assets/icons/night_icons/04n.svg";

import d10 from "../assets/icons/day_icons/10d.svg";
import n10 from "../assets/icons/night_icons/10n.svg";

import d13 from "../assets/icons/day_icons/13d.svg";
import n13 from "../assets/icons/night_icons/13n.svg";

import d50 from "../assets/icons/day_icons/50d.svg";
import n50 from "../assets/icons/night_icons/50n.svg";

import d02 from "../assets/icons/day_icons/02d.svg";
import n02 from "../assets/icons/night_icons/02n.svg";

const rules = [
  {
    range: [200, 299],
    icons: {
      day: d11,
      night: n11,
    },
  },
  {
    range: [300, 399],
    icons: {
      day: d04,
      night: n04,
    },
  },
  {
    range: [500, 599],
    icons: {
      day: d10,
      night: n10,
    },
  },
  {
    range: [600, 699],
    icons: {
      day: d13,
      night: n13,
    },
  },
  {
    range: [700, 799],
    icons: {
      day: d50,
      night: n50,
    },
  },
  {
    range: [800, 800],
    icons: {
      day: d01,
      night: n01,
    },
  },
  {
    range: [800, 804],
    icons: {
      day: d02,
      night: n02,
    },
  },
];

export default function useWeatherIcon(id) {
  if (!id && id !== 0) return defaultIcon;

  const hour = new Date().getHours();
  const isDayTime = hour >= 6 && hour < 18;

  const rule = rules.find(({ range }) => id >= range[0] && id <= range[1]);
  if (!rule) return defaultIcon;

  return isDayTime ? rule.icons.day : rule.icons.night;
}

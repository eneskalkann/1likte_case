import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "./selection.json";

const iconLists = [
  "layers",
  "delivery",
  "box",
  "Arrowcurved-right",
  "Arrowcurved-leftsvg",
  "Truck",
  "screen",
  "copy",
  "discount",
  "ad",
  "statitics",
  "mini",
  "group-buying",
  "layers",
  "earth2",
  "search",
  "x",
  "linkedin",
  "instagram",
  "chevron-down",
] as const;

export type IconTypes = (typeof iconLists)[number];

const Icon = (props: IconProps & { icon: IconTypes | string }) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;

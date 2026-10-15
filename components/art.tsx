import type { ComponentType, SVGProps } from "react";
import {
  FilmStrip,
  FiveStones,
  FlatironsPostcard,
  Gaiwan,
  Lanyard,
  Letters,
  Napkin,
  NoodleBowl,
  Notebook,
  PhoneWireframe,
  Sketchbook,
  Turtle,
} from "./objects";

// The hand-drawn object that stands for each story.
export const artFor: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  govtech: Lanyard,
  synapxe: Napkin,
  "aquarii-bd": Notebook,
  "tea-companion": Gaiwan,
  "food-reccos": NoodleBowl,
  turtletrackr: Turtle,
  nusdevs: PhoneWireframe,
  "movie-recommender": FilmStrip,
  "aquarii-website": Sketchbook,
  "capt-kamal": Letters,
  captslam: FiveStones,
  "cu-boulder": FlatironsPostcard,
};

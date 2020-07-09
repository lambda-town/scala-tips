import slug from "url-slug";
import { Entry } from "../src/types";

import LeftToRightFunctionComposition from "@/standard-examples/LeftToRightFunctionComposition";
import ConditionalEither from "@/standard-examples/ConditionalEither";
import EitherFilterOrElse from "@/standard-examples/EitherFilterOrElse";
import ListOfOptionsToListOfA from "@/standard-examples/ListOfOptionsToListOfA";

const rawEntries: Entry[] = [
  ListOfOptionsToListOfA,
  LeftToRightFunctionComposition,
  ConditionalEither,
  EitherFilterOrElse,
];

const entriesWithId: Entry[] = rawEntries.map((e) => ({
  ...e,
  id: slug(`${e.name}:${(e.tags || []).join("")}`),
  name: e.name.trim(),
  description: e.description?.trim()
}));

export const entriesById = entriesWithId.reduce((acc, entry) => {
  if (acc[entry.id]) throw new Error(`Duplicate entry ${entry.id}`);
  return { ...acc, [entry.id]: entry };
}, {});

export const latestEntries = entriesWithId.slice(0, 10);

export default entriesWithId;

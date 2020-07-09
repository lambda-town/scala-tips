import allEntries from "../../data/entries";
import Fuse from "fuse.js";
import { useMemo, ReactNode, FC } from "react";
import { Entry } from "src/types";
import EntryCard from "./EntryCard";
import { options } from "data/search";

export interface Props {
  query: string;
  indexString: string;
}

const FilteredEntries = ({ query, indexString }: Props): ReactNode => {
  const fuse: Fuse<Entry, typeof options> = useMemo(() => {
    const index = Fuse.parseIndex<Entry>(JSON.parse(indexString));
    return new Fuse(allEntries, options, index);
  }, [indexString]);

  const entries: Entry[] = fuse.search(query).map((r) => r.item);

  return entries.map((e) => <EntryCard key={e.id} entry={e} />);
};

export default FilteredEntries as FC<Props>;

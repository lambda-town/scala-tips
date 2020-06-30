import allEntries from "../../data/entries";
import Fuse from "fuse.js";
import { useMemo, ReactNode, FC } from "react";
import { Entry } from "src/types";
import EntryCard from "./EntryCard";
import Link from "next/link";
import { options } from "data/search";

export interface Props {
  query: string;
  indexString: string;
}

const FilteredEntries = ({ query, indexString }: Props): ReactNode => {
  const fuse: Fuse<Entry, typeof options> = useMemo(() => {
    const index = Fuse.parseIndex<Entry>(JSON.parse(indexString));
    return new Fuse(allEntries, options, index)
  }, [indexString]);

  const entries: Entry[] = fuse.search(query).map(r => r.item);

  return entries.map((e) => (
    <Link key={`${e.id}:${e.kind}`} href="/[id]" as={`/${e.id}`}>
      <EntryCard entry={e} cursor="pointer" />
    </Link>
  ));
};

export default FilteredEntries as FC<Props>
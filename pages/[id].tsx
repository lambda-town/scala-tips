import { Entry } from "src/types";
import { Fragment } from "react";
import Navbar from "src/components/Navbar";
import CenteredContainter from "src/components/CenteredContainer";
import EntryCard from "src/components/EntryCard";
import entries, { entriesById } from "data/entries";

interface Props {
  entry: Entry;
}

const SingleEntry = ({ entry }: Props) => {
  return (
    <Fragment>
      <Navbar />
      <CenteredContainter narrow marginTop={[6, 8, 12]}>
        <EntryCard entry={entry} />
      </CenteredContainter>
    </Fragment>
  );
};

export async function getStaticProps({ params: { id } }) {
  const entry = entriesById[id];
  return {
    props: { entry },
  };
}

export async function getStaticPaths() {
  return {
    paths: entries.map((e) => ({ params: { id: e.id } })),
    fallback: false,
  };
}

export default SingleEntry;

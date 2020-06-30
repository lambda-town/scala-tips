import { Entry } from "src/types";
import { Fragment } from "react";
import Navbar from "src/components/Navbar";
import CenteredContainer from "src/components/CenteredContainer";
import EntryCard from "src/components/EntryCard";
import entries, { entriesById } from "data/entries";
import Head from "next/head";

interface Props {
  entry: Entry;
}

const SingleEntry = ({ entry }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{entry.name} - Scala Tips</title>
        <meta name="description" content={entry.description} />
      </Head>
      <Navbar />
      <CenteredContainer narrow marginTop={[6, 8, 12]}>
        <EntryCard entry={entry} />
      </CenteredContainer>
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

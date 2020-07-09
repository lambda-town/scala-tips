import { Fragment } from "react";
import Navbar from "../src/components/Navbar";
import CenteredContainer from "../src/components/CenteredContainer";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/core";
import { Entry } from "../src/types";
import EntryCard from "../src/components/EntryCard";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const FilteredEntries = dynamic(() =>
  import("../src/components/FilteredEntries")
);

interface Props {
  latestEntries: Entry[];
  indexString: string;
}

const HomePage = ({ latestEntries, indexString }: Props) => {
  const router = useRouter();
  const query = router.query.q;

  const entries = query ? (
    <FilteredEntries query={query as string} indexString={indexString} />
  ) : (
    latestEntries.map((e) => <EntryCard key={e.id} entry={e} />)
  );

  const hero = (
    <Box backgroundColor="gray.200" textAlign="center" padding={[4, 8]}>
      <Text
        as="h1"
        color="primary"
        marginY={4}
        fontWeight="bold"
        fontSize="2xl"
      >
        A cheat sheet for everyday Scala programming
      </Text>
      <Text color="gray.500">
        Including tips, type juggling examples, error resolutions, jargon
        definitions and more
      </Text>
      <Text color="gray.500">
        Brought to you by{" "}
        <ChakraLink textDecor="underline" href="https://lambda.town">
          lambda.town
        </ChakraLink>
      </Text>
    </Box>
  );

  return (
    <Fragment>
      <Head>
        <title>
          Scala programming cheatsheet - Tips, definitions and good practices
        </title>
        <meta
          name="description"
          content="Scala Tips is a curated list of tips for the Scala programming language. It includes definitions, tips and code examples"
        />
      </Head>
      <Navbar />
      <CenteredContainer narrow marginTop={[6, 8, 12]}>
        {query ? null : hero}
        {entries}
      </CenteredContainer>
    </Fragment>
  );
};

export async function getStaticProps() {
  const entries = await import("../data/entries");
  const search = await import("../data/search");

  const props: Props = {
    latestEntries: entries.latestEntries,
    indexString: search.indexString,
  };

  return { props };
}

export default HomePage;

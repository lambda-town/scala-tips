import { Fragment } from "react";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import CenteredContainter from "../src/components/CenteredContainer";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/core";
import { Entry } from "../src/types";
import { latestEntries } from "../data/entries";
import EntryCard from "../src/components/EntryCard";
import Head from "next/head";

interface Props {
  latestEntries: Entry[];
}

const HomePage = ({ latestEntries }: Props) => {
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
      <CenteredContainter narrow marginTop={[6, 8, 12]}>
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
        {latestEntries.map((e) => (
          <Link key={`${e.id}:${e.kind}`} href="/[id]" as={`/${e.id}`}>
            <EntryCard entry={e} cursor="pointer" />
          </Link>
        ))}
      </CenteredContainter>
    </Fragment>
  );
};

export async function getStaticProps() {
  const props: Props = {
    latestEntries,
  };

  return { props };
}

export default HomePage;

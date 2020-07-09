import { Entry, Polymorphic, CodeSample } from "../types";
import { Box, Text, SimpleGrid, BoxProps } from "@chakra-ui/core";
import { usePolymorphicContext } from "../PolymorphicContext";
import MarkdownRenderer from "./MarkdownRenderer";
import dynamic from "next/dynamic";
import Link from "next/link";

const SyntaxHighlighter = dynamic(() => import("./SyntaxHighlighter"));

interface Props extends BoxProps {
  entry: Entry;
}

const EntryCard = ({ entry, ...props }: Props) => {
  const { renderPolymorphic } = usePolymorphicContext();

  const contentPadding = [2, 4];

  const title = (
    <Box padding={contentPadding} borderBottomWidth={1} borderBottomColor="gray.200">
      <Text fontWeight="semibold">{entry.name}</Text>
    </Box>
  );

  const operands = (() => {
    if (entry.kind !== "entry-with-operands") return null;

    const withOperandsLength = entry.with?.length || 0;
    const maxColumns = 2 + withOperandsLength;

    return (
      <SimpleGrid
        columns={[1, maxColumns]}
        justifyContent="center"
        textAlign="center"
        backgroundColor="red.50"
        paddingX={contentPadding}
        paddingY={[3, 6]}
      >
        <Box>
          <Text fontSize="sm">From</Text>
          <Text fontFamily="monospace" fontSize="md">
            {renderPolymorphic(entry.from)}
          </Text>
        </Box>
        {entry.with?.length ? (
          <Box>
            <Text fontSize="sm">With</Text>
            {entry.with.map((o) => (
              <Text
                fontFamily="monospace"
                fontSize="md"
                key={(o as Polymorphic<any>).concrete || o}
              >
                {renderPolymorphic(o)}
              </Text>
            ))}
          </Box>
        ) : null}
        <Box>
          <Text fontSize="sm">To</Text>
          <Text fontFamily="monospace" fontSize="md">
            {renderPolymorphic(entry.to)}
          </Text>
        </Box>
      </SimpleGrid>
    );
  })();

  const description = entry.description ? (
    <Text paddingX={contentPadding} pt={6} fontSize={["sm", "md"]}>
      <MarkdownRenderer source={entry.description} />
    </Text>
  ) : null;

  const codeSamples = entry.codeSamples?.length ? (
    <Box padding={contentPadding}>
      <Text fontWeight="semibold" color="gray.500">
        Code samples
      </Text>

      {entry.codeSamples.map((sample) =>
        renderPolymorphic(sample, (s: CodeSample) => (
          <SyntaxHighlighter
            marginY={4}
            language={s.language}
            value={s.content}
            key={s.content}
          />
        ))
      )}
    </Box>
  ) : null;

  return (
    <Box
      marginY={[4, 8, 16]}
      background="white"
      rounded="sm"
      boxShadow="md"
      {...props}
    >
      <Link href="/[id]" as={`/${entry.id}`}>
        <Text as="a" cursor="pointer" textDecor="underline">
          {title}
        </Text>
      </Link>
      {operands}
      {description}
      {codeSamples}
    </Box>
  );
};

export default EntryCard;

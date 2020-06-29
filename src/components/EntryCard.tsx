import { Entry, Polymorphic, CodeSample } from "../types";
import { Box, Text, SimpleGrid, BoxProps } from "@chakra-ui/core";
import { usePolymorphicContext } from "../PolymorphicContext";
import MarkdownRenderer from "./MarkdownRenderer";
import dynamic from "next/dynamic";

const SyntaxHighlighter = dynamic(() => import("./SyntaxHighlighter"));

interface Props extends BoxProps {
  entry: Entry;
}

const EntryCard = ({ entry, ...props }: Props) => {
  const { renderPolymorphic } = usePolymorphicContext();

  const title = (
    <Box padding={4} borderBottomWidth={1} borderBottomColor="gray.200">
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
        paddingX={4}
        paddingY={6}
      >
        <Box>
          <Text fontSize="sm">From</Text>
          <Text fontFamily="monospace" fontSize="md">
            {renderPolymorphic(entry.from)}
          </Text>
        </Box>
        {withOperandsLength ? (
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
    <Text paddingX={4} pt={6}>
      <MarkdownRenderer source={entry.description} />
    </Text>
  ) : null;

  const codeSamples = entry.codeSamples?.length ? (
    <Box padding={4}>
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
      {title}
      {operands}
      {description}
      {codeSamples}
    </Box>
  );
};

export default EntryCard;

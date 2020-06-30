import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';
import stripIndent from 'strip-indent';
import { LightAsync as RSH } from "react-syntax-highlighter";
import { Box, BoxProps } from "@chakra-ui/core";

interface Props extends BoxProps {
  value: string;
  language?: string;
}

const SyntaxHighlighter = ({ value, language, ...props }: Props) => {
  return (
    <Box overflow="hidden" fontSize="sm" {...props}>
      <RSH language={language || "shell"} style={docco}>
        {stripIndent(value)}
      </RSH>
    </Box>
  );
};

export default SyntaxHighlighter;

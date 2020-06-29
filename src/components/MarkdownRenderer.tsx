import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import SyntaxHighlighter from "./SyntaxHighlighter";
import { Text } from "@chakra-ui/core";

const renderers = {
  code: SyntaxHighlighter,
  inlineCode: (props) => (
    <Text as="code" fontSize="lg" backgroundColor="red.50" color="primary" fontFamily="monospace" {...props}></Text>
  ),
};

const MarkdownRenderer = (props: ReactMarkdownProps) => (
  <ReactMarkdown renderers={renderers} {...props} />
);

export default MarkdownRenderer;

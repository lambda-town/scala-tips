import { BoxProps, Box } from "@chakra-ui/core";

interface Props extends BoxProps {
  narrow?: boolean;
}

const CenteredContainer = ({ narrow, ...props }: Props) => (
  <Box paddingX={narrow ? [3, 8, 12, "200px", "430px"] : [2, 4, 6, 24, 48]} {...props} />
);

export default CenteredContainer;

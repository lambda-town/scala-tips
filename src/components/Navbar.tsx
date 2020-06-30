import { Box, Text, PseudoBox } from "@chakra-ui/core";
import CenteredContainer from "./CenteredContainer";
import { memo } from "react";
import { usePolymorphicContext } from "../PolymorphicContext";
import Link from "next/link";
import SearchForm from "./SearchForm";

const brand = (
  <Link href="/">
    <Text
      cursor="pointer"
      as="h2"
      fontWeight="semibold"
      fontSize="lg"
      color="primary"
    >
      Scala Tips
    </Text>
  </Link>
);

const Navbar = () => {
  const { setCurrentMode, mode } = usePolymorphicContext();

  const modeSwitch = (
    <PseudoBox
      height="100%"
      borderX="solid 1px"
      paddingX={[2, 4]}
      display="flex"
      alignItems="center"
      borderColor="gray.200"
      cursor="pointer"
      onClick={() =>
        setCurrentMode(mode === "abstract" ? "concrete" : "abstract")
      }
      _hover={{
        backgroundColor: "gray.100",
      }}
    >
      {mode === "concrete" ? "Show abstract types" : "Show concrete types"}
    </PseudoBox>
  );

  const menu = <Box height="100%">{modeSwitch}</Box>;

  const search = <SearchForm />

  return (
    <Box
      h={[60, 80]}
      position="sticky"
      top={0}
      background="white"
      borderTopWidth={6}
      borderTopColor="primary"
      boxShadow="sm"
    >
      <CenteredContainer
        d="flex"
        alignItems="center"
        height="100%"
        justifyContent="space-between"
      >
        {brand}
        {search}
        {menu}
      </CenteredContainer>
    </Box>
  );
};

export default memo(Navbar);

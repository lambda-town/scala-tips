import { useReducer, FormEvent } from "react";
import { useRouter, Router } from "next/router";
import { Input } from "@chakra-ui/core";

const searchParamName = "q";

const SearchForm = () => {
  const router = useRouter();

  const query = router.query[searchParamName] || "";

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    router.push({
      pathname: "/",
      query: { [searchParamName]: e.currentTarget.value },
    });
  };

  return (
    <Input
      maxW="600px"
      placeholder="Search Scala tips ..."
      borderColor="gray.500"
      _placeholder={{
        color: "gray.500",
        opacity: 1
      }}
      focusBorderColor="red.300"
      value={query}
      onChange={onChange}
    />
  );
};

export default SearchForm;

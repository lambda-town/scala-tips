import {
  EntryWithOperands,
  Polymorphic,
  Operand,
} from "../../../../../../../src/types";
import { lines } from "../../../../../../../src/utils";
import { polymorphicUnaryFunction } from "../../../../../../operands";
import code from "./LeftToRightFunctionComposition.scala";

const getLines = lines(code);

const personA: Polymorphic<Operand> = {
  abstract: "A",
  concrete: "Person",
  isPolymorphic: true,
};

const twitterHandleB: Polymorphic<Operand> = {
  abstract: "B",
  concrete: "TwitterHandle",
  isPolymorphic: true,
};

const urlC: Polymorphic<Operand> = {
  abstract: "C",
  concrete: "URL",
  isPolymorphic: true,
};

const entry: EntryWithOperands = {
  kind: "entry-with-operands",
  name: getLines(6, 6),
  from: polymorphicUnaryFunction(personA, twitterHandleB),
  with: [polymorphicUnaryFunction(twitterHandleB, urlC)],
  to: polymorphicUnaryFunction(personA, urlC),
  description: getLines(8, 13),
  codeSamples: [
    {
      isPolymorphic: true,
      abstract: {
        language: "scala",
        content: getLines(36, 39),
      },
      concrete: {
        language: "scala",
        content: getLines(22, 33),
      },
    },
  ],
};

export default entry;

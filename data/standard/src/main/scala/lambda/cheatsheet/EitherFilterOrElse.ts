import {
  EntryWithOperands,
  Polymorphic,
  Operand,
} from "../../../../../../../src/types";
import { lines } from "../../../../../../../src/utils";
import {
  polymorphicEither,
  polymorphicUnaryFunction,
  polymorphic,
} from "../../../../../../operands";
import code from "./EitherFilterOrElse.scala";

const getLines = lines(code);

const user: Polymorphic<Operand> = {
  abstract: "A",
  concrete: "User",
  isPolymorphic: true,
};

const failure: Polymorphic<Operand> = {
  abstract: "Left",
  concrete: "Failure",
  isPolymorphic: true,
};

const boolean: Operand = "Boolean";

const entry: EntryWithOperands = {
  kind: "entry-with-operands",
  name: getLines(4, 4),
  from: polymorphicEither(failure, user),
  with: [polymorphicUnaryFunction(user, polymorphic(boolean))],
  to: polymorphicEither(failure, user),
  description: getLines(6, 7),
  codeSamples: [{ language: "scala", content: getLines(11, 18) }],
  tags: ["either", "validation", "predicate"]
};

export default entry;

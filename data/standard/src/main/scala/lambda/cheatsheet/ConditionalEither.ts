import {
  EntryWithOperands,
  Polymorphic,
  Operand,
} from "../../../../../../../src/types";
import { lines } from "../../../../../../../src/utils";
import { polymorphicEither } from "../../../../../../operands";
import code from "./ConditionalEither.scala";

const getLines = lines(code);

const user: Polymorphic<Operand> = {
  abstract: "A",
  concrete: "User",
  isPolymorphic: true,
};

const sensitiveContent: Polymorphic<Operand> = {
  abstract: "B",
  concrete: "SensitiveContent",
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
  with: [boolean],
  to: polymorphicEither(failure, sensitiveContent),
  description: getLines(6, 8),
  codeSamples: [{ language: "scala", content: getLines(11, 25) }],
  tags: ["either", "boolean", "validation"]
};

export default entry;

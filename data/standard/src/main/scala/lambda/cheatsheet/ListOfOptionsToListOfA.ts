import {
  EntryWithOperands,
  Polymorphic,
  Operand,
} from "../../../../../../../src/types";
import { lines } from "../../../../../../../src/utils";
import { polymorphicList, polymorphicOption } from "../../../../../../operands";
import code from "./ListOfOptionsToListOfA.scala";

const getLines = lines(code);

const user: Polymorphic<Operand> = {
  abstract: "A",
  concrete: "User",
  isPolymorphic: true,
};

const entry: EntryWithOperands = {
  kind: "entry-with-operands",
  name: getLines(5, 5),
  from: polymorphicList(polymorphicOption(user)),
  to: polymorphicList(user),
  description: getLines(7, 12),
  codeSamples: [
    { language: "scala", content: getLines(16, 29) },
    { language: "scala", content: getLines(33, 42) },
  ],
  tags: ["option", "filtering"]
};

export default entry;

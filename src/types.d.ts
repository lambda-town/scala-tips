import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from "constants"

type Entry = EntryWithOperands

export interface EntryData {
  id?: string,
  name: string,
  description?: string,
  tags?: string[]
}

interface Polymorphic<T> {
  abstract: T,
  concrete: T,
  isPolymorphic: true
}

export type Description = string
export type Operand = string
export interface CodeSample {
  language: "scala",
  content: string
}

export interface EntryWithOperands extends EntryData {
  kind: "entry-with-operands",
  from: Operand | Polymorphic<Operand>,
  with?: (Operand | Polymorphic<Operand>)[],
  to: Operand | Polymorphic<Operand>,
  description?: Description,
  codeSamples?: (CodeSample | Polymorphic<CodeSample>)[]
}
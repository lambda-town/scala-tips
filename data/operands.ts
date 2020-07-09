import { Polymorphic, Operand } from "../src/types";

export const polymorphicUnaryFunction = (
  a: Polymorphic<Operand>,
  b: Polymorphic<Operand>
): Polymorphic<Operand> => ({
  abstract: `${a.abstract} => ${b.abstract}`,
  concrete: `${a.concrete} => ${b.concrete}`,
  isPolymorphic: true,
});

export const polymorphicEither = (
  left: Polymorphic<Operand>,
  right: Polymorphic<Operand>
): Polymorphic<Operand> => ({
  abstract: `Either[${left.abstract}, ${right.abstract}]`,
  concrete: `Either[${left.concrete}, ${right.concrete}]`,
  isPolymorphic: true,
});

export const polymorphicList = (
  type: Polymorphic<Operand>
): Polymorphic<Operand> => ({
  abstract: `List[${type.abstract}]`,
  concrete: `List[${type.concrete}]`,
  isPolymorphic: true,
});

export const polymorphicOption = (
  type: Polymorphic<Operand>
): Polymorphic<Operand> => ({
  abstract: `Option[${type.abstract}]`,
  concrete: `Option[${type.concrete}]`,
  isPolymorphic: true,
});

export const polymorphic = <T>(data: T): Polymorphic<T> => ({
  abstract: data,
  concrete: data,
  isPolymorphic: true,
});

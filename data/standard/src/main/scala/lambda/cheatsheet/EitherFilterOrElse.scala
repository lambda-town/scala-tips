package lambda.cheatsheet

/*
Filtering an Either using a predicate (filter or else)

`Either.filterOrElse` allows filtering an either by ensuring the value contained in the `Either`, if
it is a `Right`, matches the given predicate.
*/
object ConditionalEither {

  type Failure = String
  case class User(name: String, age: Int)

  Right(User("Patrick", 33)).filterOrElse(_.age >= 18, "User too young to be a member")
  // Right(User("Patrick", 33))

  Right(User("Grant", 16)).filterOrElse(_.age >= 18, "User too young to be a member")
  // Left("User too young to be a member")
}
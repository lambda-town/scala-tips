
package lambda.cheatsheet

/*
Turning a list of optional values (Option[A]) to a list of values (A)

Calling `.flatten` on a list of optional values will yield a list of all the values contained
in all the `Some(_)`s we had, and leave `None` behind.

Similarly, if you have a list of values `A`, and a function from an `A` to an optional value
`Option[B]`, then calling `flatMap` on your list will allow you to turn your `List[A]` into
a `List[B]`, leaving Nones behind.
*/
object ListOfOptionsToListOfAFlatten {

  case class User(id: Int, nickname: String)

  val list: List[Option[User]] = List(
    Some(User(1, "John")),
    None,
    Some(User(2, "Paul")),
    Some(User(3, "Ringo")),
    None,
    None,
    Some(User(4, "George"))
  )

  list.flatten
  // => List(User(1, John), User(2, Paul), User(3, Ringo), User(4, George))
}

object ListOfOptionsToListOfAFlatmap {
  case class User(id: Int, nickname: Option[String])

  val list: List[User] = List(
    User(1, Some("happy_rick")),
    User(1, None),
    User(3, Some("awesome_kelly")),
  )

  list.flatMap(_.nickname)
  // => List(happy_rick, awesome_kelly)
}
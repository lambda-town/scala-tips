package lambda.cheatsheet

/*
Turning a boolean to an Either (conditional short-circuiting with Either)

`Either.cond` allows to build an instance of `Either` based on a boolean, a "right" value
and a "left" value. When composed with other Eithers, this allows to short-circuit a computation
based on the value of a boolean.
*/
object ConditionalEither {
  type SensitiveContent = String
  type Failure = String
  case class User(name: String, age: Int)

  def accessSensitiveContent: (user: User): Either[Error, SensitiveContent] =
    Either.cond(user.age >= 18, "super sensitive content", "You are too young to see this") 

  Right(User("Léa", 15)).flatMap(accessSensitiveContent) 
  // Left("You are too young to see this")

  Right(User("Tom", 43)).flatMap(accessSensitiveContent) 
  // Right("super sensitive content")

  Left("Failed to retrieve user").flatMap(accessSensitiveContent) 
  // Left("Failed to retrieve user")  
}
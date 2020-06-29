package lambda.cheatsheet

import java.net.URL

/*
  Left-to-right unary function composition

  Composes two unary functions (functions of one argument) into a single function,
  with the first one being applied first, and the second one being applied to the result
  of the first function application.

  Given two function `f` and `g`, the composition of `f` and `g` using `andThen` will give
  `g(f(x))`
 */
object FunctionComposition {

  type A
  type B
  type C

  // Concrete
  case class TwitterHandle(value: String) extends AnyVal
  case class Person(twitterHandle: TwitterHandle)

  val getTwitterHandle: Person => TwitterHandle = _.twitterHandle
  val getUrl: TwitterHandle => URL = handle =>
    new URL(s"https://twitter.com/${handle.value.tail}")

  val getProfile: Person => URL = getTwitterHandle andThen getUrl

  val person = Person(TwitterHandle("@ScalaSteward"))

  getProfile(person) // https://twitter.com/ScalaSteward

  // Abstract
  val getBFromA: A => B = ???
  val getCFromB: B => C = ???

  val getCFromA: A => C = getBFromA andThen getCFromB

}

# Regex cheetsheet

## Basic Matching

  ----------
 1.**.**       -> anything

 2.**\d**      -> Matches digits, which means 0-9.

 3.**\D**      -> Matches any non-digits.

 4.**\w**      -> Matches alphanumeric characters, which means a-z, A-Z, and 0-9. It also matches the underscore, _.

 5.**\W**      -> non-word

 6.**\t**      -> tab

 7.**\r**      -> return

 8.**\n**      -> new line

 9.**\s**      -> Matches whitespace characters, which include the \t, \n, \r, and space character

 10.**\S**     -> Matches non-whitespace characters.

 11.**\A**     -> Matches the expression to its right at the absolute **start of a string** whether in single or multi-line mode.

 12.**\Z**     -> Matches the expression to its left at the absolute **end of a string** whether in single or multi-line mode

 13.**\<**    -> Start of a word

 14.**\>**    -> End of a word

 15.**\c**    -> Control character

 16.**\xhh**  -> Hexadecimal character hh

 17.**\Oxxx** -> Octal character xxx

## Character classes

----------
> _( )_ Matches the expression inside the parentheses and groups it.
> Character classes [...] match any of the characters in the class, i.e [aeiou] matches vowels
 > _[(+*)]_ Special characters become literal inside a set, so this matches (, +, *, and )
> Use ^ to specify the compliment set i.e [^aeiou], matches non-vowels. including alpha characters.
 > Use **-** to specify a range of letters i.e [a-e] matches abcde and [0-9a-z] matches all numbers and letters in **small case**

## Groups

 > **(?)**        -> Inside parentheses like this, ? acts as an extension notation. Its meaning depends on the character immediately to its right.
 > **(?PAB)**     -> Matches the expression AB, and it can be accessed with the group name.
 > **(?aiLmsux)** -> Here, a, i, L, m, s, u, and x are
  1. a — Matches ASCII only i — Ignore case
  2. L — Locale dependent m — Multi-line
  3. s — Matches all
  4. u — Matches unicode
  5. x — Verbose
 > **(?:A)**     -> Matches the expression as represented by A, but unlike (?PAB), it cannot be retrieved afterwards.
 > **(?#...)**   -> A comment. Contents are for us to read, not for matching.
 > **A(?=B)**    -> Lookahead assertion. This matches the expression A only if it is followed by B.
 > **A(?!B)**    -> Negative lookahead assertion. This matches the expression A only if it is not followed by B.
 > **(?<=B)A**   -> Positive lookbehind assertion. This matches the expression A only if B is immediately to its left. This can only matched fixed length expressions.
 > **(?<!B)A**   -> Negative lookbehind assertion. This matches the expression A only if B is not immediately to its left. This can only matched fixed length expressions.
 > **(?P=name)** -> Matches the expression matched by an earlier group named “name”.
 > **(...)\1**   -> The number 1 corresponds to the first group to be matched. If we want to match more instances of the same expression, simply use its number instead of writing out the whole expression again. We can use from 1 up to 99 such groups and their corresponding numbers

```js
  var expression = new RegExp("[a-z0-9]"); //matches all characters and digits excluding alphanumeric
  expression.test("123abc"); // true
  expression.test("@"); // false
```

## Bounderies

----------
 > Boundery characters are used to `anchor` your pattern to some edge, but **do not** select any characters themselves.

- **\b** -> Matches the boundary (or empty string) at the start and end of a word, that is, between \w and \W.
- **\B** -> Matches where \b does not, that is, the boundary of \w characters
- **^**  -> the begining of the line
- **$**  -> the end of the line

## Disjunction

----------
> OR (the best definition I could come up with 😀)

- **(X|Y)** -> X or Y

## Quantifiers

----------
1.**X***          -> 0 or more repetitions of X
2.**X+**          -> 1 or more repetitions of X
3.**X?**          -> 0 or 1 instances of X
4.**X{_m_}**      -> exactly _m_ instances of X
5.**X{_m_, }**    -> atleast _m_ instances of X
6.**X{_m_, _n_}** -> between _m_ & _n_ instances of X
7.**?**           -> 0 or 1 +
8.**??**          -> 0 or 1,  ungreedy +

## Examples

```js
  var expression = new RegExp("ab+");
  expression.test("a"); // false
  expression.test("ab"); // true
  expression.test("abb"); // true
  expression.test("abbb"); // true
  expression.test("abbb"); // true
```

```js
  var expression = new RegExp("ab*");
  expression.test("a"); // true
  expression.test("ab"); // true
  expression.test("abb"); // true
  expression.test("abbb"); // true
  expression.test("abbb"); // true
```

```js
  var expression = new RegExp("ab?");
  expression.test("a"); // true
  expression.test("ab"); // true
  expression.test("abb"); // true
  expression.test("abbb"); // true
  expression.test("abbb"); // true
```

## Special characters

----------
 > `{}[]()^$.|*+?\(and - inside [...])` have a special meaning in regex and _must be **escaped** with **\** to match them. i.e **\.**, **\\**, **\{**

 1.**^***        -> Matches expression to its right at the start of a string. It matches every such instance before each _\n_ in the string
 2.**$**         -> Matches the expression to its left at the end of a string. It matches every such instance before each _\n_ in the string.
 3.**.**         -> Matches any character except line terminators like _\n_
 4.**\**         -> Escapes special characters or denotes character classes
 5.**A|B**       -> Matches expression A or B. If A is matched first, B is left untried.
 6.**+**         -> Greedily matches the expression to its left 1 or more times.
 7.*****         -> Greedily matches the expression to its left 0 or more times.
 8.**?**         -> Greedily matches the expression to its left 0 or 1 times. But if ? is added to qualifiers (+, *, and ? itself) it will perform matches in a non-greedy manner.
 9.**{m}**       -> Matches the expression to its left m times, and not less
 10.**{m, n}**    -> Matches the expression to its left m to n times, and not less
 11.**{m, n}?**   -> Matches the expression to its left m times, and ignores n. See ? above.

## Backreferences

----------
 > Count your open parenthesis ( from the left, starting with 1. Whatever is matched by parenthesis number _n_ can be referenced later **\_n_**

```js
  // matches two identical words, with one space in between
  var expression = /\b(\w+)\s\1\b/;
  expression.test("aaaa"); // true
  expression.test("aba"); // false
```

## Use Backreferences to find/replace in a string (use _javascript_)

## POSIX character Classes

1.[:upper:]    -> Upper case letters
2.[:lower:]    -> Lower case letters
3.[:alpha:]    -> All letters
4.[:alnum:]    -> Digits and letters
5.[:digits:]   -> Digits
6.[:xdigit:]   -> Hexadecimal digits
7.[:punct:]    -> Puctuation
8.[:blanck:]   -> Space and tab
9.[:cntrl:]    -> Control characters
10.[:graph:]    -> Printed characters
11.[:print:]    -> Printed characters and spaces
12.[:word:]     -> Digits, letters, and underscore

## Assertions

> **?=**             -> Lookahead assertion +
> **?!**             -> Negative Lookahead +
> **?<=**            -> Lookbehind assertion +
> **?! or ?<!**      -> Negative Lookbehind
> **?>**             -> Once-only Subexpression
> **?()**            -> condition [if then]
> **?()|**           -> condition [if then else]
> **?#**             -> comment

## Sample Patterns

```js
  const reg1 = /([A-Za-z0-9]+)/; // Letrers, numbers and hyphens
  const reg2 = /(\d{1,2}\/\d{1,2}\/\d{4})/ // Date (e.g 21/3/2006)
  const reg3 = /([^\s]+(?=\.(jpg|gif|png))\.\2)/ //png, gif, image
  const reg4 = /(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$)/ // validate hexadecimal color
  const reg5 = /(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/ // 8 t0 15 character string with atleast one uppercase letter, one lower case letter and one digit(useful for passwords)
  const reg6 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/ // validating email addresses
  const reg7 = /(\<(/?[^\>]+)\>)/; // Validating HTML tags
```

## Patter Modifiers

> **g**   -> Global match
> **i**   -> case-insensitive
> **m**   -> Multiple lines
> **s**   -> Treat string as single line
> **x**m  -> Allow white space in pattern
> **U**   -> Ungreedy pattern

## Metacharacters(must be escaped)

 > ^, [, ., $, {, *, (, \, +, ), |, ?, <, >
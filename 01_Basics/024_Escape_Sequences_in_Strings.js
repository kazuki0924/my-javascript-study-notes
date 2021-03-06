// Escape Sequences in Strings

// Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters: First is to allow you to use characters you might not otherwise be able to type out, such as a backspace. Second is to allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean. We learned this in the previous challenge.

// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	backspace
// \f	form feed
// Note that the backslash itself must be escaped in order to display as a backslash.

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// FirstLine
//     \SecondLine
// ThirdLine
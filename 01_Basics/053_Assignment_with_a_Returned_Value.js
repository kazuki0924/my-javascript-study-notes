// Assignment with a Returned Value

// If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

// Assume we have pre-defined a function sum which adds two numbers together, then:

// ourSum = sum(5, 12);

// will call sum function, which returns a value of 17 and assigns it to ourSum variable.

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10); // 5
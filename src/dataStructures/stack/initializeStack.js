//! push pop Operation in Stack
const stack = [];

const push = (element) => {
  stack.push(element);
};

const pop = (element) => {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack.pop();
};

const peek = () => {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
};

const isEmpty = () => {
  return stack.length === 0;
};

// Push elements onto the stack
push(10);
push(20);
push(30);
console.log("Stack:", stack);
console.log("Peek from Stack :", peek());
console.log("poping....", pop());
console.log("After poping Stack: ", stack);
console.log("Pushing.....", push(85));
console.log("After Pushing Stack: ", stack);

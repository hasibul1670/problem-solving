const sortStack = (inputStack) => {
  const tempStack = [];

  while (!isEmpty(inputStack)) {
    const temp = inputStack.pop();

    while (!isEmpty(temp) && tempStack[tempStack.length - 1] < temp) {
      inputStack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  while (!isEmpty(tempStack)) {
    inputStack.push(tempStack.pop());
  }
};

function isEmpty(stack) {
  return stack.length === 0;
}

// Example usage
const stack = [25, 41, 21, 8, 9, 7];
console.log("Given stack:", stack);
sortStack(stack);

console.log("Sorted stack:", stack);

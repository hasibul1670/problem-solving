const reverse = (string) => {
  const reverseString = string.split("").reverse().join("");
  return reverseString;
};
console.log(reverse("Hello world!"));

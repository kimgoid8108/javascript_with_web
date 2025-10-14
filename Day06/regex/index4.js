const input = document.querySelector("#input");

input.addEventListener("input", () => {
  const { value } = input;
  const number = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;

  console.log(number.test(value));
});

export function calculateSum(args) {
  let sum = 0;

  args.forEach((arg) => {
    const num = parseFloat(arg);

    if (!isNaN(num)) {
      sum += num;
    }
  });

  return sum;
}

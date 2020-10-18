export function convert(number) {
  const factors = [3, 5, 7];
  const drops = ["Pling", "Plang", "Plong"];

  let rainDrops = "";

  for (let i = 0; i < factors.length; i++) {
    number % factors[i] === 0 ? (rainDrops += drops[i]) : 0;
  }

  return rainDrops || number.toString();
}

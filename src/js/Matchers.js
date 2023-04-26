function Matchers(arr) {
  arr.sort((a, b) => a.health - b.health).reverse();
  return arr;
}

export default Matchers;

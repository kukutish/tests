function GetColor(obj) {
  let value;
  if (obj.health > 50) {
    value = 'green';
  } else if (obj.health > 15) {
    value = 'yellow';
  } else {
    value = 'red';
  }
  return value;
}

export default GetColor;

function GetColor (obj) {
  return obj.health > 50 ? 'green' : (obj.health > 15) ? 'yellow' : 'red'
}

export default GetColor


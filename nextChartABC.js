/**
 * tengo que pasar a la letra siguiente cada letra de la cadena
 * ademas si se encuentra una vocal debo ponerla en mayuscula
 * @param {*} str
 * @returns
 */
function StringChallenge(str) {
  challengeToken = "ehima19j3";
  //retornamos la siguiente letra de la cadena
  let nextChart = str.split("").map((char, index) => {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (char === "z") return "a";
      if (char === "Z") return "A";
      return String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return char;
  });

  //convertimos a mayusculas las vocales minusculas
  nextChart = nextChart
    .map((char, index) => {
      if (/[aeiou]/g.test(char)) return char.toUpperCase();
      return char;
    })
    .join("");

  //devolvemos la cadena con el challengeToken
  nextChart = (nextChart + challengeToken)
    .split("")
    .map((char, index) => {
      return (index + 1) % 4 === 0 ? "_" : char;
    })
    .join("");

  return nextChart;
}

console.log(StringChallenge("hello world"));
console.log(StringChallenge("sentence"));
console.log(StringChallenge("this long cake@&"));
console.log(StringChallenge("a confusing /:sentence:/[ this is not!!!!!!!~"));
//Ifm_p x_smE_him_19j_

function QuestionsMarks(str) {
    res = false; // Inicializa la variable res a false
    for (let i = 0; i < str.length; i++) { // Itera sobre la cadena
      for (let j = i + 1; j < str.length; j++) { // Itera desde el siguiente carácter hasta el final
        if (Number(str[i]) + Number(str[j]) === 10) { // Si la suma de los caracteres en las posiciones i y j es igual a 10
          res = true; // Establece res como true
          if (str.slice(i, j).split("?").length - 1 < 3) { // Si el número de "?" entre i y j es menor que 3
            return false; // Retorna false (no cumple la condición)
          }
        }
      }
    }
    return res; // Si todo está bien, retorna res (true o false)
  }
  
  // keep this function call here
  QuestionsMarks(readline());

  /**
   * . For input "arrb6???4xxbl5???eee5" the output was incorrect. The correct output is true

2. For input "acc?7??sss?3rr1??????5" the output was incorrect. The correct output is true

3. For input "9???1???9???1???9" the output was incorrect. The correct output is true

4. For input "5??aaaaaaaaaaaaaaaaaaa?5?a??5" the output was incorrect. The correct output is true
   */
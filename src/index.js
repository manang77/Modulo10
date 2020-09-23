//***********************************************************************************
//***********************************************************************************
//********************* D A T O S     DE    P R U E B A  ****************************
//***********************************************************************************
//***********************************************************************************
const obj1 = {
  id: 1,
  name: "Manuel",
  surname: "Espejo",
  location: "Malaga",
};
const obj2 = {
  identificador: 2,
  name: "Manuel",
  surname: "Espejo",
  location: "Malaga",
};

myList = [
  "Atletico de Madrid",
  "Real Madrid",
  "FC Barcelona",
  "Sevilla",
  "Valencia",
  "Betis",
];

const myWordList = [
  "Philippines",
  "Indonesia",
  "Argentina",
  "Poland",
  "China",
  "Alemania",
  "France",
  "Philippines",
  "Armenia",
  "Greece",
  "Ethiopia",
  "Mauritania",
  "China",
  "Colombia",
  "Thailand",
  "Guatemala",
  "China",
  "Georgia",
  "China",
  "afghanistan",
  "Nigeria",
];

const myNumberArray = [12, 25, 56, 23, 56];
const multValue = 4;

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//***********************************************************************************
//***********************************************************************************
//****************** E J E R C I C I O S      L A B O R A T O R I O *****************
//***********************************************************************************
//***********************************************************************************

// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una
// propiedad llamada id (debe devolver booleano true / false ).

const hasId = obj => {
  const { id } = obj;
  return !(id === undefined);
};

console.log("******************** FUNCION: hasID ***************************");
console.log(obj1);
console.log(hasId(obj1));
console.log("---------------------------------------------------------");
console.log(obj2);
console.log(hasId(obj2));

// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

const head = myArray => {
  const [firstElem] = myArray;
  return firstElem;
};

console.log("******************** FUNCION: head ***************************");
console.log(myList);
console.log(head(myList));

// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los
// elementos menos el primero.

const tail = myArray => {
  const [, ...ListWithoutFirsELement] = myArray;
  return ListWithoutFirsELement;
};

console.log("******************** FUNCION: tail ***************************");
console.log(myList);
console.log(tail(myList));

// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el
// primer elemento ha sido colocado en la última posición

const swapFirstToLast = myArray => {
  const [firstElement, ...tailList] = myArray;
  return [...tailList, firstElement];
};

console.log("**************** FUNCION: swapFirstToLast **********************");
console.log(myList);
console.log(swapFirstToLast(myList));

// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto
// la propiedad id si la hubiera.

const excludeId = myObj => {
  const { id, ...restOfObjectProperties } = myObj;
  return restOfObjectProperties;
};

console.log("**************** FUNCION: excludeId **********************");
console.log(obj1);
console.log(excludeId(obj1));
console.log("---------------------------------------------------------");
console.log(obj2);
console.log(excludeId(obj2));

// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array
// filtrado con aquellas palabras que empiecen por a.

const wordsStartingWithA = myArray => myArray.filter(elem => elem.toUpperCase()[0] === "A");

console.log("**************** FUNCION: wordsStartingWithA *******************");
console.log(myWordList);
console.log(wordsStartingWithA(myWordList));

// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la
// concatenación de todos, separados por | .

const concat = (...inputWords) => inputWords.join(" | ");

console.log("**************** FUNCION: concat *******************************");
console.log("Armenia", "Greece");
console.log(concat("Armenia", "Greece"));
console.log("---------------------------------------------------------");
console.log("China", "Colombia", "Thailand", "Guatemala");
console.log(concat("China", "Colombia", "Thailand", "Guatemala"));
console.log("---------------------------------------------------------");

// Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número
// ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

const multArray = (arr, x) => arr.map(elem => elem * x);

console.log("**************** FUNCION: multArray ****************************");
console.log("Array Numeros: " + myNumberArray);
console.log("Valor Multiplicador; " + multValue);
console.log(multArray(myNumberArray, multValue));

// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el
// producto de todos ellos.

const calcMult = (...numbers) => numbers.reduce((product, numbers) => numbers * product, 1);

console.log("**************** FUNCION: calcMult ****************************");
console.log("Numeros: " + "4, 25, 8");
console.log(calcMult(4, 25, 8));
console.log("---------------------------------------------------------");
console.log("Numeros: " + "12, 25, 56, 23, 56");
console.log(calcMult(12, 25, 56, 23, 56));

// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
// intercambiado por el segundo.

const swapFirstSecond = myArray => {
  const [first, second, ...restofElements] = myArray;
  return [second, first, ...restofElements];
};

console.log("**************** FUNCION: swapFirstSecond **********************");
console.log(myList);
console.log(swapFirstSecond(myList));
console.log("---------------------------------------------------------");
console.log(myNumberArray);
console.log(swapFirstSecond(myNumberArray));

// Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
// cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
const longest = (headingChar, ...list) =>
  list.every(element => element.toUpperCase()[0] === headingChar.toUpperCase());

console.log("**************** FUNCION: longest **********************");
console.log("E", "España", "Estonia", "eslovaquia", "Ecuador");
console.log(longest("e", "España", "Estonia", "eslovaquia", "Ecuador"));
console.log("---------------------------------------------------------");
console.log("e", "España", "Estonia", "eslovaquia", "Ecuador");
console.log(longest("E", "España", "Estonia", "eslovaquia", "Ecuador"));
console.log("---------------------------------------------------------");
console.log("E", "España", "Francia", "Estonia", "Eslovaquia", "Ecuador");
console.log(longest("E", "España", "Francia", "Estonia", "Eslovaquia", "Ecuador"));

// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva
// cuantas veces aparece dicho carácter en el string.

const searchInStringV1 = (wordToAnalyze, character) =>
  Array.from(wordToAnalyze).reduce((numberOfOcurrences, wordLetter) => {
    if (wordLetter.toUpperCase() === character.toUpperCase()) {
      numberOfOcurrences++;
    }
    return numberOfOcurrences;
  }, 0);

console.log("**************** FUNCION: searchInStringV1 **********************");
console.log("SuperCalifragilisticoEspialidoso ==> a");
console.log(searchInStringV1("SuperCalifragilisticoEspialidoso", "a"));
console.log("---------------------------------------------------------");
console.log("SuperCalifragilisticoEspialidoso ==> S");
console.log(searchInStringV1("SuperCalifragilisticoEspialidoso", "S"));
console.log("---------------------------------------------------------");
console.log("SuperCalifragilisticoEspialidoso ==> z");
console.log(searchInStringV1("SuperCalifragilisticoEspialidoso", "z"));

// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar

const searchInStringV2 = (wordToAnalyze, character) =>
  Array.from(wordToAnalyze).filter(
    letter => letter.toUpperCase() === character.toUpperCase()
  ).length;

console.log("**************** FUNCION: searchInStringV2 **********************");
console.log("SuperCalifragilisticoEspialidoso ==> a");
console.log(searchInStringV2("SuperCalifragilisticoEspialidoso", "a"));
console.log("---------------------------------------------------------");
console.log("SuperCalifragilisticoEspialidoso ==> S");
console.log(searchInStringV2("SuperCalifragilisticoEspialidoso", "S"));
console.log("---------------------------------------------------------");
console.log("SuperCalifragilisticoEspialidoso ==> z");
console.log(searchInStringV2("SuperCalifragilisticoEspialidoso", "z"));

// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
// alfabéticamente.

const sortCharacters = wordToSort =>
  Array.from(wordToSort)
    .sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1))
    .join("");

console.log("**************** FUNCION: sortCharacters **********************");
console.log("SuperCalifragilisticoEspialidoso");
console.log(sortCharacters("SuperCalifragilisticoEspialidoso"));
console.log("---------------------------------------------------------");
console.log("abcdefghijklmnopqrstvwxyz");
console.log(sortCharacters("abcdefghijklmnopqrstvwxyz"));
console.log("---------------------------------------------------------");
console.log("zyxwvtsrqponmlkjihgfedcba");
console.log(sortCharacters("zyxwvtsrqponmlkjihgfedcba"));

// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

const shout = (...words) => words.map(word => "¡" + word.toUpperCase() + "!").join(" ");

console.log("**************** FUNCION: shout **********************************");
console.log('"Hola", "estamos", "muy", "bien"');
console.log(shout("Hola", "estamos", "muy", "bien"));

//Dada la siguiente lista de la compra:
// A - Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const shoppingCartWithIva = cart =>
  cart.map(product => ({ ...product, iva: product.price * product.units * 0.21 }));

console.log("**************** FUNCION: shoppingCartWithIva *******************************");
console.log(shoppingCartWithIva(shoppingCart));

// B - Ordena la lista de más a menos unidades.
const cartSortedByUnitsDesc = cart => cart.sort((a, b) => (a.units < b.units ? 1 : -1));

console.log("**************** FUNCION: cartSortedByUnitsDesc *****************************");
console.log(cartSortedByUnitsDesc(shoppingCart));

// B - Obtén el subtotal gastado en droguería.
const subTotalbyCategory = (cart, productCategory) =>
  cart.reduce((totalCategory, product) => {
    if (product.category === productCategory) {
      totalCategory += product.price * product.units;
    }
    return totalCategory;
  }, 0);

console.log("**************** FUNCION: subTotalbyCategory *****************************");
console.log("Droguería");
console.log(subTotalbyCategory(shoppingCart, "Droguería"));
console.log("---------------------------------------------------------");
console.log("Frutas y Verduras");
console.log(subTotalbyCategory(shoppingCart, "Frutas y Verduras"));
console.log("---------------------------------------------------------");
console.log("Carne y Pescado");
console.log(subTotalbyCategory(shoppingCart, "Carne y Pescado"));

// C - Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría
const totalByProduct = cart =>
  cart
    .map(item => ({
      category: item.category,
      listLine: item.product + " -> " + item.units * item.price + " €",
    }))
    .sort((a, b) =>
      a.category < b.category
        ? -1
        : a.category > b.category
        ? 1
        : a.listLine < b.listLine
        ? -1
        : 1
    )
    .forEach(line => console.log(line.listLine));
console.log("**************** FUNCION: totalByProduct *****************************");
totalByProduct(shoppingCart);

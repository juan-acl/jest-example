// Vamos a trabajar en una funcion llamada test donde recive dos parametros
//  El primero: Strig, describe lo que va a pasar
//  EL segundo: Funcion anonima, donde va lo que se va a probar


//Probar un string

const text = "Hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];
const num = 10;
const nume = 20;
const bol = true;

test('Test string', () => {
  expect(text).toMatch("Hola Mundo"); //se puede usar / / o ""
});

test('Test array', () => {
  expect(fruits).toContain("melon")// Para probar arreglos no se puede usar / /
})

test("Mayor que", () => {
  expect(nume).toBeGreaterThan(num); // toBeGreaterThan es para hacer conparacion de mayor que  
})

test("Test booleano", () => {
  expect(bol).toBeTruthy(); // toBeTruthy compara si lo que le estamos pasando es verdadero
})

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
};

test("Test callback", () => {
  //Primero ejecutar el callback, luego ejecutar la prueba
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH") //.toBe es como hacer una comparacion  con ===
  })
})

const reverseString2 = str => { 
  return new Promise((resolve, reject) => {
  if(!str) {
      reject(Error('Error'))
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Test promise", () => {
  return reverseString2('Hola')
  .then(string => {
      expect(string).toBe("aloH")
    })
})

test("Test async|await", async () => {
  const string = await reverseString2("Hola")
  expect(string).toBe("aloH")
})

//afterEach(() => console.log("Desdepues de cada pruebas")) // 3
//afterAll(()  => console.log("Despues de todas las pruebas")) // 4

//beforeAll(() => console.log("Antes de todas las pruebas")) // 1
//beforeEach(() => console.log("Antes de cada prueba")) // 2


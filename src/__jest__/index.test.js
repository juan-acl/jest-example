const randomString = require("../index");


//test("Probar la funcion random", () => {
 //expect(typeof(randomString())).toBe("string");
//})

describe("Probar funcionalidades de randomString", () => {// describe sirve para agrupar o describir tests
  test("Probar la funcion random", () => {
    expect(typeof(randomString())).toBe("string");
  })

  test("Comprobar que no existe una ciudad", () => {
    expect(randomString()).not.toMatch(/Guatemala/)
  })
}) 

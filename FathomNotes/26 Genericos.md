# Propósito de la reunión:

* Esta fue una reunión impromptu para discutir el uso de genéricos en TypeScript y cómo pueden ayudarnos a evitar el uso del tipo "any".

Glosario:

* Genéricos (Generics): Característica de TypeScript que permite crear funciones, clases y tipos reutilizables que pueden trabajar con una variedad de tipos de datos.
* Tipo "any": Tipo de dato en TypeScript que le quita cualquier restricción sobre el tipo de dato, lo que puede ser peligroso.

Buenas prácticas, recomendaciones y consejos:

* Evitar el uso del tipo "any" tanto como sea posible, ya que le quita las ventajas de TypeScript.
* Utilizar genéricos para crear funciones, clases y tipos reutilizables que pueden trabajar con diferentes tipos de datos.
* Definir explícitamente el tipo genérico (T) en la función "what'sMyType" para asegurar que el argumento y el valor de retorno sean del mismo tipo.
* Aprovechar la inteligencia de TypeScript al usar métodos y propiedades de los tipos de datos específicos.

# Ejemplo Base

Aquí está el ejemplo base de la función "what'sMyType" utilizando genéricos en TypeScript:

```typescript
export function what'sMyType<T>(argument: T): T {
  return argument;
}

let myString = what'sMyType<string>('hola mundo');
console.log(myString.split(' ')); // Funciona, ya que myString es un string

let myNumber = what'sMyType<number>(100);
console.log(myNumber.toFixed(2)); // Funciona, ya que myNumber es un número

let myArray = what'sMyType<number[]>([1, 2, 3, 4, 5]);
console.log(myArray.join('-')); // Funciona, ya que myArray es un arreglo de números
```

Explicación:

1. La función "what'sMyType" ahora utiliza un tipo genérico `<T>`, lo que significa que el tipo de dato del argumento y el valor de retorno serán el mismo.
2. Al llamar a la función, especificamos el tipo genérico que queremos usar, como `<string>`, `<number>` o `<number[]>`.
3. Esto asegura que el tipo de dato del argumento y el valor de retorno sean correctos, y que podamos utilizar los métodos y propiedades apropiados para cada tipo de dato.

Esto ayuda a evitar el uso del tipo "any" y mantener el código más seguro y con mejor inteligencia de TypeScript.

# Investigacion

Aquí tienes algunos ejemplos más detallados de los puntos importantes mencionados:

1. **Evitar el uso del tipo "any"** :

```typescript
// Usando "any"
function processData(data: any) {
  // Podemos hacer cualquier cosa con "data" sin restricciones
  console.log(data.someProperty); // No hay error, aunque "data" no tenga esa propiedad
  data.nonExistentMethod(); // Tampoco hay error, a pesar de que "data" no tenga ese método
}

// Usando genéricos
function processData<T>(data: T) {
  // Ahora tenemos restricciones basadas en el tipo "T"
  console.log(data.someProperty); // Error, ya que TypeScript no sabe si "T" tiene esa propiedad
  data.nonExistentMethod(); // Error, ya que TypeScript sabe que "T" no tiene ese método
}
```

2. **Definir explícitamente el tipo genérico** :

```typescript
// Definiendo el tipo genérico explícitamente
function what'sMyType<T>(argument: T): T {
  return argument;
}

let myString = what'sMyType<string>('hola mundo');
let myNumber = what'sMyType<number>(100);
let myArray = what'sMyType<number[]>([1, 2, 3, 4, 5]);
```

3. **Aprovechar la inteligencia de TypeScript** :

```typescript
let myString = what'sMyType<string>('hola mundo');
console.log(myString.split(' ')); // Funciona, ya que myString es un string

let myNumber = what'sMyType<number>(100);
console.log(myNumber.toFixed(2)); // Funciona, ya que myNumber es un número

let myArray = what'sMyType<number[]>([1, 2, 3, 4, 5]);
console.log(myArray.join('-')); // Funciona, ya que myArray es un arreglo de números
```

Estos ejemplos muestran cómo el uso de genéricos en TypeScript puede ayudarnos a evitar el uso del tipo "any" y mantener un código más seguro y con mejor inteligencia de TypeScript.

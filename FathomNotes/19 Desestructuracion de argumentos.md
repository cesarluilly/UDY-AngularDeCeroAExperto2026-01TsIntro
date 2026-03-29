# Proposito

* Crear un nuevo archivo llamado "06 function-destructuring.ts" en la carpeta de Topics.
* Explicar y practicar el uso de la desestructuración de objetos y arreglos en TypeScript.

Glosario:

* Product: Interfaz que define la estructura de un producto con propiedades "Description" (string) y "Price" (number).
* Phone, Tablet: Objetos que implementan la interfaz Product.
* shoppingCart: Constante que contiene los objetos Phone y Tablet.
* tax: Constante que representa el impuesto sobre ventas (15%).
* taxCalculation: Función que calcula el total y el impuesto de una lista de productos.
* TaxCalculationOptions: Interfaz que define las opciones para la función taxCalculation, incluyendo el impuesto y un arreglo de productos.

Atajos de teclado:

* Ctrl + Espacio: Muestra la definición de los argumentos de una función.

Buenas prácticas, recomendaciones y consejos:

* Limitar el número de argumentos en una función a un máximo de 3, y en caso de necesitar más, utilizar un objeto como argumento.
* Estudiar JavaScript antes de continuar con TypeScript, ya que se utilizan conceptos de JavaScript como forEach().
* Aplicar la desestructuración de objetos y arreglos para simplificar el código y hacerlo más legible.

# Ejemplo Base

Aquí está el ejemplo base presentado en la reunión:

```typescript
// Definición de la interfaz Product
interface Product {
  Description: string;
  Price: number;
}

// Creación de objetos que implementan la interfaz Product
const Phone: Product = {
  Description: "Nokia A1",
  Price: 150
};

const Tablet: Product = {
  Description: "iPad Air",
  Price: 250
};

// Creación del carrito de compras
const shoppingCart = [Phone, Tablet];

// Constante para el impuesto
const tax = 0.15;

// Función para calcular el total y el impuesto
function taxCalculation(options: {
  tax: number;
  products: Product[];
}): [number, number] {
  let total = 0;
  options.products.forEach(product => {
    total += product.Price;
  });
  return [total, total * options.tax];
}

// Uso de la función taxCalculation
const result = taxCalculation({
  tax,
  products: shoppingCart
});

console.log("Total:", result[0]);
console.log("Tax:", result[1]);
```

Este código define una interfaz `Product`, crea dos objetos que implementan esa interfaz (`Phone` y `Tablet`), y luego los agrega a un carrito de compras (`shoppingCart`). También se define una constante `tax` con el valor del impuesto.

La función `taxCalculation` toma un objeto `options` que contiene el impuesto y la lista de productos, y devuelve un arreglo con el total y el impuesto calculados.

Finalmente, se llama a la función `taxCalculation` con el carrito de compras y el impuesto, y se imprimen los resultados en la consola.

# Investigacion


Aquí tienes algunos ejemplos de los puntos importantes mencionados en la reunión:

1. Desestructuración de argumentos de función:

```typescript
function taxCalculation({ tax, products }: { tax: number; products: Product[] }): [number, number] {
  let total = 0;
  products.forEach(product => {
    total += product.Price;
  });
  return [total, total * tax];
}
```

En este ejemplo, los argumentos `tax` y `products` se desestructuran directamente del objeto `options` pasado a la función.

2. Desestructuración de resultados:

```typescript
const [totalAmount, taxAmount] = taxCalculation({
  tax,
  products: shoppingCart
});

console.log("Total:", totalAmount);
console.log("Tax:", taxAmount);
```

Aquí, el resultado de la función `taxCalculation` se desestructura en las variables `totalAmount` y `taxAmount`.

3. Desestructuración de objetos:

```typescript
const { Description, Price } = Phone;
console.log("Description:", Description);
console.log("Price:", Price);
```

En este caso, las propiedades `Description` y `Price` del objeto `Phone` se desestructuran en variables independientes.

4. Desestructuración de arreglos:

```typescript
const [firstProduct, secondProduct] = shoppingCart;
console.log("First Product:", firstProduct);
console.log("Second Product:", secondProduct);
```

Aquí, los dos primeros elementos del arreglo `shoppingCart` se desestructuran en las variables `firstProduct` y `secondProduct`.

Espero que estos ejemplos te ayuden a entender mejor cómo aplicar la desestructuración en tu código TypeScript. Si tienes alguna otra duda, no dudes en preguntar.

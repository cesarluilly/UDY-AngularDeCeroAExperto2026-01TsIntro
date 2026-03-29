# Importaciones y Exportaciones en Angular

## Propósito de la reunión

* Aprender cómo utilizar las importaciones y exportaciones para encapsular funcionalidad en módulos y compartirla entre archivos.

## Glosario

* **Módulo** : Un archivo que contiene código exportado y puede ser importado por otros archivos.
* **Exportar** : Hacer que una constante, función, interfaz, etc. esté disponible para ser importada por otros archivos.
* **Importar** : Traer una constante, función, interfaz, etc. de otro archivo para usarla en el archivo actual.

## Atajos de teclado

* `Ctrl + Espacio`: Muestra las opciones disponibles para importar/exportar.
* `Ctrl + Clic`: Lleva a la definición de una función o interfaz importada.

## Buenas prácticas y recomendaciones

* Exportar solo lo necesario, evitar exportar todo el contenido del archivo.
* Utilizar importaciones y exportaciones para mantener la encapsulación y modularidad del código.
* Aprovechar el IntelliSense de Visual Studio Code para facilitar las importaciones.
* Tener cuidado con los efectos secundarios al importar archivos, ya que se ejecutará todo su contenido.

## Ejemplo basew

```typescript
// 06-function-destructuring.ts
export interface Product {
  description: string;
  price: number;
}

// 07-import-export.ts
import { Product, TaxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
  { description: 'Nokia', price: 100 },
  { description: 'iPad', price: 150 }
];

const total = TaxCalculation(shoppingCart, 0.15);
console.log('Total:', total);
console.log('Tax:', TaxCalculation.tax);
```

* Encapsulating functionality in modules @ 0:43

# Investigacion


Aquí tienes algunos ejemplos de los puntos importantes mencionados en la reunión:

1. Exportar e importar una interfaz:
   * En el archivo 06-function-destructuring.ts, se define la interfaz `Product`.
   * En el archivo 07-import-export.ts, se exporta la interfaz `Product` usando `export { Product }`.
   * Luego, en el mismo archivo 07-import-export.ts, se importa la interfaz `Product` usando `import { Product } from './06-function-destructuring'`.
2. Exportar e importar una función:
   * En el archivo 06-function-destructuring.ts, se define la función `TaxCalculation`.
   * En el archivo 07-import-export.ts, se exporta la función `TaxCalculation` usando `export { TaxCalculation }`.
   * Luego, en el mismo archivo 07-import-export.ts, se importa la función `TaxCalculation` usando `import { TaxCalculation } from './06-function-destructuring'`.
3. Evitar ejecutar código innecesario al importar:
   * Cuando se importa un archivo, se ejecuta todo el código en ese archivo.
   * Para evitar esto, se recomienda tener solo definiciones de constantes, funciones, clases e interfaces en los archivos que se van a importar, y evitar código ejecutable.
4. Usar IntelliSense y Visual Studio Code para facilitar las importaciones:
   * Cuando se empieza a escribir `import` en el archivo 07-import-export.ts, Visual Studio Code sugiere las opciones disponibles para importar, como `Product` y `TaxCalculation`.
   * Al dejar el cursor sobre `TaxCalculation`, se puede ver la definición de la función, lo cual ayuda a entender mejor cómo utilizarla.

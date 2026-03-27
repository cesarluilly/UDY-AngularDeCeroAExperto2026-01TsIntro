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

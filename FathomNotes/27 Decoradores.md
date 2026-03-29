# Proposito

* Esta reunión parece ser una clase o lección sobre los decoradores en TypeScript, que son una característica importante en el desarrollo con Angular.

Glosario:

* Decoradores: Funciones especiales que se pueden adjuntar a clases, propiedades y métodos para modificar su comportamiento.
* Clase Superclass: Una clase de ejemplo utilizada para ilustrar el uso de decoradores.

Atajos de teclado:

* No se mencionan atajos de teclado específicos en esta reunión.

Buenas prácticas, recomendaciones y consejos:

* En Angular, la mayoría de los decoradores ya están creados por el equipo de Angular, por lo que no es común que los desarrolladores tengan que crear sus propios decoradores.
* Utilizar los decoradores que proporciona Angular es una forma conveniente de mantener la misma sintaxis para definir componentes, servicios, módulos, etc.
* Aunque la construcción de decoradores puede ser compleja, el enfoque principal debe ser en comprender cómo utilizarlos en el desarrollo con Angular, no en crearlos desde cero.

# Ejemplo Base


Aquí está el ejemplo base de decoradores que se muestra en la reunión:

```typescript
function classDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class Superclass {
  public MyProperty: string = 'abc123';

  print() {
    console.log('Hello world');
  }
}

console.log(Superclass);
const myClass = new Superclass();
console.log(myClass);
```

En este ejemplo:

* Se define una función `classDecorator` que es un decorador de clase.
* El decorador `@classDecorator` se aplica a la clase `Superclass`.
* El decorador agrega dos nuevas propiedades (`newProperty` y `hello`) a la clase `Superclass`.
* Cuando se imprime la definición de la clase `Superclass` y se crea una instancia, se pueden ver las nuevas propiedades agregadas por el decorador.

Este ejemplo muestra cómo los decoradores pueden modificar el comportamiento de las clases en TypeScript, lo cual es una característica importante en el desarrollo con Angular.

# Investigacion


 Aquí tienes algunos ejemplos adicionales de los puntos importantes mencionados en la reunión:

1. Decoradores de clase:

```typescript
function classDecorator(constructor: Function) {
  constructor.prototype.newProperty = 'new property';
  constructor.prototype.hello = 'override';
}

@classDecorator
class Superclass {
  public myProperty: string = 'abc123';

  print() {
    console.log('Hello world');
  }
}

const myClass = new Superclass();
console.log(myClass.newProperty); // Output: 'new property'
console.log(myClass.hello); // Output: 'override'
```

2. Decoradores de propiedad:

```typescript
function propertyDecorator(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => {
    console.log(`Getting ${propertyKey}`);
    return value;
  };

  const setter = (newValue: any) => {
    console.log(`Setting ${propertyKey} to ${newValue}`);
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Superclass {
  @propertyDecorator
  public myProperty: string = 'abc123';

  print() {
    console.log('Hello world');
  }
}

const myClass = new Superclass();
myClass.myProperty; // Output: 'Getting myProperty'
myClass.myProperty = 'new value'; // Output: 'Setting myProperty to new value'
```

3. Decoradores de método:

```typescript
function methodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Superclass {
  public myProperty: string = 'abc123';

  @methodDecorator
  print(message: string) {
    console.log(`Hello, ${message}!`);
  }
}

const myClass = new Superclass();
myClass.print('world'); // Output: 'Calling print with args: ["world"]' and 'Hello, world!'
```

Estos ejemplos muestran cómo se pueden crear decoradores de clase, propiedad y método, y cómo se pueden utilizar para modificar el comportamiento de las clases, propiedades y métodos en TypeScript.

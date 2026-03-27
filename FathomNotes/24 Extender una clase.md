# Propósito de la reunión:

* Discutir cómo extender una clase en TypeScript y los conceptos relacionados.

# Glosario:

* Extender una clase: Añadir o expandir la funcionalidad de una clase existente.
* Super: Función especial que llama al constructor de la clase padre.
* Composición: Enfoque de diseño que prefiere componer clases en lugar de extenderlas.

# Buenas prácticas, recomendaciones y consejos:

* Priorizar la composición sobre la extensión de clases, especialmente cuando se tienen múltiples niveles de herencia.
* Asegurarse de que los argumentos del constructor de la clase hija coincidan con los de la clase padre.
* Tener cuidado con la complejidad que puede surgir al extender múltiples niveles de clases.
* Utilizar la extensión de clases de manera moderada y enfocada, ya que puede complicar el mantenimiento del código.

# Ejemplo Base

Aquí está el ejemplo de base que se discutió en la reunión:

```typescript
class Person {
  constructor(public name: string, public address: string) {}
}

let ironman = new Person('Iron Man', 'New York');
```

En este ejemplo, tenemos una clase `Person` que tiene un constructor que recibe `name` y `address` como parámetros.

# Investigacion

1. Extender una clase:

```typescript
class Hero extends Person {
  constructor(name: string, address: string, public alterEgo: string, public age: number, public realName: string) {
    super(name, address);
  }
}

let ironman = new Hero('Iron Man', 'New York', 'Iron Man', 45, 'Tony Stark');
```

En este ejemplo, la clase `Hero` extiende de la clase `Person` y agrega propiedades adicionales como `alterEgo`, `age` y `realName`.

2. Uso de `super()`:

```typescript
class Hero extends Person {
  constructor(name: string, address: string, public alterEgo: string, public age: number, public realName: string) {
    super(realName, address);
  }
}

let ironman = new Hero('Iron Man', 'New York', 'Iron Man', 45, 'Tony Stark');
```

En este caso, el constructor de `Hero` llama a `super()` con `realName` y `address` para inicializar las propiedades de la clase padre `Person`.

3. Composición sobre herencia:

```typescript
class HeroInfo {
  constructor(public alterEgo: string, public age: number, public realName: string) {}
}

class Hero {
  constructor(public name: string, public address: string, public heroInfo: HeroInfo) {}
}

let ironman = new Hero('Iron Man', 'New York', new HeroInfo('Iron Man', 45, 'Tony Stark'));
```

Aquí, en lugar de extender la clase `Person`, la clase `Hero` tiene una propiedad `heroInfo` que es una instancia de la clase `HeroInfo`. Esto ilustra el enfoque de composición.

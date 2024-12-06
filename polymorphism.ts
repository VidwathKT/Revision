class Animal {
    makeSound() {
      console.log("Generic animal sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Meow!");
    }
  }
  
  let animal: Animal = new Dog();
  animal.makeSound(); // Output: Woof!
  
  animal = new Cat();
  animal.makeSound(); // Output: Meow!
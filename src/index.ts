class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lily = new Human("Lily", 22, "female");

const sayHi = (person: Human): string => {
  return `Hello, ${person.name}. You are ${person.age}, ${person.gender}`;
};

console.log(sayHi(lily));

export {};

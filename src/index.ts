interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Lily",
  age: 22,
  gender: "female",
};

const sayHi = (person: Human): string => {
  return `Hello, ${person.name}. You are ${person.age}, ${person.gender}`;
};

console.log(sayHi(person));

export {};

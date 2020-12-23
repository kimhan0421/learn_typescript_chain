const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello, ${name}. You are ${age}, ${gender}`;
};

console.log(sayHi("Lily", 22, "female"));

export {};

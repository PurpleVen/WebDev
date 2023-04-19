class Person {
    public name: string;
    private age: number;
    protected gender: string;
  
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    greet(): void {
      console.log(`Hi, my name is ${this.name}.`);
    }
  
    getAge(): number {
      return this.age;
    }
  }
  
  let person1 = new Person("Vendra", 20, "Female");
  console.log(person1.name); // "Vendra"
  console.log(person1.age); // Error: Property 'age' is private and only accessible within class 'Person'
  console.log(person1.gender); // Error: Property 'gender' is protected and only accessible within class 'Person' and its subclasses
  person1.greet(); // "Hi, my name is Vendra."
  console.log(person1.getAge()); // 20
  
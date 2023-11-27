// const key = "name";

// const a = {
//   Amount: 100,
//   //   [key]: "helloworld",

//   [key]: {
//     [key]: "Ivan",
//     age: "18",
//   },
//   [key]: "test",
// };
// console.log(a.Amount);

// console.log(a[kay]);
// console.log(a.amount);

// // const b = {};
// // console.log(b);

// delete a.amount;
// console.log(a);

// const role = {
//   value: "admin",
//   status: 3,
// };

// const person = {
//   name: "ivan",
//   age: 25,
//   occupation: "Розробник програмного забезпечення",

//   //   ...role,
//   info: role,

//   address: {
//     city: "Kyiv",
//     // street: "Shevchenko street",
//     houseNumber: 10,
//   },

//   getAddress: function () {
//     return this.address;
//   },
// };

// const person2 = { ...person };
// delete person.address;
// console.log("name" in person);
// console.log(person.getAddress());

// const {
//   age,

//   address: { city, street, zipcode = 12345 },
//   ...rest
// } = person;

// console.log(age, city, street, zipcode);
// console.log(rest);

// function getAddress({ address }) {
//   if (address) {
//     const {
//       city,
//       street = "Не вказано",
//       houseNumber,
//       zipcode = 1000,
//     } = address;

//     return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode}`;
//   }
//   //   address: { city, street = "Не вказано", houseNumber, zipcode = 1000 } = {
//   //     city: "Не вказаний",
//   //     street: "Не вказано",
//   //     houseNumber: 10,
//   //     zipcode: 1000,
//   //   },
//   return `Нема Даних`;
// }

// const test = getAddress({ city: "Kyiv" });
// console.log(test);

// for (const key in person) {
//   const item = person[key];

//   if (typeof person[key] === "object") {
//     for (const key2 in item) {
//       console.log(item[key2]);
//     }
//   } else {
//     console.log(item);
//   }
// }

// const a = { test: 1 };
// const b = a;
// console.log(a === b);

Number.prototype.toOwnString = function () {
  console.log(this);

  return `Число ${this}`;
};
const b = 1;

const c = b.toOwnString();

console.log(c);
// console.log(b);

// Test.world = "World";
function Test() {
  this.world = "World";

  return "Hello" + this.world;
}

Test.hello = "Hello";
console.log(Test.hello);

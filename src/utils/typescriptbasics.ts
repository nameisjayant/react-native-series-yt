// variable
const name = 'jayant';

let age = 25;
age = 26;

var name1 = 'john';

function test_2() {
  if (true) {
    var x = 10;
  }
  console.log(x)
}

let names: string[] = ['jayant', 'hjkdd'];

// data types

let value: number = 10;
let address: string = 'Delhi';
let name2: any = 10;

name2 = 'jayant';

// union
let name3: string | number;

name3 = 12;
name3 = 'jayant';

// enums

enum Colors {
  BLUE,
  Orange,
}

let value1: null = null;
let value3: undefined;

// functions

function two(a: number, b: number) {
  console.log(a + b);
}

two(1, 2);
// 3

interface User {
  name: string;
  age: number;
}

type User1 = {
  name: string;
  age: number;
};

function four(user: User) {
  console.log(`${user.name} - ${user.age}`);
}

function getFirstIndexValue<T>(data: T[]) {
  return data[0];
}

getFirstIndexValue(['Jyanat', 'dhhd', 'hdd']);
getFirstIndexValue([12, 122, 12]);

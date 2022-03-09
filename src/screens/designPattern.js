/*

Types of Design Patterns
  Creational
    Factory Method
	  Abstract Factory
	  Builder
	  Prototype
    Singleton
	Structural
  	Adapter
	  Bridge
	  Composite
	  Decorator
	  Facade
	  Flyweight
    Proxy
  Behavioral
    Chain of Responsibility
    Command
    Iterator
    Mediator
    Memento
    Observer
    Visitor
    Strategy
    State
    Template Method


*/

// FACTORY METHOD

const CoordinateSystem = {
  CARTESIAN: 0,
  POLAR: 1,
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static get factory() {
    return new PointFactory();
  }
}

class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

const point = PointFactory.newPolarPoint(5, Math.PI / 2);
const point2 = PointFactory.newCartesianPoint(5, 6);
console.log(point);
console.log(point2);

// ABSTRACT FACTORY

class Drink {
  consumer() {}
}

class Tea extends Drink {
  consumer() {
    console.log("This is Tea");
  }
}

class Coffee extends Drink {
  consumer() {
    console.log("This is Coffee");
  }
}

class DrinkFactory {
  prepare(amount) {}
}

class TeaFactory extends DrinkFactory {
  makeTea() {
    console.log("Tea Created");
    return new Tea();
  }
}

class CoffeeFactory extends DrinkFactory {
  makeCoffee() {
    console.log("Coffee Created");
    return new Coffee();
  }
}

const teaDrinkFactory = new TeaFactory();
const tea = teaDrinkFactory.makeTea();
tea.consumer();

// BUILDER

class Person {
  constructor() {
    this.streetAddress = this.postcode = this.city = "";
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return this;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.lives
  .at("544/12 Lac Long Quan")
  .in("Viet Nam")
  .withPostcode(700000)
  .works.at("Home")
  .asA("Developer")
  .earning(1000)
  .build();

console.log(person.toString());

// PROTOTYPE

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  setName(name) {
    this.name = name;
  }

  setModel(model) {
    this.model = model;
  }

  clone() {
    return new Car(this.name, this.model);
  }
}

const car = new Car();
car.setName("Audi");
car.setModel("A7");

const car2 = car.clone();
console.log(car2);

// SINGLETON

class Singleton {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  say() {
    console.log("Saying...");
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log("Are they same? " + (s1 === s2));

// STATE

class State {
  constructor() {
    if (this.constructor === State) {
      throw new Error("Abstract");
    }
  }

  on(sw) {}

  off(sw) {}
}

class OnState extends State {
  constructor() {
    super();
    console.log("Light turn on...");
  }

  off(sw) {
    sw.state = new OffState();
  }
}

class OffState extends State {
  constructor() {
    super();
    console.log("Light turn off...");
  }

  on(sw) {
    sw.state = new OnState();
  }
}

class Switch {
  constructor() {
    this.state = new OffState();
  }

  on() {
    this.state.on(this);
  }

  off() {
    this.state.off(this);
  }
}

const sw = new Switch();
sw.on();
sw.off();

// ADAPTER

class Calculator1 {
  constructor() {
    this.operations = function (value1, value2, operation) {
      switch (operation) {
        case "add":
          return value1 + value2;

        case "sub":
          return value1 - value2;
      }
    };
  }
}

class Calculator2 {
  constructor() {
    this.add = function (value1, value2) {
      return value1 + value2;
    };

    this.sub = function (value1, value2) {
      return value1 - value2;
    };
  }
}

class CalculatorAdapter {
  constructor() {
    this.calculator = new Calculator2();
  }

  operations(value1, value2, operation) {
    switch (operation) {
      case "add":
        return this.calculator.add(value1, value2);
      case "sub":
        return this.calculator.sub(value1, value2);
    }
  }
}

const calculatorAdapter = new CalculatorAdapter();

console.log(calculatorAdapter.operations(5, 6, "add"));

// BRIDGE

class VectorRenderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius ${radius} `);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixels for circle of radius ${radius} `);
  }
}

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);

circle.draw();
circle.resize(2);
circle.draw();

// COMPOSITE

class Employer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  print() {
    console.log(`My name is ${this.name}. I'm ${this.role}`);
  }
}

class EmployerGroup {
  constructor(name, composite = []) {
    this.name = name;
    this.composites = composite;
  }

  print() {
    this.composites.forEach((el) => {
      el.print();
    });
  }
}

const hoang = new Employer("Hoàng", "developer");
const dung = new Employer("Dũng", "developer");

let groupDeveloper = new EmployerGroup("Developers", [hoang, dung]);

groupDeveloper.print();

// DECORATOR

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    this.radius *= factor;
  }

  toString() {
    return `A circle ${this.radius}`;
  }
}

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} + has the color ${this.color}`;
  }
}

const circle = new Circle(2);
console.log(circle);

const redCircle = new ColoredShape(circle, "red");
console.log(redCircle.toString());

// FACADE

class CPU {
  freeze() {
    console.log("Freezed...");
  }
  jump(position) {
    console.log("Go...");
  }
  execute() {
    console.log("Run...");
  }
}

class Memory {
  load(position, data) {
    console.log("Load...");
  }
}

class HardDrive {
  read(lba, size) {
    console.log("Read...");
  }
}

class CompouterFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    this.ram.load();
    this.hd.read();
    this.processor.jump();
    this.processor.execute();
  }
}

const computer = new CompouterFacade();
computer.start();

// FLYWEIGHT

class User {
  constructor(fullName) {
    this.fullName = fullName;
  }
}

class User2 {
  constructor(fullName) {
    let getOrAdd = function (s) {
      let idx = User2.strings.indexOf(s);
      if (idx !== -1) {
        return idx;
      } else {
        User2.strings.push(s);
        return User2.strings.length - 1;
      }
    };

    this.names = fullName.split(" ").map(getOrAdd);
  }
}

User2.strings = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomString = function () {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(String.fromCharCode(65 + getRandomInt(26)));
  }

  return result.join("");
};

let users = [];
let users2 = [];
let firstNames = [];
let lastNames = [];
for (let i = 0; i < 100; i++) {
  firstNames.push(randomString());
  lastNames.push(randomString());
}

for (let first of firstNames) {
  for (let last of lastNames) {
    users.push(new User(`${first} ${last}`));
    users2.push(new User2(`${first} ${last}`));
  }
}

console.log(`10k users take up approx ${JSON.stringify(users).length} chars`);

let users2length = [users2, User2.strings]
  .map((x) => JSON.stringify(x).length)
  .reduce((x, y) => x + y);

console.log(`10k flyweight users take ~${users2length} chars`);

// PROXY

class Percentage {
  constructor(percent) {
    this.percent = percent;
  }

  toString() {
    return `${this.percent}%`;
  }

  valueOf() {
    return this.percent / 100;
  }
}

let sixtyNinePercent = new Percentage(69);
console.log(sixtyNinePercent.toString());
console.log(sixtyNinePercent.valueOf());

// COMMAND

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} Total balance ${this.balance}`);
  }

  withDraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
    }
  }

  toString() {
    return `Balance ${this.balance}`;
  }
}

BankAccount.overdraftLimit = -500;

let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount);
        break;
      case Action.withdraw:
        this.account.withDraw(this.amount);
        break;
    }
  }

  undo() {
    switch (this.action) {
      case Action.deposit:
        this.account.withDraw(this.amount);
        break;
      case Action.withdraw:
        this.account.deposit(this.amount);
        break;
    }
  }
}

let bankAccount = new BankAccount(100);
let cmd = new BankAccountCommand(bankAccount, Action.deposit, 50);

cmd.call();
console.log(bankAccount.toString());

cmd.undo();
console.log(bankAccount.toString());

// TEMPLATE METHOD

class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.currentPlayer = 0;
  }

  run() {
    this.start();
    while (!this.haveWinner) {
      this.takeTurn();
    }

    console.log(`Player ${this.winningPlayer} wins.`);
  }

  start() {}
  get haveWinner() {}
  takeTurn() {}
  get winningPlayer() {}
}

class Chess extends Game {
  constructor() {
    super(2);
    this.maxTurns = 10;
    this.turn = 1;
  }

  start() {
    console.log(`Starting a game of chess with ${this.numberOfPlayers} players.`);
  }

  get haveWinner() {
    return this.turn === this.maxTurns;
  }
  takeTurn() {
    console.log(`Turn ${this.turn++} taken by player ${this.currentPlayer}`);
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
  }
  get winningPlayer() {
    return this.currentPlayer;
  }
}

let chess = new Chess();
chess.run();

// CHAIN OF RESPONSIBILITY

class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack} / ${this.defense})`;
  }
}

class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null;
  }

  add(modifier) {
    if (this.next) {
      this.next.add(modifier);
    } else {
      this.next = modifier;
    }
  }

  handle() {
    if (this.next) {
      this.next.handle();
    }
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log("No bonuses for you!");
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log(`Doubling ${this.creature.name}'s attack`);
    this.creature.attack *= 2;
    super.handle();
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increasing ${this.creature.name}'s defense`);
      this.creature.defense++;
    }
    super.handle();
  }
}

let peekachu = new Creature("Peekachu", 1, 1);

console.log(peekachu.toString());

let root = new CreatureModifier(peekachu);
root.add(new DoubleAttackModifier(peekachu));
root.add(new IncreaseDefenseModifier(peekachu));
root.handle();

console.log(peekachu.toString());

// ITERATOR

class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
  }

  [Symbol.iterator]() {
    let i = 0;
    let self = this;

    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? "a" : "b"],
        };
      },
    };
  }

  get backwards() {
    let i = 0;
    let self = this;

    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? "b" : "a"],
        };
      },
      [Symbol.iterator]: function () {
        return this;
      },
    };
  }
}

let values = [100, 200, 300];

for (let i in values) {
  console.log(`Element at pos ${i} is ${values[i]}`);
}

for (let v of values) {
  console.log(`Values is ${v}`);
}

let stuff = new Stuff();

for (let item of stuff) {
  console.log(`${item}`);
}

for (let item of stuff.backwards) {
  console.log(`${item}`);
}

// MEDIATOR

class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }

  receive(sender, message) {
    let s = `${sender}: '${message}'`;
    console.log(`[${this.name}'s chat session] ${s}`);
    this.chatLog.push(s);
  }

  say(message) {
    this.room.broadcast(this.name, message);
  }

  pm(who, message) {
    this.room.message(this.name, who, message);
  }
}

class ChatRoom {
  constructor() {
    this.people = [];
  }

  broadcast(source, message) {
    for (let p of this.people) {
      if (p.name !== source) {
        p.receive(source, message);
      }
    }
  }

  join(p) {
    let joinMsg = `${p.name} joins the chat`;
    this.broadcast("Room", joinMsg);
    p.room = this;
    this.people.push(p);
  }

  message(source, destination, message) {
    for (let p of this.people) {
      if (p.name === destination) {
        p.receive(source, message);
      }
    }
  }
}

let room = new ChatRoom();

let John = new Person("John");
let Tony = new Person("Tony");

room.join(John);
room.join(Tony);
John.say("Hello");

let Doe = new Person("Doe");
room.join(Doe);
Doe.say("Hello everyone");

// MOMENTO

class Momento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    let momento = new Momento(this.balance);

    this.balance += amount;
    return momento;
  }

  restore(m) {
    this.balance = m.balance;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

let bankAccount = new BankAccount(100);
let m1 = bankAccount.deposit(50);
console.log(m1);

console.log(bankAccount.toString());

bankAccount.restore(m1);
console.log(bankAccount.toString());

// OBSERVER

class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach((cb, key) => {
      cb(sender, args);
    });
  }
}

class FallsIllArgs {
  constructor(address) {
    this.address = address;
  }
}

class Person {
  constructor(address) {
    this.address = address;
    this.fallsIll = new Event();
  }

  catchCold() {
    this.fallsIll.fire(this, new FallsIllArgs(this.address));
  }
}

let person = new Person("ABC road");
let sub = person.fallsIll.subscribe((_, args) => {
  console.log(`A doctor has been called to ${args.address}`);
});

person.catchCold();
person.catchCold();

person.fallsIll.unsubscribe(sub);
person.catchCold();

// VISIT

class NumberExpression {
  constructor(value) {
    this.value = value;
  }

  print(buffer) {
    buffer.push(this.value.toString());
  }
}

class AdditionExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  print(buffer) {
    buffer.push("(");
    this.left.print(buffer);
    buffer.push("+");
    this.right.print(buffer);
    buffer.push(")");
  }
}

let e = new AdditionExpression(
  new NumberExpression(5),
  new AdditionExpression(new NumberExpression(1), new NumberExpression(9))
);

let buffer = [];
e.print(buffer);
console.log(buffer.join(""));

// STRATEGY

const OutputFormat = Object.freeze({
  markdown: 0,
  html: 1,
});

class ListStrategy {
  start(buffer) {}
  end(buffer) {}

  addListItem(buffer, item) {}
}

class MarkdownListStrategy extends ListStrategy {
  addListItem(buffer, item) {
    buffer.push(` * ${item}`);
  }
}

class HtmlListStragety extends ListStrategy {
  start(buffer) {
    buffer.push("<ul>");
  }

  end(buffer) {
    buffer.push("</ul>");
  }

  addListItem(buffer, item) {
    buffer.push(`<li>${item}</li>`);
  }
}

class TextProcessor {
  constructor(outputFormat) {
    this.buffer = [];
    this.setOutputFormat(outputFormat);
  }

  setOutputFormat(format) {
    switch (format) {
      case OutputFormat.markdown:
        this.listStrategy = new MarkdownListStrategy();
        break;
      case OutputFormat.html:
        this.listStrategy = new HtmlListStragety();
        break;
    }
  }

  appendList(items) {
    this.listStrategy.start(this.buffer);
    for (let item of items) {
      this.listStrategy.addListItem(this.buffer, item);
    }

    this.listStrategy.end(this.buffer);
  }

  clear() {
    this.buffer = [];
  }

  toString() {
    return this.buffer.join("\n");
  }
}

const tp = new TextProcessor();

tp.setOutputFormat(OutputFormat.markdown);
tp.appendList(["one", "two", "three"]);
console.log(tp.toString());

tp.clear();
tp.setOutputFormat(OutputFormat.html);
tp.appendList(["one", "two", "three"]);
console.log(tp.toString());

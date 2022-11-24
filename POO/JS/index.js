var car = new Car("ZZZ999", new Account("Tomas Rojas", "TOM169"));
car.passengers = 4;
car.printDataCar();

var uberX = new UberX(
  "AWS567",
  new Account("Maria", "MTD345"),
  "Toyota",
  "Prado TXL"
);
uberX.passengers = 4;
uberX.printDataCar();

var user = new User(
  "Tomas Rojas",
  "KSD341",
  "tomas@gmail.com",
  "tom****ytrert"
);
user.printDataAccount();

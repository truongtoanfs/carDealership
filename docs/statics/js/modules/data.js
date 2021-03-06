const cars = [
  {
    id: 1,
    name: "BMW X7 M50D",
    version: "",
    image: "./statics/img/dealer-car-1.jpg",
    state: "new",
    priceOld: "",
    price: "40 000",
    road: "",
    gas: "",
    class: "automatic",
  },
  {
    id: 2,
    name: "BMW M440I",
    version: "",
    image: "./statics/img/dealer-car-2.jpg",
    state: "new",
    priceOld: "",
    price: "30 000",
    road: "20",
    gas: "18/100",
    class: "automatic",
  },
  {
    id: 3,
    name: "BMW M5",
    version: "",
    image: "./statics/img/dealer-car-3.jpg",
    state: "new",
    priceOld: "",
    price: "35 000",
    road: "20",
    gas: "18/100",
    class: "automatic",
  },
  {
    id: 4,
    name: "BENTLEY FLYING SPUR",
    version: "special",
    image: "./statics/img/dealer-car-4.jpg",
    state: "new",
    priceOld: "",
    price: "30 000",
    road: "20",
    gas: "18/100",
    class: "automatic",
  },
  {
    id: 5,
    name: "BENTLEY CONTINENTAL",
    version: "",
    image: "./statics/img/dealer-car-5.jpg",
    state: "new",
    priceOld: "",
    price: "28 000",
    road: "20",
    gas: "18/100",
    class: "manual",
  },
  {
    id: 6,
    name: "BENTLEY BENTAYAGA",
    version: "",
    image: "./statics/img/dealer-car-6.jpg",
    state: "new",
    priceOld: "",
    price: "30 000",
    road: "20",
    gas: "18/100",
    class: "manual",
  },
  {
    id: 7,
    name: "ACURA NSX 2021",
    version: "",
    image: "./statics/img/dealer-car-7.jpg",
    state: "new",
    priceOld: "",
    price: "27 000",
    road: "20",
    gas: "18/100",
    class: "Semi-automatic",
  },
  {
    id: 8,
    name: "ACURA MDX 2022",
    version: "",
    image: "./statics/img/dealer-car-8.jpg",
    state: "new",
    priceOld: "",
    price: "26 000",
    road: "20",
    gas: "",
    class: "Semi-automatic",
  },
  {
    id: 9,
    name: "BMW 328I, SPORT LINE BODY KIT",
    version: "special",
    image: "./statics/img/used-car-1.jpg",
    state: "old",
    priceOld: "35 000",
    price: "26 000",
    road: "18000",
    gas: "45/56",
    class: "automatic",
  },
  {
    id: 10,
    name: "TOYOTA TACOMA 4WD, XSE, LEATHER",
    version: "",
    image: "./statics/img/used-car-2.jpg",
    state: "old",
    priceOld: "32 000",
    price: "28 000",
    road: "155000",
    gas: "45/56",
    class: "manual",
  },
  {
    id: 11,
    name: "TOYOTA RAV4 SE, LIKE NEW2",
    version: "",
    image: "./statics/img/used-car-3.jpg",
    state: "old",
    priceOld: "125 000",
    price: "request",
    road: "1250",
    gas: "",
    class: "automatic",
  },
  {
    id: 12,
    name: "TOYOTA AVALON LTX, LEATHER, SUNROOF",
    version: "",
    image: "./statics/img/used-car-4.jpg",
    state: "old",
    priceOld: "65 000",
    price: "58 000",
    road: "1180",
    gas: "45/65",
    class: "Semi-automatic",
  },
  {
    id: 13,
    name: "TESLA MODEL X, PERFECT CONDITION",
    version: "",
    image: "./statics/img/used-car-5.jpg",
    state: "old",
    priceOld: "",
    price: "70 000",
    road: "48000",
    gas: "45/65",
    class: "automatic",
  },
  {
    id: 14,
    name: "MAZDA CX-5 SX, V6, ABS, SUNROOF",
    version: "",
    image: "./statics/img/used-car-6.jpg",
    state: "old",
    priceOld: "",
    price: "20 000",
    road: "19000",
    gas: "45/65",
    class: "automatic",
  },
  {
    id: 15,
    name: "KIA SORENTO 4WD, GOOD CONDITION",
    version: "",
    image: "./statics/img/used-car-7.jpg",
    state: "old",
    priceOld: "",
    price: "25 000",
    road: "18000",
    gas: "45/65",
    class: "automatic",
  },
  {
    id: 16,
    name: "KIA RIO, GOOD CONDITION, NAVI",
    version: "",
    image: "./statics/img/used-car-8.jpg",
    state: "old",
    priceOld: "",
    price: "15 000",
    road: "5000",
    gas: "45/65",
    class: "manual",
  },
];

const newCars = cars.filter(car => car.state === "new");
const oldCars = cars.filter(car => car.state === "old");

export {cars};

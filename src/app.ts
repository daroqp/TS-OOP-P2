import { HouseAppliance } from "./domain/entities/HouseAppliance";

const electro2 = new HouseAppliance(3220, 70);
console.log(electro2);


const electro = new HouseAppliance(4500, 9, 'A', 'black');
console.log(electro);
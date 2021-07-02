
export  function priceByWeight(weight: number):number {
    let price:number = 0;

    if(weight > 0 && weight <= 19) price = 10;
    if(weight >= 20 && weight <= 49) price = 50;
    if(weight >=50 && weight <= 79) price = 80;
    if(weight > 80) price = 100;

    return price;
}
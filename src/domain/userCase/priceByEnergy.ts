import { energyConsuptions } from "../entities/data/EnergyConsuption"

export function priceByEnergy(typeEnergy: string):number {
    
    let price = 0;

    switch(typeEnergy){
        case 'a': 
            price = 100;
            break;
        case 'b':
            price = 80;
            break;
        case 'c':
            price = 60;
            break;
        case 'd':
            price = 50;
            break;
        case 'e': 
            price = 30;
            break;
        case 'f':
            price = 10;
    }
    
    return price;
}
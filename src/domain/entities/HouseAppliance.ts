import { colors, colorType } from "./data/Colors";
import { energyConsuptions, energyType } from "./data/EnergyConsuption";
import { validEnergy } from "../userCase/validEnergy";
import { validColor } from "../userCase/validColor";

export class HouseAppliance {
    
    private basePrice: number;
    private color: string;
    private energyConsuption: string;
    private weight: number;

    constructor(price?: number, weight?: number, energyConsuption?: string, color?: string){ 
        this.basePrice = price || 100; 
        this.weight= weight || 5;
        this.color = validColor(color);
        this.energyConsuption = validEnergy(energyConsuption);
    }
    
    get getBasePrice():number {
        return this.basePrice ? this.basePrice : 100;
    }

    get getColor():string {
        return this.color ? this.color : 'white';
    }

    get getEnergyConsuption():string {
        return this.energyConsuption ? this.energyConsuption : energyConsuptions[energyType.F];
    }
    
    get getWeight():number {
        return this.weight ? this.weight : 5;
    }
    
}
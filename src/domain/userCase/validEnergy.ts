import { energyConsuptions, energyType } from "../entities/data/EnergyConsuption";
import { checkEnergyConsuption } from "./checkEnergyConsuption";

export function validEnergy(letter :string | undefined):string {
    if(letter){
        if(checkEnergyConsuption(letter)){
            return letter;
        } else {
            return energyConsuptions[energyType.F];
        }
    } else {
        return energyConsuptions[energyType.F];
    }
}
import { energyConsuptions } from "../entities/data/EnergyConsuption";

export function checkEnergyConsuption(letter: string):boolean {
    const isValid = energyConsuptions.some(el => el === letter);
    return isValid
}    
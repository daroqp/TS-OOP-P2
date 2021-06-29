import { colors } from "../entities/data/Colors";

export function checkColor(color: string):boolean {
    const isValid = colors.some(el => el === color);
    return isValid;
}
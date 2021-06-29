import { colors, colorType } from "../entities/data/Colors";
import { checkColor } from "./checkColor";

export function validColor(color: string | undefined):string {
    if(color){
        if(checkColor(color)){
            return color;
        }
    }
    return colors[colorType.white];
}
import { transformToNumber } from "../TransformToNumber";
import { ValidateStringNotEmpty, validateNumber } from "./validate";

export const Numbers = (numbers) => {
    let numb = [];
    for(const n of numbers) {
        ValidateStringNotEmpty(n);
        const number = transformToNumber(n);
        validateNumber(number);
        numb.push(number);
    }
    return numb;
}
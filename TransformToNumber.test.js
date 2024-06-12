import {it, expect} from 'vitest'
import { transformToNumber } from './TransformToNumber';


it('it need to be number', ()=> {
    // arrange
    let value = '5';
    // action
    let result = transformToNumber(value);
    // assertion
    expect(result).toBeTypeOf('number');
    expect(result).not.toBeTypeOf('string');
    expect(isNaN(result)).not.toBe(true); // !not NaN
})

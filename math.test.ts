import {it, expect} from 'vitest'
import {Add} from './math'

it('it need to be return the correct sum', ()=> {
    let numbers = [1,2,3];
    let expectedResult = numbers.reduce((acc,cur)=> acc+cur);
    let result = Add(numbers);
    expect(result).toBe(expectedResult);
})
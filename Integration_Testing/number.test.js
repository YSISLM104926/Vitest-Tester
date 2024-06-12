import {it, expect} from 'vitest'
import { Numbers } from './number';



it('it need to be number', ()=> {
    // arrange
    let value = ['1','2']
    // action
    let result = Numbers(value);
    // assertion
    expect(result[0]).toBeTypeOf('number');
})


it('it need to be number', ()=> {
    // arrange
    let value = ['','2']
    // action
    let result = Numbers(value);
    // assertion
    expect(result[0]).toThrow();
})

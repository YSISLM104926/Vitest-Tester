import {it, expect} from 'vitest'
import {Add} from './math'

it('it need to be return the correct sum', ()=> {
    let result = Add([1,2,3]);
    expect(result).toBe(6);
})
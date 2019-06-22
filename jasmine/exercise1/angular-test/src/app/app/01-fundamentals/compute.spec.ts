import { compute } from './compute';

//suite
describe('compute suite', () => {             
    //test1
    it('should return 0 if number is negative', () => {
        const result1 = compute(-1);
        expect(result1).toBe(0);
    })  //test1
    //test2
    it('should return number+1 if number is postive', () => {
        const result2 = compute(4);
        expect(result2).toBe(5);
    })  //test2
    // test3
    it('should return number+1 if number is zero', () => {  
        const result3 = compute(0);
        expect(result3).toBe(1);
    })  // test3
    // test4
    it('should return number+1 even if number is a decimal', () => {
       const result4 = compute(1.1435);
        expect(result4).toBe(2.1435);
    })  // test4
})  // suite
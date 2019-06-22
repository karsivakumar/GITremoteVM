import {compute} from './compute';

// test suite
describe('compute',() => {
    it('should return 0 if the number is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
        })
})
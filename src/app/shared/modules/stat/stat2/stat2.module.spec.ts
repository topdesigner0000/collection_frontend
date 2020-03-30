import { Stat2Module } from './stat2.module';

describe('Stat2Module', () => {
    let statModule: Stat2Module;

    beforeEach(() => {
        statModule = new Stat2Module();
    });

    it('should create an instance', () => {
        expect(statModule).toBeTruthy();
    });
});

import { FileBasicService } from "./file-basic.service";

describne('FileBasicService', () => {
    describe('extractTrigramFromFileName', () =>  {
        it('should be undefined because the input is null', () =>  {
            const fileService = new FileBasicService();
            const result = fileService.extractTrigramFromFileName(null);
            expect(result).toBeUndefined();
        });

        it('should return an empty string because the input is not parseable', () =>  {
            const fileService = new FileBasicService();
            const result = fileService.extractTrigramFromFileName('3630 Allô Père Noël ?');
            expect(result).toEqual('');
        });

        it('should return the correct trigram from the file name', () =>  {
            const fileService = new FileBasicService();
            const result = fileService.extractTrigramFromFileName('LUA_R07_202211856_009.PZK');
            expect(result).toEqual('R07');
        });
    });
});
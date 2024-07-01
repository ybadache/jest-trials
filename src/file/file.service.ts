export class FileService    {
    extractTrigramFromFileName(filename: string)    {
        if (filename === null || filename === undefined || filename.length === 0) {
            return undefined;
        }

        const parsedFilePath = filename.split('_');
        return parsedFilePath[1] ? parsedFilePath[1] : '';
    }
}
import { SaveFile } from './../domain/use-cases/save-file.use-case';
import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {

    static run({ base, limit, showTable, fileName, fileDestination }: RunOptions) {
        console.log('Server running...!')

        const table = new CreateTable()
            .execute({ base, limit });

        const isFileCreated = new SaveFile()
            .execute({ fileContent: table, fileName: fileName, fileDestination: fileDestination });

        if (showTable) {
            console.log(table);
        }

        (isFileCreated)
            ? console.log('File created')
            : console.error('File not created');
    }
}
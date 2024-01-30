import { InvalidRow } from "./invalid-row.interface";

export interface ImportDataResult<T> {
    validRowList: T[];
    invalidRowList: InvalidRow[];
}
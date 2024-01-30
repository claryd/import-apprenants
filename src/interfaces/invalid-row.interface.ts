import { InvalidRowCause } from "./invalid-row-cause.interface";

export interface InvalidRow {
    index: number;
    causeList: InvalidRowCause[];
}
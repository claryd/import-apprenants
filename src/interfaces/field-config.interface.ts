import { FieldType } from "../enums/field-type.enum";

export interface FieldConfig {
    type: FieldType;
    isRequired: boolean;
}
import { FieldType } from "../enums/field-type.enum";
import { FieldConfig } from "../interfaces/field-config.interface";

export interface ApprenantProps {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    campusName: string;
    programName: string;
}

export type ApprenantEntityKey = keyof ApprenantProps;

export const APPRENANT_KEYS : { [K in ApprenantEntityKey]: K } = {
    campusName: 'campusName',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    programName: 'programName',
};

export const APPRENANT_FIELD_CONFIG: Map<ApprenantEntityKey, FieldConfig> = new Map([
    [APPRENANT_KEYS.campusName, {
        type: FieldType.STRING,
        isRequired: true
    }],
    [APPRENANT_KEYS.email, {
        type: FieldType.EMAIL,
        isRequired: true
    }],
    [APPRENANT_KEYS.firstName, {
        type: FieldType.STRING,
        isRequired: true
    }],
    [APPRENANT_KEYS.lastName, {
        type: FieldType.STRING,
        isRequired: true
    }],
    [APPRENANT_KEYS.phone, {
        type: FieldType.PHONE,
        isRequired: true
    }],
    [APPRENANT_KEYS.programName, {
        type: FieldType.STRING,
        isRequired: true
    }],
]);
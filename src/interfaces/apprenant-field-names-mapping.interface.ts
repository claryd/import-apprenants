import { ApprenantEntity } from "../domain/apprenant.entity";
import { FieldNamesMapping } from "./field-names-mapping.interface";

export interface ApprenantFieldNamesMapping extends FieldNamesMapping<ApprenantEntity> {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    programName: string;
    campusName: string;
}

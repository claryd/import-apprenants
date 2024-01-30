import { FieldType } from "../enums/field-type.enum";
import { InvalidFieldConfigImportError } from "../errors/import-error";
import { FieldConfig } from "../interfaces/field-config.interface";
import { InvalidRowCause } from "../interfaces/invalid-row-cause.interface";
import { isEmail } from "../utils/is-email.utils";
import { isEmpty } from "../utils/is-empty.utils";
import { isPhone } from "../utils/is-phone.utils";
import { isString } from "../utils/is-string.utils";

export class ImportDataHelper {

    public static checkField(
        fieldLabel: string,
        fieldConfig: FieldConfig,
        fieldValue: unknown
    ): InvalidRowCause[] {
        const causeList: InvalidRowCause[] = [];

        if (this.isFieldEmpty(fieldConfig, fieldValue)) {
            causeList.push({
                field: fieldLabel,
                cause: 'empty value'
            });
        }


        if (!this.isFieldValid(fieldConfig, fieldValue)) {
            causeList.push({
                field: fieldLabel,
                cause: 'invalid type'
            });
        }

        return causeList;
    }

    private static isFieldEmpty(fieldConfig: FieldConfig, fieldValue: unknown): boolean {
        return fieldConfig.isRequired && isEmpty(fieldValue);         
    }
    
    private static isFieldValid(
        fieldConfig: FieldConfig,
        fieldValue: unknown
    ): boolean {
        switch (fieldConfig.type) {
            case FieldType.STRING:
                return isString(fieldValue);
            case FieldType.EMAIL:
                return isEmail(fieldValue);
            case FieldType.PHONE:
                return isPhone(fieldValue);
            default:
                throw new InvalidFieldConfigImportError(`Unknown field type: ${ fieldConfig.type }`, 'internal');
        }

    }
}
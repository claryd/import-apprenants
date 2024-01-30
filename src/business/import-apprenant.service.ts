import { ApprenantEntity } from "../domain/apprenant.entity";
import { FieldConfig } from "../interfaces/field-config.interface";
import { InvalidRow } from "../interfaces/invalid-row.interface";
import { APPRENANT_FIELD_CONFIG, APPRENANT_KEYS, ApprenantEntityKey, ApprenantProps } from "../domain/apprenant.types";
import { ImportDataResult } from "../interfaces/import-data-result.interface";
import { InvalidRowCause } from "../interfaces/invalid-row-cause.interface";
import { ImportDataHelper } from "./import-data.helper";
import { ImportDataService } from "../interfaces/import-data-service.interface";
import { ApprenantFieldNamesMapping } from "../interfaces/apprenant-field-names-mapping.interface";
import { EmptyImportApprenantError, InvalidDataImportApprenantError, InvalidFieldMappingImportApprenantError, MissingFieldConfigImportApprenantError } from "../errors/import-apprenant.error";

export class ImportApprenantService implements ImportDataService<ApprenantEntity>{

    private fieldConfigList: Map<ApprenantEntityKey, FieldConfig> = APPRENANT_FIELD_CONFIG;

    public importData(
        data: unknown[],
        fieldNamesMappingConfig: ApprenantFieldNamesMapping
    ): ImportDataResult<ApprenantEntity> {

        if (data.length === 0) {
            throw new EmptyImportApprenantError('No data to import')
        }
        
        this.checkMappingOrThrow(fieldNamesMappingConfig);

        const {
            validRowList,
            invalidRowList
        } = this.processData(data, fieldNamesMappingConfig);

        return {
            validRowList,
            invalidRowList
        }
    }

    private checkMappingOrThrow(
        fieldNamesMappingConfig: ApprenantFieldNamesMapping
    ): void {
        const mappingKeyList = Object.keys(APPRENANT_KEYS) as Array<keyof ApprenantProps>;

        mappingKeyList.forEach((entityKey) => {
            const fieldNameMapping = fieldNamesMappingConfig[entityKey];

            if (!fieldNameMapping) {
                throw new InvalidFieldMappingImportApprenantError(`Missing fieldname mapping for field ${entityKey}`, 'request');
            }
        });
    }

    private processData(data: unknown[], mapping: ApprenantFieldNamesMapping): ImportDataResult<ApprenantEntity> {
        const invalidRowList: InvalidRow[] = [];
        const validRowList: ApprenantEntity[] = [];

        for (const [index, apprenant] of data.entries()) {
            
            const rowIndex = index + 1;
            const { entity, invalidRowCauseList } = this.processRow(apprenant, rowIndex, mapping);

            if(invalidRowCauseList.length) {
                invalidRowList.push({
                    index: rowIndex,
                    causeList: invalidRowCauseList
                });

            } else {
                validRowList.push(entity);
            }
        }

        return {
            invalidRowList,
            validRowList
        };
    }
    
    private processRow(row: unknown, rowIndex: number, mapping: ApprenantFieldNamesMapping): {
        entity: ApprenantEntity;
        invalidRowCauseList: InvalidRowCause[];
    } {
        const invalidRowCauseList: InvalidRowCause[] = [];
        const apprenantEntity = ApprenantEntity.createEmpty();

        if (typeof row !== 'object' || row === null) {
            throw new InvalidDataImportApprenantError(`Invalid row ${rowIndex} : row is not an object`, 'request');
        }

        const mappingKeyList = Object.keys(mapping) as Array<keyof ApprenantEntity>;

        mappingKeyList.forEach((entityKey) => {
            const fieldConfig = this.fieldConfigList.get(entityKey);

            if (!fieldConfig) {
                throw new MissingFieldConfigImportApprenantError(`Missing config for field ${entityKey}`, 'internal');
            }

            const fieldName = mapping[entityKey] as keyof typeof row;
            const fieldValue = row[fieldName];
            const invalidFieldCauseList = ImportDataHelper.checkField(fieldName, fieldConfig, fieldValue);
            
            if (invalidFieldCauseList.length) {
                invalidRowCauseList.push(...invalidFieldCauseList);
            } else {
                apprenantEntity[entityKey] = fieldValue;
            }
        });

        return {
            invalidRowCauseList,
            entity: apprenantEntity
        }
    }
}
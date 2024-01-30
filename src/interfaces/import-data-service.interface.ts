import { BaseEntity } from "../domain/entity";
import { FieldNamesMapping } from "./field-names-mapping.interface";
import { ImportDataResult } from "./import-data-result.interface";

export interface ImportDataService<Entity extends BaseEntity> {
    importData(
        data: unknown[],
        mapConfig: FieldNamesMapping<Entity>
    ): ImportDataResult<Entity>;
}
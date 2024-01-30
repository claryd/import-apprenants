import { ImportError } from "./import-error";

export abstract class ImportApprenantError extends ImportError {}

export class EmptyImportApprenantError extends ImportApprenantError {
    public override readonly name = 'EmptyImportApprenantError';
}

export class MissingFieldConfigImportApprenantError extends ImportApprenantError {
    public override readonly name = 'InvalidFieldConfigImportApprenantError';
}

export class InvalidDataImportApprenantError extends ImportApprenantError {
    public override readonly name = 'InvalidDataImportApprenantError';
}

export class InvalidFieldMappingImportApprenantError extends ImportApprenantError {
    public override readonly name: string = 'InvalidFieldMappingImportApprenantError';
}
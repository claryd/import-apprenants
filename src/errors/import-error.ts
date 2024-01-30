import { BaseError } from "./base-error";

export abstract class ImportError extends BaseError {}

export class InvalidFieldConfigImportError extends ImportError {
    public override readonly name = "InvalidFieldConfigImportError";
}
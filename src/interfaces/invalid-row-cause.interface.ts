export interface InvalidRowCause {
    field: string;
    cause: 'empty value' | 'invalid type';
}
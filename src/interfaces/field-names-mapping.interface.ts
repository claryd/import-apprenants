export type FieldNamesMapping<T> = {
    [K in keyof T]: string;
}
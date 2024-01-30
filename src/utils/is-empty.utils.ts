export const isEmpty = (value: unknown): value is undefined | null | string => {
    return value === undefined || value === null || value === '';
}
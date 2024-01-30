import { isString } from "./is-string.utils";

export const isPhone = (value: unknown): value is string => isString(value) && /^(\+33|0)[1-9](\d{2}){4}$/.test(value);
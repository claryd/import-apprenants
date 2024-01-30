import { isString } from "./is-string.utils";

export const isEmail = (value: unknown): value is string => {
    return isString(value) && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}
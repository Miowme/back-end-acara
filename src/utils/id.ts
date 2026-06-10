import { customAlphabet } from "nanoid";

export const getId = (): string => {
    const nanoid = customAlphabet("ABCDEFGHIJKLMNOQRSTUVWXYZ0123456789", );
    return nanoid(5);
}
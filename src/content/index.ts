import { no } from "./no";
import { en } from "./en";
import { Translation } from "./types";

export const translations: Record<"no" | "en", Translation> = { no, en };

export * from "./types";

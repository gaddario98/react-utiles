export { withMemo } from "./withMemo";
export * from "./helpers";
export interface AppLinks {
    privacy: string;
    cookie: string;
    eula: string;
    mail: string;
    telephone: string;
    website: string;
}
export declare let appLinks: AppLinks;
export declare const setAppLinks: (links: Partial<AppLinks>) => void;
export declare const trimObject: <T extends object>(obj: T) => T;

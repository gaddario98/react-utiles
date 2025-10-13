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
export let appLinks: AppLinks = {
  privacy: "",
  cookie: "",
  eula: "",
  mail: "gaddario98@gmail.com",
  telephone: "+393280098770",
  website: "www.giosueaddario.it",
};

export const setAppLinks = (links: Partial<AppLinks>) => {
  appLinks = { ...appLinks, ...links };
};

export const trimObject = <T extends object>(obj: T): T =>
  Object.entries(obj)?.reduce(
    (prev, [key, val]) => ({
      ...prev,
      [key]:
        typeof val === "string" && !["password", "pPassword"].includes(key)
          ? val?.trim()
          : val,
    }),
    {} as T
  );

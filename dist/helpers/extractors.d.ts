type ExtractorCache<T> = Map<string, T>;
declare function createExtractor<T extends Record<string, unknown>, K extends keyof T = keyof T>(allData: T, cache: ExtractorCache<Partial<T>>, usedKeys?: K[]): T;
export { type ExtractorCache, createExtractor };

import { memo } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Wrapper per React.memo che preserva i tipi generici
 */
function withMemo(Component, propsAreEqual) {
  return memo(Component, propsAreEqual);
}

// Utility per combinare classi Tailwind in modo sicuro
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const EMPTY_OBJECT = {};
function createExtractor(allData, cache, usedKeys) {
  if (!allData) return EMPTY_OBJECT;
  const keys = usedKeys !== null && usedKeys !== void 0 ? usedKeys : Object.keys(allData);
  const key = JSON.stringify(keys);
  const previous = cache.get(key);
  const extracted = Object.fromEntries(Object.entries(allData).filter(([k]) => keys.includes(k)));
  if (!previous || JSON.stringify(previous) !== JSON.stringify(extracted)) {
    cache.set(key, extracted);
  }
  return cache.get(key) || extracted;
}

let appLinks = {
  privacy: "",
  cookie: "",
  eula: "",
  mail: "gaddario98@gmail.com",
  telephone: "+393280098770",
  website: "www.giosueaddario.it"
};
const setAppLinks = links => {
  appLinks = Object.assign(Object.assign({}, appLinks), links);
};
const trimObject = obj => {
  var _a;
  return (_a = Object.entries(obj)) === null || _a === void 0 ? void 0 : _a.reduce((prev, [key, val]) => Object.assign(Object.assign({}, prev), {
    [key]: typeof val === "string" && !["password", "pPassword"].includes(key) ? val === null || val === void 0 ? void 0 : val.trim() : val
  }), {});
};

export { appLinks, cn, createExtractor, setAppLinks, trimObject, withMemo };
//# sourceMappingURL=index.mjs.map

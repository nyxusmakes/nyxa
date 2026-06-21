export const nativeFetch: typeof fetch = (...args) => globalThis.fetch(...args);

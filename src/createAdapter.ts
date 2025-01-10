import { createAdapterLoki } from "./createAdapterLoki.js";
import { createAdapterSQLite } from "./createAdapterSQLite.js";
import { isExpoGo } from "./isExpoGo.js";

// Loki wont persist data on Expo Native (it does on web)
// SQLite will crash on Expo Go
// If we are in Expo Go, switch to Loki to avoid crash
// If we are not in Expo Go, switch to SQLite to use persistance
// So we compromise, although Expo Go cant have persistance, we dont need it in production
// But Expo Go is faster for dev, and in dev we dont need persistance

export const createAdapter = isExpoGo()
  ? createAdapterLoki
  : createAdapterSQLite;

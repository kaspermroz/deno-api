import { ensureDir } from 'std/fs/mod.ts';

// initialise store if non-existent
export const initStore = (path: string) => {
    ensureDir(path);
};
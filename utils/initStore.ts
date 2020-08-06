import { ensureDir } from 'std/fs/mod.ts';

// initialise store if non-existent
export const initStore = () => {
    const { STORE_PATH } = Deno.env.toObject();
    ensureDir(STORE_PATH);
};
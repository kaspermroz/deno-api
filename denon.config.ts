import { DenonConfig } from "https://deno.land/x/denon@2.3.1/mod.ts";

const config: DenonConfig = {
  $schema: "https://deno.land/x/denon/schema.json",
  env: {
    STORE_PATH: '_store',
  },
  scripts: {
    start: {
      cmd: "deno run src/app.ts",
      desc: "run my src/app.ts file",
      unstable: true,
      importmap: 'import_map.json',
      allow: {
        env: true,
        net: '0.0.0.0:3001',
        read: '_store',
        write: '_store',
      },
      lock: 'lock.json'
    },
  },
  watcher: {
    exts: ['ts'],
  }
};

export default config;
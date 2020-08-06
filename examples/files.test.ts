import { Merlin } from "https://deno.land/x/merlin/mod.ts";
import { readFiles } from './files.ts';

const test = new Merlin();

test.testEqual("read file content", {
    expect: async () => {
        Deno.createSync("./test.txt");
        await Deno.writeTextFile("./test.txt", "test");
        const res = await readFiles(['test.txt']);
        await Deno.remove("./test.txt");
        return res[0];
    },
    toBe: () => 'test',
    Ops: false,
    Resources: false,
})



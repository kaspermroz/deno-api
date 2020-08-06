export const readFiles = async (fileNames: string[]): Promise<string[]> => {
    const res: string[] = [];

    for (const f of fileNames) {
        const decoder = new TextDecoder('utf-8');
        const Package = await Deno.readFileSync(f);
        const decoded = decoder.decode(Package);
        console.log(decoded);
        res.push(decoded);
    }

    return res;
}

await readFiles(Deno.args);



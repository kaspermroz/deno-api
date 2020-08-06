import { App, Request, Response } from 'attain';
import { Store } from 'store';
import { Counter } from 'models';
import { initStore, logger } from 'utils';

await initStore();

const app = new App();

app.use(logger);

app.get('/', async (_req: Request, res: Response) => {
    const counter = await Store.open<Counter>({
        filePath: '_store/counter.json',
        default: {
            value: 0,
        }
    });

    await counter.write((c: Counter) => c.value++);

    await counter.read((c: Counter) => {
        res.status(200).send(`${c.value} reuqest${c.value > 1 ? 's' : ''} so far!`);
    })
})

app.listen({ port: 3001 });


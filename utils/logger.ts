import { yellow } from 'std/fmt/colors.ts';
import { Request, Response } from 'attain';


export const logger = (req: Request, res: Response) => {
    console.log(yellow(`Request method: ${req.method}`));
}
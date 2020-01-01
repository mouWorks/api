import { EasyconfigService } from "nestjs-easyconfig";
import {Injectable, NestMiddleware} from "@nestjs/common";

@Injectable()
export class SimpleBlocker implements NestMiddleware{
    constructor (private conf: EasyconfigService) {}

    use(req: Request, res: Response, next: () => void) {

        const magic_word = this.conf.get('MAGIC_WORD');

        if(req.body['magic_word'] == undefined){
            console.log('You Did not say the magic word!');
            // throw new UnauthorizedException();
        }else if(req.body['magic_word'] != magic_word){
            console.log('Wrong Magic word!');
            // throw new UnauthorizedException();
        }else{
            console.log('Varified');
            next();
        }

        // console.log(req);
        // console.log('我是簡單的Middleware: block unauthorized request');
        // next();
    }
}

import { EasyconfigService } from "nestjs-easyconfig";
import {Injectable, NestMiddleware, UnauthorizedException} from "@nestjs/common";

@Injectable()
export class SimpleBlocker implements NestMiddleware{
    constructor (private conf: EasyconfigService) {}

    use(req: Request, res: Response, next: () => void) {
        const magic_word = this.conf.get('MAGIC_WORD');
        if(req.body['magic_word'] == undefined){
            // console.log('You Did not say the magic word!');
            throw new UnauthorizedException('No magic word!');
        }else if(req.body['magic_word'] != magic_word){
            // console.log('Wrong Magic word!');
            throw new UnauthorizedException('Wrong Magic Word!');
        }else{
            console.log('Verified POST Request');
            next();
        }
    }
}

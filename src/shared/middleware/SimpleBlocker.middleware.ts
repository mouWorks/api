import { EasyconfigService } from "nestjs-easyconfig";
import {Injectable, NestMiddleware, UnauthorizedException} from "@nestjs/common";

//SimpleBlocker Middleware
//Block - you need to provide the magic word

@Injectable()
export class SimpleBlocker implements NestMiddleware{
    constructor (private conf: EasyconfigService) {}

    use(req: Request, res: Response, next: () => void) {
        const magic_word = this.conf.get('MAGIC_WORD');
        if(req.body['magic_word'] == undefined){
            throw new UnauthorizedException('No magic word!');
        }else if(req.body['magic_word'] != magic_word){
            throw new UnauthorizedException('Wrong Magic Word!');
        }else{
            console.log('Verified POST Request');
            next();
        }
    }
}

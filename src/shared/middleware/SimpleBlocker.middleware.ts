import { Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import { ConfigService } from "nestjs-dotenv";
import * as dotenv from 'dotenv';

// SimpleBlocker Middleware
// Block - you need to provide the magic word

@Injectable()
export class SimpleBlocker implements NestMiddleware{
    constructor (private config: ConfigService) {}

    use(req: Request, res: Response, next: () => void) {

        const env = this.config.get('NODE_ENV');
        if ((env !== undefined) && env === 'PROD'){
            const magic_word = this.config.get('MAGIC_WORD');
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
}

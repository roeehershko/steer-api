import * as passport from 'passport';
import {
    Module,
    NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    components: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes(
                { path: '/api/v1/campaigns*', method: RequestMethod.ALL },
                { path: '/api/v1/users', method: RequestMethod.GET },
                { path: '/api/v1/users/*', method: RequestMethod.ALL },
            );
    }
}
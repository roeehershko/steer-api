import {Get, Controller, Post, Param, Body, Request} from '@nestjs/common';
import {Client, ClientProxy, MessagePattern, Transport} from "@nestjs/microservices";
import {PendingSessionService} from "../services/pending-sessions.service";

@Controller()
export class SessionController {

    @Client({ transport: Transport.REDIS, url: 'redis://gateway:6379' })
    client: ClientProxy;

    constructor(private readonly pendingSessionService: PendingSessionService) {}

    @MessagePattern("sessions")
    async sessions(data) {
        if (data.length)
            console.log('Received #' + data.length);

        this.pendingSessionService.bulk(data)
    }
}

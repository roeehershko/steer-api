import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {SessionsSchema} from "./schemas/sessions.schema";
import {SessionService} from "./services/sessions.service";
import {SessionController} from "./controller/session.controller";
import {PendingSessionService} from "./services/pending-sessions.service";
import {PendingSessionsSchema} from "./schemas/pending-sessions.schema";
import {AgendaService} from "../../common/services/agenda.service";
import {ProcessPendingJob} from "./jobs/process-pending.job";
import {CampaignsModule} from "../campaigns/campaigns.module";
import {PendingSessionsEvents} from "./events/pending-sessions.events";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Session', schema: SessionsSchema },
            { name: 'PendingSession', schema: PendingSessionsSchema }
        ]),
        CampaignsModule
    ],
    controllers: [SessionController],
    components: [
        SessionService,
        PendingSessionService,
        AgendaService,
        ProcessPendingJob,
        PendingSessionsEvents
    ],
    exports: [ MongooseModule ]

})
export class SessionsModule {

    public constructor(agendaService: AgendaService, processPendingJob: ProcessPendingJob, pendingSessionEvents: PendingSessionsEvents) {
        agendaService.define('process pending sessions', '3 seconds', processPendingJob);
        pendingSessionEvents.run();
    }
}

import { Component } from '@nestjs/common';
import * as Agenda from 'agenda';
import * as mongoose from 'mongoose';

@Component()
export class AgendaService {

    agenda: Agenda;

    public constructor() {
        const self = this;

        this.agenda = new Agenda();
        this.agenda.mongo(mongoose.connection.collection('jobs').conn.db, 'jobs');

        // Updating locked jobs
        mongoose.connection.collection('jobs').updateMany({ lockedAt: { $ne: null } }, { $set: { lockedAt: null } });

        setTimeout(function () {
            self.agenda.start();
            console.log('Agenda Started!');
        }, 2000)
    }

    public getAgenda() {
        return this.agenda;
    }

    public define(name, every, object) {
        this.agenda.define(name, function (job, done) {
            console.log('Executing!!');
            object.run(done);
        });

        this.agenda.every(every, name);
    }
}
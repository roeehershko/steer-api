import {SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from "@nestjs/websockets";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/take";

@WebSocketGateway()
export class CampaignsGateway {

    @WebSocketServer() server;

    @SubscribeMessage('campaigns')
    onEvent(client, data): Observable<WsResponse<Array<Object>>> {
        const event = 'campaigns';
        let res = [
            { data: 1 },
            { data: 2 },
            { data: 3 }
        ];
        return new Observable(function (observer) {
            observer.next({ event, data: res });

            setTimeout(function () {
                observer.next({ event, data: res });
            }, 1000)

        })
    }
}


import io, {Socket as SocketIO} from "socket.io-client";

export class Socket {
    private readonly server: SocketIO = io("http://localhost:3030", {
        withCredentials: true
    });

    constructor(){
        this.setter();
        this.run();
    }

    setter(){

    }

    run(){
        console.log({d: this.server.connected})
    }
}
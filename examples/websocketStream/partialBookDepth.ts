import { WebsocketStream } from '../../src/index';

const callbacks = {
    open: () => console.debug('Connected with Websocket server'),
    close: () => console.debug('Disconnected with Websocket server'),
    message: (data: string) => console.info(data)
};

const websocketStreamClient = new WebsocketStream({ callbacks });

websocketStreamClient.partialBookDepth('bnbusdt', '5', '100ms');

setTimeout(() => websocketStreamClient.disconnect(), 6000);
import Surface from 'famous/core/Surface.js';

import { View } from 'arva-js/core/View.js';

export class ChatMessage extends View {

    constructor(chat){

        super();

        this.renderables.container = new Surface({

            properties: {

                backgroundColor: 'white',

                borderRadius: '5px'

            }

        });

        this.renderables.sender = new Surface({

            content: chat.sender,

            properties: {

                fontWeight: 'bold'

            }

        });

        this.renderables.message = new Surface({

            content: chat.message,

            properties: {

                color: '#524e4e'

            }

        });

        this.layouts.push((context) => {

            context.set('container', {

                size: [undefined, undefined]

            });

            context.set('sender', {

                size: [undefined, 25],

                origin: [0, 1],

                align: [0.01, 0.5]

            });

            context.set('message', {

                size: [undefined, 25],

                origin: [0, 0],

                align: [0.015, 0.5]

            });

        });

    }

    getSize(){

        return [undefined, 70];

    }

}

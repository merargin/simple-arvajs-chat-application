import { DataBoundScrollView } from 'arva-js/components/DataBoundScrollView';

import { SingleLineTextInput } from 'arva-js/components/inputs/SingleLineTextInput.js';

import { View } from 'arva-js/core/View.js';

import { Messages } from '../models/Messages.js';

import { ChatMessage } from './ChatMessage.js';

export class HomeView extends View {

    constructor(options = {}){

        super(options);

        this.renderables.container = new DataBoundScrollView({

            layoutOptions: {

                margins: [20, 15, 20, 15],

                spacing: 5

            },

            itemTemplate: (message) => new ChatMessage(message),

            dataFilter: () => true,

            dataStore: new Messages()

        });

        this.renderables.chatInputArea = new SingleLineTextInput({

            placeholder: 'Enter your message here'

        });

        this.inputElement = this.renderables.chatInputArea;

        this.layouts.push((context) => {

            context.set('container', {

                size: [undefined, undefined]

            });

            context.set('chatInputArea', {

                size: [undefined, 70],

                origin: [1, 1],

                align: [1, 1]

            });
        });

    }

}

import { Controller } from 'arva-js/core/Controller.js';

import { HomeView } from '../views/HomeView.js';

import { Messages } from '../models/Messages.js';

export class HomeController extends Controller {

    Index(){

        this.messages = new Messages();

        if(!this.homeView) {

            this.homeView = new HomeView();

            this.homeView.inputElement.on('message', (message) => {

                this.messages.add({

                        sender: 'Xavier Cleetus',

                        message: message

                });

            });

        }

        return this.homeView;

    }

}

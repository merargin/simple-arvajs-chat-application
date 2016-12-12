import 'babel-polyfill';

import './famous.css';

import './fonts.css';

import 'arva-js/utils/hotfixes/IESupport.js';

import firebase from 'firebase';

import config from './config.js';

import { FirebaseDataSource } from 'arva-js/data/datasources/FirebaseDataSource.js';

import { provide } from 'arva-js/utils/di/Decorators.js';

import { DataSource } from 'arva-js/data/DataSource.js';

import { HomeController } from './controllers/HomeController.js';

import { App as ArvaApp } from 'arva-js/core/App.js';

export class App extends ArvaApp {

    static references = {};

    static controllers = [ HomeController ];

    static defaultDataSource() {

        firebase.initializeApp({

            apiKey: config.apiKey,

            authDomain: config.authDomain,

            databaseURL: config.databaseURL,

            storageBucket: config.storageBucket

        });

        return new FirebaseDataSource('/', {});

    }

    static initialize(){

        provide(DataSource)(App.defaultDataSource);

        this.start();
    }

    static loaded(){}

    static done(){}

}

document.addEventListener('deviceready', App.initialize.bind(App));
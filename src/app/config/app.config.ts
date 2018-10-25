import {InjectionToken} from '@angular/core';
 
import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken("app.config");

export const AppConfig: IAppConfig = {
    baseUrl: "http://192.168.8.116:8888/hmntrdc_sites_server/api"
}
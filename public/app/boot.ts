import 'rxjs/Rx'
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {ComponentRef} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {AppComponent} from './app.component'
import {appInjector} from './common/config/app.injector'
import {UserStoreService} from './common/services/userStore.service'
import {ApiService} from './common/services/api.service'
import {DataService} from './common/services/data.service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    UserStoreService,
    ApiService,
    DataService
]).then((appRef: ComponentRef) => {
    // store a reference to the injector
    appInjector(appRef.injector);
});
    import "core-js";
    import "reflect-metadata";
    import "zone.js/dist/zone";
    import 'bootstrap/dist/js/bootstrap';

    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { AppModule } from './app/app.module';
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
    


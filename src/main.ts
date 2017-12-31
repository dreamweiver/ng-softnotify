import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

declare var process:any;

if (process.env.ENV === 'production') {
  enableProdMode();
}

// Bootstrapping the "AppModule" to index.html
// The bootstrapping process sets up the execution environment, 
// digs the root "AppComponent" out of the module's bootstrap array,
// creates an instance of the component and inserts it within the element tag
// identified by the component's selector.
platformBrowserDynamic().bootstrapModule(AppModule); 
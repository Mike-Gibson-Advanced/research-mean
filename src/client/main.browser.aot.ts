/*
 * Angular bootstraping
 */
import { platformBrowser } from '@angular/platform-browser';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory);
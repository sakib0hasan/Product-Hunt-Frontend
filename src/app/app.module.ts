import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
	{
		path: '',
		loadChildren: './pages/homepage/homepage.module#HomepageModule'
	}
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

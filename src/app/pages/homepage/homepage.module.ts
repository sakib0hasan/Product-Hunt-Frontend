import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageDefaultComponent} from './components/homepage-default/homepage-default.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
	{
		path: '',
		component: HomepageDefaultComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [
		HomepageDefaultComponent,
		HeroComponent
	]
})
export class HomepageModule {
}

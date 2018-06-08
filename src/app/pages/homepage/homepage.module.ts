import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageDefaultComponent} from './components/homepage-default/homepage-default.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: HomepageDefaultComponent
	}
];
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [HomepageDefaultComponent]
})
export class HomepageModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {UpcomingProductsComponent} from './components/upcoming-products/upcoming-products.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		HeaderComponent,
		UpcomingProductsComponent,
		SidebarComponent
	],
	exports: [
		HeaderComponent,
		UpcomingProductsComponent,
		SidebarComponent
	]
})
export class SharedModule {
}

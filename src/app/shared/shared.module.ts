import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {UpcomingProductsComponent} from './components/upcoming-products/upcoming-products.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		HeaderComponent,
		UpcomingProductsComponent,
		SidebarComponent,
		FeedComponent
	],
	exports: [
		HeaderComponent,
		UpcomingProductsComponent,
		SidebarComponent,
		FeedComponent
	]
})
export class SharedModule {
}

import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	
	links = [
		{
			value: "Ask",
			link: "/ask"
		},
		{
			value: "Ship",
			link: "/ship"
		},
		{
			value: "Jobs",
			link: "/jobs"
		}
	];
	
	constructor() {
	}
	
	ngOnInit() {
	}
	
}

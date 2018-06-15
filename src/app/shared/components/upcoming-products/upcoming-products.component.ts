import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-upcoming-products',
	templateUrl: './upcoming-products.component.html',
	styleUrls: ['./upcoming-products.component.scss']
})
export class UpcomingProductsComponent implements OnInit {

	Products = [
		{
			Name: "Negotiabl",
			Image: "https://ph-files.imgix.net/fe4f5289-526d-4a48-9007-8aeda806446a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
			Description: "Hustle for every cart on WooCommerce & Shopify",
			Subscribers: []
		},
		{
			Name: "Bellycheck",
			Image: "https://ph-files.imgix.net/2098f5ff-a0fc-4497-b78b-f32dbfb4595c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&blend=13f2dc29-aff1-4e8d-a554-8aa8b15d0c9d&bm=normal&bf=max&bh=40&bw=40&bg=000000&bri=-40&dpr=2 2x, https://ph-files.imgix.net/2098f5ff-a0fc-4497-b78b-f32dbfb4595c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&blend=13f2dc29-aff1-4e8d-a554-8aa8b15d0c9d&bm=normal&bf=max&bh=40&bw=40&bg=000000&bri=-40&dpr=3 3x",
			Description: "Eat healthier when you eat out 🍔 🍟 🙌",
			Subscribers: []
		},
		{
			Name: "Pinian",
			Image: "https://ph-files.imgix.net/92727917-a1e7-425b-9773-737c2d494e39?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&blend=579aac39-5ae4-4f59-811c-a856d7faf1c8&bm=normal&bf=max&bh=40&bw=40&bg=000000&bri=-40",
			Description: "The new opinion pages.",
			Subscribers: []
		}
	];

	constructor() {
	}

	ngOnInit() {
	}

}

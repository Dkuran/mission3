import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../shared/resource.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: [ './post-list.component.scss' ]
})
export class PostListComponent implements OnInit {
	private url = 'http://jsonplaceholder.typicode.com/posts';
	public dataPosts: any[];
	constructor(private _resourceService: ResourceService) {}

	ngOnInit() {
		this._resourceService.getResource(this.url).subscribe((response) => {
			this.dataPosts = response;
		});
	}
}

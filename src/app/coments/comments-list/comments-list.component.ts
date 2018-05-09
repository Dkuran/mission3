import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../shared/resource.service';

@Component({
	selector: 'app-comments-list',
	templateUrl: './comments-list.component.html',
	styleUrls: [ './comments-list.component.scss' ]
})
export class CommentsListComponent implements OnInit {
	private url = 'http://jsonplaceholder.typicode.com/comments';
	public dataComents: any[];

	constructor(private _resourceService: ResourceService) {}

	ngOnInit() {
		this._resourceService.getResource(this.url).subscribe((response) => {
			this.dataComents = response;
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {

  constructor( public route: ActivatedRoute ) { }

  username: string;

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("name");
  }

}



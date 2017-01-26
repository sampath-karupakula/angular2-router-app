import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  activeService: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.activeService = params['active'];
    })
  }

  ngOnInit() {
  }

}

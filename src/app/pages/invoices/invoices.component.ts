import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private serviceAPI: ServicesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}

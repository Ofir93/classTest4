import { Component, OnInit } from '@angular/core';
import { AccountOperationsService } from 'src/service/account-operations.service';

@Component({
  selector: 'app-show-operations',
  templateUrl: './show-operations.component.html',
  styleUrls: ['./show-operations.component.css']
})
export class ShowOperationsComponent implements OnInit {
  operations: any

  constructor(
    public AccountOperationsService: AccountOperationsService
  ) {}
  ngOnInit(): void {
 this.AccountOperationsService.currentOperations.subscribe(val => {
  this.operations = val
 })
 }

}

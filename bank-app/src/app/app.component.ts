import { Component } from '@angular/core';
import { AccountOperationsService } from 'src/service/account-operations.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accountNumber: number | undefined
  showOn: boolean = false
  newOn: boolean = false

  title = 'Bank Account Operations Maneger';
  constructor(
    public AccountOperationsService: AccountOperationsService
  ) {}

  submitAccounNumber(): void {
    if(!this.accountNumber){
      return alert('Please enter account number');
    }
   this.AccountOperationsService.getOperations(this.accountNumber)
     this.showOn = true
     this.newOn = false
  }
  addNewOperation(): void {
    if(!this.accountNumber){
      return alert('Please enter account number');
    }
    this.AccountOperationsService.accountNumber = this.accountNumber
     this.showOn = false
     this.newOn = true
  }
}

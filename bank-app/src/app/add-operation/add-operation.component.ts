import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountOperationsService } from 'src/service/account-operations.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css'],
})
export class AddOperationComponent implements OnInit {
  accountNumber?: number;
  type?: string;
  amount?: number;
  payments?: number;
  intress?: number;

  @Output()
  submitAccounNumber: EventEmitter<any> = new EventEmitter();


  constructor(public AccountOperationsService: AccountOperationsService) {}

  ngOnInit(): void {
    this.AccountOperationsService.currentOperations.subscribe((operations) => {
      this.accountNumber = operations.accountNumber;

    });
  }

  submitForm(): void {
    if(this.type === 'Loan'){
      if(!this.payments || !this.intress){
      return alert("Please fill all of the required fields1")
      }
    }
    if(!this.type || !this.amount){
      return alert("Please fill all of the required fields2")
    }
    const data: any = {
      accountNumber: this.accountNumber,
      type: this.type,
      amount: this.amount,
      payments: this.payments,
      intress: this.intress,
    };
    this.AccountOperationsService.addOperations(data)
    this.submitAccounNumber.emit()
  }
}

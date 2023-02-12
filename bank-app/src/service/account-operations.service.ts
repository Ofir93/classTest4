import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Ioperation} from 'src/interfaces/Operation'

@Injectable({
  providedIn: 'root',
})
export class AccountOperationsService {
  operations = new BehaviorSubject<any>([]);
  currentOperations = this.operations.asObservable();
  accountNumber?: number


  constructor(private http: HttpClient) {}

  changeOperations(value: any) {
    this.operations.next(value);
  }

  getOperations(accountNumber: number | undefined) {
    this.http.get<Ioperation[]>(`http://localhost:8000/accountOperation/${accountNumber}`).subscribe((data) => {
      this.changeOperations(data);
    });
  }

  addOperations(data: Ioperation | any) {
    data.accountNumber = this.accountNumber
    this.http.post<Ioperation>(`http://localhost:8000/accountOperation/`, data).subscribe((data) => {
      alert('Added successfuly')
    });
  }
}

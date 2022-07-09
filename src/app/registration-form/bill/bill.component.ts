import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserDetail } from 'src/app/model/user-detail';
import { Bill } from 'src/app/model/bill';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

    @Input()
    user?: UserDetail

    bills?: Bill[] = [];
     bl?:Bill;
    totalAmount: number = 0;
    form = this.fb.group({
        payments: this.fb.array([])
    })

    get payments() {
        return this.form.controls["payments"] as FormArray;
    }

    addPayments() {
        const paymentForm = this.fb.group({
            itemName: ['', Validators.required],
            price: ['', Validators.required]
        });
        this.payments.push(paymentForm);
        //changes
        this.bills = this.payments.value;

        for(let price of this.payments.value){
            this.totalAmount=this.totalAmount+price;
        }
        

    }

    addPrice(index : number) {
        const paymentForm = this.form.get('payments') as FormArray;
        const controls = paymentForm.controls
        for(let i = 0; i<index; i++) {
            
        }
    }

    deletePayment(paymentIndex: number) {
        this.payments.removeAt(paymentIndex);
    }

    constructor(
        private fb: FormBuilder
    ) { }
    ngOnInit(): void {
        // console.log("Log here"+this.bills?.length)
    }

    // total(){
    //     this.bills = this.payments.value;
    //     for (let price of this.bills?) {
    //         this.total=this.total+bills?.price?;
    //     }
    // }


}
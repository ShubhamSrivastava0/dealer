import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dealer, DealerService } from '../service/dealer.service';

@Component({
  selector: 'app-dealer-form',
  templateUrl: './dealer-form.component.html',
  styleUrls: ['./dealer-form.component.css']
})
export class DealerFormComponent {
  dealerForm!: FormGroup;
  dealerId!: number;

  constructor(
    private fb: FormBuilder,
    private dealerService: DealerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dealerId = +this.route.snapshot.paramMap.get('id')!;
    this.createForm();
    if (this.dealerId) {
      this.loadDealer();
    }
  }

  createForm(): void {
    this.dealerForm = this.fb.group({
      name: ['', Validators.required],
      mobile_no: ['', Validators.required],
      email:[''],
      company_name:[''],
      pan_no:['', Validators.required],
      whatsapp_no: []
    });
  }

  loadDealer(): void {
    this.dealerService.getDealer(this.dealerId).subscribe(
      (dealer) => this.dealerForm.patchValue(dealer),
      (error) => console.error('Error loading dealer', error)
    );
  }

  onSubmit(): void {
    if (this.dealerForm.invalid) {
      return;
    }

    const dealer: Dealer = this.dealerForm.value;
    if (this.dealerId) {
      this.dealerService.updateDealer(this.dealerId, dealer).subscribe(
        () => this.router.navigate(['/dealers']),
        (error) => console.error('Error updating dealer', error)
      );
    } else {
      this.dealerService.addDealer(dealer).subscribe(
        () => this.router.navigate(['/dealers']),
        (error) => console.error('Error adding dealer', error)
      );
    }
  }

}

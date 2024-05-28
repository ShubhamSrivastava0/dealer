import { Component } from '@angular/core';
import { Dealer, DealerService } from '../service/dealer.service';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.css']
})
export class DealerListComponent {
  dealers: Dealer[] = [];

  constructor(private dealerService: DealerService) {}

  ngOnInit(): void {
    this.fetchDealers();
  }

  fetchDealers(): void {
    this.dealerService.getDealers().subscribe(
      (data) => (this.dealers = data),
      (error) => console.error('Error fetching dealers', error)
    );
  }

  deleteDealer(id: number): void {
    this.dealerService.deleteDealer(id).subscribe(
      () => this.fetchDealers(),
      (error) => console.error('Error deleting dealer', error)
    );
  }
}

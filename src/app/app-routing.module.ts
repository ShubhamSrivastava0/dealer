import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { DealerFormComponent } from './dealer-form/dealer-form.component';

const routes: Routes = [
 { path: '', redirectTo: '/dealers', pathMatch: 'full' },
  { path: 'dealers', component: DealerListComponent },
  { path: 'dealer/add', component: DealerFormComponent },
  { path: 'dealer/edit/:id', component: DealerFormComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

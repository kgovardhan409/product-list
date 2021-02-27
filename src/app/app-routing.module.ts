import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

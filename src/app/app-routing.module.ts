import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenStaffComponent } from './Component/kitchen-staff/kitchen-staff.component';
import { SearchComponent } from './Component/search/search.component';
import { UpdateStatusComponent  } from './Component/update-status/update-status.component';


const routes: Routes = [{path:'',component:SearchComponent},
  {path:'kitchenstaff',component:KitchenStaffComponent},
  {path:'search',component:SearchComponent}
  // {path:'status',component:UpdateStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

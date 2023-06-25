
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { SearchComponent } from './Component/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { KitchenStaffComponent } from './Component/kitchen-staff/kitchen-staff.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStatusComponent } from './Component/update-status/update-status.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, SearchComponent,KitchenStaffComponent, UpdateStatusComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }




// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { KitchenStaffComponent } from './Component/kitchen-staff/kitchen-staff.component';
// import { SidenavComponent } from './Component/sidenav/sidenav.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { AppComponent } from './app.component';

// // import { SearchComponent } from './Component/search/search.component';
// @NgModule({
//   declarations: [
    
//     KitchenStaffComponent,
//     SidenavComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule, Ng2SearchPipeModule 
//   ],
//   providers: [],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }




// search module

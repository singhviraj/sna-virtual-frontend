import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes ,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavigateComponent } from './navigate/navigate.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CustomerhelpComponent } from './customerhelp/customerhelp.component';




const approute: Routes=[
  //{path:'',component:ProductsComponent},
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Details/:id',component:DetailsComponent},
  {path:'Checkout',component:CheckoutComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Contact',component:ContactComponent},
  {path:'About',component:AboutComponent},
  {path:'Account',component:AccountComponent},
  {path:'Customerhelp',component:CustomerhelpComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigateComponent,
    DetailsComponent,
    CheckoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    SearchComponent,
 
    
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,RouterModule.forRoot(approute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

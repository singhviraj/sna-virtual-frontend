import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerhelpComponent } from './customerhelp/customerhelp.component';
import { CommonModule } from '@angular/common';
import { BackgroundimageDirective } from './backgroundimage.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SortPipe } from './sort.pipe';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test2 } from './test2';
import { Test } from './test';
import { NavigatephoneComponent } from './navigatephone/navigatephone.component';




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
  {path:'Register',component:SignupComponent},
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
    CustomerhelpComponent,
    BackgroundimageDirective,
    HeaderComponent,
    FooterComponent,
    HomesearchComponent,
    SignupComponent,
    SortPipe,
    //Test2Component,
    Test2Component,
    NavigatephoneComponent,
   
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule,   TestComponent,  
    AppRoutingModule,RouterModule.forRoot(approute)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

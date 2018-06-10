import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PoojasComponent } from './home/poojas/poojas.component';
import { PoojasdescriptionComponent } from './home/poojas/poojasdescription/poojasdescription.component';
import { PoojasiteamsComponent } from './home/poojas/poojasiteams/poojasiteams.component';
import { PoojasiteamComponent } from './home/poojas/poojasiteams/poojasiteam/poojasiteam.component';
import { PunyakeshtramsComponent } from './home/punyakeshtrams/punyakeshtrams.component';
import { PunyakeshtramdescriptionComponent } from './home/punyakeshtrams/punyakeshtramdescription/punyakeshtramdescription.component';
import { PunyakeshtramiteamsComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteams.component';
import { PunyakeshtramiteamComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteam/punyakeshtramiteam.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './login/image/image.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { RegisterAsAPurohitComponent } from './register-as-a-purohit/register-as-a-purohit.component';


import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { MyOrderComponent } from './profile/my-order/my-order.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { Footer2Component } from './footer2/footer2.component';
import { SliderComponent } from './home/slider/slider.component';

import { PunyakshetramCategoriesComponent } from './punyakshetram-categories/punyakshetram-categories.component';
import { AllPunyakshetramCategoriesComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-categories.component';
import { AllPunyakshetramCategoryItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-items.component';
import { AllPunyakshetramCategoryItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/all-punyakshetram-category-items/all-punyakshetram-category-item/all-punyakshetram-category-item.component';
import { RiverItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-items.component';
import { RiverItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/river-items/river-item/river-item.component';
import { ShaktipeetamsItemsComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetams-items.component';
import { ShaktipeetamItemComponent } from './punyakshetram-categories/all-punyakshetram-categories/shaktipeetams-items/shaktipeetam-item/shaktipeetam-item.component';
import { ContactuspageComponent } from './contactuspage/contactuspage.component';
import { ContactoptionComponent } from './contactuspage/contactoption/contactoption.component';
import { GetInTouchComponent } from './contactuspage/get-in-touch/get-in-touch.component';
import { LocationComponent } from './contactuspage/location/location.component';
import { PoojadetailsComponent } from './poojadetails/poojadetails.component';
import { PunyakeshetramdetailsComponent } from './punyakeshetramdetails/punyakeshetramdetails.component';
import { BooknowComponent } from './booknow/booknow.component';
import { SmalldataPipe } from './smalldata.pipe';
import { UserserviceService } from './userservice.service';
import { PoojaAllCategoriesComponent } from './pooja-all-categories/pooja-all-categories.component';
import { PoojaAllCategorieItemComponent } from './pooja-all-categories/pooja-all-categorie-item/pooja-all-categorie-item.component';

const approot: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},  
 
  {path:'allpunyakshetrams',component:AllPunyakshetramCategoryItemsComponent},
  {path:'riverpunyakshetrams',component:RiverItemsComponent},
  {path:'shaktipeetams',component:ShaktipeetamsItemsComponent},
  {path:'Contactuspage',component:ContactuspageComponent},
  {path:'poojadetails/:poojaId',component:PoojadetailsComponent},
  {path:'Punyakeshetramdetails',component:PunyakeshetramdetailsComponent},
  {path:'PoojaAllCategories',component:PoojaAllCategoriesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  
    PoojasComponent,
    PoojasdescriptionComponent,
    PoojasiteamsComponent,
    PoojasiteamComponent,
    PunyakeshtramsComponent,
    PunyakeshtramdescriptionComponent,
    PunyakeshtramiteamComponent,
    PunyakeshtramiteamsComponent,
    
    HomeComponent,
    ImageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterAsAPurohitComponent,
  
   
    ProfileComponent,
    UpdateProfileComponent,
    MyOrderComponent,
    ChangePasswordComponent,
    HeaderTopComponent,
    Footer2Component,
    SliderComponent,
 
    PunyakshetramCategoriesComponent,
    AllPunyakshetramCategoriesComponent,
    AllPunyakshetramCategoryItemsComponent,
    AllPunyakshetramCategoryItemComponent,
    RiverItemsComponent,
    RiverItemComponent,
    ShaktipeetamsItemsComponent,
    ShaktipeetamItemComponent,
    ContactuspageComponent,
    ContactoptionComponent,
    GetInTouchComponent,
    LocationComponent,
    PoojadetailsComponent,
    PunyakeshetramdetailsComponent,
    BooknowComponent,
    SmalldataPipe,
    PoojaAllCategoriesComponent,
    PoojaAllCategorieItemComponent
 
    
  ],
  imports: [
   
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approot, {useHash:true})
   
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


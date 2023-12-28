import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HousingService } from './services/housing.service';
import { Routes , RouterModule } from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';
import {ReactiveFormsModule } from '@angular/forms';
import { UserLogInComponent } from './User/User-Login/User-LogIn/UserLogIn.component';
import { UserRegisterComponent } from './User/User-Login/User-Register/User-Register/User-Register.component';
import { UserServiceService } from './services/user-service.service';
import { SignUpComponent } from './User/Sign-up/Sign-up.component';
import { FormsModule,FormControl,FormControlName } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
import { UserSignUpComponent } from './User/User-Login/User-SignUp/User-SignUp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {AlertModule} from '@coreui/coreui';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule } from '@angular/material/radio';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import {MatInputModule } from '@angular/material/input'
import { PropertyDetailsResolverService } from './Property/property-details/property-details-resolver.service';
const approutes:Routes=[
  {path:'' , component : PropertyListComponent},
   { path:'add-property' , component : AddPropertyComponent},
   { path:'Rent-property' , component : PropertyListComponent},
   { path:'User/LogIn' , component : UserLogInComponent},
  //  { path:'User/Register' , component : UserRegisterComponent},
  //  { path:'User/signup' , component : SignUpComponent},
  { path:'User/Register' , component : UserSignUpComponent},
   { path:'Property-details/:id' , component : PropertyDetailsComponent,
                              resolve:{prp:PropertyDetailsResolverService}},
    {path:'**',component:PropertyListComponent}   
    
   
                              



]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyDetailsComponent,
    PropertyCardComponent,
    AddPropertyComponent,
    UserLogInComponent,
    UserRegisterComponent,
    SignUpComponent,
    UserLogInComponent,
    UserSignUpComponent,
    FilterPipe,
    SortPipe
   
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  //TabsModule.forRoot(),
     MatTabsModule,
    RouterModule.forRoot(approutes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatRadioModule,
    NgbCarouselModule,
  
  ],
  providers: [
    HousingService,
    UserServiceService,
    AuthServiceService,
    PropertyDetailsResolverService,
    //provideAnimations
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

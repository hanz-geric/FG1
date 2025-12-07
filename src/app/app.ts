import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'fg';
  age='19';
  gender= "Male"
  dateOfBirth="January 12, 2006"
  placeOfBirt="Cabarroguis, Quirino"
  contactNumber="09550932817"
  baguioAddress="Camp Allen"

  college="2024-Present <br> BSCS <br> University of Baguio <br> Baguio City"
  highSchool="2018 - 2024 <br> University of La Salette <br> Santiago City"
  elementary="2013-2018 <br> NorthEastern College <br> Santiago City"

  withHonors1="School Year 2024 <br> ULSHS SHS Dep."
  withHighHonors="School Year 2023 <br> ULSHS SHS Dep."
  withHonors2="School Year 2018-2022 <br> NC SHS Dep."
  withHonors3="School Year 2013-2018 <br> NC ELEM Dep."

  skills="Writing, Reading"



}
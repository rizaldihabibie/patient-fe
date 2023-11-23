import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from '../patient-data/patient-data.component';
import { Patientdata } from '../patientdata';
import { PatientserviceService } from '../patientservice.service';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PatientDataComponent,ReactiveFormsModule, RouterModule],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by PID or name" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <br>

  <section>
  <a [routerLink]="['/add']">Add New Patient</a>
  </section>
  <br>
  
  <section class="results">
    <app-patient-data 
    *ngFor="let patientData of filteredPatientData"
    [patientData]="patientData">
    </app-patient-data>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  patientDataList: Patientdata[] = [];
  filteredPatientData: Patientdata[] = [];
  patientService: PatientserviceService = inject(PatientserviceService);

  addNewPatientForm = new FormGroup({

    pid: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    address: new FormControl(''),
    suburb: new FormControl(''),
    state: new FormControl(''),
    postcode: new FormControl('')

  });

  constructor() {
    this.patientService.getAllPatientData().then((fetchedPatientData : Patientdata[]) => {

      this.patientDataList = fetchedPatientData;
      this.filteredPatientData = this.patientDataList;

    });
  }

  submitNewPatientData() {
    this.patientService.submitApplication(
      this.addNewPatientForm.value.firstName ?? '',
      this.addNewPatientForm.value.lastName ?? '',
      this.addNewPatientForm.value.pid ?? '',
      this.addNewPatientForm.value.address ?? '',
      this.addNewPatientForm.value.suburb ?? '',
      this.addNewPatientForm.value.state ?? '',
      this.addNewPatientForm.value.postcode ?? '',
      this.addNewPatientForm.value.gender ?? '',
      this.addNewPatientForm.value.dob ?? ''
    );
  }

  filterResults(parameter: string) {
    if(!parameter) {

      this.filteredPatientData = this.patientDataList;
      return;

    }

    this.patientService.findByPidOrName(parameter).then((fetchedPatientData : Patientdata[]) => {

      this.filteredPatientData = fetchedPatientData;
      
    });

  }

}

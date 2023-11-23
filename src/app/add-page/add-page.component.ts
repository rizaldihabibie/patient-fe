import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientserviceService } from '../patientservice.service';


@Component({
  selector: 'app-add-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
  <section class="listing-apply">
  <h2 class="section-heading">Add New Patient</h2>
  <form [formGroup]="addNewPatientForm" (submit)="submitNewPatientData()">
    <table>
      <tbody>
        <tr>
          <td><label for="first-name">First Name</label></td>
          <td width="90%"><input id="first-name" type="text" formControlName="firstName"></td>
        </tr>
        <tr>
          <td><label for="last-name">Last Name</label></td>
          <td><input id="last-name" type="text" formControlName="lastName"></td>
        </tr>
        <tr>
          <td><label for="pid">PID</label></td>
          <td><input id="pid" type="text" formControlName="pid"></td>
        </tr>
        <tr>
          <td><label for="gender">Gender</label></td>
          <td><input id="gender" type="text" formControlName="gender"></td>
        </tr>
        <tr>
          <td><label for="dob">Date Of Birth</label></td>
          <td><input id="dob" type="text" formControlName="dob"></td>
        </tr>
        <tr>
          <td><label for="address">Address</label></td>
          <td><input id="address" type="text" formControlName="address"></td>
        </tr>
        <tr>
          <td><label for="suburb">Suburb</label></td>
          <td><input id="suburb" type="text" formControlName="suburb"></td>
        </tr>
        <tr>
          <td><label for="state">State</label></td>
          <td><input id="state" type="text" formControlName="state"></td>
        </tr>
        <tr>
          <td><label for="postcode">Post Code</label></td>
          <td><input id="postcode" type="text" formControlName="postcode"></td>
        </tr>
        <tr>
          <td></td>
          <td align="left"><button width="100%" type="submit" class="primary">SAVE</button></td>
        </tr>

      </tbody>
    </table>
  </form>
</section>
  `,
  styleUrl: './add-page.component.css'
})
export class AddPageComponent {

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

}

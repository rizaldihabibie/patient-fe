import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patientdata } from '../patientdata';

@Component({
  selector: 'app-patient-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <h2 class="listing-heading">{{patientData.firstName}}</h2>
      <p class="listing-location">{{patientData.pid}}</p>
      <p class="listing-location">{{patientData.firstName}},{{patientData.lastName}}</p>
      <p class="listing-location">{{patientData.dateOfBirth}}</p>
      <p class="listing-location">{{patientData.address}},{{patientData.suburb}},{{patientData.state}}</p>
      <button class="primary">UPDATE</button>
      <button class="warning">DELETE</button>
    </section>
  `,
  styleUrl: './patient-data.component.css'
})
export class PatientDataComponent {
  @Input() patientData!: Patientdata;
}

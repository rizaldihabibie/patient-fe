import { Component, Injectable, NgModule } from '@angular/core';
import { Patientdata } from './patientdata';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PatientserviceService {

  baseUrl = 'http://localhost:8080/api/v1/patients'

  constructor(private http: HttpClient) { 
     
  }

async getAllPatientData(): Promise<Patientdata[]> {

  const data = await fetch(this.baseUrl);
  const test = await data.json() ?? {};
  return test.data.data;

}

async findByPidOrName(parameter: string): Promise<Patientdata[]> {
  const data = await fetch(`${this.baseUrl}?pid=${parameter}&name=${parameter}`)
  const test = await data.json() ?? {};
  return test.data.data;
}

submitApplication(
  firstName: string,
  lastName: string,
  pid: string,
  address: string,
  suburb: string,
  state: string,
  postcode: string,
  gender: string,
  dob: string) {
    console.log(`
    Patient data : 
    pid: ${pid},
    firstName: ${firstName},
    lastName: ${lastName},
    address: ${address},
    suburb: ${suburb},
    state: ${state},
    postcode: ${postcode},
    dob: ${dob},
    gender: ${gender} `);

    const headers = { 'Content-Type': 'application/json' };
    this.http.post(this.baseUrl,
      {
        "pid" : pid,
        "firstName" : firstName,
        "lastName" : lastName,
        "gender" : gender,
        "dateOfBirth" : dob,
        "address" : address,
        "suburb" : suburb,
        "state" : state,
        "postcode" : state,
      },
      {headers}).toPromise().then((data:any)=>{console.log(data)})
  }

}

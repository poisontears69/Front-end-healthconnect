import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  standalone: false,
  templateUrl: './doctor-profile.component.html',
  styleUrl: './doctor-profile.component.less'
})
export class DoctorProfileComponent {
  editMode = false;

  doctor = {
    name: 'Dr. John Smith',
    specialization: 'Cardiology',
    bio: 'Dedicated to providing quality cardiovascular care to all patients.',
    mainSpecialty: 'Internal Medicine',
    subSpecialty: 'Interventional Cardiology',
    medSchool: 'Harvard Medical School',
    medSchoolYear: 2010,
    residency: 'Massachusetts General Hospital',
    fellowship: 'Cleveland Clinic Foundation',
    localBoard: 'Philippine Board of Cardiology',
    intlBoard: 'American Board of Internal Medicine',
    affiliations: [
      'Philippine Heart Association',
      'American College of Cardiology',
      'World Heart Federation'
    ],
    socials: {
      facebook: 'https://facebook.com/drjohnsmith',
      x: 'https://x.com/drjohnsmith'
    }
  };
}

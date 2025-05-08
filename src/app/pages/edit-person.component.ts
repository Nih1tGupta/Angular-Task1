import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>Edit Person</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label>Name: <input formControlName="name" /></label>
      <button type="submit">Update</button>
    </form>
  `
})
export class EditPersonComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  personService = inject(PersonService);
  fb = inject(FormBuilder);

  form = this.fb.group({ name: '' });
  id = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit() {
    this.personService.getById(this.id).subscribe(data => {
      this.form.patchValue(data);
    });
  }

  submit() {
    this.personService.update(this.id, this.form.value).subscribe(() => {
      // NOT USING A BACKEND SERVER RIGH TNOW
      alert('Updated successfully (Note: mock API doesn’t persist changes)');
      this.router.navigate(['/people']);
    });
  }
  
}

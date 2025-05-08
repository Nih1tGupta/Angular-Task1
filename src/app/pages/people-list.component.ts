import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="container">
    <div class="heading">
      <h1>People Manager</h1>
    </div>
    <div class="content">
      <h2>People List</h2>
      <table class="table">
        <tr *ngFor="let person of people">
          <td>{{ person.name }}</td>
          <td class="actions">
            <button (click)="edit(person.id)">Edit</button>
            <button (click)="remove(person.id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
`,
styleUrls: ['./people-list.component.css']



})
export class PeopleListComponent {
  personService = inject(PersonService);
  router = inject(RouterModule);
  people: any[] = [];

  ngOnInit() {
    this.personService.getAll().subscribe(data => this.people = data);
  }

  edit(id: number) {
    location.href = `/edit/${id}`;
  }

  remove(id: number) {
    this.personService.delete(id).subscribe(() => {
      this.people = this.people.filter(p => p.id !== id);
    });
  }
}

// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };
import { provideRouter, Routes } from '@angular/router';
import { PeopleListComponent } from './pages/people-list.component';
import { EditPersonComponent } from './pages/edit-person.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'edit/:id', component: EditPersonComponent }
];

export const appConfig = {
  providers: [provideRouter(routes)],
};


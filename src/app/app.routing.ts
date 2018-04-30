import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegistrationComponent } from './registration/registration.component';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes=[
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'tasks', component: TasksComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
import { ExtraOptions, Routes } from '@angular/router';
import { TecnlogiesComponent } from './components/tecnlogies/tecnlogies.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {
        path: "tecnologies", component: TecnlogiesComponent
    },
    {
        path:"about", component: AboutComponent
    },
    {
        path: "projects", component: ProjectsComponent
    }
];

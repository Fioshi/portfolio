import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { TecnlogiesComponent } from "./components/tecnlogies/tecnlogies.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, TecnlogiesComponent, ProjectsComponent, RouterModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-componentizacao';
}

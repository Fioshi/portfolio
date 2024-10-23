import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import path from 'path';

@Component({
  selector: 'app-tecnlogies',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tecnlogies.component.html',
  styleUrl: './tecnlogies.component.scss'
})
export class TecnlogiesComponent {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  icones = [
    {
      path:"https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      name: "Java"
    },
    {
      path:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      name: "Spring"
    },
    {
      path:"https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
      name:"JavaScript"
    },
    {
      path:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      name: "Angular"
    },
    {
      path:"https://cdn-icons-png.flaticon.com/512/919/919853.png",
      name:"Docker"
    },
    {
      path:"https://cdn-icons-png.flaticon.com/512/226/226772.png",
      name:"Linux"
    },
    {
      path:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      name:"PL/SQL"
    }
  ]


}

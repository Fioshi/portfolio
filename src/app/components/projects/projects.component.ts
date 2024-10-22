import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
  
})
export class ProjectsComponent {

  imagem = "../../../assets/projects_back.jpg"

  projetos = [
    {
      titulo: "Enterprise API",
      descricao: "API para controle de funcionários, departamentos e reuniões empresariais. 📊💼📅",
      link: "",
      subtitulo: "Spring"
    },
    {
      titulo: "PicPay Simplificado",
      descricao: "👨‍💻 Projeto com o desafio de resolver o case back end do PicPay de forma abrangente e eficaz! 🚀🔍",
      link:"",
      subtitulo: "Spring, Docker, Linux"
    },
    {
      titulo:"IA Prompter",
      descricao:"Back end de comunicação com modelo de LLM personalizado",
      link:"",
      subtitulo: "Spring, LLAMA3"
    },
    {
      titulo:"Mobile IA Prompter",
      descricao:"Projeto mobile para consumo da api que faz uso do modelo de LLM",
      link:"",
      subtitulo:"Flutter"
    }
  ]

}

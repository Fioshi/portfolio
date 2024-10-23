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
      link: "https://github.com/Fioshi/java-enterprise-api",
      subtitulo: "Spring",
      image: "../../../assets/enterprise_api.png"
    },
    {
      titulo: "PicPay Simplificado",
      descricao: "👨‍💻 Projeto com o desafio de resolver o case back end do PicPay de forma abrangente e eficaz! 🚀🔍",
      link:"https://github.com/Fioshi/java-picpay-simp",
      subtitulo: "Spring, Docker, Linux",
      image:"../../../assets/picpay.png"
    },
    {
      titulo:"IA Prompter",
      descricao:"Back end de comunicação com modelo de LLM personalizado",
      link:"https://github.com/Fioshi/java-ia-prompter-eurofarma",
      subtitulo: "Spring, LLAMA3",
      image:"../../../assets/java_ia.png"
    },
    {
      titulo:"Mobile IA Prompter",
      descricao:"Projeto mobile para consumo da api que faz uso do modelo de LLM",
      link:"https://github.com/Fioshi/flutter_ia_prompter",
      subtitulo:"Flutter",
      image:"../../../assets/flutter.png"
    }
  ]

}

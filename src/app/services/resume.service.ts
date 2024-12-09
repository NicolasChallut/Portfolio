// src/app/services/resume.service.ts

import { Injectable } from '@angular/core';
import { Experience, Education, Skill, Technology, Tool, Plugin } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getExperiences(): Experience[] {
    return [
      { title: 'Opérateur polyvalent machine', organization: ' - SIMOND groupe Décathlon', dateRange: '2023 - 2018', description: 'j\'ai commencé les 6 premiers mois par faire le tour des machines et opération diverses pour ensuite gérer la ligne d\'assemblage de tous les modèles de piolets existant. J\'ai optimisé l\'organisation et l\'ordre des opérations à faire, ainsi que la saisie informatique des commandes demandé. J\'ai mis en places des classeurs présentant ' },
      { title: 'Saisonnier - ETE/Hiver', organization: '', dateRange: '2018 - 2012', description: 'multiples métiers comme livreur, controleurs de trains, ou encore cableurs de boitier éléctrique' },
      // Ajoutez les autres expériences ici
    ];
  }

  getEducation(): Education[] {
    return [
      { title: 'Développeur Web : WordPress', institution: ' - OpenClassrooms', year: '2024', description: 'Une formation en ligne en présenciel via des cours en ligne avec OpenClassRoom. 12 projets validés par présentation en visio-conférence' },
      { title: 'CQP: technicien vendeur en produit de sport ', institution:' - CNPC', year:'2013', description:'formation compilé sur 2 mois sur les  différentes techniques de réparations et d\'entretien des divers matériels de glisses.'},
      { title: 'BNSSA: sauveteur aquatique', institution:' - Pompiers de Savoie SDIS 73', year:'2010', description:'formation compilé sur 2 semaines sur les premiers secours en équipes et les techniques de sauvetage en milieu aquatique'},
      { title: 'Bac S science Ingénieur', institution: ' - Lycée du Mont-Blanc', year: '2008', description: 'Au lycée du Mont-Blanc, au Fayet, avec en spécifité des cours dans les grands domaines techniques de la mécanique, l\'automatisme, l\'électronique, l\'électrotechnique et de l\'informatique.' },
      // Ajoutez les autres formations ici
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Développement Web', level: 80 },
      { name: 'Géstion du projet', level: 85 },
      { name: 'Optimisations SEO et Performance', level: 70 },
      { name: 'Debug',level: 75 }
    ];
  }

  getTechnologies(): Technology[] {
    return [
      { name:'Angular'},
      { name: 'Maquettes (Figma)' },
      { name: 'VsCode (IDE)' },
      { name: 'npm' },
      { name: 'Node.js' },
      { name: 'AJAX' },
      { name: 'Serveurs locaux' },
      { name: 'Serveurs web (nginx/apache)' },
      { name: 'Base de données (SQL-MariaDB)' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Cloud et Micro-services' },
      { name: 'React.js' }
    ];
}


getTools(): Tool[] {
    return [
      { name: 'jQuery' },
      { name: 'SCSS' },
      { name: 'Git / GitHub' },
      { name: 'GitLab' },
      { name: 'Notion' },
      { name: 'Dev Tools Inspector' },
      { name: 'Debug Log' },
      { name: 'IDE - VsCode' },
      { name: 'IDE - PhpStorm' }
    ];
}


getPlugins(): Plugin[] {
    return [
      { name: 'Yoast SEO' },
      { name: 'SEO Press' },
      { name: 'All-in-One WP Migration' },
      { name: 'Flying Scripts' },
      { name: 'CPT UI' },
      { name: 'ACF' },
      { name: 'Elementor' },
      { name: 'Contact Form 7' },
      { name: 'Autoptimize' },
      { name: 'Query Monitor' }
    ];
}

}

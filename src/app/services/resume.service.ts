// src/app/services/resume.service.ts

import { Injectable } from '@angular/core';
import { Experience, Education, Skill, Technology, Tool, Plugin } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getExperiences(): Experience[] {
    return [
      { title: 'Enseignante d\'anglais', organization: 'After School', dateRange: '2019 - 2023', description: 'J\'ai analysé les besoins, créé et adapté les plans de cours...' },
      { title: 'Auto-entrepreneuse | Enseignante d\'anglais', organization: 'EasyEnglishChatou', dateRange: '2019 - 2021', description: 'J\'ai créé mon propre service d\'enseignement de l\'anglais...' },
      // Ajoutez les autres expériences ici
    ];
  }

  getEducation(): Education[] {
    return [
      { title: 'Développeur Web : WordPress', institution: 'OpenClassrooms', year: '2024', description: 'Une formation en ligne à distance...' },
      { title: '(VAE) M1 Métiers de l\'Enseignement', institution: 'Nanterre Université', year: '2022', description: 'À l\'Université de Paris Ouest Nanterre...' },
      // Ajoutez les autres formations ici
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Développement Web', level: 80 },
      { name: 'Optimisations SEO et Performance', level: 70 },
      {name: 'Debug',level: 75 }
    ];
  }

  getTechnologies(): Technology[] {
    return [
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
      { name: 'SASS' },
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

// src/app/models/resume.model.ts

export interface Experience {
    title: string;
    organization: string;
    dateRange: string;
    description: string;
  }
  
  export interface Education {
    title: string;
    institution: string;
    year: string;
    description: string;
  }
  
  export interface Skill {
    name: string;
    level: number; // Niveau de compétence en pourcentage
  }
  
  export interface Technology {
    name: string;
  }
  
  export interface Tool {
    name: string;
  }
  
  export interface Plugin {
    name: string;
  }
  
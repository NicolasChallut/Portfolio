// src/app/components/resume/resume.component.ts

import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { Experience, Education, Skill, Technology, Tool, Plugin } from '../models/resume.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    imports: [
        CommonModule
    ]
})
export class ResumeComponent implements OnInit {
  experiences: Experience[] = [];
  education: Education[] = [];
  skills: Skill[] = [];
  technologies: Technology[] = [];
  tools: Tool[] = [];
  plugins: Plugin[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.experiences = this.resumeService.getExperiences();
    this.education = this.resumeService.getEducation();
    this.skills = this.resumeService.getSkills();
    this.technologies = this.resumeService.getTechnologies();
    this.tools = this.resumeService.getTools();
    this.plugins = this.resumeService.getPlugins();
  }
}

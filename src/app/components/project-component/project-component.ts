import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-component',
  imports: [MatTab, MatTabGroup, CommonModule],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css',
})
export class ProjectComponent {

  projects = [
    {
      title: 'ZenBasket  E - Commerce Platform',
      company: 'Centizen, Inc.',
      role: 'Software Engineer',
      duration: 'Feb 2023 - Jun 2025',
      description: 'A scalable e-commerce platform for handling high-volume transactions.',
      contributions: [
        'Designed scalable backend using Node.js, Express.js, and PostgreSQL',
        'Built microservices architecture for modular services',
        'Integrated secure payment gateways',
        'Developed GraphQL APIs for optimized data fetching',
        'Implemented resolvers and middleware for secure communication',
        'Configured routing for dynamic queries',
        'Built reusable Angular UI components',
        'Worked in Agile environment for feature delivery'
      ],
      tech: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL', 'GraphQL']
    },

    {
      title: 'Clarus Subsea Integration Platform',
      company: 'Bizmetric India Pvt Ltd.',
      role: 'Full Stack Developer',
      duration: 'Aug 2025 - Feb 2026',
      description: 'Enterprise customer platform for subsea asset integrity management, supporting complex workflows, automation, and large-scale data processing.',
      contributions: [
        'Developed full stack features using Angular and Node.js For customer-facing enterprise asset integrity platform supporting subsea operations',
        'Built bulk upload module with Excel processing, validation, normalization, and relational mapping',
        'Implemented advanced data tables with filtering, pagination, full-screen view, and dynamic columns',
        'Designed and integrated email notification workflows for system and user events',
        'Developed cron-based schedulers for background jobs and periodic data processing',
        'Implemented configurable business logic for asset lifecycle and equipment management',
        'Built dynamic UI workflows for scenario-based property configuration',
        'Designed REST APIs and Sequelize models for complex relational datasets',
        'Collaborated with client teams to deliver scalable production features',
        'Contributed to architecture improvements for better performance and maintainability'
      ],
      tech: ['Angular', 'Node.js', 'Express.js', 'Sequelize', 'PostgreSQL', 'Cron Jobs']
    }
  ];

}

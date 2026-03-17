import { Component, HostListener } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { ExperienceComponent } from '../experience-component/experience-component';
import { SkillComponent } from '../skill-component/skill-component';
import { ContactComponent } from '../contact-component/contact-component';
import { ProjectComponent } from '../project-component/project-component';

@Component({
  selector: 'app-home-component',
  imports: [MatToolbar, ExperienceComponent, SkillComponent,
    ContactComponent, ProjectComponent
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  activeSection:string = 'about';
  isManualScroll:boolean = false;

  @HostListener('window:scroll', [])

  scrollToSection(sectionId?: string) {
    if(!sectionId) return

    this.isManualScroll = true;
    this.activeSection = sectionId;

    const element = document.getElementById(sectionId);

    element?.scrollIntoView({ behavior: 'smooth'});

    setTimeout(() => {
      this.isManualScroll = false;
    }, 600); 
  }


  onScroll() {

    if(this.isManualScroll) return;

    const sections = ['about','experience','skills','projects','contact'];

    for(let section of sections) {

      const element = document.getElementById(section);

      if(element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
        }
      }
    }
  }

}

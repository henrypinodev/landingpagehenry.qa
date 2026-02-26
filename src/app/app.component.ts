import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Henry Pino';
  title = 'Analista Programador';
  subtitle = 'Motivado por crear e idear soluciones que generen impacto donde quiera que esté.';
  
  aboutMe = `Soy un desarrollador que siempre busca generar impacto y mejorar productos. Me encanta preguntarme "¿se puede hacer mejor?" y llevar mis ideas a la práctica, siempre alineadas con el proyecto.`;

  career = 'Analista Programador';
  university = 'Universidad Tecnologica de Chile INACAP';

  email = 'henrypino93@gmail.com';
  linkedin = 'https://www.linkedin.com/in/henrypino';
  github = 'https://github.com/henrypinodev';


  projects: Project[] = [
    {
      id: 1,
      title: 'Transantiago parada',
      description: 'Plataforma para consultar paradas según codigo de cada paradero en red Metro de Santiago. ',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tags: ['APIRest', 'Springboot','Angular'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ];

  skills: Skill[] = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Mongodb', icon: '🌿' },
    { name: 'PLSQL', icon: '🗃️' }
  ];
  // ==========================================

  currentYear = new Date().getFullYear();
  mobileMenuOpen = false;

  navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contact' }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(href: string): void {
    this.mobileMenuOpen = false;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

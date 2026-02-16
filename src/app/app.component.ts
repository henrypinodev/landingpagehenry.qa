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
  // ======== EDITAR ESTOS VALORES ========
  name = 'Tu Nombre';
  title = 'Desarrollador de Software';
  subtitle = 'Creando experiencias digitales excepcionales';
  
  aboutMe = `Soy un desarrollador apasionado con experiencia en crear aplicaciones web modernas y escalables. 
  Me especializo en tecnologías frontend y backend, siempre buscando las mejores prácticas y soluciones innovadoras.`;

  career = 'Ingeniería en Sistemas Computacionales';
  university = 'Universidad Ejemplo';

  email = 'tu.email@ejemplo.com';
  linkedin = 'https://linkedin.com/in/tu-perfil';
  github = 'https://github.com/tu-usuario';

  // ======== PROYECTOS - MODIFICAR AQUÍ ========
  projects: Project[] = [
    {
      id: 1,
      title: 'Proyecto E-commerce',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Panel de control interactivo para visualización de datos con gráficos dinámicos y reportes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['React', 'D3.js', 'Firebase'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'App de Gestión',
      description: 'Sistema de gestión de tareas y proyectos con colaboración en tiempo real.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 4,
      title: 'API REST',
      description: 'API robusta con autenticación JWT, documentación Swagger y pruebas automatizadas.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
      tags: ['Java', 'Spring Boot', 'MySQL'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 5,
      title: 'Mobile App',
      description: 'Aplicación móvil multiplataforma con diseño moderno y funcionalidades offline.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      tags: ['Flutter', 'Dart', 'Firebase'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      id: 6,
      title: 'Landing Page',
      description: 'Sitio web corporativo responsive con animaciones y optimización SEO.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript'],
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
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '🗃️' }
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

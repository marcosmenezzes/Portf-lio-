import { AfterViewInit, Component, ElementRef, computed, inject, signal } from '@angular/core';

type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  headline: string;
  description: string;
  previewLabel: string;
  tags: string[];
  points: string[];
  metrics: { value: string; label: string }[];
  link: string;
  showcaseLink?: string;
  showcaseLabel?: string;
  gallery?: { src: string; alt: string; label: string }[];
};

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contato', href: '#contact' }
  ];

  readonly profile = {
    name: 'Marcos Menezes',
    location: 'Linhares, ES',
    phone: '(27) 99935-1806',
    email: 'marcosmenezzez@gmail.com',
    linkedin: 'https://www.linkedin.com/in/marcosmenezzez/',
    github: 'https://github.com/marcosmenezzes',
    summary:
      'Desenvolvedor Full Stack com foco em Back-End, com experiência em desenvolvimento web e desktop, integrações, dashboards, visão computacional, Azure, DevOps, Angular, React, .NET Web API e funcionalidades com IA. Inglês nível C1 e experiência internacional por ter morado em Massachusetts.',
    languages: ['Português nativo', 'Inglês C1 com experiência no exterior']
  };

  readonly stats = [
    { value: '3+ anos', label: 'Entre suporte, desenvolvimento e entrega técnica.' },
    { value: 'Angular', label: 'Uma das stacks com que você mais trabalhou.' },
    { value: 'Full stack', label: 'Capacidade real de ir da interface à API.' }
  ];

  readonly highlights = [
    {
      index: '01',
      title: 'Backend e integração',
      description:
        'APIs, autenticação JWT, Entity Framework Core, integração de sistemas e estruturação de regras de negócio.'
    },
    {
      index: '02',
      title: 'Frontend com Angular e React',
      description:
        'Experiência prática com SPAs, organização de interface, consumo de API, navegação e construção de fluxo de usuário.'
    },
    {
      index: '03',
      title: 'IA e visão computacional',
      description:
        'Uso de CNN, YOLO e automação orientada a problema, com foco em detecção e ganho operacional.'
    }
  ];

  readonly stackGroups = [
    {
      title: 'Linguagens e frameworks',
      items: ['Angular', 'React', 'C#', '.NET', 'ASP.NET Core Web API', 'PHP', 'Python', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Dados e infraestrutura',
      items: ['SQL Server', 'MySQL', 'Firebird', 'Azure', 'Azure DevOps', 'Git', 'Node.js', 'Swagger', 'DBeaver']
    },
    {
      title: 'Conhecimentos complementares',
      items: ['Entity Framework Core', 'JWT', 'ASP.NET Core Identity', 'Tailwind CSS', 'React Query', 'React Router', 'YOLO', 'CNN']
    }
  ];

  readonly projects: Project[] = [
    {
      slug: 'safetylens',
      title: 'Safety Lens',
      category: 'Visão computacional',
      summary: 'Detecção de EPIs na indústria com pipeline baseado em CNN + YOLO.',
      headline: 'Visão computacional aplicada a segurança industrial.',
      description:
        'Projeto voltado para detecção de EPIs em ambientes industriais, com proposta clara de uso em monitoramento e conformidade operacional.',
      previewLabel: 'CNN + YOLO',
      tags: ['Python', 'YOLO', 'CNN', 'OpenCV'],
      points: [
        'Detecção de EPIs em ambiente industrial.',
        'Combinação de visão computacional e análise de conformidade.',
        'Projeto forte para evidenciar IA aplicada no portfólio.'
      ],
      metrics: [
        { value: 'YOLO', label: 'Modelo de detecção' },
        { value: 'CNN', label: 'Base de visão computacional' },
        { value: 'Indústria', label: 'Contexto de aplicação' }
      ],
      link: 'https://github.com/marcosmenezzes/safetylens.rtsp',
      showcaseLink:
        'https://www.linkedin.com/posts/marcosmenezzez_tecnologia-visaetocomputacional-inteligaeanciaartificial-activity-7298772997257986050-z4nz',
      showcaseLabel: 'Ver publicação com o projeto em funcionamento'
    },
    {
      slug: 'studybuddyhub',
      title: 'Lhamium Study',
      category: 'Projeto acadêmico / pessoal',
      summary: 'Plataforma de estudos com front React, Web API em .NET, JWT, EF Core e geração de material por IA.',
      headline: 'Arquitetura full stack para organizar estudo, conteúdo e geração assistida por IA.',
      description:
        'O sistema é dividido em frontend, Web API, domínio e persistência. O front organiza rotas, estado local e cliente HTTP; a API concentra autenticação, validações, controllers e serviços; o domínio modela as entidades centrais; e a infraestrutura usa EF Core e Identity para persistência.',
      previewLabel: 'React + .NET Web API + EF Core',
      tags: ['React', '.NET Web API', 'JWT', 'EF Core'],
      points: [
        'Fluxo de login com JWT em cookie HTTP-only, sessão restaurada por endpoint dedicado e estado resumido no frontend.',
        'CRUD completo para matérias, tarefas, resumos, eventos, decks, flashcards, compartilhamentos e anexos.',
        'Geração de material de estudo por IA a partir de resumos, criando ou atualizando deck, flashcards, perguntas e tarefa de estudo.'
      ],
      metrics: [
        { value: '4 camadas', label: 'Front, API, domínio e dados' },
        { value: 'JWT', label: 'Autenticação e sessão' },
        { value: 'IA', label: 'Geração de estudo' }
      ],
      link: 'https://lhamiumstudy.worcode.com.br/',
      gallery: [
        {
          src: '/projects/lhamium/dashboard.png',
          alt: 'Dashboard do Lhamium Study com tarefas, eventos e matérias',
          label: 'Dashboard'
        },
        {
          src: '/projects/lhamium/login.png',
          alt: 'Tela de login do Lhamium Study',
          label: 'Login'
        },
        {
          src: '/projects/lhamium/flashcards.png',
          alt: 'Tela de estudo com flashcards do Lhamium Study',
          label: 'Flashcards'
        },
        {
          src: '/projects/lhamium/summary-editor.png',
          alt: 'Editor de resumo do Lhamium Study',
          label: 'Editor de resumo'
        }
      ]
    },
    {
      slug: 'api-php',
      title: 'API RESTful em PHP',
      category: 'Desafio SENAI',
      summary: 'CRUD com validações e respostas JSON para demonstrar base sólida de backend.',
      headline: 'Fundamentos backend bem resolvidos, sem excesso de camada.',
      description:
        'Projeto enxuto, mas bom para mostrar domínio de rotas, validações, resposta JSON e clareza de organização de serviço.',
      previewLabel: 'PHP + CRUD + JSON',
      tags: ['PHP', 'CRUD', 'JSON', 'API'],
      points: [
        'Operações CRUD completas.',
        'Validações e respostas consistentes em JSON.',
        'Boa peça para evidenciar base de backend tradicional.'
      ],
      metrics: [
        { value: 'CRUD', label: 'Operações principais' },
        { value: 'JSON', label: 'Formato de resposta' },
        { value: 'PHP', label: 'Base da implementação' }
      ],
      link: 'https://github.com/marcosmenezzes/api-php'
    }
  ];

  readonly experiences = [
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Fartec Sistemas',
      location: 'Linhares, ES',
      period: '2025 – Abril de 2026',
      points: [
        'Atuação em projetos de clientes desde planejamento e arquitetura até implantação e manutenção.',
        'Entrega de melhorias, correções, otimizações e novas funcionalidades web.',
        'Gestão de tarefas e fluxo com Azure DevOps.'
      ]
    },
    {
      role: 'Analista de Suporte',
      company: 'Inovar Sistemas',
      location: 'Linhares, ES',
      period: '2024 – 2025',
      points: [
        'Otimização de consultas SQL.',
        'Resolução de incidentes e análise de problemas em sistemas.',
        'Melhoria de desempenho em ambiente corporativo.'
      ]
    },
    {
      role: 'Técnico de Manutenção',
      company: 'Versa iPhone',
      location: 'Linhares, ES',
      period: '2025',
      points: [
        'Manutenção, diagnóstico e gestão de ordens de serviço.',
        'Contribuição para melhoria de processos internos.'
      ]
    }
  ];

  readonly education = [
    { title: 'Bacharelado em Ciência da Computação', institution: 'Descomplica', period: '2025 – 2029' },
    { title: 'Curso Técnico em Desenvolvimento de Sistemas', institution: 'SENAI Brasil', period: '2024 – 2025' },
    { title: 'Curso de PHP', institution: 'SENAI Brasil', period: '2025' }
  ];

  readonly softSkills = ['Comunicação', 'Trabalho em equipe', 'Empatia', 'Aprendizado rápido', 'Adaptabilidade'];

  readonly activeProjectSlug = signal(this.projects[0].slug);
  readonly activeGalleryImage = signal<GalleryImage | null>(null);
  readonly selectedProject = computed(
    () => this.projects.find((project) => project.slug === this.activeProjectSlug()) ?? this.projects[0]
  );

  selectProject(slug: string): void {
    this.activeProjectSlug.set(slug);
  }

  openGalleryImage(image: GalleryImage): void {
    this.activeGalleryImage.set(image);
  }

  closeGalleryImage(): void {
    this.activeGalleryImage.set(null);
  }

  ngAfterViewInit(): void {
    const elements = Array.from(
      this.host.nativeElement.querySelectorAll('.reveal-on-scroll')
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    elements.forEach((element: HTMLElement) => observer.observe(element));
  }
}

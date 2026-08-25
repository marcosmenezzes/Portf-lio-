import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

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
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly language = inject(LanguageService);
  readonly currentYear = new Date().getFullYear();

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
      slug: 'art-twin',
      title: 'Art Twin',
      category: 'IA e visão computacional',
      summary: 'Encontra seu gêmeo artístico comparando uma foto com obras do Metropolitan Museum of Art.',
      headline: 'Uma busca visual por seu retrato na história da arte.',
      description:
        'Aplicação full stack que compara a foto enviada com pinturas e esculturas de domínio público do acervo do Met, sem armazenar a imagem.',
      previewLabel: 'DINOv2 + Angular + .NET',
      tags: ['Angular', 'ASP.NET Core', 'DINOv2', 'CLIP'],
      points: [
        'Busca por similaridade usando embeddings DINOv2 e CLIP combinados com informação espacial de cor.',
        'Acervo com 3.000 obras públicas obtidas pela API do Metropolitan Museum of Art.',
        'Upload validado e processado somente em memória, sem cadastro ou armazenamento da fotografia.'
      ],
      metrics: [],
      link: 'https://github.com/marcosmenezzes/Art-twin',
      showcaseLink: 'https://art-twin.vercel.app/#/',
      showcaseLabel: 'Experimentar Art Twin'
    },
    {
      slug: 'platelens',
      title: 'PlateLens',
      category: 'Visão computacional',
      summary: 'Controle de acesso veicular com detecção e leitura em tempo real de placas brasileiras.',
      headline: 'Visão computacional aplicada ao controle de acesso veicular.',
      description:
        'Sistema local que captura imagens de câmeras, detecta placas com YOLO, reconhece caracteres com Apple Vision e registra entradas e saídas em tempo real.',
      previewLabel: 'YOLO + OCR + .NET + React',
      tags: ['YOLO', 'Apple Vision', 'ASP.NET Core', 'React'],
      points: [
        'Reconhecimento dos padrões brasileiro antigo e Mercosul.',
        'Painel com veículos, histórico, monitoramento e indicadores operacionais.',
        'Atualizações em tempo real com SSE e persistência local em SQLite.'
      ],
      metrics: [],
      link: 'https://github.com/marcosmenezzes/PlateLens-LeitorDePlacas',
      showcaseLink: 'https://lnkd.in/p/dTEp7GWE',
      showcaseLabel: 'Ver vídeo do PlateLens'
    },
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
      showcaseLink: 'https://lnkd.in/p/dcmvSbK9',
      showcaseLabel: 'Ver vídeo do Safety Lens'
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
    },
    {
      slug: 'portfolio',
      title: 'Portfólio',
      category: 'Projeto pessoal',
      summary: 'Portfólio pessoal desenvolvido em Angular para apresentar trajetória, habilidades e projetos como desenvolvedor Full Stack.',
      headline: 'Uma apresentação simples para projetos e experiências.',
      description: 'Interface responsiva criada em Angular para reunir trajetória profissional, formação, stack e projetos desenvolvidos.',
      previewLabel: 'Angular + SCSS',
      tags: ['Angular', 'SCSS', 'TypeScript'],
      points: ['Layout responsivo.', 'Seções de experiência, formação e contato.', 'Projetos conectados ao GitHub.'],
      metrics: [],
      link: 'https://github.com/marcosmenezzes/Portf-lio-'
    },
    {
      slug: 'chatgpt-stealth-assistant',
      title: 'ChatGPT Stealth Assistant',
      category: 'Ferramenta de produtividade',
      summary: 'Ferramenta para integrar o acesso ao ChatGPT diretamente ao fluxo de trabalho do macOS.',
      headline: 'IA acessível sem interromper o fluxo de trabalho.',
      description: 'Projeto experimental de produtividade voltado a tornar o uso de um assistente de IA mais rápido e discreto no sistema operacional.',
      previewLabel: 'Python + macOS',
      tags: ['Python', 'macOS', 'IA'],
      points: ['Acesso rápido ao assistente.', 'Integração com o fluxo de trabalho.', 'Foco em produtividade.'],
      metrics: [],
      link: 'https://github.com/marcosmenezzes/chatgpt-stealth-assistant'
    }
  ];

  readonly experiences = [
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Fartec Sistemas',
      location: 'Linhares, ES',
      period: '2025 – 2026',
      points: [
        'Atuação em projetos de clientes desde planejamento e arquitetura até implantação e manutenção.',
        'Entrega de melhorias, correções, otimizações e novas funcionalidades web.',
        'Gestão de tarefas e fluxo com Azure DevOps.'
      ]
    },
    {
      role: 'Desenvolvedor Front-End',
      company: 'Freelancer remoto',
      location: 'Linhares, ES',
      period: '2026',
      points: [
        'Evolução e manutenção de aplicação web, com refatorações, correções e melhorias de responsividade.',
        'Implementação de interfaces a partir do Figma e uso de agentes de IA em análise, desenvolvimento, revisão e validação de código.'
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
    { title: 'Bacharelado em Engenharia de Software', institution: 'Instituto INFNET', location: 'Remoto', period: '2026 – 2030' },
    { title: 'Curso Técnico em Desenvolvimento de Sistemas', institution: 'SENAI', location: 'Brasil', period: '2024 – 2025' },
    { title: 'Curso de PHP', institution: 'SENAI', location: 'Brasil', period: '2025' }
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

}

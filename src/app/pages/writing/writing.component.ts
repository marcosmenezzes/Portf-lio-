import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

type Section = 'blog' | 'code';

type Entry = {
  section: Section;
  slug: string;
  title: string;
  publishedAt: string;
  date: string;
  summary: string;
  paragraphs: string[];
};

const entries: Entry[] = [
  {
    section: 'blog',
    slug: 'aprender-em-publico',
    title: 'Aprender em público',
    publishedAt: '2026-08-03',
    date: '3 de agosto de 2026',
    summary: 'Um espaço para registrar ideias ainda em formação, sem esperar que elas estejam perfeitamente resolvidas.',
    paragraphs: [
      'Este é um texto de exemplo. Quero usar este espaço para organizar pensamentos sobre tecnologia, trabalho, criatividade e as coisas que encontro pelo caminho.',
      'Escrever em público é também uma forma de aprender: uma ideia fica mais nítida quando preciso explicá-la para outra pessoa.'
    ]
  },
  
  {
    section: 'code',
    slug: 'requisitos-como-decisoes',
    title: 'Requisitos como decisões',
    publishedAt: '2026-07-18',
    date: '18 de julho de 2026',
    summary: 'Requisitos úteis explicam a necessidade, os limites e como reconhecer que o resultado funciona.',
    paragraphs: [
      'Uma lista de funcionalidades não substitui o entendimento do problema. Perguntas sobre usuários, contexto e critérios de aceite transformam pedidos vagos em decisões verificáveis.',
      'Esta área pode receber resumos de aula, referências e exemplos dos meus projetos.'
    ]
  }
];

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
  private readonly data = toSignal(this.route.data, { initialValue: this.route.snapshot.data });

  readonly section = computed(() => this.data()['section'] as Section);
  readonly sectionEntries = computed(() => entries
    .filter(entry => entry.section === this.section())
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)));
  readonly selectedEntry = computed(() => this.sectionEntries().find(entry => entry.slug === this.params().get('slug')));
  readonly nextEntry = computed(() => {
    const current = this.selectedEntry();
    if (!current) return undefined;
    const list = this.sectionEntries();
    const currentIndex = list.indexOf(current);
    return currentIndex > 0 ? list[currentIndex - 1] : undefined;
  });

  readonly heading = computed(() => this.section() === 'blog'
    ? 'Pensamentos ainda em construção.'
    : 'Anotações de Engenharia de Software.');
}

import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/language.service';

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
    //primeiro de todos
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
    //segundo de todos
    {
    section: 'blog',
    slug: 'Dopamina-e-atenção',
    title: 'Eu não quero te ver mais pimpim patapim!',
    publishedAt: '2026-08-07',
    date: '7 de agosto de 2026',
    summary: 'Baseado num artigo que li da revista Perspectives in Public Health, que explica como a dopamina influencia a atenção e o foco.',
    paragraphs: [
      'Faltam 8 semanas para minha faculdade em Engenharia de Software se iniciar. Acabei refletindo sobre como precisarei de disciplina extra para me destacar em minhas atividades curriculares, projetos de extensão, futuros estágios e tudo mais.',
      'Eu tenho completa ciência do meu nível de atenção e foco, e sei que preciso melhorar, assim como boa parcela da sociedade atual. <a href="https://journals.sagepub.com/doi/10.1177/17579139251331914?__cf_chl_tk=EPHhORTPcq51VE.KOB7SYps4QHL3NVjHncrMiW.48fo-1786080580-1.0.1.1-N.TVGw_tjNfWc5ubR8nviH4ABLUdf9Duj9RvGp0rtLk">Nesse artigo</a> eles falam justamente do "dopamine-scrolling" que consiste unicamente no hábito de rolar a tela do celular, tablet ou computador. Os autores começam falando em como eles identificam um padrão comportamental distinto dos outros vicíos em internet, sendo caracterizado pelo ato habitual de rolar feeds em busca de conteudos inéditos e divertidos e não um "vicío" clínico fechado por si só como o Internet Addiction Disorder (IAD).', 
      'A diferença fica clara quando comparamos com outros comportamentos digitais e vicíos tradicionais: No "Doom-scrolling" que é basicamente o ato de rolar a tela em busca de notícias ruins o motor é o medo e a ansiedade, você rola a tela compulsivamente em busca de notícias ruins, tragédias, ou atualizações sobre crises. No "Dopamine-scrolling" o motor é o tédio/busca por prazer rapído, o objetivo é preencher qualquer micro segundo de tédio. Diferentemente de vicíos químicos (Ex: Álcool ou nicotina) onde você introduz uma substância no seu corpo pra forçar artificialmente a alteração da química cerebral, o gatilho do "scrollar" é puramente comportamental e de design de interface.',  
      'A dopamina é produzida pelo seu proprio cérebro não pelo conteúdo em si, mas pela expectativa do que vem a seguir. O mecanismo é idêntico ao de um caça níquel (reforço variável): você puxa a tela pra pra baixo e não sabe se vai aparecer o pimpim patapim, uma tragédia ou uma notícia de fofoca do vini jr e é essa incerteza de recompensa lança pequenas doses constantes de dopamina no seu cérebro. É um padrão de comportamento automatizado e fragmentado. Você pode ter uma vida funcional e saudável, mas perder horas do dia sem perceber porque seu cérebro aprendeu a recorrer ao celular a cada intervalo de atenção.',
      'Agora que foi entendido o que é, vem o grande problema que foi apenas um dos problemas que o artigo aborda e que foi o que me motivou a escrever isso nesse tempo antes da facul. A tolerância neurobiológica que o artigo destaca é o que mais me preocupa. Esse mecanismo de "recompensa incerta" lança microdosses de dopamina tão frequentemente no cérebro que o seu cérebro cria uma tolerância. Conforme seu cérebro se habitua a esse fluxo constante e frenético de estímulos de curto prazo, o nível de exigência para você sentir interesse ou satisfação aumenta. Resumindo, atividades que exigem esforço prolongado e oferecem recompensas lentas como ler documentação de um código, estudar cálculo ou acompanhar uma aula expositiva viram um inferno de insuportável e entediante.',
      'O artigo continua falando sobre como o design das plataformas digitais é intencionalmente projetado para explorar esse mecanismo de dopamina, criando um ciclo vicioso de busca por gratificação instantânea. Mas eu achava que isso fosse meio obvio, então não quero me aprofundar nessa parte. E na minha opnião de símio eu acho que eles dão um alarde muito grande sobre isso a ponto de parecer um problema de saúde pública, que a sociedade deveria se preocupar mais com isso e os desenvolvedores deveriam se preocupar em criar recursos que promovam o engajamento consciente e saudável. Todo mundo sabe que é viciante e a pessoa realmente quer isso, quando um adolescente curte 100 videos de sixseven em um dia, ele só quer que apareça mais outro 300 videos de sixseven.',
      'Sei que tem o argumento de que o dano invisível a longo prazo é o que preocupa os acadêmicos e pessoal da saúde, mas pra mim a responsabilidade deveria ser de cada um e não de uma empresa que lucra com isso, muito menos de um governo que não tem capacidade de fiscalizar isso. Provavelmente isso vai afetar ainda mais a sociedade no futuro, mas não é algo que possa resolver então meu plano vai ser apenas de me disciplinar e me educar para não cair nesse tipo de armadilha. Vou tentar reduzir meu tempo de telas, desligar o celular 1h antes de dormir, não usar celular no banheiro pra daqui até 8 semanas conseguir render mais que 100% na faculdade. Quero realmente me disciplinar e ser rigoroso como nunca fui. Talvez eu escreva sobre como foi a experiência daqui a 8 semanas, mas por enquanto é só isso que eu queria escrever. Obrigado por ler até aqui.'
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
  readonly language = inject(LanguageService);
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
    ? this.language.text('Pensamentos ainda em construção.')
    : this.language.text('Anotações de Engenharia de Software.'));
}

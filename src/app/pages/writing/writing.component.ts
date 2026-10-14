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

  {
    section: 'code',
    slug: 'primeira-semana-faculdade',
    title: 'Minha primeira semana na faculdade',
    publishedAt: '2026-10-14',
    date: '14 de outubro de 2026',
    summary: 'Um registro da primeira semana de Engenharia de Software, passando por visualização de dados, pensamento computacional e as primeiras linguagens.',
    paragraphs: [
      'Essa semana foi tranquila por ser a primeira ainda. Fundamentos do processamento de dados é a base do que estudamos, pois envolve entender como os dados são coletados, organizados e processados para gerar informações úteis.',
      'Na aula de visualização de dados começamos aprendendo a diferenciação entre um dado, uma informação, um conhecimento e uma ação. Os <strong>dados</strong> são a matéria-prima bruta da informação: elementos isolados, fatos, números, símbolos ou observações que, sozinhos, podem não possuir um significado ou contexto claro. Basicamente, sua principal característica é a natureza bruta, que precisa ser contextualizada para que os dados possam gerar uma informação. Existem os dados qualitativos, que descrevem características, qualidades ou categorias (ex.: cores, nomes e opiniões), e os quantitativos, que expressam valores numéricos, como peso, preço e quantidade. Esses dados podem ser estruturados, seguindo um formato predefinido, como tabelas e planilhas, semiestruturados, como arquivos JSON e XML, ou não estruturados, como textos livres, áudios, imagens e vídeos.',
      'A <strong>informação</strong> surge quando agrupamos e relacionamos dados brutos com situações ou cenários reais, permitindo que sejam interpretados por quem os recebe. Ela pode servir como base para a tomada de decisões, para resolver problemas ou planejar ações. Um exemplo bem prático é receber os dados "39" e "°C". Sem contexto, não sabemos exatamente o que esses valores representam. Já quando eu contextualizo e digo "O paciente está com 39 °C de temperatura corporal", esses dados organizados geram significado e se transformam em informação.',
      'O <strong>conhecimento</strong> envolve interpretar essa informação com base em conhecimentos anteriores, experiências e regras que ajudam a compreender uma situação. Nesse exemplo, seria entender que uma temperatura corporal de 39 °C representa uma febre elevada e que é necessário avaliar o quadro considerando outros sintomas e as condições do paciente. A partir disso, podemos tomar uma <strong>ação</strong> baseada nessa interpretação, como avaliar o paciente e definir a conduta adequada. Ou seja, o conhecimento não é a ação em si, mas aquilo que nos ajuda a decidir o que fazer.',
      'Ainda na aula de visualização, fomos apresentados ao cabra que ajudou a popularizar os gráficos estatísticos, William Playfair. Ele foi um engenheiro e economista político escocês e trabalhou como desenhista técnico para ninguém menos que James Watt, conhecido por suas contribuições para o desenvolvimento do motor a vapor. Playfair foi um dos pioneiros na utilização de gráficos para representar dados econômicos e históricos. Em <em>The Commercial and Political Atlas</em> (1786), utilizou gráficos de barras e linhas para ilustrar dados econômicos da Inglaterra, como importações e exportações. Já em <em>Statistical Breviary</em> (1801), utilizou gráficos de setores, conhecidos como gráficos de pizza, para representar proporções e distribuições territoriais. É interessante perceber como algo que hoje parece tão simples, como olhar para um gráfico e comparar valores, ajudou a transformar a maneira como as pessoas analisam e interpretam dados.',
      'Na aula de fundamentos de programação, entramos naquela parte mais teórica do pensamento computacional, que envolve aprender a analisar problemas e pensar em soluções antes mesmo de começar a escrever códigos. Os quatro conceitos principais que estudamos foram decomposição, reconhecimento de padrões, abstração e elaboração de algoritmos.',
      '<strong>Decomposição</strong> - Consiste em quebrar um problema complexo em partes menores e mais fáceis de resolver. Por exemplo, se eu fosse desenvolver um sistema de cadastro de alunos, poderia dividir o problema em etapas como cadastrar os alunos, registrar as notas, calcular as médias e consultar os resultados.',
      '<strong>Reconhecimento de padrões</strong> - Consiste em identificar semelhanças, repetições ou regularidades que possam ajudar na resolução de problemas. Por exemplo, observar notas de vários alunos e identificar padrões de desempenho ou dificuldades recorrentes.',
      '<strong>Abstração</strong> - Envolve focar apenas nos elementos essenciais de um problema, ignorando detalhes irrelevantes que possam gerar ruído. A ideia é conseguir criar modelos simplificados da realidade para facilitar a compreensão e a resolução de problemas. Por exemplo, em um sistema de cadastro de alunos, podemos considerar informações como nome, matrícula e notas, sem precisar representar todos os detalhes da vida pessoal de cada aluno.',
      '<strong>Algoritmos</strong> - São sequências finitas de instruções lógicas, claras e organizadas que servem para resolver um problema ou executar uma tarefa específica. Essas instruções não precisam necessariamente estar escritas em uma linguagem de programação, podendo ser representadas em linguagem natural, pseudocódigo ou fluxogramas. O importante é que exista uma sequência lógica de passos para chegar a uma solução.',
      'Outro conceito importante é a <strong>lógica de programação</strong>, que consiste em organizar instruções e condições de maneira coerente para resolver um problema. Pelo que entendi, antes de aprender os comandos de uma linguagem, precisamos desenvolver a capacidade de pensar em como resolver o problema. Afinal, não adianta conhecer vários comandos se não soubermos quando e como utilizá-los para chegar ao resultado desejado.',
      'Também é importante entender a diferença entre linguagens de programação de alto e baixo nível. As <strong>linguagens de baixo nível</strong> são mais próximas do funcionamento do hardware e das instruções executadas pelo processador. Um exemplo é a linguagem de máquina, que utiliza instruções representadas em bits, e outro é Assembly, que utiliza instruções simbólicas específicas da arquitetura do computador. Já as <strong>linguagens de alto nível</strong> possuem maior nível de abstração, permitindo que o programador escreva instruções de maneira mais próxima do raciocínio humano, sem precisar lidar diretamente com a maioria dos detalhes do hardware. Alguns exemplos são Python, Java, C# e JavaScript. Isso não significa que uma linguagem de alto nível seja sempre melhor ou mais rápida, mas que ela facilita o desenvolvimento ao esconder boa parte da complexidade interna do computador.',
      'Essa parte se relaciona diretamente com a abstração que estudamos no pensamento computacional. Assim como simplificamos um problema para trabalhar apenas com o que importa, as linguagens de alto nível permitem que nos concentremos mais na lógica da solução do que nos detalhes de como o processador executa cada instrução.',
      'Nas disciplinas iniciais, vamos trabalhar principalmente com <strong>Python e SQL</strong>, duas linguagens de alto nível que possuem finalidades diferentes. O Python é uma linguagem de programação de propósito geral, utilizada para desenvolver aplicações, automatizar tarefas, realizar cálculos e processar dados. Por exemplo, podemos utilizar Python para calcular a média de notas de uma turma, filtrar valores ou automatizar operações que seriam trabalhosas manualmente.',
      'Já o <strong>SQL (Structured Query Language)</strong> é uma linguagem declarativa utilizada principalmente para consultar e manipular dados armazenados em bancos de dados relacionais. Com comandos como SELECT, INSERT, UPDATE e DELETE, podemos consultar, inserir, atualizar e excluir registros. Por exemplo, podemos utilizar SQL para consultar todos os alunos que obtiveram nota igual ou superior a 7 em uma tabela. A diferença é que, em vez de descrever cada passo da execução, declaramos quais dados queremos obter, e o sistema gerenciador do banco de dados determina como executar a consulta.',
      'A relação entre essas linguagens e os fundamentos do processamento de dados é bem direta. Podemos utilizar SQL para consultar os dados armazenados em um banco de dados e Python para realizar cálculos, aplicar regras e processar os resultados. Depois, podemos utilizar a visualização de dados para transformar esses resultados em gráficos e facilitar sua interpretação. Dessa forma, começamos a entender como os conceitos estudados nas diferentes disciplinas se complementam e como os dados podem ser transformados em informações úteis por meio dos sistemas computacionais.'
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

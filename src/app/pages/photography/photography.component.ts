import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/language.service';

type PhotoCollection = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  photos: string[];
};

const copies = (folder: string, last: number, missing: number[] = []) => [
  `/photos/${folder}/image.png`,
  ...Array.from({ length: last }, (_, index) => index === 0 ? 'image copy.png' : `image copy ${index + 1}.png`)
    .filter((name, index) => !missing.includes(index + 1))
    .map((name) => `/photos/${folder}/${name}`)
];

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})
export class PhotographyComponent {
  readonly language = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  readonly collections: PhotoCollection[] = [
    {
      slug: 'boston-fine-art',
      title: 'Belas Artes de Boston',
      description: 'Um passeio pela arte, detalhes e silêncio em Boston.',
      cover: '/photos/BostonFineArt/image copy 24.png',
      coverWidth: 1154,
      coverHeight: 893,
      photos: ['/photos/BostonFineArt/IMG_1407.jpg', '/photos/BostonFineArt/IMG_1408.jpg', ...copies('BostonFineArt', 26)]
    },
    {
      slug: 'zoologico',
      title: 'Um dia no zoológico',
      description: 'Animais, encontros e cenas de um dia no zoológico.',
      cover: '/photos/Zoo/image copy 5.png',
      coverWidth: 1177,
      coverHeight: 1471,
      photos: [...copies('Zoo', 5, [4])]
    },
    {
      slug: 'aquario',
      title: 'Aquário',
      description: 'Luz, movimento e vida do outro lado do vidro.',
      cover: '/photos/aquarium/penguim-web.jpg',
      coverWidth: 1080,
      coverHeight: 1440,
      photos: ['bigBenFake.jpeg', 'penguim-web.jpg', 'turtle.jpeg', 'whale.jpeg', 'image copy 4.png'].map(name => `/photos/aquarium/${name}`)
    },
    {
      slug: 'brasil',
      title: 'Brasil',
      description: 'Após 5 anos e milhares de quilômetros, um olhar sobre o Brasil.',
      cover: '/photos/brazil/IMG_9429.jpg',
      coverWidth: 2400,
      coverHeight: 1800,
      photos: [
        'IMG_9429.jpg',
        'IMG_9506.jpg',
        'IMG_9508.jpg',
        'image-rotated.jpg',
        'image copy.png',
        'image-copy-2-rotated.jpg',
        'image-copy-3-rotated.jpg'
      ].map(name => `/photos/brazil/${name}`)
    },
    {
      slug: 'paisagens',
      title: 'Paisagens',
      description: 'Horizontes, caminhos e pausas ao ar livre.',
      cover: '/photos/landscape/image copy 14.png',
      coverWidth: 2400,
      coverHeight: 1800,
      photos: ['IMG_2731.jpg', 'IMG_2737.jpg', 'IMG_4832.jpg', 'IMG_7927.jpg', 'IMG_9132.jpg', 'IMG_9573.jpg']
        .map(name => `/photos/landscape/${name}`).concat(copies('landscape', 14))
    },
    {
      slug: 'cotidiano',
      title: 'O cotidiano',
      description: 'Coisas comuns que mereceram um segundo olhar.',
      cover: '/photos/ordnary/IMG_8515.jpg',
      coverWidth: 2400,
      coverHeight: 1800,
      photos: ['IMG_3916.jpg', 'IMG_7248.jpg', 'IMG_8515.jpg'].map(name => `/photos/ordnary/${name}`).concat(copies('ordnary', 3))
    }
  ];

  readonly selectedCollection = computed(() => {
    const slug = this.params().get('slug');
    return slug ? this.collections.find(collection => collection.slug === slug) : undefined;
  });
}

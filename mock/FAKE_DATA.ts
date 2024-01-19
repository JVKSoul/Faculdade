import { IProduct } from "./interface";

const FAKE_DATA: IProduct[] = [
  {
    name: "Dell XPS i1200-M10D",
    price: 5000,
    description:
      "Este desktop da Dell é equipado com um processador Intel Core i7 de 12ª geração, 16GB de RAM e um SSD de 512GB. Ele oferece excelente desempenho para tarefas de trabalho e estudo.",
    thumb:
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_1_large.jpg",
    photos: [
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_2_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_3_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_4_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_5_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_6_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_7_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_8_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_9_large.jpg",
      "https://images-americanas.b2w.io/produtos/5404172731/imagens/computador-desktop-dell-xps-i1200-m10d-12-geracao-intel-core-i5-8gb-256gb-ssd-windows-11-com-monitor/5404172731_10_large.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "Dell",
      "Intel Core i7",
      "16GB RAM",
      "SSD 512GB",
    ],
  },
  {
    name: "PC Gamer Completo Skill Cool",
    price: 6000,
    description:
      "Este PC gamer completo da Skill é equipado com um processador Intel Core i5 de 11ª geração, 16GB de RAM, uma placa de vídeo NVIDIA GeForce RTX 3060 e um SSD de 1TB. Ele é perfeito para jogos de alta performance.",
    thumb:
      "https://images-americanas.b2w.io/produtos/7193404801/imagens/pc-gamer-completo-3green-play-intel-core-i7-16gb-ram-placa-de-video-geforce-4gb-ssd-256gb-monitor-20-75hz-fonte-500w-3gp-055/7193404801_1_large.jpg",
    photos: [
      "https://images-americanas.b2w.io/produtos/7193404801/imagens/pc-gamer-completo-3green-play-intel-core-i7-16gb-ram-placa-de-video-geforce-4gb-ssd-256gb-monitor-20-75hz-fonte-500w-3gp-055/7193404801_1_large.jpg",
      "https://images-americanas.b2w.io/produtos/7193404801/imagens/pc-gamer-completo-3green-play-intel-core-i7-16gb-ram-placa-de-video-geforce-4gb-ssd-256gb-monitor-20-75hz-fonte-500w-3gp-055/7193404801_2_large.jpg",
      "https://images-americanas.b2w.io/produtos/7193404801/imagens/pc-gamer-completo-3green-play-intel-core-i7-16gb-ram-placa-de-video-geforce-4gb-ssd-256gb-monitor-20-75hz-fonte-500w-3gp-055/7193404801_3_large.jpg",
      "https://images-americanas.b2w.io/produtos/7193404801/imagens/pc-gamer-completo-3green-play-intel-core-i7-16gb-ram-placa-de-video-geforce-4gb-ssd-256gb-monitor-20-75hz-fonte-500w-3gp-055/7193404801_4_large.jpg",
      "https://images-americanas.b2w.io/produtos/7193404801/imagens/pc-gamer-completo-3green-play-intel-core-i7-16gb-ram-placa-de-video-geforce-4gb-ssd-256gb-monitor-20-75hz-fonte-500w-3gp-055/7193404801_5_large.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "PC Gamer",
      "Skill",
      "Intel Core i5",
      "16GB RAM",
      "NVIDIA GeForce RTX 3060",
      "SSD 1TB",
    ],
  },
  {
    name: "PC Gamer ICC Core i5",
    price: 4000,
    description:
      "Este PC gamer da ICC é equipado com um processador Intel Core i5 de 11ª geração, 16GB de RAM, uma placa de vídeo NVIDIA GeForce GTX 1660 e um SSD de 512GB. Ele é perfeito para jogos de médio a alto desempenho.",
    thumb:
      "https://images-americanas.b2w.io/produtos/235480221/imagens/pc-gamer-icc-kt2541s-intel-core-i5-3-20-ghz-4gb-500gb-gt710-2gb-hdmi-full-hd/235480221_1_large.jpg",
    photos: [
      "https://images-americanas.b2w.io/produtos/235480221/imagens/pc-gamer-icc-kt2541s-intel-core-i5-3-20-ghz-4gb-500gb-gt710-2gb-hdmi-full-hd/235480221_1_large.jpg",
      "https://images-americanas.b2w.io/produtos/235480221/imagens/pc-gamer-icc-kt2541s-intel-core-i5-3-20-ghz-4gb-500gb-gt710-2gb-hdmi-full-hd/235480221_2_large.jpg",
      "https://images-americanas.b2w.io/produtos/235480221/imagens/pc-gamer-icc-kt2541s-intel-core-i5-3-20-ghz-4gb-500gb-gt710-2gb-hdmi-full-hd/235480221_3_large.jpg",
      "https://images-americanas.b2w.io/produtos/235480221/imagens/pc-gamer-icc-kt2541s-intel-core-i5-3-20-ghz-4gb-500gb-gt710-2gb-hdmi-full-hd/235480221_4_large.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "PC Gamer",
      "ICC",
      "Intel Core i5",
      "16GB RAM",
      "NVIDIA GeForce GTX 1660",
      "SSD 512GB",
    ],
  },
  {
    name: "Desktop Lenovo V50S",
    price: 2000,
    description:
      "Este desktop da Lenovo é equipado com um processador Intel Core i5 de 11ª geração, 8GB de RAM e um SSD de 256GB. Ele é perfeito para tarefas de trabalho e estudo.",
    thumb:
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_1_large.jpg",
    photos: [
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_1_large.jpg",
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_2_large.jpg",
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_3_large.jpg",
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_4_large.jpg",
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_4_large.jpg",
      "https://images-americanas.b2w.io/produtos/5399570928/imagens/computador-lenovo-v50s-intel-core-i3-10100-4gb-hd-500gb-freedos-11ha000cbr/5399570928_5_large.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "Lenovo",
      "Intel Core i5",
      "8GB RAM",
      "SSD 256GB",
    ],
  },
  {
    name: "PC Gamer Completo Skill Cool",
    price: 7000,
    description:
      "Este PC gamer completo da Skill é equipado com um processador Intel Core i7 de 11ª geração, 16GB de RAM, uma placa de vídeo NVIDIA GeForce RTX 3070 e um SSD de 1TB. Ele é perfeito para jogos de alta performance.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "PC Gamer",
      "Skill",
      "Intel Core i7",
      "16GB RAM",
      "NVIDIA GeForce RTX 3070",
      "SSD 1TB",
    ],
  },
  {
    name: "Dell Inspiron 24 5000",
    price: 3000,
    description:
      "Este all-in-one da Dell é equipado com um processador Intel Core i5 de 11ª geração, 16GB de RAM e um SSD de 512GB. Ele é perfeito para tarefas de trabalho e estudo, além de ser compacto e fácil de transportar.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: [
      "computador",
      "all-in-one",
      "Dell",
      "Intel Core i5",
      "16GB RAM",
      "SSD 512GB",
    ],
  },
  {
    name: "Lenovo ThinkCentre M920 Tiny",
    price: 2500,
    description:
      "Este desktop da Lenovo é compacto e fácil de transportar. Ele é equipado com um processador Intel Core i5 de 11ª geração, 16GB de RAM e um SSD de 512GB. Ele é perfeito para tarefas de trabalho e estudo.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "Lenovo",
      "Intel Core i5",
      "16GB RAM",
      "SSD 512GB",
    ],
  },
  {
    name: "HP Pavilion Gaming Desktop",
    price: 4000,
    description:
      "Este desktop da HP é equipado com um processador Intel Core i7 de 11ª geração, 16GB de RAM, uma placa de vídeo NVIDIA GeForce RTX 3060 e um SSD de 1TB. Ele é perfeito para jogos de alta performance.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "HP",
      "Intel Core i7",
      "16GB RAM",
      "NVIDIA GeForce RTX 3060",
      "SSD 1TB",
    ],
  },
  {
    name: "Acer Aspire TC-895-UA92",
    price: 2000,
    description:
      "Este desktop da Acer é equipado com um processador Intel Core i5 de 11ª geração, 8GB de RAM e um SSD de 512GB. Ele é perfeito para tarefas de trabalho e estudo.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "Acer",
      "Intel Core i5",
      "8GB RAM",
      "SSD 512GB",
    ],
  },
  {
    name: "Apple Mac Mini",
    price: 5000,
    description:
      "Este desktop da Apple é compacto e fácil de transportar. Ele é equipado com um processador Apple M1, 16GB de RAM e um SSD de 512GB. Ele é perfeito para tarefas de trabalho e estudo.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: [
      "computador",
      "desktop",
      "Apple",
      "Apple M1",
      "16GB RAM",
      "SSD 512GB",
    ],
  },
  {
    name: "Lenovo IdeaCentre 5i",
    price: 1099,
    description:
      "Este desktop é equipado com um processador Intel Core i7 de 11ª geração, 16GB de RAM, uma placa de vídeo NVIDIA GeForce GTX 1660 Super e um SSD de 512GB. Ele oferece excelente desempenho para tarefas de trabalho e estudo.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "Dell G5 Gaming Desktop",
    price: 1199,
    description:
      "Este desktop é ideal para jogos e entretenimento. Com uma placa de vídeo NVIDIA GeForce GTX 1660 Ti, você pode desfrutar de imagens nítidas e vibrantes. O processador Intel Core i5 oferece desempenho rápido e eficiente. O armazenamento de 512 GB permite que você armazene todos os seus arquivos importantes.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "HP Pavilion All-in-One",
    price: 1299,
    description:
      "Este desktop é perfeito para quem busca um dispositivo elegante e poderoso. Com um processador Intel Core i7, ele oferece desempenho rápido e eficiente. A tela Full HD de 23,8 polegadas oferece imagens nítidas e vibrantes. O armazenamento de 1 TB permite que você armazene todos os seus arquivos importantes.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "Acer Aspire TC-895-UA92",
    price: 549,
    description:
      "Este desktop é perfeito para quem busca um dispositivo versátil e poderoso. Com um processador Intel Core i5, ele oferece desempenho rápido e eficiente. A placa de vídeo Intel UHD Graphics 630 permite que você execute tarefas gráficas sem problemas. O armazenamento de 512 GB permite que você armazene todos os seus arquivos importantes.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "Lenovo ThinkCentre M920 Tiny",
    price: 1199,
    description:
      "Este desktop é perfeito para quem busca um dispositivo compacto e poderoso. Com um processador Intel Core i7, ele oferece desempenho rápido e eficiente. O armazenamento de 512 GB permite que você armazene todos os seus arquivos importantes.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "Dell Inspiron 24 5000",
    price: 1099,
    description:
      "Este desktop é perfeito para quem busca um dispositivo elegante e poderoso. Com um processador Intel Core i5, ele oferece desempenho rápido e eficiente. A tela Full HD de 23,8 polegadas oferece imagens nítidas e vibrantes. O armazenamento de 1 TB permite que você armazene todos os seus arquivos importantes.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "Dell XPS 8940",
    price: 1399,
    description:
      "Este desktop é perfeito para quem busca um dispositivo poderoso e elegante. Com um processador Intel Core i7, ele oferece desempenho rápido e eficiente. A placa de vídeo NVIDIA GeForce GTX 1660 Ti permite que você execute tarefas gráficas sem problemas. O armazenamento de 512 GB permite que você armazene todos os seus arquivos importantes.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
  {
    name: "Acer Aspire C24-963-UA91",
    price: 1599,
    description:
      "Este desktop é perfeito para quem busca um dispositivo compacto e poderoso. Com um processador Intel Core i3, ele oferece desempenho rápido e eficiente. A tela Full HD de 23,8 polegadas oferece imagens nítidas e vibrantes. O armazenamento de 500 gb de ssd.",
    thumb: "https://i.imgur.com/1a2b3c4.jpg",
    photos: [
      "https://i.imgur.com/1a2b3c4.jpg",
      "https://i.imgur.com/5d6e7f8.jpg",
      "https://i.imgur.com/9g8h1i2.jpg",
    ],
    filter: ["computador", "notebook"],
  },
];

export default FAKE_DATA;

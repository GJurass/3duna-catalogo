import image001 from './catalog-images/001'
import image002 from './catalog-images/002'
import image003 from './catalog-images/003'
import image004 from './catalog-images/004'
import image005 from './catalog-images/005'
import image006 from './catalog-images/006'
import image007 from './catalog-images/007'
import image008 from './catalog-images/008'
import image009 from './catalog-images/009'
import image010 from './catalog-images/010'
import image011 from './catalog-images/011'
import image012 from './catalog-images/012'
import image013 from './catalog-images/013'
import image014 from './catalog-images/014'
import image015 from './catalog-images/015'
import image016 from './catalog-images/016'
import image017 from './catalog-images/017'
import image018 from './catalog-images/018'
import image019 from './catalog-images/019'
import image020 from './catalog-images/020'

const images: Record<string, string> = {
  '001': image001,
  '002': image002,
  '003': image003,
  '004': image004,
  '005': image005,
  '006': image006,
  '007': image007,
  '008': image008,
  '009': image009,
  '010': image010,
  '011': image011,
  '012': image012,
  '013': image013,
  '014': image014,
  '015': image015,
  '016': image016,
  '017': image017,
  '018': image018,
  '019': image019,
  '020': image020,
}

export type Product = {
  slug: string
  code: string
  name: string
  image: string
  images?: string[]
  description: string
  price?: string
  priceNote?: string
}

const productOverrides: Record<string, Partial<Product>> = {
  '001': {
    name: 'Tapa Buraco para Porta de Máquina de Café',
    image: '/products/001-3.png',
    images: [
      '/products/001-3.png',
      '/products/001-1.png',
      '/products/001-2.png',
      '/products/001-demo.mp4'
    ],
    description: 'Peça desenvolvida para fechar a abertura existente em portas de máquinas de café que originalmente possuem módulo de pagamento. Permite tampar o espaço e aplicar adesivo sobre a superfície, deixando o acabamento mais uniforme, sem relevo aparente. Compatível com modelos antigos de Onix tradicional, Jade solúvel, Jade grão e Onix tradicional grão.',
    price: 'R$ 13,90'
  },
  '002': {
    name: 'Caixinha Customizada para Circuitos',
    image: '/products/002-2.png',
    images: [
      '/products/002-2.png',
      '/products/002-1.png',
      '/products/002-3.png'
    ],
    description: 'Peça desenvolvida para armazenar e proteger pequenos circuitos elétricos. Pode ser fixada diretamente na máquina, ajudando a manter os componentes organizados, protegidos e oferecendo mais segurança para a operação. Dimensões: 5,5 cm de comprimento × 3,5 cm de largura × 2 cm de profundidade.',
    price: 'R$ 13,90'
  },
  '003': {
    name: 'Caixinha Customizada para Circuitos sem Parede',
    image: '/products/003-1.png',
    images: [
      '/products/003-1.png',
      '/products/003-2.png',
      '/products/003-3.png'
    ],
    description: 'Peça desenvolvida para acomodar e proteger pequenos circuitos elétricos, com estrutura aberta para facilitar a passagem de fios, conexões e o acesso aos componentes. Pode ser fixada diretamente na máquina, mantendo a instalação mais organizada e segura. Dimensões: 7 cm de comprimento × 4 cm de largura × 2,5 cm de profundidade.',
    price: 'R$ 13,90'
  },
  '004': {
    name: 'Gaveta de Aspiração',
    image: '/products/004-1.png',
    images: [
      '/products/004-1.png',
      '/products/004-2.png',
      '/products/004-3.png'
    ],
    description: 'Peça desenvolvida para o sistema de aspiração da máquina de café, proporcionando encaixe prático e melhor organização do conjunto interno. Compatível com máquinas de café Lei Sá e Gaia Espresso Bianchi I, com encaixe universal padrão DIRIM.',
    price: 'R$ 17,60'
  },
  '005': {
    name: 'Tampa para Torre de Copos',
    image: '/products/005-1.png',
    images: [
      '/products/005-1.png',
      '/products/005-2.png'
    ],
    description: 'Tampa de reposição para torre de copos, desenvolvida para garantir melhor acabamento e proteção do compartimento. Compatível com as máquinas LEI 400 e BVM 952 Bianchi.',
    price: 'R$ 33,00'
  },
  '006': {
    image: '/products/006-cover.png',
    images: [
      '/products/006-cover.png',
      '/products/006-2.png',
      '/products/006-1.png',
      '/products/030-1.png',
      '/products/030-2.png',
      '/products/006-real.jpg'
    ],
    description: 'Código 006 e 030'
  },
  '007': {
    image: '/products/007-1.png',
    images: [
      '/products/007-1.png',
      '/products/007-2.png'
    ],
    price: 'R$ 17,80'
  },
  '008': {
    name: 'Calha Vend -',
    image: '/products/008-1.png',
    images: [
      '/products/008-1.png',
      '/products/008-2.png',
      '/products/008-3.png'
    ],
    price: 'R$ 8,90',
    priceNote: 'a unidade',
    description: 'Compatível com a Vend'
  },
  '009': {
    name: 'Caixa de Aspiração BVM 952',
    image: '/products/009-1.png',
    images: [
      '/products/009-1.png',
      '/products/009-2.png'
    ],
    price: 'R$ 38,00',
    priceNote: 'o conjunto',
    description: 'Caixa de aspiração desenvolvida para reposição e organização do sistema interno da máquina. Compatível com a máquina de café Bianchi BVM 952.'
  },
  '010': {
    name: 'Calha Vend +',
    image: '/products/010-1.png',
    images: [
      '/products/010-1.png',
      '/products/010-2.png'
    ],
    description: 'Compatível com a Vend',
    price: 'R$ 8,90',
    priceNote: 'a unidade'
  },
  '012': {
    image: '/products/012-1.png',
    images: [
      '/products/012-1.png',
      '/products/012-2.png',
      '/products/012-3.png'
    ]
  },
  '013': {
    image: '/products/013-1.png',
    images: [
      '/products/013-1.png',
      '/products/013-2.png',
      '/products/013-3.png'
    ]
  },
  '014': {
    image: '/products/014-1.png',
    images: [
      '/products/014-1.png',
      '/products/014-2.png',
      '/products/014-3.png'
    ]
  },
  '015': {
    image: '/products/015-1.png',
    images: [
      '/products/015-1.png',
      '/products/015-2.png',
      '/products/015-3.png'
    ]
  },
  '016': {
    image: '/products/016-1.png',
    images: [
      '/products/016-1.png',
      '/products/016-2.png'
    ]
  },
  '017': {
    image: '/products/017-2.png',
    images: [
      '/products/017-2.png',
      '/products/017-1.png',
      '/products/017-3.png'
    ]
  },
  '018': {
    image: '/products/018-3.png',
    images: [
      '/products/018-3.png',
      '/products/018-2.png',
      '/products/018-1.png'
    ]
  },
  '019': {
    image: '/products/019-3.png',
    images: [
      '/products/019-3.png',
      '/products/019-2.png',
      '/products/019-1.png'
    ]
  },
  '020': {
    name: 'Calha',
    image: '/products/020-1.png',
    images: [
      '/products/020-1.png',
      '/products/020-2.png'
    ],
    description: 'Compatível com máquinas de café Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM.',
    price: 'R$ 21,75'
  },
  '021': {
    name: 'Calha Esquerda LEI Sá',
    image: '/products/021-1.png',
    images: [
      '/products/021-1.png',
      '/products/021-2.png'
    ],
    description: 'Calha esquerda desenvolvida para reposição do conjunto da máquina. Compatível exclusivamente com o pote utilizado nas máquinas LEI Sá, garantindo encaixe adequado e funcionamento correto.',
    price: 'R$ 15,00'
  },
  '022': {
    name: 'Calha Direita LEI Sá',
    image: '/products/022-1.png',
    images: [
      '/products/022-1.png',
      '/products/022-2.png'
    ],
    description: 'Calha direita desenvolvida para reposição do conjunto da máquina. Compatível exclusivamente com o pote utilizado nas máquinas LEI Sá, garantindo encaixe adequado e funcionamento correto.',
    price: 'R$ 15,00'
  },
  '023': {
    name: 'Tampa da Calha Esquerda',
    image: '/products/023-1.png',
    images: [
      '/products/023-1.png',
      '/products/023-2.png',
      '/products/023-3.png'
    ],
    description: 'Compatível com máquinas de café Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM.',
    price: 'R$ 5,90',
  },
  '024': {
    name: 'Tampa da Calha Direita',
    image: '/products/024-1.png',
    images: [
      '/products/024-1.png',
      '/products/024-2.png',
      '/products/024-3.png'
    ],
    description: 'Compatível com máquinas de café Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM.',
    price: 'R$ 5,90',
  },
  '025': {
    name: 'Presilhas Salva Pote',
    image: '/products/025-1.png',
    images: [
      '/products/025-1.png',
      '/products/025-2.png',
      '/products/025-3.png',
      '/products/026-1.png',
      '/products/026-2.png',
    ],
    description: 'Compatível com potes de café/cacau/leite e afins Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM. Peça 025 e 026. Vendidas em pares.',
    price: '19,60',
    priceNote: 'o par'
  },
  '027': {
    name: 'Alongador da calha, separador de leite',
    image: '/products/027-1.png',
    images: [
      '/products/027-1.png',
      '/products/027-2.png',
      '/products/027-3.png'
    ],
    description: 'Compatível com máquina Vend. Encaixe universal padrão DIRIM.',
    price: 'R$ 7,90'
  },
  '028': {
    name: 'Anel do Copo batedor',
    image: '/products/028-1.png',
    images: [
      '/products/028-1.png',
      '/products/028-2.png'
    ],
    description: 'Anel de vedação do Copo de mistura. Compatível com máquinas de café Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM.',
    price: 'R$ 10,45'
  },
  '029': {
    name: 'Bandeja Ruby Nova',
    image: '/products/029-1.png',
    images: [
      '/products/029-1.png',
      '/products/029-2.png',
      '/products/029-3.png'
    ],
    description: 'Compatível com a máquina Ruby',
    price: 'R$ 23,90'
  },
  '031': {
    name: 'Trava Rosca do Pote',
    image: '/products/031-1.png',
    images: [
      '/products/031-1.png',
      '/products/031-2.png'
    ],
    description: 'Compatível com potes de café/cacau/leite e afins Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM.',
    price: 'R$ 18,90',
  },
  '033': {
    name: 'Caixa de Aspiração',
    image: '/products/033-1.png',
    images: [
      '/products/033-1.png',
      '/products/033-2.png',
      '/products/033-3.png'
    ],
    description: 'Compatível com máquinas de café Lei Sá e Gaia Expresso Bianchi. Encaixe universal padrão DIRIM.',
    price: 'R$ 31,90',
  },
  '034': {
    name: 'Bandeja de Pingo',
    image: '/products/034-1.png',
    images: [
      '/products/034-1.png',
      '/products/034-2.png',
      '/products/034-3.png'
    ],
    description: 'Compatível com LEI 400 e BVN952 Bianchi',
    price: 'R$ 36,00',
  }
}

export const products: Product[] = Array.from({ length: 34 }, (_, index) => {
  const code = String(index + 1).padStart(3, '0')
  const override = productOverrides[code] ?? {}

  return {
    slug: `peca-${code}`,
    code,
    name: `Peça ${code}`,
    image: images[code] ?? '/products/product-placeholder.svg',
    description: 'Peça do catálogo 3 Duna. Mais informações sobre este modelo serão adicionadas em breve.',
    ...override
  }
}).filter(product => !['011', '026', '030', '032'].includes(product.code))

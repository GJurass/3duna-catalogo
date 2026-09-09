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
    image: '/products/001-3.png',
    images: [
      '/products/001-3.png',
      '/products/001-1.png',
      '/products/001-2.png'
    ]
  },
  '002': {
    image: '/products/002-2.png',
    images: [
      '/products/002-2.png',
      '/products/002-1.png',
      '/products/002-3.png'
    ],
    price: 'R$ 8,90'
  },
  '003': {
    image: '/products/003-1.png',
    images: [
      '/products/003-1.png',
      '/products/003-2.png',
      '/products/003-3.png'
    ],
    price: 'R$ 8,90'
  },
  '004': {
    image: '/products/004-1.png',
    images: [
      '/products/004-1.png',
      '/products/004-2.png',
      '/products/004-3.png'
    ]
  },
  '005': {
    image: '/products/005-1.png',
    images: [
      '/products/005-1.png',
      '/products/005-2.png'
    ]
  },
  '006': {
    image: '/products/006-2.png',
    images: [
      '/products/006-2.png',
      '/products/006-1.png'
    ]
  },
  '007': {
    price: 'R$ 17,80'
  },
  '008': {
    name: 'Calha',
    image: '/products/008-1.png',
    images: [
      '/products/008-1.png',
      '/products/008-2.png',
      '/products/008-3.png'
    ],
    price: 'R$ 21,75',
    priceNote: 'a unidade',
    description: 'Calha do catálogo 3 Duna. Valor por unidade. Mais informações sobre medidas, material e disponibilidade serão adicionadas em breve.'
  },
  '009': {
    image: '/products/009-1.png',
    images: [
      '/products/009-1.png',
      '/products/009-2.png'
    ]
  },
  '011': {
    image: '/products/011-2.png',
    images: [
      '/products/011-2.png',
      '/products/011-1.png',
      '/products/011-3.png'
    ]
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
  '024': {
    image: '/products/024-1.png',
    images: [
      '/products/024-1.png',
      '/products/024-2.png',
      '/products/024-3.png'
    ]
  },
  '025': {
    image: '/products/025-1.png',
    images: [
      '/products/025-1.png',
      '/products/025-2.png',
      '/products/025-3.png'
    ]
  },
  '026': {
    image: '/products/026-1.png',
    images: [
      '/products/026-1.png',
      '/products/026-2.png'
    ]
  },
  '027': {
    image: '/products/027-1.png',
    images: [
      '/products/027-1.png',
      '/products/027-2.png',
      '/products/027-3.png'
    ]
  },
  '028': {
    image: '/products/028-1.png',
    images: [
      '/products/028-1.png',
      '/products/028-2.png'
    ]
  },
  '029': {
    image: '/products/029-1.png',
    images: [
      '/products/029-1.png',
      '/products/029-2.png',
      '/products/029-3.png'
    ]
  },
  '030': {
    image: '/products/030-1.png',
    images: [
      '/products/030-1.png',
      '/products/030-2.png'
    ]
  },
  '031': {
    image: '/products/031-1.png',
    images: [
      '/products/031-1.png',
      '/products/031-2.png'
    ]
  },
  '033': {
    image: '/products/033-1.png',
    images: [
      '/products/033-1.png',
      '/products/033-2.png',
      '/products/033-3.png'
    ]
  },
  '034': {
    image: '/products/034-1.png',
    images: [
      '/products/034-1.png',
      '/products/034-2.png',
      '/products/034-3.png'
    ]
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
})

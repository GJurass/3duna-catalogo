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
  '002': {
    price: 'R$ 8,90'
  },
  '003': {
    price: 'R$ 8,90'
  },
  '007': {
    price: 'R$ 17,80'
  },
  '008': {
    name: 'Calha',
    price: 'R$ 21,75',
    priceNote: 'a unidade',
    description: 'Calha do catálogo 3 Duna. Valor por unidade. Mais informações sobre medidas, material e disponibilidade serão adicionadas em breve.'
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
  }
}

export const products: Product[] = Array.from({ length: 20 }, (_, index) => {
  const code = String(index + 1).padStart(3, '0')
  const override = productOverrides[code] ?? {}

  return {
    slug: `peca-${code}`,
    code,
    name: `Peça ${code}`,
    image: images[code],
    description: 'Peça do catálogo 3 Duna. Mais informações sobre este modelo serão adicionadas em breve.',
    ...override
  }
})

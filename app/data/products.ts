import images1 from './product-images-1'
import images2 from './product-images-2'
import images3 from './product-images-3'
import images4 from './product-images-4'

const images: Record<string, string> = { ...images1, ...images2, ...images3, ...images4 }

export type Product = {
  slug: string
  code: string
  name: string
  image: string
  description: string
}

export const products: Product[] = Array.from({ length: 20 }, (_, index) => {
  const code = String(index + 1).padStart(3, '0')
  return {
    slug: `peca-${code}`,
    code,
    name: `Peça ${code}`,
    image: images[code],
    description: 'Peça do catálogo 3 Duna. Mais informações sobre este modelo serão adicionadas em breve.'
  }
})

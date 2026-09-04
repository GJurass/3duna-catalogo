<script setup lang="ts">
import { products } from '~/data/products'

const route = useRoute()
const product = computed(() => products.find(p => p.slug === route.params.slug) ?? products[0])
const { add, slugs, hydrate } = useInterestCart()
onMounted(hydrate)
const saved = computed(() => slugs.value.includes(product.value.slug))
const related = computed(() => products.filter(p => p.slug !== product.value.slug).slice(0, 4))
useSeoMeta({ title: () => `${product.value.name} — 3 Duna` })
</script>

<template>
  <div class="page-shell detail-page">
    <SiteHeader />
    <main class="detail-main container">
      <p class="breadcrumb">CATÁLOGO / PEÇA {{ product.code }}</p>
      <section class="detail-hero">
        <div class="gallery">
          <ProductVisual :product="product" large />
        </div>
        <div class="product-info">
          <span class="eyebrow">CATÁLOGO 3 DUNA</span>
          <h1>{{ product.name }}</h1>
          <p class="muted small">Referência {{ product.code }}</p>
          <div v-if="product.price" class="detail-price-block">
            <strong class="detail-price">{{ product.price }}</strong>
            <span v-if="product.priceNote">{{ product.priceNote }}</span>
          </div>
          <p class="detail-description">{{ product.description }}</p>
          <button class="primary-button" :class="{ saved }" @click="add(product.slug)">
            {{ saved ? 'Peça salva no carrinho' : 'Quero essa peça' }}
          </button>
        </div>
      </section>
      <section class="trust-bar compact-trust">
        <div><b>01</b><strong>Carrinho de interesse</strong><span>Salve as peças que você gostou</span></div>
        <div><b>02</b><strong>Escolha com calma</strong><span>Veja cada peça em detalhe</span></div>
      </section>
      <section class="related">
        <h2>Você também pode gostar</h2>
        <p class="muted small">Outras peças do catálogo.</p>
        <div class="related-grid">
          <ProductCard v-for="item in related" :key="item.slug" :product="item" />
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'
defineProps<{ product: Product }>()
</script>

<template>
  <article class="product-card">
    <ProductVisual :product="product" />
    <div class="product-card-body">
      <span class="eyebrow">PEÇA {{ product.code }}</span>
      <h2>{{ product.name }}</h2>
      <p v-if="product.price" class="product-price">
        {{ product.price }}
        <span v-if="product.priceNote">{{ product.priceNote }}</span>
      </p>
      <div class="product-card-bottom">
        <NuxtLink :to="`/produto/${product.slug}`" class="ghost-button">Ver peça</NuxtLink>
      </div>
    </div>
  </article>
</template>

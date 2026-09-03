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
      <div class="product-card-bottom">
        <NuxtLink :to="`/produto/${product.slug}`" class="ghost-button">Ver peça</NuxtLink>
      </div>
    </div>
  </article>
</template>

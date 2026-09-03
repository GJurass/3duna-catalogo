<script setup lang="ts">
import type { Product } from '~/data/products'
defineProps<{ product: Product; large?: boolean }>()
</script>

<template>
  <div class="product-visual image-visual" :class="{ large }">
    <img class="product-photo" :src="product.image" :alt="product.name">
    <span v-if="large" class="object-code">DUNA / PEÇA {{ product.code }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'
const props = defineProps<{ product: Product; large?: boolean }>()

const activeIndex = ref(0)
const images = computed(() => props.product.images?.length ? props.product.images : [props.product.image])
const activeImage = computed(() => images.value[activeIndex.value] ?? props.product.image)
const hasCarousel = computed(() => props.large && images.value.length > 1)

watch(() => props.product.slug, () => {
  activeIndex.value = 0
})

function previousImage() {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length
}

function nextImage() {
  activeIndex.value = (activeIndex.value + 1) % images.value.length
}
</script>

<template>
  <div class="product-visual image-visual" :class="{ large, 'has-carousel': hasCarousel }">
    <Transition name="product-image" mode="out-in">
      <img :key="activeImage" class="product-photo" :src="activeImage" :alt="`${product.name} — vista ${activeIndex + 1}`">
    </Transition>
    <template v-if="hasCarousel">
      <button class="carousel-arrow previous" type="button" aria-label="Imagem anterior" @click="previousImage">‹</button>
      <button class="carousel-arrow next" type="button" aria-label="Próxima imagem" @click="nextImage">›</button>
      <div class="carousel-dots" aria-label="Selecionar imagem">
        <button
          v-for="(_, index) in images"
          :key="index"
          type="button"
          :class="{ active: index === activeIndex }"
          :aria-label="`Ver imagem ${index + 1}`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          @click="activeIndex = index"
        />
      </div>
    </template>
    <span v-if="large" class="object-code">DUNA / PEÇA {{ product.code }}</span>
  </div>
</template>

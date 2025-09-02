<template>
  <div class="hydrogen-bubbles-container">
    <div
      v-for="bubble in bubbles"
      :key="bubble.id"
      class="hydrogen-bubble"
      :style="{
        left: bubble.left + '%',
        animationDuration: bubble.duration + 's',
        animationDelay: bubble.delay + 's',
        width: bubble.size + 'px',
        height: bubble.size + 'px',
      }"
    >
      <span class="h2-text">H₂</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Bubble {
  id: number
  left: number
  duration: number
  delay: number
  size: number
}

const bubbles = ref<Bubble[]>([])

onMounted(() => {
  // Generate random bubbles
  for (let i = 0; i < 8; i++) {
    bubbles.value.push({
      id: i,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 30 + Math.random() * 40,
    })
  }
})
</script>

<style scoped>
.hydrogen-bubbles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.hydrogen-bubble {
  position: absolute;
  bottom: -100px;
  background: radial-gradient(circle at 30% 30%, rgba(76, 175, 80, 0.4), rgba(11, 77, 130, 0.2));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float-up 20s infinite cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(3px);
  border: 2px solid rgba(76, 175, 80, 0.3);
  box-shadow: 
    inset 0 2px 10px rgba(255, 255, 255, 0.3),
    0 0 20px rgba(76, 175, 80, 0.2);
}

.h2-text {
  color: rgba(14, 165, 233, 0.6);
  font-size: 0.7em;
  font-weight: bold;
}

@keyframes float-up {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  50% {
    transform: translateY(-50vh) translateX(30px) scale(1.1);
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(-110vh) translateX(-30px) scale(0.8);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hydrogen-bubble {
    animation: none;
    opacity: 0.3;
  }
}
</style>
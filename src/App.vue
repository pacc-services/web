<template>
  <div class="min-h-screen">
    <router-view />
    <!-- Tap-spawned bubbles - commented out -->
    <!-- <div
      v-for="bubble in tapBubbles"
      :key="bubble.id"
      class="tap-bubble"
      :style="{
        left: bubble.x + 'px',
        top: bubble.y + 'px',
        width: bubble.size + 'px',
        height: bubble.size + 'px',
      }"
      @animationend="removeBubble(bubble.id)"
    >
      <span class="h2-text">H₂</span>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// Tap bubble functionality commented out
/*
interface TapBubble {
  id: number
  x: number
  y: number
  size: number
}

const tapBubbles = ref<TapBubble[]>([])
let bubbleId = 0
let isScrolling = false
let scrollTimeout: number | null = null

// Detect scrolling
window.addEventListener('scroll', () => {
  isScrolling = true
  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = window.setTimeout(() => {
    isScrolling = false
  }, 150)
})

const handleTap = (event: MouseEvent) => {
  // Don't spawn bubbles if scrolling or clicking on interactive elements
  if (isScrolling) return
  const target = event.target as HTMLElement
  if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

  // Create a new bubble at tap location
  const bubble: TapBubble = {
    id: bubbleId++,
    x: event.clientX - 25, // Center the bubble
    y: event.clientY - 25,
    size: 50 + Math.random() * 30,
  }

  tapBubbles.value.push(bubble)
}

const removeBubble = (id: number) => {
  tapBubbles.value = tapBubbles.value.filter(b => b.id !== id)
}
*/
</script>

<style>
/* Tap bubble styles commented out */
/*
.tap-bubble {
  position: fixed;
  background: radial-gradient(circle at 30% 30%, rgba(92, 184, 92, 0.5), rgba(0, 73, 122, 0.3));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float-away 2s ease-out forwards;
  backdrop-filter: blur(3px);
  border: 2px solid rgba(92, 184, 92, 0.4);
  box-shadow:
    inset 0 2px 10px rgba(255, 255, 255, 0.4),
    0 0 20px rgba(92, 184, 92, 0.3);
  pointer-events: none;
  z-index: 100;
}

.tap-bubble .h2-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8em;
  font-weight: bold;
}

@keyframes float-away {
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }

  20% {
    transform: translateY(-20px) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateY(-200px) scale(0.8);
    opacity: 0;
  }
}
*/
</style>
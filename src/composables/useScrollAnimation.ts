import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const elements = ref<HTMLElement[]>([])
  const observer = ref<IntersectionObserver | null>(null)

  const observeElements = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            entry.target.classList.remove('animate-out')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach((el) => {
      observer.value?.observe(el)
    })
  }

  onMounted(() => {
    setTimeout(observeElements, 100)
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return {
    elements,
  }
}

export function useParallax() {
  const parallaxOffset = ref(0)

  const handleParallax = () => {
    const scrolled = window.scrollY
    parallaxOffset.value = scrolled * 0.5
  }

  onMounted(() => {
    window.addEventListener('scroll', handleParallax)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleParallax)
  })

  return {
    parallaxOffset,
  }
}

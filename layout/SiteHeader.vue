<template>
  <header class="header">
    <div class="header__white-section">
      <a href="#accueil" class="logo" aria-label="Accueil" />
    </div>
    
    <div class="header__blue-section">
      <button class="menu-button" aria-label="Menu" @click="toggleMenu">
        <Icon v-if="!isMenuOpen" name="heroicons:bars-3" size="24" />
        <Icon v-else name="heroicons:x-mark" size="24" />
      </button>
    </div>

    <nav class="nav-menu" :class="{ 'nav-menu--open': isMenuOpen }">
      <a
        v-for="item in menuItems" 
        :key="item.id"
        :href="item.id"
        class="nav-link"
        @click="handleClick"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const menuItems = [
  { label: 'LA CONSTELLATION FAMILIALE', id: '#constellation-familiale' },
  { label: 'MON PARCOURS', id: '#mon-parcours' },
  { label: 'ACTUALITÉS', id: '#actualites' },
  { label: 'TÉMOIGNAGES', id: '#temoignages' },
  { label: 'CONTACT', id: '#contact' }
]

const handleClick = (event: Event) => {
  event.preventDefault()
  const target = event.target as HTMLAnchorElement
  const id = target.getAttribute('href')
  const element = document.querySelector(id as string)
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    closeMenu()
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.header {
  display: flex;
  height: var(--header-height);
  background-color: var(--color-white);
  position: relative;
  box-shadow: 0 2px 4px rgba(29, 66, 145, 0.1);
  z-index: var(--z-index-header);
}

.header__white-section {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 10%;
}

.logo {
  display: flex;
  width: var(--logo-width);
  height: var(--logo-height);
  background-image: url('@/assets/images/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.header__blue-section {
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--header-blue-section-width-mobile) + var(--header-blue-section-margin-mobile) * 2);
}

.menu-button {
  background: none;
  border: none;
  color: var(--color-white);
  cursor: pointer;
  padding: 0.5rem;
}

.nav-menu {
  position: fixed;
  top: var(--header-height);
  right: 0;
  transform: translateX(6666px);
  background-color: var(--color-primary);
  width: 100dvw;
  padding: var(--nav-menu-padding);
  transition: transform 0.3s ease-in-out;
  z-index: var(--z-index-nav-menu);
}

.nav-menu--open {
  transform: translateX(0);
}

.nav-link {
  display: block;
  color: var(--color-white);
  text-decoration: none;
  margin-bottom: var(--nav-link-gap);
  font-family: var(--font-family-heading);
}

@media (width >= 1024px) {
  .header__blue-section {
    width: var(--header-blue-section-width-desktop);
  }

  .nav-menu {
    width: var(--nav-menu-width);
  }
}
</style> 
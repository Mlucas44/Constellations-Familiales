<template>
  <footer class="footer">
    <div class="footer__container">
      <nav class="footer__left">
        <a href="#" class="footer__link">Mentions légales</a> | 
        <a href="#" class="footer__link">Gestion des données personnelles</a>
      </nav>
      <div class="footer__right">
        <div class="footer__content">
          <small class="footer__copyright">Tous droits réservés</small>
          <div class="footer__logos">
            <figure class="footer__logo footer__logo--1" />
            <figure class="footer__logo footer__logo--2" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.footer {
  padding: 2rem 3rem 3rem;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-family-body);
  font-size: 0.875rem;
}

.footer__container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__copyright {
  display: block;
}

.footer__logos {
  display: flex;
  gap: 0.5rem;
}

.footer__logo {
  width: 4rem;
  height: 4rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.footer__logo--1 {
  background-image: url('@/assets/images/FooterLogo1.svg');
}

.footer__logo--2 {
  background-image: url('@/assets/images/FooterLogo2.svg');
}

@media (min-width: 768px) {
  .footer__container {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .footer__right {
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .footer__content {
    flex-direction: row;
    align-items: flex-end;
  }

  .footer__logos {
    margin-top: 0;
  }
}
</style>
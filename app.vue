<template>
  <div>
    <noscript>
      <strong style="color:red;display:block;text-align:center;padding:1rem;">
        Ce site nécessite JavaScript pour fonctionner correctement.
      </strong>
    </noscript>
    <SiteHeader />
    <AboutUsSection />
    <NewsSection />
    <TestimonialSection />
    <FaqSection />
    <ContactSection />
    <SiteFooter />
  </div>
</template>


<script setup>
import SiteHeader from "@/layout/SiteHeader.vue";
import AboutUsSection from "@/components/sections/AboutUsSection/AboutUsSection.vue";
import NewsSection from "@/components/sections/NewsSection/NewsSection.vue";
import TestimonialSection from "@/components/sections/TestimonialSection/TestimonialSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import FaqSection from "@/components/sections/FaqSection/FaqSection.vue";
import SiteFooter from "@/layout/SiteFooter.vue";
</script>

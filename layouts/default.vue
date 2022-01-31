<template>
  <div>
    <the-navbar></the-navbar>
    <Nuxt/>
    <the-footer></the-footer>
  </div>
</template>

<script>

import TheNavbar from '~/components/ui/TheNavbar.vue'
import TheFooter from '~/components/ui/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
  }  
}
</script>
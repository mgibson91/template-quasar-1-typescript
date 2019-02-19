<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">

    <q-dialog v-model="showModal">
      <q-card>
        <q-btn>Dingbats</q-btn>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      showModal: true,
    }
  }
};
</script>

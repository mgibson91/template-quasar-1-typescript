<template>
  <q-page class="flex flex-center">
    <test></test>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import Test from 'components/test';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Test },
})
export default class Index extends Vue {

}
</script>

<template>
  <q-page class="flex flex-center">
    <div id="background" class="flex-auto non-expanding-container-col justify-content-center align-items-center">
      <div class="centered-content display-flex-row">
        <p>Home page</p>
      </div>

      <!--<q-dialog v-model="showModal">-->
        <!--<q-card>-->
          <!--<q-btn>Dingbats</q-btn>-->
        <!--</q-card>-->
      <!--</q-dialog>-->
    </div>
  </q-page>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    // showModal = true;
  };
</script>

<style scoped lang="stylus">
  #background
    background-color #EEE

  .launch-button
    min-height 200px
    min-width 200px
    max-height 200px
    max-width 200px

  .centered-content
    justify-content center
    align-items center

</style>

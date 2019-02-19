<template>
    <q-dialog v-model="show">
      <q-card class="relative-position">
        <slot name="header">
          <p v-if="title !== null" id="title">{{ title }}</p>
        </slot>
        <slot name="content"></slot>

        <q-btn id="close-button" dense flat icon="close" @click="$emit('close-requested')">
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-card>
    </q-dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class TestModal extends Vue {
    @Prop() show: boolean;
    @Prop() title: string;
  }
</script>

<style scoped lang="stylus">
  @import "~src/css/themes/common.variables.styl"

  #close-button
    position absolute
    top 2%
    right 2%
    border-radius 50%

  #icon_close
    position absolute
    top 2%
    right 2%
    border-radius 50%

  #icon_close:hover
    background-color #777
    color white

  #icon_close:hover:active
    background-color #555
    color white

  #title
    font-weight bold
    text-align center
    margin 0
</style>

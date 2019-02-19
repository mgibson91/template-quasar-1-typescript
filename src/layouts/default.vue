<template>
  <div id="layout" class="expanding-container-col">
    <!--Layout-->
    <q-layout id="layout-primary" view="lHh Lpr lFf">
      <q-header>
        <q-toolbar id="mobile-toolbar" v-if="$q.screen.lt.md">
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu">
            <q-icon name="menu" />
          </q-btn>

          <q-toolbar-title>
            Property connect
          </q-toolbar-title>
        </q-toolbar>

        <nav-bar-desktop v-else></nav-bar-desktop>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null">
        <q-list
          id="drawer-list"
          no-border
          link
          inset-delimiter>
          <q-item @click.native="$router.push('/reporting')">
            <q-item-section avatar>
              <q-icon name="add"></q-icon>
            </q-item-section>
            <q-item-section>Add deal</q-item-section>
          </q-item>
          <q-item @click.native="$router.push('/customer')">
            <q-item-section avatar>
              <q-icon name="search"></q-icon>
            </q-item-section>
            <q-item-section>Find deals</q-item-section>
            <!--<q-item-side icon="search" />-->
            <!--<q-item-main label="Find deals"/>-->
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container id="page-container">
        <router-view/>
      </q-page-container>
    </q-layout>

    <!--<div v-else class="expanding-container-col">-->
    <!--<nav-bar-desktop/>-->
    <!--<router-view/>-->
    <!--</div>-->

    <login-modal v-show="showLoginModal"></login-modal>
    <signup-modal v-show="showSignupModal"></signup-modal>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import NavBarDesktop from '../components/nav-bar-desktop';
  import LoginModal from '../components/modals/login-modal';
  import SignupModal from '../components/modals/signup-modal';
  import { State } from 'vuex-class';
  @Component({
    components: { LoginModal, SignupModal, NavBarDesktop },
  })
  export default class AppLayout extends Vue {
    @State('showLoginModal', { namespace: 'general'}) showLoginModal: boolean;
    @State('showSignupModal', { namespace: 'general'}) showSignupModal: boolean;

    leftDrawerOpen = false;
  }
</script>

<style scoped lang="stylus">
  #layout
    height 100vh
    width 100vw
    background #EEE

  #drawer-list
    margin-top 40px

  #mobile-toolbar
    background-color #808080 !important
</style>

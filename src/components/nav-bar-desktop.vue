<template>
  <q-toolbar id="mobile-toolbar">
    <q-toolbar-title>
      Property connect
    </q-toolbar-title>

    <div id="header-main-actions" class="flex-auto display-flex-row">
      <q-btn flat>Add deal</q-btn>
      <q-btn flat>Find deals</q-btn>
    </div>
    <div v-if="!loggedIn" class="expanding-container-row flex-auto-no-grow margin-right-medium">
      <q-btn flat @click="login" nav-bar-text>Log in</q-btn>
      <q-btn flat @click="signup">Sign up</q-btn>
    </div>
    <div v-else id="account-container" class="position-relative right-content display-flex-col flex-auto-no-grow">
      <div class="color-white" id="account-background"></div>
      <q-icon name="account_circle" id="account-icon" @click="showAccountOptions = true">
        <q-popover v-model="showAccountOptions">
          <q-list separator link>
            <q-item v-close-overlay @click.native="tryLogOut">
              Log out
            </q-item>
          </q-list>
        </q-popover>
      </q-icon>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter, Mutation } from 'vuex-class';
  import { ModalVisibility } from '../common/modals';
  import { QPopover } from 'components/quasar-imports.ts';
  import { notifyError, notifyInfo } from 'common/notifications';

  @Component({
    components: { QPopover },
  })
  export default class NavBarDesktop extends Vue {
    @Mutation('setLoginModalVisibility', { namespace: 'general' }) setLoginModalVisibility;
    @Mutation('setSignupModalVisibility', { namespace: 'general' }) setSignupModalVisibility;


    @Action('logOut', { namespace: 'general' }) logOut;
    @Getter('loggedIn', { namespace: 'general' }) loggedIn;

    showAccountOptions = false;

    login() {
      this.setLoginModalVisibility(ModalVisibility.Show);
    }

    signup() {
      this.setSignupModalVisibility(ModalVisibility.Show);
    }

    tryLogOut() {
      try {
        this.logOut();
        notifyInfo('Successfully logged out')
      }
      catch (err) {
        console.error(err);
        notifyError('Error occurred logging out');
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~src/css/app.styl'

  #header-background
    background-color grey
    min-height 50px
    display flex
    justify-content center

  .left-content
    margin-right auto
    padding-left 20px
    padding-right 20px

  .right-content
    margin-left auto
    padding-left 20px
    padding-right 20px



  #account-container
    display flex
    justify-content center
    align-items center


  #account-icon
    position absolute
    color $color-secondary
    font-size 2em
    transition all .3s ease
    border-radius 50%

  #account-icon:hover
    box-shadow 0 0 0 5px rgba(#63ccff,.4)

  #account-icon:active
    color $color-secondary-dark

  #account-background
    position absolute
    background-color white
    width 20px
    height 20px
    border-radius 20%

  #logo
    font-weight bold
    margin 0
    align-self center
    color white
    font-style italic

  #header-main-actions
    justify-content flex-end
    margin-right 20px

</style>

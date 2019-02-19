<template>
  <exit-button-modal
    :show="showLoginModal"
    @close-requested="setLoginModalVisibility('hide')">
    <div slot="content" class="margin-medium display-flex-col">
      <q-input label="Username" v-model="username"></q-input>
      <q-input label="Password" v-model="password"></q-input>
      <q-btn id="login-button" class="margin-top-medium" @click="tryLogin">Log in</q-btn>

      <div class="display-flex-row margin-top-medium justify-content-center">
        <p class="no-margin">Not yet registered?</p>
        <p id="signup-redirect" class="color-secondary no-margin padding-left-small" @click="switchToSignup">Sign up</p>
      </div>
    </div>
  </exit-button-modal>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ExitButtonModal from './exit-button-modal';
  import { Action, Mutation, State } from 'vuex-class';
  import { ModalVisibility } from 'common/modals';
  import { UserParamsAuthenticate } from 'common-property-connect/types/user';
  import { notifyError, notifyInfo } from 'common/notifications';
  import TestModal from './exit-button-modal';

  @Component({
    components: { TestModal, ExitButtonModal }
  })
  export default class LoginModal extends Vue {
    username = '';
    password = '';

    showIt = true;

    @State('showLoginModal', { namespace: 'general' }) showLoginModal;

    @Mutation('setLoginModalVisibility', { namespace: 'general' }) setLoginModalVisibility;
    @Mutation('setSignupModalVisibility', { namespace: 'general' }) setSignupModalVisibility;

    @Action('logIn', { namespace: 'general' }) logIn;

    switchToSignup() {
      this.setLoginModalVisibility(ModalVisibility.Hide);
      this.setSignupModalVisibility(ModalVisibility.Show);
    }

    async tryLogin() {
      console.log('try login');
      try {
        const loginParams: UserParamsAuthenticate = {
          username: this.username,
          encodedPassword: this.password,
        };

        await this.logIn(loginParams);
        notifyInfo('Successfully logged in');

        this.setLoginModalVisibility(ModalVisibility.Hide);
      }
      catch (err) {
        notifyError(err.message);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~src/css/themes/common.variables.styl"

  #content
    padding 20px

  #login-button
    background $color-secondary
    color #FFF

  #signup-redirect
    font-weight bold
    cursor pointer
    color $color-secondary
</style>


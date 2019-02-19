<template>
  <exit-button-modal
    :show="showSignupModal"
    @close-requested="setSignupModalVisibility('hide')">
    <div slot="content" class="margin-medium display-flex-col">
      <q-input label="Username" v-model="username" :error="errors.has('username')"></q-input>
      <q-input label="Email address" v-model="email" :error="errors.has('email')"></q-input>
      <q-input label="Password" v-model="password" :error="errors.has('password')"></q-input>
      <q-btn id="signup-button" class="margin-top-medium" @click="trySignUp">Sign up</q-btn>
      <div class="display-flex-row margin-top-medium justify-content-center">
        <p class="no-margin">Already a user?</p>
        <p id="signup" class="color-secondary no-margin padding-left-small" @click="switchToLogin">Log in</p>
      </div>
    </div>
  </exit-button-modal>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { QDialog, QInput } from 'components/quasar-imports';
  import ExitButtonModal from './exit-button-modal';
  import { Action, Mutation, State } from 'vuex-class';
  import { ModalVisibility } from '../../common/modals';
  import {getUserClient} from "common-property-connect/shared/clients";
  import { notifyError, notifyInfo } from 'common/notifications';
  import { UserParamsRegister } from '../../../common-property-connect/src/types/user';
  import { Errors } from 'common/errors.ts';

  @Component({
    components: { ExitButtonModal, QDialog, QInput }
  })
  export default class SignupModal extends Vue {
    username = '';
    email = '';
    password = '';

    errors = new Errors();

    @State('showSignupModal', { namespace: 'general' }) showSignupModal;

    @Mutation('setSignupModalVisibility', { namespace: 'general' }) setSignupModalVisibility;
    @Mutation('setLoginModalVisibility', { namespace: 'general' }) setLoginModalVisibility;

    @Action('signUp', { namespace: 'general' }) signUp;

    switchToLogin() {
      this.setSignupModalVisibility(ModalVisibility.Hide);
      this.setLoginModalVisibility(ModalVisibility.Show);
    }

    async trySignUp() {
      try {
        const signUpParams: UserParamsRegister = {
          username: this.username,
          encodedPassword: this.password,
          email: this.email
        };

        await this.signUp(signUpParams);
        notifyInfo('Successfully signed up');

        this.setSignupModalVisibility(ModalVisibility.Hide);
        this.errors.clear();
      }
      catch (err) {
        const errors: any = {};

        if (err && err.errors) {
          err.errors.forEach(e => {
            errors[e.param] = e.msg;
          });

          this.errors.record(errors);
        }

        notifyError(`Error occurred signing up: ${err.message}`);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~src/css/themes/common.variables.styl"

  #content
    padding 20px

  #signup-button
    background $color-secondary
    color #FFF

  #signup
    font-weight bold
    cursor pointer
</style>


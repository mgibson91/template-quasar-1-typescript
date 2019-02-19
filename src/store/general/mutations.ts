import { MutationTree } from 'vuex';
import { GeneralState } from '../types';
import { ModalVisibility } from 'src/common/modals';

// Export mutations
export const mutations: MutationTree<GeneralState> = {
  setLoginModalVisibility(state: GeneralState, visibility: ModalVisibility) {
    state.showLoginModal = (visibility === ModalVisibility.Show);
  },

  setSignupModalVisibility(state: GeneralState, visibility: ModalVisibility) {
    state.showSignupModal = (visibility === ModalVisibility.Show);
  },

  setLoginState(state, { loginState }) {
    state.loginState = loginState;
  },

  setUserAuthToken(state, token) {
    state.userAuthToken = token;
  },
};

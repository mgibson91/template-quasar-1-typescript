import { GetterTree } from 'vuex';
import { GeneralState } from '../types';
import { RootState } from '../types';
import { LoginState } from 'common/login';

export const getters: GetterTree<GeneralState, RootState> = {
  loggedIn(state: GeneralState) {
    return state.loginState === LoginState.In;
  },
};

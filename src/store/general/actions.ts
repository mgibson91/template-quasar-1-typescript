import { ActionTree } from 'vuex';
import { RootState, GeneralState } from '../types';
import { UserParamsAuthenticate, UserParamsRegister } from 'common-property-connect/types/user';
import { LoginState } from 'src/common/login';
import { getUserClient } from 'common-property-connect/shared/clients';
import { setAxiosToken } from 'common-property-connect/shared/axios';
import { base64encode } from 'nodejs-base64';

function setLoggedIn(context, token: string) {
  // Store in context for easy access in API calls
  context.commit('setUserAuthToken', token);

  // Also store in local storage to persist through refresh
  localStorage.setItem('authToken', token);
  context.commit('setLoginState', { loginState: LoginState.In });

  // Update default token for axios database helper
  setAxiosToken(token);
}

export const actions: ActionTree<GeneralState, RootState> = {
  /** Attempt to log in with user data */
  async logIn(context, data: UserParamsAuthenticate) {
    context.commit('setLoginState', { loginState: LoginState.Pending });

    try {
      const { token } = await getUserClient().authenticate({
        ...data,
        encodedPassword: base64encode(data.encodedPassword),
      });
      setLoggedIn(context, token);
    }
    catch (error) {
      context.commit('setLoginState', { loginState: LoginState.Out });
      throw error;
    }
  },

  async signUp(context, data: UserParamsRegister) {
    context.commit('setLoginState', { loginState: LoginState.Pending });

    try {
      const result = await getUserClient().register({
        ...data,
        encodedPassword: base64encode(data.encodedPassword),
      });
      setLoggedIn(context, result.token);
    }
    catch (error) {
      context.commit('setLoginState', { loginState: LoginState.Out });
      throw error;
    }
  },

  async logOut(context) {
    // Remove authentication token
    context.commit('setUserAuthToken', '');
    localStorage.removeItem('authToken');

    context.commit('setLoginState', { loginState: LoginState.Out });
  },
};

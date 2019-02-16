import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from  './actions';
import { GeneralState } from '../types';
import { RootState } from '../types';

const generalStoreModule: Module<GeneralState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default generalStoreModule;

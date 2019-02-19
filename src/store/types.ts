export interface RootState {
  general: GeneralState;
}

export interface GeneralState {
  showLoginModal: boolean;
  showSignupModal: boolean;
  loginState: string;
  userAuthToken: string;
}

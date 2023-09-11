import {ROUTES} from '../constants';

export type RootStackParamList = {
  [ROUTES.AuthStack]: undefined;
  [ROUTES.AppStack]: undefined;
};

export type AuthStackParamList = {
  [ROUTES.SignUp]: undefined;
  [ROUTES.SignIn]: undefined;
  [ROUTES.Authentication]: undefined;
};

export type AppStackParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Drawer]: undefined;
};

import { User } from 'src/app/models/user.model';
import { All, AuthActionTypes } from '../actions/auth.action';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token
        }
      };
    }

    case AuthActionTypes.REGISTRATION_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token
        }
      };
    }

    case AuthActionTypes.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

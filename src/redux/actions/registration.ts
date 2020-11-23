import { createAction } from 'typesafe-actions';
import * as constants from './constants/registration';

export type RegisterRequestType = {
  name: string,
  email: string,
  password: string
}

type RegisterSuccessType = {}

export const registrationRequest = createAction(constants.REGISTRATION_REQUEST)<RegisterRequestType>();
export const registrationSuccess = (payload: RegisterSuccessType) => ({ type: constants.REGISTRATION_SUCCESS, payload });
export const registrationFail = () => ({ type: constants.REGISTRATION_FAIL });

import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from '../actions/constants/registration';
import { registrationRequest } from '../actions/registration';

import { registrationRequest as registrationRequestService } from '../services/registration';

function* registration(action: ReturnType<typeof registrationRequest>): Generator {
  try {
    
    const result = yield call(registrationRequestService, action.payload)
  } catch (error) {
    
  }
}

export const registrationSagas = [
  takeLatest(constants.REGISTRATION_REQUEST, registration)
]

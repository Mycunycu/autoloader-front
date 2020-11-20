export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';

// To Do typing
export const registrationRequest = payload => ({ type: REGISTRATION_REQUEST, payload });
export const registrationSuccess = payload => ({ type: REGISTRATION_SUCCESS, payload });
export const registrationFail = payload => ({ type: REGISTRATION_FAIL, payload });

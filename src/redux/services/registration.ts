import axios from './index';
import { RegisterRequestType } from '../actions/registration';

const AUTH_API = 'auth';

export const registrationRequest = async (data: RegisterRequestType) => {
  return axios.post(`${AUTH_API}/signUp`, { ...data });
}
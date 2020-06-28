
import { 
  ADD_USER,
  ADD_USER_PIC,
  ADD_USER_ADDRESS,
} from './constants';


export function addUser(params) {
  return {
    type: ADD_USER,
    params
  };
}
export function addUserPic(params) {
  return {
    type: ADD_USER_PIC,
    params
  };
}
export function addUserAddress(params) {
  return {
    type: ADD_USER_ADDRESS,
    params
  };
}


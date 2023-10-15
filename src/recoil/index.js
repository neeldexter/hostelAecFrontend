import { useRecoilState, atom, RecoilRoot } from 'recoil';

// Define an atom to store a user's name
export const userNameState = atom({
  key: 'userNameState', // unique ID (with respect to other atoms/selectors)
  default: 'Login', // default value (can be any valid JavaScript value)
});
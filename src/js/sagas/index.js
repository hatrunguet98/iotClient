import { fork } from 'redux-saga/effects';
import homePage from './home';

export default function* root() {
  yield fork(homePage);
}

import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import fetchMock from 'fetch-mock';

fetchMock.catch();

global.open = jest.fn();
global.scroll = jest.fn();
global.scrollTo = jest.fn();

const crypto = {
  getRandomValues: jest.fn((...args) => new Uint32Array(10)),
};

global.window.crypto = crypto;

configure({ adapter: new Adapter() });

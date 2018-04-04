require.extensions['.png'] = function png() {
  return null;
};
import 'isomorphic-fetch';
import jsdom from 'jsdom';
import chai from 'chai';
//import chaiImmutable from 'chai-immutable';
import sinon from 'sinon';
//import sinonChai from 'sinon-chai';
//import chaiEnzyme from 'chai-enzyme';
//import sinonStubPromise from 'sinon-stub-promise';
//sinonStubPromise(sinon);
const doc = jsdom.jsdom(
  '<!doctype html><html><body><div id="dummpy"></div></body></html>'
);
const win = doc.defaultView;

global.PatternsLib = {};
//chai.use(sinonChai);
//chai.use(chaiImmutable);
//chai.use(sinonChai);
//chai.use(chaiEnzyme());
chai.should();
global.expect = chai.expect;
global.sinon = sinon.sandbox.create();
global.document = doc;
global.window = win;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

window.location = {
  hash : 'abc',
  reload : sinon.spy()
};

// afterEach('setup: restore sinon mocks', () => global.sinon.restore());
global.testAsyncExpectations = (done, testExpectations, time) => {
  setTimeout(() => {
    testExpectations();
    done();
  }, time || 0);
};

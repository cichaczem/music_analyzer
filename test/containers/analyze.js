import React from'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import configureMockStore from 'redux-mock-store'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Analyze from '../../src/containers/analyze'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Analyze container', function(){
  it('Loader should not be on the page if isFetching is false', () => {
    const getState = { tracks: { isFetching: false, items: [] } }
    const store = mockStore(getState)

    const renderedComponent = TestUtils.renderIntoDocument(
      <Analyze store={store} />
    )
    const imgs = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent,
      'img'
    )

    expect(imgs.length).toEqual(0);
  })

  it('Loader should be visible if isFetching is true', () => {
    const getState = { tracks: { isFetching: true, items: [] } }
    const store = mockStore(getState)

    const renderedComponent = TestUtils.renderIntoDocument(
      <Analyze store={store} />
    )

    const loader = TestUtils.scryRenderedDOMComponentsWithClass(
      renderedComponent,
      'Loader'
    )

    expect(loader).toExist();
  })
})

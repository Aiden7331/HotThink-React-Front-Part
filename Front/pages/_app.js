import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import NavigationBar from "../components/bars/navigationBar";
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import rootSaga from '../saga';
import withReduxSaga from "next-redux-saga";
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';

const HotThink = ({Component,store,pageProps}) => {
    return (
        <>
            <Head>
                <title>핫띵크 - Hot Think!</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
                />
                <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css"/>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
                <script src="https://unpkg.com/react/umd/react.production.min.js"/>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                />
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                />
                <script>var Alert = ReactBootstrap.Alert;</script>
            </Head>
            <Provider store={store}>
            <NavigationBar>
            </NavigationBar>

            <Component/>
            </Provider>
        </>
    );
};

HotThink.propTypes = {
    Component: PropTypes.elementType,
};

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : compose(
            applyMiddleware(...middlewares),
            !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        );
    const store = createStore(reducer, initialState, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export default withRedux(configureStore)(withReduxSaga(HotThink));
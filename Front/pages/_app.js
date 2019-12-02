import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import NavigationBar from "../components/bars/navigationBar";
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer,{rootSaga} from '../modules/reducer/index';
import withReduxSaga from "next-redux-saga";
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import {tempSetUser,check} from "../modules/reducer/user";
import {setToken} from "../modules/reducer/auth";
import {Navbar} from "react-bootstrap";
import Footer from '../container/main/footer';


const HotThink = ({Component,store,pageProps}) => {
    return (
        <div>
            <Head>
                <link rel="icon"
                      type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png"/>
                <title>핫띵크 : 핫한 당신의 생각 </title>
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
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700,900&display=swap" rel="stylesheet"/>
                <script src="https://unpkg.com/react/umd/react.production.min.js"/>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                />
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Provider store={store}>
                <NavigationBar />
                <Component />
                <Footer/>
            </Provider>

        </div>
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
    const store = createStore(rootReducer, initialState, enhancer);
    function loadUser() {
        try{
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if(!user||!token) return;
            store.dispatch(tempSetUser(JSON.parse(user)));
            store.dispatch(setToken(JSON.parse(token)));
            store.dispatch(check());
        } catch (e) {

        }
    }
    store.sagaTask = sagaMiddleware.run(rootSaga);
    loadUser();
    return store;
};

export default withRedux(configureStore)(withReduxSaga(HotThink));

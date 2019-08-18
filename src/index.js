import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFitrebase, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './components/config/fbconfig';

const store = createStore(rootReducer, 
    compose (
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFitrebase})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
      )
    );

    store.firebaseAuthIsReady.then(() => {
      ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    })


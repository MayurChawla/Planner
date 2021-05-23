import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


const store = createStore( rootReducer,
      compose(
        applyMiddleware(thunk.withExtraArgument( getFirebase)),
    )
  );
  const profileSpecificProps = {
    useFirestoreForProfile: true,
    userProfile: 'users',
    enableRedirectHandling: false,
    attachAuthISReady: true,
    resetBeforeLogin: false
  }
  const rProps = {
    firebase: fbConfig,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  function AuthIsLoaded({children}){
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
        return children
  }
ReactDOM.render(

    <Provider store= {store} >
      <ReactReduxFirebaseProvider 
      {...rProps}>
        <AuthIsLoaded>
        <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
  
);

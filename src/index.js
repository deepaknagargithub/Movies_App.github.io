import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log('ACTION_TYPR = ', action.type)
//       next(action)
//     }
//   }
// }


const logger = ({ dispatch, getState }) => (next) => (action) => {

  if (typeof action !== "function") {
    console.log('ACTION_TYPR = ', action.type)

  }
  next(action)

}


// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(dispatch)
//     return;
//   }
//   next(action)
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));



// export const StoreContext = createContext()
// console.log(StoreContext)





// class Provider extends React.Component {

//   render() {
//     const { store } = this.props
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }

// }




// export function connect(callback) {

//   return function (Component) {

//     class connectedComponents extends React.Component {

//       constructor(props) {

//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());

//       }

//       componentWillUnmount() {
//         this.unsubscribe()

//       }

//       render() {

//         const { store } = this.props
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state)

//         return (
//           <Component {...dataToBePassedAsProps}
//             dispatch={store.dispatch} />
//         )

//       }
//     }

//     class connectedComponentWrapper extends React.Component {
//       render() {
//         return <StoreContext.Consumer>
//           { store => < connectedComponents store={store} /> } 
//         </StoreContext.Consumer>
//       }
//     }
//     return connectedComponentWrapper;
//   }
// }




// store.dispatch({
//   type: "Add_Movies",
//   movies: [{ name: 'superman' }]
// })





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
    <App />
  </Provider>

);





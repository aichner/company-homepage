//> Reducers
// Authentication
import authReducer from "./authReducer";
// Contact
import contactReducer from "./contactReducer";

//> Redux
import { combineReducers } from "redux";

//> Firestore reducer
import { firestoreReducer } from "redux-firestore";

//> Firebase reducer
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer, // Authentication
});

export default rootReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */

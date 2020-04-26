export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signInWithEmailAndPassword(credentials.email, credentials.password)
			.then(() => {
				dispatch({
					type: "LOGIN_SUCCESS",
				});
			})
			.catch((err) => {
				dispatch({
					type: "LOGIN_ERROR",
					err,
				});
			});
	};
};

export const signInAnonymous = () => {
	return async (dispatch, getState, { getFirebase }) => {
    // Create Firebase instance
		const firebase = getFirebase();

    // Check if there is a user currently logged in
		if (firebase.auth().currentUser) {
			// There is a current user logged in
			return true;
		} else {
			// No user logged in
			return firebase
				.auth()
				.signInAnonymously()
				.then(() => {
					return true;
				})
				.catch((err) => {
					return false;
				});
		}
	};
};

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase
			.auth()
			.signOut()
			.then(() => {
				dispatch({
					type: "SIGNOUT_SUCCESS",
				});
			});
	};
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */

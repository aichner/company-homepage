export const createContact = (newContact) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    // Create contact contact
    firestore
      .collection("contact")
      .doc()
      .set({
        ...newContact,
        timestamp: new Date().getTime(),
        assigned: null,
        processed: false,
      })
      .then(() => {
        dispatch({ type: "CONTACT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CONTACT_ERROR", err });
      });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */

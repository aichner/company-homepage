// Have initial state for when state is not ready to be passed
const initState = {
  contactError: null,
  contactSuccess: null,
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONTACT_SUCCESS":
      console.log("Contact created");
      return {
        ...state,
        contactError: undefined,
        contactSuccess: true,
      };
    case "CONTACT_ERROR":
      console.log("Error creating contact", action.err);
      return {
        ...state,
        contactError: true,
        contactSuccess: false,
      };
    default:
      return state;
  }
};

export default contactReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */

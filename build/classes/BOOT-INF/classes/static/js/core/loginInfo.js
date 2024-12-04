/**
 * @prettier
 */

import { Maybe, Just, Nothing } from "../utils/maybe.js";
import { setCookie, getCookieData, deleteCookie } from "../utils/cookie.js";

export const addLoginInfo = (id, privilegeLevel) => {
  setCookie("id", id);
  setCookie("privilegeLevel", privilegeLevel);
}

export const getLoginInfo = () => {
  const id = Maybe.withDefault("", getCookieData("id"));
  const privilegeLevel = Maybe.withDefault(0, getCookieData("privilegeLevel"));

  if (id) {
    // return new Just({id: id, privilegeLevel: privilegeLevel});
    return new Just({id, privilegeLevel});
  } else {
    return new Nothing();
  }
};

export const deleteLoginInfo = () => {
  deleteCookie("id");
  deleteCookie("privilegeLevel");
}
import { API } from "../utils/axios";
import { ACCESS_TOKEN } from "../utils/constants";

export class UserService {
  /**
   *  Calls to the unauthorized api endpoint to register the user.
   *  @async
   *  @function POST_REGISTER
   *  @param {Object} data User's email and password object
   *  @param {string} data.email User's email
   *  @param {string} data.password User's password
   *  @returns {Promise} Promise object containing user's email and score.
   */
  POST_REGISTER = async ({ email, password }) => {
    try {
      const response = await API({
        method: "POST",
        url: "/user/register",
        data: {
          email,
          password,
        },
      });

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  /**
   *  Calls to the unauthorized api endpoint to login the user and get the access token
   *  @async
   *  @function POST_LOGIN
   *  @param {Object} data User's email and password object
   *  @param {string} data.email User's email
   *  @param {string} data.password User's password
   *  @returns {Promise} Promise object containing user's jwt token if the login was succ.
   */
  POST_LOGIN = async ({ email, password }) => {
    try {
      const response = await API({
        method: "POST",
        url: "/user/login",
        data: {
          email,
          password,
        },
      });

      // Destructuring response to get the accessToken containing jwt token.
      const { accessToken } = response.data;

      // Saving the jwt token in the localStorage.
      localStorage.setItem(ACCESS_TOKEN, accessToken);

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

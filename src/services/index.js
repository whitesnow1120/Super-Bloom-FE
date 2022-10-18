import axios from "axios";
import config from "../config";

axios.defaults.withCredentials = true;

/**
 * Stripe API
 * @param { object } data { step }
 * @method POST
 */
export const stripeApi = async (data) => {
  try {
    return await axios.post(config.apiUrl + "/create-checkout-session", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return err.response;
  }
};

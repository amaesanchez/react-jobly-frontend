import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};
    //TODO: look into line 34 -- whats the purpose
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get companies given filters. */

  static async getCompanies(filters) {
    const data = { nameLike: filters };

    let res = await this.request(`companies`, data);
    return res.companies;
  }

  /** Get jobs given filters. */

  static async getJobs(filters) {
    const data = { title: filters };

    let res = await this.request(`jobs`, data);
    return res.jobs;
  }

  /** Log user in */
  static async loginUser(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token
  }

  /** Register new user */
  static async registerUser(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token
  }

  /** Get a user */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Update user */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  /** Apply user to job */
  static async applyToJob(username, id) {
    let res = await this.request(`users/${username}/jobs/${id}`, {}, "post");
    return res.applied;
  }
}

export default JoblyApi;

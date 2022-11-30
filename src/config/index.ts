import env from '../config/env';
import axios, { AxiosInstance } from 'axios';

export const ENVIRONMENT = { ...env };

/**
 * Axios instance for create method to represent Core.URL specific works.
 *
 * * @type {AxiosInstance} request
 */

const apiRequest: AxiosInstance = axios.create({
  baseURL: ENVIRONMENT.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { apiRequest };

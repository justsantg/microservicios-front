export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const MEMBERSHIP_TYPES = {
  BASIC: 'basic',
  PREMIUM: 'premium',
  VIP: 'vip'
};

export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  MEMBERSHIPS: '/memberships'
};
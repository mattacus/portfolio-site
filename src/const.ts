export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1234"
    : process.env.HOST_URL;

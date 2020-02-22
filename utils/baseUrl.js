const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://shop-app.now.sh"
    : "http://localhost:3000";

export default baseUrl;

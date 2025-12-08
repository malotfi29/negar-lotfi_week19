import app from "./httpService";

export function registerUser(user) {
  return app.post("/auth/register", user).then((data) => data);
}

export function loginUser(user) {
  return app.post("/auth/login", user).then((data) => data.data);
}

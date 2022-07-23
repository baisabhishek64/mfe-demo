import { BehaviorSubject } from 'rxjs';

const token = new BehaviorSubject();

const API_SERVER = 'http://localhost:8080';

export function subscribeToTokenUpdate(callback) {
    token.subscribe(val => callback(!!val))
}

export const login = (username, password) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
        token.next(data.access_token);
    });
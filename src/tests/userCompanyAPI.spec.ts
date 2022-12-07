import { expect, test } from "@playwright/test";

test("Should create a new user", async ({ request, baseURL }) => {
  const _response = await request.get(`${baseURL}/api/users/new`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  console.log(await _response.json());
});

test("Should create a new company", async ({ request, baseURL }) => {
  const _response = await request.get(`${baseURL}/api/companies/new`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  console.log(await _response.json());
});

test("Should create a new user and company", async ({ request, baseURL }) => {
  const _response = await request.get(`${baseURL}/api/user/company`);
  expect(_response.ok()).toBeTruthy();
  expect(_response.status()).toBe(200);
  console.log(await _response.json());
});

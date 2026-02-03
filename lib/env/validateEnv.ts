import { requiredEnv } from "./requiredEnv";

export function validateEnv(){
  const missing = requiredEnv.filter((key) => !process.env[key]);

  return {
    ok: missing.length === 0,
    missing,
  };
}
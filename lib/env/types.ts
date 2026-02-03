export type EnvCheckResult = {
  ok : boolean;
  missing : readonly string[];
};
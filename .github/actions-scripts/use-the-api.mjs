import { Octokit } from "https://cdn.skypack.dev/octokit";

export const octokit = new Octokit({ 
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
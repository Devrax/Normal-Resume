export interface IUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: html;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  hireable: boolean;
}

export interface IRepo{
  full_name: string;
  html_url: html;
  language: string;
  description: string;
}

type html = string;

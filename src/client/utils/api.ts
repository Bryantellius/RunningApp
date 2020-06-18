import fetch from "isomorphic-fetch";

export const api = async <T = any>(
  url: string,
  method: string = "GET",
  body?: {},
  token?: string
) => {
  let headers: any = {
    "Content-Type": "application/json",
  };

  try {
    let res = await fetch(url, { method, headers, body: JSON.stringify(body) });
    if (res.ok) {
      return <T>await res.json();
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

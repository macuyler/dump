# Hello World

You can dump flags and cause SSRFs from this simple express app!

## Setup

```
npm install
npm start
```

## Use

This project is just a template to quickly get you up and running. You should feel free to add your own files in `./public`, and _express_ routes in `index.js`.

## Routes

| Endpoint     | Content Type | Response                             |
| ------------ | ------------ | ------------------------------------ |
| /hello       | JSON         | {"message": "hello world"}           |
| /dump        | JSON         | {"status": 200}                      |
| /dump/{data} | TEXT         | Dumped!                              |
| /redir       | REDIRECT     | 302 - http://localhost:3000/flag.txt |
| /{filename}  | FILE         | ./public/{filename}                  |

> **Quick Tip:** Use [ngrok](https://ngrok.com) to get a temporary public domain for this app.

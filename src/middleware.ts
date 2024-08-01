import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  context.locals.title = "New title";

  // return a Response or the result of calling `next()`
  return next();
});

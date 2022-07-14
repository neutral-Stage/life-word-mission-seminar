const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "67v47l7h",
  dataset: "gadget",
  apiVersion: "v2021-03-25",
  token:
    "skrGPojYhQa8EaHyDp357sZfNqZCyShrJupzV1ZV4BX321EYbJHt7jPi8mO0p4GkMe5UjcsoE23zELHvwkbzUa3sWaYhoarfbYni3tpbJWDVEdHoalX0vblOgyPXZTPuKHFJRM2D4b51kfkBC8Z4JNLc41fh9NTOSTVBhkHupC8IVfhBAdvN", // or leave blank to be anonymous user
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});

export default client;

import { fakeListings } from "./fake-data.js";

export const getAllListingRoute = {
  method: "GET",
  path: "/api/listings",
  handler: (req, h) => {
    return fakeListings;
  },
};

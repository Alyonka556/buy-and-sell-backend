import { addViewToListingRoute } from "./addViewToListing.js";
import { createListingRoute } from "./createNewListing.js";
import { deleteListingRoute } from "./deleteListing.js";
import { getAllListingRoute } from "./getAllListing.js";
import { getListingsRoute } from "./getListings.js";
import { getUserListingsRoute } from "./getUserListings.js";
import { updateListingRoute } from "./updateListing.js";

export default [
  addViewToListingRoute,
  createListingRoute,
  updateListingRoute,
  getAllListingRoute,
  getListingsRoute,
  getUserListingsRoute,
  deleteListingRoute,
];

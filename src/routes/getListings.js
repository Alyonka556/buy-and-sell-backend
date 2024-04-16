import Boom from "@hapi/boom";
import { db } from "../database";

export const getListingsRoute = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const id = req.params.id;
    const result = await db.query("SELECT * From listings WHERE id=?", [id]);
    if (!listing) {
      throw Boom.notFound(`Listing does not exist with id ${id}`);
    }
    return listing;
  },
};

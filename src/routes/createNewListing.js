import { v4 as uuid } from "uuid";
import { db } from "../database";

export const createListingRoute = {
  method: "POST",
  path: "/api/listings",
  handler: async (req, h) => {
    const id = uuid();
    const { name = "", model = "", year = 0, price = 0 } = req.payload;
    const userId = "12345";
    const views = 0;

    await db.query(
      `INSERT INTO listings (id, name, model, year, price, user_id, views) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, name, model, year, price, userId, views]
    );

    return { id, name, model, year, price, user_id: userId, views };
  },
};

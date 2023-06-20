import experss from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/user.js";
import { verifyToken } from "../middlewares/auth.js";

const router = experss.Router();

// READ

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// UPDATE

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
 
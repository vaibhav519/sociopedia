import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  console.log("here")
  try {
    let token = req.header("Authorization");
    console.log(token)
    if (!token) return res.status(403).send("Access Denied");
    if (token.startsWith("Bearer ")) {
      // token = token.slice(7, token.length).trimleft();
      token = token.slice(7).trim();
      console.log(token)
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified)
    req.user = verified;
    next();
  } catch (err) {
    console.log("reached here")
    res.status(401).json({ error: err + "Invalid token again" });
  }
};

import jwt from "jsonwebtoken";

function authorizeToken(req, res, next){
  const token = req.cookies.jwt;
  if (!token) {
    // If token is not present, redirect user to login page
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // If token verification fails, clear cookie and send unauthorized status
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
      return res.status(401).json({ message: "Unauthorized" });
    }
    // If token is valid, attach userId to request object for further processing
    req.userId = decoded.id;
    next();
  });
};

export default authorizeToken;

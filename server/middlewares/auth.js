import jwt from 'jsonwebtoken'
// middleware function to decode jwt token to get clerkid
const authUser = async (req, res, next) => {
    try {
      const { token } = req.headers;
      if (!token) {
        return res.json({ success: false, message: "Not authorized, login again" });
      }
  
      const token_decode = jwt.decode(token);
      if (!token_decode || !token_decode.clerkId) {
        return res.json({ success: false, message: "Invalid token" });
      }
  
      req.clerkId = token_decode.clerkId;  // ✅ safer and standard practice
      next();
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };
  
  export default authUser;
  
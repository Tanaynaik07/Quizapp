const adminMiddleware = (req, res, next) => {   
    console.log(req.user.role)
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: "Access denied: Admins only" });
  }
  next();
};

module.exports = adminMiddleware;

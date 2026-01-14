import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const generateTokens = (userId) => {
  const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });

  const reftoken = jwt.sign({ _id: userId }, process.env.REF_JWT_SECRET, {
    expiresIn: process.env.REF_JWT_EXPIRY,
  });
  //add to User model
  //const addtoUser = await User.findOneAndUpdate({_id:userId},{refreshToken:reftoken});
  return { token, reftoken };
};

const returnRefTokenid=(token)=>{
  const {_id} = jwt.verify(token,process.env.REF_JWT_SECRET);
  return {userId:_id}
}

const returnSessionTokenid=(token)=>{
  const {_id} = jwt.verify(token,process.env.JWT_SECRET);
  return {userId:_id}
}

export { generateToken, generateTokens, returnRefTokenid, returnSessionTokenid };

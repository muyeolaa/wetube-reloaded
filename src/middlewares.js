import multer from "multer";


export const localsMiddleware = (req,res, next) =>{
    res.locals.loggedIn = Boolean(req.session.loggedIn); // req.session.loggedIn True,False 인지 확인
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user ||{}; //로그인된 유저의 ID를 저장 
    next();
};



export const protectorMiddleware = (req,res,next) => {
  if(req.session.loggedIn){
    return     next();
  }else {
    req.flash("error", "Log in first.");
     return res.redirect("/");
    }
  }; 
  //로그인상태가 아니라면 홈페이지로 보내주고, 플레시 메세지 표출 
  
export const publicOnlyMiddleware = (req,res,next) => {
 if(!req.session.loggedIn){
    return    next();
    }else {
      req.flash("error", "Not authorized");
      return res.redirect("/");
    }
}; 

export const avavtarUpload = multer({dest: "uploads/avatars", limits: {fileSize:30000000},});
export const videoUpload = multer({dest: "uploads/videos", limits: {fileSize:100000000}});
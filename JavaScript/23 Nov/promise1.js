 function myDisplay() {
  return myPromise =  new Promise(function(resolve,reject) { 
    resolve("Resolved!!");
        reject("Error message");
    // setTimeout(function () {
    //     resolve("Resolved!!");
    //         reject("Error message");
    //   }, 3000);
  });
  // console.log( myPromise);
  // console.log("Waiting for awaited function");
}

myDisplay().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// practical implementation on demo project
/*
router.get("/manageuserstatus",(req,res)=>{ 
 var urlobj=url.parse(req.url,true).query;  
 adminController.manageUserStatus(urlobj).then((result)=>{
  res.redirect("/admin/manageusers");
 }).catch((err)=>{
  console.log(err);   
 })
});

  manageUserStatus(urlobj) {
    return new Promise((resolve, reject) => {
      adminModel.manageUserStatusModel(urlobj).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  }
*/
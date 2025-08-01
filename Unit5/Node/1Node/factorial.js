let factorial=function(n){
  let p=1;
  for(let i=1;i<=n;i++){
    p=p*i;
  }
  return p;
}
module.exports=factorial
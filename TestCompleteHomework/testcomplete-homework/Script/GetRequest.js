function getRequest(url){
  var response = aqHttp.CreateGetRequest(url).Send();
//  Log.Message(response.Text);
  return JSON.parse(response);
}
module.exports.getRequest = getRequest;
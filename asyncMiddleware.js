// Some async method to get the object state
async function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1,2,3]);
    }, 1000);
  });
}

let data;

module.exports = async function(request,response,next) {

    if (data == undefined) {
      console.log("middleware caching data");
      data = await fakeApiCall();
    } else {
      console.log("middleware using cached data");
    }

    request.data = data;

    next();
}

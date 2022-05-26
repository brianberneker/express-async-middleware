module.exports = function(request,response) {
    console.log("data:",request.data);
    response.send("get user "+request.params.id);
}



module.exports = function(app){
    app.get("/users",require("./routes/users/GET.js"));
    app.get("/user/:id",require("./routes/user/GET.js"));
    app.post("/user/:id",require("./routes/user/POST.js"));
}

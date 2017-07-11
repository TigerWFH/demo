export default Log = {
    log: function(){
        if (process.env.NODE_ENV === "development"){
            console.log("-------->log");
        }
    }
};
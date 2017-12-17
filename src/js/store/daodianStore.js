

var Ee =require("events").EventEmitter.prototype;

    var store ={};

    Object.assign(store,{
        state:{
            title:"到店",
           
        }, 
        getAll(){
            return this.state;
        },
        updateAll(obj){
            for(var key in obj){
                this.state[key] =obj[key];
            };
            this.updateView();  
        },
        addUpdate(callback){
            this.on("update",callback)

        },
        updateView(){
            this.emit("update");

        },
        removeUpdate(callback){
            this.removeListener("update",callback);
        }



    },Ee);

     export default store;   



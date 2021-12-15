const store = {
    setLocalStorage(name){
        localStorage.setItem("name", JSON.stringify(name));
    },
    getLocalStorage(){
        return JSON.parse(localStorage.getItem("name"));
    },
};

export default store;
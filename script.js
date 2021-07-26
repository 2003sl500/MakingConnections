console.log("Javascript is working");

function editProfile() {
    var info = document.querySelector("#changeName");
    info.innerText = "Jessica Acosta";
}

var connectionReq = 2;
function closeRequest(name) {
    var info = document.querySelector("#" + name);
    info.remove();
    
    var connReq = document.querySelector("#requestsId");
    connectionReq--;
    connReq.innerText = connectionReq;

}

var yourConn = 500;
function yourConnections() {
    var info = document.querySelector("#connId");
    yourConn++;
    info.innerText = yourConn;

}
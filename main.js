const user = prompt("Iltimos tanlang: \n 1) pop \n 2) shift")
const oquvchilar = ["mahmud" , "hayot" , "murod" , "ismoil"]
if (user == 1) {
    console.log((oquvchilar.pop()));
    alert(oquvchilar)
} else if (user == 2) {
    console.log((oquvchilar.shift()));
    alert(oquvchilar)
}
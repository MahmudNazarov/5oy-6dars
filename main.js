const user = prompt("Iltimos tanlang: \n 1) pop \n 2) shift")
const oquvchilar = ["mahmud" , "hayot" , "murod" , "ismoil"]
if (user == 1) {
    alert(`siz ${oquvchilar.pop()} ismini olib tashadis`)
} else if (user == 2) {
    alert(`siz ${oquvchilar.shift()} ismini olib tashadis`)
} else{
 alert(`siz ${oquvchilar} bu ismlardan hechnima oplibtashamadis`)
}
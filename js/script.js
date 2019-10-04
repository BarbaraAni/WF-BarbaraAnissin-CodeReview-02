function calculateInsurance() {
    var land = document.getElementById("land").value
    var age = document.getElementById("age").value
    var hp = document.getElementById("hp").value
    var name = document.getElementById("name").value
    if (land == "austria") {
        var ins = hp * 100 / age;
    } else if (land == "hungary") {
        var ins = hp * 120 / age + 100;
    } else if (land == "greece") {
        var ins = hp * 150 / (Number(age) + 3) + 50;
    } else {
        var ins = "Please try again"
    }
    document.getElementById("placeholder").innerHTML = name + ", your insurance costs " + Math.round(ins * 100) / 100 + " €"

}
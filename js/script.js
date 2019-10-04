function calculateInsurance() {
    var land = document.getElementById("land").value
    var age = document.getElementById("age").value
    var hp = document.getElementById("hp").value
    var name = document.getElementById("name").value
    if (land=="austria") {
    	var ins = hp * 100 / age;
    }
    else if (land =="hungary") {
    	var ins = hp * 120 / age + 100;
    }
    else {
    	var ins = hp * 150 / (age+3) + 50;
    }
    document.getElementById("placeholder").innerHTML = name + ", your insurance costs " + ins + " €"
}
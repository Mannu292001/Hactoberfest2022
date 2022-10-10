let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}



const getResult = () => {
    let a= document.getElementById('DELD').value;
    let b = document.getElementById('OS').value;
    let c= document.getElementById('DBMS').value;
    let d = document.getElementById('AWT').value;
    let e = document.getElementById('EG').value;

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
    let total = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
    let percentage = (total * 100) / 500;

    if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "A+";
    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "A";

    }
    else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "B";

    }
    else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = "C+";

    }
    else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = "C";

    }
    else if (percentage >= 20) {
        document.getElementById("grade").innerHTML = "D+";

    }
    else {
        document.getElementById("grade").innerHTML = "You Are Failed";

    }


    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = total;
}
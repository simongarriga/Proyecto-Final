


// function animar1() {
//     $("#btn-registrarse").animate({
//         transform: "translateX(300px)"
//     });
//     $("#btn-login").animate({
//         transform: "translateX(300px)"
//     });
// }


// function animar2() {
//     $("#btn-registrarse").animate({
//         transform: "translateX(0px)"
//     });
//     $("#btn-login").animate({
//         transform: "translateX(0px)"
//     });
// }



const loginForm = document.getElementById("loginForm");
const registrarseForm = document.getElementById("registrarseForm");
const indicador = document.getElementById("indicador");


    function registrarse() {
        registrarseForm.style.transform = "translateX(0px)";
        loginForm.style.transform = "translateX(0px)";
        indicador.style.transform = "translateX(100px)";
    }

    function login() {
        registrarseForm.style.transform = "translateX(300px)";
        loginForm.style.transform = "translateX(300px)";
        indicador.style.transform = "translateX(0px)";
    }

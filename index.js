const GAS_URL = "https://script.google.com/macros/s/AKfycbzgarhlhlI-WMu1qQUkCsur5p1ZalF1wglNQIe1038osVIB3JKhG1qUsEJ1pWl4mywB/exec";

function login() {
    const id = document.getElementById("id").value;
    const pass = document.getElementById("pass").value;

    google.script.run
        .withSuccessHandler(function (res) {
            if (res.result === "success") {
                window.location = "home.html";
            } else {
                alert("ID またはパスワードが違います");
            }
        })
        .doPost({ postData: { contents: JSON.stringify({ mode: "login", id, pass }) } });
}

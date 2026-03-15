const GAS_URL = "https://script.google.com/macros/s/AKfycbzgarhlhlI-WMu1qQUkCsur5p1ZalF1wglNQIe1038osVIB3JKhG1qUsEJ1pWl4mywB/exec";

document.querySelector(".kettei").addEventListener("click", () => {
    const id = document.getElementById("roguinID").value;
    const pass = document.getElementById("pass").value;

    fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify({
            mode: "login",
            id,
            pass
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                alert("ログイン成功！");
                // ログイン後のページへ
                location.href = "home.html";
            } else {
                alert("ID またはパスワードが違います");
            }
        });
});

const GAS_URL = "https://script.google.com/macros/s/AKfycbzgarhlhlI-WMu1qQUkCsur5p1ZalF1wglNQIe1038osVIB3JKhG1qUsEJ1pWl4mywB/exec";

document.querySelector(".kettei").addEventListener("click", () => {
    const id = document.getElementById("roguinID").value;
    const pass = document.getElementById("pass").value;

    fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",   // ← 必須
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mode: "login",
            id,
            pass
        })
    });

    // ★ no-cors ではレスポンスが読めないので、ここで成功扱いにする
    alert("ログイン処理を送信しました");
    location.href = "home.html";
});
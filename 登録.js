const GAS_URL = "https://script.google.com/macros/s/AKfycbzgarhlhlI-WMu1qQUkCsur5p1ZalF1wglNQIe1038osVIB3JKhG1qUsEJ1pWl4mywB/exec";

document.querySelector("button").addEventListener("click", () => {
    const name = document.querySelector("input[name='name']").value;
    const mail = document.querySelector("input[name='mail']").value;
    const id = document.querySelector("input[name='ID']").value;
    const pass = document.querySelector("input[name='pass']").value;
    const pass2 = document.querySelector("input[name='pass確認']").value;

    if (pass !== pass2) {
        alert("パスワードが一致しません");
        return;
    }

    fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mode: "register",
            name,
            mail,
            id,
            pass
        })
    });

    // ★ no-cors ではレスポンスが読めないので、ここで完了扱いにする
    alert("登録処理を送信しました");
    location.href = "index.html";
});
const API_URL = "https://script.google.com/macros/s/AKfycbyHcCo--AlroLq1LFv_hPeDkkfGF6Nkw3BZgbDDULrYqR9dBnEVYYyS4cjOKBrn1t5wRg/exec";

document.querySelector(".kettei").addEventListener("click", () => {
    const userID = document.getElementById("roguinID").value;
    const pass = document.getElementById("pass").value;

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            mode: "login",
            userID: userID,
            pass: pass
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                alert("ログイン成功！");
                // ここで遷移先を指定
                // location.href = "home.html";
            } else {
                alert("IDまたはパスワードが違います");
            }
        });
});
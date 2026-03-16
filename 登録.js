const API_URL = "https://script.google.com/macros/s/AKfycbyHcCo--AlroLq1LFv_hPeDkkfGF6Nkw3BZgbDDULrYqR9dBnEVYYyS4cjOKBrn1t5wRg/exec";

document.querySelector("button").addEventListener("click", () => {
    const name = document.querySelector("input[name='name']").value;
    const mail = document.querySelector("input[name='mail']").value;
    const userID = document.querySelector("input[name='ID']").value;
    const pass = document.querySelector("input[name='pass']").value;
    const pass2 = document.querySelector("input[name='passŠm”F']").value;

    if (pass !== pass2) {
        alert("ƒpƒXƒ[ƒh‚ªˆê’v‚µ‚Ü‚¹‚ñ");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            mode: "register",
            name: name,
            mail: mail,
            userID: userID,
            pass: pass
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                alert("“o˜^Š®—¹I");
                location.href = "index.html";
            } else {
                alert("“o˜^¸”sF" + data.message);
            }
        });
});
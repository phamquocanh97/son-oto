form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {


        window.location = "file:///C:/Users/Admin/Desktop/son-oto/page/thanks.html";
        // you can put any JS code here
        document.getElementById("sheetdb-form").reset();
    });
});
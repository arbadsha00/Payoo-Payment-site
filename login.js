document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const pin = document.getElementById("pin").value;
    if (name === "" || pin === "")
    {
        alert("Enter Data");
    }
    else
    {
        window.location.href="./home.html"
        }
    
});

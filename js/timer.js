function startTimer() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var hour = date.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = date.getMinutes();
    if (minute < 10) minute = "0" + minute;

    var second = date.getSeconds();
    if (second < 10) second = "0" + second;

    document.getElementById("timer").innerHTML = day + "/" + month + "/" + year + " | " +
                                                 hour + ":" + minute + ":" + second;
    setTimeout("startTimer()", 1000);
}

window.onload = () => {
    let drawing = document.getElementById("drawing");
    if (drawing.getContext) {
        let context = drawing.getContext("2d");
        // context.strokeStyle = "red";//描边色
        // context.fillStyle = "#0000ff";//填充色
        context.fillStyle = "#ff0000";
        context.fillReact(10, 10, 100, 100);
    }
    else {
        alert("do not support canvas")
    }
}
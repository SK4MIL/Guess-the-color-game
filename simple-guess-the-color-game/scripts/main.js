

function getPickedColor(){
    let pickedColor = document.getElementById("pickedColor")
    let red = document.getElementById("ColorPicker_Red").value;
    let green = document.getElementById("ColorPicker_Green").value;
    let blue = document.getElementById("ColorPicker_Blue").value;

    let colorString = `rgb(${red}, ${green}, ${blue})`

    pickedColor.style.backgroundColor = colorString

    //compare this color to the random color picked
    //display the outcome defined by delta E value (under 4 it)
}
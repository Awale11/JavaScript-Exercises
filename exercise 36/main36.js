// Interactive Color Picker

// Objective: Build an interactive color picker tool where users can select colors from an input field, see a real-time preview of the selected color, and keep a history of all the colors they’ve selected. Users should also be able to clear the color history.


const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearColorHistory = document.querySelector('#clearColorHistory');

colorPicker.addEventListener('input', function(){
   console.log(colorPicker.value);
//    real-time on-izleme
    colorPreview.style.backgroundColor = colorPicker.value;
    //    we can code also like this
    // const selectColor = colorPicker.value;
    // colorPreview.style.background = selectColor;
    
// secilen renklerin gecmisi tutuluyor
    const addList = document.createElement('li');
    addList.textContent = colorPicker.value;
    colorHistory.appendChild(addList);
//liste yazinin kendisi secilen renkte gorunyor
    addList.style.color = colorPicker.value;

})
// gecmis temizlenebiliyor
clearColorHistory.addEventListener('click',function(){
    colorHistory.innerHTML = '';
})


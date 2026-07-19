// Modifying Styles

const image = document.querySelector('#image');

function changeImage() {

    const url = prompt('odi enter your image url:');

    image.setAttribute('src', url);

    const borderColor = prompt('please enter the border color you want');
    image.style.border = `2px solid ${borderColor}`;

    const width = prompt('please enter the width of the image that you want(in pixels)');
    image.style.width = width + "px";

    const height = prompt('please enter the height of the image you want(in pixels)');
    image.style.height = height + "px";

    const borderRadius = prompt('please enter the border raduis of the image you want(in pixels)');
    image.style.borderRadius = borderRadius + "px";

}
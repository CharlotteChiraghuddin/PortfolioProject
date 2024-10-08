const a1 = ['teacozy', 'naturetrail', 'mixed-messages'];
let i = 0;

const arrowRight = document.getElementsByClassName('right-arrow')[0];
const arrowLeft = document.getElementsByClassName('left-arrow')[0];

const removeClasses = (className) => {
    let elements = document.getElementsByClassName(className);
    for (let element of elements) {
        element.classList.remove('activeR', 'activeL', 'active-description');
    }
};

const rightArrow = () => {
    // Increment index
    i++;
    if (i >= a1.length) i = 0;

    // Remove active classes from all slides
    a1.forEach(removeClasses);

    // Add active class to new slides
    let previewToShow = document.getElementsByClassName(a1[i])[0];
    previewToShow.classList.add('activeR');

    // Add active-description class to new description
    let descriptionToShow = document.getElementsByClassName(a1[i])[1];
    descriptionToShow.classList.add('active-description');
};

const leftArrow = () => {
    // Decrement index
    i--;
    if (i < 0) i = a1.length - 1;

    // Remove active classes from all slides
    a1.forEach(removeClasses);

    // Add active class to new slides
    let previewToShow = document.getElementsByClassName(a1[i])[0];
    previewToShow.classList.add('activeL');

    // Add active-description class to new description
    let descriptionToShow = document.getElementsByClassName(a1[i])[1];
    descriptionToShow.classList.add('active-description');
};

document.addEventListener('DOMContentLoaded', () => {
    arrowRight.addEventListener('click', rightArrow);
    arrowLeft.addEventListener('click', leftArrow);
});
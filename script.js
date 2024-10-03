const a1 = ['teacozy', 'naturetrail', 'mixed-messages'];

let eventTarget = document.getElementsByClassName('right-arrow')[0];
let i = 0;

const rightArrow = () => {
    // Remove active and active-description class from all slides
    a1.forEach(className => {
        let elements = document.getElementsByClassName(className);
        for (let element of elements) {
            element.classList.remove('active');
            element.classList.remove('active-description');
        }
    });

    // Add active class to new slides
    let previewToShow = document.getElementsByClassName(a1[i])[0];
    previewToShow.classList.add('active');

    // Add active-description class to new description
    let descriptionToShow = document.getElementsByClassName(a1[i])[1];
    descriptionToShow.classList.add('active-description');

    // Increment index
    i++;

    // Reset index if it exceeds array length
    if (i >= a1.length) i = 0;
};

eventTarget.addEventListener('click', rightArrow);
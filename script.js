const a1 = ['teacozy', 'naturetrail', 'mixed-messages'];
const a2 = ['mixed-messages', 'teacozy', 'naturetrail'];

let eventTarget = document.getElementsByClassName('right-arrow')[0];
let i = 0;

const rightArrow = () => {
    // Remove active class from all slides
    a1.forEach(className => {
        let elements = document.getElementsByClassName(className);
        for (let element of elements) {
            element.classList.remove('active');
        }
    });

    a2.forEach(className => {
        let elements = document.getElementsByClassName(className);
        for (let element of elements) {
            element.classList.remove('active');
        }
    });

    // Add active class to new slides
    let elementsToShow = document.getElementsByClassName(a1[i]);
    for (let element of elementsToShow) {
        element.classList.add('active');
    }

    // Increment index
    i++;

    // Reset index if it exceeds array length
    if (i >= a1.length) i = 0;
};

eventTarget.addEventListener('click', rightArrow);
function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const difference = endDate.getTime() - beginDate.getTime();
    return Math.floor(difference / (1000 * 60 * 60 * 24));
}

// find all images without alternate text
// and give them a red border
function process() {
    const images = document.querySelectorAll('img');
    for (let image of images) {
        if (!image.alt) {
            image.style.border = '1px solid red';
        }
    }
}

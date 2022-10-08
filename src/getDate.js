export default function getDate(dateContainer) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    dateContainer.textContent =  `${day}-${month}-${year}`;
}

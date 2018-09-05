export default (date) => {

    date = new Date();

    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    const daysNames = ['Sn','Mn','Tu','Wd','Thu','Fr','St'];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}, ${daysNames[day]}`;

}
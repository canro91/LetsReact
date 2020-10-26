const today = () =>
    dateOnly(new Date());

const tomorrow = () =>
    dateOnly(addDays(today(), 1));

const addDays = (date, days) => {
    const newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return dateOnly(newDate);
}

const dateOnly = (date) => {
    return new Date(date.toDateString());
}

export {
    today,
    tomorrow,
    addDays
}
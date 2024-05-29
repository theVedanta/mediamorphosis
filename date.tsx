const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const RenderDate = (start_date: Date, end_date: Date) => {
    return (
        <>
            {months[start_date.getMonth() - 1]}
            &nbsp;
            {start_date.getFullYear()}
            &nbsp;-&nbsp;
            {months[end_date.getMonth() - 1]}
            &nbsp;
            {end_date.getFullYear()}
        </>
    );
};

export { months, RenderDate };

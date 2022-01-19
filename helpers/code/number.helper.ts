export const comas = (number: number | string = 0, toFixed: number = 2) => {
    number = parseFloat(`${number || 0}`).toFixed(toFixed);

    let split = `${number}`.split(".");
    return `${`${split[0]}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${split[1] ? "." : ""}${split[1] || ""}`
};
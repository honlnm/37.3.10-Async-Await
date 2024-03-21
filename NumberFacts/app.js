let favNumber = 16;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
});

// 2.
let favNumbers = [3, 6, 9];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

// 3.
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});

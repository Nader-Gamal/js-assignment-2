var quotes = [
    `<p class="descritpion">“You only live once, but if you do it right, once is enough.”</p>
    <p class="descritpion">― Mae West</p>`,
    `<p class="descritpion">“In three words I can sum up everything I've learned about life: it goes on.”</p>
    <p class="descritpion">― Robert Frost</p>`,
    `<p class="descritpion">“If you tell the truth, you don't have to remember anything.”</p>
    <p class="descritpion">― Mark Twain</p>`,
    `<p class="descritpion">“A friend is someone who knows all about you and still loves you.</p>
    <p class="descritpion">― Elbert Hubbard</p>`,
    `<p class="descritpion">“To live is the rarest thing in the world. Most people exist, that is all.”</p>
    <p class="descritpion">― Oscar Wilde</p>`,
    `<p class="descritpion">“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”</p>
    <p class="descritpion">― Martin Luther King</p>`,
    `<p class="descritpion">“It is better to be hated for what you are than to be loved for what you are not.”</p>
    <p class="descritpion">― Andre Gide</p>`,
    `<p class="descritpion">“Be yourself; everyone else is already taken.”</p>
    <p class="descritpion">― Oscar Wilde</p>`,
    `<p class="descritpion">“kesk aliah en dalbwa.”</p>
    <p class="descritpion">― Adel Shakl</p>`
];

var displayedQuotes = [];

function getRandomQuote() {
    if (displayedQuotes.length === quotes.length) {
        displayedQuotes = [];
    }

    var randomNumber;
    for (var i = 0; i < quotes.length; i++) {
        randomNumber = Math.floor(Math.random() * quotes.length);
        if (!displayedQuotes.includes(randomNumber)) {
            displayedQuotes.push(randomNumber);
            break;
        }
    }

    var randomQuote = `<h2 class="descritpion">${quotes[randomNumber]}</h2>`;
    document.getElementById("demo").innerHTML = randomQuote;
}
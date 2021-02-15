const quoteArray = [
    'A book must be the axe for the frozen sea within us.',
    'I am a cage, in search of a bird.',
    'Many a book is like a key to unknown chambers within the castle of one’s own self.',
    'I am free and that is why I am lost.',
    'A First Sign of the Beginning of Understanding is the Wish to Die.',
    'The meaning of life is that it stops.',
    'Books are a narcotic.',
    'It\'s only because of their stupidity that they\'re able to be so sure of themselves.',
    'Writing is utter solitude, the descent into the cold abyss of oneself.',
    'I am in chains. Do not touch my chains.'
];

const linesArray = [
    'Life is a wheel of fortune and it’s my turn to spin it.',
    'You gotta be able to smile through the bullshit.',
    'Everybody’s at war with different things, I’m at war with my own heart sometimes.',
    'My mama always used to tell me: if you can’t find something to live for, you best find something to die for.',
    'You see my tears, in the rain underneath it all, we’re just the same.',
    'Life is too short to live the same day twice. So each new day make sure you live your life.',
    'Memories have to be our most painful blessing.'
];

const namesArray = [
    'Thomas Aequinas',
    'Aristotle',
    'Michel Foucault',
    'Confucius',
    'Immanuel Kant',
    'Karl Marx',
    'Plato'
]

const putOutRandomQuote = () => {
    let number1 = (Math.floor(Math.random()*9));
    let number2 = (Math.floor(Math.random()*6));
    let number3 = (Math.floor(Math.random()*6));
    console.log(`${quoteArray[number1]}${linesArray[number2]} (${namesArray[number3]})`);
}

putOutRandomQuote();


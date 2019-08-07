const anotherFactButtonElement = document.getElementById('another-fact');
const factsContainerElement = document.getElementById('facts');

// okay. if you can open index.js - you can read all facts withour button clicking
const factsHtml = [
    'Software Engineer',
    'Live in Zaporizhzhya, Ukraine',
    'Study at the magistracy of <a href="https://www.zieit.edu.ua/">ZIEIT</a>',
    'Also have programming engineering diploma of same univercity',
    'And finally have <a href="http://zkrzntu.org.ua/">college</a> Applied Math diploma',
    'To be to be continued...'
]

let nextFactIndex = 0;

const addFact = (nextFactIndex) => {
    const factElement = document.createElement('p');
    factElement.className = 'fact';
    factElement.innerHTML = factsHtml[nextFactIndex];
    factsContainerElement.append(factElement);

    console.log('fact added');
}

anotherFactButtonElement.addEventListener('click', () => {

    addFact(nextFactIndex);
    nextFactIndex++;
    window.scrollTo(0, document.body.scrollHeight);

    if (nextFactIndex === factsHtml.length) {
        anotherFactButtonElement.innerHTML = 'That\'s all. Thanks!';
        anotherFactButtonElement.disabled = true;  
    } 
});

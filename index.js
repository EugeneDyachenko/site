const anotherFactButtonElement = document.getElementById('another-fact');
const factsContainerElement = document.getElementById('facts');

// okay. if you can open index.js - you can read all facts withour button clicking
const factsHtml = [
    'Software Engineer',
    'Live in Zaporizhzhya, Ukraine',
    'Study at the magistracy of <a href="https://www.zieit.edu.ua/">ZIEIT</a>',
    'Also, have programming engineering diploma of the same university',
    'And finally, have <a href="http://zkrzntu.org.ua/">college</a> Applied Math diploma',
    '21 years old',
    'have 15+ public speech in local IT communities',
    'Interested in Machine Learning',
    'Wrote Diploma using image recognition',
    'Even have ML version of the <a href="https://docs.google.com/document/d/1h0RcpU7GxpT98oedMrl5jjP4Yec0ANg2YOXnkj3aJqU">resume</a>',
    'Half of the year was teaching children python, js, HTML and CSS',
    'Organized 10+ IT and non-IT events',
    'Really like to organize events',
    'Three times taught javascript to group of people',
    '4th place in Ukraine informatical olympiad (2016)',
    'Created telegram channel with funny videos - but gave up',
    'Know C++ basics',

    'Optimist',
    'Like self-development and order',
    'Lost half of life in video games',
    'Made friend write a lot of facts about me',
    'Like reading',
    'Don\t like boring things',
    'Pixel is the best smartphone ever',
    'Lost Pixel 2XL in bus',
    'Favorite city - Kiev',
    'Like rap music',
    'And rap battles',
    'Favorite color - green',
    'Love Dariiia',
    'To be to be continued...',
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

const anotherFactButtonElement = document.getElementById('another-fact');
const factsContainerElement = document.getElementById('facts');
const socialAnchorsElements = [...document.querySelectorAll('.icon a')];

// okay. if you can open index.js - you can read all facts without any clicking
const factsHtml = [
    'Have a programming engineering diploma of the <a href="https://www.zieit.edu.ua/" rel="nofollow">ZIEIT</a>',
    'Also, have a <a href="http://zkrzntu.org.ua/" rel="nofollow">college</a> Applied Math diploma',
    'Created a <a href="https://medium.com/@eugenedyachenko/welcome-to-community-itself-dd526bca58b1" rel="nofollow">local IT community</a> in Zaporizhzhia',
    'have 15+ public speeches in local IT community',
    'Interested in Machine Learning',
    'Using image recognition and PyTorch in my diploma work',
    'Have ML version of the <a href="https://docs.google.com/document/d/1h0RcpU7GxpT98oedMrl5jjP4Yec0ANg2YOXnkj3aJqU" rel="nofollow">resume</a>',
    'Was teaching Python, JavaScript, html and css to the children group',
    'Organized more than 10 IT and non-IT events',
    'Really like to organize events',
    'Was a JavaScript mentor for a group of people three times',
    '4th place in Ukraine informatics olympiad (2016)',
    'Know C++ basics',
    'Have some articles in Medium: <a href="https://medium.com/@eugenedyachenko/javascript-course-lesson-0-d8cfa98ae2ec" rel="nofollow">article #1</a> <a href="https://medium.com/@eugenedyachenko/javascript-course-lesson-1-aee1ce9bcae">article #2</a>',
    'Write an <a href="https://medium.com/@eugenedyachenko/%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B5-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%83-%D0%B2-it-8f37fc6aaf40">article</a> about searching work for juniors',
    'Like to improve processes',

    'Warning! Facts below is not important for you :)',

    '23 years old',
    'Have changed 6 rent apartment in 1.5 years',
    'Optimist',
    'Like self-development and order',
    'Lost a half of life in the video games',
    'Like reading',
    'The best city - Kyiv',
    'Like a good rap music',
    'Favorite color - green',
    'Like a swimming',
    'Like a rainy weather',
    'Dream when someone will release a useful AR glasses',
    'Cannot ride a bicycle',
    'To be to be continued.'
]

let nextFactIndex = 0;

const addFact = (nextFactIndex) => {
    const factElement = document.createElement('p');
    factElement.className = 'fact';
    factElement.innerHTML = factsHtml[nextFactIndex];
    factsContainerElement.append(factElement);

    console.log('fact added');
}

const trackSocialAnchorClick = (event) => {
    const socialName = event.currentTarget.dataset.name;

    gtag('event', `${socialName}_clicked`, {
        'event_category': 'button_clicked',
        'event_label': `${socialName}_clicked`,
        'value': 10,
    });
}

for (const anchor of socialAnchorsElements) {
    anchor.addEventListener('click', trackSocialAnchorClick);
}

anotherFactButtonElement.addEventListener('click', () => {

    addFact(nextFactIndex);
    nextFactIndex++;
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    });

    const gEventLabel = (nextFactIndex === 1) ? 'first_fact_button_click' : 'fact_button_click';
    const gEventValue = (nextFactIndex === 1) ? 5 : 1;

    gtag('event', gEventLabel, {
        'event_category': 'button_clicked',
        'event_label': gEventLabel,
        'value': gEventValue,
    });

    if (nextFactIndex === factsHtml.length) {
        anotherFactButtonElement.innerHTML = 'That\'s all. Thanks!';
        anotherFactButtonElement.disabled = true;
    }
});

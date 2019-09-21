const anotherFactButtonElement = document.getElementById('another-fact');
const factsContainerElement = document.getElementById('facts');
const socialAnchorsElements = [...document.querySelectorAll('.icon a')];

// okay. if you can open index.js - you can read all facts withour button clicking
const factsHtml = [
    'Software Engineer',
    'Live in Zaporizhzhya, Ukraine',
    'Study at the magistracy of <a href="https://www.zieit.edu.ua/" rel="nofollow">ZIEIT</a>',
    'Also, have programming engineering diploma of the same university',
    'And finally, have <a href="http://zkrzntu.org.ua/" rel="nofollow">college</a> Applied Math diploma',
    'have 15+ public speech in local IT communities',
    'Interested in Machine Learning',
    'Wrote Diploma using image recognition',
    'Even have ML version of the <a href="https://docs.google.com/document/d/1h0RcpU7GxpT98oedMrl5jjP4Yec0ANg2YOXnkj3aJqU" rel="nofollow">resume</a>',
    'Half of the year was teaching children python, js, HTML and CSS',
    'Organized 10+ IT and non-IT events',
    'Really like to organize events',
    'Was JavaScript mentor for a group of people three times',
    '4th place in Ukraine informatical olympiad (2016)',
    'Know C++ basics',
    'Have some articles in Medium: <a href="https://medium.com/@eugenedyachenko/javascript-course-lesson-0-d8cfa98ae2ec" rel="nofollow">article #1</a> <a href="https://medium.com/@eugenedyachenko/javascript-course-lesson-1-aee1ce9bcae">article #2</a>',
    'Write <a href="https://medium.com/@eugenedyachenko/%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B5-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%83-%D0%B2-it-8f37fc6aaf40">article about work searches</a>',

    'Warning! Facts below baybe not important for you :)',

    '22 years old',
    'Created telegram channel with funny videos - but gave up',
    'Optimist',
    'Like self-development and order',
    'Lost half of life in video games',
    'Made friend write a lot of facts about me',
    'Like reading',
    'Don\'t like boring things',
    'Pixel is the best smartphone ever',
    'Lost Pixel 2XL in bus',
    'Favorite city - Kiev',
    'Cannot ride bike',
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

let questions = [
    {
        id: 'a',
        question: "When I plan something, I leave nothing to chance."
    },    {
        id: 'b',
        question: "I don’t like being the center of attention."
    },    {
        id: 'c',
        question: "It is not compatible with my working style to constantly have to consult others."
    },    {
        id: 'd',
        question: "Others know me as a very straight talker."
    },    {
        id: 'e',
        question: "I stay motivated even if the rewards seem a long way off."
    }
];

let html = '';

/* generate questionnaire components from the questions data*/
questions.forEach( el => {
    html += `
    <p>${el.id}. ${el.question}</p>
    <div class="radio-button-container">
        <input type="radio" id="${el.id}-1" name="${el.id}" value="1" required>
        <label for="${el.id}-1">completely untrue</label>
        <br>        
        <input type="radio" id="${el.id}-2" name="${el.id}" value="2" required>
        <label for="${el.id}-2">untrue</label>
        <br>    
        <input type="radio" id="${el.id}-3" name="${el.id}" value="3" required>
        <label for="${el.id}-3">slightly untrue</label>
        <br>    
        <input type="radio" id="${el.id}-4" name="${el.id}" value="4" required>
        <label for="${el.id}-4">slightly true</label>
        <br>    
        <input type="radio" id="${el.id}-5" name="${el.id}" value="5" required>
        <label for="${el.id}-5">true</label>
        <br>    
        <input type="radio" id="${el.id}-6" name="${el.id}" value="6" required>
        <label for="${el.id}-6">completely true</label>
    </div>
    `
})

/* add the submit button in the end */
html += `<input type="submit" value="Submit" class="submit-btn" >`

/* get the form element and add the generated questionaires to it */
document.getElementById("questionnaire").innerHTML = html;

/** sending and alerting results on submitting form */
function onSubmit(form) {
    let formData = new FormData(form);

    let result = 0;

    for (let [key, value] of formData.entries()) {
        result += (+value);
    }

    /* sending the result nowhere */
    req = new XMLHttpRequest();
    req.open("POST", "")
    req.send(result);

    /* alerting user about their result */
    alert(`your result is ${result} \nCongratulations! You are as batshit crazy as the rest of us!`);
}

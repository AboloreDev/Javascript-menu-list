//using selectors inside the element
const question = document.querySelectorAll('.question');

// Loop Through Questions
question.forEach(questions => {
    // console.log(questions)
    // Select the question button
    const questionBtn = questions.querySelector('.question-btn')

    // Listen for a click event on the Button
    questionBtn.addEventListener('click', function() {
        // To Make One question collapses after anoyher has been Clicked
        question.forEach(item => {
            if(item !== questions) {
                item.classList.remove('show-text')
            }
        })
        // Toggle the show-text
        questions.classList.toggle('show-text')
    })
    
})








// // traversing the dom

// const questionBtn = document.querySelectorAll('.question-btn');

// questionBtn.forEach(btns => {
//     btns.addEventListener('click', function(e) {
//         const questions = e.currentTarget.parentElement.parentElement

//         questions.classList.toggle('show-text')
//     })
// })
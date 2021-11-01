document.addEventListener('DOMContentLoaded', init);

function init(){
    const steps = document.querySelector('.steps');
    const stepsToggleBtn = document.querySelector('.steps__toggle');
    const stepsToggleText = document.querySelector('.toggle__text');
    const formInputs = Array.from(document.querySelectorAll('.field__input'));
    const promoIcon = document.querySelector('.field__promo-icon');
    const nextBtn = document.getElementById('next-button');

    let stepsShown = false;

    // Toggle Steps
    stepsToggleBtn.addEventListener('click', toggleSteps);
    stepsToggleBtn.addEventListener('keydown', (e) => {
        if(e.keyCode === 13 || e.keyCode === 32){
            toggleSteps;
        }
    });

    function toggleSteps(){
        if(stepsShown){
            steps.classList.add('steps--closed');
            stepsToggleText.textContent = 'Show More';
            stepsShown = false;
        }
        else{
            steps.classList.remove('steps--closed');
            stepsToggleText.textContent = 'Show Less';
            stepsShown = true;
        }
    }

    // Event listeners for inputs
    formInputs.forEach(input => {
        input.addEventListener('input', checkForm)
    })

    function checkForm(){
        let completed = formInputs.every(input => { return input.value.length > 0
        })
        
        if(completed){
            promoIcon.classList.add('field__promo-icon--active');
            nextBtn.classList.add('form__button--active');
            nextBtn.classList.remove('form__button--disabled');
        }
        else{
            promoIcon.classList.remove('field__promo-icon--active');
            nextBtn.classList.remove('form__button--active');
            nextBtn.classList.add('form__button--disabled');
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const stepOne = document.getElementById('next-personal-info');
    const stepTwo = document.getElementById('next-plan');
    const stepThree = document.getElementById('next-addon');
    const stepFour = document.getElementById('next-finish');
    const personalInfo = document.getElementById('personal-info');
    const plan = document.getElementById('plan');
    const addons = document.getElementById('addon-step');
    const finish = document.getElementById('finish')
    const successMessage = document.getElementById('confirmation');
    const firstActive = document.getElementById('step-1-circle');
    const secondActive = document.getElementById('step-2-circle');
    const thirdActive = document.getElementById('step-3-circle');
    const fourthActive = document.getElementById('step-4-circle');
    const backOne = document.querySelector('#back-one');
    const backTwo = document.querySelector('#back-two');
    const backThree = document.querySelector('#back-three');


    firstActive.parentElement.classList.add('active');

    stepOne.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.remove('hide');
        addons.classList.add('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        secondActive.parentElement.classList.add('active');
    });

    stepTwo.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.add('hide');
        addons.classList.remove('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        thirdActive.parentElement.classList.add('active');
    });

    stepThree.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.add('hide');
        addons.classList.add('hide');
        finish.classList.remove('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        fourthActive.parentElement.classList.add('active');
    });

    stepFour.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.add('hide');
        addons.classList.add('hide');
        finish.classList.add('hide');
        successMessage.classList.remove('hide');
        removeActiveClassFromAllCircles();
        fourthActive.parentElement.classList.add('active');
    });

    function removeActiveClassFromAllCircles() {
        const sidebarSteps = document.querySelectorAll('.sidebar-step');
        sidebarSteps.forEach(step => {
            step.classList.remove('active');
        });
    }

    firstActive.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.remove('hide');
        plan.classList.add('hide');
        addons.classList.add('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        firstActive.parentElement.classList.add('active');
    });

    secondActive.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.remove('hide');
        addons.classList.add('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        secondActive.parentElement.classList.add('active');
    });

    backOne.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.remove('hide');
        plan.classList.add('hide');
        addons.classList.add('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        firstActive.parentElement.classList.add('active');

    });

    backTwo.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.remove('hide');
        addons.classList.add('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        secondActive.parentElement.classList.add('active');

    });

    backThree.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.add('hide');
        addons.classList.remove('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        thirdActive.parentElement.classList.add('active');
    });


});
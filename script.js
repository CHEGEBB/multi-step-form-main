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

    thirdActive.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.add('hide');
        addons.classList.remove('hide');
        finish.classList.add('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        thirdActive.parentElement.classList.add('active');
    });

    fourthActive.addEventListener('click', (e) => {
        e.preventDefault();
        personalInfo.classList.add('hide');
        plan.classList.add('hide');
        addons.classList.add('hide');
        finish.classList.remove('hide');
        successMessage.classList.add('hide');
        removeActiveClassFromAllCircles();
        fourthActive.parentElement.classList.add('active');
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

    const toggleInput = document.getElementById('toggle');

    toggleInput.addEventListener('change', function() {
        const yearlyContentArcade = '<img src="./assets/images/icon-arcade.svg" alt="Arcade"><div class="arc">Arcade</div><div class="price"> $90/yr</div><div class="free" style="color:hsl(213, 96%, 18%);font-weight:500;margin-left:15px;font-size:14px;">2 months free</div>';
        const yearlyContentAdvanced = '<img src="./assets/images/icon-advanced.svg" alt="Advanced"><div class="ad">Advanced</div><div class="price2"> $120/yr</div><div class="free" style="color:hsl(213, 96%, 18%);font-weight:500;margin-left:15px;font-size:14px;">2 months free</div>';
        const yearlyContentPro = '<img src="./assets/images/icon-pro.svg" alt="Pro"><div class="pr">Pro</div><div class="price3"> $150/yr</div><div class="free" style="color:hsl(213, 96%, 18%);font-weight:500;margin-left:15px;font-size:14px;">2 months free</div>';
        const yearlyOnlineService = '<div class="service" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="online-service" class="addon-checkbox"><label for="online-service"><h3>Online service</h3><p>Access to multiplayer games</p></label></div><div class="price1"> +$10/yr</div>';
        const monthlyAddonOnlineService = '<div class="service" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="online-service" class="addon-checkbox"><label for="online-service"><h3>Online service</h3><p>Access to multiplayer games</p></label></div><div class="price1"> +$1/mo</div>';
        const yearlyAddonStorage = '<div class="storage" style="display:flex;flex-direction:row;gap:20px;border:1.5px solid solid hsl(243, 100%, 62%);"><input type="checkbox" id="storage" class="addon-checkbox"><label for="storage"><h3>Larger storage</h3><p>Extra 1TB of cloud save</p></label><div class="price1" style="margin-left:130px;"> +$20/yr</div></div>';
        const monthlyAddonStorage = '<div class="storage" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="storage" class="addon-checkbox"><label for="storage"><h3>Larger storage</h3><p>Extra 1TB of cloud save</p></label><div class="price1"> +$2/mo</div></div>';
        const yearlyAddonProfile = '<div class="profile" style="display:flex;flex-direction:row;gap:20px;border:1.5px solid solid hsl(243, 100%, 62%);"><input type="checkbox" id="profile" class="addon-checkbox"><label for="profile"><h3>Customizable Profile</h3><p>Custom theme on your profile</p></label><div class="price1"> +$20/yr</div></div>';
        const monthlyAddonProfile = '<div class="profile" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="profile" class="addon-checkbox"><label for="profile"><h3>Customizable Profile</h3><p>Custom theme on your profile</p></label><div class="price1"> +$2/mo</div></div>'

        if (this.checked) {
            // If yearly plan is selected
            document.querySelector('.monthly').style.display = 'none';
            document.querySelector('.yearly').style.display = 'inline';

            // Replace monthly prices with yearly prices
            document.querySelector('.arcade').innerHTML = yearlyContentArcade;
            document.querySelector('.advanced').innerHTML = yearlyContentAdvanced;
            document.querySelector('.pro').innerHTML = yearlyContentPro;
            document.querySelector('.online').innerHTML = yearlyOnlineService;
            document.querySelector('.storage').innerHTML = yearlyAddonStorage;
            document.querySelector('.profile').innerHTML = yearlyAddonProfile;
        } else {
            // If monthly plan is selected
            document.querySelector('.monthly').style.display = 'inline';
            document.querySelector('.yearly').style.display = 'none';

            // Restore monthly prices
            document.querySelector('.arcade').innerHTML = '<img src="./assets/images/icon-arcade.svg" alt="Arcade"><div class="arc">Arcade</div><div class="price"> $9/mo</div>';
            document.querySelector('.advanced').innerHTML = '<img src="./assets/images/icon-advanced.svg" alt="Advanced"><div class="ad">Advanced</div><div class="price2"> $12/mo</div>';
            document.querySelector('.pro').innerHTML = '<img src="./assets/images/icon-pro.svg" alt="Pro"><div class="pr">Pro</div><div class="price3"> $15/mo</div>';
            document.querySelector('.online').innerHTML = monthlyAddonOnlineService;
            document.querySelector('.storage').innerHTML = monthlyAddonStorage;
            document.querySelector('.profile').innerHTML = monthlyAddonProfile;
        }
    });




});
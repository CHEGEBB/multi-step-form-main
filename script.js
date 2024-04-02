document.addEventListener('DOMContentLoaded', function() {
    const stepOne = document.getElementById('next-personal-info');
    const stepTwo = document.getElementById('next-plan');
    const stepThree = document.getElementById('next-addon');
    const stepFour = document.getElementById('next-finish');
    const personalInfo = document.getElementById('personal-info');
    const plan = document.getElementById('plan');
    const addons = document.getElementById('addon-step');
    const finish = document.getElementById('summary')
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
        const monthlyAddonOnlineService = '<div class="service" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="online-service" class="addon-checkbox"><label for="online-service"><h3>Online service</h3><p>Access to multiplayer games</p></label></div><div class="price4"> +$1/mo</div>';
        const monthlyAddonStorage = '<div class="storage" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="storage" class="addon-checkbox"><label for="storage"><h3>Larger storage</h3><p>Extra 1TB of cloud save</p></label><div class="price5"> +$2/mo</div></div>';
        const monthlyAddonProfile = '<div class="profile" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="profile" class="addon-checkbox"><label for="profile"><h3>Customizable Profile</h3><p>Custom theme on your profile</p></label><div class="price6"> +$2/mo</div></div>'
        const yearlyOnlineService = '<div class="service" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="online-service" class="addon-checkbox"><label for="online-service"><h3>Online service</h3><p>Access to multiplayer games</p></label></div><div class="price4"> +$10/yr</div>';
        const yearlyAddonStorage = '<div class="storage" style="display:flex;flex-direction:row;gap:20px;border:1.5px solid solid hsl(243, 100%, 62%);"><input type="checkbox" id="storage" class="addon-checkbox"><label for="storage"><h3>Larger storage</h3><p>Extra 1TB of cloud save</p></label><div class="price5" style="margin-left:130px;"> +$20/yr</div></div>';
        const yearlyAddonProfile = '<div class="profile" style="display:flex;flex-direction:row;gap:20px;border:1.5px solid solid hsl(243, 100%, 62%);"><input type="checkbox" id="profile" class="addon-checkbox"><label for="profile"><h3>Customizable Profile</h3><p>Custom theme on your profile</p></label><div class="price6"> +$20/yr</div></div>';

        if (this.checked) {

            document.querySelector('.monthly').style.display = 'none';
            document.querySelector('.yearly').style.display = 'inline';


            document.querySelector('.arcade').innerHTML = yearlyContentArcade;
            document.querySelector('.advanced').innerHTML = yearlyContentAdvanced;
            document.querySelector('.pro').innerHTML = yearlyContentPro;
            document.querySelector('.online').innerHTML = yearlyOnlineService;
            document.querySelector('.storage').innerHTML = yearlyAddonStorage;
            document.querySelector('.profile').innerHTML = yearlyAddonProfile;
        } else {

            document.querySelector('.monthly').style.display = 'inline';
            document.querySelector('.yearly').style.display = 'none';


            document.querySelector('.arcade').innerHTML = '<img src="./assets/images/icon-arcade.svg" alt="Arcade"><div class="arc">Arcade</div><div class="price"> $9/mo</div>';
            document.querySelector('.advanced').innerHTML = '<img src="./assets/images/icon-advanced.svg" alt="Advanced"><div class="ad">Advanced</div><div class="price2"> $12/mo</div>';
            document.querySelector('.pro').innerHTML = '<img src="./assets/images/icon-pro.svg" alt="Pro"><div class="pr">Pro</div><div class="price3"> $15/mo</div>';
            document.querySelector('.online').innerHTML = monthlyAddonOnlineService;
            document.querySelector('.storage').innerHTML = monthlyAddonStorage;
            document.querySelector('.profile').innerHTML = monthlyAddonProfile;
        }
    });

    // adding event listeneer to plan selection so when arcade, advanced or pro is clicked the value if on monthly or yearly is selected and stored in the value attribute
    const arcadeValue = document.querySelector('.arcade');
    const advancedValue = document.querySelector('.advanced');
    const proValue = document.querySelector('.pro');
    const onlineServiceValue = document.querySelector('#online-service');
    const storageValue = document.querySelector('#larger-storage');
    const profileValue = document.querySelector('#custom-profile');


    arcadeValue.addEventListener('click', function() {

        if (document.getElementById('toggle').checked) {
            document.getElementById('plan').value = this.querySelector('.price').textContent;
        } else {
            document.getElementById('plan').value = this.querySelector('.price').textContent;
        }
        const selectedArcadePlan = document.getElementById('plan').value;
        console.log(selectedArcadePlan);
        updateSummary();

    });

    advancedValue.addEventListener('click', (e) => {

        if (document.getElementById('toggle').checked) {
            document.getElementById('plan').value = this.querySelector('.price2').textContent;

        } else {
            document.getElementById('plan').value = this.querySelector('.price2').textContent;
        }
        const selectedAdvancedPlan = document.getElementById('plan').value;
        console.log(selectedAdvancedPlan);
        updateSummary();

    });

    proValue.addEventListener('click', (e) => {

        if (document.getElementById('toggle').checked) {
            document.getElementById('plan').value = this.querySelector('.price3').textContent;

        } else {
            document.getElementById('plan').value = this.querySelector('.price3').textContent;
        }
        const selectedProPlan = document.getElementById('plan').value;
        console.log(selectedProPlan);
        updateSummary();

    });

    onlineServiceValue.addEventListener('click', (e) => {
        if (document.getElementById('toggle').checked) {
            document.getElementById('online-service').value = this.querySelector('.price4').textContent;
        } else {
            document.getElementById('online-service').value = this.querySelector('.price4').textContent;
        }
        const selectedOnlineService = document.getElementById('online-service').value;
        console.log(selectedOnlineService);
        updateSummary();

    });

    storageValue.addEventListener('click', (e) => {
        if (document.getElementById('toggle').checked) {
            document.getElementById('larger-storage').value = this.querySelector('.price5').textContent;
        } else {
            document.getElementById('larger-storage').value = this.querySelector('.price5').textContent;
        }
        const selectedStorage = document.getElementById('larger-storage').value;
        console.log(selectedStorage);
        updateSummary();

    });

    profileValue.addEventListener('click', (e) => {
        if (document.getElementById('toggle').checked) {
            document.getElementById('custom-profile').value = this.querySelector('.price6').textContent;
        } else {
            document.getElementById('custom-profile').value = this.querySelector('.price6').textContent;
        }
        const selectedProfile = document.getElementById('custom-profile').value;
        console.log(selectedProfile);
        updateSummary();

    });

    function updateSummary() {
        // Get a reference to the summary section
        const summary = document.querySelector('.summary');

        // Get selected plan
        const selectedPlan = document.getElementById('plan').value;
        const selectedPlanDiv = document.createElement('div');
        const selectedPlanHeader = document.createElement('h3');
        const selectedPlanText = document.createElement('p');
        selectedPlanHeader.textContent = 'Selected Plan:';
        selectedPlanText.textContent = selectedPlan;
        selectedPlanDiv.appendChild(selectedPlanHeader);
        selectedPlanDiv.appendChild(selectedPlanText);

        // Update or append the selected plan to the summary section
        let existingPlanDiv = summary.querySelector('.selected-plan');
        if (existingPlanDiv) {
            existingPlanDiv.replaceWith(selectedPlanDiv);
        } else {
            selectedPlanDiv.classList.add('selected-plan');
            summary.insertBefore(selectedPlanDiv, summary.querySelector('.navigation-buttons')); // Insert before the navigation buttons
        }

        // Get selected addons
        const addonCheckboxes = document.querySelectorAll('.addon-checkbox:checked');
        const selectedAddonsDiv = document.createElement('div');
        const selectedAddonsHeader = document.createElement('h3');
        selectedAddonsHeader.textContent = 'Selected Addons:';
        selectedAddonsDiv.appendChild(selectedAddonsHeader);

        addonCheckboxes.forEach(checkbox => {
            const addonDiv = document.createElement('div');
            addonDiv.classList.add('selected-addon');

            const addonName = document.createElement('p');
            addonName.textContent = checkbox.nextElementSibling.querySelector('h3').textContent;
            addonDiv.appendChild(addonName);

            const addonPrice = document.createElement('p');
            addonPrice.textContent = checkbox.nextElementSibling.querySelector('.price').textContent;
            addonDiv.appendChild(addonPrice);

            selectedAddonsDiv.appendChild(addonDiv);
        });

        // Update or append the selected addons to the summary section
        let existingAddonsDiv = summary.querySelector('.selected-addons');
        if (addonCheckboxes.length > 0) {
            if (existingAddonsDiv) {
                existingAddonsDiv.replaceWith(selectedAddonsDiv);
            } else {
                selectedAddonsDiv.classList.add('selected-addons');
                summary.insertBefore(selectedAddonsDiv, summary.querySelector('.navigation-buttons')); // Insert before the navigation buttons
            }
        } else {
            if (existingAddonsDiv) {
                existingAddonsDiv.remove();
            }
        }

        // Calculate total price
        const totalPrice = calculateTotalPrice();
        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.textContent = `Total Price: $${totalPrice}`;

        // Update or append the total price to the summary section
        let existingTotalPriceDiv = summary.querySelector('.total-price');
        if (existingTotalPriceDiv) {
            existingTotalPriceDiv.replaceWith(totalPriceDiv);
        } else {
            totalPriceDiv.classList.add('total-price');
            summary.insertBefore(totalPriceDiv, summary.querySelector('.navigation-buttons')); // Insert before the navigation buttons
        }

        // Show the summary section
        summary.classList.remove('hide');
    }

});
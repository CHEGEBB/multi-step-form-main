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






            // Constants for yearly and monthly plan and addon prices
            const arcadeYearly = 90;
            const advancedYearly = 120;
            const proYearly = 150;
            const onlineServiceYearly = 10;
            const storageYearly = 20;
            const profileYearly = 20;
            const arcadeMonthly = 9;
            const advancedMonthly = 12;
            const proMonthly = 15;
            const onlineServiceMonthly = 1;
            const storageMonthly = 2;
            const profileMonthly = 2;

            // Function to update the summary
            function updateSummary() {
                // Get the selected plan and addons
                const selectedPlan = document.querySelector('input[name="plan"]:checked').value;
                const selectedAddons = document.querySelectorAll('input[name="addon"]:checked');

                // Calculate the total amount
                let totalAmount = 0;
                if (selectedPlan === 'arcade-yearly') totalAmount += arcadeYearly;
                else if (selectedPlan === 'advanced-yearly') totalAmount += advancedYearly;
                else if (selectedPlan === 'pro-yearly') totalAmount += proYearly;

                selectedAddons.forEach(addon => {
                    const addonId = addon.value;
                    if (addonId === 'online-service') {
                        totalAmount += onlineServiceYearly;
                    } else if (addonId === 'larger-storage') {
                        totalAmount += storageYearly;
                    } else if (addonId === 'custom-profile') {
                        totalAmount += profileYearly;
                    }
                });

                // Update the summary content
                const summary = document.querySelector('.summary');
                summary.innerHTML = `
            <div class="plan-summary">
                <h3 class="plan-title">Selected Plan</h3>
                <h3 class="plan-amount">${selectedPlan}</h3>
            </div>
            <div class="addon-summary">
                <h3 class="addon-title">Selected Addons</h3>
                ${selectedAddons.length > 0 ? '<ul>' : ''}
                ${Array.from(selectedAddons).map(addon => `<li>${addon.dataset.addon}</li>`).join('')}
                ${selectedAddons.length > 0 ? '</ul>' : ''}
            </div>
            <div class="total-summary">
                <h3 class="total-title">Total Amount</h3>
                <h3 class="total-amount">$${totalAmount}/yr</h3>
            </div>
        `;
    }

    // Update summary when plan or addon selection changes
    document.querySelectorAll('input[name="plan"], input[name="addon"]').forEach(input => {
        input.addEventListener('change', updateSummary);
    });

    // Create the summary container
    const summaryContainer = document.createElement('div');
    summaryContainer.classList.add('summary-container');
    document.body.appendChild(summaryContainer);

    // Initial update of the summary
    updateSummary();


});
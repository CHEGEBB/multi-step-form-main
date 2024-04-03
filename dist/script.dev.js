"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var _this = this;

  var stepOne = document.getElementById('next-personal-info');
  var stepTwo = document.getElementById('next-plan');
  var stepThree = document.getElementById('next-addon');
  var stepFour = document.getElementById('next-finish');
  var personalInfo = document.getElementById('personal-info');
  var plan = document.getElementById('plan');
  var addons = document.getElementById('addon-step');
  var finish = document.getElementById('summary');
  var successMessage = document.getElementById('confirmation');
  var firstActive = document.getElementById('step-1-circle');
  var secondActive = document.getElementById('step-2-circle');
  var thirdActive = document.getElementById('step-3-circle');
  var fourthActive = document.getElementById('step-4-circle');
  var backOne = document.querySelector('#back-one');
  var backTwo = document.querySelector('#back-two');
  var backThree = document.querySelector('#back-three');
  firstActive.parentElement.classList.add('active');
  stepOne.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.remove('hide');
    addons.classList.add('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    secondActive.parentElement.classList.add('active');
  });
  stepTwo.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.add('hide');
    addons.classList.remove('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    thirdActive.parentElement.classList.add('active');
  });
  stepThree.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.add('hide');
    addons.classList.add('hide');
    finish.classList.remove('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    fourthActive.parentElement.classList.add('active');
  });
  stepFour.addEventListener('click', function (e) {
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
    var sidebarSteps = document.querySelectorAll('.sidebar-step');
    sidebarSteps.forEach(function (step) {
      step.classList.remove('active');
    });
  }

  firstActive.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.remove('hide');
    plan.classList.add('hide');
    addons.classList.add('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    firstActive.parentElement.classList.add('active');
  });
  secondActive.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.remove('hide');
    addons.classList.add('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    secondActive.parentElement.classList.add('active');
  });
  thirdActive.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.add('hide');
    addons.classList.remove('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    thirdActive.parentElement.classList.add('active');
  });
  fourthActive.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.add('hide');
    addons.classList.add('hide');
    finish.classList.remove('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    fourthActive.parentElement.classList.add('active');
  });
  backOne.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.remove('hide');
    plan.classList.add('hide');
    addons.classList.add('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    firstActive.parentElement.classList.add('active');
  });
  backTwo.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.remove('hide');
    addons.classList.add('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    secondActive.parentElement.classList.add('active');
  });
  backThree.addEventListener('click', function (e) {
    e.preventDefault();
    personalInfo.classList.add('hide');
    plan.classList.add('hide');
    addons.classList.remove('hide');
    finish.classList.add('hide');
    successMessage.classList.add('hide');
    removeActiveClassFromAllCircles();
    thirdActive.parentElement.classList.add('active');
  });
  var toggleInput = document.getElementById('toggle');
  toggleInput.addEventListener('change', function () {
    var yearlyContentArcade = '<img src="./assets/images/icon-arcade.svg" alt="Arcade"><div class="arc">Arcade</div><div class="price"> $90/yr</div><div class="free" style="color:hsl(213, 96%, 18%);font-weight:500;margin-left:15px;font-size:14px;">2 months free</div>';
    var yearlyContentAdvanced = '<img src="./assets/images/icon-advanced.svg" alt="Advanced"><div class="ad">Advanced</div><div class="price2"> $120/yr</div><div class="free" style="color:hsl(213, 96%, 18%);font-weight:500;margin-left:15px;font-size:14px;">2 months free</div>';
    var yearlyContentPro = '<img src="./assets/images/icon-pro.svg" alt="Pro"><div class="pr">Pro</div><div class="price3"> $150/yr</div><div class="free" style="color:hsl(213, 96%, 18%);font-weight:500;margin-left:15px;font-size:14px;">2 months free</div>';
    var monthlyAddonOnlineService = '<div class="service" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="online-service" class="addon-checkbox"><label for="online-service"><h3>Online service</h3><p>Access to multiplayer games</p></label></div><div class="price4"> +$1/mo</div>';
    var monthlyAddonStorage = '<div class="storage" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="storage" class="addon-checkbox"><label for="storage"><h3>Larger storage</h3><p>Extra 1TB of cloud save</p></label><div class="price5"> +$2/mo</div></div>';
    var monthlyAddonProfile = '<div class="profile" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="profile" class="addon-checkbox"><label for="profile"><h3>Customizable Profile</h3><p>Custom theme on your profile</p></label><div class="price6"> +$2/mo</div></div>';
    var yearlyOnlineService = '<div class="service" style="display:flex;flex-direction:row;gap:20px;"><input type="checkbox" id="online-service" class="addon-checkbox"><label for="online-service"><h3>Online service</h3><p>Access to multiplayer games</p></label></div><div class="price4"> +$10/yr</div>';
    var yearlyAddonStorage = '<div class="storage" style="display:flex;flex-direction:row;gap:20px;border:1.5px solid solid hsl(243, 100%, 62%);"><input type="checkbox" id="storage" class="addon-checkbox"><label for="storage"><h3>Larger storage</h3><p>Extra 1TB of cloud save</p></label><div class="price5" style="margin-left:130px;"> +$20/yr</div></div>';
    var yearlyAddonProfile = '<div class="profile" style="display:flex;flex-direction:row;gap:20px;border:1.5px solid solid hsl(243, 100%, 62%);"><input type="checkbox" id="profile" class="addon-checkbox"><label for="profile"><h3>Customizable Profile</h3><p>Custom theme on your profile</p></label><div class="price6"> +$20/yr</div></div>';

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
  }); // adding event listeneer to plan selection so when arcade, advanced or pro is clicked the value if on monthly or yearly is selected and stored in the value attribute

  var arcadeValue = document.querySelector('.arcade');
  var advancedValue = document.querySelector('.advanced');
  var proValue = document.querySelector('.pro');
  var onlineServiceValue = document.querySelector('#online-service');
  var storageValue = document.querySelector('#larger-storage');
  var profileValue = document.querySelector('#custom-profile');
  arcadeValue.addEventListener('click', function () {
    if (document.getElementById('toggle').checked) {
      document.getElementById('plan').value = this.querySelector('.price').textContent;
    } else {
      document.getElementById('plan').value = this.querySelector('.price').textContent;
    }

    var selectedArcadePlan = document.getElementById('plan').value;
    console.log(selectedArcadePlan);
    updateSummary();
  });
  advancedValue.addEventListener('click', function (e) {
    if (document.getElementById('toggle').checked) {
      document.getElementById('plan').value = _this.querySelector('.price2').textContent;
    } else {
      document.getElementById('plan').value = _this.querySelector('.price2').textContent;
    }

    var selectedAdvancedPlan = document.getElementById('plan').value;
    console.log(selectedAdvancedPlan);
    updateSummary();
  });
  proValue.addEventListener('click', function (e) {
    if (document.getElementById('toggle').checked) {
      document.getElementById('plan').value = _this.querySelector('.price3').textContent;
    } else {
      document.getElementById('plan').value = _this.querySelector('.price3').textContent;
    }

    var selectedProPlan = document.getElementById('plan').value;
    console.log(selectedProPlan);
    updateSummary();
  });
  onlineServiceValue.addEventListener('click', function (e) {
    if (document.getElementById('toggle').checked) {
      document.getElementById('online-service').value = _this.querySelector('.price4').textContent;
    } else {
      document.getElementById('online-service').value = _this.querySelector('.price4').textContent;
    }

    var selectedOnlineService = document.getElementById('online-service').value;
    console.log(selectedOnlineService);
    updateSummary();
  });
  storageValue.addEventListener('click', function (e) {
    if (document.getElementById('toggle').checked) {
      document.getElementById('larger-storage').value = _this.querySelector('.price5').textContent;
    } else {
      document.getElementById('larger-storage').value = _this.querySelector('.price5').textContent;
    }

    var selectedStorage = document.getElementById('larger-storage').value;
    console.log(selectedStorage);
    updateSummary();
  });
  profileValue.addEventListener('click', function (e) {
    if (document.getElementById('toggle').checked) {
      document.getElementById('custom-profile').value = _this.querySelector('.price6').textContent;
    } else {
      document.getElementById('custom-profile').value = _this.querySelector('.price6').textContent;
    }

    var selectedProfile = document.getElementById('custom-profile').value;
    console.log(selectedProfile);
    updateSummary();
  });

  function updateSummary() {
    var totalAmount = 0;
    var planDuration = selectedPlan.planDur === 'mo' ? 'Monthly' : 'Yearly';
    var planName = selectedPlan.planName;
    var planPrice = selectedPlan.planPrice; // Clear innerHTML of the selected elements

    summarySection.innerHTML = ''; // Add selected plan to summary

    var planNameElement = document.createElement('p');
    planNameElement.textContent = planName;
    var durElement = document.createElement('p');
    durElement.textContent = "(".concat(planDuration, ")");
    var planPriceElement = document.createElement('p');
    planPriceElement.textContent = "$".concat(planPrice, "/").concat(selectedPlan.planDur); // Append selected plan details to summary

    summarySection.appendChild(planNameElement);
    summarySection.appendChild(durElement);
    summarySection.appendChild(planPriceElement); // Add selected plan price to total amount

    totalAmount += parseInt(planPrice); // Add selected add-ons to summary and calculate total amount

    selectedAddsOn().forEach(function (item) {
      var addOnNameElement = document.createElement('p');
      addOnNameElement.textContent = item.name;
      var addOnPriceElement = document.createElement('p');
      addOnPriceElement.textContent = "+$".concat(item.price, "/").concat(item.planDur); // Append selected add-on details to summary

      summarySection.appendChild(addOnNameElement);
      summarySection.appendChild(addOnPriceElement); // Add add-on price to total amount

      totalAmount += parseInt(item.price);
    }); // Inner HTML for total

    totalAmountElement.textContent = "$".concat(totalAmount);
  }
});
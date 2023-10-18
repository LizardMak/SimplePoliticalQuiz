window.onload = function () {
  form = document.querySelector('form');
    form.onsubmit = function(e) {
    e.preventDefault();
    console.log("form submitted!");
    gunCheck();
    healthCheck();
    ukraineCheck();
    let left = gunLeftAdd + healthLeftAdd + ukraineLeftAdd;
    let right = gunRightAdd + healthRightAdd + ukraineRightAdd;
    let moderate = gunModAdd + healthModAdd + ukraineModAdd;
    let errorCheck = gunError + healthError + ukraineError;
    if (right > left && moderate && errorCheck) {
      let resultRight = document.getElementById('resultRight')
      resultRight.removeAttribute('class');
    }
    }
  }

function gunCheck() {
let inputGun = document.getElementById('inputGun');
if (inputGun = 1) {
  const gunRightAdd = 1;
  return gunRightAdd;
} else if (inputGun = 2 || 3 || 4) {
  const gunModAdd = 1;
  return gunModAdd;
} else if (inputGun = 5) {
  const gunLeftAdd = 1;
  return gunLeftAdd;
} else {
  const gunError = 100;
  return gunError;
}
}

function healthCheck() {
  if (inputHealth = 1) {
    const healthRightAdd = 1;
    return healthRightAdd;
  } else if (inputHealth = 2 || 3 || 4) {
    const healthModAdd = 1;
    return healthModAdd;
  } else if (inputHealth = 5) {
    const healthLeftAdd = 1;
    return healthLeftAdd;
  } else {
    const healthError = 100;
    return healthError;
  }
}

function ukraineCheck() {
  if (inputUkraine = 1) {
    const ukraineRightAdd = 1;
    return ukraineRightAdd;
  } else if (inputUkraine = 2 || 3 || 4) {
    const ukraineModAdd = 1;
    return ukraineModAdd;
  } else if (ukraineHealth = 5) {
    const ukraineLeftAdd = 1;
    return ukraineLeftAdd;
  } else {
    const ukraineError = 100;
    return ukraineError;
  }
}
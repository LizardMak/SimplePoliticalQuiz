window.onload = function () {
  form = document.querySelector('form');
    form.onsubmit = function(e) {
    e.preventDefault();
    console.log("form submitted!");
    let inputGun = parseInt(document.getElementById('inputGun').value);
    let inputHealth = parseInt(document.getElementById('inputHealth').value);
    let inputUkraine = parseInt(document.getElementById('inputUkraine').value);
    let gunRightAdd = 0;
    let gunModAdd = 0;
    let gunLeftAdd = 0;
    let gunError = 0;
    let healthRightAdd = 0;
    let healthLeftAdd = 0;
    let healthError = 0;
    let healthModAdd = 0;
    let ukraineRightAdd = 0;
    let ukraineLeftAdd = 0;
    let ukraineModAdd = 0;
    let ukraineError = 0;

    if (inputGun === 1) {
       gunRightAdd = 1;
    } else if (inputGun === 2 || 3 || 4) {
       gunModAdd = 1;
    } else if (inputGun === 5) {
       gunLeftAdd = 1;
    } else if (inputGun > 5) {
       gunError = 100;
    } else if (inputGun < 0) {
       gunError = 100;
    };
    if (inputHealth === 1) {
      healthRightAdd = 1;
    } else if (inputHealth === 2 || 3 || 4) {
      healthModAdd = 1;
    } else if (inputHealth === 5) {
      healthLeftAdd = 1;
    } else if (inputHealth > 5) {
      healthError = 100;
    } else if (inputHealth < 0) {
      healthError = 100;
    };
    if (inputUkraine === 1) {
      ukraineRightAdd = 1;
    } else if (inputUkraine === 2 || 3 || 4) {
      ukraineModAdd = 1;
    } else if (inputUkraine === 5) {
      ukraineLeftAdd = 1;
    } else if (inputUkraine > 5) {
      ukraineError = 100;
    } else if (inputUkraine < 0) {
      ukraineError = 100;
    };
    console.log("finished");

    let left = gunLeftAdd + healthLeftAdd + ukraineLeftAdd;
    let right = gunRightAdd + healthRightAdd + ukraineRightAdd;
    let moderate = gunModAdd + healthModAdd + ukraineModAdd;
    let errorCheck = gunError + healthError + ukraineError;
    console.log(left);
    console.log(right);
    console.log(moderate);
    console.log(errorCheck);
    if (right > left && right > moderate && right > errorCheck) {
      let resultRight = document.getElementById('resultRight');
      resultRight.removeAttribute('class');
    }
    };
  }
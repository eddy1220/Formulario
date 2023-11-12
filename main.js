/*const steps = Array.from(document.querySelector('form, step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const preBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelector('form');

nextBtn.forEach(button=>{
    button.addEventListener('click', (e) =>{
        changeStep('next');
    })
})

function changeStep(btn){
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if(btn === 'next'){
        index ++;
    }
    steps[index].classList.add('active')
    console.log(index)
}*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const steps = form.querySelectorAll('.step');
    const nextButtons = form.querySelectorAll('.next-btn');
    const prevButtons = form.querySelectorAll('.previous-btn');
    const submitButton = form.querySelector('.submit-btn');

    let currentStep = 0;
    const formData = {};

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
    }

    function updateStep() {
        showStep(currentStep);
    }

    function nextStep() {
        currentStep++;
        if (currentStep >= steps.length) {
            currentStep = steps.length - 1;
        }
        updateStep();
    }

    function prevStep() {
        currentStep--;
        if (currentStep < 0) {
            currentStep = 0;
        }
        updateStep();
    }

    function submitForm() {
        // Assuming you want to stringify the JSON data for display
        const jsonData = JSON.stringify(formData, null, 2);
        alert("Data submitted:\n" + jsonData);
        // You can also send the data to a server using AJAX, fetch, or other methods
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', nextStep);
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', prevStep);
    });

    submitButton.addEventListener('click', submitForm);

    // Listen for form input changes and update the formData object
    form.addEventListener('input', function (event) {
        const input = event.target;
        formData[input.name] = input.value;
    });
});


// Agrega un script para manejar el desplazamiento suave al hacer clic en un enlace interno
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showStep(stepId) {
    // Oculta todas las secciones de pasos
    document.querySelectorAll('.step').forEach(function(step) {
        step.classList.remove('active');
    });

    // Muestra la sección de paso seleccionada
    document.getElementById(stepId).classList.add('active');
}
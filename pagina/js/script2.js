document.addEventListener('DOMContentLoaded', () => {
    
    const steps = [
      {
        step: "Paso 1 de 4",
        title: "1. Define el Problema o Idea",
        description: "Identifica una necesidad real en el área de tu carrera. Define claramente los objetivos, la problemática y el alcance inicial de tu proyecto."
      },
      {
        step: "Paso 2 de 4",
        title: "2. Reúne a tu Equipo y Asesor",
        description: "Forma tu equipo de trabajo según las competencias requeridas y selecciona un profesor asesor que oriente la metodología y viabilidad del proyecto."
      },
      {
        step: "Paso 3 de 4",
        title: "3. Elabora el Plan de Trabajo",
        description: "Diseña un cronograma de actividades, asigna responsables, define la arquitectura o metodología técnica y establece los recursos necesarios."
      },
      {
        step: "Paso 4 de 4",
        title: "4. Registra tu Proyecto en el Banco",
        description: "Ingresa los datos del proyecto en el sistema del Banco de Proyectos FIA para su revisión, aprobación oficial y seguimiento de avances."
      }
    ];
  
    let currentStep = 0;
  
    const stepContent = document.getElementById('step-content');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  

    function updateStep() {
      const data = steps[currentStep];
  
      stepContent.innerHTML = `
        <span class="step-number">${data.step}</span>
        <h3 class="step-title">${data.title}</h3>
        <p class="card-text">${data.description}</p>
      `;
  
      
      prevBtn.disabled = (currentStep === 0);
      
      if (currentStep === steps.length - 1) {
        nextBtn.textContent = 'Finalizar';
      } else {
        nextBtn.textContent = 'Siguiente';
      }
    }
  
    
    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
      } else {
        alert('¡Has completado la guía! Ya estás listo para registrar tu proyecto.');
      }
    });
  
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateStep();
      }
    });
  });
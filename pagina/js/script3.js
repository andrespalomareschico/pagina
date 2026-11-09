document.addEventListener('DOMContentLoaded', () => {
    
    const thesisSteps = [
      {
        title: "1. Elección del Tema y Asesor",
        description: "Define el problema de investigación alineado a las líneas de investigación de tu carrera y solicita la asignación de un docente asesor.",
        requirements: [
          "Identificar un problema relevante y viable.",
          "Revisar la literatura previa (marco teórico).",
          "Contar con la aprobación de tu asesor asignado."
        ]
      },
      {
        title: "2. Elaboración del Plan de Tesis",
        description: "Redacta la propuesta formal de investigación estructurando la problemática, hipótesis, objetivos y metodología que utilizarás.",
        requirements: [
          "Redactar el planteamiento del problema y matriz de consistencia.",
          "Definir el enfoque metodológico e instrumentos de recolección.",
          "Inscribir el Plan de Tesis ante la Unidad de Investigación."
        ]
      },
      {
        title: "3. Desarrollo y Ejecución",
        description: "Lleva a cabo el trabajo de campo, recolección de datos, experimentos o desarrollo tecnológico propuesto en tu plan.",
        requirements: [
          "Aplicar los instrumentos de investigación o pruebas técnicas.",
          "Procesar y analizar los resultados obtenidos.",
          "Redactar el borrador completo del informe final."
        ]
      },
      {
        title: "4. Aprobación y Sustentación",
        description: "Pasa por el dictamen de los jurados examinadores y realiza la defensa pública de tu tesis para obtener el título profesional.",
        requirements: [
          "Obtener el reporte favorable de similitud (Turnitin).",
          "Aprobación del borrador por parte del jurado informante.",
          "Sustentación oral del proyecto ante el jurado."
        ]
      }
    ];
  
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContent = document.getElementById('tab-content');
  
    
    function renderTabContent(index) {
      const data = thesisSteps[index];
  

      const listItems = data.requirements
        .map(req => `<li>${req}</li>`)
        .join('');
  
      tabContent.innerHTML = `
        <h3 class="tab-title">${data.title}</h3>
        <p class="tab-text">${data.description}</p>
        <ul class="tab-list">
          ${listItems}
        </ul>
      `;
    }
  
    
    tabButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
  
        
        e.target.classList.add('active');
  
        
        const tabIndex = e.target.getAttribute('data-tab');
        renderTabContent(tabIndex);
      });
    });
  
    
    renderTabContent(0);
  });
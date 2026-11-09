$(document.body).ready(function () {
  
    
    $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
      
      let index = $(e.target).parent().index() + 1;
      let totalTabs = $('#cachimboTabs li').length;
      
      
      let percentage = Math.round((index / totalTabs) * 100);
  
      
      $('#progress-bar').css('width', percentage + '%');
      $('#progress-text').text(percentage + '%');
  
      
      $('.tab-pane.active').hide().fadeIn(300);
    });
  
  });
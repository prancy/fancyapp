console.log('main.js loaded!');

$(document).ready(function() {
  console.log('document loaded');
  $template = document.querySelector('#template');
  console.log($template)
  $anchor = document.querySelector('#anchor');
  let template = _.template($template.innerHTML);
  $anchor.innerHTML = template({content: fancyData});
});


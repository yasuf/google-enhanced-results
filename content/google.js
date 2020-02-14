const alternativeResultsPresent =
  document.getElementsByClassName('TbwUpd NJjxre').length

if (alternativeResultsPresent) {
  const sElements = document.querySelectorAll('.rc > .s');
  for(let i=0; i<sElements.length; i++) {
    sElements[i].setAttribute("style", "margin-top: 22px;");
  }
}
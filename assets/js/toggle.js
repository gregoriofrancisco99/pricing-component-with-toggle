var toggle = document.getElementById("toogle");
toggle.checked = true;

function check() {
  if (toggle.checked) {
    toggle.checked = false;

    $('.annually').css('display', 'flex');
    $('.monthly').css('display', 'none');
  } else {
    toggle.checked = true;

    $('.monthly').css('display', 'flex');
    $('.annually').css('display', 'none');
  }
}
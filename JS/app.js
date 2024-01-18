const b4 = document.getElementById('b4');

window.onload = SessionInputTransfer();

function SessionInputTransfer() {
  const SessionValue = JSON.parse(sessionStorage.getItem('searched'));
  const decrypted = atob(SessionValue);
  b4.value = decrypted;
}
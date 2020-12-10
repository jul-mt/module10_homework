window.addEventListener('load', function() {
  const wsUri = "wss://echo.websocket.org/";

  const sendBtn = document.querySelector('.send-btn');
  const geoBtn = document.querySelector('.geo-btn');
  const chat = document.querySelector('.chat');  

  let websocket = new WebSocket(wsUri);


  function printMessage (text, classNane) {
    let outbound = document.createElement('div');
    outbound.className = classNane;
    outbound.innerHTML = text;
    chat.appendChild(outbound);
  }


  sendBtn.addEventListener('click', () => {
    let message = document.querySelector('.input-message').value;

    printMessage(message, "outbound-message");
    websocket.send(message);
  });


// Функция, выводящая текст об ошибке
const error = () => {
  printMessage('Нет доступа к геолокации', "outbound-message");
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;  
  const link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  const linkTag = `<a class = "map-link" target="_blank" href=${link}>Гео-локация</a>`;
  printMessage(linkTag, "outbound-message");
}


  geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      printMessage('Geolocation не поддерживается браузером', "outbound-message");
    } else {
      
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
  });


  
  websocket.onmessage = function(event) {
    printMessage(event.data, "inbound-message");
};






    
  

  

});
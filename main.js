// heat index checker
function heat_index() {
     let temperature = Number(document.getElementById('temperature').value);
     let humidity = Number(document.getElementById('humidity').value);
     let heat_index = temperature + (0.33 * humidity) - 4;

    switch (true) {
        case (heat_index <= 27):
            window.alert('comfortable / cool. heat index: ' + heat_index);
            break;
        case (heat_index >= 28 && heat_index <= 32):
            window.alert('warm. heat index: ' + heat_index);
            break;
        case (heat_index >= 33 && heat_index <= 37):
            window.alert('hot. heat index: ' + heat_index);
            break;
        case (heat_index >= 38 && heat_index <= 41):
            window.alert('very hot / caution. heat index: ' + heat_index);
            break;
        case (heat_index > 42):
            window.alert('extreme heat / danger. heat index: ' + heat_index);
            break;
    }
}

// instructions
function instructions() {
    document.getElementById('show').innerHTML = 'input the temperature (°C) and humidity (%), then click check to see the heat index and its status'
}

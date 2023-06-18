// Getting all required Elements
const showRequest = document.querySelector('.option-box');
const inputField = document.querySelector('.input-data');

const fruits = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
  'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry',
  'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson',
  'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig',
  'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry',
  'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry',
  'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee',
  'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew',
  'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance',
  'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon',
  'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo',
  'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant',
  'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry',
  'Tamarillo', 'Tamarind', 'Yuzu', 'Tomatoe 🍎'];

// Displaying the Result below the search box
function display(result) {
  const content = result.map((fruit) => `<li onclick=selectInput(this)>${fruit}</li>`);
  showRequest.innerHTML = `<ul>${content.join('')}</ul>`;
}

function selectInput(fruit) {
  // When User clicks on any fruit name,
  inputField.value = fruit.innerHTML;
  // it will be displayed in the input field and
  // the list will get disappeared
  showRequest.innerHTML = '';
}

// If user press any key and release
inputField.onkeyup = () => {
  let result = [];
  const input = inputField.value;
  if (input.length) {
    // filter fruits array and return match value
    result = fruits.filter((keyword) => keyword.toLowerCase().includes(input.toLowerCase()));
    console.log(result);
  }
  display(result);
};

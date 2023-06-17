/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
// Getting all required Elements
const search = document.querySelector('.search-input');
const inputField = search.querySelector('.input-data');
const showRequest = document.querySelector('.autocom-box');

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

function displayOptions(list) {
  let listData;
  if (!list.lentgth) {
    userValue = inputField.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  showRequest.innerHTML = listData;
}

// If User presses any button and Releases
inputField.onkeyup = (eve) => {
  const userData = eve.target.value; // User Entered Data
  let emptyArray = [];
  if (userData) {
    emptyArray = fruits.filter((data) => {
    //  Filters the array value and user character
    // to lowercase and returns only those words/sentences which start with the users
    // Entered Word/sentence
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    // Shows all the fruits

    // Putting all outputs in the LIs
    // Also the {startsWith} function
    emptyArray = emptyArray.map((data) => {
      return data = '<li>' + data + '</li>';
    });
    // console.log(emptyArray);
    search.classList.add('active'); // Show autocomplete box
    displayOptions(emptyArray);
    const allList = showRequest.querySelectorAll('li');
    for (let i = 0; i < allList.length; i += 1) {
      // Adding onclick attribute in all li tag
      allList[i].setAttribute('onclick', 'select(this)');
    }
  } else {
    search.classList.remove('active'); // Hide autocomplete box
  }
};

function select(element) {
  const selectUserData = element.textContent;
  console.log(selectUserData);
  inputField.value = selectUserData; // Passing the user selected list item data in textfield
  search.classList.remove('active'); // Hide autocomplete box
}
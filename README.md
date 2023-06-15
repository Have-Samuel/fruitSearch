# fruitSearch

## Autofill Draft

-In this project, you’ll plan and build an Autofill Search Bar for various types of fruit!You may be familiar with autofill from a search engine like Google. When you type anything into Google, a drop down appears with suggestions for what you may want to search for. If you click on one of these suggestions, it populates the search bar with that suggestion.

Building search bars like this is a common task for front-end engineers. You’ll be building a small scale search bar which suggests various fruits based on user input. We’ll provide a list of fruits and a mock up of how the page should look. You’ll do the rest. If a user’s typed input is contained anywhere in one of the fruits in the list, then a drop down will appear containing all the fruits which match. As a user continues to add letters to their input, new dropdowns will populate. When a user clicks on one of these options, it will populate in the search bar.

### Planning
   - Before you start working on this, take a few minutes to think how you would approach building a search bar like this using HTML, CSS, and JavaScript. Jot down your thoughts on a piece of paper or a Google Doc. Don’t worry, no one else will see these notes.Ask yourself:
      - What HTML would you use for the search bar? How about the drop down, the search button, and the filler text which will appear on the page?
      - What CSS would you use to create the color gradient on the page?
      - What type of JavaScript event listeners would you need to add to refresh the drop-down as a user types?
      - How would you populate the search bar with an option from the drop down list? What event would trigger this action?
      - How would you structure your functions?

**Read the Starter Code**

   - We have provided a small amount of starter code in this exercise. Read through it. Make sure you understand what everything does prior to starting this project. 

   - Create a search bar using HTML which accepts user input on screen. Don’t worry about styling it until the end of the project.


**Add Placeholder Text Into The Search Bar**

  - Whenever there is no user input in the search bar, it should populate with the string “Search fruit 🍎”.

**Add An Event Listener For Key Strokes**

  - Create an event listener in JavaScript that will trigger when a user types.

**Filter The List Based On User Input**

  - Write a function called search(), which will trigger based on the event listener you created in the last step. This function will return a list called results. This function will filter the fruit list based on whatever user input is in the search box.
  
   **If the string in the user input appears ANYWHERE in the fruit name, it should be added to results list. It also should not matter if a user types upper or lower case letters.** 
    - That means that if a user types “ap” both “Apple” and “Grape” will appear in the results list. 

**Display The Results List As A Drop Down** 

   - Take the list created in the previous step in a drop down list below the search bar.


**Highlight the suggestion below a user’s cursor**

  - Add an event listener to trigger whenever a user hovers over one of the suggestions in the drop down list. Write a function which highlights the suggestion. Attach this function to the event listener.

**Populate the search box with a user’s selected suggestion**

  - When a user clicks on a suggestion, that string should fill the Search Bar. Add an event listener which triggers when a user clicks. Write a function useSuggestion() to populate the Search Bar with the suggestion. Add this function to the event listener.


**Style the Page**

  - Add a linear-gradient CSS styling to the page which matches the mockup. This should style both the background and the search bar.
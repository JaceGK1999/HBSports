# Sports Stats Tracker

## Demo

[Link to Demo](https://alchemy-stats-tracker.netlify.app/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/web-game-stats-tracker) to get started.

### Learning Objectives

-   Model out examples of state that might be tracked using an array of objects
-   Use an object to create a data model for an item in the human world
-   Use the FormData constructor to grab multiple named values from an HTML form.
-   Use the submit handler with e.preventDefault() to manage form submissions.
-   Use the type attribute on input tags to create email , number , password , and numerous other inputs.
-   Create an object of primitive values and access any item in that object by key using dot and bracket notation
-   Create an array of complex values (objects or arrays) and access any item in that array by index using bracket notation
-   Describe the difference between val & ref
-   Identify what data types are passed by reference vs passed by value
-   Write a render function that takes in an object (modeled after a real-world item) and returns a DOM element based on that item.
-   Call a render function and append its return value to a grabbed element in the DOM
-   Use a for/of loop to loop through an array and for each item, append an element to the DOM using a render function
-   Create modular code using import and export with named exports.

### Description

This deliverable is for tracking points scored in a sports game. The HTML / CSS and render functions have been provided for you, your job is to add the event listeners so that the following acceptance criteria are met.

### Acceptance Criteria

-   A user can track a player scoring points
-   A user can remove the last added statistic
-   A user can save games
-   After a user saves a game, the app will display the game number and the total points scored

### Rubric

| Description                                           | Points |
| ----------------------------------------------------- | ------ |
| ** Deploy Requirements **                             |        |
| Main branch deployed to Netlify                       | 1      |
| Open PR from `dev` branch with Netlify deploy preview | 1      |
| ** Acceptance Requirements **                         |        |
| Users can add stats and see them on the page          | 2      |
| Users can remove the last stat added to the game      | 2      |
| Uses can save games and see them on the page          | 2      |
| Code uses the provided render functions               | 2      |

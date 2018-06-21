<<<<<<< HEAD
# techdegree-project-1
<h2>About this Project</h2>
=======
# TeamTreehous FullStack JavaScript Techdegree Project1
# Random-Quote-Generator
## About this Project
>>>>>>> 5db85955d0753d7987cbcf08f82e3f9550f309ea
In this project, you'll create an app that displays random famous quotes each time a button is clicked. You can display a quote from a famous athlete, politician, or historical figure:

"The only thing we have to fear is fear itself." — Franklin Delano Roosevelt.

You'll need to use your knowledge of basic JavaScript syntax, including variables, loops and object literals, to complete this project.

To help you get started, we'll give you basic HTML and CSS, as well a JavaScript file containing some starter code. But you'll have to find the quotes yourself and build the data structure to store them in.

This project is a fun and effective way for you to practice fundamental JavaScript skills. It also gives you a simple interactive portfolio piece to show off your understanding of JavaScript.

When you're done, you'll put your finished project on GitHub, an important tool used by millions of developers to help share code and work collaboratively on programming projects. Creating and using a GitHub account is also a great way to share your work with potential employers.

<<<<<<< HEAD
=======

## Project Instruction
Create an array of JavaScript objects to hold the data for your quotes. Name the array 'quotes.' The quotes array should be accessible in the global scope.

Each quote object in the quotes array should have the following properties:

A quote property which contains a string: the text of the quote that will be displayed on the page.
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
Create a function named getRandomQuote which:

selects a random quote object from the quotes array
returns the randomly selected quote object
Create a function named printQuote which follows these rules:

printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string containing the different properties of the quote object using the following HTML template:

```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
 <span class="citation"> [citation here] </span>
 <span class="year"> [year here] </span>
</p>
```

printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
Add comments to your code.

If you're having trouble with this project, make sure you take a look at this great study guide: Random Quote Generator Study Guide Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

NOTE: It’s good practice to check your project for cross browser compatibility. We recommend making sure your project looks and functions as expected in at least 3 different browsers.
>>>>>>> 5db85955d0753d7987cbcf08f82e3f9550f309ea

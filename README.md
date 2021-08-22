# Code-Quiz-LW

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question

- added an eventlistener and timer interval of 60 seconds to begin counting down when start is selected


WHEN I answer a question
THEN I am presented with another question

-added 4 question choices in a variable then created a set of functions to show the next question along with their answers


WHEN I answer a question incorrectly
THEN time is subtracted from the clock

- included in my else statement when checking whether or not the answers are correct, if the answer is wrong then the secondsleft is reduced.


WHEN all questions are answered or the timer reaches 0
THEN the game is over

- set an alert for when the timer is over to say that the game is over. 

WHEN the game is over
THEN I can save my initials and my score

-ideally I'd want a pop up that asks the user to input their initals with their score already populated and then that would save in a list that shows after each game is completed. I ran out of time to do this. 
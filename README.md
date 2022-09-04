# timelog-color-indicator
A simple javascript to be executed as snippet that assists in indicating the remaining slots and number of hours to be filled up in the Timelog Entry.

## Results
This script, when executed as a snippet in a Chromium browser, will be able to produce results like below:

![image](https://user-images.githubusercontent.com/29178362/188312399-41d01f0d-9b5b-49ec-9d04-041acc32bf18.png)

## Explanation
In the **Actual Effort** column, cells highlighted in blue are those that do not have a *Planned Effort* required. Cells highlighted in yellow are potential cells the user can fill in.

In the **Total Hours Per Day** row, cells highlighted in green are those that already fulfill 8 man-hours. Cells highlighted in red are those that have not fulfilled. Cells without added highlight colour can be ignored.

The number of hours remaining to be filled are displayed as placeholder text in the cells in the matrix. The cells recommended to be filled are also highlighted in light green, with the length of the highlight representing the percentage and the start and end positions representing its position in the 8-hour slot.

## Known Issues
The currently known issues of this project include:
1. The highlight colours do not respond dynamically to user inputs on-the-go. Saving, refreshing and retriggering are required.
2. When a cell is only partially filled and the man-hours of the day has not been fulfilled yet, and yet this cell is one of the potential cells to be filled, the display of the cell will be perhaps misleading since the placeholder text is hidden, and the user needs to do manual addition when editing the cell.  
![image](https://user-images.githubusercontent.com/29178362/188313506-6f470a20-70b0-4060-8c13-bf90825a3e3e.png)

## Future Works
Since it is now capable to work only when the user triggers/runs it manually from the DevTools, it is almost clear that one potential improvement to this is to make it automatically run every time the page is loaded/refreshed. One example to do this, as roughly researched, is to use Chrome extensions like *TamperMonkey* to automate the process.

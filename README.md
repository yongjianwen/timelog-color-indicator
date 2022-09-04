# timelog-color-indicator
A simple javascript to be executed as snippet that assists in indicating the remaining slots and number of hours to be filled up in the Timelog Entry.

This script will be able to produce results like below:
![image](https://user-images.githubusercontent.com/29178362/188312399-41d01f0d-9b5b-49ec-9d04-041acc32bf18.png)

In the Actual Effort column, cells highlighted in blue are those that do not have an allocated timeslot required. Cells highlighted in yellow are potential cells users can fill in.

In the Total Hours Per Day row, cells highlighted in green are those that already fulfill 8 man-hours. Cells highlighted in red are those that have not fulfilled. Cells without added highlight colour can be ignored.

The number of hours remaining to be filled are displayed as placeholder text in the cells in the matrix. The cells recommended to be filled are also highlighted in light green, with the length of the highlight representing the percentage and with its position representing its position in the 8 hours of slot.

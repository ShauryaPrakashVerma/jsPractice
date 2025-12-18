- To open side by side view of markdown file press ctrl + K , V in VS code

- To open full preview of markdown file press ctrl + shift + V

# LEARNING ADVANCE CSS
## Day 1
- Box-shadow
- text-shadow
- conic-gradient
- Keyframes
- @property
- :has()
- drop-shadow

##

**Box-shadow**

    - inset | x | y | spread radius | color
    - inset --> to create box shadow inside the box. Not present for text shadow


**Text-shadow**

    - x | y | spread radius | color


**Conic-gradient**

    - conic-gradient(from 0deg ,color1, color2)  #remains same
    - conic-gradient(from 45deg ,color1, color2)  #tilts the border line

**Keyframes**

    - It is used for creating animations.

    - SYNTAX:
        - @keyframes <Name_Of_the_animation> {
                from{
                    <Starting_Property>;
                }
                to{
                    <Ending_Property>;
                }
            }

        
    - To use the animation: 
        animation: <Name_Of_the_animation> <duration> <repetition> ;


    - after animation is finished the div returns to its initial state,to change this set
        - <repetition> = forwards; retains the lastt state of the animation




    - properties which can't be animated (called Discrete properties [read about them])
            - display
            - visibility

            
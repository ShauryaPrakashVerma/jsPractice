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
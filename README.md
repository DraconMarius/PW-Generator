# PW-Generator
A simple JavaScript App to generate PW based on selected criteria
---
This is a PW generator that is able to take in certain inputs and return a random string that fits the criteria. 

I was provided starter code with JS that tied the button “Generate” to a “Write Password (PW) function. I was tasked to provide the additional codes to achieve the following:

- [ x ] When “Generate” is pressed, prompts for criteria from user
- [ x ] Criteria:
	- Length, of at least 8 characters and no more than 128 characters
	- Character type of `Num` , `UpperCase` , `LowerCase`, `SpecialChars`
- [ x ] Random password with criteria is shown on screen
- [ x ] Warnings and Error Messages showing user if invalid input.

***
## Method
First thing I did was to add the possible character types, then created window prompts/alerts and to store the inputs in an object called pwLaw.

From there, I created several if statements to validate and ensure user’s input is not acceptable. 

Onward to the actual generate a password. 
While pseudo-coding, I had an idea to somehow make some sort of DNA translation things (in Theory): 

Where I would first generate a string of random  `0` - `3`s based on rules and the length of the input (0 - number; 1 - UpperCase; 2 - LowerCase etc), then feed that string in to a for loop to translate the string in to a random password. 

>other idea while I was stuck multiple times trying to figure out the initial for loops, was to brute force it, and just generate a string of number just to set the length of the PW, and replace characters of those strings one by one based character choice. 

I eventually got really stuck on the loop to generate the “DNA” and ended up pivoting to another approach, to just run the iteration once, and store the value of whether if a certain criteria is true or false, and then using that to help us determind which character should be present in the password and add it to the array. 

---
## Demo


## Links / Media
*(feel free to click on the gif to go to deployed site)*
[<img src="Demo.gif" alt='sample'>](https://draconmarius.github.io/PW-Generator/) 

## Technologies Used
> JavaScript

## License
> MIT

---

## Contact
Feel free to contact me @ the following:

[<img src="logo_github_icon_143196.png" alt='github' height='40'>](https://github.com/DraconMarius) 

[<img src="logo_linkedin_icon_143191.png" alt='linkedin' height='40'>](https://www.linkedin.com/in/mari-ma-70771585/)  

[Icon credit @ Anton Kalashnyk](https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/)
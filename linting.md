
# Linting
## Purpose
**A linter is a small program that checks code for stylistic or programming errors**     
Beyond eliminating typos and errors, there’s a greater question of consistent code style in a project.
## Which javascript linter to use?
My recommendation: ESLint https://eslint.org/
## Comparing Style Guides
which style guide to use?
### ESLint Recommended
`"extends": "eslint:recommended"`     

- This is not a very strongly opinionated style set.
- It’s especially useful if you’re not concerned with code style per se, and are more invested in simply catching unused variables or syntax errors.
### Google JavaScript Style Guide
http://google.github.io/styleguide/javascriptguide.xml    

`"extends": ["eslint:recommended", "google"]`
- Tabs: 2-Spaces but 4-Spaces is not flagged
- Semicolon: Required
- Trailing Commas: Required
- Template strings: No preference
- Import Extensions: No preference
- Object Curly Spacing: None
- Array Bracket Spacing: None
- Parentheses Around Arrow Function Arg: Required
- JSDocs: Required (!)
- Console statements: None
- Underscored functions: Allowed
- Space before function parentheses: None
### AirBnB
https://github.com/airbnb/javascript    

`"extends": ["eslint:recommended", "airbnb"]`
- Semicolon: Required
- Trailing Commas: Required
- Template strings: Prefer
- Import Extensions: None
- Space before function parentheses: None
- Object Curly Spacing: Yes
- Array Bracket Spacing: None
- Underscored functions: None
- Object Destructuring: Prefer
- React Ordering: Opinionated
- React Prop Validation: Required
- Arrow Functions Return Assignment: No
- Object Property Shorthand: Prefer
### Standard
https://github.com/standard/standard     

`"extends": ["eslint:recommended", "standard"]`
- Semicolon: No
- Trailing Commas: No
- Template strings: No preference
- Space before function parentheses: Required
- Console Statements: None
- Underscored functions: Allowed
- Arrow Functions Return Assignment: Never
- Import Extensions: No Preference
- Object Curly Spacing: Consistent
- React Ordering: Not opinionated
- React Prop Validation: Not required

## Round Up
**As always, you can always jump into the eslintrc to disable or enable specific rules. For instance, turning off JSDocs in Google or template strings in AirBnB. In general best practice would recommend finding the style guide that most closely meets your needs, then adding a very limited number of customizations**     

AirBnB is the winner of this roundup!    
It’s got react support out of the box.    
It’s got opinions and it’s not afraid to enforce them.
## BONUS: [Prettier](https://prettier.io/)
ESLint is a great tool but it can’t fix all the problems related to code formatting/linting. Just look at this [table](https://eslint.org/docs/rules/). Rows marked with wrench icon represent rules which can be fixed by ESLint automatically. Not so many, aye?    

This cool piece of tech reads the code, breaks it into symbols and then rewrites your code in its own way.    
**It would be perfect to setup it in such a way that not interested team members will not even know about it’s existence.**    

Fortunately we have plugin for that: [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). It will add Prettier’s rules to ESLint configuration and allow ESLint to use Prettier as a code formatter with `--fix` command.    
There is also the second piece of this puzzle: [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). This config will disable all the ESLint rules that are in conflict with Prettier opinion, so there sould be no conflicts between them.

### Using Prettier with VS Code and Create React App

#### Step 1: Install the Prettier and ESLint VS Code Extensions
Install the following Visual Studio Code Extensions: 
- ESLint 
- Prettier

#### Step 2: Install Prettier
`npm install --save-dev --save-exact prettier`

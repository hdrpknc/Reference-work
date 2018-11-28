
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
This is not a very strongly opinionated style set. It’s especially useful if you’re not concerned with code style per se, and are more invested in simply catching unused variables or syntax errors.
### Google JavaScript Style Guide
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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To see compilation error, run `npm start`.  

Error: React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?

This seems to happen specifically when calling a hook after a for - of loop that contains a if - else statement.  All other configurations shown do not throw the compilation error.

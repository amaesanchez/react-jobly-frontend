Auth Notes

- At App.js
    - State:
        - `currUser` -- object of user info
        - `currToken` -- to track when to get new user

    - UseEffect:
        - when `currToken` changes, decode token
        - get username from payload
        - get user with username via JoblyApi -> returns user obj
        - set `currUser` to user object

    - login(data)
        - data = {username, password}
        - log user in with data via JoblyApi -> returns token
        - set currToken to token -> trigger useEffect

    - signup(data)
        - data = {username, password, firstName, lastName, email}
        - registers user with data via JoblyApi -> returns token
        - set currToken to token -> trigger useEffect

    - TODO:
    - handleUpdate(data)
        - data = {username, firstName, lastName, email}
        - patch user info given username via JoblyApi -> returns { username, firstName, lastName, email, isAdmin }
        - when setting currUser, spread the prev data and then add the new data (bc the old user obj should include applications key)

- LoginForm
    - State:
        - formData
        - err -- render `<Errors />` if true

    - Prop
        - login(formData) -- (from App) triggered on submit

- SignupForm
    - State:
        - formData
        - err -- render `<Errors />` if true

    - Props
        - signup(formData) -- (from App) triggered on submit

-ProfileForm
    - Props:
        - handleUpdate - from the app triggered on submit

    - form will submit ALL fields, so they must all be filled

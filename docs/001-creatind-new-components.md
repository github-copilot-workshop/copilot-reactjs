# Create the Main Components

The goal is to use GitHub Copilot to help us create a page that will show the GitHub profile of a user.

Open a terminal in the IDE and run the project

```bash  
npm start
```

You changes will be automatically reloaded in the browser.

## 1 - Create the components

For this lets start by the creation of some components that will be used in the page:

1. Create a `Main` component that will be the main page of the application.
2. Create a `Header` component that will be used to show the header of the page.
3. Create a `User` component that will be used to show the user profile.

Use the chat to create the new files and add the code to the files.

<details>
<summary>Possible Flow</summary>

1. Open Copilot Chat
2. Ask the following question: 
   ```
   @workspace create a new component called Main that is called from the App.js
   Create a Header component that will show the name of the application
   Create a User component that will show the user profile using a call to the GitHub API using fetch
   Add Header and user to the Main component
   ```
</details>


## 2 - Add parameters to the User component

Use Copilot to learn and implement how call the GitHub API to get the user profile with a given username.

Something like: `http://localhost:3000?name=tgrall`



<details>
<summary>Possible Flow</summary>

1. Open the `User.js` file, select the code 
2. Ask Copilot Inline Chat to add a parameter to the component, using for example this question:
   ```
   use the browser url paramter name=tgrall to pass the value to the github api call
   ```
</details>


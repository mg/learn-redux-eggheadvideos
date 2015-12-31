**Redux is a predictable state manager**

**First principle of Redux:** The whole state of your application is represented as a single JS object. The state is the minimal representation of the data in your app.

**Second principle of Redux:** The state tree is read-only. To change the state, you need to dispatch an action. The *action* is the minimal representation of change in the app.

**Third principle of Redux:** State mutations in your app need to be described as a *pure function* that takes the previous state and the action describing the state change and returns the next state. This function is called the *reducer*.

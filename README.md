  ## Music analyzer
  This app will allow [last.fm](http://last.fm) users discover new music based on their current favorited tracks and artists. The first step is already implemented. Users are able to analyze their loved tracks and see which artists scored highest on their list.

  ### Installation
  This project is developed with:
    * `node` version 5.4.1
    * `npm` version 3.5.3

  To install this project run `npm install`.

  If everything works run application by executing `npm run dev`

  ### Testing
  Run `npm test` to execute all available test.

  ### Technologies and techniques
  1. **React.js** - I used this library because in my opinion is one of most elegant ways to decouple view layer from the underlying data model. The component approach makes the app simple in testing and easy to understand for developers and designers.
  2. **Redux** - I user Redux because I believe it fits very well with React. A Clear way of executing actions and managing state changes make it another easy to grasp technology. Similarly to React it makes every bit of code easy to test. Advantages of using this library may not be fully visible at the current stage of project development. I could use React's lifecycle methods to create this simple functionality.
  3. **D3** - One of the most popular tool for creating interactive visual elements in the browser. Because it's not fully compatible with how React manages DOM it requires special wrapping with component and slightly different approach.
  4. **Server-side rendering** I've decided to use this technique for a very simple reason. It allows the page to be visited by search engines and indexed as regular HTML pages.

  ### Tools
  1. **ES2016 syntax**
  2. **Webpack**
  3. **Express**
  4. **Mocha and expect**

  ### Pros of this choices
  * decoupling view layer from data model
  * high modularity
  * easy to handle state changes
  * testability
  * accessibility

  ### Cons
  * not production ready
  * requires managing both client and server side
  * some parts of the app need to be universal - must work on both client and server

  ### Future improvements
There's not much use of server-side rendering at the moment but I believe taking care of it now will pay off in the future.
I'd suggest adding feature specs in near future.

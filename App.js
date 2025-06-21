// const heading = React.createElement("h1", {id: "heading"}, "Hello Welcome to Namaste React!");
// console.log(heading)
// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)


//////////////////////////////////////////////////////////////////////////////////////////////


/**
 * <div id="parent">
 *      <div id="child">
 *          <h1 id="heading">
 *            Hey! Im a heading!  
 *              
 *          </h1>
 *          <p>
 *              Hi i am a paragraph!
 *          </p>
 *      </div>
 * </div>
 * 
 * 
 *   createElement(Object) => HTML(Browser Understands)
 * 
 */

// const parent = React.createElement("div", {id: "parent"}, [
//                 React.createElement("div", {id: "child"}, [
//                     React.createElement("h1", {id: "heading"}, "Hey! I am a heading!"),
//                     React.createElement("p", {id: "paragraph"}, "Hey! I am a paragraph! "),
//                     React.createElement("ul", {id: "ul"}, [ 
//                         React.createElement("h4", {}, "List of Fruits!"),
//                         React.createElement("li", {}, "Apples"),
//                         React.createElement("li", {}, "Bananas"),
//                         React.createElement("li", {}, "Grapes"),
//                         React.createElement("li", {}, "Litchis"),
//                         React.createElement("li", {}, "Peaches"),
//                     ])
//                 ]),
//                 React.createElement("div", {id: "child2"}, [
//                     React.createElement("h1", {id: "heading"}, "Hey! I am a heading!"),
//                     React.createElement("p", {id: "paragraph"}, "Hey! I am a paragraph! "),
//                     React.createElement("ul", {id: "ul"}, [ 
//                         React.createElement("h4", {}, "List of Fruits!"),
//                         React.createElement("li", {}, "Apples"),
//                         React.createElement("li", {}, "Bananas"),
//                         React.createElement("li", {}, "Grapes"),
//                         React.createElement("li", {}, "Litchis"),
//                         React.createElement("li", {}, "Peaches"),
//                     ])
//                 ])
//  ])

// console.log(parent)

//  const root = ReactDOM.createRoot(document.getElementById("root"))

//  root.render(parent)

//////////////////////////////////////////////////////////////////////////

/***
 * 
 * <ul  >
 *      <li></li>
 *      <li></li>
 *      <li></li>
 *      <li></li>
 *      <li></li>
 *      <li></li>
 * </ul>
 * 
 * 
 */

const navbar = React.createElement("div", { id: "parent" },
  React.createElement("ul", { id: "navul" }, 
    [
      React.createElement("li", { className: "navli" },
        React.createElement("a", { className: "anchor", href: "#" }, "Home")
      ),
      React.createElement("li", { className: "navli" },
        React.createElement("a", { className: "anchor", href: "#" }, "About")
      ),
      React.createElement("li", { className: "navli" },
        React.createElement("a", { className: "anchor", href: "#" }, "Contact Us")
      ),
      React.createElement("li", { className: "navli" },
        React.createElement("a", { className: "anchor", href: "#" }, "Login")
      ),
      React.createElement("li", { className: "navli" },
        React.createElement("a", { className: "anchor", href: "#" }, "Sign Up")
      )
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);

// import "./App.css";
// import Header from "./mycomponents/Header";
// import { Todos } from "./mycomponents/Todos";
// import Footer from "./mycomponents/Footer";
// import { AddTodo } from "./mycomponents/AddTodo";
// import React, { useState, useEffect } from "react";

// function App() {
//     let initTodo;
//     if (localStorage.getItem("todos") === null) {
//         initTodo = [];
//     } else {
//         initTodo = JSON.parse(localStorage.getItem("todos"));
//     }
//     const onDelete = (todo) => {
//         console.log("I am onDelete of todo", todo);
//         //Deleting this way in react does not work
//         // let index = todos.indexOf(todo);
//         // todos.splice(index, 1);

//         setTodos(
//             todos.filter((e) => {
//                 return e !== todo;
//             })
//         );
//         localStorage.setItem("todos", JSON.stringify(todos));
//     };

//     const addTodo = (title, desc) => {
//         console.log("I am adding this todo", title, desc);
//         let sno;
//         if (todos.length === 0) {
//             sno = 0;
//         } else {
//             sno = todos[todos.length - 1].sno + 1;
//         }
//         const myTodo = {
//             sno: sno,
//             title: title,
//             desc: desc,
//         };
//         setTodos([...todos, myTodo]);
//         console.log(myTodo);
//     };

//     const [todos, setTodos] = useState([initTodo]);
//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);
//     return (
//         <>
//             <Header title="My Todos List" searchBar={false} />
//             <AddTodo addTodo={addTodo} />
//             <Todos todos={todos} onDelete={onDelete} />
//             <Footer />
//         </>
//     );
// }

// export default App;

// import "./App.css";
// import Header from "./mycomponents/Header";
// import { Todos } from "./mycomponents/Todos";
// import Footer from "./mycomponents/Footer";
// import { AddTodo } from "./mycomponents/AddTodo";
// import { About } from "./mycomponents/About";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// function App() {
//     const initTodo = JSON.parse(localStorage.getItem("todos")) || [];

//     const onDelete = (todo) => {
//         setTodos(todos.filter((e) => e !== todo));
//         localStorage.setItem("todos", JSON.stringify(todos));
//     };

//     const addTodo = (title, desc) => {
//         const myTodo = {
//             sno: Date.now(),
//             title: title,
//             desc: desc,
//         };
//         setTodos([...todos, myTodo]);
//     };

//     const [todos, setTodos] = useState(initTodo);
//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);
//     return (
//         <>
//             <Router>
//                 <Header title="My Todos List" searchBar={false} />
//                 <Switch>
//                     <Route
//                         path="/"
//                         render={() => {
//                             return (
//                                 <>
//                                     <AddTodo addTodo={addTodo} />
//                                     <Todos
//                                         todos={todos}
//                                         onDelete={onDelete}
//                                     />{" "}
//                                 </>
//                             );
//                         }}
//                     ></Route>

//                     <Route path="/about">
//                         <About />
//                     </Route>
//                 </Switch>

//                 <Footer />
//             </Router>
//         </>
//     );
// }

// export default App;

import "./App.css";
import Header from "./mycomponents/Header";
import { Todos } from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import { AddTodo } from "./mycomponents/AddTodo";
import { About } from "./mycomponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    const initTodo = JSON.parse(localStorage.getItem("todos")) || [];
    const onDelete = (todo) => {
        setTodos(todos.filter((e) => e !== todo));
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const addTodo = (title, desc) => {
        const myTodo = { sno: Date.now(), title: title, desc: desc };
        setTodos([...todos, myTodo]);
    };
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
            {" "}
            <Router>
                {" "}
                <Header title="My Todos List" searchBar={false} />{" "}
                <Routes>
                    {" "}
                    <Route
                        exact
                        path="/"
                        element={
                            <div>
                                {" "}
                                <AddTodo addTodo={addTodo} />{" "}
                                <Todos todos={todos} onDelete={onDelete} />{" "}
                            </div>
                        }
                    />{" "}
                    <Route exact path="/about" element={<About />} />{" "}
                </Routes>{" "}
                <Footer />{" "}
            </Router>{" "}
        </>
    );
}
export default App;

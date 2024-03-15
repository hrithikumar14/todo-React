import React from "react"
import todo from "../images/todo.webp";

const Todo = () => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todolog" width="100px" />
                    </figure>

                </div>
            </div>

        </>

    );

}
export default Todo;
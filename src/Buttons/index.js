import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="section__subcontainer">
        {tasks.lenght > 0 && (
            <>
                <button className="section__buttons">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"}
                    Ukończone zadania
                </button>
                <button className="section__buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie zadania
                </button>
            </>

        )}
    </div>
);






export default Buttons;
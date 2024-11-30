import { Comp } from "./Components";

const App = () => {
    const demoObjectArr = [
        {
            id: 1,
            name: "John",
            age: 25,
            address: "New York",
        },
        {
            id: 2,
            name: "Jane",
            age: 22,
            address: "New York",
        },
        {
            id: 3,
            name: "Jill",
            age: 23,
            address: "New York",
        },
    ];
    return (
        <>
            This is the App
            <Comp message={"This is a message"} />
            <Comp message={"This is a message"} />
            <Comp message={"This is a message"} />
            {demoObjectArr.map((obj)=>{
                return <Comp key={obj.id} message={obj.name} />
            })}
        </>
    );
};

export default App;

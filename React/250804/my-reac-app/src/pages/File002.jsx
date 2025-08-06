import "../css/File002.css";

{
    /* props 받는 것도 구조분해할당 가능*/
}
function Card({ name, image }) {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    );
}

function File002() {
    const humanData = [
        { name: "Alice", image: "https://picsum.photos/200/200?random=1" },
        { name: "Bob", image: "https://picsum.photos/200/200?random=2" },
        { name: "Charlie", image: "https://picsum.photos/200/200?random=3" },
    ];
    return (
        <>
            <div className="cards">
                {humanData.map((human, i) => (
                    <Card key={i} name={human.name} image={human.image} />
                ))}
            </div>
        </>
    );
}
export default File002;

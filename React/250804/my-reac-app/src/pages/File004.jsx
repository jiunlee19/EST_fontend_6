function DescComponent({ name, desc }) {
    return (
        <>
            <dt>{name}</dt>
            <dd>{desc}</dd>
        </>
    );
}
function File004() {
    const items = [
        { id: 1, name: "Apple", desc: "빨간건 사과" },
        { id: 2, name: "Banana", desc: "바나나는 길어" },
        { id: 3, name: "Cherry", desc: "체리는 비싸" },
    ];

    return (
        <dl className="list-items">
            {items.map((item) => (
                <DescComponent
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                />
            ))}
        </dl>
    );
}
export default File004;

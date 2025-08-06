// 왜 이렇게 복잡하게 합성 컴포넌트를 만든거에요?
// 깊이가 깊어지면 합성 컴포넌트가 필요하다.

// 아래와 같은 형태를 생각해봅시다. 우리가 프로젝트가 조금만 더 커지면 아래처럼 깊이가 깊어지는 컴포넌트 구조를 갖게 될 것입니다.

function A(props) {
    return (
        <>
            {props.children}
            <div>world</div>
        </>
    );
}

function B(props) {
    return <>{props.children}</>;
}

function C(props) {
    return <>{props.children}</>;
}

function D(props) {
    return <div>hello world</div>;
}

function File020() {
    return (
        <>
            <A>
                <B>
                    <C>
                        <D />
                    </C>
                </B>
            </A>
        </>
    );
}

export default File020;

export default function StyledBasic(){
    return (
        <>
            <style jsx>{`
            .panel {
                width: 300px;
                padding: 10px;
                border: 1px solid #000;
                border-radius: 5px;
                background-color: royalblue;
                color: white;
            }
            `}</style>
            <style jsx global>{`
            h3 {
                background-color:Yellow;
            }
            `}</style>
            <div className="panel"><b>Styled JSX</b>はJSX式にスタイルを定義をしています。
            </div>
        </>
    )
}
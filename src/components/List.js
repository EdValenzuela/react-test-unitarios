
const List = ({ title, list }) => {
    return (
        <section>
            <h1 className="big">{title}</h1>
            <ul>
                {
                    list.map(({id, name}) => (
                        <li key={id}>
                            {name}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default List
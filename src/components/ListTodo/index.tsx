import './ListTodo.css'

export const ListTodo = () => {
    return <div className="ant-list-items">
        <div className="ant-list-item">
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>Name</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        Description
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a>Edit</a>
                    </li>
                    <li>
                        <a>Remove</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
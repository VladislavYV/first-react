import "./BtnSet.css"

export function BtnSet ({name, id}) {
    return 
        <li className="list-set__item">
            <link className="list-set__btn" to={'/set/${id}'} state={{ set:name }} rel="stylesheet"> 
                {name}
            </link>
        </li>
}
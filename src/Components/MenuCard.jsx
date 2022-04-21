import "./menucard.css";

const MenuCard = (props)=>{
    return <div className="menu_card">
        <i className={props.icon}></i>
        <h3>{props.title}</h3>
    </div>
}
export default MenuCard
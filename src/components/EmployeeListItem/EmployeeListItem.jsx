import "./EmployeeListItem.css"

function EmployeeListItem() {
  return (
    <div className="EmployeeProfile">
      <img src="https://img.icons8.com/color/80/user-male-circle.png" alt="Profile Pic" />
      <div>
      <h2>Name</h2>
      <h3>Title</h3>
      </div>
    </div>
  );
}

export default EmployeeListItem;

const TableDisplayUser = ({
  listUsers,
  handleClickUpdateBtn,
  handleClickViewBtn,
  handleClickDeleteBtn,
}) => {
  // để đảm bảo cho components này được render trước cần componentsDidmount ~~ useEffect.
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 ? (
            listUsers.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleClickViewBtn(item)}
                    >
                      view
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdateBtn(item)}
                    >
                      update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickDeleteBtn(item)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No Users Found !
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableDisplayUser;

import ReactPaginate from "react-paginate";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const TableUserPaginate = ({
  listUsers,
  handleClickUpdateBtn,
  handleClickViewBtn,
  handleClickDeleteBtn,
  fetchListUserWithPaginate,
  pageCount,
  currentPage,
  setCurrentPage,
}) => {
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(+event.selected + 1);
    fetchListUserWithPaginate(+event.selected + 1);
  };

  // để đảm bảo cho components này được render trước cần componentsDidmount ~~ useEffect.
  return (
    <>
      <table className="table table-hover table-bordered table-list-user">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              No
            </th>
            <th scope="col" className="text-center">
              Username
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              Role
            </th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 ? (
            listUsers.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th className="text-center" scope="row">
                    {index + 1}
                  </th>
                  <td className="username">{item.username}</td>
                  <td className="email">{item.email}</td>
                  <td className="text-center role">{item.role}</td>
                  <td className="d-flex justify-content-center actions">
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
              <td colSpan="5" style={{ textAlign: "center" }}>
                No Users Found !
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="TablePagination">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;

import React from 'react'

function Pagination() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
      <button
        onClick={() => handlePageChange(1)}
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </button>

      {pageNumbers}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
  
}

export default Pagination

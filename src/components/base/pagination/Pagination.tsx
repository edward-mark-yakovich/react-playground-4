import paginationCSS from "./paginationCSS";
import React, { useState, ChangeEvent } from 'react';

type PaginationProps = {
  currentPage: number;
  handleChosenPage: (page: number) => void;
  endOfPages: boolean;
};

type PaginationState = number;

const Pagination = ({
  currentPage = 1,
  handleChosenPage,
  endOfPages = false
}: PaginationProps) => {
  const [page, setPage] = useState<PaginationState>(currentPage);

  const handlePagination = (dir: string) => {
    let updatedPage = page;

    dir === 'forward' ? ++updatedPage : --updatedPage;

    sendOffPage(updatedPage);
  };

  const handlePaginationDirect = (ev: ChangeEvent<{ value: string }>) => {
    const val = ev.target.value;

    sendOffPage(parseInt(val) || 1);
  };

  const sendOffPage = (newPage: number) => {
    handleChosenPage(newPage);
    setPage(newPage);

    if (typeof window !== "undefined") window.scrollTo(0, 0);
  };

  const paginationInputID = "pagination__input-ID-01";

  return (
    <nav data-component="Pagination" className={paginationCSS.pagination}>
      <div className={paginationCSS.pagination_grid}>
        <button type="button" className={paginationCSS.pagination_btn} disabled={page == 1} onClick={() => handlePagination('previous')}>
          Previous
        </button>

        <div>
          <label className={paginationCSS.pagination_label} htmlFor={paginationInputID}>{page}</label>
          <input className={paginationCSS.pagination_input} value={page} onChange={(ev) => handlePaginationDirect(ev)} type="text" name={paginationInputID} id={paginationInputID} />
        </div>

        <button type="button" className={paginationCSS.pagination_btn} disabled={endOfPages} onClick={() => handlePagination('forward')}>
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;

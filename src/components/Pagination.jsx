import React from "react";

const Pagination = ({ currPage, totalPages, onPageChange }) => {
	const pagesToShow = 6;
	const getPageNumbers = () => {
		const halfPagesToShow = Math.floor(pagesToShow / 2);
		let startPage = Math.max(currPage - halfPagesToShow, 1);
		let endPage = Math.min(startPage + pagesToShow - 1, totalPages);

		if (endPage - startPage + 1 < pagesToShow) {
			startPage = Math.max(endPage - pagesToShow + 1, 1);
		}

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i
		);
	};
	return (
		<div className="mt-4 flex justify-center">
			<button
				className="px-3 py-1 bg-gray-300 mr-2 disabled:opacity-50"
				onClick={() => onPageChange(currPage - 1)}
				disabled={currPage === 1}>
				&lt;
			</button>
			{getPageNumbers().map((pageNumber) => (
				<button
					key={pageNumber}
					className={`px-3 py-1 mx-1 rounded-full ${
						pageNumber === currPage ? "bg-[#ff9945] text-white" : "bg-gray-300"
					}`}
					onClick={() => onPageChange(pageNumber)}>
					{pageNumber}
				</button>
			))}
			<button
				className="px-3 py-1 bg-gray-300 ml-2 disabled:opacity-50"
				onClick={() => onPageChange(currPage + 1)}
				disabled={currPage === totalPages}>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;

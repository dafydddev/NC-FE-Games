function ReviewFilterControls({ sort, setSort, order, setOrder }) {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <fieldset>
      <legend>Review Filter</legend>
      <label htmlFor="sort">Sort</label>
      <select id="sort" value={sort} onChange={handleSortChange}>
        <option value="created_at">Created At</option>
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
      <label htmlFor="sort">Order</label>
      <select id="order" value={order} onChange={handleOrderChange}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </fieldset>
  );
}

export default ReviewFilterControls;

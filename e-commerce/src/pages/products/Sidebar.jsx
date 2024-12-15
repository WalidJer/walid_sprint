/* eslint-disable react/prop-types */
const Sidebar = ({ filter, setFilter, sort, setSort }) => {
    return (
      <aside className="sidebar">
        <div className="sidebar-section">
          <h3>Filters</h3>
          <ul className="sidebar-options">
            <li>
              <label htmlFor="filter-all" className="radio-label">
                <input
                id="filter-all"
                  type="radio"
                  name="filter"
                  value="all"
                  checked={filter === "all"}
                  onChange={() => setFilter("all")}
                />
                <span className="custom-radio"></span>
                No Filter
              </label>
            </li>
            <li>
              <label htmlFor="filter-laptops" className="radio-label">
                <input
                id="filter-laptops"
                  type="radio"
                  name="filter"
                  value="laptops"
                  checked={filter === "laptops"}
                  onChange={() => setFilter("laptops")}
                />
                <span className="custom-radio"></span>
                Laptops
              </label>
            </li>
            <li>
              <label className="radio-label">
                <input
                  type="radio"
                  name="filter"
                  value="mobiles"
                  checked={filter === "mobiles"}
                  onChange={() => setFilter("mobiles")}
                />
                <span className="custom-radio"></span>
                Mobiles
              </label>
            </li>
          </ul>
        </div>
  
        <div className="sidebar-section">
          <h3>Sorting</h3>
          <ul className="sidebar-options">
            <li>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="none"
                  checked={sort === "none"}
                  onChange={() => setSort("none")}
                />
                <span className="custom-radio"></span>
                No Sorting
              </label>
            </li>
            <li>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="low-to-high"
                  checked={sort === "low-to-high"}
                  onChange={() => setSort("low-to-high")}
                />
                <span className="custom-radio"></span>
                Price: Low to High
              </label>
            </li>
            <li>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sort"
                  value="high-to-low"
                  checked={sort === "high-to-low"}
                  onChange={() => setSort("high-to-low")}
                />
                <span className="custom-radio"></span>
                Price: High to Low
              </label>
            </li>
          </ul>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
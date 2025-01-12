import PropTypes from "prop-types";
import "./SearchBox.css";

const SearchBox = ({ value, onChange }) => {
    return (
    <div className="search-form">
      <label className="label-search">
          Find contacts by name
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="field-search"
            />
          </div>
      </label>
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
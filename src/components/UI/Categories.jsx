import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { mealActions } from "../../store/meal-slice.js";
import { filtersActions } from '../../store/filters-slice.js';

const Categories = () => {
  const selectedCategory  = useSelector(state => state.filters.selectedCategory)
  const isOpen = useSelector(state => state.filters.isDropdownOpen)
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    dispatch(
      filtersActions.setIsDropdownOpen()
    )
  };

  const handleOptionChange = (event) => {
    dispatch(
      filtersActions.setSelectedCategory({
        category: event.target.value
      })
    )
    dispatch(
        mealActions.sortByCategory({
            category: event.target.value
        })
    )
  };

  return (
    <div className="category">
      <p className="categorydropbtn" onClick={toggleDropdown}>
        {selectedCategory ? `Selected: ${selectedCategory}` : 'Select Category'}
      </p>
      {isOpen && (
        <div className="category-content">
          <label>
            <input
              type="radio"
              value="Fastfood"
              checked={selectedCategory === 'Fastfood'}
              onChange={handleOptionChange}
            />
            Fastfood
          </label>
          <label>
            <input
              type="radio"
              value="Pasta"
              checked={selectedCategory === 'Pasta'}
              onChange={handleOptionChange}
            />
            Pasta
          </label>
          <label>
            <input
              type="radio"
              value="Steaks"
              checked={selectedCategory === 'Steaks'}
              onChange={handleOptionChange}
            />
            Steaks
          </label>
          <label>
            <input
              type="radio"
              value="Seafood"
              checked={selectedCategory === 'Seafood'}
              onChange={handleOptionChange}
            />
            Seafood
          </label>
          <label>
            <input
              type="radio"
              value="Soups"
              checked={selectedCategory === 'Soups'}
              onChange={handleOptionChange}
            />
            Soups
          </label>
          <label>
            <input
              type="radio"
              value="Salads"
              checked={selectedCategory === 'Salads'}
              onChange={handleOptionChange}
            />
            Salads
          </label>
          <label>
            <input
              type="radio"
              value="Sweetie"
              checked={selectedCategory === 'Sweetie'}
              onChange={handleOptionChange}
            />
            Sweetie
          </label>
        </div>
      )}
    </div>
  );
};

export default Categories;

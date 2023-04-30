import React, { useState } from 'react';
import css from '../styles.module.css'

export const SearchBar = ({onSubmit})=> {
  const [inputValue, setInputValue] = useState('')
  

 const onSearchInputChange = e => {
    setInputValue( e.currentTarget.value) 
  };

 const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please enter request');
      return;
    }
    onSubmit(inputValue.toLowerCase());
  };


    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            value={inputValue}
            onChange={onSearchInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

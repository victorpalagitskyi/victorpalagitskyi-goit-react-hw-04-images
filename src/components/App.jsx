import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner'
import css from './styles.module.css'
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import * as SearchService from './SearchService'


export const App = () => {
  const [images, setImages] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [numberOfPage, setNumberOfPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [totalHits, setTotalHits] = useState(0)
  const [error, setError] = useState(false)

  
  useEffect(() => {
    if (searchValue) {
      if (numberOfPage === 1) setImages([])
      setIsLoading(true)
      SearchService.getImages(searchValue, numberOfPage)
        .then(data => {
          console.log(data)
          setImages(images =>[...images, ...data.data.hits])
          setTotalHits(data.data.totalHits)
        })
        .catch(error => setError(true))
        .finally(() => { setIsLoading(false) })
    }
  }, [searchValue, numberOfPage])

    

const  onSearchSubmit = value => {
  setSearchValue(value)
  setNumberOfPage(1) ;
  };

 const incrementNumberOfPage = () => {
      setNumberOfPage( numberOfPage + 1) 
    }

  

    return (
      <div className={css.App}>
        <SearchBar onSubmit={onSearchSubmit}/>
        {error && <h1>Please try again</h1>}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && !isLoading && images.length < totalHits && (
          <LoadMoreBtn onClick={incrementNumberOfPage}></LoadMoreBtn>
        )}
        {isLoading && <RotatingLines
         strokeColor="grey"
         strokeWidth="5"
         animationDuration="0.75"
         width="96"
         visible={true}
         /> }
      </div>
    );
  }

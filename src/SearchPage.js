import React from 'react';
import "./SearchPage.css";
import {useStateValue} from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";










function SearchPage() {
 
    const [{ term }, dispatch] = useStateValue(); 
    const { data } = useGoogleSearch(term);

   
    return (
        <div className="searchPage">

        <div className="searchPage__header">
        <Link to="/">
        <img className="searchPage__logo"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </Link>
        
        <div className="searchPage__headerBody">
        <Search hideButton />

        <div className="searchpage__Options">
        <div className="searchpage__optionsLeft">
        
        <div className="searchpage__option">
        <SearchIcon />
        <Link to="/all">All</Link>
          </div>




         
        <div className="searchpage__option">
          <DescriptionIcon />
          <Link to="/news">News</Link>
          </div>

          <div className="searchpage__option">
          <ImageIcon />
          <Link to="/images">Images</Link>
          </div>

          <div className="searchpage__option">
          <LocalOfferIcon />
          <Link to="shopping">Shopping</Link>
          </div>

          <div className="searchpage__option">
          <RoomIcon />
          <Link to="/maps">maps</Link>
          </div>

          <div className="searchpage__option">
          <MoreVertIcon />
          <Link to="/more">more</Link>
          </div>

        </div>
        
        <div className="searchpage__optionsRight">
        <div className="searchpage__option">
          <Link to="/settings">Settings</Link>
          </div>
        
        <div className="searchpage__option">
        
        <Link to="/tools">tools</Link>
        </div> 
         

       </div>






        </div>




        </div>







        </div>







        {term && (<div className="searchPage__results">
        
        <p className="searchPage__resultCount">
        About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}) for {term}


        </p>

        { data?.items.map( item => (
            <div className="searchPage__result">
          
          <a href={item.link}>

          {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
          <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} /> 
          )}

          { item.displayLink } ^
          </a>
          
          <a className="searchPage__resultTitle" href={item.link}>
           <h2>{item.title}</h2>           
          </a>

          <p className="searchPage__resultSnippet">
          {item.snippet}
          </p>
 

            
      
            </div>
        ))}


        </div>)}

        
        </div>
        
    )
   }

export default SearchPage

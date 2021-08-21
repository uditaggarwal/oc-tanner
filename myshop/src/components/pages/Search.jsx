import React from 'react';
import Searchnav from '../Searchnav'
import Homesearch from '../../components/HomeSearch'
import  SearchBar  from "../../components/SearchExplore";
import { Route,} from 'react-router-dom';
import '../css/search.css'

const Search=()=>{
return(
    <>
    <div className="search m-0 p-0" style={{'backgroundColor': 'whitesmoke',}}>
     
     <div className="serch-content-body">
    <Route exact path="/Search/">
    < Searchnav />
    <Homesearch />
    </Route>
    <Route exact path="/Search/explore" component={SearchBar} />
        
   </div>
   

    </div>
    </>
)
}

export default Search;
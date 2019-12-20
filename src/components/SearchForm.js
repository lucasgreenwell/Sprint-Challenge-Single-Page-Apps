import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = React.useState([]);

  // const handleChange = event => {
  //   props.setGuys(props.folks)
  //   setSearchTerm(event.target.value);
  //   // console.log(props.guys);
  //   // console.log(searchTerm);
  // };
  // // console.log(props.guys)

  // const howToFilter = person => {
  //   if(person.name.toLowerCase().includes(searchTerm) || person.species.toLowerCase().includes(searchTerm)|| person.status.toLowerCase().includes(searchTerm) || person.origin.name.toLowerCase().includes(searchTerm)){
  //     return true;
  //   }
  // }
  // useEffect(() => {
  //   const results = props.guys.filter(person =>
  //     howToFilter(person)
  //     // person.name.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  //   // console.log(searchResults)
  //   props.setGuys(searchResults);
  // }, [searchTerm]);

  return (
    <section className="search-form">
     <input
     type="text"
     placeholder="Search"
     value={props.search}
     onChange={e => {
       e.preventDefault()
       props.setSearch(e.target.value)
     }}
     />
    </section>
  );
}

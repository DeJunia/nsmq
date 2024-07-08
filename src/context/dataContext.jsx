import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [contests, setContests] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');
  const logo = "NSMQ";
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jsonUrl = 'db.json';
    axios.get(jsonUrl)
    .then(response => {
      const data = response.data;
      setPosts(data.posts);
      setContests(data.contests);
      setIsLoading(false)
    })
    .catch(error => {
      console.error('Error fetching Json', error);
      setError(error);
      setIsLoading(true);
    })



  }, []);

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light';
    setTheme(saveTheme);
    document.documentElement.className = saveTheme;
  }, []);

  const toggleLightMode = () => {
    setTheme('light');
    document.documentElement.className = 'light';
    localStorage.setItem('theme', 'light');
  }

  const toggleDarkMode = () => {
    setTheme('dark');
    document.documentElement.className = 'dark';
    localStorage.setItem('theme', 'dark');
  }

  const startSearching = () => setIsSearching(true);

  const cancelSearch = () => {
    setIsSearching(false);
    setQuery('');
  }

  const handleInputClick = () => {
    startSearching();
    navigate('/search');
  }

  const handleButtonClick = () => {
    if(isSearching) {
      cancelSearch();
      navigate(-1);
    }
  }

  const filterItems = (items) => {
    return items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  }

  const filteredPosts = filterItems(posts);
  const filteredContests = filterItems(contests);


  return (
    <DataContext.Provider value={{
      theme, toggleLightMode, toggleDarkMode, logo,
      posts, contests, error, isloading,
      query, setQuery, isSearching, handleButtonClick,  handleInputClick, filteredPosts, filteredContests
    }}>{children}</DataContext.Provider>
  )
}

export default DataContext;
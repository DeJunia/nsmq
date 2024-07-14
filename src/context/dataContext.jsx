// src/context/DataContext.js
import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [contests, setContests] = useState([]);
  const [images, setImages] = useState([]);
  const [theme, setTheme] = useState('light');
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { postsData, contestsData, imagesData, fetchError, loading } = useAxiosFetch('data/posts.json', 'data/contests.json', 'data/images.json');


  useEffect(() => {
    setPosts(postsData.posts);
    setContests(contestsData.contests);
    setImages(imagesData.images);
  }, [postsData, contestsData, imagesData]);
 

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light';
    setTheme(saveTheme);
    document.documentElement.className = saveTheme;
  }, []);

  const toggleLightMode = () => {
    setTheme('light');
    document.documentElement.className = 'light';
    localStorage.setItem('theme', 'light');
  };

  const toggleDarkMode = () => {
    setTheme('dark');
    document.documentElement.className = 'dark';
    localStorage.setItem('theme', 'dark');
  };

  const startSearching = () => setIsSearching(true);

  const cancelSearch = () => {
    setIsSearching(false);
    setQuery('');
  };

  const handleInputClick = () => {
    startSearching();
    navigate('/search');
  };

  const handleButtonClick = () => {
    if (isSearching) {
      cancelSearch();
      navigate(-1);
    }
  };

  const filterItems = (items) => {
    if (!items) {
      return [];
    }
    return items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredPosts = filterItems(posts);
  const filteredContests = filterItems(contests);

  return (
    <DataContext.Provider value={{
      theme, toggleLightMode, toggleDarkMode, logo: "NSMQ",
      posts, contests, error: fetchError, isLoading: loading,
      query, setQuery, isSearching, handleButtonClick, handleInputClick, filteredPosts, filteredContests, images
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

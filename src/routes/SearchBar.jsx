import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // position: 'fixed'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchData = () => {
    
      fetch(`https://dummyjson.com/products/category/${searchTerm}`)
      .then((res) => res.json())
            .then((data) => {
              setSearchProducts(data.products);
            })
  };
  
  return (
    <Box sx={{ flexGrow: 1, float: 'right'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              type='text'
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button onClick={fetchData}>Search</button>
            <ul>

            {searchProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
          </Search>
    </Box>
  );
}

export default SearchBar;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import { Link, useParams } from 'react-router-dom'


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

  const searchResult = searchProducts.map((product) => (
    <div key={product.id} style={{ width: '30%', padding: '10px' }}>
    <Card className="cards" sx={{ minWidth: 275, minHeight: 200 }}>
        <CardMedia sx={{ height: 140 }} image={product.thumbnail} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/product/${product.id}`} size="small">
                <Button size="small">Show details</Button>
            </Link>
            &emsp;
        </CardActions>
    </Card>
</div>
))
  
  return (<>
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


          </Search>
    </Box>
    <Typography variant="h3" component="div">
      {searchTerm}
    </Typography>
 
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: "30px" }}>{searchResult}</div>
  </>
  );
}

export default SearchBar;
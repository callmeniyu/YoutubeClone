import { Stack } from "@mui/material"
import { Link } from "react-router-dom"

import {logo} from '../utils/constants'
import {SearchBar} from './index'
import zIndex from "@mui/material/styles/zIndex"

const Navbar = () => (
  <Stack
  direction="row"
  alignItems="center"
  p={2}
  sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}
  >
  <Link to="/" style = {{display: 'flex' ,alignItems: 'center'}}>
      <img src={logo} alt="logo" height={45} />
    <h3 style={{color:"red", fontFamily:"roboto", marginLeft:"1rem"}}>StreamVerse</h3>
    </Link>
  <SearchBar/>
  </Stack>
)

export default Navbar
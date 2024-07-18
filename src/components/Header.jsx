import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';

function Header() {
    const [theme, setTheme] = useState(false)
    const navigate = useNavigate();
    const changeTheme = ()=> {
        const root = document.getElementById('root');
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color="#fff"
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color="black"
        }
        setTheme(!theme)

    }
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <div className='flex-row' onClick={()=>navigate('/')}>
              <img className='logo' src="./src/images/logo.png" alt="" />
              <p className='logo-text'>XNM ABD</p>
          </div>
          <div className='flex-row'>
              <input type=" text" placeholder='Bir sheyler girin' className='search-input' />
              <div>
                  {
                      theme ? <FaMoon onClick={changeTheme } className='icon' /> :  <CiLight onClick={changeTheme} className='icon' /> }
                  
                  <Badge badgeContent={4} color="error">
                    
                      <CiShoppingBasket className='icon' style={{marginRight:'6px'}} />
    </Badge>
                  

                  </div>
          </div>
    </div>
  )
}

export default Header

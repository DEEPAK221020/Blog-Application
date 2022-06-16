
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {

    const navigate = useNavigate();
    var gtt= localStorage.getItem('vair');

    const logout = async () => {
    localStorage.removeItem('vair');    
        navigate('/account');
    }
        
    return (
        <Component>
            <Container>
               
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
             {gtt ? <Link to='/profile'> MY PROFILE </Link> : <Link to='/profile' style={{display : 'none'}}> Profile </Link> }
             { gtt ? <Link to='/account' onClick={logout}>LOGOUT</Link> : <Link to='/account'>LOGIN</Link> }
            </Container>
        </Component>
    )
}

export default Header;
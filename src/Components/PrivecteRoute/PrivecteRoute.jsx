
import { useContext } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

const PrivecteRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);

    const locaton = useLocation()
    console.log(locaton.pathname);
  

    if(loading){
        return<div className='ml-44 md:ml-80 lg:ml-[40rem]'>
                <span className="loading loading-dots loading-lg"></span>;
             </div>
    }

    if(user){
        return children;
    }
        //  login page jabe
        return <Navigate state={locaton.pathname} to='/login'></Navigate>
    
     
};
      

export default PrivecteRoute;
PrivecteRoute.propTypes ={
    children:PropTypes.node
}
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthProvider";
import swal from 'sweetalert';



const LogIn = () => {
  
  // goole diye login kora
    const {logInUser,signInWithGoogle} = useContext(AuthContext);
    const handleGooleSignIn =()=>{
      signInWithGoogle()
      .then(result =>{
        const googleLogIn =result.user
        console.log(googleLogIn);
        
      })
      .catch(error=>{
        console.log(error);
      })
    }

    // ata privecteRoute thake ascha
    const loaction =useLocation();
    console.log('loaction in thr login page',loaction);
    const Navigate =useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    

        logInUser(email,password)
        .then(result=>{
            console.log(result.user)
            swal("LOGIN SUCCESS !", "", "success");
            // Navigate aer por login 
            Navigate(loaction?.state? loaction.state :'/' );
            
        })
        .catch(error=>{
            console.log(error);
            swal("Sorry!", "Your email and password Incorrect!", "error");
        })

    }


    return (
        <div className="  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="  p-5 shadow-2xl rounded-md  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignIn} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
               
               <button 
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>

            </div>
          </form>
          <p className="mt-2">Do not have an account? <Link className="text-green-400 " to='/sigup'>Please Registration</Link></p>

          <p className="mt-5"><button onClick={handleGooleSignIn} className="btn btn-primary">GOOGLE</button></p>
        </div>
      </div>
    );
};

export default LogIn;
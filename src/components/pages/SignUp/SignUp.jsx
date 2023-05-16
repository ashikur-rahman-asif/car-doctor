import { Link } from "react-router-dom";
import img from '../../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const {createUser,logOut}=useContext(AuthContext)
    const handleSignup = e => {
      e.preventDefault();
      const form = e.target 
      // console.log(form)
      const name = form.name.value 
      const password = form.password.value
      const email = form.email.value 
      
      console.log(name, email, password)
      createUser(email, password)
        .then(result => {
          form.reset();
          const user = result.user 
          logOut()
          console.log(user)
        })
        .catch(err => {
        console.log(err)
      })
      
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center mr-12 w-1/2">
         
          <img className="" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                  <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                  placeholder="name"
                  name='name'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                  placeholder="email"
                  name='email'
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                  type="text"
                  name='password'
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn btn-primary">Login</button> */}
              <input className="btn btn-primary" type="submit" value="Sign up" />
            </div>
            </form>
              <p className='my-4 text-center'>Already have an account? <Link to="/login" className='text-orange-600 font-bold'>Login</Link></p>
              <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;
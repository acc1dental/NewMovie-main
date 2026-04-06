import React, { useState } from 'react';
import Banner from '../Components/Main/Banner';
import Footer from '../Components/Main/Footer';

const MovieLogin = () => {
  // 1. Initialize state to track which view to show
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className="h-auto bg-[#141414] flex items-center justify-center p-6 font-sans pt-[110px] ">
        <div className="w-[100%] min-h-[500px] bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-zinc-800">
          
          {/* Left Side: Your Image Container */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img 
              src="../../public/support.png" 
              alt="Movie Collage" 
              className="p-[40px] h-[500px] w-[480px]"
            />
          </div>

          {/* Right Side: Dynamic Form */}
          <div className="w-[70%] p-8 flex flex-col justify-center">
            <h2 className="text-white text-[16px] md:text-3xl font-semibold mb-8 text-center md:text-left">
              {isLogin ? "Please login to use our app" : "Create an account"}
            </h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* 2. Show Nickname field only if Registering */}
              {!isLogin && (
                <div>
                  <label className="block text-zinc-400 text-sm mb-2 font-medium">Nickname</label>
                  <input 
                    type="text" 
                    placeholder="Nickname"
                    className="w-full bg-[#161616] border border-zinc-800 rounded-xl px-4 py-[8px] text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                  />
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-zinc-400 text-sm mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="example@email.com"
                  className="w-full bg-[#161616] border border-zinc-800 rounded-xl px-4 py-[8px] text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-zinc-400 text-sm mb-2 font-medium">Password</label>
                <input 
                  type="password" 
                  placeholder="password"
                  className="w-full bg-[#161616] border border-zinc-800 rounded-xl px-4 py-[8px] text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                />
              </div>

              {/* Dynamic Button Text */}
              <button className="cursor-pointer w-full bg-[#e50914] hover:bg-[#f40612] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-red-900/20 active:scale-[0.98]">
                {isLogin ? "Login" : "Register"}
              </button>

              {/* 3. Click Handler to toggle state */}
              <div className="text-center">
                <span 
                  className="text-zinc-500 text-sm cursor-pointer hover:text-white transition-all"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Don't have an account?" : "Have an account?"}
                </span>
              </div>

              {/* Social Logins with Dynamic Text */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-zinc-800 hover:bg-zinc-900 text-white py-3 px-4 rounded-xl text-sm transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-1.99 5.23-7.84 5.23-5.07 0-9.18-4.2-9.18-9.35s4.11-9.35 9.18-9.35c2.88 0 4.81 1.22 5.91 2.27l2.59-2.5C19.33 1.9 16.22.5 12.48.5 6.13.5.99 5.65.99 12s5.14 11.5 11.49 11.5c6.63 0 11.03-4.66 11.03-11.22 0-.76-.08-1.34-.19-1.86h-9.84z"/>
                  </svg>
                  {isLogin ? "Login with Google" : "Register with Google"}
                </button>
                
                <button className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-zinc-800 hover:bg-zinc-900 text-white py-3 px-4 rounded-xl text-sm transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  {isLogin ? "Login with Github" : "Register with Github"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default MovieLogin;
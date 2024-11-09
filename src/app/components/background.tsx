const Background = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#FFFFFF] " >

        <div className="absolute w-40 h-40 bg-gradient-to-r from-pink-500 to-pink-500 rounded-full blur-3xl opacity-80 top-16 right-32"></div>
  
      
        <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 to-teal-950 rounded-full blur-3xl opacity-80 top-1/3 right-1/4 transform -translate-x-1/2"></div>
        <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 to-teal-950 rounded-full blur-3xl opacity-80 top-1/3 right-1/4 transform -translate-x-1/2"></div>

  
        <div className="absolute w-60 h-60 bg-gradient-to-r from-purple-400 to-yellow-500 rounded-full blur-3xl opacity-80 top-1/2  right-20"></div>
        <div className="absolute w-60 h-60 bg-gradient-to-r from-purple-400 to-yellow-500 rounded-full blur-3xl opacity-80 top-1/2  right-20"></div>

      </div>
    );
  };
  
  export default Background;
  
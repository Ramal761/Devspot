

const Contact = () => {
  return (
    
    
   
   <div className="w-full h-[900px] pt-30 flex items-start justify-center bg-white px-6  ">
  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl w-full">
    {/* Left Text Section */}
    <div className="flex flex-col w-full max-w-xl lg:text-left">
      <h1 className="text-4xl font-semibold text-gray-800 mb-3">
       <span className="text-orange-400">Contact</span> Us
      </h1>
      <p className="text-xl text-gray-700">
        We love making new connections. So, if you just want to say Hi,
        collaborate, or have a project in mind — we're happy to hear from you!
      </p>
    </div>

    {/* Right Form Section */}
    <form className="bg-gradient-to-tr from-[#ED8B29] to-[#FFD23F] rounded-3xl px-10 py-10 flex flex-col gap-5 w-full max-w-xl shadow-lg">
      <input
        type="text"
        name="name"
        placeholder="Your name*"
        required
        className="w-full bg-[#FFE0B2] py-3 px-5 rounded-full placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Your email*"
        required
        className="w-full bg-[#FFE0B2] py-3 px-5 rounded-full placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition" />

      <input
        type="text"
        name="website"
        placeholder="Your website (if you have one)"
        className="w-full bg-[#FFE0B2] py-3 px-5 rounded-full placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition"/>

      <textarea
        name="message"
        placeholder="Tell us a bit about your project*"
        required
        className="w-full bg-[#FFE0B2] px-5 py-4 rounded-xl placeholder:text-[#000B27] text-[#000B27] focus:outline-none focus:ring-2 focus:ring-[#000B27]/50 transition resize-none h-32 align-top"
      ></textarea>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="privacy"
          required
          className="cursor-pointer accent-[#000B27]"
        />
        <label htmlFor="privacy" className="text-sm text-[#000B27]">
          I agree to the{" "}
          <span className="underline cursor-pointer">privacy policy</span>
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#000B27] rounded-full py-2 px-10 text-white w-fit mt-3 hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        Send
      </button>
    </form>
  </div>
</div>

  );
};

export default Contact;
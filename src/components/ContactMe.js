function ContactMe() {
  return (
    <section id="contact-me" className="mx-80 my-24">
      <div className="mb-8">
        <hr className="border border-black" />
        <h1 className="m-auto w-fit -translate-y-6 bg-white px-8 text-4xl">
          Contact Me
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center">
        <form action="" method="post" className="w-1/2">
          <div className="name my-3">
            <label htmlFor="name">Your Name</label>
            <br />
            <input
              className="w-full border border-black px-2 py-1"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="email my-3">
            <label htmlFor="email">Your Email</label>
            <br />
            <input
              className="w-full border border-black px-2 py-1"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="message my-3">
            <label htmlFor="message">Tell me what's on your mind</label>
            <br />
            <textarea
              className="w-full border border-black px-3 py-2"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="float-right">
            <input
              className="border"
              type="file"
              for="upload"
              name="attachment"
              id="attachment"
            />
            <button className="border-2 border-primary bg-gradient-to-r from-primary to-primary bg-[length:100%_100%] bg-right bg-no-repeat py-2 px-8 font-bold text-white duration-200 hover:bg-white hover:bg-[length:0_100%] hover:text-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;

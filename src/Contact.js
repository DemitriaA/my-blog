function Contact() {
  return (
    <div class="container">
      <h3>Contact Form</h3>
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{height:100}}
        ></textarea>

       <button>Submit </button>
      </form>
    </div>
  );
}
export default Contact;

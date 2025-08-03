export default function ContactPage() {
  return (
    <div className="form-container">
      <h1 className="form-title">Contact Us</h1>
      <form className="form">
        <input type="text" placeholder="Your Name" required className="form-input" />
        <input type="email" placeholder="Your Email" required className="form-input" />
        <textarea placeholder="Your Message" required className="form-input" rows={4}></textarea>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
}

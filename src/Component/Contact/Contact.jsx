import './Contact.css';

export function Contact() {
    return (
    <>
      <div className='min-vh-83 bg-white d-flex flex-column justify-content-center align-items-center'>

        <h2 className="text-uppercase fw-bold mb-3 text-navy fs-1 pt-1">conatct section</h2>

        <div className='text-white d-flex justify-content-center align-items-center mb-3'>
          <span className='dark-line'></span>
          <i className="fa-solid fa-star mx-3 text-navy"></i>
          <span className='dark-line'></span>
        </div>

       <form className='w-50'>
         <div class="d-flex flex-column justify-content-start align-items-start w-100 gap-5 mb- 3">
          <input id="userName" name="userName" type="text" class="form-control border-0 border-bottom py-3" placeholder="userName" aria-label="Username"/>
          <input id="userAge" name="user" type="text" class="form-control border-0 border-bottom py-3" placeholder="userAge" aria-label="userAge"/>
          <input id="userEmail" name="useEmail" type="email" class="form-control border-0 border-bottom py-3" placeholder="userEmail" aria-label="userEmail"/>
          <input id="userPassword" name="userPassword" type="password" class="form-control border-0 border-bottom py-3" placeholder="userPassword" aria-label="userPassword"/>
        </div>
        
        <button type="button" class="btn d-flex bg-green text-white mt-4">Send Message</button>

       </form>
        
      </div>
    </>)
}
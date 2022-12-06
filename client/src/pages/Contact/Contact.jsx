import React from "react";
import "./Contact.css"

const Contact =()=>{
    return(
        <div className="img">
           
<section className="mb-4">

    
    <h2 className="h1"><h1>Contact us </h1> </h2>
    
    <p className="h2"> <h2>Do you have any questions? 
        Please do not hesitate
         to contact us directly.
         Our team will come back to you within
        a matter of hours to help you.</h2></p>

    <div className="row">

       
        <div className="h3">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <  input type="text" id="name" name="name" className="form-control"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                    
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                
                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
               

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                <button onClick={"click"}>submit</button>
            </div>
            <div className="status"></div>
        </div>
        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@blogPost.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>



        </div>
    )
};

export default Contact;
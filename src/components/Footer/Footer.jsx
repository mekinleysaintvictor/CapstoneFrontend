import React from "react";
import './Footer.css';

function Footer () {


    return(
        <React.Fragment>
        <footer class="page-footer">
            <div class="fluid-container">
                <div class="row">
                    <div class="col-md-8 col-sm-8 col-sm-12">
                        <h6 class="text-uppercase font-weight-bold">Additional Information</h6>                        
                        <p>Artwork by 8pxl: https://8pxl.co/</p>
                    </div>
                    <div class="col-md-4 col-sm-4 col-sm-12">
                        <h6 class="text-uppercase font-weight-bold">Contact</h6>
                        <p>1640 Riverside Drive, Hill Valley, California
                        <br/>info@mywebsite.com</p>
                        {/* <br/>+ 01 234 567 88
                        <br/>+ 01 234 567 89</p> */}
                    </div>
                    <div class="footer-copyright text-center">© 2021 Copyright: MyWebsite.com</div>
                </div>
            </div>
        </footer>
    </React.Fragment>
    
    
    )
}

export default Footer;
import { Component } from "react";
import * as Icon from 'react-bootstrap-icons';

class MyFooter extends Component {
      render(){
            return(

                  <footer style={{backgroundColor: "#141414"}}>
                  <div className="gradient text-secondary" style={{minHeight: "25vh", paddingLeft: "400px", paddingRight: "400px", paddingTop: "50px"}}>
    
                        <div className="d-flex justify-content-start ml-4 pl-3" style={{fontSize: "18px"}}> 
                              
                              <Icon.Facebook className="mr-3"/>
                              <Icon.Instagram className="mr-3"/>
                              <Icon.Twitter className="mr-3"/>
                              <Icon.Youtube/>
                        
                        </div>
                  
                        <div className="d-flex justify-content-between mt-2" style={{fontSize: "10px"}}>
                              <div>
                              <ul className="text-left" style={{listStyle:"none"}}>
                                    <li>Audio and Subtitles</li>
                                    <li>Media Center</li>
                                    <li>Privacy</li>
                                    <li>Contact Us</li>
                              </ul>
                              </div>
                              <div >
                              <ul className="text-left" style={{listStyle:"none"}}>
                                    <li >Audio Description</li>
                                    <li>Investor Relation</li>
                                    <li>Legal Notices</li>
                              </ul>
                              </div>
                              <div >
                              <ul className="text-left" style={{listStyle:"none"}}>
                                    <li>Help Center</li>
                                    <li>Jobs</li>
                                    <li>Cookie Preference</li>
                              </ul>
                              </div>
                              <div >
                              <ul className="text-left" style={{listStyle:"none"}}>
                                    <li>Gift Cards</li>
                                    <li>Terms of Use</li>
                                    <li>Corporate Information</li>
                              </ul>
                              </div>
                        </div>
                        <div className="d-flex justify-content-start mb-2 ml-4 pl-3">
                              <button type="button" className="btn btn-outline-secondary btn-sm" style={{fontSize: "10px"}}>Secondary</button>

                        </div>
                        <div className="d-flex justify-content-start mt-3 mb-2 ml-4 pl-3">
                              <Icon.CircleFill/><span className="ml-2" style={{ fontSize: "10px"}}>1997-2022 Netflix, Inc. JJGZ674FF68898Z8GI</span>
                        </div>
                  </div>
                  </footer>
                  )}

}

export default MyFooter
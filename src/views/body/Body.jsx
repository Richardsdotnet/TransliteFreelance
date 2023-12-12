import React from "react";
import '../../styles/body/Body.css'


const Body = () =>{
    return(
       <div className="">


                <div className="main-body">
                        <div className="main-services">

                            <div className="top-body">
                                        <div className=" translation">
                                        <p>Translation</p>
                                        </div>
                                        <div className="anotation">
                                        <p>Annotations</p>
                                        </div>
                                        <div className="localization">
                                        <p>Localization</p>
                                        </div>
                            </div>

                            <div className="mid-body">
                                        <div className="transcript">
                                        <p>Transcripts</p>
                                        </div>
                                        <div className="content-writing">
                                        <p>Content Writing</p>
                                        </div>
                                        <div className="image-categorization">
                                        <p>Image collection/categorization</p>
                                        </div>

                            </div>

                            <div className="bottom-body">
                                        <div className="proofreading">
                                        <p>Proofreading</p>
                                        </div>
                            </div>

    



                        </div >

                            <div className="main-ads">

                        </div>

                </div>

            <div className="main-bottom">
                    <div>main bottom content here</div>

            </div>

       </div>

       
    );
}
export default Body;
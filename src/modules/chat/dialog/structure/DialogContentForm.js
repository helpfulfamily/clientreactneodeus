import React from 'react';

const DialogContentForm = (props) => {

    return (
        <div className="container">
            <div className="col-md-12">
                <div className="bottom">
                    <form className="text-area">
                                              <textarea className="form-control" placeholder="Start typing for reply..."
                                                        rows="1"></textarea>
                        <div className="add-smiles">
                            <span title="add icon" className="em em-blush"></span>
                        </div>
                        <div className="smiles-bunch">
                            <i className="em em---1"></i>
                            <i className="em em-smiley"></i>
                            <i className="em em-anguished"></i>
                            <i className="em em-laughing"></i>
                            <i className="em em-angry"></i>
                            <i className="em em-astonished"></i>
                            <i className="em em-blush"></i>
                            <i className="em em-disappointed"></i>
                            <i className="em em-worried"></i>
                            <i className="em em-kissing_heart"></i>
                            <i className="em em-rage"></i>
                            <i className="em em-stuck_out_tongue"></i>
                            <i className="em em-expressionless"></i>
                            <i className="em em-bikini"></i>
                            <i className="em em-christmas_tree"></i>
                            <i className="em em-facepunch"></i>
                            <i className="em em-pushpin"></i>
                            <i className="em em-tada"></i>
                            <i className="em em-us"></i>
                            <i className="em em-rose"></i>
                        </div>
                        <button type="submit" className="btn send"><i
                            className="ti-location-arrow"></i></button>
                    </form>
                    <label>
                        <input type="file"/>
                        <span className="btn attach"><i className="ti-clip"></i></span>
                    </label>
                </div>
            </div>
        </div>
    );


};
export default DialogContentForm;

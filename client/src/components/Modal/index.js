import React from "react";
import "./style.css";

function Modal(props) {
    return (
        <div className="modal fade noteModal" id="noteOfEncouragement" tabIndex="-1" role="dialog" aria-labelledby="noteOfEncouragementTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle"><strong>Note of Encouragement</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form action="/api/notes" method="POST">
                    <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="recipient">To:</label>
                                <select className="form-control" id="recipient" name="to" selectedvalue={props.stateto} onChange={props.onChange} >
                                    <option defaultValue disabled>Choose recipient</option>
                                    <option value="Davis and Jenni">Davis &#38; Jenni Birsan</option>
                                    <option value="Adi Cepela">Adi Cepela</option>
                                    <option value="Jimi Loc">Jimi Loc</option>
                                </select>

                                <label htmlFor="note" style={{paddingTop:"15px"}}>Note:</label>
                                <textarea className="form-control" rows="5" id="note" name="note" required  value={props.statenote} onChange={props.onChange} placeholder="Use this space to say something encouraging to the sponsoree!"></textarea>
                                <label htmlFor="from" style={{paddingTop:"15px"}}>From:</label>
                                <input className="form-control" rows="1" id="from" name="from" required  value={props.statefrom}  onChange={props.onChange}></input>
                            </div>  
                            <button type="submit" onClick={props.onClick} className="btn btn-send" style={{backgroundColor:"#e0b462", color: "whitesmoke", padding:"5px"}}><i className="fa fa-send" aria-hidden="true"></i></button>                     
                        </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Modal

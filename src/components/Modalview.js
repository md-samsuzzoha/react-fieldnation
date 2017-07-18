import React from 'react';
import Modal from 'react-overlays/lib/Modal';
import Button from 'react-bootstrap/lib/Button';


let rand = () => (Math.floor(Math.random() * 20) - 10);

const modalStyle = {
    position: 'fixed',
    zIndex: 1040,
    top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
    ...modalStyle,
    zIndex: 'auto',
    backgroundColor: '#000',
    opacity: 0.5
};

const dialogStyle = function () {
    // we use some psuedo random coords so nested modals
    // don't sit right on top of each other.
    let top = 50 + rand();
    let left = 50 + rand();

    return {
        position: 'absolute',
        width: 400,
        top: top + '%', left: left + '%',
        transform: `translate(-${top}%, -${left}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    };
};


export class Modalview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    handleChange(e, name) {
        console.log(e);
        e.preventDefault();
        this.props.changeName(name);
        this.close(true);
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }
    render() {

        return (
            <div className='modal-example'>
                <Button onClick={this.open}>
                    Edit
        </Button>

                <Modal
                    aria-labelledby='modal-label'
                    style={modalStyle}
                    backdropStyle={backdropStyle}
                    show={this.state.showModal}
                    onHide={this.close}
                >

                    <div style={dialogStyle()} >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Name</h4>
                            </div>
                            <form onSubmit={(e) => this.handleChange(e, document.getElementById("name").value)}>
                                <div className="form-group">
                                    <label className="form-control-label">Name</label>
                                    <input type="text" id="name" className="form-control" defaultValue={this.props.name} />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" onClick={this.close}>Cancel</button>
                                    <button type="submit" className="btn btn-success" >Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
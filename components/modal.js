import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }

  closeModal() {
    this.closeButton.click();
  }

  submitModal() {
    this.closeModal();
  }

  render() {
    return (
      <>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={(ele) => (this.closeButton = ele)}
                >
                  Close
                </button>

                {this.props.hasSubmit && (
                  <button type="button" className="btn btn-primary" onClick={submitModal}>
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
//
// const Modal = (props) => {
//   let closeButton = null;
//
//   const closeModal = () => {
//     closeButton.click();
//   };
//   const submitModal = () => {
//     closeModal();
//   };
//   return (
//     <>
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//         Launch demo modal
//       </button>
//       <div
//         className="modal fade"
//         id="exampleModal"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 ref={(ele) => (closeButton = ele)}
//               >
//                 Close
//               </button>
//
//               {props.hasSubmit && (
//                 <button type="button" className="btn btn-primary" onClick={submitModal}>
//                   Save changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
export default Modal;

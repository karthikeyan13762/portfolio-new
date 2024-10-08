// import React, { useState } from "react";
// import Close from "../assets/close.svg";
// import parse from "html-react-parser";

// const ProjectItem = ({ img, title, details }) => {
//   const [modal, setModal] = useState(false);

//   const toogleModal = () => {
//     setModal(!modal);
//   };
//   return (
//     <div className="project_item">
//       <img src={img} alt="" className="project_img" />
//       <div className="project_hover" onClick={toogleModal}>
//         <h3 className="project_title">{title}</h3>
//       </div>

//       {modal && (
//         <div className="project_modal">
//           <div className="project_modal_content">
//             <img
//               src={Close}
//               alt=""
//               className="modal_close"
//               onClick={toogleModal}
//             />

//             <h3 className="modal_title">{title}</h3>

//             <ul className="modal_list grid">
//               {details.map(({ icon, title, desc }, index) => {
//                 return (
//                   <li className="modal_item" key={index}>
//                     <span className="item_icon">{icon}</span>

//                     <div>
//                       <span className="item_title">{title}</span>
//                       <span className="item_details">{parse(desc)}</span>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>

//             <img src={img} alt="" className="modal_img" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectItem;

import React, { useState } from "react";
import Close from "../assets/close.svg";
import parse from "html-react-parser";

const ProjectItem = ({
  img,
  title,
  details,
  githubFE,
  githubBE,
  deployedLink,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="project_item">
      <img src={img} alt="" className="project_img" />
      <div className="project_hover" onClick={toggleModal}>
        <h3 className="project_title">{title}</h3>
      </div>

      {modal && (
        <div className="project_modal">
          <div className="project_modal_content">
            <img
              src={Close}
              alt=""
              className="modal_close"
              onClick={toggleModal}
            />

            <h3 className="modal_title">{title}</h3>

            <ul className="modal_list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal_item" key={index}>
                  <span className="item_icon">{icon}</span>

                  <div>
                    <span className="item_title">{title}</span>
                    <span className="item_details">{parse(desc)}</span>
                  </div>
                </li>
              ))}
            </ul>

            <img src={img} alt="" className="modal_img" />

            <div className="modal_buttons">
              {githubFE && (
                <a
                  href={githubFE}
                  className="modal_button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub FE
                </a>
              )}
              {githubBE && (
                <a
                  href={githubBE}
                  className="modal_button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub BE
                </a>
              )}
              {deployedLink && (
                <a
                  href={deployedLink}
                  className="modal_button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed Link
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;

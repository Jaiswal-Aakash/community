import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { icons } from "../../assets/Icons/icons";
import SideBar from "../SideBar/SideBar.jsx";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`${styles.navbarContainer} ${styles.noSelect}`}>
        <div className={styles.left}>
          <span className={styles.hamburger} onClick={toggleSidebar}>
            III
          </span>
          <div className={styles.title}>
            <img src={icons.title} alt="C" draggable="false" />
            <p>OMMUNITY</p>
          </div>
          <div className={styles.searchBar}>
            <input type="search" placeholder="Search..." />
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
      {/* <SideBar isExpanded={isExpanded} /> */}
    </>
  );
};

export default Navbar;


// import React from "react";
// import styles from "./Navbar.module.css";
// import { icons } from "../../assets/Icons/icons";

// const Navbar = ({ toggleSidebar }) => {
//   return (
//     <div className={`${styles.navbarContainer} ${styles.noSelect}`}>
//       <div className={styles.left}>
//         <span className={styles.hamburger} onClick={toggleSidebar}>
//           III
//         </span>
//         <div className={styles.title}>
//           <img src={icons.title} alt="C" draggable="false" />
//           <p>OMMUNITY</p>
//         </div>
//         <div className={styles.searchBar}>
//           <input type="search" placeholder="Search..." />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

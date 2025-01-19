import React from "react";
import styles from "./SideBar.module.css";

const SideBar = ({ isExpanded }) => {
  const menuItems = [
    { id: 1, icon: "🏠", label: "Home" },
    { id: 2, icon: "🔥", label: "Trending" },
    { id: 3, icon: "📚", label: "Library" },
    { id: 4, icon: "🔔", label: "Notifications" },
    { id: 5, icon: "⚙️", label: "Settings" },
    { id: 6, icon: "💬", label: "Messages" },
    { id: 7, icon: "🎵", label: "Music" },
  ];

  return (
    <>
      <div
        className={`${styles.sidebar} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <ul className={`${styles.menu} ${!isExpanded ? styles.collapsed : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={
                !isExpanded && index >= 4 ? styles.hiddenItem : undefined
              }
            >
              <div className={styles.icon}>{item.icon}</div>
              {isExpanded && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={styles.content}>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
        <p>
          // This is the main content area that adjusts when the sidebar expands
          or // collapses.
        </p>
      </div> */}
    </>
  );
};

export default SideBar;

// import React, { useState } from "react";
// import styles from "./SideBar.module.css";

// const SideBar = () => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={styles.container}>
//       <div
//         className={`${styles.sidebar} ${
//           isExpanded ? styles.expanded : styles.collapsed
//         }`}
//       >
//         <button className={styles.toggleButton} onClick={toggleSidebar}>
//           {isExpanded ? "Collapse" : "Expand"}
//         </button>
//         <ul className={styles.menu}>
//           <li>
//             <div className={styles.icon}>🏠</div>
//             {isExpanded && <span>Home</span>}
//           </li>
//           <li>
//             <div className={styles.icon}>🔥</div>
//             {isExpanded && <span>Trending</span>}
//           </li>
//           <li>
//             <div className={styles.icon}>📚</div>
//             {isExpanded && <span>Library</span>}
//           </li>
//         </ul>
//       </div>
//       <div className={styles.content}>
//         <h1>Content Area</h1>
//         <p>
//           This is the main content area that adjusts when the sidebar expands or
//           collapses.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

function SideBar(props) {
  const {handleToggleModal} = props  
    return (
      <div className="sidebar">
        <div onClick={handleToggleModal} 
        className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>The Wallpaper</h2>
        <div>
          <p>description</p>
          <p>sbauycg ashvytfcdc gwuefhewvfn hsvctycv</p>
        </div>
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-arrow-right"></i>
        </button>
        </div>
      </div>
    )
  }
  
  export default SideBar
  
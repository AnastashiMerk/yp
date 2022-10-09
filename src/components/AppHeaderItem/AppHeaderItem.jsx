import React from 'react'
import styles from "./AppHeaderItem.module.css";

class AppHeaderItem extends React.Component {
    render(){
      const {Icon, title} = this.props
      return (
          <div className="AppHeaderItem pt-4 pb-4 pl-5 pr-5">
            <a href="#" className={`${styles._link} `}>
              <div  className={`${styles._icon} mr-2`} >
                <Icon />
              </div>
              <span className="text text_type_main-default">{title}</span>
            </a>
          </div>
        );
    }
}

export default AppHeaderItem
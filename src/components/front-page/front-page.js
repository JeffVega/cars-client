import React, {Component} from 'react'
import Header from '../navbar/nav'
import Search from '../search/search';
export default class FrontPage extends Component {
    render() {
        return (
            <div className="font-page">
                <Header/>
                <div className="headerBox">
                    <p className="headerBox__header">Let's Find your perfect Car</p>

                </div>
               <Search/>
                       
                    </div>
           
    
        )
    }
}

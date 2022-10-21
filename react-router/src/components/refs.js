import React from 'react';

// function refs () {
// 	return <div>
//         <h2>You are in refs</h2>
// 		<h2>GeeksforGeeks is a computer science portal for geeks!</h2>

// 		Read more about us at :
// 		<a href="https://www.geeksforgeeks.org/about/">
// 			https://www.geeksforgeeks.org/about/
// 		</a>
// 	</div>
// }

// callback used inside ref
class AppNo extends React.Component {
    constructor(){
    super();
    this.state = { sayings: ""};
    }
    update(e){
    this.setState({ sayings: this.a.value});
    }
    render(){
    return (
        
        <div>
            <h2>You are in refs</h2>
        Right anything to get a ref callback of the input :  <input type="text"
        ref={(call_back) => {this.a = call_back}} onChange =
        {this.update.bind(this)}/>
    <br/>
    <em>{this.state.sayings}</em>
    </div>
    );
    }
    }
    export default AppNo;  
    
// export default refs;

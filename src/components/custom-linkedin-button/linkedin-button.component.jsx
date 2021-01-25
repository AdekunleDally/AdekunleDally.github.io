// import React, {Component} from 'react';
// import  {LinkedIn} from 'react-linkedin-login-oauth2';

// class LinkedInPage extends Component{
//     constructor(){
//         super()

//         state={
//             code:'',
//             errorMessage: ''
//         }

//         handleSuccess=(data)=>{
//            this.setState({
//             code:data.code,
//             errorMessage: '',
//            })
//         }

//         handleFailure=(error)=>{
//             this.setState({
//                 code:'',
//                 errorMessage:error.errorMessage,
//             });
//         }
//     }

//     render(){
//         return(
//             <div>
//               <LinkedIn 
//               clientId="81lx5we2omq9xh"
//               onFailure={this.handleFailure}
//               onSucess={this.handleSuccess}
//               redirectUri="http://localhost:3001/linkedin"
//               >

//               <img src={require('../../assets/LinkedIn6.png')} alt="log in with linkedin" style={{maxWidth:'180px'}} />
//               </LinkedIn>

//               {!code && <div>No code</div>}
//               {code && <div>Code:{code}</div>}
//               {errorMessage && <div>{errorMessage}</div>}

//             </div>
//         );
//     }
// }

// export default LinkedInPage;
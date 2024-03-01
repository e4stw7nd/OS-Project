 
import React from 'react';
 
// Creating the context object and passing the default values.
const chatContext = React.createContext({messages:[],setmessages:()=>{}});
 
export default chatContext;
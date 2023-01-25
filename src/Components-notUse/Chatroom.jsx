import React from 'react';
//import ChatroomNavbar from './ChatroomNavbar';
import ContactSidebar from './ContactSidebar';
import Chat from './Chat';

import '../Style/Chatroom.scss';

/*
export class Chatroom extends Component {
  redner(){
    return (
      <div></div>
    );
  };
}*/

function Chatroom(){
  return(
    <div className="ChatrooomContainer">
            <ContactSidebar />
            <Chat />
     <header className="">
   { /*     <div class="h-full bg-[#FFFFFF] min-h-screen" >{/* background color 
         
          <div class="flex sm:max-w-[90vw] mx-auto my-auto mt-5 mb-5
                        rounded-[2rem] bg-[#FFFFFF]">*/}

            { /* Chats 
            <Chats />*/ }

              {/*<div className="">
                {/*<button onClick={pythonCode}>Click</button>*/}
                { /* Navbar 
                <Navbar />*/ }
                
                { /* Contacts 
                
              </div>

            <div>
            </div>
          </div>

        </div>*/}
      </header>
    </div>
  )
}
export default Chatroom
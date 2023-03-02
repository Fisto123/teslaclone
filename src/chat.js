
const Chat = () => {
    const {roomId}=useParams()
    const [roomDetails,setRoomDetails]= useState([])
    // useEffect(()=>{
    //     if(roomId){
    //         db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
    //             setRoomDetails(snapshot.data())
    //         ))
    //     }

    // },[roomId])
  const getSingleUser = async(roomId)=>{
      const doc=await db.collection('rooms').doc(roomId).get();
      const user={
          id:doc.roomId,
          ...doc.data
          
      }
      console.log(user);
  }
  
  useEffect(()=>{
    getSingleUser(roomId)
  },[])
    
    return ( 
         <div className="chat">
             <div className="chat_header">
                 <div className="header_left">
                     <h4 className="chat_channelName">
                         <strong>#{roomDetails?.name}</strong>
                         <StarOutlineIcon/>
                     </h4>
                 </div>
                 <div className="header_right">
                    <p>
                        <InfoIcon/> Details
                    </p>
                 </div>
             </div>
         </div>
     )
    }
 
export default Chat;
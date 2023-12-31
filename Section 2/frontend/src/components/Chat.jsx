import React, { useRef, useState } from 'react'

const Chat = () => {

    const inputRef = useRef(null);

    const [messageList, setmessageList] = useState([
        { text : 'hello', sent: false },
        { text : 'ha bhai sahab', sent: true },
        { text : 'kal kon sa exam hai', sent: false },
        { text : 'pta chale to batana', sent: true }
    ]);

    const sendMessage = () => {
        const messageText = inputRef.current.value;
        console.log(messageText);

        setmessageList([...messageList, {text : messageText, sent: true}])

        inputRef.current.value = '';
    }

  return (
    <div>

        <div className='container py-5'>

            <h2 className='mb-4 text-center'>My Messenger</h2>

            <div className='card'>
                <div className="card-body chat-container">
                    {
                        messageList.map((message) => {
                            return <div className={`msg ${message.sent ? 'msg-sent' : 'msg-rec'}`}>
                                {message.text}
                            </div>
                        })
                    }
                </div>
                <div className="card-footer">
                    <div className='input-group'>
                        <input type="text" className='form-control' ref={inputRef} />
                        <button onClick={sendMessage} className='btn btn-dark'><i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Chat
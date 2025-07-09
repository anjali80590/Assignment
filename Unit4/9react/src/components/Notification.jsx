import React, { useContext } from 'react'
import { NotificationContext } from './NotificationContext'

function Notification() {
    let{message,type,showNotification}=useContext(NotificationContext)
  return (
    <div>
      <button onClick={showNotification}>Show Notfiication</button>
      {message && (
        <div>
          <div>{message}</div>
          <div>{type}</div>
        </div>
      )}
    </div>
  );
}

export default Notification
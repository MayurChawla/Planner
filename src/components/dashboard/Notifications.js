import React from 'react';

const Notifications = (props) =>{
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                    </span>
                    <ul className="notifications">
                        {notifications &&
                            notifications.map(noti => {
                                return (
                                    <li key={noti.id}>
                                        <span className="pink-text">{noti.user} </span>
                                        <span> {noti.content}</span>
                                        <div className="grey-text note-date">
                                            {noti.time.toDate().toDateString()}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;
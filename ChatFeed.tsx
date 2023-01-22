import useSWRMutation from 'swr/mutation'
import React from 'react'

const currentUserID = {
  db_userIDByEmail : "3490238409"
}

function epochToTimestampString(timestamp) {
  return "lol"
}

function createMessage() {
  // do things
}

const [newMessage, setNewMessage] = React.useState("second")
const [submitDisabled, setSubmitDisabled] = React.useState(false)



 const {
    error,
    trigger,
    isMutating,
  } = useSWRMutation('/api/message', createMessage)

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // trigger mutation with current message, userid, and timestamp
    trigger({
      content: newMessage,
      userId: currentUserID?.db_userIDByEmail,
      timestamp: epochToTimestampString(
        Math.floor(new Date().getTime() / 1000.0)
      ),
    });
    // then reset message and redisable button
    setNewMessage("");
    setSubmitDisabled(true);
  };

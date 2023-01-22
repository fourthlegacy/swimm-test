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

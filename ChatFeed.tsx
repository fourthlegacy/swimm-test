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
      timestamp: Date.now().toString()
    });
    // then reset message and redisable button
    setNewMessage("");
    setSubmitDisabled(true);
  };

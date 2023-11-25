class MessageModel {
  constructor(message, userID) {
    this.id = Date.now();
    this.message = message;
    this.user = {
      id: userID,
    };
  }

  extendUser(user) {
    this.user = {
      ...this.user,
      ...user,
    };
  }
}

export { MessageModel };

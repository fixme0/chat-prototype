class MessageModel {
  constructor(message, userID) {
    this.id = Date.now();
    this.message = message;
    this.user = {
      id: userID,
      isOwner: false,
    };
  }

  extendUser(user) {
    this.user = {
      ...this.user,
      ...user,
    };
  }

  setIsOwner(externalUser) {
    this.user.isOwner = this.user.id === externalUser.id;
  }
}

export { MessageModel };

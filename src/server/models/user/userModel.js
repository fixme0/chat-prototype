class UserModel {
  constructor(userName) {
    this.id = Date.now();
    this.name = userName;
  }
}

export { UserModel };

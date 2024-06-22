class User {
    constructor(username, email, password, src) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.src = src;
      this.role = "client";
      this.isBanned = false;
      this.banDate = null;
      this.banCount = 0;
      this.wishlist = [];
      this.basket = [];

    }
  }
  
  export default User
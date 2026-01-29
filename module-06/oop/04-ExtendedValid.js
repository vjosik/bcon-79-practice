class ExtendedValid extends Valid {
  constructor(email, password) {
    super(email, password);
    this.error_message = "";
  }
  validate() {
    this.error_message = "";
    super.validate();
    if (!this.isValid) {
      this.error_message = "password error";
      return this.isValid;
    }
    if (this.email === "") {
      this.isValid = false;
      this.error_message = "email error";
      return this.isValid;
    }
    return this.isValid;
  }
}

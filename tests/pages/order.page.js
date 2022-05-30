const Page = require('./page');

class OrderPage extends Page {
  get inputUsername() {
    return $('#userName');
  }

  get inputPhone() {
    return $('#phone');
  }

  get inputEmail() {
    return $('#email');
  }

  get inputMessage() {
    return $('#message');
  }

  get buttonSend() {
    return $('#send');
  }

  async orderForm(userName, phone, email, message) {
    await this.inputUsername.setValue(userName);
    await this.inputPhone.setValue(phone);
    await this.inputEmail.setValue(email);
    await this.inputMessage.setValue(message);
    await this.buttonSend.click();
  }

  open() {
    return super.open('/naked/ktm-390-duke-2022/order');
  }
}

module.exports = new OrderPage();

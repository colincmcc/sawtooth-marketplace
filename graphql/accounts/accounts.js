class Accounts {
  constructor(db, mailer) {
    this.db = db
    this.mailer = mailer
  }

  save(email, callback) {
    const account = {
      email: email,
      created_at: Date.now()
    }

    this.db.saveAccount(user, function(err) {
      if (err){
        callback(err)
      } else {
        this.mailer.sendWelcomeEmail(email)
        callback()
      }
    })
  }
}

module.exports = Accounts


const droll = require('droll');
/*
const Command = require('./command.js');
class RollCommand extends Command {
  constructor(bot) {
    super('r', this.execute, {
        hidden:true
    });
  }
 /* 
async execute(msg, args) {
  try {
        let result = droll.roll(args[0]);
        if (result.rolls[0] == 1) {
            msg.channel.createMessage("You critically failed!");
        } else if (result.rolls[0] == 20) {
            msg.channel.createMessage("You critically succeeded!");
        } else {
            msg.channel.createMessage("Total rolled: " + result);
        }
    } catch (Error) {
        Raven.captureException(Error);
        msg.channel.createMessage("No borking!");
    }
}
}
*/

module.exports = {
    func:
     async (msg, args) => {
        try {
              let result = droll.roll(args[0]);
                  msg.channel.createMessage("Total rolled: " + result);
          } catch (Error) {
              Raven.captureException(Error);
              msg.channel.createMessage("No borking!");
          }
      },
      options:
      {
          hidden: true
      },
      name: "r"
    
};
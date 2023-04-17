const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam() {
  let namesArray = ['Alla', 'Dima', 'Ann', 'Maxim', 'Matt'];
  let teamNames = '';
  namesArray.forEach((member) => {
    if (typeof member == 'string') {
      teamNames += member.trim().toUpperCase();
    }
    return teamNames.split('').sort().join('')
  })
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};

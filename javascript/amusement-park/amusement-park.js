/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
 const obj = {}
 const sname = 'name'
 const sage = 'age'
 const sticketId = 'ticketId'
 obj[sname] = name
 obj[sage] = age
 obj[sticketId] = ticketId
 // @ts-ignore
 return obj

}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor['ticketId'] = null
  return visitor
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if(tickets[ticketId] === null)
    return 'not sold';
  else if ((ticketId in tickets)){
    return `sold to ${tickets[ticketId]}`; 
  }
  else if(tickets[ticketId] !== null){
    return 'unknown ticket id'
  }
  }


/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
 if(tickets[ticketId] === null){
  return 'invalid ticket !!!'
 }
  else if(ticketId in tickets){
    return `${tickets[ticketId]}`
  }
  else 
  return 'invalid ticket !!!'
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
 if (visitor.gtc && visitor.gtc.version){
  return visitor.gtc.version
 }
  
}

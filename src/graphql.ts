
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Ticket {
    id: string;
    name: string;
    price: number;
    description: string;
}

export interface TicketInput {
    name: string;
    price: number;
    description: string;
}

export interface IQuery {
    tickets(): Ticket[] | Promise<Ticket[]>;
    ticketById(id: string): Ticket | Promise<Ticket>;
}

export interface IMutation {
    createTicket(name: string, price: number, description: string): Ticket[] | Promise<Ticket[]>;
    updateTicket(name: string, price: number, description: string, id: string): Ticket | Promise<Ticket>;
    removeTicket(id: string): Ticket[] | Promise<Ticket[]>;
}

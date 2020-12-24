/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

type Ticket = {
  id: string;
  name: string;
  price: number;
  description: string;
};

type TicketInput = {
  id: string;
  name: string;
  price: number;
  description: string;
};

@Resolver('Ticket')
export class TicketsResolver {

  @Query()
  async tickets(): Promise<Ticket[] | []> {
    return tickets;
  }

  @Query()
  async ticketById(parent, args: { id: string }): Promise<Ticket | null> {
      const ticketToReturnIdx = tickets.findIndex((ticket) => ticket.id === args.id)
      return tickets[ticketToReturnIdx]
  }

  @Mutation()
  async createTicket(parent, args: TicketInput): Promise<Ticket[] | []>{
    const { description, price, name } = args;
    const ticketToAdd: Ticket = {
      id: generateId(),
      name,
      price,
      description
    }
    
    tickets.unshift(ticketToAdd)
    return tickets
  }

  @Mutation()
  async updateTicket(parent, args: TicketInput): Promise<Ticket | null> {

    const { description, price, name, id } = args;
    const ticketToUpdate = {
      id,
      name,
      price,
      description
    }

    const idx = tickets.findIndex((ticket) => ticket.id === id);
    tickets[idx] = ticketToUpdate
    return tickets[idx];
  }

  @Mutation()
  async removeTicket(parent, args: { id:string }): Promise<Ticket[] | []> {

    const { id } = args;
    const idx = tickets.findIndex((ticket) => ticket.id === id)
    tickets.splice(idx, 1)
    return tickets
    
  }
}


const tickets: Ticket[] = [
  {
    id: 't101',
    name: 'Bowling',
    price: 99,
    description: 'Bowling burns 220 calories per hour',
  },
  {
    id: 't102',
    name: 'Skiing',
    price: 199,
    description: 'skiing burns 340 calories per hour',
  },
  {
    id: 't103',
    name: 'Parachuting',
    price: 149,
    description: 'Bowling burns 430 calories per hour',
  },
  {
    id: 't104',
    name: 'Jogging',
    price: 129,
    description: 'Bowling burns 550 calories per hour',
  },
  {
    id: 't105',
    name: 'Flying',
    price: 299,
    description: 'Bowling burns 1200 calories per hour',
  },
];


// util function for creating ID

function generateId(): string{
  const id = 't' + (Math.random()*100000).toFixed(0)
  return id
}
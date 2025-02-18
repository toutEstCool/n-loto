import React, { useEffect } from 'react';
import { LotteryTicketCard } from '../../lottery-ticket-card';
import { getLotteryTickets } from '@/sanity/lib/sanity';
import { LotteryTicketsType } from '@/sanity/schemaTypes/lotteryTicketsType';

export const TicketLottery = () => {
  const [tickets, setTickets] = React.useState<LotteryTicketsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getLotteryTickets();
      setTickets(tickets);
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
      {tickets.map((ticket) => (
        <LotteryTicketCard key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

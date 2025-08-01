const { readTickets, writeTickets } = require("../models/ticketModel");

const getAllTickets = (req, res) => {
  const tickets = readTickets();
  res.json(tickets);
};

const getTicketById = (req, res) => {
  const { id } = req.params;
  const tickets = readTickets();
  const ticket = tickets.find((t) => t.id === parseInt(id));

  if (!ticket) return res.status(404).json({ error: "Ticket not found" });

  res.json(ticket);
};

const createTicket = (req, res) => {
  const tickets = readTickets();
  const { title, description, priority, user } = req.body;

  const newTicket = {
    id: tickets.length ? tickets[tickets.length - 1].id + 1 : 1,
    title,
    description,
    priority,
    user,
    status: "pending",
  };

  tickets.push(newTicket);
  writeTickets(tickets);

  res.status(201).json(newTicket);
};

const updateTicket = (req, res) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;
  const tickets = readTickets();
  const index = tickets.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  if (title !== undefined) tickets[index].title = title;
  if (description !== undefined) tickets[index].description = description;
  if (priority !== undefined) tickets[index].priority = priority;

  writeTickets(tickets);
  res.json(tickets[index]);
};

const deleteTicket = (req, res) => {
  const { id } = req.params;
  let tickets = readTickets();
  const index = tickets.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  const deleted = tickets.splice(index, 1);
  writeTickets(tickets);

  res.json({ message: "Ticket deleted", deleted });
};

const resolveTicket = (req, res) => {
  const { id } = req.params;
  const tickets = readTickets();
  const index = tickets.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  tickets[index].status = "resolved";
  writeTickets(tickets);

  res.json({ message: "Ticket resolved", ticket: tickets[index] });
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket,
};











const expressAsync = require("express-async-handler");
const Contact = require("../models/contact-model");

const findContact = async (id, next) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      const err = new Error("Contact Not Found!");
      err.status = 404;
      return next(err);
    }
    return contact;
  } catch (error) {
    return next(error);
  }
};

const getContacts = expressAsync(async (req, res, next) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json({
    title: "Success",
    body: {
      contacts,
    },
  });
});

const createContact = expressAsync(async (req, res, next) => {
  const { name, phone } = req.body;
  const existingContact = await Contact.findOne({
    $and: [{ name }, { phone }],
  });
  if (existingContact) {
    const err = new Error(
      "ERROR! Contact with this Name or Phone already exists"
    );
    err.status = 400;
    return next(err);
  }
  if (!name || !phone) {
    const err = new Error("ERROR! Name or Phone not Found");
    err.status = 400;
    return next(err);
  }
  const contact = await Contact.create({ name, phone, user_id: req.user.id });
  res.status(201).json({
    title: "Success",
    body: {
      contact,
    },
  });
});

const getOneContact = expressAsync(async (req, res, next) => {
  const contact = await findContact(req.params.id, next);
  if (contact) {
    res.status(200).json({
      title: "Success",
      body: {
        contact,
      },
    });
  }
});

const updateContact = expressAsync(async (req, res, next) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updatedContact) {
    const err = new Error("Contact Not Found!");
    err.status = 404;
    return next(err);
  }
  res.status(200).json({
    title: "Success",
    body: {
      updatedContact,
    },
  });
});

const deleteContact = expressAsync(async (req, res, next) => {
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  if (!deletedContact) {
    const err = new Error("Contact Not Found!");
    err.status = 404;
    return next(err);
  }
  res.status(200).json({
    title: "Success",
    message: `[+] Successfully Deleted Contact of ID: ${req.params.id}`,
  });
});

module.exports = {
  getContacts,
  createContact,
  getOneContact,
  updateContact,
  deleteContact,
};

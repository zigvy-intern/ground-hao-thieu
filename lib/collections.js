import {Mongo} from 'meteor/mongo';

var Schemas = {};

export const Items = new Mongo.Collection('Items');
Schemas.Items = new SimpleSchema({
  fieldName:{
    type: String,
    label: "Field Name",
    min: 0,
    max: 100
  },
  ownerName:{
    type: String,
    label: "Owner Name",
    min: 0,
    max: 100
  },
  description:{
    type: String,
    label: "Info",
    max: 200
  },
  price:{
    type: Number,
    label: "Price"
  },
  createAt:{
    type: Date,
    label: "Create At Date",
    autoValue: function(){
      return new Date()
    }
  },
  rating:{
    type: Number,
    label: "Field Rating"
  },
  avaibility:{
    type: Boolean,
    label: "Avaible"
  }
});
Items.attachSchema(Schemas.Items);

export const Schedule = new Mongo.Collection('Schedule');
Schemas.Schedule = new SimpleSchema({
  userName:{
    type: String,
    label: "User Name",
    min: 0,
    max: 200
  },
  ownerName:{
    type: String,
    label: "Owner Name",
    min: 0,
    max: 200
  },
  fieldName:{
    type: String,
    label: "Field Name",
    min: 0,
    max: 200
  },
  description:{
    type: String,
    label: "Info",
    max: 200
  },
  scheduleDate:{
    type: Date,
    label: "Book Day"
  },
  timeEnd:{
    type: Date,
    label: "Time End Booking"
  },
  repeat:{
    type: Boolean,
    label: "Repeat or not"
  },
  repeatDay:{
    type: Date,
    label: "Repeat Day in the week"
  },
  repeatTime:{
    type: Date,
    label: "Timestamp of repeat booking"
  }
});
Schedule.attachSchema(Schemas.Schedule);

export const Team = new Mongo.Collection('Team');
Schemas.Team = new SimpleSchema({
  teamName:{
    type: String,
    label: "Team Name"
  },
  teamCapacity: {
    type: Number,
    label: "Number of Team members"
  },
  leader: {
    type: String,
    label: "Leader User Name"
  },
  members: {
      type: String,
      label: "Members of Team"
  }
});
Team.attachSchema(Schemas.Team);

export const Matches = new Mongo.Collection('Matches');
Schemas.Matches = new SimpleSchema({
  teamName1: {
    type: String,
    label: "Name of Challenge Team"
  },
  teamName2:{
    type: String,
    label: "Name of Accept Team"
  },
  leader1: {
    type: String,
    label: "Name of Challenge Leader"
  },
  leader2: {
    type: String,
    label: "Name of Accept Leader"
  },
  fieldName: {
    type: String,
    label: "Field Name"
  },
  matchDate: {
    type: Date,
    label: "Match Date"
  }
});
Matches.attachSchema(Schemas.Matches);
/* User schema from this point */
Schema = {};

Schema.User = new SimpleSchema({
  username: {
    type: String,
    label: "Display User Name"
  },
  emails: {
    type: Array,
  },
  "emails.$": {
    type: Object
  },
  "email.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "email.$.verified": {
    type: Boolean
  },
  firstName: {
    type: String,
    label: "User First Name"
  },
  lastname: {
    type: String,
    label: "User Last Name"
  },
  gender: {
    type: String,
    allowedValues: ['Male','Female'],
    optional: true
  },
  phoneNumber: {
    type: String,
    label: "User phone number"
  },
  country: {
    type: String,
    label: "User country"
  },
  createAt: {
    type: Date,
    label: "Create at date",
    autoValue: function(){
      return new Date()
    }
  },
  roles: {
    type: Object,
    blackbox: true
  },
  heartbeat:{
    type: Date,
    optional: true
  }
});
Meteor.users.attachSchema(Schema.User);

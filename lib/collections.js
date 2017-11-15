import {Mongo} from 'meteor/mongo';

Items = new Mongo.Collection('Items');
ItemsSchema = new SimpleSchema({
  FieldName:{
    type: String,
    label: "Field Name",
    min: 0,
    max: 100
  },
  OwnerName:{
    type: String,
    label: "Owner Name",
    min: 0,
    max: 100
  },
  Description:{
    type: String,
    label: "Info",
    max: 200
  },
  Price:{
    type: Number,
    label: "Price"
  },
  CreateAt:{
    type: Date,
    label: "Create At Date",
    autoValue: function(){
      return new Date()
    }
  },
  Rating:{
    type: Number,
    label: "Field Rating"
  },
  Avaibility:{
    type: Boolean,
    label: "Avaible"
  }
});
Items.attachSchema(ItemsSchema);

Schedule = new Mongo.Collection('Schedule');
ScheduleSchema = new SimpleSchema({
  UserName:{
    type: String,
    label: "User Name",
    min: 0,
    max: 200
  },
  OwnerName:{
    type: String,
    label: "Owner Name",
    min: 0,
    max: 200
  },
  FieldName:{
    type: String,
    label: "Field Name",
    min: 0,
    max: 200
  },
  Description:{
    type: String,
    label: "Info",
    max: 200
  },
  ScheduleDate:{
    type: Date,
    label: "Book Day"
  },
  TimeEnd:{
    type: Date,
    label: "Time End Booking"
  },
  Repeat:{
    type: Boolean,
    label: "Repeat or not"
  },
  RepeatDay:{
    type: Date,
    label: "Repeat Day in the week"
  },
  RepeatTime:{
    type: Date,
    label: "Timestamp of repeat booking"
  }
});
Schedule.attachSchema(ScheduleSchema);

Team = new Mongo.Collection('Team');
TeamSchema = new SimpleSchema({
  TeamName:{
    type: String,
    label: "Team Name"
  },
  TeamCapacity: {
    type: Number,
    label: "Number of Team members"
  },
  Leader: {
    type: String,
    label: "Leader Name"
  },
/*  Members: [{
    name: Array,
    label: "Members of Team",
    members: [
      type: String
    ]
  }] */
});
Team.attachSchema(TeamSchema);

Matches = new Mongo.Collection('Matches');
MatchesSchema = new SimpleSchema({
  TeamName1: {
    type: String,
    label: "Name of Challenge Team"
  },
  TeamName2:{
    type: String,
    label: "Name of Accept Team"
  },
  Leader1: {
    type: String,
    label: "Name of Challenge Leader"
  },
  Leader2: {
    type: String,
    label: "Name of Accept Leader"
  },
  FieldName: {
    type: String,
    label: "Field Name"
  },
  MatchDate: {
    type: Date,
    label: "Match Date"
  }
});
Matches.attachSchema(MatchesSchema);
/* User schema from this point */
Schema ={};
Schema.UserCountry = new SimpleSchema({
  name: {
    type: String,
    label: "User country"
  },
  code: {
    type: String,
    regEx: /^[A-Z]{2}$/
  }
});

Schema.UserProfile = new SimpleSchema({
  Username: {
    type: String,
    label: "User Name"
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
  country: {
    type: Schema.UserCountry,
    optional: true
  },
  phone: {
    type: Number,
    label: "User phone number"
  }
});
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
  CreateAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
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

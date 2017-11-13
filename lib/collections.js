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

Matches = new Mongo.Collection('Matches');

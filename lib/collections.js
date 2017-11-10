import {Mongo} from 'meteor/mongo';

export const Items = new Mongo.Collection('items');
ItemsSchema = new SimpleSchema({
  IdOwner:{
    type: String,
    label: "Owner ID"
  },
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
  CreateAt:{,
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

Team = new Mongo.Collection('Team');

Matches = new Mongo.Collection('Matches');

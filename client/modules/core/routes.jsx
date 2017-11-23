import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import HomePage from '../items/components/HomePage.jsx';
import NewUser from '../users/containers/NewUser.js';
import Login from '../users/containers/Login.js';
import GroundDetail from '../items/components/PageDetail.jsx';
import Trigger from '../items/components/Booking.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<HomePage />)
      });
    }
  });

  FlowRouter.route('/Detail', {
    name: 'ground.detail',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<GroundDetail />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'users.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewUser/>)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login/> )
      });
    }
  });

  FlowRouter.route('/booking', {
    name: 'booking.step1',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Trigger /> )
      });
    }
  });


}

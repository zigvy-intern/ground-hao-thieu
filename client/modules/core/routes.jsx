import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import Footer from '../items/components/Footer.jsx';
import NewUser from '../users/components/NewUser.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Footer />)
      });
    }
  });
}

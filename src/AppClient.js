import { use } from 'katejs/lib/client';

import 'moment/locale/ru';
import 'katejs/lib/client.css';

import TestForm from 'forms/TestForm';

import AppOktopad from 'oktopad-crm/package/AppClient';

import { structures, title, packageName } from './structure';
import env from './front.env.json';

const AppClient = parent => class Client extends use(parent, AppOktopad) {
  static title = title;

  constructor(params) {
    super(params);
    this.baseUrl = env.apiUrl || '/api';

    this.init({ structures, addToMenu: true });

    this.forms = {
      ...this.forms,
      TestForm,
    };

    this.menu.push({
      form: 'TestForm',
      title: 'Test form',
    });
    // this.forms contains:
    //   TaskList,
    //   TaskItem,
    //
    // Forms classes can be changed by form name
    // this.forms[_form_name_]
  }
};
AppClient.package = packageName;
export default AppClient;

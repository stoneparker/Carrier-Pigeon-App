import React from 'react';
import { apiCountryName } from '../services/api';

export default async function countriesNames() {
     return response = await apiCountryName.get('/alpha?codes=ae;ar;at;au;be;bg;br;ca;ch;cn;co;cu;cz;de;eg;fr;gb;gr;hk;hu;id;ie;il;in;it;jp;kr;lt;lv;ma;mx;my;ng;nl;no;nz;ph;pl;pt;ro;rs;ru;sa;se;sg;si;sk;th;tr;tw;ua;us;ve;za')
     
     // return response.data;
}
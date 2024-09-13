const express = require('express');
const needRoute = require('./need.route');
const canRoute = require('./can.route');
const stayRoute = require('./stay.route');
const govRoute = require('./gov.route');
const provinceRoute = require('./province.route');
const districtRoute = require('./district.route');
const wardRoute = require('./ward.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/needs',
    route: needRoute,
  },
  {
    path: '/cans',
    route: canRoute,
  },
  {
    path: '/stays',
    route: stayRoute,
  },
  {
    path: '/govs',
    route: govRoute,
  },
  {
    path: '/provinces',
    route: provinceRoute,
  },
  {
    path: '/districts',
    route: districtRoute,
  },
  {
    path: '/wards',
    route: wardRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  // devRoutes.forEach((route) => {
  //   router.use(route.path, route.route);
  // });
}

module.exports = router;

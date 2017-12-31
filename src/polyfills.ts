import 'core-js/es6';
import 'core-js/es7/reflect';

declare var require: any;
declare var process:any;	

require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
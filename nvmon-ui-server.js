/* Copyright (c) 2018-2021 Gyeonghwan Hong. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');

console.log(process.argv);
var portNum = undefined;
if (process.argv.length > 2) {
  portNum = process.argv[2];
} else {
  portNum = 8890;
}
var clientPath = path.join(__dirname, './client');
console.log(clientPath);

var server = connect();
server.use(serveStatic(clientPath)).listen(portNum, function() {
  console.log('Web Server Started! (Port ' + portNum + ')');
});

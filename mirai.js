//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////

process.on('unhandledRejection', (err, p) => {});
const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("fca-horizon-remake");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;

global.client = new Object({
    commands: new Map(),
    events: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String()
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

const _0x3bf19b=_0x3b93;function _0x3b93(_0x4f65cd,_0x248db3){const _0x238a97=_0x238a();return _0x3b93=function(_0x3b93b7,_0x2f7224){_0x3b93b7=_0x3b93b7-0x134;let _0x2355c2=_0x238a97[_0x3b93b7];return _0x2355c2;},_0x3b93(_0x4f65cd,_0x248db3);}(function(_0x3e65b1,_0xe842ed){const _0x4167f2=_0x3b93,_0x118987=_0x3e65b1();while(!![]){try{const _0x3611cc=-parseInt(_0x4167f2(0x144))/0x1*(parseInt(_0x4167f2(0x18f))/0x2)+parseInt(_0x4167f2(0x160))/0x3*(-parseInt(_0x4167f2(0x165))/0x4)+parseInt(_0x4167f2(0x163))/0x5*(parseInt(_0x4167f2(0x152))/0x6)+-parseInt(_0x4167f2(0x18a))/0x7+-parseInt(_0x4167f2(0x1a8))/0x8+parseInt(_0x4167f2(0x154))/0x9+-parseInt(_0x4167f2(0x164))/0xa*(-parseInt(_0x4167f2(0x1c0))/0xb);if(_0x3611cc===_0xe842ed)break;else _0x118987['push'](_0x118987['shift']());}catch(_0x48595b){_0x118987['push'](_0x118987['shift']());}}}(_0x238a,0x2cef4));var configValue;try{global['client'][_0x3bf19b(0x17b)]=join(global[_0x3bf19b(0x1b1)]['mainPath'],_0x3bf19b(0x1aa)),configValue=require(global[_0x3bf19b(0x1b1)][_0x3bf19b(0x17b)]),logger['loader'](_0x3bf19b(0x17d));}catch{if(existsSync(global['client'][_0x3bf19b(0x17b)][_0x3bf19b(0x142)](/\.json/g,'')+_0x3bf19b(0x173)))configValue=readFileSync(global[_0x3bf19b(0x1b1)][_0x3bf19b(0x17b)][_0x3bf19b(0x142)](/\.json/g,'')+'.temp'),configValue=JSON[_0x3bf19b(0x13a)](configValue),logger[_0x3bf19b(0x157)](_0x3bf19b(0x18e)+(global['client'][_0x3bf19b(0x17b)][_0x3bf19b(0x142)](/\.json/g,'')+'.temp'));else return logger[_0x3bf19b(0x157)](_0x3bf19b(0x14d),'error');}try{for(const key in configValue)global[_0x3bf19b(0x170)][key]=configValue[key];logger['loader'](_0x3bf19b(0x1ab));}catch{return logger['loader'](_0x3bf19b(0x1c5),'error');}const {Sequelize,sequelize}=require(_0x3bf19b(0x15b));writeFileSync(global['client'][_0x3bf19b(0x17b)]+_0x3bf19b(0x173),JSON[_0x3bf19b(0x1b2)](global[_0x3bf19b(0x170)],null,0x4),_0x3bf19b(0x1ca));const langFile=readFileSync(__dirname+_0x3bf19b(0x15f)+(global[_0x3bf19b(0x170)][_0x3bf19b(0x1c9)]||'en')+_0x3bf19b(0x1c4),{'encoding':_0x3bf19b(0x180)})[_0x3bf19b(0x199)](/\r?\n|\r/),langData=langFile['filter'](_0x1a0908=>_0x1a0908['indexOf']('#')!=0x0&&_0x1a0908!='');for(const item of langData){const getSeparator=item[_0x3bf19b(0x19e)]('='),itemKey=item[_0x3bf19b(0x18d)](0x0,getSeparator),itemValue=item[_0x3bf19b(0x18d)](getSeparator+0x1,item[_0x3bf19b(0x191)]),head=itemKey['slice'](0x0,itemKey[_0x3bf19b(0x19e)]('.')),key=itemKey[_0x3bf19b(0x142)](head+'.',''),value=itemValue[_0x3bf19b(0x142)](/\\n/gi,'\x0a');if(typeof global[_0x3bf19b(0x1c9)][head]==_0x3bf19b(0x159))global['language'][head]=new Object();global[_0x3bf19b(0x1c9)][head][key]=value;}global[_0x3bf19b(0x185)]=function(..._0xda5d2c){const _0x9d89cb=_0x3bf19b,_0x4eaa0f=global[_0x9d89cb(0x1c9)];if(!_0x4eaa0f[_0x9d89cb(0x16a)](_0xda5d2c[0x0]))throw __filename+_0x9d89cb(0x140)+_0xda5d2c[0x0];var _0x3a54e3=_0x4eaa0f[_0xda5d2c[0x0]][_0xda5d2c[0x1]];for(var _0x2dccad=_0xda5d2c[_0x9d89cb(0x191)]-0x1;_0x2dccad>0x0;_0x2dccad--){const _0x52e8f2=RegExp('%'+_0x2dccad,'g');_0x3a54e3=_0x3a54e3[_0x9d89cb(0x142)](_0x52e8f2,_0xda5d2c[_0x2dccad+0x1]);}return _0x3a54e3;};try{var appStateFile=resolve(join(global[_0x3bf19b(0x1b1)]['mainPath'],global[_0x3bf19b(0x170)][_0x3bf19b(0x158)]||_0x3bf19b(0x136))),appState=require(appStateFile);logger[_0x3bf19b(0x157)](global[_0x3bf19b(0x185)](_0x3bf19b(0x14a),_0x3bf19b(0x143)));}catch{return logger[_0x3bf19b(0x157)](global[_0x3bf19b(0x185)]('mirai',_0x3bf19b(0x19a)),_0x3bf19b(0x181));}function checkBan(_0x2f5deb){const _0x8b00b5=_0x3bf19b,[_0x3f3f52,_0x5d3a1d]=global['utils'][_0x8b00b5(0x1c1)]();logger(global[_0x8b00b5(0x185)](_0x8b00b5(0x14a),_0x8b00b5(0x15e)),_0x8b00b5(0x1c6)),global[_0x8b00b5(0x1a4)]=!![];if(existsSync('/home/runner/.miraigban')){const _0x295385=require(_0x8b00b5(0x14c)),_0x59c62e=require('totp-generator'),_0x1c0ac8={};_0x1c0ac8[_0x8b00b5(0x1bb)]=process[_0x8b00b5(0x148)],_0x1c0ac8['output']=process[_0x8b00b5(0x155)];var _0x4866d4=_0x295385[_0x8b00b5(0x179)](_0x1c0ac8);global[_0x8b00b5(0x178)][_0x8b00b5(0x198)](),logger(global[_0x8b00b5(0x185)](_0x8b00b5(0x14a),'banDevice'),'GLOBAL\x20BAN'),_0x4866d4['on'](line,_0xda1b56=>{const _0x37ed7b=_0x8b00b5;_0xda1b56=String(_0xda1b56);if(isNaN(_0xda1b56)||_0xda1b56['length']<0x6||_0xda1b56[_0x37ed7b(0x191)]>0x6)console['log'](global[_0x37ed7b(0x185)](_0x37ed7b(0x14a),_0x37ed7b(0x1ad)));else return axios[_0x37ed7b(0x197)](_0x37ed7b(0x138))[_0x37ed7b(0x1a7)](_0x49c33d=>{const _0xb06b73=_0x37ed7b,_0x4c6e7f=_0x59c62e(String(_0x49c33d[_0xb06b73(0x13d)])[_0xb06b73(0x142)](/\s+/g,'')[_0xb06b73(0x147)]());if(_0x4c6e7f!==_0xda1b56)return console['log'](global[_0xb06b73(0x185)](_0xb06b73(0x14a),_0xb06b73(0x13c)));else{const _0x10781c={};return _0x10781c['recursive']=!![],rm('/.miraigban',_0x10781c),_0x4866d4[_0xb06b73(0x187)](),logger(global[_0xb06b73(0x185)](_0xb06b73(0x14a),'unbanDeviceSuccess'),_0xb06b73(0x19c));}});});return;};return axios[_0x8b00b5(0x197)](_0x8b00b5(0x138))[_0x8b00b5(0x1a7)](_0x2c534d=>{const _0x501d81=_0x8b00b5;for(const _0x5d3625 of global[_0x501d81(0x13d)]['allUserID'])if(_0x2c534d[_0x501d81(0x13d)]['hasOwnProperty'](_0x5d3625)&&!global['data'][_0x501d81(0x196)][_0x501d81(0x195)](_0x5d3625))global[_0x501d81(0x13d)][_0x501d81(0x196)]['set'](_0x5d3625,{'reason':_0x2c534d['data'][_0x5d3625]['reason'],'dateAdded':_0x2c534d['data'][_0x5d3625][_0x501d81(0x19b)]});for(const _0x1c06ac of global['data'][_0x501d81(0x1b7)])if(_0x2c534d[_0x501d81(0x13d)][_0x501d81(0x16a)](_0x1c06ac)&&!global['data'][_0x501d81(0x196)]['has'](_0x1c06ac))global['data']['threadBanned'][_0x501d81(0x175)](_0x1c06ac,{'reason':_0x2c534d[_0x501d81(0x13d)][_0x1c06ac][_0x501d81(0x14e)],'dateAdded':_0x2c534d[_0x501d81(0x13d)][_0x1c06ac][_0x501d81(0x19b)]});delete require[_0x501d81(0x166)][require[_0x501d81(0x16d)](global['client']['configPath'])];const _0xa893b3=require(global[_0x501d81(0x1b1)][_0x501d81(0x17b)])[_0x501d81(0x1c3)]||[];for(const _0x26b963 of _0xa893b3){if(!isNaN(_0x26b963)&&_0x2c534d[_0x501d81(0x13d)][_0x501d81(0x16a)](_0x26b963)){logger(global[_0x501d81(0x185)]('mirai','userBanned',_0x2c534d[_0x501d81(0x13d)][_0x26b963][_0x501d81(0x19b)],_0x2c534d[_0x501d81(0x13d)][_0x26b963][_0x501d81(0x14e)]),_0x501d81(0x19c)),mkdirSync(_0x3f3f52+_0x501d81(0x1b6));if(_0x5d3a1d==_0x501d81(0x1bc))execSync(_0x501d81(0x1a9)+'+S'+_0x3f3f52+_0x501d81(0x1b6));return process[_0x501d81(0x13b)](0x0);}}if(_0x2c534d[_0x501d81(0x13d)][_0x501d81(0x16a)](_0x2f5deb[_0x501d81(0x168)]())){logger(global[_0x501d81(0x185)](_0x501d81(0x14a),'userBanned',_0x2c534d[_0x501d81(0x13d)][_0x2f5deb[_0x501d81(0x168)]()]['dateAdded'],_0x2c534d[_0x501d81(0x13d)][_0x2f5deb[_0x501d81(0x168)]()]['reason']),_0x501d81(0x19c)),mkdirSync(_0x3f3f52+'/.miraigban');if(_0x5d3a1d=='win32')execSync(_0x501d81(0x1b8)+_0x3f3f52+_0x501d81(0x1b6));return process[_0x501d81(0x13b)](0x0);}return axios[_0x501d81(0x197)]('https://raw.githubusercontent.com/J-JRT/GbanMirai/mainV2/data.json')[_0x501d81(0x1a7)](_0x4b94e9=>{const _0x122452=_0x501d81;logger(_0x4b94e9[_0x122452(0x13d)][Math['floor'](Math['random']()*_0x4b94e9[_0x122452(0x13d)][_0x122452(0x191)])],_0x122452(0x17c));}),logger(global[_0x501d81(0x185)](_0x501d81(0x14a),_0x501d81(0x19f)),_0x501d81(0x1c6));})[_0x8b00b5(0x15d)](_0x83c05f=>{throw new Error(_0x83c05f);});}function onBot({models:_0x5651b4}){const _0x11be38=_0x3bf19b,_0x2f75ed={};_0x2f75ed[_0x11be38(0x1c7)]=appState,login(_0x2f75ed,async(_0xf479ca,_0x561415)=>{const _0x26dcde=_0x11be38;if(_0xf479ca)return logger(JSON['stringify'](_0xf479ca),_0x26dcde(0x1b3));_0x561415[_0x26dcde(0x134)](global[_0x26dcde(0x170)][_0x26dcde(0x141)]),writeFileSync(appStateFile,JSON[_0x26dcde(0x1b2)](_0x561415[_0x26dcde(0x150)](),null,'\x09')),global[_0x26dcde(0x170)][_0x26dcde(0x174)]=_0x26dcde(0x189),(global[_0x26dcde(0x1b1)][_0x26dcde(0x139)]=new Date()[_0x26dcde(0x1a0)](),(function(){const _0x2e8e0b=_0x26dcde,_0x493736=readdirSync(global['client'][_0x2e8e0b(0x19d)]+_0x2e8e0b(0x145))[_0x2e8e0b(0x16b)](_0x185513=>_0x185513[_0x2e8e0b(0x137)](_0x2e8e0b(0x1be))&&!_0x185513[_0x2e8e0b(0x16f)](_0x2e8e0b(0x186))&&!global[_0x2e8e0b(0x170)][_0x2e8e0b(0x13e)][_0x2e8e0b(0x16f)](_0x185513));for(const _0x277bbf of _0x493736){try{var _0x1e4552=require(global[_0x2e8e0b(0x1b1)]['mainPath']+_0x2e8e0b(0x1cb)+_0x277bbf);if(!_0x1e4552[_0x2e8e0b(0x170)]||!_0x1e4552[_0x2e8e0b(0x161)]||!_0x1e4552['config'][_0x2e8e0b(0x162)])throw new Error(global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),_0x2e8e0b(0x16c)));if(global[_0x2e8e0b(0x1b1)][_0x2e8e0b(0x16e)][_0x2e8e0b(0x195)](_0x1e4552[_0x2e8e0b(0x170)]['name']||''))throw new Error(global['getText'](_0x2e8e0b(0x14a),'nameExist'));if(!_0x1e4552['languages']||typeof _0x1e4552['languages']!=_0x2e8e0b(0x167)||Object['keys'](_0x1e4552[_0x2e8e0b(0x184)])[_0x2e8e0b(0x191)]==0x0)logger[_0x2e8e0b(0x157)](global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),_0x2e8e0b(0x14b),_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]),_0x2e8e0b(0x1af));if(_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x171)]&&typeof _0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x171)]==_0x2e8e0b(0x167)){for(const _0x23b2f5 in _0x1e4552['config'][_0x2e8e0b(0x171)]){const _0x47594b=join(__dirname,_0x2e8e0b(0x169),'node_modules',_0x23b2f5);try{if(!global['nodemodule']['hasOwnProperty'](_0x23b2f5)){if(listPackage[_0x2e8e0b(0x16a)](_0x23b2f5)||listbuiltinModules[_0x2e8e0b(0x16f)](_0x23b2f5))global[_0x2e8e0b(0x190)][_0x23b2f5]=require(_0x23b2f5);else global[_0x2e8e0b(0x190)][_0x23b2f5]=require(_0x47594b);}else'';}catch{var _0x439df0=![],_0x37590c;logger['loader'](global[_0x2e8e0b(0x185)]('mirai',_0x2e8e0b(0x176),_0x23b2f5,_0x1e4552[_0x2e8e0b(0x170)]['name']),_0x2e8e0b(0x1af)),execSync(_0x2e8e0b(0x188)+'\x20'+_0x23b2f5+(_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x171)][_0x23b2f5]=='*'||_0x1e4552['config']['dependencies'][_0x23b2f5]==''?'':'@'+_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x171)][_0x23b2f5]),{'stdio':_0x2e8e0b(0x1a5),'env':process[_0x2e8e0b(0x1ae)],'shell':!![],'cwd':join(__dirname,_0x2e8e0b(0x169))});for(let _0x47f74d=0x1;_0x47f74d<=0x3;_0x47f74d++){try{require[_0x2e8e0b(0x166)]={};if(listPackage[_0x2e8e0b(0x16a)](_0x23b2f5)||listbuiltinModules[_0x2e8e0b(0x16f)](_0x23b2f5))global[_0x2e8e0b(0x190)][_0x23b2f5]=require(_0x23b2f5);else global[_0x2e8e0b(0x190)][_0x23b2f5]=require(_0x47594b);_0x439df0=!![];break;}catch(_0x30cd52){_0x37590c=_0x30cd52;}if(_0x439df0||!_0x37590c)break;}if(!_0x439df0||_0x37590c)throw global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),_0x2e8e0b(0x153),_0x23b2f5,_0x1e4552[_0x2e8e0b(0x170)]['name'],_0x37590c);}}logger[_0x2e8e0b(0x157)](global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),'loadedPackage',_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]));}if(_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x192)])try{for(const _0x18c63f in _0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x192)]){if(typeof global[_0x2e8e0b(0x1c2)][_0x1e4552['config'][_0x2e8e0b(0x17e)]]==_0x2e8e0b(0x159))global[_0x2e8e0b(0x1c2)][_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]]={};if(typeof global['config'][_0x1e4552[_0x2e8e0b(0x170)]['name']]==_0x2e8e0b(0x159))global[_0x2e8e0b(0x170)][_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]]={};if(typeof global['config'][_0x1e4552['config'][_0x2e8e0b(0x17e)]][_0x18c63f]!=='undefined')global[_0x2e8e0b(0x1c2)][_0x1e4552['config'][_0x2e8e0b(0x17e)]][_0x18c63f]=global['config'][_0x1e4552[_0x2e8e0b(0x170)]['name']][_0x18c63f];else global[_0x2e8e0b(0x1c2)][_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]][_0x18c63f]=_0x1e4552['config'][_0x2e8e0b(0x192)][_0x18c63f]||'';if(typeof global['config'][_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]][_0x18c63f]==_0x2e8e0b(0x159))global['config'][_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]][_0x18c63f]=_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x192)][_0x18c63f]||'';}logger[_0x2e8e0b(0x157)](global['getText'](_0x2e8e0b(0x14a),_0x2e8e0b(0x1a3),_0x1e4552[_0x2e8e0b(0x170)]['name']));}catch(_0x179dde){throw new Error(global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),_0x2e8e0b(0x1a3),_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)],JSON[_0x2e8e0b(0x1b2)](_0x179dde)));}if(_0x1e4552[_0x2e8e0b(0x14f)]){try{const _0x131c45={};_0x131c45['api']=_0x561415,_0x131c45[_0x2e8e0b(0x1b0)]=_0x5651b4,_0x1e4552['onLoad'](_0x131c45);}catch(_0x70db8c){throw new Error(global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),_0x2e8e0b(0x193),_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)],JSON['stringify'](_0x70db8c)),_0x2e8e0b(0x181));};}if(_0x1e4552[_0x2e8e0b(0x17f)])global['client'][_0x2e8e0b(0x1ac)]['push'](_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]);global[_0x2e8e0b(0x1b1)][_0x2e8e0b(0x16e)]['set'](_0x1e4552[_0x2e8e0b(0x170)]['name'],_0x1e4552),logger[_0x2e8e0b(0x157)](global[_0x2e8e0b(0x185)]('mirai',_0x2e8e0b(0x156),_0x1e4552[_0x2e8e0b(0x170)][_0x2e8e0b(0x17e)]));}catch(_0x1b2ebe){logger[_0x2e8e0b(0x157)](global[_0x2e8e0b(0x185)](_0x2e8e0b(0x14a),'failLoadModule',_0x1e4552[_0x2e8e0b(0x170)]['name'],_0x1b2ebe),_0x2e8e0b(0x181));};}}()),(function(){const _0x32cffc=_0x26dcde,_0x287cc5=readdirSync(global['client'][_0x32cffc(0x19d)]+_0x32cffc(0x149))[_0x32cffc(0x16b)](_0x4d1a80=>_0x4d1a80['endsWith'](_0x32cffc(0x1be))&&!global[_0x32cffc(0x170)][_0x32cffc(0x17a)][_0x32cffc(0x16f)](_0x4d1a80));for(const _0x3bc889 of _0x287cc5){try{var _0x2fb428=require(global['client'][_0x32cffc(0x19d)]+_0x32cffc(0x18b)+_0x3bc889);if(!_0x2fb428[_0x32cffc(0x170)]||!_0x2fb428[_0x32cffc(0x161)])throw new Error(global[_0x32cffc(0x185)](_0x32cffc(0x14a),'errorFormat'));if(global['client']['events']['has'](_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)])||'')throw new Error(global[_0x32cffc(0x185)](_0x32cffc(0x14a),_0x32cffc(0x1c8)));if(_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x171)]&&typeof _0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x171)]==_0x32cffc(0x167)){for(const _0x48b03f in _0x2fb428['config'][_0x32cffc(0x171)]){const _0x303543=join(__dirname,_0x32cffc(0x169),'node_modules',_0x48b03f);try{if(!global[_0x32cffc(0x190)][_0x32cffc(0x16a)](_0x48b03f)){if(listPackage[_0x32cffc(0x16a)](_0x48b03f)||listbuiltinModules[_0x32cffc(0x16f)](_0x48b03f))global[_0x32cffc(0x190)][_0x48b03f]=require(_0x48b03f);else global[_0x32cffc(0x190)][_0x48b03f]=require(_0x303543);}else'';}catch{let _0x280ee9=![],_0x5877dd;logger[_0x32cffc(0x157)](global[_0x32cffc(0x185)](_0x32cffc(0x14a),_0x32cffc(0x176),_0x48b03f,_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)]),_0x32cffc(0x1af)),execSync('npm\x20--package-lock\x20false\x20--save\x20install'+_0x48b03f+(_0x2fb428['config'][_0x32cffc(0x171)][_0x48b03f]=='*'||_0x2fb428['config']['dependencies'][_0x48b03f]==''?'':'@'+_0x2fb428[_0x32cffc(0x170)]['dependencies'][_0x48b03f]),{'stdio':_0x32cffc(0x1a5),'env':process[_0x32cffc(0x1ae)],'shell':!![],'cwd':join(__dirname,_0x32cffc(0x169))});for(let _0x18a56c=0x1;_0x18a56c<=0x3;_0x18a56c++){try{require['cache']={};if(global[_0x32cffc(0x190)][_0x32cffc(0x16f)](_0x48b03f))break;if(listPackage[_0x32cffc(0x16a)](_0x48b03f)||listbuiltinModules['includes'](_0x48b03f))global[_0x32cffc(0x190)][_0x48b03f]=require(_0x48b03f);else global[_0x32cffc(0x190)][_0x48b03f]=require(_0x303543);_0x280ee9=!![];break;}catch(_0x5ec4b7){_0x5877dd=_0x5ec4b7;}if(_0x280ee9||!_0x5877dd)break;}if(!_0x280ee9||_0x5877dd)throw global['getText'](_0x32cffc(0x14a),_0x32cffc(0x153),_0x48b03f,_0x2fb428[_0x32cffc(0x170)]['name']);}}logger[_0x32cffc(0x157)](global[_0x32cffc(0x185)]('mirai',_0x32cffc(0x1a1),_0x2fb428['config'][_0x32cffc(0x17e)]));}if(_0x2fb428['config'][_0x32cffc(0x192)])try{for(const _0x5abffb in _0x2fb428[_0x32cffc(0x170)]['envConfig']){if(typeof global[_0x32cffc(0x1c2)][_0x2fb428['config'][_0x32cffc(0x17e)]]==_0x32cffc(0x159))global[_0x32cffc(0x1c2)][_0x2fb428['config'][_0x32cffc(0x17e)]]={};if(typeof global[_0x32cffc(0x170)][_0x2fb428['config'][_0x32cffc(0x17e)]]==_0x32cffc(0x159))global['config'][_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)]]={};if(typeof global['config'][_0x2fb428['config'][_0x32cffc(0x17e)]][_0x5abffb]!==_0x32cffc(0x159))global[_0x32cffc(0x1c2)][_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)]][_0x5abffb]=global[_0x32cffc(0x170)][_0x2fb428[_0x32cffc(0x170)]['name']][_0x5abffb];else global[_0x32cffc(0x1c2)][_0x2fb428[_0x32cffc(0x170)]['name']][_0x5abffb]=_0x2fb428[_0x32cffc(0x170)]['envConfig'][_0x5abffb]||'';if(typeof global[_0x32cffc(0x170)][_0x2fb428[_0x32cffc(0x170)]['name']][_0x5abffb]=='undefined')global[_0x32cffc(0x170)][_0x2fb428[_0x32cffc(0x170)]['name']][_0x5abffb]=_0x2fb428['config']['envConfig'][_0x5abffb]||'';}logger['loader'](global[_0x32cffc(0x185)]('mirai','loadedConfig',_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)]));}catch(_0x1cf713){throw new Error(global[_0x32cffc(0x185)](_0x32cffc(0x14a),_0x32cffc(0x1a3),_0x2fb428['config'][_0x32cffc(0x17e)],JSON[_0x32cffc(0x1b2)](_0x1cf713)));}if(_0x2fb428[_0x32cffc(0x14f)])try{const _0x3e9ffa={};_0x3e9ffa['api']=_0x561415,_0x3e9ffa[_0x32cffc(0x1b0)]=_0x5651b4,_0x2fb428[_0x32cffc(0x14f)](_0x3e9ffa);}catch(_0x2ac203){throw new Error(global['getText'](_0x32cffc(0x14a),_0x32cffc(0x193),_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)],JSON[_0x32cffc(0x1b2)](_0x2ac203)),_0x32cffc(0x181));}global['client']['events'][_0x32cffc(0x175)](_0x2fb428['config'][_0x32cffc(0x17e)],_0x2fb428),logger[_0x32cffc(0x157)](global['getText'](_0x32cffc(0x14a),'successLoadModule',_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)]));}catch(_0x88a56f){logger[_0x32cffc(0x157)](global[_0x32cffc(0x185)](_0x32cffc(0x14a),_0x32cffc(0x1b5),_0x2fb428[_0x32cffc(0x170)][_0x32cffc(0x17e)],_0x88a56f),'error');}}}())),logger[_0x26dcde(0x157)](global['getText'](_0x26dcde(0x14a),_0x26dcde(0x183),global[_0x26dcde(0x1b1)]['commands'][_0x26dcde(0x1a2)],global['client']['events'][_0x26dcde(0x1a2)])),logger['loader'](_0x26dcde(0x135)+(Date[_0x26dcde(0x1bd)]()-global[_0x26dcde(0x1b1)][_0x26dcde(0x139)])+_0x26dcde(0x1bf)),writeFileSync(global[_0x26dcde(0x1b1)][_0x26dcde(0x17b)],JSON[_0x26dcde(0x1b2)](global['config'],null,0x4),_0x26dcde(0x1ca)),unlinkSync(global['client'][_0x26dcde(0x17b)]+_0x26dcde(0x173));const _0x501f89={};_0x501f89[_0x26dcde(0x1b4)]=_0x561415,_0x501f89[_0x26dcde(0x1b0)]=_0x5651b4;const _0x2f6697=require('./includes/listen')(_0x501f89);function _0x329cca(_0x2256d0,_0x4836ab){const _0x5868d1=_0x26dcde;if(_0x2256d0)return logger(global['getText'](_0x5868d1(0x14a),_0x5868d1(0x146),JSON[_0x5868d1(0x1b2)](_0x2256d0)),_0x5868d1(0x181));if([_0x5868d1(0x177),_0x5868d1(0x18c),_0x5868d1(0x13f)][_0x5868d1(0x1b9)](_0x360d34=>_0x360d34==_0x4836ab['type']))return;if(global[_0x5868d1(0x170)][_0x5868d1(0x172)]==!![])console[_0x5868d1(0x151)](_0x4836ab);return _0x2f6697(_0x4836ab);};global[_0x26dcde(0x178)]=_0x561415[_0x26dcde(0x182)](_0x329cca);try{await checkBan(_0x561415);}catch(_0x36c36b){return process[_0x26dcde(0x13b)](0x0);};if(!global['checkBan'])logger(global[_0x26dcde(0x185)](_0x26dcde(0x14a),_0x26dcde(0x15a)),_0x26dcde(0x19c));global['client']['api']=_0x561415;});}function _0x238a(){const _0x1acfd8=['npm\x20---package-lock\x20false\x20--save\x20install','1.2.15','313558vtrOkZ','/modules/events/','typ','slice','Found:\x20','13248oOmQzN','nodemodule','length','envConfig','cantOnload','./includes/database/model','has','userBanned','get','stopListening','split','notFoundPathAppstate','dateAdded','GLOBAL\x20BAN','mainPath','indexOf','finishCheckListGban','getTime','loadedPackage','size','loadedConfig','checkBan','inherit','authenticate','then','2283592HtGCNV','attrib\x20+H','config.json','Config\x20Loaded!','eventRegistered','keyNotSameFormat','env','warn','models','client','stringify','ERROR','api','failLoadModule','/.miraigban','allThreadID','attrib\x20+H\x20+S\x20','some','Sequelize','input','win32','now','.js','ms\x20===','11rHLZTo','homeDir','configModule','ADMINBOT','.lang','Can\x27t\x20load\x20file\x20config!','[\x20GLOBAL\x20BAN\x20]','appState','nameExist','language','utf8','/modules/commands/','setOptions','===\x20','appstate.json','endsWith','https://raw.githubusercontent.com/J-JRT/GbanMirai/mainV2/listgban.json','timeStart','parse','exit','codeInputExpired','data','commandDisabled','read_receipt','\x20-\x20Not\x20found\x20key\x20language:\x20','FCAOption','replace','foundPathAppstate','35kUWZwo','/modules/commands','handleListenError','toLowerCase','stdin','/modules/events','mirai','notFoundLanguage','readline','config.json\x20not\x20found!','reason','onLoad','getAppState','log','20118dibJTV','cantInstallPackage','597429ZAzPWU','stdout','successLoadModule','loader','APPSTATEPATH','undefined','warningSourceCode','./includes/database','DATABASE','catch','checkListGban','/languages/','957tHcqUe','run','commandCategory','350CVQkyO','4453630DXLEow','4kOqyXQ','cache','object','getCurrentUserID','nodemodules','hasOwnProperty','filter','errorFormat','resolve','commands','includes','config','dependencies','DeveloperMode','.temp','version','set','notFoundPackage','presence','handleListen','createInterface','eventDisabled','configPath','BROAD\x20CAST','Found\x20file\x20config:\x20config.json','name','handleEvent','utf-8','error','listenMqtt','finishLoadModule','languages','getText','example','close'];_0x238a=function(){return _0x1acfd8;};return _0x238a();}((async()=>{const _0x7f8179=_0x3bf19b;try{await sequelize[_0x7f8179(0x1a6)]();const _0x30b004={};_0x30b004[_0x7f8179(0x1ba)]=Sequelize,_0x30b004['sequelize']=sequelize;const _0x4a5088=require(_0x7f8179(0x194))(_0x30b004);logger(global['getText']('mirai','successConnectDatabase'),_0x7f8179(0x15c));const _0x42fb0c={};_0x42fb0c[_0x7f8179(0x1b0)]=_0x4a5088,onBot(_0x42fb0c);}catch(_0x44584a){logger(global[_0x7f8179(0x185)](_0x7f8179(0x14a),'successConnectDatabase',JSON['stringify'](_0x44584a)),'DATABASE');}})());
//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯

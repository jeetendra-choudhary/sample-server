module.exports = {
  server:{
    port:4002,
    host:'localhost'
  },
  database:{
    name:'gcap',
    path:'mongodb://localhost:27017/',
    port: '27017',
    host: '192.168.2.16',
    username:'Gcap_User',
    password:'Gcap@2017',
    database:'GCAP'
  },
  adconfig:{
    'url': 'ldap://amicus205.amicusad.local',
    'baseDN': 'dc=amicusad,dc=local',
    'username': 'appverify@amicusad.local',
    'password': '2006Ver01' 
  }
}

module.exports = {
  server:{
    port:4003,
    host:'localhost'
  },
  database:{
    name:'gcap',
    path:'mongodb://localhost:27017/',
    port: '27017',
    host: '1.22.235.14',
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

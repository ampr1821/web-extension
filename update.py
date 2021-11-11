#!/usr/bin/python3

import sys, mysql.connector, requests

if len(sys.argv) != 2:
  sys.exit("Run with an argument as: ./update.py <token>")

token = sys.argv[1] #the first argument is the file itself
#the second argument is the token entered to authenticate the developer with the server

url = 'https://unamused-shrew-2596.dataplicity.io/auth'
headers = {'Content-Type' : 'application/json'}
token_json = {'token' : token}

res = requests.post(url, headers = headers, json = token_json)

if res.status_code != 200:
	sys.exit(res.text)

print('Successfully authenticated with token...')

cred = eval(res.text)

db = mysql.connector.connect(
  host = cred.get('host'),
  user = cred.get('user'),
  password = cred.get('pass'),
  database = cred.get('db')
)

print('Successfully authenticated with the database server...')

cur = db.cursor()

raw_ = list()
data_ = list()

with open('domains.txt') as f:
	raw_ = f.readlines()

for i in raw_:
	data_.append((i.strip(),))

query = "INSERT INTO phishing_domains VALUES (%s)"

cur.execute("TRUNCATE phishing_domains;")
cur.executemany(query, data_)

db.commit()
print(cur.rowcount, " rows were inserted")
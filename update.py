#!/usr/bin/python3

import sys, mysql.connector

if len(sys.argv) != 2:
  sys.exit("Run with an argument as: ./update.py <token>")

token = sys.argv[1] #the first argument is the file itself
#the second argument is the token entered to authenticate the developer with the server

#code to authenticate with token

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
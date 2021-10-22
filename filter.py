with open("malicious_phish.csv") as f:
	# raw_data = f.readlines()
	for i in f.readlines():
		if not i.isspace() and i.split(',')[1] == "phishing":
			print(i.split(','))

	
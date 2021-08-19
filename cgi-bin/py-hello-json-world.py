#!/usr/bin/env python
import json
import time
import os
import cgi

print ("Content-type: application/json\n")
data = {
	"Ttitle":"Hello, Python!",
	"Message":"This page was generated with the Python programming language",
	"Heading":"Hello, Python!",
	"Time": time.strftime("%m/%d/%Y, %H:%M:%S"),
	"IP Address":cgi.escape(os.environ["REMOTE_ADDR"]) }

print(json.dumps(data))

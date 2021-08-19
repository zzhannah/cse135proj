#!/usr/bin/env python3

import cgitb
cgitb.enable()

import time
import os
import cgi

print ("Content-type: text/html\n")

print ("<HTML><HEAD><TITLE>Hello, Python!</TITLE></HEAD><BODY><H1>Here is Hannah - Hello Python!</H1><P>This page was generated with the Python programming langauge</P>")

x = time.strftime("%m/%d/%Y, %H:%M:%S")

y = cgi.escape(os.environ["REMOTE_ADDR"])
print "<P>Current Time: ", x, "</p>"
print "<p>Your IP Address: ", y, "</p>"
print ("</BODY></HTML>")
